import React, { useState } from 'react'
import Head from 'next/head'
import App from '../Components/App'
import { Card } from '@davidcraig/react-bulma'
import JSXJoin from '../Functions/JSXJoin'

const NextJS = { name: 'NextJS', url: 'https://nextjs.org/' }
const Netlify = { name: 'Netlify', url: 'https://www.netlify.com/' }
const Bulma = { name: 'Bulma', url: 'https://bulma.io/' }
const Highcharts = { name: 'Highcharts', url: 'https://www.highcharts.com/' }

const myProjects = [
  {
    name: 'SmartWealth',
    date: 'June 2021',
    description: (
      <p>
        <a href='https://smartwealth.netlify.app' target='_blank' rel='noopener noreferrer'>SmartWealth</a> is an in-browser web app to track and forecast investing.
        Source can be viewed at <a href='https://github.com/davidcraig/smartwealth' target='_blank' rel='noreferrer noopener'>GitHub</a>
      </p>
    ),
    stack: [
      NextJS, Bulma, Netlify, Highcharts
    ],
    images: [
      '/images/projects/smartwealth/SmartWealth-Forecast.png',
      '/images/projects/smartwealth/SmartWealth-Goals.png',
      '/images/projects/smartwealth/SmartWealth-Holdings.png',
      '/images/projects/smartwealth/SmartWealth-Screener.png',
      '/images/projects/smartwealth/SmartWealth-Stats-Diversification.png'
    ]
  }
]

function ImageViewer ({ image, setViewingImage }) {
  return (
    <>
      <div className='lightbox' style={{ padding: '1rem' }}>
        <div
          className='close'
          onClick={() => { setViewingImage(null) }}
          style={
            {
              backgroundColor: '#ececec',
              minWidth: '1em',
              minHeight: '1em',
              color: '#131313',
              fontWeight: 'bold',
              padding: '1em',
              float: 'right',
              marginBottom: '10px',
              border: '1px solid var(--bg-2)'
            }
          }
        >
          X
        </div>
        <img src={image} />
      </div>
    </>
  )
}

function ImageGroup ({ images, setViewingImage }) {
  const groupStyle = {
    display: 'flex',
    flexWrap: 'wrap'
  }
  const imageStyle = {
    height: '250px',
    width: 'auto',
    marginRight: '8px',
    marginBottom: '8px'
  }

  return (
    <div className='images' style={groupStyle}>
      {
        images.map(img => {
          return <img onClick={() => { setViewingImage(img) }} key={img} src={img} style={imageStyle} />
        })
      }
    </div>
  )
}

function Projects () {
  const [viewingImage, setViewingImage] = useState(null)

  const renderStack = (project) => {
    if (project.stack && project.stack.length > 0) {
      const stack = project.stack.map(tool => {
        if (typeof tool === 'string') {
          return tool
        } else {
          if (tool.url) {
            return <a target='_blank' rel='noopener noreferrer' href={tool.url}>{tool.name}</a>
          }
          return tool.name
        }
      })

      return <p>{JSXJoin(stack)}</p>
    }

    return ''
  }

  return (
    <>
      <Head>
        <title>David Craig - Projects</title>
        <meta name='description' content='Web C.V. for David Craig, Web Developer from England.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {
        viewingImage !== null && (
          <ImageViewer image={viewingImage} setViewingImage={setViewingImage} />
        )
      }

      {
        viewingImage === null &&
        (
          <App>
            <h1 className='h1'>Projects</h1>
            {
              myProjects.map(project => (
                <Card key={project.name} title={project.date ? `${project.name} - ${project.date}` : `${project.name}`}>
                  {project.description}
                  {renderStack(project)}
                  <ImageGroup images={project.images} setViewingImage={setViewingImage} />
                </Card>
              ))
            }
          </App>
        )
      }
    </>
  )
}

export default Projects
