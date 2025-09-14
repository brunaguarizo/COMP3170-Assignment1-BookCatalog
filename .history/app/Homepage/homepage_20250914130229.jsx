import { useState } from "react";
import styles from "./homepage.module.css";
import Header from "../_ui/Header/header.jsx";
import Book from "../_ui/Book/book.jsx";
import Button from "../_ui/Button/button.jsx";
import Footer from "../_ui/Footer/footer.jsx";

function Homepage() {
    const [books, setBooks] = useState([]);

    // IT books codes
    const bookISBNs = [
        "9780596155933", // CSS
        "9780596806026", // HTML5
    ];

    async function getBook(url) {
        try {
            // Response is the promise object that gets returned when we ask for the book data.
            // Eventually, the object will update with either: the data we asked for or an error message.
            const response = await fetch(url);
            // console.log(response);

            // bookData is the data we are pulling off of the object, and then formatting with .json()
            const bookData = await response.json();
            console.log(JSON.stringify(bookData));

            // Add the book to the books array
            setBooks(prevBooks => [...prevBooks, bookData]);
        } catch (error) {
            console.log("the error is " + error);
        }
    }

    {
        /* Add new book button */
    }

    const handleAddBook = () => {
        alert("Add book functionality would be implemented here!");
    };

    {
        /* Home page content */
    }
    return (
        <div className={styles.homepage}>
            <Header />

            <main className={styles.homepage__main}>
                <div className={styles.homepage__content}>
                    {/* Book mapping -> array of books inside the API*/}
                    <div className={styles.homepage__books}>
                        {books.map((book, index) => (
                            <Book
                                key={book.isbn13 || index}
                                book={{
                                    title: book.title,
                                    authors: book.authors,
                                    image: book.image,
                                    detailsUrl: book.url,
                                }}
                            />
                        ))}

                        <Button
                            variant='add'
                            size='large'
                            onClick={handleAddBook}>
                            + Add Book
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Homepage;
