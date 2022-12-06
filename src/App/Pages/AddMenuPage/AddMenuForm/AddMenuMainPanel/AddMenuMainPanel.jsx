import AddMenuMenuNameInput from './AddMenuMenuNameInput'
import AddMenuTabs from './AddMenuTabs/AddMenuTabs'
import AddMenuDayIndicator from './AddMenuDayIndicator'
import AddMenuSearchWithDropdown from './AddMenuSearchWithDropdown'
import AddMenuDishesCard from './AddMenuDishesCard'
import AddMenuNextTabButton from './AddMenuNextTabButton'

export default function AddMenuMainPanel(props) {
   return (
      <div className="max-w-xs">
         <AddMenuMenuNameInput />
         <AddMenuTabs />
         <AddMenuDayIndicator />
         <AddMenuSearchWithDropdown />
         <AddMenuDishesCard />
         <AddMenuNextTabButton />
      </div>
   )
}