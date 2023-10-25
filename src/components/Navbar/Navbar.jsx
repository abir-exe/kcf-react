import logo from "../../../public/images/Kagu.png"

const Navbar = () => {
    return (
        <div className="border-b pb-2 md:sticky md:top-0 bg-white">
            <nav className="py-3">
            <div className="flex justify-between items-center">
                <div className="">
                    <div className="w-40 ml-10"><img src={logo} alt="" /></div>
                </div>
                <ul className="flex flex-col md:flex-row lg:flex-row justify-between gap-5">
                    <li><button
                            className="px-3 py-2 md:px-2 md:py-1 lg:px-9 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"><a
                                href="#home">Home</a></button></li>
                    <li><button
                            className="px-3 py-2 md:px-2 md:py-1 lg:px-9 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"><a
                                href="#wwd">What We Do</a></button></li>
                    <li><button
                            className="px-3 py-2 md:px-2 md:py-1 lg:px-9 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"><a
                                href="#wwo">What We Offer</a></button></li>
                    <li><button
                            className="px-3 py-2 md:px-2 md:py-1 lg:px-9 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"><a
                                href="#successful">Success Story</a></button></li>
                    <li><button
                            className="px-3 py-2 md:px-2 md:py-1 lg:px-9 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"><a
                                href="#wwa">Who We Are</a></button></li>
                    <li><button
                            className="px-3 py-2 md:px-2 md:py-1 lg:px-9 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"><a
                                href="#cus">Contact Us</a></button></li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;