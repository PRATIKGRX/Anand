import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ImgCard from './ImgCard';
export default function CenteredTabs() {
    const SteelProducts = [
        {
          src: "https://arsgroup.in/wp-content/uploads/2024/09/tmt-768x365.webp",
          text: "Torbar (TMT)",
        },
        {
          src: "https://havitsteelstructure.com/wp-content/uploads/2020/08/steel-structure-detail-4.jpg",
          text: "Structural Steel",
        },
        {
          src: "https://www.superiortube.com/-/media/ameteksuperiortube/images/products/stainless-steel.jpg?la=en&revision=036acbbc-d655-4e79-b6b2-1bb61346bd9b&hash=9720D62CB98FB526C502AFEC0F506F96",
          text: "Steel Tubes (Pipes)",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95koPKE7SrG6Ppboic4_gpDjAl8yU0oPOEg&s",
          text: "wires",
        },
        {
          src: "https://image.made-in-china.com/2f0j00mpvGDFQMHUzb/Rivet-Nails-Button-Nail-Head-Blind-Size-DIN-Pop-Steel-Aluminium-Stainless-Steel-Bright-uncoated-GB.webp",
          text: "Nails,Ripple",
        },
        {
          src: "https://5.imimg.com/data5/SELLER/Default/2024/10/455951688/YY/GY/UL/14924170/rectangular-rolling-shutter-bottom-profile-500x500.jpg",
          text: "Shutters Profiles",
        },
      ];
       const Sheets = [
          {
            src: "https://th.bing.com/th/id/OIP.BROvPU2tOglgHHwkQkyX5QHaHa?rs=1&pid=ImgDetMain",
            text: "MS Plate",
          },
          {
            src: "https://th.bing.com/th/id/OIP.iW13-2DRxJbZVInjfl0uKwHaDd?rs=1&pid=ImgDetMain",
            text: "HR Sheet",
          },
          {
            src: "https://4.imimg.com/data4/UT/VG/MY-12949381/cr-sheet-500x500.jpg",
            text: "CR Sheet",
          },
          {
            src: "https://5.imimg.com/data5/SELLER/Default/2021/3/AZ/DY/CO/13450127/plain-gi-sheet-500x500-500x500.jpg",
            text: "GI & GCC Plain Sheet",
          },
          {
            src: "https://cardinalsteels.com/wp-content/uploads/2022/01/Corrugated-Roof-Sheets-e1690292489369.jpeg",
            text: "Roofing Sheets",
          },
        ];
        const Cement = [
          {
            src: "https://th.bing.com/th/id/R.fbd67d3f41381dee937aac3b200b7d9a?rik=ek%2b3jvA36NOnVQ&pid=ImgRaw&r=0",
            text: "PPC (Portland Pozzolana Cement)",
          },
          {
            src: "https://th.bing.com/th/id/OIP.RYvk0gSkuvLkKpFhNNqkGAHaD4?rs=1&pid=ImgDetMain",
            text: "OPC (Ordinary Portland Cement)",
          },
        ];
        const Paint = [
          {
            src: "https://th.bing.com/th/id/OIP.JQ_zBlFFLxDA9NVvkoKfUwHaFj?rs=1&pid=ImgDetMain",
            text: "Metal Primer",
          },
          {
            src: "https://th.bing.com/th/id/OIP.2o1bDy-RV3uO-Y7AoqX30AHaFz?rs=1&pid=ImgDetMain",
            text: "Enamel Paint",
          },
          {
            src: "https://5.imimg.com/data5/SELLER/Default/2022/7/ON/EL/UO/39547976/tarpin-paint-oil-500x500.webp",
            text: "Tarpin",
          },
          { src: "Roller Brush", text: "Roller Brush" },
        ];
        const Tools = [
          {
            src: "https://th.bing.com/th/id/OIP.J-5l_f-KUFzSLip9vkAa1gHaHa?rs=1&pid=ImgDetMain",
            text: "Cutting Wheel",
          },
          {
            src: "https://th.bing.com/th/id/OIP.vagUUk-VspMCXnZE8utSSAHaHa?rs=1&pid=ImgDetMain",
            text: " Grinding Wheel",
          },
          {
            src: "https://th.bing.com/th/id/OIP.0Z46RqpBzCBtROTNACiADgHaHa?rs=1&pid=ImgDetMain",
            text: " Buffing Wheel",
          },
          {
            src: "https://th.bing.com/th/id/R.2a39806545033819f94275eee12df0fb?rik=3MyeZJF4as%2fgUQ&pid=ImgRaw&r=0",
            text: " Flap Discs",
          },
        ];
        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
          setValue(newValue);
        };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered sx={{
          // Change the underline indicator color 
          '& .MuiTabs-indicator': {
            backgroundColor: '#7D0A0A', // Red indicator line
          },
          // Style for the tabs
          '& .MuiTab-root': {
            fontWeight: 800,
            // For the ripple effect when clicking
            '& .MuiTouchRipple-child': {
              backgroundColor: '#FEA6A6', // Pink ripple effect
            },
            // For the active tab text
            '&.Mui-selected': {
              color: '#7D0A0A', // Red text for active tab
            },
          }
        }}>
        <Tab label="Steel Products" />
        <Tab label="Sheets" />
        <Tab label="Cements" />
        <Tab label="Paints" />
        <Tab label="Tools & Supplementary" />
      </Tabs>
      <Box sx={{ p: 2 }}>
        {value === 0 && <div className="grid grid-cols-3 gap-4  justify-center ">
                    {SteelProducts.map((element) => (
                      <ImgCard pic={element.src} picName={element.text} />
                    ))}
                  </div>}
        {value === 1 && <div className="grid grid-cols-3 gap-4 justify-center ">
                    {Sheets.map((element) => (
                      <ImgCard pic={element.src} picName={element.text} />
                    ))}
                  </div>}
        {value === 2 && <div className="grid grid-cols-3 gap-4 justify-center  ">
                    {Cement.map((element) => (
                      <ImgCard pic={element.src} picName={element.text} />
                    ))}
                  </div>}
        {value === 3 && <div className="grid grid-cols-3 gap-4 justify-center ">
                    {Paint.map((element) => (
                      <ImgCard pic={element.src} picName={element.text} />
                    ))}
                  </div>}
        {value === 4 &&  <div className="grid grid-cols-3 gap-4 justify-center ">
                    {Tools.map((element) => (
                      <ImgCard pic={element.src} picName={element.text} />
                    ))}
                  </div>}
        {value === 5 && <div>Content for Item Three</div>}
      </Box>
    </Box>
  );
}
