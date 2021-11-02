import Slider from "react-slick";

export function HomeNavbar() {
  return (
    <nav class="nav">
    <div class="nav__hamburger">
      {/* <svg>
        <use xlink:href="./images/sprite.svg#icon-menu"></use>
      </svg> */}
    </div>

    <div class="nav__logo">
      <a href="/" class="scroll-link">
        PHONE
      </a>
    </div>

    <div class="nav__menu">
      <div class="menu__top">
        <span class="nav__category">PHONE</span>
        <a href="#" class="close__toggle">
          {/* <svg>
            <use xlink:href="./images/sprite.svg#icon-cross"></use>
          </svg> */}
        </a>
      </div>
      <ul class="nav__list">
        <li class="nav__item">
          <a href="#header" class="nav__link scroll-link">Home</a>
        </li>
        <li class="nav__item">
          <a href="#category" class="nav__link scroll-link">Category</a>
        </li>
        <li class="nav__item">
          <a href="#news" class="nav__link scroll-link">Blog</a>
        </li>
        <li class="nav__item">
          <a href="#contact" class="nav__link scroll-link">Contact</a>
        </li>
      </ul>
    </div>

    <div class="nav__icons">
      <a href="#" class="icon__item">
        {/* <svg class="icon__user">
          <use xlink:href="./images/sprite.svg#icon-user"></use>
        </svg> */}
      </a>

      <a href="#" class="icon__item">
        {/* <svg class="icon__search">
          <use xlink:href="./images/sprite.svg#icon-search"></use>
        </svg> */}
      </a>

      <a href="#" class="icon__item">
        {/* <svg class="icon__cart">
          <use xlink:href="./images/sprite.svg#icon-shopping-basket"></use>
        </svg> */}
        <span id="cart__total">0</span>
      </a>
    </div>
  </nav>
  )
  
  
}

export function HomeMenu({ allProducts }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="container py-2 bg-custom">
  
          {allProducts.map((product) => (
            <><p> {product.name} </p><p> {product.description} </p></>
          ))}

    </section>
  );
}

export function HomeFooter() {
  return <section className="py-5  ">Footer</section>;
}
