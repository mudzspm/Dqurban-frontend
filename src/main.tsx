import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './App.css';
import Home from './pages/home/home.tsx';
import Qurban from './pages/qurban/qurban.tsx';
import Aqiqa from './pages/aqiqa/aqiqa.tsx';
import Waqf from './pages/waqf/waqf.tsx';
import FeedLot from './pages/Feedlot/feedlot.tsx';
import Thankyou from './pages/thankyou/thankyou.tsx';
import Forgot from './pages/auth/forgot.tsx';
import './global.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
// import Cart from './pages/cart/cart.tsx';
// import SignIn from './pages/auth/signIn.tsx';
import Profile from './pages/profile/profile.tsx';
import Cart from './pages/cart/cart.tsx';
import SignIn from './pages/auth/signIn.tsx';
import SignUp from './pages/auth/register.tsx';
 
import OTP from './pages/auth/OTP.tsx';
import Contactus from './pages/contactUs/contactUs.tsx';
import CartLogin from './pages/cartLogin/cartLogin.tsx';
import AboutUs from './pages/aboutUs/aboutUs.tsx';
import CheckOut from "./pages/profile/components/CheckOut.tsx";
// import CheckOut2 from "./pages/profile/components/CheckOut2";
import Invoice from "./pages/profile/components/invoice.tsx";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext, AuthProvider } from './context/auth.tsx';
import { useContext } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { store,persistor  } from "./store";
import { Provider } from "react-redux";
import Terms from './components/terms.tsx';
import ContactForm from './components/contactForm.tsx';
import Failedtransaction from './pages/failedtransaction/failedtransaction.tsx';
import RestPassword from './pages/auth/reset-password.tsx';
import Receipt from './pages/profile/components/Receipt.tsx';
// import { ToastContainer } from 'react-toastify';
import FeedLotDetails from './components/FeedLotdetails.tsx';
import Supplier from './pages/Supplier/supplier.tsx';
import Exector from './pages/Executor/exector.tsx';
import RefundPolicy from './components/RefundPolicy.tsx';
import InstalmentPlanPolicy from './components/InstalmentPlanPolicy.tsx';
import PrivacyPolicy from './components/PricveyPolicy.tsx';
import Agreement from './components/Agreement.tsx';
import SalesInvoiceFully from "./pages/profile/components/SalesInvoiceFully.tsx";
import InstallmentSalesInvoice from "./pages/profile/components/InstallmentSalesInvoice.tsx";
import SadaqahInvoiceInstallment from "./pages/profile/components/SadaqahInvoiceInstallment.tsx";
import SadaqahinvoiceFully from "./pages/profile/components/SadaqahinvoiceFully.tsx";
import Certificate from "./pages/profile/components/Certificate.tsx";
import Services from "./pages/profile/components/Services.tsx";


const Root = () => {
  const token = useContext(AuthContext).token;

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        // {
        //   path: './cart',
        //   element: <Cart />,
        // },
        {
          path: '/profile',
          element: token ? <Profile /> : <Navigate to='/signin' />,
        },
        {
          path: '/checkout',
          element: token ? <CheckOut /> : <Navigate to='/signin' />,
        },
        {
          path: '/participationdetails',
          element: token ? <Invoice /> : <Navigate to='/signin' />,
        },
        {
          path: '/SalesInvoice',
          element: token ? <SalesInvoiceFully /> : <Navigate to='/signin' />,
        },
        {
          path: '/InstallmentSalesInvoice',
          element: token ? <InstallmentSalesInvoice /> : <Navigate to='/signin' />,
        },
        {
          path: '/sadaqahinvoiceFully',
          element: token ? <SadaqahinvoiceFully /> : <Navigate to='/signin' />,
        },
        {
          path: '/sadaqahInvoiceInstallment',
          element: token ? <SadaqahInvoiceInstallment /> : <Navigate to='/signin' />,
        },
        {
          path: '/Certificate',
          element: token ? <Certificate /> : <Navigate to='/signin' />,
        },
        {
          path: '/Certificate/family/:familyid',
          element: token ? <Certificate /> : <Navigate to='/signin' />,
        },
        {
          path: '/Certificate/organization/:organizationid',
          element: token ? <Certificate /> : <Navigate to='/signin' />,
        },
        {
          path: '/Certificate/family/:familyid/organization/:organizationid',
          element: token ? <Certificate /> : <Navigate to='/signin' />,
        },
        {
          path: '/receipt',
          element: token ? <Receipt /> : <Navigate to='/signin' />,
        },
        // {
        //   path: '/checkout2',
        //   element: token ? <CheckOut2 /> : <Navigate to='/signin' />,
        // },
        {
          path: '/qurban',
          element: <Qurban />,
        },

        {
          path: '/feedlot',
          element: <FeedLot />,
        },
        {
          path: '/aqiqa',
          element: <Aqiqa />,
        },
        {
          path: '/waqf',
          element: <Waqf />,
        },
        {
          path: '/qurban/:countryId',
          element: <Qurban />,
        },
        {
          path: '/aqiqa/:countryId',
          element: <Aqiqa />,
        },
        {
          path: '/waqf/:countryId',
          element: <Waqf />,
        },
        {
          path: '/contact',
          element: <Contactus />,
        },
        {
          path: '/about',
          element: <AboutUs />,
        },
        {
          path: '/Services',
          element: <Services />,
        },
        {
          path: '/thankyou',
          element: <Thankyou />,
        },
        {
          path: '/failedtransaction',
          element: <Failedtransaction />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/cartlogin',
          element: <CartLogin />,
        },

        {
          path: '/contactform',
          element: <ContactForm />,
        },

        {
          path: '/Feedlotdetails',
          element: <FeedLotDetails />,
        },
        {
          path: '/terms',
          element: <Terms />,
        },
        {
          path: '/RefundPolicy',
          element: <RefundPolicy />,
        },
        {
          path: '/InstalmentPlanPolicy',
          element: <InstalmentPlanPolicy />,
        },
        {
          path: '/PrivacyPolicy',
          element: <PrivacyPolicy />,
        },
        {
          path: '/Agreement',
          element: <Agreement />,
        },
        
    {
      path: '/supplier',
      element: <Supplier />,
    },
    {
      path: '/Executor',
      element: < Exector/>,
    },
        {

        }
      ],
    },
    

    {
      path: '/signup',
      element: <SignUp />,
    },
    
    {
      path: '/signin',
      element: <SignIn />,
    },
    {
      path: '/forgot',
      element: <Forgot />,
    },
    {
      path: '/reset-password',
      element: <RestPassword />,
    },
    {
      path: '/otp',
      element: <OTP />,
    }

    
  ]);
  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
          <AuthProvider>
            {/* <ToastContainer /> */}
            <Root />
          </AuthProvider>
      </PersistGate>
  </Provider>,
);
