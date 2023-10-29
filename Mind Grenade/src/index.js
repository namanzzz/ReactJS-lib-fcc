import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'

// Javascript-JSX, props

const books = [
    {
        title: 'The woman in me',
        author: 'Britney Spears',
        img: 'https://images-na.ssl-images-amazon.com/images/I/61BWsc9eGbL._AC_UL600_SR600,400_.jpg',
        id: 1, 
    },
    {
        title: 'No Brainer(Diary of a wimpy kid)',
        author: 'Jeff Kinney',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71pL+3nMzfL._AC_UL600_SR600,400_.jpg',
        id: 2,
    },
];


const BookList = () => {
    return (

        <section className="booklist">
            
            {
                books.map((book) => {
                    
                    return (
                        <Book {...book} key={book.id} />
                    )
                })
            }

        </section>
    );
}


  

const Book = (props) => {
    const {img, title, author} = props;
    const displayTitle = () => {
        console.log(title);
    }
    // console.log(props);
    // const {title, author, img} = props;
    return (
        <article className = "book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <button onClick={displayTitle}>Display title</button>
            <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}
            >{author}</h4>
            
            


        </article>
    );
}





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);