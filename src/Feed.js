import "./Feed.css"
import Post from './Post.js';

const Feed = () => {
  return (
    <div className='Feed-Div'>
      <h2>Feed</h2>
      <Post />
      <Post />
    </div>
  )
}

export default Feed;
