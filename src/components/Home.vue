<template>
  <div class="antic">
    <!-- ------------------------------------------------------------------ -->
    <div id="products">
      <h1 class="title">antic</h1>
      <nav class="navlist" :class="{ open: menuOpen }">
        <ul>
          <li>
            <span class="navbar-title">antic</span>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#rooms">Rooms</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#inspirations">Inspirations</a>
          </li>
          <li></li>
        </ul>
        <a href="#contact" class="contact-icon">
          <img src="../assets/images/Contact.svg" />
        </a>
      </nav>
      <div class="bx bx-menu" id="menu-icon" @click="toggleMenu()">
        <img src="../assets/images/Menu.svg" />
      </div>
      <div class="container1">
        <div class="home-text" data-aos="zoom-in" data-aos-duration="1000">
          <h3>HOME DESIGN</h3>
          <h1>
            Elegance for
            Interiors & Exteriors
          </h1>
          <h2>
            We provide everyone with modern,
            trendy, quality furniture
          </h2>
          <a href="#rooms">
            <img src="../assets/images/arrowDown.svg" />
          </a>
          <a class="down" href="#rooms">
            <img src="../assets/images/downWhite.svg" />
          </a>
        </div>
        <img class="lights" src="../assets/images/lights.png" />
      </div>
    </div>
    <!-- ------------------------------------------------------------------ -->
    <div id="rooms">
      <div class="container2">
        <h1 class="container2-text">Find your room</h1>
        <div class="room-info">
          <div class="textcontainer0">
            <p>Dining room, bedroom, bathroom or office. Find what you need</p>
          </div>
          <div class="room1" data-aos="fade-left" data-aos-duration="500">
            <div class="textcontainer1" data-aos="fade-left" data-aos-duration="1000">
              <h1 class="bedroom-text">Bedroom</h1>
            </div>
            <img src="../assets/images/bedroom.png" />
            <p>New arrivals</p>
          </div>
          <div class="room2" data-aos="fade-left" data-aos-duration="1000">
            <div class="textcontainer1">
              <h1>Living room</h1>
            </div>
            <img src="../assets/images/livingroom.png" />
            <p>New arrivals</p>
          </div>
        </div>

        <button class="next-button">
          <p>Next</p>
          <img src="../assets/images/arrowRight.svg" />
        </button>
      </div>
    </div>
    <!-- ------------------------------------------------------------------ -->
    <div id="services" data-aos="zoom-in" data-aos-duration="1000">
      <div class="container3">
        <div class="services-title">
          <h1>We stay by your side to design your projects</h1>
          <button class="more">
            <span>Find out more</span>
            <img src="../assets/images/arrowRight.svg" />
          </button>
        </div>
        <div class="column1">
          <div class="row1">
            <div class="textcontainer2">
              <h2>Our Advices</h2>
              <p>What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.</p>
            </div>
            <div class="textcontainer2">
              <h2>Click and Collect</h2>
              <p>Adapted and contactless. Free from € 200 of purchases in stores offering the service.</p>
            </div>
          </div>
          <div class="row1">
            <div class="textcontainer2">
              <h2>Conception Service</h2>
              <p>Personalized service with an expert advisor for your interior and exterior decoration or layout projects.</p>
            </div>
            <div class="textcontainer2">
              <h2>Installation Service</h2>
              <p>Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------------------------------------------------ -->
    <div id="inspirations">
      <div class="container4">
        <div class="trends">
          <div class="trends-text">
            <h2>Be aware of the latest trends</h2>
            <p>Stay informed of new trends, but also of our various offers.</p>
            <button class="more">
              <span>Learn more</span>
              <img src="../assets/images/arrowRight.svg" />
            </button>
          </div>
          <div class="trends-mail">
            <input placeholder="email@address.com" />
            <button class="subscribe-button">Subscribe</button>
          </div>
        </div>
        <div
          class="photos-slides"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="1000px"
          id="photos-slides"
        >
          <div class="photo">
            <img src="../assets/images/slide1.png" />
          </div>
          <div class="photo">
            <img src="../assets/images/slide3.png" />
          </div>
          <div class="photo">
            <img src="../assets/images/slide2.png" />
          </div>
          <div class="photo">
            <img src="../assets/images/slide3.png" />
          </div>
          <div class="photo">
            <img src="../assets/images/slide1.png" />
          </div>
          <div class="photo">
            <img src="../assets/images/slide3.png" />
          </div>
          <div class="photo">
            <img src="../assets/images/slide2.png" />
          </div>
          <div class="photo">
            <img src="../assets/images/slide3.png" />
          </div>
        </div>
        <div class="slides-btn">
          <button class="next-button" @click="scrollImages(1)">
            <img src="../assets/images/arrowcircleRight.svg" />
          </button>
          <button class="prev-button" @click="scrollImages(-1)">
            <img src="../assets/images/arrowcircleLeft.svg" />
          </button>
        </div>
        <div class="insp-info" data-aos="zoom-in" data-aos-duration="500">
          <div class="insp-text">
            <h2>Inspirations</h2>
            <p>Our experts are keen to stay on top of trends in order to offer you new inspirations for your interior and exterior every day. Remember that to inspire you we have to inspire ourselves and we want to share that with you.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------------------------------------------------ -->
    <div id="contact">
      <div class="content">
        <div class="column2">
          <div class="text-container">
            <h2>antic</h2>
          </div>
        </div>
        <div class="column2">
          <div class="text-container">
            <h3>Products</h3>
            <p>Furniture</p>
            <p>Decoration</p>
            <p>Storage</p>
            <p>Baby and child</p>
            <p>Connected home</p>
          </div>
        </div>
        <div class="column2">
          <div class="text-container">
            <h3>Rooms</h3>
            <p>Living room</p>
            <p>Dining room</p>
            <p>Cooked</p>
            <p>Bedroom</p>
            <p>Bathroom</p>
            <p>Office</p>
            <p>Laundry</p>
            <p>Garage</p>
          </div>
        </div>
        <div class="column2">
          <div class="text-container">
            <h3>Services</h3>
            <p>Click and collect</p>
            <p>Conception</p>
            <p>Installation</p>
            <p>Advices</p>
            <p>Gift card</p>
          </div>
        </div>
        <div class="column2">
          <div class="text-container">
            <h3>About</h3>
            <p>Our story</p>
            <p>Our stores</p>
            <p>Our partners</p>
          </div>
        </div>
        <div class="column2">
          <div class="text-container">
            <h3>We respect our planet</h3>
            <img class="post" src="../assets/images/post.png" />
            <span
              class="post-text"
            >We’re taking positive steps to reduce our impact on the planet. For us, that means retailing responsibly.</span>
            <button class="more">
              <span>Learn more</span>
              <img src="../assets/images/arrowRight.svg" />
            </button>
          </div>
        </div>
      </div>
      <div class="social-medias">
        <img src="../assets/images/Facebook.svg" />
        <img src="../assets/images/Twitter.svg" />
        <img src="../assets/images/Linkedin.svg" />
        <img src="../assets/images/Instagram.svg" />
      </div>
      <div class="footer">
        <p class="agence">© 2021 Agence Dnd</p>
        <p>Privacy policy</p>
        <p>Term of service</p>
        <p>Language</p>
      </div>
    </div>
    <!-- ------------------------------------------------------------------ -->
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String
  },
  data() {
    return {
      currentPage: 1,
      totalImages: 8,
      scrollAmount: 600,
      menuOpen: false // Initialize a data property to track the menu state
    };
  },
  methods: {
    scrollImages(direction) {
      const photosSlides = document.getElementById("photos-slides");
      let scrollLeft = photosSlides.scrollLeft;
      scrollLeft += direction * this.scrollAmount;
      scrollLeft = Math.min(
        photosSlides.scrollWidth - photosSlides.clientWidth,
        Math.max(scrollLeft, 0)
      );
      photosSlides.scrollLeft = scrollLeft;
      this.currentPage =
        Math.floor(
          (scrollLeft + photosSlides.clientWidth / 2) / photosSlides.clientWidth
        ) + 1;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen; // Toggle the menu state
    }
  },
  mounted() {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll("nav ul li a");
    const menuLength = menuItem.length;

    for (let i = 0; i < menuLength; i++) {
      if (menuItem[i].href === currentLocation) {
        menuItem[i].classList.add("active");
      }
    }
  }
};
</script>


<style scoped src="./style.css">
</style>

