import axios from "axios";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { StarIcon } from "../assets/Icons/StarIcon";

export const Recipe = () => {
  const { id } = useParams();
  const [item, setItems] = useState<any>([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoad(true);
        const response = await axios(`https://dummyjson.com/recipes/${id}`);
        const data = response.data;
        setItems(data);
      } catch (error: any) {
        alert(error.message);
      } finally {
        setLoad(false);
      }
    })();
  }, []);
  return (
    <div className="px-8 pb-8 py-8 w-screen h-screen flex flex-col items-center ">
      {load ? (
        <div className="flex justify-center items-center text-xl sm:text-4xl h-screen">
            <h1>Loading...</h1>
        </div>
      ) : (
        <div className="max-w-[40rem] pb-20">
          <div className="flex flex-wrap justify-between items-center gap-2  w-full pt-3 px-2">
            <h1 className="font-semibold text-center sm:text-left  text-4xl lg:text-5xl pb-4">
              {item.name}
            </h1>
            <div className="flex gap-4 mb-[10px]">
         
              <button className="bg-green-800 py-[0.2rem] px-2.5 rounded-md flex gap-2 justify-center items-center text-sm text-white">
                <p className="font-semibold">
                  Calories - {item.caloriesPerServing}
                </p>
              </button>
              <button className="bg-green-600 py-[0.2rem] px-2.5 rounded-md flex gap-2 justify-center items-center text-sm text-white">
                <StarIcon size="16" />
                <p className="font-semibold">{item.rating}</p>
              </button>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4 w-full md:h-96   py-2 h-60">
            <img
            loading="lazy"
              src={item.image}
              alt=""
              className="aspect-video object-cover rounded-md h-full md:h-96 w-full"
            />
          </div>

          <div className="w-full">
            <div className="flex flex-col items-start gap-4 my-4">
              <div className="flex gap-4">
                <span className="bg-blue-200 px-3 py-1 rounded-md text-sm font-semibold">
                  Prep Time: {item.prepTimeMinutes} mins
                </span>
                <span className="bg-green-200 px-3 py-1 rounded-md text-sm font-semibold">
                  Cook Time: {item.cookTimeMinutes} mins
                </span>
              </div>
              <div className="flex gap-4">
                <span className="bg-yellow-200 px-3 py-1 rounded-md text-sm font-semibold">
                  Servings: {item.servings}
                </span>
                <span className="bg-red-200 px-3 py-1 rounded-md text-sm font-semibold">
                  Difficulty: {item.difficulty}
                </span>
              </div>

              <div className="flex gap-4">
                <span className="bg-teal-200 px-3 py-1 rounded-md text-sm font-semibold">
                  Meal Type: {item.mealType}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 py-8">
            <h1 className="px-2 bg-[#000] py-1.5 text-white rounded-md my-4" >
              Ingredients :{" "}
            </h1>
            <div className="flex gap-4 flex-wrap">
              {item.ingredients.map((tag: string) => (
                <span className="bg-gray-300 px-2 py-1 rounded-md text-sm font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 prose lg:prose-xl">
            <h1 className="px-2 bg-[#000] py-1.5 text-white rounded-md my-4">
              Instructions :{" "}
            </h1>
            <p className="text-xl">{item.instructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};
