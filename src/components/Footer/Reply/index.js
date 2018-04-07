import React from 'react'
import './index.css'
import IconButton from '../../UI/IconButton'

const reply = ({ handleReply }) => (
  <IconButton className="Reply Tooltip" icon="reply" data-tooltip="Responder" handleClick={handleReply} />
)

export default reply