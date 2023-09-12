import React, { useEffect, useState } from 'react'
import Post from './Post'
import db from '../firebase'

const Feeds = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);


  return (
    <section className='w-full p-1 rounded-lg flex flex-col justify-center gap-5 shadow-md'>

      {
        posts.map((post) => (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            user={post.data.user}
            timestamp={post.data.timeStamp}
            postcontent={post.data.postcontent}
            postImage={post.data.postImage}
            likes={post.data.likes}
          />
        ))
      }
    </section>
  )
}

export default Feeds