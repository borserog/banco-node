class Cliente {
    constructor(nome, cpf, conta) {
        this.nome = nome;
        this.cpf = cpf;
        this.conta = conta;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getCpf() {
        return this.cpf;
    }
    getConta() {
        return this.conta;
    }
    setConta(conta) {
        this.conta = conta;
    }
}
