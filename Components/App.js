import React from 'react'

const siteTitle = 'David Craig - Developer'

const navItems = [
  { url: '/', name: 'About' },
  { url: '/cv', name: 'CV' },
  { url: '/blog', name: 'Blog' }
]

function Navigation() {
  return (
    <aside class="menu">
      <p class='menu-label brand'>
        David Craig<br/>
        Developer
      </p>
      <ul class="menu-list">
        {
          navItems.map(nav => {
            return <li>
              <a href={nav.url}>{nav.name}</a>
            </li>
          })
        }
      </ul>
    </aside>
  )
}

export default function App (props) {
  return (
    <div id='site'>
      <Navigation />
      <main>
        <div className='container'>
          {props.children}
        </div>
      </main>
    </div>
  )
}
