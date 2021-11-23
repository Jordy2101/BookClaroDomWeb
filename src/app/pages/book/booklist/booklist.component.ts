import { BookdetailComponent } from './../bookdetail/bookdetail.component';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/modules/shared/services/alert.service';
import Swal from 'sweetalert2';
import { Book } from '../Models/book.model';
import { BookserviceService } from '../services/bookservice.service';
import { BookcreateComponent } from '../bookcreate/bookcreate.component';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {
  @Input() filter: any = {};
  page: number = 1;
  items: Book[];
  config: any;
  constructor(private modalService: NgbModal, private spinner: NgxSpinnerService,
    private service: BookserviceService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.getAll(false);
  }

  getAll(resetPage: boolean) {
    this.spinner.show();
    if (resetPage) this.page = 1;
    if (!this.filter.keyword) this.filter.keyword = '';
    this.service.getPage(this.filter, this.page).subscribe((object) => {
      this.items = object.result.data;
      this.config = {
        itemsPerPage: object.result.pageSize,
        currentPage: object.result.currentPage,
        totalItems: object.result.totalCount
      };
      this.spinner.hide();
    }, err => {
      this.alertService.info(err.error)
      this.spinner.hide();
    });
  }

  pageChanged(event: any) {
    this.page = event;
    this.getAll(false);
  }


  addBook() {
    var modal = this.modalService.open(BookcreateComponent);
    modal.componentInstance.notifyParent.subscribe(() => {
      this.getAll(false);
    });
  }


  viewDetail(id: number) {
    var modal = this.modalService.open(BookdetailComponent);
    modal.componentInstance.id = id;
  }

  deleteCompany(id: number) {
    Swal.fire({
      title: '¿Está seguro?',
      text: '¿Está seguro que desea Borrar el libro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinner.show();
        this.service.deleteBook(id).subscribe((resp) => {
          this.spinner.hide();
          this.alertService.success('Libro borrado con exito');
          setTimeout(() => {
            this.getAll(false);
          }, 1500);
        });
      }
    });
  }


  updateBook(id: number) {
    Swal.fire({
      title: '¿Está seguro?',
      text: '¿Está seguro que desea actualizar el libro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinner.show();
        this.service.deleteBook(id).subscribe((resp) => {
          this.spinner.hide();
          this.alertService.success('Libro actualizado con exito');
          setTimeout(() => {
            this.getAll(false);
          }, 1500);
        });
      }
    });
  }
}
