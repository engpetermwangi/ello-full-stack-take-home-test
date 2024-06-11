import { Book } from "./Book";

export interface BooksContextInterface {
  selectedBooks: Book[];
  addBook: (book: Book) => void;
  removeBook: (book: Book) => void;
}
