import { Component, OnInit } from '@angular/core';
// import { BookService } from '../../services/book.service';
// import { Book } from '../../models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
//   books: Book[] = [];             // Original list of books from backend
//   filteredBooks: Book[] = [];     // Books filtered by search
//   searchText: string = '';        // User input for searching

//   constructor(private bookService: BookService) {}

//   ngOnInit(): void {
//     this.bookService.getBooks().subscribe(data => {
//       this.books = data;
//       this.filteredBooks = data;
//     });
//   }

//   search(): void {
//     const text = this.searchText.toLowerCase().trim();
//     this.filteredBooks = this.books.filter(book =>
//       book.title.toLowerCase().includes(text) ||
//       book.author.toLowerCase().includes(text)
//     );
//   }
}
