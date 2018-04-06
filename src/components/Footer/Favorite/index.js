import React from 'react'
import './index.css'
import IconButton from '../../UI/IconButton'

const favorite = ({ isFavorite, handleFavorite }) => {
  const classes = isFavorite ? 'Favorite active' : 'Favorite'
  const icon = isFavorite ? 'favorite' : 'favorite_border'

  return (
    <IconButton className={classes} icon={icon} handleClick={handleFavorite} />
  )
}

export default favorite