import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import '../slider.css';
import { useTranslation } from 'react-i18next';

const FeatureSlider = () => {
  const { t } = useTranslation();
  const sliderRef = useRef(null);

  const slides = [
    {
      image: "https://live.staticflickr.com/65535/54455848536_2ba1b4b969_k.jpg",
      title: "全球第一晶片設計軟體公司 X 半導體及電子工程研究先鋒",
    },
    {
      image: "https://live.staticflickr.com/65535/54456102038_953f48dfcf_k.jpg",
      title: "新思每年投入數萬美金 頂尖研究大學與國家實驗室師資",
    },
    {
      image: "https://live.staticflickr.com/65535/54456101518_5e79f11883_k.jpg",
      title: "加開全英文國際梯次，核發英語修業證書",
    },
    {
      image: "https://live.staticflickr.com/65535/54456206100_14d894eb99_k.jpg",
      title: "專注於半導體核心技術：晶片設計、積體電路與製程，包含原理與硬體程式語言實作",
    },
    {
      image: "https://live.staticflickr.com/65535/54456207115_7e35330b12_k.jpg",
      title: "服務學員人數達400人",
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const rect = sliderRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        sliderRef.current.classList.add('visible');
      } else {
        sliderRef.current.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="service-slider" ref={sliderRef}>
      <h1 className='mg-b-30'>{t('我們的特色')}</h1>
      
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          426: {
            slidesPerView: 1,
          },
          769: {
            slidesPerView: 2,
          },
          1025: {
            slidesPerView: 4,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.image} alt={slide.title} />
              <h5>{t(slide.title)}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureSlider;
