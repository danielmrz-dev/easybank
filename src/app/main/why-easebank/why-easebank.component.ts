import { Component } from '@angular/core';

@Component({
  selector: 'app-why-easebank',
  templateUrl: './why-easebank.component.html',
  styleUrl: './why-easebank.component.scss'
})
export class WhyEasebankComponent {
  content = [
    {
      image: "icon-online.svg",
      title: "  Online Banking",
      paragraph: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },
    {
      image: "icon-budgeting.svg",
      title: "Simple Budgeting",
      paragraph: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
    },
    {
      image: "icon-onboarding.svg",
      title: "Fast Onboarding",
      paragraph: "  We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
      image: "icon-api.svg",
      title: "Open API",
      paragraph: "  Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    },
]
}
