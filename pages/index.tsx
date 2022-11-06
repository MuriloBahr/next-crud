import Botao from "../src/components/Botao";
import Formulario from "../src/components/Formulario";
import Layout from "../src/components/Layout";
import Tabela from "../src/components/Tabela";
import useClientes from "../src/hooks/UseClientes";

export default function Home() {
  const { cliente, clientes, salvarCliente, novoCliente, selecionarCliente, excluirCliente, tabelaVisivel, exibirTabela } = useClientes()
  return (
    <div className={`flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500`}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
        <>
          <div className="flex justify-end">
            <Botao Onclick={novoCliente} className="mb-4">Novo Cliente</Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}/>
          </>
        ) : (
          <Formulario clienteChange={salvarCliente} cliente={cliente} cancel={() => exibirTabela()}/>

        )}
        
        
      </Layout>
    </div>
  )
}
