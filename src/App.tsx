import { Button } from "./components/Button";
import { Footer } from "./layout/Footer";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <Layout>
      <h1 className="my-5 border-b-[1px] pb-5 text-center text-4xl font-bold">
        sanbox.
      </h1>
      <Button />
      <Footer />
    </Layout>
  );
}

export default App;
