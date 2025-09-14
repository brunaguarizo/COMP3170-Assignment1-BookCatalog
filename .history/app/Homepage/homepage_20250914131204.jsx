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
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const bookData = await res.json();
        } catch (error) {
            console.log("the error is " + error);
        }
    }

    // Carrega livros ao montar
    useEffect(() => {
        const urls = [
            "https://api.itbook.store/1.0/books/9780596155933",
            "https://api.itbook.store/1.0/books/9780596806026",
        ];
        Promise.all(urls.map(getBook));
    }, []); // roda só uma vez

    // Exemplo simples para o botão "+ Add Book"
    function handleAddBook() {
        // Adiciona outro ISBN fixo (troque por algo dinâmico se quiser)
        getBook("https://api.itbook.store/1.0/books/9781491950296");
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
                                    authors: book.authors, // (essa API retorna string; garanta que o <Book/> aceite)
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
