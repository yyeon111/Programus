function solution(box, n) {
    let width = parseInt(box[0]/n);
    let length = parseInt(box[1]/n);
    let heigth = parseInt(box[2]/n);
    
    return width * length * heigth;
}