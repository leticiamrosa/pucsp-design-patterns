import InlineElement from '../ContainerElements/InlineElement';

class Anchor extends InlineElement {
  public constructor(link: string) {
    super();
    this.elementType = 'a';
    this.addAttributes("href", link);
  };

  public static new(link: string): Anchor {
    return new Anchor(link);
  }
};

export default Anchor.new;