import React from 'react'
import App from '../../Components/App'
import Head from 'next/head'

const archives = {
  2011: [
    {
      slug: 'installing-ruby-on-rails-on-windows-xp',
      name: 'Installing Ruby on Rails on Windows XP'
    },
    {
      slug: 'windows-7-automatic-login',
      name: 'Windows 7 - Automatic Login'
    }
  ],
  2014: [
    { slug: 'setting-up-bash-alias', name: 'Setting up a bash alias' }
  ],
  2020: [
    { slug: 'watching-database-columns', name: 'Watching a database column for changes' }
  ],
}

// markup
const BlogArchives = () => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='description' content="David Craig's Blog Archives" />
        <title>David Craig - Blog</title>
      </Head>
      <App>
        <h1 className='h1'>Blog Archives</h1>
        {
          Object.keys(archives).map(year => {
            const posts = archives[year]
            return (
              <React.Fragment key={year}>
                <h2 className='h2'>{year}</h2>
                <ul>
                  {posts.map(post => {
                    return (
                      <li key={post.slug}>
                        <a href={`/blog/archives/${year}/${post.slug}`}>{post.name}</a>
                      </li>
                    )
                  })}
                </ul>
              </React.Fragment>
            )
          })
        }
      </App>
    </>
  )
}

export default BlogArchives
