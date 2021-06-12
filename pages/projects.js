import React, { useState } from 'react'
import Head from 'next/head'
import App from '../Components/App'
import { Card } from '@davidcraig/react-bulma'

const myProjects = [
  {
    name: 'SmartWealth',
    description: (
      <p>
        <a href='https://smartwealth.netlify.app' target='_blank' rel='noopener noreferrer'>SmartWealth</a> is an in-browser web app to track and forecast investing.
      </p>
    ),
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
              marginBottom: '10px'
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
                <Card key={project.name} title={project.name}>
                  {project.description}
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
