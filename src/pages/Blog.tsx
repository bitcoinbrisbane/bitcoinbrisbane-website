import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout, Footer } from "../components";

const README_URL =
  "https://raw.githubusercontent.com/bitcoinbrisbane/articles/main/README.md";
const RAW_BASE =
  "https://raw.githubusercontent.com/bitcoinbrisbane/articles/main";

type ArticleListing = {
  slug: string;
  title: string;
  topic: string;
  date: string;
};

const parseReadme = (md: string): ArticleListing[] => {
  const rows = [
    ...md.matchAll(
      /^\| \[([^\]]+)\]\(([^)]+\.md)\) \| ([^|]+?) \| (\d{4}-\d{2}-\d{2}) \|$/gm
    )
  ];
  return rows.map(m => ({
    title: m[1].trim(),
    slug: m[2].replace(/\.md$/, ""),
    topic: m[3].trim(),
    date: m[4].trim()
  }));
};

const Blog = () => {
  const [articles, setArticles] = useState<ArticleListing[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Blog — Bitcoin Brisbane";

    let cancelled = false;
    (async () => {
      try {
        const readme = await fetch(README_URL).then(r => {
          if (!r.ok) throw new Error(`README ${r.status}`);
          return r.text();
        });
        const listings = parseReadme(readme);

        const checks = await Promise.all(
          listings.map(a =>
            fetch(`${RAW_BASE}/${a.slug}.md`, { method: "HEAD" }).then(
              r => r.ok
            )
          )
        );
        const live = listings
          .filter((_, i) => checks[i])
          .sort((a, b) => b.date.localeCompare(a.date));

        if (!cancelled) setArticles(live);
      } catch (e) {
        if (!cancelled) setError((e as Error).message);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <PageLayout>
      <section className="min-h-[60vh] bg-gradient-to-b from-purple to-green flex flex-col items-center text-white px-6 py-24">
        <h1 className="font-black title text-6xl lg:text-9xl text-center">
          BLOG
        </h1>
        <div className="mt-12 w-full max-w-3xl bg-white text-gray-900 rounded-xl p-6 lg:p-10 shadow-2xl">
          {error && (
            <p className="text-red-700">Could not load articles: {error}</p>
          )}
          {!error && articles === null && (
            <p className="font-hand text-2xl text-center">Loading articles…</p>
          )}
          {articles && articles.length === 0 && (
            <p className="font-hand text-2xl text-center">
              No articles yet. Coming soon.
            </p>
          )}
          {articles && articles.length > 0 && (
            <ul className="divide-y divide-gray-200">
              {articles.map(a => (
                <li key={a.slug} className="py-4">
                  <Link
                    to={`/blog/${a.slug}`}
                    className="block hover:bg-gray-50 -mx-2 px-2 py-2 rounded"
                  >
                    <div className="text-xs uppercase tracking-wide text-gray-500">
                      {a.topic} · {a.date}
                    </div>
                    <div className="text-lg lg:text-2xl font-semibold mt-1">
                      {a.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <Link
          to="/"
          className="font-hand text-xl lg:text-2xl mt-12 underline underline-offset-4"
        >
          Back to home
        </Link>
      </section>
      <Footer />
    </PageLayout>
  );
};

export default Blog;
