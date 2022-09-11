import "./App.css";
import "./normalize.css";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Movies from "./Components/Movies";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
