import { Link, usePage } from "@inertiajs/react";
import {
  BarChart2Icon,
  ListIcon,
  RotateCcwIcon,
  ShoppingCartIcon,
} from "lucide-react";

const navLinks = [
  {
    icon: ListIcon,
    href: "/",
  },
  {
    icon: RotateCcwIcon,
    href: "/history",
  },
  {
    icon: BarChart2Icon,
    href: "/statistics",
  },
];

export default function Nav() {
  const { url } = usePage();

  return (
    <nav className="bg-white py-10 flex flex-col justify-between items-center">
      <Link href="/" className="px-6">
        <img src="images/logo.svg" />
      </Link>

      <ul className="self-stretch space-y-10">
        {navLinks.map((item) => (
          <li
            className={url === item.href ? "navlink selected" : "navlink"}
            key={item.href}
          >
            <Link href={item.href}>
              <item.icon size={26} />
            </Link>
          </li>
        ))}
      </ul>

      <button className="relative bg-primary rounded-full text-white p-3">
        <span className="bg-red-500 absolute w-5 h-5 rounded -top-1 -right-1 text-xs flex justify-center items-center">
          3
        </span>
        <ShoppingCartIcon size={20} />
      </button>
    </nav>
  );
}
