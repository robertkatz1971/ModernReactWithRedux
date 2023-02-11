import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import { useEffect, useContext } from 'react';
import BookContext from './context/books';


const App = () => {

    const { fetchBooks } = useContext(BookContext);

    useEffect(() => {
        fetchBooks();
    }, [])

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList  />
            <BookCreate />
        </div>
    )
}

export default App;