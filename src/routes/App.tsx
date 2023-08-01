import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Navbar from "../component/navbar";
import Product from "../component/Product";
import Footer from "../component/Footer";
import Container from "../component/container";

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Swiper
          className="rounded-md"
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <div className="w-full h-[350px] flex justify-center items-center bg-gray-100">
              <p>slider 1</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[350px] flex justify-center items-center bg-gray-100">
              <p>slider 2</p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="grid grid-cols-6 gap-4 mt-8">
          {Array(20)
            .fill(0)
            .map((_) => (
              <Product />
            ))}
        </div>
        <div className="grid place-items-center mt-4">
          <button className="px-10 py-2 border border-black/50 hover:border-black/100 transition-all duration-100 rounded-md ">
            Muat Lebih Banyak
          </button>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default App;
