import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const api = " https://dummyjson.com/products";

const App = () => {
  const [data, useData] = useState("");
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((d) => useData(d))
      .catch((e) => e);
  }, []);

  return (
    <div>
      <h1>
        <pre>{data && JSON.stringify(data)}</pre>
      </h1>
    </div>
  );
};

export default App;
