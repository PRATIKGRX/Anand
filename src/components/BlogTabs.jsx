import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BlogContext from "./BlogContent";
const BlogTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const educationInfo = [
    {
      heading:
        "What Types of Steel Are Commonly Used in Nepalese Construction?",
      pic: "https://thumbs.dreamstime.com/b/factory-worker-work-young-handsome-yellow-helmet-37868054.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eos atque laudantium aperiam blanditiis vel tenetur, quod quo, ipsa facere voluptatem odit nihil reiciendis perspiciatis maiores obcaecati nostrum quam?",
    },
    {
      heading: "How to Choose the Right Construction Material for Your Project",
      pic: "https://th.bing.com/th/id/OIP.OqjDoNlepyo7MvgfkFZQXgHaE8?rs=1&pid=ImgDetMain",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eos atque laudantium aperiam blanditiis vel tenetur, quod quo, ipsa facere voluptatem odit nihil reiciendis perspiciatis maiores obcaecati nostrum quam?",
    },
    {
      heading: "TMT vs. Mild Steel: Which One Should You Use?",
      pic: "https://thumbs.dreamstime.com/b/smiling-industrial-manufacturing-factory-worker-happy-man-has-smile-his-face-wearing-safety-glasses-hard-hat-39995035.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eos atque laudantium aperiam blanditiis vel tenetur, quod quo, ipsa facere voluptatem odit nihil reiciendis perspiciatis maiores obcaecati nostrum quam?",
    },
  ];
  const ProjectBasedContent = [
    {
      heading: "How We Helped Build [Project Name]",
      pic: "https://thumbs.dreamstime.com/z/factory-worker-27310694.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eos atque laudantium aperiam blanditiis vel tenetur, quod quo, ipsa facere voluptatem odit nihil reiciendis perspiciatis maiores obcaecati nostrum quam?",
    },
  ];
  const buyingGuides = [
    {
      heading: "The Complete Buyer's Guide to Construction Materials in Nepal",
      pic: "https://png.pngtree.com/background/20230401/original/pngtree-workers-in-factory-on-the-machine-vector-picture-image_2244243.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eos atque laudantium aperiam blanditiis vel tenetur, quod quo, ipsa facere voluptatem odit nihil reiciendis perspiciatis maiores obcaecati nostrum quam?",
    },
    {
      heading: "5 Mistakes to Avoid When Buying Steel in Bulk",
      pic: "https://thumbs.dreamstime.com/b/shows-thumb-up-well-done-everything-good-industrial-worker-indoors-factory-young-technician-orange-hard-hat-shows-thumb-167247460.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eos atque laudantium aperiam blanditiis vel tenetur, quod quo, ipsa facere voluptatem odit nihil reiciendis perspiciatis maiores obcaecati nostrum quam?",
    },
  ];
  const Logictic = [
    {
      heading:
        "How We Deliver Construction Materials to Remote Locations Across Nepal",
      pic: "https://thumbs.dreamstime.com/b/shows-thumb-up-well-done-everything-good-industrial-worker-indoors-factory-young-technician-orange-hard-hat-shows-thumb-167247460.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eos atque laudantium aperiam blanditiis vel tenetur, quod quo, ipsa facere voluptatem odit nihil reiciendis perspiciatis maiores obcaecati nostrum quam?",
    },
    {
      heading: "What to Expect When You Order Steel from Us",
      pic: "https://th.bing.com/th/id/OIP.OqjDoNlepyo7MvgfkFZQXgHaE8?rs=1&pid=ImgDetMain",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eos atque laudantium aperiam blanditiis vel tenetur, quod quo, ipsa facere voluptatem odit nihil reiciendis perspiciatis maiores obcaecati nostrum quam?",
    },
  ];
  const Customer = [
    {
      heading: "How We Ensure Quality Steel at the Best Prices",
      pic: "https://thumbs.dreamstime.com/b/shows-thumb-up-well-done-everything-good-industrial-worker-indoors-factory-young-technician-orange-hard-hat-shows-thumb-167247460.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eos atque laudantium aperiam blanditiis vel tenetur, quod quo, ipsa facere voluptatem odit nihil reiciendis perspiciatis maiores obcaecati nostrum quam?",
    },
    {
      heading: "Why Over 1200+ Customers Trust Us",
      pic: "https://thumbs.dreamstime.com/b/shows-thumb-up-well-done-everything-good-industrial-worker-indoors-factory-young-technician-orange-hard-hat-shows-thumb-167247460.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eos atque laudantium aperiam blanditiis vel tenetur, quod quo, ipsa facere voluptatem odit nihil reiciendis perspiciatis maiores obcaecati nostrum quam?",
    },
  ];
  const behindTheScence = [
    {
      heading: "A Look Into Our 40+ Year Journey in the Construction Industry",
      pic: "https://thumbs.dreamstime.com/b/shows-thumb-up-well-done-everything-good-industrial-worker-indoors-factory-young-technician-orange-hard-hat-shows-thumb-167247460.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eos atque laudantium aperiam blanditiis vel tenetur, quod quo, ipsa facere voluptatem odit nihil reiciendis perspiciatis maiores obcaecati nostrum quam?",
    },
    {
      heading: "Meet Our Experts: The Team Behind Our Success",
      pic: "https://th.bing.com/th/id/OIP.OqjDoNlepyo7MvgfkFZQXgHaE8?rs=1&pid=ImgDetMain",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eos atque laudantium aperiam blanditiis vel tenetur, quod quo, ipsa facere voluptatem odit nihil reiciendis perspiciatis maiores obcaecati nostrum quam?",
    },
  ];
  const Seasonal = [
    {
      heading: "Top Construction Materials in Demand This Year (2025)",
      pic: "https://thumbs.dreamstime.com/b/shows-thumb-up-well-done-everything-good-industrial-worker-indoors-factory-young-technician-orange-hard-hat-shows-thumb-167247460.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eos atque laudantium aperiam blanditiis vel tenetur, quod quo, ipsa facere voluptatem odit nihil reiciendis perspiciatis maiores obcaecati nostrum quam?",
    },
    {
      heading: "Planning a Project This Monsoon? Here's What You Need to Know",
      pic: "https://th.bing.com/th/id/OIP.OqjDoNlepyo7MvgfkFZQXgHaE8?rs=1&pid=ImgDetMain",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet eos atque laudantium aperiam blanditiis vel tenetur, quod quo, ipsa facere voluptatem odit nihil reiciendis perspiciatis maiores obcaecati nostrum quam?",
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          rowGap: 1,
          columnGap: 2,
          padding: 5,
        }}
      >
        {[
          "Educational & Informative Posts",
          "Project-Based Content",
          "Buying Guides",
          "Logistics & Delivery Insights",
          "Customer Education & Trust-Building",
          "Behind the Scenes / Company Culture",
          "Seasonal or Trend Posts",
        ].map((label, index) => (
          <Tab
            key={index}
            label={label}
            value={index}
            onClick={() => setValue(index)}
            sx={{
              fontWeight: 800,
              border: "1px solid #ccc",
              borderRadius: "8px",
              paddingX: 2,
              color: value === index ? "#7D0A0A" : "black",
              backgroundColor: value === index ? "#FEF2F2" : "white",
            }}
          />
        ))}
      </Box>

      <Box sx={{ p: 2 }}>
        {value === 0 && (
          <div className="grid grid-cols-3 gap-4 justify-center ">
            {educationInfo.map((element) => (
              <BlogContext
                pic={element.pic}
                heading={element.heading}
                paragraph={element.paragraph}
              />
            ))}
          </div>
        )}
        {value === 1 && (
          <div className="grid grid-cols-3 gap-4 justify-center ">
            {ProjectBasedContent.map((element) => (
              <BlogContext
                pic={element.pic}
                heading={element.heading}
                paragraph={element.paragraph}
              />
            ))}
          </div>
        )}
        {value === 2 && (
          <div className="grid grid-cols-3 gap-4 justify-center ">
            {buyingGuides.map((element) => (
              <BlogContext
                pic={element.pic}
                heading={element.heading}
                paragraph={element.paragraph}
              />
            ))}
          </div>
        )}
        {value === 3 && (
          <div className="grid grid-cols-3 gap-4 justify-center ">
            {Logictic.map((element) => (
              <BlogContext
                pic={element.pic}
                heading={element.heading}
                paragraph={element.paragraph}
              />
            ))}
          </div>
        )}
        {value === 4 && (
          <div className="grid grid-cols-3 gap-4 justify-center ">
            {Customer.map((element) => (
              <BlogContext
                pic={element.pic}
                heading={element.heading}
                paragraph={element.paragraph}
              />
            ))}
          </div>
        )}
        {value === 5 && (
          <div className="grid grid-cols-3 gap-4 justify-center ">
            {behindTheScence.map((element) => (
              <BlogContext
                pic={element.pic}
                heading={element.heading}
                paragraph={element.paragraph}
              />
            ))}
          </div>
        )}
        {value === 6 && (
          <div className="grid grid-cols-3 gap-4 justify-center ">
            {Seasonal.map((element) => (
              <BlogContext
                pic={element.pic}
                heading={element.heading}
                paragraph={element.paragraph}
              />
            ))}
          </div>
        )}
      </Box>
    </Box>
  );
};

export default BlogTabs;
