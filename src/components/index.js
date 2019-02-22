import Vue from 'vue'

import HBtn from './buttons/Btn.vue'
import HBtnFloat from './buttons/BtnFloat.vue'
import HBtnGroup from './buttons/BtnGroup.vue'
import HBtnGroupItem from './buttons/BtnGroupItem.vue'
import HCard from './card/Card.vue'
import HCardHeader from './card/CardHeader'
import HCardHeaderText from './card/CardHeaderText.vue'
import HCardHeaderMenu from './card/CardHeaderMenu.vue'
import HCardMedia from './card/CardMedia'
import HCardMediaImg from './card/CardMediaImg.vue'
import HCardMediaText from './card/CardMediaText.vue'
import HCardText from './card/CardText'
import HCardActions from './card/CardActions'
import HCardButtons from './card/CardButtons'
import HCardIcons from './card/CardIcons'
import HCheckbox from './checkbox/HCheckbox.vue'
import HCollapsible from './collapsible/HCollapsible.vue'
import HCollapsibleMenu from './collapsible/HCollapsibleMenu.vue'
import HCollapsibleItem from './collapsible/HCollapsibleItem.vue'
import HChips from './chips/Chips.vue'
import HInputChips from './chips/InputChips.vue'
import HCounter from './chips/Counter.vue'
import HCarousel from './carousel/Carousel.vue'
import HCarouselSlider from './carousel/CarouselSlider.vue'
import HDatePicker from './date/HDatePicker.vue'
import HDateInput from './date/HDateInput.vue'
import HDateTimeInput from './date/DateTimeInput.vue'
import HTimePicker from './date/HTimePicker.vue'
import HTimeInput from './date/HTimeInput.vue'
import HFaIcon from './icons/FaIcon.vue'
import HFileUpload from './fileUpload/fileUpload.vue'
import HImageUpload from './fileUpload/ImageUpload.vue'
import HAvatar from './image/HAvatar.vue'
import HImg from './image/HImg'
import HList from './list/HList.vue'
import HListItem from './list/HListItem.vue'
import HListHeader from './list/HListHeader.vue'
import HListBody from './list/HListBody.vue'
import HListItemLeft from './list/HListItemLeft.vue'
import HListItemRight from './list/HListItemRight.vue'
import HListItemContent from './list/HListItemContent'
import HListItemSide from './list/HListItemSide'
import HListItemText from './list/HListItemText'
import HListItemImg from './list/HListItemImg'
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
import HRating from './rating/Rating.vue'
import HSearch from './Inputs/HSearch'
import HSearchMask from './Inputs/HSearchMask'
import HSelect from './Inputs/HSelect.vue'
import HTab from './tab/HTab.vue'
import HTabs from './tab/HTabs.vue'
import HTable from './table/HTable.vue'
import HInput from './Inputs/HInput.vue'
import HInputPlusMinus from './Inputs/InputPlusMinus.vue'
import HInputMask from './Inputs/InputMask.vue'
import HToggle from './checkbox/HToggle'
import HPage from './page/Page.vue'
import HPageContent from './page/PageContent.vue'
import HPageHeader from './page/PageHeader.vue'
import HPageFooter from './page/PageFooter.vue'
import HYoutubeVideo from './video/YoutubeVideo.vue'
import HtmlLink from './html/HtmlLink.vue'
import HtmlSeparator from './html/HtmlSeparator.vue'
import HtmlArticle from './html/HtmlArticle.vue'

const Components = {
  HBtn,
  HBtnFloat,
  HBtnGroup,
  HBtnGroupItem,
  HCard,
  HCardHeader,
  HCardHeaderText,
  HCardHeaderMenu,
  HCardMedia,
  HCardMediaImg,
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
  HCarousel,
  HCarouselSlider,
  HInputChips,
  HCounter,
  HDatePicker,
  HDateInput,
  HDateTimeInput,
  HTimePicker,
  HTimeInput,
  HFaIcon,
  HFileUpload,
  HImageUpload,
  HAvatar,
  HImg,
  HList,
  HListItem,
  HListHeader,
  HListItemLeft,
  HListItemRight,
  HListItemContent,
  HListItemSide,
  HListItemText,
  HListItemImg,
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
  HRating,
  HSearch,
  HSearchMask,
  HSelect,
  HTab,
  HTabs,
  HTable,
  HInput,
  HInputPlusMinus,
  HInputMask,
  HToggle,
  HPage,
  HPageContent,
  HPageHeader,
  HPageFooter,
  HYoutubeVideo,
  HtmlLink,
  HtmlArticle,
  HtmlSeparator
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
