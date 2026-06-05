import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { marked } from "marked";
import { PageLayout, Footer } from "../components";

const RAW_BASE =
  "https://raw.githubusercontent.com/bitcoinbrisbane/articles/main";

const renderMarkdown = (md: string): string => {
  const stripped = md.replace(/^#\s+.+\n+/, "");
  const rewritten = stripped
    .replace(/\]\(([a-z0-9-]+)\.md\)/g, "](/blog/$1)")
    .replace(
      /!\[([^\]]*)\]\(([^)]+\.(png|jpe?g|gif|svg))\)/gi,
      (_, alt, src) =>
        src.startsWith("http")
          ? `![${alt}](${src})`
          : `![${alt}](${RAW_BASE}/${src})`
    );
  return marked.parse(rewritten, { async: false }) as string;
};

const extractTitle = (md: string): string => {
  const match = md.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "Article";
};

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const [html, setHtml] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    setHtml(null);
    setError(null);

    (async () => {
      try {
        const md = await fetch(`${RAW_BASE}/${slug}.md`).then(r => {
          if (!r.ok) throw new Error(`Article ${r.status}`);
          return r.text();
        });
        if (cancelled) return;
        const t = extractTitle(md);
        setTitle(t);
        document.title = `${t} — Bitcoin Brisbane`;
        setHtml(renderMarkdown(md));
      } catch (e) {
        if (!cancelled) setError((e as Error).message);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return (
    <PageLayout>
      {error && (
        <main className="blog-article">
          <Link to="/blog">← All articles</Link>
          <h1>Article not found</h1>
          <p>{error}</p>
        </main>
      )}
      {!error && html === null && (
        <main className="blog-article">
          <Link to="/blog">← All articles</Link>
          <p>Loading…</p>
        </main>
      )}
      {html && (
        <main className="blog-article">
          <Link to="/blog">← All articles</Link>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </main>
      )}
      <Footer />
    </PageLayout>
  );
};

export default Article;
