import React from 'react';
import ReactDOM from 'react-dom/client';
import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx';

function MyApp(){
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}
const anotherElement = (
    <a href = "https://google.com" target='_blank'>vist google</a>
)
const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    anotherUser
)

const root = ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement
)