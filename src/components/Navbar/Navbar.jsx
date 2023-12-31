import logo from "../../../public/images/Kagu (1).png"

const Navbar = () => {
    return (
        <div className="border-b pb-2 md:sticky md:top-0 z-10 bg-white">
            <nav className="py-3">
            <div className="flex justify-between items-center">
                <div className="">
                    <div className="w-40 ml-10"><img src={logo} alt="" /></div>
                </div>
                <ul className="flex flex-col md:flex-row lg:flex-row justify-between gap-5 text-sm">
                    <li><button
                            className="px-3 py-2 md:px-2 md:py-1 lg:px-9 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"><a
                                href="#home">HOME</a></button></li>
                    <li><button
                            className="px-3 py-2 md:px-2 md:py-1 lg:px-9 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"><a
                                href="#wwd">WHAT WE DO</a></button></li>
                    <li><button
                            className="px-3 py-2 md:px-2 md:py-1 lg:px-9 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"><a
                                href="#wwo">WHAT WE OFFER</a></button></li>
                    <li><button
                            className="px-3 py-2 md:px-2 md:py-1 lg:px-9 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"><a
                                href="#successful">SUCCESS STORY</a></button></li>
                    <li><button
                            className="px-3 py-2 md:px-2 md:py-1 lg:px-9 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"><a
                                href="#wwa">WHO WE ARE</a></button></li>
                    <li><button
                            className="px-3 py-2 md:px-2 md:py-1 lg:px-9 lg:py-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-gray-100 hover:text-blue-400"><a
                                href="#cus">CONTACT US</a></button></li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;