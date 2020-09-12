class ContaController {
    constructor() {
        this.inputNumero =
            document.querySelector("#conta");
        this.inputSaldo =
            document.querySelector("#saldo");
        this.inputNome =
            document.querySelector("#nome");
        this.inputCpf =
            document.querySelector("#cpf");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value)));
        console.log(novoCliente);
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach((cliente) => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const tbody = document.querySelector('.tbody');
        tbody.insertAdjacentHTML('beforebegin', `
        <td>${cliente.getNome()}</td>
        <td>${cliente.getConta().numero}</td>
        <td>${cliente.getConta().saldo}</td>
        `);
    }
}
