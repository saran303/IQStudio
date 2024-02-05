import styles from './App.module.css';
import Apprication from './Component/Apprication/Apprication';
import Faq from './Component/Faq/Faq';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import Intrest from './Component/Intrest/Intrest';
import Intro from './Component/Intro/Intro';
import Navbar from './Component/Navbar/Navbar';
import RatingCard from './Component/RatingCard/RatingCard';
import Suscribe from './Component/Suscribe/Suscribe';
import TeamInfo from './Component/TeamInfo/TeamInfo';

function App() {
  return (
    <div className={styles.sectionWrapper}>
      <Navbar />
      <Hero />
      <Intro />
      <RatingCard />
      <Intrest />
      <Apprication />
      <TeamInfo />
      <Faq />
      <Suscribe />
      <Footer />
    </div>
  );
}

export default App;
