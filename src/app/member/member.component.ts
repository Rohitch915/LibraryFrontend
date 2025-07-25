// library.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'member',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  books: any[] = [];
  searchTerm: string = '';
  filteredBooks: any[] = []; 
  

  constructor(private http: HttpClient) {
    this.fetchBooks();
  }

  fetchBooks() {
    this.http.get('http://localhost:4321/books/get-books').subscribe(data => {
      
      this.books = data as any[];
    this.filteredBooks = this.books;
    });
  }

  filterBooks() {
    const term = this.searchTerm.toLowerCase();
    console.log(term);
    
    this.filteredBooks = this.books.filter(book =>
      book.bookName.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term) ||
      book.genre.toLowerCase().includes(term)
    );
  }

  onSearch() {
    this.http.get(`http://localhost:4321/books/search?term=${this.searchTerm}`)
      .subscribe(data => {
        this.books = data as any[];
      });
  }

  borrowBook(bookId: number) {
    this.http.post(`http://localhost:4321/books/borrow/${bookId}`, {})
      .subscribe(() => alert('Book borrowed successfully!'));
  }
}
