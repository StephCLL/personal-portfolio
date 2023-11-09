import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Experience from "./routes/experience/experience.component"
import Projects from "./routes/projects/projects.component"
import ProjectDisplay from "./routes/project-display/project-display.compnent"
import Contact from "./routes/contact/contact.component";

import Footer from "./components/Footer/footer.component"
import Navbar from "./components/Navbar/navbar.component"

import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
