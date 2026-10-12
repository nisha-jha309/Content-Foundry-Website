import { BrowserRouter,Route,Routes } from "react-router";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home"
import OurWork from "./pages/our-work"
import WorkDetails from "./pages/work-details"
import MicroDramaDetails from "./pages/drama-details";
const App = () => {
  return (
<BrowserRouter>
 <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/our-work" element={<OurWork />}/>
      <Route path="/micro-drama/:slug" element={<MicroDramaDetails />}/>
      <Route path="/work/:slug" element={<WorkDetails />}/>
      </Routes>
      <Footer />
    </div>
</BrowserRouter>
   
  )
}

export default App;