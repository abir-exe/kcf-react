const ContactUs = () => {
  function handleInputChange(event) {
    const input = event.target;
    const inputValue = input.value;

    // Regular expression to check for links (URLs)
    const linkPattern = /^(http|https):\/\/[^\s$.?#].[^\s]*$/i;

    if (linkPattern.test(inputValue)) {
      // If a link is detected, clear the input field and show an error message
      input.value = "";
      alert("Links are not allowed. Please remove the link from your message.");
    }
  }

  return (
    <div id="cus" className="">
      <section id="cu" className="mt-12 px-5">
        <div className="text-4xl text-center bg-blue-50 w-1/3 rounded-full m-auto mb-12 py-5 font-bold">
          Contact Us
        </div>

        {/* <!-- input Fields  --> */}
        <form className="ml-5"
          action="https://formsubmit.co/kagaku.kcf09@gmail.com"
          method="POST"
        >
          {/* <!-- field1  --> */}
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text">
                Name <span className="text-red-600 text-xl font-bold">*</span>
              </span>
              <span className="label-text-alt"></span>
            </label>
            <input
              name="Name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xl"
              maxLength={256}
              required
            />
            <label className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt"></span>
            </label>
          </div>
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text">
                Email <span className="text-red-600 text-xl font-bold">*</span>
              </span>
              <span className="label-text-alt"></span>
            </label>
            <input
              name="Email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xl"
              maxLength={256}
              required
            />
            <label className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt"></span>
            </label>
          </div>
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text">
                Subject{" "}
                <span className="text-red-600 text-xl font-bold">*</span>
              </span>
              <span className="label-text-alt"></span>
            </label>
            <input
              name="Subject"
              placeholder="Subject"
              className="input input-bordered w-full max-w-xl "
              maxLength={256}
              required
            />
            <label className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt"></span>
            </label>
          </div>
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text">
                Message{" "}
                <span className="text-red-600 text-xl font-bold">*</span>
              </span>
              <span className="label-text-alt"></span>
            </label>
            <textarea name="Message"
              type="text"
              placeholder="your message(maximum limit = 2000 words)" className="textarea textarea-bordered textarea-lg w-full max-w-full" maxLength={2000}
              onChange={handleInputChange}
              required ></textarea>
            <label className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt"></span>
            </label>
          </div>
          <button className="bg-blue-100 font-semibold text-xl px-32 rounded-lg py-3 hover:text-white hover:bg-blue-300 mb-12">
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
