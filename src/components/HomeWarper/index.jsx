/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Logo from "../../assets/images/logo192.png";
import SimpleImageSlider from "react-simple-image-slider";

export function HomeMenu({ allProducts }) {
  
  console.log(allProducts.links);
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

  let images = [];
  for (let i = 0; i <= allProducts.data.length; i++) {
    images.push({ url: `http://lorempixel.com/5${[i]}/500/cats/Faker` });
  }

  return (
    <div>
      {/* ---------------- carrousel Start ------------------- */}
      <div className="container mt-5 ">
        <div className="d-none d-md-block d-lg-block">
          <SimpleImageSlider autoPlay={true} autoPlayDelay={true} showNavs={true} useGPURender={true} loop={true} width={1000} height={504} images={images} style={{ margin: "0 auto", marginTop: "20px", width: "1000px", borderRadius: "10px" }} />
        </div>

        <div className="d-block d-md-none d-lg-none">
          <SimpleImageSlider autoPlay={true} autoPlayDelay={true} showNavs={true} useGPURender={true} loop={true} width={504} height={504} images={images} style={{ margin: "0 auto", marginTop: "20px", width: "504px", borderRadius: "10px" }} />
        </div>
      </div>
      {/* ---------------- carrousel End --------------------- */}
      {/* ---------------- givaways start -------------------- */}
      <div className="container mt-5">
        <div className="d-flex bg-custom justify-content-between align-items-center mb-3">
          <span>Hottest Giveaways</span> <span className="custom-badge text-uppercase">See More</span>
        </div>
        <div className="row">
          {allProducts.data.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card bg-transparent border">
                <div className="d-flex bg-transparent justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center time">
                    <i className="fa fa-clock-o"></i> <small className="ml-1">3 Days</small>
                  </div>
                  <img src="https://i.imgur.com/suuFVrQ.png" width="20" />
                </div>

                <div className="text-center bg-transparent">
                  <img src="https://i.imgur.com/TbtwkyW.jpg" width="250" className="rounded-3" />
                </div>

                <div className="text-center bg-transparent">
                  <h5>{product.name}</h5>{" "}
                  <span className="text-success">
                    {" "}
                    <del>{product.price}$</del> -{product.totalPrice} ${" "}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="col-md-4">
            <div className="card w-100 h-100  align-items-center bg-transparent border">
              <div className="mx-auto center">
                <Link to="/" >See All </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------givaways End ------------------------ */}

      {/*-------------------  Mobile Section Start ---------------  */}
      <div className="py-3 bg-custom text-center mt-5 w-25 mx-auto">
        <p className=" d-inline"> Mobile Phones</p>
        <img src="https://i.imgur.com/hpftqCo.png" className="section-header-img" />
      </div>
      <div className="container mt-1 d-flex justify-content-center mt-100">
        <div className="row">
          {allProducts.data.map((product) => (
            <div key={product.id} className="col-md-3 col-sm-6">
              <div className="product-wrapper mb-45 text-center">
                <div className="product-img">
                  <p className="product-discount">
                    {" "}
                    <del>{product.price} $</del>{" "}
                  </p>
                  <p className="product-price">{product.totalPrice} $</p>

                  <a href="#" data-abc="true">
                    <img src="https://i.imgur.com/tL7ZE46.jpg" alt={product.name} className="rounded-6px" />
                  </a>

                  <div className="product-action">
                    <div className="product-action-style rounded-6px">
                      <a href="#">
                        <i className="fa fa-plus"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
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
          <a href="">See All</a>
        </div>
      </div>
      {/*-------------------  Mobile Section End ---------------  */}

      {/*-------------------  Watch Section Start ---------------  */}
      <div className="py-3 bg-custom text-center mt-5 w-25 mx-auto">
        <p className=" d-inline"> Watch's</p>
        <img src="https://i.imgur.com/hpftqCo.png" className="section-header-img" />
      </div>

      <div className="center mt-1 justify-content-center align-items-center">
        <div className="container d-flex justify-content-center">
          <div className="row">
            {allProducts.data.map((product) => (
              <div key={product.id} className="col-lg-4 col">
                <div className="watch-card p-2">
                  <div className="p-info px-3 py-3">
                    <div>
                      <h5 className="mb-0">{product.name}</h5>{" "}
                      <span>
                        <del>{product.price} $</del> <span className="badge bg-secondary">{product.discount} % Offer</span>
                      </span>
                    </div>
                    <div className="p-price d-flex flex-row">
                      <span>$</span>
                      <h1>{product.totalPrice}</h1>
                    </div>
                    <div className="heart">
                      <i className="bx bx-heart"></i>
                    </div>
                  </div>
                  <div className="text-center p-image">
                    <img src="https://i.imgur.com/hpftqCo.png" />
                  </div>
                  <div className="p-about">
                    <p> {product.description.slice(0, 200)}</p>
                  </div>
                  <div className="buttons d-flex flex-row gap-3 px-3">
                    <button className="watch-btn btn btn-danger w-100">View</button> <button className="watch-btn btn btn-outline-danger w-100">Buy Now</button>
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
