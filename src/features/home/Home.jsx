import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";


function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>D Rohith Syam Livingston | Home</title>
      </Helmet>

      <div className="relative flex min-h-[75svh] items-center overflow-hidden bg-gray-900 font-[Poppins] text-white">
        
        {/* Large Background Text */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute left-10 z-10 text-[10rem] font-extrabold leading-none text-gray-700 opacity-30 max-sm:hidden"
        >
          <h1>I BUILD</h1>
          <h1>SOLUTIONS</h1>
        </motion.div>

        <div className="relative z-20 flex flex-col items-center gap-y-10 p-4 md:w-full md:flex-row md:items-center md:justify-between md:px-28">
          <div className="text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              className="text-2xl font-bold md:text-2xl xl:text-7xl"
            >
              D Rohith Syam Livingston
            </motion.h2>

            <br />

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="typewriter w-max"
            >
              <h2 className="text-xl font-bold md:text-2xl opacity-80">
                Full Stack Web Developer
              </h2>
            </motion.div>

            {/* Buttons Wrapper */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-10 flex flex-wrap justify-start md:justify-center gap-4"
            >
              <Link to="/projects">
                <button className="bg-accentColor px-6 py-2.5 font-medium text-white md:px-9 md:text-xl transition-transform hover:scale-105">
                  View Work
                </button>
              </Link>

              <Link to="/contact">
                <button className="border-2 border-accentColor px-5 py-2 text-textColor md:px-8 md:text-xl transition-transform hover:scale-105">
                  Contact Me
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      
    </HelmetProvider>
  );
}

export default Home;
