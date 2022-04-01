import { useEffect } from 'react'
import "../styles/sass/_category.scss"
import HorizontalScroll from "react-scroll-horizontal"

export default function Category() {

  useEffect(() => {
    let dispositivo
    if (navigator.userAgent.toLowerCase().match(/mobile/)) {
      dispositivo = true
    }else if (navigator.userAgent.toLowerCase().match(/tablet/)) {
      dispositivo = true
    }else {
      dispositivo = false
    }

    if (dispositivo) {
      document.querySelector('.scroll-horizontal').style.overflow = "auto"
    }

  }, []);

  return (
    <div className="category">
        <ul className="category__list">
          <HorizontalScroll>
            <li className='category__list-item'><a className='category__list-link' href="/"><img className='category__list-link-image' src="https://dxnn4n4cam0ol.cloudfront.net/media/catalog/category/helado_2.svg" alt="category" /><span className='category__list-link-text'>helado</span></a></li>
            <li className='category__list-item'><a className='category__list-link' href="/"><img className='category__list-link-image' src="https://dxnn4n4cam0ol.cloudfront.net/media/catalog/category/helado_2.svg" alt="category" /><span className='category__list-link-text'>helado</span></a></li>
            <li className='category__list-item'><a className='category__list-link' href="/"><img className='category__list-link-image' src="https://dxnn4n4cam0ol.cloudfront.net/media/catalog/category/helado_2.svg" alt="category" /><span className='category__list-link-text'>helado</span></a></li>
            <li className='category__list-item'><a className='category__list-link' href="/"><img className='category__list-link-image' src="https://dxnn4n4cam0ol.cloudfront.net/media/catalog/category/helado_2.svg" alt="category" /><span className='category__list-link-text'>helado</span></a></li>
            <li className='category__list-item'><a className='category__list-link' href="/"><img className='category__list-link-image' src="https://dxnn4n4cam0ol.cloudfront.net/media/catalog/category/helado_2.svg" alt="category" /><span className='category__list-link-text'>helado</span></a></li>
            <li className='category__list-item'><a className='category__list-link' href="/"><img className='category__list-link-image' src="https://dxnn4n4cam0ol.cloudfront.net/media/catalog/category/helado_2.svg" alt="category" /><span className='category__list-link-text'>helado</span></a></li>
            <li className='category__list-item'><a className='category__list-link' href="/"><img className='category__list-link-image' src="https://dxnn4n4cam0ol.cloudfront.net/media/catalog/category/helado_2.svg" alt="category" /><span className='category__list-link-text'>helado</span></a></li>
            <li className='category__list-item'><a className='category__list-link' href="/"><img className='category__list-link-image' src="https://dxnn4n4cam0ol.cloudfront.net/media/catalog/category/helado_2.svg" alt="category" /><span className='category__list-link-text'>helado</span></a></li>
            <li className='category__list-item'><a className='category__list-link' href="/"><img className='category__list-link-image' src="https://dxnn4n4cam0ol.cloudfront.net/media/catalog/category/helado_2.svg" alt="category" /><span className='category__list-link-text'>helado</span></a></li>
            <li className='category__list-item'><a className='category__list-link' href="/"><img className='category__list-link-image' src="https://dxnn4n4cam0ol.cloudfront.net/media/catalog/category/helado_2.svg" alt="category" /><span className='category__list-link-text'>helado</span></a></li>
            <li className='category__list-item'><a className='category__list-link' href="/"><img className='category__list-link-image' src="https://dxnn4n4cam0ol.cloudfront.net/media/catalog/category/helado_2.svg" alt="category" /><span className='category__list-link-text'>helado</span></a></li>
            <li className='category__list-item'><a className='category__list-link' href="/"><img className='category__list-link-image' src="https://dxnn4n4cam0ol.cloudfront.net/media/catalog/category/helado_2.svg" alt="category" /><span className='category__list-link-text'>helado</span></a></li>
            <li className='category__list-item'><a className='category__list-link' href="/"><img className='category__list-link-image' src="https://dxnn4n4cam0ol.cloudfront.net/media/catalog/category/helado_2.svg" alt="category" /><span className='category__list-link-text'>helado</span></a></li>
            <li className='category__list-item'><a className='category__list-link' href="/"><img className='category__list-link-image' src="https://dxnn4n4cam0ol.cloudfront.net/media/catalog/category/helado_2.svg" alt="category" /><span className='category__list-link-text'>helado</span></a></li>
            <li className='category__list-item'><a className='category__list-link' href="/"><img className='category__list-link-image' src="https://dxnn4n4cam0ol.cloudfront.net/media/catalog/category/helado_2.svg" alt="category" /><span className='category__list-link-text'>helado</span></a></li>
          </HorizontalScroll>
        </ul>
    </div>
  )
}
