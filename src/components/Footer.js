import React from 'react'
import SocialLinks from '../constants/socialLinks'
const Footer = () => {
  return <Footer className="footer">
    <div>
      <SocialLinks styleClass="footer-icons"/>
      <p>
        &copy;{new Date().getFullYear()} MDXBlog, All rights reserved
      </p>
    </div>
  </Footer>
}

export default Footer
