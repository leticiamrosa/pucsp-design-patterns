import Element from '../Element';

export default class BlockElement extends Element {
  public constructor() {
    super();
    this.displayType = 'block';
  };


  public addElement(element: any): any {
    this.elements.push(element)
    return this;
  }

}