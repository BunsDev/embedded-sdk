import { InitOptions, InstanceProperties, ReceiveMessageType } from "./types";
export declare class DigitalSambaEmbedded {
    initOptions: Partial<InitOptions>;
    savedIframeSrc: string;
    allowedOrigin: string;
    connected: boolean;
    frame: HTMLIFrameElement;
    eventHandlers: Partial<Record<ReceiveMessageType | "*", (payload: any) => void>>;
    reportErrors: boolean;
    constructor(options?: Partial<InitOptions>, instanceProperties?: Partial<InstanceProperties>, loadImmediately?: boolean);
    static createControl: (initOptions: InitOptions) => DigitalSambaEmbedded;
    private mountFrame;
    load: (instanceProperties?: InstanceProperties) => void;
    on: (type: ReceiveMessageType, handler: (payload: any) => void) => void;
    private onMessage;
    private setFrameSrc;
    private checkTarget;
    private sendMessage;
    private logError;
    private applyFrameProperties;
    enableVideo: () => void;
    disableVideo: () => void;
    toggleVideo: (enable?: boolean) => void;
    enableAudio: () => void;
    disableAudio: () => void;
    toggleAudio: (enable?: boolean) => void;
    startScreenshare: () => void;
    stopScreenshare: () => void;
    startRecording: () => void;
    stopRecording: () => void;
    showToolbar: () => void;
    hideToolbar: () => void;
}
