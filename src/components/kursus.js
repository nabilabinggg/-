import kursus from "../data/kursus.json";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Kursus() {
  return (
    <section className="text-gray-600 body-font overflow-hidden" id="kursus">
      <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col mt-14 lg:mt-24 mb-4 lg:mb-8 mx-10 lg:mx-24">
          <h1 className="text-xl lg:text-3xl font-bold mb-1 lg:mb-4">Kursus</h1>
          <span className="bg-orange-100 rounded-none h-1 lg:h-2 w-7 lg:w-14 ml-4 lg:ml-6"></span>
        </div>
        <div className="flex flex-col">
          <img src="/image/vector2.png" className="right-0 w-12 lg:w-36 h-auto" alt="vector flower"/>
        </div>
      </div>
        <div className="flex flex-wrap mb-10 mx-8 lg:mx-24">
          {kursus.map((kursus) => {
            return (
              <div className="w-1/3 cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-2">
                <div className="bg-white rounded-xl shadow-lg p-2 lg:p-12">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="object-contain object-center h-20 lg:h-36 w-full mb-2 lg:mb-6"
                      src={kursus.img}
                      alt="content"
                    />
                    <ChevronDownIcon className="items-center h-10 lg:h-20 w-10 lg:w-20 opacity-30" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <img src="/image/vector3.png" className="left-0 w-11 lg:w-28 h-auto" alt="vector flower" />
        </div>
        </div>
    </section>
  );
}

export default Kursus;
