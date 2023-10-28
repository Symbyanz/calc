import { useState } from 'react';
import './calculator.scss'

const Calculator = () => {
    const [depositeValue, setDepositeValue] = useState(50_000); // изначальный депозит
    const [periodsValue, setPeriodsValue] = useState(12); // количество месяцев
    const [replenishmentValue, setReplenishmentValue] = useState(0); // дополнительный взнос (каждый месяц)
    const [rateValue, setRateValue] = useState(10); // процентная ставка
    // const [resultValue, setResultValue] = useState('55235.65'); // результат итоговый
    // начисление процента происходит раз в месяц (в данной примере)

    // const temp: number = depositeValue * (1 + rateValue / 100 / 12) ** (12 * periodsValue);

    return (
        <section className="calculator">
            <div className="calculator__container">
                <div className="calculator__field">
                    <label htmlFor="deposite">Enter Your start deposit ($)</label>
                    <input type="number" id="deposite" value={depositeValue} onChange={e => setDepositeValue(+e.target.value)} />
                </div>
                <div className="calculator__field">
                    <label htmlFor="periods">Enter number of month</label>
                    <input type="number" id="periods" value={periodsValue} onChange={e => setPeriodsValue(+e.target.value)} />
                </div>
                <div className="calculator__field">
                    <label htmlFor="rate">Rate for the year (%)</label>
                    <input type="number" id="rate" value={rateValue} onChange={e => setReplenishmentValue(+e.target.value)} />
                </div>
                <div className="calculator__field">
                    <label htmlFor="replenishment">Monthly deposit replenishment ($)</label>
                    <input type="number" id="replenishment" value={replenishmentValue} onChange={e => setRateValue(+e.target.value)} />
                </div>
                {/* <h2 className="calculator__result">Result: <span>{resultValue}</span></h2> */}
            </div>
        </section>
    )
}

export default Calculator