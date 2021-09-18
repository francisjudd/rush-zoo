import React from 'react';
import Script from 'next/script';
import NavBar from '../components/nav-bar/nav-bar';
import Contact from '../components/contact/contact';
import About from '../components/about/about';
import Auth from '../components/auth';
import Projects from '../components/projects/projects';
import Team from '../components/team/team';
import { firebase } from '@client';
import { useAuthState } from 'react-firebase-hooks/auth';

const Home = () => {
  const [user, loading] = useAuthState(firebase.auth());

  return (
    <>
      <Script
        src='https://unpkg.com/aos@2.3.4/dist/aos.js'
        strategy='beforeInteractive'></Script>
      <Script id='aos' strategy='beforeInteractive'>
        AOS.init();
      </Script>

      {loading && <h4>Loading...</h4>}
      {!user && <Auth appName={'NFL NFT Game'} message={'Please sign in :)'} />}
      {user && (
        <>
          <main className='text-gray-400 bg-gray-900 body-font'>
            <NavBar />
            <About />
            <Projects />
            <Team />
            <Contact />
          </main>
        </>
      )}
    </>
  );
};

export default Home;
