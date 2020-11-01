document.querySelector('button').disabled = true;

        document.getElementById('btd').onkeyup = () => {
            if (document.getElementById('btd').value.length > 0) {
                document.querySelector('button').disabled = false;
            }else{
                document.querySelector('button').disabled = true;
            }
        }

        function convert(){
            let val = document.getElementById('btd').value;
            result = parseInt(val, 2).toString(10);
            document.getElementById('dec').innerHTML = `The Decimal value is: ${result}`;
            document.getElementById('btd').value = '';
            document.querySelector('button').disabled = true;
        }