import { createContext, useCallback, useState } from "react";
import axios from 'axios';

const BookContext = createContext();

const Provider = ({children}) => {

    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(
        async () => {
            const response = await axios.get('http://localhost:3001/books');
            setBooks(response.data);
        }, 
        []
    );

    const createBook = async (title) => { 
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    };

    const editBook = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
           title: newTitle,
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, ...response.data};
            }
            return book;
        });

       setBooks(updatedBooks);
    };

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return id !== book.id;
        });

        setBooks(updatedBooks);
    };  

    const valuesToShare =  {
        books,
        createBook,
        editBook,
        deleteBook,
        fetchBooks,
    }

    return(
        <BookContext.Provider value={valuesToShare}>
            {children}
        </BookContext.Provider>
    )
};

export {Provider};
export default BookContext;