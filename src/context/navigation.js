import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
