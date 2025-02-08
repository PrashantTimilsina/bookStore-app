import banner from "./../../public/Banner.jpg";
function Banner() {
  return (
    <>
      <div className="container mx-auto my-10 flex max-w-screen-2xl flex-col px-4 md:flex-row md:px-20">
        <div className="order-2 mt-12 w-full md:order-1 md:mt-32 md:w-1/2">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something
              <span className="text-pink-500"> new everyday!!</span>
            </h1>
            <p className="text-xl">
              Discover a world of knowledge and adventure through our carefully
              curated books. Whether you're into thrilling stories, insightful
              guides, or educational reads, we have something for everyone.
              Start your journey today!
            </p>
            <label className="input input-bordered flex items-center gap-2 dark:border-white dark:bg-slate-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow text-black dark:bg-slate-900"
                placeholder="Email"
                spellCheck="false"
              />
            </label>
          </div>
          <button className="btn btn-secondary mt-6">Get Started</button>
        </div>
        <div className="order-1 w-full rounded-3xl md:ml-3 md:mt-8 md:w-1/2">
          <img src={banner} className="w-92 h-92 rounded-lg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
