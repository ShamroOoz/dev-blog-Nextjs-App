import Link from "next/link";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import { getPosts } from "@/lib/posts";

const Home = ({ posts }) => {
  return (
    <Layout>
      <section className="py-26">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="mt-2 mb-4 text-2xl font-extrabold md:text-4xl font-heading">
              Our mission is to make knowledge and news accessible for everyone.
            </h1>
            <span className="text-base font-extrabold text-indigo-500">
              Latest Posts
            </span>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
        <div className="flex justify-center">
          <a
            className="inline-block px-12 py-4 text-lg font-extrabold leading-6 text-center text-white transition duration-200 bg-indigo-800 border-indigo-900 rounded shadow hover:bg-indigo-900 border-3"
            href="/blog"
          >
            View ALL
          </a>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  };
}

export default Home;
