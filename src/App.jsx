import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import Companies1 from "./components/companies/Companies1";
import Pricing from "./components/pricing/Pricing";
import Earnings from "./components/earnings/Earnings";
import Status from "./components/status/Status";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />  
      <Companies1 />
      <Pricing />
      <Earnings />
      <Status />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
