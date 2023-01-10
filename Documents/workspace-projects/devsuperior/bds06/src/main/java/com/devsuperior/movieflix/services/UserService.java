package com.devsuperior.movieflix;

import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.RoleRepository;
import com.devsuperior.movieflix.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;



public class UserService implements UserDetailsService {

  private static Logger logger = LoggerFactory.getLogger(UserService.class);

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private RoleRepository roleRepository;

  @Autowired
  private BCryptPasswordEncoder passwordEncoder;
  /*
  @Transactional(readOnly = true)
  public Page<UserDTO> index(Pageable pageable) {
    Page<User> users = userRepository.findAll(pageable);
    return users.map((user -> new UserDTO(user)));
  }

  @Transactional(readOnly = true)
  public UserDTO show(Long id) {
    Optional<User> obj = userRepository.findById(id);
    User user = obj.orElseThrow(() -> new ResourceNotFoundException("User not found!"));
    return new UserDTO(user);
  }

  @Transactional
  public UserDTO create(UserCreateDTO userCreateDTO){
    User user = new User();
    copyUserCreateDto(userCreateDTO, user);
    user.setPassword(passwordEncoder.encode(userCreateDTO.getPassword()));
    user = userRepository.save(user);
    return new UserDTO(user);
  }

  @Transactional
  public UserDTO update(Long id, UserUpdateDTO userUpdateDTO) {
    try {
      User user = userRepository.getOne(id);
      copyUserCreateDto(userUpdateDTO, user);
      user = userRepository.save(user);
      return new UserDTO(user);
    } catch (EntityNotFoundException e){
      throw new ResourceNotFoundException("Id not found" + id);
    }
  }

  public void delete(Long id) {
    try {
      userRepository.deleteById(id);
    } catch (EmptyResultDataAccessException e){
      throw new ResourceNotFoundException("Id not found" + id);
    } catch (DataIntegrityViolationException e) {
      throw new DataBaseException("Integrity violation");
    }
  }

  private void copyUserCreateDto(UserDTO userDTO, User user) {
    user.setFirstName(userDTO.getFirstName());
    user.setLastName(userDTO.getLastName());
    user.setEmail(userDTO.getEmail());

    user.getRoles().clear();
    for (RoleDTO roleDTO : userDTO.getRoles()) {
      Role role = roleRepository.getOne(roleDTO.getId());
      user.getRoles().add(role);
    }
  }
  */


  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

    User user = userRepository.findByEmail(username);

    if(user == null) {
      logger.error("User not found: " + username);
      throw new UsernameNotFoundException("Email not found");
    }
    logger.info("User found: " + username);
    return user;
  }
}
