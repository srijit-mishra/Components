import useNavigation from "../hools/use-navigation";

function Route({ path, children }) {
  const { currentPath } = useNavigation();
  return currentPath === path ? children : null;
}

export default Route;
