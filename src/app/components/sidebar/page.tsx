import Link from "next/link";
import { sideLinks } from "../../components/sidebar/sideLinks";

export default function SideBar() {
  return (
    <div className="flex flex-col place-items-center justify-start min-w-56 h-full p-3 border rounded-3xl bg-white shadow-2xl">
      <div className="w-full flex flex-col gap-3 text-black">
        {sideLinks.map((link, i) => {
          const { title, href, icon } = link;
          return (
            <Link
              href={href}
              className="w-full hover:bg-neutral-300 hover:text-black text-base font-medium p-4 rounded-lg flex items-center "
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
