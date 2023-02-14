import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        //console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return !data ? (
    <div>No data</div>
  ) : (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.username}</td>
              <td>{d.email}</td>
              <td>{d.address.street}</td>
              <td>{d.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
