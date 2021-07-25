import React from 'react'
import Shelve from './Shelve';
class BookShelves extends React.Component
{
    render(){
      const Books=this.props.Books;
      const WantToReadBooks=Books.filter(b=>b.shelf==="wantToRead")
      const CurrentBooks=Books.filter(b=>b.shelf==="currentlyReading")
      const ReadBooks=Books.filter(b=>b.shelf==="read")
     
        return(
    <div className="list-books-content">
    <div>
       {/* book shelf: Currently Reading*/}
      <Shelve shelveBooks={CurrentBooks} shelfName={'Currently reading'} changeShelve={this.props.UpdateShelve}/>
      {/* book shelf :want to read */}
      <Shelve shelveBooks={WantToReadBooks} shelfName={'Want to read'} changeShelve={this.props.UpdateShelve}/>
       {/* book shelf :read */}
       <Shelve shelveBooks={ReadBooks} shelfName={'Read'} changeShelve={this.props.UpdateShelve}/>
      
    </div>
  </div>
        )
    }
}

export default BookShelves;