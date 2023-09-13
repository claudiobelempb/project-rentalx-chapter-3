package br.com.surb.SpringDesignPatterns.shared.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import br.com.surb.SpringDesignPatterns.modules.user.dto.AddressDTO;

@FeignClient(name = "address-api", url = "https://api.postmon.com.br", path = "/v1/cep")
public interface AddressAPI {

    @GetMapping("/{cep}")
    AddressDTO findByCep(@PathVariable String cep);

}
