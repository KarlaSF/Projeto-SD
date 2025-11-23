import './style.css'
import Lixeira from '../../assets/lixeira.svg'
import { useNavigate } from 'react-router-dom'   // <-- ADICIONADO

/*pagina cadastro*/
function Cadastro() {

  const navigate = useNavigate(); // <-- ADICIONADO

  /*rascunho antes do servidor, usei um array pois foi criado + de 1 usuario*/
  const usuario = [
    {
      id: '123abc',
      nome: 'josé',
      idade: 50,
      email: 'jose@bol.com',
      senha: 'aaa987654321',
    },
    {
      id: '456def',
      nome: 'maria',
      idade: 45,
      email: 'maria@bol.com',
      senha: 'aaa123456789',
    },
  ]

  return (

    /*cadastrar cliente*/
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Fulano de tal" name="Nome" type='text' />
        <input placeholder="20" name="Idade" type='number' />
        <input placeholder="fulano@gmail.com" name="Email" type='email' />
        <input placeholder="Senha" name="Senha" type='password' />
        <button type="button">Cadastrar</button>

        {/*botão para ir para as conversas */}
        <button
          type="button"
          style={{ marginTop: "10px", backgroundColor: "rgba(142, 82, 147, 0.952)", color: "white" }}
          onClick={() => navigate('/conversas')}
        >
          Ir para Conversas
        </button>

      </form>

      {usuario.map((usuario) => (
        <div key={usuario.id} className='mostrarusuarios'>
          <div>
            <p>Nome: <span>{usuario.nome} </span></p>
            <p>Email: <span>{usuario.email} </span></p>
          </div>
          <button>
            <img src={Lixeira}/>
          </button>
        </div>
      ))}

    </div>

  )
}

export default Cadastro
