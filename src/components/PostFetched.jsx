import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { TbCircleDotFilled } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";

import "./PostFetched.css";
import PostIcon from "./PostIcon";

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
        <img
          loading="lazy"
          src={post.user?.profile_image.small}
          alt={post.id}
        />
        <div className="post__owner">
          <div className="owner">
            <span className="post__ownerName">
              {post.user?.first_name || "" + " " + post.user?.last_name || ""}
            </span>
            <TbCircleDotFilled color="green" />
            <span style={{ color: "rgb(235, 102, 124)", fontWeight: "bold" }}>
              Follow
            </span>
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
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__footerIconsLeft">
            <PostIcon icon={<AiOutlineHeart color="red" />} text={0} />
            <PostIcon icon={<FaRegCommentDots />} text={0} />
            <h5>
              <MdAttachMoney color="green" /> 0.00{" "}
            </h5>
          </div>
          <BsBookmark />
        </div>
        <div className="post__footerInfo">
          <h5 className="post__ownerName">
            {post.user?.first_name || "" + " " + post.user?.last_name || ""}
          </h5>
          <p className="post__footerAll">View all comments</p>
          <p
            style={{
              color: "rgb(235, 102, 124)",
              fontWeight: "bold",
              fontSize: "0.8rem",
            }}
          >
            Add a comment
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostFetched;
