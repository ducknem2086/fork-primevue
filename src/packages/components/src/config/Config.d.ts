import type { DefaultPassThrough, PassThrough } from '@app/oda-component/core';
import type { OdaComponentsCSPOptions, OdaComponentsLocaleOptions, OdaComponentsZIndexOptions } from '@app/oda-component/core/config';
import type { AccordionPassThroughOptions } from '@app/oda-component/accordion';
import type { AccordionContentPassThroughOptions } from '@app/oda-component/accordioncontent';
import type { AccordionHeaderPassThroughOptions } from '@app/oda-component/accordionheader';
import type { AccordionPanelPassThroughOptions } from '@app/oda-component/accordionpanel';
import type { AccordionTabPassThroughOptions } from '@app/oda-component/accordiontab';
import type { AnimateOnScrollDirectivePassThroughOptions } from '@app/oda-component/animateonscroll';
import type { AutoCompletePassThroughOptions } from '@app/oda-component/autocomplete';
import type { AvatarPassThroughOptions } from '@app/oda-component/avatar';
import type { AvatarGroupPassThroughOptions } from '@app/oda-component/avatargroup';
import type { BadgePassThroughOptions } from '@app/oda-component/badge';
import type { BadgeDirectivePassThroughOptions } from '@app/oda-component/badgedirective';
import type { BlockUIPassThroughOptions } from '@app/oda-component/blockui';
import type { BreadcrumbPassThroughOptions } from '@app/oda-component/breadcrumb';
import type { ButtonPassThroughOptions } from '@app/oda-component/button';
import type { ButtonGroupPassThroughOptions } from '@app/oda-component/buttongroup';
import type { CalendarPassThroughOptions } from '@app/oda-component/calendar';
import type { CardPassThroughOptions } from '@app/oda-component/card';
import type { CarouselPassThroughOptions } from '@app/oda-component/carousel';
import type { CascadeSelectPassThroughOptions } from '@app/oda-component/cascadeselect';
import type { ChartPassThroughOptions } from '@app/oda-component/chart';
import type { CheckboxPassThroughOptions } from '@app/oda-component/checkbox';
import type { CheckboxGroupPassThroughOptions } from '@app/oda-component/checkboxgroup';
import type { ChipPassThroughOptions } from '@app/oda-component/chip';
import type { ChipsPassThroughOptions } from '@app/oda-component/chips';
import type { ColorPickerPassThroughOptions } from '@app/oda-component/colorpicker';
import type { ColumnPassThroughOptions } from '@app/oda-component/column';
import type { ColumnGroupPassThroughOptions } from '@app/oda-component/columngroup';
import type { ConfirmDialogPassThroughOptions } from '@app/oda-component/confirmdialog';
import type { ConfirmPopupPassThroughOptions } from '@app/oda-component/confirmpopup';
import type { ContextMenuPassThroughOptions } from '@app/oda-component/contextmenu';
import type { DataTablePassThroughOptions } from '@app/oda-component/datatable';
import type { DataViewPassThroughOptions } from '@app/oda-component/dataview';
import type { DatePickerPassThroughOptions } from '@app/oda-component/datepicker';
import type { DeferredContentPassThroughOptions } from '@app/oda-component/deferredcontent';
import type { DialogPassThroughOptions } from '@app/oda-component/dialog';
import type { DividerPassThroughOptions } from '@app/oda-component/divider';
import type { DockPassThroughOptions } from '@app/oda-component/dock';
import type { DrawerPassThroughOptions } from '@app/oda-component/drawer';
import type { DropdownPassThroughOptions } from '@app/oda-component/dropdown';
import type { EditorPassThroughOptions } from '@app/oda-component/editor';
import type { FieldsetPassThroughOptions } from '@app/oda-component/fieldset';
import type { FileUploadPassThroughOptions } from '@app/oda-component/fileupload';
import type { FloatLabelPassThroughOptions } from '@app/oda-component/floatlabel';
import type { FluidPassThroughOptions } from '@app/oda-component/fluid';
import type { FocusTrapDirectivePassThroughOptions } from '@app/oda-component/focustrap';
import type { GalleriaPassThroughOptions } from '@app/oda-component/galleria';
import type { IconFieldPassThroughOptions } from '@app/oda-component/iconfield';
import type { IftaLabelPassThroughOptions } from '@app/oda-component/iftalabel';
import type { ImagePassThroughOptions } from '@app/oda-component/image';
import type { ImageComparePassThroughOptions } from '@app/oda-component/imagecompare';
import type { InlineMessagePassThroughOptions } from '@app/oda-component/inlinemessage';
import type { InplacePassThroughOptions } from '@app/oda-component/inplace';
import type { InputChipsPassThroughOptions } from '@app/oda-component/inputchips';
import type { InputGroupPassThroughOptions } from '@app/oda-component/inputgroup';
import type { InputGroupAddonPassThroughOptions } from '@app/oda-component/inputgroupaddon';
import type { InputIconPassThroughOptions } from '@app/oda-component/inputicon';
import type { InputMaskPassThroughOptions } from '@app/oda-component/inputmask';
import type { InputNumberPassThroughOptions } from '@app/oda-component/inputnumber';
import type { InputOtpPassThroughOptions } from '@app/oda-component/inputotp';
import type { InputSwitchPassThroughOptions } from '@app/oda-component/inputswitch';
import type { InputTextPassThroughOptions } from '@app/oda-component/inputtext';
import type { KeyFilterDirectivePassThroughOptions } from '@app/oda-component/keyfilter';
import type { KnobPassThroughOptions } from '@app/oda-component/knob';
import type { ListboxPassThroughOptions } from '@app/oda-component/listbox';
import type { MegaMenuPassThroughOptions } from '@app/oda-component/megamenu';
import type { MenuPassThroughOptions } from '@app/oda-component/menu';
import type { MenubarPassThroughOptions } from '@app/oda-component/menubar';
import type { MessagePassThroughOptions } from '@app/oda-component/message';
import type { MeterGroupPassThroughOptions } from '@app/oda-component/metergroup';
import type { MultiSelectPassThroughOptions } from '@app/oda-component/multiselect';
import type { OrderListPassThroughOptions } from '@app/oda-component/orderlist';
import type { OrganizationChartPassThroughOptions } from '@app/oda-component/organizationchart';
import type { OverlayBadgePassThroughOptions } from '@app/oda-component/overlaybadge';
import type { OverlayPanelPassThroughOptions } from '@app/oda-component/overlaypanel';
import type { PaginatorPassThroughOptions } from '@app/oda-component/paginator';
import type { PanelPassThroughOptions } from '@app/oda-component/panel';
import type { PanelMenuPassThroughOptions } from '@app/oda-component/panelmenu';
import type { PassThroughOptions } from '@app/oda-component/passthrough';
import type { PasswordPassThroughOptions } from '@app/oda-component/password';
import type { PickListPassThroughOptions } from '@app/oda-component/picklist';
import type { PopoverPassThroughOptions } from '@app/oda-component/popover';
import type { ProgressBarPassThroughOptions } from '@app/oda-component/progressbar';
import type { ProgressSpinnerPassThroughOptions } from '@app/oda-component/progressspinner';
import type { RadioButtonPassThroughOptions } from '@app/oda-component/radiobutton';
import type { RadioButtonGroupPassThroughOptions } from '@app/oda-component/radiobuttongroup';
import type { RatingPassThroughOptions } from '@app/oda-component/rating';
import type { RippleDirectivePassThroughOptions } from '@app/oda-component/ripple';
import type { RowPassThroughOptions } from '@app/oda-component/row';
import type { ScrollPanelPassThroughOptions } from '@app/oda-component/scrollpanel';
import type { ScrollTopPassThroughOptions } from '@app/oda-component/scrolltop';
import type { SelectPassThroughOptions } from '@app/oda-component/select';
import type { SelectButtonPassThroughOptions } from '@app/oda-component/selectbutton';
import type { SidebarPassThroughOptions } from '@app/oda-component/sidebar';
import type { SkeletonPassThroughOptions } from '@app/oda-component/skeleton';
import type { SliderPassThroughOptions } from '@app/oda-component/slider';
import type { SpeedDialPassThroughOptions } from '@app/oda-component/speeddial';
import type { SplitButtonPassThroughOptions } from '@app/oda-component/splitbutton';
import type { SplitterPassThroughOptions } from '@app/oda-component/splitter';
import type { SplitterPanelPassThroughOptions } from '@app/oda-component/splitterpanel';
import type { StepPassThroughOptions } from '@app/oda-component/step';
import type { StepItemPassThroughOptions } from '@app/oda-component/stepitem';
import type { StepListPassThroughOptions } from '@app/oda-component/steplist';
import type { StepPanelPassThroughOptions } from '@app/oda-component/steppanel';
import type { StepPanelsPassThroughOptions } from '@app/oda-component/steppanels';
import type { StepperPassThroughOptions } from '@app/oda-component/stepper';
import type { StepsPassThroughOptions } from '@app/oda-component/steps';
import type { StyleClassDirectivePassThroughOptions } from '@app/oda-component/styleclass';
import type { TabPassThroughOptions } from '@app/oda-component/tab';
import type { TabListPassThroughOptions } from '@app/oda-component/tablist';
import type { TabMenuPassThroughOptions } from '@app/oda-component/tabmenu';
import type { TabPanelPassThroughOptions } from '@app/oda-component/tabpanel';
import type { TabPanelsPassThroughOptions } from '@app/oda-component/tabpanels';
import type { TabsPassThroughOptions } from '@app/oda-component/tabs';
import type { TabViewPassThroughOptions } from '@app/oda-component/tabview';
import type { TagPassThroughOptions } from '@app/oda-component/tag';
import type { TerminalPassThroughOptions } from '@app/oda-component/terminal';
import type { TextareaPassThroughOptions } from '@app/oda-component/textarea';
import type { TieredMenuPassThroughOptions } from '@app/oda-component/tieredmenu';
import type { TimelinePassThroughOptions } from '@app/oda-component/timeline';
import type { ToastPassThroughOptions } from '@app/oda-component/toast';
import type { ToggleButtonPassThroughOptions } from '@app/oda-component/togglebutton';
import type { ToggleSwitchPassThroughOptions } from '@app/oda-component/toggleswitch';
import type { ToolbarPassThroughOptions } from '@app/oda-component/toolbar';
import type { TooltipDirectivePassThroughOptions } from '@app/oda-component/tooltip';
import type { TreePassThroughOptions } from '@app/oda-component/tree';
import type { TreeSelectPassThroughOptions } from '@app/oda-component/treeselect';
import type { TreeTablePassThroughOptions } from '@app/oda-component/treetable';
import type { VirtualScrollerPassThroughOptions } from '@app/oda-component/virtualscroller';

export * from '@app/oda-component/core/config';
export { default } from '@app/oda-component/core/config';

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
