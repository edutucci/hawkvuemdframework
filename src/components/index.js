import Vue from 'vue'

import CompCode from './others/CompCode'
import HBtn from './buttons/Btn.vue'
import HBtnFloat from './buttons/BtnFloat.vue'
import HBtnGroup from './buttons/BtnGroup.vue'
import HBtnDropdown from './buttons/BtnDropdown.vue'
import HCard from './card/Card.vue'
import HCardSection from './card/CardSection'
import HCardMedia from './card/CardMedia'
import HCardMediaImg from './card/CardMediaImg.vue'
import HCardMediaText from './card/CardMediaText.vue'
import HCardText from './card/CardText'
import HCardActions from './card/CardActions'
import HCardButtons from './card/CardButtons'
import HCardIcons from './card/CardIcons'
import HCheckbox from './checkbox/Checkbox.vue'
import HCollapsible from './collapsible/Collapsible.vue'
import HCollapsibleMenu from './collapsible/CollapsibleMenu.vue'
import HCollapsibleItem from './collapsible/CollapsibleItem.vue'
import HChips from './chips/Chips.vue'
import HInputChips from './chips/InputChips.vue'
import HCounter from './chips/Counter.vue'
import HCarousel from './carousel/Carousel.vue'
import HCarouselSlider from './carousel/CarouselSlider.vue'
import HDatePicker from './date/HDatePicker.vue'
import HDateTimeDialog from './date/DateTimeDialog.vue'
import HTimePicker from './date/HTimePicker.vue'
import HFaIcon from './icons/FaIcon.vue'
import HMdIcon from './icons/MdIcon.vue'
import HFileUpload from './fileUpload/fileUpload.vue'
import HImageUpload from './fileUpload/ImageUpload.vue'
import HAvatar from './image/HAvatar.vue'
import HImg from './image/HImg'
import HList from './list/List.vue'
import HListItem from './list/ListItem.vue'
import HListHeader from './list/ListHeader.vue'
import HListItemContent from './list/ListItemContent'
import HListItemSide from './list/ListItemSide'
import HListItemText from './list/ListItemText'
import HListItemImg from './list/ListItemImg'
import HAppToolbar from './toolbar/HAppToolbar.vue'
import HAppToolbarContainer from './toolbar/HAppToolbarContainer.vue'
import HAppToolbarNavigation from './toolbar/HAppToolbarNavigation.vue'
import HAppToolbarTitle from './toolbar/HAppToolbarTitle.vue'
import HAppToolbarAction from './toolbar/HAppToolbarAction.vue'
import HAppToolbarMenu from './toolbar/HAppToolbarMenu.vue'
import HAppToolbarFab from './toolbar/HAppToolbarFab'
import HMenuBar from './menu/HMenuBar.vue'
import HMenuBarItem from './menu/HMenuBarItem.vue'
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
import HTable from './table/Table.vue'
import HtmlTable from './table/HtmlTable'
import HInputContainer from './Inputs/InputContainer'
import HInputField from './Inputs/InputField'
import HInput from './Inputs/HInput.vue'
import HInputPlusMinus from './Inputs/InputPlusMinus.vue'
import HInputMask from './Inputs/InputMask.vue'
import HToggle from './checkbox/Toggle'
import HMainBody from './page/MainBody.vue'
import HMainPage from './page/MainPage.vue'
import HPageContent from './page/PageContent.vue'
import HPageHeader from './page/PageHeader.vue'
import HPageFooter from './page/PageFooter.vue'
import HYoutubeVideo from './video/YoutubeVideo.vue'
import HLink from './html/Link.vue'
import HSeparator from './html/Separator.vue'
import HArticle from './html/Article.vue'
import HScrollNavigator from './scroll/ScrollNavigator'

const Components = {
  CompCode,
  HBtn,
  HBtnFloat,
  HBtnGroup,
  HBtnDropdown,
  HCard,
  HCardSection,
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
  HDateTimeDialog,
  HTimePicker,
  HFaIcon,
  HMdIcon,
  HFileUpload,
  HImageUpload,
  HAvatar,
  HImg,
  HList,
  HListItem,
  HListHeader,
  HListItemContent,
  HListItemSide,
  HListItemText,
  HListItemImg,
  HAppToolbar,
  HAppToolbarNavigation,
  HAppToolbarContainer,
  HAppToolbarTitle,
  HAppToolbarAction,
  HAppToolbarMenu,
  HAppToolbarFab,
  HMenuBar,
  HMenuBarItem,
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
  HtmlTable,
  HInputContainer,
  HInputField,
  HInput,
  HInputPlusMinus,
  HInputMask,
  HToggle,
  HMainBody,
  HMainPage,
  HPageContent,
  HPageHeader,
  HPageFooter,
  HYoutubeVideo,
  HLink,
  HArticle,
  HSeparator,
  HScrollNavigator
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
