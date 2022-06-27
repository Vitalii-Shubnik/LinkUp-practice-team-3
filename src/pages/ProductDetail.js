import React from 'react'
import '../styles/productdetail.css'
import ArrowBack from '../images/arrow-back.png'
import testImage from '../images/SliderImage.png'
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
  

  return (
    <div className='product-detail-container'>
      <div className='back-button'>
        <img src={ArrowBack} alt='arrow-back' className='back-arrow' />
        <span className='back-text' >Back</span>
      </div>
      <div className='product-detail-main-full-information'>
        <img src={testImage} className='main-image' />
        <div className='product-detail-main-text-information'>
          <div className='product-detail-title'>{mainData.title}</div>
          <div className='product-detail-sold '>{mainData.sold} Sold</div>
          <div className='product-detail-description'>
            {mainData.description}
          </div>
          <div className='horizontal-divider product-detail-horizontal-divider' />
          <div className='product-price-detail'>
            <div className='product-detail-price'>$ {mainData.price.toFixed(2)}</div>
            <button className='product-detail-add-to-cart-button'>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className='horizontal-divider page-horizontal-divider' />
      <div className='extra-info'>
        <div className='extra-info-name'>
          Extra information
        </div>
        <img src={extraData.images[0]} className='extra-info-main-image' />
        <div className='extra-info-title'>
          {extraData.title}
        </div>
        <div className='extra-info-descriprion'>
          {extraData.description}
        </div>
        <div className='secondary-images'>
          <img src={extraData.images[1]} className='secondary-images-first' />
          <img src={extraData.images[2]} className='secondary-images-second' />
        </div>
      </div>
      <div className='horizontal-divider page-horizontal-divider' />
    </div>
  )
}

export default ProductDetail