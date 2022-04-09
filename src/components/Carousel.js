import React, {useRef, useEffect, useCallback} from 'react';
import {ReactComponent as FlechaIzquierda} from '../assets/images/iconmonstr-angel-left-thin.svg';
import {ReactComponent as FlechaDerecha} from '../assets/images/iconmonstr-angel-right-thin.svg';
import "../styles/sass/_carousel.scss";

export default function Carousel() {
	const controles = true
	const autoplay = false
	const velocidad="500"
	const intervalo="5000"
	const slideshow = useRef(null);
	const intervaloSlideshow = useRef(null);

	const siguiente = useCallback(() => {
		if(slideshow.current.children.length > 0){
			console.log('Siguiente')
			const primerElemento = slideshow.current.children[0];
			slideshow.current.style.transition = `${velocidad}ms ease-out all`;
			const tamSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamSlide}px)`;
			const transicion = () => {
				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;
				slideshow.current.appendChild(primerElemento);
				slideshow.current.removeEventListener('transitionend', transicion);
			}
			slideshow.current.addEventListener('transitionend', transicion);

		}
	}, [velocidad]);
	
	const anterior = () => {
		console.log('Anterior');
		if(slideshow.current.children.length > 0){
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
			slideshow.current.style.transition = 'none';
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
			setTimeout(() => {
				slideshow.current.style.transition = `${velocidad}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	}

	useEffect(() => {
		if(autoplay){
			intervaloSlideshow.current = setInterval(() => {
				siguiente();
			}, intervalo);
			slideshow.current.addEventListener('mouseenter', () => {
				clearInterval(intervaloSlideshow.current);
			});
			slideshow.current.addEventListener('mouseleave', () => {
				intervaloSlideshow.current = setInterval(() => {
					siguiente();
				}, intervalo);
			});
		}
	}, [autoplay, intervalo, siguiente]);

	return (
		<div className='ContenedorPrincipal'>
			<div className='ContenedorSlideshow'  ref={slideshow}>
				<div className='Slide'>
					<a href="#">
						<img src="https://capricathemes.com/opencart/OPC08/OPC080184/image/cache/catalog/main-banner-2-1903x750.jpg" alt=""/>
					</a>
				</div>
				<div className='Slide'>
					<a href="#">
						<img src="https://capricathemes.com/opencart/OPC08/OPC080184/image/cache/catalog/main-banner-1-1903x750.jpg" alt=""/>
					</a>
				</div>
				<div className='Slide'>
					<a href="#">
						<img src="https://capricathemes.com/opencart/OPC08/OPC080184/image/cache/catalog/main-banner-1-1903x750.jpg" alt=""/>
					</a>
				</div>
			</div>
				{controles && 
				<div className='Controles'>
					<button className='Boton left' onClick={anterior}>
						<FlechaIzquierda />
					</button>
					<button className='Boton right' onClick={siguiente}>
						<FlechaDerecha/>
					</button>
				</div>
				}
		</div>
	);
}