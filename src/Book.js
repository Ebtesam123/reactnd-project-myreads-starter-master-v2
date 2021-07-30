import React from "react";

class Book extends React.Component {
  state = {
    books: [],
  };
  UpdateShelf = (event) => {
    this.props.changeShelve(event.target.value, this.props.bks);
  };
  render() {
    let b = this.props.bks;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  b.imageLinks ? b.imageLinks.thumbnail : ""
                })`,
              }}
            />
            <div className="book-shelf-changer">
              <select value={b.shelf} onChange={this.UpdateShelf}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{b.title}</div>
          <div className="book-authors">
            {b.authors ? b.authors.join(", ") : " "}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
