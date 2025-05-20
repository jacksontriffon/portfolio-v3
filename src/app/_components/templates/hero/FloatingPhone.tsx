import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";

export const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="bg-antique-500 rounded-[24px]"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-r-4 border-b-4 border-white border-t-neutral-200 border-l-neutral-200 bg-neutral-900 p-1 pt-[3px] pl-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute top-2.5 left-[50%] z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute top-2 right-3 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full overflow-hidden rounded-[20px] bg-white">
      <div className="pt-10">
        <AnimatePresence mode="wait">
          <div className="flex flex-col items-center justify-center">
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-antique-200 w-36 text-center text-xs font-medium"
            >
              Scan the QR Code with your phone
            </motion.p>
          </div>
        </AnimatePresence>
        <div className="flex w-full items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                className="w-48"
                src={"/QR code Black.svg"}
                alt="QR Code"
                width={1000}
                height={1000}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.button
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
          className="text-antique-900 absolute right-4 bottom-4 left-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium backdrop-blur"
        >
          Only if you need to!
        </motion.button>
      </AnimatePresence>

      <div className="bg-antique-200 absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full" />
    </div>
  );
};
