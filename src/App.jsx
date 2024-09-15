import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <main className="relative h-screen">
        {/* Background image with blur */}
        <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/1487894858/photo/candlestick-chart-and-data-of-financial-market.jpg?s=1024x1024&w=is&k=20&c=AfDUACB1NMYPpuvEgEgQDUNt2rMuCsPoLnfH0LSYs1s=')] bg-no-repeat bg-cover bg-blend-multiply filter blur-sm"></div>

        {/* Content on top */}
        <div className="relative z-10">
          <Header />
          <Hero />
        </div>
      </main>
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
