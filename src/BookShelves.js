import React from "react";
import Shelve from "./Shelve";

class BookShelves extends React.Component {
  render() {
    const SHELVES = [
      {
        name: "Currently Reading",
        id: "currentlyReading",
      },
      {
        name: "Want To Read",
        id: "wantToRead",
      },
      {
        name: "Read",
        id: "read",
      },
    ];
    // console.log(SHELVES);
    const Books = this.props.Books;

    return (
      <div className="list-books-content">
        <div>
          {SHELVES.map((shelf) => (
            <Shelve
              shelveBooks={Books.filter((b) => b.shelf === shelf.id)}
              shelfName={shelf.name}
              key={shelf.id}
              changeShelve={this.props.UpdateShelve}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BookShelves;
