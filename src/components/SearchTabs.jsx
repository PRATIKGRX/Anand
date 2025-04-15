import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductCard from "./ProductsCard";
import { red } from "@mui/material/colors";
export default function SearchTabs(props) {
  const {debouncedSearchTerm} = props;
  const SteelProducts = [
    {
      src: "https://arsgroup.in/wp-content/uploads/2024/09/tmt-768x365.webp",
      text: "Torbar (TMT)",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
    {
      src: "https://havitsteelstructure.com/wp-content/uploads/2020/08/steel-structure-detail-4.jpg",
      text: "Structural Steel",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
    {
      src: "https://www.superiortube.com/-/media/ameteksuperiortube/images/products/stainless-steel.jpg?la=en&revision=036acbbc-d655-4e79-b6b2-1bb61346bd9b&hash=9720D62CB98FB526C502AFEC0F506F96",
      text: "Steel Tubes (Pipes)",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95koPKE7SrG6Ppboic4_gpDjAl8yU0oPOEg&s",
      text: "wires",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
    {
      src: "https://image.made-in-china.com/2f0j00mpvGDFQMHUzb/Rivet-Nails-Button-Nail-Head-Blind-Size-DIN-Pop-Steel-Aluminium-Stainless-Steel-Bright-uncoated-GB.webp",
      text: "Nails,Ripple",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
    {
      src: "https://5.imimg.com/data5/SELLER/Default/2024/10/455951688/YY/GY/UL/14924170/rectangular-rolling-shutter-bottom-profile-500x500.jpg",
      text: "Shutters Profiles",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
  ];
  const Sheets = [
    {
      src: "https://th.bing.com/th/id/OIP.BROvPU2tOglgHHwkQkyX5QHaHa?rs=1&pid=ImgDetMain",
      text: "MS Plate",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
    {
      src: "https://th.bing.com/th/id/OIP.iW13-2DRxJbZVInjfl0uKwHaDd?rs=1&pid=ImgDetMain",
      text: "HR Sheet",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
    {
      src: "https://4.imimg.com/data4/UT/VG/MY-12949381/cr-sheet-500x500.jpg",
      text: "CR Sheet",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
    {
      src: "https://5.imimg.com/data5/SELLER/Default/2021/3/AZ/DY/CO/13450127/plain-gi-sheet-500x500-500x500.jpg",
      text: "GI & GCC Plain Sheet",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
    {
      src: "https://cardinalsteels.com/wp-content/uploads/2022/01/Corrugated-Roof-Sheets-e1690292489369.jpeg",
      text: "Roofing Sheets",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
  ];
  const Cement = [
    {
      src: "https://th.bing.com/th/id/R.fbd67d3f41381dee937aac3b200b7d9a?rik=ek%2b3jvA36NOnVQ&pid=ImgRaw&r=0",
      text: "PPC (Portland Pozzolana Cement)",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
    {
      src: "https://th.bing.com/th/id/OIP.RYvk0gSkuvLkKpFhNNqkGAHaD4?rs=1&pid=ImgDetMain",
      text: "OPC (Ordinary Portland Cement)",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
  ];
  const Paint = [
    {
      src: "https://th.bing.com/th/id/OIP.JQ_zBlFFLxDA9NVvkoKfUwHaFj?rs=1&pid=ImgDetMain",
      text: "Metal Primer",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
    {
      src: "https://th.bing.com/th/id/OIP.2o1bDy-RV3uO-Y7AoqX30AHaFz?rs=1&pid=ImgDetMain",
      text: "Enamel Paint",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
    {
      src: "https://5.imimg.com/data5/SELLER/Default/2022/7/ON/EL/UO/39547976/tarpin-paint-oil-500x500.webp",
      text: "Tarpin",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
    {
      src: "https://th.bing.com/th/id/OIP.WyeJz7jNQ8aORXX9_DSu0AHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7",
      text: "Roller Brush",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
  ];
  const Tools = [
    {
      src: "https://th.bing.com/th/id/OIP.J-5l_f-KUFzSLip9vkAa1gHaHa?rs=1&pid=ImgDetMain",
      text: "Cutting Wheel",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
    {
      src: "https://th.bing.com/th/id/OIP.vagUUk-VspMCXnZE8utSSAHaHa?rs=1&pid=ImgDetMain",
      text: " Grinding Wheel",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
    {
      src: "https://th.bing.com/th/id/OIP.0Z46RqpBzCBtROTNACiADgHaHa?rs=1&pid=ImgDetMain",
      text: " Buffing Wheel",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
    {
      src: "https://th.bing.com/th/id/R.2a39806545033819f94275eee12df0fb?rik=3MyeZJF4as%2fgUQ&pid=ImgRaw&r=0",
      text: " Flap Discs",
      description: "this is the description of this ",
      additiondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium error accusantium dicta sed placeat eveniet aliquam doloremque illo ut amet, dolor quam maxime, deserunt, eum natus fuga deleniti. Dolores."
    },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "#F5F5F5" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          // Change the underline indicator color
          "& .MuiTabs-indicator": {
            backgroundColor: "#7D0A0A", // Red indicator line
          },
          // Style for the tabs
          "& .MuiTab-root": {
            fontWeight: 800,
            // For the ripple effect when clicking
            "& .MuiTouchRipple-child": {
              backgroundColor: "#FEA6A6", // Pink ripple effect
            },
            // For the active tab text
            "&.Mui-selected": {
              color: "#7D0A0A", // Red text for active tab
            },
          },
        }}
      >
        <Tab label="All" />
        <Tab label="Steel Products" />
        <Tab label="Sheets" />
        <Tab label="Cements" />
        <Tab label="Paints" />
        <Tab label="Tools & Supplementary" />
      </Tabs>
      <Box sx={{ p: 2 }}>
        {value === 0 && (
          <div className="grid grid-cols-3 gap-4 justify-center ">
            {SteelProducts.filter((element) =>
              element.text.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            ).map((element) => (
              <ProductCard
                key={element.text}
                pic={element.src}
                picName={element.text}
                description={element.description}
                additiondescription={element.additiondescription}
              />
            ))}
            {SteelProducts.filter((element) =>
              element.text.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            ).map((element) => (
              <ProductCard
                key={element.text}
                pic={element.src}
                picName={element.text}
                description={element.description}
                additiondescription={element.additiondescription}
              />
            ))}
            {Sheets.filter((element) =>
              element.text.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            ).map((element) => (
              <ProductCard
                key={element.text}
                pic={element.src}
                picName={element.text}
                description={element.description}
                additiondescription={element.additiondescription}
              />
            ))}
            {Cement.filter((element) =>
              element.text.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            ).map((element) => (
              <ProductCard
                key={element.text}
                pic={element.src}
                picName={element.text}
                description={element.description}
                additiondescription={element.additiondescription}
              />
            ))}
            {Paint.filter((element) =>
              element.text.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            ).map((element) => (
              <ProductCard
                key={element.text}
                pic={element.src}
                picName={element.text}
                description={element.description}
                additiondescription={element.additiondescription}
              />
            ))}
            {Tools.filter((element) =>
              element.text.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            ).map((element) => (
              <ProductCard
                key={element.text}
                pic={element.src}
                picName={element.text}
                description={element.description}
                additiondescription={element.additiondescription}
              />
            ))}
          </div>
        )}
        {value === 1 && (
          <div className="grid grid-cols-3 gap-4 justify-center ">
            
            {SteelProducts.filter((element) =>
              element.text.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            ).map((element) => (
              <ProductCard
                key={element.text}
                pic={element.src}
                picName={element.text}
                description={element.description}
                additiondescription={element.additiondescription}
              />
            ))}
          </div>
        )}
        {value === 2 && (
          <div className="grid grid-cols-3 gap-4 justify-center ">
            {Sheets.filter((element) =>
              element.text.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            ).map((element) => (
              <ProductCard
                key={element.text}
                pic={element.src}
                picName={element.text}
                description={element.description}
                additiondescription={element.additiondescription}
              />
            ))}
          </div>
        )}
        {value === 3 && (
          <div className="grid grid-cols-3 gap-4 justify-center  ">
            {Cement.filter((element) =>
              element.text.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            ).map((element) => (
              <ProductCard
                key={element.text}
                pic={element.src}
                picName={element.text}
                description={element.description}
                additiondescription={element.additiondescription}
              />
            ))}
          </div>
        )}
        {value === 4 && (
          <div className="grid grid-cols-3 gap-4 justify-center ">
            {Paint.filter((element) =>
              element.text.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            ).map((element) => (
              <ProductCard
                key={element.text}
                pic={element.src}
                picName={element.text}
                description={element.description}
                additiondescription={element.additiondescription}
              />
            ))}
          </div>
        )}
        {value === 5 && (
          <div className="grid grid-cols-3 gap-4 justify-center ">
            {Tools.filter((element) =>
              element.text.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            ).map((element) => (
              <ProductCard
                key={element.text}
                pic={element.src}
                picName={element.text}
                description={element.description}
                additiondescription={element.additiondescription}
              />
            ))}
          </div>
        )}
      </Box>
    </Box>
  );
}
