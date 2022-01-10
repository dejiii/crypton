import React from "react";
// import Table from "../Table";

export const SearchBar = () => {
  // const [search, setSearch] = useState("");

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

  return (
    <section className="crypton-search-wrapper">
      <form>
        <input
          className="crypton-search-bar"
          placeholder="Search name"
          // onChange={handleChange}
        />
      </form>
      <div></div>
    </section>
  );
};
