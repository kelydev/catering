import { useEffect, useState } from "react";
import "../styles/sass/_category.scss";
import HorizontalScroll from "react-scroll-horizontal";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://mariaalmenara.herokuapp.com/api/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
    let dispositivo;
    if (navigator.userAgent.toLowerCase().match(/mobile/)) {
      dispositivo = true;
    } else if (navigator.userAgent.toLowerCase().match(/tablet/)) {
      dispositivo = true;
    } else {
      dispositivo = false;
    }

    if (dispositivo) {
      document.querySelector(".scroll-horizontal").style.overflow = "auto";
    }
  }, []);

  return (
    <div className="category">
      <ul className="category__list">
        <HorizontalScroll>
          {categories.map((category) => (
            <li className="category__list-item" key={category._id}>
              <a className="category__list-link" href="/">
                <img
                  className="category__list-link-image"
                  src={category.urlImage}
                  alt="category"
                />
                <span className="category__list-link-text">{category.name}</span>
              </a>
            </li>
          ))}
        </HorizontalScroll>
      </ul>
    </div>
  );
}
