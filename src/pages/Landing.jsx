import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/illustration.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AboutContact from "../components/AboutContact";

function Landing() {
    const phrases = ["Wholesalers", "Manufacturers", "Retailers", "Suppliers"];
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [nextPhraseIndex, setNextPhraseIndex] = useState(1);
    const [isVisible, setIsVisible] = useState(true);
    
    useEffect(() => {
      // Create an interval for changing the text
      const interval = setInterval(() => {
        // First make the text disappear
        setIsVisible(false);
        
        // Wait for fade out animation, then change text and fade back in
        setTimeout(() => {
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setNextPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setIsVisible(true);
        }, 500);
        
      }, 3000); // Total time each phrase is shown
      
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">
      <Nav />
         {/* CTA Section */}
      <div className="text-center max-w-4xl mx-auto mt-10 px-2">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Connect <span 
            className={`text-yellow-500 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {phrases[currentPhraseIndex]} 
          </span>
          <br />
          & <span 
            className={`text-yellow-500 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {phrases[nextPhraseIndex]} 
          </span> Seamlessly.
        </h2>
    
           
          </div>
      <main className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-10 flex-grow overflow-x-hidden">
        {/* Text Section */}
        <div className="max-w-xl mb-10 md:mb-0 text-center md:text-left z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Boost your  <span className="text-yellow-400">Business.</span>
            <br />
            Start using our Services today.
          </h2>
          <p className="mt-6 text-gray-300 text-base sm:text-lg">
            A smart marketplace to streamline supply chains, reduce delays and
            grow your wholesale business.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/manufacturer/register"
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-300 transition"
            >
              Join as Manufacturer
            </Link>
            <Link
              to="/wholesaler/register"
              className="bg-white text-yellow-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-300 transition"
            >
              Join as Wholesaler
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 max-w-md mx-auto">
          <img
            src={illustration}
            alt="Manufacturers and Wholesalers"
            className="w-full h-auto object-contain"
          />
        </div>
      </main>
          
        {/* About & Contact Section */}
        <AboutContact/>
        {/* Footer Section */}
        <Footer/>
    </div>
  );
}

export default Landing;
