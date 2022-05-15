import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Review } from '../review';
import { ReviewServiceService } from '../review-service.service';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent implements OnInit {
  reviewList: Review[] | undefined;
  review: Review | undefined;

  constructor(
    private reviewService: ReviewServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getReviewList();
  }

  getReviewList(): void {
    this.reviewService.getReviewList()
      .subscribe(reviewList => this.reviewList = reviewList)
  }
}
