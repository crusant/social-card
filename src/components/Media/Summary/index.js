import React from 'react'
import './index.css'

const summary = ({ title, description, destination }) => (
  <div className="Summary">
    <h2>{title}</h2>
    <p>{description}</p>
    <span>{destination}</span>
  </div>
)

export default summary