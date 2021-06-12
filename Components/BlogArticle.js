import React from 'react'
import App from './App'
import Head from 'next/head'

/**
 * BlogArticle
 * @param {object} props
 * @param {string} props.title Article title
 * @param {string} props.datetime Machine date eg 2011-02-06
 * @param {string} props.date Human readable date
 * @param {string} props.description Post description
 * @param {string} props.keywords Post keywords
 */
const BlogArticle = (props) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='description' content={props.description ?? 'A blog post by David Craig'} />
        <meta name='keywords' content={props.keywords ? props.keywords.join(', ') : 'BlogPost, Blog, Article'} />
        <title>David Craig - {props.title}</title>
      </Head>
      <App>
        <article className='blog-article'>
          <h1 className='h1'>{props.title}</h1>
          <p className='mb-4'><small>Published {props.date}</small></p>
          {props.children}
        </article>
      </App>
    </>
  )
}

export default BlogArticle
