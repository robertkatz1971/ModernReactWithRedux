import BookEdit from './BookEdit';
import { useState } from 'react';


const BookShow = ({book, onDelete, onEdit}) => {

    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleDeleteClick = () => {
        onDelete(book.id);
    };

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);  
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