import "./App.css";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./Pages/Detail-Page/DetailPage";
import HomePage from "./Pages/Home-Page/HomePage";
import Jobs from "./Pages/Job-page/Jobs";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function App() {
  const { jobType, location, Retail, jobFilter } = useSelector(
    (state) => state.LocationAndJobTypeReducer
  );

  const { retails, bar, corporate } = jobFilter;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route
        path={`/jobs?`}
        element={<Jobs />}
      />
      <Route path="/jobs/detail/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
