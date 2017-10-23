package org.grupo.cuatro;

public class Garfield extends Animal
{
	
	
	
	
	public Garfield()
	{
		super("");
	}
	
	public Garfield(String nombre)
	{
		super(nombre);
	}
	
	@Override
	public void comer()
	{
		
	}
	
	public void comer(String comida)
	{
		super.comer();
		if(comida.equalsIgnoreCase("lasagna"))
		{
			System.out.println("YAY!");
		}
		else
		{
			System.out.println("N'AY!");
		}
	}

}
