import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const featuresContent = [
  {
    label: "Recommendations",
    description: "Get recipes that match your allergies, and lifestyle.",
    src: "https://c4.wallpaperflare.com/wallpaper/1015/705/202/cuisine-food-india-indian-wallpaper-preview.jpg",
  },
  {
    label: "Step-by-Step Instructions",
    description: "Cook with confidence using our easy-to-follow guides.",
    src: "https://c4.wallpaperflare.com/wallpaper/857/614/499/cuisine-food-india-indian-wallpaper-thumb.jpg",
  },
  {
    label: "Ingredient Substitutes",
    description: "Missing an ingredient? Find smart alternatives instantly.",
    src: "https://c4.wallpaperflare.com/wallpaper/1016/528/45/cuisine-food-india-indian-wallpaper-thumb.jpg",
  },
  {
    label: "Save & Organize",
    description: "Save your favorite recipes and organize them easily.",
    src: "https://c4.wallpaperflare.com/wallpaper/93/821/247/cuisine-food-india-indian-wallpaper-preview.jpg",
  },
];

const faqs = [
  {
    question: "What is this app about?",
    answer:
      "Here you'll find recipes tailored to your taste.",
  },
  {
    question: "Is the app free to use?",
    answer:
      "Yes, the app is free to use and explore food.",
  },
  {
    question: "Do I need an account to use the app?",
    answer:
      "You can explore recipes without an account.",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<any>([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/recipes?sortBy=rating&order=desc"
        );
        const { recipes } = await response.json();
        setItems(recipes);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div  className="flex  flex-col-reverse   gap-16 md:gap-16 lg:gap-16  ">
        <div className="px-8  flex justify-center items-center h-fit flex-col gap-4">
          <div className="flex flex-col gap-3 lg:gap-8 justify-center items-center w-full">
            <h1 className="lg:text-6xl font-semibold sm:max-w-[30rem] md:max-w-[40rem] text-[2.1rem] sm:text-5xl ">
              “ Recipes That Bring <br />{" "}
              <span className="ml-10">People Together ”</span>
            </h1>
            <p className="text-sm sm:max-w-[40rem] md:max-w-[50rem] text-gray-600 px-8 md:px-0 ">
              Explore the world of food .
            </p>
          </div>

          <div className="w-full  flex justify-center  max-w-[40rem] py-8">
            <button
              className="bg-[#111827] text-sm font-semibold text-white lg:px-32 lg:py-5 rounded-md px-8 py-1.5 capitalize"
              onClick={() => navigate("/kitchen")}
            >
              Get Started
            </button>
          </div>
        </div>

        <img
          className="w-full h-60 sm:h-72  object-cover object-center"
          src='https://res.cloudinary.com/dvpaztqr9/image/upload/f_auto,q_auto/v1/playground/crabd0gqa0diwx5rmrsp'
          alt="RecipeStory-Banner"
        />
      </div>

      <>
        <div className="pt-32">
          <h1 className="text-5xl sm:text-6xl font-semibold text-center">
            Why Choose Us?
          </h1>
          <p className="text-center text-gray-600 max-w-[40rem] mx-auto mt-4 font-normal">
            Your Recipe Companion for Every Meal !
          </p>
        </div>
        <Grid
          padding={{ xs: 2, sm: 2, md: 8, lg: 13 }}
          container
          spacing={{ xs: 2, md: 8 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
          justifyItems={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {featuresContent.map((item) => (
            <FeauturesCard
              label={item.label}
              description={item.description}
              src={item.src}
            />
          ))}
        </Grid>
      </>

      <div id="trending">
        <Grid
          container
          spacing={5}
          padding={{ xs: 2, sm: 4, md: 3 }}
          paddingX={{ sm: 2, md: 6, lg: 20 }}
          paddingY={{ lg: 20 }}
        >
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 7 }}>
            <div className="flex lg:justify-center h-full flex-col gap-4 py-8 ">
              <h1 className="sm:text-6xl text-5xl font-semibold max-w-[40rem]">
                Trending Recipes Everyone’s Talking About !
              </h1>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 5 }}>
            <ImageList sx={{ width: "full", height: 450 }}>
              {items?.map((recipe: any) => (
                <ImageListItem
                  onClick={() => navigate(`/kitchen/recipe/${recipe.id}`)}
                  className="cursor-pointer"
                  key={recipe.image}
                >
                  <img
                    src={`${recipe.image}`}
                    alt={recipe.name}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={recipe.name}
                    subtitle={<span>{recipe.cuisine}</span>}
                    position="below"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </div>

      <>
        <div className="flex justify-center items-center h-screen flex-col px-8 " id="faq">
          <div className="pb-16">
            <h1 className="text-5xl font-semibold text-[#111111]">
              Frequently Asked Questions
            </h1>
          </div>
          {faqs.map((item) => (
            <AccordianComponent question={item.question} answer={item.answer} />
          ))}
        </div>
      </>

      <>
        <div className="w-screen flex gap-1 flex-col justify-center items-center py-4 bg-gray-800 text-white">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} RecipeStory. All rights reserved.
          </p>
          <p className="text-sm">
            Designed and Developed by{" "}
            <Link
              to={"https://twitter.com/swasthik319"}
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              Swasthik
            </Link>
          </p>
        </div>
      </>
    </>
  );
};

export default Home;

const FeauturesCard = ({
  label,
  description,
  src,
}: {
  label: string;
  description: string;
  src: string;
}) => {
  return (
    <>
      <Grid
        size={{ xs: 4, sm: 6, md: 6 }}
        borderRadius={4}
        paddingX={{ sm: 2, md: 1, lg: 10 }}
      >
        <div className="flex flex-col items-start gap-4 bg-[#fff] py-8 rounded-md">
          <h1 className="text-3xl lg:text-4xl font-semibold">{label}</h1>
          <p className="text-gray-600 text-sm ">{description}</p>
        </div>
        <div className="">
          <img
            className="w-full h-60 lg:h-60 object-cover rounded-md"
            src={src}
            alt=""
          />
        </div>
      </Grid>
    </>
  );
};

const AccordianComponent = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <>
      {" "}
      <Accordion
        className="max-w-[40rem] "
        style={{
          backgroundColor: "#08373A",
          color: "white",
          borderRadius: "8px",
          border: "none",
        }}
      >
        <AccordionSummary
          style={{ border: "none" }}
          expandIcon={<span className="text-white">&#129123;</span>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ border: "none" }}>
          <Typography>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
      <br />
    </>
  );
};
