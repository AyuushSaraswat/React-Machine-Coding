import { useState } from "react";

function FbReactions() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [hoveredPost, setHoveredPost] = useState(null);

  const emojis = ["👍", "❤️", "😡", "😔", "😂"];

  const handlePost = () => {
    if (!input.trim()) return;

    const newPost = {
      id: Date.now(),
      title: input,
      emoji: "👍",
    };

    setPosts((prev) => [...prev, newPost]);
    setInput("");
  };

  const handleEmojiClick = (postId, selectedEmoji) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, emoji: selectedEmoji } : post,
      ),
    );

    setHoveredPost(null);
  };

  return (
    <div>
      <h2>Facebook Reactions Demo</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What's on your mind?"
      />
      <br />
      <button onClick={handlePost}>Post</button>

  
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>

          {/* Current Reaction */}
          <span onMouseEnter={() => setHoveredPost(post.id)}>{post.emoji}</span>

          {/* Reaction Popup */}
          {hoveredPost === post.id && (
            <div
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              {emojis.map((emoji) => (
                <span
                  key={emoji}
                  onClick={() => handleEmojiClick(post.id, emoji)}
                >
                  {emoji}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FbReactions;
