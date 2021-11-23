import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/modules/shared/services/alert.service';
import { Book } from '../Models/book.model';
import { BookserviceService } from '../services/bookservice.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookdetailComponent implements OnInit {

  id: number;
  item: Book = new Book();

  constructor(private modalService: NgbModal,public activeModal: NgbActiveModal, private spinner: NgxSpinnerService,
    private service: BookserviceService,
    private alertService: AlertService) { }


  ngOnInit(): void {
    this.getBookByid();
  }


  closeModal() {
    this.activeModal.close();
  }

  getBookByid() {
     this.spinner.show();
    this.service.getBookById(this.id).subscribe(res => {
      this.item = res.result;
    })
    this.spinner.hide();
  }
}
