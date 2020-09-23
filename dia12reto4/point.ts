export class Punto {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  // Metodo que convierte a texto las coordenadas del punto
  public toString(): string {
    return `( ${this.x} , ${this.y} )`;
  }

  // Getters y Setters de los atributos
  public getX(): number {
    return this.x;
  }
  public setX(newX) {
    this.x = newX;
  }

  public getY(): number {
    return this.y;
  }
  public setY(newY) {
    this.y = newY;
  }

  // Metodo que calcula 

  public distanciaAlOrigen(): number {
    return Math.sqrt(Math.pow(0 - this.x, 2) + Math.pow(0 - this.y, 2));
  }

  public calcularDistancia(otherPunto: Punto): number {
    return Math.sqrt(
      Math.pow(otherPunto.x - this.x, 2) + Math.pow(otherPunto.y - this.y, 2)
    );
  }

  // Metodo que devuelve el cuadrante en el que se encuentra el punto
  public calcularCuadrante(): number {
    if (this.x == 0 || this.y == 0) {
      return 0;
    } else if (this.x > 0 && this.y > 0) {
      return 1;
    } else if (this.x < 0 && this.y > 0) {
      return 2;
    } else if (this.x < 0 && this.y < 0) {
      return 3;
    } else if (this.x > 0 && this.y < 0) {
      return 4;
    }
  }

  public calculoMasCercano(points: Punto[]): Punto {
    let cercano: Punto = new Punto(0, 0);
    let distanciaCercano: number = 1000;
    for (let i = 0; i < points.length; i++) {
      let distanciaPunto = this.calcularDistancia(points[i]);
      if (distanciaPunto < distanciaCercano) {
        distanciaCercano = distanciaPunto;
        cercano = points[i];
      }
    }
    return cercano;
  }
}
