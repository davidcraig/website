import Head from 'next/head'
import App from '../Components/App'
import ExternalLink from '../Components/ExternalLink'
import { Columns, Column, Card } from '@davidcraig/react-bulma'
import { WebSite } from '@davidcraig/react-schema'
import { PersonJson } from '@davidcraig/react-schema/dist/Person/Person'
import dev from '../data/dev'

function tag(text, type = null) {
  const classes = ['tag']
  if (type) {
    classes.push(type)
  }

  return (
    <span className={classes.join(' ')}>
      {text}
    </span>
  )
}

function dcraigMedia () {
  return (
    <article className='media dcraig-intro-media'>
      <figure className='media-left'>
        <p
          className='image is-128x160'
          style={{
            backgroundImage: 'url(/images/me.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center'
          }}
        />
      </figure>
      <div className='media-content'>
        <div className='content'>
          <p>
            <strong>David Craig</strong>
            <br />
            {tag('Developer')} {tag('Father')} {tag('Husband')} {tag('Gamer')}
          </p>
        </div>
      </div>
    </article>
  )
}

function aboutMe () {
  return (
    <Card title='About Me'>
      <p>My name is David, I am a computer enthusiast who enjoys learning about and playing with new technology.</p>
      <p>I have been a developer for {dev.years} years before that I did customer services and technical support.</p>
      <p>When I am not working I enjoy unwinding by playing computer games and spending time with my family.</p>
    </Card>
  )
}

/* Links to my development profiles */
function devProfiles () {
  return (
    <Card title='Development Profiles'>
      <table className='table is-narrow'>
        <tbody>
          <tr>
            <td>Github</td>
            <td>
              {ExternalLink('https://github.com/davidcraig', 'davidcraig')}
            </td>
          </tr>
          <tr>
            <td>NPM</td>
            <td>
              {ExternalLink('https://www.npmjs.com/~davidcraig', '@davidcraig')}
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  )
}

export default function Home () {
  const davidPerson = PersonJson({
    name: 'David Craig',
    sameAs: 'https://www.facebook.com/dcraig86'
  })

  return (
    <>
      <Head>
        <title>David Craig - Developer</title>
        <meta name='description' content='WebPage about David Craig a Web Developer from the UK.' />
        <meta name='keywords' content='David Craig, Developer, UK, Portfolio, About, Profile' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <App>
        <Columns>
          <Column />
          <Column>{dcraigMedia()}</Column>
          <Column />
        </Columns>
        <Columns>
          <Column>
            {aboutMe()}
          </Column>
          <Column>
            {devProfiles()}
          </Column>
        </Columns>
      </App>

      <WebSite
        name='David Craig'
        description='Personal website for David Craig, software developer'
        about={davidPerson}
        author={davidPerson}
        accountablePerson={davidPerson}
        isFamilyFriendly='True'
      />
    </>
  )
}
