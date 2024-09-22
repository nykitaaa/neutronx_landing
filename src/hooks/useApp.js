import { useSelector } from "react-redux";
import select from "services/redux/app/selectors";

const useApp = () => {
  const theme = useSelector(select.theme);
  const screenWidth = useSelector(select.screenWidth);

  return {
    theme,
    screenWidth,
  };
};

export default useApp;
