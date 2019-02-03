import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import TopRepo from './components/TopRepo.jsx';
import getData from './ajaxget';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  topRepo(){
    getData((err,data)=>{
      if(err){
        throw (err);
        return
      }
      this.setState({repos: data})
    })
  }

  componentDidMount(){
    this.topRepo();
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      type: "POST",
      url: "http://localhost:1128/repos",
      data: JSON.stringify({term}),
      contentType: "application/json",
      success: (data) => {
        console.log("this is the data", data);
        
      },
      error: (error) => {
        console.log('errored out', error)
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));