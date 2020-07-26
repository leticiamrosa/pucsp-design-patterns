import Element from '../Element';

export default class InlineElement extends Element {
  public constructor() {
    super();
    this.displayType = 'inline';
  };

  public addElement(element: any): any {
    this.elements.push(element)
    return this;
  }

}