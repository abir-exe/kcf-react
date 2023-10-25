import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import OurClients from "../components/OurClients/OurClients";
import SuccessStory from "../components/SuccessStory/SuccessStory";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import WhatWeOffer from "../components/WhatWeOffer/WhatWeOffer";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";


const Home = () => {
    return (
        <div id="home" className="md:relative max-w-[1360px] mx-auto">
            <Navbar></Navbar>
            <Header></Header>
            <WhatWeDo></WhatWeDo>
            <WhatWeOffer></WhatWeOffer>
            <SuccessStory></SuccessStory>
            <WhoWeAre></WhoWeAre>
            <OurClients></OurClients>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;