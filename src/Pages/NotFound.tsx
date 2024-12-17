import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex justify-center items-center text-xl gap-7 sm:text-4xl h-screen flex-col">
      <h1>404 Bad Request</h1>
      <Link className="text-base px-4 py-2 bg-[#000] text-white rounded-md" to="/">RecipeStory</Link>
    </div>
  );
};
