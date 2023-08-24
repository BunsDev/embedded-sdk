"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultStoredState = exports.PermissionTypes = exports.LayoutMode = exports.internalEvents = exports.CONNECT_TIMEOUT = void 0;
exports.CONNECT_TIMEOUT = 10000;
exports.internalEvents = {
    roomJoined: true,
    documentEvent: true,
};
var LayoutMode;
(function (LayoutMode) {
    LayoutMode["tiled"] = "tiled";
    LayoutMode["auto"] = "auto";
})(LayoutMode = exports.LayoutMode || (exports.LayoutMode = {}));
var PermissionTypes;
(function (PermissionTypes) {
    PermissionTypes["broadcast"] = "broadcast";
    PermissionTypes["manageBroadcast"] = "manage_broadcast";
    PermissionTypes["endSession"] = "end_session";
    PermissionTypes["startSession"] = "start_session";
    PermissionTypes["removeParticipant"] = "remove_participant";
    PermissionTypes["screenshare"] = "screenshare";
    PermissionTypes["manageScreenshare"] = "manage_screenshare";
    PermissionTypes["recording"] = "recording";
    PermissionTypes["generalChat"] = "general_chat";
    PermissionTypes["remoteMuting"] = "remote_muting";
    PermissionTypes["askRemoteUnmute"] = "ask_remote_unmute";
    PermissionTypes["raiseHand"] = "raise_hand";
    PermissionTypes["manageRoles"] = "manage_roles";
})(PermissionTypes = exports.PermissionTypes || (exports.PermissionTypes = {}));
const getDefaultStoredState = () => ({
    userId: '',
    roomState: {
        frameMuted: false,
        media: {
            audioEnabled: false,
            videoEnabled: false,
        },
        layout: {
            mode: LayoutMode.tiled,
            showToolbar: true,
            toolbarPosition: 'left',
            localTileMinimized: false,
        },
        captionsState: {
            showCaptions: false,
            spokenLanguage: 'en',
            fontSize: 'medium',
        },
        virtualBackground: {
            enabled: false,
        },
    },
    users: {},
    features: {
        chat: false,
        contentLibrary: false,
        captions: false,
        qa: false,
        endSession: false,
        fullScreen: false,
        languageSelection: false,
        minimizeOwnTile: false,
        participantsList: false,
        pin: false,
        screenshare: false,
        whiteboard: false,
        recordings: false,
        virtualBackgrounds: false,
        raiseHand: true,
        invite: false,
    },
});
exports.getDefaultStoredState = getDefaultStoredState;
