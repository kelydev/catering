import "../styles/sass/_carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Carousel = () => {
    return (
        <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="https://capricathemes.com/opencart/OPC08/OPC080184/image/cache/catalog/main-banner-2-1903x750.jpg" class="d-block" alt="slider1"/>
                </div>
                <div class="carousel-item" data-bs-interval="0">
                    <img src="https://capricathemes.com/opencart/OPC08/OPC080184/image/cache/catalog/main-banner-1-1903x750.jpg" class="d-block" alt="slider2"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <div className="carousel__button">
                    <FontAwesomeIcon icon={solid("chevron-left")} aria-hidden="true" className="control-next-icon"/>
                    <span class="visually-hidden">Previous</span> 
                </div>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <div className="carousel__button">
                    <FontAwesomeIcon icon={solid("chevron-right")} aria-hidden="true" className="control-next-icon"/>
                    <span class="visually-hidden">Next</span>  
                </div>
            </button>
        </div>
    );
}
export default Carousel;