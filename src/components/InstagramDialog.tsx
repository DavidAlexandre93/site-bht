import "../styles/components/InstagramDialog.css";

import { useState } from "react";
import CustomLink from "./CustomLink";
import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { logoBHTWithBg, sigaNossoInstagram } from "../assets/img";
import { IoCloseOutline } from "react-icons/io5";
import { track } from "@vercel/analytics";

const InstagramDialog = () => {
  const [visible, setVisible] = useState<boolean>(true);

  const onClose = () => {
    setVisible(false);
    track("Instagram Dialog - Fechar");
  };

  return (
    <Dialog open={visible} onClose={onClose}>
      <DialogTitle style={{ padding: "0.25rem 0.3rem 0.25rem 0.5rem" }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <CustomLink
              target="_blank"
              href={"https://www.instagram.com/bloodhunts_gaming"}
              onClick={() => track("Instagram Dialog - Avatar")}
            >
              <Avatar
                sx={{ width: 32, height: 32 }}
                alt="bloodhunts_logo"
                src={logoBHTWithBg}
              />
            </CustomLink>
            <CustomLink
              ml={"0.5rem"}
              target="_blank"
              href={"https://www.instagram.com/bloodhunts_gaming"}
              className="insta-user"
              color={"#000"}
              fontSize={14}
              fontWeight={600}
              onClick={() => track("Instagram Dialog - Nome do Usuário")}
            >
              bloodhunts_gaming
            </CustomLink>
          </Box>
          <IconButton onClick={() => setVisible(false)}>
            <IoCloseOutline />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent
        style={{
          padding: "0px",
          border: "0px solid #d8d8db",
          borderTopWidth: "1px",
          filter: "drop-shadow(0 2px 16px rgba(32, 52, 89, .2))",
        }}
      >
        <CustomLink
          display={"flex"}
          width={"100%"}
          target="_blank"
          href={"https://www.instagram.com/bloodhunts_gaming"}
          onClick={() => track("Instagram Dialog - Post")}
        >
          <img
            src={sigaNossoInstagram}
            alt="instagram-post"
            style={{ backgroundSize: "cover", width: "100%" }}
          />
        </CustomLink>
      </DialogContent>
    </Dialog>
  );
};

export default InstagramDialog;
