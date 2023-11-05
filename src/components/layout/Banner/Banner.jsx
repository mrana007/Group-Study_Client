const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(https://i.ibb.co/k5fgtjW/3423-1.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://i.ibb.co/CPFHSW6/6183939-3074320.jpg"
              alt=""
              className="object-contain rounded-lg h-60 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl text-violet-400 font-bold">Collective Genius: The Group Study Hive</h1>
            <p className="mt-6 mb-8 text-lg text-green-300 sm:mb-12">
            Welcome to the treasure trove of knowledge and the path to academic excellence! Get ready to unveil the secrets of successful study techniques and embark on a transformative learning adventure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
