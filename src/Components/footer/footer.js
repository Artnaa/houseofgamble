import "./footer.css"
import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
      <div className="footer_nav">
        <ul>
          <li>Terms & Conditions</li>
          <li>Cookies</li>
          <li>Contacts</li>
          <li>Careers</li>
          <li>Brand Guide</li>
        </ul>
      </div>

      <div className="social">
        <h3>Our social media:</h3>

        <div className="social_media_icons">

          <a href="https://twitter.com">
            <img src="./icons/sociaicons/Buttons - Socials-8.png" alt="icon" />
          </a>

          <a href="https://facebook.com">
            <img src="./icons/sociaicons/Buttons - Socials-1.png" alt="icon" />
          </a>

          <a href="https://instagram.com">
            <img src="./icons/sociaicons/Buttons - Socials-2.png" alt="icon" />
          </a>

          <a href="https://linkedin.com">
            <img src="./icons/sociaicons/Buttons - Socials-3.png" alt="icon" />
          </a>

          <a href="https://youtube.com">
            <img src="./icons/sociaicons/Buttons - Socials-4.png" alt="icon" />
          </a>

          <a href="https://tiktok.com">
            <img src="./icons/sociaicons/Buttons - Socials-5.png" alt="icon" />
          </a>

          <a href="https://telegram.com">
            <img src="./icons/sociaicons/Buttons - Socials-6.png" alt="icon" />
          </a>

          <a href="https://vk.com">
            <img src="./icons/sociaicons/Buttons - Socials-7.png" alt="icon" />
          </a>

        </div>
      </div>
    </footer>
  )
}
export default Footer