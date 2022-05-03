import { Button } from "./components/Button";
import { Footer } from "./layout/Footer";
import { Layout } from "./layout/Layout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Layout>
      <h1 className="my-5 border-b-[1px] pb-5 text-center text-4xl font-bold">
        📦 sandbox.
      </h1>
      <Button />
      <Footer />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout>
  );
}

export default App;
