import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import InputField from "./InputField";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import useQuery from "../hooks/useQuery";
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
      </ul>
      <form onSubmit={onSubmit}>
        <InputField
          input={{ placeholder: "Search", value: search, onChange }}
        />
        <IoSearchSharp type="submit" role="button" />
      </form>
    </header>
  );
}
