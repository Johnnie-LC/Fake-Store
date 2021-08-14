/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedProduct,
  removeSelectedProduct,
} from '../redux/actions/productActions'

const ProductDetail = () => {
  const dispatch = useDispatch()
  const { productId } = useParams()
  const product = useSelector((state) => state.product)
  const { price, image, category, description, title } = product

  useEffect(() => {
    if (productId && productId !== '') {
      fetchProductDetail(`https://fakestoreapi.com/products/${productId}`)
    }
    //El return en useEffect sirve para hacer algo cuando desmontemos el componente
    // o se actualice
    return () => {
      dispatch(removeSelectedProduct())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId])

  const fetchProductDetail = async (apiProduct) => {
    try {
      const res = await axios.get(apiProduct)
      const productDetail = await res.data
      console.log('productDetail: ', productDetail)

      dispatch(selectedProduct(productDetail))
    } catch (error) {
      console.log('Error: ', error.message)
    }
  }
  console.log('product: ', product)

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a href="#" className="ui teal tag label">
                    ${price}
                  </a>
                </h2>

                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
