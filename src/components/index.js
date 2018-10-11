import Vue from 'vue'

import HBtn from './buttons/HBtn.vue'
import HBtnFloat from './buttons/HBtnFloat.vue'
import HtmlLink from './text/HtmlLink.vue'
import HCard from './card/HCard.vue'
import HCardHeader from './card/HCardHeader'
import HCardMedia from './card/HCardMedia'
import HCardMediaText from './card/HCardMediaText'
import HCardText from './card/HCardText'
import HCardActions from './card/HCardActions'
import HCardButtons from './card/HCardButtons'
import HCardIcons from './card/HCardIcons'
import HCheckbox from './checkbox/HCheckbox.vue'
import HCollapsible from './collapsible/HCollapsible.vue'
import HCollapsibleMenu from './collapsible/HCollapsibleMenu.vue'
import HCollapsibleItem from './collapsible/HCollapsibleItem.vue'
import HChips from './chips/Chips.vue'
import HInputChips from './chips/InputChips.vue'
import HCounter from './chips/Counter.vue'
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
import HSlideMenuList from './menu/SlideMenuList.vue'
import HSlideMenu from './menu/HSlideMenu.vue'
import HSlideMenuItem from './menu/HSlideMenuItem.vue'
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
import HPage from './page/Page.vue'
import HPageContent from './page/PageContent.vue'
import HPageHeader from './page/PageHeader.vue'
import HPageFooter from './page/PageFooter.vue'
import HYoutubeVideo from './video/YoutubeVideo.vue'

const Components = {
  HBtn,
  HBtnFloat,
  HtmlLink,
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
  HChips,
  HInputChips,
  HCounter,
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
  HSlideMenuList,
  HSlideMenu,
  HSlideMenuItem,
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
  HPage,
  HPageContent,
  HPageHeader,
  HPageFooter,
  HYoutubeVideo
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
