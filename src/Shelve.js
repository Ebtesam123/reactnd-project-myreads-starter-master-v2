import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
class Shelve extends React.Component{
    render(){
        const shelveBooks=this.props.shelveBooks;
        const shelveTitle=this.props.shelfName;
        return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelveTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {shelveBooks.map((b)=>
          <Book key={b.id} bks={b} changeShelve={this.props.changeShelve}/>
          )}
                      
          </ol>
        </div>
      </div>
        )
    }
}
Shelve.propTypes={
  shelfName: PropTypes.string.isRequired,
  changeShelve: PropTypes.func.isRequired
}
export default Shelve;