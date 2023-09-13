package br.com.surb.SpringDesignPatterns.modules.user.infra.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.surb.SpringDesignPatterns.modules.user.infra.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

}
