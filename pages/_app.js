import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";
import { useRouter } from "next/router";

import styled from "styled-components";
import { SWRConfig, mutate } from "swr";
import Header from "@/components/Header";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const router = useRouter();

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
    try {
      const response = await fetch(`/api/plants/${id}`);

      if (!response.ok) {
        console.error(response.status);
        return;
      }

      const plant = await response.json();
      const updatedOwned = !plant.isOwned;

      const updatedPlant = await fetch(`/api/plants/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isOwned: updatedOwned }),
      });

      if (!updatedPlant.ok) {
        console.error(response.status);
        return;
      }
      mutate("/api/plants");
    } catch (error) {
      console.error("Something went wrong.", error);
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
      <Header />
      <Component
        onAddPlants={handleAddPlants}
        onToggleOwned={handleToggleOwned}
        onEditPlant={handleEditPlant}
        onDeletePlant={handleDeletePlant}
        {...pageProps}
      />

      <Navigation />
    </SWRConfig>
  );
}
