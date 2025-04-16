import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";
import { useState } from "react";
import { useRouter } from "next/router";
import IPlantLogo from "@/public/iplant-logo.svg";
import styled from "styled-components";
import { SWRConfig, mutate } from "swr";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [owned, setOwned] = useState(false);

  async function handleAddPlants(newPlant) {
    console.log(newPlant);
    const response = await fetch("/api/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }
    router.push("/");
  }

  async function handleEditPlant(updatedPlant, id) {
    const response = await fetch(`/api/plants/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlant),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }
    router.push(`/plants/${id}`);
  }

  async function handleToggleOwned(id) {
    setOwned(!owned);
    try {
      const response = await fetch(`/api/plants/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isOwned: owned }),
      });

      if (!response.ok) throw new Error("Failed to toggle");
      mutate("/api/plants");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeletePlant(id) {
    const response = await fetch(`/api/plants/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }
    router.push("/");
  }

  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <StyledLogo />
      <Component
        onAddPlants={handleAddPlants}
        onToggleOwned={handleToggleOwned}
        onEditPlant={handleEditPlant}
        onDeletePlant={handleDeletePlant}
        owned={owned}
        {...pageProps}
      />

      <Navigation />
    </SWRConfig>
  );
}

const StyledLogo = styled(IPlantLogo)`
  width: 150px;
  margin-bottom: 20px;
`;
