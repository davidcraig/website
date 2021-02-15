import Head from 'next/head'
import { WebSite } from '@davidcraig/react-schema'
import { PersonJson } from '@davidcraig/react-schema/dist/Person/Person'

export default function Home() {
  const davidPerson = PersonJson({
    name: 'David Craig',
    sameAs: 'https://www.facebook.com/dcraig86'
  })

  return (
    <div>
      <Head>
        <title>David Craig - Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WebSite
        name='David Craig'
        description='Personal website for David Craig, software developer'
        about={davidPerson}
        author={davidPerson}
        accountablePerson={davidPerson}
        isFamilyFriendly='True'
      />
    </div>
  )
}
