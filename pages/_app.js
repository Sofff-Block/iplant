import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";
import { useRouter } from "next/router";
import { SWRConfig, mutate } from "swr";
import Header from "@/components/Header";
import { toast, Bounce } from "react-toastify";
import Toast from "@/components/PlantForm/Toast";
import Head from "next/head";
import Providers from "./providers";
import { useTheme} from "next-themes";
import { useEffect, useState } from "react";

const toastify = (message) =>
  toast(`${message}`, {
    position: "bottom-center",
    style: { backgroundColor: "var(--surface-light)" },
    autoClose: 1500,
    hideProgressBar: true,
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
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

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
    toastify("Plant was successfully created! 🌱");
  }

  const isDark = resolvedTheme === "dark";

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

    toastify(" Plant was successfully deleted! 🌱 ✅");
  }

  return (
    <Providers>
      <SWRConfig value={{ fetcher }}>
        <Head>
          <title>{`iPlan{t}`}</title>
        </Head>
        <GlobalStyle />
        <Header isDark={isDark} router={router} />
        <Component
          onAddPlants={handleAddPlants}
          onToggleOwned={handleToggleOwned}
          onEditPlant={handleEditPlant}
          onDeletePlant={handleDeletePlant}
          isDark={isDark}
          {...pageProps}
        />
        <Toast />
        <Navigation />
      </SWRConfig>
    </Providers>
  );
}
