"use client";
import React, { SVGProps, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyBanner = ({
  className,
  hideOnScroll = false,
}: {
  className?: string;
  children?: React.ReactNode;
  hideOnScroll?: boolean;
}) => {
  const [open, setOpen] = useState(true);
  const [autoClosed, setAutoClosed] = useState(false);
  const { scrollY } = useScroll();

  // Only hide once on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (hideOnScroll && latest > 40 && !autoClosed) {
      setOpen(false);
      setAutoClosed(true); // prevent reopening
    }
  });

  return (
<motion.div
  className={cn(
    "sticky top-0 inset-x-0 z-40 flex items-center justify-center bg-pastel-blue-300 px-4 overflow-hidden",
    className
  )}
  initial={{ maxHeight: 0, opacity: 0 }}
  animate={{ maxHeight: open ? 120 : 0, opacity: open ? 1 : 0 }} // Increased height to 120px
  transition={{ duration: 0.3, ease: "easeInOut" }}
>
  <div className="w-full flex justify-center items-center relative py-4"> {/* Increased vertical padding */}
    {/* Centered Text */}
    <p className="text-white text-xl md:text-2xl font-semibold drop-shadow-md text-center">
      ⏳ Limited time: Get free credits before they’re gone!{" "}
      <a href="https://www.youtube.com" className="underline hover:text-gray-100 transition">
        Claim Now
      </a>
    </p>

    {/* Close Button */}
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
      onClick={() => setOpen(false)}
    >
      <CloseIcon className="h-6 w-6 text-white" />
    </motion.button>
  </div>
</motion.div>

  );
};

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
