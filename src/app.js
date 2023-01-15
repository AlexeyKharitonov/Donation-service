//Главный модуль
import { Upd_total_amount } from "./utils/upd_Total-amount";
import { Create_donate_item } from "./utils/create-donateItem";

export default class App {
  constructor() {
    this.Upd_total_amount = new Upd_total_amount();
    this.Create_donate_item = new Create_donate_item();
  }

  run() {
    this.Upd_total_amount.render();
    this.Create_donate_item.render();
  }
}
