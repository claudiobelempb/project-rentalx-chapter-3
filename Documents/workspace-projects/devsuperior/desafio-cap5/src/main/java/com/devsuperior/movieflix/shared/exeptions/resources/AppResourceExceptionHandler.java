package com.devsuperior.movieflix.shared.exeptions.resources;



import com.devsuperior.movieflix.shared.constants.AppExceptionConstants;
import com.devsuperior.movieflix.shared.exeptions.services.AppDataBaseException;
import com.devsuperior.movieflix.shared.exeptions.services.AppEntityNotFoundException;
import com.devsuperior.movieflix.shared.exeptions.services.AppForbiddenException;
import com.devsuperior.movieflix.shared.exeptions.services.AppUnauthorizedException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;
import java.io.Serial;
import java.io.Serializable;
import java.time.Instant;

@ControllerAdvice
public class AppResourceExceptionHandler implements Serializable {
  @Serial
  private static final long serialVersionUID = 1L;

  private final AppStandarError error = new AppStandarError();

  @ExceptionHandler(AppEntityNotFoundException.class)
  public ResponseEntity<AppStandarError> AppEntityNotFoundException(
    AppEntityNotFoundException e, HttpServletRequest request) {
    HttpStatus status = HttpStatus.NOT_FOUND;
    AppStandarError err = new AppStandarError();
    err.setTimestamp(Instant.now());
    err.setStatus(status.value());
    err.setError(AppExceptionConstants.RESOURCE_NOT_FOUND);
    err.setMessage(e.getMessage());
    err.setPath(request.getRequestURI());
    return ResponseEntity.status(status).body(err);
  }

  @ExceptionHandler(AppDataBaseException.class)
  public ResponseEntity<AppStandarError> AppDatabase(AppDataBaseException e, HttpServletRequest request) {
    HttpStatus status = HttpStatus.BAD_REQUEST;
    AppStandarError err = new AppStandarError();
    err.setTimestamp(Instant.now());
    err.setStatus(status.value());
    err.setError(AppExceptionConstants.DATABASE_EXCEPTION);
    err.setMessage(e.getMessage());
    err.setPath(request.getRequestURI());
    return ResponseEntity.status(status).body(err);
  }

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<AppValidationErrorApp> AppValidation(
    MethodArgumentNotValidException e, HttpServletRequest request) {
    HttpStatus status = HttpStatus.UNPROCESSABLE_ENTITY;
    AppValidationErrorApp err = new AppValidationErrorApp();
    err.setTimestamp(Instant.now());
    err.setStatus(status.value());
    err.setError(AppExceptionConstants.VALIDATION_EXCEPTION);
    err.setMessage(e.getMessage());
    err.setPath(request.getRequestURI());

    for (FieldError field : e.getBindingResult().getFieldErrors()) {
      err.addError(field.getField(), field.getDefaultMessage());
    }

    return ResponseEntity.status(status).body(err);
  }

  @ExceptionHandler(AppForbiddenException.class)
  public ResponseEntity<AppOAuthCustomError> AppForbidden(AppForbiddenException e, HttpServletRequest request) {
    HttpStatus status = HttpStatus.FORBIDDEN;
    AppOAuthCustomError customError = new AppOAuthCustomError(AppExceptionConstants.FORBIDDEN_EXCEPTION, e.getMessage());
    return ResponseEntity.status(status).body(customError);
  }

  @ExceptionHandler(AppUnauthorizedException.class)
  public ResponseEntity<AppOAuthCustomError> AppUnauthorized(AppUnauthorizedException e, HttpServletRequest request) {
    HttpStatus status = HttpStatus.UNAUTHORIZED;
    AppOAuthCustomError customError = new AppOAuthCustomError(AppExceptionConstants.UNAUTHORIZED_EXCEPTION, e.getMessage());
    return ResponseEntity.status(status).body(customError);
  }

}
