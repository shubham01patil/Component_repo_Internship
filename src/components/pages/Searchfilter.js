import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Searchfilter.css";


export default function SearchFilter() {
  const [data, setData] = useState([]);
  const [searchApiData, setsearchApiData] = useState([]);
  const [filterVal, setfilterVal] = useState(" ");
  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3001/users")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setsearchApiData(json);
        });
    };
    fetchData();
  }, []);

  const handleFilter = (e) => {
    if (e.target.value == " ") {
      setData(searchApiData);
    } else {
      const filterResult = searchApiData.filter(
        (item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.username.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (filterResult.length > 0) {
        setData(filterResult);
      } else {
        setData([{ name: "No Data" }]);
      }
      setfilterVal(e.target.value);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Employee Page</h1>
        <div className="search-filter">
          <input type="search" className="mb-3" placeholder="Search here" value = {filterVal} onInput={(e)=>handleFilter(e)} />
        </div>
        <table class="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>
                    <Link className="btn-outline-dark m-3 disabled" to={`/view/${item.id}`}><i class="fa-solid fa-eye"></i></Link>
                    </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

