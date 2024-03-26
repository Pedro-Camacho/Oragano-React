import Colaborador from '../Colaborador'
import './Time.css'
//componente time 
const Time =(props)=>{
    return (
        //utilizando do stly in line podemos passar props para atualizar nossas configurações de estilo de maneira reativa
        <section className='time'style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            {props.colaboradores.map(
                colaboradores=><Colaborador nome={colaboradores.nome} cargo={colaboradores.cargo}/>
            )}
        </section>
    )
}
export default Time