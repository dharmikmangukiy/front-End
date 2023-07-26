import React from 'react'
import Header from './ClientSite/Global/Header'
import Footer from './ClientSite/Global/Footer'
import Home from './ClientSite/CompoHome/Home'


const AppClient = () => {
  
  return (
    <>
    <div className="client_conteint">
    <Header/>
    <Home/>
    <Footer/>
    </div>
    </>
  )
}

export default AppClient