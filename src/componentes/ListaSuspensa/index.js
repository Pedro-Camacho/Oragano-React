import './ListaSuspensa.css'

const ListaSuspensa=(props)=>{
    return(
        <div className='lista-suspensa'>
            <label required={props.obrigatorio}>{props.label}</label>
            <select onChange={evento=>props.aoAlterado(evento.target.value)}required={props.required} value={props.valor}>
                {props.itens.map(item=>{
                  return  <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}
export default ListaSuspensa;