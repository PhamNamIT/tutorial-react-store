import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router'

import { useDispatch } from 'react-redux'

import { remove } from '../redux/product-modal/productModalSlice'
import { addItem } from '../redux/shopping-cart/cartItemsSlice'

import { FaMinus, FaPlus } from 'react-icons/fa'

import Button from './Button'

import numberWithCommas from '../utils/numberWithCommas'

const ProductView = props => {

  let product = props.product

  if (product === undefined) product = {
    price: 0,
    title: "",
    size: [],
    colors: []
  }

  const dispatch = useDispatch()

  const history = useNavigate()

  const [previewImg, setPreviewImg] = useState(product.image01)

  const [descriptionExpand, setDescriptionExpand] = useState(false)

  const [color, setColor] = useState(undefined)

  const [size, setSize] = useState(undefined)

  const [quantity, setQuantity] = useState(1)

  const updateQuantity = (type) => {
    if (type === 'plus') {
      setQuantity(quantity + 1)
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }
  }

  useEffect(() => {
    setPreviewImg(product.image01)
    setColor(undefined)
    setQuantity(1)

  }, [product]);

  const check = () => {
    let res = true

    if (color === undefined) {
      alert('Vui lòng chọn màu!')
      return false
    }

    return true
  }

  const addToCart = () => {
    if (check()) {
      dispatch(addItem({
        slug: product.slug,
        color: color,
        size: size,
        quantity: quantity,
        price: product.price
      }))
      alert('success')
    }
  }

  const gotoCart = () => {
    if (check()) {
      dispatch(addItem({
        slug: product.slug,
        color: color,
        size: size,
        quantity: quantity,
        price: product.price
      }))
      dispatch(remove())
      history('/cart')  
    }
  }

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div className="product__images__list__item" onClick={() => setPreviewImg(product.image01)}>
            <img src={product.image01} alt="" />
          </div>
          <div className="product__images__list__item" onClick={() => setPreviewImg(product.image02)}>
            <img src={product.image02} alt="" />
          </div>
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>
        <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
          <div className="product-description__title">
            Chi tiết sản phẩm
          </div>
          <div className="product-description__content" dangerouslySetInnerHTML={{__html:product.description}}></div>
          <div className="product-description__toggle">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {
                descriptionExpand ? 'Thu gọn' : 'Xem thêm'
              }
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {numberWithCommas(product.price)}
          </span>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">
            Màu sắc
          </div>
          <div className="product__info__item__list">
            {
              product.colors.map((item, index) => (
                <div 
                  key={index}
                  className={`product__info__item__list__color ${color === item ? 'active' : ''}`}
                  onClick={() => setColor(item)}
                >
                  <div className={`circle bg-${item}`}></div>
                </div>
              ))
            }
          </div>
        </div>
        {/* <div className="product__info__item">
          <div className="product__info__item__title">
            Kích cỡ (Dung lượng)
          </div>
          <div className="product__info__item__list">
            {
              product.size.map((item, index) => (
                <div 
                  key={index}
                  className={`product__info__item__list__size ${size === item ? 'active' : ''}`}
                  onClick={() => setSize(item)}
                >
                  <span className="product__info__item__list__size__item">
                    {item}
                  </span>
                </div>
              ))
            }
          </div>
        </div> */}
        <div className="product__info__item">
          <div className="product__info__item__title">
            Số lượng
          </div>
          <div className="product__info__item__quantity">
            <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>
              <FaMinus />
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
              <FaPlus />
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button onClick={() => addToCart()}>Thêm vào giỏ</Button>
          <Button onClick={() => gotoCart()}>Mua ngay</Button>
        </div>
      </div>
    </div>
  )
}

ProductView.propTypes = {
  product: PropTypes.object
}

export default ProductView