import InlineElement from '../ContainerElements/InlineElement';

class Span extends InlineElement {
  public constructor() {
    super();
    this.elementType = "span";
  }

  public static new(): Span {
    return new Span();
  }
};

export default Span.new;
