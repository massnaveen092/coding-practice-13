// Write your code here

const TabItem = props => {
  const {tabDetails, activeId, setActiveId} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    setActiveId(tabId)
  }

  const tabClassname = activeId ? 'btn' : 'btn2'

  return (
    <li>
      <button type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
