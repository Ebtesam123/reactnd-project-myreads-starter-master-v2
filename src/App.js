import React from "react";
import BookShelves from "./BookShelves";
import SearchBooks from "./SearchBooks";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    booksData: [],
  };

  modifyShelve = async (shelf, changedBook) => {
    await BooksAPI.update(changedBook, shelf);
    if (this.state.booksData.some((b) => b.id === changedBook.id)) {
      this.setState({
        booksData: this.state.booksData.map((book) => {
          if (book.id === changedBook.id) {
            book.shelf = shelf;
          }
          return book;
        }),
      });
    } else {
      changedBook.shelf = shelf;
      // this.state.booksData.push(changedBook);
      const AllBooks = [...this.state.booksData, changedBook];
      this.setState({ booksData: AllBooks });
    }
  };

  // get all books data from the BooksAPI
  componentDidMount() {
    BooksAPI.getAll().then((response) =>
      this.setState({ booksData: response })
    );
  }
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              {/* book shelves compoenent start*/}
              <BookShelves
                Books={this.state.booksData}
                UpdateShelve={this.modifyShelve}
              />
              {/* Search Btn Part*/}
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBooks
              bks={this.state.booksData}
              changeShelve={this.modifyShelve}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
