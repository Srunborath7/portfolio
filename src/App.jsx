import { BrowserRouter, Routes, Route } from "react-router-dom"
import MasterLayout from "./components/layouts/MasterLayout"
import HomePage from "./components/pages/HomePage"
import CVPage from "./components/pages/CVPage"
import AboutMe from "./components/pages/AboutMe"
import Education from "./components/pages/Education"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/education" element={<Education />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
