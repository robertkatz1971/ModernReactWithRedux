import BookShow from "./BookShow";

const BookList = ({books, onDelete, onEdit}) => {
    const renderBooks = books.map((book) => {
        return <BookShow 
            book={book} 
            onDelete={onDelete} 
            onEdit={onEdit} 
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