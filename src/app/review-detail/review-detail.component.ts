import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Review } from '../review';
import { ReviewServiceService } from '../review-service.service';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {

  review: Review | undefined;

  constructor(
    private reviewService: ReviewServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const text = params.get('title');
        return this.reviewService.getReviewByText(<string> text);
      })
    ).subscribe((review: Review) => {
      this.review = review;
    });
  }

}
