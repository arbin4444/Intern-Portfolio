import "./App.css";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./page/Navbar";
import { Userexp } from "./page/Userexp";
import { Project } from "./page/Project";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path='#contact' element={<Contact/>}></Route> */}
        {/* <Route path='/about' element={<About/>}></Route> */}
        {/* <Route path='/userexp' element={<Userexp/>}></Route> */}
        {/* <Route path='/project' element={<Project/>}></Route> */}
      </Routes>
      <div className="element-div">
        <div>{<About />}</div>
        <div>{<Userexp />}</div>
        <div>{<Project />}</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
