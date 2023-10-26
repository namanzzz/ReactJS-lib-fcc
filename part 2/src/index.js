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







// parameters
// const somefunc = (param1, param2) => {
//     console.log(param1, param2);
// }


// const names = ['Naman', 'lol', 'susan'];




// const BookList = () => {
//     return (

//         <section className = "booklist">
//             { 
//                books.map((book)=>{
//                 const {img, author, title, id} = book;
//                 console.log(book);
//                 return (
//                     <Book img={img} title={title}
//                     author = {author} key={id}/>
//                 )
//             })
//         }
            
//         </section>
//     );
// }

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
    console.log(props);
    // const {title, author, img} = props;
    return (
        <article className = "book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}
            >{author}</h4>
            
            {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam harum ipsa, consequatur dolores velit ut aliquid repudiandae cumque. Iste voluptas officiis labore similique?</p>

            <button>click me</button> */}
            {/* {console.log(props)} */}
            {/* <p>{7/7}</p> */} 


        </article>
    );
}





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);