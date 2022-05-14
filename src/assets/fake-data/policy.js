import { FaShoppingBag } from 'react-icons/fa'
import { FaCreditCard } from 'react-icons/fa'
import { FaRegGem } from 'react-icons/fa'
import { FaDonate } from 'react-icons/fa'

const policy = [
  {
    name: "Miễn phí giao hàng",
    description: "Miễn phí ship với đơn hàng lớn hơn 50k",
    icon: <FaShoppingBag/>
  },
  {
    name: "Thanh toán COD",
    description: "Thanh toán khi nhận hàng (COD)",
    icon: <FaCreditCard />
  },
  {
    name: "Khách hàng VIP",
    description: "Ưu đãi dành cho khách hàng VIP",
    icon: <FaRegGem />
  },
  {
    name: "Hổ trợ bảo hành",
    description: "Đổi, trả, bảo hành tại tất cả các store",
    icon: <FaDonate />
  }
]

export default policy