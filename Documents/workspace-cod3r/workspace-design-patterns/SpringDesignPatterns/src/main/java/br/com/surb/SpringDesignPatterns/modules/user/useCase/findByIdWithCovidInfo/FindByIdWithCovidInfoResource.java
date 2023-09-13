package br.com.surb.SpringDesignPatterns.modules.user.useCase.findByIdWithCovidInfo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.surb.SpringDesignPatterns.modules.user.dto.UserResponseDTO;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/users")
public class FindByIdWithCovidInfoResource {

	private FindByIdWithCovidInfoService findByIdWithCovidInfoService;

	@GetMapping("/{id}/covid")
	public UserResponseDTO handle(@PathVariable String id) {
		return this.findByIdWithCovidInfoService.execute(id);
	}
}
