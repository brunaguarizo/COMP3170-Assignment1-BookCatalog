import { useState, useEffect } from "react";
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

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                {
                    /* If, await, etc while searching for the book in the API */
                }
                const bookPromises = bookISBNs.map(async (isbn) => {
                    const response = await fetch(
                        `https://api.itbook.store/1.0/books/${isbn}`
                    );
                    if (!response.ok) {
                        throw new Error(
                            `Failed to fetch book with ISBN: ${isbn}`
                        );
                    }
                    return response.json();
                });

                const bookData = await Promise.all(bookPromises);
                setBooks(bookData);
            } catch (err) {
                console.error("Error fetching books:", err);
            }
        };

        fetchBooks();
    }, []);

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
