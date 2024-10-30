import { Fragment, useEffect, useState } from "react"
import Router from "./router"

function App() {
  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme');
  //   if (savedTheme === 'dark') {
  //     document.documentElement.classList.add('dark');
  //     setDarkMode(true);
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     setDarkMode(false);
  //   }
  // }, []);

  // // Function to toggle dark mode
  // const toggleDarkMode = () => {
  //   if (darkMode) {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.setItem('theme', 'light');
  //   } else {
  //     document.documentElement.classList.add('dark');
  //     localStorage.setItem('theme', 'dark');
  //   }
  //   setDarkMode(!darkMode);
  // };

  return (
    <Fragment>
      <Router />
    </Fragment>
  )
}

export default App