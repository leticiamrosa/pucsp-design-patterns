import BlockElement from '../ContainerElements/BlockElement';;

class Paragraph extends BlockElement {
  public constructor() {
    super();
    this.elementType = 'p';
  };

  public static new(): Paragraph {
    return new Paragraph();
  }
};

export default Paragraph.new;