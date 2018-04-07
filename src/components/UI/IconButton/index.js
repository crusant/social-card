import React from 'react'
import './index.css'

const iconButton = ({ className, icon, handleClick, ...props }) => {
  const classes = ['IconButton', className]

  return (
    <button className={classes.join(' ')} {...props} onClick={handleClick}>
      <i className="material-icons">{icon}</i>
    </button>
  )
}

export default iconButton