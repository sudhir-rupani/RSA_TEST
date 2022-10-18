import { useState, useEffect } from 'react'
import { fetchAddons, fetchQuote } from '../../Service/Api'
import Addons from '../../Component/Addons'
import Quote from '../../Component/Quote'

const Home = () => {
  const [quote, setQuoteData] = useState({})
  const [addons, setAddonsData] = useState([])
  const [isMonthlyPrice, setIsMonthlyPrice] = useState(true)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    getQute()
    getAddons()
  }, [])

  useEffect(() => {
    calculateTotalPrice()
  }, [addons, isMonthlyPrice])

  const getAddons = async () => {
    const addon = await fetchAddons()
    setAddonsData(addon)
  }

  const getQute = async () => {
    const quote = await fetchQuote()
    setQuoteData(quote[0])
  }
  const onSwitch = () => {
    setIsMonthlyPrice(!isMonthlyPrice)
  }
  const calculateTotalPrice = () => {
    const initialValue = isMonthlyPrice ? quote.monthlyPrice : quote.annualPrice
    const total = addons.reduce((previous, curValue) => {
      return curValue.isSelected
        ? previous +
            (isMonthlyPrice ? curValue.monthlyPrice : curValue.annualPrice)
        : previous
    }, initialValue)
    total && setTotalPrice(total.toFixed(2))
  }

  return (
    <div className= 'mainContainer'>
      <Quote
        isMonthlyPrice={isMonthlyPrice}
        quote={quote}
        totalPrice={totalPrice}
        onSwitch={onSwitch}
      />
      <Addons
        isMonthlyPrice={isMonthlyPrice}
        addons={addons}
        setAddonsData={setAddonsData}
      />
    </div>
  )
}

export default Home
