import { Link, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Layout = () => {
  return (
    <>
      <div className="bg-black z-[100] md:px-16 px-4  py-3.5 text-white justify-between items-center flex sticky top-0">
        <Link className="text-xl  sm:text-3xl font-semibold" to="/">
          RecipeStory
        </Link>
        <div className="pr-2 md:pr-40 flex gap-10">
          <Link to="/kitchen">Recipe</Link>
          <HashLink smooth to="/#trending">
            Trending
          </HashLink>
          <HashLink smooth to="/#faq">
            FAQ
          </HashLink>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};
