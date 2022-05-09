import { Footer } from "./layout/Footer";
import { Layout } from "./layout/template/Layout";
import { ToastContainer } from "react-toastify";
import { ButtonSection } from "./layout/ButtonSection";
import { UserGuide } from "./layout/UserGuide";

function App() {
  return (
    <Layout title="📦 sandbox.">
      <ButtonSection />
      <UserGuide />
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
