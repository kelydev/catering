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

export default function Filter({ productsList, setProducts }) {
  
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    filter(e.target.value);
  };

  const filter = (searchTerm) => {
    const result = productsList.filter((product) => {
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
          onChange={handleChange}
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
        />
      </div>
    </section>
  )
}
