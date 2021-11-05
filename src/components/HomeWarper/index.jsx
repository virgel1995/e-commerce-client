/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Logo from "../../assets/images/logo192.png";

export function HomeMenu({ allProducts }) {
  const starts = {
    size: 30,
    count: 5,
    color: "black",
    activeColor: "red",
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fab fa-gratipay " />,
    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`);
    },
  };
  return (
    <div>
      {/* ---------------- carrousel Start ------------------- */}
      <div class="container">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="carousel-card">
                <div class="row">
                  <div class="col-md-6 text-center align-self-center">
                    {" "}
                    <img class="img-fluid" src="https://i.imgur.com/7a9V4yw.png" className="carousel-img" />
                  </div>
                  <div class="col-md-6 info">
                    <div class="row title">
                      <div class="col">
                        <h2>Herbalism</h2>
                      </div>
                      <div class="col text-right">
                        <a href="#">
                          <i class="fa fa-heart-o"></i>
                        </a>
                      </div>
                    </div>

                    <p>Natural herbal wash</p>
                    <ReactStars {...starts} value={0} />
                    <span id="reviews">1590 Reviews</span>

                    <div class="row price">
                      <label class="radio">
                        <input type="radio" name="size1" value="small" checked />
                        <span>
                          <div class="row">
                            <big>
                              <b>1.5 oz.</b>
                            </big>
                          </div>
                          <div class="row">$12.95</div>
                        </span>
                      </label>
                      <label class="radio">
                        <input type="radio" name="size1" value="large" />
                        <span>
                          <div class="row">
                            <big>
                              <b>4.4 oz.</b>
                            </big>
                          </div>
                          <div class="row">$21.95</div>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row lower">
                  <div class="col">
                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                      <i class="fa fa-arrow-left"></i>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                      <i class="fa fa-arrow-right"></i>
                    </a>
                  </div>

                  <div class="col text-right align-self-center">
                    <button class="btn">Add to cart</button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------- carrousel End --------------------- */}
      {/* ---------------- givaways start -------------------- */}
      <div class="container mt-5">
        <div class="d-flex bg-custom justify-content-between align-items-center mb-3">
          <span>Hottest Giveaways</span> <span class="custom-badge text-uppercase">See More</span>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center time">
                  <i class="fa fa-clock-o"></i> <small class="ml-1">3 Days</small>
                </div>
                <img src="https://i.imgur.com/suuFVrQ.png" width="20" />
              </div>
              <div class="text-center">
                <img src="https://i.imgur.com/TbtwkyW.jpg" width="250" />
              </div>
              <div class="text-center">
                <h5>Amazon Echo</h5> <span class="text-success">$200 value</span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center time">
                  <i class="fa fa-clock-o"></i> <small class="ml-1 text-primary">00:02:13</small>
                </div>
                <img src="https://i.imgur.com/suuFVrQ.png" width="20" />
              </div>
              <div class="text-center">
                <img src="https://i.imgur.com/bUWshC0.jpg" width="250" />
              </div>
              <div class="text-center">
                <h5>Kruve Coffee Filters</h5> <span class="text-success">$80 value</span>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center time">
                  <i class="fa fa-clock-o"></i> <small class="ml-1">2 Days</small>
                </div>
                <img src="https://i.imgur.com/suuFVrQ.png" width="20" />
              </div>
              <div class="text-center">
                <img src="https://i.imgur.com/aTqSahW.jpg" width="250" />
              </div>
              <div class="text-center">
                <h5>Apple watch 2.0</h5> <span class="text-success">$360 value</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------givaways End ------------------------ */}

      {/*-------------------  Mobile Section Start ---------------  */}
      <div className="py-3 bg-custom text-center mt-5 w-25 mx-auto">
        <p className=" d-inline"> Mobile Phones</p>
        <img src="https://i.imgur.com/hpftqCo.png" className="section-header-img"/>
      </div>
      <div class="container mt-1 d-flex justify-content-center mt-100">
        <div class="row">
          {allProducts.map((product) => (
            <div key={product.id} class="col-md-3 col-sm-6">
              <div class="product-wrapper mb-45 text-center">
                <div class="product-img">
                  <p className="product-discount">
                    {" "}
                    <del>{product.price} $</del>{" "}
                  </p>
                  <p className="product-price">{product.totalPrice} $</p>

                  <a href="#" data-abc="true">
                    <img src="https://i.imgur.com/tL7ZE46.jpg" alt={product.name} className="rounded-6px" />
                  </a>

                  <div class="product-action">
                    <div class="product-action-style rounded-6px">
                      <a href="#">
                        <i class="fa fa-plus"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                      <div className="center text-center">
                        <ReactStars {...starts} value={product.rating} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*-------------------  Mobile Section End ---------------  */}

      {/*-------------------  Watch Section Start ---------------  */}
      <div className="py-3 bg-custom text-center mt-5 w-25 mx-auto">
        <p className=" d-inline"> Watch's</p>
        <img src="https://i.imgur.com/hpftqCo.png" className="section-header-img"/>
      </div>

      <div class="center mt-1 justify-content-center align-items-center">
        <div class="container d-flex justify-content-center">
          <div className="row">
            {allProducts.map((product) => (
              <div key={product.id} className="col-md-4">
                <div class="watch-card p-2">
                  <div class="p-info px-3 py-3">
                    <div>
                      <h5 class="mb-0">{product.name}</h5>{" "}
                      <span>
                        <del>{product.price} $</del> <span className="badge bg-secondary">{product.discount} % Offer</span>
                      </span>
                    </div>
                    <div class="p-price d-flex flex-row">
                      <span>$</span>
                      <h1>{product.totalPrice}</h1>
                    </div>
                    <div class="heart">
                      <i class="bx bx-heart"></i>
                    </div>
                  </div>
                  <div class="text-center p-image">
                    <img src="https://i.imgur.com/hpftqCo.png" />
                  </div>
                  <div class="p-about">
                    <p> {product.description.slice(0, 200)}</p>
                  </div>
                  <div class="buttons d-flex flex-row gap-3 px-3">
                    <button class="watch-btn btn btn-danger w-100">View</button> <button class="watch-btn btn btn-outline-danger w-100">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*-------------------  Watch Section End ---------------  */}



    </div>
  );
}



export function HomeFooter() {
  return <section className="py-5  ">Footer</section>;
}

/**
 *      <section className="container py-2 bg-custom">
        <div className="row">
          <div className="col">
            <div className="card justify-content-center product-card">
              <div className="card-header text-center">
                <div className="row custom-carg-bg">
                  <div className="col-3 center p-5 badge bg-primary">Product Name</div>
                  <div className="col-1 "></div>
                  <div className="col-4 border border-danger py-1 my-1">
                    <img src={Logo} alt="" />
                  </div>
                  <div className="col-1 "></div>
                  <div className="col-3 center p-5 badge bg-primary">product Price</div>
                </div>
              </div>
              <div className="card-body ">
                <div className="row custom-carg-bg">
                  <div className="col-5 product-desc">
                  {str.slice(0, 200)}
                  </div>
                  <div className="col-2"></div>
                  <div className="col-5 product-rating">
                    <div className="row">
                      <div className="col-12">
                        <ReactStars {...starts} />
                      </div>
                      <div className="col-12">Rating and another things</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row custom-carg-bg py-3">
                  <div className="col-5 product-desc">rating</div>
                  <div className="col-2"></div>

                  <div className="col-5 product-links">
                    <button className="btn btn-primary rounded-circle text-danger link">
                      <i className="fas fa-cart-plus fa-2x "></i>
                    </button>
                    <button className="btn btn-primary rounded-circle text-danger link">
                      <i className="far fa-heart fa-2x "></i>
                    </button>
                    <button className="btn btn-primary rounded-circle text-danger link">
                      <i className="fas fa-cart-plus fa-2x "></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
 */
