import { useState } from "react";
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
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const bookData = await response.json();
            console.log(JSON.stringify(bookData));

            // Aqui é como se fosse o container.innerHTML,
            // só que em React usamos setState:
            setBooks((prev) => [...prev, bookData]);
        } catch (error) {
            console.log("the error is " + error);
        }
    }

    function handleAddBook() {
        getBook("https://api.itbook.store/1.0/books/9781617294136");
    }

    return (
        <div className={styles.homepage}>
            <Header />

            <main className={styles.homepage__main}>
                <div className={styles.homepage__content}>
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
