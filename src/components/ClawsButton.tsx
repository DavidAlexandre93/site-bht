import "../styles/components/ClawsButton.css";

import { Box, LinkProps, Typography } from "@mui/material";
import CustomLink from "./CustomLink";
import { CSSProperties, ReactNode } from "react";

type ClawsButtonProps = LinkProps & {
  style?: CSSProperties;
  pulseAnimation?: boolean;
  children: ReactNode;
};

const ClawsButton = (props: ClawsButtonProps) => {
  const {
    children,
    height,
    width,
    fontSize,
    fontWeight,
    px,
    py,
    style,
    pulseAnimation = false,
    ...rest
  } = props;

  const btnStyle = {
    ...style,
    animation: pulseAnimation ? "pulse-btn 1s ease infinite" : undefined,
  };

  return (
    <CustomLink
      {...rest}
      style={btnStyle}
      position={"relative"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={width ? width : "auto"}
      height={height ? height : "auto"}
      px={px ? px : 3}
      py={py ? py : 2}
      borderRadius={1}
      className="claws-button"
      target={"_blank"}
    >
      <Typography
        fontFamily={"var(--primary-font)"}
        textAlign={"center"}
        zIndex={2}
        fontSize={fontSize ? fontSize : 16}
        fontWeight={fontWeight ? fontWeight : "auto"}
        display={"flex"}
      >
        {children}
      </Typography>
      <Box zIndex={1} className="claws" />
    </CustomLink>
  );
};

export default ClawsButton;
