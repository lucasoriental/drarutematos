import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  { id: 0, path: "/images/parcerias/medicare.png" },
  { id: 1, path: "/images/parcerias/rnaMedical.png" },
  { id: 2, path: "/images/parcerias/casa.png" },
  { id: 3, path: "/images/parcerias/emBreve.png" },
];

const Parcerias = () => {
  return (
    <div
      id="acordos_e_parcerias_container"
      className="py-24 bg-slate-50 font-montserrat  mx-auto"
    >
      <div className="w-[90%] mx-auto">
        <div className="mb-24 mx-auto">
          <h2 className="text-[2.5rem] xl:text-[3.75rem] font-bold text-center text-[#403e36]">
            Acordos e Parcerias
          </h2>
          <p className="text-[1.0625rem] text-center xl:text-[1.25rem] mt-[2.5rem] text-[#403e36] w-[90%] mx-auto">
            Saiba mais sobre os acordos e parcerias estabelecidos para facilitar
            o acesso aos meus serviços. Estes protocolos visam garantir um
            acompanhamento psicológico de qualidade, com condições vantajosas e
            adaptadas a diferentes contextos e necessidades.
          </p>
        </div>
        <Swiper
        className="max-w-7xl"
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            0: { slidesPerView: 1 },
            550: { slidesPerView: 2 },
            740: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                src={img.path}
                alt={`Parceria ${img.id + 1}`}
                className="w-40 h-40 xl:w-72 xl:h-72 object-cover shadow-lg mx-auto hover:scale-105 transition-transform duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Parcerias;
