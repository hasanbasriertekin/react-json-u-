import{ useEffect, useState } from "react";
import { UsersType } from "../types/user";
import Card from 'react-bootstrap/Card';

const url = "https://jsonplaceholder.typicode.com/users";

const Home = () => {

    const [users, setUsers]= useState<UsersType>([]);

  const getUsers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data);
  };

useEffect(()=>{
  getUsers();
} );

  return <div>
    {users.map((user) =>  
    <Card key={user.id} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
        <Card.Text>
        {user.email}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>)}
  </div>;
};

export default Home;
