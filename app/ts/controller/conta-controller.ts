class ContaController {

    private inputNumero: HTMLInputElement;
    private inputSaldo: HTMLInputElement;
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;

    private clientes: Clientes;

    constructor() {
        this.inputNumero =
            <HTMLInputElement>document.querySelector("#conta")
        this.inputSaldo =
            <HTMLInputElement>document.querySelector("#saldo");
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome");
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");
        this.clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novoCliente = new Cliente(
            this.inputNome.value,
            this.inputCpf.value,
            new Conta(this.inputNumero.value,
                parseFloat(this.inputSaldo.value))
        );    
        console.log(novoCliente);
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
        this.clientes.listar().forEach(
            (cliente: Cliente) => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const tbody = document.querySelector('.tbody');
        tbody.insertAdjacentHTML('beforebegin', `
        <td>${cliente.getNome()}</td>
        <td>${cliente.getConta().numero}</td>
        <td>${cliente.getConta().saldo}</td>
        `)
    }


}
