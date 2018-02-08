package com.augusto.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.augusto.modelo.Pessoa;

public interface PessoaRepositorio extends JpaRepository<Pessoa, Long> {

}
