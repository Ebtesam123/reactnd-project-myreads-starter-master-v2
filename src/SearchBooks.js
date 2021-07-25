import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import Book from './Book'

class SearchBooks extends React.Component
{
  state={
    resultBooks:[]
  }
  Query=async(que)=>{
    if(que){
      const searchResult=await BooksAPI.search(que)
      if(!searchResult.error){
      const changedBooks=searchResult.map(book=>{
        if(this.props.bks.some(i=>i.id===book.id)){
         
          book.shelf=this.props.bks.find(bk=>bk.id===book.id).shelf
        }
        else{
          book.shelf="none"
        }
        
        return book
      })
      this.setState({resultBooks: changedBooks})
    }
    else
    {
      console.log('Not Found any')
      this.setState({resultBooks:[]})
    }
  }
} 
    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" 
              to='/'>
                Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                onChange={(e)=>this.Query(e.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                this.state.resultBooks.map(b=> 
                <Book key={b.id} bks={b} changeShelve={this.props.changeShelve} />
                
                )}
              </ol>
            </div>
          </div>
        )
    }
}
SearchBooks.propTypes={
  bks:PropTypes.array.isRequired,
  changeShelve:PropTypes.func.isRequired
}
export default SearchBooks;