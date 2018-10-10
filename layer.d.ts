type stringWidth = string;
type stringHeight = string;
type stringX = string;
type stringY = string;
type opacity = number;
type color = string;
type index = number;
type InformationLayerIndex = 0;
type WebpageLayerIndex = 1;
type IFrameLayerIndex = 2;
type LoadingLayerIndex = 3;
type TipsLayerIndex = 4;
type LayerTypeIndex = InformationLayerIndex 
        | WebpageLayerIndex 
        | IFrameLayerIndex 
        | LoadingLayerIndex 
        | TipsLayerIndex;
type LayerAnimeIndexOfNull = -1;
type LayerAnimeIndexOfLinearScale = 0;
type LayerAnimeIndexOfDropFromTop = 1;
type LayerAnimeIndexOfSlideFromBottom = 2;
type LayerAnimeIndexOfSlideFromLeft = 3;
type LayerAnimeIndexOfSlideFromRight = 4;
type LayerAnimeIndexOfFade = 5;
type LayerAnimeIndexOfShake = 6;
type LayerAnimeIndex = LayerAnimeIndexOfNull 
        | LayerAnimeIndexOfLinearScale 
        | LayerAnimeIndexOfDropFromTop 
        | LayerAnimeIndexOfSlideFromBottom 
        | LayerAnimeIndexOfSlideFromLeft 
        | LayerAnimeIndexOfSlideFromRight 
        | LayerAnimeIndexOfFade;
interface BaseParams {
    type: LayerTypeIndex; 
    title: string | string[] | boolean;
    content: string | Element | string[];
    skin: string; // = ''
    area: string | [stringWidth, stringHeight];
    offset: string | [stringX, stringY];
    icon: number;//默认皮肤可以传入0-6如果是加载层，可以传入0-2。
    btn: string | string[];
    btnAlign: "l" | "c" | 'r';
    closeBtn: string | boolean;
    shade: opacity | [opacity, color];//=0.3
    shadeClose: boolean;//=false
    time: number; // = 0
    id: string;// = ''
    anim: LayerAnimeIndex;
    isOutAnim: boolean;//=true
    maxmin: boolean;//=false
    fixed: boolean;//=true;
    resize: boolean;//=true
    resizing(layero: HTMLElement): void;//=null
    scrollbar: boolean;//true
    maxWidth: number;//360
    maxHeight: number;//undefined
    zIndex: number;//19891014
    move: boolean;//false
    moveOut: boolean;//false
    moveEnd(layero: HTMLElement): void;//false
    tips: number | [number, color];
    tipsMore: boolean; //false
    success(layero: HTMLElement, index: number): void;
    yes(index: number, layero: HTMLElement): void;
    cancel(index: number, layero: HTMLElement): void;
    end(index: number, layero: HTMLElement): void;
    end(index: number, layero: HTMLElement): void;
    full(layero: HTMLElement): void;
    min(layero: HTMLElement): void;
    restore(layero: HTMLElement): void;
}

interface initParams extends BaseParams{
    path: string;
    extend: string;
}
type TabItem = {
    title: string;
    content: string;
}
interface TabParams extends BaseParams{
    tab: TabItem[]
}
interface PhotoParams extends BaseParams{
    photos: string;//json或者选择器
    tab(pic: any, layero: HTMLElement): void;
}

type IndexCallBack = (index) => void;
type EmptyCallBack = () => void;
type Option = Partial<BaseParams>;
type LayerName = 'dialog' | 'page' | 'iframe' | 'loading' | 'tips'; 
type YesCallback = (index: index, elm: HTMLElement[]) => void;
declare interface layer {
    config(opt: Partial<initParams>): any;
    ready(callback: Function): any;
    open(opt?: Option, yes?: YesCallback): index;
    alert(opt: Option, yes?: YesCallback): index;
    alert(content: string, yes?: YesCallback): index;
    alert(content: string, opt?: Option, yes?: YesCallback): index;
    confirm(content: string, opt?: Option, yes?: IndexCallBack, cancel?: IndexCallBack): index;
    confirm(content: string, yes?: IndexCallBack, cancel?: IndexCallBack): index;
    msg(content: string, end?: IndexCallBack): index;
    msg(content: string, opt?: Option, end?: IndexCallBack): index;
    load(icon?: number, opt?: Option): index;
    tips(content: string, follow?: string, opt?: Option): index;
    tips(content: string, callback?: EmptyCallBack): index;
    close(index: index): any;
    closeAllType(type?: LayerName);
    style(index: index, cssStyle: CSSStyleDeclaration): any;
    title(title: string, index: index): any;
    getChildFrame(selector: any, index: index): any;
    getFrameIndex(windowName: any): any;
    iframeAuto(index: any):any;
    iframeSrc(index: any, url: string): any;
    setTop(layero: HTMLElement): any;
    full(): any;
    min(): any;
    restore(): any;
    prompt(yes?:(value: any, index: index, elm: HTMLElement) => void): any;
    prompt(opt?: Option, yes?: (value: any, index: index, elm: HTMLElement) => void): any;
    tab(opt?: Partial<TabParams>): any;
    photos(opt?: Partial<PhotoParams>)
}
declare let layer: layer;

//注所有any类型的均为作者未知类型，并不代码其实际类型

