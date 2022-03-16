import { Routes, Route } from "react-router-dom";
import AllQuote from "./components/pages/AllQuote";
import DetailQuote from "./components/pages/DetailQuote";
import NewQuote from "./components/pages/NewQuote";
import Layout from "./components/layout/layout";
import NotFound from "./components/pages/NotFound";


function App() {
  return (<section>
    <Layout>

    <Routes>
        <Route path="/" element={<h1>Welcome!</h1>} />
        <Route path="/quotes" element={<AllQuote />} />
        <Route path="/detail/:anything" element={<DetailQuote />} />
        <Route path="/new" element={<NewQuote />} />

        <Route path="*" element={<NotFound />} />
     

    </Routes>
    </Layout>
  </section>

  );
}

export default App;
