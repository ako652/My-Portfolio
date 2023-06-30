import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <div className='h-24 bg-black text-white border-indigo-200 p-20'>
      <FacebookIcon />
      <LinkedInIcon />
      <GitHubIcon/>
    </div>
  )
}
