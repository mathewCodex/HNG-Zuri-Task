import react from "react";
import { useState, useEffect } from "react";
import BlogList from "./blogList";
import useFetch from "./usefecth";

const Home = () => {
  //   const handleClick = () => {
  //     let name = "Mathew";
  //   };
  //   const handleClickagain = (name) => {
  //     console.log("Hello, You Clicked again!" + name);
  //     name = "Cole";

  //   };

  //Using static
  // const [name, setName] = useState("mathew");
  // const [age, setAge] = useState(25);
  // const handleClick = () => {
  //   setName("luigi");
  //   setAge(30);
  // };
  //2, Outputting List

  //creating another state ..
  //const [name, setName] = useState("mario");
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };
  //importing fetch function..
  const {
    data: blogs,
    isPending,
    Error,
  } = useFetch("https://localhost:8000/blogs");
  return (
    <div className="home">
      {Error && <div>{Error}</div>}

      {isPending && <div>loading...</div>}
      {blogs && <BlogList blogs={(blogs = { blogs })} title="All Blogs" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Mathew")}
        title="mathew's blogs"
      /> */}
      {/* <button onClick={() => setName("Mathew")}>Change name</button> */}
    </div>
  );
};

export default Home;
