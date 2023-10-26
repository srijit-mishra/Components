import classNames from "classnames";
import useNavigation from "../hools/use-navigation";

function Link({ path, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(path);
  };

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === path && activeClassName
  );

  return (
    <a className={classes} href={path} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
