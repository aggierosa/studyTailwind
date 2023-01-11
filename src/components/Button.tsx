import React from "react";
import { Loading } from "./Loading";

interface ButtonTypes {
  label?: string;
  isLoading?: boolean;
  width?: string;
  icon?: any;
}

export const Button = ({
  label,
  isLoading = false,
  width = "100px",
  icon,
}: ButtonTypes) => {
  return (
    <div className="flex space-x-2 justify-center">
      {isLoading ? (
        <button
          type="submit"
          className="flex justify-center px-6 py-2.5 text-white font-medium text-xs leading-tight rounded active:bg-opacity-20 transition duration-150 ease-in-out"
        >
          <Loading />
        </button>
      ) : (
        <button
          type="submit"
          className="flex justify-center px-6 py-2.5 text-white font-medium text-xs leading-tight rounded  hover:text-gray-200 active:outline-gray-200  focus:outline-none transition duration-150 ease-in-out"
        >
          <span>{icon}</span>
          {label}
        </button>
      )}
    </div>
  );
};
