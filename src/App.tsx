import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import UxProjects from "./components/UxProjects"
import Contact from "./components/Contact"
import { Toaster } from "react-hot-toast"
import "./App.css"


const App: React.FC = () => {
  return (
    <div className="App">
      <div><Toaster/></div>
        <Header/>
      <main>
		<Hero/>
        <About/>
        <Projects/>
        <UxProjects/>
        <Contact/>
      </main>
      <footer>
        <p>© Alice Li Maunumäki. ALl rights reserved.</p>
      </footer>
      </div>
  )
}

export default App
