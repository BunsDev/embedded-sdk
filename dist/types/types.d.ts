export declare enum LayoutMode {
    tiled = "tiled",
    auto = "auto"
}
export declare enum AppLayout {
    tiled = "tiled",
    tiled_content = "tiled_content"
}
export interface InitialRoomSettings {
    cameraEnabled: boolean;
    micEnabled: boolean;
    username: string;
    layoutMode: LayoutMode;
    showToolbar: boolean;
    showCaptions: boolean;
}
export type InitOptions = {
    root: HTMLElement;
    frame: HTMLIFrameElement;
    url: string;
    team: string;
    room: string;
    token?: string;
    roomSettings: Partial<InitialRoomSettings>;
};
export type FrameAttributes = {
    align: string;
    allow: string;
    allowFullscreen: boolean;
    frameBorder: string;
    height: string;
    longDesc: string;
    marginHeight: string;
    marginWidth: string;
    name: string;
    referrerPolicy: ReferrerPolicy;
    scrolling: string;
    src: string;
    srcdoc: string;
    width: string;
} & HTMLElement;
export interface InstanceProperties {
    frameAttributes?: Partial<FrameAttributes>;
    reportErrors?: boolean;
}
export type SendMessageType = 'connect' | 'enableVideo' | 'enableAudio' | 'disableVideo' | 'disableAudio' | 'toggleVideo' | 'toggleAudio' | 'startScreenshare' | 'stopScreenshare' | 'startRecording' | 'stopRecording' | 'showToolbar' | 'hideToolbar' | 'toggleToolbar' | 'changeLayoutMode' | 'leaveSession' | 'endSession' | 'requestToggleAudio' | 'requestMute' | 'requestUnmute' | 'removeUser' | 'showCaptions' | 'hideCaptions' | 'toggleCaptions' | 'configureCaptions' | 'raiseHand' | 'lowerHand' | 'allowBroadcast' | 'disallowBroadcast' | 'allowScreenshare' | 'disallowScreenshare';
export type ReceiveMessageType = 'connected' | 'userJoined' | 'userLeft' | 'roomJoined' | 'videoEnabled' | 'videoDisabled' | 'audioEnabled' | 'audioDisabled' | 'screenshareStarted' | 'screenshareStopped' | 'recordingStarted' | 'recordingStopped' | 'recordingFailed' | 'layoutModeChanged' | 'activeSpeakerChanged' | 'appError' | 'captionsSpokenLanguageChanged' | 'captionsFontSizeChanged' | 'permissionsChanged' | 'handRaised' | 'handLowered';
export interface SendMessage<D> {
    type: SendMessageType;
    data?: D;
}
export interface ReceiveMessage {
    DSPayload: {
        type: ReceiveMessageType;
        data: unknown;
    };
}
export type UserId = string;
export interface User {
    avatarColor: string;
    id: UserId;
    name: string;
    role: string;
    kind: 'local' | 'remote';
}
export type CaptionsSpokenLanguage = 'zh' | 'zh-CN' | 'zh-TW' | 'da' | 'nl' | 'en' | 'en-AU' | 'en-GB' | 'en-IN' | 'en-NZ' | 'en-US' | 'fr' | 'fr-CA' | 'de' | 'hi' | 'hi-Latn' | 'id' | 'it' | 'ja' | 'ko' | 'no' | 'pl' | 'pt' | 'pt-BR' | 'pt-PT' | 'ru' | 'es' | 'es-419' | 'sv' | 'ta' | 'tr' | 'uk';
type CaptionsFontSize = 'small' | 'medium' | 'large';
export interface CaptionsOptions {
    spokenLanguage: CaptionsSpokenLanguage;
    fontSize: CaptionsFontSize;
}
export type UsersList = Record<UserId, User>;
interface Permissions {
}
export interface RoomState {
    media: {
        cameraEnabled: boolean;
        micEnabled: boolean;
    };
    layout: {
        mode: LayoutMode;
        presentation: AppLayout;
        showToolbar: boolean;
        toolbarPosition: 'left' | 'right' | 'bottom';
    };
    captionsState: {
        showCaptions: boolean;
    } & CaptionsOptions;
}
export interface Stored {
    users: UsersList;
    localUserPermissions: Partial<Permissions>;
    activeSpeaker?: UserId;
    roomState: RoomState;
}
export {};
