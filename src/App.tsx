import About from "./sections/About"
import Welcome from "./sections/Welcome"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProjectCard from "./sections/ProjectCard"
import Tools from "./sections/Tools"
import "./index.css"


function App() {


  return (
    <>
      <Header />
      <Welcome />
      <About />
      <ProjectCard />
      <Tools />

      <Footer />
    </>
  )
}

export default App
