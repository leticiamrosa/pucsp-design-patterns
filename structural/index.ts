import Bold from './src/decorator/ContentsElements/Bold';
import Italic from './src/decorator/ContentsElements/Italic';
import Span from './src/decorator/ContentsElements/Span';
import Anchor from './src/decorator/ContentsElements/Anchor';
import Paragraph from './src/decorator/ContentsElements/Paragraph';


class Facade {
  public constructor () {
    this.printContent();
    this.printParagraph();
  };

  public printContent(): void {

    const result = Bold().addElement(
        Italic()
          .addElement(
            Span().addContent('oi')
          )
            .addAttributes(
              "class",
              "banana"
            )
    ).toHtml();

    return console.log('this is a print content', result);
  };

  public printParagraph(): void {

    const result = Paragraph().addElement(
      Anchor("http://google.com.br").addElement(
        Bold().addElement(
          Italic()
            .addElement(
              Span().addContent('oi')
            )
            .addAttributes(
              "class",
              "banana"
            )
        )
      )
    ).toHtml();

    return console.log('this is a print paragraph', result);
  }
}


export default new Facade();
