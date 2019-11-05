import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FollowerCard from './FollowerCard';

class Followers extends Component {
  
  constructor() {
    super();
    this.state= {
      followerData:[],
    }
  }

  componentDidMount () {
    fetch ("https://api.github.com/users/cnlien/followers")
      .then(res2 => res2.json())
      .then(followers => this.setState({followerData: followers}, console.log("Followers", followers) ) )
      .catch(err => console.log(err))
      console.log("Followers Component Did Mount")
  }

  render(){
    return (
      <div className="friend-cards">
        {this.state.followerData.map(follower => (
          <FollowerCard
            avatar_url = {follower.avatar_url}
            login={follower.login}
            html_url={follower.html_url}
          />
        ))}
      </div>
    );
  }
}


export default Followers;

