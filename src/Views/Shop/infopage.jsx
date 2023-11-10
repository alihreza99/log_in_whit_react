import { Link } from "react-router-dom";

export default function BasicExample(props) {
  return (
    <div className="moreinfo">
      <img className="image" src={props.imagekala} alt="image" />
      <br />
      <span className="name">
        <b>{props.titlekala}</b>
      </span>
      <br />
      <span className="description">{props.descriptionkala}</span>
      <br />
      <span className="category">{props.categorykala}</span>
      <br />
      <span className="price">قیمت = {props.pricekala}</span>
      <br />
      <div>
        <Link className="list backtolist" to={{ pathname: `/kharid` }}>
          برگشت
        </Link>
      </div>
    </div>
  );
}
