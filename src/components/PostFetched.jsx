import React from "react";
import "./PostFetched.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbCircleDotFilled } from "react-icons/tb";
function PostFetched({ post }) {
  function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
  return (
    <div style={{ maxWidth: "450px" }} className="post__fetch">
      <div className="post__header">
        <div className="post__owner">
          <div className="owner">
            <img
              loading="lazy"
              src={post.user?.profile_image.small}
              alt={post.id}
            />
            <span className="post__ownerName">
              {post.user?.first_name || "" + " " + post.user?.last_name || ""}
            </span>
            <TbCircleDotFilled color="green" />
            <span style={{ color: "#e755e7", fontWeight: "bold" }}>Follow</span>
          </div>
          <h5 className="post__time">
            {timeSince(new Date(post.created_at)) + " ago"}
          </h5>
        </div>
        <BsThreeDotsVertical />
      </div>
      <div className="post__image">
        <img
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          src={post.urls.regular}
          alt={post.id}
        />
      </div>
    </div>
  );
}

export default PostFetched;
