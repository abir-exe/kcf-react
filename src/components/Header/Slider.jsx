import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const Slider = () => {
    
    return (
        <div className='w-full mx-auto py-5'>
            <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
     autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
     spaceBetween={50}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="https://i.ibb.co/ZXcQJs0/japan.jpg" style={{width: "100%" }} alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/zmtntG8/teamwork.jpg" style={{width: "100%"  }} alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/jHYFcYj/build.jpg" style={{width: "100%"  }} alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/zmtntG8/teamwork.jpg" style={{width: "100%"  }} alt="" /></SwiperSlide>
      
    </Swiper>
        </div>
    );
};

export default Slider;