import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// Types for the component
interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface Client {
  id: number;
  logo: string;
  alt: string;
  link: string;
}

const PartnersSection: React.FC = () => {
  // Main slider data
  const slides: Slide[] = [
    {
      id: 1,
      image: "https://picsum.photos/1200/700",
      title: "Digital marketing ideas and tips.",
      description: "Lorem ipsum dolor to consectetur adipiscing elit eiusmod tempor incididunt labore et."
    },
    {
      id: 2,
      image: "https://picsum.photos/1200/700",
      title: "Business process tips and ideas.",
      description: "Lorem ipsum dolor to consectetur adipiscing elit eiusmod tempor incididunt labore et."
    },
    {
      id: 3,
      image: "https://picsum.photos/1200/700",
      title: "How to expand business network.",
      description: "Lorem ipsum dolor to consectetur adipiscing elit eiusmod tempor incididunt labore et."
    }
  ];

  // Client logos data
  const clients: Client[] = [
    { id: 1, logo: "/images/logo-monday-white.svg", alt: "Monday", link: "#" },
    { id: 2, logo: "/images/logo-envato-white.svg", alt: "Envato", link: "#" },
    { id: 3, logo: "/images/logo-awwwards-white.svg", alt: "Awwwards", link: "#" },
    { id: 4, logo: "/images/logo-woocommerce-white.svg", alt: "WooCommerce", link: "#" },
    { id: 5, logo: "/images/logo-pingdom-white.svg", alt: "Pingdom", link: "#" },
    { id: 6, logo: "/images/logo-walmart-white.svg", alt: "Walmart", link: "#" }
  ];

  return (
    <section className="bg-midnight-blue">
      {/* Main Hero Slider */}
      <div className="container overlap-section mb-5 md-mb-8 sm-mb-2" style={{ marginTop: '-105px' }}>
        <Swiper
          modules={[Autoplay, Navigation, EffectFade]}
          effect="fade"
          autoHeight={true}
          loop={true}
          allowTouchMove={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          navigation={{
            nextEl: '.slider-one-slide-next-1',
            prevEl: '.slider-one-slide-prev-1'
          }}
          className="position-relative text-slider-style-04 swiper-fade"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="position-relative">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-100"
                  style={{ height: '700px', objectFit: 'cover' }}
                />
                <div className="container position-absolute sm-position-relative bottom-0 right-0px z-index-1 swiper-slide-content">
                  <div className="row justify-content-end align-items-end h-100">
                    <div className="col-xl-6 col-lg-6 col-md-8 p-0">
                      <div className="bg-midnight-blue ps-5 pe-5 pt-4 pb-3 lg-p-3 xs-p-2 last-paragraph-no-margin">
                        <h3 className="alt-font text-white fw-500 ls-minus-1px">
                          {slide.title}
                        </h3>
                        <p className="text-white mb-0">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Navigation Buttons */}
          <div className="slider-one-slide-prev-1 icon-medium text-white swiper-button-prev slider-navigation-style-07 bg-base-color">
            <i className="bi bi-arrow-left-short"></i>
          </div>
          <div className="slider-one-slide-next-1 icon-medium text-white swiper-button-next slider-navigation-style-07 bg-base-color">
            <i className="bi bi-arrow-right-short"></i>
          </div>
        </Swiper>
      </div>

      {/* Clients Marquee Section */}
      <div className="container">
        <div className="row position-relative clients-style-08">
          <div className="col">
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={2}
              spaceBetween={0}
              speed={4000}
              loop={true}
              allowTouchMove={false}
              autoplay={{
                delay: 0,
                disableOnInteraction: false
              }}
              navigation={{
                nextEl: '.slider-four-slide-next-2',
                prevEl: '.slider-four-slide-prev-2'
              }}
              keyboard={{
                enabled: true,
                onlyInViewport: true
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 }
              }}
              className="text-center feather-shadow"
            >
              {clients.map((client) => (
                <SwiperSlide key={client.id}>
                  <a href={client.link}>
                    <img 
                      src={client.logo} 
                      className="h-10 xs-h-8" 
                      alt={client.alt}
                      style={{ height: '40px' }}
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;