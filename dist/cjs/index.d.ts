/// <reference types="node" />
import EventEmitter from 'events';
import { PermissionManager } from './utils/PermissionManager';
import { LayoutMode } from './utils/vars';
import { BrandingOptionsConfig, CaptionsOptions, EmbeddedInstance, FeatureFlag, InitialRoomSettings, InitOptions, InstanceProperties, Stored, UserId, VirtualBackgroundOptions } from './types';
export declare class DigitalSambaEmbedded extends EventEmitter implements EmbeddedInstance {
    initOptions: Partial<InitOptions>;
    roomSettings: Partial<InitialRoomSettings>;
    savedIframeSrc: string;
    allowedOrigin: string;
    connected: boolean;
    frame: HTMLIFrameElement;
    reportErrors: boolean;
    stored: Stored;
    permissionManager: PermissionManager;
    constructor(options?: Partial<InitOptions>, instanceProperties?: Partial<InstanceProperties>, loadImmediately?: boolean);
    static createControl: (initOptions: Partial<InitOptions>, instanceProperties?: InstanceProperties) => DigitalSambaEmbedded;
    private mountFrame;
    load: (instanceProperties?: InstanceProperties) => void;
    private onMessage;
    private setupInternalEventListeners;
    private _emit;
    private handleInternalMessage;
    private emitUsersUpdated;
    private emitRoomStateUpdated;
    private emitFeatureSetUpdated;
    private setFrameSrc;
    private checkTarget;
    private sendMessage;
    private logError;
    private applyFrameProperties;
    get roomState(): import("./types").RoomState;
    get localUser(): import("./types").User;
    get features(): import("./types").FeatureSet;
    featureEnabled(feature: FeatureFlag): boolean;
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
    changeToolbarPosition: (side: 'left' | 'right' | 'bottom') => void;
    changeBrandingOptions: (brandingOptionsConfig: Partial<BrandingOptionsConfig>) => void;
    changeLayoutMode: (mode: LayoutMode) => void;
    leaveSession: () => void;
    endSession: () => void;
    toggleToolbar: (show?: boolean) => void;
    requestToggleAudio: (userId: UserId, shouldMute?: boolean) => void;
    requestMute: (userId: UserId) => void;
    requestUnmute: (userId: UserId) => void;
    removeUser: (userId: UserId) => void;
    listUsers: () => import("./types").User[];
    getUser: (userId: UserId) => import("./types").User;
    showCaptions: () => void;
    hideCaptions: () => void;
    toggleCaptions: (show?: boolean) => void;
    configureCaptions: (options: Partial<CaptionsOptions>) => void;
    raiseHand: () => void;
    lowerHand: (target?: UserId) => void;
    allowBroadcast: (userId: UserId) => void;
    disallowBroadcast: (userId: UserId) => void;
    allowScreenshare: (userId: UserId) => void;
    disallowScreenshare: (userId: UserId) => void;
    configureVirtualBackground: (options: VirtualBackgroundOptions) => void;
    enableVirtualBackground: (options: VirtualBackgroundOptions) => void;
    disableVirtualBackground: () => void;
    muteFrame: () => void;
    unmuteFrame: () => void;
    toggleMuteFrame: (mute?: boolean) => void;
    minimizeLocalTile: () => void;
    maximizeLocalTile: () => void;
    pinUser: (userId: UserId, tile?: 'media' | 'screenshare') => void;
    unpinUser: () => void;
    fullscreenUser: (userId: UserId, tile?: 'media' | 'screenshare') => void;
    unfullscreenUser: () => void;
    minimizeContent: () => void;
}
export default DigitalSambaEmbedded;
