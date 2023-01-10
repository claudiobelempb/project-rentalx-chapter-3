package com.devsuperior.movieflix.shared.configurations;

import static java.lang.reflect.Modifier.PUBLIC;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
import java.util.List;

@Configuration
@EnableResourceServer
public class AppResourceServerConfigurerAdapter extends ResourceServerConfigurerAdapter {

  @Autowired
  private Environment environment;
  @Autowired
  private JwtTokenStore tokenStore;


  private static final String[] PERMISSION_PUBLIC = {
    "/oauth/token/**",
    "/h2-console/**",
  };

  /*
  if(responseCode.code >= 200 && responseCode.code < 300 {
    var json = JSON.parse(responseBody);
    postman.setEnvironmentVariable('token', json.access_token);
    postman.setEnvironmentVariable('token', json.refresh_token);
  }
  */

  private static final String[] PERMISSION_MEMBER_VISITOR = {"/reviews/**"};


  @Override
  public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
    resources.tokenStore(tokenStore);
  }

  @Override
  public void configure(HttpSecurity http) throws Exception {

    // H2
    if(Arrays.asList(environment.getActiveProfiles()).contains("test")){
      http.headers().frameOptions().disable();
    }
    http.authorizeRequests()
      .antMatchers(PERMISSION_PUBLIC).permitAll()
      .antMatchers(HttpMethod.POST, PERMISSION_MEMBER_VISITOR).hasAnyRole("MEMBER")
      .anyRequest().authenticated();

    http.cors().configurationSource(corsConfigurationSource());

  }

  @Bean
  public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration corsConfig = new CorsConfiguration();
    corsConfig.setAllowedOriginPatterns(List.of("*"));
    corsConfig.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "DELETE", "PATCH"));
    corsConfig.setAllowCredentials(true);
    corsConfig.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", corsConfig);
    return source;
  }

  @Bean
  public FilterRegistrationBean<CorsFilter> corsFilter() {
    FilterRegistrationBean<CorsFilter> bean
      = new FilterRegistrationBean<>(new CorsFilter(corsConfigurationSource()));
    bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
    return bean;
  }
}
