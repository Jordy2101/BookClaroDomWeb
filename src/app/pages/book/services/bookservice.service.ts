import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoint } from 'src/environments/environment';
import { Book } from '../Models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  headers = new HttpHeaders()
    .set('ApiKey', 'CAj/MmgSiBsmrO0P5wSGM5HAQ39ulpF7FcwwHMaUGyY');
  constructor(private http: HttpClient) { }

  getPage(filter: any, page: number) {
    return this.http.get<any>(endpoint.book + `GetPaged?PageNumber=${page}&pageSize=10&keyword=${filter.keyword}`, { responseType: "json", headers: this.headers });
  }

  getAllBook() {
    return this.http.get<any>(endpoint.book, { responseType: "json", headers: this.headers });
  }

  getBookById(id: number) {
    return this.http.get<any>(endpoint.book + `GetByOne/${id}`, { responseType: "json", headers: this.headers });
  }

  createBook(item: Book) {
    return this.http.post<any>(endpoint.book + 'Create', item, { responseType: "json", headers: this.headers });
  }

  updateBook(id: number) {
    return this.http.get<any>(endpoint.book + `Update/${id}`, { responseType: "json", headers: this.headers });
  }

  deleteBook(id: number) {
    return this.http.delete<any>(endpoint.book + `Delete/${id}`, { responseType: "json", headers: this.headers });
  }
}
