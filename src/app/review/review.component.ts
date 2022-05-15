import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hardware } from '../hardware';
import { Review } from '../review';
import { ReviewServiceService } from '../review-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviewList: Review[] | undefined;

  constructor(
    private reviewService: ReviewServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const code = params.get('code');
        return this.reviewService.getReviewsForHardware(<string> code);
      })
    ).subscribe((reviewList: Review[]) => {
      this.reviewList = reviewList;
    });
  }
}
