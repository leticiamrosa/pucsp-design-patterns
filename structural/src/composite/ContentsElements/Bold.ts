import InlineElement from '../ContainerElements/InlineElement';

class Bold extends InlineElement {
  public constructor() {
    super();
    this.elementType = "b";
  }

  public static new(): Bold {
    return new Bold();
  }
};

export default Bold.new;
