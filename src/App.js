import "./App.css";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./Pages/Detail-Page/DetailPage";
import HomePage from "./Pages/Home-Page/HomePage";
import Jobs from "./Pages/Job-page/Jobs";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import London from "./Pages/Locations/London";
import Leeds from "./Pages/Locations/Leeds";
import Machester from "./Pages/Locations/Machester";
import Bristol from "./Pages/Locations/Bristol";
import Birmingham from "./Pages/Locations/Birmingham";
import Cardif from "./Pages/Locations/Cardif";

function App() {
  const { jobType, location, Retail, jobFilter } = useSelector(
    (state) => state.LocationAndJobTypeReducer
  );

  const { retails, bar, corporate } = jobFilter;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={`/jobs?`} element={<Jobs />} />
      
      <Route path="/jobs/security-jobs-in-london" element={<London />} />
      <Route path="/jobs/security-jobs-in-leeds" element={<Leeds />} />
      <Route path="/jobs/security-jobs-in-machester" element={<Machester />} />
      <Route path="/jobs/security-jobs-in-bristol" element={<Bristol />} />
      <Route
        path="/jobs/security-jobs-in-birmingham"
        element={<Birmingham />}
      />
      <Route path="/jobs/security-jobs-in-cardif" element={<Cardif />} />
      <Route path="/jobs/detail/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
