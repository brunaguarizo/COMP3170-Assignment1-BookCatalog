# Assignment 1 - Components

COMP 3170 - Frontend Web Development
BCIT - Digital Design and Development

---

Instructions
For this assignment, you will create the first version of a book catalog app using React. It should structured as follows:

-   A header section with the name of the app prominently displayed
-   A content area displaying two books and a big Add button
    -   The UI for displaying a book should be implemented as a reusable component
    -   It should have fixed width and height so that multiple books would be displayed perfectly aligned horizontally
    -   The book UI should display an image of the book, its authors and a link (HTML anchor element) to the book's details page (which opens in a new tab)
    -   The Add button can be styled as desired, but should be prominent and be the same width and height as the book component
    -   All the elements in the content area should be appropriately spaced
-   A footer showing copyright information

You can see a live example at https://yveshema.github.io/comp3170-book-catalog-v1/

The ITBook.store website contains lots of books you can use for this assignment. It also provides an API you can use to retrieve a books details.

Given the books ISBN13, you can get the books details from the following endpoint:
https://api.itbook.store/1.0/books/{isbn13}

Submission
Deploy your app to Vercel or other free hosting services such as Github Pages and submit the live link here.

Deploying to Vercel is pretty straightforward, but if deploying elsewhere, vite website provides a number of deployment guides, including one on deploying to Github Pages.
# COMP3170-Assignment1-BookCatalog
