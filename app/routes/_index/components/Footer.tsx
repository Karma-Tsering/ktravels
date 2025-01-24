import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
      <footer
          id="footer"
      className="relative h-[200px] bg-gray-700 text-gray-50"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed  bottom-0 h-[200px] w-full bg-[url('/assets/mountains.jpg')] bg-cover bg-center">
        <div className=" flex flex-col items-start justify-center px-4 h-full">
          <p className=" text-white text-2xl font-bold">Karma Tsering</p>
          <div className=" flex items-center gap-x-2 text-sm">
            <SiGmail className="inline-block text-primary-500" />
            <p>ktravels@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
