import React from 'react'
import Link from 'next/link'

const siteTitle = 'David Craig - Developer'

const navItems = [
  { url: '/', name: 'About' },
  { url: '/cv', name: 'CV' },
  { url: '/blog/archives', name: 'Blog' }
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
              <Link href={nav.url}>{nav.name}</Link>
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
          <div className='content'>
            {props.children}
          </div>
        </div>
      </main>
    </div>
  )
}
