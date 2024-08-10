import "../styles/sections/Blog.css";

import { useEffect, useState } from "react";
import { Box, Link, Typography } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import { FaInstagram } from "react-icons/fa";
import ClawsButton from "../components/ClawsButton";

import { useTranslation } from "react-i18next";
import { track } from "@vercel/analytics";

type InstagramDataProps = {
  id: string;
  caption?: string;
  media_type?: string;
  media_url: string;
  thumbnail_url?: string;
  permalink?: string;
};

const Blog = () => {
  const { t: translate } = useTranslation();
  const [instagramData, setInstagramData] = useState<InstagramDataProps[] | []>(
    []
  );

  const handleClickButton = () => {
    window.open("https://www.instagram.com/bloodhunts_gaming");
    track("Blog - Ver mais");
  };

  useEffect(() => {
    const fetchDataFromAPI = async (fields: string, limit: number) => {
      try {
        const response = await fetch(
          "https://api-instagram-bht.vercel.app/instagram-media",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ fields, limit }),
          }
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar dados do Instagram");
        }

        const data: InstagramDataProps[] = await response.json();
        setInstagramData(data);
      } catch (err) {
        const error = err as { message: string };
        console.error("Erro:", error.message);
      }
    };

    const fields = "id,caption,media_type,media_url,thumbnail_url,permalink";
    const limit = 100;
    fetchDataFromAPI(fields, limit);
  }, []);

  return (
    <Box
      component={"section"}
      className="blog-section"
      id="blog"
      width="100%"
      paddingTop="4rem"
      paddingBottom={{ xs: "4rem", xl: "5rem" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Box textAlign={"center"}>
        <SectionTitle title={"BLOG"} withDivider={true} />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={3}
        gap={5}
        flexWrap={"wrap"}
      >
        {instagramData.length > 0 ? (
          instagramData.map((post) => (
            <Link
              key={post.id}
              className="blog-img-container"
              href={post.permalink}
              target={"_blank"}
              width={{ xs: "260px", sm: "320px", xl: "420px" }}
              position={"relative"}
              style={{ cursor: "pointer" }}
              border={"2px solid #fff"}
              borderRadius={5}
              overflow={"hidden"}
              onClick={() => track("Blog - Instagram Post")}
            >
              <img width={"100%"} src={post.media_url} alt={"post_instagram"} />
              <Box
                position={"absolute"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
                top={0}
              >
                <FaInstagram className="blog-insta-icon" color={"#fff"} />
              </Box>
            </Link>
          ))
        ) : (
          <Typography color="#fff" fontFamily={"var(--primary-font)"}>
            {translate("blog.noData")}
          </Typography>
        )}
      </Box>
      <ClawsButton mt={5} px={8} pulseAnimation onClick={handleClickButton}>
        {translate("blog.seeMore")}
      </ClawsButton>
    </Box>
  );
};

export default Blog;
