import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Drawer,
  Paper,
  Typography,
} from "@mui/material";
import { StarIcon } from "../assets/Icons/StarIcon";
import ControlledOpenSelect from "../Components/SortBy";
import axios from "axios";
import { Link } from "react-router-dom";

export const Shop = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  interface Recipe {
    id: number;
    name: string;
    image: string;
    tags: string[];
  }

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (recipes.length === 0) {
      (async () => {
        try {
          const [AllDataResponse, AllCategoryResponse] = await Promise.all([
            axios.get("https://dummyjson.com/recipes?limit=16&skip=10"),
            axios.get("https://dummyjson.com/recipes/tags"),
          ]);
          const { recipes } = AllDataResponse.data;
          setCategories(AllCategoryResponse.data);
          setFilteredProducts(recipes);
          console.log(recipes);
          setRecipes(recipes);
        } catch (error: any) {
          alert(error.message);
        } finally {
          setLoad(false);
        }
      })();
    }
  }, []);

  useEffect(() => {
    let filtered = [...recipes];

    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => {
        return product.tags.includes(selectedCategory);
      });
    }
    setFilteredProducts(filtered);
  }, [selectedCategory]);

  const [sort, setSort] = useState("");

  useEffect(() => {
    async function getSort() {
      if (Number(sort) === 0) {
        console.log(sort);
        console.log(recipes);
        setFilteredProducts(recipes);
      } else {
        try {
          setLoad(true);
          let query = "name";
          let order = "asc";

          if (Number(sort) === 10) {
            query = "rating";
            order = "desc";
          } else if (Number(sort) === 20) {
            query = "name";
            order = "asc";
          } else if (Number(sort) === 30) {
            query = "name";
            order = "desc";
          }

          const response = await axios.get(
            `https://dummyjson.com/recipes?sortBy=${query}&order=${order}`
          );
          setFilteredProducts(response.data.recipes);
        } catch (error) {
          console.log(error);
        } finally {
          setLoad(false);
        }
      }
    }
    getSort();
  }, [sort]);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="flex gap-3 flex-wrap py-16 px-4 cursor-pointer">
        <Chip
          style={{
            color: selectedCategory === "All" ? "white" : "black",
            backgroundColor: selectedCategory === "All" ? "black" : "#3424",
          }}
          label={"All"}
          component={Paper}
          onClick={() => setSelectedCategory("All")}
        />
        {categories.map((cat, index) => (
          <Chip
            onClick={() => setSelectedCategory(cat)}
            key={index}
            style={{
              color: selectedCategory === cat ? "white" : "black",
              backgroundColor: selectedCategory === cat ? "black" : "white",
            }}
            label={cat}
            component={Paper}
          />
        ))}
      </div>
      <Divider />
    </Box>
  );

  const handleSearch = async () => {
    try {
      setLoad(true);
      const response = await axios.get(
        `https://dummyjson.com/recipes/search?q=${search}`
      );
      setFilteredProducts(response.data.recipes);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    if (search === "") {
      setFilteredProducts(recipes);
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [search]);

  return (
    <div className="">
      <div className="w-full py-4 bg-[#fff] mb-8 mt-2 sticky top-[3.5rem] z-10 sm:px-16 flex justify-evenly sm:justify-between items-center lg:px-40 flex-col-reverse md:flex-row">
        <div className="flex gap-4  justify-center md:justify-start items-center w-full ">
          <button
            onClick={toggleDrawer(true)}
            className="bg-[#333] px-2 py-1 rounded-md text-white"
          >
            Categories
          </button>
          <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
          <ControlledOpenSelect sort={sort} setSort={setSort} />
        </div>
        <div className="flex gap-4 justify-center md:justify-end items-center px-4  w-full">
          <input
            className="border-2 border-gray-300 rounded-md px-2 py-1"
            type="search"
            value={search}
            autoComplete="on"
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            id="search"
          />
          <button
            disabled={load}
            onClick={handleSearch}
            className=" bg-[#333] px-2 py-1 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Search
          </button>
        </div>
      </div>

      {load ? (
        <div className="flex justify-center items-center h-96 w-screen">
          <h1 className="text-3xl">Loading ...</h1>
        </div>
      ) : (
        <>
          {filteredProducts.length === 0 ? (
            <div className="flex justify-center items-center h-96 w-screen">
              <h1 className="text-3xl">No recipes found !</h1>
            </div>
          ) : (
            <div className="grid grid-cols-1 place-items-center gap-x-16 lg:gap-x-8 px-2 sm:px-6 lg:px-28 xl:px-40 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
              {filteredProducts?.map((recipe: any) => (
                <Link to={`recipe/${recipe.id}`} key={recipe.id}>
                  <Card
                    sx={{ width: 250, height: 400 }}
                    style={{ border: "none", boxShadow: "none" }}
                  >
                    <CardActionArea>
                      <div className="  px-0 h-40  w-full">
                        <img
                          loading="lazy"
                          className="h-full w-full object-cover object-center rounded-2xl"
                          src={recipe.image}
                          alt={recipe.name}
                        />
                      </div>
                      <CardContent>
                        <Typography
                          style={{
                            fontFamily: "Trebuchet MS",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                          }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {recipe.name}
                        </Typography>
                        <div className="flex gap-2">
                          {recipe.tags.map((tag: string) => (
                            <Typography
                              variant="body2"
                              sx={{ color: "text.secondary" }}
                            >
                              {tag}
                            </Typography>
                          ))}
                        </div>
                      </CardContent>
                      <CardActions className="flex justify-between items-center">
                        <button className="bg-green-600 py-[0.2rem] px-2.5 rounded-md flex gap-2 justify-center items-center text-sm text-white">
                          {recipe.prepTimeMinutes} min
                        </button>
                        <button className="bg-slate-500 py-[0.2rem] px-2.5 rounded-md flex gap-2 justify-center items-center text-sm text-white">
                          {recipe.difficulty}
                        </button>
                        <button className="bg-green-600 py-[0.2rem] px-2.5 rounded-md flex gap-2 justify-center items-center text-sm text-white">
                          <StarIcon size="16" />
                          <p className="font-semibold">{recipe.rating}</p>
                        </button>
                      </CardActions>
                    </CardActionArea>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
