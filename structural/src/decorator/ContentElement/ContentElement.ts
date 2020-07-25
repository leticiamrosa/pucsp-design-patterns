import Element from '../Element/Element'

export interface ContainerElementInterface {
  id?: string
  class?: string
}

export abstract class ContentElement extends Element {
  content: string = ""

  constructor(content?: string) {
    super()
    this.content = content
  };

  public addContent(content: string) {
    this.content.concat(content)
    return this;
  };

  public toHTML() {
    return `<${this.elementType}${this.parseAttrs()}>${this.content}</${this.elementType}>`
  }
}