import React from 'react'

export default class Profile extends React.Component{
  render() {
      return (
        <div className="profile-component">
          <h1>我的名字叫 {this.props.name}</h1>
          <h1>我{this.props.age}岁</h1>
        </div>
      )
  }
}