import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import UserCard from './components/UserCard';
import Followers from './components/Followers';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
        admindata: {},
    }
  }

  componentDidMount () {
    console.log("User Card Compenent Did Mount")
    fetch ("https://api.github.com/users/cnlien")
      .then(res => res.json())
      .then(mydata => this.setState({admindata: mydata}, console.log(mydata)))
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className = "cardContainer">

        <div className="my-card"> 
          <UserCard
            avatar_url = {this.state.admindata.avatar_url}
            name = {this.state.admindata.name}
            login = {this.state.admindata.login}
            bio = {this.state.admindata.bio}
          />
        </div>
        <Followers />
        {console.log(this.state.admindata)}
      </div>
      
    )
  }
}

export default App;
