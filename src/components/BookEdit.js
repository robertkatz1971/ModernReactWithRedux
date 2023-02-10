import { useState } from "react";

const BookEdit = ({book, onSubmit}) => {

    const [newTitle, setNewTitle] = useState(book.title);

    const handleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(book.id, newTitle);
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