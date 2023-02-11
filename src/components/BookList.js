import BookShow from "./BookShow";
import useBooksContext from '../hooks/UseBooksContext';

const BookList = () => {

    const { books } = useBooksContext();

    const renderBooks = books.map((book) => {
        return <BookShow 
            book={book} 
            key={book.id} 
        />
    });

    return (
        <div className="book-list">
            {renderBooks}
        </div>
    ); 
}

export default BookList; 