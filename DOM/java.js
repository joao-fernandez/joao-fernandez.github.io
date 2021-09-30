const soma = (a, b) => a + b;

const funcaosoma = () => {
    const input1 = document.querySelector(".n1");
    const input2 = document.querySelector(".n2");
    const p = document.querySelector(".soma");
    p.innerHTML = soma(
    parseInt(input1.value, 10),
    parseInt(input2.value, 10));
};

const compara = (a, b) => (a > b ? "maior" : "menor");

const funcaocomparacao = () => {
    const input1 = document.querySelector(".m1");
    const input2 = document.querySelector(".m2");
    const p = document.querySelector(".compara");
    p.innerHTML = `o numero ${input1.value} é ${compara(
        parseInt(input1.value, 10),
        parseInt(input2.value, 10)
    )} que o numero ${input2.value}`;
};

const primo = n => {
    for (let i = 2; i < n; i++){
        if (n % i == 0) return false;
    }
    return true;
};

const verificacaoprimo = () => {
    const input1 = document.querySelector(".inputprimo");
    const p = document.querySelector(".primo");
    p.innerHTML = primo(parseInt(input1.value, 10)) ? "sim" : "não";
};

const hipotenusa= (a,b) => Math.sqrt (a * a + b * b);

const calcularhipotenusa =()=>{
    const input1= document.querySelector(".hipotenusa1");
    const input2= document.querySelector(".hipotenusa2");
    const p = document.querySelector(".hipotenusa");
    p.innerHTML= hipotenusa(parseInt(input1.value, 10),parseInt(input2.value, 10));
};

const reajuste = (salario, percentual) =>
    salario + salario * (percentual / 100);

const funcaoreajuste = () => {
    const input1 = document.querySelector(".salario");
    const input2 = document.querySelector(".percentual");
    const p = document.querySelector(".reajuste");
    p.innerHTML = reajuste(parseInt(input1.value,10), parseInt(input2.value,10));
};

const conversao = f => ((f-32)/9) * 5;

const converter = () => {
    const input1 = document.querySelector(".fah");
    const p = document.querySelector(".celsius");
    p.innerHTML = conversao(parseInt(input1.value,10));
};

const medi = (n1, n2, n3) => (n1 * 2 + n2 * 3 + n3 * 5) / 10;

const media = () => {
    const input1 = document.querySelector(".nota1");
    const input2 = document.querySelector(".nota2");
    const input3 = document.querySelector(".nota3");
    const p = document.querySelector(".media");
    p.innerHTML = medi(
        parseInt(input1.value,10),
        parseInt(input2.value,10),
        parseInt(input3.value,10)
    );
}