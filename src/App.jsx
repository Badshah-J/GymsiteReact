import { useEffect, useRef, useState } from "react";
import LoadingSpinner from "./Components/Loding";
import { BiUpArrowCircle } from "react-icons/bi";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import Nav from "./Components/Nav";
import Trainers from "./Components/Trainers";
import Gallary from "./Components/Gallary";
import Contact from "./Components/Contact";
import Faq from "./Components/Faq";
function App() {
  const [menustatus, setMenustatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const trainersRef = useRef(null);
  const goUpRef = useRef(null);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false); // Hide loading spinner after content loads
      // console.log(ok);
    }, 2000); // Change this value to suit your loading time

    // Clean up function
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array to run effect only once on component mount
  const scrollToUp = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Nav
            setMenustatus={setMenustatus}
            menustatus={menustatus}
            refs={{ galleryRef, contactRef, homeRef, trainersRef, goUpRef }}
          />
          <main ref={homeRef}>
            <div className="max-w-[100svw] h-[555px] md:h-[calc(70svh-45px)] hero-img p-4  flex items-center justify-evenly md:flex-row flex-col relative">
              <div className="h-full w-full absolute bg-[#805d6f] opacity-5 z-0"></div>

              <div className="z-10 relative ">
                <div className="text-white text-xl flex gap-4 ml-3">
                  <button className="hover:text-jaggyellow">
                    <FaWhatsapp />
                  </button>
                  <button className="hover:text-jaggyellow">
                    <FaInstagram />
                  </button>
                  <button className="hover:text-jaggyellow">
                    <FaFacebookF />
                  </button>
                </div>
                <h1 className="font-bold text-6xl text-jaggyellow leading-none heading">
                  JOIN US
                </h1>
                <p className="text-xl text-white font-bold">
                  Transform Your Body, Transform Your Life: Start Your Fitness
                  Journey Today!
                </p>
                <button className="bg-jaggyellow font-bold rounded-md p-[5px_7px] mt-2">
                  Start Free Trial
                </button>
              </div>
              <div className="bg-yellow-500 rounded-full h-24 w-24 flex flex-col items-center justify-center text-white">
                <h1>Today</h1>
                <p>
                  <span className="font-bold text-xl">50%</span>off
                </p>
              </div>
              <div className="absolute bottom-4 text-center flex gap-4">
                <div className="h-[15px] w-[15px] border-2 border-jaggyellow rounded-full "></div>
                <div className="h-[15px] w-[15px] border-2 border-jaggyellow rounded-full bg-jaggyellow"></div>
                <div className="h-[15px] w-[15px] border-2 border-jaggyellow rounded-full"></div>
              </div>
            </div>
          </main>
          <Trainers trainersRef={trainersRef} />
          {/* gallery section start */}

          <Gallary galleryRef={galleryRef} />
          {/* gallery section ends */}

          {/* faQ section starts */}
          <Faq />

          {/* contact us section start */}
          <Contact contactRef={contactRef} />
          {/* contact us section end */}

          {/* Footer Start */}
          <footer className="w-full mx-auto bg-jaggyblue text-white text-center text-2xl p-4">
            @copyright jagdish 2024
          </footer>
          {/* button for upScrolling */}
          <div
            onClick={() => scrollToUp(goUpRef)}
            className="h-[50px] w-[50px] fixed bg-jaggyellow right-0 bottom-2 rounded-full flex items-center justify-center z-10 cursor-pointer"
          >
            <BiUpArrowCircle className="text-[#0e0c22] text-6xl" />
          </div>
        </>
      )}
    </>
  );
}

export default App;
