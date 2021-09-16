import React from "react";
import NavBar from "../components/nav-bar/nav-bar";
import Contact from "../components/contact/contact";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Team from "../components/team/team";
import firebase from "../../firebase/client-app";
import AOS from "aos";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
  AOS.init();

  const [user, loading, _error] = useAuthState(firebase.auth());
  console.log("Loading:", loading, "|", "Current user:", user);
  console.error(_error);

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

export default Home;
