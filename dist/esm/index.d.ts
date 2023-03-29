/// <reference types="node" />
import { InitOptions, InstanceProperties, LayoutMode, UserId } from './types';
import EventEmitter from 'events';
export declare class DigitalSambaEmbedded extends EventEmitter {
    initOptions: Partial<InitOptions>;
    savedIframeSrc: string;
    allowedOrigin: string;
    connected: boolean;
    frame: HTMLIFrameElement;
    reportErrors: boolean;
    private stored;
    constructor(options?: Partial<InitOptions>, instanceProperties?: Partial<InstanceProperties>, loadImmediately?: boolean);
    static createControl: (initOptions: InitOptions) => DigitalSambaEmbedded;
    private mountFrame;
    load: (instanceProperties?: InstanceProperties) => void;
    private onMessage;
    private setupInternalEventListeners;
    private _emit;
    private handleInternalMessage;
    private emitUsersUpdated;
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
    changeLayoutMode: (mode: LayoutMode) => void;
    leaveSession: () => void;
    endSession: () => void;
    toggleToolbar: (show?: boolean) => void;
    requestToggleAudio: (userId: UserId, shouldMute?: boolean) => void;
    requestMute: (userId: UserId) => void;
    requestUnmute: (userId: UserId) => void;
    removeUser: (userId: UserId) => void;
    listUsers: () => import("./types").User[];
}
