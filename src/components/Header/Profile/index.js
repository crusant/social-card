import React from 'react'
import './index.css'
import Avatar from './Avatar'
import FullName from './FullName'
import Username from './Username'

const profile = ({ avatar, fullName, username }) => (
  <a href="#" className="Profile">
    <Avatar path={avatar} />
    <FullName text={fullName} />
    <Username text={username} />
  </a>
)

export default profile