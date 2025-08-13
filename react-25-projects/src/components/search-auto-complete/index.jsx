import React, { use, useEffect, useState } from "react";
import Suggestions from "./suggestions";

function SearchAutoComplete() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
        const filteredData = users && users.length ? users.filter((item) => item.toLowerCase().indexOf(query) > -1) : []
        setFilteredUsers(filteredData);
        setShowDropDown(true);
    } else {
        setShowDropDown(false);
    }

  }

  async function fetchUsersData(params) {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((user) => user.firstName));
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  function handleClick(e) {
     setSearchParam(e.target.innerText);
     setShowDropDown(false);
     setFilteredUsers([]);
  }
  useEffect(() => {
    fetchUsersData();
  }, []);

  console.log(users)
  console.log(filteredUsers)
  return (
    <div>
      {
        loading ? <p>Loading data! Please wait.</p> 
        :
        <input
        name="search-users"
        type="text"
        value={searchParam}
        placeholder="Enter Username here..."
        onChange={handleChange}
      />
      }
      {
        showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers}/>
        
      }
    </div>
  );
}

export default SearchAutoComplete;
