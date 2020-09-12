let contaController = new ContaController();
contaController.listar();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
// cliente
const clientes = new Clientes();
clientes.inserir(new Cliente('joão pedro', '99.999.921-12', c1));
clientes.inserir(new Cliente('kleiton rasta', '99.111.921-12', p1));
clientes.inserir(new Cliente('jorge gilberto', '99.333.921-12', cb1));
clientes.listar();
console.log(clientes.pesquisar('99.999.921-12')); // pesquisa joão pedro
console.log(clientes.pesquisar('993123')); // pesquisa retorna undefined
console.log(clientes.remover('99.999.921-12')); // remove joão pedro
clientes.listar();
