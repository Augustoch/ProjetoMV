package com.augusto.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.augusto.modelo.Pessoa;
import com.augusto.modelo.Telefone;
import com.augusto.repositories.PessoaRepositorio;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/pessoa")
public class PessoaController {
	
	@Autowired
	PessoaRepositorio pessoaRepositorio;
	
	

	
	
	@GetMapping("/{id}")
	public Pessoa pegarPessoa(@PathVariable("id")Long id) {
		return pessoaRepositorio.findOne(id);
	}
	
	@GetMapping("/todas")
	public List<Pessoa> listaDePessoa(){
		
		return pessoaRepositorio.findAll();
	}
	
	@PostMapping
	public String cadastrar(@RequestBody Pessoa pessoa) {
				
		pessoaRepositorio.save(pessoa);
		
		return "Produto Cadastrado";
	}
	
	@PutMapping
	public String atualizar(@RequestBody Pessoa pessoa) {
		pessoaRepositorio.save(pessoa);
		return "Produto Atualizado";
	}
	
	@DeleteMapping("/{id}")
	public String deletar(@PathVariable("id")Long id) {
	 	pessoaRepositorio.delete(id);
	 	return "Produto com id "+id+" foi deletado ";
	}
	
	
	
}
