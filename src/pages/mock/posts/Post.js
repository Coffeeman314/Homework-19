import React from 'react';
import { ReactComponent as Comment } from './assets/comment.svg';
import { ReactComponent as Like } from './assets/like.svg';
import { ReactComponent as Retwit } from './assets/retwit.svg';
import { ReactComponent as Share } from './assets/share.svg';
import { ReactComponent as Verified } from './assets/verified.svg';



const Post = ({ author, content, image, date }) => {
  return (
    <div className="post">
      <div className="postHeader">
        <div className="avatar">
          <img src={author.photo} alt="ANAKIN_Image" />
        </div>
        <div className="postHeaderContent">
          <span className="author">
            <span className="author-name">{author.name}</span>
            <Verified />
            <span className="author-nickname">{author.nickname}</span>
            <span className="point" />
            <span className="date">{date}</span>
          </span>
          <span className="lower-head">{content}</span>
        </div>
      </div>
      <div className="postMain">
        <img src={image} alt="Ray_Image" />
      </div>
      <div className="postFooter">
        <span className="footerItem">
          <Comment /> <p>482</p>
        </span>
        <span className="footerItem">
          <Retwit /> <p>146</p>
        </span>
        <span className="footerItem">
          <Like /> <p>887</p>
        </span>
        <span className="footerItem">
          <Share />
        </span>
      </div>
    </div>
  );
};

export default Post;
