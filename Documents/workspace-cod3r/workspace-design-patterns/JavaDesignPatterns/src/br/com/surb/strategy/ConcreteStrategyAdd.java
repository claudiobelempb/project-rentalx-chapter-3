package br.com.surb.strategy;

//Estratégias concretas implementam o algoritmo enquanto seguem
//a interface estratégia base. A interface faz delas
//intercomunicáveis no contexto.
public class ConcreteStrategyAdd implements IStrategy {

	@Override
	public int execute(int a, int b) {
		return a + b;
		
	}

}
