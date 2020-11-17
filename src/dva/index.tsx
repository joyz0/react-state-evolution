import React from 'react'
import { render } from 'react-dom'
import dva from 'dva'
import App from './components/App'
import '../global.css'

const app = dva()
app.model(require('./models/todos').default)
app.model(require('./models/visibilityFilter').default)
app.router(() => <App />)
app.start('#root')
