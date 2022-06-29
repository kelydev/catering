import React from 'react'
import Select from 'react-select'
import "../styles/sass/_cardProduct.scss";
import "../styles/sass/_blog.scss";

export default function Blogs() {

    const options = [
        {value: '0', label: 'Categoria'},
        {value: '1', label: 'Noticias'},
        {value: '2', label: 'Novedades'}
    ]
      
    const customStyles = {
        menu: (provided, state) => ({
          ...provided,
          width: state.selectProps.width,
          border: 'none',
          color: state.selectProps.menuColor,
          padding: 0,
        }),
      
        control: (provided, state) => ({
          ...provided,
          width: "auto",
          outline: state.menuIsOpen ? "none" : "",
          border: state.menuIsOpen ? "1px solid #e8e8e8" : "1px solid #e8e8e8",
          boxShadow: state.menuIsOpen ? "none" : "",
          "&:hover": {
            border: "1px solid #e8e8e8"
          }
        }),
      
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
    }
    return (
    <>
        <div className='blog'>
            <div className='blog__home'>
                <img src="https://slidesigma.com/themes/html/jumboo/cookies/assets/img/home-1/1920x800.jpg" className="blog__home-img"  alt="cake"/>
                <div className='blog__home-texto'>
                    <h2 className='blog__home-title'><stron>blog</stron></h2>
                    <p className='blog__home-parrafo'>conoce más de nosotros y nuestras novedades.</p>
                </div>
            </div>
            <div className='blog__search filter'>
                <div className="filter__filter-order-container">
                    <Select
                        width="100%"
                        options={options}
                        styles={customStyles}
                        placeholder={"Ordenar por..."}
                        isSearchable={false}
                    />
                </div>

                <div className='filter__filter-name-container'>
                    <input
                        className='filter__filter-name-input'
                        type="text"
                        placeholder="Buscar productos"
                    />
                    <button className='filter__filter-name-btn'>
                        <img className='filter__filter-name-btn-image' src="https://www.mariaalmenara.pe/_nuxt/img/e8d06d6.png" alt="icon search" />
                    </button>
                </div>
            </div>
            <div className='blog__cards'>
            <div className='carta-products__product'>
                <figure className="carta-products__product-image-contianer">
                    <img className="carta-products__product-image" src='https://dxnn4n4cam0ol.cloudfront.net/media/blog/coffee.jpg'/>
                </figure>
                <div className="carta-products__product-info-container">
                    <span className="carta-products__product-info-price">novedades</span>
                    <h4 className="carta-products__product-info-name">Cafe de especialidad</h4>
                    <p className="carta-products__product-info-description">
                        desarrollamos un blend especial para mária almenara. asegurando el maridaje perfecto para nuestros ...
                    </p>
                    <span className="carta-products__product-info-price">maria almenara</span>
                </div>
            </div>

            </div>
        </div>
    </>
  )
}