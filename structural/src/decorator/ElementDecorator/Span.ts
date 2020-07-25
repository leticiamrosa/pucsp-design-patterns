import Container from '../Container/Container';
import Element from '../Element/Element';

export default class Span extends Container {
  public attributes = {};
  public elementType = "span";

  public italic(element: Element) {
    return new Span(element);
  };
};

