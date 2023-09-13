package br.com.surb.SpringDesignPatterns.modules.user.useCase.createCovidInfo;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.surb.SpringDesignPatterns.modules.user.dto.UserResponseDTO;
import br.com.surb.SpringDesignPatterns.modules.user.dto.mapper.UserMapper;
import br.com.surb.SpringDesignPatterns.modules.user.infra.entities.User;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/users")
public class CreateCovidInforResource {

	private CreateCovidInforService createCovidInforService;

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public UserResponseDTO create(@RequestBody User user) {
		return UserMapper.toDTO(this.createCovidInforService.execute(user));
	}
}
