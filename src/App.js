import react, { Suspense } from "react";
import Navbar from "../src/components/nav";
import NotFound from "./components/error";
import Shop from "./Views/Shop/shoppage";
import Error from "./components/ErrorBoundary";
import "./assets/Fonts/Vazir-Bold.ttf"
import "./assets/Fonts/Vazir-Black-FD.ttf"
import "./assets/style/todo.css";
import "./assets/style/font.css";
import "./assets/style/form.css";
import "./assets/style/notfound.css";
import "./assets/style/loading.css";
import "./assets/style/nav.css";
import "./assets/style/shop.css";
import "./assets/style/errorpage.css";
import "./App.css";
import "./assets/Fonts/fontawesome-free-6.4.0-web/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const Todolist = react.lazy(() => import("./Views/home/Index.jsx"));
const Log_in = react.lazy(() => import("./Views/log-in/Index.jsx"));
const Listkala = react.lazy(() => import("./Views/Shop/index"));
const View = react.lazy(() => import("./Views/Shop/viewkala"));
function App() {
  localStorage.setItem("labelCount", JSON.stringify([]));

  return (
    <>
      <Toaster />
      <Error>
        <Suspense>
          <Navbar />
          <Routes>
            <Route path="/" element={<Todolist />} />
            <Route path="/log" element={<Log_in />} />
            <Route path="/kharid" element={<Listkala />} />
            <Route path="/view/:id" element={<View />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Error>
    </>
  );
}

export default App;
