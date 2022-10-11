const Banner = () => {
    return(
        <>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://www.coca-colamexico.com.mx/content/dam/journey/mx/es/private/our-company/CCIM_Piramide.jpg" height={500}  className="d-block w-100" alt="portada de bebidas"/>
                </div>
                <div class="carousel-item">
                <img src="https://d1iibezb83drel.cloudfront.net/wp-content/uploads/2021/07/golosinas.webp" height={500} className="d-block w-100" alt="portada de golosinas"/>
                </div>
                <div class="carousel-item">
                <img src="https://i.ytimg.com/vi/iiqx6jN4WKw/maxresdefault.jpg" height={500} className="d-block w-100" alt="portada de cofler"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
}
/************************************
 * Autor: Julieta Tatiana Castillo  *
 ************************************/
export default Banner;