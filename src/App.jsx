import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Footer from './components/Footer'
import Contact from './Pages/Contact'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme')
  )

  const element = document.documentElement;

  useEffect(()=>{
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme','dark')
        break;
      case 'light':
        element.classList.remove('dark')
        localStorage.setItem('theme','light')
        break;
    
      default:
        break;
    }
  },[theme])

  return (
    <section className='bg-backgroundColor text-textColor dark:bg-darkBackgroundColor dark:text-darkTextColor duration-300'>
      <Navbar/>
      <main>
        <Home theme={theme} setTheme={setTheme}/>
        <About />
        <Portfolio />
        <Contact/>
      </main>
      <Footer/>
    </section>
  )
}

export default App
