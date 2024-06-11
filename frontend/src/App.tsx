import { createContext, useState } from "react";
import { BookSearch } from "./components/BookSearch";
import { Container } from "./components/Container";
import { Book } from "./types/Book";
import { BooksContextInterface } from "./types/BooksContextInterface";
import { BookList } from "./components/BookList";

export const BooksContext = createContext<BooksContextInterface>({
  selectedBooks: [],
  addBook: () => {},
  removeBook: () => {},
});

const App = () => {
  const [selectedBooks, setSelectedBooks] = useState<Book[]>([]);

  const addBook = (book: Book) => setSelectedBooks([...selectedBooks, book]);
  const removeBook = (book: Book) =>
    setSelectedBooks(selectedBooks.filter((b) => b !== book));

  return (
    <BooksContext.Provider value={{ selectedBooks, addBook, removeBook }}>
      <Container>
        <BookSearch />
        <BookList />
      </Container>
    </BooksContext.Provider>
  );
};

export default App;
