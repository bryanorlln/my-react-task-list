export const Task =(props)=>{
    const {texto} = props;


    return(        
    <li>
        <input type="checkbox"/> 
        <label>{texto}</label>
    </li>
    )
}