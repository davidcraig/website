import React, { Fragment } from 'react'
import Code from './Code'

export default function CodeBlock (props) {
  return (
    <div className='codeblock'>
      <pre>
        {
          props.code.map(line => {
            return (
              <Fragment key={line}>
                <Code type={props.type}>{line}</Code>
                <br />
              </Fragment>
            )
          })
        }
      </pre>
    </div>
  )
}
