import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Activity from './components/Activity';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Stats />
        <Activity />
      </main>
      <Footer />
    </>
  );
}
