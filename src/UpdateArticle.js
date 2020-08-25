import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class UpdateArticle extends Component {

	constructor(props){
		super(props);
    }
    
    handleReturnButtonClick = (e)=>{
        e.preventDefault()

        this.props.setActiveView('home')
	}
	
	handleUpdateSubmit = (e)=>{
		e.preventDefault()
		var formData = new FormData(this.updateForm)
		var data = {
			title: formData.get('title-input'),
			author: formData.get('author-input'),
			category: formData.get('category-input'),
			source: formData.get('source-input'),
		}

		var {updateArticle,id,setActiveView} = this.props

		updateArticle(id,data)
		setActiveView('home')
	}

  	render(){
		
		var {title, author, category, source} = this.props

    	return (

	    <form onSubmit={this.handleUpdateSubmit} ref={(el) => {this.updateForm = el}} className="updateArticle">

            <h3>Update an article</h3>

	        <div className="form-group">
	          <label htmlFor="title-input">Title</label>
	          <input type="text" className="form-control" name="title-input" id="title-input" defaultValue={title}/>
	        </div>

            <div className="form-group">
	          <label htmlFor="author-input">Author</label>
	          <input type="text" className="form-control" name="author-input" id="author-input" defaultValue={author}/>
	        </div>
            
			<div className="form-group">
	          <label htmlFor="category-input">Category</label>
			  <select className="form-control" name="category-input" id="category-input" defaultValue={category}>
	            <option value="world">World</option>
	            <option value="nation">Nation</option>
	            <option value="business">Business</option>
	          </select>
	        </div>

            <div className="form-group">
	          <label htmlFor="source-input">Source</label>
	          <input type="text" className="form-control" name="source-input" id="source-input" defaultValue={source}/>
	        </div>

	        <Button type="submit" className="btn btn-primary btn-add" variant="danger" size="sm">Update</Button>

            <Button variant="outline-danger" className="btn btn-return" size="sm" onClick={this.handleReturnButtonClick}>Return</Button>
	    </form>

    	);
  	}
}

export default UpdateArticle
