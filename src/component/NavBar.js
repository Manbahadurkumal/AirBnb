// import React from 'react'
// import heroImg from '../data'
// const NavBar = () => {
//   return (
//     <div className="container">
//       {heroImg}
//     </div>
//   )
// }
function NavBar(props){
  console.log(props.heroImg)
  return(
    <div className="container">
      <div className="logo py-3 ps-3">
        <img src="image/airbnb 1.png" alt="Logo"/>
      </div>
    </div>
  )
}


export default NavBar
