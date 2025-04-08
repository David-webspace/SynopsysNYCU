import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'
import '../slider.css'
import { useTranslation } from 'react-i18next';


const FeatureSlider = () => {
   // ==================== Language Select ====================
  const { t, i18n } = useTranslation();
  
  const slides = [
    {
        image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "全球第一晶片設計軟體公司 X 半導體及電子工程研究先鋒",
    },
    {
        image: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800", 
        title: "新思每年投入數萬美金 頂尖研究大學與國家實驗室師資",
    },
    {
        image: "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "加開全英文國際梯次，核發英語修業證書",
    },
    {
        image: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "專注於半導體核心技術：晶片設計、積體電路與製程，包含原理與硬體程式語言實作",
    },
    {
        image: "https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "服務學員人數達400人",
    }
  ];

  return (
    <div className="service-slider">
      <h1 className='mg-b-30'>{t('我們的特色')}</h1>
      {/* <p>數位轉型是工廠管理的靈藥，更是團隊蛻變的過程</p> */}
      
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
          640: {
            slidesPerView: 2,
          },
          1024: {
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
