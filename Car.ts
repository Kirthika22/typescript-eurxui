//class
export class Car {
  //properties
  size: number;
  length: number;
  height: number;
  name:string;
  color:string;

  constructor(size:number,length:number,height:number,name:string,color:string){
    this.size =size;
    this.length=length;
    this.height=height;
    this.name=name;
    this.color=color;

  }
//behaviour 
  petrolFill() {
    console.log('i am filling petrol in ',this.name);

  }
  drive() {}
}
