import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscriptionPlanRepository } from '../../domain/repositories/subscription-plan.repository';
import { SubscriptionPlan } from '../../domain/models/subscription-plan.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionPlanService {
  constructor(@Inject('SubscriptionPlanRepository') private subscriptionPlanRepository: SubscriptionPlanRepository) {}

  getAllPlans(): Observable<SubscriptionPlan[]> {
    return this.subscriptionPlanRepository.getPlans();
  }
}
