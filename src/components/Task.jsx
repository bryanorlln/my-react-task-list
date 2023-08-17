export const Task =(props)=>{
    const {index,texto} = props;


    return(
    <li>
        <input type="checkbox"/> 
        <label >{texto}</label>
    </li>
    )
 }