import Marquee from "react-fast-marquee";

const OurClients = () => {
    return (
        <div className="my-40">
            <div className="text-4xl text-center bg-blue-50 w-1/3 rounded-full m-auto mb-20 py-5 font-bold">Our Clients</div>
            <Marquee>
            <div className="flex gap-36">
                <img className="w-24" src="https://i.ibb.co/BnnzZxy/download.png" alt="" />
                <img className="w-24" src="https://i.ibb.co/y52k88Q/rfl-logo-62-D52-B1129-seeklogo-com.png" alt="" />
                <img className="w-24" src="https://i.ibb.co/SNR1TQw/IR-logo-final.gif" alt="" />
                <img className="w-24" src="https://i.ibb.co/LtLLQs5/acmeslogo.png" alt="" />
            </div>

            </Marquee>
        </div>
    );
};

export default OurClients;