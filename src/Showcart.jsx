import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./Cardslice";


function Showcart(){
    let datastore = useSelector((store)=>store.cart.carditems)
    let dispatch =useDispatch();

    function deleteproduct(id) {
        
        alert(`are you sure delete this product${id}`)
        console.log(`this item is delete ${id}`)
            dispatch(removeFromCart(id));
  }
    return(
        <>
        <h1>this is Showcart</h1>
        {
            datastore.map((e)=>(
                <>
                <img src={e.pimage} alt="" />
                <h1>{e.pname}</h1>
                <h2>{e.pprice}</h2>
                <button onClick={()=>deleteproduct(e.id)}>delete</button> <br /><br /> <hr />
                </>
            ))
        }

        </>
    )
}
export default Showcart;