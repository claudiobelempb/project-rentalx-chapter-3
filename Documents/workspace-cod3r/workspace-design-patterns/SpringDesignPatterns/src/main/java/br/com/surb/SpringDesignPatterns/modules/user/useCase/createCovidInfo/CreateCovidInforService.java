package br.com.surb.SpringDesignPatterns.modules.user.useCase.createCovidInfo;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import br.com.surb.SpringDesignPatterns.modules.user.dto.AddressDTO;
import br.com.surb.SpringDesignPatterns.modules.user.infra.entities.User;
import br.com.surb.SpringDesignPatterns.modules.user.infra.repositories.UserRepository;
import br.com.surb.SpringDesignPatterns.shared.client.AddressAPI;
import br.com.surb.SpringDesignPatterns.shared.client.CovidAPI;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CreateCovidInforService {
	private CovidAPI covidAPI;
	private AddressAPI addressAPI;
	private UserRepository userRepository;

	public User execute(User user) {
		user.setId(UUID.randomUUID().toString());
		user.setCreatedAt(LocalDateTime.now());

		AddressDTO address = this.addressAPI.findByCep(user.getZipCode());
		BeanUtils.copyProperties(address, user);

		return this.userRepository.save(user);
	}
}
