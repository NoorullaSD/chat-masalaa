import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import MemeDetail from "./pages/MemeDetails";
import Layout from "./components/Layout";
import Cinema from "./pages/Cinema";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cinema" element={<Cinema />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;