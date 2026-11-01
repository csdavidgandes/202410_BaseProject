import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';
import { BookDetail } from './book-detail/bookDetail';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  private apiUrl: string = environment.baseUrl + 'books';
  
  getBooks(): Observable<BookDetail[]> {
   return this.http.get<BookDetail[]>(this.apiUrl);
 }

}
