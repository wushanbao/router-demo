/**
 * Created by Administrator on 2017/8/31 0031.
 */
import  React from 'react'
import {Link} from 'react-router'

export default function App(props) {
  return (
    <div>
      <h2>Hello, React Router!</h2>
      <ul>
        <li><Link activeClassName='active' to="/about">about</Link></li>
        <li><Link activeClassName='active' to="/repo">repos</Link></li>
      </ul>
      {props.children}
    </div>

  )
}