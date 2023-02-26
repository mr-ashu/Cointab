import React, { useEffect, useState } from "react";
import axios from "axios"
export const Home = () => {
  const [user, setUser] = useState("");
  const fetchuser = () => {
    fetch(`https://randomuser.me/api/`)
      .then((res) => res.json())
      .then((res) => {
        setUser(...res.results);
        axios.post(`http://localhost:8080`,{
            name: user.name,
            phone: user.phone,
            cell: user.cell,
            email: user.email,
            gender: user.gender,
            login: user.login,
            picture: user.picture,
            registered: user.registered
        }
     
          )
            .then((res) => {
                alert("sucess")
              console.log(res);
            });

      })
      .catch((err) => {
        console.log("err");
      });
  };

  console.log(user);
  useEffect(() => {

  }, []);

  return (
    <div>
      <h1>Home Page</h1>

      <div>
        <button onClick={fetchuser}>Fetch User</button>
        <button>Delete</button>
        <button>User Details</button>
      </div>
    </div>
  );
};
