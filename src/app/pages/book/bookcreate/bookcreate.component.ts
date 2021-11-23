import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/modules/shared/services/alert.service';
import { Book } from '../Models/book.model';
import { BookserviceService } from '../services/bookservice.service';

@Component({
  selector: 'app-bookcreate',
  templateUrl: './bookcreate.component.html',
  styleUrls: ['./bookcreate.component.scss']
})
export class BookcreateComponent implements OnInit {

  item: Book = new Book();
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: NgbModal,public activeModal: NgbActiveModal, private spinner: NgxSpinnerService,
    private service: BookserviceService,
    private alertService: AlertService) { }


  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close();
  }


  save() {
    debugger
    if (
      !this.item.description ||
      !this.item.publishDate
    ) {
      return this.alertService.info(
        'Todos los campos son obligatorios',
        'Informacion'
      );
    }
    this.spinner.show();
    this.service.createBook(this.item).subscribe(
      (resp) => {
        const tk = () => this.notifyParent.emit();
        setTimeout(tk, 1500);
        this.spinner.hide();
        this.alertService.success('Libro creado con exito','Creado');
        this.activeModal.close();
      },
      (error) => {
        this.spinner.hide();
        this.alertService.warning(error.error);
        this.activeModal.close();
      }
    );
  }
}
