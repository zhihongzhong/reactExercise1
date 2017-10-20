//import React from 'react';
import {render} from 'react-dom'
import Profile from './profile'
import React from 'react'
// function App() {
//   return (
//     <div className="container">
//       <h1>Hello React</h1>
//     </div>
//   );
// }

// const app = document.createElement('div');
// document.body.appendChild(app);
// ReactDOM.render(<App />, app);
let ele = document.createElement('div')
document.body.appendChild(ele)

const props={
  name:'zhongzhihong',
  age:19
}

render(<Profile {...props}/>,ele)
