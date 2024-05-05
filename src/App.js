import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./redux/slice/jobslice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log(state);

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  if (state?.isLoading) {
    return <h1>Loading......</h1>;
  }

  return (
    <div className="App">
      {state?.jobs?.data &&
        state?.jobs?.data?.jdList.map((ele) => {
          return <li>jobRole {ele?.jobRole}</li>;
        })}
    </div>
  );
}

export default App;
