package com.ajaxgetproject.model;

public class Bienvenida {
	private String nombre;
	
	public Bienvenida()
	{
		setNombre("");
	}	
	
	public void setNombre(String nombre)
	{
		this.nombre=nombre;
	}
	public String getNombre()
	{
		return nombre;
	}
}
