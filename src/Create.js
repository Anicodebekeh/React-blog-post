import { useState } from "react";
import { useHistory } from "react-router-dom";




const Create = () => {
    const [title, setTitle]=useState('');
    const [body, setBody]=useState('');
    const [author, setAuthor]=useState('mario');
    const [isPending, SetIsPending]= useState(false);
    const history = useHistory();

    const handleSubmit =(e)=>{
        e.preventDefault();
        // json will automatically add the id property
        const blog = {title, body, author};

        SetIsPending(true)


       fetch("http://localhost:8000/blogs", {
        method:"POST",
        // type of content sent with this request
        headers: {"Content-Type": "application/json"},
        // the data we are sending
        // JSON.stringify turns the object into a string before it is posted to the server
        body: JSON.stringify(blog)
       }).then(() => 
        {
        console.log("added");
        SetIsPending(false);
        });
       setTitle('');
       setBody('');
       setAuthor('');

       history.push("/");
    };

   
       

    return (  
        <div className="create"> 
            <h2>Add a New Blog</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required 
                value = {title}
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}/>

                <label>Blog body:</label>
                <textarea  
                value={body}
                onChange={(e) =>{
                    setBody(e.target.value)
                }} required></textarea>

                <label>Blog author:</label>
                <select 
                value = {author}
                onChange={(e)=>{
                    setAuthor(e.target.value)
                }}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                
                </select>

                {!isPending && <button>Add blog</button>}
                {isPending && <button>Loading ...</button>}
            </form>
        </div>

    );
}
 
export default Create;