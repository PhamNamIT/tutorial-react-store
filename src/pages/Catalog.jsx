import React, { useState, useCallback, useEffect, useRef } from 'react'

import Helmet from '../components/Helmet'
import CheckBox from '../components/CheckBox'
import Radio from '../components/Radio'
import Button from '../components/Button'
import InfinityList from '../components/InfinityList'

import productData from '../assets/fake-data/products'
import category from '../assets/fake-data/category'
import colors from '../assets/fake-data/product-color'
import price from '../assets/fake-data/product-price'

import { FaWindowClose } from 'react-icons/fa'

const Catalog = () => {

  const initFilter = {
    category: [],
    color: [],
    price: []
  }

  const productList = productData.getAllProducts()

  const [products, setProducts] = useState(productList)

  const [filter, setFilter] = useState(initFilter)

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch(type) {
        case "CATEGORY":
          setFilter({...filter, category: [...filter.category, item.categorySlug]})
          break
        case "COLOR":
          setFilter({...filter, color: [...filter.color, item.color]})
          break
        case "PRICE":
          setFilter({...filter, price: [...filter.price, item.price]})
          break
        default:
      }
    } else {
      switch(type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(e => e !== item.categorySlug)
          setFilter({...filter, category: newCategory})
          break
        case "COLOR": 
          const newColor = filter.color.filter(e => e !== item.color)
          setFilter({...filter, color: newColor})
          break
        case "PRICE": 
          const newPrice = filter.price.filter(e => e !== item.price)
          setFilter({...filter, price: newPrice})
          break
        default:
      }
    }
  }

  const updateProducts = useCallback(
    () => {
      let temp = productList

      if (filter.category.length > 0) {
        temp = temp.filter(e => filter.category.includes(e.categorySlug))
      }

      if (filter.color.length > 0) {
        temp = temp.filter(e => {
          const check = e.colors.find(color => filter.color.includes(color))
          return check !== undefined
        })
      }

      if (filter.price.length > 0) {
        temp = temp.filter(e => {
          const check = e.price.find(price => filter.price.includes(price))
          return check !== undefined
        })
      }

      setProducts(temp)
    },
    [filter, productList],
  )

  const clearFilter = () => setFilter(initFilter)

  useEffect(() => {
    updateProducts()
  }, [updateProducts])

  const filterRef = useRef(null)

  const showHiddenFilter = () => filterRef.current.classList.toggle('active')

  return (
    <Helmet title="S???n ph???m">
      <div className="catalog">
        <div className="catalog__filter" ref={filterRef}>
          <div className="catalog__filter__close" onClick={() => showHiddenFilter()}>
            <FaWindowClose />
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              Danh m???c s???n ph???m
            </div>
            <div className="catalog__filter__widget__content">
              {
                category.map((item, index) => (
                  <div key={index} className="catalog__filter__widget__content__item">
                    <CheckBox
                      label={item.display}
                      onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                      checked={filter.category.includes(item.categorySlug)}
                    />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              M??u s???c
            </div>
            <div className="catalog__filter__widget__content">
              {
                colors.map((item, index) => (
                  <div key={index} className="catalog__filter__widget__content__item">
                    <CheckBox
                      label={item.display}
                      onChange={(input) => filterSelect("COLOR", input.checked, item)}
                      checked={filter.color.includes(item.color)}
                    />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              M???c gi??
            </div>
            <div className="catalog__filter__widget__content">
              {
                price.map((item, index) => (
                  <div key={index} className="catalog__filter__widget__content__item">
                    <CheckBox
                      label={item.display}
                      onChange={(input) => filterSelect("PRICE", input.checked, item)}
                      checked={filter.price.includes(item.price)}
                    />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <Button size="sm" onClick={clearFilter}>Xo?? b??? l???c</Button>
            </div>
          </div>
        </div>
        <div className="catalog__filter__toggle">
          <Button size="sm" onClick={() => showHiddenFilter()}>B??? L???c</Button>
        </div>
        <div className="catalog__content">
          <InfinityList 
            data={products} 
          />
        </div>
      </div>
    </Helmet>
  )
}

export default Catalog