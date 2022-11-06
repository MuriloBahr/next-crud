import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from '../core/Cliente'
import Botao from "./Botao";

interface FormularioProps{
    cliente: Cliente
    cancel?: () => void
    clienteChange?: (cliente: Cliente) => void
}
export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return(
        <div>
            {id ? (
            <Entrada onlyReader text='Código' value={id} className="mb-5"/>) : false}
            <Entrada text='Nome' value={nome} valueChange={setNome} className='mb-5'/>
            <Entrada text='Idade' type="number" value={idade} valueChange={setIdade}/>
            <div className="flex justify-end mt-8">
                <Botao Onclick={() => props.clienteChange?.(new Cliente(nome, +idade, id))} className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao Onclick={props.cancel}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}