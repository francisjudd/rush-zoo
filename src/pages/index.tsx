import NavBar from "../components/nav-bar/nav-bar";
import Contact from "../components/contact/contact";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Team from "../components/team/team";

const App = () => {
  return (
    <>
      <main className='text-gray-400 bg-gray-900 body-font'>
        <NavBar />
        <About />
        <Projects />
        <Team />
        <Contact />
      </main>
    </>
  );
};

export default App;
