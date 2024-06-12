import { Link, LinkProps } from "@mui/material";
import { ReactNode } from "react";

type CustomLinkProps = LinkProps & {
  children: ReactNode;
};

const CustomLink = (props: CustomLinkProps) => {
  const { children, color, target, ...rest } = props;

  return (
    <Link
      {...rest}
      underline="none"
      target={target ? target : "_parent"}
      color={color ? color : "#fff"}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
