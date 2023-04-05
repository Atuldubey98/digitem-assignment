import "./PostIcon.css";

import React from "react";

function PostIcon({ text, icon }) {
  return (
    <div className="post__icon">
      <h5>{text}</h5>
      {icon}
    </div>
  );
}

export default PostIcon;
