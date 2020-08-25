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

	getPhotoURL = () => {
		var url = 'https://picsum.photos/500?random='
		var a = this.props.countArticles()
		a++
		a.toString()

		return url + a 
	}
	
	handleSubmit = (e) => {
		e.preventDefault()
		var formData = new FormData(this.addForm)
		var data = {
			title: formData.get('title-input'),
			author: formData.get('author-input'),
			// category_id: parseInt(formData.get('category-input')),
			category: formData.get('category-input'),
			source: formData.get('source-input'),
			photo: this.getPhotoURL()
		}
		console.log(data)

		var {addArticle, setActiveView} = this.props

		addArticle(data)
		setActiveView('home')
	}

  	render(){

    	return (

	    <form className="addArticle" onSubmit={this.handleSubmit} ref={(el) => {this.addForm = el}}>

            <h3>Add an article</h3>

	        <div className="form-group">
	          <label htmlFor="title-input">Title</label>
	          <input type="text" className="form-control" name="title-input" id="title-input" placeholder="Enter article title"/>
	        </div>

            <div className="form-group">
	          <label htmlFor="author-input">Author</label>
	          <input type="text" className="form-control" name="author-input" id="author-input" placeholder="Enter article author"/>
	        </div>
            
            {/* <div className="form-group">
	          <label htmlFor="category-input">Category</label>
			  <select className="form-control" name="category-input" id="category-input">
	            <option value="1">World</option>
	            <option value="2">Nation</option>
	            <option value="3">Business</option>
	          </select>
	        </div> */}

			<div className="form-group">
	          <label htmlFor="category-input">Category</label>
			  <select className="form-control" name="category-input" id="category-input">
	            <option value="world">World</option>
	            <option value="nation">Nation</option>
	            <option value="business">Business</option>
	          </select>
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
