import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';





function BlogArea() {
    const {onePost, setOnePost} = useState ({});

    const {id} = useParams()

    const setPost = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts/${id}')
        let onePost = await res.json();
        setOnePost(onePost);
    }
    return (
        <div class="card" style="width: 18rem;">
            <div className="card-body">
                <h5 className="card-title">{onePost.title}</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary"> Go somewhere</a>
            </div>
        </div>
    )
}

export default BlogArea;