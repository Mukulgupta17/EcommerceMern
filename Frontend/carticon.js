import { motion } from "framer-motion";
import React from "react";

const cartVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1, rotate: 10 },
  tap: { scale: 0.9, rotate: -10 },
};

// const cartVariants = {
//   initial: { scale: 1 },
//   hover: { scale: 1.1, rotate: 10 },
//   tap: { scale: 0.9, rotate: -10 },
//   added: { scale: 1.2, transition: { yoyo: Infinity, duration: 0.5 } },
// };

// const cartVariants = {
//   initial: { scale: 1 },
//   hover: { scale: 1.1, rotate: 10 },
//   tap: { scale: 0.9, rotate: -10 },
//   error: { x: [0, -10, 10, -10, 0], transition: { duration: 0.5 } },
// };

const CartIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="48"
    height="48"
    variants={cartVariants}
    initial="initial"
    whileHover="hover"
    whileTap="tap"
    style={{ cursor: "pointer" }}
    fill="blue"
  >
    <path d="M7 18c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0-3c.553 0 1 .447 1 1s-.447 1-1 1-1-.447-1-1 .447-1 1-1zm10 3c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0-3c.553 0 1 .447 1 1s-.447 1-1 1-1-.447-1-1 .447-1 1-1zm-9.743-2h10.379c.449 0 .854-.291.968-.725l1.431-5.447c.043-.163.065-.332.065-.503 0-1.104-.896-2-2-2h-12.372l-.833-4.444c-.042-.222-.127-.429-.244-.621-.14-.226-.338-.41-.579-.528s-.518-.158-.798-.144h-1.815v2h1.504l.71 3.791-.748 4.003c-.026.131-.042.263-.048.396 0 1.104.896 2 2 2zm10.377-2h-10.354l.748-4h11.602l-1.431 4z" />
  </motion.svg>
);

export default CartIcon;
