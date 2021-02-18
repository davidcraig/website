import Head from 'next/head'
import App from '../Components/App'
import ExternalLink from '../Components/ExternalLink'
import { Columns, Column, Card } from '@davidcraig/react-bulma'
import { WebSite } from '@davidcraig/react-schema'
import { PersonJson } from '@davidcraig/react-schema/dist/Person/Person'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils'

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

function dcraigMedia() {
  return (
    <article className="media dcraig-intro-media">
      <figure className="media-left">
        <p className="image is-128x160" style={{ backgroundImage: 'url(/images/me.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom center' }}>
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>David Craig</strong>
            <br />
            {tag('Developer')} {tag('Father')} {tag('Husband')} {tag('Gamer')}
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item">
              <span className="icon is-small"><i className="fas fa-reply"></i></span>
            </a>
            <a className="level-item">
              <span className="icon is-small"><i className="fas fa-retweet"></i></span>
            </a>
            <a className="level-item">
              <span className="icon is-small"><i className="fas fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  )
}

export default function Home() {
  const davidPerson = PersonJson({
    name: 'David Craig',
    sameAs: 'https://www.facebook.com/dcraig86'
  })

  return (
    <>
      <Head>
        <title>David Craig - Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App>
        <Columns>
          <Column></Column>
          <Column>{dcraigMedia()}</Column>
          <Column></Column>
        </Columns>
        <Columns>
          <Column>
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
          </Column>
          <Column>
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
