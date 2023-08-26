
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import Footer from './Components/Uitily/Footer';
import Load from './Components/Uitily/Load';
import HomePage from './Page/Home/HomePage';
import RegisterPage from './Page/Auth/RegisterPage';
import Ourdishes from './Components/Ourdishes/Ourdishes';
import AboutUs from './Page/About Us/AboutUs';
import OurMenu from './Page/Menu/OurMenu';
import ReView from './Page/Review/ReView';
import OrderPage from './Page/Order/OrderPage';
import UserFavoriteProductsPage from './Page/User/UserFavoriteProductsPage'
import UserAllOrdersPage from './Page/User/UserAllOrdersPage';
import UserAllAddresPage from './Page/User/UserAllAddresPage';
import UserAddAddressPage from './Page/User/UserAddAddressPage';
import UserEditAddressPage from './Page/User/UserEditAddressPage';
import UserProfilePage from './Page/User/UserProfilePage';
import CartPage from './Page/Cart/CartPage';
import AdminAllProductsPage from './Page/Admin/AdminAllProductsPage'
import AdminAllOrdersPage from './Page/Admin/AdminAllOrdersPage'
import AdminOrderDetalisPage from './Page/Admin/AdminOrderDetalisPage'
import AdminAddCategoryPage from './Page/Admin/AdminAddCategoryPage'
import AdminAddSubCategoryPage from './Page/Admin/AdminAddSubCategoryPage'
import AdminAddProductsPage from './Page/Admin/AdminAddProductsPage'
import Login from './Page/Auth/login';
import ForgetPasswordPage from './Page/Auth/ForgetPasswordPage';
import VerifyPass from './Page/Auth/verifyPass';
import ResetPass from './Page/Auth/ResetPass';
import  ProtectedRouteHook from './hook/auth/protected-route-hook';
import  ProtectedRoute from './Components/Uitily/ProtectedRoute';
import AdminEditProductsPage from './Page/Admin/AdminEditProductsPage';




function App() {

  const [isUser, isAdmin, userData] = ProtectedRouteHook()
  return (
    <div className="font" >
   
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
        <Route index element={<HomePage/>} />   
        <Route path="/login" element={<Login/>}/>
        <Route path="/Register" element={<RegisterPage/>}/>
        <Route path="/user/Forget-password" element={<ForgetPasswordPage/>}/>
        <Route path="/user/verify-code" element={<VerifyPass/>}/>
        <Route path="/user/reset-password" element={<ResetPass/>}/>
        <Route path="/Ourdishes" element={<Ourdishes/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/OurMenu" element={<OurMenu/>}/>
        <Route path="/review" element={<ReView/>}/>
        <Route path="/order" element={<OrderPage/>}/>
        <Route path="/cart" element={<CartPage />} />

        <Route element={<ProtectedRoute auth={isUser} />}>
        <Route path="/user/favorite" element={<UserFavoriteProductsPage/>}/>
        <Route path="/user/allorders" element={<UserAllOrdersPage/>}/>
        <Route path="/user/addresses" element={<UserAllAddresPage/>}/>
        <Route path="/user/add-address" element={<UserAddAddressPage/>}/>
        <Route path="/user/edit-address" element={<UserEditAddressPage/>} />  
        <Route path="/user/profile" element={<UserProfilePage />} /> 
        </Route>

        <Route element={<ProtectedRoute auth={isAdmin} />}>
        <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
        <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
        <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
        <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
        <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
        <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
        <Route path="/admin/editproduct/:id" element={<AdminEditProductsPage/>}/>
        </Route>
        
        </Routes>
      </BrowserRouter>
    <Footer/>
   
   
    </div>
  );
}

export default App;
