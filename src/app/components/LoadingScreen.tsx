import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/95 backdrop-blur-md"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center">
        {/* Main rotating circle */}
        <motion.div
          className="w-24 h-24 rounded-full border-2 border-violet-500/20"
          animate={{
            rotate: 360,
            borderColor: [
              "rgba(139, 92, 246, 0.2)",
              "rgba(168, 85, 247, 0.2)",
              "rgba(139, 92, 246, 0.2)",
            ],
          }}
          transition={{
            rotate: { duration: 2, ease: "linear", repeat: Infinity },
            borderColor: { duration: 2, repeat: Infinity },
          }}
        />

        {/* Inner spinning gradient circle */}
        <motion.div
          className="absolute w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 translate-y-6"
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 3, ease: "linear", repeat: Infinity },
            scale: { duration: 2, repeat: Infinity },
          }}
          style={{ filter: "blur(8px)" }}
        />

        {/* Center dot */}
        <motion.div
          className="absolute w-3 h-3 bg-white rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ filter: "blur(2px)" }}
        />

        {/* Orbiting dots */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-violet-400 rounded-full"
            animate={{
              rotate: 360,
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              rotate: {
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                delay: index * 0.3,
              },
              opacity: {
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              },
            }}
            style={{
              width: "8px",
              height: "8px",
              transformOrigin: "50% 60px",
              filter: "blur(1px)",
            }}
          />
        ))}

        {/* Text effect */}
        <motion.div
          className="mt-8 text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.98, 1, 0.98],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
