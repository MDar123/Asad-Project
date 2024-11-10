import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from './components/Card/Card';
import Footer from "./components/Footer/Footer";
import { CardDetails } from "./data";
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <div className="app">
      <div className="card-row">
        {
          CardDetails.map( (item,index) => (
            <Card key={index} {...item} />
          ) )
        }
      </div>
    </div>
    <Footer />

    </>
  );
}

export default App;
