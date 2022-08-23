import React, { useState, useEffect } from "react";
import AppRoutes from "./routes";

const App = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    //This function should probably be in a services folder
    //This will load up the app initially or on refresh with any initial configs/external data you want always accessible
    const fetchPublicAppData = async () => {
      const data = await fetch("https://yourapi.com");
      setData(data.data);
      setLoaded(true);
    };
    fetchPublicAppData();
  }, []);
  return <div className="App">{loaded && <AppRoutes />}</div>;
};

export default App;
