import { useState } from "react";
import About from "components/about";
import Blog from "components/blog";
import Contact from "components/contact";
import Home from "components/home";
import Portfolio from "components/portfolio";
import Service from "components/service";
import Footer from "components/UI/organisms/footer";
import Header from "components/UI/organisms/header";

function App() {
  const tabs = ["Home", "About", "Service", "Portfolio", "Blog", "Contact"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      <Home setActiveTab={setActiveTab} />
      <About setActiveTab={setActiveTab} />
      <Service setActiveTab={setActiveTab} />
      <Portfolio setActiveTab={setActiveTab} />
      <Blog setActiveTab={setActiveTab} />
      <Contact setActiveTab={setActiveTab} />
      <Footer />
    </>
  );
}

export default App;
