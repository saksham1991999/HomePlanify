import React, { Component } from 'react';



class Navbar extends Component {
  render() {
    <header className="mkdf-page-header">
      <div className="mkdf-menu-area mkdf-menu-left">
        <div className="mkdf-vertical-align-containers">
          <div className="mkdf-position-left">
            <div className="mkdf-position-left-inner">
              <div className="mkdf-logo-wrapper">
                <a itemProp="url" href="index.htm" style="height: 16px;">
                  <img itemProp="image" className="mkdf-normal-logo" src="assets/images/logo.png" width="154"
                       height="32" alt="logo">
                    <img itemProp="image" className="mkdf-dark-logo" src="assets/images/logo.png" width="154"
                         height="32" alt="dark logo">
                      <img itemProp="image" className="mkdf-light-logo" src="assets/images/logo.png" width="154"
                           height="32" alt="light logo">
                </a>
              </div>
              <nav className="mkdf-main-menu mkdf-drop-down mkdf-default-nav">
                <ul id="menu-main-menu" className="clearfix">
                  <li id="nav-menu-item-1416"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-34 current_page_item mkdf-active-item narrow">
                    <a href="index.htm" className=" current "><span className="item_outer"><span
                        className="item_text">Home</span></span></a>
                  </li>
                  <li id="nav-menu-item-185"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                    <a href="#" className=" no_link" onClick="JavaScript: return false;"><span
                        className="item_outer"><span className="item_text">Listings</span><i
                        className="mkdf-menu-arrow fa fa-angle-down"></i></span></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="mkdf-position-right">
            <div className="mkdf-position-right-inner">
              <div className="widget mkdf-add-property-widget">
                <a itemProp="url" href="#" target="_self"
                   className="mkdf-btn mkdf-btn-small mkdf-btn-outline mkdf-btn-icon mkdf-add-property-widget-button mkdf-login-opener">
                  <span className="mkdf-btn-text">Add Listing</span> <span aria-hidden="true"
                                                                           className="mkdf-icon-font-elegant icon_plus "></span>
                </a>
              </div>
              <div className="widget mkdf-login-register-widget mkdf-user-not-logged-in">
                <!--<a href="#" class="mkdf-login-opener">-->
                <!--<span aria-hidden="true" class="mkdf-icon-linear-icons lnr lnr-user "></span>  <span class="mkdf-login-text">Login / Register</span>-->
                <!--</a>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mkdf-sticky-header">
        <div className="mkdf-sticky-holder">
          <div className=" mkdf-vertical-align-containers">
            <div className="mkdf-position-left">
              <div className="mkdf-position-left-inner">
                <div className="mkdf-logo-wrapper">
                  <a itemProp="url" href="index.htm" style="height: 16px;">
                    <img itemProp="image" className="mkdf-normal-logo" src="assets/images/logo.png" width="154"
                         height="32" alt="logo">
                      <img itemProp="image" className="mkdf-dark-logo" src="assets/images/logo.png" width="154"
                           height="32" alt="dark logo">
                        <img itemProp="image" className="mkdf-light-logo" src="assets/images/logo.png" width="154"
                             height="32" alt="light logo">
                  </a>
                </div>
              </div>
            </div>
            <div className="mkdf-position-right">
              <div className="mkdf-position-right-inner">
                <nav className="mkdf-main-menu mkdf-drop-down mkdf-sticky-nav">
                  <ul id="menu-main-menu-1" className="clearfix">
                    <li id="sticky-nav-menu-item-1416"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-34 current_page_item mkdf-active-item narrow">
                      <a href="index.htm" className=" current "><span className="item_outer"><span
                          className="item_text">Home</span><span className="plus"></span></span></a>
                    </li>
                    <li id="sticky-nav-menu-item-185"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                      <a href="#" className=" no_link" onClick="JavaScript: return false;"><span className="item_outer"><span
                          className="item_text">Listings</span><span className="plus"></span><i
                          className="mkdf-menu-arrow fa fa-angle-down"></i></span></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <header className="mkdf-mobile-header">
      <div className="mkdf-mobile-header-inner">
        <div className="mkdf-mobile-header-holder">
          <div className="mkdf-grid">
            <div className="mkdf-vertical-align-containers">
              <div className="mkdf-vertical-align-containers">
                <div className="mkdf-mobile-menu-opener">
                  <a href="javascript:void(0)">
											<span className="mkdf-mobile-menu-icon">
											<span aria-hidden="true"
                                                  className="mkdf-icon-font-elegant icon_menu "></span> </span>
                  </a>
                </div>
                <div className="mkdf-position-center">
                  <div className="mkdf-position-center-inner">
                    <div className="mkdf-mobile-logo-wrapper">
                      <a itemProp="url" href="index.htm" style="height: 14px">
                        <img itemProp="image" src="assets/images/dark-logo.png" width="154" height="28"
                             alt="Mobile Logo">
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mkdf-position-right">
                  <div className="mkdf-position-right-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="mkdf-mobile-nav">
          <div className="mkdf-grid">
            <ul id="menu-main-menu-2" className="">
              <li id="mobile-menu-item-1416"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-34 current_page_item mkdf-active-item">
                <a href="index.htm" className=" current "><span>Home</span></a>
              </li>
              <li id="mobile-menu-item-184"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                <h6><span>Pages</span></h6><span className="mobile_arrow"><i
                  className="mkdf-sub-arrow fa fa-angle-right"></i><i className="fa fa-angle-down"></i></span>
                <ul className="sub_menu">
                  <li id="mobile-menu-item-258" className="menu-item menu-item-type-post_type menu-item-object-page "><a
                      href="about-us\index.htm" className=""><span>About Us</span></a>
                  </li>
                  <li id="mobile-menu-item-2381" className="menu-item menu-item-type-post_type menu-item-object-page ">
                    <a href="process\index.htm" className=""><span>Process</span></a>
                  </li>
                  <li id="mobile-menu-item-541" className="menu-item menu-item-type-post_type menu-item-object-page "><a
                      href="pricing-packages\index.htm" className=""><span>Pricing Packages</span></a>
                  </li>
                  <li id="mobile-menu-item-257" className="menu-item menu-item-type-post_type menu-item-object-page "><a
                      href="contact-us\index.htm" className=""><span>Contact Us</span></a>
                  </li>
                  <li id="mobile-menu-item-1350" className="menu-item menu-item-type-custom menu-item-object-custom "><a
                      href="https://zuhaus.qodeinteractive.com/error-page" className=""><span>404 Error Page</span></a>
                  </li>
                </ul>
              </li>
              <li id="mobile-menu-item-185"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                <h6><span>Listings</span></h6><span className="mobile_arrow"><i
                  className="mkdf-sub-arrow fa fa-angle-right"></i><i className="fa fa-angle-down"></i></span>
                <ul className="sub_menu">
                  <li id="mobile-menu-item-751" className="menu-item menu-item-type-post_type menu-item-object-page "><a
                      href="property-list\index.htm" className=""><span>Property List</span></a>
                  </li>
                  <li id="mobile-menu-item-2572"
                      className="menu-item menu-item-type-post_type menu-item-object-property "><a
                      href="property\35-13-30th-avenue\index.htm" className=""><span>Property Single</span></a>
                  </li>
                  <li id="mobile-menu-item-2657"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                    <a href="#" className=" mkdf-mobile-no-link"><span>Profiles</span></a><span
                      className="mobile_arrow"><i className="mkdf-sub-arrow fa fa-angle-right"></i><i
                      className="fa fa-angle-down"></i></span>
                    <ul className="sub_menu">
                      <li id="mobile-menu-item-2656"
                          className="menu-item menu-item-type-custom menu-item-object-custom "><a
                          href="agency\your-real-estate\index.htm" className=""><span>Agency</span></a>
                      </li>
                      <li id="mobile-menu-item-2658"
                          className="menu-item menu-item-type-custom menu-item-object-custom "><a
                          href="agent\nicole-burke\index.htm" className=""><span>Agent</span></a>
                      </li>
                      <li id="mobile-menu-item-2659"
                          className="menu-item menu-item-type-custom menu-item-object-custom "><a
                          href="owner\ralph-jackson\index.htm" className=""><span>Owner</span></a>
                      </li>
                    </ul>
                  </li>
                  <li id="mobile-menu-item-1867"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                    <a href="#" className=" mkdf-mobile-no-link"><span>Standard List</span></a><span
                      className="mobile_arrow"><i className="mkdf-sub-arrow fa fa-angle-right"></i><i
                      className="fa fa-angle-down"></i></span>
                    <ul className="sub_menu">
                      <li id="mobile-menu-item-1869"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="properties\standard-three-columns-grid\index.htm"
                          className=""><span>Three Columns Grid</span></a>
                      </li>
                      <li id="mobile-menu-item-1886"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="properties\standard-three-columns-wide\index.htm"
                          className=""><span>Three Columns Wide</span></a>
                      </li>
                      <li id="mobile-menu-item-1885"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="properties\standard-four-columns-grid\index.htm"
                          className=""><span>Four Columns Grid</span></a>
                      </li>
                      <li id="mobile-menu-item-1899"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="properties\standard-four-columns-wide\index.htm"
                          className=""><span>Four Columns Wide</span></a>
                      </li>
                      <li id="mobile-menu-item-1898"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="properties\standard-five-columns-wide\index.htm"
                          className=""><span>Five Columns Wide</span></a>
                      </li>
                    </ul>
                  </li>
                  <li id="mobile-menu-item-1868"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                    <a href="#" className=" mkdf-mobile-no-link"><span>Gallery List</span></a><span
                      className="mobile_arrow"><i className="mkdf-sub-arrow fa fa-angle-right"></i><i
                      className="fa fa-angle-down"></i></span>
                    <ul className="sub_menu">
                      <li id="mobile-menu-item-1911"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="properties\gallery-three-columns-grid\index.htm"
                          className=""><span>Three Columns Grid</span></a>
                      </li>
                      <li id="mobile-menu-item-1919"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="properties\gallery-three-columns-wide\index.htm"
                          className=""><span>Three Columns Wide</span></a>
                      </li>
                      <li id="mobile-menu-item-1930"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="properties\gallery-four-columns\index.htm"
                          className=""><span>Four Columns Grid</span></a>
                      </li>
                      <li id="mobile-menu-item-1942"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="properties\gallery-four-columns-wide\index.htm"
                          className=""><span>Four Columns Wide</span></a>
                      </li>
                      <li id="mobile-menu-item-1941"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="properties\gallery-five-columns-wide\index.htm"
                          className=""><span>Five Columns Wide</span></a>
                      </li>
                    </ul>
                  </li>
                  <li id="mobile-menu-item-2093"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                    <a href="#" className=" mkdf-mobile-no-link"><span>Masonry List</span></a><span
                      className="mobile_arrow"><i className="mkdf-sub-arrow fa fa-angle-right"></i><i
                      className="fa fa-angle-down"></i></span>
                    <ul className="sub_menu">
                      <li id="mobile-menu-item-2270"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="properties\masonry-grid\index.htm" className=""><span>Grid</span></a>
                      </li>
                      <li id="mobile-menu-item-2269"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="properties\masonry-wide\index.htm" className=""><span>Wide</span></a>
                      </li>
                    </ul>
                  </li>
                  <li id="mobile-menu-item-1417"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                    <a href="#" className=" mkdf-mobile-no-link"><span>User Dashboard</span></a><span
                      className="mobile_arrow"><i className="mkdf-sub-arrow fa fa-angle-right"></i><i
                      className="fa fa-angle-down"></i></span>
                    <ul className="sub_menu">
                      <li id="mobile-menu-item-1419"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="membership\index.htm" className=""><span>User Dashboard</span></a>
                      </li>
                      <li id="mobile-menu-item-1535"
                          className="menu-item menu-item-type-custom menu-item-object-custom "><a
                          href="membership\index-1.htm?user-action=edit-profile" className=""><span>Edit Profile</span></a>
                      </li>
                      <li id="mobile-menu-item-1536"
                          className="menu-item menu-item-type-custom menu-item-object-custom "><a
                          href="membership\index-2.htm?user-action=user-packages"
                          className=""><span>User Packages</span></a>
                      </li>
                      <li id="mobile-menu-item-1537"
                          className="menu-item menu-item-type-custom menu-item-object-custom "><a
                          href="membership\index-3.htm?user-action=property-favorites" className=""><span>Property Wishlist</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li id="mobile-menu-item-186"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                <h6><span>Blog</span></h6><span className="mobile_arrow"><i
                  className="mkdf-sub-arrow fa fa-angle-right"></i><i className="fa fa-angle-down"></i></span>
                <ul className="sub_menu">
                  <li id="mobile-menu-item-2029" className="menu-item menu-item-type-post_type menu-item-object-page ">
                    <a href="blog-standard\right-sidebar\index.htm" className=""><span>Right Sidebar</span></a>
                  </li>
                  <li id="mobile-menu-item-2027" className="menu-item menu-item-type-post_type menu-item-object-page ">
                    <a href="blog-standard\left-sidebar\index.htm" className=""><span>Left Sidebar</span></a>
                  </li>
                  <li id="mobile-menu-item-2026" className="menu-item menu-item-type-post_type menu-item-object-page ">
                    <a href="blog-standard\without-sidebar\index.htm" className=""><span>Without Sidebar</span></a>
                  </li>
                  <li id="mobile-menu-item-459"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                    <a href="#" className=" mkdf-mobile-no-link"><span>Post Types</span></a><span
                      className="mobile_arrow"><i className="mkdf-sub-arrow fa fa-angle-right"></i><i
                      className="fa fa-angle-down"></i></span>
                    <ul className="sub_menu">
                      <li id="mobile-menu-item-451"
                          className="menu-item menu-item-type-post_type menu-item-object-post "><a
                          href="dedicated-to-results\index.htm" className=""><span>Standard</span></a>
                      </li>
                      <li id="mobile-menu-item-455"
                          className="menu-item menu-item-type-post_type menu-item-object-post "><a
                          href="creating-real-value-in-property-and-places\index.htm" className=""><span>Gallery</span></a>
                      </li>
                      <li id="mobile-menu-item-452"
                          className="menu-item menu-item-type-post_type menu-item-object-post "><a
                          href="matilda-morton\index.htm" className=""><span>Quote</span></a>
                      </li>
                      <li id="mobile-menu-item-454"
                          className="menu-item menu-item-type-post_type menu-item-object-post "><a
                          href="no-one-has-more-experience-to-help-you-than-an-agent-who-is-a-realtor\index.htm"
                          className=""><span>Link</span></a>
                      </li>
                      <li id="mobile-menu-item-453"
                          className="menu-item menu-item-type-post_type menu-item-object-post "><a
                          href="the-sign-of-experience\index.htm" className=""><span>Audio</span></a>
                      </li>
                      <li id="mobile-menu-item-456"
                          className="menu-item menu-item-type-post_type menu-item-object-post "><a
                          href="a-vision-for-your-life\index.htm" className=""><span>Video</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li id="mobile-menu-item-187"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                <h6><span>Shop</span></h6><span className="mobile_arrow"><i
                  className="mkdf-sub-arrow fa fa-angle-right"></i><i className="fa fa-angle-down"></i></span>
                <ul className="sub_menu">
                  <li id="mobile-menu-item-1016" className="menu-item menu-item-type-post_type menu-item-object-page ">
                    <a href="shop\index.htm" className=""><span>Product List</span></a>
                  </li>
                  <li id="mobile-menu-item-1619"
                      className="menu-item menu-item-type-post_type menu-item-object-product "><a
                      href="product\modern-armchair\index.htm" className=""><span>Product Single</span></a>
                  </li>
                  <li id="mobile-menu-item-262"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                    <a href="#" className=" mkdf-mobile-no-link"><span>Shop Pages</span></a><span
                      className="mobile_arrow"><i className="mkdf-sub-arrow fa fa-angle-right"></i><i
                      className="fa fa-angle-down"></i></span>
                    <ul className="sub_menu">
                      <li id="mobile-menu-item-261"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a href="cart\index.htm"
                                                                                                   className=""><span>Cart</span></a>
                      </li>
                      <li id="mobile-menu-item-259"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="my-account\index.htm" className=""><span>My Account</span></a>
                      </li>
                      <li id="mobile-menu-item-260"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a href="cart\index.htm"
                                                                                                   className=""><span>Checkout</span></a>
                      </li>
                    </ul>
                  </li>
                  <li id="mobile-menu-item-1398"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                    <a href="#" className=" mkdf-mobile-no-link"><span>Layouts</span></a><span className="mobile_arrow"><i
                      className="mkdf-sub-arrow fa fa-angle-right"></i><i className="fa fa-angle-down"></i></span>
                    <ul className="sub_menu">
                      <li id="mobile-menu-item-1399"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="shop\three-columns-grid\index.htm" className=""><span>Three Columns Grid</span></a>
                      </li>
                      <li id="mobile-menu-item-1476"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="shop\three-columns-wide\index.htm" className=""><span>Three Columns Wide</span></a>
                      </li>
                      <li id="mobile-menu-item-1402"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="shop\four-columns-grid\index.htm" className=""><span>Four Columns Grid</span></a>
                      </li>
                      <li id="mobile-menu-item-1477"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="shop\four-columns-wide\index.htm" className=""><span>Four Columns Wide</span></a>
                      </li>
                      <li id="mobile-menu-item-1934"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="shop\five-columns-wide\index.htm" className=""><span>Five Columns Wide</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li id="mobile-menu-item-949"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub"><a
                  href="#" className=" mkdf-mobile-no-link"><span>Elements</span></a><span className="mobile_arrow"><i
                  className="mkdf-sub-arrow fa fa-angle-right"></i><i className="fa fa-angle-down"></i></span>
                <ul className="sub_menu">
                  <li id="mobile-menu-item-1365"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                    <a href="#" className=" mkdf-mobile-no-link"><span>Real Estate Shortcodes</span></a><span
                      className="mobile_arrow"><i className="mkdf-sub-arrow fa fa-angle-right"></i><i
                      className="fa fa-angle-down"></i></span>
                    <ul className="sub_menu">
                      <li id="mobile-menu-item-1502"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\package-list\index.htm" className=""><span>Package List</span></a>
                      </li>
                      <li id="mobile-menu-item-1500"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\property-list\index.htm" className=""><span>Property List</span></a>
                      </li>
                      <li id="mobile-menu-item-1501"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\property-city-list\index.htm" className=""><span>Property City List</span></a>
                      </li>
                      <li id="mobile-menu-item-1498"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\property-slider\index.htm" className=""><span>Property Slider</span></a>
                      </li>
                      <li id="mobile-menu-item-1499"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\property-search\index.htm" className=""><span>Property Search</span></a>
                      </li>
                      <li id="mobile-menu-item-2011"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\property-type-list\index.htm" className=""><span>Property Type List</span></a>
                      </li>
                    </ul>
                  </li>
                  <li id="mobile-menu-item-1099"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                    <a href="#" className=" mkdf-mobile-no-link"><span>Presentation</span></a><span
                      className="mobile_arrow"><i className="mkdf-sub-arrow fa fa-angle-right"></i><i
                      className="fa fa-angle-down"></i></span>
                    <ul className="sub_menu">
                      <li id="mobile-menu-item-1330"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\blog-list-shortcode\index.htm"
                          className=""><span>Blog List Shortcode</span></a>
                      </li>
                      <li id="mobile-menu-item-1058"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\image-gallery\index.htm" className=""><span>Image Gallery</span></a>
                      </li>
                      <li id="mobile-menu-item-1336"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\icon-with-text\index.htm" className=""><span>Icon With Text</span></a>
                      </li>
                      <li id="mobile-menu-item-1332"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\testimonials\index.htm" className=""><span>Testimonials</span></a>
                      </li>
                      <li id="mobile-menu-item-1334"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\video-button\index.htm" className=""><span>Video Button</span></a>
                      </li>
                      <li id="mobile-menu-item-1333"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\team-list\index.htm" className=""><span>Team List</span></a>
                      </li>
                    </ul>
                  </li>
                  <li id="mobile-menu-item-1098"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                    <a href="#" className=" mkdf-mobile-no-link"><span>Infographic</span></a><span
                      className="mobile_arrow"><i className="mkdf-sub-arrow fa fa-angle-right"></i><i
                      className="fa fa-angle-down"></i></span>
                    <ul className="sub_menu">
                      <li id="mobile-menu-item-1340"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\countdown\index.htm" className=""><span>Countdown</span></a>
                      </li>
                      <li id="mobile-menu-item-1339"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\counters\index.htm" className=""><span>Counters</span></a>
                      </li>
                      <li id="mobile-menu-item-1061"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\call-to-action\index.htm" className=""><span>Call To Action</span></a>
                      </li>
                      <li id="mobile-menu-item-1059"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\google-maps\index.htm" className=""><span>Google Maps</span></a>
                      </li>
                      <li id="mobile-menu-item-1338"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\pie-charts\index.htm" className=""><span>Pie Charts</span></a>
                      </li>
                      <li id="mobile-menu-item-1337"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\process\index.htm" className=""><span>Process</span></a>
                      </li>
                      <li id="mobile-menu-item-1335"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\progress-bar\index.htm" className=""><span>Progress Bar</span></a>
                      </li>
                    </ul>
                  </li>
                  <li id="mobile-menu-item-1064"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                    <a href="#" className=" mkdf-mobile-no-link"><span>Classic</span></a><span className="mobile_arrow"><i
                      className="mkdf-sub-arrow fa fa-angle-right"></i><i className="fa fa-angle-down"></i></span>
                    <ul className="sub_menu">
                      <li id="mobile-menu-item-951"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\accordions-toggles\index.htm"
                          className=""><span>Accordions &#038; Toggles</span></a>
                      </li>
                      <li id="mobile-menu-item-1062"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\buttons\index.htm" className=""><span>Buttons</span></a>
                      </li>
                      <li id="mobile-menu-item-1331"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\blockquote\index.htm" className=""><span>Blockquote</span></a>
                      </li>
                      <li id="mobile-menu-item-1060"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\contact-form\index.htm" className=""><span>Contact Form</span></a>
                      </li>
                      <li id="mobile-menu-item-1097"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\separators\index.htm" className=""><span>Separators</span></a>
                      </li>
                      <li id="mobile-menu-item-1096"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\tabs\index.htm" className=""><span>Tabs</span></a>
                      </li>
                      <li id="mobile-menu-item-1364"
                          className="menu-item menu-item-type-post_type menu-item-object-page "><a
                          href="elements\typography\index.htm" className=""><span>Typography</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  }
}