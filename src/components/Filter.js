import React from 'react'
import "../styles/sass/_filter.scss"
import Select from 'react-select'

const options = [
  {isDisabled:true,value: 'a', label: 'Ordenar por...'},
  {value: 'b', label: 'Los más pedidos'},
  {value: 'c', label: 'Ascendente alfabéticamente'},
  {value: 'd', label: 'Descendente alfabéticamente'},
  {value: 'f', label: 'De menor a mayor precio'},
  {value: 'g', label: 'De mayor a menor precio'}
]

export default function Filter() {

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
        <input className='filter__filter-name-input' type="text" placeholder="Buscar productos"/>
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
