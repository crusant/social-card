import React from 'react'
import { render } from 'react-dom'
import './index.css'
import SocialCard from './containers/SocialCard/'
import registerServiceWorker from './registerServiceWorker'

render(<SocialCard />, document.getElementById('root'))
registerServiceWorker()
