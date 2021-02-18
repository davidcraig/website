import * as React from 'react'
import BlogArticle from '../../../../Components/BlogArticle'
import Code from '../../../../Components/Theme/Code'

// markup
const Win7AutoLogin = () => {
  return (
    <BlogArticle
      title='Windows 7 - Automatic Login'
      datetime='2011-02-10'
      date='10 Feb 2011'
      description='A guide to automatically logging in on windows 7'
      keywords={['windows', 'automatic', 'login']}
    >
      <p>This article guides you how to enable automatic login for Windows 7 if for whatever reason you have to click your account to login.</p>
      <p>Press windows &amp; R for run box</p>
      <p>type <Code type='terminal'>netplwiz</Code> or <Code type='terminal'>control userpasswords2</Code> <span className='guide-comment'>( either will work fine )</span></p>
      <p>Untick "Users must enter a user name and password to use this computer."</p>
      <p>You will then be prompted to enter default login details, just ok this box unless you have a password in which case type this in, then apply and restart, pc will auto-login</p>
    </BlogArticle>
  )
}

export default Win7AutoLogin
