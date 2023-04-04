import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import "./Header.css";
export default function Header() {
  const query = useQuery();
  const searchTerm = query.has("query") ? query.get("query") : "";
  const [search, setSearch] = useState(searchTerm);
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    navigate(`/search?query=${search}`);
  }
  function onChange(e) {
    setSearch(e.target.value);
  }
  return (
    <header>
      <h2>Postara</h2>
      <ul className="header__links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link>Live</Link>
        </li>
        <li>
          <Link>Explore</Link>
        </li>
        <li>
          <Link>Chats</Link>
        </li>
      </ul>
      <form autoComplete="false" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={onChange}
        />
        <IoSearchSharp
          type="submit"
          role="button"
          style={{ margin: "0.2rem" }}
        />
      </form>
    </header>
  );
}
