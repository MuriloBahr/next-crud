interface EntradaProps{
    text: string
    type?: 'text' | 'number'
    value: any
    onlyReader?: boolean
    className?: string
    valueChange?: (valor: any) => void
}

export default function Entrada(props: EntradaProps){
    return(
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-5">
                {props.text}
            </label>
            <input type={props.type ?? 'text'}
                   value={props.value} 
                   readOnly={props.onlyReader} 
                   onChange={e => props.valueChange?.(e.target.value)}
                   className={`
                    border border-purple-500 rounded-md
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.onlyReader ? '' : 'focus:bg-white'}
                    `} />
        </div>
    )
}