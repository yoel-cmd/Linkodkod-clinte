import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import AppLayout from "./components/application-layout/AppLayout";
import CRUD from "./pages/CRUD";
import Posts from "./pages/Posts";
import SingelPost from "./components/SingelPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/crud" element={<CRUD />} />
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<SingelPost/>} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </>
  );
}
export default App;
