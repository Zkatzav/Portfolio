import React from 'react';

import { AiFillLinkedin } from 'react-icons/ai';
import { GoMail } from 'react-icons/go';
import { AiOutlineGithub } from 'react-icons/ai';
import profile from '../profile.jpeg';

import { useClipboard } from 'use-clipboard-copy';

const Contact = () => {

  const clipboard = useClipboard({
    copiedTimeout: 800,
  });

  return (
    <div className="container">
      <div className="contact">
        
        <div>
          <img src={profile} alt="myimage" className="contact-img" />
          <bold>Ziv Katzav</bold><span>Fullstack Web Developer</span>
        </div>
        
        <br />
        
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/ziv-katzav-601629182/">
            <AiFillLinkedin size='4em' color="0e76a8" />
          </a>
          <button onClick={() => clipboard.copy('zkatzav@gmail.com')}>
            {clipboard.copied ? 'Copied mail' : <GoMail size='4em' color='d62f2f' />}
          </button>
          <a href="https://github.com/Zkatzav">
            <AiOutlineGithub size='4em' color="black" />
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Contact;