import { useBooks } from "../hooks/Books";
import { Alert } from "./Alert";
import { BookCard } from "./BookCard";
import { BookcardsContainer } from "./BookCardsContainer";

export const BookList = () => {
  const { selectedBooks } = useBooks();

  if (selectedBooks.length === 0)
    return (
      <Alert
        message="Select books from the input above to add to the reading list"
        severity="info"
      />
    );
  return (
    <BookcardsContainer>
      {selectedBooks.map((book) => (
        <BookCard book={book} key={book.title + book.author} />
      ))}
    </BookcardsContainer>
  );
};
