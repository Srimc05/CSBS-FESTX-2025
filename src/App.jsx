// App.jsx
import { Outlet } from "react-router-dom";
import { VortexDemo } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ExpandableCardDemo } from "./components/ui/expandablecard";
import Events from "./components/Events";
import About from "./components/About";



export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
     
      <main className="flex-grow">
        <Navbar/>
        <VortexDemo/>
        <About/>
        <Events/>
       
         {/* This renders the active page */}
      </main>
     
    </div>
  );
}
