var jsVersion = '0.1.0 - May,29 2017 11:17';
var namespace = {
    APP_ID: /^win/.test(process.platform) && /FULLClient/.test(process.execPath) ? "FULL" : "AnywhereWorks",
    HIDDEN_CONTAINER: "HiddenWindow",
    CONTAINER_CHAT: "AnyWhereWorks",
    CONTAINER_CHAT_ALIAS: "Chat",
    CONTAINER_SB: "FULL",
    CONTAINER_V2: "V2",
    CONTAINER_TIMER: "Timer",
    CONTAINER_V2_SOFTPHONE: "V2SoftPhone",
    ZOOMIN: "ZoomIn",
    ZOOMOUT: "ZoomOut",
    ENABLE: "enable",
    DISABLE: "disable",
    BOTH: "Both",
    ALL: "All",
    ZOOMIN_LIMIT: 9,
    ZOOMOUT_LIMIT: -8,
    ZOOM_ACTUAL_SIZE: 0,
    ZOOM_FACTOR: 1
};

function PostToBackground(operationType) {
    this.name = "PostToBackground";
    this.choice = operationType;
    this.menuActions = {
        name: "menuActions",
        eType: "menuActions",
        opt: null
    };
}

var analytics = {
    TAB_LOAD: "TabLoad",
    TAB_ONLOAD: "TabOnload",
    FETCH: "Fetch",
    TAB_CLOSE: "TabClose",
    TAB_XCLOSE: "TabXClose",
    TAB_XCLOSE_Cancel: "TabXClosePopupCancel",
    V2_CLOSED: "V2Closed",
    RELOAD_V2: "ReloadV2",
    APP_CLEAR_CACHE: "AppClearCache",
    BACKUP_FORM: "BackUpForm",
    APP_ABNORMAL_QUIT: "AppCrashed",
    APP_CLOSED: "AppClosed",
    FULLCREATIVE_PAGE: "FULLCreativeWebsite",
    INCOGNITO_LINK: "IncognitoLinkLoaded",
    TIMERWIDGET_DROPDOWN: "TimerDropDown",
    TIMERWIDGET_TAB_DROPDOWN: "TabTimerDropDown",
    MAX_LOADED_TABS: "MaxLoadedTab",
    CHAT_ICON_CLICKED: "ChatIconClicked",
    REFETCH_RECENT_CLICKED: "RefetchRecentClicked",
    FEEDBACK_CLICKED: "FeedbackClicked",
    SENDING_FEEDBACK_BEGIN: "SendingFeedbackBegin",
    FEEDBACK_SUCCESS: "FeedbackSentSuccessfully",
    FEEDBACK_FAILED: "FeedbackFailed",
    NETWORK_STRENGTH_CLICKED: "NetworkStrengthClicked",
    UPDATE_BTN_CLICKED: "UpdateButtonClicked",
    UPDATE_LATER_CLICKED: "UpdateLaterClicked",
    WIPE_DATA: "AppWipeData"
};

function ImageCapture(frameName, encodedImg, feedbackId) {
    this.name = "image";
    this.frame = frameName;
    this.img = encodedImg;
    this.parentId = feedbackId;
}

function TabLock(text, isInformational) {
    if (typeof text != "string") {
        return {};
    }
    this.name = "tabLock";
    this.url = location.href;
    this.enableLock = true;
    this.dialog = {
        informational: isInformational ? true : false,
        text: text ? text : "Do you wish to force close the tab?"
    };
}

function TimerCommunication(opt, connId) {
    this.name = "TimerCommunication";
    this.setOperation.apply(this, arguments);
    this.setConnectionInfo = {
        name: "setConnectionInfo",
        DAIM: null
    };
    this.updateConnectionInfo = {
        name: "updateConnectionInfo",
        DAIM: null,
        status: null
    };
    this.closeConnection = {
        name: "closeConnection"
    };
}

TimerCommunication.prototype.setOperation = function(opt, connId) {
    if (opt && connId && new RegExp(opt, "ig").test([ "setConnectionInfo", "updateConnectionInfo", "closeConnection" ])) {
        this.opt = opt;
        this.connId = connId;
        return true;
    }
    throw new Error("Specified Operation is not available");
};

function SBcommunication(operationType) {
    if (operationType) operationCycle = operationType; else operationCycle = null;
    this.name = "sbCommunication";
    this.opt = operationCycle;
    this.accountOpt = {
        url: "",
        name: "accountOpt",
        opt: null
    };
    this.resizeContainer = {
        name: "resizeContainer",
        w: null,
        h: null
    };
    this.statusPush = {
        name: "statusPush",
        status: null
    };
}

function V2Communication(operationType) {
    var v2Options = [ "statusPush", "outbound", "getStatus", "reloadJS", "close" ], statusTypes = {
        name: "statusTypes",
        _available: "Available",
        _break: "Break",
        _meeting: "Meeting",
        _systemissues: "System",
        _personaltime: "Personal",
        _offline: "Offline"
    };
    var sbOpt = {
        name: "sbOpt",
        account: "accountOpt",
        status: "statusPush",
        _event: "_event",
        webtab: "webtab"
    };
    if (operationType) operationCycle = operationType; else operationCycle = v2Options;
    this.name = "v2Communication";
    this.opt = operationCycle;
    this.resizeContainer = {
        name: "resizeContainer",
        w: null,
        h: null
    };
    this.visibility = {
        name: "visibility",
        isShow: false
    };
    this.statusPush = statusTypes;
    this.isInterruptible = false;
    this.getStatus = v2Options;
    this.outbound = {
        name: "outbound",
        phoneNumber: ""
    };
    this.queryAndGetTabSource = {
        name: "queryAndGetTabSource",
        paramName: null,
        paramValue: null
    };
    this.close = false;
}

function WidgetTimer(operationType) {
    var operation = operationType ? operationType : false;
    this.name = "widgettimer";
    this.opt = operation;
    this.toWidgetContainer = {
        name: "toWidgetContainer",
        data: {}
    };
    this.toSbwindow = {
        name: "toSbwindow",
        data: {}
    };
    this.setHeightWidth = {
        name: "setHeightWidth",
        data: {}
    };
}

function ClientListener(lOperation) {
    var operation = lOperation ? lOperation : false;
    this.name = "clientlistener";
    this.opt = operation;
    this.count = {
        name: "count",
        target: "chat",
        count: undefined
    };
    this.showUpdatePopup = {
        name: "showUpdatePopup",
        domain: location.origin,
        gitRepoName: null,
        version: null,
        restartBtnName: null,
        cancelBtnName: null
    };
    this.hideUpdatePopup = {
        name: "hideUpdatePopup"
    };
    this.restartBtnClick = {
        name: "restartBtnClick"
    };
    this.cancelBtnClick = {
        name: "cancelBtnClick"
    };
    this.extensions = {
        name: "extensions",
        emittype: undefined,
        message: undefined
    };
    this.accessToken = {
        name: "accessToken",
        token: null
    };
    this.blur = {
        name: "blur",
        domain: location.origin
    };
    this.focus = {
        name: "focus",
        domain: location.origin
    };
    this.badgelabel = {
        name: "badgelabel",
        count: undefined
    };
    this.notify = {
        name: "notify",
        title: undefined,
        body: undefined,
        sec: undefined,
        icon: undefined
    };
    this.show = {
        name: "show",
        target: "chat"
    };
    this.hide = {
        name: "hide",
        target: "chat"
    };
    this.getstate = {
        name: "getstate"
    };
    this.requestattention = {
        name: "requestattention",
        isContinuous: false
    };
    this.restart = {
        name: "restart"
    };
    this.readFromClipboard = {
        name: "readFromClipboard"
    };
    this.loadwebsite = {
        name: "loadwebsite",
        isFullwork: undefined,
        isBrowserLoad: undefined,
        url: undefined
    };
    this.loadaccount = {
        name: "loadaccount",
        accountnumber: undefined
    };
    this.goclock = {
        name: "goclock",
        isStop: undefined,
        daim: 0
    };
    this.enableOnTop = {
        name: "enableOnTop"
    };
    this.disableOnTop = {
        name: "disableOnTop"
    };
    this.storeinbuffer = {
        name: "storeinbuffer",
        value: null
    };
    this.setv2status = {
        name: "setv2status",
        status: null
    };
    this.getv2status = {
        name: "getv2status"
    };
    this.download = {
        name: "download",
        filename: undefined,
        mimetype: undefined,
        url: undefined,
        contentlength: undefined,
        isViewable: false
    };
    this.toGuestPage = {
        name: "toGuestPage",
        guest: {
            source: location.href,
            destination: null
        },
        data: {}
    };
}

function Application(opt) {
    this.name = "Application";
    this.apps = {
        v2: "v2container",
        ibr: "inbuiltrouting",
        ic: "inbuiltchat",
        ch: "chatclient",
        sb: "sbcontainer",
        sp: "statuspanel",
        afk: "awayfromkeyboard",
        ecm: "enablecallcenterchatmode",
        mop: "menuoptions"
    };
    this.opt = opt ? opt : "open";
    this.close = {
        name: "close",
        appname: false
    };
    this.hide = {
        name: "hide",
        appname: false
    };
    this.show = {
        name: "show",
        appname: false
    };
    this.open = {
        name: "open",
        appname: false
    };
    this.quit = {
        name: "quit",
        callee: false
    };
    this.maximize = {
        name: "maximize",
        callee: false
    };
    this.collectfeedback = {
        name: "collectfeedback",
        userFeedback: null,
        isFromChatModule: false
    };
    this.clearCache = {
        name: "clearCache"
    };
    this.checkForUpdates = {
        name: "checkForUpdates"
    };
    this.onFocus = {
        name: "onFocus"
    };
    this.zoomIn = {
        name: "zoomIn"
    };
    this.zoomOut = {
        name: "zoomOut"
    };
    this.resetZoom = {
        name: "resetZoom"
    };
    this.menuoptions = {
        name: "menuoptions",
        opt: undefined,
        showoption: {
            name: "showoption",
            optionname: undefined
        },
        hideoption: {
            name: "hideoption",
            optionname: undefined
        }
    };
}

function LogsAck(id) {
    this.name = "captureLogs";
    this.opt = "captureLogs";
    this["captureLogs"] = {
        uniqueId: id
    };
    this["clearLogs"] = {
        name: "clearLogs"
    };
}

function LogACK(opt) {
    this.name = "LogACK";
    this.opt = opt;
    this["captureLogs"] = {
        name: "captureLogs",
        uniqueId: null
    };
    this["clearLogs"] = {
        name: "clearLogs"
    };
}

function Thinclient(lOpt, eventType, extension) {
    this.name = "thinclient";
    this.opt = lOpt ? lOpt : false;
    this.state = {
        name: "state",
        origin: null,
        visible: false,
        ext: extension ? extension : "chat",
        etype: eventType ? eventType : "click",
        extIsHide: false,
        window: {
            isMinimized: false,
            isBlured: false,
            isFocused: false
        }
    };
    this.menu = {
        name: "menuevent",
        metainfo: {
            menu: null,
            menuitem: null,
            eventType: "click"
        }
    };
    this.v2Status = {
        name: "v2Status",
        status: null
    };
    this.readFromClipboard = {
        name: "readFromClipboard",
        text: null,
        type: null,
        image: {
            dataUri: null,
            size: null,
            isEmpty: true
        }
    };
    this.extensions = {
        name: "extensions",
        type: undefined,
        message: undefined
    };
    this.notify = {
        name: "notify",
        isEvent: false
    };
    this.afk = {
        name: "afk",
        status: "user-away"
    };
    this.tabSourceQueryResult = {
        name: "tabSourceQueryResult",
        result: {
            src: null,
            params: null
        },
        query: {}
    };
    this.networkDetection = {
        name: "networkDetection",
        isUp: true
    };
    this.downloadFileInfo = {
        name: "downloadFileInfo",
        originalObject: null,
        downloadedPercentage: null,
        downloadedMB: null
    };
}

"use strict";

var _require = require("electron"), app = _require.app, BrowserWindow = _require.BrowserWindow, ipcMain = _require.ipcMain;

app.commandLine.appendSwitch("remote-debugging-port", "9222");

var Emitter = new (require("events").EventEmitter)();

app.on("ready", function() {
    WindowManager.openHiddenContainer();
    WindowManager.openChatContainer();
});

var __BrowserWindow = getBrowserWindowConstructor();

function getBrowserWindowConstructor() {
    if (require && typeof window == "undefined") {
        return require("electron").BrowserWindow;
    } else if (FULLClient.require) {
        var remote = util.getRemote();
        return require("electron").remote.BrowserWindow;
    }
}

function WindowCreator(url, options, cb) {
    this.url = url;
    this.options = options;
    this.cb = cb || function() {};
    this._windowInstance = null;
    this.open();
    this.addDefaultListerners();
}

WindowCreator.prototype.addDefaultListerners = function() {
    this.listenCrash();
};

WindowCreator.prototype.listenCrash = function() {
    var appWin = this.get();
    var windowInfo = {
        title: path.basename(this.url, ".html"),
        url: this.url,
        id: appWin.id
    };
    appWin.webContents.on("crashed", function() {
        console.log("Crashed :: " + windowInfo.title + " id: " + windowInfo.id);
        Emitter.emit("RendererCrash", windowInfo);
    });
};

WindowCreator.prototype.open = function() {
    if (this.url) {
        this._windowInstance = new __BrowserWindow(this.options);
        this._windowInstance.loadURL(this.url, {
            extraHeaders: "pragma: no-cache\n"
        });
        this.hideMenuBar();
        this.show();
        this.onClose();
    }
};

WindowCreator.prototype.get = function(cb, context) {
    if (this._windowInstance) {
        var appWindow = this._windowInstance;
        if (cb) {
            cb.call(context || null, appWindow);
        } else {
            return appWindow;
        }
    }
};

WindowCreator.prototype.hideMenuBar = function() {
    var appWin = this.get();
    appWin.setMenuBarVisibility(false);
};

WindowCreator.prototype.onClose = function() {
    var appWin = this.get();
    appWin.once("closed", function() {
        if (this && this.url) {
            console.log("onclosed ?? :: " + this.url);
            ipcController.removeContainer(this.url);
        }
    }.bind(this));
};

WindowCreator.prototype.show = function() {
    var appWin = this.get();
    if (this.options && this.options.show) appWin.show();
};

WindowCreator.prototype.hide = function() {
    var appWin = this.get();
    appWin.hide();
};

var windowEventsController = {
    eventHandler: function(container, eType, paramsObj) {
        if (container) switch (eType.toLowerCase()) {
          case "enableontop":
            {
                container.setAlwaysOnTop(true);
                !container.isFocused() ? container.show() : false;
            }

          case "show":
            {
                container.show();
                break;
            }

          case "focus":
            {
                container.focus();
                break;
            }

          case "hide":
            {
                if (!container.isFullScreen()) container.hide();
                break;
            }

          case "setPosition":
            {
                container.setPosition(paramsObj.x, paramsObj.y);
                break;
            }

          case "disableontop":
            {
                container.setAlwaysOnTop(false);
                break;
            }

          case "restore":
            {
                container.restore();
                break;
            }

          case "minimize":
            {
                container.minimize();
                break;
            }

          case "maximize":
            {
                container.maximize();
                break;
            }

          case "setsize":
            {
                var specs = container.getSize();
                var width = paramsObj.width ? paramsObj.width : specs[0];
                var height = paramsObj.height ? paramsObj.height : specs[1];
                container.setSize(width, height);
            }

          case "blur":
            {
                container.blur();
                break;
            }

          case "showinactive":
            {
                container.showInactive();
                break;
            }

          case "bounce":
            {
                container.flashFrame(true);
            }

          default:
            {
                console.log("Default event in windows Events handler");
                break;
            }
        }
    }
};

var path = require("path");

var util = {
    name: "Utilities",
    log: function() {
        var tmp = [];
        for (var i = arguments.length - 1; i >= 0; i--) {
            tmp[i] = arguments[i];
        }
        tmp.splice(0, 0, "[" + this.name + "] : ");
    }
};

var WindowManager = {
    name: "WindowManager",
    log: function() {
        console.log.apply(console, arguments);
    },
    getAllWindows: function() {
        return typeof __BrowserWindow != "undefined" ? __BrowserWindow.getAllWindows() : [];
    },
    getWindowById: function(id) {
        return parseInt(id) && typeof __BrowserWindow != "undefined" ? __BrowserWindow.fromId(id) : false;
    },
    getConfig: function() {
        if (!this.config) {
            try {
                this.config = require(path.join(process.resourcesPath, "app", "config", "config.json"));
            } catch (e) {
                this.config = require(path.join(process.cwd(), "config", "config.json"));
            }
        }
        return this.config;
    },
    getContainerPreload: function() {
        return path.join(this.getFilePath(), "assets/js/preload/preloadContainer.js");
    },
    getHiddenWindowPreload: function() {
        return path.join(this.getFilePath(), "assets/js/preload/preloadHiddenWindow.js");
    },
    getwebPreload: function() {
        var manifest = require(path.join(this.getFilePath(), "package.json"));
        arr = manifest.main.match(/(.*asar)/g);
        asarPath = arr && arr.length ? "/" + arr[0] : "/asar/full.asar";
        return path.join(this.getFilePath(), asarPath, "webPreload.min.js");
    },
    getFilePath: function() {
        if (this.getConfig() && this.getConfig().mode == "code") {
            return process.cwd();
        } else {
            return path.join(path.join(process.resourcesPath, "app"));
        }
    },
    openHiddenContainer: function() {
        console.log("Hidden Window is getting opened !! ");
        var filepath = this.getFilePath();
        var hiddenWindow = new WindowCreator("file://" + this.getFilePath() + "/view/hiddenWindow.html", {
            title: namespace.HIDDEN_CONTAINER,
            width: 1100,
            height: 680,
            fullscreen: false,
            kiosk: false,
            show: true,
            minWidth: 1100,
            minHeight: 680,
            webPreferences: {
                preload: this.getHiddenWindowPreload(),
                webSecurity: false,
                allowRunningInsecureContent: true,
                allowDisplayingInsecureContent: true
            }
        });
        hiddenWindow.get().openDevTools();
    },
    openWebContainer: function(isShowWindow) {
        this.log("WebContainer is getting opened !! ");
        if (emitterController.getContainer("FULL")) return;
        var WebContainer = new WindowCreator("file://" + this.getFilePath() + "/view/FULL.html", {
            title: namespace.CONTAINER_CHAT,
            width: 1152,
            height: 700,
            fullscreen: false,
            kiosk: false,
            center: true,
            minWidth: 1060,
            minHeight: 680,
            show: isShowWindow ? true : false,
            webPreferences: {
                preload: this.getContainerPreload(),
                webSecurity: false,
                allowDisplayingInsecureContent: true,
                allowRunningInsecureContent: true
            }
        });
        this.setSbHandler(WebContainer.get());
        return WebContainer.get();
    },
    setSbHandler: function(winRef) {
        winRef.on("focus", function(event) {
            Emitter.emit("onFocus", {
                container: "FULL"
            });
            lastFocussedWindow = namespace.CONTAINER_SB;
        });
        winRef.on("blur", function(event) {
            Emitter.emit("onBlur");
        });
    },
    setV2Handler: function(winRef) {
        winRef.on("focus", function(event) {
            Emitter.emit("onFocus", {
                container: "V2"
            });
        });
        winRef.on("blur", function(event) {
            Emitter.emit("onBlur");
        });
    },
    openV2Container: function(isShowWindow) {
        if (emitterController.getContainer("V2")) return;
        this.log("V2Container is getting opened !! ");
        var v2Container = new WindowCreator("file://" + this.getFilePath() + "/view/V2.html", {
            title: namespace.CONTAINER_V2,
            width: 550,
            height: 710,
            fullscreen: false,
            kiosk: false,
            center: true,
            show: isShowWindow ? true : false,
            minWidth: 550,
            minHeight: 710,
            webPreferences: {
                preload: this.getContainerPreload(),
                webSecurity: false,
                allowRunningInsecureContent: true,
                allowDisplayingInsecureContent: true
            }
        });
        this.setV2Handler(v2Container.get());
    },
    setChatHandler: function(winRef) {
        winRef.on("minimize", function() {
            var _tc = new Thinclient("state");
            _tc[_tc.opt]["window"]["isMinimized"] = true;
            emitterController.chatHandler(null, _tc);
        });
        winRef.on("focus", function(event) {
            Emitter.emit("onFocus", {
                container: "Chat"
            });
            lastFocussedWindow = namespace.CONTAINER_CHAT;
            var _tc = new Thinclient("state");
            _tc[_tc.opt]["window"]["isFocused"] = true;
            emitterController.chatHandler(null, _tc);
        });
        winRef.on("blur", function(event) {
            Emitter.emit("onBlur");
            var _tc = new Thinclient("state");
            _tc[_tc.opt]["window"]["isBlured"] = true;
            emitterController.chatHandler(null, _tc);
        });
        winRef.webContents.on("new-window", function(e) {
            e.preventDefault();
        });
    },
    openChatContainer: function() {
        this.log("ChatContainer is getting opened !! ");
        var filepath = this.getFilePath();
        var chatContainer = new WindowCreator("file://" + this.getFilePath() + "/view/AnyWhereWorks.html", {
            title: namespace.CONTAINER_CHAT,
            width: 1100,
            height: 680,
            fullscreen: false,
            kiosk: false,
            show: true,
            minWidth: 1100,
            minHeight: 680,
            webPreferences: {
                preload: this.getContainerPreload(),
                webSecurity: false,
                allowRunningInsecureContent: true,
                allowDisplayingInsecureContent: true
            }
        });
    },
    openTimerWidget: function(options) {
        if (emitterController.getContainer(namespace.CONTAINER_TIMER)) return;
        var timerContainer = new WindowCreator("file://" + this.getFilePath() + "/view/Timer.html", {
            title: "TimerWidget",
            alwaysOnTop: true,
            frame: false,
            show: false,
            width: 165,
            height: 85,
            maxWidth: 170,
            maxHeight: 273,
            x: options ? options.x : 0,
            y: options ? options.y : 0,
            webPreferences: {
                preload: this.getPreloadUrl()
            }
        });
        if (parseInt(process.versions["electron"].split(".")[1]) < 36) timerContainer.get().setAlwaysOnTop(true);
    },
    openSBMochaRunner: function() {
        this.log("ChatContainer is getting opened !! ");
        new WindowCreator("file://" + this.getFilePath() + "/tests/html/sbMochaRun.html", {
            title: "Mocha",
            width: 900,
            height: 600,
            fullscreen: false,
            kiosk: false,
            center: true,
            webPreferences: {
                preload: this.getPreloadUrl()
            }
        });
    },
    openSBJasmineRunner: function() {
        this.log("openSBJasmineRunner is getting opened !! ");
        new WindowCreator("file://" + this.getFilePath() + "/tests/jasmine/view/FULLJasmineRunner.html", {
            title: namespace.CONTAINER_CHAT + "-JasmineRunner",
            width: 1152,
            height: 700,
            fullscreen: false,
            kiosk: false,
            center: true,
            minWidth: 1060,
            minHeight: 680,
            show: true,
            webPreferences: {
                nodeIntegration: true,
                preload: this.getPreloadUrl()
            }
        });
    },
    openV2MochaRunner: function() {
        this.log("ChatContainer is getting opened !! ");
        new WindowCreator("file://" + this.getFilePath() + "/tests/html/v2MochaRun.html", {
            title: "Mocha",
            width: 900,
            height: 600,
            fullscreen: false,
            kiosk: false,
            center: true,
            webPreferences: {
                preload: this.getPreloadUrl()
            }
        });
    },
    openWebsite: function(url) {
        this.log("openWebsite is getting opened !! ");
        new WindowCreator(url, {
            title: "Website Loading....",
            width: 1152,
            height: 700,
            fullscreen: false,
            kiosk: false,
            center: true,
            webPreferences: {
                nodeIntegration: false
            }
        });
    }
};

Emitter.on("/windowManager/open/chat/container", WindowManager.openChatContainer.bind(WindowManager));

Emitter.on("/windowManager/open/sb/container", WindowManager.openWebContainer.bind(WindowManager));

Emitter.on("/windowManager/open/v2/container", WindowManager.openV2Container.bind(WindowManager));

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var messenger = require("../comm/messenger.js");

var userInfo = null;

var nativeImage;

var emitterController = {
    name: "emitterModule",
    containerCache: {
        v2Container: null,
        sbContainer: null,
        chatContainer: null
    },
    log: function log() {
        var tmp = [].slice.call(arguments);
        tmp.splice(0, 0, "[" + this.name + "] : ");
        console.log.apply(console, tmp);
    },
    debug: {
        _activateDebug: function _activateDebug() {},
        _deActivateDebug: function _deActivateDebug() {}
    },
    getContainer: function getContainer(title) {
        if (title) {
            switch (title) {
              case "Chat":
                {
                    title = "AnyWhereWorks";
                    break;
                }

              case namespace.CONTAINER_V2_SOFTPHONE:
                {
                    title = namespace.CONTAINER_SB;
                    break;
                }

              case namespace.CONTAINER_CHAT:
                {
                    title = "AnyWhereWorks";
                    break;
                }

              default:
                {
                    break;
                }
            }
            return this.containerCache[title] || this.setContainer(title);
        }
    },
    setContainer: function setContainer(title) {
        if (title) {
            this.containerCache[title] = this.getTarget({
                title: title
            });
            return this.containerCache[title];
        }
    },
    removeContainer: function removeContainer(url) {
        var title;
        if (url && (title = path.basename(url, ".html"))) {
            this.containerCache[title] = null;
        }
    },
    getTarget: function getTarget(lTarget) {
        console.log("searching for Target : ", lTarget);
        var targetArray = WindowManager.getAllWindows();
        for (var i = targetArray.length - 1; i >= 0; i--) {
            if (targetArray[i].getURL().indexOf(lTarget.title + ".html") !== -1) {
                this.log('container["' + lTarget.title + '"], available ');
                return targetArray[i];
            }
        }
    },
    openContainer: function openContainer(msg) {
        this.log(msg);
        switch (msg.title) {
          case "V2":
            {
                WindowManager.openV2Container();
                break;
            }

          case "FULL":
            {
                WindowManager.openWebContainer();
                break;
            }

          case "Chat":
            {
                WindowManager.openChatContainer();
                break;
            }

          case "sbMocha":
            {
                WindowManager.openSBMochaRunner();
                break;
            }

          case "sbJasmineRunner":
            {
                WindowManager.openSBJasmineRunner();
                break;
            }

          case "v2Mocha":
            {
                WindowManager.openV2MochaRunner();
                break;
            }

          case "Timer":
            {
                WindowManager.openTimerWidget(msg.options);
                break;
            }

          default:
            {
                break;
            }
        }
    },
    passInfo: function passInfo(containerTitle, msg) {
        if (typeof containerTitle == "string" && (typeof msg === "undefined" ? "undefined" : _typeof(msg)) == "object") {
            var targetWindow = this.getContainer(containerTitle);
            if (targetWindow && targetWindow.send) {
                targetWindow.send("msg-to-" + containerTitle, msg);
            }
        }
    },
    decider: function decider(msg) {
        this.log("Emitter message : ", msg);
        this.log("Decider Block : " + msg.eType);
        if (msg && msg.eType) {
            switch (msg.eType) {
              case "menuActions":
                {
                    Emitter.emit("switchZoomUI", msg.opt);
                    break;
                }

              case "transerInfo":
                {
                    this.transerInfo(msg);
                    break;
                }

              case "userInfo":
                {
                    userInfo = msg.userObj;
                    canQuitApp = false;
                    mainModuleLoader.skillBasedLoader();
                    break;
                }

              case "init":
                {
                    Emitter.emit("attachAppListeners");
                    break;
                }

              case "appQuit":
                {
                    canQuitApp = true;
                    this.passInfo("Chat", msg);
                    this.passInfo("V2", msg);
                    this.passInfo(namespace.CONTAINER_TIMER, msg);
                    this.passInfo = function() {};
                    break;
                }

              case "bounce":
                {
                    this.bounce(msg.opt);
                    break;
                }

              case "dockHide":
                {
                    this.hideDockIcon(msg.opt);
                    break;
                }

              case "setBadge":
                {
                    this.setBadge(msg.count);
                    break;
                }

              case "setOverlayIcon":
                {
                    this.setOverlayIcon(msg);
                    break;
                }

              case "getState":
                {
                    var _tc = new Thinclient();
                    this.passInfo("Chat", _tc);
                    break;
                }

              case "windowEvents":
                {
                    var container;
                    if (msg.id && parseInt(msg.id)) container = WindowManager.getWindowById(msg.id); else container = this.getContainer(msg.title);
                    windowEventsController.eventHandler(container, msg.opt, msg.paramObj);
                    break;
                }

              case "activateNewV2":
                {
                    console.log("New v2 switch is on..");
                    ipc.removeAllListeners("msg-to-V2");
                    ipc.on("msg-to-V2", emitterController.v2NewHandler);
                    break;
                }

              case "activateOldV2":
                {
                    console.log("New v2 switch is off..");
                    ipc.removeAllListeners("msg-to-V2");
                    ipc.on("msg-to-V2", emitterController.v2OldHandler);
                    break;
                }

              case "loadWebsiteInNewWindow":
                {
                    WindowManager.openWebsite(msg.url);
                    break;
                }

              case "reloadV2":
                {
                    this.passInfo("V2", msg);
                    break;
                }

              case "open":
                {
                    this.openContainer(msg);
                    break;
                }

              case "reLogin":
                {
                    userInfo = {};
                    canQuitApp = true;
                    this.passInfo("FULL", msg);
                    this.passInfo("Chat", msg);
                    this.passInfo("V2", msg);
                    this.passInfo(namespace.CONTAINER_TIMER, msg);
                    Emitter.emit("/network/boot/startup");
                    break;
                }

              case "isRestored":
                {
                    if (msg.container) {
                        switch (msg.container) {
                          case namespace.CONTAINER_V2:
                            {
                                crashManager.track.isV2 = false;
                                break;
                            }

                          case namespace.CONTAINER_SB:
                            {
                                crashManager.track.isSB = false;
                                break;
                            }

                          case namespace.CONTAINER_CHAT:
                            {
                                crashManager.track.isChat = false;
                                break;
                            }

                          default:
                            {
                                console.warn("Track : ", msg);
                                break;
                            }
                        }
                    }
                    break;
                }

              case "isCrashed":
                {
                    if (msg.container) {
                        switch (msg.container) {
                          case namespace.CONTAINER_V2:
                            {
                                this.passInfo(namespace.CONTAINER_V2, {
                                    name: "crashed",
                                    crashed: crashManager.track.isV2
                                });
                                break;
                            }

                          case namespace.CONTAINER_SB:
                            {
                                this.passInfo(namespace.CONTAINER_SB, {
                                    name: "crashed",
                                    crashed: crashManager.track.isSB
                                });
                                break;
                            }

                          case namespace.CONTAINER_CHAT:
                            {
                                this.passInfo(namespace.CONTAINER_CHAT, {
                                    name: "crashed",
                                    crashed: crashManager.track.isChat
                                });
                                break;
                            }

                          default:
                            {
                                console.warn("Track : ", msg);
                                break;
                            }
                        }
                    }
                    break;
                }

              case "dummyMessage":
                {
                    msg.isReply = true;
                    this.passInfo("FULL", msg);
                    this.passInfo("Chat", msg);
                    this.passInfo("V2", msg);
                    break;
                }

              case "crashReporter":
                {
                    if (msg.source) {
                        this.passInfo(msg.source, {
                            name: "crashReporter",
                            port: crashReportServer.port
                        });
                    }
                    break;
                }

              default:
                {
                    break;
                }
            }
        }
    },
    setBadge: function setBadge(count) {
        if (/^darwin/.test(process.platform)) {
            count ? app.dock.setBadge(count.toString()) : app.dock.setBadge("");
        }
    },
    setOverlayIcon: function setOverlayIcon(msg) {
        try {
            if (/^win32/.test(process.platform) && msg) {
                if (!nativeImage) nativeImage = require("electron").nativeImage;
                if (msg.dataURL) {
                    this.getContainer("Chat").setOverlayIcon(nativeImage.createFromDataURL(msg.dataURL), "");
                    return true;
                } else this.getContainer("Chat").setOverlayIcon(null, "");
                return false;
            }
        } catch (e) {
            console.log("SetoverLay error ", e.message);
            console.log("SetoverLay error ", e.stack);
        }
    },
    hideDockIcon: function hideDockIcon(count) {
        if (/^darwin/.test(process.platform)) {
            app.dock.hide();
        }
    },
    bounce: function bounce(isContinuous) {
        isContinuous ? app.dock.bounce("critical") : app.dock.bounce();
    },
    transerInfo: function transerInfo(msg) {
        this.log("transerInfo Block :", msg.target);
        var _target = this.getTarget(msg.target);
        if (_target && _target.send) _target.send("msg-from-main", msg);
    },
    v2OldHandler: function v2OldHandler(event, msg) {
        emitterController.passInfo("V2", msg);
    },
    v2NewHandler: function v2NewHandler(event, msg) {
        if (msg && /object/i.test(typeof msg === "undefined" ? "undefined" : _typeof(msg))) {
            msg.isForV2 = true;
            emitterController.passInfo(namespace.CONTAINER_V2_SOFTPHONE, msg);
        }
    },
    sbHandler: function sbHandler(event, msg) {
        emitterController.passInfo("FULL", msg);
    },
    chatHandler: function chatHandler(event, msg) {
        emitterController.passInfo("Chat", msg);
    },
    mainHandler: function mainHandler(msg) {
        emitterController.decider(msg);
    },
    timerHandler: function timerHandler(event, msg) {
        emitterController.passInfo(namespace.CONTAINER_TIMER, msg);
    }
};

messenger.subscribe("msg-to-Main", function(event) {
    console.log("message received  in main : " + event);
    emitterController.mainHandler(event.data);
});

var mainModuleLoader = {
    name: "mainModuleLoader",
    log: function() {
        console.log.apply(console, arguments);
    }
};

mainModuleLoader.skillBasedLoader = function() {
    console.log("skillBasedLoader ...");
    if (typeof userInfo != "undefined" && Object.keys(userInfo).length) {
        console.log("use contact available..");
        Emitter.emit("/user/contact/available");
        if (userInfo.isCEA) {
            this.customerExecutiveAssociate();
        } else if (userInfo.isFullWork) {
            console.log("chat mode ...");
            this.chatMode();
        } else {
            this.callCenterMode();
        }
    }
};

mainModuleLoader.customerExecutiveAssociate = function() {
    WindowManager.openWebContainer(true);
    windowEventsController.eventHandler(emitterController.getContainer(namespace.CONTAINER_CHAT), "show");
    if (/win/.test(process.platform)) windowEventsController.eventHandler(emitterController.getContainer(namespace.CONTAINER_CHAT), "restore");
    WindowManager.openV2Container(true);
};

mainModuleLoader.chatMode = function() {
    windowEventsController.eventHandler(emitterController.getContainer(namespace.CONTAINER_CHAT), "show");
    if (/win/.test(process.platform)) windowEventsController.eventHandler(emitterController.getContainer(namespace.CONTAINER_CHAT), "restore");
    WindowManager.openWebContainer(false);
    WindowManager.openV2Container(false);
};

mainModuleLoader.callCenterMode = function() {
    WindowManager.openWebContainer(true);
    WindowManager.openV2Container(false);
    windowEventsController.eventHandler(emitterController.getContainer(namespace.CONTAINER_CHAT), "hide");
};

try {
    var crashReporter, url, http, formidable, fs, FormData, request, path, socks, getPort;
    try {
        crashReporter = require("electron").crashReporter;
        url = require("url");
        http = require("http");
        formidable = require("formidable");
        fs = require("fs");
        FormData = require("form-data");
        request = require("request");
        path = require("path");
        getPort = require("get-port");
    } catch (e) {
        console.log("Required module not found : " + e.message);
        throw new Error("Stop all Crash service " + e.message);
    }
    getPort(function(err, port) {
        crashReportServer.port = port;
        crashReportServer.startCrashReporter();
        crashReportServer.startIncomingPort();
    });
    var crashReportServer = {
        instance: null,
        port: null,
        name: "CrashReportServer",
        log: function() {
            console.log.apply(console, arguments);
        },
        checkCharacterLimit: function(UserInfo) {
            this.log("Reached checkCharacterLimit function : UserInfo len:", UserInfo.length);
            if (UserInfo && UserInfo.length <= 500) {
                this.log("UserInfo less than 500.");
                return UserInfo;
            } else {
                this.log("UserInfo >500. So truncating..!", UserInfo.substring(0, 499));
                return UserInfo.substring(0, 499);
            }
        },
        startCrashReporter: function() {
            crashReporter.start({
                productName: "FULLClient-Electron",
                companyName: "FULLCreative",
                autoSubmit: true,
                submitURL: "http://localhost:" + this.port + "/crashreporter",
                extra: {
                    githuburl: "https://github.com/kamesh-a",
                    email: "kamesh.arumugam@a-cti.com",
                    contact: "+919884228421"
                }
            });
        },
        logInfoInSpreadSheet: function(attachmentURL) {
            if (userInfo && userInfo.crashInfo && userInfo.login) {
                var config = WindowManager.getConfig();
                var mode = config.mode;
                var crashInfo = userInfo.crashInfo;
                var url = config[mode].crashAnalytics + "?userEmailId=" + userInfo.login + "&mode=" + crashInfo.mode + "&appVersion=" + crashInfo.appVersion + "&engine=" + crashInfo.engine + "&platform=" + crashInfo.platform + "&os=" + crashInfo.os + "&dumpfilelink=" + attachmentURL || "N/A";
                console.log("URL:", url);
                request(url, function(error, response, body) {
                    if (!error && response.statusCode == 200) {
                        console.log("Crash for user has been logged : " + userInfo ? userInfo.login : "unknown");
                    }
                });
            }
        },
        getdumpfileurl: function(cardId, cb) {
            var url = "http://my.loopto.do/loop/agtzfmxvb3BhYmFja3IRCxIETG9vcBiAgICzrN3bCgw/cards/" + cardId;
            request(url, function(error, response, body) {
                var respbody;
                if (error) this.logInfoInSpreadSheet(null);
                if (!error) {
                    respbody = response.body;
                    var responseArray = new Function("return [" + respbody + "];")();
                    cb.call(this, responseArray[0][0].attachmentURL);
                }
            }.bind(this));
        },
        startIncomingPort: function() {
            crashReportServer.log("Inside crashReportServer.startIncomingPort function:");
            this.instance = http.createServer(function(req, res) {
                if (req && req.url.indexOf("/crashreporter") !== -1) {
                    var config = WindowManager.getConfig();
                    var mode = config.mode;
                    var form = new formidable.IncomingForm();
                    form.parse(req, function(err, fields, files) {
                        this.log("JSON:", JSON.stringify({
                            fields: fields,
                            files: files
                        }));
                        var filePathToLoopTodo = files.upload_file_minidump.path;
                        this.log("Dump file path : ", filePathToLoopTodo);
                        this.log("Dump file name:", files.upload_file_minidump.name);
                        var UserInfo = "Date & Time     : " + new Date() + "<br>" + "GUID            : " + fields.guid + "<br>" + "Process_Type    : " + fields.process_type + "<br>" + "Prod            : " + fields.prod + "<br>" + "Engine Version  : " + fields.ver + "<br>";
                        var form = new FormData();
                        form.append("t", new Date().getTime());
                        form.append("tag", "CrashReporter");
                        form.append("loopKey", "agtzfmxvb3BhYmFja3IRCxIETG9vcBiAgICzrN3bCgw");
                        form.append("user_name", userInfo ? userInfo.login : "CrashReporter");
                        form.append("user_email", userInfo ? userInfo.login : "unknown");
                        form.append("card_title", this.checkCharacterLimit(UserInfo));
                        form.append("feedbackAttachment", fs.createReadStream(filePathToLoopTodo), {
                            filename: files.upload_file_minidump.name,
                            "content-type": "application/octet-stream"
                        });
                        console.log("LoopURL : ", config[mode].loopURL);
                        request.post(config[mode].loopURL + "/forms/getBlobUploadUrl?type=feedback", function(err, resp, body) {
                            if (err) {
                                this.logInfoInSpreadSheet(false);
                            } else if (resp && resp.statusCode == 200) {
                                this.log("Blob url: ", JSON.parse(body).blobUrl);
                                var localURL = JSON.parse(body).blobUrl;
                                var b = request.post(localURL, function(err, resp, body) {
                                    this.log("Error : ", err);
                                    if (err) {
                                        this.logInfoInSpreadSheet(false);
                                    } else if (resp.body) {
                                        this.getdumpfileurl(resp.body, this.logInfoInSpreadSheet);
                                    }
                                }.bind(this));
                                b._form = form;
                            }
                        }.bind(this));
                    }.bind(this));
                    return;
                }
                res.writeHead(200, {
                    "Access-Control-Allow-Origin": "*"
                });
                res.end("Crashreport service is active.");
            }.bind(this));
            this.instance.listen(this.port, function(err, info) {});
        }
    };
} catch (e) {
    console.error("Exception in CrashReportServer:", e);
    console.error("Error is:", e.stack);
}

var crashManager = {
    name: "crashManager",
    track: {
        isSB: false,
        isChat: false,
        isV2: false
    },
    log: function() {
        util.log.apply(this, arguments);
    },
    proxy: function() {
        crashManager.notify.apply(crashManager, arguments);
    },
    reload: function(windowInfo) {
        switch (windowInfo.title) {
          case namespace.CONTAINER_V2:
            {
                this.track.isV2 = true;
                if (/^win32/.test(process.platform) && /1.4/.test(process.versions.electron)) {
                    ipcController.getContainer(namespace.CONTAINER_V2).close();
                    Emitter.emit("/windowManager/open/v2/container", true);
                } else {
                    ipcController.getContainer(namespace.CONTAINER_V2).webContents.reloadIgnoringCache();
                }
                console.log("V2 Window got crashed.");
                break;
            }

          case namespace.CONTAINER_SB:
            {
                this.track.isSB = true;
                if (/^win32/.test(process.platform) && /1.4/.test(process.versions.electron)) {
                    ipcController.getContainer(namespace.CONTAINER_SB).close();
                    Emitter.emit("/windowManager/open/sb/container", true);
                } else {
                    ipcController.getContainer(namespace.CONTAINER_SB).webContents.reloadIgnoringCache();
                }
                console.log("FULL Window got crashed.");
                break;
            }

          case namespace.CONTAINER_CHAT:
            {
                this.track.isChat = true;
                if (/^win32/.test(process.platform) && /1.4/.test(process.versions.electron)) {
                    ipcController.getContainer(namespace.CONTAINER_CHAT).close();
                    Emitter.emit("/windowManager/open/chat/container", true);
                } else {
                    ipcController.getContainer(namespace.CONTAINER_CHAT).webContents.reloadIgnoringCache();
                }
                console.log("Chat Window got crashed");
                break;
            }

          default:
            {
                console.log("What title i recieved : ", windowInfo);
                break;
            }
        }
    },
    notify: function(title) {
        this.log("recieved crash on window : " + title);
        if (title) {
            this.reload(title);
        }
    }
};

Emitter.on("RendererCrash", crashManager.proxy);

var darwinMenuList = [ {
    label: "Application",
    submenu: [ {
        label: "About Application",
        selector: "orderFrontStandardAboutPanel:"
    }, {
        type: "separator"
    }, {
        label: "Check for Updates...",
        click: function() {
            Emitter.emit("checkForUpdates");
        }
    }, {
        label: "Hide AnyWhereWorks",
        role: "hide"
    }, {
        label: "Hide Others",
        role: "hideothers"
    }, {
        label: "Show All",
        role: "unhide"
    }, {
        type: "separator"
    }, {
        label: "Quit",
        click: function() {
            app.quit();
        },
        accelerator: "Command+Q"
    } ]
}, {
    label: "Edit",
    submenu: [ {
        label: "Undo",
        accelerator: "CmdOrCtrl+Z",
        selector: "undo:"
    }, {
        label: "Redo",
        accelerator: "Shift+CmdOrCtrl+Z",
        selector: "redo:"
    }, {
        type: "separator"
    }, {
        label: "Cut",
        accelerator: "CmdOrCtrl+X",
        selector: "cut:"
    }, {
        label: "Copy",
        accelerator: "CmdOrCtrl+C",
        selector: "copy:"
    }, {
        label: "Paste",
        accelerator: "CmdOrCtrl+V",
        selector: "paste:"
    }, {
        label: "Select All",
        accelerator: "CmdOrCtrl+A",
        selector: "selectAll:"
    } ]
}, {
    label: "View",
    submenu: [ {
        label: "Zoom In",
        accelerator: "Command+Plus",
        click: function(item, focusedWindow) {
            Emitter.emit("zoomIn", focusedWindow);
        }
    }, {
        label: "Zoom Out",
        accelerator: "Command+-",
        click: function(item, focusedWindow) {
            Emitter.emit("zoomOut", focusedWindow);
        }
    }, {
        label: "Actual Size",
        accelerator: "Command+o",
        click: function(item, focusedWindow) {
            Emitter.emit("resetZoom", focusedWindow);
        }
    } ]
}, {
    label: "Window",
    role: "window",
    submenu: [ {
        label: "Minimize",
        role: "minimize"
    }, {
        label: "Zoom",
        role: "zoom"
    }, {
        label: "Close",
        role: "close"
    }, {
        label: "Bring All to Front",
        role: "front"
    } ]
}, {
    label: "Help",
    submenu: [ {
        label: "Report Issue",
        click: function(event) {
            Emitter.emit("ReportIssue", event);
        }
    }, {
        label: "Reset App Data",
        click: function() {
            Emitter.emit("clearCache");
        }
    } ]
} ];

var winMenuList = [ {
    label: "Application",
    submenu: [ {
        label: "About Application"
    }, {
        type: "separator"
    }, {
        label: "Check for Updates...",
        click: function() {
            menuActions.checkForUpdates();
        }
    }, {
        label: "Hide AnyWhereWorks",
        accelerator: "Command+H",
        role: "hide"
    }, {
        label: "Hide Others",
        accelerator: "Option+Command+H",
        role: "hideothers"
    }, {
        label: "Show All",
        role: "unhide"
    }, {
        type: "separator"
    }, {
        label: "Quit",
        accelerator: "Command+Q",
        click: function() {
            app.quit();
        }
    } ]
}, {
    label: "Edit",
    submenu: [ {
        label: "Undo",
        accelerator: "CmdOrCtrl+Z",
        selector: "undo"
    }, {
        label: "Redo",
        accelerator: "Shift+CmdOrCtrl+Z",
        selector: "redo"
    }, {
        type: "separator"
    }, {
        label: "Cut",
        accelerator: "CmdOrCtrl+X",
        selector: "cut"
    }, {
        label: "Copy",
        accelerator: "CmdOrCtrl+C",
        selector: "copy"
    }, {
        label: "Paste",
        accelerator: "CmdOrCtrl+V",
        selector: "paste"
    }, {
        label: "Select All",
        accelerator: "CmdOrCtrl+A",
        selector: "selectAll"
    } ]
}, {
    label: "View",
    submenu: [ {
        label: "Zoom In",
        click: function(item, focusedWindow) {
            console.log("zoom in");
            menuActions.zoomIn(focusedWindow);
        }
    }, {
        label: "Zoom Out",
        click: function(item, focusedWindow) {
            menuActions.zoomOut(focusedWindow);
        }
    }, {
        label: "Actual Size",
        click: function(item, focusedWindow) {
            console.log("actual size");
            menuActions.resetZoom(focusedWindow);
        }
    } ]
}, {
    label: "Window",
    role: "window",
    submenu: [ {
        label: "Minimize",
        accelerator: "CmdOrCtrl+Z",
        role: "minimize"
    }, {
        label: "Zoom",
        accelerator: "Shift+CmdOrCtrl+Z",
        role: "zoom"
    }, {
        label: "Close",
        accelerator: "Shift+CmdOrCtrl+Z",
        role: "close"
    }, {
        label: "Bring All to Front",
        role: "front"
    } ]
}, {
    label: "Help",
    submenu: [ {
        label: "Report Issue",
        click: function(event) {
            menuActions.sendSignalToChat(event);
        }
    }, {
        label: "Reset App Data",
        click: function() {
            menuActions.clearCache();
        }
    } ]
} ];

var menuActions = {
    menu: null,
    template: null,
    isMac: function() {
        return /^darwin/.test(process.platform);
    },
    setNativeMenu: function() {
        this.menu = require("electron").Menu;
        if (this.isMac()) {
            this.setNativeMenuForMac(darwinMenuList);
            this.attachListener();
        } else {}
    },
    setNativeMenuForMac: function(template) {
        if (template) {
            this.template = this.menu.buildFromTemplate(template);
            this.menu.setApplicationMenu(this.template);
        }
    },
    setNativeMenuForWin: function(template) {
        console.log("setting native menu for windows..", ipcController.getContainer(namespace.CONTAINER_CHAT));
        console.log("is fn available ? ", ipcController.getContainer(namespace.CONTAINER_CHAT).setMenu);
        ipcController.getContainer(namespace.CONTAINER_CHAT).setMenu(new this.menu(this.template));
    },
    sendSignalToChat: function(_event) {
        var msg = new Thinclient("menu");
        msg[msg.opt].metainfo.menu = "Help";
        msg[msg.opt].metainfo.menuitem = _event.label;
        this.contactRenderer(namespace.CONTAINER_CHAT_ALIAS, msg);
    },
    getTarget: function(ref) {
        var winTitleList = [ namespace.CONTAINER_CHAT, namespace.CONTAINER_SB ];
        var targetArray = [ namespace.CONTAINER_CHAT_ALIAS, namespace.CONTAINER_SB ];
        for (var i = targetArray.length - 1; i >= 0; i--) {
            if (ref.getURL().indexOf(winTitleList[i] + ".html") !== -1) {
                return targetArray[i];
            }
        }
    },
    contactRenderer: function(containerTitle, message) {
        if (containerTitle && message) {
            ipcController.passInfo(containerTitle, message);
        }
    },
    checkForUpdates: function() {
        this.contactRenderer("Chat", new Application("checkForUpdates"));
    },
    enableZoomIn: function() {
        this.template.items[2].submenu.items[0].enabled = true;
    },
    disableZoomIn: function() {
        this.template.items[2].submenu.items[0].enabled = false;
    },
    enableZoomOut: function() {
        this.template.items[2].submenu.items[1].enabled = true;
    },
    disableZoomOut: function() {
        this.template.items[2].submenu.items[1].enabled = false;
    },
    enableActualSize: function() {
        this.template.items[2].submenu.items[2].enabled = true;
    },
    disableActualSize: function() {
        this.template.items[2].submenu.items[2].enabled = false;
    },
    enableReportIssue: function() {
        this.template.items[4].submenu.items[0].enabled = true;
    },
    disableReportIssue: function() {
        this.template.items[4].submenu.items[0].enabled = false;
    },
    enableResetAppData: function() {
        this.template.items[4].submenu.items[1].enabled = true;
    },
    disableResetAppData: function() {
        this.template.items[4].submenu.items[1].enabled = false;
    },
    enableCheckForUpdates: function() {
        this.template.items[0].submenu.items[2].enabled = true;
    },
    disableCheckForUpdates: function() {
        this.template.items[0].submenu.items[2].enabled = false;
    },
    disableZooming: function() {
        this.disableZoomOut();
        this.disableZoomIn();
        this.disableActualSize();
    },
    disableAll: function() {
        this.disableZoomOut();
        this.disableZoomIn();
        this.disableActualSize();
        this.disableCheckForUpdates();
        this.disableResetAppData();
        this.disableReportIssue();
    },
    enableAll: function() {
        this.enableZoomIn();
        this.enableZoomOut();
        this.enableActualSize();
        this.enableCheckForUpdates();
        this.enableResetAppData();
        this.enableReportIssue();
    },
    enableBoth: function() {
        this.enableZoomIn();
        this.enableZoomOut();
    },
    isContactAvail: function() {
        if (userInfo && Object.keys(userInfo).length) return true; else return false;
    },
    onBlur: function() {
        if (this.isContactAvail()) {
            this.disableZooming();
        }
    },
    onFocus: function(option) {
        if (this.isContactAvail()) {
            if (option.container && option.container == "V2") {
                this.disableZooming();
            } else {
                this.enableActualSize();
                this.contactRenderer(option.container, new Application("onFocus"));
            }
        }
    },
    zoomIn: function(winRef) {
        this.contactRenderer(this.getTarget(winRef), new Application("zoomIn"));
    },
    zoomOut: function(winRef) {
        this.contactRenderer(this.getTarget(winRef), new Application("zoomOut"));
    },
    resetZoom: function(winRef) {
        this.contactRenderer(this.getTarget(winRef), new Application("resetZoom"));
    },
    clearCache: function() {
        this.contactRenderer("FULL", new Application("clearCache"));
    },
    switchZoomUI: function(option) {
        switch (option) {
          case "enableZoomIn":
            {
                this.enableZoomIn();
                break;
            }

          case "enableZoomOut":
            {
                this.enableZoomOut();
                break;
            }

          case "disableZoomIn":
            {
                this.disableZoomIn();
                break;
            }

          case "disableZoomOut":
            {
                this.disableZoomOut();
                break;
            }

          case "enableBoth":
            {
                this.enableBoth();
                break;
            }

          case "disableAll":
            {
                this.disableAll();
                break;
            }

          default:
            {
                console.log("default sequence in zoomUI ...", option);
            }
        }
    },
    attachListener: function() {
        Emitter.on("zoomIn", menuActions.zoomIn.bind(menuActions));
        Emitter.on("zoomOut", menuActions.zoomOut.bind(menuActions));
        Emitter.on("resetZoom", menuActions.resetZoom.bind(menuActions));
        Emitter.on("ReportIssue", menuActions.sendSignalToChat.bind(menuActions));
        Emitter.on("clearCache", menuActions.clearCache.bind(menuActions));
        Emitter.on("checkForUpdates", menuActions.checkForUpdates.bind(menuActions));
        Emitter.on("switchZoomUI", menuActions.switchZoomUI.bind(menuActions));
        Emitter.on("onBlur", menuActions.onBlur.bind(menuActions));
        Emitter.on("onFocus", menuActions.onFocus.bind(menuActions));
        Emitter.on("/user/contact/available", menuActions.enableAll.bind(menuActions));
    }
};

Emitter.on("mainOnload", menuActions.setNativeMenu.bind(menuActions));/* FullClient */