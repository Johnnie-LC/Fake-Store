import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setProducts } from '../redux/actions/productActions'

import ProductComponent from './ProductComponent'

const ProductListing = () => {
  const products = useSelector((state) => state)
  const dispatch = useDispatch()

  const fetchProducts = async (api) => {
    try {
      const response = await axios.get(api)
      const data = await response.data
      dispatch(setProducts(data))
    } catch (error) {
      console.log('error: ', error.message)
    }
  }
  useEffect(() => {
    fetchProducts('https://fakestoreapi.com/products')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(products)
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}
export default ProductListing
