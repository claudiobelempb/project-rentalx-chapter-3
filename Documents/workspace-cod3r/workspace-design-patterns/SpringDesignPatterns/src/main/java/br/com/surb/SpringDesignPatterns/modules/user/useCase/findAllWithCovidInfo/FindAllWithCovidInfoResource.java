package br.com.surb.SpringDesignPatterns.modules.user.useCase.findAllWithCovidInfo;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.surb.SpringDesignPatterns.modules.user.dto.UserResponseDTO;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/users")
public class FindAllWithCovidInfoResource {

	private FindAllWithCovidInfoService findAllWithCovidInfoService;

	@GetMapping
	public List<UserResponseDTO> handle() {
		return this.findAllWithCovidInfoService.execute();
	}
}
