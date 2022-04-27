import fs from "fs";
import path from "path";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import Pagination from "@/components/Pagination";
import CategoryList from "@/components/CategoryList";
import Search from "@/components/Search";
import { POSTS_PER_PAGE } from "@/config/index";
import { getPosts } from "@/lib/posts";

export default function BlogPage({ posts, numPages, currentPage, categories }) {
  return (
    <Layout>
      <section className="space-y-9 py-26">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-base font-extrabold text-indigo-500">
              Blog
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <Search />
        </div>

        <CategoryList categories={categories} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
        <Pagination currentPage={currentPage} numPages={numPages} />
      </section>
    </Layout>
  );
}

{
  /* <Pagination currentPage={currentPage} numPages={numPages} /> */
}
{
  /* </div> */
}

{
  /* <div className="w-1/4">
             <CategoryList categories={categories} />
           </div>
      </div>*/
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);

  let paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1);

  const files = fs.readdirSync(path.join("posts"));

  const posts = getPosts();

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories: uniqueCategories,
    },
  };
}