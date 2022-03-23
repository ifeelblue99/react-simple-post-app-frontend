import React from 'react';
import Post from './Post';
import '../style';

export default function Posts() {
  const [postsArray, setPostsArray] = React.useState([]);

  React.useEffect(async () => {
    const data = await (await fetch('http://localhost:5500')).json();
    setPostsArray(data);
  }, []);

  return (
    <div id="posts">
      {postsArray.map((el) => {
        return <Post key={el._id} item={el} />;
      })}
    </div>
  );
}
