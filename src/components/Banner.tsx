import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-red-100">
      <div className="container mx-auto flex items-center justify-between px-5">

        {/* Left Content */}
        <div className="w-1/2">

          <h1 className="text-5xl font-bold leading-tight text-[#07152f]">
            Build Your Ideal
          </h1>

          <h1 className="text-5xl font-bold leading-tight bg-amber-700 bg-clip-text text-transparent">
            Development Stack
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">

            <button className="rounded-lg bg-amber-600 px-6 py-3 font-medium text-white">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-gray-200 bg-white px-8 py-3 font-medium text-gray-700">
              Learn More
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/2 flex justify-center">
          <img
            src={bannerImg}
            alt="Development Stack"
            
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;