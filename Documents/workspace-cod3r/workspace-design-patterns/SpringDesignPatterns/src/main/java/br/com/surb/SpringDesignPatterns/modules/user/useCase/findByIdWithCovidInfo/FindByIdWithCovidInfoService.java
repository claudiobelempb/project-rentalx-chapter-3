package br.com.surb.SpringDesignPatterns.modules.user.useCase.findByIdWithCovidInfo;

import org.springframework.stereotype.Service;

import br.com.surb.SpringDesignPatterns.modules.user.dto.UserResponseDTO;
import br.com.surb.SpringDesignPatterns.modules.user.dto.mapper.UserMapper;
import br.com.surb.SpringDesignPatterns.modules.user.infra.entities.User;
import br.com.surb.SpringDesignPatterns.modules.user.infra.repositories.UserRepository;
import br.com.surb.SpringDesignPatterns.shared.client.AddressAPI;
import br.com.surb.SpringDesignPatterns.shared.client.CovidAPI;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FindByIdWithCovidInfoService {
	private CovidAPI covidAPI;
	private AddressAPI addressAPI;
	private UserRepository userRepository;

	public UserResponseDTO execute(String id) {
		User user = this.userRepository.findById(id).orElseThrow();
		UserResponseDTO dto = UserMapper.toDTO(user);
		dto.setCovidInfo(this.covidAPI.getInfoByUF(user.getState()));
		return dto;
	}
}
