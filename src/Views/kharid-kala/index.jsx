import { useState, useEffect } from "react";
import Kala from "../../components/kala";
import { Audio } from "react-loader-spinner";
export default function App() {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
      const deleted = content.filter((f) => f.id !== e.id);
      setContent(deleted);
    });
  }
  const [currentPage, setcurrentPage] = useState(1);
  const recordperPage = 3;
  const lastindex = recordperPage * currentPage;
  const firstindex = lastindex - recordperPage;
  const records = content?.slice(firstindex, lastindex);
  const npage = Math.ceil(content?.lenght / recordperPage);

  function prepage() {
    if (currentPage !== 1) {
      setcurrentPage(currentPage - 1);
      console.log(currentPage);
    }
  }
  function nextpage() {
    if (currentPage !== 7) {
      setcurrentPage(currentPage + 1);
      console.log(npage);
    }
  }

  return (
    <>
      <div className="pedar">
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
                  deletehandler={deleteitem}
                  key={index}
                />
              )}
            </>
          );
        })}
      </div>

      <nav>
        <ul className="pagination">
          <li className="page-item" onClick={prepage}>
            <a href="#" className="page-link">
              Prev
            </a>
          </li>
          <li className="page-item" onClick={nextpage}>
            <a href="#" className="page-link">
              next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
