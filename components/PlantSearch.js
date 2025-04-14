import ClearSearch from "@/public/x.svg";
import styled from "styled-components";
export default function SearchBar({ query, setQuery }) {
  return (
    <SearchBarWrapper>
      <input
        type="text"
        placeholder="Pflanze suchen..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setQuery("")}>
        <ClearSearch />
      </button>
    </SearchBarWrapper>
  );
}

const SearchBarWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;
