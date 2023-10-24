const WhoWeAre = () => {
  return (
    <div>
      <section className="mt-24 w-10/12 mx-auto">
        <div className="text-4xl text-center bg-blue-50 w-1/3 mx-auto rounded-full mb-12 py-5 font-bold">
          Who We Are
        </div>

        {/* <!-- card container  --> */}
        <div className="grid grid-cols-3  gap-8">
          <div className="rounded-xl card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
              className="rounded-t-md"
                src="https://i.ibb.co/gyyZFDd/HR-business-partner-cover.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">John Doe</h2>
              <h2 className="">Designer</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className="rounded-md card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
              className="rounded-t-md"
                src="https://i.ibb.co/gyyZFDd/HR-business-partner-cover.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">John Doe</h2>
              <h2 className="">Designer</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className=" rounded-md card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
              className="rounded-t-md"
                src="https://i.ibb.co/gyyZFDd/HR-business-partner-cover.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">John Doe</h2>
              <h2 className="">Designer</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
