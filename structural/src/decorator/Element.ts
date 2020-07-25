interface Attributes {
  key: string;
  value: string;
}

export default class Element {
  private content: string;
  private attributes: Attributes[];
  private elements: Element[] = [];

  public elementType: string;

  public addContent(content: string): any {
    this.content = content;
    return this;
  };

  public addElement(element: any): any {
    this.elements.push(element)
    return this;
  }

  public addAttributes(key: string, value: string): any {
    this.attributes.push({ key, value });
    return this;
  };

  public toHtml(): string {
    if (this.content) {
      return `<${this.elementType}>${this.content}</${this.elementType}>`
    };

    const result = this.elements.map((el) => {
      return el.toHtml();
    }).join('');

    return `<${this.elementType}>${result}</${this.elementType}>`;
  }
};
