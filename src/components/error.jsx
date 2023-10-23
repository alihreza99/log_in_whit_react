import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="notfount">
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link className="link" to="/">
        Home
      </Link>
      <br />
      <Link className="link" to="/log">
        Blog
      </Link>
      <br/>
      <Link className="link" to="/kharid">
        list kala
      </Link>
    </div>
  );
}
