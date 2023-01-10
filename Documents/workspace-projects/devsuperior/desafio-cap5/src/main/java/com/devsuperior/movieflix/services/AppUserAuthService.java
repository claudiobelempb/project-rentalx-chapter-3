package com.devsuperior.movieflix.services;

import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.UserRepository;
import com.devsuperior.movieflix.shared.constants.ExceptionConstants;
import com.devsuperior.movieflix.shared.exeptions.services.AppForbiddenException;
import com.devsuperior.movieflix.shared.exeptions.services.AppUnauthorizedException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AppUserAuthService {
  private final UserRepository userRepository;

  public AppUserAuthService(UserRepository userRepository){
    this.userRepository = userRepository;
  }

  @Transactional(readOnly = true)
  public User authenticated(){
    try{
      String username = SecurityContextHolder.getContext().getAuthentication().getName();
      return userRepository.findByEmail(username);
    }catch (Exception e) {
      throw new AppUnauthorizedException(ExceptionConstants.INVALID_USER);
    }
  }

  public void validateSelfOrAdmin(Long userId){
    User user = authenticated();
    if(!user.getId().equals(userId) && !user.hasRole("ROLE_ADMIN")){
      throw new AppForbiddenException(ExceptionConstants.ACCESS_DENIED);
    }
  }
}
