import React from 'react'
import PropTypes from 'prop-types'
const propTypes = {
  name : PropTypes.string.isRequired,
  age  : PropTypes.number.isRequired
}

class Profile extends React.Component{
  constructor(props){
    super(props)  

    this.state={
      liked : 0
    }
    this.likedCallback = this.likedCallback.bind(this)
  }
  likedCallback(){
    let liked = this.state.liked
    liked++
    this.setState({
      liked
    })
  }
  render() {
      return (
        <div className="profile-component">
          <h1>我的名字叫 {this.props.name}</h1>
          <h2>我{this.props.age}岁</h2>
          <button onClick={this.likedCallback}>给我点赞</button>
          <h3>总点赞数：{this.state.liked}</h3>
        </div>
      )
  }
}

Profile.propTypes = propTypes

export default Profile