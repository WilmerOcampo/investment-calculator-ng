import {Component, computed, inject} from '@angular/core';
import {CurrencyPipe, DatePipe} from "@angular/common";
import {InvestmentService} from "../service/investment.service";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
}
