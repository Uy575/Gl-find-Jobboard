import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./Pages/Detail-Page/DetailPage";
import HomePage from "./Pages/Home-Page/HomePage";
import Jobs from "./Pages/Job-page/Jobs";

function App() {
  console.log(process.env.REACT_APP_GOOGLE_API_KEY)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/jobs/detail/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
