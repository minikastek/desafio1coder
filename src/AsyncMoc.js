const products = [
    { 
        id: '1', 
        name: 'Rick and Morty', 
        price: 1000, 
        category: 'deckbox', 
        img:'https://dojiw2m9tvv09.cloudfront.net/29535/product/14616605169.jpg', 
        stock: 25, 
        description:'Deckbox para un deck con espacio hasta 100 cartas en folios ideal para tu commander!'
    },
    
    {   id: '2', 
        name: 'Box UP Pikachu', 
        price: 800, 
        category: 'deckbox', 
        img:'https://www.magicsur.cl/1657-large_default/ultra-pro-flip-box-pikachu-pokemon.jpg', 
        stock: 16, 
        description:'Deckbox para un deck de hasta 80 cartas en folios, ultra pro de la maxima calidad con tapa magnetica'
    },

    {   id: '3', 
        name: 'Box BlackFire', 
        price: 1200, 
        category: 'deckbox', 
        img:'https://www.totalcards.net/pub/media/catalog/product/b/f/bf03181.jpg', 
        stock: 10, 
        description:'Deckbox para 2 decks de hasta 80 cartas en folios, 160 cartas en total con espacio para dados marca BlackFire la maxima calidad con tapa magnetica'
    },

    {   id: '4', 
        name: 'Pokedex', 
        price: 1200, 
        category: 'carpeta', 
        img:'https://kidshopia.com/wp-content/uploads/2021/05/612BHP3bUzPL._AC_SL1000_.jpg', 
        stock: 10, 
        description:'Descripcion '
    },
    {   id: '5', 
        name: 'Chandra', 
        price: 1200, 
        category: 'carpeta', 
        img:'https://m.media-amazon.com/images/I/715BLAHC0zL._AC_SX425_.jpg', 
        stock: 10, 
        description:'La mejor forma de cuidar tus cartas y con estilo '
    },
    {   id: '6', 
        name: 'Clasica', 
        price: 1200, 
        category: 'carpeta', 
        img:'https://http2.mlstatic.com/D_NQ_NP_673146-MLC44832808343_022021-O.jpg', 
        stock: 10, 
        description:'Descripcion '
    },
    {   id: '7', 
        name: 'Black Lotus', 
        price: 1200, 
        category: 'carta', 
        img:'https://http2.mlstatic.com/D_NQ_NP_660103-MLA48713894793_122021-W.jpg', 
        stock: 10, 
        description:'Black lotus, la carta mas codiciada por los coleccionistas y la reliquia de Magic The Gathering'
    },
    {   id: '8', 
        name: 'Mox Ruby', 
        price: 1200, 
        category: 'carta', 
        img:'https://static.cardkingdom.com/images/magic-the-gathering/alpha/mox-ruby-92712.jpg', 
        stock: 10, 
        description:'Mox Ruby, parte de las power 9 '
    },
    {   id: '9', 
        name: 'Mox Jet', 
        price: 1200, 
        category: 'carta', 
        img:'https://static.cardkingdom.com/images/magic-the-gathering/unlimited/mox-jet-61953.jpg', 
        stock: 10, 
        description:'Mox jet, parte de las power 9 '
    },

]

export const getProductsDeAlfredo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id ===id))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    })
}