import { PageLayout, Footer } from "../components";

const BlogPost = () => (
  <PageLayout>
    <section className="min-h-[60vh] bg-gradient-to-b from-purple to-green flex flex-col items-center justify-center text-white px-6 py-24">
      <h1 className="font-black title text-6xl lg:text-9xl text-center">
        BLOG
      </h1>
      <p className="font-hand text-2xl lg:text-4xl mt-6 text-center">
        Coming soon.
      </p>
      <a
        href="/"
        className="font-hand text-xl lg:text-2xl mt-12 underline underline-offset-4"
      >
        Back to home
      </a>
    </section>
    <Footer />
  </PageLayout>
);

export default BlogPost;
