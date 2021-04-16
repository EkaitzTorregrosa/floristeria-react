export class Flower {
  private id: string = "";
  private name: string = "";
  private binomialName: string = "";
  private price: number = 0;
  private imgUrl: string = "";
  private wateringsPerWeek: number = 0;
  private fertilizerType: string = "";
  private heigthInCm: number = 0;

  public constructor(
    id: string,
    name: string,
    binomialName: string,
    price: number,
    imgUrl: string,
    waterinsPerWeek: number,
    fertilizerType: string,
    heigthInCm: number
  ) {
    this.id = id;
    this.name = name;
    this.binomialName = binomialName;
    this.price = price;
    this.imgUrl = imgUrl;
    this.wateringsPerWeek = waterinsPerWeek;
    this.fertilizerType = fertilizerType;
    this.heigthInCm = heigthInCm;
  }

  setId(id: string) {
    this.id = id;
  }
  getId() {
    return this.id;
  }
  setName(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setBinomialName(binomialName: string) {
    this.binomialName = binomialName;
  }
  getBinomialName() {
    return this.binomialName;
  }
  setPrice(price: number) {
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
  setImgUrl(imgUrl: string) {
    this.imgUrl = imgUrl;
  }
  getImgUrl() {
    return this.imgUrl;
  }
  setWateringsPerWeek(wateringsPerWeek: number) {
    this.wateringsPerWeek = wateringsPerWeek;
  }
  getWateringsPerWeek() {
    return this.wateringsPerWeek;
  }
  setFertilizerType(fertilizerType: string) {
    this.fertilizerType = fertilizerType;
  }
  getFertilizedType() {
    return this.fertilizerType;
  }
  setHeigthInCm(heigthInCm: number) {
    this.heigthInCm = heigthInCm;
  }
  getHeigthInCm() {
    return this.heigthInCm;
  }
}
