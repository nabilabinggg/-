function Alur() {
  return (
    <section className="text-gray-600 body-font overflow-hidden" id="alur">
      <div className="flex flex-col">
        <div className="flex flex-col mt-24 mb-8 mx-10 lg:mx-24">
          <h1 className="text-xl lg:text-3xl font-bold mb-1 lg:mb-4">Alur Pendaftaran</h1>
          <span className="bg-orange-100 rounded-none h-1 lg:h-2 w-28 ml-6 lg:ml-14"></span>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col mt-16 lg:mt-52">
            <img src="/image/vector5.svg" className="left-0 w-12 lg:w-36 h-auto" alt="shapebulat" />
          </div>
          <div className="w-full">
            <img src="/image/alur.png" className="w-full max-w-sm lg:max-w-6xl" alt="alurdaftar"/>
          </div>
        </div>
        <div className="flex justify-end">
          <img src="/image/vector1.png" className="right-0 w-12 lg:w-36 h-auto" alt="bunga1"/>
        </div>
      </div>
    </section>
  );
}

export default Alur;
