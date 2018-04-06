import React from 'react'
import './index.css'
import IconButton from '../../UI/IconButton'

const share = ({ handleShare }) => (
  <IconButton className="Share" icon="share" handleClick={handleShare} />
)

export default share