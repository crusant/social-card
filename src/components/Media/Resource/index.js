import React from 'react'
import './index.css'

const resource = ({ path }) => (
  <div className="Resource">
    <img src={path} />
  </div>
)

export default resource