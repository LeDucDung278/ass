const Banner = {
    render() {
        return /* html */ `
            <div id="carouselExampleIndicators" class="carousel slide tw-mt-px" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://res.cloudinary.com/dfwailscz/image/upload/v1645565648/dung/banner2_n5cgpa.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://res.cloudinary.com/dfwailscz/image/upload/v1645565648/dung/banner3_vity2h.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://res.cloudinary.com/dfwailscz/image/upload/v1645565648/dung/banner1_in9hnz.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
            </div> 
        `;
    },
};
export default Banner;