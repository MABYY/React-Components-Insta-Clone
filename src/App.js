/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React,{useState} from 'react';
import './App.css';
import Posts  from './components/Posts/Posts.js'
import SearchBar  from './components/SearchBar/SearchBar.js'
import dummyData from './dummy-data.js'

const App = () => {
  const[posts, setPosts] = useState(dummyData);

  const likePost = (postId) => {
    console.log('postId',postId)

    setPosts(posts.map((post => {
      return post.id === postId ? {...post, likes: post.likes + 1} : post;
    })))};
  
  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}
      <SearchBar/>
      <Posts posts={posts} likePost={likePost}/>
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
