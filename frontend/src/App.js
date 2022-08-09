import React, { useEffect } from "react";
import RootRouter from "./Routes/RootRouter";

function App() {
  useEffect(() => {
    document.title = "sx app";
  }, []);

  return (
    <div className="bg-sc-blue h-screen">
      <RootRouter />
    </div>
  );
}

export default App;
