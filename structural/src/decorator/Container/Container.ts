import Element from '../Element/Element';

export default class Container extends Element {
  private children: Element[] = []

  constructor(child?: Element) {
    super();
    child && this.children.push(child);
  }

  public addElement(element: Element) {
    this.children.push(element)
    return this;
  }

  public toHTML() {
    return `<${this.elementType}${this.parseAttrs()}>${this.renderChildren()}</${this.elementType}>`
  };

  protected renderChildren() {
    return this.children.map(child => child.toHTML()).join("");
  };
};

