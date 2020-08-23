import React, {Component} from 'react';

class Featured extends Component {

	constructor(props){
		super(props);
	}

  	render(){


    	return (

        <div className="featured-card">
            <img src="https://picsum.photos/500?random=1" className="article-photo" alt="featured"/>
            <div className="article-info">
                <div className="article-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, molestiae!
                </div>
                <div className="subtext">
                    <div className="article-source">Reuters</div>
                    <div className="article-timestamp">2020 21/08 15:00</div>
                </div>
            </div>
        </div>

    	);
  	}
}

export default Featured;