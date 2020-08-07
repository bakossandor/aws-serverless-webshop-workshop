const products = [
  {
    "name": "Small Cat Food",
    "id": "001",
    "price": 18.19,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "img": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.thomasbellcountrystore.co.uk%2Fwp-content%2Fuploads%2F2013%2F06%2Fhow-to-make-dry-dog-food-more-appealing-to-your-dog-53bacc6b81ed71.jpg&f=1&nofb=1"
  },
  {
    "name": "Big Cat Food",
    "id": "002",
    "price": 24.49,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.C7hsLdXO4IREZXUMNEaN1gHaLG%26pid%3DApi&f=1"
  },
  {
    "name": "Vicious Cat Food",
    "id": "003",
    "price": 18.99,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "img": "https://https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3TKqXqAOF0KBCF18u6e1KQHaE8%26pid%3DApi&f=1"
  },
  {
    "name": "Universal Cat Food",
    "id": "004",
    "price": 9.99,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.aPRVTHiYVCASa7d27Sgf2wHaE6%26pid%3DApi&f=1"
  },
  {
    "name": "Stray Cat Food",
    "id": "005",
    "price": 10.99,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2017%2F05%2F19%2F12%2Fdog-food.jpg&f=1&nofb=1"
  },
  {
    "name": "Small Dog Food",
    "id": "006",
    "price": 13.99,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fpetwiseaquatics.co.uk%2Fwp-content%2Fuploads%2F2015%2F08%2Fdog-foods.jpg%3Ffit%3D1400%252C933%26ssl%3D1&f=1&nofb=1"
  },
  {
    "name": "Big Dog Food",
    "id": "007",
    "price": 55.00,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.chewy.com%2Fis%2Fcatalog%2F69776_PT5._AC_SL1500_V1458244069_.jpg&f=1&nofb=1"
  },
  {
    "name": "Vicious Dog Food",
    "id": "008",
    "price": 24.19,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.80xUgbBG7yi3D2W7TvbniAHaEZ%26pid%3DApi&f=1"
  },
  {
    "name": "Universal Dog Food",
    "id": "009",
    "price": 19.99,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.chewy.com%2Fis%2Fimage%2Fcatalog%2F86830_PT7._AC_SL1500_V1489102990_.jpg&f=1&nofb=1"
  },
  {
    "name": "Stray Dog Food",
    "id": "010",
    "price": 20.99,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "img": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.chewy.com%2Fis%2Fimage%2Fcatalog%2F49641_PT2._AC_SL1500_V1495491964_.jpg&f=1&nofb=1"
  },
  {
    "name": "Small Hamster Food",
    "id": "011",
    "price": 19.19,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixfeeds.com%2Fimages%2Fdogs%2Ffood%2F1280-182463338-dog-food-bowl-closeup.jpg&f=1&nofb=1"
  },
  {
    "name": "Big Hamster Food",
    "id": "012",
    "price": 21.19,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gensoldx.com%2Fwp-content%2Fuploads%2F2018%2F04%2Ffuture-of-pet-food.jpg&f=1&nofb=1"
  },
  {
    "name": "Vicious Hamster Food",
    "id": "013",
    "price": 24.19,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "img": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.thomasbellcountrystore.co.uk%2Fwp-content%2Fuploads%2F2013%2F06%2Fhow-to-make-dry-dog-food-more-appealing-to-your-dog-53bacc6b81ed71.jpg&f=1&nofb=1"
  },
  {
    "name": "Universal Hamster Food",
    "id": "014",
    "price": 19.99,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjughandlesfatfarm.com%2Fwp-content%2Fuploads%2F2018%2F01%2Fpd-wd-canine-dry-productKibble_5001.png&f=1&nofb=1"
  },
  {
    "name": "Stray Hamster Food",
    "id": "015",
    "price": 20.99,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    "img": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.thomasbellcountrystore.co.uk%2Fwp-content%2Fuploads%2F2013%2F06%2Fhow-to-make-dry-dog-food-more-appealing-to-your-dog-53bacc6b81ed71.jpg&f=1&nofb=1"
  }
]

module.exports = function(orderedItems = []) {
  const itemsMap = orderedItems.map((item) => {
    const baseProd = products.find((prod) => prod.id === item.id)
    baseProd.volume = item.volume
    return baseProd
  })
  const reducer = (acc, curr) => acc + curr
  const orderTotalPrice = itemsMap.map(item => {
    return Number(parseFloat(item.price * item.volume).toFixed(2))
  }).reduce(reducer)
  
  return {
    'mappedItems': itemsMap,
    orderTotalPrice
  }
}