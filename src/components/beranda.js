import { ArrowRightIcon } from "@heroicons/react/solid";

function Beranda() {
  return (
    <section className="text-gray-600 body-font overflow-hidden mx-10 my-16 lg:mx-24" id="beranda">
      <div className="container flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col justify-end mb-0 lg:mb-16 w-full lg:w-1/2">
          <div className="items-center justify-center text-3xl lg:text-5xl mb-4 lg:mb-10">
            <h1 className="text-black font-semibold">Lembaga Pengembangan</h1>
            <h2 className="text-purple-300 font-semibold">
              Universitas Gunadarma
            </h2>
          </div>
          <p className="text-sm lg:text-xl tracking-wider w-full lg:w-2/3 mb-6 lg:mb-14">
            Lembaga Pengembangan Universitas Gunadarma merupakan unit struktural
            yang berada di tingkat universitas.
          </p>

          <button className="inline-flex items-center justify-center bg-purple-300 border-0 rounded-lg w-40 h-11 focus:outline-none hover:bg-gray-200 text-white">
            Lebih Lanjut
            <ArrowRightIcon className="ml-3 h-4 w-4" />
          </button>
        </div>
        <div className="w-full lg:w-1/2 h-auto">
          <img
            className="items-center justify-center h-full w-auto"
            src="/image/slider.png"
            alt="slider"
          />
        </div>
      </div>
    </section>
  );
}

export default Beranda;
