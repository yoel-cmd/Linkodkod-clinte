import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/HomePage";
import AppLayout from "./components/application-layout/AppLayout";
import CRUD from "./components/application-layout/CRUD.tsx";
import Posts from "./pages/PostsPage";
import SingelPost from "./components/SingelPost";
import Create from "./pages/CreatePost";
import Finish from "./pages/FinishPage";
import LoginOrSignUp from "./pages/Login.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<LoginOrSignUp />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/crud" element={<CRUD />} />
            <Route path="/post/:id" element={<SingelPost/>} />
            <Route path="/create-post" element={<Create/>} />
            <Route path="/finish" element={<Finish/>} />
            <Route path="/home" element={<Home/>} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </>
  );
}
export default App;
