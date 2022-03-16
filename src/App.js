import { Routes, Route } from "react-router-dom";
import AllQuote from "./components/pages/AllQuote";
import DetailQuote from "./components/pages/DetailQuote";
import NewQuote from "./components/pages/NewQuote";
import Layout from "./components/layout/layout";


function App() {
  return (<section>
    <Layout>

    <Routes>
      
        <Route path="/quotes" element={<AllQuote />} />
        <Route path="/detail/:anything" element={<DetailQuote />} />
        <Route path="/new" element={<NewQuote />} />
     

    </Routes>
    </Layout>
  </section>

  );
}

export default App;
