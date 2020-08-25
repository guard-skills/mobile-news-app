import React, {Component} from 'react';

class NewsCard extends Component {

	constructor(props){
		super(props);
    }
    
    handleUpdateClick = () => {
        var {setActiveView,setArticleToUpdate,id} = this.props
        setArticleToUpdate(id)
        
        setActiveView('update-article')
    }

  	render(){


    	return (

        <div className="news-card">
            <div className="news-main">
                <img src="https://picsum.photos/500?random=2" alt="news-card" className="news-card-photo" />
                <div className="news-title">
                    {this.props.title}
                    <div className="news-author">
                    {this.props.author}
                    </div>
                </div>
                <div className="buttons">
                    <i className="far fa-edit edit-btn" onClick={this.handleUpdateClick}></i>
                    <i className="far fa-trash-alt"></i>
                </div>
            </div>
            <div className="news-info">
                <div className="news-category">
                    {this.props.category}
                </div>
                <div className="news-timestamp">
                    21/08/2020 15:00
                </div>
                <div className="news-source">
                    {this.props.source}
                </div>
            </div>
        </div>

    	);
  	}
}

export default NewsCard;