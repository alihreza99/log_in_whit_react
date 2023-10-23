import react, { lazy, Suspense } from "react";
import Navbar from "../src/components/nav";
import NotFound from "./components/error";
import Shop from "./Views/kharid-kala/shop";
import Error from "./components/error"
import "./assets/style/todo.css";
import "./assets/style/font.css";
import "./assets/style/form.css";
import "./assets/style/notfound.css";
import "./assets/style/loading.css";
import "./assets/style/nav.css";
import "./assets/style/kala.css";
import "./assets/style/shopLabel.css";
import "./App.css";
import "./assets/Fonts/fontawesome-free-6.4.0-web/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactLoading from "react-loading";
import { Route, Routes, Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Todolist = react.lazy(() => import("./Views/home/Index.jsx"));
const Log_in = react.lazy(() => import("./Views/log-in/Index.jsx"));
const Listkala = react.lazy(() => import("./Views/kharid-kala/index"));
const View = react.lazy(() => import("./Views/kharid-kala/viewkala"));
function App() {
  localStorage.setItem("labelCount", JSON.stringify([]));

  return (
    <>
      <Toaster />
      <Suspense fallback={<ReactLoading className="load" type="spin" />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Todolist />} />
          <Route path="/log" element={<Log_in />} />
          <Route path="/kharid" element={<Listkala />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
