import React from 'react'
import './index.css'

const iconButton = ({ className, icon, handleClick }) => {
  const classes = ['IconButton', className]

  return (
    <button className={classes.join(' ')} onClick={handleClick}>
      <i className="material-icons">{icon}</i>
    </button>
  )
}

export default iconButton