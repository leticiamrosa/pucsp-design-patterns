import Element from '../Element';

export default class InlineElement extends Element {
  public constructor() {
    super();
    this.displayType = 'inline';
  };

  // design pattern decorator
  public addElement(element: any): any {
    if(this.displayType !== 'inline') {
      throw new Error('Is not allow to add a block element inside of inline element');
    }
    return super.addElement(element);
  }
}