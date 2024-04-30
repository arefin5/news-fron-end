"use client";
import { useState } from 'react';

export default function MyComponent() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Your fetch request here
    const ourPassword = "LC3G zmQp 1MRv P9aw sVuY MZIn";
    const ourUsername = "admin";

    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set(
      "Authorization",
      "Basic " + Buffer.from(`${ourUsername}:${ourPassword}`).toString("base64")
    );

    await fetch("https://news.gbnews24.com/wp-json/wp/v2/posts", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        title: title,
        content: content,
        status: "publish"
      })
    });

    // Clear the input fields after submission
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input type="text" value={title} onChange={handleTitleChange} />
          </label>
        </div>
        <div>
          <label>
            Content:
            <textarea value={content} onChange={handleContentChange} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
