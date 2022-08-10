import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from './Product'

export const Search = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`http://localhost:3000?q=${query}`);
        setData(res.data);
      };
      if (query.length === 0 || query.length > 2) fetchData();
    }, [query]);
    
    return (
      <div className="app">
          <input
            className="search"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        {<Product data={data} />}
      </div>
    );
    }

export default Search
