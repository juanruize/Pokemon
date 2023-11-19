// import React from 'react';
// import "../Pages/Pages.styles.css";


// const Pages =({charactersXPage, allPokemons, pages})=> {
//     const pageNumers = []
//     for (let i=1; i<=Math.ceil(allPokemons/charactersXPage); i++){
//         pageNumers.push(i)
//     }
//     return(
//         <nav>
//             <ul>
//                 {pageNumers && pageNumers.map((num)=>(
//                     <button
//                         onClick={()=>pages(num)} >
//                             {num}
//                     </button>
//                 ))}
//             </ul>
//         </nav>
//     )
// }
// export default Pages
import React from "react";


export default function Pages({ characterXPage, allPokemons, pages }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allPokemons / characterXPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav >
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            
              <button onClick={() => pages(number)} >{number}</button>
           
          ))}
      </ul>
    </nav>
  );
}
