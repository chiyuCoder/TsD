declare namespace PhotoClip{
    export type Selector = string | HTMLElement;
    interface LRZOption {
        width: number;
        height: number;
        quality: number;
    }
    interface Style{
        maskColor: string;
        maskBorder: string;
        jpgFillColor: string;
    }
    interface ErrorMsg{
        noSupport: string;
        imgError: string;
        imgHandleError: string;
        imgLoadError: string;
        noImg: string;
        clipError: string;
    }
    export interface Options {
        size: number | [number, number];
        adaptive: string | [string, string];
        outputSize: number | [number, number];
        outputType: "jpg" | "png";
        outputQuality: number;
        maxZoom: number;
        rotateFree: boolean;
        view: Selector;
        file: Selector;
        ok: Selector;
        img: string;
        loadStart(file: File | string): void;
        loadComplete(imgElm: HTMLImageElement): void;
        loadError(errInfo: any, detailErrorInfo?: any): void;
        done(dataUrl: string): void;
        fail(errInfo: any): void;
        lrzOption: Partial<LRZOption>;
        style: Partial<Style>;
        errorMsg: Partial<ErrorMsg>
    }
}

declare class PhotoClip {
    constructor(container: PhotoClip.Selector, options:Partial<PhotoClip.Options>);
    public size(width: number, height: number): this;
    public load(src: string | File): this;
    public clear(): this;
    public rotate(): number;
    public rotate(angle: number, duration?: number): this;
    public scale(): number;
    public scale(zoom: number, duration?: number): this;
    public clip(): string;
    public destroy(): void;
} 

declare module "photoclip" {
    export default PhotoClip;
}
