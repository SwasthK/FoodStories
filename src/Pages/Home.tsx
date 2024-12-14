import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

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

const Home = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} padding={{ xs: 2, sm: 2, md: 13 }}>
          <Grid size={{ xs: 12, sm: 8, md: 8 }}>
            <div className=" flex justify-center items-center h-full flex-col gap-4">
              <h1 className="text-6xl font-semibold max-w-[40rem]">
                Recipes That Bring People Together
              </h1>
              <p className="text-sm max-w-[40rem] text-gray-600">
                rom quick weekday meals to gourmet delights, explore thousands
                of recipes tailored to your taste and dietary needs.
              </p>

              <div className="w-full max-w-[40rem]">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#111827",
                    color: "#fff",
                    padding: ".7rem 5rem",
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <img
              className="w-full h-full rounded-md sm:aspect-square object-cover"
              src="https://c4.wallpaperflare.com/wallpaper/93/821/247/cuisine-food-india-indian-wallpaper-thumb.jpg"
              alt=""
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <p className="bg-gray-700">grid 1</p>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <div className=" flex justify-center items-center h-full flex-col gap-4">
              <h1 className="text-6xl font-semibold max-w-[40rem]">
                Recipes That Bring People Together
              </h1>
              <p className="text-sm max-w-[40rem] text-gray-600">
                rom quick weekday meals to gourmet delights, explore thousands
                of recipes tailored to your taste and dietary needs.
              </p>

              <div className="w-full max-w-[40rem]">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#111827",
                    color: "#fff",
                    padding: ".7rem 5rem",
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

      <>
        <div className="pt-32">
          <h1 className="text-6xl font-semibold text-center">Why Choose Us?</h1>
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
            className="w-full h-60  object-cover rounded-md"
            src={src}
            alt=""
          />
        </div>
      </Grid>
    </>
  );
};
