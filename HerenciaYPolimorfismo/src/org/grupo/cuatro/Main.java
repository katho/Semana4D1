package org.grupo.cuatro;

public class Main {

	public static void main(String[] args) 
	{
		// TODO Auto-generated method stub
		
		/*
		Oddie chucho = new Oddie();
		
		chucho.comer();
		chucho.dormir();
		chucho.ladrar();
		System.out.println("\nGato:\n");
		Garfield gatillo = new Garfield();
		gatillo.comer();
		gatillo.dormir();
		gatillo.comer("tacos");
		gatillo.comer("lasagna".toUpperCase());
		
		Nermal gata = new Nermal();
		gata.molestar(gatillo.nombre);
		gata.comer();
		gata.dormir();
		*/
		
		Garfield gato = new Garfield("Garfield");
		System.out.println( gato.getNombre());
		
	}

}
