import { MdOutlineArrowBack } from "react-icons/md";
import CustomLink from "./CustomLink";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { timerLoadingRoute } from "../constants/timer";
import { LoadingContext } from "../contexts/LoadingContext";

type BackButtonProps = {
  title?: string;
};

const BackButton = (props: BackButtonProps) => {
  const { title } = props;

  const navigate = useNavigate();
  const { setIsLoading } = useContext(LoadingContext);

  const handleBackButton = () => {
    setIsLoading(true);
    setTimeout(() => navigate("/"), timerLoadingRoute);
  };

  return (
    <CustomLink
      className="back-button"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={{ xs: "100%", md: "430px" }}
      height={"auto"}
      fontSize={{ xs: "18px", md: "20px" }}
      color={"#000"}
      px={2}
      py={2}
      borderRadius={1}
      target={"_blank"}
      gap={1.5}
      onClick={handleBackButton}
    >
      <MdOutlineArrowBack />
      {title ? title : "Voltar ao início"}
    </CustomLink>
  );
};

export default BackButton;
