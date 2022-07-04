import React, { useEffect, useState } from 'react'
import '../styles/productdetail.css'
import ArrowBack from '../images/arrow-back.png'
import testImage from '../images/SliderImage.png'
import { useNavigate, useParams } from 'react-router-dom'
import { url } from '../constants/constants'
import { changeNumberOfProductInCart } from '../app/service'

const ProductDetail = () => {
  const [added, setAdded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [mainInfo, setMainInfo] = useState({})
  const user = localStorage.getItem('user')
  const { productId } = useParams()
  useEffect(() => {
    const getProductList = () => {
      setLoading(true);
      fetch(`${url}/products/${productId}`)
        .then(res => res.json())
        .then(res => {
          setMainInfo(res);
          setLoading(false);
        });
    }
    getProductList();
  }, []);
  const navigate = useNavigate()
  return (
    <div className='product-detail-container'>
      <div className='back-button' onClick={() => navigate('/')}>
        <img src={ArrowBack} alt='arrow-back' className='back-arrow' />
        <span className='back-text' >Back</span>
      </div>
      <div className='product-detail-main-full-information'>
        <img src={testImage} className='main-image' />
        <div className='product-detail-main-text-information'>
          <div className='product-detail-title'>{mainInfo.name}</div>
          <div className='product-detail-sold '>{mainInfo.soldCount} Sold</div>
          <div className='product-detail-description'>
            {mainInfo.description}
          </div>
          <div className='horizontal-divider product-detail-horizontal-divider' />
          <div className='product-price-detail'>
            <div className='product-detail-price'>{mainInfo.price}</div>
            <button onClick={()=>{changeNumberOfProductInCart(user,productId,setLoading,1);setAdded(true)}} className='product-detail-add-to-cart-button'>{added ? 'Added to Cart': 'Add to Cart'}</button>
          </div>
        </div>
      </div>
      <div className='horizontal-divider page-horizontal-divider' />
      <div className='extra-info'>
        <div className='extra-info-name'>
          Extra information
        </div>
        <img src={testImage} className='extra-info-main-image' />
        <div className='extra-info-title'>
          {mainInfo && mainInfo.info && mainInfo.info.title}

        </div>
        <div className='extra-info-descriprion'>
          {mainInfo && mainInfo.info && mainInfo.info.text}
        </div>
        <div className='secondary-images'>
          <img src={testImage} className='secondary-images-first' />
          <img src={testImage} className='secondary-images-second' />
        </div>
      </div>
      <div className='horizontal-divider page-horizontal-divider' />
    </div>
  )
}

export default ProductDetail