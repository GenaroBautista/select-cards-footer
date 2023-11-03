import BookEdit from "./BookEdit";

function BookCreateShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  {
    /* const handleDeleteClick: () => {
    onDelete(book.id)
  };
  
  const handleDeleteClick: () => void
  const handleEditClick = () => {
    setShowEdit (!showEdit);
  }; */
  }

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} onEdit={onEdit} book={book} />;
  }

  return;
}

export default BookCreateShow;
