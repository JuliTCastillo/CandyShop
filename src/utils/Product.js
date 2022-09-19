const product = [
    {
        id: "1",
        name: "Cofler",
        img : "https://angelitagolosinas.com.ar/wp-content/uploads/2021/02/1010357.jpg",
        des : "Chocolate cofler",
        stock : "5",
        category: 1,
        detail : "Producto Arcor. Tableta chocolate con leche Cofler 140gr." 
    },
    {
        id: "2",
        name: "Torpedo de Frutilla",
        img : "https://www.grupoelnene.com.ar/10794/helado-torpedo-frutilla-x-63-grs.jpg",
        des : "helado de frutill Torpedo",
        stock : "8",
        category: 2,
        detail : "Torpedo la marca preferida por los chicos, que siempre trae propuestas refrescantes y divertidas. Disfrutalo en sus clásicas versiones Torpedo Frutilla y Torpedo Limón y también en las versiones más divertidas Torpedo Pinta Lengua y el nuevo Torpedo acido!" 
    },
    {
        id: "3",
        name: "Bonaqua",
        img : "https://roldanonline.com.ar/wp-content/uploads/2020/07/7790895003868.jpg",
        des : "Agua bonaqua",
        stock : "3",
        category: 3,
        detail : "Botella Bonaqua 500ml. 'Tomá Bonaqua. Una buena idea'." 
    },
    {
        id: "4 ",
        name: "Levite",
        img : "https://jumboargentina.vtexassets.com/arquivos/ids/620161/Agua-Saborizada-Villa-Del-Sur-Levite-Manzana-Sin-Gas-500-Ml-2-469084.jpg?v=637466226198430000",
        des : "Levite de Manzana",
        stock : "3",
        category: 3,
        detail : "Agua Saborizada Villa Del Sur Levite Manzana Sin Gas 500 Ml. Disfrutalo en sus otras variedad como Pomelo, naranja, pera y anana" 
    },
    {
        id: "5 ",
        name: "Fanta",
        img : "https://superlago.com.ar/wp-content/uploads/2022/04/Fanta-500Ml..png",
        des : "Fanta 500ml",
        stock : "3",
        category: 3,
        detail : "Fanta 500ml sabor naranja. Burbujas de sabor dulce siempre dulce, no importa si escogiste naranja, uva, fresa, guaraná o, quizás piña, todos vendrán a burbujas que corren por tu lengua, paladar y garganta, deliciosas para que termines el trago diciendo ahhhh. ​ Porque a veces la vida se torna gris, Fanta con sus sabores estarán ahí para volver el color a mil. ​" 
    },
    {
        id: "6 ",
        name: "CocaCola",
        img : "https://www.casa-segal.com/wp-content/uploads/2020/03/coca-cola-500cc-almacen-gaseosas-casa-segal-mendoza-600x600.jpg",
        des : "Levite de Manzana",
        stock : "3",
        category: 3,
        detail : "Gaseosa Coca-Cola Sabor Original 500 Ml Nada supera el sabor de una Coca-Cola. Diseñado para acompañar cada momento, el sabor de la Coca-Cola es unclásico que perdura desde hace más de 130 años. Deliciosa y refrescante" 
    },
    {
        id: "7",
        name: "KitKat",
        img : "https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/fotos/b/0000002000/642_1.jpg",
        des : "Chocolate kitkat",
        stock : "5",
        category: 1,
        detail : "Es un delicioso chocolate de 4 barritas de oblea crocante, cubierto de chocolate con leche. Una porción equivale a 2 barritas y contiene sólo 120 calorías. El más delicioso chocolate para llevar a todos lados. ¡Abrí el pack, separá una de las 4 barritas, partila en dos y disfrutá! #mibreak #CuálEsTuBreak? Have a Break, Have a KitKat®" 
    },
    {
        id: "8",
        name: "Kinder Chocolate",
        img : "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/185/658/products/kinder-x-100-g1-4023e298bfde6f0da516201359836645-640-0.png",
        des : "Chocolate Kinder Chocolate",
        stock : "5",
        category: 1,
        detail : "Viene en pequeñas porciones con mucho sabor, y además está hecho sin colorantes ni conservantes. Por eso es perfecto para cuando decís si! KINDER® CHOCOLATE pequeños momentos, que significan mucho." 
    },
    {
        id: "9",
        name: "Popsy",
        img : "http://d2r9epyceweg5n.cloudfront.net/stores/001/769/691/products/76130344339781-014de3df5ce898ad9916268920522363-640-0.jpg",
        des : "Helado Frigor",
        stock : "5",
        category: 2,
        detail : "Helado Frigor Popsy, sabor frutilla y naranja. También disfruta el Popsy Espacial de Frutilla y crema" 
    },
    {
        id: "10",
        name: "Palito bombón",
        img : "https://www.grupoelnene.com.ar/10790/helado-frigor-bombon-x364gr.jpg",
        des : "Helado Frigor",
        stock : "5",
        category: 2,
        detail : "Un exquisito helado de crema americana con cobertura de chocolate que hacen del producto una experiencia unica en su version palito cilíndrico de Frigor" 
    },
    {
        id: "11",
        name: "Sin Parar",
        img : "http://d2r9epyceweg5n.cloudfront.net/stores/001/769/691/products/76130357507531-05ca1f1bcd4f53f74316268920503390-640-0.jpg",
        des : "Helado Frigor",
        stock : "5",
        category: 2,
        detail : "SIN PARAR. Disfrutá el sabor del histórico helado de FRIGOR con las más ricas salsas y chips de chocolates, en una medida para golosos. Encontralo en sus diferentes versiones: Frutilla y Americana, Dulce de Leche y Americana, Chocolate y Dulce de Leche." 
    },
    {
        id: "12",
        name: "Sprite",
        img : "https://lachimbotana.com.ar/wp-content/uploads/2020/05/Sprite500.jpg",
        des : "Sprite 500ml",
        stock : "5",
        category: 3,
        detail : "Sprite 500ml sabor limalimon. Burbujeante, refrescante y de sabor ligero, Sprite es un refresco con sabor a lima y limón. Llegó por primera vez a las tiendas en 1961 y hoy se vende en más de 190 países." 
    }
];

export default product;