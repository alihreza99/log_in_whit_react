import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="notfound">
      <h1>به نظر گم شده اید.</h1>
      <p>چند لینم برای کمک به شما:</p>
      <Link className="link" to="/">
        خانه
      </Link>
      <br />
      <Link className="link" to="/log">
        ورود
      </Link>
      <br/>
      <Link className="link" to="/shop">
        فروشگاه
      </Link>
    </div>
  );
}
