import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Markdown from "marked-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import CategoryLabel from "@/components/CategoryLabel";
import PostBottom from "@/components/PostBottom";

export default function PostPage({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) {
  return (
    <Layout title={title}>
      <Link href="/blog">
        <span className="inline-flex items-center justify-center h-6 px-2 text-xs font-extrabold text-indigo-900 uppercase bg-green-200 border border-indigo-900 rounded cursor-pointer">
          Go Back
        </span>
      </Link>
      <section className="bg-white py-26">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="mb-2 text-xl font-bold text-gray-400">
              {author} &bull; {date}
            </p>

            <h1 className="mb-4 text-3xl font-extrabold md:text-4xl font-heading">
              {title}
            </h1>
            <img
              className="inline-block w-12 h-12 rounded-full ring-2 ring-white"
              src={author_image}
              alt=""
            />
            <p className="mb-5"></p>
            <CategoryLabel>{category}</CategoryLabel>
          </div>
        </div>
        <img
          className="block object-cover w-full mb-12 border-4 border-indigo-900 shadow-lg h-96 rounded-2xl"
          src={cover_image}
          alt={title}
        />
        <div className="flex justify-center mt-2">
          <article className="prose md:prose-lg lg:prose-xl prose-img:rounded-xl prose-headings:underline prose-a:text-indigo-900">
            <Markdown>{content}</Markdown>
          </article>
        </div>
        <PostBottom />
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
