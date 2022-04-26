import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "./CategoryLabel";

const truncate = (string, n) =>
  string?.length > n ? string.substr(0, n - 1) + "..." : string;

const Post = ({ post, compact }) => {
  return (
    <div className="w-full px-4 mb-8">
      <div className="overflow-hidden bg-white border-4 border-indigo-900 shadow-md rounded-2xl">
        {!compact && (
          <Image
            src={post.frontmatter.cover_image}
            alt=""
            height={420}
            width={600}
            className="mb-4 rounded"
          />
        )}
        <div className="px-6 py-8 border-indigo-900 md:p-10 border-t-3">
          <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
          <p className="mb-2 text-xl font-bold text-gray-400">
            {post.frontmatter.author} &bull; {post.frontmatter.date}
          </p>
          <h2 className="mb-6 text-2xl font-extrabold">
            {post.frontmatter.title}
          </h2>
          <p className="mb-6 text-xl font-bold ">
            {truncate(post.frontmatter.excerpt, 70)}
          </p>
          {!compact && (
            <Link href={`/blog/${post.slug}`}>
              <a className="inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600">
                Read More
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
