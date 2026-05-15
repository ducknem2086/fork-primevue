import type { DefaultPassThrough, PassThrough } from '@oda-components/core';
import type { OdaComponentsCSPOptions, OdaComponentsLocaleOptions, OdaComponentsZIndexOptions } from '@oda-components/core/config';
import type { AccordionPassThroughOptions } from 'oda-components/accordion';
import type { AccordionContentPassThroughOptions } from 'oda-components/accordioncontent';
import type { AccordionHeaderPassThroughOptions } from 'oda-components/accordionheader';
import type { AccordionPanelPassThroughOptions } from 'oda-components/accordionpanel';
import type { AccordionTabPassThroughOptions } from 'oda-components/accordiontab';
import type { AnimateOnScrollDirectivePassThroughOptions } from 'oda-components/animateonscroll';
import type { AutoCompletePassThroughOptions } from 'oda-components/autocomplete';
import type { AvatarPassThroughOptions } from 'oda-components/avatar';
import type { AvatarGroupPassThroughOptions } from 'oda-components/avatargroup';
import type { BadgePassThroughOptions } from 'oda-components/badge';
import type { BadgeDirectivePassThroughOptions } from 'oda-components/badgedirective';
import type { BlockUIPassThroughOptions } from 'oda-components/blockui';
import type { BreadcrumbPassThroughOptions } from 'oda-components/breadcrumb';
import type { ButtonPassThroughOptions } from 'oda-components/button';
import type { ButtonGroupPassThroughOptions } from 'oda-components/buttongroup';
import type { CalendarPassThroughOptions } from 'oda-components/calendar';
import type { CardPassThroughOptions } from 'oda-components/card';
import type { CarouselPassThroughOptions } from 'oda-components/carousel';
import type { CascadeSelectPassThroughOptions } from 'oda-components/cascadeselect';
import type { ChartPassThroughOptions } from 'oda-components/chart';
import type { CheckboxPassThroughOptions } from 'oda-components/checkbox';
import type { CheckboxGroupPassThroughOptions } from 'oda-components/checkboxgroup';
import type { ChipPassThroughOptions } from 'oda-components/chip';
import type { ChipsPassThroughOptions } from 'oda-components/chips';
import type { ColorPickerPassThroughOptions } from 'oda-components/colorpicker';
import type { ColumnPassThroughOptions } from 'oda-components/column';
import type { ColumnGroupPassThroughOptions } from 'oda-components/columngroup';
import type { ConfirmDialogPassThroughOptions } from 'oda-components/confirmdialog';
import type { ConfirmPopupPassThroughOptions } from 'oda-components/confirmpopup';
import type { ContextMenuPassThroughOptions } from 'oda-components/contextmenu';
import type { DataTablePassThroughOptions } from 'oda-components/datatable';
import type { DataViewPassThroughOptions } from 'oda-components/dataview';
import type { DatePickerPassThroughOptions } from 'oda-components/datepicker';
import type { DeferredContentPassThroughOptions } from 'oda-components/deferredcontent';
import type { DialogPassThroughOptions } from 'oda-components/dialog';
import type { DividerPassThroughOptions } from 'oda-components/divider';
import type { DockPassThroughOptions } from 'oda-components/dock';
import type { DrawerPassThroughOptions } from 'oda-components/drawer';
import type { DropdownPassThroughOptions } from 'oda-components/dropdown';
import type { EditorPassThroughOptions } from 'oda-components/editor';
import type { FieldsetPassThroughOptions } from 'oda-components/fieldset';
import type { FileUploadPassThroughOptions } from 'oda-components/fileupload';
import type { FloatLabelPassThroughOptions } from 'oda-components/floatlabel';
import type { FluidPassThroughOptions } from 'oda-components/fluid';
import type { FocusTrapDirectivePassThroughOptions } from 'oda-components/focustrap';
import type { GalleriaPassThroughOptions } from 'oda-components/galleria';
import type { IconFieldPassThroughOptions } from 'oda-components/iconfield';
import type { IftaLabelPassThroughOptions } from 'oda-components/iftalabel';
import type { ImagePassThroughOptions } from 'oda-components/image';
import type { ImageComparePassThroughOptions } from 'oda-components/imagecompare';
import type { InlineMessagePassThroughOptions } from 'oda-components/inlinemessage';
import type { InplacePassThroughOptions } from 'oda-components/inplace';
import type { InputChipsPassThroughOptions } from 'oda-components/inputchips';
import type { InputGroupPassThroughOptions } from 'oda-components/inputgroup';
import type { InputGroupAddonPassThroughOptions } from 'oda-components/inputgroupaddon';
import type { InputIconPassThroughOptions } from 'oda-components/inputicon';
import type { InputMaskPassThroughOptions } from 'oda-components/inputmask';
import type { InputNumberPassThroughOptions } from 'oda-components/inputnumber';
import type { InputOtpPassThroughOptions } from 'oda-components/inputotp';
import type { InputSwitchPassThroughOptions } from 'oda-components/inputswitch';
import type { InputTextPassThroughOptions } from 'oda-components/inputtext';
import type { KeyFilterDirectivePassThroughOptions } from 'oda-components/keyfilter';
import type { KnobPassThroughOptions } from 'oda-components/knob';
import type { ListboxPassThroughOptions } from 'oda-components/listbox';
import type { MegaMenuPassThroughOptions } from 'oda-components/megamenu';
import type { MenuPassThroughOptions } from 'oda-components/menu';
import type { MenubarPassThroughOptions } from 'oda-components/menubar';
import type { MessagePassThroughOptions } from 'oda-components/message';
import type { MeterGroupPassThroughOptions } from 'oda-components/metergroup';
import type { MultiSelectPassThroughOptions } from 'oda-components/multiselect';
import type { OrderListPassThroughOptions } from 'oda-components/orderlist';
import type { OrganizationChartPassThroughOptions } from 'oda-components/organizationchart';
import type { OverlayBadgePassThroughOptions } from 'oda-components/overlaybadge';
import type { OverlayPanelPassThroughOptions } from 'oda-components/overlaypanel';
import type { PaginatorPassThroughOptions } from 'oda-components/paginator';
import type { PanelPassThroughOptions } from 'oda-components/panel';
import type { PanelMenuPassThroughOptions } from 'oda-components/panelmenu';
import type { PassThroughOptions } from 'oda-components/passthrough';
import type { PasswordPassThroughOptions } from 'oda-components/password';
import type { PickListPassThroughOptions } from 'oda-components/picklist';
import type { PopoverPassThroughOptions } from 'oda-components/popover';
import type { ProgressBarPassThroughOptions } from 'oda-components/progressbar';
import type { ProgressSpinnerPassThroughOptions } from 'oda-components/progressspinner';
import type { RadioButtonPassThroughOptions } from 'oda-components/radiobutton';
import type { RadioButtonGroupPassThroughOptions } from 'oda-components/radiobuttongroup';
import type { RatingPassThroughOptions } from 'oda-components/rating';
import type { RippleDirectivePassThroughOptions } from 'oda-components/ripple';
import type { RowPassThroughOptions } from 'oda-components/row';
import type { ScrollPanelPassThroughOptions } from 'oda-components/scrollpanel';
import type { ScrollTopPassThroughOptions } from 'oda-components/scrolltop';
import type { SelectPassThroughOptions } from 'oda-components/select';
import type { SelectButtonPassThroughOptions } from 'oda-components/selectbutton';
import type { SidebarPassThroughOptions } from 'oda-components/sidebar';
import type { SkeletonPassThroughOptions } from 'oda-components/skeleton';
import type { SliderPassThroughOptions } from 'oda-components/slider';
import type { SpeedDialPassThroughOptions } from 'oda-components/speeddial';
import type { SplitButtonPassThroughOptions } from 'oda-components/splitbutton';
import type { SplitterPassThroughOptions } from 'oda-components/splitter';
import type { SplitterPanelPassThroughOptions } from 'oda-components/splitterpanel';
import type { StepPassThroughOptions } from 'oda-components/step';
import type { StepItemPassThroughOptions } from 'oda-components/stepitem';
import type { StepListPassThroughOptions } from 'oda-components/steplist';
import type { StepPanelPassThroughOptions } from 'oda-components/steppanel';
import type { StepPanelsPassThroughOptions } from 'oda-components/steppanels';
import type { StepperPassThroughOptions } from 'oda-components/stepper';
import type { StepsPassThroughOptions } from 'oda-components/steps';
import type { StyleClassDirectivePassThroughOptions } from 'oda-components/styleclass';
import type { TabPassThroughOptions } from 'oda-components/tab';
import type { TabListPassThroughOptions } from 'oda-components/tablist';
import type { TabMenuPassThroughOptions } from 'oda-components/tabmenu';
import type { TabPanelPassThroughOptions } from 'oda-components/tabpanel';
import type { TabPanelsPassThroughOptions } from 'oda-components/tabpanels';
import type { TabsPassThroughOptions } from 'oda-components/tabs';
import type { TabViewPassThroughOptions } from 'oda-components/tabview';
import type { TagPassThroughOptions } from 'oda-components/tag';
import type { TerminalPassThroughOptions } from 'oda-components/terminal';
import type { TextareaPassThroughOptions } from 'oda-components/textarea';
import type { TieredMenuPassThroughOptions } from 'oda-components/tieredmenu';
import type { TimelinePassThroughOptions } from 'oda-components/timeline';
import type { ToastPassThroughOptions } from 'oda-components/toast';
import type { ToggleButtonPassThroughOptions } from 'oda-components/togglebutton';
import type { ToggleSwitchPassThroughOptions } from 'oda-components/toggleswitch';
import type { ToolbarPassThroughOptions } from 'oda-components/toolbar';
import type { TooltipDirectivePassThroughOptions } from 'oda-components/tooltip';
import type { TreePassThroughOptions } from 'oda-components/tree';
import type { TreeSelectPassThroughOptions } from 'oda-components/treeselect';
import type { TreeTablePassThroughOptions } from 'oda-components/treetable';
import type { VirtualScrollerPassThroughOptions } from 'oda-components/virtualscroller';

export * from '@oda-components/core/config';
export { default } from '@oda-components/core/config';

export interface OdaComponentsConfiguration {
    ripple?: boolean;
    /**
     * @deprecated since v4.0. Use 'inputVariant' instead.
     */
    inputStyle?: 'filled' | 'outlined' | undefined;
    inputVariant?: 'filled' | 'outlined' | undefined;
    locale?: OdaComponentsLocaleOptions;
    filterMatchModeOptions?: any;
    zIndex?: OdaComponentsZIndexOptions;
    theme?: any;
    unstyled?: boolean;
    pt?: PassThrough<OdaComponentsPTOptions>;
    ptOptions?: PassThroughOptions;
    csp?: OdaComponentsCSPOptions;
}

export interface OdaComponentsPTOptions {
    accordion?: DefaultPassThrough<AccordionPassThroughOptions>;
    accordionpanel?: DefaultPassThrough<AccordionPanelPassThroughOptions>;
    accordionheader?: DefaultPassThrough<AccordionHeaderPassThroughOptions>;
    accordioncontent?: DefaultPassThrough<AccordionContentPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Accordion instead.
     */
    accordiontab?: DefaultPassThrough<AccordionTabPassThroughOptions>;
    autocomplete?: DefaultPassThrough<AutoCompletePassThroughOptions>;
    avatar?: DefaultPassThrough<AvatarPassThroughOptions>;
    avatargroup?: DefaultPassThrough<AvatarGroupPassThroughOptions>;
    badge?: DefaultPassThrough<BadgePassThroughOptions>;
    blockui?: DefaultPassThrough<BlockUIPassThroughOptions>;
    breadcrumb?: DefaultPassThrough<BreadcrumbPassThroughOptions>;
    button?: DefaultPassThrough<ButtonPassThroughOptions>;
    buttongroup?: DefaultPassThrough<ButtonGroupPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of DatePicker instead.
     */
    calendar?: DefaultPassThrough<CalendarPassThroughOptions>;
    card?: DefaultPassThrough<CardPassThroughOptions>;
    carousel?: DefaultPassThrough<CarouselPassThroughOptions>;
    cascadeselect?: DefaultPassThrough<CascadeSelectPassThroughOptions>;
    chart?: DefaultPassThrough<ChartPassThroughOptions>;
    checkbox?: DefaultPassThrough<CheckboxPassThroughOptions>;
    checkboxgroup?: DefaultPassThrough<CheckboxGroupPassThroughOptions>;
    chip?: DefaultPassThrough<ChipPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of InputChips instead.
     */
    chips?: DefaultPassThrough<ChipsPassThroughOptions>;
    colorpicker?: DefaultPassThrough<ColorPickerPassThroughOptions>;
    column?: DefaultPassThrough<ColumnPassThroughOptions>;
    columngroup?: DefaultPassThrough<ColumnGroupPassThroughOptions>;
    confirmdialog?: DefaultPassThrough<ConfirmDialogPassThroughOptions>;
    confirmpopup?: DefaultPassThrough<ConfirmPopupPassThroughOptions>;
    contextmenu?: DefaultPassThrough<ContextMenuPassThroughOptions>;
    datatable?: DefaultPassThrough<DataTablePassThroughOptions>;
    dataview?: DefaultPassThrough<DataViewPassThroughOptions>;
    datepicker?: DefaultPassThrough<DatePickerPassThroughOptions>;
    deferredcontent?: DefaultPassThrough<DeferredContentPassThroughOptions>;
    divider?: DefaultPassThrough<DividerPassThroughOptions>;
    dialog?: DefaultPassThrough<DialogPassThroughOptions>;
    dock?: DefaultPassThrough<DockPassThroughOptions>;
    drawer?: DefaultPassThrough<DrawerPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Select instead.
     */
    dropdown?: DefaultPassThrough<DropdownPassThroughOptions>;
    dynamicdialog?: DefaultPassThrough<DialogPassThroughOptions>;
    editor?: DefaultPassThrough<EditorPassThroughOptions>;
    fieldset?: DefaultPassThrough<FieldsetPassThroughOptions>;
    fileupload?: DefaultPassThrough<FileUploadPassThroughOptions>;
    floatlabel?: DefaultPassThrough<FloatLabelPassThroughOptions>;
    fluid?: DefaultPassThrough<FluidPassThroughOptions>;
    galleria?: DefaultPassThrough<GalleriaPassThroughOptions>;
    iconfield?: DefaultPassThrough<IconFieldPassThroughOptions>;
    iftalabel?: DefaultPassThrough<IftaLabelPassThroughOptions>;
    image?: DefaultPassThrough<ImagePassThroughOptions>;
    imagecompare?: DefaultPassThrough<ImageComparePassThroughOptions>;
    inlinemessage?: DefaultPassThrough<InlineMessagePassThroughOptions>;
    inplace?: DefaultPassThrough<InplacePassThroughOptions>;
    inputchips?: DefaultPassThrough<InputChipsPassThroughOptions>;
    inputgroup?: DefaultPassThrough<InputGroupPassThroughOptions>;
    inputgroupaddon?: DefaultPassThrough<InputGroupAddonPassThroughOptions>;
    inputicon?: DefaultPassThrough<InputIconPassThroughOptions>;
    inputmask?: DefaultPassThrough<InputMaskPassThroughOptions>;
    inputnumber?: DefaultPassThrough<InputNumberPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of ToggleSwitch instead.
     */
    inputotp?: DefaultPassThrough<InputOtpPassThroughOptions>;
    inputswitch?: DefaultPassThrough<InputSwitchPassThroughOptions>;
    inputtext?: DefaultPassThrough<InputTextPassThroughOptions>;
    knob?: DefaultPassThrough<KnobPassThroughOptions>;
    listbox?: DefaultPassThrough<ListboxPassThroughOptions>;
    megamenu?: DefaultPassThrough<MegaMenuPassThroughOptions>;
    menu?: DefaultPassThrough<MenuPassThroughOptions>;
    menubar?: DefaultPassThrough<MenubarPassThroughOptions>;
    message?: DefaultPassThrough<MessagePassThroughOptions>;
    metergroup?: DefaultPassThrough<MeterGroupPassThroughOptions>;
    multiselect?: DefaultPassThrough<MultiSelectPassThroughOptions>;
    orderlist?: DefaultPassThrough<OrderListPassThroughOptions>;
    organizationchart?: DefaultPassThrough<OrganizationChartPassThroughOptions>;
    overlaybadge?: DefaultPassThrough<OverlayBadgePassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Popover instead.
     */
    overlaypanel?: DefaultPassThrough<OverlayPanelPassThroughOptions>;
    paginator?: DefaultPassThrough<PaginatorPassThroughOptions>;
    panel?: DefaultPassThrough<PanelPassThroughOptions>;
    panelmenu?: DefaultPassThrough<PanelMenuPassThroughOptions>;
    password?: DefaultPassThrough<PasswordPassThroughOptions>;
    picklist?: DefaultPassThrough<PickListPassThroughOptions>;
    popover?: DefaultPassThrough<PopoverPassThroughOptions>;
    progressbar?: DefaultPassThrough<ProgressBarPassThroughOptions>;
    progressspinner?: DefaultPassThrough<ProgressSpinnerPassThroughOptions>;
    radiobutton?: DefaultPassThrough<RadioButtonPassThroughOptions>;
    radiobuttongroup?: DefaultPassThrough<RadioButtonGroupPassThroughOptions>;
    rating?: DefaultPassThrough<RatingPassThroughOptions>;
    row?: DefaultPassThrough<RowPassThroughOptions>;
    scrollpanel?: DefaultPassThrough<ScrollPanelPassThroughOptions>;
    scrolltop?: DefaultPassThrough<ScrollTopPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Drawer instead.
     */
    sidebar?: DefaultPassThrough<SidebarPassThroughOptions>;
    skeleton?: DefaultPassThrough<SkeletonPassThroughOptions>;
    slider?: DefaultPassThrough<SliderPassThroughOptions>;
    speeddial?: DefaultPassThrough<SpeedDialPassThroughOptions>;
    selectbutton?: DefaultPassThrough<SelectButtonPassThroughOptions>;
    select?: DefaultPassThrough<SelectPassThroughOptions>;
    splitbutton?: DefaultPassThrough<SplitButtonPassThroughOptions>;
    splitter?: DefaultPassThrough<SplitterPassThroughOptions>;
    splitterpanel?: DefaultPassThrough<SplitterPanelPassThroughOptions>;
    step?: DefaultPassThrough<StepPassThroughOptions>;
    stepitem?: DefaultPassThrough<StepItemPassThroughOptions>;
    steplist?: DefaultPassThrough<StepListPassThroughOptions>;
    steppanel?: DefaultPassThrough<StepPanelPassThroughOptions>;
    steppanels?: DefaultPassThrough<StepPanelsPassThroughOptions>;
    stepper?: DefaultPassThrough<StepperPassThroughOptions>;
    steps?: DefaultPassThrough<StepsPassThroughOptions>;
    tabmenu?: DefaultPassThrough<TabMenuPassThroughOptions>;
    tabs?: DefaultPassThrough<TabsPassThroughOptions>;
    tablist?: DefaultPassThrough<TabListPassThroughOptions>;
    tab?: DefaultPassThrough<TabPassThroughOptions>;
    tabpanels?: DefaultPassThrough<TabPanelsPassThroughOptions>;
    tabpanel?: DefaultPassThrough<TabPanelPassThroughOptions>;
    /**
     * @deprecated since v4. Use tabs instead.
     */
    tabview?: DefaultPassThrough<TabViewPassThroughOptions>;
    tag?: DefaultPassThrough<TagPassThroughOptions>;
    terminal?: DefaultPassThrough<TerminalPassThroughOptions>;
    textarea?: DefaultPassThrough<TextareaPassThroughOptions>;
    tieredmenu?: DefaultPassThrough<TieredMenuPassThroughOptions>;
    timeline?: DefaultPassThrough<TimelinePassThroughOptions>;
    toast?: DefaultPassThrough<ToastPassThroughOptions>;
    togglebutton?: DefaultPassThrough<ToggleButtonPassThroughOptions>;
    toggleswitch?: DefaultPassThrough<ToggleSwitchPassThroughOptions>;
    toolbar?: DefaultPassThrough<ToolbarPassThroughOptions>;
    tree?: DefaultPassThrough<TreePassThroughOptions>;
    treeselect?: DefaultPassThrough<TreeSelectPassThroughOptions>;
    treetable?: DefaultPassThrough<TreeTablePassThroughOptions>;
    virtualscroller?: DefaultPassThrough<VirtualScrollerPassThroughOptions>;
    directives?: {
        animate?: AnimateOnScrollDirectivePassThroughOptions;
        badge?: BadgeDirectivePassThroughOptions;
        focustrap?: FocusTrapDirectivePassThroughOptions;
        keyfilter?: KeyFilterDirectivePassThroughOptions;
        ripple?: RippleDirectivePassThroughOptions;
        styleclass?: StyleClassDirectivePassThroughOptions;
        tooltip?: TooltipDirectivePassThroughOptions;
    };
    global?: {
        css?: ((options: any) => string | undefined) | string | undefined;
    };
}
