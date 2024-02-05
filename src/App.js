import React from "react";
import Footer from "./components/Footer";
import AboutMMT from "./components/AboutMMT";
import EndContainer from "./components/EndContainer";
import Bottom1_Slider from "./components/Bottom1_Slider";
import Bottom2_Slider from "./components/Bottom2_Slider";
import Bottom3_container from "./components/Bottom3_container";
import Bottom4_Slider from "./components/Bottom4_Slider";
import Top2_Slider from "./components/Top2_Slider";
import TopMenu from "./components/TopMenu";
function App() {
  return (
    <div style={{backgroundColor:"#f2f2f2"}} className="App">
    <TopMenu/>
    <Top2_Slider/>
    <Bottom4_Slider/>
    <Bottom3_container/>
    <Bottom2_Slider/>
    <Bottom1_Slider/>
      <EndContainer/>
      <AboutMMT/>
      <Footer/>
    </div>
  );
}

export default App;
