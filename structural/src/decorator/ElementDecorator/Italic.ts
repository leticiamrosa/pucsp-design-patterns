import Container from '../Container/Container';
import Element from '../Element/Element';

export default class Italic extends Container {
  public attributes = {};
  public elementType = "i";

  public italic(element: Element) {
    return new Italic(element);
  };
};

