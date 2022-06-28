import React, { useEffect, useState } from 'react'
import '../styles/productdetail.css'
import ArrowBack from '../images/arrow-back.png'
import testImage from '../images/SliderImage.png'
import { useNavigate, useParams } from 'react-router-dom'
import { url } from '../constants/constants'
import { changeNumberOfProductInCart } from '../app/service'
//temporary data
const mainData = {
  title: 'Wiley Saddle Bag - Fossil',
  sold: 234,
  description: 'Finish every look on a note of Parisian chic with the Lou Camera crossbody bag from Saint Laurent, presented here in cream beige. Made in Italy from chevron matelassé leather, the design is adorned with golden hardware.',
  price: 2002,
}
const extraData = {
  images: [testImage, testImage, testImage],
  title: 'Take a look',
  description: "No matter where you're heading, the Uptown wallet on chain from Saint Laurent will lend Parisian glamour to your looks. The slimline design comes in moss green leather embossed with a croc-effect, and its envelope silhouette is completed with a gold-toned iteration of the brand's iconic YSL monogram plaque.Suited for day-to-night styles, the Uptown clutch from Saint",
}
const ProductDetail = () => {
  const [added, setAdded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [mainInfo, setMainInfo] = useState({})
  const [secondaryInfo, setSecondaryInfo] = useState({})
  const user = localStorage.getItem('user')
  const { productId } = useParams()
  useEffect(() => {
    const getProductList = () => {
      setLoading(true);
      fetch(`${url}/products/${productId}`)
        .then(res => res.json())
        .then(res => {
          setMainInfo(res);
          console.log(mainInfo)
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