import Vue from 'vue'

import HBtn from './buttons/HBtn.vue'
import HBtnFloat from './buttons/HBtnFloat.vue'
import HCard from './card/HCard.vue'
import HCardHeader from './card/HCardHeader'
import HCardMedia from './card/HCardMedia'
import HCardMediaText from './card/HCardMediaText'
import HCardText from './card/HCardText'
import HCardActions from './card/HCardActions'
import HCardButtons from './card/HCardButtons'
import HCardIcons from './card/HCardIcons'
import HCheckbox from './checkbox/HCheckbox.vue'
import HCollapsible from '../components/collapsible/HCollapsible.vue'
import HCollapsibleMenu from '../components/collapsible/HCollapsibleMenu.vue'
import HCollapsibleItem from '../components/collapsible/HCollapsibleItem.vue'
import HDatePicker from './date/HDatePicker.vue'
import HDateInput from './date/HDateInput.vue'
import HTimePicker from './date/HTimePicker.vue'
import HTimeInput from './date/HTimeInput.vue'
import HFaIcon from './icons/FaIcon.vue'
import HAvatar from './image/HAvatar.vue'
import HList from './list/HList.vue'
import HListItem from './list/HListItem.vue'
import HListHeader from './list/HListHeader.vue'
import HListBody from './list/HListBody.vue'
import HListItemLeft from './list/HListItemLeft.vue'
import HListItemRight from './list/HListItemRight.vue'
import HAppToolbar from './toolbar/HAppToolbar.vue'
import HAppToolbarContainer from './toolbar/HAppToolbarContainer.vue'
import HAppToolbarNavigation from './toolbar/HAppToolbarNavigation.vue'
import HAppToolbarTitle from './toolbar/HAppToolbarTitle.vue'
import HAppToolbarAction from './toolbar/HAppToolbarAction.vue'
import HAppToolbarMenu from './toolbar/HAppToolbarMenu.vue'
import HAppToolbarFab from './toolbar/HAppToolbarFab'
import HMenuBar from './menu/HMenuBar.vue'
import HMenuBarItem from './menu/HMenuBarItem.vue'
import HMenuDropdown from './menu/HMenuDropdown.vue'
import HMenuDropdownItem from './menu/HMenuDropdownItem.vue'
import HSlideMenu from './menu/HSlideMenu.vue'
import HModal from './window/HModal'
import HNavDrawer from '../components/window/HNavDrawer'
import HRadio from './radio/HRadio.vue'
import HSearch from './Inputs/HSearch'
import HSelect from './select/HSelect.vue'
import HTab from './tab/HTab.vue'
import HTabs from './tab/HTabs.vue'
import HTable from './table/HTable.vue'
import HInput from './Inputs/HInput.vue'
import HToggle from './checkbox/HToggle'
import HPage from './page/HPage.vue'

const Components = {
  HBtn,
  HBtnFloat,
  HCard,
  HCardHeader,
  HCardMedia,
  HCardMediaText,
  HCardText,
  HCardActions,
  HCardButtons,
  HCardIcons,
  HCheckbox,
  HCollapsible,
  HCollapsibleMenu,
  HCollapsibleItem,
  HDatePicker,
  HDateInput,
  HTimePicker,
  HTimeInput,
  HFaIcon,
  HAvatar,
  HList,
  HListItem,
  HListHeader,
  HListItemLeft,
  HListItemRight,
  HListBody,
  HAppToolbar,
  HAppToolbarNavigation,
  HAppToolbarContainer,
  HAppToolbarTitle,
  HAppToolbarAction,
  HAppToolbarMenu,
  HAppToolbarFab,
  HMenuBar,
  HMenuBarItem,
  HMenuDropdown,
  HMenuDropdownItem,
  HSlideMenu,
  HModal,
  HNavDrawer,
  HRadio,
  HSearch,
  HSelect,
  HTab,
  HTabs,
  HTable,
  HInput,
  HToggle,
  HPage
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
