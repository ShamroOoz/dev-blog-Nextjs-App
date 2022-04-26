import Link from "next/link";

const CategoryLabel = ({ children }) => {
  const colorKey = {
    JavaScript: "black",
    CSS: "blue",
    Python: "green",
    PHP: "purple",
    Ruby: "red",
  };

  return (
    <span
      className="inline-flex items-center justify-center h-6 px-2 mb-6 text-xs font-extrabold text-white uppercase border-2 border-indigo-900 rounded shadow-sm"
      style={{ backgroundColor: `${colorKey[children]}` }}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </span>
  );
};

export default CategoryLabel;
