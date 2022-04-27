import Link from "next/link";

const CategoryList = ({ categories }) => {
  return (
    <div className="mb-10">
      <div className="items-center -mb-4 lg:flex">
        <a
          className="inline-block mb-4 mr-6 text-xl font-extrabold xl:mr-16"
          href="/blog"
        >
          All Categories
        </a>
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <a className="inline-block mb-4 mr-6 text-xl font-extrabold text-gray-400 xl:mr-16 hover:text-gray-500">
              {category}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
