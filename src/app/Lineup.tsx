// import "../styles/sections/Lineup.css";

// import { useRef, useState } from "react";
// import { Box, Button } from "@mui/material";
// import TeamCarousel from "../components/TeamCarousel";
// import SectionTitle from "../components/SectionTitle";

// import cards from "../data/lineupCarouselCards";
// import { useTranslation } from "react-i18next";
// import useScreenWidthSize from "../hooks/useScreenWindowSize";
// import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
// import { EffectCreative } from "swiper/modules";

// const Lineup = () => {
//   const [selectedTeam, setSelectedTeam] = useState("COD Mobile");

//   const swiperRef = useRef<SwiperClass | null>(null);

//   const { t: translate } = useTranslation();

//   const windowWidth = useScreenWidthSize();

//   const carouselResponsive =
//     windowWidth <= 768
//       ? 1
//       : windowWidth < 1024
//       ? 3
//       : windowWidth < 1400
//       ? 1
//       : 8;

//   const handleClickButtonCodMobile = () => {
//     setSelectedTeam("COD Mobile");

//     if (swiperRef.current) {
//       swiperRef.current.slidePrev();
//     }
//   };

//   const handleClickButtonCodWarzone = () => {
//     setSelectedTeam("COD Warzone");
//     if (swiperRef.current) {
//       swiperRef.current.slideNext();
//     }
//   };

//   return (
//     <Box
//       component={"section"}
//       className="lineup-section"
//       id="lineup"
//       width="100%"
//       paddingTop="4rem"
//       paddingBottom="5rem"
//       display="flex"
//       flexDirection="column"
//       justifyContent="center"
//       alignItems="center"
//       position="relative"
//     >
//       <Box textAlign={"center"}>
//         <SectionTitle
//           title={"LINEUP"}
//           subtitle={"Estes são os nossos atletas"}
//           withDivider={false}
//         />
//       </Box>
//       <Box
//         mt={5}
//         width={{ xs: "20rem", md: "30rem", lg: "24rem", xl: "42rem" }}
//         display={"flex"}
//         justifyContent={"center"}
//         alignItems={"center"}
//       >
//         <Box
//           className="segmented-buttons"
//           display={"flex"}
//           alignItems={"center"}
//           justifyContent={"center"}
//           width={"100%"}
//         >
//           <Button
//             size="large"
//             // fullWidth={true}
//             className={`btn-first ${
//               selectedTeam.toUpperCase() === "COD MOBILE"
//                 ? "selected-button"
//                 : null
//             }`}
//             onClick={() => handleClickButtonCodMobile()}
//           >
//             COD Mobile
//           </Button>
//           <Button
//             size="large"
//             // fullWidth={true}
//             className={`btn-last ${
//               selectedTeam.toUpperCase() === "COD WARZONE"
//                 ? "selected-button"
//                 : null
//             }`}
//             onClick={() => handleClickButtonCodWarzone()}
//           >
//             COD Warzone
//           </Button>
//         </Box>
//       </Box>
//       <Swiper
//         style={{ width: "50%", height: "600px" }}
//         grabCursor={false}
//         draggable={false}
//         effect={"creative"}
//         creativeEffect={{
//           prev: {
//             shadow: true,
//             translate: [0, 0, -400],
//           },
//           next: {
//             translate: ["100%", 0, 0],
//           },
//         }}
//         allowTouchMove={false}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         modules={[EffectCreative]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <Box
//             width={"100%"}
//             className={`${
//               selectedTeam.toUpperCase() === "COD WARZONE"
//                 ? "opacity-animation"
//                 : null
//             }`}
//           >
//             <TeamCarousel
//               cards={cards}
//               height={windowWidth <= 1024 ? "360px" : "540px"}
//               margin="0 50"
//               offset={carouselResponsive}
//             />
//           </Box>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Box
//             display={"flex"}
//             justifyContent={"center"}
//             alignItems={"center"}
//             className={`${
//               selectedTeam.toUpperCase() === "COD MOBILE"
//                 ? "opacity-animation"
//                 : null
//             }`}
//           >
//             <TeamCarousel
//               cards={cards}
//               height={windowWidth <= 1024 ? "360px" : "540px"}
//               margin="0 50"
//               offset={carouselResponsive}
//             />
//           </Box>
//         </SwiperSlide>
//       </Swiper>
//     </Box>
//   );
// };

// export default Lineup;
