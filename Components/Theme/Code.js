import * as React from 'react'

export const terminalArg = (arg) => {
  return <code className='terminal'><span className='argument'>{arg}</span></code>
}

const RenderGeneric = (children) => {
  if (typeof children === 'string') {
    return <span className='command'>{children}</span>
  }

  return children.map((child) => {
    if (child.match('{') && child.match('}')) {
      return <span className='variable'>{child}</span>
    }
    return child
  })
}

const RenderSql = (children) => {
  const keywords = [
    'use', 'USE',
    'delimiter', 'DELIMETER',
    'create', 'CREATE',
    'table', 'TABLE',
    'after', 'AFTER',
    'update', 'UPDATE',
    'on', 'ON',
    'join', 'JOIN',
    'insert', 'INSERT',
    'into', 'INTO',
    'FOR', 'EACH', 'ROW',
    'NOW()'
  ]

  if (typeof children === 'string') {
    if (children.match(' ')) {
      children = children.split(' ')
    } else {
      return <span className='command'>{children}</span>
    }
  }

  // Because array may not have clean breaks lets re-break it
  const merged = children.join(' ')
  const separated = merged.split(' ')

  return separated.map((child) => {
    if (child.match('{') && child.match('}')) {
      return <span className='variable'>{child}</span>
    }
    if (keywords.includes(child)) {
      return <span className='command'>{child}</span>
    }
    return child
  }).reduce((accu, elem) => {
    return accu === null ? [elem] : [...accu, ' ', elem]
  }, null)
}

const RenderTerminal = (children) => {
  const commands = [
    'mkdir', 'chown', 'chgrp', 'ls', 'dir', 'cd',
    'useradd', 'adduser', 'passwd', 'groups', 'usermod',
    /* Programming Language */
    'gem', 'ruby', 'php', 'rails'
  ]

  if (typeof children === 'string') {
    if (children.match(' ')) {
      children = children.split(' ')
    } else {
      return <span className='command'>{children}</span>
    }
  }

  // Because array may not have clean breaks lets re-break it
  const merged = children.join(' ')
  const separated = merged.split(' ')

  return separated.map((child, index) => {
    if (child.match('{') && child.match('}')) {
      return <span className='variable'>{child}</span>
    }
    if (commands.includes(child) || index === 0) {
      return <span className='command'>{child}</span>
    }
    if (child.match('-{1,2}[a-zA-Z]')) { return <span className='argument'>{child}</span> }
    if (child === '&&') { return <span className='chain'>{child}</span> }
    return child
  }).reduce((accu, elem) => {
    return accu === null ? [elem] : [...accu, ' ', elem]
  }, null)
}

export const Code = (props) => {
  switch (props.type) {
    case 'terminal':
    case 'vim':
      return (
        <code className='terminal'>
          {RenderTerminal(props.children)}
        </code>
      )
    case 'sql':
      return (
        <code className='sql'>
          {RenderSql(props.children)}
        </code>
      )
    default:
      return (
        <code className='generic'>
          {RenderGeneric(props.children)}
        </code>
      )
  }
}

export default Code
