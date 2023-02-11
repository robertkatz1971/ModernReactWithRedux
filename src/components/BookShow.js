import BookEdit from './BookEdit';
import { useState } from 'react';
import useBooksContext from '../hooks/UseBooksContext';

const BookShow = ({book}) => {

    const [showEdit, setShowEdit] = useState(false);
    const {deleteBook} = useBooksContext();

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleDeleteClick = () => {
        deleteBook(book.id);
    };

    const handleSubmit = () => {
        setShowEdit(false); 
    };


    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />;
    }
    
    return (
        <div className='book-show'>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt={book.title}></img>
            <div>{content}</div>
            <div className='actions'>
                <button className='edit' onClick={handleEditClick}></button>
                <button className='delete' onClick={handleDeleteClick}></button>
            </div>
        </div>  
    )
}

export default BookShow;