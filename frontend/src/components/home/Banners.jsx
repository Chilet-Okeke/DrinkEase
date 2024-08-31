import React from "react";

export default function Banners() {
  return (
   <div className="w-full">
     <div className="min-h-[400px] mt-20 w-full mx-auto flex items-center justify-center relative">
      <img
        // src={data?.backgroundImage}
        src="https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e2866783a68325c8d897d6d_dose-juice-mP0xREKwrqg-unsplash.jpg"
        alt=""
        className="absolute z-10 object-cover w-full h-full"
      />
      <div className="w-full z-20 h-full flex items-center justify-center">
        <h2 className="text-5xl font-black family2">
          Say hello to good-for-you ingredients
        </h2>
      </div>
    </div>
   </div>
  );
}
