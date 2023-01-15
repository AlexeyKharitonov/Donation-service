import { DONATE_CREATION_DATE } from "../constants/date";
import { update, Upd_total_amount } from "./upd_Total-amount";
import { money } from "../constants/currency";

export class Create_donate_item {
  constructor() {
    this.donateFormInput = document.querySelector(".donate-form__donate-input");
    this.donateFormButton = document.querySelector(
      ".donate-form__submit-button"
    );
    this.donateContainerHTML = document.querySelector(
      ".donates-container__donates"
    );
    this.totalAmount = document.querySelector("#total-amount"); //сумма всех донатов
    // this.Upd_total_amount = new Upd_total_amount();
  }

  render() {
    this.donateFormButton.addEventListener("click", (event) => {
      event.preventDefault();
      const input = Number(this.donateFormInput.value);
      if (input) {
        const newDonate = {
          date: DONATE_CREATION_DATE(new Date()),
          amountDonate: input,
        };

        update.updateAmount(newDonate.amountDonate);
        this.totalAmount.textContent = `${update.render()}$`;
        // this.totalAmount.textContent = `${this.Upd_total_amount.render()}$`;

        const donateItemDiv = document.createElement("div");
        donateItemDiv.className = "donate-item";
        donateItemDiv.textContent = `${newDonate.date} - `;
        const bTagDonateItem = document.createElement("b");
        bTagDonateItem.textContent = `${newDonate.amountDonate}${money.currency}`;
        donateItemDiv.append(bTagDonateItem);

        this.donateContainerHTML.append(donateItemDiv);
      }
    });
  }
}
