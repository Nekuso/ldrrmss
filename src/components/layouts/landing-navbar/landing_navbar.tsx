import { LandingNavbarContents } from "./landing_navbar_contents";

export default function LandingNavbar() {
  return (
    <div className="flex w-full h-fit justify-center place-items-center items-center px-5 py-4 bg-gray-900 text-white sticky top-0 z-[20]">
      <div className="w-[90%] flex justify-between place-items-center">
        <LandingNavbarContents />
        <div className="flex items-center gap-4 mx-6"></div>
      </div>
    </div>
  );
}
