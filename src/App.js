import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login/LoginPage";
import { AdminRegistration } from "./pages/admin-registration/AdminRegistration";
import EmailVerification from "./pages/admin-registration/EmailVerification.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard } from "./pages/dashboard/Dashboard.js";
import { Product } from "./pages/products/Product.js";
import { PrivateRouter } from "./components/private-route/PrivateRouter.js";
import { Category } from "./pages/categories/Category.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* private routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          />
          {/* categories */}
          <Route
            path="/category"
            element={
              <PrivateRouter>
                <Category />
              </PrivateRouter>
            }
          />

          {/* public routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<AdminRegistration />} />
          <Route path="/admin/verify-email" element={<EmailVerification />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
