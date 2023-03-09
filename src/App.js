import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./Pages/Detail-Page/DetailPage";
import HomePage from "./Pages/Home-Page/HomePage";
import Jobs from "./Pages/Job-page/Jobs";
import { useSelector } from "react-redux";
function App() {
  const {jobType,location ,Retail ,Corporate ,Event ,Bar ,Mobile} = useSelector((state)=> state.LocationAndJobTypeReducer)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={`/Jobs/title=${jobType}&city=${location}&venue=London&a-licence=&lat=&lng`} element={<Jobs />} />
          <Route path="/jobs/detail/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
