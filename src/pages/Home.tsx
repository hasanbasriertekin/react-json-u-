import{ useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

const Home = () => {

    const [users, setUsers]= useState([]);

  const getUsers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data);
  };

useEffect(()=>{
  getUsers();
} );


  return <div>Home</div>;
};

export default Home;
