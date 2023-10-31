import React from "react";

function SearchBar({ onSubmit }) {
  const handleFormClick = (event) => {
    //console.log ('Do a search with', term);
    // searchImages (term);
    event.prevenDefaul();
    onSubmit("cards");
  };

  return (
    <div>     
      <form>
        <label>Email</label>
        <input name="email"/>

        <label>Password</label>
        <input name="password" />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchBar;
