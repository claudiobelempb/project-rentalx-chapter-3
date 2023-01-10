package com.devsuperior.movieflix.repositories;

import com.devsuperior.movieflix.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

  String searchReviewByMovieId = "SELECT review " +
    "FROM Review review " +
    "WHERE review.movie.id = :movieId";
  @Query(searchReviewByMovieId)
  List<Review> searchReviewByMovieId(Long movieId);

}
