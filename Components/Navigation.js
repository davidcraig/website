import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navItems = [
  { url: '/', name: 'About' },
  { url: '/cv', name: 'CV' },
  { url: '/blog/archives', name: 'Blog' }
]

export default function Navigation() {
  const router = useRouter()
  const currentRoute = router.pathname
  return (
    <aside className="menu">
      <p className='menu-label brand'>
        David Craig<br/>
        Developer
      </p>
      <ul className="menu-list">
        {
          navItems.map(nav => {
            return <li className={currentRoute == nav.url ? 'is-active' : ''}>
              <Link key={nav.name} href={nav.url}>{nav.name}</Link>
            </li>
          })
        }
      </ul>
    </aside>
  )
}
