package com.devsuperior.movieflix.shared.exeptions.services;


import com.devsuperior.movieflix.shared.validator.ValidationErrors;

public class AppInvalidRequestException extends RuntimeException {

  private final ValidationErrors validationErrors;

  public AppInvalidRequestException(ValidationErrors validationErrors) {
    super(validationErrors.toString());
    this.validationErrors = validationErrors;
  }

  public ValidationErrors getValidationErrors() {
    return validationErrors;
  }
}
