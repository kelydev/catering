import React, { useState } from 'react'
import "../styles/sass/_filter.scss"
import Select from 'react-select'

const options = [
  {isDisabled:true,value: '0', label: 'Ordenar por...'},
  {value: '1', label: 'Los más pedidos'},
  {value: '2', label: 'Ascendente alfabéticamente'},
  {value: '3', label: 'Descendente alfabéticamente'},
  {value: '4', label: 'De menor a mayor precio'},
  {value: '5', label: 'De mayor a menor precio'}
]

export default function Filter({ productsList, setProducts, products }) {
  
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
    filterSearch(e.target.value);
  };

  const handleChangeOrder = (option) => {
    setOrder(option.value);
    filterOrder(option.value)
  }

  const filterOrder = (value) => {
    let newProducts = new Array(...products)
    if (value === "1") {
      newProducts = newProducts.sort((a, b) => a.rating - b.rating)
      setProducts(newProducts)
    } else if (value === "2") {
      newProducts = newProducts.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
      setProducts(newProducts)
    } else if (value === "3") {
      newProducts = newProducts.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)).reverse()
      setProducts(newProducts)
    } else if (value === "4") {
      newProducts = newProducts.sort((a, b) => a.price - b.price)
      setProducts(newProducts)
    } else if (value === "5") {
      newProducts = newProducts.sort((a, b) => a.price - b.price).reverse()
      setProducts(newProducts)
    }
  }

  const filterSearch = (searchTerm) => {
    let result = productsList.filter((product) => {
      if (
        product.name
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        product.description
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        return product;
      }
    });

    if (order === "1") {
      result = result.sort((a, b) => a.rating - b.rating)
    } else if (order === "2") {
      result = result.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
    } else if (order === "3") {
      result = result.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)).reverse()
    } else if (order === "4") {
      result = result.sort((a, b) => a.price - b.price)
    } else if (order === "5") {
      result = result.sort((a, b) => a.price - b.price).reverse()
    }

    setProducts(result);
  };

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
    <section className='filter'>
      <div className="filter__filter-name-container">
        <input
          className='filter__filter-name-input'
          type="text"
          placeholder="Buscar productos"
          value={search}
          onChange={handleChangeSearch}
        />
        <button className='filter__filter-name-btn'>
          <img className='filter__filter-name-btn-image' src="https://www.mariaalmenara.pe/_nuxt/img/e8d06d6.png" alt="icon search" />
        </button>
      </div>
      <div className="filter__filter-order-container">
        <Select
          width="100%"
          options={options}
          styles={customStyles}
          placeholder={"Ordenar por..."}
          isSearchable={false}
          onChange={handleChangeOrder}
        />
      </div>
    </section>
  )
}
