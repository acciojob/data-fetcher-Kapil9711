import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const api = " https://dummyjson.com/products";

const App = () => {
  const [data, useData] = useState("");
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((d) => useData(d));
  }, []);

  return (
    <div>
      <pre>{data && JSON.stringify(data)}</pre>
    </div>
  );
};

export default App;
