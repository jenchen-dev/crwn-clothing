import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import CheckOut from "./routes/checkout/checkout.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
