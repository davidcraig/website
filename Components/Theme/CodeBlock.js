import { Columns } from '@davidcraig/react-bulma/dist/Columns/Columns'
import React from 'react'
import Code from './Code'

export default function CodeBlock(props) {
  return (
    <div className='codeblock'>
      <pre>
      {
        props.code.map(line => {
          console.log(line)
          return (
            <>
              <Code type={props.type}>{line}</Code>
              <br />
            </>
          )
        })
      }
      </pre>
    </div>
  )
}
