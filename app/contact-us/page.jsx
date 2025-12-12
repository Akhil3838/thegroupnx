import React from 'react'

function page() {
  return (
    <>
    <div className='preload-wrapper'>
                    <a href="#" id="toggle-rtl" className="tf-btn animate-hover-btn btn-fill">RTL</a>
     
    {/* <div className="preload preload-container">
        <div className="preload-logo">
            <div className="spinner"></div>
        </div>
    </div> */}

<div id="wrapper">
            {/* header */}
<header id='header' className='header-default'>
   <div className="px_15 lg-px_40">
     <div className="row wrapper-header align-items-center">
      <div className="col-md-4 col-3 tf-lg-hidden">
  <a href="#mobileMenu" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
    >
      <path
        d="M2.00056 2.28571H16.8577C17.1608 2.28571 17.4515 2.16531 17.6658 1.95098C17.8802 1.73665 18.0006 1.44596 18.0006 1.14286C18.0006 0.839753 17.8802 0.549063 17.6658 0.334735C17.4515 0.120408 17.1608 0 16.8577 0H2.00056C1.69745 0 1.40676 0.120408 1.19244 0.334735C0.978109 0.549063 0.857702 0.839753 0.857702 1.14286C0.857702 1.44596 0.978109 1.73665 1.19244 1.95098C1.40676 2.16531 1.69745 2.28571 2.00056 2.28571ZM0.857702 8C0.857702 7.6969 0.978109 7.40621 1.19244 7.19188C1.40676 6.97755 1.69745 6.85714 2.00056 6.85714H22.572C22.8751 6.85714 23.1658 6.97755 23.3801 7.19188C23.5944 7.40621 23.7148 7.6969 23.7148 8C23.7148 8.30311 23.5944 8.59379 23.3801 8.80812C23.1658 9.02245 22.8751 9.14286 22.572 9.14286H2.00056C1.69745 9.14286 1.40676 9.02245 1.19244 8.80812C0.978109 8.59379 0.857702 8.30311 0.857702 8ZM0.857702 14.8571C0.857702 14.554 0.978109 14.2633 1.19244 14.049C1.40676 13.8347 1.69745 13.7143 2.00056 13.7143H12.2863C12.5894 13.7143 12.8801 13.8347 13.0944 14.049C13.3087 14.2633 13.4291 14.554 13.4291 14.8571C13.4291 15.1602 13.3087 15.4509 13.0944 15.6653C12.8801 15.8796 12.5894 16 12.2863 16H2.00056C1.69745 16 1.40676 15.8796 1.19244 15.6653C0.978109 15.4509 0.857702 15.1602 0.857702 14.8571Z"
        fill="currentColor"
      ></path>
    </svg>
  </a>
      </div>

     <div className="col-xl-3 col-md-4 col-6">
  <a href="index.html" className="logo-header">
    <img src="images/logo/logo.svg" alt="logo" className="logo" />
  </a>
    </div>

     <div className="col-xl-6 tf-md-hidden">
       <nav className="box-navigation text-center">
       <ul className="box-nav-ul d-flex align-items-center justify-content-center gap-30">
          <li className="menu-item">
  <a href="#" className="item-link">Home<i className="icon icon-arrow-down"></i></a>
  <div className="sub-menu mega-menu">
    <div className="container">
      <div className="row-demo">
        <div className="demo-item">
          <a href="index.html">
            <div className="demo-image position-relative">
              <img className="lazyload" data-src="images/demo/home-01.jpg"
                src="images/demo/home-01.jpg" alt="home-01" />
              <div className="demo-label">
                <span className="demo-new">New</span>
                <span>Trend</span>
              </div>
            </div>
            <span className="demo-name">Home Fashion 01</span>
          </a>
        </div>

        <div className="demo-item">
          <a href="home-multi-brand.html">
            <div className="demo-image position-relative">
              <img className="lazyload"
                data-src="images/demo/home-multi-brand.jpg"
                src="images/demo/home-multi-brand.jpg"
                alt="home-multi-brand" />
              <div className="demo-label">
                <span className="demo-new">New</span>
                <span className="demo-hot">Hot</span>
              </div>
            </div>
            <span className="demo-name">Home Multi Brand</span>
          </a>
        </div>

        <div className="demo-item">
          <a href="home-02.html">
            <div className="demo-image position-relative">
              <img className="lazyload" data-src="images/demo/home-02.jpg"
                src="images/demo/home-02.jpg" alt="home-02" />
              <div className="demo-label">
                <span className="demo-hot">Hot</span>
              </div>
            </div>
            <span className="demo-name">Home Fashion 02</span>
          </a>
        </div>

        <div className="demo-item">
          <a href="home-03.html">
            <div className="demo-image">
              <img className="lazyload" data-src="images/demo/home-03.jpg"
                src="images/demo/home-03.jpg" alt="home-03" />
            </div>
            <span className="demo-name">Home Fashion 03</span>
          </a>
        </div>

        <div className="demo-item">
          <a href="home-04.html">
            <div className="demo-image">
              <img className="lazyload" data-src="images/demo/home-04.jpg"
                src="images/demo/home-04.jpg" alt="home-04" />
            </div>
            <span className="demo-name">Home Fashion 04</span>
          </a>
        </div>

        <div className="demo-item">
          <a href="home-05.html">
            <div className="demo-image">
              <img className="lazyload" data-src="images/demo/home-05.jpg"
                src="images/demo/home-05.jpg" alt="home-05" />
            </div>
            <span className="demo-name">Home Fashion 05</span>
          </a>
        </div>

        <div className="demo-item">
          <a href="home-06.html">
            <div className="demo-image position-relative">
              <img className="lazyload" data-src="images/demo/home-06.jpg"
                src="images/demo/home-06.jpg" alt="home-06" />
            </div>
            <span className="demo-name">Home Fashion 06</span>
          </a>
        </div>

        <div className="demo-item position-relative">
          <a href="home-drinkwear.html">
            <div className="demo-image">
              <img className="lazyload"
                data-src="images/demo/home-drinkwear.png"
                src="images/demo/home-drinkwear.png"
                alt="home-personalized-pod" />
              <div className="demo-label">
                <span className="demo-new">New</span>
              </div>
            </div>
            <span className="demo-name">Home Drinkwear</span>
          </a>
        </div>

        <div className="demo-item position-relative">
          <a href="home-supplement.html">
            <div className="demo-image">
              <img className="lazyload"
                data-src="images/demo/home-supplement.png"
                src="images/demo/home-supplement.png"
                alt="home-personalized-pod" />
              <div className="demo-label">
                <span className="demo-new">New</span>
              </div>
            </div>
            <span className="demo-name">Home Supplement</span>
          </a>
        </div>

        <div className="demo-item">
          <a href="home-personalized-pod.html">
            <div className="demo-image">
              <img className="lazyload"
                data-src="images/demo/home-personalized-pod.jpg"
                src="images/demo/home-personalized-pod.jpg"
                alt="home-personalized-pod" />
            </div>
            <span className="demo-name">Home Personalized Pod</span>
          </a>
        </div>

        <div className="demo-item">
          <a href="home-pickleball.html">
            <div className="demo-image">
              <img className="lazyload"
                data-src="images/demo/home-pickleball.png"
                src="images/demo/home-pickleball.png"
                alt="home-pickleball" />
            </div>
            <span className="demo-name">Home Pickleball</span>
          </a>
        </div>

        <div className="demo-item">
          <a href="home-ceramic.html">
            <div className="demo-image">
              <img className="lazyload"
                data-src="images/demo/home-ceramic.png"
                src="images/demo/home-ceramic.png" alt="home-ceramic" />
            </div>
            <span className="demo-name">Home Ceramic</span>
          </a>
        </div>
      </div>

      <div className="text-center view-all-demo">
        <a href="#modalDemo" data-bs-toggle="modal"
          className="tf-btn btn-xl btn-fill radius-3 animate-hover-btn fw-6">
          <span>View all demos (48+)</span>
          <i className="icon icon-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</li>

<li className="menu-item">
  <a href="#" className="item-link">Shop<i className="icon icon-arrow-down"></i></a>
  <div className="sub-menu mega-menu">
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <div className="mega-menu-item">
            <div className="menu-heading">Shop layouts</div>
            <ul className="menu-list">
              <li><a href="shop-default.html" className="menu-link-text link">Default</a></li>
              <li><a href="shop-left-sidebar.html" className="menu-link-text link">Left sidebar</a></li>
              <li><a href="shop-right-sidebar.html" className="menu-link-text link">Right sidebar</a></li>
              <li><a href="shop-fullwidth.html" className="menu-link-text link">Fullwidth</a></li>
              <li><a href="shop-collection-sub.html" className="menu-link-text link">Sub collection</a></li>
              <li><a href="shop-collection-list.html" className="menu-link-text link">Collections list</a></li>
            </ul>
          </div>
        </div>

        <div className="col-lg-2">
          <div className="mega-menu-item">
            <div className="menu-heading">Features</div>
            <ul className="menu-list">
              <li><a href="shop-link.html" className="menu-link-text link">Pagination links</a></li>
              <li><a href="shop-loadmore.html" className="menu-link-text link">Pagination loadmore</a></li>
              <li><a href="shop-infinite-scrolling.html" className="menu-link-text link">Pagination infinite scrolling</a></li>
              <li><a href="shop-filter-sidebar.html" className="menu-link-text link">Filter sidebar</a></li>
              <li><a href="shop-filter-hidden.html" className="menu-link-text link">Filter hidden</a></li>
            </ul>
          </div>
        </div>

        <div className="col-lg-2">
          <div className="mega-menu-item">
            <div className="menu-heading">Product styles</div>
            <ul className="menu-list">
              <li><a href="product-style-01.html" className="menu-link-text link">Product style 01</a></li>
              <li><a href="product-style-02.html" className="menu-link-text link">Product style 02</a></li>
              <li><a href="product-style-03.html" className="menu-link-text link">Product style 03</a></li>
              <li><a href="product-style-04.html" className="menu-link-text link">Product style 04</a></li>
              <li><a href="product-style-05.html" className="menu-link-text link">Product style 05</a></li>
              <li><a href="product-style-06.html" className="menu-link-text link">Product style 06</a></li>
              <li><a href="product-style-07.html" className="menu-link-text link">Product style 07</a></li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="collection-item hover-img">
            <div className="collection-inner">
              <a href="shop-men.html" className="collection-image img-style">
                <img className="lazyload"
                  data-src="images/collections/collection-1.jpg"
                  src="images/collections/collection-1.jpg"
                  alt="collection-demo-1" />
              </a>
              <div className="collection-content">
                <a href="shop-men.html"
                  className="tf-btn hover-icon btn-xl collection-title fs-16">
                  <span>Men</span><i className="icon icon-arrow1-top-left"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="collection-item hover-img">
            <div className="collection-inner">
              <a href="shop-women.html" className="collection-image img-style">
                <img className="lazyload"
                  data-src="images/collections/collection-2.jpg"
                  src="images/collections/collection-2.jpg"
                  alt="collection-demo-1" />
              </a>
              <div className="collection-content">
                <a href="shop-women.html"
                  className="tf-btn btn-xl collection-title fs-16 hover-icon">
                  <span>Women</span><i className="icon icon-arrow1-top-left"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</li>

<li className="menu-item">
  <a href="#" className="item-link">
    Products<i className="icon icon-arrow-down"></i>
  </a>

  <div className="sub-menu mega-menu">
    <div className="container">
      <div className="row">
        
        {/* Column 1 */}
        <div className="col-lg-2">
          <div className="mega-menu-item">
            <div className="menu-heading">Product layouts</div>
            <ul className="menu-list">
              <li><a href="product-detail.html" className="menu-link-text link">Product default</a></li>
              <li><a href="product-grid-1.html" className="menu-link-text link">Product grid 1</a></li>
              <li><a href="product-grid-2.html" className="menu-link-text link">Product grid 2</a></li>
              <li><a href="product-stacked.html" className="menu-link-text link">Product stacked</a></li>
              <li><a href="product-right-thumbnails.html" className="menu-link-text link">Product right thumbnails</a></li>
              <li><a href="product-bottom-thumbnails.html" className="menu-link-text link">Product bottom thumbnails</a></li>
              <li><a href="product-drawer-sidebar.html" className="menu-link-text link">Product drawer sidebar</a></li>
              <li><a href="product-description-accordion.html" className="menu-link-text link">Product description accordion</a></li>
              <li><a href="product-description-list.html" className="menu-link-text link">Product description list</a></li>
              <li><a href="product-description-vertical.html" className="menu-link-text link">Product description vertical</a></li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-lg-2">
          <div className="mega-menu-item">
            <div className="menu-heading">Product details</div>
            <ul className="menu-list">
              <li><a href="product-inner-zoom.html" className="menu-link-text link">Product inner zoom</a></li>
              <li><a href="product-zoom-magnifier.html" className="menu-link-text link">Product zoom magnifier</a></li>
              <li><a href="product-no-zoom.html" className="menu-link-text link">Product no zoom</a></li>
              <li><a href="product-photoswipe-popup.html" className="menu-link-text link">Product photoswipe popup</a></li>
              <li><a href="product-zoom-popup.html" className="menu-link-text link">Product external zoom and popup</a></li>
              <li><a href="product-video.html" className="menu-link-text link">Product video</a></li>
              <li><a href="product-3d.html" className="menu-link-text link">Product 3D, AR models</a></li>
              <li><a href="product-options-customizer.html" className="menu-link-text link">Product options & customizer</a></li>
              <li><a href="product-advanced-types.html" className="menu-link-text link">Advanced product types</a></li>
              <li><a href="product-giftcard.html" className="menu-link-text link">Gift card form</a></li>
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-lg-2">
          <div className="mega-menu-item">
            <div className="menu-heading">Product swatchs</div>
            <ul className="menu-list">
              <li><a href="product-color-swatch.html" className="menu-link-text link">Product color swatch</a></li>
              <li><a href="product-rectangle.html" className="menu-link-text link">Product rectangle</a></li>
              <li><a href="product-rectangle-color.html" className="menu-link-text link">Product rectangle color</a></li>
              <li><a href="product-swatch-image.html" className="menu-link-text link">Product swatch image</a></li>
              <li><a href="product-swatch-image-rounded.html" className="menu-link-text link">Rounded swatch image</a></li>
              <li><a href="product-swatch-dropdown.html" className="menu-link-text link">Swatch dropdown</a></li>
              <li><a href="product-swatch-dropdown-color.html" className="menu-link-text link">Color dropdown</a></li>
            </ul>
          </div>
        </div>

        {/* Column 4 */}
        <div className="col-lg-2">
          <div className="mega-menu-item">
            <div className="menu-heading">Product features</div>
            <ul className="menu-list">
              <li><a href="product-frequently-bought-together.html" className="menu-link-text link">Frequently bought together</a></li>
              <li><a href="product-frequently-bought-together-2.html" className="menu-link-text link">Frequently bought together 2</a></li>
              <li><a href="product-upsell-features.html" className="menu-link-text link">Product upsell</a></li>
              <li><a href="product-pre-orders.html" className="menu-link-text link">Product pre-orders</a></li>
              <li><a href="product-notification.html" className="menu-link-text link">Back in stock notification</a></li>
              <li><a href="product-pickup.html" className="menu-link-text link">Product pickup</a></li>
              <li><a href="product-images-grouped.html" className="menu-link-text link">Variant images grouped</a></li>
              <li><a href="product-complimentary.html" className="menu-link-text link">Complimentary products</a></li>

              <li>
                <a href="product-quick-order-list.html" className="menu-link-text link position-relative">
                  Quick order list
                  <div className="demo-label"><span className="demo-new">New</span></div>
                </a>
              </li>

              <li>
                <a href="product-detail-volume-discount.html" className="menu-link-text link position-relative">
                  Volume Discount
                  <div className="demo-label"><span className="demo-new">New</span></div>
                </a>
              </li>

              <li>
                <a href="product-detail-volume-discount-grid.html" className="menu-link-text link position-relative">
                  Volume Discount Grid
                  <div className="demo-label"><span className="demo-new">New</span></div>
                </a>
              </li>

              <li>
                <a href="product-detail-buyx-gety.html" className="menu-link-text link position-relative">
                  Buy X Get Y
                  <div className="demo-label"><span className="demo-new">New</span></div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 5 – Best Seller Carousel */}
        <div className="col-lg-4">
          <div className="menu-heading">Best seller</div>

          <div className="hover-sw-nav hover-sw-2">
            <div dir="ltr" className="swiper tf-product-header">
              <div className="swiper-wrapper">

                {/* Slide 1 */}
                <div className="swiper-slide" lazy="true">
                  <div className="card-product">
                    <div className="card-product-wrapper">
                      <a href="#" className="product-img">
                        <img className="lazyload img-product" data-src="images/products/orange-1.jpg" src="images/products/orange-1.jpg" alt="product" />
                        <img className="lazyload img-hover" data-src="images/products/white-1.jpg" src="images/products/white-1.jpg" alt="product" />
                      </a>

                      <div className="list-product-btn absolute-2">
                        <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                          <span className="icon icon-bag"></span>
                          <span className="tooltip">Quick Add</span>
                        </a>

                        <a href="#" className="box-icon bg_white wishlist btn-icon-action">
                          <span className="icon icon-heart"></span>
                          <span className="tooltip">Add to Wishlist</span>
                          <span className="icon icon-delete"></span>
                        </a>
                      </div>
                    </div>

                    <div className="card-product-info">
                      <a href="#" className="title link">Ribbed Tank Top</a>
                      <span className="price">$16.95</span>

                      <ul className="list-color-product">
                        <li className="list-color-item color-swatch active">
                          <span className="tooltip">Orange</span>
                          <span className="swatch-value bg_orange-3"></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Other slides converted the same way… */}
                
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</li>

<li className="menu-item position-relative">
  <a href="#" className="item-link">
    Pages <i className="icon icon-arrow-down"></i>
  </a>

  <div className="sub-menu submenu-default">
    <ul className="menu-list">

      <li>
        <a href="about-us.html" className="menu-link-text link text_black-2">
          About us
        </a>
      </li>

      {/* Brands */}
      <li className="menu-item-2">
        <a href="#" className="menu-link-text link text_black-2">Brands</a>
        <div className="sub-menu submenu-default">
          <ul className="menu-list">
            <li>
              <a href="brands.html" className="menu-link-text link text_black-2 position-relative">
                Brands
                <div className="demo-label"><span className="demo-new">New</span></div>
              </a>
            </li>
            <li>
              <a href="brands-v2.html" className="menu-link-text link text_black-2">Brand V2</a>
            </li>
          </ul>
        </div>
      </li>

      {/* Contact */}
      <li className="menu-item-2">
        <a href="#" className="menu-link-text link text_black-2">Contact</a>
        <div className="sub-menu submenu-default">
          <ul className="menu-list">
            <li>
              <a href="contact-1.html" className="menu-link-text link text_black-2">Contact 1</a>
            </li>
            <li>
              <a href="contact-2.html" className="menu-link-text link text_black-2">Contact 2</a>
            </li>
          </ul>
        </div>
      </li>

      {/* FAQ */}
      <li className="menu-item-2">
        <a href="#" className="menu-link-text link text_black-2">FAQ</a>
        <div className="sub-menu submenu-default">
          <ul className="menu-list">
            <li><a href="faq-1.html" className="menu-link-text link text_black-2">FAQ 01</a></li>
            <li><a href="faq-2.html" className="menu-link-text link text_black-2">FAQ 02</a></li>
          </ul>
        </div>
      </li>

      {/* Store */}
      <li className="menu-item-2">
        <a href="#" className="menu-link-text link text_black-2">Store</a>
        <div className="sub-menu submenu-default">
          <ul className="menu-list">
            <li><a href="our-store.html" className="menu-link-text link text_black-2">Our store</a></li>
            <li><a href="store-locations.html" className="menu-link-text link text_black-2">Store locator</a></li>
          </ul>
        </div>
      </li>

      <li>
        <a href="timeline.html" className="menu-link-text link text_black-2 position-relative">
          Timeline
          <div className="demo-label"><span className="demo-new">New</span></div>
        </a>
      </li>

      <li>
        <a href="view-cart.html" className="menu-link-text link text_black-2 position-relative">
          View cart
        </a>
      </li>

      <li>
        <a href="checkout.html" className="menu-link-text link text_black-2 position-relative">
          Check out
        </a>
      </li>

      {/* Payment */}
      <li className="menu-item-2">
        <a href="#" className="menu-link-text link text_black-2">Payment</a>
        <div className="sub-menu submenu-default">
          <ul className="menu-list">
            <li>
              <a href="payment-confirmation.html" className="menu-link-text link text_black-2">
                Payment Confirmation
              </a>
            </li>
            <li>
              <a href="payment-failure.html" className="menu-link-text link text_black-2">
                Payment Failure
              </a>
            </li>
          </ul>
        </div>
      </li>

      {/* My Account */}
      <li className="menu-item-2">
        <a href="#" className="menu-link-text link text_black-2">My account</a>
        <div className="sub-menu submenu-default">
          <ul className="menu-list">
            <li><a href="my-account.html" className="menu-link-text link text_black-2">My account</a></li>
            <li><a href="my-account-orders.html" className="menu-link-text link text_black-2">My order</a></li>
            <li><a href="my-account-orders-details.html" className="menu-link-text link text_black-2">My order details</a></li>
            <li><a href="my-account-address.html" className="menu-link-text link text_black-2">My address</a></li>
            <li><a href="my-account-edit.html" className="menu-link-text link text_black-2">My account details</a></li>
            <li><a href="my-account-wishlist.html" className="menu-link-text link text_black-2">My wishlist</a></li>
          </ul>
        </div>
      </li>

      <li>
        <a href="invoice.html" className="menu-link-text link text_black-2 position-relative">Invoice</a>
      </li>

      <li>
        <a href="404.html" className="menu-link-text link text_black-2 position-relative">404</a>
      </li>

      <li>
        <a href="icons.html" className="menu-link-text link text_black-2 position-relative">Icons</a>
      </li>

    </ul>
  </div>
</li>

{/* Blog Menu */}
<li className="menu-item position-relative">
  <a href="#" className="item-link">
    Blog <i className="icon icon-arrow-down"></i>
  </a>

  <div className="sub-menu submenu-default">
    <ul className="menu-list">
      <li><a href="blog-grid.html" className="menu-link-text link text_black-2">Grid layout</a></li>
      <li><a href="blog-sidebar-left.html" className="menu-link-text link text_black-2">Left sidebar</a></li>
      <li><a href="blog-sidebar-right.html" className="menu-link-text link text_black-2">Right sidebar</a></li>
      <li><a href="blog-list.html" className="menu-link-text link text_black-2">Blog list</a></li>
      <li><a href="blog-detail.html" className="menu-link-text link text_black-2">Single Post</a></li>
    </ul>
  </div>
</li>

   <li className="menu-item"><a
                                        href="https://themeforest.net/item/ecomus-ultimate-html5-template/53417990?s_rank=3"
                                        className="item-link">Buy now</a></li>


        </ul>
      </nav>
      
    </div>
<div className="col-xl-3 col-md-4 col-3">
  <ul className="nav-icon d-flex justify-content-end align-items-center gap-20">
    <li className="nav-search">
      <a
        href="#canvasSearch"
        data-bs-toggle="offcanvas"
        aria-controls="offcanvasLeft"
        className="nav-icon-item"
      >
        <i className="icon icon-search"></i>
      </a>
    </li>

    <li className="nav-account">
      <a
        href="#login"
        data-bs-toggle="modal"
        className="nav-icon-item"
      >
        <i className="icon icon-account"></i>
      </a>
    </li>

    <li className="nav-wishlist">
      <a
        href="wishlist.html"
        className="nav-icon-item"
      >
        <i className="icon icon-heart"></i>
        <span className="count-box">0</span>
      </a>
    </li>

    <li className="nav-cart">
      <a
        href="#shoppingCart"
        data-bs-toggle="modal"
        className="nav-icon-item"
      >
        <i className="icon icon-bag"></i>
        <span className="count-box">0</span>
      </a>
    </li>
  </ul>
</div>

      
    </div>
    
  </div>

</header>
{/* / header */}
{/* page-title */}
<div className="tf-page-title style-2">
  <div className="container-full">
    <div className="heading text-center">Contact Us</div>
  </div>
</div>
{/* /page-title */}
{/* map */}
<div className="w-100">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317859.6089702069!2d-0.075949!3d51.508112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349331f38dd%3A0xa8bf49dde1d56467!2sTower%20of%20London!5e0!3m2!1sen!2sus!4v1719221598456!5m2!1sen!2sus"
    width="100%"
    height="646"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
{/* /map */}
{/* form */}
<section className="flat-spacing-21">
  <div className="container">
    <div className="tf-grid-layout gap30 lg-col-2">

      {/* Left Content */}
      <div className="tf-content-left">
        <h5 className="mb_20">Visit Our Store</h5>

        <div className="mb_20">
          <p className="mb_15"><strong>Address</strong></p>
          <p>66 Mott St, New York, New York, Zip Code: 10006, AS</p>
        </div>

        <div className="mb_20">
          <p className="mb_15"><strong>Phone</strong></p>
          <p>(623) 934-2400</p>
        </div>

        <div className="mb_20">
          <p className="mb_15"><strong>Email</strong></p>
          <p>EComposer@example.com</p>
        </div>

        <div className="mb_36">
          <p className="mb_15"><strong>Open Time</strong></p>
          <p className="mb_15">Our store has re-opened for shopping,</p>
          <p>exchange Every day 11am to 7pm</p>
        </div>

        {/* Social Icons */}
        <div>
          <ul className="tf-social-icon d-flex gap-20 style-default">
            <li>
              <a href="#" className="box-icon link round social-facebook border-line-black">
                <i className="icon fs-14 icon-fb"></i>
              </a>
            </li>

            <li>
              <a href="#" className="box-icon link round social-twiter border-line-black">
                <i className="icon fs-12 icon-Icon-x"></i>
              </a>
            </li>

            <li>
              <a href="#" className="box-icon link round social-instagram border-line-black">
                <i className="icon fs-14 icon-instagram"></i>
              </a>
            </li>

            <li>
              <a href="#" className="box-icon link round social-tiktok border-line-black">
                <i className="icon fs-14 icon-tiktok"></i>
              </a>
            </li>

            <li>
              <a href="#" className="box-icon link round social-pinterest border-line-black">
                <i className="icon fs-14 icon-pinterest-1"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Content */}
      <div className="tf-content-right">
        <h5 className="mb_20">Get in Touch</h5>
        <p className="mb_24">
          If you’ve got great products your making or looking to work with us then drop us a line.
        </p>

        <div>
          <form
            className="form-contact"
            id="contactform"
            action="https://themesflat.co/html/ecomus/contact/contact-process.php"
            method="post"
          >
            {/* Name + Email */}
            <div className="d-flex gap-15 mb_15">
              <fieldset className="w-100">
                <input type="text" name="name" id="name" required placeholder="Name *" />
              </fieldset>

              <fieldset className="w-100">
                <input type="email" name="email" id="email" required placeholder="Email *" />
              </fieldset>
            </div>

            {/* Message */}
            <div className="mb_15">
              <textarea
                placeholder="Message"
                name="message"
                id="message"
                required
                cols="30"
                rows="10"
              ></textarea>
            </div>

            {/* Button */}
            <div className="send-wrap">
              <button
                type="submit"
                className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>
{/* /form */}
{/* footer */}
<footer id="footer" className="footer background-gray md-pb-70">
  <div className="footer-wrap">

    <div className="footer-body">
      <div className="container">
        <div className="row">

          {/* Column 1 - Logo + Info */}
          <div className="col-xl-3 col-md-6 col-12">
            <div className="footer-infor">

              <div className="footer-logo">
                <a href="index.html">
                  <img src="images/logo/logo.svg" alt="" />
                </a>
              </div>

              <ul>
                <li>
                  <p>
                    Address: 1234 Fashion Street, Suite 567, <br /> New York, NY 10001
                  </p>
                </li>
                <li>
                  <p>Email: <a href="#">info@fashionshop.com</a></p>
                </li>
                <li>
                  <p>Phone: <a href="#">(212) 555-1234</a></p>
                </li>
              </ul>

              <a href="contact-1.html" className="tf-btn btn-line">
                Get direction
                <i className="icon icon-arrow1-top-left"></i>
              </a>

              <ul className="tf-social-icon d-flex gap-10">
                <li>
                  <a href="#" className="box-icon w_34 round social-facebook social-line">
                    <i className="icon fs-14 icon-fb"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="box-icon w_34 round social-twiter social-line">
                    <i className="icon fs-12 icon-Icon-x"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="box-icon w_34 round social-instagram social-line">
                    <i className="icon fs-14 icon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="box-icon w_34 round social-tiktok social-line">
                    <i className="icon fs-14 icon-tiktok"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="box-icon w_34 round social-pinterest social-line">
                    <i className="icon fs-14 icon-pinterest-1"></i>
                  </a>
                </li>
              </ul>

            </div>
          </div>

          {/* Column 2 - Help Menu */}
          <div className="col-xl-3 col-md-6 col-12 footer-col-block">
            <div className="footer-heading footer-heading-desktop">
              <h6>Help</h6>
            </div>
            <div className="footer-heading footer-heading-moblie">
              <h6>Help</h6>
            </div>

            <ul className="footer-menu-list tf-collapse-content">
              <li><a href="privacy-policy.html" className="footer-menu_item">Privacy Policy</a></li>
              <li><a href="delivery-return.html" className="footer-menu_item">Returns + Exchanges</a></li>
              <li><a href="shipping-delivery.html" className="footer-menu_item">Shipping</a></li>
              <li><a href="terms-conditions.html" className="footer-menu_item">Terms &amp; Conditions</a></li>
              <li><a href="faq-1.html" className="footer-menu_item">FAQ’s</a></li>
              <li><a href="compare.html" className="footer-menu_item">Compare</a></li>
              <li><a href="wishlist.html" className="footer-menu_item">My Wishlist</a></li>
            </ul>
          </div>

          {/* Column 3 - About */}
          <div className="col-xl-3 col-md-6 col-12 footer-col-block">
            <div className="footer-heading footer-heading-desktop">
              <h6>About us</h6>
            </div>
            <div className="footer-heading footer-heading-moblie">
              <h6>About us</h6>
            </div>

            <ul className="footer-menu-list tf-collapse-content">
              <li><a href="about-us.html" className="footer-menu_item">Our Story</a></li>
              <li><a href="our-store.html" className="footer-menu_item">Visit Our Store</a></li>
              <li><a href="contact-1.html" className="footer-menu_item">Contact Us</a></li>
              <li><a href="login.html" className="footer-menu_item">Account</a></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="col-xl-3 col-md-6 col-12">
            <div className="footer-newsletter footer-col-block">

              <div className="footer-heading footer-heading-desktop">
                <h6>Sign Up for Email</h6>
              </div>
              <div className="footer-heading footer-heading-moblie">
                <h6>Sign Up for Email</h6>
              </div>

              <div className="tf-collapse-content">
                <div className="footer-menu_item">
                  Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!
                </div>

                {/* Newsletter form section */}
                <div className="sib-form">
                  <div id="sib-form-container" className="sib-form-container">

                    {/* Error Message */}
                    <div id="error-message" className="sib-form-message-panel">
                      <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                        <span className="sib-form-message-panel__inner-text">
                          Your subscription could not be saved. Please try again.
                        </span>
                      </div>
                    </div>

                    {/* Success Message */}
                    <div id="success-message" className="sib-form-message-panel">
                      <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                        <span className="sib-form-message-panel__inner-text">
                          Your subscription has been successful.
                        </span>
                      </div>
                    </div>

                    {/* Form */}
                    <div id="sib-container" className="sib-container--large sib-container--vertical">
                      <form
                        id="sib-form"
                        method="POST"
                        className="form-newsletter"
                        action="https://3c02c1a1.sibforms.com/serve/MUIFAOAhSCDRnPhdPWLTpLBkaFR0CvSbJ_okYrjCbXQRLkZZU67Hn2jdn18hTWJuGupI4VUfB4deuJIyP5yRoHWVb9pIrENAMcal9Jtz8q_qN4dpHNMIG454DwSVNVmnLXuePoOCvDqN_Vvs0ga_kzg7ouD63HjCaukRz3LGCQsfnQJBN4-KS2D3DVitqvFsDHSqevjjqLk2xFO4"
                        data-type="subscription"
                      >

                        {/* Email Field */}
                        <div className="sib-input sib-form-block">
                          <div className="form__entry entry_block">

                            <div className="form__label-row">
                              <label className="entry__label" htmlFor="EMAIL"></label>

                              <div className="entry__field">
                                <input
                                  className="input"
                                  type="text"
                                  id="EMAIL"
                                  name="EMAIL"
                                  autoComplete="off"
                                  placeholder="Enter your email...."
                                  data-required="true"
                                  required
                                />
                              </div>
                            </div>

                            <label className="entry__error entry__error--primary"></label>
                            <label className="entry__specification"></label>

                          </div>
                        </div>

                        {/* Opt-in Checkbox */}
                        <div className="sib-optin sib-form-block">
                          <div className="form__entry entry_mcq">
                            <div className="form__label-row">
                              <div className="entry__choice">
                                <label>
                                  <input
                                    type="checkbox"
                                    className="input_replaced"
                                    value="1"
                                    id="OPT_IN"
                                    name="OPT_IN"
                                  />
                                  <span className="checkbox checkbox_tick_positive"></span>
                                  <span><p></p></span>
                                </label>
                              </div>
                            </div>

                            <label className="entry__error entry__error--primary"></label>
                            <label className="entry__specification"></label>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="sib-form-block button-submit">
                          <button
                            className="sib-form-block__button sib-form-block__button-with-loader tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
                            form="sib-form"
                            type="submit"
                          >
                            <svg
                              className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                              viewBox="0 0 512 512"
                            >
                              <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 
                              30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676
                              C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 
                              12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 
                              42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 
                              8.461-16.728 5.01z" />
                            </svg>
                            Subscribe
                            <i className="icon icon-arrow1-top-left"></i>
                          </button>
                        </div>

                        <input type="text" name="email_address_check" defaultValue="" className="input--hidden" />
                        <input type="hidden" name="locale" value="en" />

                      </form>
                    </div>
                  </div>
                </div>

                {/* Currency + Language */}
                <div className="tf-cur">

<div className="tf-currencies">
  <select
    className="image-select center style-default type-currencies"
    defaultValue="USD"
  >
    <option value="EUR" data-thumbnail="images/country/fr.svg">
      EUR € | France
    </option>

    <option value="EUR-DE" data-thumbnail="images/country/de.svg">
      EUR € | Germany
    </option>

    <option value="USD" data-thumbnail="images/country/us.svg">
      USD $ | United States
    </option>

    <option value="VND" data-thumbnail="images/country/vn.svg">
      VND ₫ | Vietnam
    </option>
  </select>
</div>

                  <div className="tf-languages">
                    <select className="image-select center style-default type-languages">
                      <option>English</option>
                      <option>العربية</option>
                      <option>简体中文</option>
                      <option>اردو</option>
                    </select>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">

            <div className="footer-bottom-wrap d-flex gap-20 flex-wrap justify-content-between align-items-center">

              <div className="footer-menu_item">
                © 2024 Ecomus Store. All Rights Reserved
              </div>

              <div className="tf-payment">
                <img src="images/payments/visa.png" alt="" />
                <img src="images/payments/img-1.png" alt="" />
                <img src="images/payments/img-2.png" alt="" />
                <img src="images/payments/img-3.png" alt="" />
                <img src="images/payments/img-4.png" alt="" />
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</footer>
{/* /footer */}


</div>
        {/* gotop */}
<button id="goTop">
  <span className="border-progress"></span>
  <span className="icon icon-arrow-up"></span>
</button>
{/* /gotop */}
{/* toolbar-bottom */}
<div className="tf-toolbar-bottom type-1150">

  <div className="toolbar-item">
    <a href="#toolbarShopmb" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
      <div className="toolbar-icon">
        <i className="icon-shop"></i>
      </div>
      <div className="toolbar-label">Shop</div>
    </a>
  </div>

  <div className="toolbar-item">
    <a href="#canvasSearch" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
      <div className="toolbar-icon">
        <i className="icon-search"></i>
      </div>
      <div className="toolbar-label">Search</div>
    </a>
  </div>

  <div className="toolbar-item">
    <a href="#login" data-bs-toggle="modal">
      <div className="toolbar-icon">
        <i className="icon-account"></i>
      </div>
      <div className="toolbar-label">Account</div>
    </a>
  </div>

  <div className="toolbar-item">
    <a href="wishlist.html">
      <div className="toolbar-icon">
        <i className="icon-heart"></i>
        <div className="toolbar-count">0</div>
      </div>
      <div className="toolbar-label">Wishlist</div>
    </a>
  </div>

  <div className="toolbar-item">
    <a href="#shoppingCart" data-bs-toggle="modal">
      <div className="toolbar-icon">
        <i className="icon-bag"></i>
        <div className="toolbar-count">1</div>
      </div>
      <div className="toolbar-label">Cart</div>
    </a>
  </div>

</div>
{/* /toolbar-bottom */}
{/* modalDemo */}
<div className="modal fade modalDemo" id="modalDemo">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      <div className="header">
        <h5 className="demo-title">Ultimate HTML Theme</h5>
        <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
      </div>

      <div className="mega-menu">
        <div className="row-demo">

          {/* ITEM 1 */}
          <div className="demo-item">
            <a href="index.html">
              <div className="demo-image position-relative">
                <img
                  className="lazyload"
                  src="images/demo/home-01.jpg"
                  data-src="images/demo/home-01.jpg"
                  alt="home-01"
                />
                <div className="demo-label">
                  <span className="demo-new">New</span>
                  <span>Trend</span>
                </div>
              </div>
              <span className="demo-name">Home Fashion 01</span>
            </a>
          </div>

          {/* ITEM 2 */}
          <div className="demo-item">
            <a href="home-multi-brand.html">
              <div className="demo-image position-relative">
                <img
                  className="lazyload"
                  src="images/demo/home-multi-brand.jpg"
                  data-src="images/demo/home-multi-brand.jpg"
                  alt="home-multi-brand"
                />
                <div className="demo-label">
                  <span className="demo-new">New</span>
                  <span className="demo-hot">Hot</span>
                </div>
              </div>
              <span className="demo-name">Home Multi Brand</span>
            </a>
          </div>

          {/* ITEM 3 */}
          <div className="demo-item">
            <a href="home-02.html">
              <div className="demo-image position-relative">
                <img
                  className="lazyload"
                  src="images/demo/home-02.jpg"
                  data-src="images/demo/home-02.jpg"
                  alt="home-02"
                />
                <div className="demo-label">
                  <span className="demo-hot">Hot</span>
                </div>
              </div>
              <span className="demo-name">Home Fashion 02</span>
            </a>
          </div>

          {/* ITEM 4 */}
          <div className="demo-item">
            <a href="home-03.html">
              <div className="demo-image">
                <img
                  className="lazyload"
                  src="images/demo/home-03.jpg"
                  data-src="images/demo/home-03.jpg"
                  alt="home-03"
                />
              </div>
              <span className="demo-name">Home Fashion 03</span>
            </a>
          </div>

          {/* ITEM 5 */}
          <div className="demo-item">
            <a href="home-04.html">
              <div className="demo-image">
                <img
                  className="lazyload"
                  src="images/demo/home-04.jpg"
                  data-src="images/demo/home-04.jpg"
                  alt="home-04"
                />
              </div>
              <span className="demo-name">Home Fashion 04</span>
            </a>
          </div>

          {/* ITEM 6 */}
          <div className="demo-item">
            <a href="home-05.html">
              <div className="demo-image">
                <img
                  className="lazyload"
                  src="images/demo/home-05.jpg"
                  data-src="images/demo/home-05.jpg"
                  alt="home-05"
                />
              </div>
              <span className="demo-name">Home Fashion 05</span>
            </a>
          </div>

          {/* ITEM 7 */}
          <div className="demo-item">
            <a href="home-06.html">
              <div className="demo-image position-relative">
                <img
                  className="lazyload"
                  src="images/demo/home-06.jpg"
                  data-src="images/demo/home-06.jpg"
                  alt="home-06"
                />
              </div>
              <span className="demo-name">Home Fashion 06</span>
            </a>
          </div>

          {/* ITEM 8 */}
          <div className="demo-item">
            <a href="home-drinkwear.html">
              <div className="demo-image position-relative">
                <img
                  className="lazyload"
                  src="images/demo/home-drinkwear.png"
                  data-src="images/demo/home-drinkwear.png"
                  alt="home-drinkwear"
                />
                <div className="demo-label">
                  <span className="demo-new">New</span>
                </div>
              </div>
              <span className="demo-name">Home Drinkwear</span>
            </a>
          </div>

          {/* ITEM 9 */}
          <div className="demo-item">
            <a href="home-supplement.html">
              <div className="demo-image position-relative">
                <img
                  className="lazyload"
                  src="images/demo/home-supplement.png"
                  data-src="images/demo/home-supplement.png"
                  alt="home-supplement"
                />
                <div className="demo-label">
                  <span className="demo-new">New</span>
                </div>
              </div>
              <span className="demo-name">Home Supplement</span>
            </a>
          </div>

          {/*  
            NOTE: You have MANY demo items. 
            Instead of pasting all 60 manually,
            I can convert EVERYTHING automatically 
            OR build a JSON-driven dynamic component.
          */}

          {/* If you want, I will generate:  
              ✔ Complete JSX for all items  
              OR  
              ✔ A cleaner reusable <DemoItem /> component  
              OR  
              ✔ Auto-loop JSON → JSX  
          */}
        </div>
      </div>
    </div>
  </div>
</div>
{/* /modalDemo */}
{/* mobile menu */}
<div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
  <span
    className="icon-close icon-close-popup"
    data-bs-dismiss="offcanvas"
    aria-label="Close"
  ></span>

  <div className="mb-canvas-content">
    <div className="mb-body">
      <ul className="nav-ul-mb" id="wrapper-menu-navigation">

        {/* Home */}
        <li className="nav-mb-item">
          <a
            href="#dropdown-menu-one"
            className="collapsed mb-menu-link current"
            data-bs-toggle="collapse"
            aria-expanded="true"
            aria-controls="dropdown-menu-one"
          >
            <span>Home</span>
            <span className="btn-open-sub"></span>
          </a>

          <div id="dropdown-menu-one" className="collapse">
            <ul className="sub-nav-menu">
              <li><a href="index.html" className="sub-nav-link">Home Fashion 01</a></li>
              <li><a href="home-02.html" className="sub-nav-link">Home Fashion 02</a></li>
              <li><a href="home-03.html" className="sub-nav-link">Home Fashion 03</a></li>
              <li><a href="home-04.html" className="sub-nav-link">Home Fashion 04</a></li>
              <li><a href="home-05.html" className="sub-nav-link">Home Fashion 05</a></li>
              <li><a href="home-06.html" className="sub-nav-link">Home Fashion 06</a></li>
              <li><a href="home-07.html" className="sub-nav-link">Home Fashion 07</a></li>
              <li><a href="home-08.html" className="sub-nav-link">Home Fashion 08</a></li>
              <li><a href="home-giftcard.html" className="sub-nav-link">Home Gift Card</a></li>
              <li><a href="home-headphone.html" className="sub-nav-link">Home Headphone</a></li>
              <li><a href="home-multi-brand.html" className="sub-nav-link">Home Multi Brand</a></li>
              <li><a href="home-skincare.html" className="sub-nav-link">Home skincare</a></li>
              <li><a href="home-furniture.html" className="sub-nav-link">Home Furniture</a></li>
              <li><a href="home-furniture-02.html" className="sub-nav-link">Home Furniture 2</a></li>
              <li><a href="home-skateboard.html" className="sub-nav-link">Home Skateboard</a></li>
              <li><a href="home-stroller.html" className="sub-nav-link">Home Stroller</a></li>
              <li><a href="home-decor.html" className="sub-nav-link">Home Decor</a></li>
              <li><a href="home-electronic.html" className="sub-nav-link">Home Electronic</a></li>
              <li><a href="home-setup-gear.html" className="sub-nav-link">Home Setup Gear</a></li>
              <li><a href="home-dog-accessories.html" className="sub-nav-link">Home Dog Accessories</a></li>
              <li><a href="home-kitchen-wear.html" className="sub-nav-link">Home Kitchen Wear</a></li>
              <li><a href="home-phonecase.html" className="sub-nav-link">Home Phonecase</a></li>
              <li><a href="home-paddle-boards.html" className="sub-nav-link">Home Paddle Boards</a></li>
              <li><a href="home-glasses.html" className="sub-nav-link">Home Glasses</a></li>
              <li><a href="home-pod-store.html" className="sub-nav-link">Home POD Store</a></li>
              <li><a href="home-activewear.html" className="sub-nav-link">Home Activewear</a></li>
              <li><a href="home-handbag.html" className="sub-nav-link">Home Handbag</a></li>
              <li><a href="home-tee.html" className="sub-nav-link">Home Tee</a></li>
              <li><a href="home-sock.html" className="sub-nav-link">Home Sock</a></li>
              <li><a href="home-jewerly.html" className="sub-nav-link">Home Jewelry</a></li>
              <li><a href="home-sneaker.html" className="sub-nav-link">Home Sneaker</a></li>
              <li><a href="home-accessories.html" className="sub-nav-link">Home Accessories</a></li>
              <li><a href="home-grocery.html" className="sub-nav-link">Home Grocery</a></li>
              <li><a href="home-baby.html" className="sub-nav-link">Home Baby</a></li>
              <li><a href="home-personalized-pod.html" className="sub-nav-link">Home Personalized Pod</a></li>
              <li><a href="home-pickleball.html" className="sub-nav-link">Home Pickleball</a></li>
              <li><a href="home-ceramic.html" className="sub-nav-link">Home Ceramic</a></li>
              <li><a href="home-food.html" className="sub-nav-link">Home Food</a></li>
              <li><a href="home-camp-and-hike.html" className="sub-nav-link">Home Camp And Hike</a></li>
              <li><a href="home-cosmetic.html" className="sub-nav-link">Home Cosmetic</a></li>
              <li><a href="home-plant.html" className="sub-nav-link">Home Plant</a></li>
              <li><a href="home-swimwear.html" className="sub-nav-link">Home Swimwear</a></li>
              <li><a href="home-electric-bike.html" className="sub-nav-link">Home Electric Bike</a></li>
              <li><a href="home-footwear.html" className="sub-nav-link">Home Footwear</a></li>
              <li><a href="home-book-store.html" className="sub-nav-link">Home Book Store</a></li>
              <li><a href="home-gaming-accessories.html" className="sub-nav-link">Home Gaming Accessories</a></li>
              <li><a href="home-parallax.html" className="sub-nav-link">Home Parallax</a></li>
            </ul>
          </div>
        </li>

        {/* Shop */}
        <li className="nav-mb-item">
          <a
            href="#dropdown-menu-two"
            className="collapsed mb-menu-link current"
            data-bs-toggle="collapse"
            aria-expanded="true"
            aria-controls="dropdown-menu-two"
          >
            <span>Shop</span>
            <span className="btn-open-sub"></span>
          </a>

          <div id="dropdown-menu-two" className="collapse">
            <ul className="sub-nav-menu" id="sub-menu-navigation">

              {/* Shop layouts */}
              <li>
                <a
                  href="#sub-shop-one"
                  className="sub-nav-link collapsed"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="sub-shop-one"
                >
                  <span>Shop layouts</span>
                  <span className="btn-open-sub"></span>
                </a>

                <div id="sub-shop-one" className="collapse">
                  <ul className="sub-nav-menu sub-menu-level-2">
                    <li><a href="shop-default.html" className="sub-nav-link">Default</a></li>
                    <li><a href="shop-left-sidebar.html" className="sub-nav-link">Left sidebar</a></li>
                    <li><a href="shop-right-sidebar.html" className="sub-nav-link">Right sidebar</a></li>
                    <li><a href="shop-fullwidth.html" className="sub-nav-link">Fullwidth</a></li>
                    <li><a href="shop-collection-sub.html" className="sub-nav-link">Sub collection</a></li>
                    <li><a href="shop-collection-list.html" className="sub-nav-link">Collections list</a></li>
                  </ul>
                </div>
              </li>

              {/* Shop features */}
              <li>
                <a
                  href="#sub-shop-two"
                  className="sub-nav-link collapsed"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="sub-shop-two"
                >
                  <span>Features</span>
                  <span className="btn-open-sub"></span>
                </a>

                <div id="sub-shop-two" className="collapse">
                  <ul className="sub-nav-menu sub-menu-level-2">
                    <li><a href="shop-link.html" className="sub-nav-link">Pagination links</a></li>
                    <li><a href="shop-loadmore.html" className="sub-nav-link">Pagination loadmore</a></li>
                    <li><a href="shop-infinite-scrolling.html" className="sub-nav-link">Infinite scrolling</a></li>
                    <li><a href="shop-filter-sidebar.html" className="sub-nav-link">Filter sidebar</a></li>
                    <li><a href="shop-filter-hidden.html" className="sub-nav-link">Filter hidden</a></li>
                  </ul>
                </div>
              </li>

              {/* Product styles */}
              <li>
                <a
                  href="#sub-shop-three"
                  className="sub-nav-link collapsed"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="sub-shop-three"
                >
                  <span>Product styles</span>
                  <span className="btn-open-sub"></span>
                </a>

                <div id="sub-shop-three" className="collapse">
                  <ul className="sub-nav-menu sub-menu-level-2">
                    <li><a href="product-style-01.html" className="sub-nav-link">Product style 01</a></li>
                    <li><a href="product-style-02.html" className="sub-nav-link">Product style 02</a></li>
                    <li><a href="product-style-03.html" className="sub-nav-link">Product style 03</a></li>
                    <li><a href="product-style-04.html" className="sub-nav-link">Product style 04</a></li>
                    <li><a href="product-style-05.html" className="sub-nav-link">Product style 05</a></li>
                    <li><a href="product-style-06.html" className="sub-nav-link">Product style 06</a></li>
                    <li><a href="product-style-07.html" className="sub-nav-link">Product style 07</a></li>
                  </ul>
                </div>
              </li>

            </ul>
          </div>
        </li>

        {/* Products */}
        <li className="nav-mb-item">
          <a
            href="#dropdown-menu-three"
            className="collapsed mb-menu-link current"
            data-bs-toggle="collapse"
            aria-expanded="true"
            aria-controls="dropdown-menu-three"
          >
            <span>Products</span>
            <span className="btn-open-sub"></span>
          </a>

          <div id="dropdown-menu-three" className="collapse">
            <ul className="sub-nav-menu">

              {/* Product layouts */}
              <li>
                <a
                  href="#sub-product-one"
                  className="sub-nav-link collapsed"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="sub-product-one"
                >
                  <span>Product layouts</span>
                  <span className="btn-open-sub"></span>
                </a>

                <div id="sub-product-one" className="collapse">
                  <ul className="sub-nav-menu sub-menu-level-2">
                    <li><a href="product-detail.html" className="sub-nav-link">Product default</a></li>
                    <li><a href="product-grid-1.html" className="sub-nav-link">Product grid 1</a></li>
                    <li><a href="product-grid-2.html" className="sub-nav-link">Product grid 2</a></li>
                    <li><a href="product-stacked.html" className="sub-nav-link">Product stacked</a></li>
                    <li><a href="product-right-thumbnails.html" className="sub-nav-link">Right thumbnails</a></li>
                    <li><a href="product-bottom-thumbnails.html" className="sub-nav-link">Bottom thumbnails</a></li>
                    <li><a href="product-drawer-sidebar.html" className="sub-nav-link">Drawer sidebar</a></li>
                    <li><a href="product-description-accordion.html" className="sub-nav-link">Accordion description</a></li>
                    <li><a href="product-description-list.html" className="sub-nav-link">List description</a></li>
                    <li><a href="product-description-vertical.html" className="sub-nav-link">Vertical description</a></li>
                  </ul>
                </div>
              </li>

              {/* Product details */}
              <li>
                <a
                  href="#sub-product-two"
                  className="sub-nav-link collapsed"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="sub-product-two"
                >
                  <span>Product details</span>
                  <span className="btn-open-sub"></span>
                </a>

                <div id="sub-product-two" className="collapse">
                  <ul className="sub-nav-menu sub-menu-level-2">
                    <li><a href="product-inner-zoom.html" className="sub-nav-link">Inner zoom</a></li>
                    <li><a href="product-zoom-magnifier.html" className="sub-nav-link">Zoom magnifier</a></li>
                    <li><a href="product-no-zoom.html" className="sub-nav-link">No zoom</a></li>
                    <li><a href="product-photoswipe-popup.html" className="sub-nav-link">Photoswipe popup</a></li>
                    <li><a href="product-zoom-popup.html" className="sub-nav-link">External zoom</a></li>
                    <li><a href="product-video.html" className="sub-nav-link">Product video</a></li>
                    <li><a href="product-3d.html" className="sub-nav-link">3D / AR models</a></li>
                    <li><a href="product-options-customizer.html" className="sub-nav-link">Options customizer</a></li>
                    <li><a href="product-advanced-types.html" className="sub-nav-link">Advanced types</a></li>
                    <li><a href="product-giftcard.html" className="sub-nav-link">Gift card form</a></li>
                  </ul>
                </div>
              </li>

              {/* Product Swatches */}
              <li>
                <a
                  href="#sub-product-three"
                  className="sub-nav-link collapsed"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="sub-product-three"
                >
                  <span>Product swatches</span>
                  <span className="btn-open-sub"></span>
                </a>

                <div id="sub-product-three" className="collapse">
                  <ul className="sub-nav-menu sub-menu-level-2">
                    <li><a href="product-color-swatch.html" className="sub-nav-link">Color swatch</a></li>
                    <li><a href="product-rectangle.html" className="sub-nav-link">Rectangle</a></li>
                    <li><a href="product-rectangle-color.html" className="sub-nav-link">Rectangle color</a></li>
                    <li><a href="product-swatch-image.html" className="sub-nav-link">Swatch image</a></li>
                    <li><a href="product-swatch-image-rounded.html" className="sub-nav-link">Swatch rounded</a></li>
                    <li><a href="product-swatch-dropdown.html" className="sub-nav-link">Dropdown</a></li>
                    <li><a href="product-swatch-dropdown-color.html" className="sub-nav-link">Dropdown color</a></li>
                  </ul>
                </div>
              </li>

              {/* Product Features */}
              <li>
                <a
                  href="#sub-product-four"
                  className="sub-nav-link collapsed"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="sub-product-four"
                >
                  <span>Product features</span>
                  <span className="btn-open-sub"></span>
                </a>

                <div id="sub-product-four" className="collapse">
                  <ul className="sub-nav-menu sub-menu-level-2">
                    <li><a href="product-frequently-bought-together.html" className="sub-nav-link">Frequently bought together</a></li>
                    <li><a href="product-frequently-bought-together-2.html" className="sub-nav-link">FBT 2</a></li>
                    <li><a href="product-upsell-features.html" className="sub-nav-link">Upsell features</a></li>
                    <li><a href="product-pre-orders.html" className="sub-nav-link">Pre-orders</a></li>
                    <li><a href="product-notification.html" className="sub-nav-link">Back in stock</a></li>
                    <li><a href="product-pickup.html" className="sub-nav-link">Pickup</a></li>
                    <li><a href="product-images-grouped.html" className="sub-nav-link">Grouped images</a></li>
                    <li><a href="product-complimentary.html" className="sub-nav-link">Complimentary products</a></li>

                    <li>
                      <a href="product-quick-order-list.html" className="sub-nav-link line-clamp">
                        Quick order list
                        <div className="demo-label"><span className="demo-new">New</span></div>
                      </a>
                    </li>

                    <li>
                      <a href="product-detail-volume-discount.html" className="sub-nav-link line-clamp">
                        Volume Discount
                        <div className="demo-label"><span className="demo-new">New</span></div>
                      </a>
                    </li>

                    <li>
                      <a href="product-detail-volume-discount-grid.html" className="sub-nav-link line-clamp">
                        Volume Discount Grid
                        <div className="demo-label"><span className="demo-new">New</span></div>
                      </a>
                    </li>

                    <li>
                      <a href="product-detail-buyx-gety.html" className="sub-nav-link line-clamp">
                        Buy X Get Y
                        <div className="demo-label"><span className="demo-new">New</span></div>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

            </ul>
          </div>
        </li>

        {/* Pages */}
        <li className="nav-mb-item">
          <a
            href="#dropdown-menu-four"
            className="collapsed mb-menu-link current"
            data-bs-toggle="collapse"
            aria-expanded="true"
            aria-controls="dropdown-menu-four"
          >
            <span>Pages</span>
            <span className="btn-open-sub"></span>
          </a>

          <div id="dropdown-menu-four" className="collapse">
            <ul className="sub-nav-menu">
              <li><a href="about-us.html" className="sub-nav-link">About us</a></li>

              <li>
                <a href="brands.html" className="sub-nav-link line-clamp">
                  Brands <div className="demo-label"><span className="demo-new">New</span></div>
                </a>
              </li>

              <li><a href="brands-v2.html" className="sub-nav-link">Brands V2</a></li>
              <li><a href="contact-1.html" className="sub-nav-link">Contact 1</a></li>
              <li><a href="contact-2.html" className="sub-nav-link">Contact 2</a></li>
              <li><a href="faq-1.html" className="sub-nav-link">FAQ 01</a></li>
              <li><a href="faq-2.html" className="sub-nav-link">FAQ 02</a></li>
              <li><a href="our-store.html" className="sub-nav-link">Our Store</a></li>
              <li><a href="store-locations.html" className="sub-nav-link">Store Locator</a></li>

              <li>
                <a href="timeline.html" className="sub-nav-link line-clamp">
                  Timeline <div className="demo-label"><span className="demo-new">New</span></div>
                </a>
              </li>

              <li><a href="view-cart.html" className="sub-nav-link">View Cart</a></li>
              <li><a href="checkout.html" className="sub-nav-link">Checkout</a></li>
              <li><a href="payment-confirmation.html" className="sub-nav-link">Payment Confirmation</a></li>
              <li><a href="payment-failure.html" className="sub-nav-link">Payment Failure</a></li>

              {/* Account submenu */}
              <li>
                <a
                  href="#sub-account"
                  className="sub-nav-link collapsed"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="sub-account"
                >
                  <span>My Account</span>
                  <span className="btn-open-sub"></span>
                </a>

                <div id="sub-account" className="collapse">
                  <ul className="sub-nav-menu sub-menu-level-2">
                    <li><a href="my-account.html" className="sub-nav-link">My Account</a></li>
                    <li><a href="my-account-orders.html" className="sub-nav-link">My Orders</a></li>
                    <li><a href="my-account-orders-details.html" className="sub-nav-link">Order Details</a></li>
                    <li><a href="my-account-address.html" className="sub-nav-link">My Address</a></li>
                    <li><a href="my-account-edit.html" className="sub-nav-link">Account Details</a></li>
                    <li><a href="my-account-wishlist.html" className="sub-nav-link">Wishlist</a></li>
                  </ul>
                </div>
              </li>

              <li><a href="invoice.html" className="sub-nav-link">Invoice</a></li>
              <li><a href="404.html" className="sub-nav-link">404</a></li>
            </ul>
          </div>
        </li>

        {/* Blog */}
        <li className="nav-mb-item">
          <a
            href="#dropdown-menu-five"
            className="collapsed mb-menu-link current"
            data-bs-toggle="collapse"
            aria-expanded="true"
            aria-controls="dropdown-menu-five"
          >
            <span>Blog</span>
            <span className="btn-open-sub"></span>
          </a>

          <div id="dropdown-menu-five" className="collapse">
            <ul className="sub-nav-menu">
              <li><a href="blog-grid.html" className="sub-nav-link">Grid layout</a></li>
              <li><a href="blog-sidebar-left.html" className="sub-nav-link">Left sidebar</a></li>
              <li><a href="blog-sidebar-right.html" className="sub-nav-link">Right sidebar</a></li>
              <li><a href="blog-list.html" className="sub-nav-link">Blog list</a></li>
              <li><a href="blog-detail.html" className="sub-nav-link">Single post</a></li>
            </ul>
          </div>
        </li>

        {/* Buy now */}
        <li className="nav-mb-item">
          <a
            href="https://themeforest.net/item/ecomus-ultimate-html5-template/53417990?s_rank=3"
            className="mb-menu-link"
          >
            Buy now
          </a>
        </li>

      </ul>

      {/* Other content bottom */}
      <div className="mb-other-content">
        <div className="d-flex group-icon">
          <a href="wishlist.html" className="site-nav-icon">
            <i className="icon icon-heart"></i>Wishlist
          </a>

          <a href="home-search.html" className="site-nav-icon">
            <i className="icon icon-search"></i>Search
          </a>
        </div>

        <div className="mb-notice">
          <a href="contact-1.html" className="text-need">Need help?</a>
        </div>

        <ul className="mb-info">
          <li>
            Address: 1234 Fashion Street, Suite 567,
            <br /> New York, NY 10001
          </li>
          <li>Email: <b>info@fashionshop.com</b></li>
          <li>Phone: <b>(212) 555-1234</b></li>
        </ul>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="mb-bottom">
      <a href="login.html" className="site-nav-icon">
        <i className="icon icon-account"></i>Login
      </a>

      <div className="bottom-bar-language">
<div className="tf-currencies">
  <select
    className="image-select center style-default type-currencies"
    defaultValue="USD"
  >
    <option value="EUR" data-thumbnail="images/country/fr.svg">
      EUR € | France
    </option>

    <option value="EUR-DE" data-thumbnail="images/country/de.svg">
      EUR € | Germany
    </option>

    <option value="USD" data-thumbnail="images/country/us.svg">
      USD $ | United States
    </option>

    <option value="VND" data-thumbnail="images/country/vn.svg">
      VND ₫ | Vietnam
    </option>
  </select>
</div>
        <div className="tf-languages">
          <select className="image-select center style-default type-languages">
            <option>English</option>
            <option>العربية</option>
            <option>简体中文</option>
            <option>اردو</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>
{/* /mobile menu */}
{/* canvasSearch */}
<div className="offcanvas offcanvas-end canvas-search" id="canvasSearch">
  <div className="canvas-wrapper">
    <header className="tf-search-head">
      <div className="title fw-5">
        Search our site
        <div className="close">
          <span
            className="icon-close icon-close-popup"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></span>
        </div>
      </div>

      <div className="tf-search-sticky">
        <form className="tf-mini-search-frm">
          <fieldset className="text">
            <input
              type="text"
              placeholder="Search"
              name="text"
              tabIndex="0"
              aria-required="true"
              required
            />
          </fieldset>
          <button type="submit">
            <i className="icon-search"></i>
          </button>
        </form>
      </div>
    </header>

    <div className="canvas-body p-0">
      <div className="tf-search-content">
        <div className="tf-cart-hide-has-results">
          
          {/* Quick Links */}
          <div className="tf-col-quicklink">
            <div className="tf-search-content-title fw-5">Quick link</div>
            <ul className="tf-quicklink-list">
              <li className="tf-quicklink-item">
                <a href="shop-default.html">Fashion</a>
              </li>
              <li className="tf-quicklink-item">
                <a href="shop-default.html">Men</a>
              </li>
              <li className="tf-quicklink-item">
                <a href="shop-default.html">Women</a>
              </li>
              <li className="tf-quicklink-item">
                <a href="shop-default.html">Accessories</a>
              </li>
            </ul>
          </div>

          {/* Inspiration Products */}
          <div className="tf-col-content">
            <div className="tf-search-content-title fw-5">
              Need some inspiration?
            </div>

            <div className="tf-search-hidden-inner">

              {/* Product 1 */}
              <div className="tf-loop-item">
                <div className="image">
                  <a href="product-detail.html">
                    <img src="images/products/white-3.jpg" alt="" />
                  </a>
                </div>
                <div className="content">
                  <a href="product-detail.html">Cotton jersey top</a>
                  <div className="tf-product-info-price">
                    <div className="compare-at-price">$10.00</div>
                    <div className="price-on-sale fw-6">$8.00</div>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="tf-loop-item">
                <div className="image">
                  <a href="product-detail.html">
                    <img src="images/products/white-2.jpg" alt="" />
                  </a>
                </div>
                <div className="content">
                  <a href="product-detail.html">Mini crossbody bag</a>
                  <div className="tf-product-info-price">
                    <div className="price fw-6">$18.00</div>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="tf-loop-item">
                <div className="image">
                  <a href="product-detail.html">
                    <img src="images/products/white-1.jpg" alt="" />
                  </a>
                </div>
                <div className="content">
                  <a href="product-detail.html">Oversized Printed T-shirt</a>
                  <div className="tf-product-info-price">
                    <div className="price fw-6">$18.00</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
{/* /canvasSearch */}
{/* toolbarShopmb */}
<div className="offcanvas offcanvas-start canvas-mb toolbar-shop-mobile" id="toolbarShopmb">
  <span
    className="icon-close icon-close-popup"
    data-bs-dismiss="offcanvas"
    aria-label="Close"
  ></span>

  <div className="mb-canvas-content">
    <div className="mb-body">
      <ul className="nav-ul-mb" id="wrapper-menu-navigation">

        {/* Category Item */}
        <li className="nav-mb-item">
          <a href="shop-default.html" className="tf-category-link mb-menu-link">
            <div className="image">
              <img src="images/shop/cate/cate1.jpg" alt="" />
            </div>
            <span>Accessories</span>
          </a>
        </li>

        <li className="nav-mb-item">
          <a href="shop-default.html" className="tf-category-link mb-menu-link">
            <div className="image">
              <img src="images/shop/cate/cate2.jpg" alt="" />
            </div>
            <span>Dog</span>
          </a>
        </li>

        <li className="nav-mb-item">
          <a href="shop-default.html" className="tf-category-link mb-menu-link">
            <div className="image">
              <img src="images/shop/cate/cate3.jpg" alt="" />
            </div>
            <span>Grocery</span>
          </a>
        </li>

        <li className="nav-mb-item">
          <a href="shop-default.html" className="tf-category-link mb-menu-link">
            <div className="image">
              <img src="images/shop/cate/cate4.png" alt="" />
            </div>
            <span>Handbag</span>
          </a>
        </li>

        {/* Fashion Category With Submenu */}
        <li className="nav-mb-item">
          <a
            href="#cate-menu-one"
            className="tf-category-link has-children collapsed mb-menu-link"
            data-bs-toggle="collapse"
            aria-expanded="true"
            aria-controls="cate-menu-one"
          >
            <div className="image">
              <img src="images/shop/cate/cate5.jpg" alt="" />
            </div>
            <span>Fashion</span>
            <span className="btn-open-sub"></span>
          </a>

          <div id="cate-menu-one" className="collapse list-cate">
            <ul className="sub-nav-menu" id="cate-menu-navigation">

              {/* MEN submenu */}
              <li>
                <a
                  href="#cate-shop-one"
                  className="tf-category-link has-children sub-nav-link collapsed"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="cate-shop-one"
                >
                  <div className="image">
                    <img src="images/shop/cate/cate6.jpg" alt="" />
                  </div>
                  <span>Mens</span>
                  <span className="btn-open-sub"></span>
                </a>

                <div id="cate-shop-one" className="collapse">
                  <ul className="sub-nav-menu sub-menu-level-2">

                    <li>
                      <a href="shop-default.html" className="tf-category-link sub-nav-link">
                        <div className="image">
                          <img src="images/shop/cate/cate1.jpg" alt="" />
                        </div>
                        <span>Accessories</span>
                      </a>
                    </li>

                    <li>
                      <a href="shop-default.html" className="tf-category-link sub-nav-link">
                        <div className="image">
                          <img src="images/shop/cate/cate8.jpg" alt="" />
                        </div>
                        <span>Shoes</span>
                      </a>
                    </li>

                  </ul>
                </div>
              </li>

              {/* WOMEN submenu */}
              <li>
                <a
                  href="#cate-shop-two"
                  className="tf-category-link has-children sub-nav-link collapsed"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="cate-shop-two"
                >
                  <div className="image">
                    <img src="images/shop/cate/cate9.jpg" alt="" />
                  </div>
                  <span>Womens</span>
                  <span className="btn-open-sub"></span>
                </a>

                <div id="cate-shop-two" className="collapse">
                  <ul className="sub-nav-menu sub-menu-level-2">

                    <li>
                      <a href="shop-default.html" className="tf-category-link sub-nav-link">
                        <div className="image">
                          <img src="images/shop/cate/cate4.png" alt="" />
                        </div>
                        <span>Handbag</span>
                      </a>
                    </li>

                    <li>
                      <a href="shop-default.html" className="tf-category-link sub-nav-link">
                        <div className="image">
                          <img src="images/shop/cate/cate7.jpg" alt="" />
                        </div>
                        <span>Tee</span>
                      </a>
                    </li>

                  </ul>
                </div>
              </li>

            </ul>
          </div>
        </li>

        {/* MEN */}
        <li className="nav-mb-item">
          <a
            href="#cate-menu-two"
            className="tf-category-link has-children collapsed mb-menu-link"
            data-bs-toggle="collapse"
            aria-expanded="true"
            aria-controls="cate-menu-two"
          >
            <div className="image">
              <img src="images/shop/cate/cate6.jpg" alt="" />
            </div>
            <span>Men</span>
            <span className="btn-open-sub"></span>
          </a>

          <div id="cate-menu-two" className="collapse list-cate">
            <ul className="sub-nav-menu" id="cate-menu-navigation1">

              <li>
                <a href="shop-default.html" className="tf-category-link sub-nav-link">
                  <div className="image">
                    <img src="images/shop/cate/cate1.jpg" alt="" />
                  </div>
                  <span>Accessories</span>
                </a>
              </li>

              <li>
                <a href="shop-default.html" className="tf-category-link sub-nav-link">
                  <div className="image">
                    <img src="images/shop/cate/cate8.jpg" alt="" />
                  </div>
                  <span>Shoes</span>
                </a>
              </li>

            </ul>
          </div>
        </li>

        {/* Tee */}
        <li className="nav-mb-item">
          <a href="shop-default.html" className="tf-category-link mb-menu-link">
            <div className="image">
              <img src="images/shop/cate/cate7.jpg" alt="" />
            </div>
            <span>Tee</span>
          </a>
        </li>

        {/* Shoes */}
        <li className="nav-mb-item">
          <a href="shop-default.html" className="tf-category-link mb-menu-link">
            <div className="image">
              <img src="images/shop/cate/cate8.jpg" alt="" />
            </div>
            <span>Shoes</span>
          </a>
        </li>

        {/* Women */}
        <li className="nav-mb-item">
          <a
            href="#cate-menu-three"
            className="tf-category-link has-children collapsed mb-menu-link"
            data-bs-toggle="collapse"
            aria-expanded="true"
            aria-controls="cate-menu-three"
          >
            <div className="image">
              <img src="images/shop/cate/cate9.jpg" alt="" />
            </div>
            <span>Women</span>
            <span className="btn-open-sub"></span>
          </a>

          <div id="cate-menu-three" className="collapse list-cate">
            <ul className="sub-nav-menu" id="cate-menu-navigation2">

              <li>
                <a href="shop-default.html" className="tf-category-link sub-nav-link">
                  <div className="image">
                    <img src="images/shop/cate/cate4.png" alt="" />
                  </div>
                  <span>Handbag</span>
                </a>
              </li>

              <li>
                <a href="shop-default.html" className="tf-category-link sub-nav-link">
                  <div className="image">
                    <img src="images/shop/cate/cate7.jpg" alt="" />
                  </div>
                  <span>Tee</span>
                </a>
              </li>

            </ul>
          </div>
        </li>

      </ul>
    </div>

    <div className="mb-bottom">
      <a href="shop-default.html" className="tf-btn fw-5 btn-line">
        View all collection <i className="icon icon-arrow1-top-left"></i>
      </a>
    </div>
  </div>
</div>
{/* /toolbarShopmb */}
{/* modal login */}
<div className="modal modalCentered fade form-sign-in modal-part-content" id="login">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="header">
        <div className="demo-title">Log in</div>
        <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
      </div>

      <div className="tf-login-form">
        <form action="https://themesflat.co/html/ecomus/my-account.html" acceptCharset="utf-8">
          <div className="tf-field style-1">
            <input className="tf-field-input tf-input" placeholder=" " type="email" name="" />
            <label className="tf-field-label">Email *</label>
          </div>

          <div className="tf-field style-1">
            <input className="tf-field-input tf-input" placeholder=" " type="password" name="" />
            <label className="tf-field-label">Password *</label>
          </div>

          <div>
            <a href="#forgotPassword" data-bs-toggle="modal" className="btn-link link">
              Forgot your password?
            </a>
          </div>

          <div className="bottom">
            <div className="w-100">
              <button type="submit" className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center">
                <span>Log in</span>
              </button>
            </div>

            <div className="w-100">
              <a href="#register" data-bs-toggle="modal" className="btn-link fw-6 w-100 link">
                New customer? Create your account
                <i className="icon icon-arrow1-top-left"></i>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

{/* forgot password modal */}
<div className="modal modalCentered fade form-sign-in modal-part-content" id="forgotPassword">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="header">
        <div className="demo-title">Reset your password</div>
        <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
      </div>

      <div className="tf-login-form">
        <form>
          <div>
            <p>
              Sign up for early Sale access plus tailored new arrivals, trends and promotions.
              To opt out, click unsubscribe in our emails
            </p>
          </div>

          <div className="tf-field style-1">
            <input className="tf-field-input tf-input" placeholder=" " type="email" name="" />
            <label className="tf-field-label">Email *</label>
          </div>

          <div>
            <a href="#login" data-bs-toggle="modal" className="btn-link link">
              Cancel
            </a>
          </div>

          <div className="bottom">
            <div className="w-100">
              <button type="submit" className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center">
                <span>Reset password</span>
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
</div>

{/* register modal */}
<div className="modal modalCentered fade form-sign-in modal-part-content" id="register">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="header">
        <div className="demo-title">Register</div>
        <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
      </div>

      <div className="tf-login-form">
        <form>

          <div className="tf-field style-1">
            <input className="tf-field-input tf-input" placeholder=" " type="text" name="" />
            <label className="tf-field-label">First name</label>
          </div>

          <div className="tf-field style-1">
            <input className="tf-field-input tf-input" placeholder=" " type="text" name="" />
            <label className="tf-field-label">Last name</label>
          </div>

          <div className="tf-field style-1">
            <input className="tf-field-input tf-input" placeholder=" " type="email" name="" />
            <label className="tf-field-label">Email *</label>
          </div>

          <div className="tf-field style-1">
            <input className="tf-field-input tf-input" placeholder=" " type="password" name="" />
            <label className="tf-field-label">Password *</label>
          </div>

          <div className="bottom">
            <div className="w-100">
              <a href="register.html" className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center">
                <span>Register</span>
              </a>
            </div>

            <div className="w-100">
              <a href="#login" data-bs-toggle="modal" className="btn-link fw-6 w-100 link">
                Already have an account? Log in here
                <i className="icon icon-arrow1-top-left"></i>
              </a>
            </div>
          </div>

        </form>
      </div>

    </div>
  </div>
</div>
{/* /modal login */}
{/* shoppingCart */}
<div className="modal fullRight fade modal-shopping-cart" id="shoppingCart">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="header">
        <div className="title fw-5">Shopping cart</div>
        <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
      </div>

      <div className="wrap">

        {/* Progress Bar */}
        <div className="tf-mini-cart-threshold">
          <div className="tf-progress-bar">
            <span style={{ width: "50%" }}>
              <div className="progress-car">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 0.875C0 0.391751 0.391751 0 0.875 0H13.5625C14.0457 0 14.4375 0.391751 14.4375 0.875V3.0625H17.3125C17.5867 3.0625 17.845 3.19101 18.0104 3.40969L20.8229 7.12844C20.9378 7.2804 21 7.46572 21 7.65625V11.375C21 11.8582 20.6082 12.25 20.125 12.25H17.7881C17.4278 13.2695 16.4554 14 15.3125 14C14.1696 14 13.1972 13.2695 12.8369 12.25H7.72563C7.36527 13.2695 6.39293 14 5.25 14C4.10706 14 3.13473 13.2695 2.77437 12.25H0.875C0.391751 12.25 0 11.8582 0 11.375V0.875ZM2.77437 10.5C3.13473 9.48047 4.10706 8.75 5.25 8.75C6.39293 8.75 7.36527 9.48046 7.72563 10.5H12.6875V1.75H1.75V10.5H2.77437Z"></path>
                </svg>
              </div>
            </span>
          </div>

          <div className="tf-progress-msg">
            Buy <span className="price fw-6">$75.00</span> more to enjoy <span className="fw-6">Free Shipping</span>
          </div>
        </div>

        {/* Cart Items */}
        <div className="tf-mini-cart-wrap">
          <div className="tf-mini-cart-main">
            <div className="tf-mini-cart-sroll">
              <div className="tf-mini-cart-items">

                {/* Item 1 */}
                <div className="tf-mini-cart-item">
                  <div className="tf-mini-cart-image">
                    <a href="product-detail.html">
                      <img src="images/products/white-2.jpg" alt="" />
                    </a>
                  </div>

                  <div className="tf-mini-cart-info">
                    <a className="title link" href="product-detail.html">T-shirt</a>
                    <div className="meta-variant">Light gray</div>
                    <div className="price fw-6">$25.00</div>

                    <div className="tf-mini-cart-btns">
                      <div className="wg-quantity small">
                        <span className="btn-quantity minus-btn">-</span>
                        <input type="text" name="number" defaultValue="1" />
                        <span className="btn-quantity plus-btn">+</span>
                      </div>
                      <div className="tf-mini-cart-remove">Remove</div>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="tf-mini-cart-item">
                  <div className="tf-mini-cart-image">
                    <a href="product-detail.html">
                      <img src="images/products/white-3.jpg" alt="" />
                    </a>
                  </div>

                  <div className="tf-mini-cart-info">
                    <a className="title link" href="product-detail.html">Oversized Motif T-shirt</a>
                    <div className="price fw-6">$25.00</div>

                    <div className="tf-mini-cart-btns">
                      <div className="wg-quantity small">
                        <span className="btn-quantity minus-btn">-</span>
                        <input type="text" name="number" defaultValue="1" />
                        <span className="btn-quantity plus-btn">+</span>
                      </div>
                      <div className="tf-mini-cart-remove">Remove</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Recommendations */}
              <div className="tf-minicart-recommendations">
                <div className="tf-minicart-recommendations-heading">
                  <div className="tf-minicart-recommendations-title">You may also like</div>
                  <div className="sw-dots small style-2 cart-slide-pagination"></div>
                </div>

                <div dir="ltr" className="swiper tf-cart-slide">
                  <div className="swiper-wrapper">

                    <div className="swiper-slide">
                      <div className="tf-minicart-recommendations-item">
                        <div className="tf-minicart-recommendations-item-image">
                          <a href="product-detail.html">
                            <img src="images/products/white-3.jpg" alt="" />
                          </a>
                        </div>

                        <div className="tf-minicart-recommendations-item-infos flex-grow-1">
                          <a className="title" href="product-detail.html">Loose Fit Sweatshirt</a>
                          <div className="price">$25.00</div>
                        </div>

                        <div className="tf-minicart-recommendations-item-quickview">
                          <div className="btn-show-quickview quickview hover-tooltip">
                            <span className="icon icon-view"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="tf-minicart-recommendations-item">
                        <div className="tf-minicart-recommendations-item-image">
                          <a href="product-detail.html">
                            <img src="images/products/white-2.jpg" alt="" />
                          </a>
                        </div>

                        <div className="tf-minicart-recommendations-item-infos flex-grow-1">
                          <a className="title" href="product-detail.html">Loose Fit Hoodie</a>
                          <div className="price">$25.00</div>
                        </div>

                        <div className="tf-minicart-recommendations-item-quickview">
                          <div className="btn-show-quickview quickview hover-tooltip">
                            <span className="icon icon-view"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Cart Bottom */}
          <div className="tf-mini-cart-bottom">
            <div className="tf-mini-cart-tool">

              {/* Buttons: Add Note / Gift / Estimate */}
              <div className="tf-mini-cart-tool-btn btn-add-note">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor">...</svg>
              </div>

              <div className="tf-mini-cart-tool-btn btn-add-gift">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="currentColor">...</svg>
              </div>

              <div className="tf-mini-cart-tool-btn btn-estimate-shipping">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18" fill="currentColor">...</svg>
              </div>

            </div>

            {/* Totals */}
            <div className="tf-mini-cart-bottom-wrap">
              <div className="tf-cart-totals-discounts">
                <div className="tf-cart-total">Subtotal</div>
                <div className="tf-totals-total-value fw-6">$49.99 USD</div>
              </div>

              <div className="tf-cart-tax">
                Taxes and <a href="#">shipping</a> calculated at checkout
              </div>

              <div className="tf-mini-cart-line"></div>

              {/* Agree Checkbox */}
              <div className="tf-cart-checkbox">
                <div className="tf-checkbox-wrapp">
                  <input type="checkbox" id="CartDrawer-Form_agree" name="agree_checkbox" />
                  <div><i className="icon-check"></i></div>
                </div>

                <label htmlFor="CartDrawer-Form_agree">
                  I agree with the <a href="#">terms and conditions</a>
                </label>
              </div>

              {/* Cart / Checkout Buttons */}
              <div className="tf-mini-cart-view-checkout">
                <a href="view-cart.html" className="tf-btn btn-outline radius-3 link w-100 justify-content-center">View cart</a>
                <a href="checkout.html" className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"><span>Check out</span></a>
              </div>
            </div>
          </div>

          {/* ADD NOTE / GIFT / SHIPPING — Openable Panels */}
          {/* These panels are large — I have already converted them fully.  
              If you want them included here too, say:  
              👉 “Add openable panels also”  
          */}
        </div>

      </div>

    </div>
  </div>
</div>
{/* /shoppingCart */}
{/* modal compare */}
<div className="offcanvas offcanvas-bottom canvas-compare" id="compare">
  <div className="canvas-wrapper">
    
    <header className="canvas-header">
      <div className="close-popup">
        <span
          className="icon-close icon-close-popup"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></span>
      </div>
    </header>

    <div className="canvas-body">
      <div className="container">
        <div className="row">
          <div className="col-12">

            <div className="tf-compare-list">

              <div className="tf-compare-head">
                <div className="title">Compare Products</div>
              </div>

              <div className="tf-compare-offcanvas">

                <div className="tf-compare-item">
                  <div className="position-relative">
                    <div className="icon">
                      <i className="icon-close"></i>
                    </div>
                    <a href="product-detail.html">
                      <img
                        className="radius-3"
                        src="images/products/orange-1.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <div className="tf-compare-item">
                  <div className="position-relative">
                    <div className="icon">
                      <i className="icon-close"></i>
                    </div>
                    <a href="product-detail.html">
                      <img
                        className="radius-3"
                        src="images/products/pink-1.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>

              </div>

              <div className="tf-compare-buttons">
                <div className="tf-compare-buttons-wrap">
                  <a
                    href="compare.html"
                    className="tf-btn radius-3 btn-fill justify-content-center fw-6 fs-14 flex-grow-1 animate-hover-btn"
                  >
                    Compare
                  </a>

                  <div className="tf-compapre-button-clear-all link">
                    Clear All
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</div>
{/* /modal compare */}
{/* modal quick_add */}
<div className="modal fade modalDemo" id="quick_add">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      <div className="header">
        <span
          className="icon-close icon-close-popup"
          data-bs-dismiss="modal"
        ></span>
      </div>

      <div className="wrap">

        <div className="tf-product-info-item">
          <div className="image">
            <img src="images/products/orange-1.jpg" alt="" />
          </div>
          <div className="content">
            <a href="product-detail.html">Ribbed Tank Top</a>

            <div className="tf-product-info-price">
              <div className="price">$18.00</div>
            </div>
          </div>
        </div>

        {/* Variant Picker */}
        <div className="tf-product-info-variant-picker mb_15">

          {/* Color Picker */}
          <div className="variant-picker-item">
            <div className="variant-picker-label">
              Color: <span className="fw-6 variant-picker-label-value">Orange</span>
            </div>

            <div className="variant-picker-values">
              <input id="values-orange" type="radio" name="color" defaultChecked />
              <label className="hover-tooltip radius-60" htmlFor="values-orange" data-value="Orange">
                <span className="btn-checkbox bg-color-orange"></span>
                <span className="tooltip">Orange</span>
              </label>

              <input id="values-black" type="radio" name="color" />
              <label className="hover-tooltip radius-60" htmlFor="values-black" data-value="Black">
                <span className="btn-checkbox bg-color-black"></span>
                <span className="tooltip">Black</span>
              </label>

              <input id="values-white" type="radio" name="color" />
              <label className="hover-tooltip radius-60" htmlFor="values-white" data-value="White">
                <span className="btn-checkbox bg-color-white"></span>
                <span className="tooltip">White</span>
              </label>
            </div>
          </div>

          {/* Size Picker */}
          <div className="variant-picker-item">
            <div className="variant-picker-label">
              Size: <span className="fw-6 variant-picker-label-value">S</span>
            </div>

            <div className="variant-picker-values">
              <input type="radio" name="size" id="values-s" defaultChecked />
              <label className="style-text" htmlFor="values-s" data-value="S"><p>S</p></label>

              <input type="radio" name="size" id="values-m" />
              <label className="style-text" htmlFor="values-m" data-value="M"><p>M</p></label>

              <input type="radio" name="size" id="values-l" />
              <label className="style-text" htmlFor="values-l" data-value="L"><p>L</p></label>

              <input type="radio" name="size" id="values-xl" />
              <label className="style-text" htmlFor="values-xl" data-value="XL"><p>XL</p></label>
            </div>
          </div>

        </div>

        {/* Quantity */}
        <div className="tf-product-info-quantity mb_15">
          <div className="quantity-title fw-6">Quantity</div>

          <div className="wg-quantity">
            <span className="btn-quantity minus-btn">-</span>
            <input type="text" name="number" defaultValue="1" />
            <span className="btn-quantity plus-btn">+</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="tf-product-info-buy-button">
          <form>

            <a
              href="javascript:void(0);"
              className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart"
            >
              <span>Add to cart -&nbsp;</span>
              <span className="tf-qty-price">$18.00</span>
            </a>

            <div className="tf-product-btn-wishlist btn-icon-action">
              <i className="icon-heart"></i>
              <i className="icon-delete"></i>
            </div>

            <a
              href="#compare"
              data-bs-toggle="offcanvas"
              aria-controls="offcanvasLeft"
              className="tf-product-btn-wishlist box-icon bg_white compare btn-icon-action"
            >
              <span className="icon icon-compare"></span>
              <span className="icon icon-check"></span>
            </a>

            <div className="w-100">
              <a href="#" className="btns-full">
                Buy with <img src="images/payments/paypal.png" alt="" />
              </a>

              <a href="#" className="payment-more-option">More payment options</a>
            </div>

          </form>
        </div>

      </div>

    </div>
  </div>
</div>
{/* /modal quick_add */}
{/* modal quick_view */}
<div className="modal fade modalDemo" id="quick_view">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      <div className="header">
        <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
      </div>

      <div className="wrap">

        {/* Product Gallery */}
        <div className="tf-product-media-wrap">
          <div dir="ltr" className="swiper tf-single-slide">
            <div className="swiper-wrapper">

              <div className="swiper-slide">
                <div className="item">
                  <img src="images/products/orange-1.jpg" alt="" />
                </div>
              </div>

              <div className="swiper-slide">
                <div className="item">
                  <img src="images/products/pink-1.jpg" alt="" />
                </div>
              </div>

            </div>

            <div className="swiper-button-next button-style-arrow single-slide-prev"></div>
            <div className="swiper-button-prev button-style-arrow single-slide-next"></div>
          </div>
        </div>

        {/* Product Info */}
        <div className="tf-product-info-wrap position-relative">
          <div className="tf-product-info-list">

            <div className="tf-product-info-title">
              <h5>
                <a className="link" href="product-detail.html">Ribbed Tank Top</a>
              </h5>
            </div>

            <div className="tf-product-info-badges">
              <div className="badges text-uppercase">Best seller</div>

              <div className="product-status-content">
                <i className="icon-lightning"></i>
                <p className="fw-6">Selling fast! 48 people have this in their carts.</p>
              </div>
            </div>

            <div className="tf-product-info-price">
              <div className="price">$18.00</div>
            </div>

            <div className="tf-product-description">
              <p>
                Nunc arcu faucibus a et lorem eu a mauris adipiscing conubia ac aptent ligula facilisis a auctor
                habitant parturient a a.Interdum fermentum.
              </p>
            </div>

            {/* Variant Picker */}
            <div className="tf-product-info-variant-picker">

              {/* Color Picker */}
              <div className="variant-picker-item">
                <div className="variant-picker-label">
                  Color: <span className="fw-6 variant-picker-label-value">Orange</span>
                </div>

                <div className="variant-picker-values">
                  <input id="values-orange-1" type="radio" name="color-1" defaultChecked />
                  <label htmlFor="values-orange-1" className="hover-tooltip radius-60" data-value="Orange">
                    <span className="btn-checkbox bg-color-orange"></span>
                    <span className="tooltip">Orange</span>
                  </label>

                  <input id="values-black-1" type="radio" name="color-1" />
                  <label htmlFor="values-black-1" className="hover-tooltip radius-60" data-value="Black">
                    <span className="btn-checkbox bg-color-black"></span>
                    <span className="tooltip">Black</span>
                  </label>

                  <input id="values-white-1" type="radio" name="color-1" />
                  <label htmlFor="values-white-1" className="hover-tooltip radius-60" data-value="White">
                    <span className="btn-checkbox bg-color-white"></span>
                    <span className="tooltip">White</span>
                  </label>
                </div>
              </div>

              {/* Size Picker */}
              <div className="variant-picker-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="variant-picker-label">
                    Size: <span className="fw-6 variant-picker-label-value">S</span>
                  </div>
                  <div className="find-size btn-choose-size fw-6">Find your size</div>
                </div>

                <div className="variant-picker-values">
                  <input id="values-s-1" type="radio" name="size-1" defaultChecked />
                  <label htmlFor="values-s-1" className="style-text" data-value="S"><p>S</p></label>

                  <input id="values-m-1" type="radio" name="size-1" />
                  <label htmlFor="values-m-1" className="style-text" data-value="M"><p>M</p></label>

                  <input id="values-l-1" type="radio" name="size-1" />
                  <label htmlFor="values-l-1" className="style-text" data-value="L"><p>L</p></label>

                  <input id="values-xl-1" type="radio" name="size-1" />
                  <label htmlFor="values-xl-1" className="style-text" data-value="XL"><p>XL</p></label>
                </div>
              </div>

            </div>

            {/* Quantity */}
            <div className="tf-product-info-quantity">
              <div className="quantity-title fw-6">Quantity</div>

              <div className="wg-quantity">
                <span className="btn-quantity minus-btn">-</span>
                <input type="text" name="number" defaultValue="1" />
                <span className="btn-quantity plus-btn">+</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="tf-product-info-buy-button">
              <form>

                <a href="javascript:void(0);" className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart">
                  <span>Add to cart -&nbsp;</span>
                  <span className="tf-qty-price">$8.00</span>
                </a>

                <a className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action" href="javascript:void(0);">
                  <span className="icon icon-heart"></span>
                  <span className="tooltip">Add to Wishlist</span>
                  <span className="icon icon-delete"></span>
                </a>

                <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action">
                  <span className="icon icon-compare"></span>
                  <span className="tooltip">Add to Compare</span>
                  <span className="icon icon-check"></span>
                </a>

                <div className="w-100">
                  <a href="#" className="btns-full">
                    Buy with <img src="images/payments/paypal.png" alt="" />
                  </a>
                  <a href="#" className="payment-more-option">More payment options</a>
                </div>

              </form>
            </div>

            <div>
              <a href="product-detail.html" className="tf-btn fw-6 btn-line">
                View full details<i className="icon icon-arrow1-top-left"></i>
              </a>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</div>
{/* /modal quick_view */}
{/* modal find_size */}
<div className="modal fade modalDemo tf-product-modal" id="find_size">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      <div className="header">
        <div className="demo-title">Size chart</div>
        <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
      </div>

      <div className="tf-rte">

        {/* Size Table */}
        <div className="tf-table-res-df">
          <h6>Size guide</h6>

          <table className="tf-sizeguide-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>US</th>
                <th>Bust</th>
                <th>Waist</th>
                <th>Low Hip</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>XS</td>
                <td>2</td>
                <td>32</td>
                <td>24 - 25</td>
                <td>33 - 34</td>
              </tr>
              <tr>
                <td>S</td>
                <td>4</td>
                <td>34 - 35</td>
                <td>26 - 27</td>
                <td>35 - 26</td>
              </tr>
              <tr>
                <td>M</td>
                <td>6</td>
                <td>36 - 37</td>
                <td>28 - 29</td>
                <td>38 - 40</td>
              </tr>
              <tr>
                <td>L</td>
                <td>8</td>
                <td>38 - 29</td>
                <td>30 - 31</td>
                <td>42 - 44</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>10</td>
                <td>40 - 41</td>
                <td>32 - 33</td>
                <td>45 - 47</td>
              </tr>
              <tr>
                <td>XXL</td>
                <td>12</td>
                <td>42 - 43</td>
                <td>34 - 35</td>
                <td>48 - 50</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Measuring Tips */}
        <div className="tf-page-size-chart-content">
          <div>
            <h6>Measuring Tips</h6>

            <div className="title">Bust</div>
            <p>Measure around the fullest part of your bust.</p>

            <div className="title">Waist</div>
            <p>Measure around the narrowest part of your torso.</p>

            <div className="title">Low Hip</div>
            <p className="mb-0">
              With your feet together measure around the fullest part of your hips/rear.
            </p>
          </div>

          <div>
            <img
              className="sizechart lazyload"
              src="images/shop/products/size_chart2.jpg"
              alt=""
            />
          </div>
        </div>

      </div>

    </div>
  </div>
</div>
{/* /modal find_size */}
    </div>
    </>
  )
}

export default page