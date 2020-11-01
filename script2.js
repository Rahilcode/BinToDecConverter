document.querySelector('button').disabled = true;

document.getElementById('dtb').onkeyup = () => {
    if (document.getElementById('dtb').value.length > 0) {
        document.querySelector('button').disabled = false;
    }else{
        document.querySelector('button').disabled = true;
    }
}

function convert2(){
    let val2 = document.getElementById('dtb').value;
    result2 = (val2 >>> 0).toString(2);
    document.getElementById('bin').innerHTML = `The Binary value is: ${result2}`;
    document.getElementById('dtb').value = '';
    document.querySelector('button').disabled = true;
}
