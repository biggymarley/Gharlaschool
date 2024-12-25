import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
    <div className="relative w-[600px] h-[600px]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <DotLottieReact
          src="https://lottie.host/1734c84b-d01e-4b87-b541-02fa104cfb86/RFFD4XNPug.lottie"
          loop
          autoplay
          style={{ width: "300px" }}
        />
        <h1 className="text-2xl font-bold mb-4 uppercase font text-white text-center">
          gharla skate school
        </h1>
      </div>
    </div>
  </div>
);