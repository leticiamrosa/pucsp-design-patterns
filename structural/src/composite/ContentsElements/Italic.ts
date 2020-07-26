import InlineElement from '../ContainerElements/InlineElement';

class Italic extends InlineElement {
  public constructor() {
    super();
    this.elementType = "i";
  }

  public static new(): Italic {
    return new Italic();
  }
};

export default Italic.new;


