

const WhatWeOffer = () => {
    return (
        <div className="">
            <section className="mt-12 h-screen p-5">
  <div className="text-4xl text-center bg-blue-100 w-1/3 rounded-full m-auto mb-12 py-5 font-bold">What We Offer</div>

  <div className="cardcontainer grid grid-cols-4 gap-4 mt-24">
    {/* Card 1 */}
    <div className="rounded-xl bg-slate-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Consultancy</h2>
        <p className="mt-4">
          KCF Consultancy BORNED with the nurturing of a group of experts in Drug -Design and Synthesis, Industrial Process Research and Development followed by Synthesis... <br />
          <span className="text-sm font-bold italic hover:cursor-pointer" onClick={()=>document.getElementById('my_modal_5').showModal()}>read more...</span>
        </p>
      </div>
    </div>

    {/* Modal 1 */}
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Consultancy</h3>
        <p className="py-4">
          KCF Consultancy BORNED with the nurturing of a group of experts in Drug -Design and Synthesis, Industrial Process Research and Development followed by Synthesis. KCF is capable of handling the synthesis of active pharmaceutical ingredients (API), commercial API synthesis-process development, R&D laboratory design, laboratory setup, and pilot-plant set-up. The process development and API synthesis were exploited with more than 19 years of experience, service, and a robust portfolio of satisfied customers. Along with this, KCF is also involved in sourcing, procurement, and supply of essential raw materials, excipients, lab accessories, and analytical instruments.
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>

    {/* Card 2 */}
    <div className="rounded-xl bg-slate-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Japan Car Trade</h2>
        <p className="mt-4">
          Welcome to our specialized consultancy service for Japan car buying from auctions! Our team of experts is dedicated to guiding you through the intricate world of Japanese auto... <br />
          <span className="text-sm font-bold italic hover:cursor-pointer" onClick={()=>document.getElementById('my_modal_6').showModal()}>read more...</span>
        </p>
        <div className="card-actions justify-end mt-5"></div>
      </div>
    </div>

    {/* Modal 2 */}
    <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Japan Car Trade</h3>
        <p className="py-4">
          Welcome to our specialized consultancy service for Japan car buying from auctions! Our team of experts is dedicated to guiding you through the intricate world of Japanese auto auctions, ensuring a smooth and informed purchasing experience. We leverage our extensive knowledge of the Japanese automotive market, auction processes, and vehicle conditions to help you find the perfect car at the best possible price. From advising on bidding strategies to providing detailed vehicle histories, we are committed to assisting you in securing the ideal Japanese vehicle that suits your preferences and requirements.
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>

    {/* Card 3 */}
    <div className="rounded-xl h-80 bg-slate-500 shadow-xl text-white">
      <div className="card-body">
        <h2 className="card-title">Automobile Trading</h2>
        <p className="mt-4">
          KCF has a goodwill deal, and through that, we offer door-to-door service for Japanese cars, car accessories, reconditioning engines, and all kinds of parts for cars...{" "} <br />
          <span className="text-sm font-bold italic hover:cursor-pointer" onClick={()=>document.getElementById('my_modal_7').showModal()}>read more...</span>
        </p>
      </div>
    </div>

    {/* Modal 3 */}
    <dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Automobile Trading</h3>
        <p className="py-4">
          KCF has a goodwill deal, and through that, we offer door-to-door service for Japanese cars, car accessories, reconditioning engines, and all kinds of parts for Japanese cars. KCF also deals with a wide range of battery supplies for cars, trucks, forklifts, and all kinds of heavy-duty machinery.
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>

    {/* Card 4 */}
    <div className="rounded-xl bg-slate-700 shadow-xl text-white">
      <div className="card-body">
        <h2 className="card-title">E-commerce</h2>
        <p className="mt-4">
          Explore a fantastic collection of genuine Japanese products through our unique online store, designed especially for people in Bangladesh. Discover the beauty of... <br />
          <span className="text-sm font-bold italic hover:cursor-pointer" onClick={()=>document.getElementById('my_modal_8').showModal()}>read more...</span>
        </p>
        <div className="card-actions justify-end mt-5"></div>
      </div>
    </div>

    {/* Modal 4 */}
    <dialog id="my_modal_8" className="modal modal-bottom sm:modal-middle text-black">
      <div className="modal-box">
        <h3 className="font-bold text-lg">E-commerce</h3>
        <p className="py-4">
          Explore a fantastic collection of genuine Japanese products through our unique online store, designed especially for people in Bangladesh. Discover the beauty of Japanese culture, from traditional crafts to modern favorites—all just a click away. Our dedicated team ensures smooth delivery to Bangladesh and other countries, bringing the best of Japan to your door. Enjoy the authentic charm of Japan, one delightful item at a time!
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</section>

        </div>
    );
};

export default WhatWeOffer;