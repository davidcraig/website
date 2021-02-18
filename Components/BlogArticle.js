import * as React from "react"
import App from './App'
import Head from 'next/head'

/**
 * 
 * @param {object} props
 * @param {string} props.title Article title
 * @param {string} props.datetime Machine date eg 2011-02-06
 * @param {string} props.date Human readable date
 */
const BlogArticle = (props) => {
    return (
      <>
        <Head>
          <meta charSet='utf-8' />
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
