import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Header from './components/Header/Header';
import Main from './components/Layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
