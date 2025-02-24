import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

const BlogPost = () => {
    const { slug } = useParams();
    const [content, setContent] = useState("");

    useEffect(() => {
        // Dynamic import of the markdown file
        import(`../articles/${slug}.md`)
            .then(res => {
                setContent(res.default);
            })
            .catch(err => console.error("Failed to load article:", err));
    }, [slug]);

    return (
        <div className="blog-post">
            <h1>test</h1>
            <h1>{slug}</h1>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default BlogPost;
