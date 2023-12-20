import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import './index.css'
import './gridjs-theme.css'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(<App />)
