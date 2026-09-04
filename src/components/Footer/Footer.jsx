import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h2>JobConnect</h2>
          <p>Find your dream job and take the next step in your career.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Find Jobs</p>
          <p>Companies</p>
          <p>Contact</p>
        </div>

        <div>
          <h3>For Job Seekers</h3>
          <p>Browse Jobs</p>
          <p>Career Advice</p>
          <p>Create Profile</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Email: support@jobconnect.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 JobConnect. All rights reserved.</p>
      </div>
    </footer>
  )
}
export default Footer
