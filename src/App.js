import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import View from './View'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import NewsCard from './newsCard';
import Featured from './Featured';
import AddArticle from './AddArticle';
import UpdateArticle from './UpdateArticle';
import Moment from 'react-moment';
import 'moment-timezone';

var url = 'http://localhost:4000/api'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      activeView:'home',
      news:[
        {
          id: 1,
          title: "Title",
          author: "John Smith",
          category_id: 1,
          source: "Source",
          timestamp: "2020 21/08 15:00",
        },
      ],
      articleToUpdate:{
        id: 1,
        title: "Title",
        author: "John Smith",
        category_id: 1,
        source: "Source",
      }
    };
  }

  setActiveView = (view) => {
    this.setState({activeView:view})
  }

  setArticleToUpdate =  (id)=>{
    var foundArticle = this.state.news.find((article)=>{
      return article.id === id;
    })

    this.setState({articleToUpdate:foundArticle})
  }

  countArticles = () => {
    var a = this.state.news.length
    return a
  }

  getArticles = () => {
    axios.get(url + '/articles')
    .then(res => {
      this.setState({news:res.data})
    })
  }

  addArticle = (data) =>{
    axios.post(url + '/articles', data)
    .then(res => {
      this.getArticles()
    })
  }

  updateArticle = (id, data) => {
    axios.put(url + '/articles/' + id, data)
    .then(res =>{
      this.getArticles()
    })
  }

  deleteArticle = (id) => {
    axios.delete(url + '/articles/' + id)
    .then(res=>{
      this.getArticles()
    })
  }

  componentDidMount = ()=>{
    this.getArticles()
  }

  render(){
    return (
      <div className="app">
        <View viewName="home" activeView={this.state.activeView} className="home">
          <header>
              <div className="logo"><span>dot</span>news</div>
              <div className="header-right">
                  <div>Add Article</div>
                  <i className="far fa-plus-square" onClick={
                    ()=>this.setActiveView('add-article')
                  }></i>
              </div>
          </header>

          <div className="main">
            <Featured />
  
            <Tabs defaultActiveKey="all" id="tabs-home" className="nav nav-tabs">
                  <Tab eventKey="all" title="Top News" className="nav-item">
                    <div className="container">
                      <div className="news-cards">
                        {
                          this.state.news.map((newsItem) =>{
                            if(newsItem.category === 'world'){
                              var newsItemProps ={
                                ...newsItem,
                                setActiveView: this.setActiveView,
                                setArticleToUpdate: this.setArticleToUpdate,
                                deleteArticle: this.deleteArticle
                              }
                              console.log(newsItemProps)
                              
                              return (<NewsCard {...newsItemProps}/>)
                            }
                          })
                        }
                      </div>
                  </div>
                  </Tab>
                  <Tab eventKey="nation" title="Nation" className="nav-item">
                    <div className="container">
                      <div className="news-cards">
                        {
                            this.state.news.map((newsItem) =>{
                              if(newsItem.category === 'nation'){
                                var newsItemProps ={
                                  ...newsItem,
                                  setActiveView: this.setActiveView,
                                  setArticleToUpdate: this.setArticleToUpdate,
                                  deleteArticle: this.deleteArticle
                                }
                                console.log(newsItemProps)
                                
                                return (<NewsCard {...newsItemProps}/>)
                              }
                            })
                          }
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="business" title="Business" className="nav-item">
                    <div className="container">
                        <div className="news-cards">
                          {
                              this.state.news.map((newsItem) =>{
                                if(newsItem.category === 'business'){
                                  var newsItemProps ={
                                    ...newsItem,
                                    setActiveView: this.setActiveView,
                                    setArticleToUpdate: this.setArticleToUpdate,
                                    deleteArticle: this.deleteArticle
                                  }
                                  console.log(newsItemProps)
                                  
                                  return (<NewsCard {...newsItemProps}/>)
                                }
                              })
                            }
                        </div>
                      </div>
                  </Tab>
              </Tabs>
  
              
  
          </div>
        </View>

        <View viewName="add-article" activeView={this.state.activeView} className="add-article" >
          <AddArticle setActiveView={this.setActiveView} addArticle={this.addArticle} countArticles={this.countArticles}/>
        </View>

        <View viewName="update-article" activeView={this.state.activeView} className="update-article">
          <UpdateArticle {...this.state.articleToUpdate} updateArticle={this.updateArticle} setActiveView={this.setActiveView} />
        </View>
    </div>
    )
  }
}

export default App;
