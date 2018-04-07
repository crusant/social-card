import React from 'react'
import './index.css'
import IconButton from '../../UI/IconButton'

const favorite = ({ isFavorite, handleFavorite }) => {
  let classes = 'Tooltip'
  classes += isFavorite ? ' Favorite active' : ' Favorite'
  const icon = isFavorite ? 'favorite' : 'favorite_border'

  return (
    <IconButton className={classes} icon={icon} data-tooltip="Me gusta" handleClick={handleFavorite} />
  )
}

export default favorite