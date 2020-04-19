let output = [];

function parameter(a) {

    for (i = 1; i <= a; i++) {
        if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
            let i = "Yu-Gi-Oh"
            output.push(i);
        } else if (i % 2 == 0 && i % 3 == 0) {
            let i = "Yu-Gi"
            output.push(i);
        } else if (i % 2 == 0 && i % 5 == 0) {
            let i = "Yu-Oh"
            output.push(i);
        } else if (i % 3 == 0 && i % 5 == 0) {
            let i = "Gi-Oh"
            output.push(i);
        } else if (i % 2 == 0) {
            let i = "Yu"
            output.push(i);
        } else if (i % 3 == 0) {
            let i = "Gi"
            output.push(i);
        } else if (i % 5 == 0) {
            let i = "Oh"
            output.push(i);
        } else {
            output.push(i);
        }
    }
    console.log(output);
    return output;
}
parameter(100);
parameter(50);