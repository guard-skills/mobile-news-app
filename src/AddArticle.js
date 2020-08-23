import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class AddArticle extends Component {

	constructor(props){
		super(props);
    }
    
    handleReturnButtonClick = (e)=>{
        e.preventDefault()

        this.props.setActiveView('home')
    }

  	render(){

    	return (

	    <form className="addArticle">

            <h3>Add an article</h3>

	        <div className="form-group">
	          <label htmlFor="title-input">Title</label>
	          <input type="text" className="form-control" name="title-input" id="title-input" placeholder="Enter article title"/>
	        </div>

            <div className="form-group">
	          <label htmlFor="author-input">Author</label>
	          <input type="text" className="form-control" name="author-input" id="author-input" placeholder="Enter article author"/>
	        </div>
            
            <div className="form-group">
	          <label htmlFor="category-input">Category</label>
	          <input type="text" className="form-control" name="category-input" id="category-input" placeholder="Enter article category"/>
	        </div>

            <div className="form-group">
	          <label htmlFor="source-input">Source</label>
	          <input type="text" className="form-control" name="source-input" id="source-input" placeholder="Enter article source"/>
	        </div>

	        <Button type="submit" className="btn btn-primary btn-add" variant="danger" size="sm">Add</Button>

            <Button variant="outline-danger" className="btn btn-return" size="sm" onClick={this.handleReturnButtonClick}>Return</Button>
	    </form>

    	);
  	}
}

export default AddArticle
