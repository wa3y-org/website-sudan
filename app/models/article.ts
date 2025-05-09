export class Article {
  public title: string = "";
  public author: {
    name: string;
  } = {
    name: "",
  };
  public cover_image: string = "";
  public topic: {
    name: string;
  } = {
    name: "",
  };
  public updated: string = "";
  public short_text: string = "";

  constructor() {}
}
