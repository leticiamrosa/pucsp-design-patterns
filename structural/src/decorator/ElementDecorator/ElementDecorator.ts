import Element from '../Element/Element';

export default class ElementDecorator extends Element {
  constructor(private _element: Element) {
    super();

  };

  public italic() {
    return this._element.italic();
  };

  public bold() {
    return this._element.bold();
  };

  public span() {
    return this._element.span();
  };


}