import Product from './products.js';
const ItemListConteiner = () => {
    return(
        <>
            <div class="container">
                <div class="row justify-content-center text-center m-3">        
                    <div class="col-3">
                        <div class="bg-white rounded shadow-sm py-5 px-4">
                            <Product name="Chocolate" imagen = "../imagen/carro.png" stock = "5"/>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="bg-white rounded shadow-sm py-5 px-4">
                            <Product name="Caramelo Masticable" imagen = "../imagen/carro.png" stock = "8"/>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="bg-white rounded shadow-sm py-5 px-4">
                            <Product name="Bonbom" imagen = "../imagen/carro.png" stock = "10"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemListConteiner;