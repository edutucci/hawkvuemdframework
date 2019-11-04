import Vue from 'vue'

import CompCode from './others/CompCode'
import ListHelp from './others/ListHelp'
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
import HCounter from './chips/Counter.vue'
import HCarousel from './carousel/Carousel.vue'
import HCarouselSlider from './carousel/CarouselSlider.vue'
import HDatePicker from './date/HDatePicker.vue'
import HDateTimeDialog from './date/DateTimeDialog.vue'
import HTimePicker from './date/HTimePicker.vue'
import HIcon from './icons/HIcon'
import HFileUpload from './fileUpload/fileUpload.vue'
import HImageUpload from './fileUpload/ImageUpload.vue'
import HImage from './image/Image'
import HList from './list/List.vue'
import HListItem from './list/ListItem.vue'
import HListHeader from './list/ListHeader.vue'
import HListItemContent from './list/ListItemContent'
import HListItemSide from './list/ListItemSide'
import HListItemText from './list/ListItemText'
import HListItemImg from './list/ListItemImg'
import HAppToolbar from './appBar/HAppToolbar.vue'
import HAppToolbarNavigation from './appBar/HAppToolbarNavigation'
import HAppToolbarContainer from './appBar/HAppToolbarContainer.vue'
import HAppToolbarTitle from './appBar/HAppToolbarTitle.vue'
import HAppToolbarAction from './appBar/HAppToolbarAction.vue'
import HAppToolbarMenu from './appBar/HAppToolbarMenu.vue'
import HAppToolbarFab from './appBar/HAppToolbarFab'
import HMenuBar from './menu/HMenuBar.vue'
import HMenuBarItem from './menu/HMenuBarItem.vue'
import HSideBarMenuItem from './menu/SideBarMenuItem'
import HSideBarMenu from './menu/SideBarMenu'
import HModal from './window/HModal'
import HNavDrawer from '../components/window/NavDrawer'
import HRadio from './radio/HRadio.vue'
import HRating from './rating/Rating.vue'
import HTab from './tab/Tab.vue'
import HTabs from './tab/Tabs.vue'
import HTable from './table/Table.vue'
import HtmlTable from './table/HtmlTable'
import HInputContainer from './Inputs/InputContainer'
import HInputField from './Inputs/InputField'
import HInput from './Inputs/Input.vue'
import HInputPlusMinus from './Inputs/InputPlusMinus.vue'
import HRangeSlider from './Inputs/RangeSlider'
import HToggle from './checkbox/Toggle'
import HMainBody from './page/MainBody.vue'
import HMainPage from './page/MainPage.vue'
import HPageContent from './page/PageContent.vue'
import HPageHeader from './page/PageHeader.vue'
import HPageFooter from './page/PageFooter.vue'
import HYoutubeVideo from './video/YoutubeVideo.vue'
import HLink from './html/Link.vue'
import HSeparator from './html/Separator.vue'
import HBanner from './banner/Banner'
import HScrollNavigator from './scroll/ScrollNavigator'

const Components = {
  CompCode,
  ListHelp,
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
  HCounter,
  HDatePicker,
  HDateTimeDialog,
  HTimePicker,
  HIcon,
  HFileUpload,
  HImageUpload,
  HImage,
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
  HSideBarMenu,
  HSideBarMenuItem,
  HModal,
  HNavDrawer,
  HRadio,
  HRating,
  HTab,
  HTabs,
  HTable,
  HtmlTable,
  HInputContainer,
  HInputField,
  HInput,
  HRangeSlider,
  HInputPlusMinus,
  HToggle,
  HMainBody,
  HMainPage,
  HPageContent,
  HPageHeader,
  HPageFooter,
  HYoutubeVideo,
  HLink,
  HBanner,
  HSeparator,
  HScrollNavigator
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
