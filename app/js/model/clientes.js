class Clientes {
    constructor() {
        this.clientes = [];
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        this.clientes = this.clientes.filter((cliente) => cliente.getCpf() !== cpf);
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        return this.clientes.find((cliente) => cliente.getCpf() === cpf);
    }
}
