import MainContainer from "./components/outlet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ProjectPage from "./pages/projectPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />}>
            <Route index element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            {/* <Route path="/experience" element={<experiencePage />} />
    <Route path="/contact" element={<contactPage />} /> */}
            <Route path="/NotFound" element={<div>Page Not Found</div>} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
