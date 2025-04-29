import ClearSearch from "@/public/x.svg";
import styled from "styled-components";

export default function SearchBar({ query, setQuery }) {
  return (
    <SearchBarWrapper>
      <SearchBarInput
        type="text"
        placeholder="Search plants..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ClearSearchButton onClick={() => setQuery("")}>
        <ClearSearch />
      </ClearSearchButton>
    </SearchBarWrapper>
  );
}

const SearchBarWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
  width: 320px;
  padding: 2px;
  background-color: var(--surface-light);
  border-radius: 50px;
  border: 1px solid var(--primary);
`;

const SearchBarInput = styled.input`
  all: unset;
  width: 278px;
  height: 2rem;
  padding-left: 8px;
  /* background-color: var(--surface-light);
  border-radius: 5px;
  border: 1px solid var(--primary);
  &:focus {
    outline: 1px solid var(--primary);
  } */
  &::placeholder {
    color: var(--primary);
  }
`;

const ClearSearchButton = styled.button`
  all: unset;
  color: var(--secondary);
  background-color: transparent;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  &:hover {
    background-color: var(--highlight);
    color: var(--surface-light);
  }
`;
