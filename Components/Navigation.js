import React from 'react'
import Link from 'next/link'

const navItems = [
  { url: '/', name: 'About' },
  { url: '/cv', name: 'CV' },
  { url: '/blog/archives', name: 'Blog' }
]

export default function Navigation() {
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
              <Link key={nav.name} href={nav.url}>{nav.name}</Link>
            </li>
          })
        }
      </ul>
    </aside>
  )
}
