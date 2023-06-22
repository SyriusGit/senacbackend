function checaTriangulo(a:number, b:number, c:number): string {
    if (a !== b && b !== c) {
        return "escaleno";
    } else if (a === b && b ===c) {
        return "equilátero";
    } else {
        return "isóceles";
    }
}
alert(checaTriangulo(1, 2, 3));