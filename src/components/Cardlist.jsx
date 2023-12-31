import { useContext } from "react"
import Cards from "./Cards"
import { CartContext } from "../Context/Cartcontext"


const Cardlist = () => {
  const {data} = useContext(CartContext);
  
  return (
    <div className="container flex-1">
      {data.map((el) => <Cards key={el.id} data={el}/>)}      
     
    </div>
  )
}

export default Cardlist