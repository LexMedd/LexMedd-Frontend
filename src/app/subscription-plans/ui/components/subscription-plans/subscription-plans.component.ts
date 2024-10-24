import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscriptionPlan } from '../../../domain/models/subscription-plan.model';
import { SubscriptionPlansFacade } from '../../../application/services/subscription-plans.facade.service';

@Component({
  selector: 'app-subscription-plans',
  templateUrl: './subscription-plans.component.html',
  styleUrls: ['./subscription-plans.component.scss']
})
export class SubscriptionPlansComponent implements OnInit {
  subscriptionPlans$: Observable<SubscriptionPlan[]> = new Observable<SubscriptionPlan[]>();

  constructor(private subscriptionPlansFacade: SubscriptionPlansFacade) {}

  ngOnInit(): void {
    this.subscriptionPlans$ = this.subscriptionPlansFacade.getSubscriptionPlans();
  }
}
