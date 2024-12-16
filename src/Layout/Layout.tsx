import { Link, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Layout = () => {
  return (
    <>
      <div className="bg-black z-[100] md:px-16 px-4  py-3.5 text-white justify-between items-center flex sticky top-0">
        <Link
          className="text-xl  hover:text-gray-400 transition-all duration-300 ease-in-out sm:text-3xl font-semibold"
          to="/"
        >
          RecipeStory
        </Link>
        <div className="pr-2 md:pr-40 flex gap-10">
          <Link
            className="hover:text-gray-400 transition-all duration-300 ease-in-out"
            to="/kitchen"
          >
            Recipe
          </Link>
          <HashLink
            className="hover:text-gray-400 transition-all duration-300 ease-in-out"
            smooth
            to="/#trending"
          >
            Trending
          </HashLink>
          <HashLink
            className="hover:text-gray-400 transition-all duration-300 ease-in-out"
            smooth
            to="/#faq"
          >
            FAQ
          </HashLink>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};
