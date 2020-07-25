import Bold from './src/decorator/Contents/Bold';
import Italic from './src/decorator/Contents/Italic';
import Span from './src/decorator/Contents/Span';

class Facade {
  public constructor () {
    this.print();
  };

  public print(): void {
    const bold = new Bold();
    const italic = new Italic();
    const span = new Span();

    const result = bold.addElement(
      italic.addElement(
        span.addContent('oi')
      )
    ).toHtml();

    return console.log(result);
  }
}

export default new Facade();
