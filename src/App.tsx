import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import PostDetail from "@/pages/PostDetail";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="posts/:id" element={<PostDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
