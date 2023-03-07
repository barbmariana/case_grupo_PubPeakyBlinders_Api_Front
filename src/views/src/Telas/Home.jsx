import React from "react";

class Home extends React.Component {

  constructor() {
    super()


    this.state = {
      listar: [],
      select: "",
      funcionario: [],
      unidade: [],
      produto: [],
      fornecedor: [],
      categoria: [],
      estoque: [],
    }
    this.getFuncionario = this.getFuncionario.bind(this)
    this.getCategoria = this.getCategoria.bind(this)
    this.getEstoque = this.getEstoque.bind(this)
    this.getFornecedor = this.getFornecedor.bind(this)
    this.getProduto = this.getProduto.bind(this)
    this.getUnidade = this.getUnidade.bind(this)
    this.Verificacao = this.Verificacao.bind(this)
  }

  Verificacao() {

    console.log(this.state.select);
    switch (this.state.select) {
      case "Funcionarios":
        this.getFuncionario()
        break;
      case "Categorias":
        this.getCategoria()
        break;
      case "Estoque":
        this.getEstoque()
        break;
      case "Fornecedores":
        this.getFornecedor()
        break;
      case "Produtos":
        this.getProduto()
        this.setState({ listar: this.state.produto })
        break;
      case "Unidades":
        this.getUnidade()
        break;

      default:
        break;
    }
  }

  async getFuncionario() {
    const api = await fetch("http://localhost:4200/funcionarios");
    let data = await api.json()
    console.log(data);
    this.setState({ listar: data })
    this.setState({ funcionario: data })
  }

  async getUnidade() {
    const api = await fetch("http://localhost:4200/unidade");
    let data = await api.json()
    this.setState({ unidade: data })
  }
  async getFornecedor() {
    const api = await fetch("http://localhost:4200/fornecedor");
    let data = await api.json()
    this.setState({ fornecedor: data })
  }
  async getCategoria() {
    const api = await fetch("http://localhost:4200/categoria");
    let data = await api.json()
    this.setState({ categoria: data })
  }
  async getEstoque() {
    const api = await fetch("http://localhost:4200/estoque");
    let data = await api.json()
    this.setState({ estoque: data })
  }
  async getProduto() {
    const api = await fetch("http://localhost:4200/listProduto");
    let data = await api.json()
    this.setState({ listar: data })
    this.setState({ produto: data })
  }

  render() {
    return (

      <div className="container mt-3">
        <div className="col-12">
          <div className="row">
            <select className="form-control text-center" name="select" id="idSelect" onChange={(e) => {
              this.setState({ select: e.target.value })
            }} >
              <option value="Produtos">Produtos</option>
              <option value="Estoque">Estoque</option>
              <option value="Funcionarios">Funcionarios</option>
              <option value="Unidades">Unidades</option>
              <option value="Categoria">Categoria</option>
              <option value="Fornecedores">Fornecedores</option>
            </select>
          </div>

          {this.state.select == 'Funcionarios' &&

            this.state.listar.map((item) => {
              return (
                <table className="table table-striped table-hover table-bordered border-dark mt-3">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Id</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.id_funcionario}>
                      <th scope="row" >1</th>
                      <td>{item.id_funcionario}</td>
                      <td>{item.nome_funcionario}</td>
                      <td>{item.email_funcionario}</td>
                    </tr>
                  </tbody>
                </table>
              )
            })
          }{
            this.state.select == 'Produtos' &&
            this.state.listar.map((item) => {
              return (
                <table className="table table-striped table-hover table-bordered border-dark mt-3">
                  <thead>
                    <tr>
  
                      <th scope="col">Id</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Preço</th>
                      <th scope="col">IMG</th>
                      <th scope="col">Descrição</th>
                      <th scope="col">Data de Criação</th>
                      <th scope="col">Data de Atualização</th>
                    </tr>
                  </thead>
                  <tbody>

                <tr key={item.id_produto}>
                  <th scope="row" >{item.id_produto}</th>
                  <td>{item.nome_produto}</td>
                  <td>{item.preco_produto}</td>
                  <td>{item.img_produto}</td>
                  <td>{item.descricao}</td>
                  <td>{item.data_criacao}</td>
                  <td>{item.data_atualizacao}</td>
                </tr>
                  </tbody>
                  </table>
              )
            })
          }
          <button onClick={this.Verificacao}>Listar</button>
        </div>
      </div>
    );
  }
}

export default Home;
