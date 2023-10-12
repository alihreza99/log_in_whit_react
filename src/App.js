import react, { lazy, Suspense } from "react";
import logo from "./logo.svg";
import Navbar from "./Views/navbar/Index.jsx";
import NotFound from "./components/error";
import "./assets/style/todo.css";
import "./assets/style/font.css";
import "./assets/style/form.css";
import "./assets/style/notfound.css";
import "./assets/style/loading.css";
import "./assets/style/nav.css";
import "./App.css";
import "./assets/Fonts/fontawesome-free-6.4.0-web/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactLoading from "react-loading";
import { Route, Routes, Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const Todolist = react.lazy(() => import("./Views/home/Index.jsx"));
const Log_in = react.lazy(() => import("./Views/log-in/Index.jsx"));

function App() {
  return (
    <>
      <Toaster />
      <Suspense fallback={<ReactLoading className="load" type="spin" />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Todolist />} />
          <Route path="/log" element={<Log_in />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
