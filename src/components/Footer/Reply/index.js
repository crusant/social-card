import React from 'react'
import './index.css'
import IconButton from '../../UI/IconButton'

const reply = ({ handleReply }) => (
  <IconButton className="Reply" icon="reply" handleClick={handleReply} />
)

export default reply