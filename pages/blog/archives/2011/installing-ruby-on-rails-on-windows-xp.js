import * as React from "react"
import BlogArticle from '../../../../Components/BlogArticle'
import Code, { terminalArg } from '../../../../Components/Theme/Code'

// markup
const WindowsXpRailsArticle = () => {
  return (
    <BlogArticle
      title='Installing Ruby on Rails on Windows XP'
      datetime='2011-02-06'
      date='6 Feb 2011'
      description='A guide to installing Ruby on Rails on Windows XP'
      keywords={['windows', 'ruby', 'rails', 'guide', 'tutorial']}
    >
      <h2 className='h2'>Installation</h2>
      <p>First of all, simply run the Ruby installer from the website, then download the ruby gems setup, extract all of the files, and run setup.rb - this installs gems.</p>

      <p>I would strongly recommend rebooting at this point.</p>

      <p>This is where I found the documentation let me down, it simply says open up a ruby console, and the default one never seems to work (Interactive Ruby Console).</p>

      <p>So we go to our start menu, and then Ruby &gt; RubyGems and open up the Ruby Gems Console, this gets us into a working console where we can then run</p>

      <p><Code type='terminal'>gem update –system</Code> - this checks the core ruby and gems for an update as far as i’m aware.</p>

      <p><Code type='terminal'>gem install rake</Code> - rake is ruby make, required for RoR though I didn't see it mentioned in the docs at the time ;).</p>

      <p><Code type='terminal'>gem install rails</Code> - hopefully no need to explain why :P</p>

      <p><Code type='terminal'>gem install mongrel</Code> - mongrel is a local testing server - similar to apache.</p>

      <p>Now we are ready to start our application. In the console type:</p>

      <p><Code type='terminal'>rails myapp</Code> (change myapp to the name of your application/site)</p>
      <p>now the command prompt shows it has installed a few default files and since I ran at C:\\Ruby, the files are</p>
      <p>located in C:\\Ruby\\myapp</p>
      <p>now i’m going to start mongrel</p>
      <p>so at the prompt I type <Code type='terminal'>cd myapp</Code> (since i’m already in the ruby folder)</p>
      <p>and now the command</p>
      <p><Code type='terminal'>mongrel_rails start -d</Code></p>
      <p>of course being on XP I get a firewall dialogue, so I choose to allow it.</p>
      <p>the last line when you run this command gives us the details of the server</p>
      <p>**Mongrel 1.1.5 available at 0.0.0.0:3000</p>
      <p>so to access our server we simply type in <a href='http://localhost:3000' target='_blank' rel='noopener noreferrer'>http://localhost:3000</a></p>
      <p>and you should see your ruby on rails enviroment all ready to use! (you need to keep that console open unless you install the mongrel service)</p>

      <h2 className='h2'>To run mongrel as a service</h2>

      <p><Code type='terminal'>gem install mongrel_service</Code></p>
      <p>then :</p>
      <p><Code type='terminal'>mongrel_rails service::install -N MyAppsServiceName -c c:\\Ruby\\myapp\\ -p 4000 -e production</Code></p>
      <p>the -N gives the service a custom name, so if you needed to ctrl-alt-del that’s the name that would appear</p>
      <p>the {terminalArg('-c')} is the change to directory - basically where you want your scripts to start from, aka the myapp folder</p>
      <p>the {terminalArg('-p')} is the port and the {terminalArg('-e')} is the mode you want to run it in.</p>
      <p>assuming this has worked correctly you can click start&gt;run type “services.msc” scroll down the list and</p>
      <p>find your app, right click it and start the service, you can now open up the port you specified in your</p>
      <p>browser and all should be swell</p>
      <p>Not quite as easy as the initial documentation suggested but I got there in the end..</p>
    </BlogArticle>
  )
}

export default WindowsXpRailsArticle
