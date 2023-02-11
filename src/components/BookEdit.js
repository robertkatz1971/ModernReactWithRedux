import { useContext, useState } from "react";
import useBooksContext from "../hooks/UseBooksContext";

const BookEdit = ({book, onSubmit}) => {

    const [newTitle, setNewTitle] = useState(book.title);
    const { editBook } =  useBooksContext();

    const handleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editBook(book.id, newTitle);
        onSubmit();
    };

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input 
                className='input' 
                onChange={handleChange} 
                value={newTitle} 
            />
            <button className="button is-primary"> 
                Save
            </button>
        </form>
    )
}

export default BookEdit;