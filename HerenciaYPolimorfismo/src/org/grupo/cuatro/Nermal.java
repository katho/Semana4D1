package org.grupo.cuatro;

public class Nermal extends Animal
{
	public Nermal()
	{
		
	}
	
	public void molestar(String nombre)
	{
		if(nombre.equals("Garfield"))
		{
			System.out.println("Hola "+nombre+"!!!");
		}
	}
}
