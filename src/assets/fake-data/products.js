import Product from '../../pages/Product'

/* Sạc dự phòng */
const product_01_image_01 = require('../images/product/Battery/1_BB001.png')
const product_01_image_02 = require('../images/product/Battery/2_BB001.png')

/* Camera */
const product_02_image_01 = require('../images/product/Camera/1_CMR.png')
const product_02_image_02 = require('../images/product/Camera/2_CMR.png')

/* Case PC */
const product_03_image_01 = require('../images/product/Case/1_CPC001.png')
const product_03_image_02 = require('../images/product/Case/2_CPC001.png')

/* Củ sạc */
const product_04_image_01 = require('../images/product/Charger/1_CG-C001.png')
const product_04_image_02 = require('../images/product/Charger/2_CG-C001.png')

/* Tai nghe bluetooth */
const product_05_image_01 = require('../images/product/EarPhone/AirPods/1_EP-B001.png')
const product_05_image_02 = require('../images/product/EarPhone/AirPods/2_EP-B001.png')

/* Tai nghe chụp tai */
const product_06_image_01 = require('../images/product/EarPhone/HeadPhone/1_EP-H001.png')
const product_06_image_02 = require('../images/product/EarPhone/HeadPhone/2_EP-H001.png')

/* Balo */
const product_07_image_01 = require('../images/product/HandBag/1_BL001.png')
const product_07_image_02 = require('../images/product/HandBag/2_BL001.png')

const products = [
  {
    title: "Sạc dự phòng Gofd Candy",
    price: 189000,
    image01: product_01_image_01, 
    image02: product_01_image_02,
    categorySlug: "sac-du-phong",
    colors: ["white"],
    slug: "sac-du-phong",
    size: ["10000mAh", "20000mAh"],
    description: "<h4>Pin sạc dự phòng Golf Candy 10.000mAh G80 - Tốc độ thể hiện trên vẻ ngoài</h4> <p>Golf Candy là một trong những thương hiệu nổi tiếng trên thế giới về sản xuất phụ kiện pin dự phòng. Một trong những cái tên phải nói đến khi nghe đến thương hiệu này đó chính là pin sạc dự phòng Golf Candy 10.000mAh G80. Với phong cách thiết kế sang trọng bắt mắt và dung lượng pin cao lên đến 10.000mAh mang đến cho người dùng một trải nghiệm hoàn toàn mới về khả năng sạc pin trên pin dự phòng. Để có cái nhìn chung hơn, chi tiết hơn về sản phẩm này, hãy cùng chúng tôi tìm hiểu xem G80 đang sở hữu gì nhé!</p> <h4>Thiết kế nhỏ gọn, chất liệu nhựa ABS cao cấp</h4> <p>Được nhắc đến với slogan \"Vẻ ngoài nói lên thương hiệu\". Pin sạc dự phòng Golf Candy 10.000mAh G80 mang đến một vẻ ngoài sang trọng bắt mắt với thiết kế nhỏ gọn chỉ 68 x 16 x 135mm dễ dàng mang theo bất cứ đâu khi sử dụng với trọng lượng chỉ 116g. <br> Màu sắc trên pin cũng được chia làm 2 màu cơ bản là trắng và đen, được phân phối màu xen kẽ và phân bổ cấu trúc logo cũng như màu sắc hài hoàn khi nhìn từ bên ngoài vào mang đến một cái nhìn sang trọng tinh tế.</p> <img src='https://cdn.cellphones.com.vn/media/wysiwyg/accessories/charger/Golf-Candy-10000mAh-G80.jpg' /> <p>Chất liệu nhựa trên pin dự phòng Golf Candy 10.000mAh G80 là loại nhựa ABS cao cấp có khả năng chống cháy hiệu quả khi nhiệt độ tăng cao đột ngột cả từ bên trong lẫn bên ngoài pin dự phòng. Ở phần trên cổng sạc của pin cũng có dải hệ thống 4 đèn LED nhỏ với mục đích thống báo dụng lượng pin còn và tình trạng pin khi sử dụng.</p> <img src='https://cdn.cellphones.com.vn/media/wysiwyg/accessories/charger/Golf-Candy-10000mAh-G80-1.jpg' /> <h4>Dung lượng pin 10.000mAh, sạc cùng lúc 2 thiết bị</h4> <p>Pin dự phòng Golf Candy G80 được hãng thiết kế với dung lượng chuẩn 10.000mAh mang đến khả năng sạc đầy cho các thiết bị nhiều lần mà không bị cạn dung lượng. Golf Candy G80 có thể sạc đầy tất cả các thiết bị điện thoại thông minh trên thị trường hiện tại đến trên 2 lần mới cần nạp lại năng lượng. Mở rộng đáng kể dung lượng cho người dùng sử dụng mà không bị giới hạn khả năng sạc.</p> <img src='https://cdn.cellphones.com.vn/media/wysiwyg/accessories/charger/Golf-Candy-10000mAh-G80-2.jpg' />"
  },
  {
    title: "Camera TP-Link Tapo TC60 1080P",
    price: 450000,
    image01: product_02_image_01, 
    image02: product_02_image_02,
    categorySlug: "camera",
    colors: ["white"],
    slug: "camera",
    size: ["67.6 x 54.8 x 98.9 mm"],
    description: "Mô tả sản phẩm"
  },
  {
    title: "Case PC Antec NX800",
    price: 1750000,
    image01: product_03_image_01, 
    image02: product_03_image_02,
    categorySlug: "case",
    colors: ["black"],
    slug: "case-pc",
    size: ["470 x 230 x 500 mm"],
    description: "Mô tả sản phẩm"
  },
  {
    title: "Củ Sạc Anker Powerport III Nano 20W",
    price: 320000,
    image01: product_04_image_01, 
    image02: product_04_image_02,
    categorySlug: "cu-sac",
    colors: ["white"],
    slug: "cu-sac",
    size: ["2.8 x 2.8 x 4 cm"],
    description: "Mô tả sản phẩm"
  },
  {
    title: "Tai nghe không dây Apple AirPods 2",
    price: 3450000,
    image01: product_05_image_01, 
    image02: product_05_image_02,
    categorySlug: "tai-nghe",
    colors: ["white", "black", "red", "yellow"],
    slug: "airpod",
    size: [""],
    description: "Mô tả sản phẩm"
  },
  {
    title: "Tai nghe Bluetooth Headphone Harman Kardon Fly",
    price: 3990000,
    image01: product_06_image_01, 
    image02: product_06_image_02,
    categorySlug: "tai-nghe",
    colors: ["black"],
    slug: "headphone",
    size: [""],
    description: "Mô tả sản phẩm"
  },
  {
    title: "Balo Laptop Acer Predator Gaming Utility",
    price: 1400000,
    image01: product_07_image_01, 
    image02: product_07_image_02,
    categorySlug: "balo",
    colors: ["black"],
    slug: "balo-acer",
    size: ["355 x 203 x 520 mm"],
    description: "Mô tả sản phẩm"
  }
  // 7 products
]

const getAllProducts = () => products

const getProducts = (count) => {
  const max = products.length - count
  const min = 0
  const start = Math.floor(Math.random() * (max - min) + min)
  return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsDetal = (cartItems) => {
  let res = []
  if (cartItems.length > 0) {
    cartItems.forEach(e => {
      res.push({
        ...e,
        product: getProductBySlug(e.slug)
      })
    })
  }
  return res
}

const productData = {
  getAllProducts,
  getProducts,
  getProductBySlug,
  getCartItemsDetal
}

export default productData