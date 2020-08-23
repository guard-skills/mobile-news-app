import React, {Component} from 'react';

class NewsCard extends Component {

	constructor(props){
		super(props);
    }
    
    handleUpdateClick = () => {
        this.props.setActiveView('update-article')
    }

  	render(){


    	return (

        <div className="news-card">
            <div className="news-main">
                <img src="https://picsum.photos/500?random=2" alt="news-card" className="news-card-photo" />
                <div className="news-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <div className="news-author">
                        John Smith
                    </div>
                </div>
                <div className="buttons">
                    <i className="far fa-edit edit-btn" onClick={this.handleUpdateClick}></i>
                    <i className="far fa-trash-alt"></i>
                </div>
            </div>
            <div className="news-info">
                <div className="news-category">
                    World
                </div>
                <div className="news-timestamp">
                    21/08/2020 15:00
                </div>
                <div className="news-source">
                    AP News
                </div>
            </div>
        </div>

    	);
  	}
}

export default NewsCard;