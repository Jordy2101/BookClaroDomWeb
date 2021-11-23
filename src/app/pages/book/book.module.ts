import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooklistComponent } from './booklist/booklist.component';
import { BookcreateComponent } from './bookcreate/bookcreate.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BookdetailComponent } from './bookdetail/bookdetail.component';



@NgModule({
  declarations: [
    BooklistComponent,
    BookcreateComponent,
    BookdetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    RouterModule.forChild([
      {
        path: '',
        component: BooklistComponent,
      },
    ]),
  ]
})
export class BookModule { }
