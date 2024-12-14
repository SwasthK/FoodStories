import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

const featuresContent = [
  {
    label: "Personalized Recommendations",
    description:
      "Get recipes that match your preferences, allergies, and lifestyle.",
    src: "https://c4.wallpaperflare.com/wallpaper/1015/705/202/cuisine-food-india-indian-wallpaper-preview.jpg",
  },
  {
    label: "Step-by-Step Instructions",
    description:
      "Cook with confidence using our easy-to-follow guides.",
    src: "https://c4.wallpaperflare.com/wallpaper/857/614/499/cuisine-food-india-indian-wallpaper-thumb.jpg",
  },
  {
    label: "Ingredient Substitutes",
    description:
      "Missing an ingredient? Find smart alternatives instantly.",
    src: "https://c4.wallpaperflare.com/wallpaper/1016/528/45/cuisine-food-india-indian-wallpaper-thumb.jpg",
  },
  {
    label: "Save & Organize",
    description:
      "Save your favorite recipes and create your personal cookbook.",
    src: "https://c4.wallpaperflare.com/wallpaper/93/821/247/cuisine-food-india-indian-wallpaper-preview.jpg",
  },
];

const navItems = ["Home", "About", "Contact"];

export default function App() {
  return (
    <>
      <AppBar
        component="nav"
        style={{
          backgroundColor: "#fff",
          boxShadow: "none",
          color: "#000",
        }}
        className="px-2 sm:px-5 md:px-10 py-1 lg:pr-16"
      >
        <Toolbar className="flex justify-between">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {/* <h1 className="font-trebuchet font-bold ">F</h1> */}
            <Typography
              className="font-trebuchet "
              variant="h6"
              component="div"
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.7rem", fontWeight: "bold" },
                fontFamily: "Trebuchet MS",
              }}
            >
              FoodStory
            </Typography>
          </Box>

          <Box sx={{ gap: { xs: "0rem", sm: "3rem" }, display: "flex" }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  fontFamily: "Trebuchet MS",
                  fontWeight: "700",
                  color: "#000",
                  textTransform: "capitalize",
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <div className="px-8 flex h-screen text-black  justify-center xl:justify-evenly gap-7 xl:gap-0 items-center xl:flex-row flex-col">
        <div className="xl:max-w-xl flex flex-col md:gap-8 gap-2 ">
          <p className="text-3xl  sm:text-5xl font-semibold">
            “ Discover Delicious Recipes That Bring People Together ”
          </p>
          <p className="text-[#333333f6] text-md md:text-base">
            From quick weekday meals to gourmet delights, explore thousands of
            recipes tailored to your taste and dietary needs.
          </p>
        </div>
        <div className="w-full xl:w-fit border flex justify-center items-center">
          <img
            className="rounded-md xl:h-[26rem] xl:w-[26rem] h-60 w-full object-cover object-center"
            src="https://c4.wallpaperflare.com/wallpaper/62/564/939/cuisine-food-india-indian-wallpaper-preview.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="h-screen w-screen bg-[#A47864]"></div>
    </>
  );
}
