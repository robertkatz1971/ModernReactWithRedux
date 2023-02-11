import { useContext } from "react";
import BookContext from "../context/books";

const useBooksContext = () => {
    return useContext(BookContext);
}

export default useBooksContext;