import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Table from "./components/Table";
import Sidebar from "./components/Sidebar";

const Url = "http://127.0.0.1:8000/api/trucks";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(Url, { signal: controller.signal })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));

    return () => controller.abort();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="my-table-container">
        <Table data={data} />
      </div>
    </>
  );
}

export default App;
