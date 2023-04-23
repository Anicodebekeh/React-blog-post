import { Link } from "react-router-dom"
// the property blogs from Home will be on this props object
// you can also destructure this by simply writing the variables eg BlogList = ({blogs, title})
const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    
    return (  
        <div className="blog-list">
            <h2>{ title }</h2>
             {blogs.map(blog =>(
                <div className="blog-preview" key={blog.id}>
                   <Link to={`/blogs/${ blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                   </Link>
                </div>
            ))} 
        </div>
    );
}
 
export default BlogList;