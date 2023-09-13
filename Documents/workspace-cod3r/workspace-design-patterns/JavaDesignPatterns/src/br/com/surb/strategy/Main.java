package br.com.surb.strategy;

public class Main {
	public static void main(String[] args) {
		// Cria um objeto contexto.
		Context context = new Context();
		// Lê o primeiro número.
		int firstNumber = 10;
		// Lê o último número.
		int lastName = 5;
		// Lê a ação desejada da entrada do usuário
		Action action = Action.MULTIPLICATION;

		if (action == Action.ADDITION)
			context.setStrategy(new ConcreteStrategyAdd());

		if (action == Action.SUBTRACTION)
			context.setStrategy(new ConcreteStrategySubtract());

		if (action == Action.MULTIPLICATION)
			context.setStrategy(new ConcreteStrategyMultiply());

		int result = context.executeStrategy(firstNumber, lastName);

		// Imprimir resultado.
		System.out.println(result);

	}
}
