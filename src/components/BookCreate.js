import { useState } from "react";
import useBooksContext from "../hooks/UseBooksContext";

const BookCreate = () => {

    const [title, setTitle] = useState('');
    const { createBook } =  useBooksContext();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        createBook(title);
        setTitle('');
    };

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>   
                <label>Title</label>
                <input 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}>
                </input>
                <button className="button" type="submit">Create Book</button>
            </form>
        </div>
    )
}

export default BookCreate;