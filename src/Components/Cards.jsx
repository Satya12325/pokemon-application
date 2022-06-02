import "./Component.css";



export default function Cards({ id,ticket, deleteItem,handleToggle,status }){

  
   
    if(status===true)
    {
        var Style = {
           backgroundColor: "#75F4FE",
          
        }
    }

    return(
        <>
        <div className="card" style={Style}>
            <div onClick={()=>handleToggle(id)}>
            {ticket}
            </div>
            <div onClick={()=>deleteItem(id)} className="deletBtn" >X</div>
        </div>
        </>
    )
}