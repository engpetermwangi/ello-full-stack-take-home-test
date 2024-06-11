import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  useTheme,
} from "@mui/material";
import { useBooks } from "../hooks/Books";
import { Book } from "../types/Book";

export const BookCard = ({ book }: { book: Book }) => {
  const theme = useTheme();
  const { removeBook } = useBooks();
  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined">
      <CardMedia
        component="img"
        alt={`Book cover for ${book.title}`}
        height="140"
        image={book.coverPhotoURL}
      />
      <CardContent>
        <Chip
          label={`LEVEL ${book.readingLevel}`}
          sx={{
            fontWeight: 500,
            backgroundColor: theme.palette.primary.light,
          }}
        />
        <Typography gutterBottom variant="h5" component="div" mt={1}>
          {book.title}
        </Typography>
        <Typography color="text.secondary">By - {book.author}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "end" }}>
        <Button
          size="small"
          color="warning"
          sx={{
            fontWeight: 500,
            px: 2,
            py: 1,
          }}
          onClick={() => removeBook(book)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};
