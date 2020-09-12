class Clientes {
    private clientes: Cliente[];

    constructor() {
        this.clientes = []
    }

    inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    remover(cpf: string): void {
        this.clientes = this.clientes.filter((cliente) => cliente.getCpf() !== cpf);
    }

    listar(): Cliente[] {
        return this.clientes;
    }

    pesquisar(cpf: string): Cliente | undefined {
        return this.clientes.find((cliente) => cliente.getCpf() === cpf);
    }
}