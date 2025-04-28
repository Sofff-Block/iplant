import { ToastContainer, toast, Bounce } from "react-toastify";

export default function Toast() {
  return (
    <div className="grid place-items-center h-dvh bg-zinc-900/15">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}
