import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar/index.tsx";

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className="text-primary">Olá</h1>
      <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default App;
