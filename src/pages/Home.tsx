import { useEffect, useState } from "react";
import { UsersType } from "../types/user";
import UserCard from "../compannets/UserCard";


const url = "https://jsonplaceholder.typicode.com/users";

const Home = () => {
  const [users, setUsers] = useState<UsersType>([]);

  const getUsers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default Home;
