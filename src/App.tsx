import React, { useState } from "react";
import Header from "./components/UI/organisms/header";
import Home from "./components/home";
import About from "./components/about";
import Service from "./components/service";
import Portfolio from "./components/portfolio";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Footer from "./components/UI/organisms/footer";

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
