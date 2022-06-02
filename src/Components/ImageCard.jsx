import "./Component.css";




export default function ImageCard({id,image,status,hanleImageToggle}){

     
    if(status===true)
    {
        var Style = {
           border: " 3px solid #FE5454",
          
        }
    }


    return (
        <>
         
                   
                          <img  onClick={()=>hanleImageToggle(id)}
                          className="imagess" style={Style} src={image}/>

                  
        </>
    )
}