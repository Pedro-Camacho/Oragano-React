import './ListaSuspensa.css'
//componete da lista de times
const ListaSuspensa=(props)=>{
    return(
        //o jsx n identitifica class como num html por isso usamos className
        <div className='lista-suspensa'>
            {/*requirede torna a seleção de um item obrigatorio no envio do formulario*/ }
            <label required={props.obrigatorio}>{props.label}</label>
            {/*aqui ao selecionar um item alteramos os valores do required e tbm alteramos o valor do item mostrado na tela*/}
            <select onChange={evento=>props.aoAlterado(evento.target.value)}required={props.required} value={props.valor}>
                {/*utilizando um map conseguimos dinamicamente returnar ao usuario os itens da lista*/}
                {props.itens.map(item=>{
                  return  <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}
export default ListaSuspensa;