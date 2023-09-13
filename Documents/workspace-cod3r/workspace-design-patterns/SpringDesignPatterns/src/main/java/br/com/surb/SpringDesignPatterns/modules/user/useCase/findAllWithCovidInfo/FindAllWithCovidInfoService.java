package br.com.surb.SpringDesignPatterns.modules.user.useCase.findAllWithCovidInfo;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import br.com.surb.SpringDesignPatterns.modules.user.dto.UserResponseDTO;
import br.com.surb.SpringDesignPatterns.modules.user.dto.mapper.UserMapper;
import br.com.surb.SpringDesignPatterns.modules.user.infra.repositories.UserRepository;
import br.com.surb.SpringDesignPatterns.shared.client.AddressAPI;
import br.com.surb.SpringDesignPatterns.shared.client.CovidAPI;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FindAllWithCovidInfoService {
	private CovidAPI covidAPI;
	private AddressAPI addressAPI;
	private UserRepository userRepository;

	public List<UserResponseDTO> execute() {
		return this.userRepository.findAll().stream().map(user -> {
			UserResponseDTO dto = UserMapper.toDTO(user);
			dto.setCovidInfo(this.covidAPI.getInfoByUF(user.getState()));
			return dto;
		}).collect(Collectors.toList());
	}
}
