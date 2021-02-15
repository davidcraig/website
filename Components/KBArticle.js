import * as React from 'react'
import App from './App'
import Head from 'next/head'

/**
 * 
 * @param {object} props
 * @param {string} props.title Article title
 */
const KBArticle = (props) => {
    return (
      <article>
        <Head>
          <meta charSet='utf-8' />
          <title>David Craig - KB - {props.title}</title>
        </Head>
        <App>
          {props.children}
        </App>
        
      </article>
    )
}

export default KBArticle
