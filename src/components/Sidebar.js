import Link from "./Link";

function Sidebar() {
  const links = [
    { path: "/accordion", label: "Accordion" },
    { path: "/dropdown", label: "Dropdown" },
    { path: "/buttons", label: "Buttons" },
    { path: "/modal", label: "Modal" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.path}
        path={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start no-scrollbar px-20">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
