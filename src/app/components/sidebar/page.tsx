import Image from "next/image";
import Link from "next/link";
import { sideLinks } from "../../components/sidebar/sideLinks";

export default function SideBar() {
  return (
    <div className="flex flex-col place-items-center justify-start min-w-52 h-full p-4 bg-darkComponentBg border border-lightBorder rounded-2xl gap-4 bg-white">
      <div className="w-full flex flex-col gap-4">
        {sideLinks.map((link, i) => {
          const { title, href, icon } = link;
          return (
            <Link
              href={href}
              className="w-full hover:bg-white hover:text-black text-xs font-medium p-4 rounded-lg flex items-center"
              key={`b_${i}`}
            >
              {icon}
              <span className="ml-2">{title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
