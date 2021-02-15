import * as React from 'react'
import BlogArticle from '../../../../Components/BlogArticle'
import Code from '../../../../Components/Theme/Code'

// markup
const IndexPage = () => {
  return (
    <BlogArticle
      title='Setting up a bash alias'
      datetime='2014-07-09'
      date='9 July 2014'
    >
      <p>In my day-to-day work I am using Vagrant with VirtualBox which provides an easy to setup development environment pre-configured with ubuntu, php, mysql and nginx.</p>
      <p>One thing that helps save time is reducing the time spent writing terminal commands, this is where a bash alias comes in handy.</p>
      <p>To set one up you need to ssh into the vagrant machine (I use putty on windows), and then type in</p>

      <p><Code type='terminal'>vim ~/.bashrc</Code></p>

      <p>this opens your bashrc file in the editor vim, to begin editing the file use the insert (ins) key.</p>
      <p>You can add your alias's anywhere in this file.</p>

      <p><Code type='vim'>alias gs="git status"</Code></p>

      <p>After typing your aliases in you need to first exit insert mode by pressing <kbd>Esc</kbd>, then type <kbd>:</kbd><kbd>w</kbd> and hit enter to save your changes and <kbd>:</kbd><kbd>q</kbd> should quit vim.</p>
      <p>To check our alias works without requiring a machine reboot we need to apply the changes from our .bashrc file, to do this from the terminal type</p>

      <p><Code type='terminal'>source ~/.bashrc</Code></p>

      <p>Your aliases should now work!</p>

      <p>One handy alias I like to add is <Code type='vim'>alias reload=". ~/.bashrc"</Code> - This allows me to just type <Code type='terminal'>reload</Code> in my shell after making changes to my rc file instead having to type <Code type='terminal'>. ~/.bashrc</Code>, while this isn't many keystrokes, it is a lot easier to remember (although I have muscle memory for both at this point).</p>
    </BlogArticle>
  )
}

export default IndexPage
