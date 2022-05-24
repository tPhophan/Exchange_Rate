const currency_one = document.querySelector("#currency-one");
const currency_two = document.querySelector("#currency-two");

const amount_one = document.querySelector("#amount-one");
const amount_two = document.querySelector("#amount-two");

const rateText = document.querySelector("#rateText");
const btn_swap = document.querySelector("#btn-swap");

//--------------------------------------------------

currency_one.addEventListener("change", cal_Money);
currency_two.addEventListener("change", cal_Money);

amount_one.addEventListener("input", cal_Money);
amount_two.addEventListener("input", cal_Money);

btn_swap.addEventListener("click", ()=>{
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    cal_Money();
})

//--------------------------------------------------

function cal_Money(){
    const rate_one = currency_one.value;
    const rate_two = currency_two.value;
    const myAPI = "1c499d9f5f2d5e919e2eeb68";
    fetch(`https://v6.exchangerate-api.com/v6/${myAPI}/latest/${rate_one}`).then(res=>res.json()).then(data=>{
        if (data.result == "success"){
            const rate = data.conversion_rates[rate_two];

            let result = (amount_one.value * rate).toFixed(2);

            rateText.innerText = `${amount_one.value} ${rate_one} = ${result} ${rate_two}`;

            amount_two.value = result;
        }
    });
}

//--------------------------------------------------

cal_Money();