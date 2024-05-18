import Link from "next/link";
export default function Nav() {
  return (
    <nav className="w-full shadow-gray-900 shadow-md">
      <div className="px-auto max-w-7xl mx-auto py-14 mb-10 flex w-auto items-center justify-between">
        <div className="icon-app w-1/4 ">
          <Link href={"/"}>
            <h1 className="hover:font-bold transition-all hover:scale-105">
              AlulCode
            </h1>
          </Link>
        </div>
        <div className="w-2/4 text-center text-sm hover:font-bold transition-all hover:scale-105">
          <span>Junior Web Developer Indonesia</span>
        </div>
        <div className="w-1/4 flex justify-end ">
          <ul className="flex gap-4">
            <Link href={"/resume"}>
              <li className="text-gray-300 text-sm hover:font-bold transition-all hover:scale-105">
                Resume
              </li>
            </Link>
            <Link href={"/project"}>
              <li className="text-gray-300 text-sm hover:font-bold transition-all hover:scale-105">
                Project
              </li>
            </Link>
            <Link href={"/resume"}>
              <li className="text-gray-300 text-sm hover:font-bold transition-all hover:scale-105">
                Achivement
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
