import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import AppLayout from "./components/application-layout/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </>
  );
}
export default App;
