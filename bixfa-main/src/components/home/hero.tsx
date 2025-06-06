export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white pt-24"
      style={{
        backgroundImage: "url('/dist/banners/Banner.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay Gradient for background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060f15]/80 to-[#060f15]/90 z-0"></div>

      {/* Hero Text */}
      <div className="relative z-10 ml-16">
        <h1 className="text-[60px] font-extrabold font-serif leading-tight mb-6">
          Where Every Detail is <br /> A Stroke of Nixer
        </h1>
        <p className="text-md font-light text-white/80 max-w-2xl">
          <i>We’re an innovative global UI/UX design agency building high-end products</i>
        </p>
      </div>

      {/* Photo Collage Section */}
      <div className="relative z-0 mt-24">
        <div className="w-full grid grid-cols-5 gap-4 px-4">
          {/* Column 1 */}
          <div className="col-span-1 mt-12">
            <img
              src="/dist/images/hero-images/img1.png"
              alt=""
              className="rounded-lg shadow-lg w-full object-cover h-[60%]"
            />
          </div>

          {/* Column 2 */}
          <div className="col-span-1 mt-10">
            <img
              src="/dist/images/hero-images/img2.png"
              alt=""
              className="rounded-lg shadow-lg w-full object-cover h-[50%]"
            />
          </div>

          {/* Column 3 (Taller Image) */}
          <div className="col-span-1 row-span-2 mt-8">
            <img
              src="/dist/images/hero-images/img3.png"
              alt=""
              className="rounded-lg shadow-lg w-full object-cover h-[75%]"
            />
          </div>

          {/* Column 4 (Two stacked) */}
          <div className="col-span-1 flex flex-col gap-4">
            <img
              src="/dist/images/hero-images/img5.png"
              alt=""
              className="rounded-lg shadow-lg w-full object-cover h-[30%]"
            />
            <img
              src="/dist/images/hero-images/img4.png"
              alt=""
              className="rounded-lg shadow-lg w-full object-cover h-[60%]"
            />
          </div>

          {/* Column 5 */}
          <div className="col-span-1 mt-12">
            <img
              src="/dist/images/hero-images/img6.png"
              alt=""
              className="rounded-lg shadow-lg w-full object-cover h-[50%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
