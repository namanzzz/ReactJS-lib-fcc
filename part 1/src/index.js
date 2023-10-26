import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'


const BookList = () => {

    return (

        <section className = "booklist">
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article className = "book">
                <Image />
                <Title />
                <Author />

        </article>
    );
}

const Image = () => {
    return (
        <img src="https://images-na.ssl-images-amazon.com/images/I/61BWsc9eGbL._AC_UL600_SR600,400_.jpg" alt="" />
    )
}
const Title = (props) => <h2>The woman in me</h2>
const Author = (props) => 
{
    const inlineHeadingStyles = { color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }
return (

<h4 style={inlineHeadingStyles}
>Britney Spears</h4>
)}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);