const currencySom = document.querySelector('#som')
const currencyUsd = document.querySelector('#usd')
const currencyEur = document.querySelector('#eur')

const getData = async () => {
    const response = await fetch('data.json')
    const data = await response.json()
    return data
}

const convert = async (elem, target1, target2, isTrue) => {
    elem.oninput = async () => {
        try {
            const response = await getData()
            if (isTrue) {
                target1.value = (elem.value / response.usdSom).toFixed(2)
                target2.value = (elem.value / response.eurSom).toFixed(2)
            } else if (isTrue === null) {
                target1.value = (elem.value * response.eurSom).toFixed(2)
                target2.value = (elem.value * response.usdSom).toFixed(2)
            } else {
                target1.value = (elem.value * response.usdSom).toFixed(2)
                target2.value = (elem.value * response.eurSom).toFixed(2)
            }
            if (elem.value === '') {
                target1.value = ''
                target2.value = ''
            }
        } catch (error) {
            console.log(error.message)
        }
    }
}

convert(currencySom, currencyUsd, currencyEur, true)
convert(currencyEur, currencySom, currencyUsd, null)
convert(currencyUsd, currencySom, currencyEur, false)

