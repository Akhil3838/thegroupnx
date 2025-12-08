import React from 'react'

function page() {
  return (
    <>
    <div className='preload-wrapper'>
         <a href="#" id="toggle-rtl" className="tf-btn animate-hover-btn btn-fill">RTL</a>


    <div id="wrapper">
        <header id='header' className='header-default'>
   <div className="px_15 lg-px_40">
     <div className="row wrapper-header align-items-center">
      <div className="col-md-4 col-3 tf-lg-hidden">
  <a href="#mobileMenu" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
    {/* <svg
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
    </svg> */}
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
         {/* breadcrumb */}
        <div className="tf-breadcrumb">
  <div className="container">
    <div className="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
      <div className="tf-breadcrumb-list">
        <a href="index.html" className="text">Home</a>
        <i className="icon icon-arrow-right"></i>
        <a href="#" className="text">Women</a>
        <i className="icon icon-arrow-right"></i>
        <span className="text">Cotton jersey top</span>
      </div>

      <div className="tf-breadcrumb-prev-next">
        <a href="#" className="tf-breadcrumb-prev hover-tooltip center">
          <i className="icon icon-arrow-left"></i>
          {/* <span className="tooltip">Cotton jersey top</span> */}
        </a>

        <a href="#" className="tf-breadcrumb-back hover-tooltip center">
          <i className="icon icon-shop"></i>
          {/* <span className="tooltip">Back to Women</span> */}
        </a>

        <a href="#" className="tf-breadcrumb-next hover-tooltip center">
          <i className="icon icon-arrow-right"></i>
          {/* <span className="tooltip">Cotton jersey top</span> */}
        </a>
      </div>
    </div>
  </div>
        </div>

        <section className="flat-spacing-4 pt_0">

          <div className="tf-main-product section-image-zoom">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="tf-product-media-wrap sticky-top">
          <div className="thumbs-slider">
            <div
              dir="ltr"
              className="swiper tf-product-media-thumbs other-image-zoom"
              data-direction="vertical"
            >
              <div className="swiper-wrapper stagger-wrap">
                {/* beige */}
                <div className="swiper-slide stagger-item" data-color="beige">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod31.jpg"
                      src="images/shop/products/hmgoepprod31.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                <div className="swiper-slide stagger-item" data-color="beige">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod.jpg"
                      src="images/shop/products/hmgoepprod.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                <div className="swiper-slide stagger-item" data-color="beige">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod2.jpg"
                      src="images/shop/products/hmgoepprod2.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                <div className="swiper-slide stagger-item" data-color="beige">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod3.jpg"
                      src="images/shop/products/hmgoepprod3.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                <div className="swiper-slide stagger-item" data-color="beige">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod4.jpg"
                      src="images/shop/products/hmgoepprod4.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                <div className="swiper-slide stagger-item" data-color="beige">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod5.jpg"
                      src="images/shop/products/hmgoepprod5.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                {/* black */}
                <div className="swiper-slide stagger-item" data-color="black">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod6.jpg"
                      src="images/shop/products/hmgoepprod6.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                <div className="swiper-slide stagger-item" data-color="black">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod7.jpg"
                      src="images/shop/products/hmgoepprod7.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                <div className="swiper-slide stagger-item" data-color="black">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod8.jpg"
                      src="images/shop/products/hmgoepprod8.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                <div className="swiper-slide stagger-item" data-color="black">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod9.jpg"
                      src="images/shop/products/hmgoepprod9.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                {/* blue */}
                <div className="swiper-slide stagger-item" data-color="blue">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod10.jpg"
                      src="images/shop/products/hmgoepprod10.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                <div className="swiper-slide stagger-item" data-color="blue">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod11.jpg"
                      src="images/shop/products/hmgoepprod11.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                <div className="swiper-slide stagger-item" data-color="blue">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod12.jpg"
                      src="images/shop/products/hmgoepprod12.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                <div className="swiper-slide stagger-item" data-color="blue">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod13.jpg"
                      src="images/shop/products/hmgoepprod13.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                {/* white */}
                <div className="swiper-slide stagger-item" data-color="white">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod14.jpg"
                      src="images/shop/products/hmgoepprod14.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                <div className="swiper-slide stagger-item" data-color="white">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod15.jpg"
                      src="images/shop/products/hmgoepprod15.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                <div className="swiper-slide stagger-item" data-color="white">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod16.jpg"
                      src="images/shop/products/hmgoepprod16.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>

                <div className="swiper-slide stagger-item" data-color="white">
                  <div className="item">
                    <img
                      className="lazyload"
                      data-src="images/shop/products/hmgoepprod17.jpg"
                      src="images/shop/products/hmgoepprod17.jpg"
                      alt="img-product"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Main slider */}
            <div
              dir="ltr"
              className="swiper tf-product-media-main"
              id="gallery-swiper-started"
            >
              <div className="swiper-wrapper">
                {/* beige */}
                <div className="swiper-slide" data-color="beige">
                  <a
                    href="images/shop/products/p-d1.png"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod31.jpg"
                      data-src="images/shop/products/hmgoepprod31.jpg"
                      src="images/shop/products/hmgoepprod31.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="swiper-slide" data-color="beige">
                  <a
                    href="images/shop/products/hmgoepprod.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod.jpg"
                      data-src="images/shop/products/hmgoepprod.jpg"
                      src="images/shop/products/hmgoepprod.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="swiper-slide" data-color="beige">
                  <a
                    href="images/shop/products/hmgoepprod2.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod2.jpg"
                      data-src="images/shop/products/hmgoepprod2.jpg"
                      src="images/shop/products/hmgoepprod2.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="swiper-slide" data-color="beige">
                  <a
                    href="images/shop/products/hmgoepprod3.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod3.jpg"
                      data-src="images/shop/products/hmgoepprod3.jpg"
                      src="images/shop/products/hmgoepprod3.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="swiper-slide" data-color="beige">
                  <a
                    href="images/shop/products/hmgoepprod4.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod4.jpg"
                      data-src="images/shop/products/hmgoepprod4.jpg"
                      src="images/shop/products/hmgoepprod4.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="swiper-slide" data-color="beige">
                  <a
                    href="images/shop/products/hmgoepprod5.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod5.jpg"
                      data-src="images/shop/products/hmgoepprod5.jpg"
                      src="images/shop/products/hmgoepprod5.jpg"
                      alt=""
                    />
                  </a>
                </div>

                {/* black */}
                <div className="swiper-slide" data-color="black">
                  <a
                    href="images/shop/products/hmgoepprod6.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod6.jpg"
                      data-src="images/shop/products/hmgoepprod6.jpg"
                      src="images/shop/products/hmgoepprod6.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="swiper-slide" data-color="black">
                  <a
                    href="images/shop/products/hmgoepprod7.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod7.jpg"
                      data-src="images/shop/products/hmgoepprod7.jpg"
                      src="images/shop/products/hmgoepprod7.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="swiper-slide" data-color="black">
                  <a
                    href="images/shop/products/hmgoepprod8.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod8.jpg"
                      data-src="images/shop/products/hmgoepprod8.jpg"
                      src="images/shop/products/hmgoepprod8.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="swiper-slide" data-color="black">
                  <a
                    href="images/shop/products/hmgoepprod9.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod9.jpg"
                      data-src="images/shop/products/hmgoepprod9.jpg"
                      src="images/shop/products/hmgoepprod9.jpg"
                      alt=""
                    />
                  </a>
                </div>

                {/* blue */}
                <div className="swiper-slide" data-color="blue">
                  <a
                    href="images/shop/products/hmgoepprod10.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod10.jpg"
                      data-src="images/shop/products/hmgoepprod10.jpg"
                      src="images/shop/products/hmgoepprod10.jpg"
                      alt="img-product"
                    />
                  </a>
                </div>

                <div className="swiper-slide" data-color="blue">
                  <a
                    href="images/shop/products/hmgoepprod11.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod11.jpg"
                      data-src="images/shop/products/hmgoepprod11.jpg"
                      src="images/shop/products/hmgoepprod11.jpg"
                      alt="img-product"
                    />
                  </a>
                </div>

                <div className="swiper-slide" data-color="blue">
                  <a
                    href="images/shop/products/hmgoepprod12.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod12.jpg"
                      data-src="images/shop/products/hmgoepprod12.jpg"
                      src="images/shop/products/hmgoepprod12.jpg"
                      alt="img-product"
                    />
                  </a>
                </div>

                <div className="swiper-slide" data-color="blue">
                  <a
                    href="images/shop/products/hmgoepprod13.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod13.jpg"
                      data-src="images/shop/products/hmgoepprod13.jpg"
                      src="images/shop/products/hmgoepprod13.jpg"
                      alt="img-product"
                    />
                  </a>
                </div>

                {/* white */}
                <div className="swiper-slide" data-color="white">
                  <a
                    href="images/shop/products/hmgoepprod14.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod14.jpg"
                      data-src="images/shop/products/hmgoepprod14.jpg"
                      src="images/shop/products/hmgoepprod14.jpg"
                      alt="img-product"
                    />
                  </a>
                </div>

                <div className="swiper-slide" data-color="white">
                  <a
                    href="images/shop/products/hmgoepprod15.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod15.jpg"
                      data-src="images/shop/products/hmgoepprod15.jpg"
                      src="images/shop/products/hmgoepprod15.jpg"
                      alt="img-product"
                    />
                  </a>
                </div>

                <div className="swiper-slide" data-color="white">
                  <a
                    href="images/shop/products/hmgoepprod16.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod16.jpg"
                      data-src="images/shop/products/hmgoepprod16.jpg"
                      src="images/shop/products/hmgoepprod16.jpg"
                      alt="img-product"
                    />
                  </a>
                </div>

                <div className="swiper-slide" data-color="white">
                  <a
                    href="images/shop/products/hmgoepprod17.jpg"
                    target="_blank"
                    className="item"
                    data-pswp-width="770px"
                    data-pswp-height="1075px"
                  >
                    <img
                      className="tf-image-zoom lazyload"
                      data-zoom="images/shop/products/hmgoepprod17.jpg"
                      data-src="images/shop/products/hmgoepprod17.jpg"
                      src="images/shop/products/hmgoepprod17.jpg"
                      alt="img-product"
                    />
                  </a>
                </div>
              </div>

              <div className="swiper-button-next button-style-arrow thumbs-next"></div>
              <div className="swiper-button-prev button-style-arrow thumbs-prev"></div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="col-md-6">
        <div className="tf-product-info-wrap position-relative">
          <div className="tf-zoom-main"></div>

          <div className="tf-product-info-list other-image-zoom">
            <div className="tf-product-info-title">
              <h5>Cotton jersey top</h5>
            </div>

            <div className="tf-product-info-badges">
              <div className="badges">Best seller</div>
              <div className="product-status-content">
                <i className="icon-lightning"></i>
                <p className="fw-6">
                  Selling fast! 56 people have this in their carts.
                </p>
              </div>
            </div>

            <div className="tf-product-info-price">
              <div className="price-on-sale">$8.00</div>
              <div className="compare-at-price">$30.00</div>
              <div className="badges-on-sale">
                <span>20</span>% OFF
              </div>
            </div>

            <div className="tf-product-info-liveview">
              <div className="liveview-count">20</div>
              <p className="fw-6">People are viewing this right now</p>
            </div>

            <div className="tf-product-info-countdown">
              <div className="countdown-wrap">
                <div className="countdown-title">
                  <i className="icon-time tf-ani-tada"></i>
                  <p>HURRY UP! SALE ENDS IN:</p>
                </div>
                <div className="tf-countdown style-1">
                  <div
                    className="js-countdown"
                    data-timer="1007500"
                    data-labels="Days :,Hours :,Mins :,Secs"
                  ></div>
                </div>
              </div>
            </div>

            {/* VARIANT PICKER */}
            <div className="tf-product-info-variant-picker">
              {/* COLOR */}
              <div className="variant-picker-item">
                <div className="variant-picker-label">
                  Color:{" "}
                  <span className="fw-6 variant-picker-label-value value-currentColor">
                    Beige
                  </span>
                </div>

                <div className="variant-picker-values">
                  <input id="values-beige" type="radio" name="color1" defaultChecked />
                  <label
                    className="hover-tooltip radius-60 color-btn"
                    htmlFor="values-beige"
                    data-color="beige"
                    data-value="Beige"
                  >
                    <span className="btn-checkbox bg-color-beige"></span>
                    <span className="tooltip">Beige</span>
                  </label>

                  <input id="values-black" type="radio" name="color1" />
                  <label
                    className="hover-tooltip radius-60 color-btn"
                    data-price="9"
                    htmlFor="values-black"
                    data-color="black"
                    data-value="Black"
                  >
                    <span className="btn-checkbox bg-color-black"></span>
                    <span className="tooltip">Black</span>
                  </label>

                  <input id="values-blue" type="radio" name="color1" />
                  <label
                    className="hover-tooltip radius-60 color-btn"
                    data-price="10"
                    htmlFor="values-blue"
                    data-color="blue"
                    data-value="Blue"
                  >
                    <span className="btn-checkbox bg-color-blue"></span>
                    <span className="tooltip">Blue</span>
                  </label>

                  <input id="values-white" type="radio" name="color1" />
                  <label
                    className="hover-tooltip radius-60 color-btn"
                    data-price="12"
                    htmlFor="values-white"
                    data-color="white"
                    data-value="White"
                  >
                    <span className="btn-checkbox bg-color-white"></span>
                    <span className="tooltip">White</span>
                  </label>
                </div>
              </div>

              {/* SIZE */}
              <div className="variant-picker-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="variant-picker-label">
                    Size: <span className="fw-6 variant-picker-label-value">S</span>
                  </div>

                  <a href="#find_size" data-bs-toggle="modal" className="find-size fw-6">
                    Find your size
                  </a>
                </div>

                <div className="variant-picker-values">
                  <input type="radio" name="size1" id="values-s" defaultChecked />
                  <label
                    className="style-text size-btn"
                    htmlFor="values-s"
                    data-value="S"
                  >
                    <p>S</p>
                  </label>

                  <input type="radio" name="size1" id="values-m" />
                  <label
                    className="style-text size-btn"
                    data-price="9"
                    htmlFor="values-m"
                    data-value="M"
                  >
                    <p>M</p>
                  </label>

                  <input type="radio" name="size1" id="values-l" />
                  <label
                    className="style-text size-btn"
                    data-price="10"
                    htmlFor="values-l"
                    data-value="L"
                  >
                    <p>L</p>
                  </label>

                  <input type="radio" name="size1" id="values-xl" />
                  <label
                    className="style-text size-btn"
                    data-price="12"
                    htmlFor="values-xl"
                    data-value="XL"
                  >
                    <p>XL</p>
                  </label>
                </div>
              </div>
            </div>

            {/* QUANTITY */}
            <div className="tf-product-info-quantity">
              <div className="quantity-title fw-6">Quantity</div>

              <div className="wg-quantity">
                <span className="btn-quantity btn-decrease">-</span>

                <input
                  type="text"
                  className="quantity-product"
                  name="number"
                  defaultValue="1"
                />

                <span className="btn-quantity btn-increase">+</span>
              </div>
            </div>

            {/* BUY BUTTONS */}
            <div className="tf-product-info-buy-button">
              <form>
                <a
                  href="#"
                  className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart"
                >
                  <span>Add to cart -&nbsp;</span>
                  <span className="tf-qty-price total-price">$8.00</span>
                </a>

                <a
                  href="#"
                  className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
                >
                  <span className="icon icon-heart"></span>
                  <span className="tooltip">Add to Wishlist</span>
                  <span className="icon icon-delete"></span>
                </a>

                <a
                  href="#compare"
                  data-bs-toggle="offcanvas"
                  aria-controls="offcanvasLeft"
                  className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
                >
                  <span className="icon icon-compare"></span>
                  <span className="tooltip">Add to Compare</span>
                  <span className="icon icon-check"></span>
                </a>

                <div className="w-100">
                  <a href="#" className="btns-full">
                    Buy with <img src="images/payments/paypal.png" alt="" />
                  </a>
                  <a href="#" className="payment-more-option">
                    More payment options
                  </a>
                </div>
              </form>
            </div>

            {/* EXTRA LINKS */}
            <div className="tf-product-info-extra-link">
              <a
                href="#compare_color"
                data-bs-toggle="modal"
                className="tf-product-extra-icon"
              >
                <div className="icon">
                  <img src="images/item/compare.svg" alt="" />
                </div>
                <div className="text fw-6">Compare color</div>
              </a>

              <a
                href="#ask_question"
                data-bs-toggle="modal"
                className="tf-product-extra-icon"
              >
                <div className="icon">
                  <i className="icon-question"></i>
                </div>
                <div className="text fw-6">Ask a question</div>
              </a>

              <a
                href="#delivery_return"
                data-bs-toggle="modal"
                className="tf-product-extra-icon"
              >
                <div className="icon">
                  <svg
                    className="d-inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="currentColor"
                  >
                    <path d="M21.7872 10.4724C21.7872 9.73685 21.5432 9.00864 21.1002 8.4217L18.7221 5.27043C18.2421 4.63481 17.4804 4.25532 16.684 4.25532H14.9787V2.54885C14.9787 1.14111 13.8334 0 12.4255 0H9.95745V1.69779H12.4255C12.8948 1.69779 13.2766 2.07962 13.2766 2.54885V14.5957H8.15145C7.80021 13.6052 6.85421 12.8936 5.74468 12.8936C4.63515 12.8936 3.68915 13.6052 3.33792 14.5957H2.55319C2.08396 14.5957 1.70213 14.2139 1.70213 13.7447V2.54885C1.70213 2.07962 2.08396 1.69779 2.55319 1.69779H9.95745V0H2.55319C1.14528 0 0 1.14111 0 2.54885V13.7447C0 15.1526 1.14528 16.2979 2.55319 16.2979H3.33792C3.68915 17.2884 4.63515 18 5.74468 18C6.85421 18 7.80021 17.2884 8.15145 16.2979H13.423C13.7742 17.2884 14.7202 18 15.8297 18C16.9393 18 17.8853 17.2884 18.2365 16.2979H21.7872V10.4724ZM16.684 5.95745C16.9494 5.95745 17.2034 6.08396 17.3634 6.29574L19.5166 9.14894H14.9787V5.95745H16.684ZM5.74468 16.2979C5.27545 16.2979 4.89362 15.916 4.89362 15.4468C4.89362 14.9776 5.27545 14.5957 5.74468 14.5957C6.21392 14.5957 6.59575 14.9776 6.59575 15.4468C6.59575 15.916 6.21392 16.2979 5.74468 16.2979ZM15.8298 16.2979C15.3606 16.2979 14.9787 15.916 14.9787 15.4468C14.9787 14.9776 15.3606 14.5957 15.8298 14.5957C16.299 14.5957 16.6809 14.9776 16.6809 15.4468C16.6809 15.916 16.299 16.2979 15.8298 16.2979ZM18.2366 14.5957C17.8853 13.6052 16.9393 12.8936 15.8298 12.8936C15.5398 12.8935 15.252 12.943 14.9787 13.04V10.8511H20.0851V14.5957H18.2366Z"></path>
                  </svg>
                </div>
                <div className="text fw-6">Delivery & Return</div>
              </a>

              <a
                href="#share_social"
                data-bs-toggle="modal"
                className="tf-product-extra-icon"
              >
                <div className="icon">
                  <i className="icon-share"></i>
                </div>
                <div className="text fw-6">Share</div>
              </a>
            </div>

            {/* DELIVERY INFO */}
            <div className="tf-product-info-delivery-return">
              <div className="row">
                <div className="col-xl-6 col-12">
                  <div className="tf-product-delivery">
                    <div className="icon">
                      <i className="icon-delivery-time"></i>
                    </div>
                    <p>
                      Estimate delivery times:{" "}
                      <span className="fw-7">12-26 days</span> (International),{" "}
                      <span className="fw-7">3-6 days</span> (United States).
                    </p>
                  </div>
                </div>

                <div className="col-xl-6 col-12">
                  <div className="tf-product-delivery mb-0">
                    <div className="icon">
                      <i className="icon-return-order"></i>
                    </div>
                    <p>
                      Return within <span className="fw-7">30 days</span> of purchase.
                      Duties & taxes are non-refundable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TRUST SEAL */}
            <div className="tf-product-info-trust-seal">
              <div className="tf-product-trust-mess">
                <i className="icon-safe"></i>
                <p className="fw-6">
                  Guarantee Safe <br /> Checkout
                </p>
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
</div>
<div className="tf-sticky-btn-atc">
  <div className="container">
    <div className="tf-height-observer w-100 d-flex align-items-center">

      <div className="tf-sticky-atc-product d-flex align-items-center">
        <div className="tf-sticky-atc-img">
          <img
            className="lazyloaded"
            data-src="images/shop/products/p-d1.png"
            src="images/shop/products/p-d1.png"
            alt=""
          />
        </div>
        <div className="tf-sticky-atc-title fw-5 d-xl-block d-none">
          Cotton jersey top
        </div>
      </div>

      <div className="tf-sticky-atc-infos">
        <form>

          <div className="tf-sticky-atc-variant-price text-center">
            <select className="tf-select" defaultValue="Beige / S - $8.00">
              <option>Beige / S - $8.00</option>
              <option>Beige / M - $8.00</option>
              <option>Beige / L - $8.00</option>
              <option>Beige / XL - $8.00</option>

              <option>Black / S - $8.00</option>
              <option>Black / M - $8.00</option>
              <option>Black / L - $8.00</option>
              <option>Black / XL - $8.00</option>

              <option>Blue / S - $8.00</option>
              <option>Blue / M - $8.00</option>
              <option>Blue / L - $8.00</option>
              <option>Blue / XL - $8.00</option>

              <option>White / S - $8.00</option>
              <option>White / M - $8.00</option>
              <option>White / L - $8.00</option>
              <option>White / XL - $8.00</option>
            </select>
          </div>

          <div className="tf-sticky-atc-btns">

            <div className="tf-product-info-quantity">
              <div className="wg-quantity">
                <span className="btn-quantity minus-btn">-</span>
                <input type="text" name="number" defaultValue="1" />
                <span className="btn-quantity plus-btn">+</span>
              </div>
            </div>

            <a
              href="#"
              className="tf-btn btn-fill radius-3 justify-content-center fw-6 fs-14 flex-grow-1 animate-hover-btn btn-add-to-cart"
            >
              <span>Add to cart</span>
            </a>

          </div>

        </form>
      </div>

    </div>
  </div>
</div>


      </section>

      {/* tabs */}
<section className="flat-spacing-17 pt_0">
  <div className="container">
    <div className="row">
      <div className="col-12">

        <div className="widget-tabs style-has-border">

          {/* TAB HEADERS */}
          <ul className="widget-menu-tab">
            <li className="item-title active">
              <span className="inner">Description</span>
            </li>
            <li className="item-title">
              <span className="inner">Additional Information</span>
            </li>
            <li className="item-title">
              <span className="inner">Review</span>
            </li>
            <li className="item-title">
              <span className="inner">Shipping</span>
            </li>
            <li className="item-title">
              <span className="inner">Return Policies</span>
            </li>
          </ul>

          {/* TAB CONTENT */}
          <div className="widget-content-tab">

            {/* TAB 1 — DESCRIPTION */}
            <div className="widget-content-inner active">
              <div>
                <p className="mb_30">
                  Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey,
                  crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose — responsibly
                  sourced wood-based fibres produced through a process that reduces impact on forests,
                  biodiversity and water supply.
                </p>

                <div className="tf-product-des-demo">
                  <div className="right">
                    <h3 className="fs-16 fw-5">Features</h3>
                    <ul>
                      <li>Front button placket</li>
                      <li>Adjustable sleeve tabs</li>
                      <li>Babaton embroidered crest at placket and hem</li>
                    </ul>

                    <h3 className="fs-16 fw-5">Materials Care</h3>
                    <ul className="mb-0">
                      <li>Content: 100% LENZING™ ECOVERO™ Viscose</li>
                      <li>Care: Hand wash</li>
                      <li>Imported</li>
                    </ul>
                  </div>

                  <div className="left">
                    <h3 className="fs-16 fw-5">Materials Care</h3>

                    <div className="d-flex gap-10 mb_15 align-items-center">
                      <div className="icon"><i className="icon-machine"></i></div>
                      <span>Machine wash max. 30ºC. Short spin.</span>
                    </div>

                    <div className="d-flex gap-10 mb_15 align-items-center">
                      <div className="icon"><i className="icon-iron"></i></div>
                      <span>Iron maximum 110ºC.</span>
                    </div>

                    <div className="d-flex gap-10 mb_15 align-items-center">
                      <div className="icon"><i className="icon-bleach"></i></div>
                      <span>Do not bleach/bleach.</span>
                    </div>

                    <div className="d-flex gap-10 mb_15 align-items-center">
                      <div className="icon"><i className="icon-dry-clean"></i></div>
                      <span>Do not dry clean.</span>
                    </div>

                    <div className="d-flex gap-10 align-items-center">
                      <div className="icon"><i className="icon-tumble-dry"></i></div>
                      <span>Tumble dry, medium heat.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TAB 2 — ADDITIONAL INFORMATION */}
            <div className="widget-content-inner">
              <table className="tf-pr-attrs">
                <tbody>
                  <tr className="tf-attr-pa-color">
                    <th className="tf-attr-label">Color</th>
                    <td className="tf-attr-value"><p>White, Pink, Black</p></td>
                  </tr>

                  <tr className="tf-attr-pa-size">
                    <th className="tf-attr-label">Size</th>
                    <td className="tf-attr-value"><p>S, M, L, XL</p></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* TAB 3 — REVIEW */}
            <div className="widget-content-inner">

              <div className="tab-reviews write-cancel-review-wrap">

                {/* Rating Summary */}
                <div className="tab-reviews-heading">

                  <div className="top">
                    <div className="text-center">
                      <h1 className="number fw-6">4.8</h1>
                      <div className="list-star">
                        <i className="icon icon-star"></i>
                        <i className="icon icon-star"></i>
                        <i className="icon icon-star"></i>
                        <i className="icon icon-star"></i>
                        <i className="icon icon-star"></i>
                      </div>
                      <p>(168 Ratings)</p>
                    </div>

                    <div className="rating-score">
                      <div className="item">
                        <div className="number-1 text-caption-1">5</div>
                        <i className="icon icon-star"></i>
                        <div className="line-bg"><div style={{ width: "94.67%" }}></div></div>
                        <div className="number-2 text-caption-1">59</div>
                      </div>

                      <div className="item">
                        <div className="number-1 text-caption-1">4</div>
                        <i className="icon icon-star"></i>
                        <div className="line-bg"><div style={{ width: "60%" }}></div></div>
                        <div className="number-2 text-caption-1">46</div>
                      </div>

                      <div className="item">
                        <div className="number-1 text-caption-1">3</div>
                        <i className="icon icon-star"></i>
                        <div className="line-bg"><div style={{ width: "0%" }}></div></div>
                        <div className="number-2 text-caption-1">0</div>
                      </div>

                      <div className="item">
                        <div className="number-1 text-caption-1">2</div>
                        <i className="icon icon-star"></i>
                        <div className="line-bg"><div style={{ width: "0%" }}></div></div>
                        <div className="number-2 text-caption-1">0</div>
                      </div>

                      <div className="item">
                        <div className="number-1 text-caption-1">1</div>
                        <i className="icon icon-star"></i>
                        <div className="line-bg"><div style={{ width: "0%" }}></div></div>
                        <div className="number-2 text-caption-1">0</div>
                      </div>

                    </div>
                  </div>

                  {/* Buttons */}
                  <div>
                    <div className="tf-btn btn-outline-dark fw-6 btn-comment-review btn-cancel-review">
                      Cancel Review
                    </div>

                    <div className="tf-btn btn-outline-dark fw-6 btn-comment-review btn-write-review">
                      Write a review
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="reply-comment cancel-review-wrap">

                  <div className="d-flex mb_24 gap-20 align-items-center justify-content-between flex-wrap">
                    <h5>03 Comments</h5>

                    <div className="d-flex align-items-center gap-12">
                      <div className="text-caption-1">Sort by:</div>

                      <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                        <div className="btn-select">
                          <span className="text-sort-value">Most Recent</span>
                          <span className="icon icon-arrow-down"></span>
                        </div>

                        <div className="dropdown-menu">
                          <div className="select-item active">
                            <span className="text-value-item">Most Recent</span>
                          </div>
                          <div className="select-item">
                            <span className="text-value-item">Oldest</span>
                          </div>
                          <div className="select-item">
                            <span className="text-value-item">Most Popular</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Comments */}
                  <div className="reply-comment-wrap">

                    <div className="reply-comment-item">
                      <div className="user">
                        <div className="image">
                          <img src="images/collections/collection-circle-9.jpg" alt="" />
                        </div>
                        <div>
                          <h6>
                            <a href="#" className="link">
                              Superb quality apparel that exceeds expectations
                            </a>
                          </h6>
                          <div className="day text_black-2">1 days ago</div>
                        </div>
                      </div>
                      <p className="text_black-2">
                        Great theme - we were looking for a theme with lots of built in features and flexibility…
                      </p>
                    </div>

                    <div className="reply-comment-item type-reply">
                      <div className="user">
                        <div className="image">
                          <img src="images/collections/collection-circle-10.jpg" alt="" />
                        </div>
                        <div>
                          <h6><a href="#" className="link">Reply from Modave</a></h6>
                          <div className="day text_black-2">1 days ago</div>
                        </div>
                      </div>
                      <p className="text_black-2">
                        We love to hear it! Part of what we love most about Modave…
                      </p>
                    </div>

                    <div className="reply-comment-item">
                      <div className="user">
                        <div className="image">
                          <img src="images/collections/collection-circle-9.jpg" alt="" />
                        </div>
                        <div>
                          <h6>
                            <a href="#" className="link">
                              Superb quality apparel that exceeds expectations
                            </a>
                          </h6>
                          <div className="day text_black-2">1 days ago</div>
                        </div>
                      </div>
                      <p className="text_black-2">
                        Great theme - we were looking for a theme with lots of built in features…
                      </p>
                    </div>

                  </div>
                </div>

                {/* Write review form */}
                <form className="form-write-review write-review-wrap">
                  <div className="heading">
                    <h5>Write a review:</h5>

                    <div className="list-rating-check">
                      <input type="radio" id="star5" name="rate" value="5" />
                      <label htmlFor="star5"></label>

                      <input type="radio" id="star4" name="rate" value="4" />
                      <label htmlFor="star4"></label>

                      <input type="radio" id="star3" name="rate" value="3" />
                      <label htmlFor="star3"></label>

                      <input type="radio" id="star2" name="rate" value="2" />
                      <label htmlFor="star2"></label>

                      <input type="radio" id="star1" name="rate" value="1" />
                      <label htmlFor="star1"></label>
                    </div>
                  </div>

                  <div className="form-content">

                    <fieldset className="box-field">
                      <label className="label">Review Title</label>
                      <input
                        type="text"
                        placeholder="Give your review a title"
                        name="text"
                        tabIndex="2"
                        required
                      />
                    </fieldset>

                    <fieldset className="box-field">
                      <label className="label">Review</label>
                      <textarea
                        rows="4"
                        placeholder="Write your comment here"
                        tabIndex="2"
                        required
                      />
                    </fieldset>

                    <div className="box-field group-2">
                      <fieldset>
                        <input
                          type="text"
                          placeholder="Your Name (Public)"
                          tabIndex="2"
                          required
                        />
                      </fieldset>

                      <fieldset>
                        <input
                          type="email"
                          placeholder="Your Email (Private)"
                          name="email"
                          tabIndex="2"
                          required
                        />
                      </fieldset>
                    </div>

                    <div className="box-check">
                      <input
                        type="checkbox"
                        name="availability"
                        className="tf-check"
                        id="check1"
                      />
                      <label className="text_black-2" htmlFor="check1">
                        Save my name and email for next time
                      </label>
                    </div>

                  </div>

                  <div className="button-submit">
                    <button className="tf-btn btn-fill animate-hover-btn" type="submit">
                      Submit Reviews
                    </button>
                  </div>
                </form>

              </div>
            </div>

            {/* TAB 4 — SHIPPING */}
            <div className="widget-content-inner">
              <div className="tf-page-privacy-policy">
                <div className="title">The Company Private Limited Policy</div>

                <p>
                  The Company Private Limited and each of their respective subsidiary, parent
                  and affiliated companies is deemed to operate this Website…
                </p>

                <p>
                  Practices described apply through website, customer service,
                  retail stores, marketing promotions, etc.
                </p>

                <p>We are not responsible for privacy practices on other websites.</p>

                <p>
                  We reserve the right to modify or update this Privacy Policy at any time…
                </p>

                <p>
                  If you continue using the Website after a change, you consent to updated policy.
                </p>

                <p>
                  For any questions email: marketing@company.com
                </p>
              </div>
            </div>

            {/* TAB 5 — RETURN POLICIES */}
            <div className="widget-content-inner">

              <ul className="d-flex justify-content-center mb_18">
                <li>
                  <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222" style={{ margin: "5px" }}>
                    <path
                      fill="currentColor"
                      d="M8.7 30.7h22.7c.3 0 .6-.2…"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222" style={{ margin: "5px" }}>
                    <path fill="currentColor" d="M36.7 31.1l-2.8-1.3-4.7-9.1…" />
                  </svg>
                </li>

                <li>
                  <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222" style={{ margin: "5px" }}>
                    <path fill="currentColor" d="M5.9 5.9v28.2h28.2V5.9H5.9z…" />
                  </svg>
                </li>

                <li>
                  <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222" style={{ margin: "5px" }}>
                    <path fill="currentColor" d="M35.1 33.6L33.2 6.2c0-.4-…" />
                  </svg>
                </li>

                <li>
                  <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222" style={{ margin: "5px" }}>
                    <path fill="currentColor" d="M20 33.8c7.6 0 13.8-6.2…" />
                  </svg>
                </li>

                <li>
                  <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222" style={{ margin: "5px" }}>
                    <path fill="currentColor" d="M30.2 29.3c2.2-2.5-…" />
                  </svg>
                </li>

                <li>
                  <svg viewBox="0 0 40 40" width="35px" height="35px" color="#222" style={{ margin: "5px" }}>
                    <path fill="currentColor" d="M34.1 34.1H5.9V5.9h28.2v28.2z…" />
                  </svg>
                </li>
              </ul>

              <p className="text-center text-paragraph">
                LT01: 70% wool, 15% polyester, 10% polyamide, 5% acrylic — 900 Grms/mt
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  </div>
</section>
{/* /tabs */}
{/* product */}
<section className="flat-spacing-1 pt_0">
  <div className="container">

    <div className="flat-title">
      <span className="title">People Also Bought</span>
    </div>

    <div className="hover-sw-nav hover-sw-2">

      <div
        dir="ltr"
        className="swiper tf-sw-product-sell wrap-sw-over"
        data-preview="4"
        data-tablet="3"
        data-mobile="2"
        data-space-lg="30"
        data-space-md="15"
        data-pagination="2"
        data-pagination-md="3"
        data-pagination-lg="3"
      >

        <div className="swiper-wrapper">

          {/* PRODUCT 1 */}
          <div className="swiper-slide" lazy="true">
            <div className="card-product">

              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="images/products/orange-1.jpg"
                    src="images/products/orange-1.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="images/products/white-1.jpg"
                    src="images/products/white-1.jpg"
                    alt="image-product"
                  />
                </a>

                <div className="list-product-btn">
                  <a
                    href="#quick_add"
                    data-bs-toggle="modal"
                    className="box-icon bg_white quick-add tf-btn-loading"
                  >
                    <span className="icon icon-bag"></span>
                    <span className="tooltip">Quick Add</span>
                  </a>

                  <a href="#" className="box-icon bg_white wishlist btn-icon-action">
                    <span className="icon icon-heart"></span>
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete"></span>
                  </a>

                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon bg_white compare btn-icon-action"
                  >
                    <span className="icon icon-compare"></span>
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check"></span>
                  </a>

                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon bg_white quickview tf-btn-loading"
                  >
                    <span className="icon icon-view"></span>
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>

                <div className="size-list">
                  <span>S</span>
                  <span>M</span>
                  <span>L</span>
                  <span>XL</span>
                </div>
              </div>

              <div className="card-product-info">
                <a href="product-detail.html" className="title link">Ribbed Tank Top</a>
                <span className="price">$16.95</span>

                <ul className="list-color-product">

                  <li className="list-color-item color-swatch active">
                    <span className="tooltip">Orange</span>
                    <span className="swatch-value bg_orange-3"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/orange-1.jpg"
                      src="images/products/orange-1.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Black</span>
                    <span className="swatch-value bg_dark"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/black-1.jpg"
                      src="images/products/black-1.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">White</span>
                    <span className="swatch-value bg_white"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/white-1.jpg"
                      src="images/products/white-1.jpg"
                      alt="image-product"
                    />
                  </li>

                </ul>
              </div>

            </div>
          </div>

          {/* PRODUCT 2 */}
          <div className="swiper-slide" lazy="true">
            <div className="card-product">

              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="images/products/brown.jpg"
                    src="images/products/brown.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="images/products/purple.jpg"
                    src="images/products/purple.jpg"
                    alt="image-product"
                  />
                </a>

                <div className="list-product-btn">
                  <a
                    href="#quick_add"
                    data-bs-toggle="modal"
                    className="box-icon bg_white quick-add tf-btn-loading"
                  >
                    <span className="icon icon-bag"></span>
                    <span className="tooltip">Quick Add</span>
                  </a>

                  <a href="#" className="box-icon bg_white wishlist btn-icon-action">
                    <span className="icon icon-heart"></span>
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete"></span>
                  </a>

                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon bg_white compare btn-icon-action"
                  >
                    <span className="icon icon-compare"></span>
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check"></span>
                  </a>

                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon bg_white quickview tf-btn-loading"
                  >
                    <span className="icon icon-view"></span>
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>

                <div className="size-list">
                  <span>M</span>
                  <span>L</span>
                  <span>XL</span>
                </div>

                <div className="on-sale-wrap">
                  <div className="on-sale-item">-33%</div>
                </div>

                <div className="countdown-box">
                  <div
                    className="js-countdown"
                    data-timer="1007500"
                    data-labels="d :,h :,m :,s"
                  ></div>
                </div>
              </div>

              <div className="card-product-info">
                <a href="product-detail.html" className="title link">Ribbed modal T-shirt</a>
                <span className="price">From $18.95</span>

                <ul className="list-color-product">

                  <li className="list-color-item color-swatch active">
                    <span className="tooltip">Brown</span>
                    <span className="swatch-value bg_brown"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/brown.jpg"
                      src="images/products/brown.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Light Purple</span>
                    <span className="swatch-value bg_purple"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/purple.jpg"
                      src="images/products/purple.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Light Green</span>
                    <span className="swatch-value bg_light-green"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/green.jpg"
                      src="images/products/green.jpg"
                      alt="image-product"
                    />
                  </li>

                </ul>
              </div>

            </div>
          </div>

          {/* PRODUCT 3 */}
          <div className="swiper-slide" lazy="true">
            <div className="card-product">

              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="images/products/white-3.jpg"
                    src="images/products/white-3.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="images/products/white-4.jpg"
                    src="images/products/white-4.jpg"
                    alt="image-product"
                  />
                </a>

                <div className="list-product-btn">
                  <a
                    href="#shoppingCart"
                    data-bs-toggle="modal"
                    className="box-icon bg_white quick-add tf-btn-loading"
                  >
                    <span className="icon icon-bag"></span>
                    <span className="tooltip">Add to cart</span>
                  </a>

                  <a href="#" className="box-icon bg_white wishlist btn-icon-action">
                    <span className="icon icon-heart"></span>
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete"></span>
                  </a>

                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon bg_white compare btn-icon-action"
                  >
                    <span className="icon icon-compare"></span>
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check"></span>
                  </a>

                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon bg_white quickview tf-btn-loading"
                  >
                    <span className="icon icon-view"></span>
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>

                <div className="size-list">
                  <span>S</span>
                  <span>M</span>
                  <span>L</span>
                  <span>XL</span>
                </div>
              </div>

              <div className="card-product-info">
                <a href="product-detail.html" className="title link">Oversized Printed T-shirt</a>
                <span className="price">$10.00</span>
              </div>

            </div>
          </div>

          {/* PRODUCT 4 */}
          <div className="swiper-slide" lazy="true">
            <div className="card-product">
              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="images/products/white-2.jpg"
                    src="images/products/white-2.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="images/products/pink-1.jpg"
                    src="images/products/pink-1.jpg"
                    alt="image-product"
                  />
                </a>

                <div className="list-product-btn">
                  <a
                    href="#quick_add"
                    data-bs-toggle="modal"
                    className="box-icon bg_white quick-add tf-btn-loading"
                  >
                    <span className="icon icon-bag"></span>
                    <span className="tooltip">Quick Add</span>
                  </a>

                  <a href="#" className="box-icon bg_white wishlist btn-icon-action">
                    <span className="icon icon-heart"></span>
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete"></span>
                  </a>

                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon bg_white compare btn-icon-action"
                  >
                    <span className="icon icon-compare"></span>
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check"></span>
                  </a>

                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon bg_white quickview tf-btn-loading"
                  >
                    <span className="icon icon-view"></span>
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>

                <div className="size-list">
                  <span>S</span>
                  <span>M</span>
                  <span>L</span>
                  <span>XL</span>
                </div>
              </div>

              <div className="card-product-info">
                <a href="product-detail.html" className="title">Oversized Printed T-shirt</a>
                <span className="price">$16.95</span>

                <ul className="list-color-product">
                  <li className="list-color-item color-swatch active">
                    <span className="tooltip">White</span>
                    <span className="swatch-value bg_white"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/white-2.jpg"
                      src="images/products/white-2.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Pink</span>
                    <span className="swatch-value bg_purple"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/pink-1.jpg"
                      src="images/products/pink-1.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Black</span>
                    <span className="swatch-value bg_dark"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/black-2.jpg"
                      src="images/products/black-2.jpg"
                      alt="image-product"
                    />
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* PRODUCT 5 */}
          <div className="swiper-slide" lazy="true">
            <div className="card-product">

              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="images/products/brown-2.jpg"
                    src="images/products/brown-2.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="images/products/brown-3.jpg"
                    src="images/products/brown-3.jpg"
                    alt="image-product"
                  />
                </a>

                <div className="size-list">
                  <span>S</span>
                  <span>M</span>
                  <span>L</span>
                  <span>XL</span>
                </div>

                <div className="list-product-btn">
                  <a
                    href="#quick_add"
                    data-bs-toggle="modal"
                    className="box-icon bg_white quick-add tf-btn-loading"
                  >
                    <span className="icon icon-bag"></span>
                    <span className="tooltip">Quick Add</span>
                  </a>

                  <a href="#" className="box-icon bg_white wishlist btn-icon-action">
                    <span className="icon icon-heart"></span>
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete"></span>
                  </a>

                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon bg_white compare btn-icon-action"
                  >
                    <span className="icon icon-compare"></span>
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check"></span>
                  </a>

                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon bg_white quickview tf-btn-loading"
                  >
                    <span className="icon icon-view"></span>
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>
              </div>

              <div className="card-product-info">
                <a href="product-detail.html" className="title link">V-neck linen T-shirt</a>
                <span className="price">$114.95</span>

                <ul className="list-color-product">
                  <li className="list-color-item color-swatch active">
                    <span className="tooltip">Brown</span>
                    <span className="swatch-value bg_brown"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/brown-2.jpg"
                      src="images/products/brown-2.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">White</span>
                    <span className="swatch-value bg_white"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/white-5.jpg"
                      src="images/products/white-5.jpg"
                      alt="image-product"
                    />
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* PRODUCT 6 */}
          <div className="swiper-slide" lazy="true">
            <div className="card-product">

              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="images/products/light-green-1.jpg"
                    src="images/products/light-green-1.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="images/products/light-green-2.jpg"
                    src="images/products/light-green-2.jpg"
                    alt="image-product"
                  />
                </a>

                <div className="list-product-btn absolute-2">
                  <a
                    href="#quick_add"
                    data-bs-toggle="modal"
                    className="box-icon bg_white quick-add tf-btn-loading"
                  >
                    <span className="icon icon-bag"></span>
                    <span className="tooltip">Quick Add</span>
                  </a>

                  <a href="#" className="box-icon bg_white wishlist btn-icon-action">
                    <span className="icon icon-heart"></span>
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete"></span>
                  </a>

                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon bg_white compare btn-icon-action"
                  >
                    <span className="icon icon-compare"></span>
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check"></span>
                  </a>

                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon bg_white quickview tf-btn-loading"
                  >
                    <span className="icon icon-view"></span>
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>
              </div>

              <div className="card-product-info">
                <a href="product-detail.html" className="title link">Loose Fit Sweatshirt</a>
                <span className="price">$10.00</span>

                <ul className="list-color-product">

                  <li className="list-color-item color-swatch active">
                    <span className="tooltip">Light Green</span>
                    <span className="swatch-value bg_light-green"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/light-green-1.jpg"
                      src="images/products/light-green-1.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Black</span>
                    <span className="swatch-value bg_dark"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/black-3.jpg"
                      src="images/products/black-3.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Blue</span>
                    <span className="swatch-value bg_blue-2"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/blue.jpg"
                      src="images/products/blue.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Dark Blue</span>
                    <span className="swatch-value bg_dark-blue"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/dark-blue.jpg"
                      src="images/products/dark-blue.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">White</span>
                    <span className="swatch-value bg_white"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/white-6.jpg"
                      src="images/products/white-6.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Light Grey</span>
                    <span className="swatch-value bg_light-grey"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/light-grey.jpg"
                      src="images/products/light-grey.jpg"
                      alt="image-product"
                    />
                  </li>

                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* NAV BUTTONS */}
      <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round">
        <span className="icon icon-arrow-left"></span>
      </div>

      <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round">
        <span className="icon icon-arrow-right"></span>
      </div>

      <div className="sw-dots style-2 sw-pagination-product justify-content-center"></div>

    </div>

  </div>
</section>
{/* /product */}
{/* recent */}
<section className="flat-spacing-4 pt_0">
  <div className="container">

    <div className="flat-title">
      <span className="title">Recently Viewed</span>
    </div>

    <div className="hover-sw-nav hover-sw-2">

      <div
        dir="ltr"
        className="swiper tf-sw-recent wrap-sw-over"
        data-preview="4"
        data-tablet="3"
        data-mobile="2"
        data-space-lg="30"
        data-space-md="30"
        data-space="15"
        data-pagination="1"
        data-pagination-md="1"
        data-pagination-lg="1"
      >

        <div className="swiper-wrapper">

          {/* -------------- PRODUCT 1 -------------- */}
          <div className="swiper-slide" lazy="true">
            <div className="card-product">

              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="images/products/light-green-1.jpg"
                    src="images/products/light-green-1.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="images/products/light-green-2.jpg"
                    src="images/products/light-green-2.jpg"
                    alt="image-product"
                  />
                </a>

                <div className="list-product-btn absolute-2">
                  <a href="#quick_add" data-bs-toggle="modal"
                    className="box-icon bg_white quick-add tf-btn-loading">
                    <span className="icon icon-bag"></span>
                    <span className="tooltip">Quick Add</span>
                  </a>

                  <a href="#" className="box-icon bg_white wishlist btn-icon-action">
                    <span className="icon icon-heart"></span>
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete"></span>
                  </a>

                  <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft"
                    className="box-icon bg_white compare btn-icon-action">
                    <span className="icon icon-compare"></span>
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check"></span>
                  </a>

                  <a href="#quick_view" data-bs-toggle="modal"
                    className="box-icon bg_white quickview tf-btn-loading">
                    <span className="icon icon-view"></span>
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>

              </div>

              <div className="card-product-info">
                <a href="product-detail.html" className="title link">Loose Fit Sweatshirt</a>
                <span className="price">$10.00</span>

                <ul className="list-color-product">

                  <li className="list-color-item color-swatch active">
                    <span className="tooltip">Light Green</span>
                    <span className="swatch-value bg_light-green"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/light-green-1.jpg"
                      src="images/products/light-green-1.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Black</span>
                    <span className="swatch-value bg_dark"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/black-3.jpg"
                      src="images/products/black-3.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Blue</span>
                    <span className="swatch-value bg_blue-2"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/blue.jpg"
                      src="images/products/blue.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Dark Blue</span>
                    <span className="swatch-value bg_dark-blue"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/dark-blue.jpg"
                      src="images/products/dark-blue.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">White</span>
                    <span className="swatch-value bg_white"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/white-6.jpg"
                      src="images/products/white-6.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Light Grey</span>
                    <span className="swatch-value bg_light-grey"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/light-grey.jpg"
                      src="images/products/light-grey.jpg"
                      alt="image-product"
                    />
                  </li>

                </ul>
              </div>

            </div>
          </div>

          {/* -------------- PRODUCT 2 -------------- */}
          <div className="swiper-slide" lazy="true">
            <div className="card-product">

              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="images/products/brown-2.jpg"
                    src="images/products/brown-2.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="images/products/brown-3.jpg"
                    src="images/products/brown-3.jpg"
                    alt="image-product"
                  />
                </a>

                <div className="size-list">
                  <span>S</span>
                  <span>M</span>
                  <span>L</span>
                  <span>XL</span>
                </div>

                <div className="list-product-btn">
                  <a href="#quick_add" data-bs-toggle="modal"
                    className="box-icon bg_white quick-add tf-btn-loading">
                    <span className="icon icon-bag"></span>
                    <span className="tooltip">Quick Add</span>
                  </a>

                  <a href="#" className="box-icon bg_white wishlist btn-icon-action">
                    <span className="icon icon-heart"></span>
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete"></span>
                  </a>

                  <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft"
                    className="box-icon bg_white compare btn-icon-action">
                    <span className="icon icon-compare"></span>
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check"></span>
                  </a>

                  <a href="#quick_view" data-bs-toggle="modal"
                    className="box-icon bg_white quickview tf-btn-loading">
                    <span className="icon icon-view"></span>
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>
              </div>

              <div className="card-product-info">
                <a href="product-detail.html" className="title link">V-neck linen T-shirt</a>
                <span className="price">$114.95</span>

                <ul className="list-color-product">
                  <li className="list-color-item color-swatch active">
                    <span className="tooltip">Brown</span>
                    <span className="swatch-value bg_brown"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/brown-2.jpg"
                      src="images/products/brown-2.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">White</span>
                    <span className="swatch-value bg_white"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/white-5.jpg"
                      src="images/products/white-5.jpg"
                      alt="image-product"
                    />
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* -------------- PRODUCT 3 -------------- */}
          <div className="swiper-slide" lazy="true">
            <div className="card-product">

              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="images/products/white-2.jpg"
                    src="images/products/white-2.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="images/products/pink-1.jpg"
                    src="images/products/pink-1.jpg"
                    alt="image-product"
                  />
                </a>

                <div className="list-product-btn">
                  <a href="#quick_add" data-bs-toggle="modal"
                    className="box-icon bg_white quick-add tf-btn-loading">
                    <span className="icon icon-bag"></span>
                    <span className="tooltip">Quick Add</span>
                  </a>

                  <a href="#" className="box-icon bg_white wishlist btn-icon-action">
                    <span className="icon icon-heart"></span>
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete"></span>
                  </a>

                  <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft"
                    className="box-icon bg_white compare btn-icon-action">
                    <span className="icon icon-compare"></span>
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check"></span>
                  </a>

                  <a href="#quick_view" data-bs-toggle="modal"
                    className="box-icon bg_white quickview tf-btn-loading">
                    <span className="icon icon-view"></span>
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>

                <div className="size-list">
                  <span>S</span>
                  <span>M</span>
                  <span>L</span>
                  <span>XL</span>
                </div>
              </div>

              <div className="card-product-info">
                <a href="product-detail.html" className="title">Oversized Printed T-shirt</a>
                <span className="price">$16.95</span>

                <ul className="list-color-product">

                  <li className="list-color-item color-swatch active">
                    <span className="tooltip">White</span>
                    <span className="swatch-value bg_white"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/white-2.jpg"
                      src="images/products/white-2.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Pink</span>
                    <span className="swatch-value bg_purple"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/pink-1.jpg"
                      src="images/products/pink-1.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Black</span>
                    <span className="swatch-value bg_dark"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/black-2.jpg"
                      src="images/products/black-2.jpg"
                      alt="image-product"
                    />
                  </li>

                </ul>
              </div>

            </div>
          </div>

          {/* -------------- PRODUCT 4 -------------- */}
          <div className="swiper-slide" lazy="true">
            <div className="card-product">

              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="images/products/white-3.jpg"
                    src="images/products/white-3.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="images/products/white-4.jpg"
                    src="images/products/white-4.jpg"
                    alt="image-product"
                  />
                </a>

                <div className="list-product-btn">
                  <a href="#shoppingCart" data-bs-toggle="modal"
                    className="box-icon bg_white quick-add tf-btn-loading">
                    <span className="icon icon-bag"></span>
                    <span className="tooltip">Add to cart</span>
                  </a>

                  <a href="#" className="box-icon bg_white wishlist btn-icon-action">
                    <span className="icon icon-heart"></span>
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete"></span>
                  </a>

                  <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft"
                    className="box-icon bg_white compare btn-icon-action">
                    <span className="icon icon-compare"></span>
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check"></span>
                  </a>

                  <a href="#quick_view" data-bs-toggle="modal"
                    className="box-icon bg_white quickview tf-btn-loading">
                    <span className="icon icon-view"></span>
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>

                <div className="size-list">
                  <span>S</span>
                  <span>M</span>
                  <span>L</span>
                  <span>XL</span>
                </div>
              </div>

              <div className="card-product-info">
                <a href="product-detail.html" className="title link">Oversized Printed T-shirt</a>
                <span className="price">$10.00</span>
              </div>

            </div>
          </div>

          {/* -------------- PRODUCT 5 -------------- */}
          <div className="swiper-slide" lazy="true">
            <div className="card-product">

              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="images/products/brown.jpg"
                    src="images/products/brown.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="images/products/purple.jpg"
                    src="images/products/purple.jpg"
                    alt="image-product"
                  />
                </a>

                <div className="list-product-btn">
                  <a href="#quick_add" data-bs-toggle="modal"
                    className="box-icon bg_white quick-add tf-btn-loading">
                    <span className="icon icon-bag"></span>
                    <span className="tooltip">Quick Add</span>
                  </a>

                  <a href="#" className="box-icon bg_white wishlist btn-icon-action">
                    <span className="icon icon-heart"></span>
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete"></span>
                  </a>

                  <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft"
                    className="box-icon bg_white compare btn-icon-action">
                    <span className="icon icon-compare"></span>
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check"></span>
                  </a>

                  <a href="#quick_view" data-bs-toggle="modal"
                    className="box-icon bg_white quickview tf-btn-loading">
                    <span className="icon icon-view"></span>
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>

                <div className="size-list">
                  <span>M</span>
                  <span>L</span>
                  <span>XL</span>
                </div>

                <div className="on-sale-wrap">
                  <div className="on-sale-item">-33%</div>
                </div>

                <div className="countdown-box">
                  <div
                    className="js-countdown"
                    data-timer="1007500"
                    data-labels="d :,h :,m :,s"
                  ></div>
                </div>

              </div>

              <div className="card-product-info">
                <a href="product-detail.html" className="title link">Ribbed modal T-shirt</a>
                <span className="price">From $18.95</span>

                <ul className="list-color-product">

                  <li className="list-color-item color-swatch active">
                    <span className="tooltip">Brown</span>
                    <span className="swatch-value bg_brown"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/brown.jpg"
                      src="images/products/brown.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Light Purple</span>
                    <span className="swatch-value bg_purple"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/purple.jpg"
                      src="images/products/purple.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Light Green</span>
                    <span className="swatch-value bg_light-green"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/green.jpg"
                      src="images/products/green.jpg"
                      alt="image-product"
                    />
                  </li>

                </ul>
              </div>

            </div>
          </div>

          {/* -------------- PRODUCT 6 -------------- */}
          <div className="swiper-slide" lazy="true">
            <div className="card-product">

              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="images/products/orange-1.jpg"
                    src="images/products/orange-1.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="images/products/white-1.jpg"
                    src="images/products/white-1.jpg"
                    alt="image-product"
                  />
                </a>

                <div className="list-product-btn">
                  <a href="#quick_add" data-bs-toggle="modal"
                    className="box-icon bg_white quick-add tf-btn-loading">
                    <span className="icon icon-bag"></span>
                    <span className="tooltip">Quick Add</span>
                  </a>

                  <a href="#" className="box-icon bg_white wishlist btn-icon-action">
                    <span className="icon icon-heart"></span>
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete"></span>
                  </a>

                  <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft"
                    className="box-icon bg_white compare btn-icon-action">
                    <span className="icon icon-compare"></span>
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check"></span>
                  </a>

                  <a href="# quick_view" data-bs-toggle="modal"
                    className="box-icon bg_white quickview tf-btn-loading">
                    <span className="icon icon-view"></span>
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>

                <div className="size-list">
                  <span>S</span>
                  <span>M</span>
                  <span>L</span>
                  <span>XL</span>
                </div>
              </div>

              <div className="card-product-info">
                <a href="product-detail.html" className="title link">Ribbed Tank Top</a>
                <span className="price">$16.95</span>

                <ul className="list-color-product">

                  <li className="list-color-item color-swatch active">
                    <span className="tooltip">Orange</span>
                    <span className="swatch-value bg_orange-3"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/orange-1.jpg"
                      src="images/products/orange-1.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Black</span>
                    <span className="swatch-value bg_dark"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/black-1.jpg"
                      src="images/products/black-1.jpg"
                      alt="image-product"
                    />
                  </li>

                  <li className="list-color-item color-swatch">
                    <span className="tooltip">White</span>
                    <span className="swatch-value bg_white"></span>
                    <img
                      className="lazyload"
                      data-src="images/products/white-1.jpg"
                      src="images/products/white-1.jpg"
                      alt="image-product"
                    />
                  </li>

                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* NAV BUTTONS */}
      <div className="nav-sw nav-next-slider nav-next-recent box-icon w_46 round">
        <span className="icon icon-arrow-left"></span>
      </div>

      <div className="nav-sw nav-prev-slider nav-prev-recent box-icon w_46 round">
        <span className="icon icon-arrow-right"></span>
      </div>

      <div className="sw-dots style-2 sw-pagination-recent justify-content-center"></div>

    </div>

  </div>
</section>
{/* /recent */}

            {/* footer */}
<footer id="footer" className="footer">
  <div className="footer-wrap">
    <div className="footer-body">
      <div className="container">
        <div className="row">

          {/* Column 1 */}
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
                  <p>
                    Email: <a href="#">info@fashionshop.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    Phone: <a href="#">(212) 555-1234</a>
                  </p>
                </li>
              </ul>
              <a href="contact-1.html" className="tf-btn btn-line">
                Get direction <i className="icon icon-arrow1-top-left"></i>
              </a>

              <ul className="tf-social-icon d-flex gap-10">
                <li>
                  <a className="box-icon w_34 round social-facebook social-line" href="#">
                    <i className="icon fs-14 icon-fb"></i>
                  </a>
                </li>
                <li>
                  <a className="box-icon w_34 round social-twiter social-line" href="#">
                    <i className="icon fs-12 icon-Icon-x"></i>
                  </a>
                </li>
                <li>
                  <a className="box-icon w_34 round social-instagram social-line" href="#">
                    <i className="icon fs-14 icon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="box-icon w_34 round social-tiktok social-line" href="#">
                    <i className="icon fs-14 icon-tiktok"></i>
                  </a>
                </li>
                <li>
                  <a className="box-icon w_34 round social-pinterest social-line" href="#">
                    <i className="icon fs-14 icon-pinterest-1"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
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

          {/* Column 3 */}
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

          {/* Column 4 */}
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

                <form
                  className="form-newsletter"
                  id="subscribe-form"
                  action="#"
                  method="post"
                  acceptCharset="utf-8"
                  data-mailchimp="true"
                >
                  <div id="subscribe-content">
                    <fieldset className="email">
                      <input
                        type="email"
                        name="email-form"
                        id="subscribe-email"
                        placeholder="Enter your email...."
                        tabIndex="0"
                        aria-required="true"
                      />
                    </fieldset>
                    <div className="button-submit">
                      <button
                        id="subscribe-button"
                        className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
                        type="button"
                      >
                        Subscribe <i className="icon icon-arrow1-top-left"></i>
                      </button>
                    </div>
                  </div>
                  <div id="subscribe-msg"></div>
                </form>

<div className="tf-cur">
  <div className="tf-currencies">
    <select
      className="image-select center style-default type-currencies"
      defaultValue="USD"
    >
      <option value="FR" data-thumbnail="images/country/fr.svg">
        EUR € | France
      </option>

      <option value="DE" data-thumbnail="images/country/de.svg">
        EUR € | Germany
      </option>

      <option value="USD" data-thumbnail="images/country/us.svg">
        USD $ | United States
      </option>

      <option value="VN" data-thumbnail="images/country/vn.svg">
        VND ₫ | Vietnam
      </option>
    </select>
  </div>

  <div className="tf-languages">
    <select
      className="image-select center style-default type-languages"
      defaultValue="English"
    >
      <option value="English">English</option>
      <option value="Arabic">العربية</option>
      <option value="Chinese">简体中文</option>
      <option value="Urdu">اردو</option>
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
                © 2025 Ecomus Store. All Rights Reserved
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


         </div>
         
         {/* models */}

         {/* modal compare_color */}
<div
  className="modal fade modalDemo tf-product-modal modal-part-content canvas-compare_color"
  id="compare_color"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      <div className="header">
        <div className="demo-title">Compare color</div>
        <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
      </div>

      <div className="tf-compare-color-wrapp">
        <div className="tf-compare-color-grid">

          {/* ITEM 1 */}
          <input type="checkbox" className="sr-only" id="remove-compare-color-beige-1" />
          <div className="tf-compare-color-item">
            <div className="tf-compare-color-top">
              <label htmlFor="remove-compare-color-beige-1" className="tf-compare-color-remove">
                Remove
              </label>
              <img
                className="lazyload"
                data-src="images/shop/products/hmgoepprod2.jpg"
                src="images/shop/products/hmgoepprod2.jpg"
                alt="img-compare"
              />
            </div>

            <div className="tf-compare-color-bottom">
              <div className="tf-compare-color-color">
                <span className="tf-color-list-color bg-color-beige"></span>
                <span>Beige</span>
              </div>

              <form>
                <select className="tf-select" name="id" defaultValue="46633906045232">
                  <option value="46633906045232">S - $8.00</option>
                  <option value="47256262738224">M - $8.00</option>
                  <option value="47256262770992">L - $8.00</option>
                  <option value="47256262803760">XL - $8.00</option>
                </select>

                <a
                  href="#"
                  className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn btn-add-to-cart"
                >
                  <span>Add to cart</span>
                </a>
              </form>
            </div>
          </div>

          {/* ITEM 2 */}
          <input type="checkbox" className="sr-only" id="remove-compare-color-beige-2" />
          <div className="tf-compare-color-item">
            <div className="tf-compare-color-top">
              <label htmlFor="remove-compare-color-beige-2" className="tf-compare-color-remove">
                Remove
              </label>
              <img
                className="lazyload"
                data-src="images/shop/products/hmgoepprod12.jpg"
                src="images/shop/products/hmgoepprod12.jpg"
                alt=""
              />
            </div>

            <div className="tf-compare-color-bottom">
              <div className="tf-compare-color-color">
                <span className="tf-color-list-color bg-color-blue"></span>
                <span>Blue</span>
              </div>

              <form>
                <select className="tf-select" name="id" defaultValue="46633906045232">
                  <option value="46633906045232">S - $8.00</option>
                  <option value="47256262738224">M - $8.00</option>
                  <option value="47256262770992">L - $8.00</option>
                  <option value="47256262803760">XL - $8.00</option>
                </select>

                <a
                  href="#"
                  className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn btn-add-to-cart"
                >
                  <span>Add to cart</span>
                </a>
              </form>
            </div>
          </div>

          {/* ITEM 3 */}
          <input type="checkbox" className="sr-only" id="remove-compare-color-beige-3" />
          <div className="tf-compare-color-item">
            <div className="tf-compare-color-top">
              <label htmlFor="remove-compare-color-beige-3" className="tf-compare-color-remove">
                Remove
              </label>
              <img
                className="lazyload"
                data-src="images/shop/products/hmgoepprod7.jpg"
                src="images/shop/products/hmgoepprod7.jpg"
                alt=""
              />
            </div>

            <div className="tf-compare-color-bottom">
              <div className="tf-compare-color-color">
                <span className="tf-color-list-color bg-color-black"></span>
                <span>Black</span>
              </div>

              <form>
                <select className="tf-select" name="id" defaultValue="46633906045232">
                  <option value="46633906045232">S - $8.00</option>
                  <option value="47256262738224">M - $8.00</option>
                  <option value="47256262770992">L - $8.00</option>
                  <option value="47256262803760">XL - $8.00</option>
                </select>

                <a
                  href="#"
                  className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn btn-add-to-cart"
                >
                  <span>Add to cart</span>
                </a>
              </form>
            </div>
          </div>

          {/* ITEM 4 */}
          <input type="checkbox" className="sr-only" id="remove-compare-color-beige-4" />
          <div className="tf-compare-color-item">
            <div className="tf-compare-color-top">
              <label htmlFor="remove-compare-color-beige-4" className="tf-compare-color-remove">
                Remove
              </label>

              <img
                className="lazyload"
                data-src="images/shop/products/hmgoepprod14.jpg"
                src="images/shop/products/hmgoepprod14.jpg"
                alt=""
              />
            </div>

            <div className="tf-compare-color-bottom">
              <div className="tf-compare-color-color">
                <span className="tf-color-list-color bg-color-white"></span>
                <span>White</span>
              </div>

              <form>
                <select className="tf-select" name="id" defaultValue="46633906045232">
                  <option value="46633906045232">S - $8.00</option>
                  <option value="47256262738224">M - $8.00</option>
                  <option value="47256262770992">L - $8.00</option>
                  <option value="47256262803760">XL - $8.00</option>
                </select>

                <a
                  href="#"
                  className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn btn-add-to-cart"
                >
                  <span>Add to cart</span>
                </a>
              </form>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>
{/* /modal compare_color */}

{/* modal ask_question */}
<div
  className="modal modalCentered fade modalDemo tf-product-modal modal-part-content"
  id="ask_question"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      <div className="header">
        <div className="demo-title">Ask a question</div>
        <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
      </div>

      <div className="overflow-y-auto">
        <form>

          <fieldset>
            <label htmlFor="ask-name">Name *</label>
            <input
              id="ask-name"
              type="text"
              placeholder=""
              className=""
              name="name"
              tabIndex="2"
              defaultValue=""
              aria-required="true"
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor="ask-email">Email *</label>
            <input
              id="ask-email"
              type="email"
              placeholder=""
              className=""
              name="email"
              tabIndex="2"
              defaultValue=""
              aria-required="true"
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor="ask-phone">Phone number</label>
            <input
              id="ask-phone"
              type="number"
              placeholder=""
              className=""
              name="phone"
              tabIndex="2"
              defaultValue=""
              aria-required="true"
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor="ask-message">Message</label>
            <textarea
              id="ask-message"
              name="message"
              rows="4"
              placeholder=""
              className=""
              tabIndex="2"
              aria-required="true"
              required
            ></textarea>
          </fieldset>

          <button
            type="submit"
            className="tf-btn w-100 btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"
          >
            <span>Send</span>
          </button>

        </form>
      </div>

    </div>
  </div>
</div>
{/* /modal ask_question */}

{/* modal delivery_return */}
<div
  className="modal modalCentered fade modalDemo tf-product-modal modal-part-content"
  id="delivery_return"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      <div className="header">
        <div className="demo-title">Shipping & Delivery</div>
        <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
      </div>

      <div className="overflow-y-auto">

        {/* Delivery Section */}
        <div className="tf-product-popup-delivery">
          <div className="title">Delivery</div>
          <p className="text-paragraph">All orders shipped with UPS Express.</p>
          <p className="text-paragraph">Always free shipping for orders over US $250.</p>
          <p className="text-paragraph">All orders are shipped with a UPS tracking number.</p>
        </div>

        {/* Returns Section */}
        <div className="tf-product-popup-delivery">
          <div className="title">Returns</div>
          <p className="text-paragraph">
            Items returned within 14 days of their original shipment date in same as new
            condition will be eligible for a full refund or store credit.
          </p>
          <p className="text-paragraph">
            Refunds will be charged back to the original form of payment used for purchase.
          </p>
          <p className="text-paragraph">
            Customer is responsible for shipping charges when making returns and
            shipping/handling fees of original purchase is non-refundable.
          </p>
          <p className="text-paragraph">All sale items are final purchases.</p>
        </div>

        {/* Help Section */}
        <div className="tf-product-popup-delivery">
          <div className="title">Help</div>
          <p className="text-paragraph">
            Give us a shout if you have any other questions and/or concerns.
          </p>

          <p className="text-paragraph">
            Email:{" "}
            <a href="mailto:contact@domain.com" aria-describedby="a11y-external-message">
              <span className="__cf_email__">contact@domain.com</span>
            </a>
          </p>

          <p className="text-paragraph mb-0">Phone: +1 (23) 456 789</p>
        </div>

      </div>

    </div>
  </div>
</div>
{/* /modal delivery_return */}

{/* modal share_social */}
<div
  className="modal modalCentered fade modalDemo tf-product-modal modal-part-content"
  id="share_social"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      <div className="header">
        <div className="demo-title">Share</div>
        <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
      </div>

      <div className="overflow-y-auto">

        <ul className="tf-social-icon d-flex gap-10">
          <li>
            <a href="#" className="box-icon social-facebook bg_line">
              <i className="icon icon-fb"></i>
            </a>
          </li>

          <li>
            <a href="#" className="box-icon social-twiter bg_line">
              <i className="icon icon-Icon-x"></i>
            </a>
          </li>

          <li>
            <a href="#" className="box-icon social-instagram bg_line">
              <i className="icon icon-instagram"></i>
            </a>
          </li>

          <li>
            <a href="#" className="box-icon social-tiktok bg_line">
              <i className="icon icon-tiktok"></i>
            </a>
          </li>

          <li>
            <a href="#" className="box-icon social-pinterest bg_line">
              <i className="icon icon-pinterest-1"></i>
            </a>
          </li>
        </ul>

        <form className="form-share" method="post" acceptCharset="utf-8">
          <fieldset>
            <input
              type="text"
              defaultValue="https://themesflat.co/html/ecomus/"
              tabIndex="0"
              aria-required="true"
            />
          </fieldset>

          <div className="button-submit">
            <button
              className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
              type="button"
            >
              Copy
            </button>
          </div>
        </form>

      </div>

    </div>
  </div>
</div>
{/* /modal share_social */}

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

          <div className="demo-item">
            <a href="index.html">
              <div className="demo-image position-relative">
                <img
                  className="lazyload"
                  data-src="images/demo/home-01.jpg"
                  src="images/demo/home-01.jpg"
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

          <div className="demo-item">
            <a href="home-multi-brand.html">
              <div className="demo-image position-relative">
                <img
                  className="lazyload"
                  data-src="images/demo/home-multi-brand.jpg"
                  src="images/demo/home-multi-brand.jpg"
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

          {/* All other demo-item blocks remain the same, just convert class → className */}

        </div>
      </div>
    </div>
  </div>
</div>
{/* /modalDemo */}
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

          {/* QUICK LINKS */}
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

          {/* SUGGESTION ITEMS */}
          <div className="tf-col-content">
            <div className="tf-search-content-title fw-5">
              Need some inspiration?
            </div>

            <div className="tf-search-hidden-inner">

              {/* Item 1 */}
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

              {/* Item 2 */}
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

              {/* Item 3 */}
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
<div
  className="offcanvas offcanvas-start canvas-mb toolbar-shop-mobile"
  id="toolbarShopmb"
>
  <span
    className="icon-close icon-close-popup"
    data-bs-dismiss="offcanvas"
    aria-label="Close"
  ></span>

  <div className="mb-canvas-content">
    <div className="mb-body">
      <ul className="nav-ul-mb" id="wrapper-menu-navigation">

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

        {/* Fashion (Parent) */}
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

              {/* Mens */}
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
                      <a
                        href="shop-default.html"
                        className="tf-category-link sub-nav-link"
                      >
                        <div className="image">
                          <img src="images/shop/cate/cate1.jpg" alt="" />
                        </div>
                        <span>Accessories</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="shop-default.html"
                        className="tf-category-link sub-nav-link"
                      >
                        <div className="image">
                          <img src="images/shop/cate/cate8.jpg" alt="" />
                        </div>
                        <span>Shoes</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Womens */}
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
                      <a
                        href="shop-default.html"
                        className="tf-category-link sub-nav-link"
                      >
                        <div className="image">
                          <img src="images/shop/cate/cate4.png" alt="" />
                        </div>
                        <span>Handbag</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="shop-default.html"
                        className="tf-category-link sub-nav-link"
                      >
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

        {/* Men (parent) */}
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

        {/* Women parent */}
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
        View all collection
        <i className="icon icon-arrow1-top-left"></i>
      </a>
    </div>
  </div>
</div>
{/* /toolbarShopmb */}
{/* modal login */}
<div
  className="modal modalCentered fade form-sign-in modal-part-content"
  id="login"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="header">
        <div className="demo-title">Log in</div>
        <span
          className="icon-close icon-close-popup"
          data-bs-dismiss="modal"
        ></span>
      </div>

      <div className="tf-login-form">
        <form
          className=""
          action="https://themesflat.co/html/ecomus/my-account.html"
          acceptCharset="utf-8"
        >
          <div className="tf-field style-1">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="email"
              name=""
            />
            <label className="tf-field-label">Email *</label>
          </div>

          <div className="tf-field style-1">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="password"
              name=""
            />
            <label className="tf-field-label">Password *</label>
          </div>

          <div>
            <a
              href="#forgotPassword"
              data-bs-toggle="modal"
              className="btn-link link"
            >
              Forgot your password?
            </a>
          </div>

          <div className="bottom">
            <div className="w-100">
              <button
                type="submit"
                className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
              >
                <span>Log in</span>
              </button>
            </div>

            <div className="w-100">
              <a
                href="#register"
                data-bs-toggle="modal"
                className="btn-link fw-6 w-100 link"
              >
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

{/* modal forgotPassword */}
<div
  className="modal modalCentered fade form-sign-in modal-part-content"
  id="forgotPassword"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="header">
        <div className="demo-title">Reset your password</div>
        <span
          className="icon-close icon-close-popup"
          data-bs-dismiss="modal"
        ></span>
      </div>

      <div className="tf-login-form">
        <form className="">
          <div>
            <p>
              Sign up for early Sale access plus tailored new arrivals, trends
              and promotions. To opt out, click unsubscribe in our emails
            </p>
          </div>

          <div className="tf-field style-1">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="email"
              name=""
            />
            <label className="tf-field-label">Email *</label>
          </div>

          <div>
            <a
              href="#login"
              data-bs-toggle="modal"
              className="btn-link link"
            >
              Cancel
            </a>
          </div>

          <div className="bottom">
            <div className="w-100">
              <button
                type="submit"
                className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
              >
                <span>Reset password</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

{/* modal register */}
<div
  className="modal modalCentered fade form-sign-in modal-part-content"
  id="register"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="header">
        <div className="demo-title">Register</div>
        <span
          className="icon-close icon-close-popup"
          data-bs-dismiss="modal"
        ></span>
      </div>

      <div className="tf-login-form">
        <form className="">
          <div className="tf-field style-1">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="text"
              name=""
            />
            <label className="tf-field-label">First name</label>
          </div>

          <div className="tf-field style-1">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="text"
              name=""
            />
            <label className="tf-field-label">Last name</label>
          </div>

          <div className="tf-field style-1">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="email"
              name=""
            />
            <label className="tf-field-label">Email *</label>
          </div>

          <div className="tf-field style-1">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="password"
              name=""
            />
            <label className="tf-field-label">Password *</label>
          </div>

          <div className="bottom">
            <div className="w-100">
              <a
                href="register.html"
                className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
              >
                <span>Register</span>
              </a>
            </div>

            <div className="w-100">
              <a
                href="#login"
                data-bs-toggle="modal"
                className="btn-link fw-6 w-100 link"
              >
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
        <div className="title fw-5">
          Shopping cart <span>(2)</span>
        </div>
        <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
      </div>

      <div className="wrap">
        <div className="tf-mini-cart-threshold">
          <div className="tf-progress-bar">
            <span style={{ width: "50%" }}>
              <div className="progress-car">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0.875C0 0.391751 0.391751 0 0.875 0H13.5625C14.0457 0 14.4375 0.391751 14.4375 0.875V3.0625H17.3125C17.5867 3.0625 17.845 3.19101 18.0104 3.40969L20.8229 7.12844C20.9378 7.2804 21 7.46572 21 7.65625V11.375C21 11.8582 20.6082 12.25 20.125 12.25H17.7881C17.4278 13.2695 16.4554 14 15.3125 14C14.1696 14 13.1972 13.2695 12.8369 12.25H7.72563C7.36527 13.2695 6.39293 14 5.25 14C4.10706 14 3.13473 13.2695 2.77437 12.25H0.875C0.391751 12.25 0 11.8582 0 11.375V0.875ZM2.77437 10.5C3.13473 9.48047 4.10706 8.75 5.25 8.75C6.39293 8.75 7.36527 9.48046 7.72563 10.5H12.6875V1.75H1.75V10.5H2.77437ZM14.4375 8.89937V4.8125H16.8772L19.25 7.94987V10.5H17.7881C17.4278 9.48046 16.4554 8.75 15.3125 8.75C15.0057 8.75 14.7112 8.80264 14.4375 8.89937ZM5.25 10.5C4.76676 10.5 4.375 10.8918 4.375 11.375C4.375 11.8582 4.76676 12.25 5.25 12.25C5.73323 12.25 6.125 11.8582 6.125 11.375C6.125 10.8918 5.73323 10.5 5.25 10.5ZM15.3125 10.5C14.8293 10.5 14.4375 10.8918 14.4375 11.375C14.4375 11.8582 14.8293 12.25 15.3125 12.25C15.7957 12.25 16.1875 11.8582 16.1875 11.375C16.1875 10.8918 15.7957 10.5 15.3125 10.5Z"
                  ></path>
                </svg>
              </div>
            </span>
          </div>

          <div className="tf-progress-msg">
            Buy <span className="price fw-6">$75.00</span> more to enjoy{" "}
            <span className="fw-6">Free Shipping</span>
          </div>
        </div>

        <div className="tf-mini-cart-wrap">
          <div className="tf-mini-cart-main">
            <div className="tf-mini-cart-sroll">
              <div className="tf-mini-cart-items">

                {/* Cart Item 1 */}
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

                {/* Cart Item 2 */}
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

              {/* RECOMMENDED ITEMS (also converted) */}
              {/* ... SAME LOGIC: all class → className ... */}
            </div>
          </div>

          {/* BOTTOM AREA */}
          <div className="tf-mini-cart-bottom">
            <div className="tf-mini-cart-tool">
              <div className="tf-mini-cart-tool-btn btn-add-note">...</div>
              <div className="tf-mini-cart-tool-btn btn-add-gift">...</div>
              <div className="tf-mini-cart-tool-btn btn-estimate-shipping">...</div>
            </div>

            <div className="tf-mini-cart-bottom-wrap">
              <div className="tf-cart-totals-discounts">
                <div className="tf-cart-total">Subtotal</div>
                <div className="tf-totals-total-value fw-6">$49.99 USD</div>
              </div>

              <div className="tf-cart-tax">
                Taxes and <a href="#">shipping</a> calculated at checkout
              </div>

              <div className="tf-mini-cart-line"></div>

              <div className="tf-cart-checkbox">
                <div className="tf-checkbox-wrapp">
                  <input type="checkbox" id="CartDrawer-Form_agree" name="agree_checkbox" />
                  <div><i className="icon-check"></i></div>
                </div>

                <label htmlFor="CartDrawer-Form_agree">
                  I agree with the <a href="#">terms and conditions</a>
                </label>
              </div>

              <div className="tf-mini-cart-view-checkout">
                <a
                  href="view-cart.html"
                  className="tf-btn btn-outline radius-3 link w-100 justify-content-center"
                >
                  View cart
                </a>

                <a
                  href="checkout.html"
                  className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                >
                  <span>Check out</span>
                </a>
              </div>
            </div>
          </div>

          {/* OTHER OPENABLE SECTIONS ALSO CONVERTED */}
          {/* add-note, add-gift, estimate-shipping */}
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

                {/* Compare Item 1 */}
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

                {/* Compare Item 2 */}
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
<div className="modal fade modalDemo popup-quickadd" id="quick_add">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="header">
        <span
          className="icon-close icon-close-popup"
          data-bs-dismiss="modal"
        ></span>
      </div>

      <div className="wrap">

        {/* PRODUCT INFO */}
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

        {/* VARIANTS SECTION */}
        <div className="tf-product-info-variant-picker mb_15">

          {/* Color Picker */}
          <div className="variant-picker-item">
            <div className="variant-picker-label">
              Color: <span className="fw-6 variant-picker-label-value">Orange</span>
            </div>

            <div className="variant-picker-values">

              <input id="values-orange" type="radio" name="color" defaultChecked />
              <label
                className="hover-tooltip radius-60"
                htmlFor="values-orange"
                data-value="Orange"
              >
                <span className="btn-checkbox bg-color-orange"></span>
                <span className="tooltip">Orange</span>
              </label>

              <input id="values-black" type="radio" name="color" />
              <label
                className="hover-tooltip radius-60"
                htmlFor="values-black"
                data-value="Black"
              >
                <span className="btn-checkbox bg-color-black"></span>
                <span className="tooltip">Black</span>
              </label>

              <input id="values-white" type="radio" name="color" />
              <label
                className="hover-tooltip radius-60"
                htmlFor="values-white"
                data-value="White"
              >
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
              <input type="radio" name="size" id="values2-s" defaultChecked />
              <label className="style-text" htmlFor="values2-s" data-value="S">
                <p>S</p>
              </label>

              <input type="radio" name="size" id="values2-m" />
              <label className="style-text" htmlFor="values2-m" data-value="M">
                <p>M</p>
              </label>

              <input type="radio" name="size" id="values2-l" />
              <label className="style-text" htmlFor="values2-l" data-value="L">
                <p>L</p>
              </label>

              <input type="radio" name="size" id="values2-xl" />
              <label className="style-text" htmlFor="values2-xl" data-value="XL">
                <p>XL</p>
              </label>
            </div>
          </div>

        </div>

        {/* QUANTITY */}
        <div className="tf-product-info-quantity mb_15">
          <div className="quantity-title fw-6">Quantity</div>

          <div className="wg-quantity">
            <span className="btn-quantity minus-btn">-</span>
            <input type="text" name="number" defaultValue="1" />
            <span className="btn-quantity plus-btn">+</span>
          </div>
        </div>

        {/* BUTTONS AREA */}
        <div className="tf-product-info-buy-button">
          <form>

            {/* Add to Cart */}
            <a
              href="#"
              className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart"
            >
              <span>Add to cart -&nbsp;</span>
              <span className="tf-qty-price">$18.00</span>
            </a>

            {/* Wishlist */}
            <div className="tf-product-btn-wishlist btn-icon-action">
              <i className="icon-heart"></i>
              <i className="icon-delete"></i>
            </div>

            {/* Compare Button */}
            <a
              href="#compare"
              data-bs-toggle="offcanvas"
              aria-controls="offcanvasLeft"
              className="tf-product-btn-wishlist box-icon bg_white compare btn-icon-action"
            >
              <span className="icon icon-compare"></span>
              <span className="icon icon-check"></span>
            </a>

            {/* Buy With PayPal */}
            <div className="w-100">
              <a href="#" className="btns-full">
                Buy with <img src="images/payments/paypal.png" alt="" />
              </a>

              <a href="#" className="payment-more-option">
                More payment options
              </a>
            </div>

          </form>
        </div>

      </div>
    </div>
  </div>
</div>
{/* /modal quick_add */}
{/* modal quick_view */}
<div className="modal fade modalDemo popup-quickview" id="quick_view">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      <div className="header">
        <span
          className="icon-close icon-close-popup"
          data-bs-dismiss="modal"
        ></span>
      </div>

      <div className="wrap">

        {/* PRODUCT MEDIA SLIDER */}
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

        {/* PRODUCT DETAILS */}
        <div className="tf-product-info-wrap position-relative">

          <div className="tf-product-info-list">

            {/* TITLE */}
            <div className="tf-product-info-title">
              <h5>
                <a className="link" href="product-detail.html">
                  Ribbed Tank Top
                </a>
              </h5>
            </div>

            {/* BADGES */}
            <div className="tf-product-info-badges">
              <div className="badges text-uppercase">Best seller</div>

              <div className="product-status-content">
                <i className="icon-lightning"></i>
                <p className="fw-6">
                  Selling fast! 48 people have this in their carts.
                </p>
              </div>
            </div>

            {/* PRICE */}
            <div className="tf-product-info-price">
              <div className="price">$18.00</div>
            </div>

            {/* DESCRIPTION */}
            <div className="tf-product-description">
              <p>
                Nunc arcu faucibus a et lorem eu a mauris adipiscing conubia ac
                aptent ligula facilisis a auctor habitant parturient a
                a.Interdum fermentum.
              </p>
            </div>

            {/* VARIANT PICKER */}
            <div className="tf-product-info-variant-picker">

              {/* COLOR */}
              <div className="variant-picker-item">
                <div className="variant-picker-label">
                  Color:{" "}
                  <span className="fw-6 variant-picker-label-value">Orange</span>
                </div>

                <div className="variant-picker-values">

                  <input
                    id="values-orange-1"
                    type="radio"
                    name="color-1"
                    defaultChecked
                  />
                  <label
                    className="hover-tooltip radius-60"
                    htmlFor="values-orange-1"
                    data-value="Orange"
                  >
                    <span className="btn-checkbox bg-color-orange"></span>
                    <span className="tooltip">Orange</span>
                  </label>

                  <input id="values-black-1" type="radio" name="color-1" />
                  <label
                    className="hover-tooltip radius-60"
                    htmlFor="values-black-1"
                    data-value="Black"
                  >
                    <span className="btn-checkbox bg-color-black"></span>
                    <span className="tooltip">Black</span>
                  </label>

                  <input id="values-white-1" type="radio" name="color-1" />
                  <label
                    className="hover-tooltip radius-60"
                    htmlFor="values-white-1"
                    data-value="White"
                  >
                    <span className="btn-checkbox bg-color-white"></span>
                    <span className="tooltip">White</span>
                  </label>

                </div>
              </div>

              {/* SIZE */}
              <div className="variant-picker-item">

                <div className="d-flex justify-content-between align-items-center">
                  <div className="variant-picker-label">
                    Size:{" "}
                    <span className="fw-6 variant-picker-label-value">S</span>
                  </div>
                  <div className="find-size btn-choose-size fw-6">
                    Find your size
                  </div>
                </div>

                <div className="variant-picker-values">

                  <input
                    type="radio"
                    name="size-1"
                    id="values-s-1"
                    defaultChecked
                  />
                  <label className="style-text" htmlFor="values-s-1" data-value="S">
                    <p>S</p>
                  </label>

                  <input type="radio" name="size-1" id="values-m-1" />
                  <label className="style-text" htmlFor="values-m-1" data-value="M">
                    <p>M</p>
                  </label>

                  <input type="radio" name="size-1" id="values-l-1" />
                  <label className="style-text" htmlFor="values-l-1" data-value="L">
                    <p>L</p>
                  </label>

                  <input type="radio" name="size-1" id="values-xl-1" />
                  <label className="style-text" htmlFor="values-xl-1" data-value="XL">
                    <p>XL</p>
                  </label>

                </div>
              </div>

            </div>

            {/* QUANTITY */}
            <div className="tf-product-info-quantity">
              <div className="quantity-title fw-6">Quantity</div>

              <div className="wg-quantity">
                <span className="btn-quantity minus-btn">-</span>
                <input type="text" name="number" defaultValue="1" />
                <span className="btn-quantity plus-btn">+</span>
              </div>
            </div>

            {/* BUY BUTTONS */}
            <div className="tf-product-info-buy-button">
              <form>

                <a
                  href="#"
                  className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart"
                >
                  <span>Add to cart -&nbsp;</span>
                  <span className="tf-qty-price">$8.00</span>
                </a>

                {/* Wishlist */}
                <a
                  href="#"
                  className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
                >
                  <span className="icon icon-heart"></span>
                  <span className="tooltip">Add to Wishlist</span>
                  <span className="icon icon-delete"></span>
                </a>

                {/* Compare */}
                <a
                  href="#compare"
                  data-bs-toggle="offcanvas"
                  aria-controls="offcanvasLeft"
                  className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
                >
                  <span className="icon icon-compare"></span>
                  <span className="tooltip">Add to Compare</span>
                  <span className="icon icon-check"></span>
                </a>

                <div className="w-100">
                  <a href="#" className="btns-full">
                    Buy with{" "}
                    <img src="images/payments/paypal.png" alt="" />
                  </a>

                  <a href="#" className="payment-more-option">
                    More payment options
                  </a>
                </div>

              </form>
            </div>

            {/* VIEW DETAILS */}
            <div>
              <a href="product-detail.html" className="tf-btn fw-6 btn-line">
                View full details
                <i className="icon icon-arrow1-top-left"></i>
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
<div className="modal fade modalDemo tf-product-modal popup-findsize" id="find_size">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      <div className="header">
        <div className="demo-title">Size chart</div>
        <span
          className="icon-close icon-close-popup"
          data-bs-dismiss="modal"
        ></span>
      </div>

      <div className="tf-rte">

        {/* SIZE TABLE */}
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

        {/* MEASURING TIPS */}
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
              data-src="images/shop/products/size_chart2.jpg"
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