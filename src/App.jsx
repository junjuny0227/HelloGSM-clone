import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Guide from "./pages/guide";
import Faq from "./pages/faq";
import Calculate from "./pages/calculate";
import Introduce from "./pages/introduce";
import "./styles/global.css";
import "./styles/fonts.css";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/introduce" element={<Introduce />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
