import NavBar from "@component/components/NavBar";
import Footer from "@component/components/footer";
import "@component/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react";
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps:{session,...pageProps} }) {

  useEffect(()=>{
    import ("bootstrap/dist/js/bootstrap.min.js")

  },[])
  if(Component.getLayout)
  return Component.getLayout(<Component {...pageProps}/>)
  return <SessionProvider session={session}>
  <><NavBar/>
  <Component {...pageProps} />
  <Footer/>
  </>
  </SessionProvider>
}
