import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-pink-400">
      <div >

        
        <div >

          <h1 >
            Build Your Ideal
          </h1>

          <h1 >
            Development Stack
          </h1>

          <p >
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

     
          <div >

            <button >
              Explore Technologies
            </button>

            <button >
              Learn More
            </button>

          </div>
        </div>

       
        <div >
          <img
            src={bannerImg}
            alt="Development Stack"
            className="w-[420px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;