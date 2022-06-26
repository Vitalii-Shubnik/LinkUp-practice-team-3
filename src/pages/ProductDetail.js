import React from 'react'
import '../styles/productdetail.css'
import ArrowBack from '../images/arrow-back.png'
import testImage from '../images/SliderImage.png'

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
          <div className='product-detail-title'>Wiley Saddle Bag - Fossil</div>
          <div className='product-detail-sold '>234 Sold</div>
          <div className='product-detail-description'>
            Finish every look on a note of Parisian chic with the Lou Camera crossbody bag from Saint Laurent, presented here in cream beige. Made in Italy from chevron matelassé leather, the design is adorned with golden hardware.
          </div>
          <div className='horizontal-divider product-detail-horizontal-divider' />
          <div className='product-price-detail'>
            <div className='product-detail-price'>Price 2000</div>
            <button className='product-detail-add-to-cart-button'>Add to Cart</button>
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
          Take a look
        </div>
        <div className='extra-info-descriprion'>
          No matter where you're heading, the Uptown wallet on chain from Saint Laurent will lend Parisian glamour to your looks. The slimline design comes in moss green leather embossed with a croc-effect, and its envelope silhouette is completed with a gold-toned iteration of the brand's iconic YSL monogram plaque.Suited for day-to-night styles, the Uptown clutch from Saint
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