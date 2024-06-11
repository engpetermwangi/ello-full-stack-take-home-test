import { useQuery } from "@apollo/client";
import {
  Autocomplete,
  AutocompleteChangeReason,
  FormLabel,
  Skeleton,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useBooks } from "../hooks/Books";
import { GETBOOKS } from "../queries/GetBooks";
import { Book } from "../types/Book";
import { Alert } from "./Alert";

export const BookSearch = () => {
  const { addBook } = useBooks();
  const { loading, error, data } = useQuery<{ books: Book[] }>(GETBOOKS);
  const [bookOptions, setBookOptions] = useState<Book[]>([]);

  useEffect(() => {
    setBookOptions(data?.books || []);
  }, [data]);

  const handleBookSelection = (
    _: React.SyntheticEvent,
    books: Book[],
    reason: AutocompleteChangeReason
  ) => {
    if (reason === "selectOption") {
      for (const book of books) {
        addBook(book);
      }
    }
  };

  if (error) return <Alert message={error.message} severity="error" />;

  if (loading) return <Skeleton height={120} />;

  return (
    <Stack gap={1}>
      <FormLabel htmlFor="book-selector">
        Select books to add to reading list
      </FormLabel>
      <Autocomplete
        id="book-selector"
        options={bookOptions}
        renderInput={(params) => <TextField {...params} label="Books" />}
        getOptionLabel={(book: Book) => `${book.title} by ${book.author}`}
        onChange={handleBookSelection}
        isOptionEqualToValue={(option, value) =>
          option.title + option.author === value.title + value.author
        }
        filterSelectedOptions
        multiple
      />
    </Stack>
  );
};
