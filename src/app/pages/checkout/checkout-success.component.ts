import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  CheckoutService,
  CheckoutSessionInfo,
} from '../../services/checkout.service';

@Component({
  standalone: true,
  selector: 'app-checkout-success',
  imports: [CommonModule, RouterModule],
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.scss'],
})
export class CheckoutSuccessComponent implements OnInit {
  loading = true;
  error = false;
  session?: CheckoutSessionInfo;

  constructor(
    private route: ActivatedRoute,
    private checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
    const sessionId =
      this.route.snapshot.queryParamMap.get('session_id');

    if (!sessionId) {
      this.loading = false;
      this.error = true;
      return;
    }

    this.checkoutService.getSessionInfo(sessionId).subscribe({
      next: (session) => {
        this.session = session;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }
}
