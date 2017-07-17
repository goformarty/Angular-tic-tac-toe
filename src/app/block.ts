export class Block {
  free: boolean = true;
  value: string = ""; // cross | tick
  symbol: string = ""; // done | close

  setValue(value){
    this.value = value;
    if(this.value == "tick") {
      this.symbol = "done";
    } else {
      this.symbol = "close";
    }
  }





  // id: number;
  // title: string = '';
  // complete: boolean = false;
  //
  // constructor(values: Object = {}) {
  //   Object.assign(this, values);
  // }
}
