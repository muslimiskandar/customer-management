import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { CreateCustomer } from "./components/pages/CreateCustomer";
import { CustomerDetails } from "./components/pages/CustomerDetails";
import { Navbar } from "./components/common/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-customer" element={<CreateCustomer />} />
        <Route path="/customer-details/:id" element={<CustomerDetails />} />
      </Routes>
    </>
  );
}

export default App;
