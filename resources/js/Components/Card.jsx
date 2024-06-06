import React from "react";
import { twMerge } from "tailwind-merge";

export default function Card({ children, className, onClick }) {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        "rounded-xl bg-white shadow-md px-4 py-3 font-medium cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
