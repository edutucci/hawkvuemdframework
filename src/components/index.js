import app from '../vueApp';

import CompCode from './others/CompCode.vue';
import ListHelp from './others/ListHelp.vue';
import TabsHelp from './others/TabsHelp.vue';

// Layout Page
import HMainBody from './page/MainBody.vue';
import HPageContent from './page/PageContent.vue';

// appBars
import HAppToolbar from './appBar/AppToolbar.vue';
import HAppToolbarNavigation from './appBar/AppToolbarNavigation.vue';
import HAppToolbarContainer from './appBar/AppToolbarContainer.vue';
import HAppToolbarTitle from './appBar/AppToolbarTitle.vue';
import HAppToolbarAction from './appBar/AppToolbarAction.vue';
import HAppToolbarMenu from './appBar/AppToolbarMenu.vue';
import HAppToolbarFab from './appBar/AppToolbarFab.vue';

// buttons
import HBtn from './buttons/Btn.vue';
import HBtnGroup from './buttons/BtnGroup.vue';

// windows
import HNavDrawer from './window/NavDrawer.vue';
import HDialog from './window/Dialog.vue';

// Icon
import HIcon from './icons/Icon.vue';

// Image
import HImage from './image/Image.vue';

// HTML
import HLink from './html/Link.vue';
import HSeparator from './html/Separator.vue';

// Collapsible
import HCollapsible from './collapsible/Collapsible.vue';
import HCollapsibleMenu from './collapsible/CollapsibleMenu.vue';
import HCollapsibleItem from './collapsible/CollapsibleItem.vue';

// import HCard from './card/Card.vue'
// import HCardSection from './card/CardSection'
// import HCardMedia from './card/CardMedia'
// import HCardMediaImg from './card/CardMediaImg.vue'
// import HCardMediaText from './card/CardMediaText.vue'
// import HCardText from './card/CardText'
// import HCardActions from './card/CardActions'
// import HCardButtons from './card/CardButtons'
// import HCardIcons from './card/CardIcons'
// import HCheckbox from './checkbox/Checkbox.vue'

// import HChips from './chips/Chips.vue'
// import HCounter from './chips/Counter.vue'
// import HCarousel from './carousel/Carousel.vue'
// import HCarouselSlider from './carousel/CarouselSlider.vue'
// import HDatePicker from './date/HDatePicker.vue'
// import HDateTimeDialog from './date/DateTimeDialog.vue'

// import HTimePicker from './date/HTimePicker.vue'

// import HFileUpload from './fileUpload/fileUpload.vue'

// import HList from './list/List.vue'
// import HListItem from './list/ListItem.vue'
// import HListHeader from './list/ListHeader.vue'
// import HListItemContent from './list/ListItemContent'
// import HListItemSide from './list/ListItemSide'
// import HListItemText from './list/ListItemText'
// import HListItemImg from './list/ListItemImg'
// import HMenuBar from './menu/HMenuBar.vue'
// import HMenuBarItem from './menu/HMenuBarItem.vue'
// import HSideBarMenuItem from './menu/SideBarMenuItem'
// import HSideBarMenu from './menu/SideBarMenu'

// import HRadio from './radio/HRadio.vue'
// import HRating from './rating/Rating.vue'
// import HTab from './tab/Tab.vue'
// import HTabs from './tab/Tabs.vue'
// import HTable from './table/Table.vue'
// import HtmlTable from './table/HtmlTable'
// import HInputContainer from './Inputs/InputContainer'
// import HInputField from './Inputs/InputField'
// import HInput from './Inputs/Input.vue'
// import HInputPlusMinus from './Inputs/InputPlusMinus.vue'
// import HRangeSlider from './Inputs/RangeSlider'
// import HToggle from './checkbox/Toggle'

// import HParallax from './parallax/Parallax'
// import HYoutubeVideo from './video/YoutubeVideo.vue'

// import HBanner from './banner/Banner'
// import HScrollNavigator from './scroll/ScrollNavigator'
// import HProgressCircular from './progress/ProgressCircular'
// import HProgressLinear from './progress/ProgressLinear'

const Components = {
  CompCode,
  ListHelp,
  TabsHelp,
  HMainBody,
  HPageContent,
  HAppToolbar,
  HAppToolbarNavigation,
  HAppToolbarContainer,
  HAppToolbarTitle,
  HAppToolbarAction,
  HAppToolbarMenu,
  HAppToolbarFab,
  HBtn,
  HBtnGroup,
  HDialog,
  HNavDrawer,
  HIcon,
  HImage,
  HLink,
  HSeparator,
  HCollapsible,
  HCollapsibleMenu,
  HCollapsibleItem,

  // HCard,
  // HCardSection,
  // HCardMedia,
  // HCardMediaImg,
  // HCardMediaText,
  // HCardText,
  // HCardActions,
  // HCardButtons,
  // HCardIcons,
  // HCheckbox,

  // HChips,
  // HCarousel,
  // HCarouselSlider,
  // HCounter,
  // HDatePicker,
  // HDateTimeDialog,
  // HTimePicker,

  // HFileUpload,
  // HList,
  // HListItem,
  // HListHeader,
  // HListItemContent,
  // HListItemSide,
  // HListItemText,
  // HListItemImg,
  // HMenuBar,
  // HMenuBarItem,
  // HSideBarMenu,
  // HSideBarMenuItem,

  // HRadio,
  // HRating,
  // HTab,
  // HTabs,
  // HTable,
  // HtmlTable,
  // HInputContainer,
  // HInputField,
  // HInput,
  // HRangeSlider,
  // HInputPlusMinus,
  // HToggle,
  // HParallax,
  // HYoutubeVideo,

  // HBanner,

  // HScrollNavigator,
  // HProgressCircular,
  // HProgressLinear,
};

Object.keys(Components).forEach((name) => {
  app.component(name, Components[name]);
});

export default Components;
