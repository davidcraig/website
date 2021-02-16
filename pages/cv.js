import Head from 'next/head'
import App from '../Components/App'
import { Card } from '@davidcraig/react-bulma'

const experience = { dev: 5 }
experience.php = experience.dev + 2
experience.ruby = experience.dev - 3
experience.css = experience.dev + 5
experience.modernJs = experience.dev - 2

const skills = [
  { name: 'PHP', age: experience.php, description: 'I am an expert Laravel developer, proficient in functional and object oriented techniques, modern development practices such as composer, phpunit testing, PSR-2 coding standards.' },
  { name: 'HTML / CSS', age: experience.css, description: 'I learned HTML and CSS as a child and am very familiar with structuring pages correctly.  I have continued to develop my skills with CSS by keeping up to date with the latest tooling and methodologies, such as LESS/SASS, BEM and SMACCS.' },
  { name: 'JavaScript / jQuery', age: experience.php },
  { name: 'Git', age: experience.dev },
  { name: 'VueJS / React', age: experience.modernJs },
  { name: 'Ruby / Rails', age: experience.ruby },
  { name: 'Agile', age: experience.dev }
]

const history = [
  {
    employer: 'Sage',
    jobTitle: 'Developer',
    from: '21 January 2019',
    to: 'Current',
    description: 'Working on the Cloud Accounting platform my responsibilities include maintenance of the code base, fixing bugs, creating new features, code review and testing.  Currently using Ruby on Rails and React using both Flux and Redux store patterns.'
  },
  {
    employer: 'Redu',
    jobTitle: 'Developer',
    from: '18 October 2017',
    to: 'December 2018',
    description: 'Development and maintenance of systems in WordPress and Laravel, working closely with the technical lead to make decisions relating to architecture and devops/build pipeline. I was also responsible for maintaining the build process and ensuring code builds successfully and is then deployed to production.  As part of this role I have also had part responsibility for coaching the developer apprentice on the team.'
  },
  {
    employer: 'The Roundhouse',
    jobTitle: 'Developer',
    from: '3 April 2017',
    to: '26 September 2017',
    description: 'Development and maintenance of WordPress websites, also worked on a Drupal 7 project building a new theme.'
  },
  {
    employer: 'NECS',
    jobTitle: 'Developer',
    from: '4 January 2016',
    to: '31 March 2017',
    description: 'Maintaining over 100 WordPress GP websites including performing upgrades to themes and plugins, creating new themes and plugins.'
  },
  {
    employer: 'Accenture',
    jobTitle: 'Developer',
    from: '23 June 2014',
    to: '1 January 2016',
    description: 'I worked at Accenture as a Software Developer Analyst.  The project I had been mostly working on was for a global television broadcaster. My responsibility on the project was to develop a high quality scalable api which: conforms to modern coding standards (PSR2/4) and is well tested (unit tests).'
  },
  {
    employer: 'Sage',
    jobTitle: 'Technical Support Agent',
    from: '6 June 2011',
    to: '25 April 2014',
    description: 'At Sage I worked in the Accountants Division of Sage, providing technical support for accountants on the Sage 50 applications (payroll and accounts).  In this role I also developed a PHP application in CodeIgniter which aimed to help identify areas where the business does well, and those which could improve.'
  }
]

export default function CV() {
  return (
    <>
      <Head>
        <title>David Craig | CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id='cv'>
        <App>
          <Card title='David Craig - Curriculum Vitae'>
            <section>
              <p>I have worked as a web developer for over {experience.dev} years and have gained experience that takes some senior developers years to master.</p>
              <p>I am able to create highly focused well unit tested code that conforms to coding standards and follow <span className='buzzword programming'>SOLID</span> principals.</p>
            </section>

            <section>
              <h5 className='h5'>Programming Skills</h5>
              <ul>
                {
                  skills.map(skill => {
                    return <li key={skill.name}><em className='programming-skill'>{skill.name}</em> - {skill.age} Years {skill.description ? ` - ${skill.description}` : ''}</li>
                  })
                }
              </ul>
            </section>

            <section>
              <h5 className='h5'>Work History</h5>

              <table>
                <tbody>
                  {history.map(job => {
                    const dateRange = `${job.from} - ${job.to}`
                    return (
                      <>
                        <tr>
                          <td className='employer'>{job.employer}</td>
                          <td className='employment-date has-text-right'>{dateRange}</td>
                        </tr>
                        <tr>
                          <td colSpan={2} style={{ paddingBottom: '12px' }}>{job.description}</td>
                        </tr>
                      </>
                    )
                  })}
                </tbody>
              </table>
            </section>
          </Card>
        </App>
      </div>
    </>
  )
}
