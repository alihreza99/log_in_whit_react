import React, { useState, useEffect, useRef } from "react";
import Todo from "./Todo";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";
import Spin from "./../../components/spinner";
export default function Todolist() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [itemtitle, setItemtitle] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const focus = useRef();

  useState(() => {
    if (localStorage.getItem("localTasks")) {
      setItems(JSON.parse(localStorage.getItem("localTasks")));
    }
  }, []);

  useEffect(() => {
    focus.current.focus();
  });

  function changeinput(event) {
    setInput(event.target.value);
  }

  function additem(event) {
    event.preventDefault();

    if (input.trim() !== "") {
      let newobject = {
        title: input,
        id: items.length + 1,
      };

      setItems([...items, newobject]);
      setInput("");
      localStorage.setItem("localTasks", JSON.stringify([...items, newobject]));
      toast("ایتم با موفقیت اضافه شد", {
        duration: 1000,
        position: "top-center",
        style: { background: "black", color: "white" },
        className: "",
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },

        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
    } else {
      setInput("");
    }
  }

  function deleteoneitem() {
    setShow(false);
    const deleted = items.filter((f) => f.title !== itemtitle);
    setItems(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted));
  }

  function deleteall() {
    setShow2(false);
    setItems([]);
    localStorage.removeItem("localTasks");
  }

  const handleClose = () => setShow(false);

  function handleShow(event) {
    setShow(true);
    setItemtitle(event.title);
  }

  const handleClose2 = () => setShow2(false);

  function handleShow2() {
    if (items.length === 0) {
      toast.error("!! لیست شما خالی است", {
        duration: 1000,
        position: "top-center",
        style: { background: "black", color: "white" },
        className: "",
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },

        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
    } else {
      setShow2(true);
    }
  }
  return (
    <>
      <Modal
        className="modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="bg-dark text-white">
          <Modal.Title>اخطار</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          میخواهید این ایتم را حذف کنید؟
        </Modal.Body>
        <Modal.Footer className="bg-dark text-white">
          <Button onClick={handleClose} variant="secondary">
            خیر
          </Button>
          <Button onClick={deleteoneitem} variant="primary">
            بله
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2} keyboard={false}>
        <Modal.Header>
          <Modal.Title>اخطار</Modal.Title>
        </Modal.Header>
        <Modal.Body>میخواهید همه ایتم ها را حذف کنید؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            خیر
          </Button>
          <Button variant="primary" onClick={deleteall}>
            بله
          </Button>
        </Modal.Footer>
      </Modal>

      <div id="container">
        <h1 className="title">لیست کار ها</h1>
        <form id="add-book" onSubmit={additem}>
          <input
            ref={focus}
            value={input}
            onChange={changeinput}
            type="text"
            placeholder="Add your new todo"
          />
          <button onClick={additem} type="submit" className="button">
            <p className="button-text">+</p>
          </button>
        </form>
        <div id="book-list">
          <ul>
            {items.length === 0 && (
              <h3 id="child">
                <i className="fa-solid fa-triangle-exclamation"></i> لیست خالی
                است
              </h3>
            )}
            {items.map((item, index) => {
              return (
                <Todo
                  title={item.title}
                  deletehandler={handleShow}
                  key={index}
                />
              );
            })}
          </ul>
        </div>

        <div className="info">
          <div className="info-text">
            <p className="info-text-item">شما </p>
            <p className="info-text-item" id="number">
              {items.length}
            </p>
            <p className="info-text-item"> تسک انجام نشده دارید</p>
          </div>
          <button onClick={handleShow2} id="clear-all">
            پاک کردن همه
          </button>
        </div>
      </div>
    </>
  );
}
