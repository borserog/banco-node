class Cliente {
    private nome: string;
    private cpf: string;
    private conta: Conta;

    constructor(nome: string, cpf: string, conta: Conta) {
        this.nome = nome;
        this.cpf = cpf;
        this.conta = conta;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public getConta(): Conta {
        return this.conta;
    }

    public setConta(conta: Conta): void {
        this.conta = conta;
    }
}