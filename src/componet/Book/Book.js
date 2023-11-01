import { useState } from "react";
import BookCreate from "../Book/BookCreate";

function Book() {
  const [books, setBook] = useState([]);

  const createBook = (title) => {
    // console.log("Need to add book with:", title);
    //BAD CODE!
    //books.push({ id: 123, title: title });
    //console.log(books);
    const updateBooks = [...books, { id: 123, title }];
    setBook(updateBooks);
  };

  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default Book;
