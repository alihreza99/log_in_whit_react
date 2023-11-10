import { useState, useEffect, useRef } from "react";
import Kala from "../../components/kala";
import { Audio } from "react-loader-spinner";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spin from "./../../components/spinner";
export default function App() {
  let currentPageRef = useRef(null);
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [itemtitle, setItemtitle] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setContent(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  function deleteitem(e) {
    fetch(`https://fakestoreapi.com/products/${e}`, {
      method: "DELETE",
    }).then(() => {
      setShow(false);
      const deleted = content.filter((f) => f.id !== itemtitle);
      setContent(deleted);
    });
  }
  const [currentPage, setcurrentPage] = useState(1);
  const recordperPage = 3;
  const lastindex = recordperPage * currentPage;
  const firstindex = lastindex - recordperPage;
  const records = content?.slice(firstindex, lastindex);
  const npage = Math.ceil(content?.length / recordperPage);
  function prepage() {
    if (currentPage !== 1) {
      currentPageRef.current.style.animation = "prevPage .5s forwards";
      setcurrentPage(currentPage - 1);
    }
  }
  function nextpage() {
    if (currentPage !== npage) {
      currentPageRef.current.style.animation = "nextPage .5s forwards";
      setcurrentPage(currentPage + 1);
    }
  }
  const handleClose = () => setShow(false);

  function handleShow(event) {
    setShow(true);
    setItemtitle(event.id);
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="bg-dark text-white">
          <Modal.Title>اخطار</Modal.Title>
        </Modal.Header>
        <Modal.Body>میخواهید این ایتم را حذف کنید؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            خیر
          </Button>
          <Button variant="primary" onClick={deleteitem}>
            بله
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        className="pedar"
        ref={currentPageRef}
        onAnimationEnd={() => {
          if (currentPageRef.current) {
            currentPageRef.current.style.animation = "";
          }
        }}
      >
        {isLoading && <Spin />}
        {records?.map((item, index) => {
          return (
            <>
              {isLoading && (
                <Audio
                  height="80"
                  width="80"
                  radius="9"
                  color="green"
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
                />
              )}
              {content && (
                <Kala
                  title={item.title}
                  id={item.id}
                  price={item.price}
                  category={item.category}
                  description={item.description}
                  image={item.image}
                  deletehandler={handleShow}
                  key={index}
                />
              )}
            </>
          );
        })}
      </div>

      <div>
        {currentPage !== 1 && (
          <button className="page-item1" onClick={prepage}>
            <a href="#" className="page-link">
              <i class="fa-solid fa-arrow-left"></i>
            </a>
          </button>
        )}
        {currentPage !== npage && (
          <button className="page-item2" onClick={nextpage}>
            <a href="#" className="page-link">
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </button>
        )}
      </div>
    </>
  );
}
