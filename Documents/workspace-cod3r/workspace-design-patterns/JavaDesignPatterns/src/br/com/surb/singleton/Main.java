package br.com.surb.singleton;

public class Main {
	public static void main(String[] args) {
		System.out.println("Se você vir o mesmo valor, então o singleton foi reutilizado (oba!)" + "\n"
				+ "Se você vir valores diferentes, então foram criados 2 singletons (booo!!)" + "\n\n" + "RESULT:"
				+ "\n");
		Singleton singleton = Singleton.getInstance("FOO");
		Singleton anotherSingleton = Singleton.getInstance("BAR");
		System.out.println(singleton.value);
		System.out.println(anotherSingleton.value);

	}
}
