import * as React from 'react'

export default function ExternalLink(url, text) {
  return <a href={url} target='_blank' rel='noopener noreferrer'>
    {text}
  </a>
}
