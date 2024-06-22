import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss';
import prifile_Photo from './assets/profile_photo.jpeg';

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(<div><h1>Hello React! 😁</h1> <img src={prifile_Photo} /></div>)
