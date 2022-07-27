import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Tentang extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      fade: true
    };
    return (
      <section className="text-gray-600 body-font overflow-hidden" id="tentang">
        <div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <img
                src="/image/vector4.png"
                className="left-0 w-11 lg:w-28 h-auto"
                alt="vector flower"
              />
            </div>
            <div className="flex flex-col mt-14 lg:mt-24 mb-8 mx-0 lg:mx-8">
              <h1 className="text-xl lg:text-3xl font-bold mb-1 lg:mb-4">
                Tentang
              </h1>
              <span className="bg-orange-100 rounded-none h-1 lg:h-2 w-7 lg:w-14 ml-6"></span>
            </div>
          </div>
          <div className="flex flex-wrap mb-0 lg:mb-10 mx-8 lg:mx-24 justify-between">
            <div className="w-full lg:w-1/2 flex justify-center items-center lg:-mx-14">
              <img
                className="object-cover object-left h-80 w-auto lg:h-auto lg:w-full mb-6"
                src="/image/tentang.png"
                alt="content"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <Slider {...settings}>
                <div className="bg-white rounded-xl border-gray-100 border-2 p-4 lg:p-12 h-full">
                  <p className="text-sm lg:text-xl tracking-wider text-left leading-loose">
                    Lembaga Pengembangan Universitas Gunadarma merupakan unit
                    struktural yang berada di tingkat universitas. Tugas dan
                    tanggung jawabnya adalah melakukan koordinasi pelaksanaan
                    kegiatan pendidikan dan pelatihan berbasis TIK yang
                    diperuntukkan untuk mahasiswa di luar kegiatan perkuliahan
                    di kelas, atau untuk masyarakat umum dengan berkoordinasi
                    dengan unit terkait.
                  </p>
                </div>
                <div className="bg-white rounded-xl border-gray-100 border-2 p-4 lg:p-12 h-full">
                  <p className="text-sm lg:text-xl tracking-wider text-left leading-loose">
                    Lembaga Pengembangan ini membawahi lembaga pengembangan di
                    tingkat fakultas, yaitu Lembaga Pengembangan Komputerisasi
                    (LePKom) , Lembaga Pengembangan Teknologi (LePTek), Lembaga
                    Pengembangan Manajemen dan AKuntansi (LePMA), Lembaga
                    Pengembangan Sastra dan Bahasa (LePSaB), Lembaga
                    Pengembangan Teknik Sipil dan Perencanaan (LePTSP), Lembaga
                    Pengembangan Psikologi (LePPsi). Selain kegiatan pelatihan
                    bersertifikasi nasional, lembaga pengembangan juga
                    melaksanakan kegiatan pelatihan bersertifikat Regional dan
                    Internasional. Pelatihan bersertifikat Regional yang
                    diselenggarakan adalah pelatihan Value Plus, sedangkan
                    pelatihan bersertifikat Internasional adalah Oracle, Cisco,
                    Java dan SAP.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
