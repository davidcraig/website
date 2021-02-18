import React from 'react'
import App from '../../Components/App'
import { Card } from "@davidcraig/react-bulma"
import { ItemGrid } from '@davidcraig/react-bulma';

const videos = [
  {
    source: 'YouTube',
    yt: 'ecIWPzGEbFc',
    title: 'The Future of Programming',
    author: '"Uncle" Bob Martin',
    date: '2016'
  },
]

function renderVideoCard(vid) {
  switch (vid.source) {
    case 'YouTube':
    default:
      return <Card key={vid.yt} ytVideo={vid.yt} title={vid.title}>
        <p><small>{vid.author} - {vid.date}</small></p>
      </Card>
      break;
  }
}

export default function ProgrammingVideos() {
  return (
    <App>
      <h1 className='h1'>Programming Videos</h1>
      <ItemGrid columns={5}>
        { videos.map(v => renderVideoCard(v)) }
      </ItemGrid>
    </App>
  )
}
