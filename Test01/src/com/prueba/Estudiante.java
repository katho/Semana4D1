package com.prueba;

public class Estudiante 
{
	//Atributos de la clase, nótese que son privados
	private int codigo;
	private String nombre;
	
	//Constructor de la clase (por defecto)
	public Estudiante()
	{
		
	}
	//Constructor sobrecargado
	public Estudiante(int codigo, String nombre)
	{
		//Llamada a métodos
		//Se establecen valores de forma segura
		setCodigo(codigo);
		setNombre(nombre);
	}
	/*
	 * Como los atributos de la clase con privados,
	 * necesito una manera de acceder a sus valores.
	 * Por eso creo métodos para poder acceder de 
	 * forma segura a estos.
	 * */
	/**
	 * @return the codigo
	 */
	public int getCodigo() {
		return codigo;
	}
	/**
	 * @param codigo the codigo to set
	 */
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	/**
	 * @return the nombre
	 */
	public String getNombre() {
		return nombre;
	}
	/**
	 * @param nombre the nombre to set
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	void probar()
	{
		System.out.println("Hola, soy un método sin modificador de acceso");
	}
	
	
	
	 int sumOfDivisors(int n){
		  int result = 0;

		  for (int i = 1; i <= n; i++) {
		    if (n % i == 0) {
		      result += n;
		    }
		  }

		  return result;
		}
	
}
