import React from 'react'
import './index.css'
import '../../UI/Tooltip/index.css'
import IconButton from '../../UI/IconButton'

const share = ({ handleShare }) => (
  <IconButton className="Share Tooltip" icon="share" data-tooltip="Compartir" handleClick={handleShare} />
)

export default share