import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pg-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Hacá va un texto para el Hero del E-Commerce
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            Vendemos los mejores productos para vos. Somos los mejores así que
            vengan a comprarnos al E-commerce
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            {/* <Image /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
