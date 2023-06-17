import { GlobalStyle } from "./global/styles";
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ToastContainer } from "react-toastify";
// import { TopBanner } from './components/TopBanner'
// import { Banner } from './components/Banner'
import 'react-toastify/dist/ReactToastify.css'
import { ProviderContext }  from './context/Context'

export function App() {

  return (
    <ProviderContext>
      <Header />
      
      {/* <TopBanner /> */}
      <Outlet />
      <Footer />
      <GlobalStyle />
      <ToastContainer />
    </ProviderContext>
  )
}

