let users = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]
type clients = {
	cliente: string,
	saldoTotal: number,
	debitos: number[],
}
function getNegativeAmount(users: clients[]): clients[] {
	calculateDebits();

	return users.filter(clients => {
		return clients.saldoTotal < 0;
	})
}
function calculateDebits() {
	return users.map(user =>{
		const sumDebts = user.debitos.reduce
		((acumulator: number, value: number) => //acumulator = acumulator + value
			value ? acumulator += value : 0
		, 0); //Ponto zero do acumulador
		user.saldoTotal -= sumDebts;
		user.debitos = [];
	})
}
console.log(getNegativeAmount(users));