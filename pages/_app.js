import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";
import { useRouter } from "next/router";
import IPlantLogo from "@/public/iplant-logo.svg";
import styled from "styled-components";
import { SWRConfig, mutate } from "swr";
import { toast, Bounce } from "react-toastify";
import Toast from "@/components/PlantForm/Toast";

const toastify = (message) =>
  toast(`${message}`, {
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const router = useRouter();

  async function handleAddPlants(newPlant) {
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
    toastify("PLant was successfully created! 🌱");
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
    toastify("Plant was successfully updated! 🌱");
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
      <StyledLogo />
      <Component
        onAddPlants={handleAddPlants}
        onToggleOwned={handleToggleOwned}
        onEditPlant={handleEditPlant}
        onDeletePlant={handleDeletePlant}
        {...pageProps}
      />
      <Toast />
      <Navigation />
    </SWRConfig>
  );
}

const StyledLogo = styled(IPlantLogo)`
  width: 150px;
  margin-bottom: 20px;
`;
