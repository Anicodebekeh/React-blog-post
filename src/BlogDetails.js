import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom'
import { useState } from "react";



const BlogDetails = () => {
    // helps grab the route parameter from the browser
    const { id } = useParams();
    const history=useHistory();
    const {data: blog, error, isPending} = useFetch('  http://localhost:8000/blogs/' + id)

    const HandleDelete =()=>{
        fetch(' http://localhost:8000/blogs/' + blog.id, {
        method: "DELETE"
        }).then(()=> 
        {console.log("deleted")
        history.push("/")
        })
    }

     
    return (  
        <div className="blog-details">
           {isPending && <div>Loading...</div>}
           {isPending && <div>{ error }</div>}
           {blog && 
           (<article>
             <h2>{blog.title}</h2>
             <p>Written by {blog.author}</p>
             <div>{blog.body}</div>
             <button onClick={HandleDelete}>Delete</button>
            </article>)}
        </div>
    );
}
 
export default BlogDetails;