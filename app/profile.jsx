import React from 'react'
import PropTypes from 'prop-types'
import Hobby from './hobby'


const propTypes = {
  name : PropTypes.string.isRequired,
  age  : PropTypes.number.isRequired
}

class Profile extends React.Component{
  constructor(props){
    super(props)  

    this.state={
      liked : 0,
      hobbies:['play computer game','programming']
    }
    this.likedCallback = this.likedCallback.bind(this)
    this.submitHobbyCallback = this.submitHobbyCallback.bind(this)
  }
  likedCallback(){
    let liked = this.state.liked
    liked++
    this.setState({
      liked
    })
  }

  submitHobbyCallback(){
    let inputHobby = this.refs.hobby
    let hobbies = this.state.hobbies
    let hobby = inputHobby.value
    if(hobby == ""){
      return 'undefined'
    }
    hobbies = [...hobbies,hobby]
    this.setState({
      hobbies
    })
  }
  componentDidMount(){
    setTimeout(()=>this.likedCallback(),1000)
  }
  render() {
      return (
        <div className="profile-component">
          <h1>我的名字叫 {this.props.name}</h1>
          <h2>我{this.props.age}岁</h2>
          <button onClick={this.likedCallback}>给我点赞</button>
          <h3>总点赞数：{this.state.liked}</h3>
          <h2>我的爱好：</h2>
          <ul>
            {this.state.hobbies.map((hobby,i)=><Hobby key={i} hobby={hobby}/>)}
          </ul>
          <div>
            <input type="text" ref="hobby" />
            <button onClick={this.submitHobbyCallback}>提交</button>
          </div>
        </div>
      )
  }
}

Profile.propTypes = propTypes

export default Profile