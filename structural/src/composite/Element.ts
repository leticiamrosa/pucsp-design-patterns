interface Attributes {
  key: string;
  value: string;
}

export default class Element {
  private content: string;
  private attributes: Attributes[] = [];
  protected elements: Element[] = [];

  public elementType: string;
  public displayType: 'block' | 'inline';

  public addContent(content: string): any {
    this.content = content;
    return this;
  };

  public addAttributes(key: string, value: string): any {
    this.attributes.push({ key, value });
    return this;
  };

  private getInitialHtmlTag(): string {
    if (this.attributes.length > 0) {
      const attr = this.attributes.map((attribute) => {
        return `${attribute.key}=\"${attribute.value}\"`;
      }).join(' ');
      return `<${this.elementType} ${attr}>`;
    }
    return `<${this.elementType}>`;
  }

  public toHtml(): string {
    if (this.content) {
      return `${this.getInitialHtmlTag()}${this.content}</${this.elementType}>`
    };

    const result = this.elements.map((el) => {
      return el.toHtml();
    }).join('');

    return `${this.getInitialHtmlTag()}${result}</${this.elementType}>`;
  }
};
