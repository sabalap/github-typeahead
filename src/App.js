import React, { useState, useCallback, Fragment } from "react";
import "./App.css";
import User from "./components/User";
import SearchInput from "./components/SearchInput";
function App() {
  const [user, setUser] = useState({
    username: "",
    avatar: "",
    githubProfile: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchUser = useCallback(async (username) => {
    setLoading(true);
    setError(null);
    if (username.length > 0) {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          setUser({ username: "", avatar: "", githubProfile: "" });
          throw new Error("User not found");
        } else {
          const data = await response.json();
          setUser({
            username: data.login,
            avatar: data.avatar_url,
            githubProfile: data.html_url,
          });
        }
      } catch (error) {
        setError(error.message);
      }
    } else {
      setUser({ username: "", avatar: "", githubProfile: "" });
    }
    setLoading(false);
  }, []);

  return (
    <Fragment>
      <div className="App">
        <h1>Search Github User</h1>
        <SearchInput onFetchUser={fetchUser} />
        <User user={user} />
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="warning">{error}</p>}
      </div>
    </Fragment>
  );
}

export default React.memo(App);
