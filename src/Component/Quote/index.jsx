import Box from '../Shared/Box'
import {
  PRICE_ANUAL_TEXT,
  PRICE_PER_MONTH_TEXT,
  QUOTE_BUTTON_TEXT_ANNUAL,
  QUOTE_BUTTON_TEXT_MONTHLY,
  QUOTE_DATE_TEXT,
  QUOTE_ITEM_DESC,
  QUOTE_LABLE_TEXT,
  QUOTE_REFERENCE_TEXT,
} from '../../Constant/App'

const Quote = ({ isMonthlyPrice, quote, totalPrice, onSwitch }) => {
  const getPriceText = () => {
    return isMonthlyPrice ? PRICE_PER_MONTH_TEXT : PRICE_ANUAL_TEXT
  }

  const StartingDate = () => {
    const date = new Date(quote.startDate)
    return <p>{`${QUOTE_DATE_TEXT} ${date.toDateString()}.`}</p>
  }
  if (!quote.firstName) {
    return null
  }
  return (
    <>
      <header className='quote'>
        <div className='container'>
          <div>
            <h1>{`${quote.firstName} ${quote.lastName},`}</h1>
            <p>
              {`${QUOTE_LABLE_TEXT}, ${quote.address1} ${quote.address2} ${quote.address3} ${quote.address2} ${quote.town}.`}
            </p>
            <p>{`${QUOTE_REFERENCE_TEXT}: ${quote.quoteRef}`}</p>
            <StartingDate />
          </div>
          <Box
            className={'title'}
            price={totalPrice}
            desc={QUOTE_ITEM_DESC}
            priceText={getPriceText()}
            buttonText={
              isMonthlyPrice
                ? QUOTE_BUTTON_TEXT_ANNUAL
                : QUOTE_BUTTON_TEXT_MONTHLY
            }
            onClick={onSwitch}
          />
        </div>
      </header>
    </>
  )
}
export default Quote
