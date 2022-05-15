import React from 'react';
const posts = require('../../data/posts');


const PostList = () => {
    console.log(posts);
    return (
        <ul>
            {posts.map(({Name, Img, Date, idx}) =>(


                <li key={idx}>
                    <div>
                        <p>
                            {Name}
                        </p>
                        <img src={Img}/>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default PostList;
