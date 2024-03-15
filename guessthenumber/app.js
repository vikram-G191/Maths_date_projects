

let input1 = document.getElementById("boxa");
let input2 = document.getElementById("boxb");

input1.value = Math.floor(Math.random() * 100);
input2.value = Math.floor(Math.random() * 100);

let check = () => {
    document.getElementById('total').value = ''

    input1.value = Math.round(Math.random() * 100)
    input2.value = Math.round(Math.random() * 100)
}

let click = () => {



    let total = parseInt((input1.value)) + parseInt((input2.value));

    let answer = parseInt(document.getElementById("total").value);
    console.log(answer);
    console.log(total);

    if (answer === total) {
        document.getElementById("divid").innerHTML = `Correct Answer`;
        check();
    }
    else {
        document.getElementById("divid").innerHTML = `not correct Answer`;

    }
}
document.getElementById("btnid").addEventListener('click', click)



