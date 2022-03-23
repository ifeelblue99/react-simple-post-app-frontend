import React from 'react';
import '../style';

export default function Post(props) {
  const { imageUrl, title, content, author } = props.item;
  return (
    <div className="card">
      <img alt="image" src={imageUrl} />
      <span className="info-span">Title</span>
      <span className="info">{title}</span>
      <span className="info-span">Content</span>
      <p className="info">{content}</p>
      <span className="info-span">Author</span>
      <span className="info">{author}</span>
    </div>
  );
}
