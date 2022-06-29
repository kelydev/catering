import { useEffect, useState } from "react";
import "../styles/sass/_category.scss";
import HorizontalScroll from "react-scroll-horizontal";
import { Link, useLocation } from "react-router-dom";

export default function Category() {
  const [categories, setCategories] = useState([]);
  let location = useLocation();

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

  useEffect(() => {
    const items = document.querySelectorAll(".category__list-item");
    const imgItems = document.querySelectorAll(".category__list-link-image");
    console.log("hola");
    items.forEach((item, index) => {
      item.addEventListener("click", () => {
        items.forEach((item, indexItem) => {
          indexItem === index
            ? item.classList.add("active")
            : item.classList.remove("active");
        });

        imgItems.forEach((imgItem, indexImgItem) => {
          indexImgItem === index
            ? imgItem.classList.add("active")
            : imgItem.classList.remove("active");
        });
      });
    });
  }, [categories]);

  return (
    <div
      className={
        location.pathname.toString().toLowerCase().includes("/carta") ||
        location.pathname.toString().toLowerCase().includes("/carta/") ||
        location.pathname.toString().toLowerCase().includes("/cartainfo") ||
        location.pathname.toString().toLowerCase().includes("/cartainfo/")
          ? "category"
          : "category hidden"
      }
    >
      <ul className="category__list">
        <HorizontalScroll>
          {categories.map((category) => {
            return (
              <li className="category__list-item" key={category._id}>
                <Link
                  className="category__list-link"
                  to={`carta/${category.route}`}
                >
                  <img
                    className="category__list-link-image"
                    src={category.urlImage}
                    alt="category"
                  />
                  <span className="category__list-link-text">
                    {category.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </HorizontalScroll>
      </ul>
    </div>
  );
}
