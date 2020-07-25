import Element from '../Element/Element';

export default class ElementContent extends Element {

  italic() {
    this.attributes = {};
    this.elementType = "i";
    return {
      attributes: this.attributes,
      elementType: this.elementType,
    };
  };

  bold() {
    this.attributes = {};
    this.elementType = "b";
    return {
      attributes: this.attributes,
      elementType: this.elementType,
    };
  };

  span() {
    this.attributes = {};
    this.elementType = "span";
    return {
      attributes: this.attributes,
      elementType: this.elementType,
    };
  };

};