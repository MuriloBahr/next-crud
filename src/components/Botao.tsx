interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    children: any
    className?: string
    Onclick?: () => void
}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'gray'
    return(
        <button onClick={props.Onclick} className={`
            px-4 py-2 rounded-lg
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white
            ${props.className}
            `}>
            {props.children}
        </button>
    )
}