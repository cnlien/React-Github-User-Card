import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import MyCard from './components/myCard';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
        admindata: {}
    }
  }

  componentDidMount () {
      console.log("Compenent Did Mount")
      fetch ("https://api.github.com/users/cnlien")
          .then(res => res.json())
          .then(mydata => this.setState({admindata: mydata}))
          .catch(err => console.log(err))
  }

  render() {
    return (
      <div className = "cardContainer">

        <div className="my-card"> 
          <MyCard
            avatar_url = {this.state.admindata.avatar_url}
            name = {this.state.admindata.name}
            login = {this.state.admindata.login}
            bio = {this.state.admindata.bio}
          />
        </div>

        <div className="friend-cards">
          <MyCard />
        </div>

      </div>
    )
  }
}

export default App;
