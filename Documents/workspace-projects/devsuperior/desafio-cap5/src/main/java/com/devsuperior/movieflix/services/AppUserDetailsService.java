package com.devsuperior.movieflix.services;

import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.UserRepository;
import com.devsuperior.movieflix.shared.constants.ExceptionConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AppUserDetailsService implements UserDetailsService {
  private final UserRepository userRepository;
  private static final Logger logger = LoggerFactory.getLogger(AppUserDetailsService.class);

  public AppUserDetailsService(UserRepository userRepository){
    this.userRepository = userRepository;
  }

  @Override
  public UserDetails loadUserByUsername(String usernameEmail) throws UsernameNotFoundException {
    User user = userRepository.findByEmail(usernameEmail);

    if (user == null) {
      logger.error(ExceptionConstants.USER_NOT_FOUND + usernameEmail);
      throw new UsernameNotFoundException(ExceptionConstants.EMAIL_NOT_FOUND + usernameEmail);
    }

    logger.info(ExceptionConstants.USER_FOUND + usernameEmail);
    return user;
  }
}
