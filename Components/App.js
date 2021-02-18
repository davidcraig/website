import React from 'react'
import Navigation from './Navigation'

export default function App (props) {
  return (
    <div id='site'>
      <Navigation />
      <main>
        <div className='container'>
          <div className='content'>
            {props.children}
          </div>
        </div>
      </main>
    </div>
  )
}
