import { useContext } from "react";
import { BooksContext } from "../App";

export const useBooks = () => useContext(BooksContext);
