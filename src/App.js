import HeroSection from "./components/HeroSection/HeroSection.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import styles from "./App.css";

function App() {
  return (
    <div className={styles.MainBox}>
      <NavBar />
      <HeroSection />

    </div>
  );
}

export default App;
