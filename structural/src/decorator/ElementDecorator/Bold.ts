import Container from '../Container/Container';
import Element from '../Element/Element';

export default class Bold extends Container {
  public attributes = {};
  public elementType = "b";

  public bold(element: Element) {
    return new Bold(element);
  };
};

