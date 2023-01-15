export class Upd_total_amount {
  constructor() {
    this.amount = [];
    this.donateItemsAll = document.querySelectorAll(".donate-item"); //все донаты
    this.totalAmount = document.querySelector("#total-amount"); //сумма всех донатов
    this.donateItemsAll.forEach((donate) => {
      const arrayOfAllDonates = Number(
        donate.querySelector("b").textContent.split("$")[0]
      );

      this.amount.push(arrayOfAllDonates);
    });
  }

  updateAmount(donate) {
    this.amount.push(donate);
  }

  render() {
    return this.amount.reduce((acc, num) => {
      return acc + num;
    }, 0);
  }
}

export const update = new Upd_total_amount();
