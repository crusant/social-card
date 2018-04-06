import React from 'react'
import './index.css'
import Resource from './Resource'
import Summary from './Summary'

const media = ({ url, imagePath, title, description, destination }) => (
  <div className="Media">
    <a href={url} target="_blank">
      <Resource path={imagePath} />
      <Summary title={title} description={description} destination={destination} />
    </a>
  </div>
)

export default media