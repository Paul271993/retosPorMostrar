import { Punto } from "./point";

export class Triangulo {
  private vertice1: Punto;
  private vertice2: Punto;
  private vertice3: Punto;

  constructor(vertice1: Punto, vertice2: Punto, vertice3: Punto) {
    this.vertice1 = vertice1;
    this.vertice2 = vertice2;
    this.vertice3 = vertice3;
  }

  public getVertice1(): Punto {
    return this.vertice1;
  }
  public setVertice1(newVertice1) {
    this.vertice1 = newVertice1;
  }

  public getVertice2(): Punto {
    return this.vertice2;
  }
  public setVertice2(newVertice2) {
    this.vertice2 = newVertice2;
  }

  public getVertice3(): Punto {
    return this.vertice3;
  }
  public setVertice3(newVertice3) {
    this.vertice3 = newVertice3;
  }

  public calcularLongitudLados(): number[] {
    let lados: number[] = [];
    lados[0] = this.vertice1.calcularDistancia(this.vertice2);
    lados[1] = this.vertice2.calcularDistancia(this.vertice3);
    lados[2] = this.vertice3.calcularDistancia(this.vertice1);

    return lados;
  }
}
