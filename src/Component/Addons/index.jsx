import Box from '../Shared/Box'
import {
  ADDON_BUTTON_TEXT,
  PRICE_PER_MONTH_TEXT,
  PRICE_ANUAL_TEXT,
  ADDON_TITLE_TEXT,
} from '../../Constant/App'

const Addons = ({ isMonthlyPrice, addons = [], setAddonsData }) => {
  const onSelectAddon = (_e, title) => {
    const addonIndex = addons.findIndex((addon) => addon.title == title)
    const slectedAddon = addons[addonIndex]
    addons[addonIndex] = {
      ...slectedAddon,
      isSelected: !slectedAddon['isSelected'],
    }
    setAddonsData([...addons])
  }

  const getPriceText = () => {
    return isMonthlyPrice ? PRICE_PER_MONTH_TEXT : PRICE_ANUAL_TEXT
  }
  if (!addons.length) {
    return null
  }
  return (
    <>
      <div className='container'>
        <h2 className='addon title'>{ADDON_TITLE_TEXT}</h2>
      </div>
      <section className='boxes'>
        <div className='container'>
          {addons &&
            addons.map((addon) => {
              return (
                <Box
                  className={'addon'}
                  title={addon.title}
                  price={
                    isMonthlyPrice ? addon.monthlyPrice : addon.annualPrice
                  }
                  desc={addon.text}
                  priceText={getPriceText()}
                  buttonText={ADDON_BUTTON_TEXT}
                  onClick={onSelectAddon}
                  isSelected={addon.isSelected}
                />
              )
            })}
        </div>
      </section>
    </>
  )
}
export default Addons
