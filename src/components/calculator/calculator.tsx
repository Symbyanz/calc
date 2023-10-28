import { useState, useEffect } from 'react';
import './calculator.scss'

const Calculator = () => {
    const [depositeValue, setDepositeValue] = useState(50_000); // изначальный депозит
    const [periodsValue, setPeriodsValue] = useState(12); // количество месяцев
    const [replenishmentValue, setReplenishmentValue] = useState(0); // дополнительный взнос (каждый месяц)
    const [rateValue, setRateValue] = useState(10); // процентная ставка
    const [resultValue, setResultValue] = useState('5235.65'); // результат итоговый - 5
    // начисление процента происходит раз в месяц (в данном примере)

    useEffect(() => {
        const arr: number[] = [depositeValue]; // for graphs
        // 	Месяц 12	54 779,16 ₽
        //  Месяц 13	55 235,65 ₽
        // 	Месяц 14	55 695,95 ₽
        // ...
        //  Месяц 24	60 515,25 ₽
        //  Месяц 25    61 019,55 ₽
        const rateActual = (100 + (rateValue / 12)) / 100;
        for (let i = 1; i <= periodsValue; i++) {
            arr[i] = (Math.floor((arr[i - 1] + replenishmentValue) * rateActual * 100) / 100);
        }
        setResultValue(arr[periodsValue].toFixed(2));
    }, [depositeValue, periodsValue, replenishmentValue, rateValue])

    return (
        <section className="calculator">
            <div className="calculator__container">
                <div className="calculator__field">
                    <label htmlFor="deposite">Enter Your start deposit (₽)</label>
                    <input type="number" id="deposite" value={depositeValue} onChange={e => setDepositeValue(+e.target.value)} />
                </div>
                <div className="calculator__field">
                    <label htmlFor="periods">Enter number of month</label>
                    <input type="number" id="periods" value={periodsValue} onChange={e => setPeriodsValue(+e.target.value)} />
                </div>
                <div className="calculator__field">
                    <label htmlFor="rate">Rate for the year (%)</label>
                    <input type="number" id="rate" value={rateValue} onChange={e => setRateValue(+e.target.value)} />
                </div>
                <div className="calculator__field">
                    <label htmlFor="replenishment">Monthly deposit replenishment (₽)</label>
                    <input type="number" id="replenishment" value={replenishmentValue} onChange={e => setReplenishmentValue(+e.target.value)} />
                </div>
                <h2 className="calculator__result">Result: <span>{resultValue}</span></h2>
            </div>
        </section>
    )
}

export default Calculator