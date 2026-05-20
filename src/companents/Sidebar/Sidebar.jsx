import React from 'react'
import "./Sidebar.scss"
import { Link } from 'react-router-dom'
<link rel="stylesheet" href="" />
const Sidebar = () => {
  return (
    <div>
        <ul>
            <li><Link to="contacts">contact</Link></li>
            <li><Link to="sutudents">student</Link></li>
            <li><Link to="teachers">teachers</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar