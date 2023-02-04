import React from "react";
import { getWebsites, addWebsite, removeWebsite, startBlocking, stopBlocking, timeBlock } from "../commands";
import { Link } from "react-router-dom";

export default function Blocked() {
  const [blockedWebsites, setBlockedWebsites] = React.useState<String[]>([]);
  const [message, setMessage] = React.useState<String>("");
  const [input, setInput] = React.useState("");

  const updateBlocked = () => {
    getWebsites().then((res) => {
      setBlockedWebsites(res);
    });
  }

  React.useEffect(() => {
    updateBlocked();
  }, [])

  const handleAdd = (website : string) => {
    addWebsite(website).then((res) => {
      if (!res) return
      setMessage(res);
      updateBlocked();
      setInput("");
    });
  };

  const handleRemove = (website : string) => {
    removeWebsite(website).then((res) => {
      if (!res) return
      setMessage(res);
      updateBlocked();
      setInput("");
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <h2>Blocked sites</h2>
      <ul>
        {blockedWebsites.map((site) => (
          <li key={site as string}>
            <p>{site}</p>
            <button onClick={() => handleRemove(site)}>Remove</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onSubmit={() => handleAdd(input)}
      />
      <button onClick={() => handleAdd(input)}>Add</button>
      <p>{message}</p>
      <Link to={"/"}>Home</Link>
    </div>
  );
}
