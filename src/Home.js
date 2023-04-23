import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // this use statehook provides us with a way of making a value reactive
    // the setName(it can be called anyname) is a function that gets called with the new value
    // when we output a list using a map method, each root element we return must have a key(id) property. and the must be unique.
    const {data:blogs, isPending, error} = useFetch('  http://localhost:8000/blogs')
   

    return (  
        <div className="home">
            {/* 'blogs{blogs}'  is a prop*/}
            {error && <div>{ error } </div>}
            {isPending && <div>loading...</div>}
           {blogs && <BlogList blogs={blogs} title='All Blogs!' /> }
           {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title = "marios's blog"/>    */}
        </div>
    );
}
  
export default Home;