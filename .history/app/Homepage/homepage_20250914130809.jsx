import { useState, useEffect } from "react";
import styles from "./homepage.module.css";
import Header from "../_ui/Header/header.jsx";
import Book from "../_ui/Book/book.jsx";
import Button from "../_ui/Button/button.jsx";
import Footer from "../_ui/Footer/footer.jsx";

function Homepage() {
    const [books, setBooks] = useState([]);

    async function getBook(url) {
        try {
            const response = await fetch(url);

            const bookData = await response.json();
            console.log(JSON.stringify(bookData));

            setBooks((prevBooks) => [...prevBooks, bookData]);
        } catch (error) {
            console.log("the error is " + error);
        }
    }

    // Load books automatically when component mounts
    useEffect(() => {
        bookISBNs.forEach((isbn) => {
            getBook("https://api.itbook.store/1.0/books/9780596155933");
            getBook("https://api.itbook.store/1.0/books/9780596806026");
        });
    }, []);

    {
        /* Add new book button */
    }

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
