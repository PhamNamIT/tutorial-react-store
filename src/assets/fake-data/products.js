const product_01_image_01 = require('../images/product/Battery/1_BB001.png')
const product_01_image_02 = require('../images/product/Battery/2_BB001.png')

const product_02_image_01 = require('../images/product/Camera/1_CMR.png')
const product_02_image_02 = require('../images/product/Camera/2_CMR.png')

const product_03_image_01 = require('../images/product/Case/1_CPC001.png')
const product_03_image_02 = require('../images/product/Case/2_CPC001.png')

const product_04_image_01 = require('../images/product/Charger/1_CG-C001.png')
const product_04_image_02 = require('../images/product/Charger/2_CG-C001.png')

const product_05_image_01 = require('../images/product/EarPhone/AirPods/1_EP-B001.png')
const product_05_image_02 = require('../images/product/EarPhone/AirPods/2_EP-B001.png')

const product_06_image_01 = require('../images/product/EarPhone/HeadPhone/1_EP-H001.png')
const product_06_image_02 = require('../images/product/EarPhone/HeadPhone/2_EP-H001.png')

const products = [
  {
    title: "Sạc dự phòng Gofd Candy",
    price: 189000,
    image01: product_01_image_01, 
    image02: product_01_image_02,
    categorySlug: "sac-du-phong",
    colors: ["gris", "black"],
    slug: "sac-du-phong-BB001",
    size: "10000mAh"
  },
  {
    title: "Camera TP-Link Tapo TC60 1080P",
    price: 450000,
    image01: product_02_image_01, 
    image02: product_02_image_02,
    categorySlug: "camera",
    colors: "white",
    slug: "camera-cmr001",
    size: "67.6 x 54.8 x 98.9 mm"
  },
  {
    title: "Case PC Antec NX800",
    price: 1750000,
    image01: product_03_image_01, 
    image02: product_03_image_02,
    categorySlug: "case-pc",
    colors: "black",
    slug: "case-pc-cpc001",
    size: "470 x 230 x 500 mm"
  },
  {
    title: "Củ Sạc Anker Powerport III Nano 20W",
    price: 320000,
    image01: product_04_image_01, 
    image02: product_04_image_02,
    categorySlug: "cu-sac",
    colors: "white",
    slug: "charger/cu-sac",
    size: "2.8 x 2.8 x 4 cm"
  },
  {
    title: "Tai nghe không dây Apple AirPods 2",
    price: 3450000,
    image01: product_05_image_01, 
    image02: product_05_image_02,
    categorySlug: "airpod",
    colors: "white",
    slug: "earphone/airpod",
    size: ""
  },
  {
    title: "Tai nghe Bluetooth Headphone Harman Kardon Fly ",
    price: 3990000,
    image01: product_06_image_01, 
    image02: product_06_image_02,
    categorySlug: "headphone",
    colors: "black",
    slug: "earphone/headphone",
    size: ""
  }
  // 6 products
]

const getAllProducts = () => products

const getProducts = (count) => {
  const max = products.length - count
  const min = 0
  const start = Math.floor(Math.random() * (max - min) + min)
  return products.slice(start, start + count)
}

const productData = {
  getAllProducts,
  getProducts
}

export default productData