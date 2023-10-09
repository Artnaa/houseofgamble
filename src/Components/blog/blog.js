import Button from "../Button/button"
import Blogcontent from "../blogcontent/blogconent";
import React from "react"
import './blog.css'

function Blog() {
  const bluebuttonStyle = {
    borderRadius: '24px',
    background: 'var(--main-blue-478-bf-9, #478BF9)',
    padding: "20px 73px",
    fontSize: "24px",
    fontWeight: 600,

  };

  return (
    <div className="welcome">
     
      <div className="conectToGambling">
        <h1>
          house of
          <span>gambling</span>
        </h1>
        <span>Raise your ROI with direct advertiser</span>
        <Button style={bluebuttonStyle}
          text="Become a Partner"
        />
      </div>

      <div className="blog">
        <h2>Blog</h2>

        <div className="blog_content">
          <div className="blog_window">
            <Blogcontent />
            <Blogcontent />
            <Blogcontent />
            <Blogcontent />
            <Blogcontent />
            <Blogcontent />
            <Blogcontent />
            <Blogcontent />
            <Blogcontent />
            <Blogcontent />
            <Blogcontent />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Blog