function Footer() {
  return (
    <footer className="bg-purple-400" id="kontak">
      <div className="mx-6 lg:mx-12 pt-16 pb-4 max-w-xl md:max-w-full lg:max-w-5xl xl:max-w-screen-2xl md:px-8 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-0 space-x-4 lg:space-x-20">
          <div className="col-span-1 flex justify-left items-center">
            <img
              src="/image/logofooter.png"
              className="w-full max-w-lg h-auto "
              alt="logo"
            />
          </div>

          <div className="flex flex-col ml-10 lg:mx-auto w-72">
            <div>
              <div className="flex flex-col mb-2 lg:mb-4">
                <h2 className="title-font font-bold text-white text-md lg:text-xl">
                  Alamat
                </h2>
                <span className="bg-orange-100 rounded-none h-1 w-14 lg:w-16 mt-1"></span>
              </div>
              <p className="text-md lg:text-xl text-white tracking-wider font-extralight">
                Jl. Margonda Raya No.100, Pondok Cina, Beji, Kota Depok, Jawa
                Barat 16424
              </p>
            </div>

            <div className="flex flex-col mb-2 lg:mb-4 my-8">
              <h2 className="title-font font-bold text-white text-md lg:text-xl">
                UG Direktori
              </h2>
              <span className="bg-orange-100 rounded-none h-1 w-24 lg:w-28 mt-1"></span>
            </div>
            <nav className="flex flex-col space-y-1 lg:space-y-4 list-none text-md lg:text-xl text-white tracking-wider font-extralight">
              <a
                href="https://baak.gunadarma.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                BAAK
              </a>
              <a
                href="https://studentsite.gunadarma.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                STUDENTSITE
              </a>
              <a
                href="https://library.gunadarma.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                LIBRARY
              </a>
              <a
                href="https://v-class.gunadarma.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                V-CLASS
              </a>
            </nav>
          </div>

          <div className="lg:max-w-xl col-span-1 mt-8 lg:mt-0">
            <div className="flex flex-col mb-2 lg:mb-4">
              <h2 className="title-font font-bold text-white text-md lg:text-xl">
                Kontak
              </h2>
              <span className="bg-orange-100 rounded-none h-1 w-14 lg:w-16 mt-1"></span>
            </div>
            <nav className="list-none text-md lg:text-xl text-white tracking-wider font-extralight">
              <p>Phone : 062 - 21 - 78881070</p>
              <p className="mt-4">Fax : 062 - 21 - 78881071</p>
              <p className="mt-4">E-mail : lpug@gunadarma.ac.id</p>
            </nav>
          </div>
        </div>
        <div className="py-6">
          <div className="flex flex-col">
            <span className="bg-white rounded-none h-0.5 w-full"></span>
            <div className="flex flex-row text-white justify-between mt-4">
              <p className="text-sm lg:text-xl">© 2022 LPUG</p>
              <div className="flex space-x-3 justify-center items-center">
                <img src="/image/linkedin.svg" alt="linkedin" />
                <a
                  href="https://www.linkedin.com/company/lembaga-pengembangan-universitas-gunadarma/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm lg:text-xl font-bold underline"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
