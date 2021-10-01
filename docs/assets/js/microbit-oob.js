// meta={"simUrl":"https://trg-microbit.userpxt.io/beta---simulator","cdnUrl":"https://pxt.azureedge.net","version":"v0","target":"microbit","targetVersion":"4.1.7"}
// boardDefinition={"visual":"microbit","gpioPinBlocks":[["P0"],["P1"],["P2"],["P3"],["P4","P5","P6","P7"],["P8","P9","P10","P11","P12"],["P16"]],"gpioPinMap":{"P0":"P0","P1":"P1","P2":"P2","P3":"P3","P4":"P4","P5":"P5","P6":"P6","P7":"P7","P8":"P8","P9":"P9","P10":"P10","P11":"P11","P12":"P12","P13":"P13","P14":"P14","P15":"P15","P16":"P16","P19":"P19","P20":"P20"},"spiPins":{"MOSI":"P15","MISO":"P14","SCK":"P13"},"i2cPins":{"SDA":"P20","SCL":"P19"},"analogInPins":["P0","P1","P2","P3","P10"],"groundPins":["GND"],"threeVoltPins":["+3v3"],"attachPowerOnRight":true,"onboardComponents":["accelerometer","buttonpair","ledmatrix","speaker","bluetooth","thermometer","compass","builtinspeaker","microphone","logotouch","flashlog","v2"],"pinStyles":{"P0":"croc","P1":"croc","P2":"croc","GND":"croc","+3v3":"croc"},"marginWhenBreadboarding":[0,0,80,0]}
// total=843658 new=96.05% cached=0.00% other=3.95%
(function (ectx) {
'use strict';
const runtime = ectx.runtime;
const oops = ectx.oops;
const doNothing = ectx.doNothing;
const pxsim = ectx.pxsim;
const globals = ectx.globals;
const maybeYield = ectx.maybeYield;
const setupDebugger = ectx.setupDebugger;
const isBreakFrame = ectx.isBreakFrame;
const breakpoint = ectx.breakpoint;
const trace = ectx.trace;
const checkStack = ectx.checkStack;
const leave = ectx.leave;
const checkResumeConsumed = ectx.checkResumeConsumed;
const setupResume = ectx.setupResume;
const setupLambda = ectx.setupLambda;
const checkSubtype = ectx.checkSubtype;
const failedCast = ectx.failedCast;
const buildResume = ectx.buildResume;
const mkVTable = ectx.mkVTable;
const bind = ectx.bind;
const leaveAccessor = ectx.leaveAccessor;
const __this = runtime;
const pxtrt = pxsim.pxtrt;
let yieldSteps = 1;
ectx.setupYield(function() { yieldSteps = 100; })
pxsim.setTitle("jacdac-microbit-oob");
pxsim.setConfigData({}, {});
pxtrt.mapKeyNames = [
 "",
 "_attach",
 "_currentDevice",
 "_data",
 "_destroy",
 "_detach",
 "_eventCounter",
 "_header",
 "_lastListenerTime",
 "_localTime",
 "_myDevice",
 "_oldBindingsHash",
 "_score",
 "_sendCmd",
 "_sendCmdId",
 "_sendCore",
 "_sendReport",
 "_sendWithAck",
 "_shortId",
 "_statusCode",
 "add",
 "addListenerInternal",
 "advertisementData",
 "allClients",
 "announceCallback",
 "announceflags",
 "attachClient",
 "autoBind",
 "autoBindCnt",
 "background",
 "bindRoles",
 "bindingHash",
 "bindings",
 "boundToDev",
 "boundToServiceIdx",
 "broadcast",
 "c0",
 "checkChanges",
 "checkProxy",
 "clearAttachCache",
 "clients",
 "close",
 "code",
 "compress",
 "config",
 "controlServer",
 "crc",
 "currentDevice",
 "currentDuration",
 "currentOctave",
 "currentPos",
 "data",
 "detachClient",
 "device",
 "deviceId",
 "deviceIdentifier",
 "devices",
 "digitalRead",
 "digitalWrite",
 "disableLogger",
 "disableRoleManager",
 "div",
 "emit",
 "eventCode",
 "eventCounter",
 "eventId",
 "fmt",
 "fp",
 "from",
 "fromBinary",
 "fullyBound",
 "gcDevices",
 "handleAnnounce",
 "handleConnected",
 "handleFloodPing",
 "handleInstanceName",
 "handlePacket",
 "handlePacketOuter",
 "handleRegBool",
 "handleRegUInt32",
 "handleRegValue",
 "handleStatusCode",
 "handler",
 "handlers",
 "hasNextNote",
 "hasService",
 "host",
 "hostServices",
 "instanceName",
 "intData",
 "isArray",
 "isCommand",
 "isEvent",
 "isRegGet",
 "isReport",
 "jdpacked",
 "jdunpack",
 "key",
 "lastQuery",
 "lastReport",
 "lastSeen",
 "listeners",
 "log",
 "lookupQuery",
 "matchesRoleAt",
 "melodyArray",
 "minPriority",
 "mkEventCmd",
 "multicommandClass",
 "nextCnt",
 "nextNote",
 "nextRetry",
 "nfmt",
 "nfmt2",
 "noWait",
 "notes",
 "numTries",
 "on",
 "once",
 "onlyHeader",
 "packFormat",
 "packetFlags",
 "parent",
 "parse",
 "pkt",
 "pkts",
 "play",
 "port",
 "processPacket",
 "queries",
 "query",
 "queueAnnounce",
 "raiseEvent",
 "reattach",
 "reg",
 "regCode",
 "registers",
 "removeListenerInternal",
 "repeating",
 "requiresAck",
 "resend",
 "reset",
 "resetCount",
 "resetIn",
 "resetToProxy",
 "respondForEach",
 "restartCounter",
 "role",
 "running",
 "score",
 "scoreFor",
 "select",
 "selfDevice",
 "sendAsMultiCommand",
 "sendChangeEvent",
 "sendCommand",
 "sendCtrlCommand",
 "sendEvent",
 "sendReport",
 "sendUptime",
 "service",
 "serviceClass",
 "serviceClassAt",
 "serviceClassLength",
 "serviceCommand",
 "serviceIdx",
 "serviceIndex",
 "services",
 "setPull",
 "shortId",
 "size",
 "srcId",
 "start",
 "startClient",
 "started",
 "stateUpdated",
 "subscribe",
 "supressLog",
 "systemActive",
 "timestamp",
 "toString",
 "unattachedClients",
 "uptime",
 "value",
 "word",
 "write",
 "writeAndClose",
 "writeEx"
];
__this.setupPerfCounters([]);
const pxsim_Array__getAt = pxsim.Array_.getAt;
const pxsim_Array__length = pxsim.Array_.length;
const pxsim_Array__mk = pxsim.Array_.mk;
const pxsim_Array__push = pxsim.Array_.push;
const pxsim_Boolean__bang = pxsim.Boolean_.bang;
const pxsim_String__concat = pxsim.String_.concat;
const pxsim_String__stringConv = pxsim.String_.stringConv;
const pxsim_numops_toBool = pxsim.numops.toBool;
const pxsim_numops_toBoolDecr = pxsim.numops.toBoolDecr;
const pxsim_pxtcore_mkAction = pxsim.pxtcore.mkAction;
const pxsim_pxtcore_mkClassInstance = pxsim.pxtcore.mkClassInstance;
const pxsim_pxtrt_ldlocRef = pxsim.pxtrt.ldlocRef;
const pxsim_pxtrt_mapGetByString = pxsim.pxtrt.mapGetByString;
const pxsim_pxtrt_stclo = pxsim.pxtrt.stclo;
const pxsim_pxtrt_stlocRef = pxsim.pxtrt.stlocRef;
const pxsim_Boolean_ = pxsim.Boolean_;
const pxsim_pxtcore = pxsim.pxtcore;
const pxsim_String_ = pxsim.String_;
const pxsim_ImageMethods = pxsim.ImageMethods;
const pxsim_Array_ = pxsim.Array_;
const pxsim_pxtrt = pxsim.pxtrt;
const pxsim_numops = pxsim.numops;


function _main___P3679(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    globals._intervals___3738 = (undefined);
    globals.minPriority___2373 = (1);
    globals._score___3747 = (0);
    globals._paused___3765 = (false);
    globals._backgroundAnimation___3767 = (false);
    globals.barGraphHigh___3773 = (0);
    globals.barGraphHighLast___3775 = (0);
    globals.beatsPerMinute___3779 = (120);
    globals.freqs___3781 = (_hex3780);
    globals._pollEventQueue___3819 = (undefined);
    r0 = pxsim_pxtcore_mkClassInstance(SoundExpression__C2683_VT);
    s.tmp_0 = r0;
    s.tmp_1 = SoundExpression_constructor__P2684_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = "happy";
    s.callLocIdx = 70; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    globals.happy___2689 = (s.tmp_0);
    r0 = pxsim_pxtcore_mkClassInstance(SoundExpression__C2683_VT);
    s.tmp_0 = r0;
    s.tmp_1 = SoundExpression_constructor__P2684_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = "sad";
    s.callLocIdx = 71; s.pc = 4; return s.tmp_1;
  case 4:
    r0 = s.retval;
    globals.sad___2692 = (s.tmp_0);
    globals.RUN_KEY___3849 = ("#run");
    globals.SCOPE_KEY___3850 = ("#scope");
    s.tmp_0 = settings_initScopes__P3861_mk(s);
    s.callLocIdx = 78; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    globals.identifyAnimationRunning___2734 = (false);
    s.tmp_0 = initPlatform__P2737_mk(s);
    s.callLocIdx = 101; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_LoggerServer__C2993_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_LoggerServer_constructor__P2995_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 218; s.pc = 7; return s.tmp_1;
  case 7:
    r0 = s.retval;
    globals.loggerServer___3002 = (s.tmp_0);
    globals.roleSettingPrefix___4009 = ("#jdr:");
    r0 = pxsim_pxtcore_mkClassInstance(jacdac__rolemgr_RoleManagerServer__C3075_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac__rolemgr_RoleManagerServer_constructor__P3077_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 294; s.pc = 8; return s.tmp_1;
  case 8:
    r0 = s.retval;
    globals.roleManagerServer___3083 = (s.tmp_0);
    globals.CHANGE___3136 = ("change");
    globals.CONNECT___3137 = ("connect");
    globals.DISCONNECT___3138 = ("disconnect");
    globals.DEVICE_CONNECT___3139 = ("deviceConnect");
    globals.DEVICE_DISCONNECT___3140 = ("deviceDisconnect");
    globals.DEVICE_CHANGE___3141 = ("deviceChange");
    globals.DEVICE_ANNOUNCE___3142 = ("deviceAnnounce");
    globals.SELF_ANNOUNCE___3143 = ("selfAnnounce");
    globals.PACKET_PROCESS___3144 = ("packetProcess");
    globals.REPORT_RECEIVE___3145 = ("reportReceive");
    globals.REPORT_UPDATE___3146 = ("reportUpdate");
    globals.RESTART___3147 = ("restart");
    globals.PACKET_RECEIVE___3148 = ("packetReceive");
    globals.EVENT___3149 = ("packetEvent");
    globals.STATUS_EVENT___3150 = ("statusEvent");
    globals.IDENTIFY___3151 = ("identify");
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_Bus__C3152_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_Bus_constructor__P3157_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 369; s.pc = 9; return s.tmp_1;
  case 9:
    r0 = s.retval;
    globals.bus___3170 = (s.tmp_0);
    globals.logPriority___3171 = (0);
    globals.JACDAC_PROXY_SETTING___3247 = ("__jacdac_proxy");
    s.tmp_0 = jacdac___physStart__P2727_mk(s);
    s.callLocIdx = 575; s.pc = 10; return s.tmp_0;
  case 10:
    r0 = s.retval;
    r0 = pxsim_numops_toBoolDecr(globals.onPlatformStart___3134);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = lambda_1_mk(s);
    s.tmp_0.argL = globals.onPlatformStart___3134;
    setupLambda(s.tmp_0, s.tmp_0.argL);
    s.callLocIdx = 576; s.pc = 11; return s.tmp_0;
  case 11:
    r0 = s.retval;
  case 1:
  case 2:
    s.tmp_0 = jacdac_startProxy__P4066_mk(s);
    s.callLocIdx = 577; s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
    s.tmp_0 = control_runInParallel__P2293_mk(s);
    s.tmp_0.arg0 = jacdac_inline__P4074;
    s.callLocIdx = 579; s.pc = 13; return s.tmp_0;
  case 13:
    r0 = s.retval;
    globals.ERROR___3253 = ("error");
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 1);
    r0 = pxsim_Array__push(s.tmp_0, 1);
    r0 = pxsim_Array__push(s.tmp_0, 1);
    r0 = pxsim_Array__push(s.tmp_0, 1);
    r0 = pxsim_Array__push(s.tmp_0, 1);
    r0 = pxsim_Array__push(s.tmp_0, 1);
    r0 = pxsim_Array__push(s.tmp_0, 1);
    r0 = pxsim_Array__push(s.tmp_0, 1);
    r0 = pxsim_Array__push(s.tmp_0, 1);
    r0 = pxsim_Array__push(s.tmp_0, 1);
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_0);
    r0 = pxsim_Array__mk();
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_2, 0);
    r0 = pxsim_Array__push(s.tmp_2, 1);
    r0 = pxsim_Array__push(s.tmp_2, 0);
    r0 = pxsim_Array__push(s.tmp_2, 1);
    r0 = pxsim_Array__push(s.tmp_2, 0);
    r0 = pxsim_Array__push(s.tmp_2, 1);
    r0 = pxsim_Array__push(s.tmp_2, 0);
    r0 = pxsim_Array__push(s.tmp_2, 1);
    r0 = pxsim_Array__push(s.tmp_2, 0);
    r0 = pxsim_Array__push(s.tmp_2, 1);
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_2);
    r0 = pxsim_Array__mk();
    s.tmp_3 = r0;
    r0 = pxsim_Array__push(s.tmp_3, 1);
    r0 = pxsim_Array__push(s.tmp_3, 1);
    r0 = pxsim_Array__push(s.tmp_3, 0);
    r0 = pxsim_Array__push(s.tmp_3, 1);
    r0 = pxsim_Array__push(s.tmp_3, 1);
    r0 = pxsim_Array__push(s.tmp_3, 1);
    r0 = pxsim_Array__push(s.tmp_3, 1);
    r0 = pxsim_Array__push(s.tmp_3, 0);
    r0 = pxsim_Array__push(s.tmp_3, 1);
    r0 = pxsim_Array__push(s.tmp_3, 1);
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_3);
    r0 = pxsim_Array__mk();
    s.tmp_4 = r0;
    r0 = pxsim_Array__push(s.tmp_4, 1);
    r0 = pxsim_Array__push(s.tmp_4, 1);
    r0 = pxsim_Array__push(s.tmp_4, 0);
    r0 = pxsim_Array__push(s.tmp_4, 1);
    r0 = pxsim_Array__push(s.tmp_4, 1);
    r0 = pxsim_Array__push(s.tmp_4, 1);
    r0 = pxsim_Array__push(s.tmp_4, 0);
    r0 = pxsim_Array__push(s.tmp_4, 1);
    r0 = pxsim_Array__push(s.tmp_4, 1);
    r0 = pxsim_Array__push(s.tmp_4, 1);
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_4);
    r0 = pxsim_Array__mk();
    s.tmp_5 = r0;
    r0 = pxsim_Array__push(s.tmp_5, 1);
    r0 = pxsim_Array__push(s.tmp_5, 0);
    r0 = pxsim_Array__push(s.tmp_5, 1);
    r0 = pxsim_Array__push(s.tmp_5, 0);
    r0 = pxsim_Array__push(s.tmp_5, 1);
    r0 = pxsim_Array__push(s.tmp_5, 1);
    r0 = pxsim_Array__push(s.tmp_5, 0);
    r0 = pxsim_Array__push(s.tmp_5, 1);
    r0 = pxsim_Array__push(s.tmp_5, 0);
    r0 = pxsim_Array__push(s.tmp_5, 1);
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_5);
    r0 = pxsim_Array__mk();
    s.tmp_6 = r0;
    r0 = pxsim_Array__push(s.tmp_6, 1);
    r0 = pxsim_Array__push(s.tmp_6, 1);
    r0 = pxsim_Array__push(s.tmp_6, 1);
    r0 = pxsim_Array__push(s.tmp_6, 0);
    r0 = pxsim_Array__push(s.tmp_6, 1);
    r0 = pxsim_Array__push(s.tmp_6, 1);
    r0 = pxsim_Array__push(s.tmp_6, 0);
    r0 = pxsim_Array__push(s.tmp_6, 1);
    r0 = pxsim_Array__push(s.tmp_6, 1);
    r0 = pxsim_Array__push(s.tmp_6, 1);
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_6);
    r0 = pxsim_Array__mk();
    s.tmp_7 = r0;
    r0 = pxsim_Array__push(s.tmp_7, 1);
    r0 = pxsim_Array__push(s.tmp_7, 1);
    r0 = pxsim_Array__push(s.tmp_7, 1);
    r0 = pxsim_Array__push(s.tmp_7, 0);
    r0 = pxsim_Array__push(s.tmp_7, 1);
    r0 = pxsim_Array__push(s.tmp_7, 1);
    r0 = pxsim_Array__push(s.tmp_7, 1);
    r0 = pxsim_Array__push(s.tmp_7, 1);
    r0 = pxsim_Array__push(s.tmp_7, 1);
    r0 = pxsim_Array__push(s.tmp_7, 1);
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_7);
    r0 = pxsim_Array__mk();
    s.tmp_8 = r0;
    r0 = pxsim_Array__push(s.tmp_8, 1);
    r0 = pxsim_Array__push(s.tmp_8, 1);
    r0 = pxsim_Array__push(s.tmp_8, 0);
    r0 = pxsim_Array__push(s.tmp_8, 1);
    r0 = pxsim_Array__push(s.tmp_8, 0);
    r0 = pxsim_Array__push(s.tmp_8, 1);
    r0 = pxsim_Array__push(s.tmp_8, 0);
    r0 = pxsim_Array__push(s.tmp_8, 1);
    r0 = pxsim_Array__push(s.tmp_8, 0);
    r0 = pxsim_Array__push(s.tmp_8, 1);
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_8);
    r0 = pxsim_Array__mk();
    s.tmp_9 = r0;
    r0 = pxsim_Array__push(s.tmp_9, 1);
    r0 = pxsim_Array__push(s.tmp_9, 1);
    r0 = pxsim_Array__push(s.tmp_9, 1);
    r0 = pxsim_Array__push(s.tmp_9, 1);
    r0 = pxsim_Array__push(s.tmp_9, 0);
    r0 = pxsim_Array__push(s.tmp_9, 0);
    r0 = pxsim_Array__push(s.tmp_9, 1);
    r0 = pxsim_Array__push(s.tmp_9, 1);
    r0 = pxsim_Array__push(s.tmp_9, 1);
    r0 = pxsim_Array__push(s.tmp_9, 1);
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_9);
    r0 = pxsim_Array__mk();
    s.tmp_10 = r0;
    r0 = pxsim_Array__push(s.tmp_10, 1);
    r0 = pxsim_Array__push(s.tmp_10, 1);
    r0 = pxsim_Array__push(s.tmp_10, 1);
    r0 = pxsim_Array__push(s.tmp_10, 1);
    r0 = pxsim_Array__push(s.tmp_10, 1);
    r0 = pxsim_Array__push(s.tmp_10, 1);
    r0 = pxsim_Array__push(s.tmp_10, 0);
    r0 = pxsim_Array__push(s.tmp_10, 1);
    r0 = pxsim_Array__push(s.tmp_10, 1);
    r0 = pxsim_Array__push(s.tmp_10, 1);
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_10);
    globals.FONT___4292 = (s.tmp_1);
    globals.img___4294 = (null);
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));
    globals.img___4294 = (r0);
    r0 = pxsim.music.setVolume(100);
    s.tmp_0 = music_setTempo__P2540_mk(s);
    s.tmp_0.arg0 = 180;
    s.callLocIdx = 607; s.pc = 14; return s.tmp_0;
  case 14:
    r0 = s.retval;
    globals.lastDeviceCount___3642 = (0);
    globals.playDeviceCountScheduled___3643 = (false);
    r0 = pxsim_pxtrt.mkMap();
    globals.dev2Services___3646 = (r0);
    s.tmp_0 = jacdac_EventSource_subscribe__P3261_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.tmp_0.arg1 = globals.DEVICE_ANNOUNCE___3142;
    s.tmp_0.arg2 = inline__P4309;
    s.callLocIdx = 623; s.pc = 15; return s.tmp_0;
  case 15:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 318542083);
    r0 = pxsim_Array__push(s.tmp_0, 309264608);
    r0 = pxsim_Array__push(s.tmp_0, 506480888);
    globals.knownActuators___3647 = (s.tmp_0);
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 522667846);
    r0 = pxsim_Array__push(s.tmp_0, 284830153);
    r0 = pxsim_Array__push(s.tmp_0, 521405449);
    r0 = pxsim_Array__push(s.tmp_0, 337754823);
    r0 = pxsim_Array__push(s.tmp_0, 400333340);
    r0 = pxsim_Array__push(s.tmp_0, 277836886);
    globals.knownSensors___3648 = (s.tmp_0);
    r0 = pxsim_Array__mk();
    globals.serviceKeys___3649 = (r0);
    r0 = pxsim_pxtrt.mkMap();
    globals.service2dev___3651 = (r0);
    r0 = pxsim_pxtrt.mkMap();
    globals.sensorMap___3658 = (r0);
    globals.samplesCount___3660 = (0);
    s.tmp_0 = jacdac_EventSource_subscribe__P3261_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.tmp_0.arg1 = globals.SELF_ANNOUNCE___3143;
    s.tmp_0.arg2 = inline__P4378;
    s.callLocIdx = 637; s.pc = 16; return s.tmp_0;
  case 16:
    r0 = s.retval;
    s.tmp_0 = jacdac_EventSource_subscribe__P3261_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.tmp_0.arg1 = globals.PACKET_PROCESS___3144;
    s.tmp_0.arg2 = inline__P4404;
    s.callLocIdx = 647; s.pc = 17; return s.tmp_0;
  case 17:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 1);
    r0 = pxsim_Array__push(s.tmp_0, 4);
    r0 = pxsim_Array__push(s.tmp_0, 36);
    r0 = pxsim_Array__push(s.tmp_0, 29);
    r0 = pxsim_Array__push(s.tmp_0, 38);
    r0 = pxsim_Array__push(s.tmp_0, 30);
    r0 = pxsim_Array__push(s.tmp_0, 10);
    r0 = pxsim_Array__push(s.tmp_0, 17);
    globals.buttonPressIcons___3661 = (s.tmp_0);
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 262);
    r0 = pxsim_Array__push(s.tmp_0, 294);
    r0 = pxsim_Array__push(s.tmp_0, 330);
    r0 = pxsim_Array__push(s.tmp_0, 349);
    r0 = pxsim_Array__push(s.tmp_0, 392);
    r0 = pxsim_Array__push(s.tmp_0, 440);
    r0 = pxsim_Array__push(s.tmp_0, 494);
    r0 = pxsim_Array__push(s.tmp_0, 523);
    globals.buttonNotes___3663 = (s.tmp_0);
    globals.nextIcon___3664 = (0);
    r0 = pxsim_pxtrt.mkMap();
    globals.iconMap___3666 = (r0);
    s.tmp_0 = tonePlayer__P3669_mk(s);
    s.callLocIdx = 653; s.pc = 18; return s.tmp_0;
  case 18:
    r0 = s.retval;
    s.tmp_0 = jacdac_EventSource_subscribe__P3261_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.tmp_0.arg1 = globals.DEVICE_DISCONNECT___3140;
    s.tmp_0.arg2 = inline__P4470;
    s.callLocIdx = 677; s.pc = 19; return s.tmp_0;
  case 19:
    r0 = s.retval;
    r0 = pxsim.input.onButtonPressed(1, inline__P4503);
    r0 = pxsim.input.onButtonPressed(2, inline__P4509);
    r0 = pxsim.input.onButtonPressed(3, inline__P4515);
    r0 = pxsim_pxtrt.mkMap();
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "disableRoleManager", false);
    s.tmp_1 = jacdac_start__P3248_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 695; s.pc = 20; return s.tmp_1;
  case 20:
    r0 = s.retval;
    s.tmp_0 = basic_showIcon__P2277_mk(s);
    s.tmp_0.arg0 = 4;
    s.tmp_0.arg1 = 600;
    s.callLocIdx = 696; s.pc = 21; return s.tmp_0;
  case 21:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
_main___P3679.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"main.ts","functionName":"<main>","argumentNames":[]}
_main___P3679.continuations = [  ]

function _main___P3679_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _main___P3679, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
} }

const _hex3780 = pxsim.BufferMethods.createBufferFromHex("1f00210023002500270029002c002e003100340037003a003e004100450049004e00520057005c00620068006e0075007b0083008b0093009c00a500af00b900c400d000dc00e900f70006011501260137014a015d01720188019f01b801d201ee010b022a024b026e029302ba02e40210033f037003a403dc03170455049704dd0427057505c80520067d06e0064907b8072d08a9082d09b9094d0aea0a900b400cfa0cc00d910e6f0f5a1053115b1272139a14d41520178018f519801b231dde1e")




function jacdac_inline__P4074(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_0 = jacdac_start__P3248_mk(s);
    s.tmp_0.arg0 = undefined;
    s.callLocIdx = 578; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_inline__P4074.info = {"start":50687,"length":13,"line":1512,"column":26,"endLine":1512,"endColumn":39,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":[]}

function jacdac_inline__P4074_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_inline__P4074, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function inline__P4309(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.i___4326 = undefined;
    s.id___4332 = undefined;
    s.devCount___4349 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_1 = r0 = s.arg0;
    s.tmp_3 = jacdac_Bus_selfDevice__P3160_mk(s);
    s.tmp_3.arg0 = globals.bus___3170;
    s.callLocIdx = 616; s.pc = 10; return s.tmp_3;
  case 10:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = (s.tmp_1 === s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 9; continue; }
  case 1:
  case 2:
    r0 = s.arg0.fields["deviceId"];
    s.tmp_7 = r0;
    r0 = pxsim_pxtrt.mapGetGeneric(globals.dev2Services___3646, s.tmp_7);
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_6);
    s.tmp_5 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 5; continue; }
    s.tmp_8 = r0 = globals.dev2Services___3646;
    r0 = s.arg0.fields["deviceId"];
    s.tmp_9 = r0;
    r0 = pxsim_Array__mk();
    s.tmp_10 = r0;
    r0 = pxsim_pxtrt.mapSetGeneric(s.tmp_8, s.tmp_9, s.tmp_10);
    s.i___4326 = (1);
  case 3:
    s.tmp_1 = r0 = s.i___4326;
    r0 = s.arg0.fields["services"];
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_4);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 >> 2);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.tmp_5 = jacdac_Device_serviceClassAt__P3233_mk(s);
    s.tmp_5.arg0 = s.arg0;
    s.tmp_5.arg1 = s.i___4326;
    s.callLocIdx = 618; s.pc = 11; return s.tmp_5;
  case 11:
    r0 = s.retval;
    s.id___4332 = (r0);
    r0 = s.arg0.fields["deviceId"];
    s.tmp_1 = r0;
    r0 = pxsim_pxtrt.mapGetGeneric(globals.dev2Services___3646, s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.id___4332);
    s.tmp_0 = checkForKnownService__P3652_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.id___4332;
    s.tmp_0.arg2 = s.i___4326;
    s.callLocIdx = 619; s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
    r0 = (s.i___4326 + 1);
    s.i___4326 = (r0);
    { step = 3; continue; }
  case 4:
  case 5:
  case 6:
    s.tmp_1 = helpers_arrayFilter__P1999_mk(s);
    r0 = globals.bus___3170.fields["devices"];
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = length_inline__P4354;
    s.callLocIdx = 621; s.pc = 13; return s.tmp_1;
  case 13:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_Array__length(s.tmp_0);
    s.devCount___4349 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.devCount___4349);
    if (!r0) { step = 7; continue; }
    s.tmp_0 = schedulePlayDeviceCount__P3644_mk(s);
    s.callLocIdx = 622; s.pc = 14; return s.tmp_0;
  case 14:
    r0 = s.retval;
  case 7:
  case 8:
  case 9:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P4309.info = {"start":1139,"length":603,"line":38,"column":45,"endLine":55,"endColumn":1,"fileName":"main.ts","functionName":"inline","argumentNames":["d"]}

function inline__P4309_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P4309, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  i___4326: undefined,
  id___4332: undefined,
  devCount___4349: undefined,
  arg0: undefined,
} }





function length_inline__P4354(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = jacdac_Bus_selfDevice__P3160_mk(s);
    s.tmp_2.arg0 = globals.bus___3170;
    s.callLocIdx = 620; s.pc = 1; return s.tmp_2;
  case 1:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0 !== s.tmp_1);
    return leave(s, r0)
  default: oops()
} } }
length_inline__P4354.info = {"start":1651,"length":32,"line":52,"column":8,"endLine":52,"endColumn":40,"fileName":"main.ts","functionName":"inline","argumentNames":["d"]}

function length_inline__P4354_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: length_inline__P4354, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }





function inline__P4378(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_0 = r0 = globals.samplesCount___3660;
    r0 = (s.tmp_0 + 1);
    globals.samplesCount___3660 = (r0);
    r0 = (s.tmp_0 % 3);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 1; continue; }
    s.tmp_4 = helpers_arrayForEach__P1998_mk(s);
    s.tmp_4.arg0 = globals.knownSensors___3648;
    s.tmp_4.arg1 = inline__P4388;
    s.callLocIdx = 636; s.pc = 3; return s.tmp_4;
  case 3:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P4378.info = {"start":4247,"length":308,"line":147,"column":43,"endLine":157,"endColumn":1,"fileName":"main.ts","functionName":"inline","argumentNames":[]}

function inline__P4378_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P4378, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
} }





function inline__P4388(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.pkt___4390 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 255);
    s.tmp_1 = jacdac_JDPacket_jdpacked__P2784_mk(s);
    s.tmp_1.arg0 = 8195;
    s.tmp_1.arg1 = "u8";
    s.tmp_1.arg2 = s.tmp_0;
    s.callLocIdx = 634; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.pkt___4390 = (r0);
    s.tmp_0 = jacdac_JDPacket_sendAsMultiCommand__P2821_mk(s);
    s.tmp_0.arg0 = s.pkt___4390;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 635; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P4388.info = {"start":4315,"length":237,"line":149,"column":29,"endLine":156,"endColumn":9,"fileName":"main.ts","functionName":"inline","argumentNames":["sc"]}

function inline__P4388_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P4388, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  pkt___4390: undefined,
  arg0: undefined,
} }





function inline__P4404(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.services___4406 = undefined;
    s.serviceClass___4415 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = globals.dev2Services___3646;
    r0 = s.arg0.fields["_header"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_3, 4, 8);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_pxtrt.mapGetGeneric(s.tmp_0, s.tmp_1);
    s.services___4406 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.services___4406);
    if (!r0) { step = 11; continue; }
    r0 = s.arg0.fields["_header"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_3, 13);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 63);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    s.tmp_4 = r0 = s.services___4406;
    r0 = s.arg0.fields["_header"];
    s.tmp_8 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_8, 13);
    s.tmp_7 = r0;
    r0 = (s.tmp_7 & 63);
    s.tmp_6 = r0;
    r0 = (s.tmp_6 - 1);
    s.tmp_5 = r0;
    r0 = pxsim_Array__getAt(s.tmp_4, s.tmp_5);
    s.serviceClass___4415 = (r0);
    s.tmp_1 = jacdac_JDPacket_isEvent__P2798_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.callLocIdx = 641; s.pc = 13; return s.tmp_1;
  case 13:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_2 = processEvent__P3671_mk(s);
    s.tmp_2.arg0 = s.serviceClass___4415;
    s.tmp_2.arg1 = s.arg0;
    s.callLocIdx = 642; s.pc = 14; return s.tmp_2;
  case 14:
    r0 = s.retval;
    { step = 8; continue; }
  case 1:
    s.tmp_1 = jacdac_JDPacket_isReport__P2815_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.callLocIdx = 643; s.pc = 15; return s.tmp_1;
  case 15:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    s.tmp_2 = jacdac_JDPacket_isRegGet__P2802_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.callLocIdx = 644; s.pc = 16; return s.tmp_2;
  case 16:
    r0 = s.retval;
  case 3:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBool(s.tmp_3);
    if (r0) { step = 4; continue; }
    r0 = s.tmp_3;
    { step = 5; continue; }
  case 4:
    s.tmp_5 = jacdac_JDPacket_regCode__P2803_mk(s);
    s.tmp_5.arg0 = s.arg0;
    s.callLocIdx = 645; s.pc = 17; return s.tmp_5;
  case 17:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = (s.tmp_4 === 257);
  case 5:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_6);
    if (!r0) { step = 6; continue; }
    s.tmp_7 = processSensorGetReading__P3672_mk(s);
    s.tmp_7.arg0 = s.serviceClass___4415;
    s.tmp_7.arg1 = s.arg0;
    s.callLocIdx = 646; s.pc = 18; return s.tmp_7;
  case 18:
    r0 = s.retval;
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P4404.info = {"start":4660,"length":534,"line":160,"column":44,"endLine":176,"endColumn":1,"fileName":"main.ts","functionName":"inline","argumentNames":["pkt"]}

function inline__P4404_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P4404, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  services___4406: undefined,
  serviceClass___4415: undefined,
  arg0: undefined,
} }





function inline__P4470(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = schedulePlayDeviceCount__P3644_mk(s);
    s.callLocIdx = 675; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = pxsim_pxtcore_mkAction(1, inline__P4477);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg0);
    s.tmp_1 = helpers_arrayForEach__P1998_mk(s);
    r0 = s.arg0.fields["deviceId"];
    s.tmp_2 = r0;
    r0 = pxsim_pxtrt.mapGetGeneric(globals.dev2Services___3646, s.tmp_2);
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 676; s.pc = 2; return s.tmp_1;
  case 2:
    r0 = s.retval;
    r0 = s.arg0.fields["deviceId"];
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt.mapDeleteByString(globals.dev2Services___3646, s.tmp_0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P4470.info = {"start":9550,"length":385,"line":329,"column":47,"endLine":341,"endColumn":1,"fileName":"main.ts","functionName":"inline","argumentNames":["d"]}

function inline__P4470_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P4470, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }





function inline__P4477(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtrt.mapGetGeneric(globals.service2dev___3651, s.arg0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = pxsim_pxtrt.mapGetGeneric(globals.service2dev___3651, s.arg0);
    s.tmp_1 = r0;
    r0 = s.caps[0].fields["deviceId"];
    s.tmp_2 = r0;
    r0 = pxsim_Array_.removeElement(s.tmp_1, s.tmp_2);
    r0 = pxsim_pxtrt.mapGetGeneric(globals.service2dev___3651, s.arg0);
    s.tmp_2 = r0;
    r0 = pxsim_Array__length(s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_pxtrt.mapDeleteByString(globals.service2dev___3651, s.arg0);
    r0 = pxsim_Array_.removeElement(globals.serviceKeys___3649, s.arg0);
  case 1:
  case 2:
  case 3:
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P4477.info = {"start":9641,"length":255,"line":331,"column":37,"endLine":339,"endColumn":5,"fileName":"main.ts","functionName":"inline","argumentNames":["sc"]}

function inline__P4477_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P4477, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }





function inline__P4503(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_0 = actuate__P3674_mk(s);
    s.tmp_0.arg0 = 1;
    s.callLocIdx = 678; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P4503.info = {"start":10022,"length":37,"line":345,"column":32,"endLine":347,"endColumn":1,"fileName":"main.ts","functionName":"inline","argumentNames":[]}

function inline__P4503_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P4503, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function inline__P4509(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_0 = actuate__P3674_mk(s);
    s.tmp_0.arg0 = 2;
    s.callLocIdx = 679; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P4509.info = {"start":10094,"length":37,"line":349,"column":32,"endLine":351,"endColumn":1,"fileName":"main.ts","functionName":"inline","argumentNames":[]}

function inline__P4509_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P4509, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function inline__P4515(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_0 = actuate__P3674_mk(s);
    s.tmp_0.arg0 = 3;
    s.callLocIdx = 680; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P4515.info = {"start":10167,"length":38,"line":353,"column":33,"endLine":355,"endColumn":1,"fileName":"main.ts","functionName":"inline","argumentNames":[]}

function inline__P4515_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P4515, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function basic_showIcon__P2277(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___4523 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = images_iconImage__P2281_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 17; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.res___4523 = (r0);
    setupResume(s, 2);
    pxsim_ImageMethods.showImage(s.res___4523, 0, s.arg1);
    checkResumeConsumed();
    return;
  case 2:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
basic_showIcon__P2277.info = {"start":4957,"length":141,"line":185,"column":4,"endLine":188,"endColumn":5,"fileName":"pxt_modules/core/icons.ts","functionName":"showIcon","argumentNames":["icon","interval"]}

function basic_showIcon__P2277_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: basic_showIcon__P2277, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  res___4523: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function images_iconImage__P2281(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq(0, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(1, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(4, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(5, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(6, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq(7, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq(8, s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim_pxtcore.switch_eq(9, s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = pxsim_pxtcore.switch_eq(10, s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim_pxtcore.switch_eq(11, s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = pxsim_pxtcore.switch_eq(12, s.tmp_0);
    if (r0) { step = 11; continue; }
    r0 = pxsim_pxtcore.switch_eq(2, s.tmp_0);
    if (r0) { step = 12; continue; }
    r0 = pxsim_pxtcore.switch_eq(3, s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = pxsim_pxtcore.switch_eq(32, s.tmp_0);
    if (r0) { step = 14; continue; }
    r0 = pxsim_pxtcore.switch_eq(33, s.tmp_0);
    if (r0) { step = 15; continue; }
    r0 = pxsim_pxtcore.switch_eq(34, s.tmp_0);
    if (r0) { step = 16; continue; }
    r0 = pxsim_pxtcore.switch_eq(35, s.tmp_0);
    if (r0) { step = 17; continue; }
    r0 = pxsim_pxtcore.switch_eq(36, s.tmp_0);
    if (r0) { step = 18; continue; }
    r0 = pxsim_pxtcore.switch_eq(37, s.tmp_0);
    if (r0) { step = 19; continue; }
    r0 = pxsim_pxtcore.switch_eq(38, s.tmp_0);
    if (r0) { step = 20; continue; }
    r0 = pxsim_pxtcore.switch_eq(39, s.tmp_0);
    if (r0) { step = 21; continue; }
    r0 = pxsim_pxtcore.switch_eq(13, s.tmp_0);
    if (r0) { step = 22; continue; }
    r0 = pxsim_pxtcore.switch_eq(14, s.tmp_0);
    if (r0) { step = 23; continue; }
    r0 = pxsim_pxtcore.switch_eq(15, s.tmp_0);
    if (r0) { step = 24; continue; }
    r0 = pxsim_pxtcore.switch_eq(16, s.tmp_0);
    if (r0) { step = 25; continue; }
    r0 = pxsim_pxtcore.switch_eq(17, s.tmp_0);
    if (r0) { step = 26; continue; }
    r0 = pxsim_pxtcore.switch_eq(18, s.tmp_0);
    if (r0) { step = 27; continue; }
    r0 = pxsim_pxtcore.switch_eq(19, s.tmp_0);
    if (r0) { step = 28; continue; }
    r0 = pxsim_pxtcore.switch_eq(20, s.tmp_0);
    if (r0) { step = 29; continue; }
    r0 = pxsim_pxtcore.switch_eq(21, s.tmp_0);
    if (r0) { step = 30; continue; }
    r0 = pxsim_pxtcore.switch_eq(22, s.tmp_0);
    if (r0) { step = 31; continue; }
    r0 = pxsim_pxtcore.switch_eq(23, s.tmp_0);
    if (r0) { step = 32; continue; }
    r0 = pxsim_pxtcore.switch_eq(24, s.tmp_0);
    if (r0) { step = 33; continue; }
    r0 = pxsim_pxtcore.switch_eq(25, s.tmp_0);
    if (r0) { step = 34; continue; }
    r0 = pxsim_pxtcore.switch_eq(26, s.tmp_0);
    if (r0) { step = 35; continue; }
    r0 = pxsim_pxtcore.switch_eq(27, s.tmp_0);
    if (r0) { step = 36; continue; }
    r0 = pxsim_pxtcore.switch_eq(28, s.tmp_0);
    if (r0) { step = 37; continue; }
    r0 = pxsim_pxtcore.switch_eq(29, s.tmp_0);
    if (r0) { step = 38; continue; }
    r0 = pxsim_pxtcore.switch_eq(30, s.tmp_0);
    if (r0) { step = 39; continue; }
    r0 = pxsim_pxtcore.switch_eq(31, s.tmp_0);
    if (r0) { step = 40; continue; }
    r0 = s.tmp_0;
    { step = 41; continue; }
  case 1:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,0,255,0,255,255,255,255,255,255,255,255,255,255,0,255,255,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 2:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,0,255,0,0,255,255,255,0,0,0,255,0,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 3:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,0,255,0,0,0,0,0,0,255,0,0,0,255,0,255,255,255,0,0]));
    { step = 42; continue; }
  case 4:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,0,255,0,0,0,0,0,0,0,255,255,255,0,255,0,0,0,255,0]));
    { step = 42; continue; }
  case 5:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,0,255,0,0,0,0,0,0,0,255,0,255,0,255,0,255,0,255,0]));
    { step = 42; continue; }
  case 6:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,0,0,255,0,255,0,255,0,0,0,0,0,0,255,255,255,255,255,255,0,255,0,255,0]));
    { step = 42; continue; }
  case 7:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,255,255,0,255,255,0,0,0,0,0,0,255,255,255,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 8:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,0,255,0,0,0,0,0,0,0,0,255,0,0,0,255,0,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 9:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,0,0,255,0,0,0,0,0,255,255,255,255,255,0,0,0,255,255,0,0,0,255,255,0]));
    { step = 42; continue; }
  case 10:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,255,255,255,255,255,0,255,255,0,0,0,0,0,0,255,0,255,0,0,255,255,255,0,0]));
    { step = 42; continue; }
  case 11:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,255,255,0,0,0,0,0,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,0]));
    { step = 42; continue; }
  case 12:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,0,0,0,255,0,0,0,255,0,255,0,255,0,0,0,255,0,0,0,0]));
    { step = 42; continue; }
  case 13:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,0,0,255,0,255,0,255,0,0,0,255,0,0,0,255,0,255,0,255,0,0,0,255,0]));
    { step = 42; continue; }
  case 14:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,0,255,0,0,0,255,0,255,0,255,255,255,255,255,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 15:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,0,0,0,255,255,0,0,0,255,0,255,0,0,255,0,0,255,0,255,255,255,255,255,0]));
    { step = 42; continue; }
  case 16:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,0]));
    { step = 42; continue; }
  case 17:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,255,0,255,0,255,0,0,0,255,0,255,0,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 18:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,0,255,0,0,0,255,0,255,0,0,0,255,0,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 19:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,255,255,255,255,0,0,0,255,255,0,0,0,255,255,0,0,0,255,255,255,255,255,255,0]));
    { step = 42; continue; }
  case 20:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,255,255,0,0,255,0,255,0,0,255,255,255,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 21:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,0,255,255,255,0,255,0,0,0,255,0,0,255,255,0,255,0,255,255,0,0,255,0]));
    { step = 42; continue; }
  case 22:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,255,255,255,255,255,255,255,0,255,255,255,0,0,255,255,255,0,0,255,255,255,0,0]));
    { step = 42; continue; }
  case 23:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,255,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,0,255,0,255,0,0]));
    { step = 42; continue; }
  case 24:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,255,0,0,255,255,255,0,0,0,255,255,255,255,0,255,255,255,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 25:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,255,255,255,0,255,255,255,255,255,0,255,255,255,0,0,255,0,255,0,0]));
    { step = 42; continue; }
  case 26:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,255,255,0,255,255,255,255,255,0,255,0,255,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 27:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,255,255,255,255,255,255,255,0,0,255,0,0,255,255,255,255,255,255,255,0,255,255,0]));
    { step = 42; continue; }
  case 28:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,255,255,255,255,255,0,0,255,0,0,0,255,0,255,0,255,0,0,0,255,0]));
    { step = 42; continue; }
  case 29:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,255,255,0,255,0,255,0,255,255,255,255,255,255,255,255,255,255,255,255,0,255,0,255,0]));
    { step = 42; continue; }
  case 30:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,0,255,0,0,0,0,255,0,0,0,255,255,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 31:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,0,0,0,255,0,0,0,0,255,0,0,0,0,255,255,255,0,0,255,0,255,0,0]));
    { step = 42; continue; }
  case 32:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,255,255,0,255,0,255,0,255,255,255,255,255,255,0,255,255,255,0,0,255,255,255,0,0]));
    { step = 42; continue; }
  case 33:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,255,255,0,255,255,255,255,255,0,0,255,0,0,255,0,255,0,0,255,255,255,0,0,0]));
    { step = 42; continue; }
  case 34:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,0,0,255,255,0,255,255,0,255,0,255,0,0,255,255,255,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 35:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,255,0,0,255,0,255,0,0,255,255,255,255,0,255,255,0,255,0,255,255,255,255,0,0]));
    { step = 42; continue; }
  case 36:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,0,0,255,255,0,0,0,255,255,255,255,255,255,0,255,255,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 37:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,0,255,0,0,0,0,255,0,0,255,255,255,0,0,255,255,255,0,0,0]));
    { step = 42; continue; }
  case 38:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,0,255,255,0,0,0,255,0,255,255,255,255,0,0,255,255,255,0,0,0]));
    { step = 42; continue; }
  case 39:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,255,0,255,255,0,255,0,255,255,255,255,255,255,0,0,255,0,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 40:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,255,255,255,0,255,255,0,255,255,0,255,255,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 41:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));
    { step = 42; continue; }
    r0 = undefined;
  case 42:
    return leave(s, r0)
  default: oops()
} } }
images_iconImage__P2281.info = {"start":9027,"length":13275,"line":280,"column":4,"endLine":537,"endColumn":5,"fileName":"pxt_modules/core/icons.ts","functionName":"iconImage","argumentNames":["i"]}

function images_iconImage__P2281_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: images_iconImage__P2281, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function actuate__P3674(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkAction(1, actuate_inline__P4658);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg0);
    s.tmp_1 = helpers_arrayForEach__P1998_mk(s);
    s.tmp_1.arg0 = globals.serviceKeys___3649;
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 684; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
actuate__P3674.info = {"start":10208,"length":468,"line":357,"column":0,"endLine":370,"endColumn":1,"fileName":"main.ts","functionName":"actuate","argumentNames":["b"]}

function actuate__P3674_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: actuate__P3674, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function actuate_inline__P4658(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 === 318542083);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = setServoAngle__P3675_mk(s);
    s.tmp_1.arg0 = s.caps[0];
    s.callLocIdx = 681; s.pc = 7; return s.tmp_1;
  case 7:
    r0 = s.retval;
    { step = 6; continue; }
  case 1:
    r0 = (s.arg0 === 309264608);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = animateLEDs__P3676_mk(s);
    s.tmp_1.arg0 = s.caps[0];
    s.callLocIdx = 682; s.pc = 8; return s.tmp_1;
  case 8:
    r0 = s.retval;
    { step = 5; continue; }
  case 2:
    r0 = (s.arg0 === 506480888);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.tmp_1 = animateLED__P3678_mk(s);
    s.tmp_1.arg0 = s.caps[0];
    s.callLocIdx = 683; s.pc = 9; return s.tmp_1;
  case 9:
    r0 = s.retval;
  case 3:
  case 4:
  case 5:
  case 6:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
actuate_inline__P4658.info = {"start":10422,"length":251,"line":361,"column":24,"endLine":369,"endColumn":5,"fileName":"main.ts","functionName":"inline","argumentNames":["sc"]}

function actuate_inline__P4658_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: actuate_inline__P4658, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function animateLED__P3678(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.color___4676 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 === 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = 16711680;
    { step = 4; continue; }
  case 1:
    r0 = (s.arg0 === 2);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = 65280;
    { step = 3; continue; }
  case 2:
    r0 = 255;
  case 3:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = s.tmp_2;
  case 4:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    s.color___4676 = (s.tmp_3);
    s.tmp_0 = sendColor__P3677_mk(s);
    s.tmp_0.arg0 = s.color___4676;
    s.callLocIdx = 692; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    s.tmp_0 = pause__P2224_mk(s);
    s.tmp_0.arg0 = 500;
    s.callLocIdx = 693; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    s.tmp_0 = sendColor__P3677_mk(s);
    s.tmp_0.arg0 = 0;
    s.callLocIdx = 694; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
animateLED__P3678.info = {"start":11442,"length":170,"line":401,"column":0,"endLine":406,"endColumn":1,"fileName":"main.ts","functionName":"animateLED","argumentNames":["b"]}

function animateLED__P3678_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: animateLED__P3678, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  color___4676: undefined,
  arg0: undefined,
} }





function pause__P2224(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    setupResume(s, 1);
    pxsim.basic.pause(s.arg0);
    checkResumeConsumed();
    return;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
pause__P2224.info = {"start":666,"length":57,"line":20,"column":0,"endLine":22,"endColumn":1,"fileName":"pxt_modules/core/basic.ts","functionName":"pause","argumentNames":["ms"]}

function pause__P2224_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pause__P2224, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function sendColor__P3677(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.pkt___4693 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = (s.arg0 >> 16);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    r0 = (s.arg0 & 65280);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 >> 8);
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_2);
    r0 = pxsim_Array__push(s.tmp_0, s.arg0);
    r0 = pxsim_Array__push(s.tmp_0, 50);
    s.tmp_4 = jacdac_JDPacket_jdpacked__P2784_mk(s);
    s.tmp_4.arg0 = 128;
    s.tmp_4.arg1 = "u8 u8 u8 u8";
    s.tmp_4.arg2 = s.tmp_0;
    s.callLocIdx = 690; s.pc = 1; return s.tmp_4;
  case 1:
    r0 = s.retval;
    s.pkt___4693 = (r0);
    s.tmp_0 = jacdac_JDPacket_sendAsMultiCommand__P2821_mk(s);
    s.tmp_0.arg0 = s.pkt___4693;
    s.tmp_0.arg1 = 506480888;
    s.callLocIdx = 691; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
sendColor__P3677.info = {"start":11200,"length":240,"line":392,"column":0,"endLine":399,"endColumn":1,"fileName":"main.ts","functionName":"sendColor","argumentNames":["color"]}

function sendColor__P3677_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: sendColor__P3677, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  pkt___4693: undefined,
  arg0: undefined,
} }





function animateLEDs__P3676(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 === 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = runEncoded__P3654_mk(s);
    s.tmp_1.arg0 = "rotfwd 1";
    s.tmp_1.arg1 = undefined;
    s.callLocIdx = 687; s.pc = 5; return s.tmp_1;
  case 5:
    r0 = s.retval;
    { step = 4; continue; }
  case 1:
    r0 = (s.arg0 === 2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = runEncoded__P3654_mk(s);
    s.tmp_1.arg0 = "rotback 1";
    s.tmp_1.arg1 = undefined;
    s.callLocIdx = 688; s.pc = 6; return s.tmp_1;
  case 6:
    r0 = s.retval;
    { step = 3; continue; }
  case 2:
    s.tmp_0 = runEncoded__P3654_mk(s);
    s.tmp_0.arg0 = "setall #000000 #ff0000 #00ff00 #0000ff";
    s.tmp_0.arg1 = undefined;
    s.callLocIdx = 689; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
  case 3:
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
animateLEDs__P3676.info = {"start":10961,"length":237,"line":382,"column":0,"endLine":390,"endColumn":1,"fileName":"main.ts","functionName":"animateLEDs","argumentNames":["b"]}

function animateLEDs__P3676_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: animateLEDs__P3676, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function runEncoded__P3654(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.encoded___4723 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = jacdac_lightEncode__P3431_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.callLocIdx = 628; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.encoded___4723 = (r0);
    s.tmp_0 = runProgram__P3653_mk(s);
    s.tmp_0.arg0 = s.encoded___4723;
    s.callLocIdx = 629; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
runEncoded__P3654.info = {"start":3105,"length":129,"line":107,"column":0,"endLine":110,"endColumn":1,"fileName":"main.ts","functionName":"runEncoded","argumentNames":["prog","args"]}

function runEncoded__P3654_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: runEncoded__P3654, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  encoded___4723: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function runProgram__P3653(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.pkt___4731 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = jacdac_JDPacket_from__P2782_mk(s);
    s.tmp_0.arg0 = 129;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 626; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.pkt___4731 = (r0);
    s.tmp_0 = jacdac_JDPacket_sendAsMultiCommand__P2821_mk(s);
    s.tmp_0.arg0 = s.pkt___4731;
    s.tmp_0.arg1 = 309264608;
    s.callLocIdx = 627; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
runProgram__P3653.info = {"start":2950,"length":153,"line":102,"column":0,"endLine":105,"endColumn":1,"fileName":"main.ts","functionName":"runProgram","argumentNames":["prog"]}

function runProgram__P3653_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: runProgram__P3653, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  pkt___4731: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_from__P2782(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.p___4741 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_JDPacket__C2777_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_JDPacket_constructor__P3897_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 103; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.p___4741 = (s.tmp_0);
    s.tmp_0 = r0 = s.p___4741;
    r0 = pxsim.control.createBuffer(16);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["_header"] = (s.tmp_1);
    s.tmp_0 = jacdac_JDPacket_data__P2805_mk(s);
    s.tmp_0.arg0 = s.p___4741;
    s.tmp_0.arg1 = s.arg1;
    s.callLocIdx = 104; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    s.tmp_0 = jacdac_JDPacket_serviceCommand__P2797_mk(s);
    s.tmp_0.arg0 = s.p___4741;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 105; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = s.p___4741;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_from__P2782.info = {"start":1717,"length":252,"line":52,"column":8,"endLine":58,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"from","argumentNames":["serviceCommand","data"]}

function jacdac_JDPacket_from__P2782_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_from__P2782, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  p___4741: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_serviceCommand__P2797(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 4, 14, s.arg1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_serviceCommand__P2797.info = {"start":4128,"length":110,"line":124,"column":8,"endLine":126,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"serviceCommand","argumentNames":["this","cmd"]}

function jacdac_JDPacket_serviceCommand__P2797_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_serviceCommand__P2797, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_serviceCommand__P2796(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_0, 4, 14);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_serviceCommand__P2796.info = {"start":4010,"length":109,"line":121,"column":8,"endLine":123,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"serviceCommand","argumentNames":["this"]}
jacdac_JDPacket_serviceCommand__P2796.isGetter = true;

function jacdac_JDPacket_serviceCommand__P2796_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_serviceCommand__P2796, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_data__P2805(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = pxsim.BufferMethods.length(s.arg1);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > 236);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.throwValue("Too big");
  case 1:
  case 2:
    r0 = s.arg0.fields["_header"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.length(s.arg1);
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_2, 12, s.tmp_3);
    r0 = (s.arg0).fields["_data"] = (s.arg1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_data__P2805.info = {"start":5095,"length":177,"line":161,"column":8,"endLine":165,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"data","argumentNames":["this","buf"]}

function jacdac_JDPacket_data__P2805_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_data__P2805, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_data__P2804(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_data"];
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_data__P2804.info = {"start":5025,"length":60,"line":157,"column":8,"endLine":159,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"data","argumentNames":["this"]}
jacdac_JDPacket_data__P2804.isGetter = true;

function jacdac_JDPacket_data__P2804_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_data__P2804, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_JDPacket_constructor__P3897(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim.control.millis();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["timestamp"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_constructor__P3897.info = {"start":1388,"length":79,"line":41,"column":8,"endLine":43,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"inline","argumentNames":["this"]}

function jacdac_JDPacket_constructor__P3897_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_constructor__P3897, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_lightEncode__P3431(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.outarr___4794 = undefined;
    s.colors___4796 = undefined;
    s.pos___4798 = undefined;
    s.currcmd___4799 = undefined;
    s.pushNumber___4800 = undefined;
    s.flush___4841 = undefined;
    s.nextToken___4894 = undefined;
    s.token___4929 = undefined;
    s.t0___4932 = undefined;
    s.f___4957 = undefined;
    s.mm___4980 = undefined;
    s.v___5022 = undefined;
    s.v___5039 = undefined;
    s.vv___5051 = undefined;
    s.unnamed106___U14 = undefined;
    s.unnamed107___U15 = undefined;
    s.b___5060 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.outarr___4794 = (r0);
    r0 = pxsim_pxtrt.mklocRef();
    s.colors___4796 = (r0);
    s.tmp_0 = r0 = s.colors___4796;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = pxsim_pxtrt_stlocRef(s.tmp_0, s.tmp_1);
    r0 = pxsim_pxtrt.mklocRef();
    s.pos___4798 = (r0);
    r0 = pxsim_pxtrt_stlocRef(s.pos___4798, 0);
    r0 = pxsim_pxtrt.mklocRef();
    s.currcmd___4799 = (r0);
    r0 = pxsim_pxtrt_stlocRef(s.currcmd___4799, 0);
    r0 = pxsim_pxtcore_mkAction(1, pushNumber__P4800);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.outarr___4794);
    s.pushNumber___4800 = (s.tmp_0);
    r0 = pxsim_pxtcore_mkAction(3, flush__P4841);
    s.tmp_1 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_1, 0, s.currcmd___4799);
    r0 = pxsim_pxtrt_stclo(s.tmp_1, 1, s.colors___4796);
    r0 = pxsim_pxtrt_stclo(s.tmp_1, 2, s.outarr___4794);
    s.flush___4841 = (s.tmp_1);
    r0 = pxsim_pxtcore_mkAction(2, nextToken__P4894);
    s.tmp_2 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_2, 0, s.arg0);
    r0 = pxsim_pxtrt_stclo(s.tmp_2, 1, s.pos___4798);
    s.nextToken___4894 = (s.tmp_2);
  case 1:
    r0 = pxsim_pxtrt_ldlocRef(s.pos___4798);
    s.tmp_4 = r0;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_5 = r0;
    r0 = (s.tmp_4 < s.tmp_5);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 38; continue; }
    s.tmp_6 = lambda_1_mk(s);
    s.tmp_6.argL = s.nextToken___4894;
    setupLambda(s.tmp_6, s.tmp_6.argL);
    s.callLocIdx = 592; s.pc = 39; return s.tmp_6;
  case 39:
    r0 = s.retval;
    s.token___4929 = (r0);
    r0 = pxsim_String_.charCodeAt(s.token___4929, 0);
    s.t0___4932 = (r0);
    r0 = (97 <= s.t0___4932);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = (s.t0___4932 <= 122);
  case 3:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 14; continue; }
    s.tmp_2 = lambda_1_mk(s);
    s.tmp_2.argL = s.flush___4841;
    setupLambda(s.tmp_2, s.tmp_2.argL);
    s.callLocIdx = 593; s.pc = 40; return s.tmp_2;
  case 40:
    r0 = s.retval;
    s.tmp_0 = r0 = s.currcmd___4799;
    s.tmp_2 = jacdac_cmdCode__P4094_mk(s);
    s.tmp_2.arg0 = s.token___4929;
    s.callLocIdx = 594; s.pc = 41; return s.tmp_2;
  case 41:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_pxtrt_stlocRef(s.tmp_0, s.tmp_1);
    r0 = pxsim_pxtrt_ldlocRef(s.currcmd___4799);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    if ((s.token___4929) && (s.token___4929).vtable) {
    setupResume(s, 42);
    pxsim_String__stringConv(s.token___4929);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.token___4929) + ""; }
  case 42:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat("Unknown light command: ", s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_pxtcore.throwValue(s.tmp_2);
  case 4:
  case 5:
    r0 = pxsim_pxtrt_ldlocRef(s.currcmd___4799);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 == 256);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 12; continue; }
    s.tmp_7 = lambda_1_mk(s);
    s.tmp_7.argL = s.nextToken___4894;
    setupLambda(s.tmp_7, s.tmp_7.argL);
    s.callLocIdx = 595; s.pc = 43; return s.tmp_7;
  case 43:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String_.toNumber(s.tmp_6);
    s.f___4957 = (r0);
    s.tmp_1 = isNaN__P1982_mk(s);
    s.tmp_1.arg0 = s.f___4957;
    s.callLocIdx = 596; s.pc = 44; return s.tmp_1;
  case 44:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 6; continue; }
    r0 = s.tmp_0;
    { step = 7; continue; }
  case 6:
    r0 = (s.f___4957 < 0);
  case 7:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (!r0) { step = 8; continue; }
    r0 = s.tmp_2;
    { step = 9; continue; }
  case 8:
    r0 = (s.f___4957 > 2);
  case 9:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 10; continue; }
    r0 = pxsim_pxtcore.throwValue("expecting scale");
  case 10:
  case 11:
    r0 = pxsim_Array__push(s.outarr___4794, 216);
    r0 = pxsim_Array__push(s.outarr___4794, 3);
    r0 = pxsim_Array__push(s.outarr___4794, 208);
    s.tmp_0 = Math_clamp__P2016_mk(s);
    s.tmp_0.arg0 = 0;
    s.tmp_0.arg1 = 255;
    r0 = (128 * s.f___4957);
    s.tmp_1 = r0;
    r0 = pxsim.Math_.round(s.tmp_1);
    s.tmp_0.arg2 = r0;
    s.callLocIdx = 597; s.pc = 45; return s.tmp_0;
  case 45:
    r0 = s.retval;
    s.mm___4980 = (r0);
    r0 = pxsim_Array__push(s.outarr___4794, 193);
    r0 = pxsim_Array__push(s.outarr___4794, s.mm___4980);
    r0 = pxsim_Array__push(s.outarr___4794, s.mm___4980);
    r0 = pxsim_Array__push(s.outarr___4794, s.mm___4980);
    { step = 13; continue; }
  case 12:
    s.tmp_0 = r0 = s.outarr___4794;
    r0 = pxsim_pxtrt_ldlocRef(s.currcmd___4799);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
  case 13:
    { step = 37; continue; }
  case 14:
    r0 = (48 <= s.t0___4932);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 15; continue; }
    r0 = s.tmp_0;
    { step = 16; continue; }
  case 15:
    r0 = (s.t0___4932 <= 57);
  case 16:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 17; continue; }
    s.tmp_2 = lambda_2_mk(s);
    s.tmp_2.argL = s.pushNumber___4800;
    s.tmp_3 = parseInt__P1986_mk(s);
    s.tmp_3.arg0 = s.token___4929;
    s.tmp_3.arg1 = undefined;
    s.callLocIdx = 598; s.pc = 47; return s.tmp_3;
  case 47:
    r0 = s.retval;
    s.tmp_2.arg0 = r0;
    setupLambda(s.tmp_2, s.tmp_2.argL);
    s.callLocIdx = 599; s.pc = 46; return s.tmp_2;
  case 46:
    r0 = s.retval;
    { step = 36; continue; }
  case 17:
    r0 = (s.t0___4932 == 37);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 22; continue; }
    r0 = pxsim_Array__length(s.arg1);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 == 0);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 18; continue; }
    r0 = pxsim_pxtcore.throwValue("Out of args, %");
  case 18:
  case 19:
    r0 = pxsim_Array_.removeAt(s.arg1, 0);
    s.v___5022 = (r0);
    r0 = pxsim_pxtcore.typeOf(s.v___5022);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 != "number");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 20; continue; }
    r0 = pxsim_pxtcore.throwValue("Expecting number");
  case 20:
  case 21:
    s.tmp_2 = lambda_2_mk(s);
    s.tmp_2.argL = s.pushNumber___4800;
    s.tmp_2.arg0 = s.v___5022;
    setupLambda(s.tmp_2, s.tmp_2.argL);
    s.callLocIdx = 601; s.pc = 48; return s.tmp_2;
  case 48:
    r0 = s.retval;
    { step = 35; continue; }
  case 22:
    r0 = (s.t0___4932 == 35);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 33; continue; }
    r0 = pxsim_String_.length(s.token___4929);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 == 1);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 29; continue; }
    r0 = pxsim_Array__length(s.arg1);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 == 0);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 23; continue; }
    r0 = pxsim_pxtcore.throwValue("Out of args, #");
  case 23:
  case 24:
    r0 = pxsim_Array_.removeAt(s.arg1, 0);
    s.v___5039 = (r0);
    r0 = pxsim_pxtcore.typeOf(s.v___5039);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == "number");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 25; continue; }
    r0 = pxsim_pxtrt_ldlocRef(s.colors___4796);
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_2, s.v___5039);
    { step = 28; continue; }
  case 25:
    s.vv___5051 = (undefined);
    s.unnamed106___U14 = (s.v___5039);
    s.unnamed107___U15 = (0);
  case 26:
    s.tmp_0 = r0 = s.unnamed107___U15;
    r0 = pxsim_Array__length(s.unnamed106___U14);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 27; continue; }
    r0 = pxsim_Array__getAt(s.unnamed106___U14, s.unnamed107___U15);
    s.vv___5051 = (r0);
    r0 = pxsim_pxtrt_ldlocRef(s.colors___4796);
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_2, s.vv___5051);
    r0 = (s.unnamed107___U15 + 1);
    s.unnamed107___U15 = (r0);
    { step = 26; continue; }
  case 27:
    s.unnamed106___U14 = (undefined);
  case 28:
    { step = 32; continue; }
  case 29:
    r0 = pxsim_String_.length(s.token___4929);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 7);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 30; continue; }
    s.tmp_2 = Buffer_fromHex__P2631_mk(s);
    s.tmp_5 = helpers_stringSlice__P2008_mk(s);
    s.tmp_5.arg0 = s.token___4929;
    s.tmp_5.arg1 = 1;
    s.tmp_5.arg2 = undefined;
    s.callLocIdx = 603; s.pc = 50; return s.tmp_5;
  case 50:
    r0 = s.retval;
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 51);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 51:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat("00", s.tmp_3);
    s.tmp_2.arg0 = r0;
    s.callLocIdx = 604; s.pc = 49; return s.tmp_2;
  case 49:
    r0 = s.retval;
    s.b___5060 = (r0);
    r0 = pxsim_pxtrt_ldlocRef(s.colors___4796);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.b___5060, 12, 0);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    { step = 31; continue; }
  case 30:
    if ((s.token___4929) && (s.token___4929).vtable) {
    setupResume(s, 52);
    pxsim_String__stringConv(s.token___4929);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.token___4929) + ""; }
  case 52:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat("Invalid color: ", s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.throwValue(s.tmp_0);
  case 31:
  case 32:
  case 33:
  case 34:
  case 35:
  case 36:
  case 37:
    { step = 1; continue; }
  case 38:
    s.tmp_2 = lambda_1_mk(s);
    s.tmp_2.argL = s.flush___4841;
    setupLambda(s.tmp_2, s.tmp_2.argL);
    s.callLocIdx = 605; s.pc = 53; return s.tmp_2;
  case 53:
    r0 = s.retval;
    s.tmp_0 = Buffer_fromArray__P2635_mk(s);
    s.tmp_0.arg0 = s.outarr___4794;
    s.callLocIdx = 606; s.pc = 54; return s.tmp_0;
  case 54:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
jacdac_lightEncode__P3431.info = {"start":919,"length":3517,"line":36,"column":4,"endLine":131,"endColumn":5,"fileName":"pxt_modules/jacdac-ledpixel/encoder.ts","functionName":"lightEncode","argumentNames":["format","args"]}

function jacdac_lightEncode__P3431_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_lightEncode__P3431, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  outarr___4794: undefined,
  colors___4796: undefined,
  pos___4798: undefined,
  currcmd___4799: undefined,
  pushNumber___4800: undefined,
  flush___4841: undefined,
  nextToken___4894: undefined,
  token___4929: undefined,
  t0___4932: undefined,
  f___4957: undefined,
  mm___4980: undefined,
  v___5022: undefined,
  v___5039: undefined,
  vv___5051: undefined,
  unnamed106___U14: undefined,
  unnamed107___U15: undefined,
  b___5060: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function pushNumber__P4800(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 == null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = (s.arg0 | 0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 != s.arg0);
  case 2:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (!r0) { step = 3; continue; }
    r0 = s.tmp_2;
    { step = 4; continue; }
  case 3:
    r0 = (s.arg0 < 0);
  case 4:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBool(s.tmp_3);
    if (!r0) { step = 5; continue; }
    r0 = s.tmp_3;
    { step = 6; continue; }
  case 5:
    r0 = (s.arg0 >= 16383);
  case 6:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 7; continue; }
    if ((s.arg0) && (s.arg0).vtable) {
    setupResume(s, 11);
    pxsim_String__stringConv(s.arg0);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg0) + ""; }
  case 11:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String__concat("light: number out of range: ", s.tmp_6);
    s.tmp_5 = r0;
    r0 = pxsim_pxtcore.throwValue(s.tmp_5);
  case 7:
  case 8:
    r0 = (s.arg0 < 128);
    s.tmp_7 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_7);
    if (!r0) { step = 9; continue; }
    r0 = pxsim_Array__push(s.caps[0], s.arg0);
    { step = 10; continue; }
  case 9:
    s.tmp_0 = r0 = s.caps[0];
    r0 = (s.arg0 >> 8);
    s.tmp_2 = r0;
    r0 = (128 | s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    s.tmp_0 = r0 = s.caps[0];
    r0 = (s.arg0 & 255);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
  case 10:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
pushNumber__P4800.info = {"start":1117,"length":321,"line":42,"column":8,"endLine":50,"endColumn":9,"fileName":"pxt_modules/jacdac-ledpixel/encoder.ts","functionName":"pushNumber","argumentNames":["n"]}

function pushNumber__P4800_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pushNumber__P4800, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  arg0: undefined,
} }





function flush__P4841(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.c___4869 = undefined;
    s.unnamed104___U1 = undefined;
    s.unnamed105___U2 = undefined;
    r0 = pxsim_pxtrt_ldlocRef(s.caps[0]);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 207);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = pxsim_pxtrt_ldlocRef(s.caps[1]);
    s.tmp_4 = r0;
    r0 = pxsim_Array__length(s.tmp_4);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 != 1);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.throwValue("setone requires 1 color");
  case 1:
  case 2:
    { step = 8; continue; }
  case 3:
    r0 = pxsim_pxtrt_ldlocRef(s.caps[1]);
    s.tmp_7 = r0;
    r0 = pxsim_Array__length(s.tmp_7);
    s.tmp_6 = r0;
    r0 = (s.tmp_6 == 0);
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 4; continue; }
    { step = 11; continue; }
  case 4:
  case 5:
    r0 = pxsim_pxtrt_ldlocRef(s.caps[1]);
    s.tmp_10 = r0;
    r0 = pxsim_Array__length(s.tmp_10);
    s.tmp_9 = r0;
    r0 = (s.tmp_9 <= 3);
    s.tmp_8 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_8);
    if (!r0) { step = 6; continue; }
    s.tmp_11 = r0 = s.caps[2];
    r0 = pxsim_pxtrt_ldlocRef(s.caps[1]);
    s.tmp_14 = r0;
    r0 = pxsim_Array__length(s.tmp_14);
    s.tmp_13 = r0;
    r0 = (192 | s.tmp_13);
    s.tmp_12 = r0;
    r0 = pxsim_Array__push(s.tmp_11, s.tmp_12);
    { step = 7; continue; }
  case 6:
    r0 = pxsim_Array__push(s.caps[2], 192);
    s.tmp_0 = r0 = s.caps[2];
    r0 = pxsim_pxtrt_ldlocRef(s.caps[1]);
    s.tmp_2 = r0;
    r0 = pxsim_Array__length(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
  case 7:
  case 8:
    s.c___4869 = (undefined);
    r0 = pxsim_pxtrt_ldlocRef(s.caps[1]);
    s.unnamed104___U1 = (r0);
    s.unnamed105___U2 = (0);
  case 9:
    s.tmp_0 = r0 = s.unnamed105___U2;
    r0 = pxsim_Array__length(s.unnamed104___U1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 10; continue; }
    r0 = pxsim_Array__getAt(s.unnamed104___U1, s.unnamed105___U2);
    s.c___4869 = (r0);
    s.tmp_2 = r0 = s.caps[2];
    r0 = (s.c___4869 >> 16);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 & 255);
    s.tmp_3 = r0;
    r0 = pxsim_Array__push(s.tmp_2, s.tmp_3);
    s.tmp_0 = r0 = s.caps[2];
    r0 = (s.c___4869 >> 8);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 255);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    s.tmp_0 = r0 = s.caps[2];
    r0 = (s.c___4869 >> 0);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 255);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    r0 = (s.unnamed105___U2 + 1);
    s.unnamed105___U2 = (r0);
    { step = 9; continue; }
  case 10:
    s.unnamed104___U1 = (undefined);
    s.tmp_0 = r0 = s.caps[1];
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = pxsim_pxtrt_stlocRef(s.tmp_0, s.tmp_1);
  case 11:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
flush__P4841.info = {"start":1448,"length":627,"line":52,"column":8,"endLine":69,"endColumn":9,"fileName":"pxt_modules/jacdac-ledpixel/encoder.ts","functionName":"flush","argumentNames":[]}

function flush__P4841_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: flush__P4841, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  c___4869: undefined,
  unnamed104___U1: undefined,
  unnamed105___U2: undefined,
} }





function nextToken__P4894(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.beg___4903 = undefined;
  case 1:
    s.tmp_1 = jacdac_isWhiteSpace__P4095_mk(s);
    s.tmp_2 = r0 = s.caps[0];
    r0 = pxsim_pxtrt_ldlocRef(s.caps[1]);
    s.tmp_3 = r0;
    r0 = pxsim_String_.charCodeAt(s.tmp_2, s.tmp_3);
    s.tmp_1.arg0 = r0;
    s.callLocIdx = 589; s.pc = 7; return s.tmp_1;
  case 7:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_4 = r0 = s.caps[1];
    r0 = pxsim_pxtrt_ldlocRef(s.caps[1]);
    s.tmp_6 = r0;
    r0 = (s.tmp_6 + 1);
    s.tmp_5 = r0;
    r0 = pxsim_pxtrt_stlocRef(s.tmp_4, s.tmp_5);
    { step = 1; continue; }
  case 2:
    r0 = pxsim_pxtrt_ldlocRef(s.caps[1]);
    s.beg___4903 = (r0);
  case 3:
    r0 = pxsim_pxtrt_ldlocRef(s.caps[1]);
    s.tmp_1 = r0;
    r0 = pxsim_String_.length(s.caps[0]);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = s.tmp_0;
    { step = 5; continue; }
  case 4:
    s.tmp_5 = jacdac_isWhiteSpace__P4095_mk(s);
    s.tmp_6 = r0 = s.caps[0];
    r0 = pxsim_pxtrt_ldlocRef(s.caps[1]);
    s.tmp_7 = r0;
    r0 = pxsim_String_.charCodeAt(s.tmp_6, s.tmp_7);
    s.tmp_5.arg0 = r0;
    s.callLocIdx = 590; s.pc = 8; return s.tmp_5;
  case 8:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    s.tmp_3 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_3);
  case 5:
    // jmp value (already in r0)
    s.tmp_8 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_8);
    if (!r0) { step = 6; continue; }
    s.tmp_9 = r0 = s.caps[1];
    r0 = pxsim_pxtrt_ldlocRef(s.caps[1]);
    s.tmp_11 = r0;
    r0 = (s.tmp_11 + 1);
    s.tmp_10 = r0;
    r0 = pxsim_pxtrt_stlocRef(s.tmp_9, s.tmp_10);
    { step = 3; continue; }
  case 6:
    s.tmp_0 = helpers_stringSlice__P2008_mk(s);
    s.tmp_0.arg0 = s.caps[0];
    s.tmp_0.arg1 = s.beg___4903;
    r0 = pxsim_pxtrt_ldlocRef(s.caps[1]);
    s.tmp_0.arg2 = r0;
    s.callLocIdx = 591; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
nextToken__P4894.info = {"start":2085,"length":268,"line":71,"column":8,"endLine":77,"endColumn":9,"fileName":"pxt_modules/jacdac-ledpixel/encoder.ts","functionName":"nextToken","argumentNames":[]}

function nextToken__P4894_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: nextToken__P4894, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  beg___4903: undefined,
} }





function Buffer_fromArray__P2635(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___5087 = undefined;
    s.i___5092 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__length(s.arg0);
    s.tmp_0 = r0;
    r0 = pxsim.control.createBuffer(s.tmp_0);
    s.buf___5087 = (r0);
    s.i___5092 = (0);
  case 1:
    s.tmp_1 = r0 = s.i___5092;
    r0 = pxsim_Array__length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_3 = r0 = s.buf___5087;
    s.tmp_4 = r0 = s.i___5092;
    r0 = pxsim_Array__getAt(s.arg0, s.i___5092);
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_3, s.tmp_4, s.tmp_5);
    r0 = (s.i___5092 + 1);
    s.i___5092 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = s.buf___5087;
    return leave(s, r0)
  default: oops()
} } }
Buffer_fromArray__P2635.info = {"start":11216,"length":192,"line":396,"column":4,"endLine":401,"endColumn":5,"fileName":"pxt_modules/core/buffer.ts","functionName":"fromArray","argumentNames":["bytes"]}

function Buffer_fromArray__P2635_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_fromArray__P2635, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  buf___5087: undefined,
  i___5092: undefined,
  arg0: undefined,
} }





function Buffer_fromHex__P2631(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.hexStr___5108 = undefined;
    s.res___5110 = undefined;
    s.i___5119 = undefined;
    s.p0___5125 = undefined;
    s.p1___5134 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.hexStr___5108 = ("0123456789abcdef");
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >> 1);
    s.tmp_0 = r0;
    r0 = pxsim.control.createBuffer(s.tmp_0);
    s.res___5110 = (r0);
    s.tmp_0 = helpers_stringToLowerCase__P2010_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 64; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    s.arg0 = (r0);
    s.i___5119 = (0);
  case 1:
    s.tmp_1 = r0 = s.i___5119;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_3 = r0 = s.hexStr___5108;
    r0 = pxsim_String_.charAt(s.arg0, s.i___5119);
    s.tmp_4 = r0;
    r0 = pxsim_String_.indexOf(s.tmp_3, s.tmp_4, undefined);
    s.p0___5125 = (r0);
    s.tmp_0 = r0 = s.hexStr___5108;
    s.tmp_2 = r0 = s.arg0;
    r0 = (s.i___5119 + 1);
    s.tmp_3 = r0;
    r0 = pxsim_String_.charAt(s.tmp_2, s.tmp_3);
    s.tmp_1 = r0;
    r0 = pxsim_String_.indexOf(s.tmp_0, s.tmp_1, undefined);
    s.p1___5134 = (r0);
    r0 = (s.p0___5125 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = (s.p1___5134 < 0);
  case 3:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.throwValue("Invalid hex");
  case 4:
  case 5:
    s.tmp_2 = r0 = s.res___5110;
    r0 = (s.i___5119 >> 1);
    s.tmp_3 = r0;
    r0 = (s.p0___5125 << 4);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 | s.p1___5134);
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_2, s.tmp_3, s.tmp_4);
    r0 = (s.i___5119 + 2);
    s.i___5119 = (r0);
    { step = 1; continue; }
  case 6:
    r0 = s.res___5110;
    return leave(s, r0)
  default: oops()
} } }
Buffer_fromHex__P2631.info = {"start":8064,"length":469,"line":285,"column":4,"endLine":297,"endColumn":5,"fileName":"pxt_modules/core/buffer.ts","functionName":"fromHex","argumentNames":["hex"]}

function Buffer_fromHex__P2631_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_fromHex__P2631, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  hexStr___5108: undefined,
  res___5110: undefined,
  i___5119: undefined,
  p0___5125: undefined,
  p1___5134: undefined,
  arg0: undefined,
} }





function helpers_stringToLowerCase__P2010(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.r___5165 = undefined;
    s.prev___5166 = undefined;
    s.i___5167 = undefined;
    s.c___5173 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_String_.mkEmpty();
    s.r___5165 = (r0);
    s.prev___5166 = (0);
    s.i___5167 = (0);
  case 1:
    s.tmp_1 = r0 = s.i___5167;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    r0 = pxsim_String_.charCodeAt(s.arg0, s.i___5167);
    s.c___5173 = (r0);
    r0 = (65 <= s.c___5173);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = (s.c___5173 <= 90);
  case 3:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 4; continue; }
    if ((s.r___5165) && (s.r___5165).vtable) {
    setupResume(s, 7);
    pxsim_String__stringConv(s.r___5165);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___5165) + ""; }
  case 7:
    r0 = s.retval;
    s.tmp_2 = r0;
    s.tmp_7 = helpers_stringSlice__P2008_mk(s);
    s.tmp_7.arg0 = s.arg0;
    s.tmp_7.arg1 = s.prev___5166;
    s.tmp_7.arg2 = s.i___5167;
    s.callLocIdx = 12; s.pc = 8; return s.tmp_7;
  case 8:
    r0 = s.retval;
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 9);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 9:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = (s.c___5173 + 32);
    s.tmp_10 = r0;
    r0 = pxsim_String_.fromCharCode(s.tmp_10);
    s.tmp_9 = r0;
    if ((s.tmp_9) && (s.tmp_9).vtable) {
    setupResume(s, 10);
    pxsim_String__stringConv(s.tmp_9);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_9) + ""; }
  case 10:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = pxsim_String__concat(s.tmp_5, s.tmp_8);
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 11);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 11:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_2, s.tmp_3);
    s.r___5165 = (r0);
    r0 = (s.i___5167 + 1);
    s.prev___5166 = (r0);
  case 4:
  case 5:
    r0 = (s.i___5167 + 1);
    s.i___5167 = (r0);
    { step = 1; continue; }
  case 6:
    if ((s.r___5165) && (s.r___5165).vtable) {
    setupResume(s, 12);
    pxsim_String__stringConv(s.r___5165);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___5165) + ""; }
  case 12:
    r0 = s.retval;
    s.tmp_0 = r0;
    s.tmp_3 = helpers_stringSlice__P2008_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.tmp_3.arg1 = s.prev___5166;
    s.tmp_3.arg2 = undefined;
    s.callLocIdx = 13; s.pc = 13; return s.tmp_3;
  case 13:
    r0 = s.retval;
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 14);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 14:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_1);
    s.r___5165 = (r0);
    r0 = s.r___5165;
    return leave(s, r0)
  default: oops()
} } }
helpers_stringToLowerCase__P2010.info = {"start":12527,"length":386,"line":420,"column":4,"endLine":432,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"stringToLowerCase","argumentNames":["s"]}

function helpers_stringToLowerCase__P2010_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_stringToLowerCase__P2010, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  r___5165: undefined,
  prev___5166: undefined,
  i___5167: undefined,
  c___5173: undefined,
  arg0: undefined,
} }





function helpers_arrayShift__P1991(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array_.removeAt(s.arg0, 0);
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayShift__P1991.info = {"start":4045,"length":82,"line":153,"column":4,"endLine":155,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"arrayShift","argumentNames":["arr"]}

function helpers_arrayShift__P1991_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayShift__P1991, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function parseInt__P1986(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.start___5238 = undefined;
    s.sign___5268 = undefined;
    s.output___5313 = undefined;
    s.hasDigit___5314 = undefined;
    s.i___5315 = undefined;
    s.code___5322 = undefined;
    s.val___5329 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 6; continue; }
  case 1:
    r0 = (s.arg1 != null);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_2;
    { step = 5; continue; }
  case 2:
    r0 = (s.arg1 < 2);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBool(s.tmp_3);
    if (!r0) { step = 3; continue; }
    r0 = s.tmp_3;
    { step = 4; continue; }
  case 3:
    r0 = (s.arg1 > 36);
  case 4:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = s.tmp_4;
  case 5:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = s.tmp_5;
  case 6:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_6);
    if (!r0) { step = 7; continue; }
    r0 = NaN;
    { step = 46; continue; }
  case 7:
  case 8:
    s.start___5238 = (0);
  case 9:
    s.tmp_1 = r0 = s.start___5238;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = s.tmp_0;
    { step = 11; continue; }
  case 10:
    s.tmp_3 = helpers_isWhitespace__P2013_mk(s);
    r0 = pxsim_String_.charCodeAt(s.arg0, s.start___5238);
    s.tmp_3.arg0 = r0;
    s.callLocIdx = 0; s.pc = 47; return s.tmp_3;
  case 47:
    r0 = s.retval;
  case 11:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 12; continue; }
    r0 = (s.start___5238 + 1);
    s.start___5238 = (r0);
    { step = 9; continue; }
  case 12:
    s.tmp_1 = r0 = s.start___5238;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 === s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    r0 = NaN;
    { step = 46; continue; }
  case 13:
  case 14:
    s.sign___5268 = (1);
    r0 = pxsim_String_.charAt(s.arg0, s.start___5238);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.switch_eq("-", s.tmp_0);
    if (r0) { step = 15; continue; }
    r0 = pxsim_pxtcore.switch_eq("+", s.tmp_0);
    if (r0) { step = 16; continue; }
    r0 = s.tmp_0;
    { step = 17; continue; }
  case 15:
    s.sign___5268 = (-1);
  case 16:
    r0 = (s.start___5238 + 1);
    s.start___5238 = (r0);
  case 17:
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 18; continue; }
    r0 = s.tmp_0;
    { step = 19; continue; }
  case 18:
    r0 = (s.arg1 == 16);
  case 19:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (r0) { step = 20; continue; }
    r0 = s.tmp_2;
    { step = 21; continue; }
  case 20:
    r0 = pxsim_String_.charAt(s.arg0, s.start___5238);
    s.tmp_3 = r0;
    r0 = ("0" === s.tmp_3);
  case 21:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBool(s.tmp_4);
    if (r0) { step = 22; continue; }
    r0 = s.tmp_4;
    { step = 25; continue; }
  case 22:
    s.tmp_7 = r0 = s.arg0;
    r0 = (s.start___5238 + 1);
    s.tmp_8 = r0;
    r0 = pxsim_String_.charAt(s.tmp_7, s.tmp_8);
    s.tmp_6 = r0;
    r0 = ("x" === s.tmp_6);
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBool(s.tmp_5);
    if (!r0) { step = 23; continue; }
    r0 = s.tmp_5;
    { step = 24; continue; }
  case 23:
    s.tmp_10 = r0 = s.arg0;
    r0 = (s.start___5238 + 1);
    s.tmp_11 = r0;
    r0 = pxsim_String_.charAt(s.tmp_10, s.tmp_11);
    s.tmp_9 = r0;
    r0 = ("X" === s.tmp_9);
  case 24:
    // jmp value (already in r0)
    s.tmp_12 = r0;
    r0 = s.tmp_12;
  case 25:
    // jmp value (already in r0)
    s.tmp_13 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_13);
    if (!r0) { step = 26; continue; }
    s.arg1 = (16);
    r0 = (s.start___5238 + 2);
    s.start___5238 = (r0);
    { step = 29; continue; }
  case 26:
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 27; continue; }
    s.arg1 = (10);
  case 27:
  case 28:
  case 29:
    s.output___5313 = (0);
    s.hasDigit___5314 = (false);
    s.i___5315 = (s.start___5238);
  case 30:
    s.tmp_1 = r0 = s.i___5315;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 45; continue; }
    r0 = pxsim_String_.charCodeAt(s.arg0, s.i___5315);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 | 32);
    s.code___5322 = (r0);
    s.val___5329 = (undefined);
    r0 = (s.code___5322 >= 48);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 31; continue; }
    r0 = s.tmp_0;
    { step = 32; continue; }
  case 31:
    r0 = (s.code___5322 < 58);
  case 32:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 33; continue; }
    r0 = (s.code___5322 - 48);
    s.val___5329 = (r0);
    { step = 38; continue; }
  case 33:
    r0 = (s.code___5322 >= 97);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 34; continue; }
    r0 = s.tmp_0;
    { step = 35; continue; }
  case 34:
    r0 = (s.code___5322 < 123);
  case 35:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 36; continue; }
    r0 = (10 + s.code___5322);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 - 97);
    s.val___5329 = (r0);
  case 36:
  case 37:
  case 38:
    r0 = (s.val___5329 == undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 39; continue; }
    r0 = s.tmp_0;
    { step = 40; continue; }
  case 39:
    r0 = (s.val___5329 >= s.arg1);
  case 40:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 43; continue; }
    r0 = pxsim_numops_toBoolDecr(s.hasDigit___5314);
    s.tmp_3 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 41; continue; }
    r0 = NaN;
    { step = 46; continue; }
  case 41:
  case 42:
    { step = 45; continue; }
  case 43:
  case 44:
    s.hasDigit___5314 = (true);
    r0 = (s.output___5313 * s.arg1);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + s.val___5329);
    s.output___5313 = (r0);
    r0 = (s.i___5315 + 1);
    s.i___5315 = (r0);
    { step = 30; continue; }
  case 45:
    r0 = (s.sign___5268 * s.output___5313);
  case 46:
    return leave(s, r0)
  default: oops()
} } }
parseInt__P1986.info = {"start":1064,"length":1690,"line":44,"column":0,"endLine":103,"endColumn":1,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"parseInt","argumentNames":["text","radix"]}

function parseInt__P1986_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: parseInt__P1986, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  start___5238: undefined,
  sign___5268: undefined,
  output___5313: undefined,
  hasDigit___5314: undefined,
  i___5315: undefined,
  code___5322: undefined,
  val___5329: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function helpers_isWhitespace__P2013(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq(9, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(11, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(12, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(32, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(160, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq(65279, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq(10, s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim_pxtcore.switch_eq(13, s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = pxsim_pxtcore.switch_eq(8232, s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim_pxtcore.switch_eq(8233, s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = s.tmp_0;
    { step = 11; continue; }
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    r0 = true;
    { step = 12; continue; }
  case 11:
    r0 = false;
    { step = 12; continue; }
    r0 = undefined;
  case 12:
    return leave(s, r0)
  default: oops()
} } }
helpers_isWhitespace__P2013.info = {"start":14864,"length":674,"line":503,"column":4,"endLine":520,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"isWhitespace","argumentNames":["c"]}

function helpers_isWhitespace__P2013_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_isWhitespace__P2013, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function Math_clamp__P2016(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = Math_min__P2020_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.tmp_1 = Math_max__P2019_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_1.arg1 = s.arg2;
    s.callLocIdx = 14; s.pc = 2; return s.tmp_1;
  case 2:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 15; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
Math_clamp__P2016.info = {"start":15643,"length":130,"line":528,"column":4,"endLine":530,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"clamp","argumentNames":["min","max","value"]}

function Math_clamp__P2016_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_clamp__P2016, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function Math_max__P2019(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 >= s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0;
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = s.arg1;
  case 3:
    return leave(s, r0)
  default: oops()
} } }
Math_max__P2019.info = {"start":16564,"length":105,"line":556,"column":4,"endLine":559,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"max","argumentNames":["a","b"]}

function Math_max__P2019_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_max__P2019, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Math_min__P2020(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 <= s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0;
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = s.arg1;
  case 3:
    return leave(s, r0)
  default: oops()
} } }
Math_min__P2020.info = {"start":16779,"length":105,"line":565,"column":4,"endLine":568,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"min","argumentNames":["a","b"]}

function Math_min__P2020_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_min__P2020, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function isNaN__P1982(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 - 0);
    s.arg0 = (r0);
    r0 = (s.arg0 !== s.arg0);
    return leave(s, r0)
  default: oops()
} } }
isNaN__P1982.info = {"start":169,"length":80,"line":12,"column":0,"endLine":15,"endColumn":1,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"isNaN","argumentNames":["x"]}

function isNaN__P1982_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: isNaN__P1982, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_cmdCode__P4094(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq("setall", s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq("fade", s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq("fadehsv", s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq("rotfwd", s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq("rotback", s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq("show", s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq("wait", s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim_pxtcore.switch_eq("range", s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = pxsim_pxtcore.switch_eq("mode", s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim_pxtcore.switch_eq("tmpmode", s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = pxsim_pxtcore.switch_eq("set1", s.tmp_0);
    if (r0) { step = 11; continue; }
    r0 = pxsim_pxtcore.switch_eq("setone", s.tmp_0);
    if (r0) { step = 12; continue; }
    r0 = pxsim_pxtcore.switch_eq("mult", s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = s.tmp_0;
    { step = 14; continue; }
  case 1:
    r0 = 208;
    { step = 15; continue; }
  case 2:
    r0 = 209;
    { step = 15; continue; }
  case 3:
    r0 = 210;
    { step = 15; continue; }
  case 4:
    r0 = 211;
    { step = 15; continue; }
  case 5:
    r0 = 212;
    { step = 15; continue; }
  case 6:
  case 7:
    r0 = 213;
    { step = 15; continue; }
  case 8:
    r0 = 214;
    { step = 15; continue; }
  case 9:
    r0 = 215;
    { step = 15; continue; }
  case 10:
    r0 = 216;
    { step = 15; continue; }
  case 11:
  case 12:
    r0 = 207;
    { step = 15; continue; }
  case 13:
    r0 = 256;
    { step = 15; continue; }
  case 14:
    r0 = undefined;
    { step = 15; continue; }
    r0 = undefined;
  case 15:
    return leave(s, r0)
  default: oops()
} } }
jacdac_cmdCode__P4094.info = {"start":23,"length":774,"line":1,"column":4,"endLine":30,"endColumn":5,"fileName":"pxt_modules/jacdac-ledpixel/encoder.ts","functionName":"cmdCode","argumentNames":["cmd"]}

function jacdac_cmdCode__P4094_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_cmdCode__P4094, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function helpers_stringSlice__P2008(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___5421 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_String_.length(s.arg0);
    s.len___5421 = (r0);
    r0 = (s.arg1 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = Math_max__P2019_mk(s);
    r0 = (s.len___5421 + s.arg1);
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = 0;
    s.callLocIdx = 11; s.pc = 9; return s.tmp_1;
  case 9:
    r0 = s.retval;
    s.arg1 = (r0);
  case 1:
  case 2:
    r0 = (s.arg2 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.arg2 = (s.len___5421);
    { step = 6; continue; }
  case 3:
    r0 = (s.arg2 === null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.arg2 = (0);
  case 4:
  case 5:
  case 6:
    r0 = (s.arg2 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    r0 = (s.len___5421 + s.arg2);
    s.arg2 = (r0);
  case 7:
  case 8:
    s.tmp_0 = r0 = s.arg0;
    s.tmp_1 = r0 = s.arg1;
    r0 = (s.arg2 - s.arg1);
    s.tmp_2 = r0;
    r0 = pxsim_String_.substr(s.tmp_0, s.tmp_1, s.tmp_2);
    return leave(s, r0)
  default: oops()
} } }
helpers_stringSlice__P2008.info = {"start":11496,"length":440,"line":384,"column":4,"endLine":402,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"stringSlice","argumentNames":["s","start","end"]}

function helpers_stringSlice__P2008_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_stringSlice__P2008, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  len___5421: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_isWhiteSpace__P4095(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 == 32);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = (s.arg0 == 13);
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBool(s.tmp_1);
    if (!r0) { step = 3; continue; }
    r0 = s.tmp_1;
    { step = 4; continue; }
  case 3:
    r0 = (s.arg0 == 10);
  case 4:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (!r0) { step = 5; continue; }
    r0 = s.tmp_2;
    { step = 6; continue; }
  case 5:
    r0 = (s.arg0 == 9);
  case 6:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = s.tmp_3;
    return leave(s, r0)
  default: oops()
} } }
jacdac_isWhiteSpace__P4095.info = {"start":803,"length":110,"line":32,"column":4,"endLine":34,"endColumn":5,"fileName":"pxt_modules/jacdac-ledpixel/encoder.ts","functionName":"isWhiteSpace","argumentNames":["code"]}

function jacdac_isWhiteSpace__P4095_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_isWhiteSpace__P4095, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function setServoAngle__P3675(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.angle___5466 = undefined;
    s.pkt___5476 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 === 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = -90;
    { step = 4; continue; }
  case 1:
    r0 = (s.arg0 === 2);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = 90;
    { step = 3; continue; }
  case 2:
    r0 = 0;
  case 3:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = s.tmp_2;
  case 4:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    s.angle___5466 = (s.tmp_3);
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.angle___5466);
    s.tmp_1 = jacdac_JDPacket_jdpacked__P2784_mk(s);
    s.tmp_1.arg0 = 8194;
    s.tmp_1.arg1 = "i16.16";
    s.tmp_1.arg2 = s.tmp_0;
    s.callLocIdx = 685; s.pc = 5; return s.tmp_1;
  case 5:
    r0 = s.retval;
    s.pkt___5476 = (r0);
    s.tmp_0 = jacdac_JDPacket_sendAsMultiCommand__P2821_mk(s);
    s.tmp_0.arg0 = s.pkt___5476;
    s.tmp_0.arg1 = 318542083;
    s.callLocIdx = 686; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
setServoAngle__P3675.info = {"start":10678,"length":281,"line":372,"column":0,"endLine":380,"endColumn":1,"fileName":"main.ts","functionName":"setServoAngle","argumentNames":["b"]}

function setServoAngle__P3675_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: setServoAngle__P3675, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  angle___5466: undefined,
  pkt___5476: undefined,
  arg0: undefined,
} }





function tonePlayer__P3669(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim.control.inBackground(tonePlayer_inline__P5490);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
tonePlayer__P3669.info = {"start":6265,"length":296,"line":228,"column":0,"endLine":239,"endColumn":1,"fileName":"main.ts","functionName":"tonePlayer","argumentNames":[]}

function tonePlayer__P3669_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: tonePlayer__P3669, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function tonePlayer_inline__P5490(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.t___5493 = undefined;
  case 1:
    r0 = pxsim_numops_toBoolDecr(true);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_numops_toBoolDecr(globals.nextTone___3668);
    if (!r0) { step = 2; continue; }
    s.t___5493 = (globals.nextTone___3668);
    globals.nextTone___3668 = (0);
    s.tmp_0 = music_playTone__P2533_mk(s);
    s.tmp_0.arg0 = s.t___5493;
    s.tmp_1 = music_beat__P2537_mk(s);
    s.tmp_1.arg0 = 2;
    s.callLocIdx = 651; s.pc = 6; return s.tmp_1;
  case 6:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 652; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
  case 2:
  case 3:
    setupResume(s, 7);
    pxsim.basic.pause(5);
    checkResumeConsumed();
    return;
  case 7:
    r0 = s.retval;
    { step = 1; continue; }
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
tonePlayer_inline__P5490.info = {"start":6314,"length":244,"line":229,"column":25,"endLine":238,"endColumn":5,"fileName":"main.ts","functionName":"inline","argumentNames":[]}

function tonePlayer_inline__P5490_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: tonePlayer_inline__P5490, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  t___5493: undefined,
} }





function music_beat__P2537(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.beat___5509 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = music_init__P3785_mk(s);
    s.callLocIdx = 38; s.pc = 11; return s.tmp_0;
  case 11:
    r0 = s.retval;
    r0 = (s.arg0 == null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.arg0 = (1);
  case 1:
  case 2:
    r0 = pxsim.Math_.idiv(60000, globals.beatsPerMinute___3779);
    s.beat___5509 = (r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq(2, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(4, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(8, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq(16, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq(32, s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim_pxtcore.switch_eq(64, s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = s.tmp_0;
    { step = 9; continue; }
  case 3:
    r0 = (s.beat___5509 >> 1);
    { step = 10; continue; }
  case 4:
    r0 = (s.beat___5509 >> 2);
    { step = 10; continue; }
  case 5:
    r0 = (s.beat___5509 >> 3);
    { step = 10; continue; }
  case 6:
    r0 = (s.beat___5509 >> 4);
    { step = 10; continue; }
  case 7:
    r0 = (s.beat___5509 << 1);
    { step = 10; continue; }
  case 8:
    r0 = (s.beat___5509 << 2);
    { step = 10; continue; }
  case 9:
    r0 = s.beat___5509;
    { step = 10; continue; }
    r0 = undefined;
  case 10:
    return leave(s, r0)
  default: oops()
} } }
music_beat__P2537.info = {"start":8033,"length":600,"line":258,"column":4,"endLine":271,"endColumn":5,"fileName":"pxt_modules/core/music.ts","functionName":"beat","argumentNames":["fraction"]}

function music_beat__P2537_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: music_beat__P2537, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  beat___5509: undefined,
  arg0: undefined,
} }





function music_init__P3785(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = (globals.beatsPerMinute___3779 <= 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    globals.beatsPerMinute___3779 = (120);
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
music_init__P3785.info = {"start":7752,"length":78,"line":247,"column":4,"endLine":249,"endColumn":5,"fileName":"pxt_modules/core/music.ts","functionName":"init","argumentNames":[]}

function music_init__P3785_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: music_init__P3785, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function music_playTone__P2533(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(globals._playTone___3782);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = lambda_3_mk(s);
    s.tmp_0.argL = globals._playTone___3782;
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    setupLambda(s.tmp_0, s.tmp_0.argL);
    s.callLocIdx = 36; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    { step = 2; continue; }
  case 1:
    setupResume(s, 4);
    pxsim.pins.analogPitch(s.arg0, s.arg1);
    checkResumeConsumed();
    return;
  case 4:
    r0 = s.retval;
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
music_playTone__P2533.info = {"start":6330,"length":164,"line":200,"column":4,"endLine":203,"endColumn":5,"fileName":"pxt_modules/core/music.ts","functionName":"playTone","argumentNames":["frequency","ms"]}

function music_playTone__P2533_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: music_playTone__P2533, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function processSensorGetReading__P3672(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.lookup___5557 = undefined;
    s.position___5574 = undefined;
    s.position___5601 = undefined;
    s.temp___5622 = undefined;
    s.buttons___5658 = undefined;
    s.x___5659 = undefined;
    s.y___5660 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array_.indexOf(globals.knownSensors___3648, s.arg0, undefined);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == -1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 21; continue; }
  case 1:
  case 2:
    r0 = s.arg1.fields["_header"];
    s.tmp_7 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_7, 4, 8);
    s.tmp_6 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_6);
    s.tmp_5 = r0;
    if ((s.tmp_5) && (s.tmp_5).vtable) {
    setupResume(s, 22);
    pxsim_String__stringConv(s.tmp_5);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_5) + ""; }
  case 22:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, ":");
    s.tmp_3 = r0;
    if ((s.tmp_3) && (s.tmp_3).vtable) {
    setupResume(s, 23);
    pxsim_String__stringConv(s.tmp_3);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_3) + ""; }
  case 23:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = s.arg1.fields["_header"];
    s.tmp_12 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_12, 13);
    s.tmp_11 = r0;
    r0 = (s.tmp_11 & 63);
    s.tmp_10 = r0;
    r0 = pxsim_numops.toString(s.tmp_10);
    s.tmp_9 = r0;
    if ((s.tmp_9) && (s.tmp_9).vtable) {
    setupResume(s, 24);
    pxsim_String__stringConv(s.tmp_9);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_9) + ""; }
  case 24:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = pxsim_String__concat(s.tmp_2, s.tmp_8);
    s.lookup___5557 = (r0);
    r0 = (s.arg0 === 284830153);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    s.tmp_2 = jacdac_JDPacket_jdunpack__P2809_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.tmp_2.arg1 = "u32";
    s.callLocIdx = 666; s.pc = 25; return s.tmp_2;
  case 25:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_Array__getAt(s.tmp_1, 0);
    s.position___5574 = (r0);
    s.tmp_1 = r0 = s.position___5574;
    r0 = pxsim_pxtrt.mapGetGeneric(globals.sensorMap___3658, s.lookup___5557);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 !== s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = pxsim_pxtrt.mapSetGeneric(globals.sensorMap___3658, s.lookup___5557, s.position___5574);
    s.tmp_0 = led_plotBarGraph__P2449_mk(s);
    r0 = (s.position___5574 % 20);
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = 19;
    s.callLocIdx = 667; s.pc = 26; return s.tmp_0;
  case 26:
    r0 = s.retval;
  case 3:
  case 4:
    { step = 20; continue; }
  case 5:
    r0 = (s.arg0 === 522667846);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 6; continue; }
    r0 = s.tmp_0;
    { step = 7; continue; }
  case 6:
    r0 = (s.arg0 === 400333340);
  case 7:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBool(s.tmp_1);
    if (!r0) { step = 8; continue; }
    r0 = s.tmp_1;
    { step = 9; continue; }
  case 8:
    r0 = (s.arg0 === 524797638);
  case 9:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 12; continue; }
    s.tmp_6 = jacdac_JDPacket_jdunpack__P2809_mk(s);
    s.tmp_6.arg0 = s.arg1;
    s.tmp_6.arg1 = "u0.16";
    s.callLocIdx = 668; s.pc = 27; return s.tmp_6;
  case 27:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_Array__getAt(s.tmp_5, 0);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 * 100);
    s.tmp_3 = r0;
    r0 = pxsim.Math_.round(s.tmp_3);
    s.position___5601 = (r0);
    s.tmp_1 = r0 = s.position___5601;
    r0 = pxsim_pxtrt.mapGetGeneric(globals.sensorMap___3658, s.lookup___5557);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 !== s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 10; continue; }
    r0 = pxsim_pxtrt.mapSetGeneric(globals.sensorMap___3658, s.lookup___5557, s.position___5601);
    s.tmp_0 = led_plotBarGraph__P2449_mk(s);
    s.tmp_0.arg0 = s.position___5601;
    s.tmp_0.arg1 = 100;
    s.callLocIdx = 669; s.pc = 28; return s.tmp_0;
  case 28:
    r0 = s.retval;
  case 10:
  case 11:
    { step = 19; continue; }
  case 12:
    r0 = (s.arg0 === 337754823);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 15; continue; }
    s.tmp_3 = jacdac_JDPacket_jdunpack__P2809_mk(s);
    s.tmp_3.arg0 = s.arg1;
    s.tmp_3.arg1 = "i22.10";
    s.callLocIdx = 670; s.pc = 29; return s.tmp_3;
  case 29:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_Array__getAt(s.tmp_2, 0);
    s.tmp_1 = r0;
    r0 = pxsim.Math_.round(s.tmp_1);
    s.temp___5622 = (r0);
    s.tmp_1 = r0 = s.temp___5622;
    r0 = pxsim_pxtrt.mapGetGeneric(globals.sensorMap___3658, s.lookup___5557);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 !== s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    r0 = pxsim_pxtrt.mapSetGeneric(globals.sensorMap___3658, s.lookup___5557, s.temp___5622);
    r0 = pxsim_pxtcore_mkAction(1, processSensorGetReading_inline__P5639);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.temp___5622);
    r0 = pxsim.control.inBackground(s.tmp_0);
  case 13:
  case 14:
    { step = 18; continue; }
  case 15:
    r0 = (s.arg0 === 277836886);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 16; continue; }
    s.tmp_2 = jacdac_JDPacket_jdunpack__P2809_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.tmp_2.arg1 = "i32 i1.15 i1.15";
    s.callLocIdx = 673; s.pc = 30; return s.tmp_2;
  case 30:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_Array__getAt(s.tmp_1, 0);
    s.buttons___5658 = (r0);
    r0 = pxsim_Array__getAt(s.tmp_1, 1);
    s.x___5659 = (r0);
    r0 = pxsim_Array__getAt(s.tmp_1, 2);
    s.y___5660 = (r0);
    s.tmp_0 = plot__P3673_mk(s);
    r0 = (s.x___5659 * 100);
    s.tmp_0.arg0 = r0;
    r0 = (s.y___5660 * 100);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 674; s.pc = 31; return s.tmp_0;
  case 31:
    r0 = s.retval;
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
  case 21:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
processSensorGetReading__P3672.info = {"start":7432,"length":1490,"line":268,"column":0,"endLine":302,"endColumn":1,"fileName":"main.ts","functionName":"processSensorGetReading","argumentNames":["serviceClass","pkt"]}

function processSensorGetReading__P3672_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: processSensorGetReading__P3672, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  lookup___5557: undefined,
  position___5574: undefined,
  position___5601: undefined,
  temp___5622: undefined,
  buttons___5658: undefined,
  x___5659: undefined,
  y___5660: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function processSensorGetReading_inline__P5639(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim.led.stopAnimation();
    r0 = (s.caps[0] < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = (s.caps[0] > 99);
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 3; continue; }
    s.tmp_2 = basic_showNumber__P2223_mk(s);
    s.tmp_2.arg0 = s.caps[0];
    s.tmp_2.arg1 = 150;
    s.callLocIdx = 671; s.pc = 5; return s.tmp_2;
  case 5:
    r0 = s.retval;
    { step = 4; continue; }
  case 3:
    s.tmp_0 = whaleysans_showNumber__P3640_mk(s);
    s.tmp_0.arg0 = s.caps[0];
    s.callLocIdx = 672; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
processSensorGetReading_inline__P5639.info = {"start":8571,"length":172,"line":292,"column":33,"endLine":296,"endColumn":13,"fileName":"main.ts","functionName":"inline","argumentNames":[]}

function processSensorGetReading_inline__P5639_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: processSensorGetReading_inline__P5639, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
} }





function plot__P3673(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.dispX___5670 = undefined;
    s.dispY___5671 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.basic.clearScreen();
    s.dispX___5670 = (2);
    s.dispY___5671 = (2);
    r0 = (s.arg0 < -30);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = (s.dispX___5670 - 1);
    s.dispX___5670 = (r0);
  case 1:
  case 2:
    r0 = (s.arg0 < -60);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = (s.dispX___5670 - 1);
    s.dispX___5670 = (r0);
  case 3:
  case 4:
    r0 = (s.arg0 > 30);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = (s.dispX___5670 + 1);
    s.dispX___5670 = (r0);
  case 5:
  case 6:
    r0 = (s.arg0 > 60);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    r0 = (s.dispX___5670 + 1);
    s.dispX___5670 = (r0);
  case 7:
  case 8:
    r0 = (s.arg1 < -30);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    r0 = (s.dispY___5671 - 1);
    s.dispY___5671 = (r0);
  case 9:
  case 10:
    r0 = (s.arg1 < -60);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    r0 = (s.dispY___5671 - 1);
    s.dispY___5671 = (r0);
  case 11:
  case 12:
    r0 = (s.arg1 > 30);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    r0 = (s.dispY___5671 + 1);
    s.dispY___5671 = (r0);
  case 13:
  case 14:
    r0 = (s.arg1 > 60);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 15; continue; }
    r0 = (s.dispY___5671 + 1);
    s.dispY___5671 = (r0);
  case 15:
  case 16:
    r0 = pxsim.led.plot(s.dispX___5670, s.dispY___5671);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
plot__P3673.info = {"start":8924,"length":514,"line":304,"column":0,"endLine":326,"endColumn":1,"fileName":"main.ts","functionName":"plot","argumentNames":["x","y"]}

function plot__P3673_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: plot__P3673, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  dispX___5670: undefined,
  dispY___5671: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function whaleysans_showNumber__P3640(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.a___5720 = undefined;
    s.b___5726 = undefined;
    s.i___5730 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.arg0 = (0);
  case 1:
  case 2:
    s.tmp_0 = r0 = globals.FONT___4292;
    r0 = pxsim.Math_.idiv(s.arg0, 10);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 % 10);
    s.tmp_1 = r0;
    r0 = pxsim_Array__getAt(s.tmp_0, s.tmp_1);
    s.a___5720 = (r0);
    s.tmp_0 = r0 = globals.FONT___4292;
    r0 = (s.arg0 % 10);
    s.tmp_1 = r0;
    r0 = pxsim_Array__getAt(s.tmp_0, s.tmp_1);
    s.b___5726 = (r0);
    s.i___5730 = (0);
  case 3:
    r0 = (s.i___5730 < 5);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.tmp_1 = r0 = globals.img___4294;
    s.tmp_2 = r0 = s.i___5730;
    s.tmp_5 = r0 = s.a___5720;
    r0 = (s.i___5730 * 2);
    s.tmp_6 = r0;
    r0 = pxsim_Array__getAt(s.tmp_5, s.tmp_6);
    s.tmp_4 = r0;
    r0 = (1 == s.tmp_4);
    s.tmp_3 = r0;
    r0 = pxsim_ImageMethods.setPixel(s.tmp_1, 0, s.tmp_2, s.tmp_3);
    s.tmp_0 = r0 = globals.img___4294;
    s.tmp_1 = r0 = s.i___5730;
    s.tmp_4 = r0 = s.a___5720;
    r0 = (s.i___5730 * 2);
    s.tmp_6 = r0;
    r0 = (s.tmp_6 + 1);
    s.tmp_5 = r0;
    r0 = pxsim_Array__getAt(s.tmp_4, s.tmp_5);
    s.tmp_3 = r0;
    r0 = (1 == s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_ImageMethods.setPixel(s.tmp_0, 1, s.tmp_1, s.tmp_2);
    s.tmp_0 = r0 = globals.img___4294;
    s.tmp_1 = r0 = s.i___5730;
    s.tmp_4 = r0 = s.b___5726;
    r0 = (s.i___5730 * 2);
    s.tmp_5 = r0;
    r0 = pxsim_Array__getAt(s.tmp_4, s.tmp_5);
    s.tmp_3 = r0;
    r0 = (1 == s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_ImageMethods.setPixel(s.tmp_0, 3, s.tmp_1, s.tmp_2);
    s.tmp_0 = r0 = globals.img___4294;
    s.tmp_1 = r0 = s.i___5730;
    s.tmp_4 = r0 = s.b___5726;
    r0 = (s.i___5730 * 2);
    s.tmp_6 = r0;
    r0 = (s.tmp_6 + 1);
    s.tmp_5 = r0;
    r0 = pxsim_Array__getAt(s.tmp_4, s.tmp_5);
    s.tmp_3 = r0;
    r0 = (1 == s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_ImageMethods.setPixel(s.tmp_0, 4, s.tmp_1, s.tmp_2);
    r0 = (s.i___5730 + 1);
    s.i___5730 = (r0);
    { step = 3; continue; }
  case 4:
    setupResume(s, 5);
    pxsim_ImageMethods.showImage(globals.img___4294, 0, 10);
    checkResumeConsumed();
    return;
  case 5:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
whaleysans_showNumber__P3640.info = {"start":963,"length":441,"line":35,"column":4,"endLine":49,"endColumn":5,"fileName":"pxt_modules/whaleysans/WhaleySansFont.ts","functionName":"showNumber","argumentNames":["dat"]}

function whaleysans_showNumber__P3640_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: whaleysans_showNumber__P3640, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  a___5720: undefined,
  b___5726: undefined,
  i___5730: undefined,
  arg0: undefined,
} }





function basic_showNumber__P2223(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_2 = Math_roundWithPrecision__P2021_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = 2;
    s.callLocIdx = 16; s.pc = 1; return s.tmp_2;
  case 1:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_numops.toString(s.tmp_1);
    s.tmp_0 = r0;
    setupResume(s, 2);
    pxsim.basic.showString(s.tmp_0, s.arg1);
    checkResumeConsumed();
    return;
  case 2:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
basic_showNumber__P2223.info = {"start":396,"length":144,"line":11,"column":4,"endLine":13,"endColumn":5,"fileName":"pxt_modules/core/basic.ts","functionName":"showNumber","argumentNames":["value","interval"]}

function basic_showNumber__P2223_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: basic_showNumber__P2223, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Math_roundWithPrecision__P2021(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.r___5815 = undefined;
    s.d___5817 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg1 | 0);
    s.arg1 = (r0);
    r0 = (s.arg1 <= 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim.Math_.round(s.arg0);
    { step = 9; continue; }
  case 1:
  case 2:
    r0 = (s.arg0 == 0);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 3; continue; }
    r0 = 0;
    { step = 9; continue; }
  case 3:
  case 4:
    s.r___5815 = (0);
  case 5:
    r0 = pxsim.Math_.pow(10, s.arg1);
    s.d___5817 = (r0);
    r0 = (s.arg0 * s.d___5817);
    s.tmp_1 = r0;
    r0 = pxsim.Math_.round(s.tmp_1);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 / s.d___5817);
    s.r___5815 = (r0);
    r0 = (s.arg1 + 1);
    s.arg1 = (r0);
    r0 = (s.r___5815 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = s.tmp_0;
    { step = 7; continue; }
  case 6:
    r0 = (s.arg1 < 21);
  case 7:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 8; continue; }
    { step = 5; continue; }
  case 8:
    r0 = s.r___5815;
  case 9:
    return leave(s, r0)
  default: oops()
} } }
Math_roundWithPrecision__P2021.info = {"start":17070,"length":411,"line":576,"column":4,"endLine":588,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"roundWithPrecision","argumentNames":["x","digits"]}

function Math_roundWithPrecision__P2021_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_roundWithPrecision__P2021, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  r___5815: undefined,
  d___5817: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function led_plotBarGraph__P2449(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.now___5839 = undefined;
    s.v___5869 = undefined;
    s.k___5877 = undefined;
    s.y___5878 = undefined;
    s.x___5882 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.control.millis();
    s.now___5839 = (r0);
    s.tmp_0 = console_logValue__P2379_mk(s);
    r0 = pxsim_String_.mkEmpty();
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 34; s.pc = 15; return s.tmp_0;
  case 15:
    r0 = s.retval;
    s.tmp_0 = Math_abs__P2017_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 35; s.pc = 16; return s.tmp_0;
  case 16:
    r0 = s.retval;
    s.arg0 = (r0);
    r0 = (s.arg1 > 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    globals.barGraphHigh___3773 = (s.arg1);
    { step = 6; continue; }
  case 1:
    r0 = (s.arg0 > globals.barGraphHigh___3773);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = (s.now___5839 - globals.barGraphHighLast___3775);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > 10000);
  case 3:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 4; continue; }
    globals.barGraphHigh___3773 = (s.arg0);
    globals.barGraphHighLast___3775 = (s.now___5839);
  case 4:
  case 5:
  case 6:
    r0 = (globals.barGraphHigh___3773 < 3.552713678800501e-15);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    globals.barGraphHigh___3773 = (1);
  case 7:
  case 8:
    r0 = (s.arg0 / globals.barGraphHigh___3773);
    s.v___5869 = (r0);
    s.k___5877 = (0);
    s.y___5878 = (4);
  case 9:
    r0 = (s.y___5878 >= 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    s.x___5882 = (0);
  case 10:
    r0 = (s.x___5882 < 3);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    r0 = (s.k___5877 > s.v___5869);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 11; continue; }
    r0 = (2 - s.x___5882);
    s.tmp_2 = r0;
    r0 = pxsim.led.unplot(s.tmp_2, s.y___5878);
    r0 = (2 + s.x___5882);
    s.tmp_0 = r0;
    r0 = pxsim.led.unplot(s.tmp_0, s.y___5878);
    { step = 12; continue; }
  case 11:
    r0 = (2 - s.x___5882);
    s.tmp_0 = r0;
    r0 = pxsim.led.plot(s.tmp_0, s.y___5878);
    r0 = (2 + s.x___5882);
    s.tmp_0 = r0;
    r0 = pxsim.led.plot(s.tmp_0, s.y___5878);
  case 12:
    r0 = (s.k___5877 + 0.0625);
    s.k___5877 = (r0);
    r0 = (s.x___5882 + 1);
    s.x___5882 = (r0);
    { step = 10; continue; }
  case 13:
    r0 = (s.y___5878 - 1);
    s.y___5878 = (r0);
    { step = 9; continue; }
  case 14:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
led_plotBarGraph__P2449.info = {"start":1253,"length":1035,"line":33,"column":4,"endLine":66,"endColumn":5,"fileName":"pxt_modules/core/led.ts","functionName":"plotBarGraph","argumentNames":["value","high"]}

function led_plotBarGraph__P2449_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: led_plotBarGraph__P2449, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  now___5839: undefined,
  v___5869: undefined,
  k___5877: undefined,
  y___5878: undefined,
  x___5882: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Math_abs__P2017(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = (0 - s.arg0);
    { step = 2; continue; }
  case 1:
    r0 = s.arg0;
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = s.tmp_1;
    return leave(s, r0)
  default: oops()
} } }
Math_abs__P2017.info = {"start":16095,"length":77,"line":538,"column":4,"endLine":540,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"abs","argumentNames":["x"]}

function Math_abs__P2017_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_abs__P2017, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function console_logValue__P2379(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_String_.mkEmpty();
    s.tmp_2 = r0;
    s.tmp_5 = console_inspect__P2380_mk(s);
    s.tmp_5.arg0 = s.arg0;
    s.tmp_5.arg1 = 20;
    s.callLocIdx = 22; s.pc = 3; return s.tmp_5;
  case 3:
    r0 = s.retval;
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 4);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 4:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_2, s.tmp_3);
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_1, ": ");
    s.tmp_0 = r0;
    s.tmp_8 = console_inspect__P2380_mk(s);
    s.tmp_8.arg0 = s.arg1;
    s.tmp_8.arg1 = 20;
    s.callLocIdx = 23; s.pc = 5; return s.tmp_8;
  case 5:
    r0 = s.retval;
    s.tmp_7 = r0;
    if ((s.tmp_7) && (s.tmp_7).vtable) {
    setupResume(s, 6);
    pxsim_String__stringConv(s.tmp_7);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_7) + ""; }
  case 6:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_6);
    { step = 2; continue; }
  case 1:
    r0 = pxsim_String_.mkEmpty();
    s.tmp_9 = r0;
    s.tmp_12 = console_inspect__P2380_mk(s);
    s.tmp_12.arg0 = s.arg1;
    s.tmp_12.arg1 = 20;
    s.callLocIdx = 24; s.pc = 7; return s.tmp_12;
  case 7:
    r0 = s.retval;
    s.tmp_11 = r0;
    if ((s.tmp_11) && (s.tmp_11).vtable) {
    setupResume(s, 8);
    pxsim_String__stringConv(s.tmp_11);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_11) + ""; }
  case 8:
    r0 = s.retval;
    s.tmp_10 = r0;
    r0 = pxsim_String__concat(s.tmp_9, s.tmp_10);
  case 2:
    // jmp value (already in r0)
    s.tmp_13 = r0;
    s.tmp_14 = console_log__P2378_mk(s);
    s.tmp_14.arg0 = s.tmp_13;
    s.callLocIdx = 25; s.pc = 9; return s.tmp_14;
  case 9:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
console_logValue__P2379.info = {"start":1636,"length":141,"line":66,"column":4,"endLine":68,"endColumn":5,"fileName":"pxt_modules/core/console.ts","functionName":"logValue","argumentNames":["name","value"]}

function console_logValue__P2379_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_logValue__P2379, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function console_inspect__P2380(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.asArr___5966 = undefined;
    s.asString___5984 = undefined;
    s.keys___5996 = undefined;
    s.snipped___6000 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore.typeOf(s.arg0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == "string");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0;
    { step = 17; continue; }
    { step = 16; continue; }
  case 1:
    r0 = pxsim_pxtcore.typeOf(s.arg0);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == "number");
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_String_.mkEmpty();
    s.tmp_4 = r0;
    if ((s.arg0) && (s.arg0).vtable) {
    setupResume(s, 18);
    pxsim_String__stringConv(s.arg0);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg0) + ""; }
  case 18:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(s.tmp_4, s.tmp_5);
    { step = 17; continue; }
    { step = 15; continue; }
  case 2:
    r0 = pxsim_Array_.isArray(s.arg0);
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_6);
    if (!r0) { step = 5; continue; }
    s.asArr___5966 = (s.arg0);
    r0 = pxsim_Array__length(s.asArr___5966);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 <= s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.tmp_2 = helpers_arrayJoin__P1992_mk(s);
    s.tmp_2.arg0 = s.asArr___5966;
    s.tmp_2.arg1 = ",";
    s.callLocIdx = 26; s.pc = 19; return s.tmp_2;
  case 19:
    r0 = s.retval;
    { step = 17; continue; }
    { step = 4; continue; }
  case 3:
    r0 = pxsim_String_.mkEmpty();
    s.tmp_4 = r0;
    s.tmp_7 = helpers_arrayJoin__P1992_mk(s);
    s.tmp_8 = helpers_arraySlice__P2004_mk(s);
    s.tmp_8.arg0 = s.asArr___5966;
    s.tmp_8.arg1 = 0;
    s.tmp_8.arg2 = s.arg1;
    s.callLocIdx = 27; s.pc = 21; return s.tmp_8;
  case 21:
    r0 = s.retval;
    s.tmp_7.arg0 = r0;
    s.tmp_7.arg1 = ",";
    s.callLocIdx = 28; s.pc = 20; return s.tmp_7;
  case 20:
    r0 = s.retval;
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 22);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 22:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(s.tmp_4, s.tmp_5);
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_3, "...");
    { step = 17; continue; }
  case 4:
    { step = 14; continue; }
  case 5:
    if ((s.arg0) && (s.arg0).vtable) {
    setupResume(s, 23);
    pxsim_String__stringConv(s.arg0);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg0) + ""; }
  case 23:
    r0 = s.retval;
    s.tmp_9 = r0;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_10 = r0;
    r0 = pxsim_String__concat(s.tmp_9, s.tmp_10);
    s.asString___5984 = (r0);
    r0 = (s.asString___5984 != "[object Object]");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = s.tmp_0;
    { step = 7; continue; }
  case 6:
    r0 = (s.asString___5984 != "[Object]");
  case 7:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 8; continue; }
    r0 = s.asString___5984;
    { step = 17; continue; }
  case 8:
  case 9:
    r0 = pxsim_pxtrt.keysOf(s.arg0);
    s.keys___5996 = (r0);
    r0 = pxsim_Array__length(s.keys___5996);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 > s.arg1);
    s.snipped___6000 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.snipped___6000);
    if (!r0) { step = 10; continue; }
    s.tmp_0 = helpers_arraySlice__P2004_mk(s);
    s.tmp_0.arg0 = s.keys___5996;
    s.tmp_0.arg1 = 0;
    s.tmp_0.arg2 = s.arg1;
    s.callLocIdx = 29; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.keys___5996 = (r0);
  case 10:
  case 11:
    r0 = pxsim_pxtcore_mkAction(1, console_inspect_inline__P6017);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg0);
    r0 = pxsim_numops_toBoolDecr(s.snipped___6000);
    if (!r0) { step = 12; continue; }
    r0 = "\n    ...";
    { step = 13; continue; }
  case 12:
    r0 = pxsim_String_.mkEmpty();
  case 13:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    s.tmp_7 = helpers_arrayReduce__P2001_mk(s);
    s.tmp_7.arg0 = s.keys___5996;
    s.tmp_7.arg1 = s.tmp_0;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_7.arg2 = r0;
    s.callLocIdx = 30; s.pc = 25; return s.tmp_7;
  case 25:
    r0 = s.retval;
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 26);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 26:
    r0 = s.retval;
    s.tmp_5 = r0;
    if ((s.tmp_1) && (s.tmp_1).vtable) {
    setupResume(s, 27);
    pxsim_String__stringConv(s.tmp_1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_1) + ""; }
  case 27:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = pxsim_String__concat(s.tmp_5, s.tmp_8);
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 28);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 28:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat("{", s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_2, "\n}");
    { step = 17; continue; }
  case 14:
  case 15:
  case 16:
    r0 = undefined;
  case 17:
    return leave(s, r0)
  default: oops()
} } }
console_inspect__P2380.info = {"start":2002,"length":1165,"line":75,"column":4,"endLine":107,"endColumn":5,"fileName":"pxt_modules/core/console.ts","functionName":"inspect","argumentNames":["obj","maxElements"]}

function console_inspect__P2380_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_inspect__P2380, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  asArr___5966: undefined,
  asString___5984: undefined,
  keys___5996: undefined,
  snipped___6000: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function console_inspect_inline__P6017(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    if ((s.arg0) && (s.arg0).vtable) {
    setupResume(s, 1);
    pxsim_String__stringConv(s.arg0);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg0) + ""; }
  case 1:
    r0 = s.retval;
    s.tmp_0 = r0;
    if ((s.arg1) && (s.arg1).vtable) {
    setupResume(s, 2);
    pxsim_String__stringConv(s.arg1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg1) + ""; }
  case 2:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat("\n    ", s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, ": ");
    s.tmp_3 = r0;
    r0 = pxsim_pxtrt.mapGetGeneric(s.caps[0], s.arg1);
    s.tmp_7 = r0;
    if ((s.tmp_7) && (s.tmp_7).vtable) {
    setupResume(s, 3);
    pxsim_String__stringConv(s.tmp_7);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_7) + ""; }
  case 3:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_6);
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 4);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 4:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_1);
    return leave(s, r0)
  default: oops()
} } }
console_inspect_inline__P6017.info = {"start":3003,"length":61,"line":101,"column":16,"endLine":101,"endColumn":77,"fileName":"pxt_modules/core/console.ts","functionName":"inline","argumentNames":["prev","currKey"]}

function console_inspect_inline__P6017_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_inspect_inline__P6017, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function helpers_arrayReduce__P2001(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___6044 = undefined;
    s.i___6047 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__length(s.arg0);
    s.len___6044 = (r0);
    s.i___6047 = (0);
  case 1:
    r0 = (s.i___6047 < s.len___6044);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = lambda_4_mk(s);
    s.tmp_1.argL = s.arg1;
    s.tmp_1.arg0 = s.arg2;
    r0 = pxsim_Array__getAt(s.arg0, s.i___6047);
    s.tmp_1.arg1 = r0;
    s.tmp_1.arg2 = s.i___6047;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 9; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.arg2 = (r0);
    r0 = (s.i___6047 + 1);
    s.i___6047 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = s.arg2;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayReduce__P2001.info = {"start":8316,"length":317,"line":280,"column":4,"endLine":286,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"arrayReduce","argumentNames":["arr","callbackfn","initialValue"]}

function helpers_arrayReduce__P2001_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayReduce__P2001, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  len___6044: undefined,
  i___6047: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function helpers_arraySlice__P2004(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___6065 = undefined;
    s.len___6067 = undefined;
    s.i___6101 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___6065 = (r0);
    r0 = pxsim_Array__length(s.arg0);
    s.len___6067 = (r0);
    r0 = (s.arg1 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.arg1 = (0);
    { step = 4; continue; }
  case 1:
    r0 = (s.arg1 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = Math_max__P2019_mk(s);
    r0 = (s.len___6067 + s.arg1);
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = 0;
    s.callLocIdx = 10; s.pc = 16; return s.tmp_1;
  case 16:
    r0 = s.retval;
    s.arg1 = (r0);
  case 2:
  case 3:
  case 4:
    r0 = (s.arg1 > s.len___6067);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = s.res___6065;
    { step = 15; continue; }
  case 5:
  case 6:
    r0 = (s.arg2 === undefined);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 7; continue; }
    s.arg2 = (s.len___6067);
    { step = 10; continue; }
  case 7:
    r0 = (s.arg2 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 8; continue; }
    r0 = (s.len___6067 + s.arg2);
    s.arg2 = (r0);
  case 8:
  case 9:
  case 10:
    r0 = (s.arg2 > s.len___6067);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    s.arg2 = (s.len___6067);
  case 11:
  case 12:
    s.i___6101 = (s.arg1);
  case 13:
    r0 = (s.i___6101 < s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    s.tmp_1 = r0 = s.res___6065;
    r0 = pxsim_Array__getAt(s.arg0, s.i___6101);
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_2);
    r0 = (s.i___6101 + 1);
    s.i___6101 = (r0);
    { step = 13; continue; }
  case 14:
    r0 = s.res___6065;
  case 15:
    return leave(s, r0)
  default: oops()
} } }
helpers_arraySlice__P2004.info = {"start":9027,"length":690,"line":303,"column":4,"endLine":328,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"arraySlice","argumentNames":["arr","start","end"]}

function helpers_arraySlice__P2004_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arraySlice__P2004, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  res___6065: undefined,
  len___6067: undefined,
  i___6101: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function helpers_arrayJoin__P1992(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.r___6126 = undefined;
    s.len___6127 = undefined;
    s.i___6130 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg1 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = (s.arg1 === null);
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 3; continue; }
    s.arg1 = (",");
  case 3:
  case 4:
    r0 = pxsim_String_.mkEmpty();
    s.r___6126 = (r0);
    r0 = pxsim_Array__length(s.arg0);
    s.len___6127 = (r0);
    s.i___6130 = (0);
  case 5:
    r0 = (s.i___6130 < s.len___6127);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    r0 = (s.i___6130 > 0);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBool(s.tmp_1);
    if (r0) { step = 6; continue; }
    r0 = s.tmp_1;
    { step = 7; continue; }
  case 6:
    r0 = s.arg1;
  case 7:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 8; continue; }
    if ((s.r___6126) && (s.r___6126).vtable) {
    setupResume(s, 15);
    pxsim_String__stringConv(s.r___6126);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___6126) + ""; }
  case 15:
    r0 = s.retval;
    s.tmp_3 = r0;
    if ((s.arg1) && (s.arg1).vtable) {
    setupResume(s, 16);
    pxsim_String__stringConv(s.arg1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg1) + ""; }
  case 16:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_4);
    s.r___6126 = (r0);
  case 8:
  case 9:
    r0 = pxsim_Array__getAt(s.arg0, s.i___6130);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 10; continue; }
    r0 = s.tmp_0;
    { step = 11; continue; }
  case 10:
    r0 = pxsim_Array__getAt(s.arg0, s.i___6130);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 === null);
  case 11:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 12; continue; }
    r0 = pxsim_String_.mkEmpty();
    { step = 13; continue; }
  case 12:
    r0 = pxsim_Array__getAt(s.arg0, s.i___6130);
  case 13:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    if ((s.r___6126) && (s.r___6126).vtable) {
    setupResume(s, 17);
    pxsim_String__stringConv(s.r___6126);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___6126) + ""; }
  case 17:
    r0 = s.retval;
    s.tmp_5 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 18);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 18:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(s.tmp_5, s.tmp_6);
    s.r___6126 = (r0);
    r0 = (s.i___6130 + 1);
    s.i___6130 = (r0);
    { step = 5; continue; }
  case 14:
    r0 = s.r___6126;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayJoin__P1992.info = {"start":4133,"length":432,"line":157,"column":4,"endLine":170,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"arrayJoin","argumentNames":["arr","sep"]}

function helpers_arrayJoin__P1992_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayJoin__P1992, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  r___6126: undefined,
  len___6127: undefined,
  i___6130: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function console_log__P2378(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = console_add__P2374_mk(s);
    s.tmp_0.arg0 = 1;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 21; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
console_log__P2378.info = {"start":1314,"length":86,"line":55,"column":4,"endLine":57,"endColumn":5,"fileName":"pxt_modules/core/console.ts","functionName":"log","argumentNames":["value"]}

function console_log__P2378_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_log__P2378, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function console_add__P2374(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.text___6177 = undefined;
    s.i___6191 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 < globals.minPriority___2373);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 7; continue; }
  case 1:
  case 2:
    s.tmp_1 = console_inspect__P2380_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.tmp_1.arg1 = 20;
    s.callLocIdx = 18; s.pc = 8; return s.tmp_1;
  case 8:
    r0 = s.retval;
    s.text___6177 = (r0);
    if ((s.text___6177) && (s.text___6177).vtable) {
    setupResume(s, 9);
    pxsim_String__stringConv(s.text___6177);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.text___6177) + ""; }
  case 9:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_String__concat(s.tmp_0, "\n");
    s.text___6177 = (r0);
    r0 = pxsim.control.__log(s.arg0, s.text___6177);
    r0 = pxsim_numops_toBoolDecr(globals.listeners___3745);
    if (!r0) { step = 5; continue; }
    s.i___6191 = (0);
  case 3:
    s.tmp_1 = r0 = s.i___6191;
    r0 = pxsim_Array__length(globals.listeners___3745);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.tmp_3 = lambda_3_mk(s);
    r0 = pxsim_Array__getAt(globals.listeners___3745, s.i___6191);
    s.tmp_3.argL = r0;
    s.tmp_3.arg0 = s.arg0;
    s.tmp_3.arg1 = s.text___6177;
    setupLambda(s.tmp_3, s.tmp_3.argL);
    s.callLocIdx = 19; s.pc = 10; return s.tmp_3;
  case 10:
    r0 = s.retval;
    r0 = (s.i___6191 + 1);
    s.i___6191 = (r0);
    { step = 3; continue; }
  case 4:
  case 5:
  case 6:
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
console_add__P2374.info = {"start":508,"length":386,"line":25,"column":4,"endLine":35,"endColumn":5,"fileName":"pxt_modules/core/console.ts","functionName":"add","argumentNames":["priority","message"]}

function console_add__P2374_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_add__P2374, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  text___6177: undefined,
  i___6191: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function input_runningTime__P2290(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim.control.millis();
    return leave(s, r0)
  default: oops()
} } }
input_runningTime__P2290.info = {"start":1778,"length":70,"line":66,"column":4,"endLine":68,"endColumn":5,"fileName":"pxt_modules/core/input.ts","functionName":"runningTime","argumentNames":[]}

function input_runningTime__P2290_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: input_runningTime__P2290, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function jacdac_JDPacket_jdunpack__P2809(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.p___6209 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_data"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = s.arg1;
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBool(s.tmp_1);
    if (r0) { step = 3; continue; }
    r0 = s.tmp_1;
    { step = 4; continue; }
  case 3:
    s.tmp_2 = jacdac_jdunpack__P2827_mk(s);
    r0 = s.arg0.fields["_data"];
    s.tmp_2.arg0 = r0;
    s.tmp_2.arg1 = s.arg1;
    s.callLocIdx = 123; s.pc = 7; return s.tmp_2;
  case 7:
    r0 = s.retval;
  case 4:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    s.p___6209 = (s.tmp_3);
    s.tmp_0 = r0 = s.p___6209;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = s.tmp_0;
    { step = 6; continue; }
  case 5:
    r0 = pxsim_Array__mk();
  case 6:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = s.tmp_1;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_jdunpack__P2809.info = {"start":5533,"length":159,"line":179,"column":8,"endLine":182,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"jdunpack","argumentNames":["this","fmt"]}

function jacdac_JDPacket_jdunpack__P2809_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_jdunpack__P2809, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  p___6209: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_jdunpack__P2827(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    r0 = pxsim_Array__mk();
    { step = 5; continue; }
  case 3:
  case 4:
    s.tmp_4 = jacdac_jdunpackCore__P3932_mk(s);
    s.tmp_4.arg0 = s.arg0;
    s.tmp_4.arg1 = s.arg1;
    s.tmp_4.arg2 = 0;
    s.callLocIdx = 179; s.pc = 6; return s.tmp_4;
  case 6:
    r0 = s.retval;
  case 5:
    return leave(s, r0)
  default: oops()
} } }
jacdac_jdunpack__P2827.info = {"start":6986,"length":334,"line":216,"column":4,"endLine":225,"endColumn":5,"fileName":"pxt_modules/jacdac/pack.ts","functionName":"jdunpack","argumentNames":["buf","fmt"]}

function jacdac_jdunpack__P2827_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_jdunpack__P2827, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_jdunpackCore__P3932(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.repeatRes___6236 = undefined;
    s.res___6241 = undefined;
    s.off___6243 = undefined;
    s.fp0___6244 = undefined;
    s.parser___6245 = undefined;
    s.sz___6282 = undefined;
    s.c0___6286 = undefined;
    s.endoff___6293 = undefined;
    s.fmt1___6323 = undefined;
    s.v___6331 = undefined;
    s.subbuf___6369 = undefined;
    s.zerop___6384 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_Array__mk();
    { step = 2; continue; }
  case 1:
    r0 = null;
  case 2:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    s.repeatRes___6236 = (s.tmp_0);
    r0 = pxsim_Array__mk();
    s.res___6241 = (r0);
    s.off___6243 = (0);
    s.fp0___6244 = (0);
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_TokenParser__C3929_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_TokenParser_constructor__P3931_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg1;
    s.callLocIdx = 169; s.pc = 58; return s.tmp_1;
  case 58:
    r0 = s.retval;
    s.parser___6245 = (s.tmp_0);
    s.tmp_0 = r0 = s.arg2;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = s.tmp_0;
    { step = 4; continue; }
  case 3:
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 0);
  case 4:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 5; continue; }
    r0 = pxsim_Array__mk();
    { step = 57; continue; }
  case 5:
  case 6:
  case 7:
    s.tmp_4 = jacdac_TokenParser_parse__P3930_mk(s);
    s.tmp_4.arg0 = s.parser___6245;
    s.callLocIdx = 170; s.pc = 59; return s.tmp_4;
  case 59:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 52; continue; }
    r0 = s.parser___6245.fields["isArray"];
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBool(s.tmp_5);
    if (r0) { step = 8; continue; }
    r0 = s.tmp_5;
    { step = 9; continue; }
  case 8:
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    s.tmp_6 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_6);
  case 9:
    // jmp value (already in r0)
    s.tmp_7 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_7);
    if (!r0) { step = 10; continue; }
    s.tmp_8 = r0 = s.res___6241;
    s.tmp_10 = jacdac_jdunpackCore__P3932_mk(s);
    s.tmp_11 = r0 = s.arg0;
    s.tmp_12 = r0 = s.off___6243;
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_13 = r0;
    r0 = (s.tmp_13 - s.tmp_12);
    s.tmp_14 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_11, s.tmp_12, s.tmp_14);
    s.tmp_10.arg0 = r0;
    s.tmp_15 = helpers_stringSlice__P2008_mk(s);
    s.tmp_15.arg0 = s.arg1;
    s.tmp_15.arg1 = s.fp0___6244;
    s.tmp_15.arg2 = undefined;
    s.callLocIdx = 172; s.pc = 61; return s.tmp_15;
  case 61:
    r0 = s.retval;
    s.tmp_10.arg1 = r0;
    s.tmp_10.arg2 = 1;
    s.callLocIdx = 173; s.pc = 60; return s.tmp_10;
  case 60:
    r0 = s.retval;
    s.tmp_9 = r0;
    r0 = pxsim_Array__push(s.tmp_8, s.tmp_9);
    r0 = s.res___6241;
    { step = 57; continue; }
  case 10:
  case 11:
    r0 = s.parser___6245.fields["fp"];
    s.fp0___6244 = (r0);
    r0 = s.parser___6245.fields["size"];
    s.sz___6282 = (r0);
    r0 = s.parser___6245.fields["c0"];
    s.c0___6286 = (r0);
    r0 = (s.c0___6286 == 122);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 16; continue; }
    s.endoff___6293 = (s.off___6243);
  case 12:
    s.tmp_1 = r0 = s.endoff___6293;
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = s.tmp_0;
    { step = 14; continue; }
  case 13:
    r0 = pxsim.BufferMethods.getByte(s.arg0, s.endoff___6293);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 != 0);
  case 14:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 15; continue; }
    r0 = (s.endoff___6293 + 1);
    s.endoff___6293 = (r0);
    { step = 12; continue; }
  case 15:
    r0 = (s.endoff___6293 - s.off___6243);
    s.sz___6282 = (r0);
    { step = 19; continue; }
  case 16:
    r0 = (s.sz___6282 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 17; continue; }
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - s.off___6243);
    s.sz___6282 = (r0);
  case 17:
  case 18:
  case 19:
    r0 = s.parser___6245.fields["nfmt"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 !== null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 26; continue; }
    r0 = s.parser___6245.fields["nfmt2"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 20; continue; }
    r0 = 11;
    { step = 21; continue; }
  case 20:
    r0 = s.parser___6245.fields["nfmt"];
  case 21:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    s.fmt1___6323 = (s.tmp_3);
    r0 = pxsim.BufferMethods.getNumber(s.arg0, s.fmt1___6323, s.off___6243);
    s.v___6331 = (r0);
    r0 = s.parser___6245.fields["nfmt2"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 22; continue; }
    s.tmp_1 = r0 = s.v___6331;
    s.tmp_4 = r0 = s.arg0;
    r0 = s.parser___6245.fields["nfmt"];
    s.tmp_5 = r0;
    r0 = (s.off___6243 + 4);
    s.tmp_6 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_4, s.tmp_5, s.tmp_6);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 * 4294967296);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 + s.tmp_2);
    s.v___6331 = (r0);
  case 22:
  case 23:
    r0 = s.parser___6245.fields["div"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 != 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 24; continue; }
    r0 = s.parser___6245.fields["div"];
    s.tmp_2 = r0;
    r0 = (s.v___6331 / s.tmp_2);
    s.v___6331 = (r0);
  case 24:
  case 25:
    r0 = pxsim_Array__push(s.res___6241, s.v___6331);
    r0 = s.parser___6245.fields["size"];
    s.tmp_0 = r0;
    r0 = (s.off___6243 + s.tmp_0);
    s.off___6243 = (r0);
    { step = 43; continue; }
  case 26:
    s.tmp_0 = r0 = s.arg0;
    s.tmp_1 = r0 = s.off___6243;
    r0 = (s.off___6243 + s.sz___6282);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 - s.tmp_1);
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_0, s.tmp_1, s.tmp_3);
    s.subbuf___6369 = (r0);
    r0 = (s.c0___6286 == 122);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 27; continue; }
    r0 = s.tmp_0;
    { step = 28; continue; }
  case 27:
    r0 = (s.c0___6286 == 115);
  case 28:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 33; continue; }
    s.zerop___6384 = (0);
  case 29:
    s.tmp_1 = r0 = s.zerop___6384;
    r0 = pxsim.BufferMethods.length(s.subbuf___6369);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 30; continue; }
    r0 = s.tmp_0;
    { step = 31; continue; }
  case 30:
    r0 = pxsim.BufferMethods.getByte(s.subbuf___6369, s.zerop___6384);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 != 0);
  case 31:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 32; continue; }
    r0 = (s.zerop___6384 + 1);
    s.zerop___6384 = (r0);
    { step = 29; continue; }
  case 32:
    s.tmp_0 = r0 = s.res___6241;
    s.tmp_3 = r0 = s.subbuf___6369;
    r0 = (s.zerop___6384 - 0);
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_3, 0, s.tmp_4);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.toString(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    { step = 40; continue; }
  case 33:
    r0 = (s.c0___6286 == 98);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 34; continue; }
    r0 = pxsim_Array__push(s.res___6241, s.subbuf___6369);
    { step = 39; continue; }
  case 34:
    r0 = (s.c0___6286 == 120);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 35; continue; }
    { step = 38; continue; }
  case 35:
    r0 = (s.c0___6286 == 114);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 36; continue; }
    s.tmp_2 = r0 = s.res___6241;
    s.tmp_4 = jacdac_jdunpackCore__P3932_mk(s);
    s.tmp_4.arg0 = s.subbuf___6369;
    s.tmp_5 = helpers_stringSlice__P2008_mk(s);
    s.tmp_5.arg0 = s.arg1;
    s.tmp_5.arg1 = s.fp0___6244;
    s.tmp_5.arg2 = undefined;
    s.callLocIdx = 177; s.pc = 63; return s.tmp_5;
  case 63:
    r0 = s.retval;
    s.tmp_4.arg1 = r0;
    s.tmp_4.arg2 = 2;
    s.callLocIdx = 178; s.pc = 62; return s.tmp_4;
  case 62:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_Array__push(s.tmp_2, s.tmp_3);
    { step = 52; continue; }
    { step = 37; continue; }
  case 36:
    r0 = pxsim_pxtcore.throwValue("whoops");
  case 37:
  case 38:
  case 39:
  case 40:
    s.tmp_0 = r0 = s.off___6243;
    r0 = pxsim.BufferMethods.length(s.subbuf___6369);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 + s.tmp_1);
    s.off___6243 = (r0);
    r0 = (s.c0___6286 == 122);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 41; continue; }
    r0 = (s.off___6243 + 1);
    s.off___6243 = (r0);
  case 41:
  case 42:
  case 43:
    s.tmp_0 = r0 = s.arg2;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 44; continue; }
    r0 = s.tmp_0;
    { step = 45; continue; }
  case 44:
    r0 = s.parser___6245.fields["fp"];
    s.tmp_1 = r0;
    r0 = pxsim_String_.length(s.arg1);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 >= s.tmp_2);
  case 45:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 50; continue; }
    r0 = (s.parser___6245).fields["fp"] = (0);
    r0 = (s.arg2 == 2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 46; continue; }
    r0 = pxsim_Array__push(s.repeatRes___6236, s.res___6241);
    r0 = pxsim_Array__mk();
    s.res___6241 = (r0);
  case 46:
  case 47:
    s.tmp_1 = r0 = s.off___6243;
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 >= s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 48; continue; }
    { step = 52; continue; }
  case 48:
  case 49:
  case 50:
  case 51:
    { step = 7; continue; }
  case 52:
    r0 = (s.arg2 == 2);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 55; continue; }
    r0 = pxsim_Array__length(s.res___6241);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 53; continue; }
    r0 = pxsim_Array__push(s.repeatRes___6236, s.res___6241);
  case 53:
  case 54:
    r0 = s.repeatRes___6236;
    { step = 57; continue; }
    { step = 56; continue; }
  case 55:
    r0 = s.res___6241;
    { step = 57; continue; }
  case 56:
    r0 = undefined;
  case 57:
    return leave(s, r0)
  default: oops()
} } }
jacdac_jdunpackCore__P3932.info = {"start":4395,"length":2585,"line":140,"column":4,"endLine":214,"endColumn":5,"fileName":"pxt_modules/jacdac/pack.ts","functionName":"jdunpackCore","argumentNames":["buf","fmt","repeat"]}

function jacdac_jdunpackCore__P3932_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_jdunpackCore__P3932, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  tmp_15: undefined,
  repeatRes___6236: undefined,
  res___6241: undefined,
  off___6243: undefined,
  fp0___6244: undefined,
  parser___6245: undefined,
  sz___6282: undefined,
  c0___6286: undefined,
  endoff___6293: undefined,
  fmt1___6323: undefined,
  v___6331: undefined,
  subbuf___6369: undefined,
  zerop___6384: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_bufferToString__P3926(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.BufferMethods.toString(s.arg0);
    return leave(s, r0)
  default: oops()
} } }
jacdac_bufferToString__P3926.info = {"start":1197,"length":74,"line":42,"column":4,"endLine":44,"endColumn":5,"fileName":"pxt_modules/jacdac/pack.ts","functionName":"bufferToString","argumentNames":["buf"]}

function jacdac_bufferToString__P3926_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_bufferToString__P3926, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_bufferSlice__P3928(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    s.tmp_1 = r0 = s.arg1;
    r0 = (s.arg2 - s.arg1);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_0, s.tmp_1, s.tmp_2);
    return leave(s, r0)
  default: oops()
} } }
jacdac_bufferSlice__P3928.info = {"start":1363,"length":114,"line":50,"column":4,"endLine":52,"endColumn":5,"fileName":"pxt_modules/jacdac/pack.ts","functionName":"bufferSlice","argumentNames":["buf","start","end"]}

function jacdac_bufferSlice__P3928_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_bufferSlice__P3928, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_TokenParser_parse__P3930(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.fmt___6486 = undefined;
    s.endp___6496 = undefined;
    s.word___6512 = undefined;
    s.dotIdx___6525 = undefined;
    s.c0___6531 = undefined;
    s.sz0___6546 = undefined;
    s.sz1___6554 = undefined;
    s.c1___6580 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_TokenParser__C3929_VT)) failedCast(r0);
    r0 = (s.arg0).fields["div"] = (1);
    r0 = (s.arg0).fields["isArray"] = (false);
    r0 = s.arg0.fields["fmt"];
    s.fmt___6486 = (r0);
  case 1:
    r0 = s.arg0.fields["fp"];
    s.tmp_1 = r0;
    r0 = pxsim_String_.length(s.fmt___6486);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 50; continue; }
    r0 = s.arg0.fields["fp"];
    s.endp___6496 = (r0);
  case 2:
    s.tmp_1 = r0 = s.endp___6496;
    r0 = pxsim_String_.length(s.fmt___6486);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = s.tmp_0;
    { step = 4; continue; }
  case 3:
    r0 = pxsim_String_.charCodeAt(s.fmt___6486, s.endp___6496);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 != 32);
  case 4:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 5; continue; }
    r0 = (s.endp___6496 + 1);
    s.endp___6496 = (r0);
    { step = 2; continue; }
  case 5:
    s.tmp_0 = helpers_stringSlice__P2008_mk(s);
    s.tmp_0.arg0 = s.fmt___6486;
    r0 = s.arg0.fields["fp"];
    s.tmp_0.arg1 = r0;
    s.tmp_0.arg2 = s.endp___6496;
    s.callLocIdx = 159; s.pc = 52; return s.tmp_0;
  case 52:
    r0 = s.retval;
    s.word___6512 = (r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = (s.endp___6496 + 1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["fp"] = (s.tmp_1);
    r0 = pxsim_numops_toBoolDecr(s.word___6512);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    { step = 1; continue; }
  case 6:
  case 7:
    r0 = pxsim_String_.indexOf(s.word___6512, ".", undefined);
    s.dotIdx___6525 = (r0);
    r0 = pxsim_String_.charCodeAt(s.word___6512, 0);
    s.c0___6531 = (r0);
    r0 = (s.c0___6531 == 105);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 8; continue; }
    r0 = s.tmp_0;
    { step = 9; continue; }
  case 8:
    r0 = (s.c0___6531 == 117);
  case 9:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBool(s.tmp_1);
    if (r0) { step = 10; continue; }
    r0 = s.tmp_1;
    { step = 11; continue; }
  case 10:
    r0 = (s.dotIdx___6525 >= 0);
  case 11:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 12; continue; }
    s.tmp_3 = parseInt__P1986_mk(s);
    s.tmp_4 = helpers_stringSlice__P2008_mk(s);
    s.tmp_4.arg0 = s.word___6512;
    s.tmp_4.arg1 = 1;
    s.tmp_4.arg2 = s.dotIdx___6525;
    s.callLocIdx = 160; s.pc = 54; return s.tmp_4;
  case 54:
    r0 = s.retval;
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = undefined;
    s.callLocIdx = 161; s.pc = 53; return s.tmp_3;
  case 53:
    r0 = s.retval;
    s.sz0___6546 = (r0);
    s.tmp_0 = parseInt__P1986_mk(s);
    s.tmp_1 = helpers_stringSlice__P2008_mk(s);
    s.tmp_1.arg0 = s.word___6512;
    r0 = (s.dotIdx___6525 + 1);
    s.tmp_1.arg1 = r0;
    s.tmp_1.arg2 = undefined;
    s.callLocIdx = 162; s.pc = 56; return s.tmp_1;
  case 56:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = undefined;
    s.callLocIdx = 163; s.pc = 55; return s.tmp_0;
  case 55:
    r0 = s.retval;
    s.sz1___6554 = (r0);
    r0 = pxsim_String_.charAt(s.word___6512, 0);
    s.tmp_1 = r0;
    if ((s.tmp_1) && (s.tmp_1).vtable) {
    setupResume(s, 57);
    pxsim_String__stringConv(s.tmp_1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_1) + ""; }
  case 57:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = (s.sz0___6546 + s.sz1___6554);
    s.tmp_3 = r0;
    if ((s.tmp_3) && (s.tmp_3).vtable) {
    setupResume(s, 58);
    pxsim_String__stringConv(s.tmp_3);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_3) + ""; }
  case 58:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_2);
    s.word___6512 = (r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = (1 << s.sz1___6554);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["div"] = (s.tmp_1);
  case 12:
  case 13:
    r0 = pxsim_String_.charCodeAt(s.word___6512, 1);
    s.c1___6580 = (r0);
    r0 = (s.c1___6580 == 91);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    s.tmp_1 = r0 = s.arg0;
    s.tmp_3 = parseInt__P1986_mk(s);
    s.tmp_4 = helpers_stringSlice__P2008_mk(s);
    s.tmp_4.arg0 = s.word___6512;
    s.tmp_4.arg1 = 2;
    s.tmp_4.arg2 = undefined;
    s.callLocIdx = 164; s.pc = 60; return s.tmp_4;
  case 60:
    r0 = s.retval;
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = undefined;
    s.callLocIdx = 165; s.pc = 59; return s.tmp_3;
  case 59:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = (s.tmp_1).fields["size"] = (s.tmp_2);
    { step = 15; continue; }
  case 14:
    r0 = (s.arg0).fields["size"] = (-1);
  case 15:
    s.tmp_2 = r0 = s.word___6512;
    r0 = pxsim_String_.length(s.word___6512);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 - 1);
    s.tmp_3 = r0;
    r0 = pxsim_String_.charCodeAt(s.tmp_2, s.tmp_3);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 93);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 16; continue; }
    r0 = s.tmp_0;
    { step = 17; continue; }
  case 16:
    s.tmp_6 = r0 = s.word___6512;
    r0 = pxsim_String_.length(s.word___6512);
    s.tmp_8 = r0;
    r0 = (s.tmp_8 - 2);
    s.tmp_7 = r0;
    r0 = pxsim_String_.charCodeAt(s.tmp_6, s.tmp_7);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 == 91);
  case 17:
    // jmp value (already in r0)
    s.tmp_9 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_9);
    if (!r0) { step = 18; continue; }
    s.tmp_10 = helpers_stringSlice__P2008_mk(s);
    s.tmp_10.arg0 = s.word___6512;
    s.tmp_10.arg1 = 0;
    s.tmp_10.arg2 = -2;
    s.callLocIdx = 166; s.pc = 61; return s.tmp_10;
  case 61:
    r0 = s.retval;
    s.word___6512 = (r0);
    r0 = (s.arg0).fields["isArray"] = (true);
  case 18:
  case 19:
    r0 = (s.arg0).fields["nfmt2"] = (null);
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = jacdac_numberFormatOfType__P3925_mk(s);
    s.tmp_2.arg0 = s.word___6512;
    s.callLocIdx = 167; s.pc = 62; return s.tmp_2;
  case 62:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["nfmt"] = (s.tmp_1);
    r0 = s.arg0.fields["nfmt"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 24; continue; }
    r0 = (s.word___6512 == "u64");
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 20; continue; }
    r0 = (s.arg0).fields["nfmt"] = (11);
    r0 = (s.arg0).fields["nfmt2"] = (true);
    { step = 23; continue; }
  case 20:
    r0 = (s.word___6512 == "i64");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 21; continue; }
    r0 = (s.arg0).fields["nfmt"] = (5);
    r0 = (s.arg0).fields["nfmt2"] = (true);
  case 21:
  case 22:
  case 23:
  case 24:
  case 25:
    r0 = (s.arg0).fields["word"] = (s.word___6512);
    r0 = s.arg0.fields["nfmt"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 46; continue; }
    r0 = (s.c0___6531 == 114);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 28; continue; }
    r0 = (s.c1___6580 != 58);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 26; continue; }
    s.c0___6531 = (0);
  case 26:
  case 27:
    { step = 43; continue; }
  case 28:
    r0 = (s.c0___6531 == 115);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 29; continue; }
    r0 = s.tmp_0;
    { step = 30; continue; }
  case 29:
    r0 = (s.c0___6531 == 98);
  case 30:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBool(s.tmp_1);
    if (!r0) { step = 31; continue; }
    r0 = s.tmp_1;
    { step = 32; continue; }
  case 31:
    r0 = (s.c0___6531 == 120);
  case 32:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 37; continue; }
    r0 = pxsim_String_.length(s.word___6512);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 != 1);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBool(s.tmp_3);
    if (r0) { step = 33; continue; }
    r0 = s.tmp_3;
    { step = 34; continue; }
  case 33:
    r0 = s.arg0.fields["size"];
    s.tmp_5 = r0;
    r0 = (s.tmp_5 == -1);
  case 34:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_6);
    if (!r0) { step = 35; continue; }
    s.c0___6531 = (0);
  case 35:
  case 36:
    { step = 42; continue; }
  case 37:
    r0 = (s.c0___6531 == 122);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 40; continue; }
    r0 = pxsim_String_.length(s.word___6512);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 != 1);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 38; continue; }
    s.c0___6531 = (0);
  case 38:
  case 39:
    { step = 41; continue; }
  case 40:
    s.c0___6531 = (0);
  case 41:
  case 42:
  case 43:
    r0 = (s.c0___6531 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 44; continue; }
    if ((s.word___6512) && (s.word___6512).vtable) {
    setupResume(s, 63);
    pxsim_String__stringConv(s.word___6512);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.word___6512) + ""; }
  case 63:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_String__concat("invalid format: ", s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_pxtcore.throwValue(s.tmp_1);
  case 44:
  case 45:
    r0 = (s.arg0).fields["c0"] = (s.c0___6531);
    { step = 49; continue; }
  case 46:
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = Buffer_sizeOfNumberFormat__P2640_mk(s);
    r0 = s.arg0.fields["nfmt"];
    s.tmp_2.arg0 = r0;
    s.callLocIdx = 168; s.pc = 64; return s.tmp_2;
  case 64:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["size"] = (s.tmp_1);
    r0 = s.arg0.fields["nfmt2"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 != null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 47; continue; }
    s.tmp_2 = r0 = s.arg0;
    r0 = s.tmp_2.fields["size"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 + 4);
    s.tmp_3 = r0;
    r0 = (s.tmp_2).fields["size"] = (s.tmp_3);
  case 47:
  case 48:
    r0 = (s.arg0).fields["c0"] = (-1);
  case 49:
    r0 = true;
    { step = 51; continue; }
    { step = 1; continue; }
  case 50:
    r0 = false;
  case 51:
    return leave(s, r0)
  default: oops()
} } }
jacdac_TokenParser_parse__P3930.info = {"start":1727,"length":2656,"line":66,"column":8,"endLine":137,"endColumn":9,"fileName":"pxt_modules/jacdac/pack.ts","functionName":"parse","argumentNames":["this"]}

function jacdac_TokenParser_parse__P3930_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_TokenParser_parse__P3930, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  fmt___6486: undefined,
  endp___6496: undefined,
  word___6512: undefined,
  dotIdx___6525: undefined,
  c0___6531: undefined,
  sz0___6546: undefined,
  sz1___6554: undefined,
  c1___6580: undefined,
  arg0: undefined,
} }





function Buffer_sizeOfNumberFormat__P2640(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq(1, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(2, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(6, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(7, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(3, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq(4, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq(8, s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim_pxtcore.switch_eq(9, s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = pxsim_pxtcore.switch_eq(5, s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim_pxtcore.switch_eq(10, s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = pxsim_pxtcore.switch_eq(12, s.tmp_0);
    if (r0) { step = 11; continue; }
    r0 = pxsim_pxtcore.switch_eq(11, s.tmp_0);
    if (r0) { step = 12; continue; }
    r0 = pxsim_pxtcore.switch_eq(15, s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = pxsim_pxtcore.switch_eq(13, s.tmp_0);
    if (r0) { step = 14; continue; }
    r0 = pxsim_pxtcore.switch_eq(16, s.tmp_0);
    if (r0) { step = 15; continue; }
    r0 = pxsim_pxtcore.switch_eq(14, s.tmp_0);
    if (r0) { step = 16; continue; }
    r0 = s.tmp_0;
    { step = 17; continue; }
  case 1:
  case 2:
  case 3:
  case 4:
    r0 = 1;
    { step = 18; continue; }
  case 5:
  case 6:
  case 7:
  case 8:
    r0 = 2;
    { step = 18; continue; }
  case 9:
  case 10:
  case 11:
  case 12:
  case 13:
  case 14:
    r0 = 4;
    { step = 18; continue; }
  case 15:
  case 16:
    r0 = 8;
    { step = 18; continue; }
  case 17:
    r0 = 0;
  case 18:
    return leave(s, r0)
  default: oops()
} } }
Buffer_sizeOfNumberFormat__P2640.info = {"start":14912,"length":856,"line":508,"column":4,"endLine":532,"endColumn":5,"fileName":"pxt_modules/core/buffer.ts","functionName":"sizeOfNumberFormat","argumentNames":["format"]}

function Buffer_sizeOfNumberFormat__P2640_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_sizeOfNumberFormat__P2640, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_numberFormatOfType__P3925(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq("u8", s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq("u16", s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq("u32", s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq("i8", s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq("i16", s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq("i32", s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq("f32", s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim_pxtcore.switch_eq("f64", s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = s.tmp_0;
    { step = 9; continue; }
  case 1:
    r0 = 2;
    { step = 10; continue; }
  case 2:
    r0 = 4;
    { step = 10; continue; }
  case 3:
    r0 = 11;
    { step = 10; continue; }
  case 4:
    r0 = 1;
    { step = 10; continue; }
  case 5:
    r0 = 3;
    { step = 10; continue; }
  case 6:
    r0 = 5;
    { step = 10; continue; }
  case 7:
    r0 = 13;
    { step = 10; continue; }
  case 8:
    r0 = 14;
    { step = 10; continue; }
  case 9:
    r0 = null;
    { step = 10; continue; }
    r0 = undefined;
  case 10:
    return leave(s, r0)
  default: oops()
} } }
jacdac_numberFormatOfType__P3925.info = {"start":393,"length":798,"line":17,"column":4,"endLine":40,"endColumn":5,"fileName":"pxt_modules/jacdac/pack.ts","functionName":"numberFormatOfType","argumentNames":["tp"]}

function jacdac_numberFormatOfType__P3925_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_numberFormatOfType__P3925, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_TokenParser_constructor__P3931(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_TokenParser__C3929_VT)) failedCast(r0);
    r0 = (s.arg0).fields["fmt"] = (s.arg1);
    r0 = (s.arg0).fields["fp"] = (0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_TokenParser_constructor__P3931.info = {"start":1683,"length":34,"line":64,"column":8,"endLine":64,"endColumn":42,"fileName":"pxt_modules/jacdac/pack.ts","functionName":"inline","argumentNames":["this","fmt"]}

function jacdac_TokenParser_constructor__P3931_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_TokenParser_constructor__P3931, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_regCode__P2803(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 4, 14);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 4095);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_regCode__P2803.info = {"start":4936,"length":79,"line":153,"column":8,"endLine":155,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"regCode","argumentNames":["this"]}
jacdac_JDPacket_regCode__P2803.isGetter = true;

function jacdac_JDPacket_regCode__P2803_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_regCode__P2803, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_isRegGet__P2802(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_2, 4, 14);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >> 12);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == 1);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_isRegGet__P2802.info = {"start":4834,"length":92,"line":149,"column":8,"endLine":151,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"isRegGet","argumentNames":["this"]}
jacdac_JDPacket_isRegGet__P2802.isGetter = true;

function jacdac_JDPacket_isRegGet__P2802_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_isRegGet__P2802, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_isReport__P2815(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_3, 3);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 1);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_0);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_isReport__P2815.info = {"start":6659,"length":89,"line":217,"column":8,"endLine":219,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"isReport","argumentNames":["this"]}
jacdac_JDPacket_isReport__P2815.isGetter = true;

function jacdac_JDPacket_isReport__P2815_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_isReport__P2815, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_packetFlags__P2788(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_0, 3);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_packetFlags__P2788.info = {"start":2909,"length":64,"line":86,"column":8,"endLine":88,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"packetFlags","argumentNames":["this"]}
jacdac_JDPacket_packetFlags__P2788.isGetter = true;

function jacdac_JDPacket_packetFlags__P2788_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_packetFlags__P2788, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function processEvent__P3671(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.index___6776 = undefined;
    s.whichNote___6780 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 === 343122531);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    s.tmp_1 = getIndexFromButton__P3667_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.callLocIdx = 655; s.pc = 11; return s.tmp_1;
  case 11:
    r0 = s.retval;
    s.index___6776 = (r0);
    r0 = pxsim_Array__getAt(globals.buttonNotes___3663, s.index___6776);
    s.whichNote___6780 = (r0);
    r0 = pxsim.led.stopAnimation();
    s.tmp_2 = jacdac_JDPacket_eventCode__P2799_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.callLocIdx = 656; s.pc = 12; return s.tmp_2;
  case 12:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_3 = basic_showIcon__P2277_mk(s);
    r0 = pxsim_Array__getAt(globals.buttonPressIcons___3661, s.index___6776);
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = 0;
    s.callLocIdx = 657; s.pc = 13; return s.tmp_3;
  case 13:
    r0 = s.retval;
    s.tmp_0 = scheduleTone__P3670_mk(s);
    s.tmp_0.arg0 = s.whichNote___6780;
    s.callLocIdx = 658; s.pc = 14; return s.tmp_0;
  case 14:
    r0 = s.retval;
    { step = 6; continue; }
  case 1:
    s.tmp_2 = jacdac_JDPacket_eventCode__P2799_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.callLocIdx = 659; s.pc = 15; return s.tmp_2;
  case 15:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === 2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = pxsim.basic.clearScreen();
    { step = 5; continue; }
  case 2:
    s.tmp_2 = jacdac_JDPacket_eventCode__P2799_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.callLocIdx = 660; s.pc = 16; return s.tmp_2;
  case 16:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === 129);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.tmp_3 = game_addScore__P2395_mk(s);
    s.tmp_3.arg0 = 1;
    s.callLocIdx = 661; s.pc = 17; return s.tmp_3;
  case 17:
    r0 = s.retval;
  case 3:
  case 4:
  case 5:
  case 6:
    { step = 10; continue; }
  case 7:
    r0 = (s.arg0 === 521405449);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 8; continue; }
    s.tmp_1 = basic_showIcon__P2277_mk(s);
    s.tmp_4 = jacdac_JDPacket_eventCode__P2799_mk(s);
    s.tmp_4.arg0 = s.arg1;
    s.callLocIdx = 662; s.pc = 19; return s.tmp_4;
  case 19:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (0 + s.tmp_3);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 - 129);
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = 0;
    s.callLocIdx = 663; s.pc = 18; return s.tmp_1;
  case 18:
    r0 = s.retval;
  case 8:
  case 9:
  case 10:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
processEvent__P3671.info = {"start":6657,"length":773,"line":247,"column":0,"endLine":266,"endColumn":1,"fileName":"main.ts","functionName":"processEvent","argumentNames":["serviceClass","pkt"]}

function processEvent__P3671_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: processEvent__P3671, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  index___6776: undefined,
  whichNote___6780: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function game_addScore__P2395(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = game_setScore__P2398_mk(s);
    r0 = (globals._score___3747 + s.arg0);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 31; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    r0 = pxsim_numops_toBoolDecr(globals._paused___3765);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_numops_toBoolDecr(globals._backgroundAnimation___3767);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    globals._backgroundAnimation___3767 = (true);
    r0 = pxsim.control.inBackground(game_addScore_inline__P6831);
  case 3:
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
game_addScore__P2395.info = {"start":1772,"length":889,"line":69,"column":4,"endLine":83,"endColumn":5,"fileName":"pxt_modules/core/game.ts","functionName":"addScore","argumentNames":["points"]}

function game_addScore__P2395_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: game_addScore__P2395, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function game_addScore_inline__P6831(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim.led.stopAnimation();
    setupResume(s, 1);
    pxsim.basic.showAnimation(new pxsim.Image(50, [0,0,0,0,0,0,0,0,0,0,0,0,255,0,0,0,255,255,255,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,255,255,255,0,0,0,255,0,0,0,0,0,0,0,0,0,0,0,0,255,0,0,0,255,255,255,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,255,255,255,0,0,0,255,0,0,0,0,0,0,0,0,0,0,0,0,255,0,0,0,255,255,255,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,255,255,255,0,0,0,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,0,0,0,255,255,255,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,255,255,255,0,0,0,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,0,0,0,255,255,255,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,255,255,255,0,0,0,255,0,0,0,0,0,]), 20);
    checkResumeConsumed();
    return;
  case 1:
    r0 = s.retval;
    globals._backgroundAnimation___3767 = (false);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
game_addScore_inline__P6831.info = {"start":1979,"length":664,"line":73,"column":33,"endLine":81,"endColumn":13,"fileName":"pxt_modules/core/game.ts","functionName":"inline","argumentNames":[]}

function game_addScore_inline__P6831_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: game_addScore_inline__P6831, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function game_setScore__P2398(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = Math_max__P2019_mk(s);
    s.tmp_0.arg0 = 0;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 32; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    globals._score___3747 = (r0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
game_setScore__P2398.info = {"start":5765,"length":90,"line":156,"column":4,"endLine":158,"endColumn":5,"fileName":"pxt_modules/core/game.ts","functionName":"setScore","argumentNames":["value"]}

function game_setScore__P2398_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: game_setScore__P2398, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function scheduleTone__P3670(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    globals.nextTone___3668 = (s.arg0);
    s.tmp_0 = music_stopAllSounds__P2548_mk(s);
    s.callLocIdx = 654; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
scheduleTone__P3670.info = {"start":6576,"length":79,"line":242,"column":0,"endLine":245,"endColumn":1,"fileName":"main.ts","functionName":"scheduleTone","argumentNames":["f"]}

function scheduleTone__P3670_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: scheduleTone__P3670, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function music_stopAllSounds__P2548(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_0 = music_rest__P2535_mk(s);
    s.tmp_0.arg0 = 0;
    s.callLocIdx = 49; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = music_stopMelody__P2547_mk(s);
    s.tmp_0.arg0 = 5;
    s.callLocIdx = 50; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = pxsim.music.__stopSoundExpressions();
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
music_stopAllSounds__P2548.info = {"start":16435,"length":139,"line":472,"column":4,"endLine":476,"endColumn":5,"fileName":"pxt_modules/core/music.ts","functionName":"stopAllSounds","argumentNames":[]}

function music_stopAllSounds__P2548_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: music_stopAllSounds__P2548, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function music_stopMelody__P2547(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 & 4);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = music_startMelody__P2544_mk(s);
    r0 = pxsim_Array__mk();
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = 4;
    s.callLocIdx = 47; s.pc = 5; return s.tmp_1;
  case 5:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = (s.arg0 & 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.tmp_1 = music_startMelody__P2544_mk(s);
    r0 = pxsim_Array__mk();
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = 1;
    s.callLocIdx = 48; s.pc = 6; return s.tmp_1;
  case 6:
    r0 = s.retval;
  case 3:
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
music_stopMelody__P2547.info = {"start":15944,"length":276,"line":458,"column":4,"endLine":463,"endColumn":5,"fileName":"pxt_modules/core/music.ts","functionName":"stopMelody","argumentNames":["options"]}

function music_stopMelody__P2547_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: music_stopMelody__P2547, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function music_startMelody__P2544(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = music_init__P3785_mk(s);
    s.callLocIdx = 41; s.pc = 17; return s.tmp_0;
  case 17:
    r0 = s.retval;
    r0 = (globals.currentMelody___3786 != undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    r0 = (s.arg1 & 4);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 == 0);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBool(s.tmp_1);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_1;
    { step = 2; continue; }
  case 1:
    r0 = (s.arg1 & 8);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == 0);
  case 2:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBool(s.tmp_4);
    if (r0) { step = 3; continue; }
    r0 = s.tmp_4;
    { step = 4; continue; }
  case 3:
    r0 = globals.currentMelody___3786.fields["background"];
  case 4:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 5; continue; }
    globals.currentBackgroundMelody___3787 = (globals.currentMelody___3786);
    globals.currentMelody___3786 = (null);
    r0 = pxsim.control.raiseEvent(2000, 245, 1);
  case 5:
  case 6:
    r0 = pxsim_numops_toBoolDecr(globals.currentMelody___3786);
    if (!r0) { step = 9; continue; }
    r0 = globals.currentMelody___3786.fields["background"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    r0 = 243;
    { step = 8; continue; }
  case 7:
    r0 = 3;
  case 8:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim.control.raiseEvent(2000, s.tmp_1, 1);
  case 9:
  case 10:
    r0 = pxsim_pxtcore_mkClassInstance(music_Melody__C3789_VT);
    s.tmp_0 = r0;
    s.tmp_1 = music_Melody_constructor__P3792_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg0;
    s.tmp_1.arg2 = s.arg1;
    s.callLocIdx = 42; s.pc = 18; return s.tmp_1;
  case 18:
    r0 = s.retval;
    globals.currentMelody___3786 = (s.tmp_0);
    r0 = globals.currentMelody___3786.fields["background"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    r0 = 242;
    { step = 12; continue; }
  case 11:
    r0 = 2;
  case 12:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim.control.raiseEvent(2000, s.tmp_1, 1);
    { step = 16; continue; }
  case 13:
    r0 = pxsim_pxtcore_mkClassInstance(music_Melody__C3789_VT);
    s.tmp_0 = r0;
    s.tmp_1 = music_Melody_constructor__P3792_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg0;
    s.tmp_1.arg2 = s.arg1;
    s.callLocIdx = 43; s.pc = 19; return s.tmp_1;
  case 19:
    r0 = s.retval;
    globals.currentMelody___3786 = (s.tmp_0);
    r0 = globals.currentMelody___3786.fields["background"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    r0 = 242;
    { step = 15; continue; }
  case 14:
    r0 = 2;
  case 15:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim.control.raiseEvent(2000, s.tmp_1, 1);
    r0 = pxsim.control.inBackground(music_startMelody_inline__P6931);
  case 16:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
music_startMelody__P2544.info = {"start":11475,"length":2225,"line":358,"column":4,"endLine":394,"endColumn":5,"fileName":"pxt_modules/core/music.ts","functionName":"startMelody","argumentNames":["melodyArray","options"]}

function music_startMelody__P2544_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: music_startMelody__P2544, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function music_startMelody_inline__P6931(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

  case 1:
    s.tmp_1 = music_Melody_hasNextNote__P3790_mk(s);
    s.tmp_1.arg0 = globals.currentMelody___3786;
    s.callLocIdx = 44; s.pc = 11; return s.tmp_1;
  case 11:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_2 = music_playNextNote__P3788_mk(s);
    s.tmp_2.arg0 = globals.currentMelody___3786;
    s.callLocIdx = 45; s.pc = 12; return s.tmp_2;
  case 12:
    r0 = s.retval;
    s.tmp_3 = music_Melody_hasNextNote__P3790_mk(s);
    s.tmp_3.arg0 = globals.currentMelody___3786;
    s.callLocIdx = 46; s.pc = 13; return s.tmp_3;
  case 13:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = globals.currentBackgroundMelody___3787;
  case 3:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 4; continue; }
    globals.currentMelody___3786 = (globals.currentBackgroundMelody___3787);
    globals.currentBackgroundMelody___3787 = (null);
    r0 = pxsim.control.raiseEvent(2000, 3, 1);
    r0 = pxsim.control.raiseEvent(2000, 246, 1);
    r0 = pxsim.control.raiseEvent(2000, 5, 1);
  case 4:
  case 5:
    { step = 1; continue; }
  case 6:
    r0 = globals.currentMelody___3786.fields["background"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    r0 = 243;
    { step = 8; continue; }
  case 7:
    r0 = 3;
  case 8:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim.control.raiseEvent(2000, s.tmp_1, 1);
    r0 = globals.currentMelody___3786.fields["background"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    r0 = pxsim.control.raiseEvent(2000, 5, 1);
  case 9:
  case 10:
    globals.currentMelody___3786 = (null);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
music_startMelody_inline__P6931.info = {"start":12671,"length":1012,"line":376,"column":33,"endLine":392,"endColumn":13,"fileName":"pxt_modules/core/music.ts","functionName":"inline","argumentNames":[]}

function music_startMelody_inline__P6931_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: music_startMelody_inline__P6931, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
} }





function music_playNextNote__P3788(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.currNote___6981 = undefined;
    s.currentPos___6984 = undefined;
    s.currentDuration___6988 = undefined;
    s.currentOctave___6992 = undefined;
    s.note___6996 = undefined;
    s.isrest___6997 = undefined;
    s.beatPos___6998 = undefined;
    s.parsingOctave___6999 = undefined;
    s.prevNote___7000 = undefined;
    s.pos___7001 = undefined;
    s.noteChar___7007 = undefined;
    s.beat___7064 = undefined;
    s.keyNumber___7074 = undefined;
    s.frequency___7083 = undefined;
    s.repeating___7102 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = music_Melody_nextNote__P3791_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 51; s.pc = 43; return s.tmp_0;
  case 43:
    r0 = s.retval;
    s.currNote___6981 = (r0);
    r0 = s.arg0.fields["currentPos"];
    s.currentPos___6984 = (r0);
    r0 = s.arg0.fields["currentDuration"];
    s.currentDuration___6988 = (r0);
    r0 = s.arg0.fields["currentOctave"];
    s.currentOctave___6992 = (r0);
    s.isrest___6997 = (false);
    s.parsingOctave___6999 = (true);
    s.prevNote___7000 = (false);
    s.pos___7001 = (0);
  case 1:
    s.tmp_1 = r0 = s.pos___7001;
    r0 = pxsim_String_.length(s.currNote___6981);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 26; continue; }
    r0 = pxsim_String_.charAt(s.currNote___6981, s.pos___7001);
    s.noteChar___7007 = (r0);
    s.tmp_0 = r0 = s.noteChar___7007;
    r0 = pxsim_pxtcore.switch_eq("c", s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq("C", s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq("d", s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq("D", s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq("e", s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq("E", s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim_pxtcore.switch_eq("f", s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = pxsim_pxtcore.switch_eq("F", s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim_pxtcore.switch_eq("g", s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = pxsim_pxtcore.switch_eq("G", s.tmp_0);
    if (r0) { step = 11; continue; }
    r0 = pxsim_pxtcore.switch_eq("a", s.tmp_0);
    if (r0) { step = 12; continue; }
    r0 = pxsim_pxtcore.switch_eq("A", s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = pxsim_pxtcore.switch_eq("B", s.tmp_0);
    if (r0) { step = 14; continue; }
    r0 = pxsim_pxtcore.switch_eq("r", s.tmp_0);
    if (r0) { step = 15; continue; }
    r0 = pxsim_pxtcore.switch_eq("R", s.tmp_0);
    if (r0) { step = 16; continue; }
    r0 = pxsim_pxtcore.switch_eq("#", s.tmp_0);
    if (r0) { step = 17; continue; }
    r0 = pxsim_pxtcore.switch_eq("b", s.tmp_0);
    if (r0) { step = 18; continue; }
    r0 = pxsim_pxtcore.switch_eq(":", s.tmp_0);
    if (r0) { step = 21; continue; }
    r0 = s.tmp_0;
    { step = 22; continue; }
  case 2:
  case 3:
    s.note___6996 = (1);
    s.prevNote___7000 = (true);
    { step = 25; continue; }
  case 4:
  case 5:
    s.note___6996 = (3);
    s.prevNote___7000 = (true);
    { step = 25; continue; }
  case 6:
  case 7:
    s.note___6996 = (5);
    s.prevNote___7000 = (true);
    { step = 25; continue; }
  case 8:
  case 9:
    s.note___6996 = (6);
    s.prevNote___7000 = (true);
    { step = 25; continue; }
  case 10:
  case 11:
    s.note___6996 = (8);
    s.prevNote___7000 = (true);
    { step = 25; continue; }
  case 12:
  case 13:
    s.note___6996 = (10);
    s.prevNote___7000 = (true);
    { step = 25; continue; }
  case 14:
    s.note___6996 = (12);
    s.prevNote___7000 = (true);
    { step = 25; continue; }
  case 15:
  case 16:
    s.isrest___6997 = (true);
    s.prevNote___7000 = (false);
    { step = 25; continue; }
  case 17:
    r0 = (s.note___6996 + 1);
    s.note___6996 = (r0);
    s.prevNote___7000 = (false);
    { step = 25; continue; }
  case 18:
    r0 = pxsim_numops_toBoolDecr(s.prevNote___7000);
    if (!r0) { step = 19; continue; }
    r0 = (s.note___6996 - 1);
    s.note___6996 = (r0);
    { step = 20; continue; }
  case 19:
    s.note___6996 = (12);
    s.prevNote___7000 = (true);
  case 20:
    { step = 25; continue; }
  case 21:
    s.parsingOctave___6999 = (false);
    s.beatPos___6998 = (s.pos___7001);
    s.prevNote___7000 = (false);
    { step = 25; continue; }
  case 22:
    s.prevNote___7000 = (false);
    r0 = pxsim_numops_toBoolDecr(s.parsingOctave___6999);
    if (!r0) { step = 23; continue; }
    s.tmp_0 = parseInt__P1986_mk(s);
    s.tmp_0.arg0 = s.noteChar___7007;
    s.tmp_0.arg1 = undefined;
    s.callLocIdx = 52; s.pc = 44; return s.tmp_0;
  case 44:
    r0 = s.retval;
    s.currentOctave___6992 = (r0);
  case 23:
  case 24:
  case 25:
    r0 = (s.pos___7001 + 1);
    s.pos___7001 = (r0);
    { step = 1; continue; }
  case 26:
    r0 = pxsim_numops_toBoolDecr(s.parsingOctave___6999);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 27; continue; }
    s.tmp_2 = parseInt__P1986_mk(s);
    s.tmp_3 = helpers_stringSubstr__P2007_mk(s);
    s.tmp_3.arg0 = s.currNote___6981;
    r0 = (s.beatPos___6998 + 1);
    s.tmp_3.arg1 = r0;
    r0 = pxsim_String_.length(s.currNote___6981);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 - s.beatPos___6998);
    s.tmp_3.arg2 = r0;
    s.callLocIdx = 53; s.pc = 46; return s.tmp_3;
  case 46:
    r0 = s.retval;
    s.tmp_2.arg0 = r0;
    s.tmp_2.arg1 = undefined;
    s.callLocIdx = 54; s.pc = 45; return s.tmp_2;
  case 45:
    r0 = s.retval;
    s.currentDuration___6988 = (r0);
  case 27:
  case 28:
    r0 = pxsim.Math_.idiv(60000, globals.beatsPerMinute___3779);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 2);
    s.beat___7064 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.isrest___6997);
    if (!r0) { step = 29; continue; }
    s.tmp_0 = music_rest__P2535_mk(s);
    r0 = (s.currentDuration___6988 * s.beat___7064);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 55; s.pc = 47; return s.tmp_0;
  case 47:
    r0 = s.retval;
    { step = 32; continue; }
  case 29:
    s.tmp_0 = r0 = s.note___6996;
    r0 = (s.currentOctave___6992 - 1);
    s.tmp_2 = r0;
    r0 = (12 * s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 + s.tmp_1);
    s.keyNumber___7074 = (r0);
    s.tmp_1 = r0 = globals.freqs___3781;
    r0 = (s.keyNumber___7074 * 2);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 4, s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 30; continue; }
    r0 = s.tmp_0;
    { step = 31; continue; }
  case 30:
    r0 = 0;
  case 31:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    s.frequency___7083 = (s.tmp_3);
    s.tmp_0 = music_playTone__P2533_mk(s);
    s.tmp_0.arg0 = s.frequency___7083;
    r0 = (s.currentDuration___6988 * s.beat___7064);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 56; s.pc = 48; return s.tmp_0;
  case 48:
    r0 = s.retval;
  case 32:
    r0 = (s.arg0).fields["currentDuration"] = (s.currentDuration___6988);
    r0 = (s.arg0).fields["currentOctave"] = (s.currentOctave___6992);
    r0 = s.arg0.fields["repeating"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 33; continue; }
    r0 = s.tmp_0;
    { step = 34; continue; }
  case 33:
    s.tmp_1 = r0 = s.currentPos___6984;
    r0 = s.arg0.fields["melodyArray"];
    s.tmp_4 = r0;
    r0 = pxsim_Array__length(s.tmp_4);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 - 1);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 == s.tmp_2);
  case 34:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    s.repeating___7102 = (s.tmp_5);
    r0 = pxsim_numops_toBoolDecr(s.repeating___7102);
    if (!r0) { step = 35; continue; }
    r0 = 0;
    { step = 36; continue; }
  case 35:
    r0 = (s.currentPos___6984 + 1);
  case 36:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = (s.arg0).fields["currentPos"] = (s.tmp_0);
    r0 = s.arg0.fields["background"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 37; continue; }
    r0 = 241;
    { step = 38; continue; }
  case 37:
    r0 = 1;
  case 38:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim.control.raiseEvent(2000, s.tmp_1, 1);
    r0 = pxsim_numops_toBoolDecr(s.repeating___7102);
    if (!r0) { step = 41; continue; }
    r0 = s.arg0.fields["background"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 39; continue; }
    r0 = 244;
    { step = 40; continue; }
  case 39:
    r0 = 4;
  case 40:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim.control.raiseEvent(2000, s.tmp_1, 1);
  case 41:
  case 42:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
music_playNextNote__P3788.info = {"start":16847,"length":2552,"line":489,"column":4,"endLine":538,"endColumn":5,"fileName":"pxt_modules/core/music.ts","functionName":"playNextNote","argumentNames":["melody"]}

function music_playNextNote__P3788_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: music_playNextNote__P3788, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  currNote___6981: undefined,
  currentPos___6984: undefined,
  currentDuration___6988: undefined,
  currentOctave___6992: undefined,
  note___6996: undefined,
  isrest___6997: undefined,
  beatPos___6998: undefined,
  parsingOctave___6999: undefined,
  prevNote___7000: undefined,
  pos___7001: undefined,
  noteChar___7007: undefined,
  beat___7064: undefined,
  keyNumber___7074: undefined,
  frequency___7083: undefined,
  repeating___7102: undefined,
  arg0: undefined,
} }





function helpers_stringSubstr__P2007(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg2 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_String_.length(s.arg0);
    { step = 4; continue; }
  case 1:
    s.tmp_1 = r0 = s.arg2;
    r0 = pxsim_numops_toBool(s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = s.tmp_1;
    { step = 3; continue; }
  case 2:
    r0 = 0;
  case 3:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = s.tmp_2;
  case 4:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    s.arg2 = (s.tmp_3);
    r0 = pxsim_String_.substr(s.arg0, s.arg1, s.arg2);
    return leave(s, r0)
  default: oops()
} } }
helpers_stringSubstr__P2007.info = {"start":11286,"length":204,"line":379,"column":4,"endLine":382,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"stringSubstr","argumentNames":["s","start","length"]}

function helpers_stringSubstr__P2007_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_stringSubstr__P2007, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function music_Melody_nextNote__P3791(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.currentNote___7155 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, music_Melody__C3789_VT)) failedCast(r0);
    r0 = s.arg0.fields["melodyArray"];
    s.tmp_0 = r0;
    r0 = s.arg0.fields["currentPos"];
    s.tmp_1 = r0;
    r0 = pxsim_Array__getAt(s.tmp_0, s.tmp_1);
    s.currentNote___7155 = (r0);
    r0 = s.currentNote___7155;
    return leave(s, r0)
  default: oops()
} } }
music_Melody_nextNote__P3791.info = {"start":20410,"length":129,"line":563,"column":8,"endLine":566,"endColumn":9,"fileName":"pxt_modules/core/music.ts","functionName":"nextNote","argumentNames":["this"]}

function music_Melody_nextNote__P3791_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: music_Melody_nextNote__P3791, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  currentNote___7155: undefined,
  arg0: undefined,
} }





function music_Melody_hasNextNote__P3790(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, music_Melody__C3789_VT)) failedCast(r0);
    r0 = s.arg0.fields["repeating"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = s.arg0.fields["currentPos"];
    s.tmp_1 = r0;
    r0 = s.arg0.fields["melodyArray"];
    s.tmp_3 = r0;
    r0 = pxsim_Array__length(s.tmp_3);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
  case 2:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = s.tmp_4;
    return leave(s, r0)
  default: oops()
} } }
music_Melody_hasNextNote__P3790.info = {"start":20295,"length":105,"line":559,"column":8,"endLine":561,"endColumn":9,"fileName":"pxt_modules/core/music.ts","functionName":"hasNextNote","argumentNames":["this"]}

function music_Melody_hasNextNote__P3790_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: music_Melody_hasNextNote__P3790, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }





function music_Melody_constructor__P3792(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, music_Melody__C3789_VT)) failedCast(r0);
    r0 = (s.arg0).fields["melodyArray"] = (s.arg1);
    s.tmp_0 = r0 = s.arg0;
    r0 = (s.arg2 & 2);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 != 0);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["repeating"] = (s.tmp_1);
    r0 = s.arg0.fields["repeating"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = true;
    { step = 2; continue; }
  case 1:
    r0 = (s.arg2 & 8);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 != 0);
  case 2:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = (s.arg0).fields["repeating"] = (s.tmp_2);
    s.tmp_0 = r0 = s.arg0;
    r0 = (s.arg2 & 4);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 != 0);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["background"] = (s.tmp_1);
    r0 = s.arg0.fields["background"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = true;
    { step = 4; continue; }
  case 3:
    r0 = (s.arg2 & 8);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 != 0);
  case 4:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = (s.arg0).fields["background"] = (s.tmp_2);
    r0 = (s.arg0).fields["currentDuration"] = (4);
    r0 = (s.arg0).fields["currentOctave"] = (4);
    r0 = (s.arg0).fields["currentPos"] = (0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
music_Melody_constructor__P3792.info = {"start":19651,"length":634,"line":548,"column":8,"endLine":557,"endColumn":9,"fileName":"pxt_modules/core/music.ts","functionName":"inline","argumentNames":["this","melodyArray","options"]}

function music_Melody_constructor__P3792_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: music_Melody_constructor__P3792, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function music_rest__P2535(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = music_playTone__P2533_mk(s);
    s.tmp_0.arg0 = 0;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 37; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
music_rest__P2535.info = {"start":7200,"length":71,"line":226,"column":4,"endLine":228,"endColumn":5,"fileName":"pxt_modules/core/music.ts","functionName":"rest","argumentNames":["ms"]}

function music_rest__P2535_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: music_rest__P2535, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_eventCode__P2799(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    s.tmp_1 = jacdac_JDPacket_isEvent__P2798_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.callLocIdx = 116; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0.fields["_header"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_3, 4, 14);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 255);
    { step = 2; continue; }
  case 1:
    r0 = undefined;
  case 2:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = s.tmp_4;
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_eventCode__P2799.info = {"start":4363,"length":147,"line":132,"column":8,"endLine":136,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"eventCode","argumentNames":["this"]}
jacdac_JDPacket_eventCode__P2799.isGetter = true;

function jacdac_JDPacket_eventCode__P2799_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_eventCode__P2799, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }





function getIndexFromButton__P3667(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_2 = r0 = globals.iconMap___3666;
    r0 = s.arg0.fields["_header"];
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_5, 4, 8);
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_4);
    s.tmp_3 = r0;
    r0 = pxsim_pxtrt.mapGetGeneric(s.tmp_2, s.tmp_3);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.tmp_6 = r0 = globals.iconMap___3666;
    r0 = s.arg0.fields["_header"];
    s.tmp_9 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_9, 4, 8);
    s.tmp_8 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_8);
    s.tmp_7 = r0;
    r0 = pxsim_pxtrt.mapSetGeneric(s.tmp_6, s.tmp_7, globals.nextIcon___3664);
    s.tmp_1 = r0 = globals.nextIcon___3664;
    r0 = pxsim_Array__length(globals.buttonPressIcons___3661);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 - 1);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 === s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    globals.nextIcon___3664 = (0);
    { step = 2; continue; }
  case 1:
    r0 = (globals.nextIcon___3664 + 1);
    globals.nextIcon___3664 = (r0);
  case 2:
  case 3:
  case 4:
    s.tmp_0 = r0 = globals.iconMap___3666;
    r0 = s.arg0.fields["_header"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_3, 4, 8);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_pxtrt.mapGetGeneric(s.tmp_0, s.tmp_1);
    return leave(s, r0)
  default: oops()
} } }
getIndexFromButton__P3667.info = {"start":5947,"length":295,"line":218,"column":0,"endLine":225,"endColumn":1,"fileName":"main.ts","functionName":"getIndexFromButton","argumentNames":["pkt"]}

function getIndexFromButton__P3667_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: getIndexFromButton__P3667, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_isEvent__P2798(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    s.tmp_1 = jacdac_JDPacket_isReport__P2815_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.callLocIdx = 114; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = s.arg0.fields["_header"];
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_4, 4, 14);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 & 32768);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 != 0);
  case 2:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = s.tmp_5;
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_isEvent__P2798.info = {"start":4248,"length":105,"line":128,"column":8,"endLine":130,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"isEvent","argumentNames":["this"]}
jacdac_JDPacket_isEvent__P2798.isGetter = true;

function jacdac_JDPacket_isEvent__P2798_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_isEvent__P2798, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_serviceIndex__P2793(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_1, 13);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 63);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_serviceIndex__P2793.info = {"start":3566,"length":98,"line":108,"column":8,"endLine":110,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"serviceIndex","argumentNames":["this"]}
jacdac_JDPacket_serviceIndex__P2793.isGetter = true;

function jacdac_JDPacket_serviceIndex__P2793_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_serviceIndex__P2793, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_deviceIdentifier__P2786(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_1, 4, 8);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_0);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_deviceIdentifier__P2786.info = {"start":2597,"length":114,"line":76,"column":8,"endLine":79,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"deviceIdentifier","argumentNames":["this"]}
jacdac_JDPacket_deviceIdentifier__P2786.isGetter = true;

function jacdac_JDPacket_deviceIdentifier__P2786_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_deviceIdentifier__P2786, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_sendAsMultiCommand__P2821(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_0, 3);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 | 5);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 3, s.tmp_1);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 11, 4, s.arg1);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 11, 8, 0);
    s.tmp_0 = jacdac_JDPacket__sendCore__P2817_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 145; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_sendAsMultiCommand__P2821.info = {"start":7885,"length":349,"line":256,"column":8,"endLine":263,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"sendAsMultiCommand","argumentNames":["this","serviceClass"]}

function jacdac_JDPacket_sendAsMultiCommand__P2821_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_sendAsMultiCommand__P2821, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket__sendCore__P2817(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_data"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_2);
    s.tmp_1 = r0;
    r0 = s.arg0.fields["_header"];
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_4, 12);
    s.tmp_3 = r0;
    r0 = (s.tmp_1 != s.tmp_3);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.throwValue("jdsize mismatch");
  case 1:
  case 2:
    s.tmp_5 = jacdac___physSendPacket__P2723_mk(s);
    r0 = s.arg0.fields["_header"];
    s.tmp_5.arg0 = r0;
    r0 = s.arg0.fields["_data"];
    s.tmp_5.arg1 = r0;
    s.callLocIdx = 138; s.pc = 3; return s.tmp_5;
  case 3:
    r0 = s.retval;
    s.tmp_0 = jacdac_Bus_processPacket__P3169_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 139; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket__sendCore__P2817.info = {"start":7179,"length":227,"line":232,"column":8,"endLine":236,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"_sendCore","argumentNames":["this"]}

function jacdac_JDPacket__sendCore__P2817_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket__sendCore__P2817, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
} }





function jacdac_Bus_processPacket__P3169(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.devId___7307 = undefined;
    s.multiCommandClass___7310 = undefined;
    s.crc___7322 = undefined;
    s.ack___7325 = undefined;
    s.h___7345 = undefined;
    s.unnamed94___U5 = undefined;
    s.unnamed95___U6 = undefined;
    s.h___7374 = undefined;
    s.dev___7389 = undefined;
    s.matches___7437 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Bus__C3152_VT)) failedCast(r0);
    r0 = s.arg1.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_1, 4, 8);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_0);
    s.devId___7307 = (r0);
    s.tmp_0 = jacdac_JDPacket_multicommandClass__P2789_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.callLocIdx = 328; s.pc = 44; return s.tmp_0;
  case 44:
    r0 = s.retval;
    s.multiCommandClass___7310 = (r0);
    s.tmp_1 = jacdac_JDPacket_requiresAck__P2791_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.callLocIdx = 329; s.pc = 45; return s.tmp_1;
  case 45:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.tmp_2 = jacdac_JDPacket_requiresAck__P2792_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.tmp_2.arg1 = false;
    s.callLocIdx = 330; s.pc = 46; return s.tmp_2;
  case 46:
    r0 = s.retval;
    r0 = s.arg1.fields["_header"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_3, 4, 8);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_2);
    s.tmp_1 = r0;
    s.tmp_5 = jacdac_Bus_selfDevice__P3160_mk(s);
    s.tmp_5.arg0 = s.arg0;
    s.callLocIdx = 332; s.pc = 47; return s.tmp_5;
  case 47:
    r0 = s.retval;
    r0 = r0.fields["deviceId"];
    s.tmp_4 = r0;
    r0 = (s.tmp_1 == s.tmp_4);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg1.fields["_header"];
    s.tmp_6 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_6, 4, 0);
    s.crc___7322 = (r0);
    s.tmp_0 = jacdac_JDPacket_onlyHeader__P2783_mk(s);
    s.tmp_0.arg0 = s.crc___7322;
    s.callLocIdx = 334; s.pc = 48; return s.tmp_0;
  case 48:
    r0 = s.retval;
    s.ack___7325 = (r0);
    s.tmp_0 = jacdac_JDPacket_serviceIndex__P2794_mk(s);
    s.tmp_0.arg0 = s.ack___7325;
    s.tmp_0.arg1 = 63;
    s.callLocIdx = 335; s.pc = 49; return s.tmp_0;
  case 49:
    r0 = s.retval;
    s.tmp_0 = jacdac_JDPacket__sendReport__P2818_mk(s);
    s.tmp_0.arg0 = s.ack___7325;
    s.tmp_1 = jacdac_Bus_selfDevice__P3160_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.callLocIdx = 336; s.pc = 51; return s.tmp_1;
  case 51:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 337; s.pc = 50; return s.tmp_0;
  case 50:
    r0 = s.retval;
  case 1:
  case 2:
  case 3:
  case 4:
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.PACKET_PROCESS___3144;
    s.tmp_0.arg2 = s.arg1;
    s.callLocIdx = 338; s.pc = 52; return s.tmp_0;
  case 52:
    r0 = s.retval;
    r0 = (s.multiCommandClass___7310 != null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    s.tmp_4 = jacdac_JDPacket_isCommand__P2814_mk(s);
    s.tmp_4.arg0 = s.arg1;
    s.callLocIdx = 339; s.pc = 53; return s.tmp_4;
  case 53:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 5; continue; }
    { step = 43; continue; }
  case 5:
  case 6:
    s.h___7345 = (undefined);
    r0 = s.arg0.fields["hostServices"];
    s.unnamed94___U5 = (r0);
    s.unnamed95___U6 = (0);
  case 7:
    s.tmp_0 = r0 = s.unnamed95___U6;
    r0 = pxsim_Array__length(s.unnamed94___U5);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 12; continue; }
    r0 = pxsim_Array__getAt(s.unnamed94___U5, s.unnamed95___U6);
    s.h___7345 = (r0);
    r0 = s.h___7345.fields["serviceClass"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == s.multiCommandClass___7310);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (r0) { step = 8; continue; }
    r0 = s.tmp_2;
    { step = 9; continue; }
  case 8:
    r0 = s.h___7345.fields["running"];
  case 9:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 10; continue; }
    s.tmp_5 = jacdac_JDPacket_deviceIdentifier__P2787_mk(s);
    s.tmp_5.arg0 = s.arg1;
    s.tmp_6 = jacdac_Bus_selfDevice__P3160_mk(s);
    s.tmp_6.arg0 = s.arg0;
    s.callLocIdx = 340; s.pc = 55; return s.tmp_6;
  case 55:
    r0 = s.retval;
    r0 = r0.fields["deviceId"];
    s.tmp_5.arg1 = r0;
    s.callLocIdx = 341; s.pc = 54; return s.tmp_5;
  case 54:
    r0 = s.retval;
    s.tmp_0 = jacdac_JDPacket_serviceIndex__P2794_mk(s);
    s.tmp_0.arg0 = s.arg1;
    r0 = s.h___7345.fields["serviceIndex"];
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 342; s.pc = 56; return s.tmp_0;
  case 56:
    r0 = s.retval;
    s.tmp_0 = jacdac_Server__C3172_v0_2_mk(s);
    s.tmp_0.arg0 = s.h___7345;
    s.tmp_0.arg1 = s.arg1;
    if (!checkSubtype(s.tmp_0.arg0, jacdac_Server__C3172_VT)) failedCast(s.tmp_0.arg0);
    s.tmp_0.fn = s.tmp_0.arg0.vtable.methods.handlePacketOuter;
    s.pc = 57; return s.tmp_0;
  case 57:
    r0 = s.retval;
  case 10:
  case 11:
    r0 = (s.unnamed95___U6 + 1);
    s.unnamed95___U6 = (r0);
    { step = 7; continue; }
  case 12:
    s.unnamed94___U5 = (undefined);
    { step = 42; continue; }
  case 13:
    s.tmp_1 = r0 = s.devId___7307;
    s.tmp_3 = jacdac_Bus_selfDevice__P3160_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.callLocIdx = 343; s.pc = 58; return s.tmp_3;
  case 58:
    r0 = s.retval;
    r0 = r0.fields["deviceId"];
    s.tmp_2 = r0;
    r0 = (s.tmp_1 == s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 14; continue; }
    r0 = s.tmp_0;
    { step = 15; continue; }
  case 14:
    s.tmp_4 = jacdac_JDPacket_isCommand__P2814_mk(s);
    s.tmp_4.arg0 = s.arg1;
    s.callLocIdx = 344; s.pc = 59; return s.tmp_4;
  case 59:
    r0 = s.retval;
  case 15:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 20; continue; }
    r0 = s.arg0.fields["hostServices"];
    s.tmp_6 = r0;
    r0 = s.arg1.fields["_header"];
    s.tmp_9 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_9, 13);
    s.tmp_8 = r0;
    r0 = (s.tmp_8 & 63);
    s.tmp_7 = r0;
    r0 = pxsim_Array__getAt(s.tmp_6, s.tmp_7);
    s.h___7374 = (r0);
    s.tmp_0 = r0 = s.h___7374;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 16; continue; }
    r0 = s.tmp_0;
    { step = 17; continue; }
  case 16:
    r0 = s.h___7374.fields["running"];
  case 17:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 18; continue; }
    s.tmp_2 = jacdac_Server__C3172_v0_2_mk(s);
    s.tmp_2.arg0 = s.h___7374;
    s.tmp_2.arg1 = s.arg1;
    if (!checkSubtype(s.tmp_2.arg0, jacdac_Server__C3172_VT)) failedCast(s.tmp_2.arg0);
    s.tmp_2.fn = s.tmp_2.arg0.vtable.methods.handlePacketOuter;
    s.pc = 60; return s.tmp_2;
  case 60:
    r0 = s.retval;
  case 18:
  case 19:
    { step = 41; continue; }
  case 20:
    s.tmp_1 = jacdac_JDPacket_isCommand__P2814_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.callLocIdx = 346; s.pc = 61; return s.tmp_1;
  case 61:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 21; continue; }
    { step = 43; continue; }
  case 21:
  case 22:
    r0 = pxsim_pxtcore_mkAction(1, dev_inline__P7393);
    s.tmp_2 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_2, 0, s.devId___7307);
    s.tmp_3 = helpers_arrayFind__P2000_mk(s);
    r0 = s.arg0.fields["devices"];
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = s.tmp_2;
    s.callLocIdx = 347; s.pc = 62; return s.tmp_3;
  case 62:
    r0 = s.retval;
    s.dev___7389 = (r0);
    r0 = s.arg1.fields["_header"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_3, 13);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 63);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 35; continue; }
    r0 = s.arg1.fields["_header"];
    s.tmp_6 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_6, 4, 14);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 == 0);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 31; continue; }
    s.tmp_7 = r0 = s.dev___7389;
    r0 = pxsim_numops_toBool(s.tmp_7);
    if (r0) { step = 23; continue; }
    r0 = s.tmp_7;
    { step = 24; continue; }
  case 23:
    s.tmp_9 = jacdac_Device_resetCount__P3226_mk(s);
    s.tmp_9.arg0 = s.dev___7389;
    s.callLocIdx = 350; s.pc = 63; return s.tmp_9;
  case 63:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = s.arg1.fields["_data"];
    s.tmp_12 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_12, 0);
    s.tmp_11 = r0;
    r0 = (s.tmp_11 & 15);
    s.tmp_10 = r0;
    r0 = (s.tmp_8 > s.tmp_10);
  case 24:
    // jmp value (already in r0)
    s.tmp_13 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_13);
    if (!r0) { step = 25; continue; }
    s.tmp_14 = jacdac_log__P4033_mk(s);
    s.tmp_18 = jacdac_Device_shortId__P3229_mk(s);
    s.tmp_18.arg0 = s.dev___7389;
    s.callLocIdx = 352; s.pc = 65; return s.tmp_18;
  case 65:
    r0 = s.retval;
    s.tmp_17 = r0;
    if ((s.tmp_17) && (s.tmp_17).vtable) {
    setupResume(s, 66);
    pxsim_String__stringConv(s.tmp_17);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_17) + ""; }
  case 66:
    r0 = s.retval;
    s.tmp_16 = r0;
    r0 = pxsim_String__concat("device ", s.tmp_16);
    s.tmp_15 = r0;
    r0 = pxsim_String__concat(s.tmp_15, " resetted");
    s.tmp_14.arg0 = r0;
    s.callLocIdx = 353; s.pc = 64; return s.tmp_14;
  case 64:
    r0 = s.retval;
    r0 = s.arg0.fields["devices"];
    s.tmp_0 = r0;
    r0 = pxsim_Array_.removeElement(s.tmp_0, s.dev___7389);
    s.tmp_0 = jacdac_Device__destroy__P3242_mk(s);
    s.tmp_0.arg0 = s.dev___7389;
    s.callLocIdx = 354; s.pc = 67; return s.tmp_0;
  case 67:
    r0 = s.retval;
    s.dev___7389 = (null);
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.RESTART___3147;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 355; s.pc = 68; return s.tmp_0;
  case 68:
    r0 = s.retval;
  case 25:
  case 26:
    s.matches___7437 = (false);
    r0 = pxsim_numops_toBoolDecr(s.dev___7389);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 27; continue; }
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_Device__C3220_VT);
    s.tmp_2 = r0;
    s.tmp_3 = jacdac_Device_constructor__P3224_mk(s);
    s.tmp_3.arg0 = s.tmp_2;
    r0 = s.arg1.fields["_header"];
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_5, 4, 8);
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_4);
    s.tmp_3.arg1 = r0;
    r0 = s.arg1.fields["_data"];
    s.tmp_3.arg2 = r0;
    s.callLocIdx = 358; s.pc = 69; return s.tmp_3;
  case 69:
    r0 = s.retval;
    s.dev___7389 = (s.tmp_2);
    s.tmp_0 = jacdac_Device_sendCtrlCommand__P3241_mk(s);
    s.tmp_0.arg0 = s.dev___7389;
    s.tmp_0.arg1 = 4486;
    s.tmp_0.arg2 = null;
    s.callLocIdx = 359; s.pc = 70; return s.tmp_0;
  case 70:
    r0 = s.retval;
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.DEVICE_CONNECT___3139;
    s.tmp_0.arg2 = s.dev___7389;
    s.callLocIdx = 360; s.pc = 71; return s.tmp_0;
  case 71:
    r0 = s.retval;
    { step = 28; continue; }
  case 27:
    s.tmp_0 = jacdac_serviceMatches__P4049_mk(s);
    s.tmp_0.arg0 = s.dev___7389;
    r0 = s.arg1.fields["_data"];
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 362; s.pc = 72; return s.tmp_0;
  case 72:
    r0 = s.retval;
    s.matches___7437 = (r0);
    s.tmp_0 = r0 = s.dev___7389;
    r0 = s.arg1.fields["_data"];
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["services"] = (s.tmp_1);
  case 28:
    r0 = pxsim_numops_toBoolDecr(s.matches___7437);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 29; continue; }
    s.tmp_2 = jacdac_Bus_reattach__P3168_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.dev___7389;
    s.callLocIdx = 364; s.pc = 73; return s.tmp_2;
  case 73:
    r0 = s.retval;
  case 29:
  case 30:
  case 31:
  case 32:
    r0 = pxsim_numops_toBoolDecr(s.dev___7389);
    if (!r0) { step = 33; continue; }
    s.tmp_0 = jacdac_Device_processPacket__P3238_mk(s);
    s.tmp_0.arg0 = s.dev___7389;
    s.tmp_0.arg1 = s.arg1;
    s.callLocIdx = 365; s.pc = 74; return s.tmp_0;
  case 74:
    r0 = s.retval;
  case 33:
  case 34:
    { step = 43; continue; }
    { step = 38; continue; }
  case 35:
    r0 = s.arg1.fields["_header"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_3, 13);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 63);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 63);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 36; continue; }
    s.tmp_4 = jacdac__gotAck__P2823_mk(s);
    s.tmp_4.arg0 = s.arg1;
    s.callLocIdx = 367; s.pc = 75; return s.tmp_4;
  case 75:
    r0 = s.retval;
  case 36:
  case 37:
  case 38:
    r0 = pxsim_numops_toBoolDecr(s.dev___7389);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 39; continue; }
    { step = 43; continue; }
  case 39:
  case 40:
    s.tmp_2 = jacdac_Device_processPacket__P3238_mk(s);
    s.tmp_2.arg0 = s.dev___7389;
    s.tmp_2.arg1 = s.arg1;
    s.callLocIdx = 368; s.pc = 76; return s.tmp_2;
  case 76:
    r0 = s.retval;
  case 41:
  case 42:
  case 43:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Bus_processPacket__P3169.info = {"start":7802,"length":3439,"line":231,"column":8,"endLine":308,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"processPacket","argumentNames":["this","pkt"]}

function jacdac_Bus_processPacket__P3169_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Bus_processPacket__P3169, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  tmp_15: undefined,
  tmp_16: undefined,
  tmp_17: undefined,
  tmp_18: undefined,
  devId___7307: undefined,
  multiCommandClass___7310: undefined,
  crc___7322: undefined,
  ack___7325: undefined,
  h___7345: undefined,
  unnamed94___U5: undefined,
  unnamed95___U6: undefined,
  h___7374: undefined,
  dev___7389: undefined,
  matches___7437: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function dev_inline__P7393(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["deviceId"];
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == s.caps[0]);
    return leave(s, r0)
  default: oops()
} } }
dev_inline__P7393.info = {"start":9536,"length":24,"line":269,"column":44,"endLine":269,"endColumn":68,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["d"]}

function dev_inline__P7393_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: dev_inline__P7393, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac__gotAck__P2823(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.numNotify___7489 = undefined;
    s.srcId___7490 = undefined;
    s.crc___7493 = undefined;
    s.a___7497 = undefined;
    s.unnamed64___U4 = undefined;
    s.unnamed65___U5 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(globals.ackAwaiters___3894);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 11; continue; }
  case 1:
  case 2:
    s.numNotify___7489 = (0);
    r0 = s.arg0.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_1, 4, 8);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_0);
    s.srcId___7490 = (r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_0, 4, 14);
    s.crc___7493 = (r0);
    s.a___7497 = (undefined);
    s.unnamed64___U4 = (globals.ackAwaiters___3894);
    s.unnamed65___U5 = (0);
  case 3:
    s.tmp_0 = r0 = s.unnamed65___U5;
    r0 = pxsim_Array__length(s.unnamed64___U4);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 8; continue; }
    r0 = pxsim_Array__getAt(s.unnamed64___U4, s.unnamed65___U5);
    s.a___7497 = (r0);
    r0 = s.a___7497.fields["crc"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == s.crc___7493);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (r0) { step = 4; continue; }
    r0 = s.tmp_2;
    { step = 5; continue; }
  case 4:
    r0 = s.a___7497.fields["srcId"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 == s.srcId___7490);
  case 5:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 6; continue; }
    r0 = (s.a___7497).fields["nextRetry"] = (0);
    r0 = s.a___7497.fields["eventId"];
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(1023, s.tmp_0, 1);
    r0 = (s.numNotify___7489 + 1);
    s.numNotify___7489 = (r0);
  case 6:
  case 7:
    r0 = (s.unnamed65___U5 + 1);
    s.unnamed65___U5 = (r0);
    { step = 3; continue; }
  case 8:
    s.unnamed64___U4 = (undefined);
    r0 = pxsim_numops_toBoolDecr(s.numNotify___7489);
    if (!r0) { step = 9; continue; }
    s.tmp_0 = helpers_arrayFilter__P1999_mk(s);
    s.tmp_0.arg0 = globals.ackAwaiters___3894;
    s.tmp_0.arg1 = jacdac__gotAck_inline__P7526;
    s.callLocIdx = 158; s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
    globals.ackAwaiters___3894 = (r0);
  case 9:
  case 10:
  case 11:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac__gotAck__P2823.info = {"start":10043,"length":508,"line":322,"column":4,"endLine":335,"endColumn":5,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"_gotAck","argumentNames":["pkt"]}

function jacdac__gotAck__P2823_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__gotAck__P2823, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  numNotify___7489: undefined,
  srcId___7490: undefined,
  crc___7493: undefined,
  a___7497: undefined,
  unnamed64___U4: undefined,
  unnamed65___U5: undefined,
  arg0: undefined,
} }





function jacdac__gotAck_inline__P7526(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["nextRetry"];
    s.tmp_0 = r0;
    r0 = (s.tmp_0 !== 0);
    return leave(s, r0)
  default: oops()
} } }
jacdac__gotAck_inline__P7526.info = {"start":10522,"length":22,"line":334,"column":56,"endLine":334,"endColumn":78,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"inline","argumentNames":["a"]}

function jacdac__gotAck_inline__P7526_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__gotAck_inline__P7526, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_Device_processPacket__P3238(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.q___7547 = undefined;
    s.serviceClass___7565 = undefined;
    s.ec___7577 = undefined;
    s.ahead___7590 = undefined;
    s.behind___7598 = undefined;
    s.client___7626 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C3220_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim.control.millis();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["lastSeen"] = (s.tmp_1);
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.PACKET_RECEIVE___3148;
    s.tmp_0.arg2 = s.arg1;
    s.callLocIdx = 463; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.tmp_1 = jacdac_JDPacket_isRegGet__P2802_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.callLocIdx = 464; s.pc = 25; return s.tmp_1;
  case 25:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = s.arg0.fields["queries"];
  case 2:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 5; continue; }
    s.tmp_3 = jacdac_Device_lookupQuery__P4045_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.tmp_4 = jacdac_JDPacket_regCode__P2803_mk(s);
    s.tmp_4.arg0 = s.arg1;
    s.callLocIdx = 465; s.pc = 27; return s.tmp_4;
  case 27:
    r0 = s.retval;
    s.tmp_3.arg1 = r0;
    r0 = s.arg1.fields["_header"];
    s.tmp_6 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_6, 13);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 & 63);
    s.tmp_3.arg2 = r0;
    s.callLocIdx = 467; s.pc = 26; return s.tmp_3;
  case 26:
    r0 = s.retval;
    s.q___7547 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.q___7547);
    if (!r0) { step = 3; continue; }
    s.tmp_0 = r0 = s.q___7547;
    r0 = s.arg1.fields["_data"];
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["value"] = (s.tmp_1);
    s.tmp_0 = r0 = s.q___7547;
    r0 = pxsim.control.millis();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["lastReport"] = (s.tmp_1);
  case 3:
  case 4:
  case 5:
  case 6:
    s.tmp_0 = jacdac_Device_serviceClassAt__P3233_mk(s);
    s.tmp_0.arg0 = s.arg0;
    r0 = s.arg1.fields["_header"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_2, 13);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 & 63);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 470; s.pc = 28; return s.tmp_0;
  case 28:
    r0 = s.retval;
    s.serviceClass___7565 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.serviceClass___7565);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 7; continue; }
    r0 = s.tmp_0;
    { step = 8; continue; }
  case 7:
    r0 = (s.serviceClass___7565 == 4294967295);
  case 8:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 9; continue; }
    { step = 23; continue; }
  case 9:
  case 10:
    s.tmp_4 = jacdac_JDPacket_isEvent__P2798_mk(s);
    s.tmp_4.arg0 = s.arg1;
    s.callLocIdx = 471; s.pc = 29; return s.tmp_4;
  case 29:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 19; continue; }
    r0 = s.arg0.fields["_eventCounter"];
    s.ec___7577 = (r0);
    r0 = (s.ec___7577 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    s.tmp_2 = jacdac_JDPacket_eventCounter__P2800_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.callLocIdx = 472; s.pc = 30; return s.tmp_2;
  case 30:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - 1);
    s.ec___7577 = (r0);
  case 11:
  case 12:
    r0 = (s.ec___7577 + 1);
    s.ec___7577 = (r0);
    s.tmp_2 = jacdac_JDPacket_eventCounter__P2800_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.callLocIdx = 473; s.pc = 31; return s.tmp_2;
  case 31:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - s.ec___7577);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 127);
    s.ahead___7590 = (r0);
    s.tmp_1 = r0 = s.ec___7577;
    s.tmp_3 = jacdac_JDPacket_eventCounter__P2800_mk(s);
    s.tmp_3.arg0 = s.arg1;
    s.callLocIdx = 474; s.pc = 32; return s.tmp_3;
  case 32:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = (s.tmp_1 - s.tmp_2);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 127);
    s.behind___7598 = (r0);
    r0 = (s.ahead___7590 > 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = s.tmp_0;
    { step = 16; continue; }
  case 13:
    r0 = (s.behind___7598 < 60);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBool(s.tmp_1);
    if (!r0) { step = 14; continue; }
    r0 = s.tmp_1;
    { step = 15; continue; }
  case 14:
    r0 = (s.ahead___7590 < 5);
  case 15:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = s.tmp_2;
  case 16:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 17; continue; }
    { step = 23; continue; }
  case 17:
  case 18:
    s.tmp_4 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_4.arg0 = s.arg0;
    s.tmp_4.arg1 = globals.EVENT___3149;
    s.tmp_4.arg2 = s.arg1;
    s.callLocIdx = 475; s.pc = 33; return s.tmp_4;
  case 33:
    r0 = s.retval;
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.tmp_0.arg1 = globals.EVENT___3149;
    s.tmp_0.arg2 = s.arg1;
    s.callLocIdx = 476; s.pc = 34; return s.tmp_0;
  case 34:
    r0 = s.retval;
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = jacdac_JDPacket_eventCounter__P2800_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.callLocIdx = 477; s.pc = 35; return s.tmp_2;
  case 35:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["_eventCounter"] = (s.tmp_1);
  case 19:
  case 20:
    r0 = pxsim_pxtcore_mkAction(2, client_inline__P7628);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.serviceClass___7565);
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 1, s.arg1);
    s.tmp_1 = helpers_arrayFind__P2000_mk(s);
    r0 = s.arg0.fields["clients"];
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 479; s.pc = 36; return s.tmp_1;
  case 36:
    r0 = s.retval;
    s.client___7626 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.client___7626);
    if (!r0) { step = 21; continue; }
    s.tmp_0 = jacdac_Client_currentDevice__P3201_mk(s);
    s.tmp_0.arg0 = s.client___7626;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 480; s.pc = 37; return s.tmp_0;
  case 37:
    r0 = s.retval;
    s.tmp_0 = jacdac_Client_handlePacketOuter__P3208_mk(s);
    s.tmp_0.arg0 = s.client___7626;
    s.tmp_0.arg1 = s.arg1;
    s.callLocIdx = 481; s.pc = 38; return s.tmp_0;
  case 38:
    r0 = s.retval;
  case 21:
  case 22:
  case 23:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device_processPacket__P3238.info = {"start":37295,"length":1961,"line":1130,"column":8,"endLine":1173,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"processPacket","argumentNames":["this","pkt"]}

function jacdac_Device_processPacket__P3238_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_processPacket__P3238, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  q___7547: undefined,
  serviceClass___7565: undefined,
  ec___7577: undefined,
  ahead___7590: undefined,
  behind___7598: undefined,
  client___7626: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function client_inline__P7628(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["broadcast"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0.fields["serviceClass"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == s.caps[0]);
    { step = 2; continue; }
  case 1:
    r0 = s.arg0.fields["serviceIndex"];
    s.tmp_2 = r0;
    r0 = s.caps[1].fields["_header"];
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_5, 13);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 & 63);
    s.tmp_3 = r0;
    r0 = (s.tmp_2 == s.tmp_3);
  case 2:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    r0 = s.tmp_6;
    return leave(s, r0)
  default: oops()
} } }
client_inline__P7628.info = {"start":38879,"length":142,"line":1163,"column":45,"endLine":1166,"endColumn":56,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["c"]}

function client_inline__P7628_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: client_inline__P7628, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  arg0: undefined,
} }





function jacdac_Client_handlePacketOuter__P3208(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.code___7664 = undefined;
    s.register___7706 = undefined;
    s.unnamed98___U2 = undefined;
    s.unnamed99___U3 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Client__C3193_VT)) failedCast(r0);
    r0 = s.arg1.fields["_header"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_2, 4, 14);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_3 = r0 = s.arg0;
    r0 = s.arg1.fields["_data"];
    s.tmp_4 = r0;
    r0 = (s.tmp_3).fields["advertisementData"] = (s.tmp_4);
  case 1:
  case 2:
    s.tmp_1 = jacdac_JDPacket_isEvent__P2798_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.callLocIdx = 422; s.pc = 13; return s.tmp_1;
  case 13:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    s.tmp_2 = jacdac_JDPacket_eventCode__P2799_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.callLocIdx = 423; s.pc = 14; return s.tmp_2;
  case 14:
    r0 = s.retval;
    s.code___7664 = (r0);
    r0 = (s.code___7664 == 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = (s.arg0).fields["systemActive"] = (true);
    { step = 8; continue; }
  case 3:
    r0 = (s.code___7664 == 2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    r0 = (s.arg0).fields["systemActive"] = (false);
    { step = 7; continue; }
  case 4:
    r0 = (s.code___7664 == 3);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    s.tmp_1 = helpers_arrayForEach__P1998_mk(s);
    s.tmp_2 = helpers_arrayFilter__P1999_mk(s);
    r0 = s.arg0.fields["registers"];
    s.tmp_2.arg0 = r0;
    s.tmp_2.arg1 = forEach_inline__P7686;
    s.callLocIdx = 425; s.pc = 16; return s.tmp_2;
  case 16:
    r0 = s.retval;
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = jacdac_Client_handlePacketOuter_inline__P7694;
    s.callLocIdx = 427; s.pc = 15; return s.tmp_1;
  case 15:
    r0 = s.retval;
  case 5:
  case 6:
  case 7:
  case 8:
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.EVENT___3149;
    s.tmp_0.arg2 = s.arg1;
    s.callLocIdx = 428; s.pc = 17; return s.tmp_0;
  case 17:
    r0 = s.retval;
    s.tmp_0 = jacdac_Client_raiseEvent__P3941_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.code___7664;
    s.tmp_1 = jacdac_JDPacket_intData__P2806_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.callLocIdx = 429; s.pc = 19; return s.tmp_1;
  case 19:
    r0 = s.retval;
    s.tmp_0.arg2 = r0;
    s.callLocIdx = 430; s.pc = 18; return s.tmp_0;
  case 18:
    r0 = s.retval;
    { step = 12; continue; }
  case 9:
    s.register___7706 = (undefined);
    r0 = s.arg0.fields["registers"];
    s.unnamed98___U2 = (r0);
    s.unnamed99___U3 = (0);
  case 10:
    s.tmp_0 = r0 = s.unnamed99___U3;
    r0 = pxsim_Array__length(s.unnamed98___U2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 11; continue; }
    r0 = pxsim_Array__getAt(s.unnamed98___U2, s.unnamed99___U3);
    s.register___7706 = (r0);
    s.tmp_2 = jacdac_RegisterClient_handlePacket__P3192_mk(s);
    s.tmp_2.arg0 = s.register___7706;
    s.tmp_2.arg1 = s.arg1;
    s.callLocIdx = 431; s.pc = 20; return s.tmp_2;
  case 20:
    r0 = s.retval;
    r0 = (s.unnamed99___U3 + 1);
    s.unnamed99___U3 = (r0);
    { step = 10; continue; }
  case 11:
    s.unnamed98___U2 = (undefined);
  case 12:
    s.tmp_0 = jacdac_Client__C3193_v0_2_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    if (!checkSubtype(s.tmp_0.arg0, jacdac_Client__C3193_VT)) failedCast(s.tmp_0.arg0);
    s.tmp_0.fn = s.tmp_0.arg0.vtable.methods.handlePacket;
    s.pc = 21; return s.tmp_0;
  case 21:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_handlePacketOuter__P3208.info = {"start":26576,"length":881,"line":804,"column":8,"endLine":823,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"handlePacketOuter","argumentNames":["this","pkt"]}

function jacdac_Client_handlePacketOuter__P3208_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_handlePacketOuter__P3208, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  code___7664: undefined,
  register___7706: undefined,
  unnamed98___U2: undefined,
  unnamed99___U3: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function forEach_inline__P7686(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_2 = jacdac_isConstRegister__P2765_mk(s);
    r0 = s.arg0.fields["code"];
    s.tmp_2.arg0 = r0;
    s.callLocIdx = 424; s.pc = 1; return s.tmp_2;
  case 1:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_0);
    return leave(s, r0)
  default: oops()
} } }
forEach_inline__P7686.info = {"start":27123,"length":29,"line":815,"column":32,"endLine":815,"endColumn":61,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["r"]}

function forEach_inline__P7686_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: forEach_inline__P7686, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }





function jacdac_Client_handlePacketOuter_inline__P7694(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = jacdac_RegisterClient_reset__P3186_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 426; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_handlePacketOuter_inline__P7694.info = {"start":27187,"length":14,"line":816,"column":33,"endLine":816,"endColumn":47,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["r"]}

function jacdac_Client_handlePacketOuter_inline__P7694_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_handlePacketOuter_inline__P7694, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_Client_handlePacket__P3209(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Client__C3193_VT)) failedCast(r0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_handlePacket__P3209.info = {"start":27467,"length":30,"line":825,"column":8,"endLine":825,"endColumn":38,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"handlePacket","argumentNames":["this","pkt"]}

function jacdac_Client_handlePacket__P3209_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_handlePacket__P3209, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_RegisterClient_handlePacket__P3192(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.d___7726 = undefined;
    s.changed___7729 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_RegisterClient__C3184_VT)) failedCast(r0);
    s.tmp_1 = jacdac_JDPacket_isRegGet__P2802_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.callLocIdx = 409; s.pc = 11; return s.tmp_1;
  case 11:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = s.arg0.fields["code"];
    s.tmp_2 = r0;
    s.tmp_4 = jacdac_JDPacket_regCode__P2803_mk(s);
    s.tmp_4.arg0 = s.arg1;
    s.callLocIdx = 410; s.pc = 12; return s.tmp_4;
  case 12:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (s.tmp_2 == s.tmp_3);
  case 2:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 9; continue; }
    r0 = s.arg1.fields["_data"];
    s.d___7726 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.d___7726);
    s.tmp_4 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_4);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1 = r0;
    r0 = s.arg0.fields["_data"];
    s.tmp_9 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_9);
    s.tmp_8 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_8);
    s.tmp_7 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_7);
    s.tmp_6 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_6);
    s.tmp_5 = r0;
    r0 = (s.tmp_1 != s.tmp_5);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = s.tmp_0;
    { step = 4; continue; }
  case 3:
    r0 = pxsim_numops_toBoolDecr(s.d___7726);
    s.tmp_10 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_10);
  case 4:
    // jmp value (already in r0)
    s.tmp_11 = r0;
    r0 = pxsim_numops_toBool(s.tmp_11);
    if (!r0) { step = 5; continue; }
    r0 = s.tmp_11;
    { step = 6; continue; }
  case 5:
    s.tmp_14 = helpers_bufferEquals__P2612_mk(s);
    s.tmp_14.arg0 = s.d___7726;
    r0 = s.arg0.fields["_data"];
    s.tmp_14.arg1 = r0;
    s.callLocIdx = 412; s.pc = 13; return s.tmp_14;
  case 13:
    r0 = s.retval;
    s.tmp_13 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_13);
    s.tmp_12 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_12);
  case 6:
    // jmp value (already in r0)
    s.tmp_15 = r0;
    s.changed___7729 = (s.tmp_15);
    r0 = (s.arg0).fields["_data"] = (s.d___7726);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim.control.millis();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["_localTime"] = (s.tmp_1);
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.REPORT_RECEIVE___3145;
    s.tmp_0.arg2 = s.arg0;
    s.callLocIdx = 413; s.pc = 14; return s.tmp_0;
  case 14:
    r0 = s.retval;
    r0 = pxsim_numops_toBoolDecr(s.changed___7729);
    if (!r0) { step = 7; continue; }
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.REPORT_UPDATE___3146;
    s.tmp_0.arg2 = s.arg0;
    s.callLocIdx = 414; s.pc = 15; return s.tmp_0;
  case 15:
    r0 = s.retval;
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.CHANGE___3136;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 415; s.pc = 16; return s.tmp_0;
  case 16:
    r0 = s.retval;
  case 7:
  case 8:
  case 9:
  case 10:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_RegisterClient_handlePacket__P3192.info = {"start":22710,"length":537,"line":688,"column":8,"endLine":701,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"handlePacket","argumentNames":["this","packet"]}

function jacdac_RegisterClient_handlePacket__P3192_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_RegisterClient_handlePacket__P3192, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  tmp_15: undefined,
  d___7726: undefined,
  changed___7729: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function helpers_bufferEquals__P2612(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.i___7787 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_7 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_7);
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_6);
    s.tmp_5 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_11 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_11);
    s.tmp_10 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_10);
    s.tmp_9 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_9);
    s.tmp_8 = r0;
    r0 = (s.tmp_4 == s.tmp_8);
    { step = 11; continue; }
  case 3:
  case 4:
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_13 = r0;
    r0 = pxsim.BufferMethods.length(s.arg1);
    s.tmp_14 = r0;
    r0 = (s.tmp_13 != s.tmp_14);
    s.tmp_12 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_12);
    if (!r0) { step = 5; continue; }
    r0 = false;
    { step = 11; continue; }
  case 5:
  case 6:
    s.i___7787 = (0);
  case 7:
    s.tmp_1 = r0 = s.i___7787;
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 10; continue; }
    r0 = pxsim.BufferMethods.getByte(s.arg0, s.i___7787);
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.getByte(s.arg1, s.i___7787);
    s.tmp_5 = r0;
    r0 = (s.tmp_4 != s.tmp_5);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 8; continue; }
    r0 = false;
    { step = 11; continue; }
  case 8:
  case 9:
    r0 = (s.i___7787 + 1);
    s.i___7787 = (r0);
    { step = 7; continue; }
  case 10:
    r0 = true;
  case 11:
    return leave(s, r0)
  default: oops()
} } }
helpers_bufferEquals__P2612.info = {"start":3970,"length":283,"line":139,"column":4,"endLine":147,"endColumn":5,"fileName":"pxt_modules/core/buffer.ts","functionName":"bufferEquals","argumentNames":["l","r"]}

function helpers_bufferEquals__P2612_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_bufferEquals__P2612, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  i___7787: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_intData__P2806(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    s.tmp_0 = jacdac_intOfBuffer__P2824_mk(s);
    r0 = s.arg0.fields["_data"];
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 122; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_intData__P2806.info = {"start":5282,"length":68,"line":167,"column":8,"endLine":169,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"intData","argumentNames":["this"]}
jacdac_JDPacket_intData__P2806.isGetter = true;

function jacdac_JDPacket_intData__P2806_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_intData__P2806, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_intOfBuffer__P2824(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.fmt___7810 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = undefined;
    { step = 9; continue; }
  case 1:
  case 2:
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_2 = r0;
    r0 = pxsim_pxtcore.switch_eq(0, s.tmp_2);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(1, s.tmp_2);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(2, s.tmp_2);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq(3, s.tmp_2);
    if (r0) { step = 6; continue; }
    r0 = s.tmp_2;
    { step = 7; continue; }
  case 3:
  case 4:
    s.fmt___7810 = (1);
    { step = 8; continue; }
  case 5:
  case 6:
    s.fmt___7810 = (3);
    { step = 8; continue; }
  case 7:
    s.fmt___7810 = (5);
  case 8:
    r0 = pxsim.BufferMethods.getNumber(s.arg0, s.fmt___7810, 0);
  case 9:
    return leave(s, r0)
  default: oops()
} } }
jacdac_intOfBuffer__P2824.info = {"start":10557,"length":497,"line":337,"column":4,"endLine":354,"endColumn":5,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"intOfBuffer","argumentNames":["data"]}

function jacdac_intOfBuffer__P2824_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_intOfBuffer__P2824, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  fmt___7810: undefined,
  arg0: undefined,
} }





function jacdac_Client_raiseEvent__P3941(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.h___7837 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Client__C3193_VT)) failedCast(r0);
    r0 = s.arg0.fields["eventId"];
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(s.tmp_0, s.arg1, 1);
    r0 = s.arg0.fields["handlers"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = s.arg0.fields["handlers"];
    s.tmp_1 = r0;
    if ((s.arg1) && (s.arg1).vtable) {
    setupResume(s, 5);
    pxsim_String__stringConv(s.arg1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg1) + ""; }
  case 5:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_4);
    s.tmp_2 = r0;
    r0 = pxsim_pxtrt.mapGetGeneric(s.tmp_1, s.tmp_2);
    s.h___7837 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.h___7837);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = lambda_2_mk(s);
    s.tmp_0.argL = s.h___7837;
    s.tmp_0.arg0 = s.arg2;
    setupLambda(s.tmp_0, s.tmp_0.argL);
    s.callLocIdx = 445; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
  case 1:
  case 2:
  case 3:
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_raiseEvent__P3941.info = {"start":31472,"length":251,"line":946,"column":8,"endLine":952,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"raiseEvent","argumentNames":["this","value","argument"]}

function jacdac_Client_raiseEvent__P3941_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_raiseEvent__P3941, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  h___7837: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_RegisterClient_reset__P3186(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_RegisterClient__C3184_VT)) failedCast(r0);
    r0 = (s.arg0).fields["_data"] = (undefined);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim.control.millis();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["_localTime"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_RegisterClient_reset__P3186.info = {"start":21170,"length":101,"line":640,"column":8,"endLine":643,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"reset","argumentNames":["this"]}

function jacdac_RegisterClient_reset__P3186_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_RegisterClient_reset__P3186, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_isConstRegister__P2765(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (384 <= s.arg0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = (s.arg0 <= 511);
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBool(s.tmp_1);
    if (!r0) { step = 3; continue; }
    r0 = s.tmp_1;
    { step = 6; continue; }
  case 3:
    r0 = (256 <= s.arg0);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (r0) { step = 4; continue; }
    r0 = s.tmp_2;
    { step = 5; continue; }
  case 4:
    r0 = (s.arg0 <= 383);
  case 5:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = s.tmp_3;
  case 6:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = s.tmp_4;
    return leave(s, r0)
  default: oops()
} } }
jacdac_isConstRegister__P2765.info = {"start":23,"length":137,"line":1,"column":4,"endLine":3,"endColumn":5,"fileName":"pxt_modules/jacdac/spec.ts","functionName":"isConstRegister","argumentNames":["code"]}

function jacdac_isConstRegister__P2765_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_isConstRegister__P2765, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }





function jacdac_Client_currentDevice__P3201(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Client__C3193_VT)) failedCast(r0);
    r0 = s.arg0.fields["_currentDevice"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 !== s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = (s.arg0).fields["_currentDevice"] = (s.arg1);
    s.tmp_0 = helpers_arrayForEach__P1998_mk(s);
    r0 = s.arg0.fields["registers"];
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = jacdac_Client_currentDevice_inline__P7884;
    s.callLocIdx = 419; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_currentDevice__P3201.info = {"start":24207,"length":213,"line":731,"column":8,"endLine":736,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"currentDevice","argumentNames":["this","device"]}

function jacdac_Client_currentDevice__P3201_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_currentDevice__P3201, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Client_currentDevice_inline__P7884(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = jacdac_RegisterClient_reset__P3186_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 418; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_currentDevice_inline__P7884.info = {"start":24377,"length":18,"line":734,"column":39,"endLine":734,"endColumn":57,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["reg"]}

function jacdac_Client_currentDevice_inline__P7884_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_currentDevice_inline__P7884, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_Client_currentDevice__P3200(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Client__C3193_VT)) failedCast(r0);
    r0 = s.arg0.fields["_currentDevice"];
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_Client_currentDevice__P3200.info = {"start":24127,"length":70,"line":727,"column":8,"endLine":729,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"currentDevice","argumentNames":["this"]}
jacdac_Client_currentDevice__P3200.isGetter = true;

function jacdac_Client_currentDevice__P3200_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_currentDevice__P3200, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_JDPacket_eventCounter__P2800(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    s.tmp_1 = jacdac_JDPacket_isEvent__P2798_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.callLocIdx = 118; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0.fields["_header"];
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_4, 4, 14);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 >> 8);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 127);
    { step = 2; continue; }
  case 1:
    r0 = undefined;
  case 2:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = s.tmp_5;
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_eventCounter__P2800.info = {"start":4520,"length":202,"line":138,"column":8,"endLine":143,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"eventCounter","argumentNames":["this"]}
jacdac_JDPacket_eventCounter__P2800.isGetter = true;

function jacdac_JDPacket_eventCounter__P2800_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_eventCounter__P2800, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
} }





function jacdac_Device_lookupQuery__P4045(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C3220_VT)) failedCast(r0);
    r0 = s.arg0.fields["queries"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_3 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_4 = r0;
    r0 = (s.tmp_3).fields["queries"] = (s.tmp_4);
  case 1:
  case 2:
    r0 = pxsim_pxtcore_mkAction(2, jacdac_Device_lookupQuery_inline__P7912);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg1);
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 1, s.arg2);
    s.tmp_1 = helpers_arrayFind__P2000_mk(s);
    r0 = s.arg0.fields["queries"];
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 454; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device_lookupQuery__P4045.info = {"start":35083,"length":183,"line":1066,"column":8,"endLine":1069,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"lookupQuery","argumentNames":["this","reg","serv"]}

function jacdac_Device_lookupQuery__P4045_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_lookupQuery__P4045, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_Device_lookupQuery_inline__P7912(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["reg"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == s.caps[0]);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = s.arg0.fields["serviceIdx"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 == s.caps[1]);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = s.tmp_3;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device_lookupQuery_inline__P7912.info = {"start":35214,"length":41,"line":1068,"column":37,"endLine":1068,"endColumn":78,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["q"]}

function jacdac_Device_lookupQuery_inline__P7912_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_lookupQuery_inline__P7912, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function jacdac_Bus_reattach__P3168(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.newClients___7951 = undefined;
    s.occupied___7953 = undefined;
    s.c___7961 = undefined;
    s.unnamed90___U3 = undefined;
    s.unnamed91___U4 = undefined;
    s.newClass___7968 = undefined;
    s.i___8009 = undefined;
    s.serviceClass___8019 = undefined;
    s.cc___8027 = undefined;
    s.unnamed92___U9 = undefined;
    s.unnamed93___U10 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Bus__C3152_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg1;
    r0 = pxsim.control.millis();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["lastSeen"] = (s.tmp_1);
    s.tmp_0 = jacdac_log__P4033_mk(s);
    s.tmp_7 = jacdac_Device_toString__P3230_mk(s);
    s.tmp_7.arg0 = s.arg1;
    s.callLocIdx = 320; s.pc = 25; return s.tmp_7;
  case 25:
    r0 = s.retval;
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 26);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 26:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat("reattaching services to ", s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, "; cl=");
    s.tmp_3 = r0;
    r0 = s.arg0.fields["unattachedClients"];
    s.tmp_10 = r0;
    r0 = pxsim_Array__length(s.tmp_10);
    s.tmp_9 = r0;
    if ((s.tmp_9) && (s.tmp_9).vtable) {
    setupResume(s, 27);
    pxsim_String__stringConv(s.tmp_9);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_9) + ""; }
  case 27:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_8);
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_2, "/");
    s.tmp_1 = r0;
    r0 = s.arg0.fields["allClients"];
    s.tmp_13 = r0;
    r0 = pxsim_Array__length(s.tmp_13);
    s.tmp_12 = r0;
    if ((s.tmp_12) && (s.tmp_12).vtable) {
    setupResume(s, 28);
    pxsim_String__stringConv(s.tmp_12);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_12) + ""; }
  case 28:
    r0 = s.retval;
    s.tmp_11 = r0;
    r0 = pxsim_String__concat(s.tmp_1, s.tmp_11);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 321; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.newClients___7951 = (r0);
    r0 = s.arg1.fields["services"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >> 2);
    s.tmp_0 = r0;
    r0 = pxsim.control.createBuffer(s.tmp_0);
    s.occupied___7953 = (r0);
    s.c___7961 = (undefined);
    r0 = s.arg1.fields["clients"];
    s.unnamed90___U3 = (r0);
    s.unnamed91___U4 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed91___U4;
    r0 = pxsim_Array__length(s.unnamed90___U3);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 9; continue; }
    r0 = pxsim_Array__getAt(s.unnamed90___U3, s.unnamed91___U4);
    s.c___7961 = (r0);
    r0 = s.c___7961.fields["broadcast"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 2; continue; }
    s.tmp_3 = jacdac_Client__detach__P3211_mk(s);
    s.tmp_3.arg0 = s.c___7961;
    s.callLocIdx = 322; s.pc = 29; return s.tmp_3;
  case 29:
    r0 = s.retval;
    { step = 8; continue; }
  case 2:
  case 3:
    r0 = s.arg1.fields["services"];
    s.tmp_0 = r0;
    r0 = s.c___7961.fields["serviceIndex"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 << 2);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_0, 11, s.tmp_1);
    s.newClass___7968 = (r0);
    r0 = s.c___7961.fields["serviceClass"];
    s.tmp_1 = r0;
    r0 = (s.newClass___7968 == s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = s.tmp_0;
    { step = 5; continue; }
  case 4:
    s.tmp_2 = jacdac_Device_matchesRoleAt__P3231_mk(s);
    s.tmp_2.arg0 = s.arg1;
    r0 = s.c___7961.fields["role"];
    s.tmp_2.arg1 = r0;
    r0 = s.c___7961.fields["serviceIndex"];
    s.tmp_2.arg2 = r0;
    s.callLocIdx = 323; s.pc = 30; return s.tmp_2;
  case 30:
    r0 = s.retval;
  case 5:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 6; continue; }
    r0 = pxsim_Array__push(s.newClients___7951, s.c___7961);
    r0 = s.c___7961.fields["serviceIndex"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setByte(s.occupied___7953, s.tmp_0, 1);
    { step = 7; continue; }
  case 6:
    s.tmp_0 = jacdac_Client__detach__P3211_mk(s);
    s.tmp_0.arg0 = s.c___7961;
    s.callLocIdx = 324; s.pc = 31; return s.tmp_0;
  case 31:
    r0 = s.retval;
  case 7:
  case 8:
    r0 = (s.unnamed91___U4 + 1);
    s.unnamed91___U4 = (r0);
    { step = 1; continue; }
  case 9:
    s.unnamed90___U3 = (undefined);
    r0 = (s.arg1).fields["clients"] = (s.newClients___7951);
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.DEVICE_ANNOUNCE___3142;
    s.tmp_0.arg2 = s.arg1;
    s.callLocIdx = 325; s.pc = 32; return s.tmp_0;
  case 32:
    r0 = s.retval;
    r0 = s.arg0.fields["unattachedClients"];
    s.tmp_2 = r0;
    r0 = pxsim_Array__length(s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 10; continue; }
    { step = 23; continue; }
  case 10:
  case 11:
    s.i___8009 = (4);
  case 12:
    s.tmp_1 = r0 = s.i___8009;
    r0 = s.arg1.fields["services"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_3);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 22; continue; }
    s.tmp_5 = r0 = s.occupied___7953;
    r0 = (s.i___8009 >> 2);
    s.tmp_6 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_5, s.tmp_6);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 13; continue; }
    { step = 21; continue; }
  case 13:
  case 14:
    r0 = s.arg1.fields["services"];
    s.tmp_7 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_7, 11, s.i___8009);
    s.serviceClass___8019 = (r0);
    s.cc___8027 = (undefined);
    r0 = s.arg0.fields["unattachedClients"];
    s.unnamed92___U9 = (r0);
    s.unnamed93___U10 = (0);
  case 15:
    s.tmp_0 = r0 = s.unnamed93___U10;
    r0 = pxsim_Array__length(s.unnamed92___U9);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 20; continue; }
    r0 = pxsim_Array__getAt(s.unnamed92___U9, s.unnamed93___U10);
    s.cc___8027 = (r0);
    r0 = s.cc___8027.fields["serviceClass"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == s.serviceClass___8019);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 18; continue; }
    s.tmp_5 = jacdac_Client__attach__P3210_mk(s);
    s.tmp_5.arg0 = s.cc___8027;
    s.tmp_5.arg1 = s.arg1;
    r0 = (s.i___8009 >> 2);
    s.tmp_5.arg2 = r0;
    s.callLocIdx = 326; s.pc = 33; return s.tmp_5;
  case 33:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 16; continue; }
    { step = 20; continue; }
  case 16:
  case 17:
  case 18:
  case 19:
    r0 = (s.unnamed93___U10 + 1);
    s.unnamed93___U10 = (r0);
    { step = 15; continue; }
  case 20:
    s.unnamed92___U9 = (undefined);
  case 21:
    r0 = (s.i___8009 + 4);
    s.i___8009 = (r0);
    { step = 12; continue; }
  case 22:
  case 23:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Bus_reattach__P3168.info = {"start":6123,"length":1669,"line":183,"column":8,"endLine":229,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"reattach","argumentNames":["this","dev"]}

function jacdac_Bus_reattach__P3168_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Bus_reattach__P3168, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  newClients___7951: undefined,
  occupied___7953: undefined,
  c___7961: undefined,
  unnamed90___U3: undefined,
  unnamed91___U4: undefined,
  newClass___7968: undefined,
  i___8009: undefined,
  serviceClass___8019: undefined,
  cc___8027: undefined,
  unnamed92___U9: undefined,
  unnamed93___U10: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Client__attach__P3210(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Client__C3193_VT)) failedCast(r0);
    r0 = s.arg0.fields["device"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.throwValue("Invalid attach");
  case 1:
  case 2:
    r0 = s.arg0.fields["broadcast"];
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 5; continue; }
    s.tmp_7 = jacdac_Device_matchesRoleAt__P3231_mk(s);
    s.tmp_7.arg0 = s.arg1;
    r0 = s.arg0.fields["role"];
    s.tmp_7.arg1 = r0;
    s.tmp_7.arg2 = s.arg2;
    s.callLocIdx = 432; s.pc = 8; return s.tmp_7;
  case 8:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_6);
    s.tmp_5 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 3; continue; }
    r0 = false;
    { step = 7; continue; }
  case 3:
  case 4:
    r0 = (s.arg0).fields["device"] = (s.arg1);
    r0 = (s.arg0).fields["serviceIndex"] = (s.arg2);
    s.tmp_0 = jacdac_Bus_attachClient__P3165_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 433; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
  case 5:
  case 6:
    s.tmp_0 = jacdac_log__P4033_mk(s);
    s.tmp_7 = jacdac_Device_toString__P3230_mk(s);
    s.tmp_7.arg0 = s.arg1;
    s.callLocIdx = 434; s.pc = 11; return s.tmp_7;
  case 11:
    r0 = s.retval;
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 12);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 12:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat("attached ", s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, "/");
    s.tmp_3 = r0;
    if ((s.arg2) && (s.arg2).vtable) {
    setupResume(s, 13);
    pxsim_String__stringConv(s.arg2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg2) + ""; }
  case 13:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_8);
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_2, " to client ");
    s.tmp_1 = r0;
    r0 = s.arg0.fields["role"];
    s.tmp_10 = r0;
    if ((s.tmp_10) && (s.tmp_10).vtable) {
    setupResume(s, 14);
    pxsim_String__stringConv(s.tmp_10);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_10) + ""; }
  case 14:
    r0 = s.retval;
    s.tmp_9 = r0;
    r0 = pxsim_String__concat(s.tmp_1, s.tmp_9);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 435; s.pc = 10; return s.tmp_0;
  case 10:
    r0 = s.retval;
    r0 = s.arg1.fields["clients"];
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.arg0);
    s.tmp_0 = jacdac_Client_handleConnected__P3939_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 436; s.pc = 15; return s.tmp_0;
  case 15:
    r0 = s.retval;
    r0 = true;
  case 7:
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client__attach__P3210.info = {"start":27507,"length":610,"line":827,"column":8,"endLine":843,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"_attach","argumentNames":["this","dev","serviceNum"]}

function jacdac_Client__attach__P3210_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client__attach__P3210, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_Client_handleConnected__P3939(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Client__C3193_VT)) failedCast(r0);
    s.tmp_0 = jacdac_ClientPacketQueue_resend__P4038_mk(s);
    r0 = s.arg0.fields["config"];
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 437; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.CONNECT___3137;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 438; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_handleConnected__P3939.info = {"start":28127,"length":508,"line":845,"column":8,"endLine":856,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"handleConnected","argumentNames":["this"]}

function jacdac_Client_handleConnected__P3939_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_handleConnected__P3939, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_ClientPacketQueue_resend__P4038(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.sn___8098 = undefined;
    s.hasNonSet___8112 = undefined;
    s.p___8114 = undefined;
    s.unnamed96___U3 = undefined;
    s.unnamed97___U4 = undefined;
    s.pkt___8128 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_ClientPacketQueue__C4034_VT)) failedCast(r0);
    r0 = s.arg0.fields["parent"];
    r0 = r0.fields["serviceIndex"];
    s.sn___8098 = (r0);
    r0 = (s.sn___8098 == null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = s.arg0.fields["pkts"];
    s.tmp_2 = r0;
    r0 = pxsim_Array__length(s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 0);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    { step = 11; continue; }
  case 3:
  case 4:
    s.hasNonSet___8112 = (false);
    s.p___8114 = (undefined);
    r0 = s.arg0.fields["pkts"];
    s.unnamed96___U3 = (r0);
    s.unnamed97___U4 = (0);
  case 5:
    s.tmp_0 = r0 = s.unnamed97___U4;
    r0 = pxsim_Array__length(s.unnamed96___U3);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 8; continue; }
    r0 = pxsim_Array__getAt(s.unnamed96___U3, s.unnamed97___U4);
    s.p___8114 = (r0);
    r0 = pxsim.BufferMethods.setByte(s.p___8114, 1, s.sn___8098);
    r0 = pxsim.BufferMethods.getByte(s.p___8114, 3);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 >> 4);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 != 2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.hasNonSet___8112 = (true);
  case 6:
  case 7:
    r0 = (s.unnamed97___U4 + 1);
    s.unnamed97___U4 = (r0);
    { step = 5; continue; }
  case 8:
    s.unnamed96___U3 = (undefined);
    s.tmp_0 = jacdac_JDPacket_onlyHeader__P2783_mk(s);
    s.tmp_0.arg0 = 0;
    s.callLocIdx = 403; s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
    s.pkt___8128 = (r0);
    s.tmp_0 = jacdac_JDPacket_compress__P2810_mk(s);
    s.tmp_0.arg0 = s.pkt___8128;
    r0 = s.arg0.fields["pkts"];
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 404; s.pc = 13; return s.tmp_0;
  case 13:
    r0 = s.retval;
    s.tmp_0 = jacdac_Client_sendCommand__P3212_mk(s);
    r0 = s.arg0.fields["parent"];
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = s.pkt___8128;
    s.callLocIdx = 405; s.pc = 14; return s.tmp_0;
  case 14:
    r0 = s.retval;
    r0 = pxsim_numops_toBoolDecr(s.hasNonSet___8112);
    if (!r0) { step = 9; continue; }
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = helpers_arrayFilter__P1999_mk(s);
    r0 = s.arg0.fields["pkts"];
    s.tmp_2.arg0 = r0;
    s.tmp_2.arg1 = jacdac_ClientPacketQueue_resend_inline__P8146;
    s.callLocIdx = 406; s.pc = 15; return s.tmp_2;
  case 15:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["pkts"] = (s.tmp_1);
  case 9:
  case 10:
  case 11:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_ClientPacketQueue_resend__P4038.info = {"start":19879,"length":642,"line":598,"column":8,"endLine":614,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"resend","argumentNames":["this"]}

function jacdac_ClientPacketQueue_resend__P4038_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_ClientPacketQueue_resend__P4038, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  sn___8098: undefined,
  hasNonSet___8112: undefined,
  p___8114: undefined,
  unnamed96___U3: undefined,
  unnamed97___U4: undefined,
  pkt___8128: undefined,
  arg0: undefined,
} }





function jacdac_ClientPacketQueue_resend_inline__P8146(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.BufferMethods.getByte(s.arg0, 3);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >> 4);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == 2);
    return leave(s, r0)
  default: oops()
} } }
jacdac_ClientPacketQueue_resend_inline__P8146.info = {"start":20458,"length":35,"line":612,"column":20,"endLine":612,"endColumn":55,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["p"]}

function jacdac_ClientPacketQueue_resend_inline__P8146_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_ClientPacketQueue_resend_inline__P8146, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_Client_sendCommand__P3212(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Client__C3193_VT)) failedCast(r0);
    s.tmp_0 = jacdac_Client_start__P3216_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 442; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    r0 = s.arg0.fields["serviceIndex"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    s.tmp_2 = jacdac_JDPacket_serviceIndex__P2794_mk(s);
    s.tmp_2.arg0 = s.arg1;
    r0 = s.arg0.fields["serviceIndex"];
    s.tmp_2.arg1 = r0;
    s.callLocIdx = 443; s.pc = 5; return s.tmp_2;
  case 5:
    r0 = s.retval;
    s.tmp_0 = jacdac_JDPacket__sendCmd__P2819_mk(s);
    s.tmp_0.arg0 = s.arg1;
    r0 = s.arg0.fields["device"];
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 444; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_sendCommand__P3212.info = {"start":30577,"length":200,"line":920,"column":8,"endLine":925,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"sendCommand","argumentNames":["this","pkt"]}

function jacdac_Client_sendCommand__P3212_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_sendCommand__P3212, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket__sendCmd__P2819(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    s.tmp_2 = jacdac_JDPacket__sendCmdId__P2820_mk(s);
    s.tmp_2.arg0 = s.arg0;
    r0 = s.arg1.fields["deviceId"];
    s.tmp_2.arg1 = r0;
    s.callLocIdx = 142; s.pc = 4; return s.tmp_2;
  case 4:
    r0 = s.retval;
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket__sendCmd__P2819.info = {"start":7569,"length":104,"line":244,"column":8,"endLine":247,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"_sendCmd","argumentNames":["this","dev"]}

function jacdac_JDPacket__sendCmd__P2819_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket__sendCmd__P2819, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket__sendCmdId__P2820(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    s.tmp_2 = jacdac_JDPacket_deviceIdentifier__P2787_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.arg1;
    s.callLocIdx = 143; s.pc = 4; return s.tmp_2;
  case 4:
    r0 = s.retval;
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_0, 3);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 | 1);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 3, s.tmp_1);
    s.tmp_0 = jacdac_JDPacket__sendCore__P2817_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 144; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket__sendCmdId__P2820.info = {"start":7683,"length":192,"line":249,"column":8,"endLine":254,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"_sendCmdId","argumentNames":["this","devId"]}

function jacdac_JDPacket__sendCmdId__P2820_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket__sendCmdId__P2820, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Client_start__P3216(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Client__C3193_VT)) failedCast(r0);
    r0 = s.arg0.fields["started"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = (s.arg0).fields["started"] = (true);
    s.tmp_0 = jacdac_start__P3248_mk(s);
    s.tmp_0.arg0 = undefined;
    s.callLocIdx = 446; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    s.tmp_0 = jacdac_Bus_startClient__P3166_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 447; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_start__P3216.info = {"start":32542,"length":156,"line":978,"column":8,"endLine":983,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"start","argumentNames":["this"]}

function jacdac_Client_start__P3216_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_start__P3216, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_Bus_startClient__P3166(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Bus__C3152_VT)) failedCast(r0);
    r0 = s.arg0.fields["unattachedClients"];
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.arg1);
    r0 = s.arg0.fields["allClients"];
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.arg1);
    s.tmp_0 = jacdac_Bus_clearAttachCache__P3162_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 319; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Bus_startClient__P3166.info = {"start":5755,"length":164,"line":171,"column":8,"endLine":175,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"startClient","argumentNames":["this","client"]}

function jacdac_Bus_startClient__P3166_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Bus_startClient__P3166, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Bus_clearAttachCache__P3162(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.d___8214 = undefined;
    s.unnamed86___U1 = undefined;
    s.unnamed87___U2 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Bus__C3152_VT)) failedCast(r0);
    s.d___8214 = (undefined);
    r0 = s.arg0.fields["devices"];
    s.unnamed86___U1 = (r0);
    s.unnamed87___U2 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed87___U2;
    r0 = pxsim_Array__length(s.unnamed86___U1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.unnamed86___U1, s.unnamed87___U2);
    s.d___8214 = (r0);
    r0 = s.d___8214.fields["services"];
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_5);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 & 3);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == 0);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 2; continue; }
    s.tmp_6 = r0 = s.d___8214;
    s.tmp_8 = helpers_bufferConcat__P2611_mk(s);
    r0 = s.d___8214.fields["services"];
    s.tmp_8.arg0 = r0;
    r0 = pxsim.control.createBuffer(1);
    s.tmp_8.arg1 = r0;
    s.callLocIdx = 306; s.pc = 5; return s.tmp_8;
  case 5:
    r0 = s.retval;
    s.tmp_7 = r0;
    r0 = (s.tmp_6).fields["services"] = (s.tmp_7);
  case 2:
  case 3:
    r0 = (s.unnamed87___U2 + 1);
    s.unnamed87___U2 = (r0);
    { step = 1; continue; }
  case 4:
    s.unnamed86___U1 = (undefined);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Bus_clearAttachCache__P3162.info = {"start":3381,"length":306,"line":108,"column":8,"endLine":114,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"clearAttachCache","argumentNames":["this"]}

function jacdac_Bus_clearAttachCache__P3162_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Bus_clearAttachCache__P3162, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  d___8214: undefined,
  unnamed86___U1: undefined,
  unnamed87___U2: undefined,
  arg0: undefined,
} }





function helpers_bufferConcat__P2611(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.r___8232 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.length(s.arg1);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 + s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim.control.createBuffer(s.tmp_0);
    s.r___8232 = (r0);
    r0 = pxsim.BufferMethods.write(s.r___8232, 0, s.arg0);
    s.tmp_0 = r0 = s.r___8232;
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.write(s.tmp_0, s.tmp_1, s.arg1);
    r0 = s.r___8232;
    return leave(s, r0)
  default: oops()
} } }
helpers_bufferConcat__P2611.info = {"start":3785,"length":179,"line":132,"column":4,"endLine":137,"endColumn":5,"fileName":"pxt_modules/core/buffer.ts","functionName":"bufferConcat","argumentNames":["a","b"]}

function helpers_bufferConcat__P2611_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_bufferConcat__P2611, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  r___8232: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_compress__P2810(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.sz___8256 = undefined;
    s.s___8260 = undefined;
    s.unnamed58___U2 = undefined;
    s.unnamed59___U3 = undefined;
    s.data___8267 = undefined;
    s.s___8288 = undefined;
    s.unnamed60___U6 = undefined;
    s.unnamed61___U7 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = pxsim_Array__length(s.arg1);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 7; continue; }
  case 1:
  case 2:
    s.sz___8256 = (-4);
    s.s___8260 = (undefined);
    s.unnamed58___U2 = (s.arg1);
    s.unnamed59___U3 = (0);
  case 3:
    s.tmp_0 = r0 = s.unnamed59___U3;
    r0 = pxsim_Array__length(s.unnamed58___U2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.unnamed58___U2, s.unnamed59___U3);
    s.s___8260 = (r0);
    s.tmp_2 = r0 = s.sz___8256;
    r0 = pxsim.BufferMethods.length(s.s___8260);
    s.tmp_3 = r0;
    r0 = (s.tmp_2 + s.tmp_3);
    s.sz___8256 = (r0);
    r0 = (s.unnamed59___U3 + 1);
    s.unnamed59___U3 = (r0);
    { step = 3; continue; }
  case 4:
    s.unnamed58___U2 = (undefined);
    r0 = pxsim.control.createBuffer(s.sz___8256);
    s.data___8267 = (r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim_Array__getAt(s.arg1, 0);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.write(s.tmp_0, 12, s.tmp_1);
    s.tmp_0 = r0 = s.data___8267;
    r0 = pxsim_Array__getAt(s.arg1, 0);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_2, 4, -1);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.write(s.tmp_0, 0, s.tmp_1);
    r0 = pxsim_Array__getAt(s.arg1, 0);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_1);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 - 4);
    s.sz___8256 = (r0);
    s.s___8288 = (undefined);
    s.tmp_0 = helpers_arraySlice__P2004_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.tmp_0.arg1 = 1;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 124; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    s.unnamed60___U6 = (r0);
    s.unnamed61___U7 = (0);
  case 5:
    s.tmp_0 = r0 = s.unnamed61___U7;
    r0 = pxsim_Array__length(s.unnamed60___U6);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 6; continue; }
    r0 = pxsim_Array__getAt(s.unnamed60___U6, s.unnamed61___U7);
    s.s___8288 = (r0);
    r0 = pxsim.BufferMethods.write(s.data___8267, s.sz___8256, s.s___8288);
    s.tmp_0 = r0 = s.sz___8256;
    r0 = pxsim.BufferMethods.length(s.s___8288);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 + s.tmp_1);
    s.sz___8256 = (r0);
    r0 = (s.unnamed61___U7 + 1);
    s.unnamed61___U7 = (r0);
    { step = 5; continue; }
  case 6:
    s.unnamed60___U6 = (undefined);
    s.tmp_0 = jacdac_JDPacket_data__P2805_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.data___8267;
    s.callLocIdx = 125; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_compress__P2810.info = {"start":5702,"length":526,"line":184,"column":8,"endLine":199,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"compress","argumentNames":["this","stripped"]}

function jacdac_JDPacket_compress__P2810_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_compress__P2810, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  sz___8256: undefined,
  s___8260: undefined,
  unnamed58___U2: undefined,
  unnamed59___U3: undefined,
  data___8267: undefined,
  s___8288: undefined,
  unnamed60___U6: undefined,
  unnamed61___U7: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Bus_attachClient__P3165(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Bus__C3152_VT)) failedCast(r0);
    r0 = s.arg0.fields["unattachedClients"];
    s.tmp_0 = r0;
    r0 = pxsim_Array_.removeElement(s.tmp_0, s.arg1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Bus_attachClient__P3165.info = {"start":5648,"length":97,"line":167,"column":8,"endLine":169,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"attachClient","argumentNames":["this","client"]}

function jacdac_Bus_attachClient__P3165_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Bus_attachClient__P3165, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Device_matchesRoleAt__P3231(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C3220_VT)) failedCast(r0);
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = true;
    { step = 9; continue; }
  case 1:
  case 2:
    r0 = s.arg0.fields["deviceId"];
    s.tmp_3 = r0;
    r0 = (s.arg1 == s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 3; continue; }
    r0 = true;
    { step = 9; continue; }
  case 3:
  case 4:
    s.tmp_5 = r0 = s.arg1;
    r0 = s.arg0.fields["deviceId"];
    s.tmp_10 = r0;
    if ((s.tmp_10) && (s.tmp_10).vtable) {
    setupResume(s, 10);
    pxsim_String__stringConv(s.tmp_10);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_10) + ""; }
  case 10:
    r0 = s.retval;
    s.tmp_9 = r0;
    r0 = pxsim_String__concat(s.tmp_9, ":");
    s.tmp_8 = r0;
    if ((s.tmp_8) && (s.tmp_8).vtable) {
    setupResume(s, 11);
    pxsim_String__stringConv(s.tmp_8);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_8) + ""; }
  case 11:
    r0 = s.retval;
    s.tmp_7 = r0;
    if ((s.arg2) && (s.arg2).vtable) {
    setupResume(s, 12);
    pxsim_String__stringConv(s.arg2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg2) + ""; }
  case 12:
    r0 = s.retval;
    s.tmp_11 = r0;
    r0 = pxsim_String__concat(s.tmp_7, s.tmp_11);
    s.tmp_6 = r0;
    r0 = (s.tmp_5 == s.tmp_6);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 5; continue; }
    r0 = true;
    { step = 9; continue; }
  case 5:
  case 6:
    r0 = pxsim_String_.indexOf(s.arg1, ":", undefined);
    s.tmp_13 = r0;
    r0 = (s.tmp_13 >= 0);
    s.tmp_12 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_12);
    if (!r0) { step = 7; continue; }
    r0 = false;
    { step = 9; continue; }
  case 7:
  case 8:
    s.tmp_15 = jacdac__rolemgr_getRole__P3073_mk(s);
    r0 = s.arg0.fields["deviceId"];
    s.tmp_15.arg0 = r0;
    s.tmp_15.arg1 = s.arg2;
    s.callLocIdx = 453; s.pc = 13; return s.tmp_15;
  case 13:
    r0 = s.retval;
    s.tmp_14 = r0;
    r0 = (s.tmp_14 == s.arg1);
  case 9:
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device_matchesRoleAt__P3231.info = {"start":34724,"length":349,"line":1055,"column":8,"endLine":1064,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"matchesRoleAt","argumentNames":["this","role","serviceIdx"]}

function jacdac_Device_matchesRoleAt__P3231_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_matchesRoleAt__P3231, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  tmp_15: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac__rolemgr_getRole__P3073(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = settings_readString__P2706_mk(s);
    if ((globals.roleSettingPrefix___4009) && (globals.roleSettingPrefix___4009).vtable) {
    setupResume(s, 2);
    pxsim_String__stringConv(globals.roleSettingPrefix___4009);
    checkResumeConsumed();
    return;
    } else { s.retval = (globals.roleSettingPrefix___4009) + ""; }
  case 2:
    r0 = s.retval;
    s.tmp_5 = r0;
    if ((s.arg0) && (s.arg0).vtable) {
    setupResume(s, 3);
    pxsim_String__stringConv(s.arg0);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg0) + ""; }
  case 3:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(s.tmp_5, s.tmp_6);
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 4);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 4:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_3, ":");
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 5);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 5:
    r0 = s.retval;
    s.tmp_1 = r0;
    if ((s.arg1) && (s.arg1).vtable) {
    setupResume(s, 6);
    pxsim_String__stringConv(s.arg1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg1) + ""; }
  case 6:
    r0 = s.retval;
    s.tmp_7 = r0;
    r0 = pxsim_String__concat(s.tmp_1, s.tmp_7);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 222; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_getRole__P3073.info = {"start":217,"length":141,"line":8,"column":4,"endLine":10,"endColumn":5,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"getRole","argumentNames":["devid","servIdx"]}

function jacdac__rolemgr_getRole__P3073_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_getRole__P3073, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function settings_readString__P2706(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___8364 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._get(s.arg0);
    s.buf___8364 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.buf___8364);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = undefined;
    { step = 3; continue; }
    { step = 2; continue; }
  case 1:
    r0 = pxsim.BufferMethods.toString(s.buf___8364);
    { step = 3; continue; }
  case 2:
    r0 = undefined;
  case 3:
    return leave(s, r0)
  default: oops()
} } }
settings_readString__P2706.info = {"start":2649,"length":177,"line":103,"column":4,"endLine":109,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"readString","argumentNames":["key"]}

function settings_readString__P2706_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_readString__P2706, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  buf___8364: undefined,
  arg0: undefined,
} }





function settings_readBuffer__P2705(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._get(s.arg0);
    return leave(s, r0)
  default: oops()
} } }
settings_readBuffer__P2705.info = {"start":2516,"length":72,"line":96,"column":4,"endLine":98,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"readBuffer","argumentNames":["key"]}

function settings_readBuffer__P2705_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_readBuffer__P2705, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_Client__detach__P3211(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Client__C3193_VT)) failedCast(r0);
    s.tmp_0 = jacdac_log__P4033_mk(s);
    r0 = s.arg0.fields["role"];
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 6);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 6:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat("dettached ", s.tmp_1);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 439; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    r0 = (s.arg0).fields["serviceIndex"] = (null);
    r0 = s.arg0.fields["broadcast"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = s.arg0.fields["device"];
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_4);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.throwValue("Invalid detach");
  case 1:
  case 2:
    r0 = (s.arg0).fields["device"] = (null);
    s.tmp_0 = jacdac_Bus_detachClient__P3164_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 440; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
  case 3:
  case 4:
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.DISCONNECT___3138;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 441; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client__detach__P3211.info = {"start":30253,"length":314,"line":909,"column":8,"endLine":918,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"_detach","argumentNames":["this"]}

function jacdac_Client__detach__P3211_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client__detach__P3211, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
} }





function jacdac_Bus_detachClient__P3164(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Bus__C3152_VT)) failedCast(r0);
    r0 = s.arg0.fields["unattachedClients"];
    s.tmp_2 = r0;
    r0 = pxsim_Array_.indexOf(s.tmp_2, s.arg1, undefined);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0.fields["unattachedClients"];
    s.tmp_3 = r0;
    r0 = pxsim_Array__push(s.tmp_3, s.arg1);
    s.tmp_0 = jacdac_Bus_clearAttachCache__P3162_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 318; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Bus_detachClient__P3164.info = {"start":5430,"length":208,"line":160,"column":8,"endLine":165,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"detachClient","argumentNames":["this","client"]}

function jacdac_Bus_detachClient__P3164_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Bus_detachClient__P3164, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Device_toString__P3230(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C3220_VT)) failedCast(r0);
    s.tmp_0 = jacdac_Device_shortId__P3229_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 452; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device_toString__P3230.info = {"start":34660,"length":54,"line":1051,"column":8,"endLine":1053,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"toString","argumentNames":["this"]}

function jacdac_Device_toString__P3230_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_toString__P3230, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_serviceMatches__P4049(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.ds___8422 = undefined;
    s.i___8433 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["services"];
    s.ds___8422 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.ds___8422);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim.BufferMethods.length(s.ds___8422);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.length(s.arg1);
    s.tmp_3 = r0;
    r0 = (s.tmp_2 != s.tmp_3);
  case 2:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 3; continue; }
    r0 = false;
    { step = 9; continue; }
  case 3:
  case 4:
    s.i___8433 = (4);
  case 5:
    s.tmp_1 = r0 = s.i___8433;
    r0 = pxsim.BufferMethods.length(s.arg1);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 8; continue; }
    r0 = pxsim.BufferMethods.getByte(s.ds___8422, s.i___8433);
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.getByte(s.arg1, s.i___8433);
    s.tmp_5 = r0;
    r0 = (s.tmp_4 != s.tmp_5);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 6; continue; }
    r0 = false;
    { step = 9; continue; }
  case 6:
  case 7:
    r0 = (s.i___8433 + 1);
    s.i___8433 = (r0);
    { step = 5; continue; }
  case 8:
    r0 = true;
  case 9:
    return leave(s, r0)
  default: oops()
} } }
jacdac_serviceMatches__P4049.info = {"start":43634,"length":249,"line":1297,"column":4,"endLine":1302,"endColumn":5,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"serviceMatches","argumentNames":["dev","serv"]}

function jacdac_serviceMatches__P4049_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_serviceMatches__P4049, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  ds___8422: undefined,
  i___8433: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Device_sendCtrlCommand__P3241(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.pkt___8451 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C3220_VT)) failedCast(r0);
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_2 = jacdac_JDPacket_onlyHeader__P2783_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.callLocIdx = 484; s.pc = 3; return s.tmp_2;
  case 3:
    r0 = s.retval;
    { step = 2; continue; }
  case 1:
    s.tmp_3 = jacdac_JDPacket_from__P2782_mk(s);
    s.tmp_3.arg0 = s.arg1;
    s.tmp_3.arg1 = s.arg2;
    s.callLocIdx = 485; s.pc = 4; return s.tmp_3;
  case 4:
    r0 = s.retval;
  case 2:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    s.pkt___8451 = (s.tmp_4);
    s.tmp_0 = jacdac_JDPacket_serviceIndex__P2794_mk(s);
    s.tmp_0.arg0 = s.pkt___8451;
    s.tmp_0.arg1 = 0;
    s.callLocIdx = 486; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    s.tmp_0 = jacdac_JDPacket__sendCmd__P2819_mk(s);
    s.tmp_0.arg0 = s.pkt___8451;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 487; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device_sendCtrlCommand__P3241.info = {"start":39731,"length":270,"line":1189,"column":8,"endLine":1195,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"sendCtrlCommand","argumentNames":["this","cmd","payload"]}

function jacdac_Device_sendCtrlCommand__P3241_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_sendCtrlCommand__P3241, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  pkt___8451: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_Device_constructor__P3224(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C3220_VT)) failedCast(r0);
    r0 = (s.arg0).fields["deviceId"] = (s.arg1);
    r0 = (s.arg0).fields["services"] = (s.arg2);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["listeners"] = (s.tmp_1);
    s.tmp_2 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_3 = r0;
    r0 = (s.tmp_2).fields["clients"] = (s.tmp_3);
    s.tmp_4 = jacdac_EventSource_constructor__P3255_mk(s);
    s.tmp_4.arg0 = s.arg0;
    s.callLocIdx = 449; s.pc = 1; return s.tmp_4;
  case 1:
    r0 = s.retval;
    r0 = globals.bus___3170.fields["devices"];
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.arg0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device_constructor__P3224.info = {"start":33888,"length":128,"line":1022,"column":8,"endLine":1025,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["this","deviceId","services"]}

function jacdac_Device_constructor__P3224_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_constructor__P3224, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_EventSource_constructor__P3255(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_EventSource__C3254_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["listeners"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_EventSource_constructor__P3255.info = {"start":593,"length":16,"line":20,"column":8,"endLine":20,"endColumn":24,"fileName":"pxt_modules/jacdac/eventsource.ts","functionName":"inline","argumentNames":["this"]}

function jacdac_EventSource_constructor__P3255_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_EventSource_constructor__P3255, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_Device__destroy__P3242(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.c___8483 = undefined;
    s.unnamed100___U1 = undefined;
    s.unnamed101___U2 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C3220_VT)) failedCast(r0);
    s.tmp_0 = jacdac_log__P4033_mk(s);
    s.tmp_3 = jacdac_Device_shortId__P3229_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.callLocIdx = 488; s.pc = 4; return s.tmp_3;
  case 4:
    r0 = s.retval;
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 5);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 5:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat("destroy ", s.tmp_1);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 489; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.c___8483 = (undefined);
    r0 = s.arg0.fields["clients"];
    s.unnamed100___U1 = (r0);
    s.unnamed101___U2 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed101___U2;
    r0 = pxsim_Array__length(s.unnamed100___U1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__getAt(s.unnamed100___U1, s.unnamed101___U2);
    s.c___8483 = (r0);
    s.tmp_2 = jacdac_Client__detach__P3211_mk(s);
    s.tmp_2.arg0 = s.c___8483;
    s.callLocIdx = 490; s.pc = 6; return s.tmp_2;
  case 6:
    r0 = s.retval;
    r0 = (s.unnamed101___U2 + 1);
    s.unnamed101___U2 = (r0);
    { step = 1; continue; }
  case 2:
    s.unnamed100___U1 = (undefined);
    r0 = (s.arg0).fields["clients"] = (null);
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.DEVICE_DISCONNECT___3140;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 491; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.tmp_0.arg1 = globals.DEVICE_DISCONNECT___3140;
    s.tmp_0.arg2 = s.arg0;
    s.callLocIdx = 492; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device__destroy__P3242.info = {"start":40011,"length":236,"line":1197,"column":8,"endLine":1203,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"_destroy","argumentNames":["this"]}

function jacdac_Device__destroy__P3242_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device__destroy__P3242, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  c___8483: undefined,
  unnamed100___U1: undefined,
  unnamed101___U2: undefined,
  arg0: undefined,
} }





function jacdac_Device_shortId__P3229(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C3220_VT)) failedCast(r0);
    r0 = s.arg0.fields["_shortId"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_3 = r0 = s.arg0;
    s.tmp_5 = jacdac_shortDeviceId__P3219_mk(s);
    r0 = s.arg0.fields["deviceId"];
    s.tmp_5.arg0 = r0;
    s.callLocIdx = 451; s.pc = 3; return s.tmp_5;
  case 3:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = (s.tmp_3).fields["_shortId"] = (s.tmp_4);
  case 1:
  case 2:
    r0 = s.arg0.fields["_shortId"];
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_Device_shortId__P3229.info = {"start":34464,"length":186,"line":1045,"column":8,"endLine":1049,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"shortId","argumentNames":["this"]}
jacdac_Device_shortId__P3229.isGetter = true;

function jacdac_Device_shortId__P3229_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_shortId__P3229, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
} }





function jacdac_shortDeviceId__P3219(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.h___8510 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_1 = Buffer_fromHex__P2631_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.callLocIdx = 448; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.hash(s.tmp_0, 30);
    s.h___8510 = (r0);
    r0 = (s.h___8510 % 26);
    s.tmp_7 = r0;
    r0 = (65 + s.tmp_7);
    s.tmp_6 = r0;
    r0 = pxsim_String_.fromCharCode(s.tmp_6);
    s.tmp_5 = r0;
    if ((s.tmp_5) && (s.tmp_5).vtable) {
    setupResume(s, 2);
    pxsim_String__stringConv(s.tmp_5);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_5) + ""; }
  case 2:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim.Math_.idiv(s.h___8510, 26);
    s.tmp_12 = r0;
    r0 = (s.tmp_12 % 26);
    s.tmp_11 = r0;
    r0 = (65 + s.tmp_11);
    s.tmp_10 = r0;
    r0 = pxsim_String_.fromCharCode(s.tmp_10);
    s.tmp_9 = r0;
    if ((s.tmp_9) && (s.tmp_9).vtable) {
    setupResume(s, 3);
    pxsim_String__stringConv(s.tmp_9);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_9) + ""; }
  case 3:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = pxsim_String__concat(s.tmp_4, s.tmp_8);
    s.tmp_3 = r0;
    if ((s.tmp_3) && (s.tmp_3).vtable) {
    setupResume(s, 4);
    pxsim_String__stringConv(s.tmp_3);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_3) + ""; }
  case 4:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim.Math_.idiv(s.h___8510, 676);
    s.tmp_17 = r0;
    r0 = (s.tmp_17 % 10);
    s.tmp_16 = r0;
    r0 = (48 + s.tmp_16);
    s.tmp_15 = r0;
    r0 = pxsim_String_.fromCharCode(s.tmp_15);
    s.tmp_14 = r0;
    if ((s.tmp_14) && (s.tmp_14).vtable) {
    setupResume(s, 5);
    pxsim_String__stringConv(s.tmp_14);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_14) + ""; }
  case 5:
    r0 = s.retval;
    s.tmp_13 = r0;
    r0 = pxsim_String__concat(s.tmp_2, s.tmp_13);
    s.tmp_1 = r0;
    if ((s.tmp_1) && (s.tmp_1).vtable) {
    setupResume(s, 6);
    pxsim_String__stringConv(s.tmp_1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_1) + ""; }
  case 6:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.Math_.idiv(s.h___8510, 6760);
    s.tmp_22 = r0;
    r0 = (s.tmp_22 % 10);
    s.tmp_21 = r0;
    r0 = (48 + s.tmp_21);
    s.tmp_20 = r0;
    r0 = pxsim_String_.fromCharCode(s.tmp_20);
    s.tmp_19 = r0;
    if ((s.tmp_19) && (s.tmp_19).vtable) {
    setupResume(s, 7);
    pxsim_String__stringConv(s.tmp_19);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_19) + ""; }
  case 7:
    r0 = s.retval;
    s.tmp_18 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_18);
    return leave(s, r0)
  default: oops()
} } }
jacdac_shortDeviceId__P3219.info = {"start":33052,"length":390,"line":996,"column":4,"endLine":1004,"endColumn":5,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"shortDeviceId","argumentNames":["devid"]}

function jacdac_shortDeviceId__P3219_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_shortDeviceId__P3219, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  tmp_15: undefined,
  tmp_16: undefined,
  tmp_17: undefined,
  tmp_18: undefined,
  tmp_19: undefined,
  tmp_20: undefined,
  tmp_21: undefined,
  tmp_22: undefined,
  h___8510: undefined,
  arg0: undefined,
} }





function jacdac_log__P4033(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = console_add__P2374_mk(s);
    s.tmp_0.arg0 = globals.logPriority___3171;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 370; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_log__P4033.info = {"start":11441,"length":71,"line":319,"column":4,"endLine":321,"endColumn":5,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"log","argumentNames":["msg"]}

function jacdac_log__P4033_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_log__P4033, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_Device_resetCount__P3226(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C3220_VT)) failedCast(r0);
    r0 = s.arg0.fields["services"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 4, 0);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 15);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_Device_resetCount__P3226.info = {"start":34158,"length":142,"line":1031,"column":8,"endLine":1035,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"resetCount","argumentNames":["this"]}
jacdac_Device_resetCount__P3226.isGetter = true;

function jacdac_Device_resetCount__P3226_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_resetCount__P3226, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_Device_announceflags__P3225(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C3220_VT)) failedCast(r0);
    r0 = s.arg0.fields["services"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_0, 4, 0);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_Device_announceflags__P3225.info = {"start":34026,"length":122,"line":1027,"column":8,"endLine":1029,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"announceflags","argumentNames":["this"]}
jacdac_Device_announceflags__P3225.isGetter = true;

function jacdac_Device_announceflags__P3225_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_announceflags__P3225, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function helpers_arrayFind__P2000(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___8583 = undefined;
    s.i___8586 = undefined;
    s.v___8591 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__length(s.arg0);
    s.len___8583 = (r0);
    s.i___8586 = (0);
  case 1:
    r0 = (s.i___8586 < s.len___8583);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.arg0, s.i___8586);
    s.v___8591 = (r0);
    s.tmp_1 = lambda_3_mk(s);
    s.tmp_1.argL = s.arg1;
    s.tmp_1.arg0 = s.v___8591;
    s.tmp_1.arg1 = s.i___8586;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 8; s.pc = 6; return s.tmp_1;
  case 6:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = s.v___8591;
    { step = 5; continue; }
  case 2:
  case 3:
    r0 = (s.i___8586 + 1);
    s.i___8586 = (r0);
    { step = 1; continue; }
  case 4:
    r0 = undefined;
  case 5:
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayFind__P2000.info = {"start":8018,"length":292,"line":271,"column":4,"endLine":278,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"arrayFind","argumentNames":["arr","callbackfn"]}

function helpers_arrayFind__P2000_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayFind__P2000, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  len___8583: undefined,
  i___8586: undefined,
  v___8591: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Server_handlePacketOuter__P3178(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Server__C3172_VT)) failedCast(r0);
    r0 = s.arg1.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 4, 14);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.switch_eq(0, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(4355, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(4361, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = s.tmp_0;
    { step = 4; continue; }
  case 1:
    s.tmp_2 = jacdac_Server_handleAnnounce__P3950_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.arg1;
    s.callLocIdx = 373; s.pc = 6; return s.tmp_2;
  case 6:
    r0 = s.retval;
    { step = 5; continue; }
  case 2:
    s.tmp_0 = jacdac_Server_handleStatusCode__P3951_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.callLocIdx = 374; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    { step = 5; continue; }
  case 3:
    s.tmp_0 = jacdac_Server_handleInstanceName__P3952_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.callLocIdx = 375; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    { step = 5; continue; }
  case 4:
    r0 = (s.arg0).fields["stateUpdated"] = (false);
    s.tmp_0 = jacdac_Server__C3172_v1_2_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    if (!checkSubtype(s.tmp_0.arg0, jacdac_Server__C3172_VT)) failedCast(s.tmp_0.arg0);
    s.tmp_0.fn = s.tmp_0.arg0.vtable.methods.handlePacket;
    s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Server_handlePacketOuter__P3178.info = {"start":12276,"length":643,"line":350,"column":8,"endLine":366,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"handlePacketOuter","argumentNames":["this","pkt"]}

function jacdac_Server_handlePacketOuter__P3178_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Server_handlePacketOuter__P3178, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Server_handlePacket__P3179(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Server__C3172_VT)) failedCast(r0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Server_handlePacket__P3179.info = {"start":12929,"length":30,"line":368,"column":8,"endLine":368,"endColumn":38,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"handlePacket","argumentNames":["this","pkt"]}

function jacdac_Server_handlePacket__P3179_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Server_handlePacket__P3179, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Server_handleInstanceName__P3952(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Server__C3172_VT)) failedCast(r0);
    r0 = s.arg0.fields["instanceName"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_String_.mkEmpty();
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    s.tmp_2 = jacdac_Server_handleRegValue__P3954_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.arg1;
    s.tmp_2.arg2 = 265;
    s.tmp_2.arg3 = "s";
    s.tmp_2.arg4 = s.tmp_1;
    s.callLocIdx = 390; s.pc = 3; return s.tmp_2;
  case 3:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Server_handleInstanceName__P3952.info = {"start":14142,"length":222,"line":412,"column":8,"endLine":419,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"handleInstanceName","argumentNames":["this","pkt"]}

function jacdac_Server_handleInstanceName__P3952_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Server_handleInstanceName__P3952, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Server_handleRegValue__P3954(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.getset___8641 = undefined;
    s.reg___8651 = undefined;
    s.v___8672 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.arg4 = (s.lambdaArgs[4]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Server__C3172_VT)) failedCast(r0);
    r0 = s.arg1.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 4, 14);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 12);
    s.getset___8641 = (r0);
    r0 = (s.getset___8641 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = (s.getset___8641 > 2);
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 3; continue; }
    r0 = s.arg4;
    { step = 13; continue; }
  case 3:
  case 4:
    r0 = s.arg1.fields["_header"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_3, 4, 14);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 4095);
    s.reg___8651 = (r0);
    r0 = (s.reg___8651 != s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = s.arg4;
    { step = 13; continue; }
  case 5:
  case 6:
    r0 = (s.getset___8641 == 1);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 7; continue; }
    r0 = pxsim_Array__mk();
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_2, s.arg4);
    s.tmp_3 = jacdac_Server_sendReport__P3947_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.tmp_4 = jacdac_JDPacket_jdpacked__P2784_mk(s);
    r0 = s.arg1.fields["_header"];
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_5, 4, 14);
    s.tmp_4.arg0 = r0;
    s.tmp_4.arg1 = s.arg3;
    s.tmp_4.arg2 = s.tmp_2;
    s.callLocIdx = 394; s.pc = 15; return s.tmp_4;
  case 15:
    r0 = s.retval;
    s.tmp_3.arg1 = r0;
    s.callLocIdx = 395; s.pc = 14; return s.tmp_3;
  case 14:
    r0 = s.retval;
    { step = 12; continue; }
  case 7:
    r0 = (s.arg2 >> 8);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 8; continue; }
    r0 = s.arg4;
    { step = 13; continue; }
  case 8:
  case 9:
    s.tmp_2 = jacdac_JDPacket_jdunpack__P2809_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.tmp_2.arg1 = s.arg3;
    s.callLocIdx = 396; s.pc = 16; return s.tmp_2;
  case 16:
    r0 = s.retval;
    s.v___8672 = (r0);
    r0 = pxsim_Array__getAt(s.v___8672, 0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 !== s.arg4);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 10; continue; }
    r0 = (s.arg0).fields["stateUpdated"] = (true);
    r0 = pxsim_Array__getAt(s.v___8672, 0);
    s.arg4 = (r0);
  case 10:
  case 11:
  case 12:
    r0 = s.arg4;
  case 13:
    return leave(s, r0)
  default: oops()
} } }
jacdac_Server_handleRegValue__P3954.info = {"start":15282,"length":888,"line":447,"column":8,"endLine":471,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"handleRegValue","argumentNames":["this","pkt","register","fmt","current"]}

function jacdac_Server_handleRegValue__P3954_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Server_handleRegValue__P3954, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  getset___8641: undefined,
  reg___8651: undefined,
  v___8672: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
  arg4: undefined,
} }





function jacdac_Server_sendReport__P3947(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Server__C3172_VT)) failedCast(r0);
    s.tmp_0 = jacdac_JDPacket_serviceIndex__P2794_mk(s);
    s.tmp_0.arg0 = s.arg1;
    r0 = s.arg0.fields["serviceIndex"];
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 376; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = jacdac_JDPacket__sendReport__P2818_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.tmp_1 = jacdac_Bus_selfDevice__P3160_mk(s);
    s.tmp_1.arg0 = globals.bus___3170;
    s.callLocIdx = 377; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 378; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Server_sendReport__P3947.info = {"start":13113,"length":140,"line":378,"column":8,"endLine":381,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"sendReport","argumentNames":["this","pkt"]}

function jacdac_Server_sendReport__P3947_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Server_sendReport__P3947, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Server_handleStatusCode__P3951(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Server__C3172_VT)) failedCast(r0);
    s.tmp_0 = jacdac_Server_handleRegUInt32__P3957_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = 259;
    r0 = s.arg0.fields["_statusCode"];
    s.tmp_0.arg3 = r0;
    s.callLocIdx = 389; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Server_handleStatusCode__P3951.info = {"start":14003,"length":129,"line":408,"column":8,"endLine":410,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"handleStatusCode","argumentNames":["this","pkt"]}

function jacdac_Server_handleStatusCode__P3951_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Server_handleStatusCode__P3951, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Server_handleRegUInt32__P3957(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___8708 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Server__C3172_VT)) failedCast(r0);
    s.tmp_0 = jacdac_Server_handleRegValue__P3954_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = s.arg2;
    s.tmp_0.arg3 = "u32";
    r0 = (s.arg3 >>> 0);
    s.tmp_0.arg4 = r0;
    s.callLocIdx = 398; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.res___8708 = (r0);
    r0 = s.res___8708;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Server_handleRegUInt32__P3957.info = {"start":16769,"length":245,"line":496,"column":8,"endLine":503,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"handleRegUInt32","argumentNames":["this","pkt","register","current"]}

function jacdac_Server_handleRegUInt32__P3957_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Server_handleRegUInt32__P3957, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  res___8708: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }





function jacdac_Server_handleAnnounce__P3950(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Server__C3172_VT)) failedCast(r0);
    s.tmp_0 = jacdac_Server_sendReport__P3947_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_1 = jacdac_JDPacket_from__P2782_mk(s);
    s.tmp_1.arg0 = 0;
    r0 = pxsim.control.createBuffer(0);
    s.tmp_1.arg1 = r0;
    s.callLocIdx = 387; s.pc = 2; return s.tmp_1;
  case 2:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 388; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Server_handleAnnounce__P3950.info = {"start":13760,"length":233,"line":399,"column":8,"endLine":406,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"handleAnnounce","argumentNames":["this","pkt"]}

function jacdac_Server_handleAnnounce__P3950_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Server_handleAnnounce__P3950, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Server_advertisementData__P3181(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Server__C3172_VT)) failedCast(r0);
    r0 = pxsim.control.createBuffer(0);
    return leave(s, r0)
  default: oops()
} } }
jacdac_Server_advertisementData__P3181.info = {"start":13036,"length":67,"line":374,"column":8,"endLine":376,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"advertisementData","argumentNames":["this"]}

function jacdac_Server_advertisementData__P3181_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Server_advertisementData__P3181, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_JDPacket_deviceIdentifier__P2787(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.idb___8727 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    s.tmp_0 = Buffer_fromHex__P2631_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.callLocIdx = 109; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.idb___8727 = (r0);
    r0 = pxsim.BufferMethods.length(s.idb___8727);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 != 8);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_2 = jacdac_error__P3895_mk(s);
    s.tmp_2.arg0 = "Invalid id";
    s.callLocIdx = 110; s.pc = 4; return s.tmp_2;
  case 4:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.write(s.tmp_0, 4, s.idb___8727);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_deviceIdentifier__P2787.info = {"start":2720,"length":179,"line":80,"column":8,"endLine":84,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"deviceIdentifier","argumentNames":["this","id"]}

function jacdac_JDPacket_deviceIdentifier__P2787_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_deviceIdentifier__P2787, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  idb___8727: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_error__P3895(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore.throwValue(s.arg0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_error__P3895.info = {"start":992,"length":53,"line":23,"column":4,"endLine":25,"endColumn":5,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"error","argumentNames":["msg"]}

function jacdac_error__P3895_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_error__P3895, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_JDPacket_isCommand__P2814(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_5, 3);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 & 1);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_0);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_isCommand__P2814.info = {"start":6558,"length":91,"line":213,"column":8,"endLine":215,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"isCommand","argumentNames":["this"]}
jacdac_JDPacket_isCommand__P2814.isGetter = true;

function jacdac_JDPacket_isCommand__P2814_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_isCommand__P2814, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
} }





function jacdac_EventSource_emit__P3259(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.someOnce___8754 = undefined;
    s.listener___8756 = undefined;
    s.unnamed102___U2 = undefined;
    s.unnamed103___U3 = undefined;
    s.handler___8770 = undefined;
    s.e___8777 = undefined;
    s.i___8783 = undefined;
    s.listener___8790 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_EventSource__C3254_VT)) failedCast(r0);
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = false;
    { step = 19; continue; }
  case 1:
  case 2:
    s.someOnce___8754 = (false);
    s.listener___8756 = (undefined);
    r0 = s.arg0.fields["listeners"];
    s.unnamed102___U2 = (r0);
    s.unnamed103___U3 = (0);
  case 3:
    s.tmp_0 = r0 = s.unnamed103___U3;
    r0 = pxsim_Array__length(s.unnamed102___U2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 10; continue; }
    r0 = pxsim_Array__getAt(s.unnamed102___U2, s.unnamed103___U3);
    s.listener___8756 = (r0);
    r0 = s.listener___8756.fields["key"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 === s.arg1);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 8; continue; }
    s.tmp_4 = r0 = s.someOnce___8754;
    r0 = pxsim_numops_toBool(s.tmp_4);
    if (!r0) { step = 4; continue; }
    r0 = s.tmp_4;
    { step = 5; continue; }
  case 4:
    r0 = s.listener___8756.fields["once"];
  case 5:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    s.someOnce___8754 = (s.tmp_5);
    r0 = s.listener___8756.fields["handler"];
    s.handler___8770 = (r0);
    r0 = pxsim_pxtcore.beginTry(6);
    s.tmp_0 = lambda_2_mk(s);
    s.tmp_0.argL = s.handler___8770;
    s.tmp_0.arg0 = s.arg2;
    setupLambda(s.tmp_0, s.tmp_0.argL);
    s.callLocIdx = 584; s.pc = 20; return s.tmp_0;
  case 20:
    r0 = s.retval;
    r0 = pxsim_pxtcore.endTry();
    { step = 7; continue; }
  case 6:
    s.e___8777 = (undefined);
    r0 = pxsim_pxtcore.getThrownValue();
    s.e___8777 = (r0);
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.ERROR___3253;
    s.tmp_0.arg2 = s.e___8777;
    s.callLocIdx = 585; s.pc = 21; return s.tmp_0;
  case 21:
    r0 = s.retval;
  case 7:
  case 8:
  case 9:
    r0 = (s.unnamed103___U3 + 1);
    s.unnamed103___U3 = (r0);
    { step = 3; continue; }
  case 10:
    s.unnamed102___U2 = (undefined);
    r0 = pxsim_numops_toBoolDecr(s.someOnce___8754);
    if (!r0) { step = 17; continue; }
    s.i___8783 = (0);
  case 11:
    s.tmp_1 = r0 = s.i___8783;
    r0 = s.arg0.fields["listeners"];
    s.tmp_3 = r0;
    r0 = pxsim_Array__length(s.tmp_3);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 16; continue; }
    r0 = s.arg0.fields["listeners"];
    s.tmp_4 = r0;
    r0 = pxsim_Array__getAt(s.tmp_4, s.i___8783);
    s.listener___8790 = (r0);
    r0 = s.listener___8790.fields["once"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 12; continue; }
    r0 = s.tmp_0;
    { step = 13; continue; }
  case 12:
    r0 = s.listener___8790.fields["key"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === s.arg1);
  case 13:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 14; continue; }
    s.tmp_3 = helpers_arraySplice__P1989_mk(s);
    r0 = s.arg0.fields["listeners"];
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = s.i___8783;
    s.tmp_3.arg2 = 1;
    s.callLocIdx = 586; s.pc = 22; return s.tmp_3;
  case 22:
    r0 = s.retval;
    { step = 15; continue; }
  case 14:
    r0 = (s.i___8783 + 1);
    s.i___8783 = (r0);
  case 15:
    { step = 11; continue; }
  case 16:
  case 17:
  case 18:
    r0 = true;
  case 19:
    return leave(s, r0)
  default: oops()
} } }
jacdac_EventSource_emit__P3259.info = {"start":2537,"length":1071,"line":84,"column":8,"endLine":116,"endColumn":9,"fileName":"pxt_modules/jacdac/eventsource.ts","functionName":"emit","argumentNames":["this","eventName","arg"]}

function jacdac_EventSource_emit__P3259_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_EventSource_emit__P3259, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  someOnce___8754: undefined,
  listener___8756: undefined,
  unnamed102___U2: undefined,
  unnamed103___U3: undefined,
  handler___8770: undefined,
  e___8777: undefined,
  i___8783: undefined,
  listener___8790: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function helpers_arraySplice__P1989(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.i___8813 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg1 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 5; continue; }
  case 1:
  case 2:
    s.i___8813 = (0);
  case 3:
    r0 = (s.i___8813 < s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array_.removeAt(s.arg0, s.arg1);
    r0 = (s.i___8813 + 1);
    s.i___8813 = (r0);
    { step = 3; continue; }
  case 4:
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
helpers_arraySplice__P1989.info = {"start":3642,"length":213,"line":137,"column":4,"endLine":144,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"arraySplice","argumentNames":["arr","start","len"]}

function helpers_arraySplice__P1989_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arraySplice__P1989, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  i___8813: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_JDPacket__sendReport__P2818(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    s.tmp_2 = jacdac_JDPacket_deviceIdentifier__P2787_mk(s);
    s.tmp_2.arg0 = s.arg0;
    r0 = s.arg1.fields["deviceId"];
    s.tmp_2.arg1 = r0;
    s.callLocIdx = 140; s.pc = 4; return s.tmp_2;
  case 4:
    r0 = s.retval;
    s.tmp_0 = jacdac_JDPacket__sendCore__P2817_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 141; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket__sendReport__P2818.info = {"start":7416,"length":143,"line":238,"column":8,"endLine":242,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"_sendReport","argumentNames":["this","dev"]}

function jacdac_JDPacket__sendReport__P2818_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket__sendReport__P2818, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_serviceIndex__P2794(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = (s.arg1 == null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.throwValue("serviceIndex not set");
  case 1:
  case 2:
    r0 = s.arg0.fields["_header"];
    s.tmp_1 = r0;
    r0 = s.arg0.fields["_header"];
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_5, 13);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 & 192);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 | s.arg1);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_1, 13, s.tmp_2);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_serviceIndex__P2794.info = {"start":3673,"length":220,"line":111,"column":8,"endLine":115,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"serviceIndex","argumentNames":["this","serviceIdx"]}

function jacdac_JDPacket_serviceIndex__P2794_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_serviceIndex__P2794, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_onlyHeader__P2783(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = jacdac_JDPacket_from__P2782_mk(s);
    s.tmp_0.arg0 = s.arg0;
    r0 = pxsim.control.createBuffer(0);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 106; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_onlyHeader__P2783.info = {"start":1979,"length":120,"line":60,"column":8,"endLine":62,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"onlyHeader","argumentNames":["serviceCommand"]}

function jacdac_JDPacket_onlyHeader__P2783_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_onlyHeader__P2783, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_crc__P2795(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_0, 4, 0);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_crc__P2795.info = {"start":3903,"length":97,"line":117,"column":8,"endLine":119,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"crc","argumentNames":["this"]}
jacdac_JDPacket_crc__P2795.isGetter = true;

function jacdac_JDPacket_crc__P2795_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_crc__P2795, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_requiresAck__P2792(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    s.tmp_1 = r0 = s.arg1;
    s.tmp_3 = jacdac_JDPacket_requiresAck__P2791_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.callLocIdx = 113; s.pc = 3; return s.tmp_3;
  case 3:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = (s.tmp_1 != s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0.fields["_header"];
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_4, 3);
    s.tmp_6 = r0;
    r0 = (s.tmp_6 ^ 2);
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_4, 3, s.tmp_5);
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_requiresAck__P2792.info = {"start":3411,"length":145,"line":103,"column":8,"endLine":106,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"requiresAck","argumentNames":["this","ack"]}

function jacdac_JDPacket_requiresAck__P2792_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_requiresAck__P2792, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_requiresAck__P2791(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_2, 3);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 & 2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = true;
    { step = 2; continue; }
  case 1:
    r0 = false;
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = s.tmp_3;
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_requiresAck__P2791.info = {"start":3283,"length":119,"line":100,"column":8,"endLine":102,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"requiresAck","argumentNames":["this"]}
jacdac_JDPacket_requiresAck__P2791.isGetter = true;

function jacdac_JDPacket_requiresAck__P2791_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_requiresAck__P2791, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_multicommandClass__P2789(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_2, 3);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 & 4);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0.fields["_header"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_3, 11, 4);
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = undefined;
  case 3:
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_multicommandClass__P2789.info = {"start":2983,"length":214,"line":90,"column":8,"endLine":94,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"multicommandClass","argumentNames":["this"]}
jacdac_JDPacket_multicommandClass__P2789.isGetter = true;

function jacdac_JDPacket_multicommandClass__P2789_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_multicommandClass__P2789, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function jacdac___physSendPacket__P2723(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.payload___8887 = undefined;
    s.tailend___8891 = undefined;
    s.crc___8911 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = helpers_bufferConcat__P2611_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.callLocIdx = 85; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.payload___8887 = (r0);
    r0 = pxsim.BufferMethods.length(s.payload___8887);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 3);
    s.tailend___8891 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.tailend___8891);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = helpers_bufferConcat__P2611_mk(s);
    s.tmp_0.arg0 = s.payload___8887;
    r0 = (4 - s.tailend___8891);
    s.tmp_1 = r0;
    r0 = pxsim.control.createBuffer(s.tmp_1);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 86; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    s.payload___8887 = (r0);
  case 1:
  case 2:
    s.tmp_0 = r0 = s.payload___8887;
    r0 = pxsim.BufferMethods.length(s.payload___8887);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 - 12);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 2, s.tmp_1);
    r0 = pxsim.BufferMethods.setByte(s.arg0, 2, s.tmp_1);
    s.tmp_0 = jacdac_jdCrc16__P3869_mk(s);
    r0 = pxsim.BufferMethods.slice(s.payload___8887, 2, -1);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 87; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    s.crc___8911 = (r0);
    s.tmp_0 = r0 = s.payload___8887;
    r0 = (s.crc___8911 >> 0);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 255);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 0, s.tmp_1);
    r0 = pxsim.BufferMethods.setByte(s.arg0, 0, s.tmp_1);
    s.tmp_0 = r0 = s.payload___8887;
    r0 = (s.crc___8911 >> 8);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 255);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 1, s.tmp_1);
    r0 = pxsim.BufferMethods.setByte(s.arg0, 1, s.tmp_1);
    r0 = pxsim_pxtcore.sendMessage("jacdac", s.payload___8887, undefined);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac___physSendPacket__P2723.info = {"start":625,"length":540,"line":27,"column":4,"endLine":37,"endColumn":5,"fileName":"pxt_modules/jacdac/jdsim.ts","functionName":"__physSendPacket","argumentNames":["header","data"]}

function jacdac___physSendPacket__P2723_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac___physSendPacket__P2723, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  payload___8887: undefined,
  tailend___8891: undefined,
  crc___8911: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_jdCrc16__P3869(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.crc___8940 = undefined;
    s.i___8941 = undefined;
    s.data___8947 = undefined;
    s.x___8951 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.crc___8940 = (65535);
    s.i___8941 = (0);
  case 1:
    s.tmp_1 = r0 = s.i___8941;
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = pxsim.BufferMethods.getByte(s.arg0, s.i___8941);
    s.data___8947 = (r0);
    r0 = (s.crc___8940 >> 8);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 ^ s.data___8947);
    s.x___8951 = (r0);
    s.tmp_0 = r0 = s.x___8951;
    r0 = (s.x___8951 >> 4);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 ^ s.tmp_1);
    s.x___8951 = (r0);
    r0 = (s.crc___8940 << 8);
    s.tmp_2 = r0;
    r0 = (s.x___8951 << 12);
    s.tmp_3 = r0;
    r0 = (s.tmp_2 ^ s.tmp_3);
    s.tmp_1 = r0;
    r0 = (s.x___8951 << 5);
    s.tmp_4 = r0;
    r0 = (s.tmp_1 ^ s.tmp_4);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 ^ s.x___8951);
    s.crc___8940 = (r0);
    r0 = (s.crc___8940 & 65535);
    s.crc___8940 = (r0);
    r0 = (s.i___8941 + 1);
    s.i___8941 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = s.crc___8940;
    return leave(s, r0)
  default: oops()
} } }
jacdac_jdCrc16__P3869.info = {"start":204,"length":308,"line":11,"column":4,"endLine":21,"endColumn":5,"fileName":"pxt_modules/jacdac/jdsim.ts","functionName":"jdCrc16","argumentNames":["p"]}

function jacdac_jdCrc16__P3869_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_jdCrc16__P3869, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  crc___8940: undefined,
  i___8941: undefined,
  data___8947: undefined,
  x___8951: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_jdpacked__P2784(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = jacdac_JDPacket_from__P2782_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_1 = jacdac_jdpack__P2828_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.tmp_1.arg1 = s.arg2;
    s.callLocIdx = 107; s.pc = 2; return s.tmp_1;
  case 2:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 108; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_jdpacked__P2784.info = {"start":2109,"length":145,"line":64,"column":8,"endLine":66,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"jdpacked","argumentNames":["serviceCommand","fmt","nums"]}

function jacdac_JDPacket_jdpacked__P2784_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_jdpacked__P2784, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_jdpack__P2828(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___8997 = undefined;
    s.res___9003 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    r0 = undefined;
    { step = 5; continue; }
  case 3:
  case 4:
    s.tmp_4 = jacdac_jdpackCore__P3933_mk(s);
    s.tmp_4.arg0 = null;
    s.tmp_4.arg1 = s.arg0;
    s.tmp_4.arg2 = s.arg1;
    s.tmp_4.arg3 = 0;
    s.callLocIdx = 187; s.pc = 6; return s.tmp_4;
  case 6:
    r0 = s.retval;
    s.len___8997 = (r0);
    r0 = pxsim.control.createBuffer(s.len___8997);
    s.res___9003 = (r0);
    s.tmp_0 = jacdac_jdpackCore__P3933_mk(s);
    s.tmp_0.arg0 = s.res___9003;
    s.tmp_0.arg1 = s.arg0;
    s.tmp_0.arg2 = s.arg1;
    s.tmp_0.arg3 = 0;
    s.callLocIdx = 188; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    r0 = s.res___9003;
  case 5:
    return leave(s, r0)
  default: oops()
} } }
jacdac_jdpack__P2828.info = {"start":9941,"length":582,"line":303,"column":4,"endLine":319,"endColumn":5,"fileName":"pxt_modules/jacdac/pack.ts","functionName":"jdpack","argumentNames":["fmt","data"]}

function jacdac_jdpack__P2828_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_jdpack__P2828, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  len___8997: undefined,
  res___9003: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_jdpackCore__P3933(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.idx___9016 = undefined;
    s.parser___9017 = undefined;
    s.c0___9024 = undefined;
    s.dataItem___9035 = undefined;
    s.fmt0___9043 = undefined;
    s.velt___9051 = undefined;
    s.unnamed66___U6 = undefined;
    s.unnamed67___U7 = undefined;
    s.arr___9060 = undefined;
    s.v___9069 = undefined;
    s.unnamed68___U10 = undefined;
    s.unnamed69___U11 = undefined;
    s.vp___9085 = undefined;
    s.vp32___9100 = undefined;
    s.buf___9119 = undefined;
    s.sz___9154 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.lambdaArgs = null;
    }
    s.idx___9016 = (0);
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_TokenParser__C3929_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_TokenParser_constructor__P3931_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg1;
    s.callLocIdx = 180; s.pc = 43; return s.tmp_1;
  case 43:
    r0 = s.retval;
    s.parser___9017 = (s.tmp_0);
  case 1:
    s.tmp_1 = jacdac_TokenParser_parse__P3930_mk(s);
    s.tmp_1.arg0 = s.parser___9017;
    s.callLocIdx = 181; s.pc = 44; return s.tmp_1;
  case 44:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 40; continue; }
    r0 = s.parser___9017.fields["c0"];
    s.c0___9024 = (r0);
    r0 = (s.c0___9024 == 120);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = s.parser___9017.fields["size"];
    s.tmp_1 = r0;
    r0 = (s.arg3 + s.tmp_1);
    s.arg3 = (r0);
    { step = 1; continue; }
  case 2:
  case 3:
    s.tmp_0 = r0 = s.idx___9016;
    r0 = (s.tmp_0 + 1);
    s.idx___9016 = (r0);
    r0 = pxsim_Array__getAt(s.arg2, s.tmp_0);
    s.dataItem___9035 = (r0);
    r0 = (s.c0___9024 == 114);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_1 = helpers_stringSlice__P2008_mk(s);
    s.tmp_1.arg0 = s.arg1;
    r0 = s.parser___9017.fields["fp"];
    s.tmp_1.arg1 = r0;
    s.tmp_1.arg2 = undefined;
    s.callLocIdx = 182; s.pc = 45; return s.tmp_1;
  case 45:
    r0 = s.retval;
    s.fmt0___9043 = (r0);
    s.velt___9051 = (undefined);
    s.unnamed66___U6 = (s.dataItem___9035);
    s.unnamed67___U7 = (0);
  case 4:
    s.tmp_0 = r0 = s.unnamed67___U7;
    r0 = pxsim_Array__length(s.unnamed66___U6);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 5; continue; }
    r0 = pxsim_Array__getAt(s.unnamed66___U6, s.unnamed67___U7);
    s.velt___9051 = (r0);
    s.tmp_2 = jacdac_jdpackCore__P3933_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.fmt0___9043;
    s.tmp_2.arg2 = s.velt___9051;
    s.tmp_2.arg3 = s.arg3;
    s.callLocIdx = 183; s.pc = 46; return s.tmp_2;
  case 46:
    r0 = s.retval;
    s.arg3 = (r0);
    r0 = (s.unnamed67___U7 + 1);
    s.unnamed67___U7 = (r0);
    { step = 4; continue; }
  case 5:
    s.unnamed66___U6 = (undefined);
    { step = 40; continue; }
  case 6:
  case 7:
    s.arr___9060 = (undefined);
    r0 = s.parser___9017.fields["isArray"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 8; continue; }
    s.arr___9060 = (s.dataItem___9035);
    { step = 9; continue; }
  case 8:
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.dataItem___9035);
    s.arr___9060 = (s.tmp_0);
  case 9:
    s.v___9069 = (undefined);
    s.unnamed68___U10 = (s.arr___9060);
    s.unnamed69___U11 = (0);
  case 10:
    s.tmp_0 = r0 = s.unnamed69___U11;
    r0 = pxsim_Array__length(s.unnamed68___U10);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 39; continue; }
    r0 = pxsim_Array__getAt(s.unnamed68___U10, s.unnamed69___U11);
    s.v___9069 = (r0);
    r0 = s.parser___9017.fields["nfmt"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 !== null);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 17; continue; }
    r0 = pxsim_pxtcore.typeOf(s.v___9069);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 != "number");
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 11; continue; }
    r0 = pxsim_pxtcore.typeOf(s.v___9069);
    s.tmp_8 = r0;
    if ((s.tmp_8) && (s.tmp_8).vtable) {
    setupResume(s, 47);
    pxsim_String__stringConv(s.tmp_8);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_8) + ""; }
  case 47:
    r0 = s.retval;
    s.tmp_7 = r0;
    r0 = pxsim_String__concat("expecting number, got ", s.tmp_7);
    s.tmp_6 = r0;
    r0 = pxsim_pxtcore.throwValue(s.tmp_6);
  case 11:
  case 12:
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    if (!r0) { step = 15; continue; }
    r0 = s.parser___9017.fields["div"];
    s.tmp_9 = r0;
    r0 = (s.v___9069 * s.tmp_9);
    s.vp___9085 = (r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = s.parser___9017.fields["nfmt"];
    s.tmp_1 = r0;
    s.tmp_2 = r0 = s.arg3;
    r0 = (s.vp___9085 | 0);
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, s.tmp_1, s.tmp_2, s.tmp_3);
    r0 = s.parser___9017.fields["nfmt2"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    r0 = (s.vp___9085 / 4294967296);
    s.tmp_1 = r0;
    r0 = pxsim.Math_.floor(s.tmp_1);
    s.vp32___9100 = (r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = s.parser___9017.fields["nfmt"];
    s.tmp_1 = r0;
    r0 = (s.arg3 + 4);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, s.tmp_1, s.tmp_2, s.vp32___9100);
  case 13:
  case 14:
  case 15:
  case 16:
    r0 = s.parser___9017.fields["size"];
    s.tmp_0 = r0;
    r0 = (s.arg3 + s.tmp_0);
    s.arg3 = (r0);
    { step = 38; continue; }
  case 17:
    s.buf___9119 = (undefined);
    r0 = pxsim_pxtcore.typeOf(s.v___9069);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == "string");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 22; continue; }
    r0 = (s.c0___9024 == 122);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 18; continue; }
    if ((s.v___9069) && (s.v___9069).vtable) {
    setupResume(s, 48);
    pxsim_String__stringConv(s.v___9069);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.v___9069) + ""; }
  case 48:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, "\u0000");
    s.tmp_3 = r0;
    r0 = pxsim.control.createBufferFromUTF8(s.tmp_3);
    s.buf___9119 = (r0);
    { step = 21; continue; }
  case 18:
    r0 = (s.c0___9024 == 115);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 19; continue; }
    r0 = pxsim.control.createBufferFromUTF8(s.v___9069);
    s.buf___9119 = (r0);
    { step = 20; continue; }
  case 19:
    r0 = pxsim_pxtcore.throwValue("unexpected string");
  case 20:
  case 21:
    { step = 31; continue; }
  case 22:
    s.tmp_0 = r0 = s.v___9069;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 23; continue; }
    r0 = s.tmp_0;
    { step = 24; continue; }
  case 23:
    r0 = pxsim_pxtcore.typeOf(s.v___9069);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == "object");
  case 24:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (r0) { step = 25; continue; }
    r0 = s.tmp_2;
    { step = 26; continue; }
  case 25:
    r0 = pxsim.BufferMethods.length(s.v___9069);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 != null);
  case 26:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 29; continue; }
    r0 = (s.c0___9024 == 98);
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 27; continue; }
    s.buf___9119 = (s.v___9069);
    { step = 28; continue; }
  case 27:
    r0 = pxsim_pxtcore.throwValue("unexpected buffer");
  case 28:
    { step = 30; continue; }
  case 29:
    r0 = pxsim_pxtcore.throwValue("expecting string or buffer");
  case 30:
  case 31:
    r0 = s.parser___9017.fields["size"];
    s.sz___9154 = (r0);
    r0 = (s.sz___9154 >= 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 34; continue; }
    r0 = pxsim.BufferMethods.length(s.buf___9119);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > s.sz___9154);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 32; continue; }
    s.tmp_3 = r0 = s.buf___9119;
    r0 = (s.sz___9154 - 0);
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_3, 0, s.tmp_4);
    s.buf___9119 = (r0);
  case 32:
  case 33:
    { step = 35; continue; }
  case 34:
    r0 = pxsim.BufferMethods.length(s.buf___9119);
    s.sz___9154 = (r0);
  case 35:
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    if (!r0) { step = 36; continue; }
    r0 = pxsim.BufferMethods.write(s.arg0, s.arg3, s.buf___9119);
  case 36:
  case 37:
    r0 = (s.arg3 + s.sz___9154);
    s.arg3 = (r0);
  case 38:
    r0 = (s.unnamed69___U11 + 1);
    s.unnamed69___U11 = (r0);
    { step = 10; continue; }
  case 39:
    s.unnamed68___U10 = (undefined);
    { step = 1; continue; }
  case 40:
    r0 = pxsim_Array__length(s.arg2);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > s.idx___9016);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 41; continue; }
    r0 = pxsim_pxtcore.throwValue("format too short");
  case 41:
  case 42:
    r0 = s.arg3;
    return leave(s, r0)
  default: oops()
} } }
jacdac_jdpackCore__P3933.info = {"start":7326,"length":2609,"line":227,"column":4,"endLine":301,"endColumn":5,"fileName":"pxt_modules/jacdac/pack.ts","functionName":"jdpackCore","argumentNames":["trg","fmt","data","off"]}

function jacdac_jdpackCore__P3933_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_jdpackCore__P3933, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  idx___9016: undefined,
  parser___9017: undefined,
  c0___9024: undefined,
  dataItem___9035: undefined,
  fmt0___9043: undefined,
  velt___9051: undefined,
  unnamed66___U6: undefined,
  unnamed67___U7: undefined,
  arr___9060: undefined,
  v___9069: undefined,
  unnamed68___U10: undefined,
  unnamed69___U11: undefined,
  vp___9085: undefined,
  vp32___9100: undefined,
  buf___9119: undefined,
  sz___9154: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }





function jacdac_stringToBuffer__P3927(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.control.createBufferFromUTF8(s.arg0);
    return leave(s, r0)
  default: oops()
} } }
jacdac_stringToBuffer__P3927.info = {"start":1277,"length":80,"line":46,"column":4,"endLine":48,"endColumn":5,"fileName":"pxt_modules/jacdac/pack.ts","functionName":"stringToBuffer","argumentNames":["str"]}

function jacdac_stringToBuffer__P3927_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_stringToBuffer__P3927, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function helpers_arrayForEach__P1998(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___9191 = undefined;
    s.i___9194 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__length(s.arg0);
    s.len___9191 = (r0);
    s.i___9194 = (0);
  case 1:
    r0 = (s.i___9194 < s.len___9191);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = lambda_3_mk(s);
    s.tmp_1.argL = s.arg1;
    r0 = pxsim_Array__getAt(s.arg0, s.i___9194);
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = s.i___9194;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 6; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    r0 = (s.i___9194 + 1);
    s.i___9194 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayForEach__P1998.info = {"start":7439,"length":250,"line":254,"column":4,"endLine":259,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"arrayForEach","argumentNames":["arr","callbackfn"]}

function helpers_arrayForEach__P1998_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayForEach__P1998, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  len___9191: undefined,
  i___9194: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function schedulePlayDeviceCount__P3644(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals.playDeviceCountScheduled___3643);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    globals.playDeviceCountScheduled___3643 = (true);
    r0 = pxsim.control.inBackground(schedulePlayDeviceCount_inline__P9210);
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
schedulePlayDeviceCount__P3644.info = {"start":142,"length":794,"line":7,"column":0,"endLine":30,"endColumn":1,"fileName":"main.ts","functionName":"schedulePlayDeviceCount","argumentNames":[]}

function schedulePlayDeviceCount__P3644_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: schedulePlayDeviceCount__P3644, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function schedulePlayDeviceCount_inline__P9210(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.devCount___9213 = undefined;
    s.change___9230 = undefined;
    s.tmp_0 = pause__P2224_mk(s);
    s.tmp_0.arg0 = 200;
    s.callLocIdx = 608; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    globals.playDeviceCountScheduled___3643 = (false);
    s.tmp_1 = helpers_arrayFilter__P1999_mk(s);
    r0 = globals.bus___3170.fields["devices"];
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = length_inline__P9218;
    s.callLocIdx = 611; s.pc = 6; return s.tmp_1;
  case 6:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_Array__length(s.tmp_0);
    s.devCount___9213 = (r0);
    r0 = (s.devCount___9213 - globals.lastDeviceCount___3642);
    s.change___9230 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.change___9230);
    if (!r0) { step = 3; continue; }
    globals.lastDeviceCount___3642 = (s.devCount___9213);
    s.tmp_0 = music_stopAllSounds__P2548_mk(s);
    s.callLocIdx = 612; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    r0 = pxsim.led.stopAnimation();
    r0 = (s.change___9230 > 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = SoundExpression_play__P2685_mk(s);
    s.tmp_1.arg0 = globals.happy___2689;
    s.callLocIdx = 613; s.pc = 8; return s.tmp_1;
  case 8:
    r0 = s.retval;
    { step = 2; continue; }
  case 1:
    s.tmp_0 = SoundExpression_play__P2685_mk(s);
    s.tmp_0.arg0 = globals.sad___2692;
    s.callLocIdx = 614; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
  case 2:
    s.tmp_0 = basic_showNumber__P2223_mk(s);
    s.tmp_0.arg0 = s.devCount___9213;
    s.tmp_0.arg1 = 150;
    s.callLocIdx = 615; s.pc = 10; return s.tmp_0;
  case 10:
    r0 = s.retval;
  case 3:
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
schedulePlayDeviceCount_inline__P9210.info = {"start":281,"length":652,"line":10,"column":25,"endLine":29,"endColumn":5,"fileName":"main.ts","functionName":"inline","argumentNames":[]}

function schedulePlayDeviceCount_inline__P9210_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: schedulePlayDeviceCount_inline__P9210, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  devCount___9213: undefined,
  change___9230: undefined,
} }





function length_inline__P9218(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_1 = r0 = s.arg0;
    s.tmp_3 = jacdac_Bus_selfDevice__P3160_mk(s);
    s.tmp_3.arg0 = globals.bus___3170;
    s.callLocIdx = 609; s.pc = 3; return s.tmp_3;
  case 3:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = (s.tmp_1 !== s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    s.tmp_6 = jacdac_Device_hasService__P3239_mk(s);
    s.tmp_6.arg0 = s.arg0;
    s.tmp_6.arg1 = 504728043;
    s.callLocIdx = 610; s.pc = 4; return s.tmp_6;
  case 4:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_4);
  case 2:
    // jmp value (already in r0)
    s.tmp_7 = r0;
    r0 = s.tmp_7;
    return leave(s, r0)
  default: oops()
} } }
length_inline__P9218.info = {"start":473,"length":85,"line":16,"column":12,"endLine":17,"endColumn":80,"fileName":"main.ts","functionName":"inline","argumentNames":["d"]}

function length_inline__P9218_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: length_inline__P9218, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  arg0: undefined,
} }





function SoundExpression_constructor__P2684(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, SoundExpression__C2683_VT)) failedCast(r0);
    r0 = (s.arg0).fields["notes"] = (s.arg1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
SoundExpression_constructor__P2684.info = {"start":130,"length":42,"line":7,"column":4,"endLine":8,"endColumn":5,"fileName":"pxt_modules/core/soundexpressions.ts","functionName":"inline","argumentNames":["this","notes"]}

function SoundExpression_constructor__P2684_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: SoundExpression_constructor__P2684, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
} }





function SoundExpression_play__P2685(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, SoundExpression__C2683_VT)) failedCast(r0);
    r0 = s.arg0.fields["notes"];
    s.tmp_0 = r0;
    setupResume(s, 1);
    pxsim.music.__playSoundExpression(s.tmp_0, false);
    checkResumeConsumed();
    return;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
SoundExpression_play__P2685.info = {"start":390,"length":69,"line":19,"column":4,"endLine":21,"endColumn":5,"fileName":"pxt_modules/core/soundexpressions.ts","functionName":"play","argumentNames":["this"]}

function SoundExpression_play__P2685_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: SoundExpression_play__P2685, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_Device_hasService__P3239(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.n___9260 = undefined;
    s.i___9262 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C3220_VT)) failedCast(r0);
    r0 = s.arg0.fields["services"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_1);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 2);
    s.n___9260 = (r0);
    s.i___9262 = (0);
  case 1:
    r0 = (s.i___9262 < s.n___9260);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.tmp_3 = jacdac_Device_serviceClassAt__P3233_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.tmp_3.arg1 = s.i___9262;
    s.callLocIdx = 483; s.pc = 6; return s.tmp_3;
  case 6:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = (s.tmp_2 === s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = true;
    { step = 5; continue; }
  case 2:
  case 3:
    r0 = (s.i___9262 + 1);
    s.i___9262 = (r0);
    { step = 1; continue; }
  case 4:
    r0 = false;
  case 5:
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device_hasService__P3239.info = {"start":39266,"length":228,"line":1175,"column":8,"endLine":1180,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"hasService","argumentNames":["this","serviceClass"]}

function jacdac_Device_hasService__P3239_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_hasService__P3239, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  n___9260: undefined,
  i___9262: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function helpers_arrayFilter__P1999(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___9277 = undefined;
    s.len___9279 = undefined;
    s.i___9282 = undefined;
    s.v___9287 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___9277 = (r0);
    r0 = pxsim_Array__length(s.arg0);
    s.len___9279 = (r0);
    s.i___9282 = (0);
  case 1:
    r0 = (s.i___9282 < s.len___9279);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.arg0, s.i___9282);
    s.v___9287 = (r0);
    s.tmp_1 = lambda_3_mk(s);
    s.tmp_1.argL = s.arg1;
    s.tmp_1.arg0 = s.v___9287;
    s.tmp_1.arg1 = s.i___9282;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 7; s.pc = 5; return s.tmp_1;
  case 5:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__push(s.res___9277, s.v___9287);
  case 2:
  case 3:
    r0 = (s.i___9282 + 1);
    s.i___9282 = (r0);
    { step = 1; continue; }
  case 4:
    r0 = s.res___9277;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayFilter__P1999.info = {"start":7695,"length":317,"line":261,"column":4,"endLine":269,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"arrayFilter","argumentNames":["arr","callbackfn"]}

function helpers_arrayFilter__P1999_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayFilter__P1999, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  res___9277: undefined,
  len___9279: undefined,
  i___9282: undefined,
  v___9287: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function checkForKnownService__P3652(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array_.indexOf(globals.knownActuators___3647, s.arg1, undefined);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >= 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_Array_.indexOf(globals.knownSensors___3648, s.arg1, undefined);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 >= 0);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 9; continue; }
    r0 = pxsim_pxtrt.mapGetGeneric(globals.service2dev___3651, s.arg1);
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_6);
    s.tmp_5 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 3; continue; }
    s.tmp_7 = r0 = globals.service2dev___3651;
    s.tmp_8 = r0 = s.arg1;
    r0 = pxsim_Array__mk();
    s.tmp_9 = r0;
    r0 = pxsim_pxtrt.mapSetGeneric(s.tmp_7, s.tmp_8, s.tmp_9);
    r0 = pxsim_Array__push(globals.serviceKeys___3649, s.arg1);
  case 3:
  case 4:
    r0 = pxsim_pxtrt.mapGetGeneric(globals.service2dev___3651, s.arg1);
    s.tmp_0 = r0;
    r0 = s.arg0.fields["deviceId"];
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    r0 = pxsim_Array_.indexOf(globals.knownActuators___3647, s.arg1, undefined);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >= 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    s.tmp_2 = configureActuator__P3656_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.arg1;
    s.callLocIdx = 624; s.pc = 11; return s.tmp_2;
  case 11:
    r0 = s.retval;
    { step = 8; continue; }
  case 5:
    r0 = pxsim_Array_.indexOf(globals.knownSensors___3648, s.arg1, undefined);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >= 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_2 = configureSensor__P3659_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.arg1;
    s.tmp_2.arg2 = s.arg2;
    s.callLocIdx = 625; s.pc = 12; return s.tmp_2;
  case 12:
    r0 = s.retval;
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
checkForKnownService__P3652.info = {"start":2246,"length":678,"line":78,"column":0,"endLine":98,"endColumn":1,"fileName":"main.ts","functionName":"checkForKnownService","argumentNames":["dev","serviceClass","serviceIndex"]}

function checkForKnownService__P3652_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: checkForKnownService__P3652, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function configureSensor__P3659(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = globals.sensorMap___3658;
    r0 = s.arg0.fields["deviceId"];
    s.tmp_5 = r0;
    if ((s.tmp_5) && (s.tmp_5).vtable) {
    setupResume(s, 1);
    pxsim_String__stringConv(s.tmp_5);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_5) + ""; }
  case 1:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, ":");
    s.tmp_3 = r0;
    if ((s.tmp_3) && (s.tmp_3).vtable) {
    setupResume(s, 2);
    pxsim_String__stringConv(s.tmp_3);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_3) + ""; }
  case 2:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_numops.toString(s.arg2);
    s.tmp_7 = r0;
    if ((s.tmp_7) && (s.tmp_7).vtable) {
    setupResume(s, 3);
    pxsim_String__stringConv(s.tmp_7);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_7) + ""; }
  case 3:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(s.tmp_2, s.tmp_6);
    s.tmp_1 = r0;
    r0 = pxsim_pxtrt.mapSetGeneric(s.tmp_0, s.tmp_1, 0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
configureSensor__P3659.info = {"start":3952,"length":170,"line":137,"column":0,"endLine":143,"endColumn":1,"fileName":"main.ts","functionName":"configureSensor","argumentNames":["dev","serviceClass","serviceIndex"]}

function configureSensor__P3659_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: configureSensor__P3659, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function configureActuator__P3656(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.pkt___9380 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg1 === 318542083);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 6; continue; }
  case 1:
    r0 = (s.arg1 === 309264608);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__mk();
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_2, 0.1);
    s.tmp_3 = jacdac_JDPacket_jdpacked__P2784_mk(s);
    s.tmp_3.arg0 = 8193;
    s.tmp_3.arg1 = "u0.8";
    s.tmp_3.arg2 = s.tmp_2;
    s.callLocIdx = 631; s.pc = 7; return s.tmp_3;
  case 7:
    r0 = s.retval;
    s.pkt___9380 = (r0);
    s.tmp_0 = jacdac_JDPacket_sendAsMultiCommand__P2821_mk(s);
    s.tmp_0.arg0 = s.pkt___9380;
    s.tmp_0.arg1 = 309264608;
    s.callLocIdx = 632; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    s.tmp_0 = setPixel__P3655_mk(s);
    s.tmp_0.arg0 = 0;
    s.tmp_0.arg1 = 16711680;
    s.callLocIdx = 633; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    { step = 5; continue; }
  case 2:
    r0 = (s.arg1 === 506480888);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
  case 3:
  case 4:
  case 5:
  case 6:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
configureActuator__P3656.info = {"start":3337,"length":530,"line":116,"column":0,"endLine":130,"endColumn":1,"fileName":"main.ts","functionName":"configureActuator","argumentNames":["dev","serviceClass"]}

function configureActuator__P3656_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: configureActuator__P3656, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  pkt___9380: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function setPixel__P3655(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.arg0);
    r0 = pxsim_Array__push(s.tmp_0, s.arg1);
    s.tmp_1 = runEncoded__P3654_mk(s);
    s.tmp_1.arg0 = "setone % # wait 1";
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 630; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
setPixel__P3655.info = {"start":3236,"length":99,"line":112,"column":0,"endLine":114,"endColumn":1,"fileName":"main.ts","functionName":"setPixel","argumentNames":["index","rgb"]}

function setPixel__P3655_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: setPixel__P3655, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Device_serviceClassAt__P3233(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C3220_VT)) failedCast(r0);
    r0 = (s.arg1 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = 0;
    { step = 2; continue; }
  case 1:
    r0 = s.arg0.fields["services"];
    s.tmp_1 = r0;
    r0 = (s.arg1 << 2);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 11, s.tmp_2);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = s.tmp_3;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device_serviceClassAt__P3233.info = {"start":35367,"length":253,"line":1075,"column":8,"endLine":1082,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"serviceClassAt","argumentNames":["this","serviceIndex"]}

function jacdac_Device_serviceClassAt__P3233_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_serviceClassAt__P3233, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Device_serviceClassLength__P3232(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C3220_VT)) failedCast(r0);
    r0 = s.arg0.fields["services"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_1);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 2);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_Device_serviceClassLength__P3232.info = {"start":35276,"length":81,"line":1071,"column":8,"endLine":1073,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"serviceClassLength","argumentNames":["this"]}
jacdac_Device_serviceClassLength__P3232.isGetter = true;

function jacdac_Device_serviceClassLength__P3232_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_serviceClassLength__P3232, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_Bus_selfDevice__P3160(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Bus__C3152_VT)) failedCast(r0);
    r0 = s.arg0.fields["_myDevice"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_Device__C3220_VT);
    s.tmp_3 = r0;
    s.tmp_4 = jacdac_Device_constructor__P3224_mk(s);
    s.tmp_4.arg0 = s.tmp_3;
    r0 = pxsim.control.deviceLongSerialNumber();
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_5);
    s.tmp_4.arg1 = r0;
    r0 = pxsim.control.createBuffer(4);
    s.tmp_4.arg2 = r0;
    s.callLocIdx = 305; s.pc = 3; return s.tmp_4;
  case 3:
    r0 = s.retval;
    r0 = (s.arg0).fields["_myDevice"] = (s.tmp_3);
  case 1:
  case 2:
    r0 = s.arg0.fields["_myDevice"];
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_Bus_selfDevice__P3160.info = {"start":2684,"length":273,"line":86,"column":8,"endLine":94,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"selfDevice","argumentNames":["this"]}
jacdac_Bus_selfDevice__P3160.isGetter = true;

function jacdac_Bus_selfDevice__P3160_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Bus_selfDevice__P3160, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
} }





function jacdac_EventSource_subscribe__P3261(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.unsubscribe___9439 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_EventSource__C3254_VT)) failedCast(r0);
    s.tmp_0 = jacdac_EventSource_addListenerInternal__P3936_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = s.arg2;
    s.tmp_0.arg3 = false;
    s.callLocIdx = 587; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = pxsim_pxtcore_mkAction(3, unsubscribe_inline__P9440);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg0);
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 1, s.arg1);
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 2, s.arg2);
    s.unsubscribe___9439 = (s.tmp_0);
    r0 = s.unsubscribe___9439;
    return leave(s, r0)
  default: oops()
} } }
jacdac_EventSource_subscribe__P3261.info = {"start":4067,"length":272,"line":134,"column":8,"endLine":139,"endColumn":9,"fileName":"pxt_modules/jacdac/eventsource.ts","functionName":"subscribe","argumentNames":["this","eventName","next"]}

function jacdac_EventSource_subscribe__P3261_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_EventSource_subscribe__P3261, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  unsubscribe___9439: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function unsubscribe_inline__P9440(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_0 = jacdac_EventSource_removeListenerInternal__P3937_mk(s);
    s.tmp_0.arg0 = s.caps[0];
    s.tmp_0.arg1 = s.caps[1];
    s.tmp_0.arg2 = s.caps[2];
    s.callLocIdx = 588; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
unsubscribe_inline__P9440.info = {"start":4232,"length":66,"line":136,"column":32,"endLine":137,"endColumn":60,"fileName":"pxt_modules/jacdac/eventsource.ts","functionName":"inline","argumentNames":[]}

function unsubscribe_inline__P9440_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: unsubscribe_inline__P9440, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function jacdac_EventSource_removeListenerInternal__P3937(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.listeners___9453 = undefined;
    s.n___9456 = undefined;
    s.i___9459 = undefined;
    s.listener___9464 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_EventSource__C3254_VT)) failedCast(r0);
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    { step = 11; continue; }
  case 3:
  case 4:
    r0 = s.arg0.fields["listeners"];
    s.listeners___9453 = (r0);
    r0 = pxsim_Array__length(s.listeners___9453);
    s.n___9456 = (r0);
    s.i___9459 = (0);
  case 5:
    r0 = (s.i___9459 < s.n___9456);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 10; continue; }
    r0 = pxsim_Array__getAt(s.listeners___9453, s.i___9459);
    s.listener___9464 = (r0);
    r0 = s.listener___9464.fields["key"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = s.tmp_0;
    { step = 7; continue; }
  case 6:
    r0 = s.listener___9464.fields["handler"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 === s.arg2);
  case 7:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 8; continue; }
    s.tmp_4 = helpers_arraySplice__P1989_mk(s);
    r0 = s.arg0.fields["listeners"];
    s.tmp_4.arg0 = r0;
    s.tmp_4.arg1 = s.i___9459;
    s.tmp_4.arg2 = 1;
    s.callLocIdx = 583; s.pc = 12; return s.tmp_4;
  case 12:
    r0 = s.retval;
    { step = 11; continue; }
  case 8:
  case 9:
    r0 = (s.i___9459 + 1);
    s.i___9459 = (r0);
    { step = 5; continue; }
  case 10:
  case 11:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_EventSource_removeListenerInternal__P3937.info = {"start":1661,"length":591,"line":58,"column":8,"endLine":76,"endColumn":9,"fileName":"pxt_modules/jacdac/eventsource.ts","functionName":"removeListenerInternal","argumentNames":["this","eventName","handler"]}

function jacdac_EventSource_removeListenerInternal__P3937_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_EventSource_removeListenerInternal__P3937, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  listeners___9453: undefined,
  n___9456: undefined,
  i___9459: undefined,
  listener___9464: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_EventSource_addListenerInternal__P3936(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.previous___9493 = undefined;
    s.listener___9510 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_EventSource__C3254_VT)) failedCast(r0);
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    { step = 7; continue; }
  case 3:
  case 4:
    r0 = pxsim_pxtcore_mkAction(2, previous_inline__P9495);
    s.tmp_4 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_4, 0, s.arg1);
    r0 = pxsim_pxtrt_stclo(s.tmp_4, 1, s.arg2);
    s.tmp_5 = helpers_arrayFind__P2000_mk(s);
    r0 = s.arg0.fields["listeners"];
    s.tmp_5.arg0 = r0;
    s.tmp_5.arg1 = s.tmp_4;
    s.callLocIdx = 581; s.pc = 8; return s.tmp_5;
  case 8:
    r0 = s.retval;
    s.previous___9493 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.previous___9493);
    if (!r0) { step = 5; continue; }
    { step = 7; continue; }
  case 5:
  case 6:
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_EventListener__C3251_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_EventListener_constructor__P3252_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg1;
    s.tmp_1.arg2 = s.arg2;
    s.tmp_1.arg3 = s.arg3;
    s.callLocIdx = 582; s.pc = 9; return s.tmp_1;
  case 9:
    r0 = s.retval;
    s.listener___9510 = (s.tmp_0);
    r0 = s.arg0.fields["listeners"];
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.listener___9510);
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_EventSource_addListenerInternal__P3936.info = {"start":1055,"length":596,"line":36,"column":8,"endLine":56,"endColumn":9,"fileName":"pxt_modules/jacdac/eventsource.ts","functionName":"addListenerInternal","argumentNames":["this","eventName","handler","once"]}

function jacdac_EventSource_addListenerInternal__P3936_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_EventSource_addListenerInternal__P3936, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  previous___9493: undefined,
  listener___9510: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }





function previous_inline__P9495(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["key"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === s.caps[0]);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = s.arg0.fields["handler"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 === s.caps[1]);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = s.tmp_3;
    return leave(s, r0)
  default: oops()
} } }
previous_inline__P9495.info = {"start":1367,"length":49,"line":47,"column":16,"endLine":47,"endColumn":65,"fileName":"pxt_modules/jacdac/eventsource.ts","functionName":"inline","argumentNames":["l"]}

function previous_inline__P9495_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: previous_inline__P9495, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function jacdac_EventListener_constructor__P3252(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_EventListener__C3251_VT)) failedCast(r0);
    r0 = (s.arg0).fields["key"] = (s.arg1);
    r0 = (s.arg0).fields["handler"] = (s.arg2);
    r0 = (s.arg0).fields["once"] = (s.arg3);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_EventListener_constructor__P3252.info = {"start":178,"length":204,"line":5,"column":8,"endLine":10,"endColumn":12,"fileName":"pxt_modules/jacdac/eventsource.ts","functionName":"inline","argumentNames":["this","key","handler","once"]}

function jacdac_EventListener_constructor__P3252_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_EventListener_constructor__P3252, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }





function music_setTempo__P2540(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = music_init__P3785_mk(s);
    s.callLocIdx = 39; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = (s.arg0 > 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = Math_max__P2019_mk(s);
    s.tmp_1.arg0 = 1;
    s.tmp_1.arg1 = s.arg0;
    s.callLocIdx = 40; s.pc = 4; return s.tmp_1;
  case 4:
    r0 = s.retval;
    globals.beatsPerMinute___3779 = (r0);
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
music_setTempo__P2540.info = {"start":9756,"length":147,"line":306,"column":4,"endLine":311,"endColumn":5,"fileName":"pxt_modules/core/music.ts","functionName":"setTempo","argumentNames":["bpm"]}

function music_setTempo__P2540_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: music_setTempo__P2540, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_start__P3248(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.id___9534 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = globals.bus___3170.fields["controlServer"];
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    s.tmp_3 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 17; continue; }
  case 1:
  case 2:
    r0 = pxsim_numops_toBoolDecr(globals.productIdentifier___3135);
    s.tmp_6 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_6);
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 5; continue; }
    r0 = 0;
    s.id___9534 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.id___9534);
    if (!r0) { step = 3; continue; }
    r0 = (s.id___9534 & 268435455);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 | 805306368);
    globals.productIdentifier___3135 = (r0);
  case 3:
  case 4:
  case 5:
  case 6:
    s.tmp_0 = jacdac_Bus_start__P3159_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.callLocIdx = 556; s.pc = 18; return s.tmp_0;
  case 18:
    r0 = s.retval;
    s.tmp_0 = jacdac_log__P4033_mk(s);
    s.tmp_0.arg0 = "jacdac starting";
    s.callLocIdx = 557; s.pc = 19; return s.tmp_0;
  case 19:
    r0 = s.retval;
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 7; continue; }
    r0 = s.tmp_0;
    { step = 8; continue; }
  case 7:
    r0 = pxsim_pxtrt.mkMap();
  case 8:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    s.arg0 = (s.tmp_1);
    r0 = 30;
    s.tmp_0 = r0;
    r0 = pxsim.control.onEvent(s.tmp_0, 1, jacdac_consumePackets__P4067, 0);
    r0 = 30;
    s.tmp_0 = r0;
    r0 = pxsim.control.onEvent(s.tmp_0, 100, jacdac_start_inline__P9561, 0);
    s.tmp_0 = jacdac_enablePower__P4063_mk(s);
    s.tmp_0.arg0 = true;
    s.callLocIdx = 561; s.pc = 20; return s.tmp_0;
  case 20:
    r0 = s.retval;
    s.tmp_0 = jacdac_enablePowerFaultPin__P4064_mk(s);
    s.callLocIdx = 562; s.pc = 21; return s.tmp_0;
  case 21:
    r0 = s.retval;
    s.tmp_0 = jacdac_enableIdentityLED__P4065_mk(s);
    s.callLocIdx = 563; s.pc = 22; return s.tmp_0;
  case 22:
    r0 = s.retval;
    s.tmp_3 = if_disableLogger_1_mk(s);
    s.tmp_3.arg0 = s.arg0;
    if (!s.tmp_3.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_3.arg0, "disableLogger");
    } else {
      s.tmp_3.fn = s.tmp_3.arg0.vtable.iface["disableLogger"];
      if (s.tmp_3.fn == null) { s.retval = s.tmp_3.arg0.fields["disableLogger"]; }
      else if (!s.tmp_3.fn.isGetter) { s.retval = bind(s.tmp_3); }
     else { s.callLocIdx = 564; s.pc = 23; return s.tmp_3; }
    }
  case 23:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    s.tmp_4 = console_addListener__P2381_mk(s);
    s.tmp_4.arg0 = jacdac_start_inline__P9572;
    s.callLocIdx = 566; s.pc = 24; return s.tmp_4;
  case 24:
    r0 = s.retval;
    s.tmp_0 = jacdac_Server_start__P3182_mk(s);
    s.tmp_0.arg0 = globals.loggerServer___3002;
    s.callLocIdx = 567; s.pc = 25; return s.tmp_0;
  case 25:
    r0 = s.retval;
  case 9:
  case 10:
    s.tmp_3 = if_disableRoleManager_1_mk(s);
    s.tmp_3.arg0 = s.arg0;
    if (!s.tmp_3.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_3.arg0, "disableRoleManager");
    } else {
      s.tmp_3.fn = s.tmp_3.arg0.vtable.iface["disableRoleManager"];
      if (s.tmp_3.fn == null) { s.retval = s.tmp_3.arg0.fields["disableRoleManager"]; }
      else if (!s.tmp_3.fn.isGetter) { s.retval = bind(s.tmp_3); }
     else { s.callLocIdx = 568; s.pc = 26; return s.tmp_3; }
    }
  case 26:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    s.tmp_4 = jacdac_Server_start__P3182_mk(s);
    s.tmp_4.arg0 = globals.roleManagerServer___3083;
    s.callLocIdx = 569; s.pc = 27; return s.tmp_4;
  case 27:
    r0 = s.retval;
  case 11:
  case 12:
    s.tmp_3 = if_noWait_1_mk(s);
    s.tmp_3.arg0 = s.arg0;
    if (!s.tmp_3.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_3.arg0, "noWait");
    } else {
      s.tmp_3.fn = s.tmp_3.arg0.vtable.iface["noWait"];
      if (s.tmp_3.fn == null) { s.retval = s.tmp_3.arg0.fields["noWait"]; }
      else if (!s.tmp_3.fn.isGetter) { s.retval = bind(s.tmp_3); }
     else { s.callLocIdx = 570; s.pc = 28; return s.tmp_3; }
    }
  case 28:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 15; continue; }
    s.tmp_4 = jacdac_log__P4033_mk(s);
    s.tmp_4.arg0 = "waiting for devices to enumerate...";
    s.callLocIdx = 571; s.pc = 29; return s.tmp_4;
  case 29:
    r0 = s.retval;
    s.tmp_0 = pause__P2224_mk(s);
    s.tmp_0.arg0 = 1000;
    s.callLocIdx = 572; s.pc = 30; return s.tmp_0;
  case 30:
    r0 = s.retval;
    r0 = globals.roleManagerServer___3083.fields["running"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    s.tmp_1 = jacdac__rolemgr_RoleManagerServer_bindRoles__P3081_mk(s);
    s.tmp_1.arg0 = globals.roleManagerServer___3083;
    s.callLocIdx = 573; s.pc = 31; return s.tmp_1;
  case 31:
    r0 = s.retval;
  case 13:
  case 14:
  case 15:
  case 16:
    s.tmp_0 = jacdac_log__P4033_mk(s);
    s.tmp_0.arg0 = "jacdac started";
    s.callLocIdx = 574; s.pc = 32; return s.tmp_0;
  case 32:
    r0 = s.retval;
  case 17:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_start__P3248.info = {"start":47283,"length":1530,"line":1403,"column":4,"endLine":1451,"endColumn":5,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"start","argumentNames":["options"]}

function jacdac_start__P3248_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_start__P3248, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  id___9534: undefined,
  arg0: undefined,
} }





function jacdac_start_inline__P9561(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_0 = jacdac_Bus_queueAnnounce__P3163_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.callLocIdx = 560; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_start_inline__P9561.info = {"start":48091,"length":44,"line":1427,"column":71,"endLine":1428,"endColumn":38,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":[]}

function jacdac_start_inline__P9561_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_start_inline__P9561, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function jacdac_start_inline__P9572(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_String_.charAt(s.arg1, 0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 != ":");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_2 = jacdac_LoggerServer_add__P3001_mk(s);
    s.tmp_2.arg0 = globals.loggerServer___3002;
    s.tmp_2.arg1 = s.arg0;
    s.tmp_2.arg2 = s.arg1;
    s.callLocIdx = 565; s.pc = 3; return s.tmp_2;
  case 3:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_start_inline__P9572.info = {"start":48302,"length":114,"line":1436,"column":32,"endLine":1438,"endColumn":13,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["pri","msg"]}

function jacdac_start_inline__P9572_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_start_inline__P9572, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac__rolemgr_RoleManagerServer_bindRoles__P3081(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.bindings___9610 = undefined;
    s.wraps___9612 = undefined;
    s.cl___9623 = undefined;
    s.unnamed78___U3 = undefined;
    s.unnamed79___U4 = undefined;
    s.b___9632 = undefined;
    s.w___9652 = undefined;
    s.unnamed80___U7 = undefined;
    s.unnamed81___U8 = undefined;
    s.servers___9671 = undefined;
    s.b___9674 = undefined;
    s.unnamed82___U11 = undefined;
    s.unnamed83___U12 = undefined;
    s.hn___9676 = undefined;
    s.h___9680 = undefined;
    s.h___9718 = undefined;
    s.d___9740 = undefined;
    s.unnamed84___U17 = undefined;
    s.unnamed85___U18 = undefined;
    s.dev___9748 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac__rolemgr_RoleManagerServer__C3075_VT)) failedCast(r0);
    r0 = s.arg0.fields["running"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 29; continue; }
  case 1:
  case 2:
    r0 = globals.bus___3170.fields["unattachedClients"];
    s.tmp_5 = r0;
    r0 = pxsim_Array__length(s.tmp_5);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 == 0);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    s.tmp_6 = jacdac__rolemgr_RoleManagerServer_checkChanges__P4023_mk(s);
    s.tmp_6.arg0 = s.arg0;
    s.callLocIdx = 275; s.pc = 30; return s.tmp_6;
  case 30:
    r0 = s.retval;
    { step = 29; continue; }
  case 3:
  case 4:
    r0 = pxsim_Array__mk();
    s.bindings___9610 = (r0);
    s.tmp_0 = helpers_arrayMap__P1995_mk(s);
    r0 = globals.bus___3170.fields["devices"];
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = wraps_inline__P9614;
    s.callLocIdx = 277; s.pc = 31; return s.tmp_0;
  case 31:
    r0 = s.retval;
    s.wraps___9612 = (r0);
    s.cl___9623 = (undefined);
    r0 = globals.bus___3170.fields["allClients"];
    s.unnamed78___U3 = (r0);
    s.unnamed79___U4 = (0);
  case 5:
    s.tmp_0 = r0 = s.unnamed79___U4;
    r0 = pxsim_Array__length(s.unnamed78___U3);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 16; continue; }
    r0 = pxsim_Array__getAt(s.unnamed78___U3, s.unnamed79___U4);
    s.cl___9623 = (r0);
    r0 = s.cl___9623.fields["broadcast"];
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    s.tmp_3 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (r0) { step = 6; continue; }
    r0 = s.tmp_2;
    { step = 7; continue; }
  case 6:
    r0 = s.cl___9623.fields["role"];
  case 7:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 14; continue; }
    r0 = pxsim_pxtcore_mkClassInstance(jacdac__rolemgr_RoleBinding__C4012_VT);
    s.tmp_6 = r0;
    s.tmp_7 = jacdac__rolemgr_RoleBinding_constructor__P4015_mk(s);
    s.tmp_7.arg0 = s.tmp_6;
    r0 = s.cl___9623.fields["role"];
    s.tmp_7.arg1 = r0;
    r0 = s.cl___9623.fields["serviceClass"];
    s.tmp_7.arg2 = r0;
    s.callLocIdx = 278; s.pc = 32; return s.tmp_7;
  case 32:
    r0 = s.retval;
    s.b___9632 = (s.tmp_6);
    r0 = s.cl___9623.fields["device"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 12; continue; }
    r0 = s.cl___9623.fields["device"];
    s.tmp_1 = r0;
    r0 = (s.b___9632).fields["boundToDev"] = (s.tmp_1);
    r0 = s.cl___9623.fields["serviceIndex"];
    s.tmp_0 = r0;
    r0 = (s.b___9632).fields["boundToServiceIdx"] = (s.tmp_0);
    s.w___9652 = (undefined);
    s.unnamed80___U7 = (s.wraps___9612);
    s.unnamed81___U8 = (0);
  case 8:
    s.tmp_0 = r0 = s.unnamed81___U8;
    r0 = pxsim_Array__length(s.unnamed80___U7);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 11; continue; }
    r0 = pxsim_Array__getAt(s.unnamed80___U7, s.unnamed81___U8);
    s.w___9652 = (r0);
    r0 = s.w___9652.fields["device"];
    s.tmp_3 = r0;
    r0 = s.cl___9623.fields["device"];
    s.tmp_4 = r0;
    r0 = (s.tmp_3 == s.tmp_4);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 9; continue; }
    r0 = s.w___9652.fields["bindings"];
    s.tmp_5 = r0;
    r0 = s.cl___9623.fields["serviceIndex"];
    s.tmp_6 = r0;
    r0 = pxsim_Array_.setAt(s.tmp_5, s.tmp_6, s.b___9632);
    { step = 11; continue; }
  case 9:
  case 10:
    r0 = (s.unnamed81___U8 + 1);
    s.unnamed81___U8 = (r0);
    { step = 8; continue; }
  case 11:
    s.unnamed80___U7 = (undefined);
  case 12:
  case 13:
    r0 = pxsim_Array__push(s.bindings___9610, s.b___9632);
  case 14:
  case 15:
    r0 = (s.unnamed79___U4 + 1);
    s.unnamed79___U4 = (r0);
    { step = 5; continue; }
  case 16:
    s.unnamed78___U3 = (undefined);
    r0 = pxsim_Array__mk();
    s.servers___9671 = (r0);
    s.b___9674 = (undefined);
    s.unnamed82___U11 = (s.bindings___9610);
    s.unnamed83___U12 = (0);
  case 17:
    s.tmp_0 = r0 = s.unnamed83___U12;
    r0 = pxsim_Array__length(s.unnamed82___U11);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 20; continue; }
    r0 = pxsim_Array__getAt(s.unnamed82___U11, s.unnamed83___U12);
    s.b___9674 = (r0);
    s.tmp_2 = jacdac__rolemgr_RoleBinding_host__P4013_mk(s);
    s.tmp_2.arg0 = s.b___9674;
    s.callLocIdx = 279; s.pc = 33; return s.tmp_2;
  case 33:
    r0 = s.retval;
    s.hn___9676 = (r0);
    r0 = pxsim_pxtcore_mkAction(1, h_inline__P9683);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.hn___9676);
    s.tmp_1 = helpers_arrayFind__P2000_mk(s);
    s.tmp_1.arg0 = s.servers___9671;
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 280; s.pc = 34; return s.tmp_1;
  case 34:
    r0 = s.retval;
    s.h___9680 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.h___9680);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 18; continue; }
    r0 = pxsim_pxtcore_mkClassInstance(jacdac__rolemgr_ServerBindings__C4016_VT);
    s.tmp_2 = r0;
    s.tmp_3 = jacdac__rolemgr_ServerBindings_constructor__P4019_mk(s);
    s.tmp_3.arg0 = s.tmp_2;
    s.tmp_3.arg1 = s.hn___9676;
    s.callLocIdx = 281; s.pc = 35; return s.tmp_3;
  case 35:
    r0 = s.retval;
    s.h___9680 = (s.tmp_2);
    r0 = pxsim_Array__push(s.servers___9671, s.h___9680);
  case 18:
  case 19:
    r0 = s.h___9680.fields["bindings"];
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.b___9674);
    r0 = (s.unnamed83___U12 + 1);
    s.unnamed83___U12 = (r0);
    { step = 17; continue; }
  case 20:
    s.unnamed82___U11 = (undefined);
    s.tmp_0 = helpers_arrayFilter__P1999_mk(s);
    s.tmp_0.arg0 = s.servers___9671;
    s.tmp_0.arg1 = jacdac__rolemgr_RoleManagerServer_bindRoles_inline__P9709;
    s.callLocIdx = 283; s.pc = 36; return s.tmp_0;
  case 36:
    r0 = s.retval;
    s.servers___9671 = (r0);
  case 21:
    r0 = pxsim_Array__length(s.servers___9671);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 28; continue; }
    s.tmp_2 = jacdac__rolemgr_maxIn__P4020_mk(s);
    s.tmp_2.arg0 = s.servers___9671;
    s.tmp_2.arg1 = h_inline__P9722;
    s.callLocIdx = 284; s.pc = 37; return s.tmp_2;
  case 37:
    r0 = s.retval;
    s.h___9718 = (r0);
    s.d___9740 = (undefined);
    s.unnamed84___U17 = (s.wraps___9612);
    s.unnamed85___U18 = (0);
  case 22:
    s.tmp_0 = r0 = s.unnamed85___U18;
    r0 = pxsim_Array__length(s.unnamed84___U17);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 23; continue; }
    r0 = pxsim_Array__getAt(s.unnamed84___U17, s.unnamed85___U18);
    s.d___9740 = (r0);
    s.tmp_2 = r0 = s.d___9740;
    s.tmp_4 = jacdac__rolemgr_ServerBindings_scoreFor__P4018_mk(s);
    s.tmp_4.arg0 = s.h___9718;
    s.tmp_4.arg1 = s.d___9740;
    s.tmp_4.arg2 = false;
    s.callLocIdx = 285; s.pc = 38; return s.tmp_4;
  case 38:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (s.tmp_2).fields["score"] = (s.tmp_3);
    r0 = (s.unnamed85___U18 + 1);
    s.unnamed85___U18 = (r0);
    { step = 22; continue; }
  case 23:
    s.unnamed84___U17 = (undefined);
    s.tmp_0 = jacdac__rolemgr_maxIn__P4020_mk(s);
    s.tmp_0.arg0 = s.wraps___9612;
    s.tmp_0.arg1 = dev_inline__P9752;
    s.callLocIdx = 286; s.pc = 39; return s.tmp_0;
  case 39:
    r0 = s.retval;
    s.dev___9748 = (r0);
    r0 = s.dev___9748.fields["score"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 24; continue; }
    r0 = pxsim_Array_.removeElement(s.servers___9671, s.h___9718);
    { step = 21; continue; }
  case 24:
  case 25:
    s.tmp_0 = helpers_arraySort__P1994_mk(s);
    r0 = s.h___9718.fields["bindings"];
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = jacdac__rolemgr_RoleManagerServer_bindRoles_inline__P9779;
    s.callLocIdx = 287; s.pc = 40; return s.tmp_0;
  case 40:
    r0 = s.retval;
    s.tmp_0 = jacdac__rolemgr_ServerBindings_scoreFor__P4018_mk(s);
    s.tmp_0.arg0 = s.h___9718;
    s.tmp_0.arg1 = s.dev___9748;
    s.tmp_0.arg2 = true;
    s.callLocIdx = 288; s.pc = 41; return s.tmp_0;
  case 41:
    r0 = s.retval;
    s.tmp_1 = jacdac__rolemgr_ServerBindings_fullyBound__P4017_mk(s);
    s.tmp_1.arg0 = s.h___9718;
    s.callLocIdx = 289; s.pc = 42; return s.tmp_1;
  case 42:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 26; continue; }
    r0 = pxsim_Array_.removeElement(s.servers___9671, s.h___9718);
    { step = 27; continue; }
  case 26:
    r0 = pxsim_pxtcore_mkAction(1, jacdac__rolemgr_RoleManagerServer_bindRoles_inline__P9803);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.dev___9748);
    s.tmp_1 = r0 = s.h___9718;
    s.tmp_3 = helpers_arrayFilter__P1999_mk(s);
    r0 = s.h___9718.fields["bindings"];
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = s.tmp_0;
    s.callLocIdx = 290; s.pc = 43; return s.tmp_3;
  case 43:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = (s.tmp_1).fields["bindings"] = (s.tmp_2);
  case 27:
    { step = 21; continue; }
  case 28:
    s.tmp_0 = jacdac__rolemgr_RoleManagerServer_checkChanges__P4023_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 291; s.pc = 44; return s.tmp_0;
  case 44:
    r0 = s.retval;
  case 29:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_RoleManagerServer_bindRoles__P3081.info = {"start":10026,"length":3421,"line":270,"column":8,"endLine":358,"endColumn":9,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"bindRoles","argumentNames":["this"]}

function jacdac__rolemgr_RoleManagerServer_bindRoles__P3081_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_RoleManagerServer_bindRoles__P3081, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  bindings___9610: undefined,
  wraps___9612: undefined,
  cl___9623: undefined,
  unnamed78___U3: undefined,
  unnamed79___U4: undefined,
  b___9632: undefined,
  w___9652: undefined,
  unnamed80___U7: undefined,
  unnamed81___U8: undefined,
  servers___9671: undefined,
  b___9674: undefined,
  unnamed82___U11: undefined,
  unnamed83___U12: undefined,
  hn___9676: undefined,
  h___9680: undefined,
  h___9718: undefined,
  d___9740: undefined,
  unnamed84___U17: undefined,
  unnamed85___U18: undefined,
  dev___9748: undefined,
  arg0: undefined,
} }





function wraps_inline__P9614(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkClassInstance(jacdac__rolemgr_DeviceWrapper__C4010_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac__rolemgr_DeviceWrapper_constructor__P4011_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg0;
    s.callLocIdx = 276; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
wraps_inline__P9614.info = {"start":10445,"length":25,"line":281,"column":42,"endLine":281,"endColumn":67,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"inline","argumentNames":["d"]}

function wraps_inline__P9614_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: wraps_inline__P9614, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function h_inline__P9683(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["host"];
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == s.caps[0]);
    return leave(s, r0)
  default: oops()
} } }
h_inline__P9683.info = {"start":11325,"length":17,"line":304,"column":37,"endLine":304,"endColumn":54,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"inline","argumentNames":["h"]}

function h_inline__P9683_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: h_inline__P9683, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac__rolemgr_RoleManagerServer_bindRoles_inline__P9709(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_2 = jacdac__rolemgr_ServerBindings_fullyBound__P4017_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.callLocIdx = 282; s.pc = 1; return s.tmp_2;
  case 1:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_0);
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_RoleManagerServer_bindRoles_inline__P9709.info = {"start":11622,"length":18,"line":313,"column":37,"endLine":313,"endColumn":55,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"inline","argumentNames":["h"]}

function jacdac__rolemgr_RoleManagerServer_bindRoles_inline__P9709_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_RoleManagerServer_bindRoles_inline__P9709, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }





function h_inline__P9722(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["bindings"];
    s.tmp_2 = r0;
    r0 = pxsim_Array__length(s.tmp_2);
    s.tmp_1 = r0;
    r0 = s.arg1.fields["bindings"];
    s.tmp_4 = r0;
    r0 = pxsim_Array__length(s.tmp_4);
    s.tmp_3 = r0;
    r0 = (s.tmp_1 - s.tmp_3);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = s.arg1.fields["host"];
    s.tmp_5 = r0;
    r0 = s.arg0.fields["host"];
    s.tmp_6 = r0;
    r0 = pxsim_String_.compare(s.tmp_5, s.tmp_6);
  case 2:
    // jmp value (already in r0)
    s.tmp_7 = r0;
    r0 = s.tmp_7;
    return leave(s, r0)
  default: oops()
} } }
h_inline__P9722.info = {"start":11975,"length":121,"line":320,"column":20,"endLine":322,"endColumn":46,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"inline","argumentNames":["a","b"]}

function h_inline__P9722_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: h_inline__P9722, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function dev_inline__P9752(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["score"];
    s.tmp_1 = r0;
    r0 = s.arg1.fields["score"];
    s.tmp_2 = r0;
    r0 = (s.tmp_1 - s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = s.arg1.fields["device"];
    r0 = r0.fields["deviceId"];
    s.tmp_3 = r0;
    r0 = s.arg0.fields["device"];
    r0 = r0.fields["deviceId"];
    s.tmp_4 = r0;
    r0 = pxsim_String_.compare(s.tmp_3, s.tmp_4);
  case 2:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = s.tmp_5;
    return leave(s, r0)
  default: oops()
} } }
dev_inline__P9752.info = {"start":12262,"length":123,"line":329,"column":20,"endLine":331,"endColumn":68,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"inline","argumentNames":["a","b"]}

function dev_inline__P9752_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: dev_inline__P9752, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac__rolemgr_RoleManagerServer_bindRoles_inline__P9779(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["role"];
    s.tmp_0 = r0;
    r0 = s.arg1.fields["role"];
    s.tmp_1 = r0;
    r0 = pxsim_String_.compare(s.tmp_0, s.tmp_1);
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_RoleManagerServer_bindRoles_inline__P9779.info = {"start":12790,"length":32,"line":342,"column":32,"endLine":342,"endColumn":64,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"inline","argumentNames":["a","b"]}

function jacdac__rolemgr_RoleManagerServer_bindRoles_inline__P9779_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_RoleManagerServer_bindRoles_inline__P9779, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac__rolemgr_RoleManagerServer_bindRoles_inline__P9803(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["boundToDev"];
    s.tmp_0 = r0;
    r0 = s.caps[0].fields["device"];
    s.tmp_1 = r0;
    r0 = (s.tmp_0 != s.tmp_1);
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_RoleManagerServer_bindRoles_inline__P9803.info = {"start":13320,"length":31,"line":353,"column":24,"endLine":353,"endColumn":55,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"inline","argumentNames":["b"]}

function jacdac__rolemgr_RoleManagerServer_bindRoles_inline__P9803_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_RoleManagerServer_bindRoles_inline__P9803, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function helpers_arraySort__P1994(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_Array__length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > 1);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    s.arg1 = (helpers_arraySort_inline__P9820);
  case 3:
  case 4:
    s.tmp_0 = helpers_sortHelper__P3705_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.callLocIdx = 3; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
helpers_arraySort__P1994.info = {"start":5663,"length":859,"line":207,"column":4,"endLine":227,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"arraySort","argumentNames":["arr","callbackfn"]}

function helpers_arraySort__P1994_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arraySort__P1994, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function helpers_arraySort_inline__P9820(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.aIsUndef___9823 = undefined;
    s.bIsUndef___9827 = undefined;
    s.aIsNull___9838 = undefined;
    s.bIsNull___9842 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 === undefined);
    s.aIsUndef___9823 = (r0);
    r0 = (s.arg1 === undefined);
    s.bIsUndef___9827 = (r0);
    s.tmp_0 = r0 = s.aIsUndef___9823;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = s.bIsUndef___9827;
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 3; continue; }
    r0 = 0;
    { step = 17; continue; }
    { step = 8; continue; }
  case 3:
    r0 = pxsim_numops_toBoolDecr(s.aIsUndef___9823);
    if (!r0) { step = 4; continue; }
    r0 = 1;
    { step = 17; continue; }
    { step = 7; continue; }
  case 4:
    r0 = pxsim_numops_toBoolDecr(s.bIsUndef___9827);
    if (!r0) { step = 5; continue; }
    r0 = -1;
    { step = 17; continue; }
  case 5:
  case 6:
  case 7:
  case 8:
    r0 = (s.arg0 === null);
    s.aIsNull___9838 = (r0);
    r0 = (s.arg1 === null);
    s.bIsNull___9842 = (r0);
    s.tmp_0 = r0 = s.aIsNull___9838;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = s.tmp_0;
    { step = 10; continue; }
  case 9:
    r0 = s.bIsNull___9842;
  case 10:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 11; continue; }
    r0 = 0;
    { step = 17; continue; }
    { step = 16; continue; }
  case 11:
    r0 = pxsim_numops_toBoolDecr(s.aIsNull___9838);
    if (!r0) { step = 12; continue; }
    r0 = 1;
    { step = 17; continue; }
    { step = 15; continue; }
  case 12:
    r0 = pxsim_numops_toBoolDecr(s.bIsNull___9842);
    if (!r0) { step = 13; continue; }
    r0 = -1;
    { step = 17; continue; }
  case 13:
  case 14:
  case 15:
  case 16:
    if ((s.arg0) && (s.arg0).vtable) {
    setupResume(s, 18);
    pxsim_String__stringConv(s.arg0);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg0) + ""; }
  case 18:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_4);
    s.tmp_2 = r0;
    if ((s.arg1) && (s.arg1).vtable) {
    setupResume(s, 19);
    pxsim_String__stringConv(s.arg1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg1) + ""; }
  case 19:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_7 = r0;
    r0 = pxsim_String__concat(s.tmp_6, s.tmp_7);
    s.tmp_5 = r0;
    r0 = pxsim_String_.compare(s.tmp_2, s.tmp_5);
  case 17:
    return leave(s, r0)
  default: oops()
} } }
helpers_arraySort_inline__P9820.info = {"start":5826,"length":636,"line":209,"column":25,"endLine":224,"endColumn":13,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"inline","argumentNames":["a","b"]}

function helpers_arraySort_inline__P9820_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arraySort_inline__P9820, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  aIsUndef___9823: undefined,
  bIsUndef___9827: undefined,
  aIsNull___9838: undefined,
  bIsNull___9842: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function helpers_sortHelper__P3705(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___9877 = undefined;
    s.i___9880 = undefined;
    s.j___9886 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__length(s.arg0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 <= 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    r0 = s.arg0;
    { step = 11; continue; }
  case 3:
  case 4:
    r0 = pxsim_Array__length(s.arg0);
    s.len___9877 = (r0);
    s.i___9880 = (0);
  case 5:
    s.tmp_1 = r0 = s.i___9880;
    r0 = (s.len___9877 - 1);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 10; continue; }
    r0 = (s.i___9880 + 1);
    s.j___9886 = (r0);
  case 6:
    r0 = (s.j___9886 < s.len___9877);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    s.tmp_3 = lambda_3_mk(s);
    s.tmp_3.argL = s.arg1;
    r0 = pxsim_Array__getAt(s.arg0, s.i___9880);
    s.tmp_3.arg0 = r0;
    r0 = pxsim_Array__getAt(s.arg0, s.j___9886);
    s.tmp_3.arg1 = r0;
    setupLambda(s.tmp_3, s.tmp_3.argL);
    s.callLocIdx = 1; s.pc = 12; return s.tmp_3;
  case 12:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > 0);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 7; continue; }
    s.tmp_4 = helpers_swap__P3704_mk(s);
    s.tmp_4.arg0 = s.arg0;
    s.tmp_4.arg1 = s.i___9880;
    s.tmp_4.arg2 = s.j___9886;
    s.callLocIdx = 2; s.pc = 13; return s.tmp_4;
  case 13:
    r0 = s.retval;
  case 7:
  case 8:
    r0 = (s.j___9886 + 1);
    s.j___9886 = (r0);
    { step = 6; continue; }
  case 9:
    r0 = (s.i___9880 + 1);
    s.i___9880 = (r0);
    { step = 5; continue; }
  case 10:
    r0 = s.arg0;
  case 11:
    return leave(s, r0)
  default: oops()
} } }
helpers_sortHelper__P3705.info = {"start":5176,"length":481,"line":191,"column":4,"endLine":205,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"sortHelper","argumentNames":["arr","callbackfn"]}

function helpers_sortHelper__P3705_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_sortHelper__P3705, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  len___9877: undefined,
  i___9880: undefined,
  j___9886: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function helpers_swap__P3704(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.temp___9915 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__getAt(s.arg0, s.arg1);
    s.temp___9915 = (r0);
    s.tmp_0 = r0 = s.arg0;
    s.tmp_1 = r0 = s.arg1;
    r0 = pxsim_Array__getAt(s.arg0, s.arg2);
    s.tmp_2 = r0;
    r0 = pxsim_Array_.setAt(s.tmp_0, s.tmp_1, s.tmp_2);
    r0 = pxsim_Array_.setAt(s.arg0, s.arg2, s.temp___9915);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
helpers_swap__P3704.info = {"start":5030,"length":140,"line":185,"column":4,"endLine":189,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"swap","argumentNames":["arr","i","j"]}

function helpers_swap__P3704_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_swap__P3704, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  temp___9915: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac__rolemgr_ServerBindings_scoreFor__P4018(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.numBound___9930 = undefined;
    s.numPossible___9931 = undefined;
    s.dev___9932 = undefined;
    s.missing___9935 = undefined;
    s.b___9938 = undefined;
    s.unnamed74___U5 = undefined;
    s.unnamed75___U6 = undefined;
    s.sbuf___9953 = undefined;
    s.idx___9956 = undefined;
    s.serviceIndex___9962 = undefined;
    s.serviceClass___9968 = undefined;
    s.i___9974 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac__rolemgr_ServerBindings__C4016_VT)) failedCast(r0);
    s.numBound___9930 = (0);
    s.numPossible___9931 = (0);
    r0 = s.arg1.fields["device"];
    s.dev___9932 = (r0);
    r0 = pxsim_Array__mk();
    s.missing___9935 = (r0);
    s.b___9938 = (undefined);
    r0 = s.arg0.fields["bindings"];
    s.unnamed74___U5 = (r0);
    s.unnamed75___U6 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed75___U6;
    r0 = pxsim_Array__length(s.unnamed74___U5);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 6; continue; }
    r0 = pxsim_Array__getAt(s.unnamed74___U5, s.unnamed75___U6);
    s.b___9938 = (r0);
    r0 = s.b___9938.fields["boundToDev"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 4; continue; }
    r0 = s.b___9938.fields["boundToDev"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 == s.dev___9932);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 2; continue; }
    r0 = (s.numBound___9930 + 1);
    s.numBound___9930 = (r0);
  case 2:
  case 3:
    { step = 5; continue; }
  case 4:
    r0 = pxsim_Array__push(s.missing___9935, s.b___9938);
  case 5:
    r0 = (s.unnamed75___U6 + 1);
    s.unnamed75___U6 = (r0);
    { step = 1; continue; }
  case 6:
    s.unnamed74___U5 = (undefined);
    r0 = s.dev___9932.fields["services"];
    s.sbuf___9953 = (r0);
    s.idx___9956 = (4);
  case 7:
    s.tmp_1 = r0 = s.idx___9956;
    r0 = pxsim.BufferMethods.length(s.sbuf___9953);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 17; continue; }
    r0 = (s.idx___9956 >> 2);
    s.serviceIndex___9962 = (r0);
    r0 = s.arg1.fields["bindings"];
    s.tmp_1 = r0;
    r0 = pxsim_Array__getAt(s.tmp_1, s.serviceIndex___9962);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 8; continue; }
    { step = 16; continue; }
  case 8:
  case 9:
    r0 = pxsim.BufferMethods.getNumber(s.sbuf___9953, 11, s.idx___9956);
    s.serviceClass___9968 = (r0);
    s.i___9974 = (0);
  case 10:
    s.tmp_1 = r0 = s.i___9974;
    r0 = pxsim_Array__length(s.missing___9935);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 15; continue; }
    r0 = pxsim_Array__getAt(s.missing___9935, s.i___9974);
    r0 = r0.fields["serviceClass"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 == s.serviceClass___9968);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 13; continue; }
    r0 = (s.numPossible___9931 + 1);
    s.numPossible___9931 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    if (!r0) { step = 11; continue; }
    s.tmp_0 = console_add__P2374_mk(s);
    s.tmp_0.arg0 = globals.logPriority___3171;
    r0 = pxsim_Array__getAt(s.missing___9935, s.i___9974);
    r0 = r0.fields["role"];
    s.tmp_10 = r0;
    if ((s.tmp_10) && (s.tmp_10).vtable) {
    setupResume(s, 22);
    pxsim_String__stringConv(s.tmp_10);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_10) + ""; }
  case 22:
    r0 = s.retval;
    s.tmp_9 = r0;
    r0 = pxsim_String__concat("autobind: ", s.tmp_9);
    s.tmp_8 = r0;
    if ((s.tmp_8) && (s.tmp_8).vtable) {
    setupResume(s, 23);
    pxsim_String__stringConv(s.tmp_8);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_8) + ""; }
  case 23:
    r0 = s.retval;
    s.tmp_7 = r0;
    r0 = pxsim_String__concat(s.tmp_7, " -> ");
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 24);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 24:
    r0 = s.retval;
    s.tmp_5 = r0;
    s.tmp_13 = jacdac_Device_shortId__P3229_mk(s);
    s.tmp_13.arg0 = s.dev___9932;
    s.callLocIdx = 230; s.pc = 25; return s.tmp_13;
  case 25:
    r0 = s.retval;
    s.tmp_12 = r0;
    if ((s.tmp_12) && (s.tmp_12).vtable) {
    setupResume(s, 26);
    pxsim_String__stringConv(s.tmp_12);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_12) + ""; }
  case 26:
    r0 = s.retval;
    s.tmp_11 = r0;
    r0 = pxsim_String__concat(s.tmp_5, s.tmp_11);
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 27);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 27:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_3, ":");
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 28);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 28:
    r0 = s.retval;
    s.tmp_1 = r0;
    if ((s.serviceIndex___9962) && (s.serviceIndex___9962).vtable) {
    setupResume(s, 29);
    pxsim_String__stringConv(s.serviceIndex___9962);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.serviceIndex___9962) + ""; }
  case 29:
    r0 = s.retval;
    s.tmp_14 = r0;
    r0 = pxsim_String__concat(s.tmp_1, s.tmp_14);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 231; s.pc = 21; return s.tmp_0;
  case 21:
    r0 = s.retval;
    s.tmp_0 = jacdac__rolemgr_RoleBinding_select__P4014_mk(s);
    r0 = pxsim_Array__getAt(s.missing___9935, s.i___9974);
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = s.serviceIndex___9962;
    s.callLocIdx = 232; s.pc = 30; return s.tmp_0;
  case 30:
    r0 = s.retval;
  case 11:
  case 12:
    s.tmp_0 = helpers_arraySplice__P1989_mk(s);
    s.tmp_0.arg0 = s.missing___9935;
    s.tmp_0.arg1 = s.i___9974;
    s.tmp_0.arg2 = 1;
    s.callLocIdx = 233; s.pc = 31; return s.tmp_0;
  case 31:
    r0 = s.retval;
    { step = 15; continue; }
  case 13:
  case 14:
    r0 = (s.i___9974 + 1);
    s.i___9974 = (r0);
    { step = 10; continue; }
  case 15:
  case 16:
    r0 = (s.idx___9956 + 4);
    s.idx___9956 = (r0);
    { step = 7; continue; }
  case 17:
    r0 = (s.numPossible___9931 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 18; continue; }
    r0 = 0;
    { step = 20; continue; }
  case 18:
  case 19:
    r0 = (s.numBound___9930 << 8);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 | s.numPossible___9931);
  case 20:
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_ServerBindings_scoreFor__P4018.info = {"start":2090,"length":2191,"line":61,"column":8,"endLine":112,"endColumn":9,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"scoreFor","argumentNames":["this","devwrap","select"]}

function jacdac__rolemgr_ServerBindings_scoreFor__P4018_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_ServerBindings_scoreFor__P4018, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  numBound___9930: undefined,
  numPossible___9931: undefined,
  dev___9932: undefined,
  missing___9935: undefined,
  b___9938: undefined,
  unnamed74___U5: undefined,
  unnamed75___U6: undefined,
  sbuf___9953: undefined,
  idx___9956: undefined,
  serviceIndex___9962: undefined,
  serviceClass___9968: undefined,
  i___9974: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac__rolemgr_RoleBinding_select__P4014(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.dev___10042 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac__rolemgr_RoleBinding__C4012_VT)) failedCast(r0);
    r0 = s.arg1.fields["device"];
    s.dev___10042 = (r0);
    r0 = s.arg0.fields["boundToDev"];
    s.tmp_1 = r0;
    r0 = (s.dev___10042 == s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = s.arg0.fields["boundToServiceIdx"];
    s.tmp_2 = r0;
    r0 = (s.arg2 == s.tmp_2);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    { step = 7; continue; }
  case 3:
  case 4:
    r0 = s.arg0.fields["boundToDev"];
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 5; continue; }
    s.tmp_5 = jacdac__rolemgr_setRole__P3074_mk(s);
    r0 = s.arg0.fields["boundToDev"];
    r0 = r0.fields["deviceId"];
    s.tmp_5.arg0 = r0;
    r0 = s.arg0.fields["boundToServiceIdx"];
    s.tmp_5.arg1 = r0;
    s.tmp_5.arg2 = null;
    s.callLocIdx = 227; s.pc = 8; return s.tmp_5;
  case 8:
    r0 = s.retval;
  case 5:
  case 6:
    r0 = s.arg1.fields["bindings"];
    s.tmp_0 = r0;
    r0 = pxsim_Array_.setAt(s.tmp_0, s.arg2, s.arg0);
    s.tmp_0 = jacdac__rolemgr_setRole__P3074_mk(s);
    r0 = s.dev___10042.fields["deviceId"];
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = s.arg2;
    r0 = s.arg0.fields["role"];
    s.tmp_0.arg2 = r0;
    s.callLocIdx = 228; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    r0 = (s.arg0).fields["boundToDev"] = (s.dev___10042);
    r0 = (s.arg0).fields["boundToServiceIdx"] = (s.arg2);
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_RoleBinding_select__P4014.info = {"start":1114,"length":504,"line":37,"column":8,"endLine":47,"endColumn":9,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"select","argumentNames":["this","devwrap","serviceIdx"]}

function jacdac__rolemgr_RoleBinding_select__P4014_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_RoleBinding_select__P4014, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  dev___10042: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac__rolemgr_setRole__P3074(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.key___10082 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    if ((globals.roleSettingPrefix___4009) && (globals.roleSettingPrefix___4009).vtable) {
    setupResume(s, 3);
    pxsim_String__stringConv(globals.roleSettingPrefix___4009);
    checkResumeConsumed();
    return;
    } else { s.retval = (globals.roleSettingPrefix___4009) + ""; }
  case 3:
    r0 = s.retval;
    s.tmp_4 = r0;
    if ((s.arg0) && (s.arg0).vtable) {
    setupResume(s, 4);
    pxsim_String__stringConv(s.arg0);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg0) + ""; }
  case 4:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(s.tmp_4, s.tmp_5);
    s.tmp_3 = r0;
    if ((s.tmp_3) && (s.tmp_3).vtable) {
    setupResume(s, 5);
    pxsim_String__stringConv(s.tmp_3);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_3) + ""; }
  case 5:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_2, ":");
    s.tmp_1 = r0;
    if ((s.tmp_1) && (s.tmp_1).vtable) {
    setupResume(s, 6);
    pxsim_String__stringConv(s.tmp_1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_1) + ""; }
  case 6:
    r0 = s.retval;
    s.tmp_0 = r0;
    if ((s.arg1) && (s.arg1).vtable) {
    setupResume(s, 7);
    pxsim_String__stringConv(s.arg1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg1) + ""; }
  case 7:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_6);
    s.key___10082 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = settings_writeString__P2702_mk(s);
    s.tmp_0.arg0 = s.key___10082;
    s.tmp_0.arg1 = s.arg2;
    s.callLocIdx = 223; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    { step = 2; continue; }
  case 1:
    s.tmp_0 = settings_remove__P2710_mk(s);
    s.tmp_0.arg0 = s.key___10082;
    s.callLocIdx = 224; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
  case 2:
    s.tmp_0 = jacdac_Bus_clearAttachCache__P3162_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.callLocIdx = 225; s.pc = 10; return s.tmp_0;
  case 10:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_setRole__P3074.info = {"start":364,"length":261,"line":12,"column":4,"endLine":17,"endColumn":5,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"setRole","argumentNames":["devid","servIdx","role"]}

function jacdac__rolemgr_setRole__P3074_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_setRole__P3074, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  key___10082: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function settings_remove__P2710(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._remove(s.arg0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_remove__P2710.info = {"start":3702,"length":64,"line":148,"column":4,"endLine":150,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"remove","argumentNames":["key"]}

function settings_remove__P2710_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_remove__P2710, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function settings_writeString__P2702(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = settings_writeBuffer__P2701_mk(s);
    s.tmp_0.arg0 = s.arg0;
    r0 = pxsim.control.createBufferFromUTF8(s.arg1);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 79; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_writeString__P2702.info = {"start":1895,"length":125,"line":75,"column":4,"endLine":77,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"writeString","argumentNames":["key","value"]}

function settings_writeString__P2702_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_writeString__P2702, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function settings_writeBuffer__P2701(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._set(s.arg0, s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim.settings._userClean();
    r0 = pxsim_pxtrt.panic(920);
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_writeBuffer__P2701.info = {"start":1538,"length":290,"line":63,"column":4,"endLine":70,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"writeBuffer","argumentNames":["key","value"]}

function settings_writeBuffer__P2701_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_writeBuffer__P2701, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac__rolemgr_maxIn__P4020(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.maxElt___10127 = undefined;
    s.i___10129 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__getAt(s.arg0, 0);
    s.maxElt___10127 = (r0);
    s.i___10129 = (1);
  case 1:
    s.tmp_1 = r0 = s.i___10129;
    r0 = pxsim_Array__length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.tmp_5 = lambda_3_mk(s);
    s.tmp_5.argL = s.arg1;
    s.tmp_5.arg0 = s.maxElt___10127;
    r0 = pxsim_Array__getAt(s.arg0, s.i___10129);
    s.tmp_5.arg1 = r0;
    setupLambda(s.tmp_5, s.tmp_5.argL);
    s.callLocIdx = 234; s.pc = 5; return s.tmp_5;
  case 5:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = (s.tmp_4 < 0);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__getAt(s.arg0, s.i___10129);
    s.maxElt___10127 = (r0);
  case 2:
  case 3:
    r0 = (s.i___10129 + 1);
    s.i___10129 = (r0);
    { step = 1; continue; }
  case 4:
    r0 = s.maxElt___10127;
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_maxIn__P4020.info = {"start":4293,"length":228,"line":115,"column":4,"endLine":121,"endColumn":5,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"maxIn","argumentNames":["arr","cmp"]}

function jacdac__rolemgr_maxIn__P4020_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_maxIn__P4020, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  maxElt___10127: undefined,
  i___10129: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac__rolemgr_ServerBindings_fullyBound__P4017(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac__rolemgr_ServerBindings__C4016_VT)) failedCast(r0);
    s.tmp_0 = helpers_arrayEvery__P1997_mk(s);
    r0 = s.arg0.fields["bindings"];
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = jacdac__rolemgr_ServerBindings_fullyBound_inline__P10152;
    s.callLocIdx = 229; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac__rolemgr_ServerBindings_fullyBound__P4017.info = {"start":1743,"length":94,"line":54,"column":8,"endLine":56,"endColumn":9,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"fullyBound","argumentNames":["this"]}
jacdac__rolemgr_ServerBindings_fullyBound__P4017.isGetter = true;

function jacdac__rolemgr_ServerBindings_fullyBound__P4017_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_ServerBindings_fullyBound__P4017, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac__rolemgr_ServerBindings_fullyBound_inline__P10152(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["boundToDev"];
    s.tmp_0 = r0;
    r0 = (s.tmp_0 != null);
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_ServerBindings_fullyBound_inline__P10152.info = {"start":1801,"length":25,"line":55,"column":39,"endLine":55,"endColumn":64,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"inline","argumentNames":["b"]}

function jacdac__rolemgr_ServerBindings_fullyBound_inline__P10152_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_ServerBindings_fullyBound_inline__P10152, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function helpers_arrayEvery__P1997(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___10160 = undefined;
    s.i___10163 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__length(s.arg0);
    s.len___10160 = (r0);
    s.i___10163 = (0);
  case 1:
    r0 = (s.i___10163 < s.len___10160);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.tmp_4 = lambda_3_mk(s);
    s.tmp_4.argL = s.arg1;
    r0 = pxsim_Array__getAt(s.arg0, s.i___10163);
    s.tmp_4.arg0 = r0;
    s.tmp_4.arg1 = s.i___10163;
    setupLambda(s.tmp_4, s.tmp_4.argL);
    s.callLocIdx = 5; s.pc = 6; return s.tmp_4;
  case 6:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = false;
    { step = 5; continue; }
  case 2:
  case 3:
    r0 = (s.i___10163 + 1);
    s.i___10163 = (r0);
    { step = 1; continue; }
  case 4:
    r0 = true;
  case 5:
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayEvery__P1997.info = {"start":7135,"length":298,"line":246,"column":4,"endLine":252,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"arrayEvery","argumentNames":["arr","callbackfn"]}

function helpers_arrayEvery__P1997_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayEvery__P1997, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  len___10160: undefined,
  i___10163: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac__rolemgr_ServerBindings_constructor__P4019(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac__rolemgr_ServerBindings__C4016_VT)) failedCast(r0);
    r0 = (s.arg0).fields["host"] = (s.arg1);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["bindings"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_ServerBindings_constructor__P4019.info = {"start":1698,"length":35,"line":52,"column":8,"endLine":52,"endColumn":43,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"inline","argumentNames":["this","host"]}

function jacdac__rolemgr_ServerBindings_constructor__P4019_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_ServerBindings_constructor__P4019, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac__rolemgr_RoleBinding_host__P4013(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.slashIdx___10180 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac__rolemgr_RoleBinding__C4012_VT)) failedCast(r0);
    r0 = s.arg0.fields["role"];
    s.tmp_0 = r0;
    r0 = pxsim_String_.indexOf(s.tmp_0, "/", undefined);
    s.slashIdx___10180 = (r0);
    r0 = (s.slashIdx___10180 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0.fields["role"];
    { step = 3; continue; }
    { step = 2; continue; }
  case 1:
    s.tmp_1 = helpers_stringSlice__P2008_mk(s);
    r0 = s.arg0.fields["role"];
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = 0;
    r0 = (s.slashIdx___10180 - 1);
    s.tmp_1.arg2 = r0;
    s.callLocIdx = 226; s.pc = 4; return s.tmp_1;
  case 4:
    r0 = s.retval;
    { step = 3; continue; }
  case 2:
    r0 = undefined;
  case 3:
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_RoleBinding_host__P4013.info = {"start":930,"length":174,"line":31,"column":8,"endLine":35,"endColumn":9,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"host","argumentNames":["this"]}

function jacdac__rolemgr_RoleBinding_host__P4013_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_RoleBinding_host__P4013, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  slashIdx___10180: undefined,
  arg0: undefined,
} }





function jacdac__rolemgr_RoleBinding_constructor__P4015(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac__rolemgr_RoleBinding__C4012_VT)) failedCast(r0);
    r0 = (s.arg0).fields["role"] = (s.arg1);
    r0 = (s.arg0).fields["serviceClass"] = (s.arg2);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_RoleBinding_constructor__P4015.info = {"start":856,"length":64,"line":29,"column":8,"endLine":29,"endColumn":72,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"inline","argumentNames":["this","role","serviceClass"]}

function jacdac__rolemgr_RoleBinding_constructor__P4015_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_RoleBinding_constructor__P4015, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac__rolemgr_DeviceWrapper_constructor__P4011(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac__rolemgr_DeviceWrapper__C4010_VT)) failedCast(r0);
    r0 = (s.arg0).fields["device"] = (s.arg1);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["bindings"] = (s.tmp_1);
    r0 = (s.arg0).fields["score"] = (-1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_DeviceWrapper_constructor__P4011.info = {"start":717,"length":37,"line":22,"column":8,"endLine":22,"endColumn":45,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"inline","argumentNames":["this","device"]}

function jacdac__rolemgr_DeviceWrapper_constructor__P4011_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_DeviceWrapper_constructor__P4011, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function helpers_arrayMap__P1995(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___10203 = undefined;
    s.len___10205 = undefined;
    s.i___10208 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___10203 = (r0);
    r0 = pxsim_Array__length(s.arg0);
    s.len___10205 = (r0);
    s.i___10208 = (0);
  case 1:
    r0 = (s.i___10208 < s.len___10205);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = r0 = s.res___10203;
    s.tmp_3 = lambda_3_mk(s);
    s.tmp_3.argL = s.arg1;
    r0 = pxsim_Array__getAt(s.arg0, s.i___10208);
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = s.i___10208;
    setupLambda(s.tmp_3, s.tmp_3.argL);
    s.callLocIdx = 4; s.pc = 3; return s.tmp_3;
  case 3:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_2);
    r0 = (s.i___10208 + 1);
    s.i___10208 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = s.res___10203;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayMap__P1995.info = {"start":6528,"length":299,"line":229,"column":4,"endLine":236,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"arrayMap","argumentNames":["arr","callbackfn"]}

function helpers_arrayMap__P1995_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayMap__P1995, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  res___10203: undefined,
  len___10205: undefined,
  i___10208: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac__rolemgr_RoleManagerServer_checkChanges__P4023(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.newHash___10225 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac__rolemgr_RoleManagerServer__C3075_VT)) failedCast(r0);
    s.tmp_0 = jacdac__rolemgr_RoleManagerServer_bindingHash__P4022_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 292; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.newHash___10225 = (r0);
    r0 = s.arg0.fields["_oldBindingsHash"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 !== s.newHash___10225);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = (s.arg0).fields["_oldBindingsHash"] = (s.newHash___10225);
    s.tmp_0 = jacdac_Server__C3172_v2_2_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = "roles: bindings changed";
    if (!checkSubtype(s.tmp_0.arg0, jacdac_Server__C3172_VT)) failedCast(s.tmp_0.arg0);
    s.tmp_0.fn = s.tmp_0.arg0.vtable.methods.log;
    s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    s.tmp_0 = jacdac_Server_sendChangeEvent__P3949_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 293; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_RoleManagerServer_checkChanges__P4023.info = {"start":13457,"length":416,"line":360,"column":8,"endLine":370,"endColumn":9,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"checkChanges","argumentNames":["this"]}

function jacdac__rolemgr_RoleManagerServer_checkChanges__P4023_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_RoleManagerServer_checkChanges__P4023, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  newHash___10225: undefined,
  arg0: undefined,
} }





function jacdac_Server_sendChangeEvent__P3949(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Server__C3172_VT)) failedCast(r0);
    s.tmp_0 = jacdac_Server_sendEvent__P3948_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = 3;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 384; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.CHANGE___3136;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 385; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Server_sendChangeEvent__P3949.info = {"start":13628,"length":122,"line":394,"column":8,"endLine":397,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"sendChangeEvent","argumentNames":["this"]}

function jacdac_Server_sendChangeEvent__P3949_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Server_sendChangeEvent__P3949, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_Server_sendEvent__P3948(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.pkt___10248 = undefined;
    s.now___10260 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Server__C3172_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg2;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim.control.createBuffer(0);
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    s.tmp_2 = jacdac_JDPacket_from__P2782_mk(s);
    s.tmp_3 = jacdac_Bus_mkEventCmd__P3161_mk(s);
    s.tmp_3.arg0 = globals.bus___3170;
    s.tmp_3.arg1 = s.arg1;
    s.callLocIdx = 379; s.pc = 4; return s.tmp_3;
  case 4:
    r0 = s.retval;
    s.tmp_2.arg0 = r0;
    s.tmp_2.arg1 = s.tmp_1;
    s.callLocIdx = 380; s.pc = 3; return s.tmp_2;
  case 3:
    r0 = s.retval;
    s.pkt___10248 = (r0);
    s.tmp_0 = jacdac_Server_sendReport__P3947_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.pkt___10248;
    s.callLocIdx = 381; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    r0 = pxsim.control.millis();
    s.now___10260 = (r0);
    s.tmp_0 = jacdac_delayedSend__P2873_mk(s);
    s.tmp_0.arg0 = s.pkt___10248;
    r0 = (s.now___10260 + 20);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 382; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    s.tmp_0 = jacdac_delayedSend__P2873_mk(s);
    s.tmp_0.arg0 = s.pkt___10248;
    r0 = (s.now___10260 + 100);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 383; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Server_sendEvent__P3948.info = {"start":13263,"length":355,"line":383,"column":8,"endLine":392,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"sendEvent","argumentNames":["this","eventCode","data"]}

function jacdac_Server_sendEvent__P3948_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Server_sendEvent__P3948, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  pkt___10248: undefined,
  now___10260: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_delayedSend__P2873(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.dp___10281 = undefined;
    s.i___10286 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(globals.delayedPackets___3975);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_Array__mk();
    globals.delayedPackets___3975 = (r0);
    s.tmp_0 = control_runInParallel__P2293_mk(s);
    s.tmp_0.arg0 = jacdac_processDelayedPackets__P3978;
    s.callLocIdx = 204; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_DelayedPacket__C3976_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_DelayedPacket_constructor__P3977_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg1;
    s.tmp_1.arg2 = s.arg0;
    s.callLocIdx = 205; s.pc = 9; return s.tmp_1;
  case 9:
    r0 = s.retval;
    s.dp___10281 = (s.tmp_0);
    s.i___10286 = (0);
  case 3:
    s.tmp_1 = r0 = s.i___10286;
    r0 = pxsim_Array__length(globals.delayedPackets___3975);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    r0 = pxsim_Array__getAt(globals.delayedPackets___3975, s.i___10286);
    r0 = r0.fields["timestamp"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 > s.arg1);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array_.insertAt(globals.delayedPackets___3975, s.i___10286, s.dp___10281);
    { step = 7; continue; }
  case 4:
  case 5:
    r0 = (s.i___10286 + 1);
    s.i___10286 = (r0);
    { step = 3; continue; }
  case 6:
    r0 = pxsim_Array__push(globals.delayedPackets___3975, s.dp___10281);
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_delayedSend__P2873.info = {"start":252,"length":495,"line":13,"column":4,"endLine":26,"endColumn":5,"fileName":"pxt_modules/jacdac/eventqueue.ts","functionName":"delayedSend","argumentNames":["pkt","timestamp"]}

function jacdac_delayedSend__P2873_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_delayedSend__P2873, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  dp___10281: undefined,
  i___10286: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_DelayedPacket_constructor__P3977(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_DelayedPacket__C3976_VT)) failedCast(r0);
    r0 = (s.arg0).fields["timestamp"] = (s.arg1);
    r0 = (s.arg0).fields["pkt"] = (s.arg2);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_DelayedPacket_constructor__P3977.info = {"start":126,"length":114,"line":7,"column":8,"endLine":10,"endColumn":12,"fileName":"pxt_modules/jacdac/eventqueue.ts","functionName":"inline","argumentNames":["this","timestamp","pkt"]}

function jacdac_DelayedPacket_constructor__P3977_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_DelayedPacket_constructor__P3977, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_processDelayedPackets__P3978(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.now___10315 = undefined;
    s.curr___10319 = undefined;
  case 1:
    r0 = pxsim_numops_toBoolDecr(true);
    if (!r0) { step = 10; continue; }
    s.tmp_0 = pause__P2224_mk(s);
    s.tmp_0.arg0 = 10;
    s.callLocIdx = 206; s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
    r0 = pxsim.control.millis();
    s.now___10315 = (r0);
  case 2:
    r0 = pxsim_Array__getAt(globals.delayedPackets___3975, 0);
    s.curr___10319 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.curr___10319);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = s.tmp_0;
    { step = 4; continue; }
  case 3:
    r0 = s.curr___10319.fields["timestamp"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > s.now___10315);
  case 4:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 5; continue; }
    { step = 7; continue; }
  case 5:
  case 6:
    r0 = pxsim_Array_.removeAt(globals.delayedPackets___3975, 0);
    s.tmp_0 = jacdac_JDPacket__sendCore__P2817_mk(s);
    r0 = s.curr___10319.fields["pkt"];
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 208; s.pc = 13; return s.tmp_0;
  case 13:
    r0 = s.retval;
    { step = 2; continue; }
  case 7:
    r0 = pxsim_Array__length(globals.delayedPackets___3975);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 8; continue; }
    globals.delayedPackets___3975 = (null);
    { step = 11; continue; }
  case 8:
  case 9:
    { step = 1; continue; }
  case 10:
  case 11:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_processDelayedPackets__P3978.info = {"start":753,"length":470,"line":28,"column":4,"endLine":43,"endColumn":5,"fileName":"pxt_modules/jacdac/eventqueue.ts","functionName":"processDelayedPackets","argumentNames":[]}

function jacdac_processDelayedPackets__P3978_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_processDelayedPackets__P3978, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  now___10315: undefined,
  curr___10319: undefined,
} }





function jacdac_Bus_mkEventCmd__P3161(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Bus__C3152_VT)) failedCast(r0);
    r0 = s.arg0.fields["_eventCounter"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = (s.arg0).fields["_eventCounter"] = (0);
  case 1:
  case 2:
    s.tmp_0 = r0 = s.arg0;
    r0 = s.arg0.fields["_eventCounter"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 + 1);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 127);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["_eventCounter"] = (s.tmp_1);
    r0 = (s.arg1 >> 8);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.throwValue("invalid evcode");
  case 3:
  case 4:
    r0 = s.arg0.fields["_eventCounter"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 << 8);
    s.tmp_2 = r0;
    r0 = (32768 | s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 | s.arg1);
    return leave(s, r0)
  default: oops()
} } }
jacdac_Bus_mkEventCmd__P3161.info = {"start":2967,"length":404,"line":96,"column":8,"endLine":106,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"mkEventCmd","argumentNames":["this","evCode"]}

function jacdac_Bus_mkEventCmd__P3161_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Bus_mkEventCmd__P3161, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Server_log__P3959(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.dev___10375 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Server__C3172_VT)) failedCast(r0);
    r0 = s.arg0.fields["supressLog"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 7; continue; }
  case 1:
  case 2:
    r0 = (globals.logPriority___3171 < globals.minPriority___2373);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 3; continue; }
    { step = 7; continue; }
  case 3:
  case 4:
    s.tmp_2 = jacdac_Device_toString__P3230_mk(s);
    s.tmp_3 = jacdac_Bus_selfDevice__P3160_mk(s);
    s.tmp_3.arg0 = globals.bus___3170;
    s.callLocIdx = 400; s.pc = 9; return s.tmp_3;
  case 9:
    r0 = s.retval;
    s.tmp_2.arg0 = r0;
    s.callLocIdx = 401; s.pc = 8; return s.tmp_2;
  case 8:
    r0 = s.retval;
    s.dev___10375 = (r0);
    r0 = s.arg0.fields["instanceName"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = s.arg0.fields["instanceName"];
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 10);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 10:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(".", s.tmp_1);
    { step = 6; continue; }
  case 5:
    r0 = s.arg0.fields["serviceIndex"];
    s.tmp_5 = r0;
    if ((s.tmp_5) && (s.tmp_5).vtable) {
    setupResume(s, 11);
    pxsim_String__stringConv(s.tmp_5);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_5) + ""; }
  case 11:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat("[", s.tmp_4);
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_3, "]");
  case 6:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    s.tmp_7 = console_add__P2374_mk(s);
    s.tmp_7.arg0 = globals.logPriority___3171;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_11 = r0;
    if ((s.dev___10375) && (s.dev___10375).vtable) {
    setupResume(s, 13);
    pxsim_String__stringConv(s.dev___10375);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.dev___10375) + ""; }
  case 13:
    r0 = s.retval;
    s.tmp_12 = r0;
    r0 = pxsim_String__concat(s.tmp_11, s.tmp_12);
    s.tmp_10 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 14);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 14:
    r0 = s.retval;
    s.tmp_13 = r0;
    r0 = pxsim_String__concat(s.tmp_10, s.tmp_13);
    s.tmp_9 = r0;
    r0 = pxsim_String__concat(s.tmp_9, ">");
    s.tmp_8 = r0;
    if ((s.arg1) && (s.arg1).vtable) {
    setupResume(s, 15);
    pxsim_String__stringConv(s.arg1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg1) + ""; }
  case 15:
    r0 = s.retval;
    s.tmp_14 = r0;
    r0 = pxsim_String__concat(s.tmp_8, s.tmp_14);
    s.tmp_7.arg1 = r0;
    s.callLocIdx = 402; s.pc = 12; return s.tmp_7;
  case 12:
    r0 = s.retval;
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Server_log__P3959.info = {"start":18566,"length":527,"line":554,"column":8,"endLine":569,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"log","argumentNames":["this","text"]}

function jacdac_Server_log__P3959_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Server_log__P3959, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  dev___10375: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac__rolemgr_RoleManagerServer_bindingHash__P4022(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.r___10408 = undefined;
    s.n___10409 = undefined;
    s.i___10413 = undefined;
    s.client___10418 = undefined;
    s.buf___10458 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac__rolemgr_RoleManagerServer__C3075_VT)) failedCast(r0);
    r0 = pxsim_String_.mkEmpty();
    s.r___10408 = (r0);
    r0 = globals.bus___3170.fields["allClients"];
    s.tmp_0 = r0;
    r0 = pxsim_Array__length(s.tmp_0);
    s.n___10409 = (r0);
    s.i___10413 = (0);
  case 1:
    r0 = (s.i___10413 < s.n___10409);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 10; continue; }
    r0 = globals.bus___3170.fields["allClients"];
    s.tmp_1 = r0;
    r0 = pxsim_Array__getAt(s.tmp_1, s.i___10413);
    s.client___10418 = (r0);
    r0 = s.client___10418.fields["role"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = pxsim_String_.mkEmpty();
  case 3:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = s.client___10418.fields["broadcast"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (!r0) { step = 4; continue; }
    r0 = s.tmp_2;
    { step = 7; continue; }
  case 4:
    r0 = s.client___10418.fields["device"];
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBool(s.tmp_3);
    if (r0) { step = 5; continue; }
    r0 = s.tmp_3;
    { step = 6; continue; }
  case 5:
    r0 = s.client___10418.fields["device"];
    r0 = r0.fields["deviceId"];
  case 6:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = s.tmp_4;
  case 7:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBool(s.tmp_5);
    if (!r0) { step = 8; continue; }
    r0 = s.tmp_5;
    { step = 9; continue; }
  case 8:
    r0 = pxsim_String_.mkEmpty();
  case 9:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    if ((s.r___10408) && (s.r___10408).vtable) {
    setupResume(s, 11);
    pxsim_String__stringConv(s.r___10408);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___10408) + ""; }
  case 11:
    r0 = s.retval;
    s.tmp_7 = r0;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_14 = r0;
    if ((s.tmp_1) && (s.tmp_1).vtable) {
    setupResume(s, 12);
    pxsim_String__stringConv(s.tmp_1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_1) + ""; }
  case 12:
    r0 = s.retval;
    s.tmp_15 = r0;
    r0 = pxsim_String__concat(s.tmp_14, s.tmp_15);
    s.tmp_13 = r0;
    r0 = pxsim_String__concat(s.tmp_13, ":");
    s.tmp_12 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 13);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 13:
    r0 = s.retval;
    s.tmp_16 = r0;
    r0 = pxsim_String__concat(s.tmp_12, s.tmp_16);
    s.tmp_11 = r0;
    r0 = pxsim_String__concat(s.tmp_11, ":");
    s.tmp_10 = r0;
    r0 = s.client___10418.fields["serviceIndex"];
    s.tmp_18 = r0;
    if ((s.tmp_18) && (s.tmp_18).vtable) {
    setupResume(s, 14);
    pxsim_String__stringConv(s.tmp_18);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_18) + ""; }
  case 14:
    r0 = s.retval;
    s.tmp_17 = r0;
    r0 = pxsim_String__concat(s.tmp_10, s.tmp_17);
    s.tmp_9 = r0;
    if ((s.tmp_9) && (s.tmp_9).vtable) {
    setupResume(s, 15);
    pxsim_String__stringConv(s.tmp_9);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_9) + ""; }
  case 15:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = pxsim_String__concat(s.tmp_7, s.tmp_8);
    s.r___10408 = (r0);
    r0 = (s.i___10413 + 1);
    s.i___10413 = (r0);
    { step = 1; continue; }
  case 10:
    r0 = pxsim.control.createBufferFromUTF8(s.r___10408);
    s.buf___10458 = (r0);
    r0 = pxsim.BufferMethods.hash(s.buf___10458, 32);
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_RoleManagerServer_bindingHash__P4022.info = {"start":8216,"length":510,"line":219,"column":8,"endLine":232,"endColumn":9,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"bindingHash","argumentNames":["this"]}

function jacdac__rolemgr_RoleManagerServer_bindingHash__P4022_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_RoleManagerServer_bindingHash__P4022, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  tmp_15: undefined,
  tmp_16: undefined,
  tmp_17: undefined,
  tmp_18: undefined,
  r___10408: undefined,
  n___10409: undefined,
  i___10413: undefined,
  client___10418: undefined,
  buf___10458: undefined,
  arg0: undefined,
} }





function jacdac__rolemgr_RoleManagerServer_constructor__P3077(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac__rolemgr_RoleManagerServer__C3075_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["listeners"] = (s.tmp_1);
    r0 = (s.arg0).fields["_statusCode"] = (0);
    r0 = (s.arg0).fields["autoBind"] = (true);
    s.tmp_2 = jacdac_Server_constructor__P3175_mk(s);
    s.tmp_2.arg0 = s.arg0;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_2.arg1 = r0;
    s.tmp_2.arg2 = 508264038;
    s.callLocIdx = 235; s.pc = 1; return s.tmp_2;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_RoleManagerServer_constructor__P3077.info = {"start":4656,"length":72,"line":127,"column":8,"endLine":129,"endColumn":9,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"inline","argumentNames":["this"]}

function jacdac__rolemgr_RoleManagerServer_constructor__P3077_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_RoleManagerServer_constructor__P3077, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }





function jacdac_Server_constructor__P3175(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Server__C3172_VT)) failedCast(r0);
    r0 = (s.arg0).fields["instanceName"] = (s.arg1);
    r0 = (s.arg0).fields["serviceClass"] = (s.arg2);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["listeners"] = (s.tmp_1);
    r0 = (s.arg0).fields["_statusCode"] = (0);
    s.tmp_2 = jacdac_EventSource_constructor__P3255_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.callLocIdx = 371; s.pc = 1; return s.tmp_2;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Server_constructor__P3175.info = {"start":11768,"length":153,"line":331,"column":8,"endLine":336,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["this","instanceName","serviceClass"]}

function jacdac_Server_constructor__P3175_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Server_constructor__P3175, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_Server_start__P3182(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Server__C3172_VT)) failedCast(r0);
    r0 = s.arg0.fields["running"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = (s.arg0).fields["running"] = (true);
    s.tmp_0 = jacdac_start__P3248_mk(s);
    s.tmp_0.arg0 = undefined;
    s.callLocIdx = 399; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    s.tmp_0 = r0 = s.arg0;
    r0 = globals.bus___3170.fields["hostServices"];
    s.tmp_2 = r0;
    r0 = pxsim_Array__length(s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["serviceIndex"] = (s.tmp_1);
    r0 = globals.bus___3170.fields["hostServices"];
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.arg0);
    s.tmp_0 = jacdac_Server__C3172_v2_2_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = "start";
    if (!checkSubtype(s.tmp_0.arg0, jacdac_Server__C3172_VT)) failedCast(s.tmp_0.arg0);
    s.tmp_0.fn = s.tmp_0.arg0.vtable.methods.log;
    s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Server_start__P3182.info = {"start":18105,"length":255,"line":536,"column":8,"endLine":543,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"start","argumentNames":["this"]}

function jacdac_Server_start__P3182_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Server_start__P3182, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }





function jacdac_LoggerServer_constructor__P2995(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_LoggerServer__C2993_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["listeners"] = (s.tmp_1);
    r0 = (s.arg0).fields["_statusCode"] = (0);
    r0 = (s.arg0).fields["_lastListenerTime"] = (0);
    r0 = (s.arg0).fields["minPriority"] = (4);
    s.tmp_2 = jacdac_Server_constructor__P3175_mk(s);
    s.tmp_2.arg0 = s.arg0;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_2.arg1 = r0;
    s.tmp_2.arg2 = 316415946;
    s.callLocIdx = 209; s.pc = 1; return s.tmp_2;
  case 1:
    r0 = s.retval;
    r0 = (s.arg0).fields["_lastListenerTime"] = (0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_LoggerServer_constructor__P2995.info = {"start":164,"length":105,"line":5,"column":8,"endLine":8,"endColumn":9,"fileName":"pxt_modules/jacdac/logger-server/server.ts","functionName":"inline","argumentNames":["this"]}

function jacdac_LoggerServer_constructor__P2995_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_LoggerServer_constructor__P2995, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }





function jacdac_LoggerServer_add__P3001(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___10533 = undefined;
    s.unnamed72___U1 = undefined;
    s.unnamed73___U2 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_LoggerServer__C2993_VT)) failedCast(r0);
    r0 = s.arg0.fields["running"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    s.tmp_3 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_3);
  case 2:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBool(s.tmp_4);
    if (!r0) { step = 3; continue; }
    r0 = s.tmp_4;
    { step = 4; continue; }
  case 3:
    r0 = pxsim_String_.length(s.arg2);
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_6);
    s.tmp_5 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_5);
  case 4:
    // jmp value (already in r0)
    s.tmp_7 = r0;
    r0 = pxsim_numops_toBool(s.tmp_7);
    if (!r0) { step = 5; continue; }
    r0 = s.tmp_7;
    { step = 6; continue; }
  case 5:
    r0 = globals.bus___3170.fields["controlServer"];
    s.tmp_13 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_13);
    s.tmp_12 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_12);
    s.tmp_11 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_11);
    s.tmp_10 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_10);
    s.tmp_9 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_9);
    s.tmp_8 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_8);
  case 6:
    // jmp value (already in r0)
    s.tmp_14 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_14);
    if (!r0) { step = 7; continue; }
    { step = 17; continue; }
  case 7:
  case 8:
    r0 = s.arg0.fields["minPriority"];
    s.tmp_16 = r0;
    r0 = (s.arg1 < s.tmp_16);
    s.tmp_15 = r0;
    r0 = pxsim_numops_toBool(s.tmp_15);
    if (!r0) { step = 9; continue; }
    r0 = s.tmp_15;
    { step = 10; continue; }
  case 9:
    r0 = s.arg0.fields["_lastListenerTime"];
    s.tmp_18 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_18);
    s.tmp_17 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_17);
  case 10:
    // jmp value (already in r0)
    s.tmp_19 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_19);
    if (!r0) { step = 11; continue; }
    { step = 17; continue; }
  case 11:
  case 12:
    r0 = pxsim.control.millis();
    s.tmp_22 = r0;
    r0 = s.arg0.fields["_lastListenerTime"];
    s.tmp_23 = r0;
    r0 = (s.tmp_22 - s.tmp_23);
    s.tmp_21 = r0;
    r0 = (s.tmp_21 > 3000);
    s.tmp_20 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_20);
    if (!r0) { step = 13; continue; }
    r0 = (s.arg0).fields["_lastListenerTime"] = (0);
    r0 = (s.arg0).fields["minPriority"] = (4);
    { step = 17; continue; }
  case 13:
  case 14:
    s.buf___10533 = (undefined);
    s.tmp_0 = Buffer_chunkedFromUTF8__P2634_mk(s);
    s.tmp_0.arg0 = s.arg2;
    s.tmp_0.arg1 = 236;
    s.callLocIdx = 215; s.pc = 18; return s.tmp_0;
  case 18:
    r0 = s.retval;
    s.unnamed72___U1 = (r0);
    s.unnamed73___U2 = (0);
  case 15:
    s.tmp_0 = r0 = s.unnamed73___U2;
    r0 = pxsim_Array__length(s.unnamed72___U1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 16; continue; }
    r0 = pxsim_Array__getAt(s.unnamed72___U1, s.unnamed73___U2);
    s.buf___10533 = (r0);
    s.tmp_2 = jacdac_Server_sendReport__P3947_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_3 = jacdac_JDPacket_from__P2782_mk(s);
    r0 = (128 + s.arg1);
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = s.buf___10533;
    s.callLocIdx = 216; s.pc = 20; return s.tmp_3;
  case 20:
    r0 = s.retval;
    s.tmp_2.arg1 = r0;
    s.callLocIdx = 217; s.pc = 19; return s.tmp_2;
  case 19:
    r0 = s.retval;
    r0 = (s.unnamed73___U2 + 1);
    s.unnamed73___U2 = (r0);
    { step = 15; continue; }
  case 16:
    s.unnamed72___U1 = (undefined);
  case 17:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_LoggerServer_add__P3001.info = {"start":1892,"length":833,"line":50,"column":8,"endLine":73,"endColumn":9,"fileName":"pxt_modules/jacdac/logger-server/server.ts","functionName":"add","argumentNames":["this","priority","message"]}

function jacdac_LoggerServer_add__P3001_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_LoggerServer_add__P3001, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  tmp_15: undefined,
  tmp_16: undefined,
  tmp_17: undefined,
  tmp_18: undefined,
  tmp_19: undefined,
  tmp_20: undefined,
  tmp_21: undefined,
  tmp_22: undefined,
  tmp_23: undefined,
  buf___10533: undefined,
  unnamed72___U1: undefined,
  unnamed73___U2: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function Buffer_chunkedFromUTF8__P2634(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.chunks___10548 = undefined;
    s.pos___10550 = undefined;
    s.len___10556 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg1 < 3);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.throwValue("Oops");
  case 1:
  case 2:
    r0 = pxsim_Array__mk();
    s.chunks___10548 = (r0);
    s.pos___10550 = (0);
  case 3:
    s.tmp_1 = r0 = s.pos___10550;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.tmp_3 = Buffer_chunkLen__P3800_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.tmp_3.arg1 = s.pos___10550;
    s.tmp_3.arg2 = s.arg1;
    s.callLocIdx = 67; s.pc = 5; return s.tmp_3;
  case 5:
    r0 = s.retval;
    s.len___10556 = (r0);
    s.tmp_0 = r0 = s.chunks___10548;
    s.tmp_3 = helpers_stringSlice__P2008_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.tmp_3.arg1 = s.pos___10550;
    r0 = (s.pos___10550 + s.len___10556);
    s.tmp_3.arg2 = r0;
    s.callLocIdx = 68; s.pc = 6; return s.tmp_3;
  case 6:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim.control.createBufferFromUTF8(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    r0 = (s.pos___10550 + s.len___10556);
    s.pos___10550 = (r0);
    { step = 3; continue; }
  case 4:
    r0 = s.chunks___10548;
    return leave(s, r0)
  default: oops()
} } }
Buffer_chunkedFromUTF8__P2634.info = {"start":10703,"length":381,"line":379,"column":4,"endLine":390,"endColumn":5,"fileName":"pxt_modules/core/buffer.ts","functionName":"chunkedFromUTF8","argumentNames":["str","maxBytes"]}

function Buffer_chunkedFromUTF8__P2634_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_chunkedFromUTF8__P2634, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  chunks___10548: undefined,
  pos___10550: undefined,
  len___10556: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Buffer_chunkLen__P3800(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.L___10581 = undefined;
    s.R___10585 = undefined;
    s.m___10603 = undefined;
    s.ll___10612 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.Math_.idiv(s.arg2, 3);
    s.L___10581 = (r0);
    s.R___10585 = (s.arg2);
    s.tmp_4 = helpers_stringSlice__P2008_mk(s);
    s.tmp_4.arg0 = s.arg0;
    s.tmp_4.arg1 = s.arg1;
    r0 = (s.arg1 + s.R___10585);
    s.tmp_4.arg2 = r0;
    s.callLocIdx = 65; s.pc = 10; return s.tmp_4;
  case 10:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim.control.createBufferFromUTF8(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 <= s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.R___10585;
    { step = 9; continue; }
  case 1:
  case 2:
  case 3:
    r0 = (s.L___10581 < s.R___10585);
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 8; continue; }
    r0 = (s.L___10581 + s.R___10585);
    s.tmp_6 = r0;
    r0 = (s.tmp_6 >> 1);
    s.m___10603 = (r0);
    r0 = (s.m___10603 == s.L___10581);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    { step = 8; continue; }
  case 4:
  case 5:
    s.tmp_3 = helpers_stringSlice__P2008_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.tmp_3.arg1 = s.arg1;
    r0 = (s.arg1 + s.m___10603);
    s.tmp_3.arg2 = r0;
    s.callLocIdx = 66; s.pc = 11; return s.tmp_3;
  case 11:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim.control.createBufferFromUTF8(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_1);
    s.ll___10612 = (r0);
    r0 = (s.ll___10612 <= s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.L___10581 = (s.m___10603);
    { step = 7; continue; }
  case 6:
    s.R___10585 = (s.m___10603);
  case 7:
    { step = 3; continue; }
  case 8:
    r0 = s.L___10581;
  case 9:
    return leave(s, r0)
  default: oops()
} } }
Buffer_chunkLen__P3800.info = {"start":10201,"length":496,"line":358,"column":4,"endLine":377,"endColumn":5,"fileName":"pxt_modules/core/buffer.ts","functionName":"chunkLen","argumentNames":["s","off","maxlen"]}

function Buffer_chunkLen__P3800_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_chunkLen__P3800, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  L___10581: undefined,
  R___10585: undefined,
  m___10603: undefined,
  ll___10612: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function console_addListener__P2381(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(globals.listeners___3745);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_Array__mk();
    globals.listeners___3745 = (r0);
  case 1:
  case 2:
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = s.tmp_0;
    { step = 4; continue; }
  case 3:
    r0 = pxsim_Array_.indexOf(globals.listeners___3745, s.arg0, undefined);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > -1);
  case 4:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 5; continue; }
    { step = 7; continue; }
  case 5:
  case 6:
    r0 = pxsim_Array__push(globals.listeners___3745, s.arg0);
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
console_addListener__P2381.info = {"start":3264,"length":236,"line":114,"column":4,"endLine":118,"endColumn":5,"fileName":"pxt_modules/core/console.ts","functionName":"addListener","argumentNames":["listener"]}

function console_addListener__P2381_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_addListener__P2381, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function jacdac_enableIdentityLED__P4065(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = null;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = jacdac_log__P4033_mk(s);
    s.tmp_1.arg0 = "enabling identity LED";
    s.callLocIdx = 535; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.tmp_0 = jacdac_EventSource_on__P3256_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.tmp_0.arg1 = globals.IDENTIFY___3151;
    s.tmp_0.arg2 = jacdac_enableIdentityLED_inline__P10657;
    s.callLocIdx = 541; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_enableIdentityLED__P4065.info = {"start":45611,"length":515,"line":1349,"column":4,"endLine":1363,"endColumn":5,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"enableIdentityLED","argumentNames":[]}

function jacdac_enableIdentityLED__P4065_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_enableIdentityLED__P4065, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }





function jacdac_enableIdentityLED_inline__P10657(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_0 = control_runInBackground__P2294_mk(s);
    s.tmp_0.arg0 = jacdac_enableIdentityLED_inline__P10659;
    s.callLocIdx = 540; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_enableIdentityLED_inline__P10657.info = {"start":45758,"length":338,"line":1352,"column":29,"endLine":1360,"endColumn":18,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":[]}

function jacdac_enableIdentityLED_inline__P10657_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_enableIdentityLED_inline__P10657, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function jacdac_enableIdentityLED_inline__P10659(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.i___10660 = undefined;
    s.i___10660 = (0);
  case 1:
    r0 = (s.i___10660 < 7);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = jacdac_setPinByCfg__P4062_mk(s);
    s.tmp_1.arg0 = 13;
    s.tmp_1.arg1 = true;
    s.callLocIdx = 536; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.tmp_0 = pause__P2224_mk(s);
    s.tmp_0.arg0 = 50;
    s.callLocIdx = 537; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    s.tmp_0 = jacdac_setPinByCfg__P4062_mk(s);
    s.tmp_0.arg0 = 13;
    s.tmp_0.arg1 = false;
    s.callLocIdx = 538; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    s.tmp_0 = pause__P2224_mk(s);
    s.tmp_0.arg0 = 150;
    s.callLocIdx = 539; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    r0 = (s.i___10660 + 1);
    s.i___10660 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_enableIdentityLED_inline__P10659.info = {"start":45804,"length":291,"line":1353,"column":40,"endLine":1360,"endColumn":17,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":[]}

function jacdac_enableIdentityLED_inline__P10659_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_enableIdentityLED_inline__P10659, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  i___10660: undefined,
} }





function jacdac_setPinByCfg__P4062(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.pin___10675 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = null;
    s.pin___10675 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.pin___10675);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 5; continue; }
  case 1:
  case 2:
    r0 = 0;
    s.tmp_3 = r0;
    r0 = (s.tmp_3 & 65536);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 3; continue; }
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_4 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_4);
    s.arg1 = (r0);
  case 3:
  case 4:
    s.tmp_0 = if_digitalWrite_2_mk(s);
    s.tmp_0.arg0 = s.pin___10675;
    s.tmp_0.arg1 = s.arg1;
    if (!s.tmp_0.arg0.vtable.iface) {
      setupLambda(s.tmp_0, pxsim_pxtrt.mapGetByString(s.tmp_0.arg0, "digitalWrite"), 2);
      s.callLocIdx = 520; s.pc = 6; return s.tmp_0;
    } else {
      s.tmp_0.fn = s.tmp_0.arg0.vtable.iface["digitalWrite"];
      if (s.tmp_0.fn == null) { setupLambda(s.tmp_0, s.tmp_0.arg0.fields["digitalWrite"], 2); s.callLocIdx = 520; s.pc = 6; return s.tmp_0; }
      else if (s.tmp_0.fn.isGetter) { s.tmp_0.stage2Call = true; s.callLocIdx = 520; s.pc = 6; return s.tmp_0;; }
     else { s.callLocIdx = 520; s.pc = 6; return s.tmp_0; }
    }
  case 6:
    r0 = s.retval;
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_setPinByCfg__P4062.info = {"start":44103,"length":247,"line":1312,"column":4,"endLine":1318,"endColumn":5,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"setPinByCfg","argumentNames":["cfg","val"]}

function jacdac_setPinByCfg__P4062_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_setPinByCfg__P4062, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  pin___10675: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function control_runInBackground__P2294(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.control.inBackground(s.arg0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_runInBackground__P2294.info = {"start":316,"length":87,"line":15,"column":4,"endLine":17,"endColumn":5,"fileName":"pxt_modules/core/control.ts","functionName":"runInBackground","argumentNames":["a"]}

function control_runInBackground__P2294_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_runInBackground__P2294, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_EventSource_on__P3256(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_EventSource__C3254_VT)) failedCast(r0);
    s.tmp_0 = jacdac_EventSource_addListenerInternal__P3936_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = s.arg2;
    s.tmp_0.arg3 = false;
    s.callLocIdx = 580; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = s.arg0;
    return leave(s, r0)
  default: oops()
} } }
jacdac_EventSource_on__P3256.info = {"start":619,"length":144,"line":22,"column":8,"endLine":25,"endColumn":9,"fileName":"pxt_modules/jacdac/eventsource.ts","functionName":"on","argumentNames":["this","eventName","handler"]}

function jacdac_EventSource_on__P3256_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_EventSource_on__P3256, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function pins_pinByCfg__P2733(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = null;
    return leave(s, r0)
  default: oops()
} } }
pins_pinByCfg__P2733.info = {"start":378,"length":82,"line":18,"column":4,"endLine":20,"endColumn":5,"fileName":"pxt_modules/jacdac/mbcompat.ts","functionName":"pinByCfg","argumentNames":["key"]}

function pins_pinByCfg__P2733_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pins_pinByCfg__P2733, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_enablePowerFaultPin__P4064(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.faultpin___10704 = undefined;
    r0 = null;
    s.faultpin___10704 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.faultpin___10704);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = jacdac_log__P4033_mk(s);
    s.tmp_0.arg0 = "enabling power fault pin";
    s.callLocIdx = 523; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.tmp_0 = if_setPull_2_mk(s);
    s.tmp_0.arg0 = s.faultpin___10704;
    s.tmp_0.arg1 = 1;
    if (!s.tmp_0.arg0.vtable.iface) {
      setupLambda(s.tmp_0, pxsim_pxtrt.mapGetByString(s.tmp_0.arg0, "setPull"), 2);
      s.callLocIdx = 524; s.pc = 4; return s.tmp_0;
    } else {
      s.tmp_0.fn = s.tmp_0.arg0.vtable.iface["setPull"];
      if (s.tmp_0.fn == null) { setupLambda(s.tmp_0, s.tmp_0.arg0.fields["setPull"], 2); s.callLocIdx = 524; s.pc = 4; return s.tmp_0; }
      else if (s.tmp_0.fn.isGetter) { s.tmp_0.stage2Call = true; s.callLocIdx = 524; s.pc = 4; return s.tmp_0;; }
     else { s.callLocIdx = 524; s.pc = 4; return s.tmp_0; }
    }
  case 4:
    r0 = s.retval;
    s.tmp_0 = if_digitalRead_1_mk(s);
    s.tmp_0.arg0 = s.faultpin___10704;
    if (!s.tmp_0.arg0.vtable.iface) {
      setupLambda(s.tmp_0, pxsim_pxtrt.mapGetByString(s.tmp_0.arg0, "digitalRead"), 1);
      s.callLocIdx = 525; s.pc = 5; return s.tmp_0;
    } else {
      s.tmp_0.fn = s.tmp_0.arg0.vtable.iface["digitalRead"];
      if (s.tmp_0.fn == null) { setupLambda(s.tmp_0, s.tmp_0.arg0.fields["digitalRead"], 1); s.callLocIdx = 525; s.pc = 5; return s.tmp_0; }
      else if (s.tmp_0.fn.isGetter) { s.tmp_0.stage2Call = true; s.callLocIdx = 525; s.pc = 5; return s.tmp_0;; }
     else { s.callLocIdx = 525; s.pc = 5; return s.tmp_0; }
    }
  case 5:
    r0 = s.retval;
    r0 = pxsim_pxtcore_mkAction(1, jacdac_enablePowerFaultPin_inline__P10718);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.faultpin___10704);
    s.tmp_1 = jacdac_EventSource_on__P3256_mk(s);
    s.tmp_1.arg0 = globals.bus___3170;
    s.tmp_1.arg1 = globals.SELF_ANNOUNCE___3143;
    s.tmp_1.arg2 = s.tmp_0;
    s.callLocIdx = 533; s.pc = 6; return s.tmp_1;
  case 6:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_enablePowerFaultPin__P4064.info = {"start":44565,"length":1040,"line":1326,"column":4,"endLine":1347,"endColumn":5,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"enablePowerFaultPin","argumentNames":[]}

function jacdac_enablePowerFaultPin__P4064_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_enablePowerFaultPin__P4064, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  faultpin___10704: undefined,
} }





function jacdac_enablePowerFaultPin_inline__P10718(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_2 = if_digitalRead_1_mk(s);
    s.tmp_2.arg0 = s.caps[0];
    if (!s.tmp_2.arg0.vtable.iface) {
      setupLambda(s.tmp_2, pxsim_pxtrt.mapGetByString(s.tmp_2.arg0, "digitalRead"), 1);
      s.callLocIdx = 526; s.pc = 3; return s.tmp_2;
    } else {
      s.tmp_2.fn = s.tmp_2.arg0.vtable.iface["digitalRead"];
      if (s.tmp_2.fn == null) { setupLambda(s.tmp_2, s.tmp_2.arg0.fields["digitalRead"], 1); s.callLocIdx = 526; s.pc = 3; return s.tmp_2; }
      else if (s.tmp_2.fn.isGetter) { s.tmp_2.stage2Call = true; s.callLocIdx = 526; s.pc = 3; return s.tmp_2;; }
     else { s.callLocIdx = 526; s.pc = 3; return s.tmp_2; }
    }
  case 3:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == false);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_3 = control_runInParallel__P2293_mk(s);
    s.tmp_3.arg0 = jacdac_enablePowerFaultPin_inline__P10724;
    s.callLocIdx = 532; s.pc = 4; return s.tmp_3;
  case 4:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_enablePowerFaultPin_inline__P10718.info = {"start":44995,"length":593,"line":1334,"column":41,"endLine":1345,"endColumn":13,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":[]}

function jacdac_enablePowerFaultPin_inline__P10718_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_enablePowerFaultPin_inline__P10718, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
} }





function jacdac_enablePowerFaultPin_inline__P10724(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim.control.dmesg("jacdac power overload; restarting power");
    s.tmp_0 = jacdac_enablePower__P4063_mk(s);
    s.tmp_0.arg0 = false;
    s.callLocIdx = 527; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = jacdac_setPinByCfg__P4062_mk(s);
    s.tmp_0.arg0 = 1103;
    s.tmp_0.arg1 = true;
    s.callLocIdx = 528; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    s.tmp_0 = pause__P2224_mk(s);
    s.tmp_0.arg0 = 200;
    s.callLocIdx = 529; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.tmp_0 = jacdac_setPinByCfg__P4062_mk(s);
    s.tmp_0.arg0 = 1103;
    s.tmp_0.arg1 = false;
    s.callLocIdx = 530; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    s.tmp_0 = jacdac_enablePower__P4063_mk(s);
    s.tmp_0.arg0 = true;
    s.callLocIdx = 531; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_enablePowerFaultPin_inline__P10724.info = {"start":45100,"length":455,"line":1336,"column":42,"endLine":1343,"endColumn":21,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":[]}

function jacdac_enablePowerFaultPin_inline__P10724_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_enablePowerFaultPin_inline__P10724, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function jacdac_enablePower__P4063(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = jacdac_setPinByCfg__P4062_mk(s);
    s.tmp_0.arg0 = 1104;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 521; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_enablePower__P4063.info = {"start":44356,"length":203,"line":1320,"column":4,"endLine":1324,"endColumn":5,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"enablePower","argumentNames":["enabled"]}

function jacdac_enablePower__P4063_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_enablePower__P4063, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_Bus_queueAnnounce__P3163(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.ids___10739 = undefined;
    s.buf___10773 = undefined;
    s.i___10779 = undefined;
    s.cl___10805 = undefined;
    s.unnamed88___U4 = undefined;
    s.unnamed89___U5 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Bus__C3152_VT)) failedCast(r0);
    s.tmp_0 = helpers_arrayMap__P1995_mk(s);
    r0 = s.arg0.fields["hostServices"];
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = ids_inline__P10741;
    s.callLocIdx = 307; s.pc = 15; return s.tmp_0;
  case 15:
    r0 = s.retval;
    s.ids___10739 = (r0);
    r0 = s.arg0.fields["restartCounter"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 < 15);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_2 = r0 = s.arg0;
    r0 = s.tmp_2.fields["restartCounter"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 + 1);
    s.tmp_3 = r0;
    r0 = (s.tmp_2).fields["restartCounter"] = (s.tmp_3);
  case 1:
  case 2:
    r0 = globals.roleManagerServer___3083.fields["running"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = 2048;
    { step = 4; continue; }
  case 3:
    r0 = 0;
  case 4:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    s.tmp_2 = r0 = s.ids___10739;
    r0 = s.arg0.fields["restartCounter"];
    s.tmp_7 = r0;
    r0 = (s.tmp_7 | s.tmp_1);
    s.tmp_6 = r0;
    r0 = (s.tmp_6 | 256);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 | 512);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 | 1024);
    s.tmp_3 = r0;
    r0 = pxsim_Array_.setAt(s.tmp_2, 0, s.tmp_3);
    r0 = pxsim_Array__length(s.ids___10739);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 * 4);
    s.tmp_0 = r0;
    r0 = pxsim.control.createBuffer(s.tmp_0);
    s.buf___10773 = (r0);
    s.i___10779 = (0);
  case 5:
    s.tmp_1 = r0 = s.i___10779;
    r0 = pxsim_Array__length(s.ids___10739);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_3 = r0 = s.buf___10773;
    r0 = (s.i___10779 * 4);
    s.tmp_4 = r0;
    r0 = pxsim_Array__getAt(s.ids___10739, s.i___10779);
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_3, 11, s.tmp_4, s.tmp_5);
    r0 = (s.i___10779 + 1);
    s.i___10779 = (r0);
    { step = 5; continue; }
  case 6:
    s.tmp_0 = jacdac_JDPacket__sendReport__P2818_mk(s);
    s.tmp_1 = jacdac_JDPacket_from__P2782_mk(s);
    s.tmp_1.arg0 = 0;
    s.tmp_1.arg1 = s.buf___10773;
    s.callLocIdx = 308; s.pc = 17; return s.tmp_1;
  case 17:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    s.tmp_2 = jacdac_Bus_selfDevice__P3160_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.callLocIdx = 309; s.pc = 18; return s.tmp_2;
  case 18:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 310; s.pc = 16; return s.tmp_0;
  case 16:
    r0 = s.retval;
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.SELF_ANNOUNCE___3143;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 311; s.pc = 19; return s.tmp_0;
  case 19:
    r0 = s.retval;
    s.cl___10805 = (undefined);
    r0 = s.arg0.fields["allClients"];
    s.unnamed88___U4 = (r0);
    s.unnamed89___U5 = (0);
  case 7:
    s.tmp_0 = r0 = s.unnamed89___U5;
    r0 = pxsim_Array__length(s.unnamed88___U4);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 8; continue; }
    r0 = pxsim_Array__getAt(s.unnamed88___U4, s.unnamed89___U5);
    s.cl___10805 = (r0);
    s.tmp_2 = jacdac_Client__C3193_v1_1_mk(s);
    s.tmp_2.arg0 = s.cl___10805;
    if (!checkSubtype(s.tmp_2.arg0, jacdac_Client__C3193_VT)) failedCast(s.tmp_2.arg0);
    s.tmp_2.fn = s.tmp_2.arg0.vtable.methods.announceCallback;
    s.pc = 20; return s.tmp_2;
  case 20:
    r0 = s.retval;
    r0 = (s.unnamed89___U5 + 1);
    s.unnamed89___U5 = (r0);
    { step = 7; continue; }
  case 8:
    s.unnamed88___U4 = (undefined);
    s.tmp_0 = jacdac_Bus_gcDevices__P4029_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 312; s.pc = 21; return s.tmp_0;
  case 21:
    r0 = s.retval;
    r0 = s.arg0.fields["resetIn"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = s.arg0.fields["resetIn"];
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_2);
    s.tmp_3 = jacdac_JDPacket_sendAsMultiCommand__P2821_mk(s);
    s.tmp_4 = jacdac_JDPacket_from__P2782_mk(s);
    s.tmp_4.arg0 = 8320;
    s.tmp_5 = jacdac_jdpack__P2828_mk(s);
    s.tmp_5.arg0 = "u32";
    s.tmp_5.arg1 = s.tmp_1;
    s.callLocIdx = 313; s.pc = 24; return s.tmp_5;
  case 24:
    r0 = s.retval;
    s.tmp_4.arg1 = r0;
    s.callLocIdx = 314; s.pc = 23; return s.tmp_4;
  case 23:
    r0 = s.retval;
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = 0;
    s.callLocIdx = 315; s.pc = 22; return s.tmp_3;
  case 22:
    r0 = s.retval;
  case 9:
  case 10:
    s.tmp_0 = jacdac__rolemgr_RoleManagerServer_checkProxy__P3080_mk(s);
    s.tmp_0.arg0 = globals.roleManagerServer___3083;
    s.callLocIdx = 316; s.pc = 25; return s.tmp_0;
  case 25:
    r0 = s.retval;
    r0 = globals.roleManagerServer___3083.fields["autoBind"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    s.tmp_1 = r0 = s.arg0;
    r0 = s.tmp_1.fields["autoBindCnt"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 + 1);
    s.tmp_2 = r0;
    r0 = (s.tmp_1).fields["autoBindCnt"] = (s.tmp_2);
    r0 = s.arg0.fields["autoBindCnt"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >= 2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    r0 = (s.arg0).fields["autoBindCnt"] = (0);
    s.tmp_0 = jacdac__rolemgr_RoleManagerServer_bindRoles__P3081_mk(s);
    s.tmp_0.arg0 = globals.roleManagerServer___3083;
    s.callLocIdx = 317; s.pc = 26; return s.tmp_0;
  case 26:
    r0 = s.retval;
  case 11:
  case 12:
  case 13:
  case 14:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Bus_queueAnnounce__P3163.info = {"start":3697,"length":1723,"line":116,"column":8,"endLine":158,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"queueAnnounce","argumentNames":["this"]}

function jacdac_Bus_queueAnnounce__P3163_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Bus_queueAnnounce__P3163, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  ids___10739: undefined,
  buf___10773: undefined,
  i___10779: undefined,
  cl___10805: undefined,
  unnamed88___U4: undefined,
  unnamed89___U5: undefined,
  arg0: undefined,
} }





function ids_inline__P10741(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["running"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0.fields["serviceClass"];
    { step = 2; continue; }
  case 1:
    r0 = -1;
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = s.tmp_1;
    return leave(s, r0)
  default: oops()
} } }
ids_inline__P10741.info = {"start":3761,"length":52,"line":117,"column":46,"endLine":118,"endColumn":47,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["h"]}

function ids_inline__P10741_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: ids_inline__P10741, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac__rolemgr_RoleManagerServer_checkProxy__P3080(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.now___10843 = undefined;
    s.self___10846 = undefined;
    s.devs___10849 = undefined;
    s.device___10883 = undefined;
    s.unnamed76___U4 = undefined;
    s.unnamed77___U5 = undefined;
    s.uptime___10885 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac__rolemgr_RoleManagerServer__C3075_VT)) failedCast(r0);
    r0 = s.arg0.fields["running"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 11; continue; }
  case 1:
  case 2:
    r0 = pxsim.control.micros();
    s.now___10843 = (r0);
    s.tmp_0 = jacdac_Bus_selfDevice__P3160_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.callLocIdx = 267; s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
    s.self___10846 = (r0);
    r0 = pxsim_pxtcore_mkAction(1, devs_inline__P10851);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.self___10846);
    s.tmp_1 = helpers_arrayFilter__P1999_mk(s);
    r0 = globals.bus___3170.fields["devices"];
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 269; s.pc = 13; return s.tmp_1;
  case 13:
    r0 = s.retval;
    s.devs___10849 = (r0);
    r0 = pxsim_Array__length(s.devs___10849);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    { step = 11; continue; }
  case 3:
  case 4:
    s.tmp_3 = jacdac_Server__C3172_v2_2_mk(s);
    s.tmp_3.arg0 = s.arg0;
    r0 = (s.now___10843 / 100000);
    s.tmp_8 = r0;
    r0 = (s.tmp_8 | 0);
    s.tmp_7 = r0;
    r0 = (s.tmp_7 / 10);
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 15);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 15:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat("check proxy self ", s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, "s");
    s.tmp_3.arg1 = r0;
    if (!checkSubtype(s.tmp_3.arg0, jacdac_Server__C3172_VT)) failedCast(s.tmp_3.arg0);
    s.tmp_3.fn = s.tmp_3.arg0.vtable.methods.log;
    s.pc = 14; return s.tmp_3;
  case 14:
    r0 = s.retval;
    s.device___10883 = (undefined);
    s.unnamed76___U4 = (s.devs___10849);
    s.unnamed77___U5 = (0);
  case 5:
    s.tmp_0 = r0 = s.unnamed77___U5;
    r0 = pxsim_Array__length(s.unnamed76___U4);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 10; continue; }
    r0 = pxsim_Array__getAt(s.unnamed76___U4, s.unnamed77___U5);
    s.device___10883 = (r0);
    s.tmp_2 = jacdac_Device_uptime__P3235_mk(s);
    s.tmp_2.arg0 = s.device___10883;
    s.callLocIdx = 270; s.pc = 16; return s.tmp_2;
  case 16:
    r0 = s.retval;
    s.uptime___10885 = (r0);
    r0 = (s.uptime___10885 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_1 = jacdac_Server__C3172_v2_2_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_5 = jacdac_Device_shortId__P3229_mk(s);
    s.tmp_5.arg0 = s.device___10883;
    s.callLocIdx = 271; s.pc = 18; return s.tmp_5;
  case 18:
    r0 = s.retval;
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 19);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 19:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat("check proxy ", s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_2, ": no uptime");
    s.tmp_1.arg1 = r0;
    if (!checkSubtype(s.tmp_1.arg0, jacdac_Server__C3172_VT)) failedCast(s.tmp_1.arg0);
    s.tmp_1.fn = s.tmp_1.arg0.vtable.methods.log;
    s.pc = 17; return s.tmp_1;
  case 17:
    r0 = s.retval;
    s.tmp_0 = jacdac_Device_sendCtrlCommand__P3241_mk(s);
    s.tmp_0.arg0 = s.device___10883;
    s.tmp_0.arg1 = 4486;
    s.tmp_0.arg2 = null;
    s.callLocIdx = 272; s.pc = 20; return s.tmp_0;
  case 20:
    r0 = s.retval;
    { step = 9; continue; }
  case 6:
    s.tmp_0 = jacdac_Server__C3172_v2_2_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_6 = jacdac_Device_shortId__P3229_mk(s);
    s.tmp_6.arg0 = s.device___10883;
    s.callLocIdx = 273; s.pc = 22; return s.tmp_6;
  case 22:
    r0 = s.retval;
    s.tmp_5 = r0;
    if ((s.tmp_5) && (s.tmp_5).vtable) {
    setupResume(s, 23);
    pxsim_String__stringConv(s.tmp_5);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_5) + ""; }
  case 23:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat("check proxy ", s.tmp_4);
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_3, ": ");
    s.tmp_2 = r0;
    r0 = (s.uptime___10885 / 100000);
    s.tmp_10 = r0;
    r0 = (s.tmp_10 | 0);
    s.tmp_9 = r0;
    r0 = (s.tmp_9 / 10);
    s.tmp_8 = r0;
    if ((s.tmp_8) && (s.tmp_8).vtable) {
    setupResume(s, 24);
    pxsim_String__stringConv(s.tmp_8);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_8) + ""; }
  case 24:
    r0 = s.retval;
    s.tmp_7 = r0;
    r0 = pxsim_String__concat(s.tmp_2, s.tmp_7);
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_1, "s");
    s.tmp_0.arg1 = r0;
    if (!checkSubtype(s.tmp_0.arg0, jacdac_Server__C3172_VT)) failedCast(s.tmp_0.arg0);
    s.tmp_0.fn = s.tmp_0.arg0.vtable.methods.log;
    s.pc = 21; return s.tmp_0;
  case 21:
    r0 = s.retval;
    r0 = (s.now___10843 > s.uptime___10885);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    s.tmp_1 = jacdac__rolemgr_RoleManagerServer_resetToProxy__P3079_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.callLocIdx = 274; s.pc = 25; return s.tmp_1;
  case 25:
    r0 = s.retval;
  case 7:
  case 8:
  case 9:
    r0 = (s.unnamed77___U5 + 1);
    s.unnamed77___U5 = (r0);
    { step = 5; continue; }
  case 10:
    s.unnamed76___U4 = (undefined);
  case 11:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_RoleManagerServer_checkProxy__P3080.info = {"start":8904,"length":1112,"line":240,"column":8,"endLine":268,"endColumn":9,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"checkProxy","argumentNames":["this"]}

function jacdac__rolemgr_RoleManagerServer_checkProxy__P3080_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_RoleManagerServer_checkProxy__P3080, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  now___10843: undefined,
  self___10846: undefined,
  devs___10849: undefined,
  device___10883: undefined,
  unnamed76___U4: undefined,
  unnamed77___U5: undefined,
  uptime___10885: undefined,
  arg0: undefined,
} }





function devs_inline__P10851(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 !== s.caps[0]);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = s.arg0.fields["services"];
    s.tmp_6 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_6, 4, 0);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 & 2048);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    s.tmp_3 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
  case 2:
    // jmp value (already in r0)
    s.tmp_7 = r0;
    r0 = s.tmp_7;
    return leave(s, r0)
  default: oops()
} } }
devs_inline__P10851.info = {"start":9113,"length":110,"line":245,"column":16,"endLine":247,"endColumn":71,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"inline","argumentNames":["d"]}

function devs_inline__P10851_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: devs_inline__P10851, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  arg0: undefined,
} }





function jacdac__rolemgr_RoleManagerServer_resetToProxy__P3079(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac__rolemgr_RoleManagerServer__C3075_VT)) failedCast(r0);
    s.tmp_0 = jacdac_Server__C3172_v2_2_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = "reset into proxy mode";
    if (!checkSubtype(s.tmp_0.arg0, jacdac_Server__C3172_VT)) failedCast(s.tmp_0.arg0);
    s.tmp_0.fn = s.tmp_0.arg0.vtable.methods.log;
    s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = settings_writeNumber__P2703_mk(s);
    s.tmp_0.arg0 = globals.JACDAC_PROXY_SETTING___3247;
    s.tmp_0.arg1 = 1;
    s.callLocIdx = 266; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    setupResume(s, 3);
    pxsim.control.reset();
    checkResumeConsumed();
    return;
  case 3:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_RoleManagerServer_resetToProxy__P3079.info = {"start":8736,"length":158,"line":234,"column":8,"endLine":238,"endColumn":9,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"resetToProxy","argumentNames":["this"]}

function jacdac__rolemgr_RoleManagerServer_resetToProxy__P3079_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_RoleManagerServer_resetToProxy__P3079, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function settings_writeNumber__P2703(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.arg1);
    s.tmp_1 = settings_writeBuffer__P2701_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_2 = msgpack_packNumberArray__P2609_mk(s);
    s.tmp_2.arg0 = s.tmp_0;
    s.callLocIdx = 80; s.pc = 2; return s.tmp_2;
  case 2:
    r0 = s.retval;
    s.tmp_1.arg1 = r0;
    s.callLocIdx = 81; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_writeNumber__P2703.info = {"start":2087,"length":122,"line":82,"column":4,"endLine":84,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"writeNumber","argumentNames":["key","value"]}

function settings_writeNumber__P2703_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_writeNumber__P2703, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function msgpack_packNumberArray__P2609(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.off___10941 = undefined;
    s.n___10943 = undefined;
    s.unnamed54___U2 = undefined;
    s.unnamed55___U3 = undefined;
    s.buf___10953 = undefined;
    s.n___10959 = undefined;
    s.unnamed56___U6 = undefined;
    s.unnamed57___U7 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.off___10941 = (0);
    s.n___10943 = (undefined);
    s.unnamed54___U2 = (s.arg0);
    s.unnamed55___U3 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed55___U3;
    r0 = pxsim_Array__length(s.unnamed54___U2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__getAt(s.unnamed54___U2, s.unnamed55___U3);
    s.n___10943 = (r0);
    s.tmp_2 = r0 = s.off___10941;
    s.tmp_4 = msgpack_packNumberCore__P3797_mk(s);
    s.tmp_4.arg0 = null;
    s.tmp_4.arg1 = s.off___10941;
    s.tmp_4.arg2 = s.n___10943;
    s.callLocIdx = 62; s.pc = 5; return s.tmp_4;
  case 5:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (s.tmp_2 + s.tmp_3);
    s.off___10941 = (r0);
    r0 = (s.unnamed55___U3 + 1);
    s.unnamed55___U3 = (r0);
    { step = 1; continue; }
  case 2:
    s.unnamed54___U2 = (undefined);
    r0 = pxsim.control.createBuffer(s.off___10941);
    s.buf___10953 = (r0);
    s.off___10941 = (0);
    s.n___10959 = (undefined);
    s.unnamed56___U6 = (s.arg0);
    s.unnamed57___U7 = (0);
  case 3:
    s.tmp_0 = r0 = s.unnamed57___U7;
    r0 = pxsim_Array__length(s.unnamed56___U6);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.unnamed56___U6, s.unnamed57___U7);
    s.n___10959 = (r0);
    s.tmp_2 = r0 = s.off___10941;
    s.tmp_4 = msgpack_packNumberCore__P3797_mk(s);
    s.tmp_4.arg0 = s.buf___10953;
    s.tmp_4.arg1 = s.off___10941;
    s.tmp_4.arg2 = s.n___10959;
    s.callLocIdx = 63; s.pc = 6; return s.tmp_4;
  case 6:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (s.tmp_2 + s.tmp_3);
    s.off___10941 = (r0);
    r0 = (s.unnamed57___U7 + 1);
    s.unnamed57___U7 = (r0);
    { step = 3; continue; }
  case 4:
    s.unnamed56___U6 = (undefined);
    r0 = s.buf___10953;
    return leave(s, r0)
  default: oops()
} } }
msgpack_packNumberArray__P2609.info = {"start":3427,"length":330,"line":117,"column":4,"endLine":128,"endColumn":5,"fileName":"pxt_modules/core/buffer.ts","functionName":"packNumberArray","argumentNames":["nums"]}

function msgpack_packNumberArray__P2609_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_packNumberArray__P2609, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  off___10941: undefined,
  n___10943: undefined,
  unnamed54___U2: undefined,
  unnamed55___U3: undefined,
  buf___10953: undefined,
  n___10959: undefined,
  unnamed56___U6: undefined,
  unnamed57___U7: undefined,
  arg0: undefined,
} }





function msgpack_packNumberCore__P3797(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tag___10973 = undefined;
    s.fmt___11016 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    s.tag___10973 = (203);
    s.tmp_1 = r0 = s.arg2;
    r0 = (s.arg2 << 0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 == s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    s.tmp_3 = r0 = s.arg2;
    r0 = (s.arg2 >>> 0);
    s.tmp_4 = r0;
    r0 = (s.tmp_3 == s.tmp_4);
  case 2:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 19; continue; }
    r0 = (-31 <= s.arg2);
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBool(s.tmp_6);
    if (r0) { step = 3; continue; }
    r0 = s.tmp_6;
    { step = 4; continue; }
  case 3:
    r0 = (s.arg2 <= 127);
  case 4:
    // jmp value (already in r0)
    s.tmp_7 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_7);
    if (!r0) { step = 7; continue; }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    if (!r0) { step = 5; continue; }
    r0 = pxsim.BufferMethods.setByte(s.arg0, s.arg1, s.arg2);
  case 5:
  case 6:
    r0 = 1;
    { step = 23; continue; }
    { step = 18; continue; }
  case 7:
    r0 = (0 <= s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 12; continue; }
    r0 = (s.arg2 <= 255);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 8; continue; }
    s.tag___10973 = (204);
    { step = 11; continue; }
  case 8:
    r0 = (s.arg2 <= 65535);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    s.tag___10973 = (205);
    { step = 10; continue; }
  case 9:
    s.tag___10973 = (206);
  case 10:
  case 11:
    { step = 17; continue; }
  case 12:
    r0 = (-127 <= s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    s.tag___10973 = (208);
    { step = 16; continue; }
  case 13:
    r0 = (-32767 <= s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    s.tag___10973 = (209);
    { step = 15; continue; }
  case 14:
    s.tag___10973 = (210);
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
    s.tmp_0 = msgpack_tagFormat__P3796_mk(s);
    s.tmp_0.arg0 = s.tag___10973;
    s.callLocIdx = 58; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.fmt___11016 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    if (!r0) { step = 21; continue; }
    r0 = pxsim.BufferMethods.setByte(s.arg0, s.arg1, s.tag___10973);
    s.tmp_0 = r0 = s.arg0;
    s.tmp_1 = r0 = s.fmt___11016;
    r0 = (s.arg1 + 1);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, s.tmp_1, s.tmp_2, s.arg2);
  case 21:
  case 22:
    s.tmp_1 = pins_sizeOf__P2600_mk(s);
    s.tmp_1.arg0 = s.fmt___11016;
    s.callLocIdx = 59; s.pc = 25; return s.tmp_1;
  case 25:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 1);
  case 23:
    return leave(s, r0)
  default: oops()
} } }
msgpack_packNumberCore__P3797.info = {"start":1632,"length":951,"line":56,"column":4,"endLine":86,"endColumn":5,"fileName":"pxt_modules/core/buffer.ts","functionName":"packNumberCore","argumentNames":["buf","offset","num"]}

function msgpack_packNumberCore__P3797_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_packNumberCore__P3797, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tag___10973: undefined,
  fmt___11016: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function pins_sizeOf__P2600(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = Buffer_sizeOfNumberFormat__P2640_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 57; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
pins_sizeOf__P2600.info = {"start":42,"length":101,"line":2,"column":4,"endLine":4,"endColumn":5,"fileName":"pxt_modules/core/buffer.ts","functionName":"sizeOf","argumentNames":["format"]}

function pins_sizeOf__P2600_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pins_sizeOf__P2600, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function msgpack_tagFormat__P3796(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq(203, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(204, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(205, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(206, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(208, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq(209, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq(210, s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = s.tmp_0;
    { step = 8; continue; }
  case 1:
    r0 = 16;
    { step = 9; continue; }
  case 2:
    r0 = 7;
    { step = 9; continue; }
  case 3:
    r0 = 9;
    { step = 9; continue; }
  case 4:
    r0 = 12;
    { step = 9; continue; }
  case 5:
    r0 = 6;
    { step = 9; continue; }
  case 6:
    r0 = 8;
    { step = 9; continue; }
  case 7:
    r0 = 10;
    { step = 9; continue; }
  case 8:
    r0 = null;
    { step = 9; continue; }
    r0 = undefined;
  case 9:
    return leave(s, r0)
  default: oops()
} } }
msgpack_tagFormat__P3796.info = {"start":1145,"length":481,"line":42,"column":4,"endLine":54,"endColumn":5,"fileName":"pxt_modules/core/buffer.ts","functionName":"tagFormat","argumentNames":["tag"]}

function msgpack_tagFormat__P3796_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_tagFormat__P3796, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_Device_uptime__P3235(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.q___11054 = undefined;
    s.up___11060 = undefined;
    s.offset___11066 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C3220_VT)) failedCast(r0);
    s.tmp_0 = jacdac_Device_query__P3234_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = 390;
    s.tmp_0.arg2 = 60000;
    s.tmp_0.arg3 = 0;
    s.callLocIdx = 461; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    s.tmp_0 = jacdac_Device_lookupQuery__P4045_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = 390;
    s.tmp_0.arg2 = 0;
    s.callLocIdx = 462; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    s.q___11054 = (r0);
    r0 = s.q___11054.fields["value"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.q___11054.fields["value"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 11, 0);
    s.up___11060 = (r0);
    r0 = pxsim.control.millis();
    s.tmp_1 = r0;
    r0 = s.q___11054.fields["lastReport"];
    s.tmp_2 = r0;
    r0 = (s.tmp_1 - s.tmp_2);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 * 1000);
    s.offset___11066 = (r0);
    r0 = (s.up___11060 + s.offset___11066);
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = undefined;
  case 3:
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_Device_uptime__P3235.info = {"start":36559,"length":415,"line":1108,"column":8,"endLine":1118,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"uptime","argumentNames":["this"]}
jacdac_Device_uptime__P3235.isGetter = true;

function jacdac_Device_uptime__P3235_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_uptime__P3235, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  q___11054: undefined,
  up___11060: undefined,
  offset___11066: undefined,
  arg0: undefined,
} }





function jacdac_Device_query__P3234(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.q___11082 = undefined;
    s.now___11097 = undefined;
    s.constreg___11100 = undefined;
    s.pkt___11136 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C3220_VT)) failedCast(r0);
    s.tmp_0 = jacdac_Device_lookupQuery__P4045_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = s.arg3;
    s.callLocIdx = 455; s.pc = 15; return s.tmp_0;
  case 15:
    r0 = s.retval;
    s.q___11082 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.q___11082);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_RegQuery__C4042_VT);
    s.tmp_2 = r0;
    s.tmp_3 = jacdac_RegQuery_constructor__P4043_mk(s);
    s.tmp_3.arg0 = s.tmp_2;
    s.tmp_3.arg1 = s.arg1;
    s.tmp_3.arg2 = s.arg3;
    s.callLocIdx = 456; s.pc = 16; return s.tmp_3;
  case 16:
    r0 = s.retval;
    s.q___11082 = (s.tmp_2);
    r0 = s.arg0.fields["queries"];
    s.tmp_4 = r0;
    r0 = pxsim_Array__push(s.tmp_4, s.tmp_2);
  case 1:
  case 2:
    r0 = pxsim.control.millis();
    s.now___11097 = (r0);
    s.tmp_0 = jacdac_isConstRegister__P2765_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.callLocIdx = 457; s.pc = 17; return s.tmp_0;
  case 17:
    r0 = s.retval;
    s.constreg___11100 = (r0);
    r0 = s.q___11082.fields["lastQuery"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = s.tmp_0;
    { step = 6; continue; }
  case 3:
    r0 = s.q___11082.fields["value"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 === undefined);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBool(s.tmp_3);
    if (r0) { step = 4; continue; }
    r0 = s.tmp_3;
    { step = 5; continue; }
  case 4:
    r0 = s.q___11082.fields["lastQuery"];
    s.tmp_6 = r0;
    r0 = (s.now___11097 - s.tmp_6);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 > 500);
  case 5:
    // jmp value (already in r0)
    s.tmp_7 = r0;
    r0 = s.tmp_7;
  case 6:
    // jmp value (already in r0)
    s.tmp_8 = r0;
    r0 = pxsim_numops_toBool(s.tmp_8);
    if (!r0) { step = 7; continue; }
    r0 = s.tmp_8;
    { step = 12; continue; }
  case 7:
    r0 = pxsim_numops_toBoolDecr(s.constreg___11100);
    s.tmp_10 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_10);
    s.tmp_9 = r0;
    r0 = pxsim_numops_toBool(s.tmp_9);
    if (r0) { step = 8; continue; }
    r0 = s.tmp_9;
    { step = 9; continue; }
  case 8:
    r0 = (s.arg2 != null);
  case 9:
    // jmp value (already in r0)
    s.tmp_11 = r0;
    r0 = pxsim_numops_toBool(s.tmp_11);
    if (r0) { step = 10; continue; }
    r0 = s.tmp_11;
    { step = 11; continue; }
  case 10:
    r0 = s.q___11082.fields["lastQuery"];
    s.tmp_13 = r0;
    r0 = (s.now___11097 - s.tmp_13);
    s.tmp_12 = r0;
    r0 = (s.tmp_12 > s.arg2);
  case 11:
    // jmp value (already in r0)
    s.tmp_14 = r0;
    r0 = s.tmp_14;
  case 12:
    // jmp value (already in r0)
    s.tmp_15 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_15);
    if (!r0) { step = 13; continue; }
    r0 = (s.q___11082).fields["lastQuery"] = (s.now___11097);
    s.tmp_0 = jacdac_JDPacket_onlyHeader__P2783_mk(s);
    r0 = (4096 | s.arg1);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 458; s.pc = 18; return s.tmp_0;
  case 18:
    r0 = s.retval;
    s.pkt___11136 = (r0);
    s.tmp_0 = jacdac_JDPacket_serviceIndex__P2794_mk(s);
    s.tmp_0.arg0 = s.pkt___11136;
    s.tmp_0.arg1 = s.arg3;
    s.callLocIdx = 459; s.pc = 19; return s.tmp_0;
  case 19:
    r0 = s.retval;
    s.tmp_0 = jacdac_JDPacket__sendCmd__P2819_mk(s);
    s.tmp_0.arg0 = s.pkt___11136;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 460; s.pc = 20; return s.tmp_0;
  case 20:
    r0 = s.retval;
  case 13:
  case 14:
    r0 = s.q___11082.fields["value"];
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device_query__P3234.info = {"start":35630,"length":919,"line":1084,"column":8,"endLine":1106,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"query","argumentNames":["this","reg","refreshRate","servIdx"]}

function jacdac_Device_query__P3234_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_query__P3234, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  tmp_15: undefined,
  q___11082: undefined,
  now___11097: undefined,
  constreg___11100: undefined,
  pkt___11136: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }





function jacdac_RegQuery_constructor__P4043(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_RegQuery__C4042_VT)) failedCast(r0);
    r0 = (s.arg0).fields["reg"] = (s.arg1);
    r0 = (s.arg0).fields["serviceIdx"] = (s.arg2);
    r0 = (s.arg0).fields["lastQuery"] = (0);
    r0 = (s.arg0).fields["lastReport"] = (0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_RegQuery_constructor__P4043.info = {"start":33540,"length":61,"line":1010,"column":8,"endLine":1010,"endColumn":69,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["this","reg","serviceIdx"]}

function jacdac_RegQuery_constructor__P4043_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_RegQuery_constructor__P4043, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_Bus_gcDevices__P4029(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.now___11151 = undefined;
    s.cutoff___11154 = undefined;
    s.numdel___11160 = undefined;
    s.i___11161 = undefined;
    s.dev___11168 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Bus__C3152_VT)) failedCast(r0);
    r0 = pxsim.control.millis();
    s.now___11151 = (r0);
    r0 = (s.now___11151 - 2000);
    s.cutoff___11154 = (r0);
    s.tmp_1 = jacdac_Bus_selfDevice__P3160_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.callLocIdx = 300; s.pc = 7; return s.tmp_1;
  case 7:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = (s.tmp_0).fields["lastSeen"] = (s.now___11151);
    s.numdel___11160 = (0);
    s.i___11161 = (0);
  case 1:
    s.tmp_1 = r0 = s.i___11161;
    r0 = s.arg0.fields["devices"];
    s.tmp_3 = r0;
    r0 = pxsim_Array__length(s.tmp_3);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    r0 = s.arg0.fields["devices"];
    s.tmp_4 = r0;
    r0 = pxsim_Array__getAt(s.tmp_4, s.i___11161);
    s.dev___11168 = (r0);
    r0 = s.dev___11168.fields["lastSeen"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 < s.cutoff___11154);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_2 = helpers_arraySplice__P1989_mk(s);
    r0 = s.arg0.fields["devices"];
    s.tmp_2.arg0 = r0;
    s.tmp_2.arg1 = s.i___11161;
    s.tmp_2.arg2 = 1;
    s.callLocIdx = 301; s.pc = 8; return s.tmp_2;
  case 8:
    r0 = s.retval;
    r0 = (s.i___11161 - 1);
    s.i___11161 = (r0);
    s.tmp_0 = jacdac_Device__destroy__P3242_mk(s);
    s.tmp_0.arg0 = s.dev___11168;
    s.callLocIdx = 302; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    r0 = (s.numdel___11160 + 1);
    s.numdel___11160 = (r0);
  case 2:
  case 3:
    r0 = (s.i___11161 + 1);
    s.i___11161 = (r0);
    { step = 1; continue; }
  case 4:
    r0 = pxsim_numops_toBoolDecr(s.numdel___11160);
    if (!r0) { step = 5; continue; }
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.DEVICE_CHANGE___3141;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 303; s.pc = 10; return s.tmp_0;
  case 10:
    r0 = s.retval;
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = globals.CHANGE___3136;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 304; s.pc = 11; return s.tmp_0;
  case 11:
    r0 = s.retval;
  case 5:
  case 6:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Bus_gcDevices__P4029.info = {"start":1945,"length":639,"line":62,"column":8,"endLine":81,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"gcDevices","argumentNames":["this"]}

function jacdac_Bus_gcDevices__P4029_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Bus_gcDevices__P4029, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  now___11151: undefined,
  cutoff___11154: undefined,
  numdel___11160: undefined,
  i___11161: undefined,
  dev___11168: undefined,
  arg0: undefined,
} }





function jacdac_Client_announceCallback__P3218(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Client__C3193_VT)) failedCast(r0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_announceCallback__P3218.info = {"start":32919,"length":21,"line":992,"column":8,"endLine":992,"endColumn":29,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"announceCallback","argumentNames":["this"]}

function jacdac_Client_announceCallback__P3218_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_announceCallback__P3218, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_consumePackets__P4067(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___11199 = undefined;
    s.pkt___11206 = undefined;
  case 1:
    s.tmp_1 = jacdac___physGetPacket__P2724_mk(s);
    s.callLocIdx = 550; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.tmp_0 = r0;
    s.buf___11199 = (r0);
    r0 = (null != s.tmp_0);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 2; continue; }
    s.tmp_3 = jacdac_JDPacket_fromBinary__P2781_mk(s);
    s.tmp_3.arg0 = s.buf___11199;
    s.callLocIdx = 551; s.pc = 4; return s.tmp_3;
  case 4:
    r0 = s.retval;
    s.pkt___11206 = (r0);
    s.tmp_0 = r0 = s.pkt___11206;
    s.tmp_2 = jacdac___physGetTimestamp__P2725_mk(s);
    s.callLocIdx = 552; s.pc = 5; return s.tmp_2;
  case 5:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["timestamp"] = (s.tmp_1);
    s.tmp_0 = jacdac_Bus_processPacket__P3169_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.tmp_0.arg1 = s.pkt___11206;
    s.callLocIdx = 553; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    { step = 1; continue; }
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_consumePackets__P4067.info = {"start":46955,"length":273,"line":1391,"column":4,"endLine":1398,"endColumn":5,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"consumePackets","argumentNames":[]}

function jacdac_consumePackets__P4067_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_consumePackets__P4067, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  buf___11199: undefined,
  pkt___11206: undefined,
} }





function jacdac___physGetTimestamp__P2725(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals.recvQ___3868);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = 0;
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = pxsim.control.millis();
  case 3:
    return leave(s, r0)
  default: oops()
} } }
jacdac___physGetTimestamp__P2725.info = {"start":1523,"length":121,"line":52,"column":4,"endLine":55,"endColumn":5,"fileName":"pxt_modules/jacdac/jdsim.ts","functionName":"__physGetTimestamp","argumentNames":[]}

function jacdac___physGetTimestamp__P2725_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac___physGetTimestamp__P2725, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }





function jacdac_JDPacket_fromBinary__P2781(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.p___11221 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_JDPacket__C2777_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_JDPacket_constructor__P3897_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 102; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.p___11221 = (s.tmp_0);
    s.tmp_0 = r0 = s.p___11221;
    r0 = pxsim.BufferMethods.slice(s.arg0, 0, 16);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["_header"] = (s.tmp_1);
    s.tmp_0 = r0 = s.p___11221;
    s.tmp_2 = r0 = s.arg0;
    r0 = s.p___11221.fields["_header"];
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_4, 12);
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_2, 16, s.tmp_3);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["_data"] = (s.tmp_1);
    r0 = s.p___11221;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_fromBinary__P2781.info = {"start":1477,"length":230,"line":45,"column":8,"endLine":50,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"fromBinary","argumentNames":["buf"]}

function jacdac_JDPacket_fromBinary__P2781_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_fromBinary__P2781, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  p___11221: undefined,
  arg0: undefined,
} }





function jacdac___physGetPacket__P2724(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals.recvQ___3868);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = undefined;
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = pxsim_Array_.removeAt(globals.recvQ___3868, 0);
  case 3:
    return leave(s, r0)
  default: oops()
} } }
jacdac___physGetPacket__P2724.info = {"start":1286,"length":115,"line":43,"column":4,"endLine":46,"endColumn":5,"fileName":"pxt_modules/jacdac/jdsim.ts","functionName":"__physGetPacket","argumentNames":[]}

function jacdac___physGetPacket__P2724_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac___physGetPacket__P2724, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }





function jacdac___physId__P2722(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = 30;
    return leave(s, r0)
  default: oops()
} } }
jacdac___physId__P2722.info = {"start":139,"length":59,"line":7,"column":4,"endLine":9,"endColumn":5,"fileName":"pxt_modules/jacdac/jdsim.ts","functionName":"__physId","argumentNames":[]}

function jacdac___physId__P2722_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac___physId__P2722, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function jacdac_Bus_start__P3159(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Bus__C3152_VT)) failedCast(r0);
    r0 = s.arg0.fields["controlServer"];
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    s.tmp_3 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_ControlServer__C3243_VT);
    s.tmp_5 = r0;
    s.tmp_6 = jacdac_ControlServer_constructor__P3244_mk(s);
    s.tmp_6.arg0 = s.tmp_5;
    s.callLocIdx = 297; s.pc = 4; return s.tmp_6;
  case 4:
    r0 = s.retval;
    r0 = (s.arg0).fields["controlServer"] = (s.tmp_5);
    s.tmp_0 = jacdac_Server_start__P3182_mk(s);
    r0 = s.arg0.fields["controlServer"];
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 298; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    s.tmp_0 = jacdac_ControlServer_sendUptime__P3245_mk(s);
    r0 = s.arg0.fields["controlServer"];
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 299; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Bus_start__P3159.info = {"start":1742,"length":193,"line":54,"column":8,"endLine":60,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"start","argumentNames":["this"]}

function jacdac_Bus_start__P3159_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Bus_start__P3159, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  arg0: undefined,
} }





function jacdac_ControlServer_sendUptime__P3245(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___11258 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_ControlServer__C3243_VT)) failedCast(r0);
    r0 = pxsim.control.createBuffer(4);
    s.buf___11258 = (r0);
    s.tmp_0 = r0 = s.buf___11258;
    r0 = pxsim.control.micros();
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 11, 0, s.tmp_1);
    s.tmp_0 = jacdac_Server_sendReport__P3947_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_1 = jacdac_JDPacket_from__P2782_mk(s);
    s.tmp_1.arg0 = 4486;
    s.tmp_1.arg1 = s.buf___11258;
    s.callLocIdx = 494; s.pc = 2; return s.tmp_1;
  case 2:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 495; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_ControlServer_sendUptime__P3245.info = {"start":40404,"length":216,"line":1213,"column":8,"endLine":1217,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"sendUptime","argumentNames":["this"]}

function jacdac_ControlServer_sendUptime__P3245_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_ControlServer_sendUptime__P3245, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  buf___11258: undefined,
  arg0: undefined,
} }





function jacdac_ControlServer_constructor__P3244(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_ControlServer__C3243_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["listeners"] = (s.tmp_1);
    r0 = (s.arg0).fields["_statusCode"] = (0);
    s.tmp_2 = jacdac_Server_constructor__P3175_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = "ctrl";
    s.tmp_2.arg2 = 0;
    s.callLocIdx = 493; s.pc = 1; return s.tmp_2;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_ControlServer_constructor__P3244.info = {"start":40340,"length":54,"line":1209,"column":8,"endLine":1211,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["this"]}

function jacdac_ControlServer_constructor__P3244_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_ControlServer_constructor__P3244, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }





function control_getConfigValue__P2731(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg1;
    return leave(s, r0)
  default: oops()
} } }
control_getConfigValue__P2731.info = {"start":260,"length":93,"line":12,"column":4,"endLine":14,"endColumn":5,"fileName":"pxt_modules/jacdac/mbcompat.ts","functionName":"getConfigValue","argumentNames":["key","defl"]}

function control_getConfigValue__P2731_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_getConfigValue__P2731, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Bus_running__P3158(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Bus__C3152_VT)) failedCast(r0);
    r0 = s.arg0.fields["controlServer"];
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_0);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_Bus_running__P3158.info = {"start":1667,"length":65,"line":50,"column":8,"endLine":52,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"running","argumentNames":["this"]}
jacdac_Bus_running__P3158.isGetter = true;

function jacdac_Bus_running__P3158_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Bus_running__P3158, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function control_runInParallel__P2293(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.control.inBackground(s.arg0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_runInParallel__P2293.info = {"start":195,"length":85,"line":10,"column":4,"endLine":12,"endColumn":5,"fileName":"pxt_modules/core/control.ts","functionName":"runInParallel","argumentNames":["a"]}

function control_runInParallel__P2293_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_runInParallel__P2293, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_startProxy__P4066(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim.settings._exists(globals.JACDAC_PROXY_SETTING___3247);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 5; continue; }
  case 1:
  case 2:
    s.tmp_3 = jacdac_log__P4033_mk(s);
    s.tmp_3.arg0 = "jacdac starting proxy";
    s.callLocIdx = 543; s.pc = 6; return s.tmp_3;
  case 6:
    r0 = s.retval;
    s.tmp_0 = settings_remove__P2710_mk(s);
    s.tmp_0.arg0 = globals.JACDAC_PROXY_SETTING___3247;
    s.callLocIdx = 544; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    r0 = 30;
    s.tmp_0 = r0;
    r0 = pxsim.control.onEvent(s.tmp_0, 1, jacdac_startProxy_inline__P11300, 0);
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.tmp_0.arg1 = globals.STATUS_EVENT___3150;
    s.tmp_0.arg2 = 200;
    s.callLocIdx = 548; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
  case 3:
    r0 = pxsim_numops_toBoolDecr(true);
    if (!r0) { step = 4; continue; }
    s.tmp_0 = pause__P2224_mk(s);
    s.tmp_0.arg0 = 100;
    s.callLocIdx = 549; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    { step = 3; continue; }
  case 4:
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_startProxy__P4066.info = {"start":46189,"length":760,"line":1366,"column":4,"endLine":1389,"endColumn":5,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"startProxy","argumentNames":[]}

function jacdac_startProxy__P4066_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_startProxy__P4066, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
} }





function jacdac_startProxy_inline__P11300(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___11301 = undefined;
  case 1:
    s.tmp_1 = jacdac___physGetPacket__P2724_mk(s);
    s.callLocIdx = 546; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.tmp_0 = r0;
    s.buf___11301 = (r0);
    r0 = (null != s.tmp_0);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 2; continue; }
    s.tmp_3 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_3.arg0 = globals.bus___3170;
    s.tmp_3.arg1 = globals.STATUS_EVENT___3150;
    s.tmp_3.arg2 = 201;
    s.callLocIdx = 547; s.pc = 4; return s.tmp_3;
  case 4:
    r0 = s.retval;
    { step = 1; continue; }
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_startProxy_inline__P11300.info = {"start":46540,"length":201,"line":1375,"column":67,"endLine":1380,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":[]}

function jacdac_startProxy_inline__P11300_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_startProxy_inline__P11300, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  buf___11301: undefined,
} }





function settings_exists__P2711(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._exists(s.arg0);
    return leave(s, r0)
  default: oops()
} } }
settings_exists__P2711.info = {"start":3828,"length":71,"line":155,"column":4,"endLine":157,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"exists","argumentNames":["key"]}

function settings_exists__P2711_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_exists__P2711, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac___physStart__P2727(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = (globals.recvQ___3868 != null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = pxsim_Array__mk();
    globals.recvQ___3868 = (r0);
    s.tmp_0 = control_simmessages_onReceived__P2653_mk(s);
    s.tmp_0.arg0 = "jacdac";
    s.tmp_0.arg1 = jacdac___physStart_inline__P11327;
    s.callLocIdx = 92; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    s.tmp_0 = control_runInParallel__P2293_mk(s);
    s.tmp_0.arg0 = jacdac___physStart_inline__P11428;
    s.callLocIdx = 95; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac___physStart__P2727.info = {"start":1919,"length":1277,"line":69,"column":4,"endLine":102,"endColumn":5,"fileName":"pxt_modules/jacdac/jdsim.ts","functionName":"__physStart","argumentNames":[]}

function jacdac___physStart__P2727_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac___physStart__P2727, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function jacdac___physStart_inline__P11327(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.crc___11353 = undefined;
    s.num___11369 = undefined;
    s.b0___11370 = undefined;
    s.tmp___11380 = undefined;
    s.nextoff___11392 = undefined;
    s.skip___11411 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.BufferMethods.getByte(s.arg0, 2);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + 12);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_3 = r0;
    r0 = (s.tmp_1 != s.tmp_3);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim.BufferMethods.toHex(s.arg0);
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 9);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 9:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat("bad size in sim jdpkt: ", s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim.control.dmesg(s.tmp_4);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim.BufferMethods.getByte(s.arg0, 2);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + 12);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_0, 0, s.tmp_1);
    s.arg0 = (r0);
  case 1:
  case 2:
    s.tmp_0 = jacdac_jdCrc16__P3869_mk(s);
    r0 = pxsim.BufferMethods.slice(s.arg0, 2, -1);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 90; s.pc = 10; return s.tmp_0;
  case 10:
    r0 = s.retval;
    s.crc___11353 = (r0);
    r0 = pxsim.BufferMethods.getNumber(s.arg0, 4, 0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 != s.crc___11353);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = pxsim.control.dmesg("bad crc in sim");
    { step = 8; continue; }
  case 3:
    s.num___11369 = (0);
    r0 = pxsim.BufferMethods.slice(s.arg0, 0, -1);
    s.b0___11370 = (r0);
  case 4:
    r0 = pxsim.BufferMethods.getByte(s.arg0, 2);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >= 4);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    s.tmp_2 = r0 = s.arg0;
    r0 = pxsim.BufferMethods.getByte(s.arg0, 12);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 + 16);
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_2, 0, s.tmp_3);
    s.tmp___11380 = (r0);
    r0 = pxsim_Array__push(globals.recvQ___3868, s.tmp___11380);
    r0 = pxsim.BufferMethods.getByte(s.arg0, 12);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + 16);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 + 3);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & -4);
    s.nextoff___11392 = (r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim.BufferMethods.slice(s.arg0, s.nextoff___11392, -1);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.write(s.tmp_0, 12, s.tmp_1);
    r0 = (s.nextoff___11392 - 12);
    s.skip___11411 = (r0);
    r0 = pxsim.BufferMethods.getByte(s.arg0, 2);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 <= s.skip___11411);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    { step = 7; continue; }
  case 5:
  case 6:
    s.tmp_2 = r0 = s.arg0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_2, 2);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 - s.skip___11411);
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_2, 2, s.tmp_3);
    { step = 4; continue; }
  case 7:
    r0 = 30;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(s.tmp_0, 1, 1);
  case 8:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac___physStart_inline__P11327.info = {"start":2063,"length":901,"line":72,"column":49,"endLine":94,"endColumn":9,"fileName":"pxt_modules/jacdac/jdsim.ts","functionName":"inline","argumentNames":["buf"]}

function jacdac___physStart_inline__P11327_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac___physStart_inline__P11327, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  crc___11353: undefined,
  num___11369: undefined,
  b0___11370: undefined,
  tmp___11380: undefined,
  nextoff___11392: undefined,
  skip___11411: undefined,
  arg0: undefined,
} }





function jacdac___physStart_inline__P11428(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

  case 1:
    r0 = pxsim_numops_toBoolDecr(true);
    if (!r0) { step = 2; continue; }
    r0 = 30;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(s.tmp_0, 100, 1);
    s.tmp_0 = pause__P2224_mk(s);
    s.tmp_0.arg0 = 500;
    s.callLocIdx = 94; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    { step = 1; continue; }
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac___physStart_inline__P11428.info = {"start":3046,"length":143,"line":96,"column":30,"endLine":101,"endColumn":9,"fileName":"pxt_modules/jacdac/jdsim.ts","functionName":"inline","argumentNames":[]}

function jacdac___physStart_inline__P11428_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac___physStart_inline__P11428, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function control_simmessages_onReceived__P2653(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 5; continue; }
  case 1:
  case 2:
    r0 = pxsim_numops_toBoolDecr(globals.handlers___3825);
    s.tmp_3 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 3; continue; }
    r0 = pxsim_pxtrt.mkMap();
    globals.handlers___3825 = (r0);
  case 3:
  case 4:
    r0 = pxsim_pxtrt.mapSetGeneric(globals.handlers___3825, s.arg0, s.arg1);
    r0 = pxsim.control.onEvent(2999, 1, control_simmessages_consumeMessages__P3826, 0);
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_simmessages_onReceived__P2653.info = {"start":1063,"length":293,"line":32,"column":4,"endLine":39,"endColumn":5,"fileName":"pxt_modules/core/controlmessage.ts","functionName":"onReceived","argumentNames":["channel","handler"]}

function control_simmessages_onReceived__P2653_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_simmessages_onReceived__P2653, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function control_simmessages_consumeMessages__P3826(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.channel___11453 = undefined;
    s.msg___11458 = undefined;
    s.handler___11461 = undefined;
  case 1:
    r0 = pxsim_numops_toBoolDecr(true);
    if (!r0) { step = 8; continue; }
    r0 = pxsim_pxtcore.peekMessageChannel();
    s.channel___11453 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.channel___11453);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    { step = 8; continue; }
  case 2:
  case 3:
    r0 = pxsim_pxtcore.readMessageData();
    s.msg___11458 = (r0);
    s.tmp_0 = r0 = globals.handlers___3825;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = s.tmp_0;
    { step = 5; continue; }
  case 4:
    r0 = pxsim_pxtrt.mapGetGeneric(globals.handlers___3825, s.channel___11453);
  case 5:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    s.handler___11461 = (s.tmp_1);
    r0 = pxsim_numops_toBoolDecr(s.handler___11461);
    if (!r0) { step = 6; continue; }
    s.tmp_0 = lambda_2_mk(s);
    s.tmp_0.argL = s.handler___11461;
    s.tmp_0.arg0 = s.msg___11458;
    setupLambda(s.tmp_0, s.tmp_0.argL);
    s.callLocIdx = 69; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
  case 6:
  case 7:
    { step = 1; continue; }
  case 8:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_simmessages_consumeMessages__P3826.info = {"start":564,"length":414,"line":15,"column":4,"endLine":27,"endColumn":5,"fileName":"pxt_modules/core/controlmessage.ts","functionName":"consumeMessages","argumentNames":[]}

function control_simmessages_consumeMessages__P3826_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_simmessages_consumeMessages__P3826, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  channel___11453: undefined,
  msg___11458: undefined,
  handler___11461: undefined,
} }





function jacdac___physIsRunning__P2726(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = (globals.recvQ___3868 != null);
    return leave(s, r0)
  default: oops()
} } }
jacdac___physIsRunning__P2726.info = {"start":1743,"length":79,"line":61,"column":4,"endLine":63,"endColumn":5,"fileName":"pxt_modules/jacdac/jdsim.ts","functionName":"__physIsRunning","argumentNames":[]}

function jacdac___physIsRunning__P2726_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac___physIsRunning__P2726, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function jacdac_Bus_constructor__P3157(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Bus__C3152_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["listeners"] = (s.tmp_1);
    s.tmp_2 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_3 = r0;
    r0 = (s.tmp_2).fields["hostServices"] = (s.tmp_3);
    s.tmp_4 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_5 = r0;
    r0 = (s.tmp_4).fields["devices"] = (s.tmp_5);
    r0 = (s.arg0).fields["restartCounter"] = (0);
    r0 = (s.arg0).fields["resetIn"] = (2000000);
    r0 = (s.arg0).fields["autoBindCnt"] = (0);
    r0 = (s.arg0).fields["_eventCounter"] = (0);
    s.tmp_6 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_7 = r0;
    r0 = (s.tmp_6).fields["unattachedClients"] = (s.tmp_7);
    s.tmp_8 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_9 = r0;
    r0 = (s.tmp_8).fields["allClients"] = (s.tmp_9);
    s.tmp_10 = jacdac_EventSource_constructor__P3255_mk(s);
    s.tmp_10.arg0 = s.arg0;
    s.callLocIdx = 295; s.pc = 1; return s.tmp_10;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Bus_constructor__P3157.info = {"start":1612,"length":45,"line":46,"column":8,"endLine":48,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["this"]}

function jacdac_Bus_constructor__P3157_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Bus_constructor__P3157, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  arg0: undefined,
} }





function initPlatform__P2737(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    globals.onPlatformStart___3134 = (initPlatform_inline__P11479);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
initPlatform__P2737.info = {"start":1656,"length":488,"line":68,"column":0,"endLine":79,"endColumn":1,"fileName":"pxt_modules/jacdac/mbcompat.ts","functionName":"initPlatform","argumentNames":[]}

function initPlatform__P2737_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: initPlatform__P2737, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function initPlatform_inline__P11479(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.reset___11487 = undefined;
    globals.productIdentifier___3135 = (854992189);
    s.tmp_0 = jacdac_EventSource_on__P3256_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.tmp_0.arg1 = globals.STATUS_EVENT___3150;
    s.tmp_0.arg2 = handleStatusEvent__P2736;
    s.callLocIdx = 99; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = pxsim.settings._exists(globals.JACDAC_PROXY_SETTING___3247);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.reset___11487 = (reset_inline__P11488);
    r0 = pxsim.input.onButtonPressed(1, s.reset___11487);
    r0 = pxsim.input.onButtonPressed(2, s.reset___11487);
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
initPlatform_inline__P11479.info = {"start":1795,"length":347,"line":70,"column":29,"endLine":78,"endColumn":5,"fileName":"pxt_modules/jacdac/mbcompat.ts","functionName":"inline","argumentNames":[]}

function initPlatform_inline__P11479_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: initPlatform_inline__P11479, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  reset___11487: undefined,
} }





function reset_inline__P11488(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    setupResume(s, 1);
    pxsim.control.reset();
    checkResumeConsumed();
    return;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
reset_inline__P11488.info = {"start":2003,"length":21,"line":74,"column":26,"endLine":74,"endColumn":47,"fileName":"pxt_modules/jacdac/mbcompat.ts","functionName":"inline","argumentNames":[]}

function reset_inline__P11488_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: reset_inline__P11488, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function handleStatusEvent__P2736(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq(200, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(201, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(202, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = s.tmp_0;
    { step = 4; continue; }
  case 1:
    s.tmp_1 = identifyAnimation__P2735_mk(s);
    s.callLocIdx = 97; s.pc = 5; return s.tmp_1;
  case 5:
    r0 = s.retval;
    { step = 4; continue; }
  case 2:
    r0 = pxsim.basic.plotLeds(new pxsim.Image(5, [0,0,0,0,0,255,255,255,255,0,255,255,255,255,0,255,255,255,0,0,0,0,0,0,0,0]));
    { step = 4; continue; }
  case 3:
    s.tmp_0 = identifyAnimation__P2735_mk(s);
    s.callLocIdx = 98; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
handleStatusEvent__P2736.info = {"start":1074,"length":521,"line":44,"column":0,"endLine":62,"endColumn":1,"fileName":"pxt_modules/jacdac/mbcompat.ts","functionName":"handleStatusEvent","argumentNames":["event"]}

function handleStatusEvent__P2736_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: handleStatusEvent__P2736, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function identifyAnimation__P2735(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.sc___11511 = undefined;
    r0 = pxsim_numops_toBoolDecr(globals.identifyAnimationRunning___2734);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    globals.identifyAnimationRunning___2734 = (true);
    r0 = pxsim.led.screenshot();
    s.sc___11511 = (r0);
    r0 = pxsim_pxtcore_mkAction(1, identifyAnimation_inline__P11515);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.sc___11511);
    s.tmp_1 = control_runInParallel__P2293_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 96; s.pc = 4; return s.tmp_1;
  case 4:
    r0 = s.retval;
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
identifyAnimation__P2735.info = {"start":501,"length":571,"line":24,"column":0,"endLine":42,"endColumn":1,"fileName":"pxt_modules/jacdac/mbcompat.ts","functionName":"identifyAnimation","argumentNames":[]}

function identifyAnimation__P2735_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: identifyAnimation__P2735, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  sc___11511: undefined,
} }





function identifyAnimation_inline__P11515(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim.led.stopAnimation();
    setupResume(s, 1);
    pxsim.basic.showAnimation(new pxsim.Image(30, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,0,0,0,0,0,0,255,255,255,255,0,0,0,0,0,0,255,255,255,255,0,0,0,0,0,0,255,255,255,255,0,0,0,0,0,0,255,255,255,255,0,0,0,0,0,0,255,255,255,255,0,0,0,0,0,0,255,255,255,0,0,0,0,0,0,0,255,255,255,0,0,0,0,0,0,0,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]), 250);
    checkResumeConsumed();
    return;
  case 1:
    r0 = s.retval;
    r0 = pxsim_ImageMethods.plotFrame(s.caps[0], 0);
    globals.identifyAnimationRunning___2734 = (false);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
identifyAnimation_inline__P11515.info = {"start":668,"length":401,"line":29,"column":26,"endLine":41,"endColumn":5,"fileName":"pxt_modules/jacdac/mbcompat.ts","functionName":"inline","argumentNames":[]}

function identifyAnimation_inline__P11515_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: identifyAnimation_inline__P11515, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function settings_initScopes__P3861(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.rn___11524 = undefined;
    s.tmp_1 = settings_runNumber__P2699_mk(s);
    s.callLocIdx = 75; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 1);
    s.rn___11524 = (r0);
    s.tmp_0 = settings_writeNumber__P2703_mk(s);
    s.tmp_0.arg0 = globals.RUN_KEY___3849;
    s.tmp_0.arg1 = s.rn___11524;
    s.callLocIdx = 76; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = pxsim.control.deviceSerialNumber();
    s.tmp_1 = r0;
    r0 = (s.tmp_1 & 2147483647);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.seedAddRandom(s.tmp_0);
    r0 = pxsim_pxtcore.seedAddRandom(s.rn___11524);
    s.tmp_0 = settings_setScope__P3860_mk(s);
    r0 = pxsim_pxtcore.programName();
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 77; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_initScopes__P3861.info = {"start":1104,"length":230,"line":41,"column":4,"endLine":49,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"initScopes","argumentNames":[]}

function settings_initScopes__P3861_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_initScopes__P3861, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  rn___11524: undefined,
} }





function settings_setScope__P3860(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.currScope___11553 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > 100);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    r0 = pxsim_pxtrt.panic(922);
  case 3:
  case 4:
    s.tmp_0 = settings_readString__P2706_mk(s);
    s.tmp_0.arg0 = globals.SCOPE_KEY___3850;
    s.callLocIdx = 73; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    s.currScope___11553 = (r0);
    r0 = (s.currScope___11553 != s.arg0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = pxsim.settings._userClean();
    s.tmp_0 = settings_writeString__P2702_mk(s);
    s.tmp_0.arg0 = globals.SCOPE_KEY___3850;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 74; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
  case 5:
  case 6:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_setScope__P3860.info = {"start":826,"length":272,"line":31,"column":4,"endLine":39,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"setScope","argumentNames":["scope"]}

function settings_setScope__P3860_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_setScope__P3860, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  currScope___11553: undefined,
  arg0: undefined,
} }





function settings_runNumber__P2699(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_1 = settings_readNumber__P2707_mk(s);
    s.tmp_1.arg0 = globals.RUN_KEY___3849;
    s.callLocIdx = 72; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = 0;
  case 2:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = s.tmp_2;
    return leave(s, r0)
  default: oops()
} } }
settings_runNumber__P2699.info = {"start":745,"length":75,"line":27,"column":4,"endLine":29,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"runNumber","argumentNames":[]}

function settings_runNumber__P2699_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_runNumber__P2699, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
} }





function settings_readNumber__P2707(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___11571 = undefined;
    s.nums___11578 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._get(s.arg0);
    s.buf___11571 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.buf___11571);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = undefined;
    { step = 7; continue; }
    { step = 6; continue; }
  case 1:
    s.tmp_2 = msgpack_unpackNumberArray__P2608_mk(s);
    s.tmp_2.arg0 = s.buf___11571;
    s.tmp_2.arg1 = 0;
    s.callLocIdx = 84; s.pc = 8; return s.tmp_2;
  case 8:
    r0 = s.retval;
    s.nums___11578 = (r0);
    s.tmp_0 = r0 = s.nums___11578;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = pxsim_Array__length(s.nums___11578);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >= 1);
  case 3:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.nums___11578, 0);
    { step = 7; continue; }
  case 4:
  case 5:
    r0 = undefined;
    { step = 7; continue; }
  case 6:
    r0 = undefined;
  case 7:
    return leave(s, r0)
  default: oops()
} } }
settings_readNumber__P2707.info = {"start":2887,"length":313,"line":114,"column":4,"endLine":124,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"readNumber","argumentNames":["key"]}

function settings_readNumber__P2707_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_readNumber__P2707, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  buf___11571: undefined,
  nums___11578: undefined,
  arg0: undefined,
} }





function msgpack_unpackNumberArray__P2608(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___11591 = undefined;
    s.fmt___11598 = undefined;
    s.v___11607 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___11591 = (r0);
  case 1:
    s.tmp_1 = r0 = s.arg1;
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 10; continue; }
    s.tmp_3 = r0 = s.arg1;
    r0 = (s.tmp_3 + 1);
    s.arg1 = (r0);
    s.tmp_4 = msgpack_tagFormat__P3796_mk(s);
    r0 = pxsim.BufferMethods.getByte(s.arg0, s.tmp_3);
    s.tmp_4.arg0 = r0;
    s.callLocIdx = 60; s.pc = 12; return s.tmp_4;
  case 12:
    r0 = s.retval;
    s.fmt___11598 = (r0);
    r0 = (s.fmt___11598 === null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_1 = r0 = s.arg0;
    r0 = (s.arg1 - 1);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 6, s.tmp_2);
    s.v___11607 = (r0);
    r0 = (-31 <= s.v___11607);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = (s.v___11607 <= 127);
  case 3:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__push(s.res___11591, s.v___11607);
    { step = 5; continue; }
  case 4:
    r0 = null;
    { step = 11; continue; }
  case 5:
    { step = 7; continue; }
  case 6:
    s.tmp_0 = r0 = s.res___11591;
    r0 = pxsim.BufferMethods.getNumber(s.arg0, s.fmt___11598, s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    s.tmp_0 = r0 = s.arg1;
    s.tmp_2 = pins_sizeOf__P2600_mk(s);
    s.tmp_2.arg0 = s.fmt___11598;
    s.callLocIdx = 61; s.pc = 13; return s.tmp_2;
  case 13:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0 + s.tmp_1);
    s.arg1 = (r0);
  case 7:
  case 8:
    r0 = pxsim.BufferMethods.getByte(s.arg0, s.arg1);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === 193);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    r0 = (s.arg1 + 1);
    s.arg1 = (r0);
    { step = 8; continue; }
  case 9:
    { step = 1; continue; }
  case 10:
    r0 = s.res___11591;
  case 11:
    return leave(s, r0)
  default: oops()
} } }
msgpack_unpackNumberArray__P2608.info = {"start":2650,"length":669,"line":91,"column":4,"endLine":111,"endColumn":5,"fileName":"pxt_modules/core/buffer.ts","functionName":"unpackNumberArray","argumentNames":["buf","offset"]}

function msgpack_unpackNumberArray__P2608_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_unpackNumberArray__P2608, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  res___11591: undefined,
  fmt___11598: undefined,
  v___11607: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_ControlServer_handlePacketOuter__P3246(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_ControlServer__C3243_VT)) failedCast(r0);
    s.tmp_1 = jacdac_JDPacket_isRegGet__P2802_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.callLocIdx = 502; s.pc = 15; return s.tmp_1;
  case 15:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    s.tmp_3 = jacdac_JDPacket_regCode__P2803_mk(s);
    s.tmp_3.arg0 = s.arg1;
    s.callLocIdx = 503; s.pc = 16; return s.tmp_3;
  case 16:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_pxtcore.switch_eq(385, s.tmp_2);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(390, s.tmp_2);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(384, s.tmp_2);
    if (r0) { step = 5; continue; }
    r0 = s.tmp_2;
    { step = 6; continue; }
  case 1:
    r0 = pxsim_numops_toBoolDecr(globals.productIdentifier___3135);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__mk();
    s.tmp_4 = r0;
    r0 = pxsim_Array__push(s.tmp_4, globals.productIdentifier___3135);
    s.tmp_5 = jacdac_Server_sendReport__P3947_mk(s);
    s.tmp_5.arg0 = s.arg0;
    s.tmp_6 = jacdac_JDPacket_from__P2782_mk(s);
    r0 = s.arg1.fields["_header"];
    s.tmp_7 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_7, 4, 14);
    s.tmp_6.arg0 = r0;
    s.tmp_8 = jacdac_jdpack__P2828_mk(s);
    s.tmp_8.arg0 = "u32";
    s.tmp_8.arg1 = s.tmp_4;
    s.callLocIdx = 505; s.pc = 19; return s.tmp_8;
  case 19:
    r0 = s.retval;
    s.tmp_6.arg1 = r0;
    s.callLocIdx = 506; s.pc = 18; return s.tmp_6;
  case 18:
    r0 = s.retval;
    s.tmp_5.arg1 = r0;
    s.callLocIdx = 507; s.pc = 17; return s.tmp_5;
  case 17:
    r0 = s.retval;
  case 2:
  case 3:
    { step = 6; continue; }
  case 4:
    s.tmp_0 = jacdac_ControlServer_sendUptime__P3245_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 508; s.pc = 20; return s.tmp_0;
  case 20:
    r0 = s.retval;
    { step = 6; continue; }
  case 5:
    s.tmp_0 = jacdac_Server_sendReport__P3947_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_1 = jacdac_JDPacket_from__P2782_mk(s);
    r0 = s.arg1.fields["_header"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_2, 4, 14);
    s.tmp_1.arg0 = r0;
    r0 = pxsim_pxtcore.programName();
    s.tmp_3 = r0;
    r0 = pxsim.control.createBufferFromUTF8(s.tmp_3);
    s.tmp_1.arg1 = r0;
    s.callLocIdx = 510; s.pc = 22; return s.tmp_1;
  case 22:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 511; s.pc = 21; return s.tmp_0;
  case 21:
    r0 = s.retval;
  case 6:
    { step = 14; continue; }
  case 7:
    r0 = s.arg1.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 4, 14);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.switch_eq(0, s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = pxsim_pxtcore.switch_eq(129, s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim_pxtcore.switch_eq(130, s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = pxsim_pxtcore.switch_eq(131, s.tmp_0);
    if (r0) { step = 11; continue; }
    r0 = pxsim_pxtcore.switch_eq(133, s.tmp_0);
    if (r0) { step = 12; continue; }
    r0 = s.tmp_0;
    { step = 13; continue; }
  case 8:
    s.tmp_2 = jacdac_Bus_queueAnnounce__P3163_mk(s);
    s.tmp_2.arg0 = globals.bus___3170;
    s.callLocIdx = 513; s.pc = 23; return s.tmp_2;
  case 23:
    r0 = s.retval;
    { step = 13; continue; }
  case 9:
    s.tmp_0 = jacdac_Server__C3172_v2_2_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = "identify";
    if (!checkSubtype(s.tmp_0.arg0, jacdac_Server__C3172_VT)) failedCast(s.tmp_0.arg0);
    s.tmp_0.fn = s.tmp_0.arg0.vtable.methods.log;
    s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.tmp_0.arg1 = globals.IDENTIFY___3151;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 514; s.pc = 25; return s.tmp_0;
  case 25:
    r0 = s.retval;
    s.tmp_0 = jacdac_EventSource_emit__P3259_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.tmp_0.arg1 = globals.STATUS_EVENT___3150;
    s.tmp_0.arg2 = 202;
    s.callLocIdx = 515; s.pc = 26; return s.tmp_0;
  case 26:
    r0 = s.retval;
    { step = 13; continue; }
  case 10:
    s.tmp_0 = jacdac_Server__C3172_v2_2_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = "reset requested";
    if (!checkSubtype(s.tmp_0.arg0, jacdac_Server__C3172_VT)) failedCast(s.tmp_0.arg0);
    s.tmp_0.fn = s.tmp_0.arg0.vtable.methods.log;
    s.pc = 27; return s.tmp_0;
  case 27:
    r0 = s.retval;
    setupResume(s, 28);
    pxsim.control.reset();
    checkResumeConsumed();
    return;
  case 28:
    r0 = s.retval;
    { step = 13; continue; }
  case 11:
    s.tmp_0 = jacdac_Server__C3172_v2_2_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = "flood";
    if (!checkSubtype(s.tmp_0.arg0, jacdac_Server__C3172_VT)) failedCast(s.tmp_0.arg0);
    s.tmp_0.fn = s.tmp_0.arg0.vtable.methods.log;
    s.pc = 29; return s.tmp_0;
  case 29:
    r0 = s.retval;
    s.tmp_0 = jacdac_ControlServer_handleFloodPing__P4048_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.callLocIdx = 516; s.pc = 30; return s.tmp_0;
  case 30:
    r0 = s.retval;
    { step = 13; continue; }
  case 12:
    s.tmp_0 = jacdac__rolemgr_RoleManagerServer_resetToProxy__P3079_mk(s);
    s.tmp_0.arg0 = globals.roleManagerServer___3083;
    s.callLocIdx = 517; s.pc = 31; return s.tmp_0;
  case 31:
    r0 = s.retval;
  case 13:
  case 14:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_ControlServer_handlePacketOuter__P3246.info = {"start":41609,"length":2013,"line":1244,"column":8,"endLine":1294,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"handlePacketOuter","argumentNames":["this","pkt"]}

function jacdac_ControlServer_handlePacketOuter__P3246_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_ControlServer_handlePacketOuter__P3246, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_ControlServer_handleFloodPing__P4048(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.numResponses___11707 = undefined;
    s.counter___11708 = undefined;
    s.size___11709 = undefined;
    s.payload___11710 = undefined;
    s.i___11716 = undefined;
    s.queuePing___11730 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_ControlServer__C3243_VT)) failedCast(r0);
    r0 = pxsim_pxtrt.mklocRef();
    s.numResponses___11707 = (r0);
    s.tmp_0 = r0 = s.numResponses___11707;
    s.tmp_3 = jacdac_JDPacket_jdunpack__P2809_mk(s);
    s.tmp_3.arg0 = s.arg1;
    s.tmp_3.arg1 = "u32 u32 u8";
    s.callLocIdx = 496; s.pc = 3; return s.tmp_3;
  case 3:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_Array__getAt(s.tmp_2, 0);
    s.tmp_1 = r0;
    r0 = pxsim_pxtrt_stlocRef(s.tmp_0, s.tmp_1);
    r0 = pxsim_pxtrt.mklocRef();
    s.counter___11708 = (r0);
    s.tmp_4 = r0 = s.counter___11708;
    r0 = pxsim_Array__getAt(s.tmp_2, 1);
    s.tmp_5 = r0;
    r0 = pxsim_pxtrt_stlocRef(s.tmp_4, s.tmp_5);
    r0 = pxsim_Array__getAt(s.tmp_2, 2);
    s.size___11709 = (r0);
    r0 = (4 + s.size___11709);
    s.tmp_0 = r0;
    r0 = pxsim.control.createBuffer(s.tmp_0);
    s.payload___11710 = (r0);
    s.i___11716 = (0);
  case 1:
    r0 = (s.i___11716 < s.size___11709);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = r0 = s.payload___11710;
    r0 = (4 + s.i___11716);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_1, s.tmp_2, s.i___11716);
    r0 = (s.i___11716 + 1);
    s.i___11716 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = pxsim_pxtcore_mkAction(4, queuePing_inline__P11731);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.numResponses___11707);
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 1, s.payload___11710);
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 2, s.counter___11708);
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 3, s.arg0);
    s.queuePing___11730 = (s.tmp_0);
    r0 = 30;
    s.tmp_0 = r0;
    r0 = pxsim.control.onEvent(s.tmp_0, 101, s.queuePing___11730, 0);
    s.tmp_0 = lambda_1_mk(s);
    s.tmp_0.argL = s.queuePing___11730;
    setupLambda(s.tmp_0, s.tmp_0.argL);
    s.callLocIdx = 501; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_ControlServer_handleFloodPing__P4048.info = {"start":40630,"length":969,"line":1219,"column":8,"endLine":1242,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"handleFloodPing","argumentNames":["this","pkt"]}

function jacdac_ControlServer_handleFloodPing__P4048_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_ControlServer_handleFloodPing__P4048, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  numResponses___11707: undefined,
  counter___11708: undefined,
  size___11709: undefined,
  payload___11710: undefined,
  i___11716: undefined,
  queuePing___11730: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function queuePing_inline__P11731(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_pxtrt_ldlocRef(s.caps[0]);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 <= 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = 30;
    s.tmp_2 = r0;
    r0 = pxsim.control.onEvent(s.tmp_2, 101, jacdac_doNothing__P4046, 0);
    { step = 2; continue; }
  case 1:
    s.tmp_0 = r0 = s.caps[1];
    r0 = pxsim_pxtrt_ldlocRef(s.caps[2]);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 11, 0, s.tmp_1);
    s.tmp_0 = jacdac_Server_sendReport__P3947_mk(s);
    s.tmp_0.arg0 = s.caps[3];
    s.tmp_1 = jacdac_JDPacket_from__P2782_mk(s);
    s.tmp_1.arg0 = 131;
    s.tmp_1.arg1 = s.caps[1];
    s.callLocIdx = 498; s.pc = 4; return s.tmp_1;
  case 4:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 499; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.tmp_0 = r0 = s.caps[0];
    r0 = pxsim_pxtrt_ldlocRef(s.caps[0]);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 - 1);
    s.tmp_1 = r0;
    r0 = pxsim_pxtrt_stlocRef(s.tmp_0, s.tmp_1);
    s.tmp_0 = r0 = s.caps[2];
    r0 = pxsim_pxtrt_ldlocRef(s.caps[2]);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + 1);
    s.tmp_1 = r0;
    r0 = pxsim_pxtrt_stlocRef(s.tmp_0, s.tmp_1);
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
queuePing_inline__P11731.info = {"start":40932,"length":553,"line":1224,"column":30,"endLine":1239,"endColumn":13,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":[]}

function queuePing_inline__P11731_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: queuePing_inline__P11731, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
} }





function jacdac_doNothing__P4046(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_doNothing__P4046.info = {"start":40259,"length":23,"line":1206,"column":4,"endLine":1206,"endColumn":27,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"doNothing","argumentNames":[]}

function jacdac_doNothing__P4046_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_doNothing__P4046, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function jacdac__rolemgr_RoleManagerServer_handlePacket__P3078(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.name___11802 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac__rolemgr_RoleManagerServer__C3075_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = jacdac_Server_handleRegBool__P3955_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.arg1;
    s.tmp_2.arg2 = 128;
    r0 = s.arg0.fields["autoBind"];
    s.tmp_2.arg3 = r0;
    s.callLocIdx = 236; s.pc = 16; return s.tmp_2;
  case 16:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["autoBind"] = (s.tmp_1);
    r0 = s.arg1.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 4, 14);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.switch_eq(4481, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(128, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(129, s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim_pxtcore.switch_eq(130, s.tmp_0);
    if (r0) { step = 12; continue; }
    r0 = pxsim_pxtcore.switch_eq(131, s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = pxsim_pxtcore.switch_eq(132, s.tmp_0);
    if (r0) { step = 14; continue; }
    r0 = s.tmp_0;
    { step = 15; continue; }
  case 1:
    s.tmp_3 = helpers_arrayEvery__P1997_mk(s);
    r0 = globals.bus___3170.fields["allClients"];
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = jacdac__rolemgr_RoleManagerServer_handlePacket_inline__P11789;
    s.callLocIdx = 238; s.pc = 17; return s.tmp_3;
  case 17:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 2; continue; }
    r0 = 1;
    { step = 3; continue; }
  case 2:
    r0 = 0;
  case 3:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_Array__mk();
    s.tmp_5 = r0;
    r0 = pxsim_Array__push(s.tmp_5, s.tmp_4);
    s.tmp_6 = jacdac_Server_sendReport__P3947_mk(s);
    s.tmp_6.arg0 = s.arg0;
    s.tmp_7 = jacdac_JDPacket_jdpacked__P2784_mk(s);
    s.tmp_7.arg0 = 4481;
    s.tmp_7.arg1 = "u8";
    s.tmp_7.arg2 = s.tmp_5;
    s.callLocIdx = 239; s.pc = 19; return s.tmp_7;
  case 19:
    r0 = s.retval;
    s.tmp_6.arg1 = r0;
    s.callLocIdx = 240; s.pc = 18; return s.tmp_6;
  case 18:
    r0 = s.retval;
    { step = 15; continue; }
  case 4:
    r0 = s.arg1.fields["_data"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 9);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    s.tmp_4 = jacdac__rolemgr_getRole__P3073_mk(s);
    r0 = s.arg1.fields["_data"];
    s.tmp_6 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_6, 0, 8);
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_5);
    s.tmp_4.arg0 = r0;
    r0 = s.arg1.fields["_data"];
    s.tmp_7 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_7, 8);
    s.tmp_4.arg1 = r0;
    s.callLocIdx = 244; s.pc = 20; return s.tmp_4;
  case 20:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBool(s.tmp_3);
    if (!r0) { step = 5; continue; }
    r0 = s.tmp_3;
    { step = 6; continue; }
  case 5:
    r0 = pxsim_String_.mkEmpty();
  case 6:
    // jmp value (already in r0)
    s.tmp_8 = r0;
    s.name___11802 = (s.tmp_8);
    s.tmp_0 = jacdac_Server_sendReport__P3947_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_1 = jacdac_JDPacket_from__P2782_mk(s);
    s.tmp_1.arg0 = 128;
    s.tmp_2 = helpers_bufferConcat__P2611_mk(s);
    r0 = s.arg1.fields["_data"];
    s.tmp_2.arg0 = r0;
    r0 = pxsim.control.createBufferFromUTF8(s.name___11802);
    s.tmp_2.arg1 = r0;
    s.callLocIdx = 246; s.pc = 23; return s.tmp_2;
  case 23:
    r0 = s.retval;
    s.tmp_1.arg1 = r0;
    s.callLocIdx = 247; s.pc = 22; return s.tmp_1;
  case 22:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 248; s.pc = 21; return s.tmp_0;
  case 21:
    r0 = s.retval;
  case 7:
  case 8:
    { step = 15; continue; }
  case 9:
    r0 = s.arg1.fields["_data"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >= 9);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 10; continue; }
    s.tmp_3 = jacdac__rolemgr_setRole__P3074_mk(s);
    r0 = s.arg1.fields["_data"];
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_5, 0, 8);
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_4);
    s.tmp_3.arg0 = r0;
    r0 = s.arg1.fields["_data"];
    s.tmp_6 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_6, 8);
    s.tmp_3.arg1 = r0;
    r0 = s.arg1.fields["_data"];
    s.tmp_8 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_8, 9, -1);
    s.tmp_7 = r0;
    r0 = pxsim.BufferMethods.toString(s.tmp_7);
    s.tmp_3.arg2 = r0;
    s.callLocIdx = 253; s.pc = 24; return s.tmp_3;
  case 24:
    r0 = s.retval;
  case 10:
  case 11:
    { step = 15; continue; }
  case 12:
    s.tmp_0 = jacdac_OutPipe_respondForEach__P2852_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.tmp_1 = settings_list__P2709_mk(s);
    s.tmp_1.arg0 = globals.roleSettingPrefix___4009;
    s.callLocIdx = 254; s.pc = 26; return s.tmp_1;
  case 26:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.tmp_0.arg2 = jacdac__rolemgr_RoleManagerServer_handlePacket_inline__P11847;
    s.callLocIdx = 261; s.pc = 25; return s.tmp_0;
  case 25:
    r0 = s.retval;
    { step = 15; continue; }
  case 13:
    s.tmp_0 = jacdac_OutPipe_respondForEach__P2852_mk(s);
    s.tmp_0.arg0 = s.arg1;
    r0 = globals.bus___3170.fields["allClients"];
    s.tmp_0.arg1 = r0;
    s.tmp_0.arg2 = packName__P11879;
    s.callLocIdx = 262; s.pc = 27; return s.tmp_0;
  case 27:
    r0 = s.retval;
    { step = 15; continue; }
  case 14:
    s.tmp_0 = jacdac__rolemgr_clearRoles__P3072_mk(s);
    s.callLocIdx = 263; s.pc = 28; return s.tmp_0;
  case 28:
    r0 = s.retval;
  case 15:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_RoleManagerServer_handlePacket__P3078.info = {"start":4738,"length":3468,"line":131,"column":8,"endLine":217,"endColumn":9,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"handlePacket","argumentNames":["this","packet"]}

function jacdac__rolemgr_RoleManagerServer_handlePacket__P3078_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_RoleManagerServer_handlePacket__P3078, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  name___11802: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac__rolemgr_RoleManagerServer_handlePacket_inline__P11789(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["broadcast"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = s.arg0.fields["device"];
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    s.tmp_3 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
  case 2:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = s.tmp_5;
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_RoleManagerServer_handlePacket_inline__P11789.info = {"start":5420,"length":30,"line":147,"column":36,"endLine":147,"endColumn":66,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"inline","argumentNames":["c"]}

function jacdac__rolemgr_RoleManagerServer_handlePacket_inline__P11789_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_RoleManagerServer_handlePacket_inline__P11789, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
} }





function jacdac__rolemgr_RoleManagerServer_handlePacket_inline__P11847(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.name___11849 = undefined;
    s.len___11853 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = settings_readString__P2706_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 255; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.name___11849 = (r0);
    r0 = pxsim_String_.length(globals.roleSettingPrefix___4009);
    s.len___11853 = (r0);
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    s.tmp_2 = Buffer_fromHex__P2631_mk(s);
    s.tmp_3 = helpers_stringSlice__P2008_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.tmp_3.arg1 = s.len___11853;
    r0 = (s.len___11853 + 16);
    s.tmp_3.arg2 = r0;
    s.callLocIdx = 256; s.pc = 3; return s.tmp_3;
  case 3:
    r0 = s.retval;
    s.tmp_2.arg0 = r0;
    s.callLocIdx = 257; s.pc = 2; return s.tmp_2;
  case 2:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    s.tmp_5 = parseInt__P1986_mk(s);
    s.tmp_6 = helpers_stringSlice__P2008_mk(s);
    s.tmp_6.arg0 = s.arg0;
    r0 = (s.len___11853 + 16);
    s.tmp_6.arg1 = r0;
    s.tmp_6.arg2 = undefined;
    s.callLocIdx = 258; s.pc = 5; return s.tmp_6;
  case 5:
    r0 = s.retval;
    s.tmp_5.arg0 = r0;
    s.tmp_5.arg1 = undefined;
    s.callLocIdx = 259; s.pc = 4; return s.tmp_5;
  case 4:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_4);
    r0 = pxsim_Array__push(s.tmp_0, s.name___11849);
    s.tmp_7 = jacdac_jdpack__P2828_mk(s);
    s.tmp_7.arg0 = "b[8] u8 s";
    s.tmp_7.arg1 = s.tmp_0;
    s.callLocIdx = 260; s.pc = 6; return s.tmp_7;
  case 6:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_RoleManagerServer_handlePacket_inline__P11847.info = {"start":6889,"length":420,"line":182,"column":24,"endLine":190,"endColumn":25,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"inline","argumentNames":["k"]}

function jacdac__rolemgr_RoleManagerServer_handlePacket_inline__P11847_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_RoleManagerServer_handlePacket_inline__P11847, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  name___11849: undefined,
  len___11853: undefined,
  arg0: undefined,
} }





function packName__P11879(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.devid___11882 = undefined;
    s.servidx___11892 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["device"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = Buffer_fromHex__P2631_mk(s);
    r0 = s.arg0.fields["device"];
    r0 = r0.fields["deviceId"];
    s.tmp_1.arg0 = r0;
    s.callLocIdx = 264; s.pc = 5; return s.tmp_1;
  case 5:
    r0 = s.retval;
    { step = 2; continue; }
  case 1:
    r0 = pxsim.control.createBuffer(8);
  case 2:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    s.devid___11882 = (s.tmp_2);
    r0 = s.arg0.fields["device"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = s.arg0.fields["serviceIndex"];
    { step = 4; continue; }
  case 3:
    r0 = 0;
  case 4:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    s.servidx___11892 = (s.tmp_1);
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.devid___11882);
    r0 = s.arg0.fields["serviceClass"];
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    r0 = pxsim_Array__push(s.tmp_0, s.servidx___11892);
    r0 = s.arg0.fields["role"];
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_2);
    s.tmp_3 = jacdac_jdpack__P2828_mk(s);
    s.tmp_3.arg0 = "b[8] u32 u8 s";
    s.tmp_3.arg1 = s.tmp_0;
    s.callLocIdx = 265; s.pc = 6; return s.tmp_3;
  case 6:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
packName__P11879.info = {"start":7768,"length":428,"line":205,"column":12,"endLine":216,"endColumn":13,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"packName","argumentNames":["c"]}

function packName__P11879_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: packName__P11879, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  devid___11882: undefined,
  servidx___11892: undefined,
  arg0: undefined,
} }





function jacdac__rolemgr_clearRoles__P3072(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_0 = helpers_arrayForEach__P1998_mk(s);
    s.tmp_1 = settings_list__P2709_mk(s);
    s.tmp_1.arg0 = globals.roleSettingPrefix___4009;
    s.callLocIdx = 219; s.pc = 2; return s.tmp_1;
  case 2:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = settings_remove__P2710;
    s.callLocIdx = 220; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = jacdac_Bus_clearAttachCache__P3162_mk(s);
    s.tmp_0.arg0 = globals.bus___3170;
    s.callLocIdx = 221; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac__rolemgr_clearRoles__P3072.info = {"start":71,"length":140,"line":3,"column":4,"endLine":6,"endColumn":5,"fileName":"pxt_modules/jacdac/rolemgr.ts","functionName":"clearRoles","argumentNames":[]}

function jacdac__rolemgr_clearRoles__P3072_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__rolemgr_clearRoles__P3072, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }





function settings_list__P2709(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_String_.mkEmpty();
    s.arg0 = (r0);
  case 1:
  case 2:
    r0 = pxsim.settings._list(s.arg0);
    return leave(s, r0)
  default: oops()
} } }
settings_list__P2709.info = {"start":3544,"length":107,"line":140,"column":4,"endLine":143,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"list","argumentNames":["prefix"]}

function settings_list__P2709_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_list__P2709, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_OutPipe_respondForEach__P2852(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkAction(3, jacdac_OutPipe_respondForEach_inline__P11923);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg0);
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 1, s.arg1);
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 2, s.arg2);
    s.tmp_1 = control_runInParallel__P2293_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 197; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_OutPipe_respondForEach__P2852.info = {"start":3112,"length":408,"line":113,"column":8,"endLine":123,"endColumn":9,"fileName":"pxt_modules/jacdac/pipes.ts","functionName":"respondForEach","argumentNames":["pkt","inp","f"]}

function jacdac_OutPipe_respondForEach__P2852_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_OutPipe_respondForEach__P2852, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_OutPipe_respondForEach_inline__P11923(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.outp___11925 = undefined;
    s.e___11930 = undefined;
    s.unnamed70___U2 = undefined;
    s.unnamed71___U3 = undefined;
    s.e___11938 = undefined;
    r0 = pxsim_pxtcore.beginTry(3);
    s.tmp_0 = jacdac_OutPipe_from__P2851_mk(s);
    s.tmp_0.arg0 = s.caps[0];
    s.callLocIdx = 192; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    s.outp___11925 = (r0);
    s.e___11930 = (undefined);
    s.unnamed70___U2 = (s.caps[1]);
    s.unnamed71___U3 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed71___U3;
    r0 = pxsim_Array__length(s.unnamed70___U2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__getAt(s.unnamed70___U2, s.unnamed71___U3);
    s.e___11930 = (r0);
    s.tmp_2 = jacdac_OutPipe_write__P2854_mk(s);
    s.tmp_2.arg0 = s.outp___11925;
    s.tmp_3 = lambda_2_mk(s);
    s.tmp_3.argL = s.caps[2];
    s.tmp_3.arg0 = s.e___11930;
    setupLambda(s.tmp_3, s.tmp_3.argL);
    s.callLocIdx = 193; s.pc = 7; return s.tmp_3;
  case 7:
    r0 = s.retval;
    s.tmp_2.arg1 = r0;
    s.callLocIdx = 194; s.pc = 6; return s.tmp_2;
  case 6:
    r0 = s.retval;
    r0 = (s.unnamed71___U3 + 1);
    s.unnamed71___U3 = (r0);
    { step = 1; continue; }
  case 2:
    s.unnamed70___U2 = (undefined);
    s.tmp_0 = jacdac_OutPipe_close__P2856_mk(s);
    s.tmp_0.arg0 = s.outp___11925;
    s.callLocIdx = 195; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    r0 = pxsim_pxtcore.endTry();
    { step = 4; continue; }
  case 3:
    r0 = pxsim_pxtcore.getThrownValue();
    s.e___11938 = (r0);
    s.tmp_0 = console_error__P2377_mk(s);
    if ((s.e___11938) && (s.e___11938).vtable) {
    setupResume(s, 10);
    pxsim_String__stringConv(s.e___11938);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.e___11938) + ""; }
  case 10:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat("respondForEach ", s.tmp_1);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 196; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_OutPipe_respondForEach_inline__P11923.info = {"start":3219,"length":290,"line":114,"column":34,"endLine":122,"endColumn":13,"fileName":"pxt_modules/jacdac/pipes.ts","functionName":"inline","argumentNames":[]}

function jacdac_OutPipe_respondForEach_inline__P11923_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_OutPipe_respondForEach_inline__P11923, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  outp___11925: undefined,
  e___11930: undefined,
  unnamed70___U2: undefined,
  unnamed71___U3: undefined,
  e___11938: undefined,
} }





function console_error__P2377(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = console_add__P2374_mk(s);
    s.tmp_0.arg0 = 3;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 20; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
console_error__P2377.info = {"start":1077,"length":82,"line":45,"column":4,"endLine":47,"endColumn":5,"fileName":"pxt_modules/core/console.ts","functionName":"error","argumentNames":["text"]}

function console_error__P2377_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_error__P2377, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_OutPipe_close__P2856(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_OutPipe__C2849_VT)) failedCast(r0);
    s.tmp_0 = jacdac_OutPipe_writeAndClose__P2855_mk(s);
    s.tmp_0.arg0 = s.arg0;
    r0 = pxsim.control.createBuffer(0);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 203; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_OutPipe_close__P2856.info = {"start":4333,"length":68,"line":154,"column":8,"endLine":156,"endColumn":9,"fileName":"pxt_modules/jacdac/pipes.ts","functionName":"close","argumentNames":["this"]}

function jacdac_OutPipe_close__P2856_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_OutPipe_close__P2856, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_OutPipe_writeAndClose__P2855(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_OutPipe__C2849_VT)) failedCast(r0);
    s.tmp_0 = jacdac_OutPipe_writeEx__P3971_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = 32;
    s.callLocIdx = 202; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_OutPipe_writeAndClose__P2855.info = {"start":4243,"length":80,"line":150,"column":8,"endLine":152,"endColumn":9,"fileName":"pxt_modules/jacdac/pipes.ts","functionName":"writeAndClose","argumentNames":["this","buf"]}

function jacdac_OutPipe_writeAndClose__P2855_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_OutPipe_writeAndClose__P2855, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_OutPipe_writeEx__P3971(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.pkt___11965 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_OutPipe__C2849_VT)) failedCast(r0);
    r0 = s.arg0.fields["port"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 7; continue; }
  case 1:
  case 2:
    s.tmp_3 = jacdac_JDPacket_from__P2782_mk(s);
    r0 = s.arg0.fields["nextCnt"];
    s.tmp_6 = r0;
    r0 = (s.tmp_6 & 31);
    s.tmp_5 = r0;
    r0 = s.arg0.fields["port"];
    s.tmp_8 = r0;
    r0 = (s.tmp_8 << 7);
    s.tmp_7 = r0;
    r0 = (s.tmp_5 | s.tmp_7);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 | s.arg2);
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = s.arg1;
    s.callLocIdx = 198; s.pc = 8; return s.tmp_3;
  case 8:
    r0 = s.retval;
    s.pkt___11965 = (r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = s.tmp_0.fields["nextCnt"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + 1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["nextCnt"] = (s.tmp_1);
    r0 = (s.arg2 & 32);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = (s.arg0).fields["port"] = (null);
  case 3:
  case 4:
    s.tmp_0 = jacdac_JDPacket_serviceIndex__P2794_mk(s);
    s.tmp_0.arg0 = s.pkt___11965;
    s.tmp_0.arg1 = 62;
    s.callLocIdx = 199; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    s.tmp_3 = jacdac_JDPacket__sendWithAck__P2822_mk(s);
    s.tmp_3.arg0 = s.pkt___11965;
    r0 = s.arg0.fields["deviceId"];
    s.tmp_3.arg1 = r0;
    s.callLocIdx = 200; s.pc = 10; return s.tmp_3;
  case 10:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = (s.arg0).fields["port"] = (null);
    r0 = pxsim_pxtcore.throwValue("out pipe error: no ACK");
  case 5:
  case 6:
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_OutPipe_writeEx__P3971.info = {"start":3595,"length":565,"line":129,"column":8,"endLine":144,"endColumn":9,"fileName":"pxt_modules/jacdac/pipes.ts","functionName":"writeEx","argumentNames":["this","buf","flags"]}

function jacdac_OutPipe_writeEx__P3971_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_OutPipe_writeEx__P3971, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  pkt___11965: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_JDPacket__sendWithAck__P2822(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.aw___12022 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = false;
    { step = 7; continue; }
  case 1:
  case 2:
    s.tmp_2 = jacdac_JDPacket_requiresAck__P2792_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = true;
    s.callLocIdx = 146; s.pc = 8; return s.tmp_2;
  case 8:
    r0 = s.retval;
    s.tmp_0 = jacdac_JDPacket__sendCmdId__P2820_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.callLocIdx = 147; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    r0 = pxsim_numops_toBoolDecr(globals.ackAwaiters___3894);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = pxsim_Array__mk();
    globals.ackAwaiters___3894 = (r0);
    s.tmp_0 = control_runInParallel__P2293_mk(s);
    s.tmp_0.arg0 = jacdac_JDPacket__sendWithAck_inline__P12016;
    s.callLocIdx = 150; s.pc = 10; return s.tmp_0;
  case 10:
    r0 = s.retval;
  case 3:
  case 4:
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_AckAwaiter__C3898_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_AckAwaiter_constructor__P3899_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg0;
    s.tmp_1.arg2 = s.arg1;
    s.callLocIdx = 151; s.pc = 11; return s.tmp_1;
  case 11:
    r0 = s.retval;
    s.aw___12022 = (s.tmp_0);
    r0 = pxsim_Array__push(globals.ackAwaiters___3894, s.aw___12022);
  case 5:
    r0 = s.aw___12022.fields["nextRetry"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    r0 = s.aw___12022.fields["eventId"];
    s.tmp_2 = r0;
    setupResume(s, 12);
    pxsim.control.waitForEvent(1023, s.tmp_2);
    checkResumeConsumed();
    return;
  case 12:
    r0 = s.retval;
    { step = 5; continue; }
  case 6:
    r0 = s.aw___12022.fields["nextRetry"];
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == 0);
  case 7:
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket__sendWithAck__P2822.info = {"start":8291,"length":675,"line":266,"column":8,"endLine":286,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"_sendWithAck","argumentNames":["this","devId"]}

function jacdac_JDPacket__sendWithAck__P2822_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket__sendWithAck__P2822, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  aw___12022: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket__sendWithAck_inline__P12016(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

  case 1:
    r0 = pxsim_numops_toBoolDecr(1);
    if (!r0) { step = 2; continue; }
    s.tmp_0 = pause__P2224_mk(s);
    r0 = pxsim.Math_.randomRange(20, 50);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 148; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.tmp_0 = jacdac_checkAckAwaiters__P3900_mk(s);
    s.callLocIdx = 149; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    { step = 1; continue; }
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket__sendWithAck_inline__P12016.info = {"start":8533,"length":178,"line":273,"column":38,"endLine":278,"endColumn":17,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"inline","argumentNames":[]}

function jacdac_JDPacket__sendWithAck_inline__P12016_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket__sendWithAck_inline__P12016, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function jacdac_AckAwaiter_constructor__P3899(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_AckAwaiter__C3898_VT)) failedCast(r0);
    r0 = (s.arg0).fields["pkt"] = (s.arg1);
    r0 = (s.arg0).fields["srcId"] = (s.arg2);
    r0 = (s.arg0).fields["numTries"] = (1);
    s.tmp_0 = r0 = s.arg0;
    r0 = s.arg1.fields["_header"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_2, 4, 0);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["crc"] = (s.tmp_1);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim.control.millis();
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + 40);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["nextRetry"] = (s.tmp_1);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim.control.allocateNotifyEvent();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["eventId"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_AckAwaiter_constructor__P3899.info = {"start":9114,"length":265,"line":294,"column":8,"endLine":301,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"inline","argumentNames":["this","pkt","srcId"]}

function jacdac_AckAwaiter_constructor__P3899_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_AckAwaiter_constructor__P3899, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_checkAckAwaiters__P3900(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.now___12059 = undefined;
    s.toRetry___12062 = undefined;
    s.a___12076 = undefined;
    s.unnamed62___U3 = undefined;
    s.unnamed63___U4 = undefined;
    r0 = pxsim.control.millis();
    s.now___12059 = (r0);
    r0 = pxsim_pxtcore_mkAction(1, toRetry_inline__P12064);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.now___12059);
    s.tmp_1 = helpers_arrayFilter__P1999_mk(s);
    s.tmp_1.arg0 = globals.ackAwaiters___3894;
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 153; s.pc = 11; return s.tmp_1;
  case 11:
    r0 = s.retval;
    s.toRetry___12062 = (r0);
    r0 = pxsim_Array__length(s.toRetry___12062);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 10; continue; }
  case 1:
  case 2:
    s.a___12076 = (undefined);
    s.unnamed62___U3 = (s.toRetry___12062);
    s.unnamed63___U4 = (0);
  case 3:
    s.tmp_0 = r0 = s.unnamed63___U4;
    r0 = pxsim_Array__length(s.unnamed62___U3);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 9; continue; }
    r0 = pxsim_Array__getAt(s.unnamed62___U3, s.unnamed63___U4);
    s.a___12076 = (r0);
    r0 = s.a___12076.fields["nextRetry"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == 0);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 4; continue; }
    { step = 8; continue; }
  case 4:
  case 5:
    r0 = s.a___12076.fields["numTries"];
    s.tmp_5 = r0;
    r0 = (s.tmp_5 >= 4);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 6; continue; }
    r0 = (s.a___12076).fields["nextRetry"] = (-1);
    r0 = s.a___12076.fields["eventId"];
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(1023, s.tmp_0, 1);
    { step = 7; continue; }
  case 6:
    s.tmp_0 = r0 = s.a___12076;
    r0 = s.tmp_0.fields["numTries"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + 1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["numTries"] = (s.tmp_1);
    s.tmp_0 = r0 = s.a___12076;
    s.tmp_2 = r0 = s.now___12059;
    r0 = s.a___12076.fields["numTries"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 * 40);
    s.tmp_3 = r0;
    r0 = (s.tmp_2 + s.tmp_3);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["nextRetry"] = (s.tmp_1);
    s.tmp_0 = jacdac_JDPacket__sendCore__P2817_mk(s);
    r0 = s.a___12076.fields["pkt"];
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 154; s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
  case 7:
  case 8:
    r0 = (s.unnamed63___U4 + 1);
    s.unnamed63___U4 = (r0);
    { step = 3; continue; }
  case 9:
    s.unnamed62___U3 = (undefined);
    s.tmp_0 = helpers_arrayFilter__P1999_mk(s);
    s.tmp_0.arg0 = globals.ackAwaiters___3894;
    s.tmp_0.arg1 = jacdac_checkAckAwaiters_inline__P12112;
    s.callLocIdx = 155; s.pc = 13; return s.tmp_0;
  case 13:
    r0 = s.retval;
    globals.ackAwaiters___3894 = (r0);
  case 10:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_checkAckAwaiters__P3900.info = {"start":9391,"length":646,"line":304,"column":4,"endLine":320,"endColumn":5,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"checkAckAwaiters","argumentNames":[]}

function jacdac_checkAckAwaiters__P3900_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_checkAckAwaiters__P3900, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  now___12059: undefined,
  toRetry___12062: undefined,
  a___12076: undefined,
  unnamed62___U3: undefined,
  unnamed63___U4: undefined,
} }





function toRetry_inline__P12064(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["nextRetry"];
    s.tmp_0 = r0;
    r0 = (s.caps[0] > s.tmp_0);
    return leave(s, r0)
  default: oops()
} } }
toRetry_inline__P12064.info = {"start":9501,"length":22,"line":306,"column":43,"endLine":306,"endColumn":65,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"inline","argumentNames":["a"]}

function toRetry_inline__P12064_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: toRetry_inline__P12064, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_checkAckAwaiters_inline__P12112(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["nextRetry"];
    s.tmp_0 = r0;
    r0 = (s.tmp_0 > 0);
    return leave(s, r0)
  default: oops()
} } }
jacdac_checkAckAwaiters_inline__P12112.info = {"start":10010,"length":20,"line":319,"column":41,"endLine":319,"endColumn":61,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"inline","argumentNames":["a"]}

function jacdac_checkAckAwaiters_inline__P12112_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_checkAckAwaiters_inline__P12112, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_OutPipe_write__P2854(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_OutPipe__C2849_VT)) failedCast(r0);
    s.tmp_0 = jacdac_OutPipe_writeEx__P3971_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = 0;
    s.callLocIdx = 201; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_OutPipe_write__P2854.info = {"start":4170,"length":63,"line":146,"column":8,"endLine":148,"endColumn":9,"fileName":"pxt_modules/jacdac/pipes.ts","functionName":"write","argumentNames":["this","buf"]}

function jacdac_OutPipe_write__P2854_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_OutPipe_write__P2854, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_OutPipe_from__P2851(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.idbuf___12126 = undefined;
    s.port___12127 = undefined;
    s.id___12128 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_1 = jacdac_jdunpack__P2827_mk(s);
    r0 = s.arg0.fields["_data"];
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = "b[8] u16";
    s.callLocIdx = 190; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_Array__getAt(s.tmp_0, 0);
    s.idbuf___12126 = (r0);
    r0 = pxsim_Array__getAt(s.tmp_0, 1);
    s.port___12127 = (r0);
    r0 = pxsim.BufferMethods.toHex(s.idbuf___12126);
    s.id___12128 = (r0);
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_OutPipe__C2849_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_OutPipe_constructor__P2850_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.id___12128;
    s.tmp_1.arg2 = s.port___12127;
    s.callLocIdx = 191; s.pc = 2; return s.tmp_1;
  case 2:
    r0 = s.retval;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
jacdac_OutPipe_from__P2851.info = {"start":2857,"length":245,"line":104,"column":8,"endLine":111,"endColumn":9,"fileName":"pxt_modules/jacdac/pipes.ts","functionName":"from","argumentNames":["pkt"]}

function jacdac_OutPipe_from__P2851_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_OutPipe_from__P2851, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  idbuf___12126: undefined,
  port___12127: undefined,
  id___12128: undefined,
  arg0: undefined,
} }





function jacdac_OutPipe_constructor__P2850(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_OutPipe__C2849_VT)) failedCast(r0);
    r0 = (s.arg0).fields["deviceId"] = (s.arg1);
    r0 = (s.arg0).fields["port"] = (s.arg2);
    r0 = (s.arg0).fields["nextCnt"] = (0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_OutPipe_constructor__P2850.info = {"start":2778,"length":69,"line":102,"column":8,"endLine":102,"endColumn":77,"fileName":"pxt_modules/jacdac/pipes.ts","functionName":"inline","argumentNames":["this","deviceId","port"]}

function jacdac_OutPipe_constructor__P2850_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_OutPipe_constructor__P2850, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_Server_handleRegBool__P3955(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___12141 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Server__C3172_VT)) failedCast(r0);
    r0 = pxsim_numops_toBoolDecr(s.arg3);
    if (!r0) { step = 1; continue; }
    r0 = 1;
    { step = 2; continue; }
  case 1:
    r0 = 0;
  case 2:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_Server_handleRegValue__P3954_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_1.arg1 = s.arg1;
    s.tmp_1.arg2 = s.arg2;
    s.tmp_1.arg3 = "u8";
    s.tmp_1.arg4 = s.tmp_0;
    s.callLocIdx = 397; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.res___12141 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.res___12141);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_0);
    return leave(s, r0)
  default: oops()
} } }
jacdac_Server_handleRegBool__P3955.info = {"start":16180,"length":326,"line":473,"column":8,"endLine":485,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"handleRegBool","argumentNames":["this","pkt","register","current"]}

function jacdac_Server_handleRegBool__P3955_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Server_handleRegBool__P3955, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  res___12141: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }





function jacdac_LoggerServer_log__P2998(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_LoggerServer__C2993_VT)) failedCast(r0);
    s.tmp_0 = jacdac_LoggerServer_add__P3001_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = 1;
    s.tmp_0.arg2 = s.arg1;
    s.callLocIdx = 213; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_LoggerServer_log__P2998.info = {"start":1570,"length":95,"line":40,"column":8,"endLine":42,"endColumn":9,"fileName":"pxt_modules/jacdac/logger-server/server.ts","functionName":"log","argumentNames":["this","message"]}

function jacdac_LoggerServer_log__P2998_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_LoggerServer_log__P2998, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_LoggerServer_handlePacket__P2996(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.now___12172 = undefined;
    s.d___12175 = undefined;
    s.elapsed___12180 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_LoggerServer__C2993_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = jacdac_Server_handleRegValue__P3954_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.arg1;
    s.tmp_2.arg2 = 128;
    s.tmp_2.arg3 = "u8";
    r0 = s.arg0.fields["minPriority"];
    s.tmp_2.arg4 = r0;
    s.callLocIdx = 210; s.pc = 9; return s.tmp_2;
  case 9:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["minPriority"] = (s.tmp_1);
    r0 = s.arg1.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 4, 14);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.switch_eq(8320, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 8; continue; }
  case 1:
    r0 = pxsim.control.millis();
    s.now___12172 = (r0);
    s.tmp_1 = jacdac_JDPacket_jdunpack__P2809_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.tmp_1.arg1 = "u8";
    s.callLocIdx = 212; s.pc = 10; return s.tmp_1;
  case 10:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_Array__getAt(s.tmp_0, 0);
    s.d___12175 = (r0);
    r0 = s.arg0.fields["_lastListenerTime"];
    s.tmp_0 = r0;
    r0 = (s.now___12172 - s.tmp_0);
    s.elapsed___12180 = (r0);
    r0 = s.arg0.fields["minPriority"];
    s.tmp_1 = r0;
    r0 = (s.d___12175 <= s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = (s.elapsed___12180 > 1500);
  case 3:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 4; continue; }
    r0 = (s.arg0).fields["minPriority"] = (s.d___12175);
    r0 = (s.arg0).fields["_lastListenerTime"] = (s.now___12172);
  case 4:
  case 5:
    r0 = s.arg0.fields["minPriority"];
    s.tmp_1 = r0;
    r0 = (globals.minPriority___2373 > s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    r0 = s.arg0.fields["minPriority"];
    globals.minPriority___2373 = (r0);
  case 6:
  case 7:
  case 8:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_LoggerServer_handlePacket__P2996.info = {"start":279,"length":1173,"line":10,"column":8,"endLine":35,"endColumn":9,"fileName":"pxt_modules/jacdac/logger-server/server.ts","functionName":"handlePacket","argumentNames":["this","packet"]}

function jacdac_LoggerServer_handlePacket__P2996_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_LoggerServer_handlePacket__P2996, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  now___12172: undefined,
  d___12175: undefined,
  elapsed___12180: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_ClientPacketQueue_constructor__P4039(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_ClientPacketQueue__C4034_VT)) failedCast(r0);
    r0 = (s.arg0).fields["parent"] = (s.arg1);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["pkts"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_ClientPacketQueue_constructor__P4039.info = {"start":19176,"length":46,"line":575,"column":8,"endLine":575,"endColumn":54,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["this","parent"]}

function jacdac_ClientPacketQueue_constructor__P4039_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_ClientPacketQueue_constructor__P4039, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_RegisterClient_constructor__P3185(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.arg4 = (s.lambdaArgs[4]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_RegisterClient__C3184_VT)) failedCast(r0);
    r0 = (s.arg0).fields["service"] = (s.arg1);
    r0 = (s.arg0).fields["code"] = (s.arg2);
    r0 = (s.arg0).fields["packFormat"] = (s.arg3);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["listeners"] = (s.tmp_1);
    s.tmp_2 = jacdac_EventSource_constructor__P3255_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.callLocIdx = 407; s.pc = 3; return s.tmp_2;
  case 3:
    r0 = s.retval;
    r0 = pxsim_numops_toBoolDecr(s.arg4);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = jacdac_jdpack__P2828_mk(s);
    r0 = s.arg0.fields["packFormat"];
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = s.arg4;
    s.callLocIdx = 408; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    { step = 2; continue; }
  case 1:
    r0 = undefined;
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = (s.arg0).fields["_data"] = (s.tmp_1);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim.control.millis();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["_localTime"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_RegisterClient_constructor__P3185.info = {"start":20767,"length":393,"line":627,"column":8,"endLine":638,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["this","service","code","packFormat","defaultValue"]}

function jacdac_RegisterClient_constructor__P3185_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_RegisterClient_constructor__P3185, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
  arg4: undefined,
} }





function jacdac_Client_constructor__P3199(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Client__C3193_VT)) failedCast(r0);
    r0 = (s.arg0).fields["serviceClass"] = (s.arg1);
    r0 = (s.arg0).fields["role"] = (s.arg2);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["listeners"] = (s.tmp_1);
    r0 = (s.arg0).fields["systemActive"] = (false);
    s.tmp_2 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_3 = r0;
    r0 = (s.tmp_2).fields["registers"] = (s.tmp_3);
    s.tmp_4 = jacdac_EventSource_constructor__P3255_mk(s);
    s.tmp_4.arg0 = s.arg0;
    s.callLocIdx = 416; s.pc = 3; return s.tmp_4;
  case 3:
    r0 = s.retval;
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim.control.allocateNotifyEvent();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["eventId"] = (s.tmp_1);
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_ClientPacketQueue__C4034_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_ClientPacketQueue_constructor__P4039_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg0;
    s.callLocIdx = 417; s.pc = 4; return s.tmp_1;
  case 4:
    r0 = s.retval;
    r0 = (s.arg0).fields["config"] = (s.tmp_0);
    r0 = s.arg0.fields["role"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.throwValue("no role");
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_constructor__P3199.info = {"start":23860,"length":257,"line":720,"column":8,"endLine":725,"endColumn":9,"fileName":"pxt_modules/jacdac/routing.ts","functionName":"inline","argumentNames":["this","serviceClass","role"]}

function jacdac_Client_constructor__P3199_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_constructor__P3199, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_JDPacket_toString__P2816(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.msg___12240 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = pxsim_String_.mkEmpty();
    s.tmp_8 = r0;
    s.tmp_11 = jacdac_shortDeviceId__P3219_mk(s);
    r0 = s.arg0.fields["_header"];
    s.tmp_13 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_13, 4, 8);
    s.tmp_12 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_12);
    s.tmp_11.arg0 = r0;
    s.callLocIdx = 129; s.pc = 3; return s.tmp_11;
  case 3:
    r0 = s.retval;
    s.tmp_10 = r0;
    if ((s.tmp_10) && (s.tmp_10).vtable) {
    setupResume(s, 4);
    pxsim_String__stringConv(s.tmp_10);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_10) + ""; }
  case 4:
    r0 = s.retval;
    s.tmp_9 = r0;
    r0 = pxsim_String__concat(s.tmp_8, s.tmp_9);
    s.tmp_7 = r0;
    r0 = pxsim_String__concat(s.tmp_7, "/");
    s.tmp_6 = r0;
    r0 = s.arg0.fields["_header"];
    s.tmp_17 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_17, 13);
    s.tmp_16 = r0;
    r0 = (s.tmp_16 & 63);
    s.tmp_15 = r0;
    if ((s.tmp_15) && (s.tmp_15).vtable) {
    setupResume(s, 5);
    pxsim_String__stringConv(s.tmp_15);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_15) + ""; }
  case 5:
    r0 = s.retval;
    s.tmp_14 = r0;
    r0 = pxsim_String__concat(s.tmp_6, s.tmp_14);
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(s.tmp_5, "[");
    s.tmp_4 = r0;
    r0 = s.arg0.fields["_header"];
    s.tmp_20 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_20, 3);
    s.tmp_19 = r0;
    if ((s.tmp_19) && (s.tmp_19).vtable) {
    setupResume(s, 6);
    pxsim_String__stringConv(s.tmp_19);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_19) + ""; }
  case 6:
    r0 = s.retval;
    s.tmp_18 = r0;
    r0 = pxsim_String__concat(s.tmp_4, s.tmp_18);
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_3, "]: ");
    s.tmp_2 = r0;
    s.tmp_23 = jacdac_hexNum__P3896_mk(s);
    r0 = s.arg0.fields["_header"];
    s.tmp_24 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_24, 4, 14);
    s.tmp_23.arg0 = r0;
    s.tmp_23.arg1 = 4;
    s.callLocIdx = 133; s.pc = 7; return s.tmp_23;
  case 7:
    r0 = s.retval;
    s.tmp_22 = r0;
    if ((s.tmp_22) && (s.tmp_22).vtable) {
    setupResume(s, 8);
    pxsim_String__stringConv(s.tmp_22);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_22) + ""; }
  case 8:
    r0 = s.retval;
    s.tmp_21 = r0;
    r0 = pxsim_String__concat(s.tmp_2, s.tmp_21);
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_1, " sz=");
    s.tmp_0 = r0;
    r0 = s.arg0.fields["_header"];
    s.tmp_27 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_27, 12);
    s.tmp_26 = r0;
    if ((s.tmp_26) && (s.tmp_26).vtable) {
    setupResume(s, 9);
    pxsim_String__stringConv(s.tmp_26);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_26) + ""; }
  case 9:
    r0 = s.retval;
    s.tmp_25 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_25);
    s.msg___12240 = (r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_2, 12);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 < 20);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    if ((s.msg___12240) && (s.msg___12240).vtable) {
    setupResume(s, 10);
    pxsim_String__stringConv(s.msg___12240);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.msg___12240) + ""; }
  case 10:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = s.arg0.fields["_data"];
    s.tmp_8 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_8);
    s.tmp_7 = r0;
    if ((s.tmp_7) && (s.tmp_7).vtable) {
    setupResume(s, 11);
    pxsim_String__stringConv(s.tmp_7);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_7) + ""; }
  case 11:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(": ", s.tmp_6);
    s.tmp_5 = r0;
    if ((s.tmp_5) && (s.tmp_5).vtable) {
    setupResume(s, 12);
    pxsim_String__stringConv(s.tmp_5);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_5) + ""; }
  case 12:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_4);
    s.msg___12240 = (r0);
    { step = 2; continue; }
  case 1:
    if ((s.msg___12240) && (s.msg___12240).vtable) {
    setupResume(s, 13);
    pxsim_String__stringConv(s.msg___12240);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.msg___12240) + ""; }
  case 13:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = s.arg0.fields["_data"];
    s.tmp_8 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_8, 0, 20);
    s.tmp_7 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_7);
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 14);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 14:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(": ", s.tmp_5);
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 15);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 15:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_3, "...");
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 16);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 16:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_1);
    s.msg___12240 = (r0);
  case 2:
    r0 = s.msg___12240;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_toString__P2816.info = {"start":6758,"length":411,"line":221,"column":8,"endLine":230,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"toString","argumentNames":["this"]}

function jacdac_JDPacket_toString__P2816_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_toString__P2816, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  tmp_15: undefined,
  tmp_16: undefined,
  tmp_17: undefined,
  tmp_18: undefined,
  tmp_19: undefined,
  tmp_20: undefined,
  tmp_21: undefined,
  tmp_22: undefined,
  tmp_23: undefined,
  tmp_24: undefined,
  tmp_25: undefined,
  tmp_26: undefined,
  tmp_27: undefined,
  msg___12240: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_size__P2790(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C2777_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_0, 12);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_size__P2790.info = {"start":3207,"length":66,"line":96,"column":8,"endLine":98,"endColumn":9,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"size","argumentNames":["this"]}
jacdac_JDPacket_size__P2790.isGetter = true;

function jacdac_JDPacket_size__P2790_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_size__P2790, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_hexNum__P3896(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.hex___12305 = undefined;
    s.r___12307 = undefined;
    s.i___12308 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.hex___12305 = ("0123456789abcdef");
    s.r___12307 = ("0x");
    s.i___12308 = (0);
  case 1:
    r0 = (s.i___12308 < s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    if ((s.r___12307) && (s.r___12307).vtable) {
    setupResume(s, 3);
    pxsim_String__stringConv(s.r___12307);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___12307) + ""; }
  case 3:
    r0 = s.retval;
    s.tmp_1 = r0;
    s.tmp_4 = r0 = s.hex___12305;
    s.tmp_7 = r0 = s.arg0;
    r0 = (s.arg1 - 1);
    s.tmp_10 = r0;
    r0 = (s.tmp_10 - s.i___12308);
    s.tmp_9 = r0;
    r0 = (s.tmp_9 * 4);
    s.tmp_8 = r0;
    r0 = (s.tmp_7 >>> s.tmp_8);
    s.tmp_6 = r0;
    r0 = (s.tmp_6 & 15);
    s.tmp_5 = r0;
    r0 = pxsim_String_.charAt(s.tmp_4, s.tmp_5);
    s.tmp_3 = r0;
    if ((s.tmp_3) && (s.tmp_3).vtable) {
    setupResume(s, 4);
    pxsim_String__stringConv(s.tmp_3);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_3) + ""; }
  case 4:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_1, s.tmp_2);
    s.r___12307 = (r0);
    r0 = (s.i___12308 + 1);
    s.i___12308 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = s.r___12307;
    return leave(s, r0)
  default: oops()
} } }
jacdac_hexNum__P3896.info = {"start":1051,"length":226,"line":27,"column":4,"endLine":34,"endColumn":5,"fileName":"pxt_modules/jacdac/packet.ts","functionName":"hexNum","argumentNames":["n","len"]}

function jacdac_hexNum__P3896_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_hexNum__P3896, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  hex___12305: undefined,
  r___12307: undefined,
  i___12308: undefined,
  arg0: undefined,
  arg1: undefined,
} }




function lambda_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function lambda_2_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
} }


function lambda_3_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }


function lambda_4_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }


function jacdac_Server__C3172_v0_2_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
} }


function jacdac_Client__C3193_v0_2_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
} }


function jacdac_Server__C3172_v1_2_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
} }


function if_disableLogger_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function if_disableRoleManager_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function if_noWait_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function jacdac_Server__C3172_v2_2_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
} }


function if_digitalWrite_2_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
} }


function if_setPull_2_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
} }


function if_digitalRead_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function jacdac_Client__C3193_v1_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }

const jacdac_EventSource__C3254_VT = mkVTable({
  name: "EventSource",
  numFields: 1,
  classNo: 16,
  lastSubtypeNo: 24,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "listeners": null,
    "set/listeners": null,
    "on": jacdac_EventSource_on__P3256,
    "addListenerInternal": jacdac_EventSource_addListenerInternal__P3936,
    "removeListenerInternal": jacdac_EventSource_removeListenerInternal__P3937,
    "emit": jacdac_EventSource_emit__P3259,
    "subscribe": jacdac_EventSource_subscribe__P3261,
  },
});
const jacdac_Bus__C3152_VT = mkVTable({
  name: "Bus",
  numFields: 11,
  classNo: 17,
  lastSubtypeNo: 17,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "listeners": null,
    "set/listeners": null,
    "hostServices": null,
    "set/hostServices": null,
    "devices": null,
    "set/devices": null,
    "_myDevice": null,
    "set/_myDevice": null,
    "restartCounter": null,
    "set/restartCounter": null,
    "resetIn": null,
    "set/resetIn": null,
    "autoBindCnt": null,
    "set/autoBindCnt": null,
    "_eventCounter": null,
    "set/_eventCounter": null,
    "controlServer": null,
    "set/controlServer": null,
    "unattachedClients": null,
    "set/unattachedClients": null,
    "allClients": null,
    "set/allClients": null,
    "running": jacdac_Bus_running__P3158,
    "start": jacdac_Bus_start__P3159,
    "gcDevices": jacdac_Bus_gcDevices__P4029,
    "selfDevice": jacdac_Bus_selfDevice__P3160,
    "mkEventCmd": jacdac_Bus_mkEventCmd__P3161,
    "clearAttachCache": jacdac_Bus_clearAttachCache__P3162,
    "queueAnnounce": jacdac_Bus_queueAnnounce__P3163,
    "detachClient": jacdac_Bus_detachClient__P3164,
    "attachClient": jacdac_Bus_attachClient__P3165,
    "startClient": jacdac_Bus_startClient__P3166,
    "reattach": jacdac_Bus_reattach__P3168,
    "processPacket": jacdac_Bus_processPacket__P3169,
    "on": jacdac_EventSource_on__P3256,
    "addListenerInternal": jacdac_EventSource_addListenerInternal__P3936,
    "removeListenerInternal": jacdac_EventSource_removeListenerInternal__P3937,
    "emit": jacdac_EventSource_emit__P3259,
    "subscribe": jacdac_EventSource_subscribe__P3261,
  },
});
const jacdac_Device__C3220_VT = mkVTable({
  name: "Device",
  numFields: 9,
  classNo: 18,
  lastSubtypeNo: 18,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "listeners": null,
    "set/listeners": null,
    "lastSeen": null,
    "set/lastSeen": null,
    "clients": null,
    "set/clients": null,
    "_eventCounter": null,
    "set/_eventCounter": null,
    "_shortId": null,
    "set/_shortId": null,
    "queries": null,
    "set/queries": null,
    "_score": null,
    "set/_score": null,
    "deviceId": null,
    "set/deviceId": null,
    "services": null,
    "set/services": null,
    "announceflags": jacdac_Device_announceflags__P3225,
    "resetCount": jacdac_Device_resetCount__P3226,
    "shortId": jacdac_Device_shortId__P3229,
    "toString": jacdac_Device_toString__P3230,
    "matchesRoleAt": jacdac_Device_matchesRoleAt__P3231,
    "lookupQuery": jacdac_Device_lookupQuery__P4045,
    "serviceClassLength": jacdac_Device_serviceClassLength__P3232,
    "serviceClassAt": jacdac_Device_serviceClassAt__P3233,
    "query": jacdac_Device_query__P3234,
    "uptime": jacdac_Device_uptime__P3235,
    "processPacket": jacdac_Device_processPacket__P3238,
    "hasService": jacdac_Device_hasService__P3239,
    "sendCtrlCommand": jacdac_Device_sendCtrlCommand__P3241,
    "_destroy": jacdac_Device__destroy__P3242,
    "on": jacdac_EventSource_on__P3256,
    "addListenerInternal": jacdac_EventSource_addListenerInternal__P3936,
    "removeListenerInternal": jacdac_EventSource_removeListenerInternal__P3937,
    "emit": jacdac_EventSource_emit__P3259,
    "subscribe": jacdac_EventSource_subscribe__P3261,
  },
  toStringMethod: jacdac_Device_toString__P3230,
});
const jacdac_JDPacket__C2777_VT = mkVTable({
  name: "JDPacket",
  numFields: 3,
  classNo: 25,
  lastSubtypeNo: 25,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "_header": null,
    "set/_header": null,
    "_data": null,
    "set/_data": null,
    "timestamp": null,
    "set/timestamp": null,
    "fromBinary": jacdac_JDPacket_fromBinary__P2781,
    "from": jacdac_JDPacket_from__P2782,
    "onlyHeader": jacdac_JDPacket_onlyHeader__P2783,
    "jdpacked": jacdac_JDPacket_jdpacked__P2784,
    "deviceIdentifier": jacdac_JDPacket_deviceIdentifier__P2786,
    "set/deviceIdentifier": jacdac_JDPacket_deviceIdentifier__P2787,
    "packetFlags": jacdac_JDPacket_packetFlags__P2788,
    "multicommandClass": jacdac_JDPacket_multicommandClass__P2789,
    "size": jacdac_JDPacket_size__P2790,
    "requiresAck": jacdac_JDPacket_requiresAck__P2791,
    "set/requiresAck": jacdac_JDPacket_requiresAck__P2792,
    "serviceIndex": jacdac_JDPacket_serviceIndex__P2793,
    "set/serviceIndex": jacdac_JDPacket_serviceIndex__P2794,
    "crc": jacdac_JDPacket_crc__P2795,
    "serviceCommand": jacdac_JDPacket_serviceCommand__P2796,
    "set/serviceCommand": jacdac_JDPacket_serviceCommand__P2797,
    "isEvent": jacdac_JDPacket_isEvent__P2798,
    "eventCode": jacdac_JDPacket_eventCode__P2799,
    "eventCounter": jacdac_JDPacket_eventCounter__P2800,
    "isRegGet": jacdac_JDPacket_isRegGet__P2802,
    "regCode": jacdac_JDPacket_regCode__P2803,
    "data": jacdac_JDPacket_data__P2804,
    "set/data": jacdac_JDPacket_data__P2805,
    "intData": jacdac_JDPacket_intData__P2806,
    "jdunpack": jacdac_JDPacket_jdunpack__P2809,
    "compress": jacdac_JDPacket_compress__P2810,
    "isCommand": jacdac_JDPacket_isCommand__P2814,
    "isReport": jacdac_JDPacket_isReport__P2815,
    "toString": jacdac_JDPacket_toString__P2816,
    "_sendCore": jacdac_JDPacket__sendCore__P2817,
    "_sendReport": jacdac_JDPacket__sendReport__P2818,
    "_sendCmd": jacdac_JDPacket__sendCmd__P2819,
    "_sendCmdId": jacdac_JDPacket__sendCmdId__P2820,
    "sendAsMultiCommand": jacdac_JDPacket_sendAsMultiCommand__P2821,
    "_sendWithAck": jacdac_JDPacket__sendWithAck__P2822,
  },
  toStringMethod: jacdac_JDPacket_toString__P2816,
});
const jacdac_TokenParser__C3929_VT = mkVTable({
  name: "TokenParser",
  numFields: 9,
  classNo: 26,
  lastSubtypeNo: 26,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "c0": null,
    "set/c0": null,
    "size": null,
    "set/size": null,
    "div": null,
    "set/div": null,
    "fp": null,
    "set/fp": null,
    "nfmt": null,
    "set/nfmt": null,
    "nfmt2": null,
    "set/nfmt2": null,
    "word": null,
    "set/word": null,
    "isArray": null,
    "set/isArray": null,
    "fmt": null,
    "set/fmt": null,
    "parse": jacdac_TokenParser_parse__P3930,
  },
});
const music_Melody__C3789_VT = mkVTable({
  name: "Melody",
  numFields: 6,
  classNo: 27,
  lastSubtypeNo: 27,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "melodyArray": null,
    "set/melodyArray": null,
    "currentDuration": null,
    "set/currentDuration": null,
    "currentOctave": null,
    "set/currentOctave": null,
    "currentPos": null,
    "set/currentPos": null,
    "repeating": null,
    "set/repeating": null,
    "background": null,
    "set/background": null,
    "hasNextNote": music_Melody_hasNextNote__P3790,
    "nextNote": music_Melody_nextNote__P3791,
  },
});
const jacdac_Server__C3172_VT = mkVTable({
  name: "Server",
  numFields: 8,
  classNo: 19,
  lastSubtypeNo: 22,
  maxBgInstances: null,
  methods: {
    "handlePacketOuter": jacdac_Server_handlePacketOuter__P3178,
    "handlePacket": jacdac_Server_handlePacket__P3179,
    "log": jacdac_Server_log__P3959,
  },
  iface: {
    "listeners": null,
    "set/listeners": null,
    "supressLog": null,
    "set/supressLog": null,
    "running": null,
    "set/running": null,
    "serviceIndex": null,
    "set/serviceIndex": null,
    "stateUpdated": null,
    "set/stateUpdated": null,
    "_statusCode": null,
    "set/_statusCode": null,
    "instanceName": null,
    "set/instanceName": null,
    "serviceClass": null,
    "set/serviceClass": null,
    "handlePacketOuter": jacdac_Server_handlePacketOuter__P3178,
    "handlePacket": jacdac_Server_handlePacket__P3179,
    "advertisementData": jacdac_Server_advertisementData__P3181,
    "sendReport": jacdac_Server_sendReport__P3947,
    "sendEvent": jacdac_Server_sendEvent__P3948,
    "sendChangeEvent": jacdac_Server_sendChangeEvent__P3949,
    "handleAnnounce": jacdac_Server_handleAnnounce__P3950,
    "handleStatusCode": jacdac_Server_handleStatusCode__P3951,
    "handleInstanceName": jacdac_Server_handleInstanceName__P3952,
    "handleRegValue": jacdac_Server_handleRegValue__P3954,
    "handleRegBool": jacdac_Server_handleRegBool__P3955,
    "handleRegUInt32": jacdac_Server_handleRegUInt32__P3957,
    "start": jacdac_Server_start__P3182,
    "log": jacdac_Server_log__P3959,
    "on": jacdac_EventSource_on__P3256,
    "addListenerInternal": jacdac_EventSource_addListenerInternal__P3936,
    "removeListenerInternal": jacdac_EventSource_removeListenerInternal__P3937,
    "emit": jacdac_EventSource_emit__P3259,
    "subscribe": jacdac_EventSource_subscribe__P3261,
  },
});
const jacdac_Client__C3193_VT = mkVTable({
  name: "Client",
  numFields: 15,
  classNo: 23,
  lastSubtypeNo: 23,
  maxBgInstances: null,
  methods: {
    "handlePacket": jacdac_Client_handlePacket__P3209,
    "announceCallback": jacdac_Client_announceCallback__P3218,
  },
  iface: {
    "listeners": null,
    "set/listeners": null,
    "device": null,
    "set/device": null,
    "_currentDevice": null,
    "set/_currentDevice": null,
    "eventId": null,
    "set/eventId": null,
    "broadcast": null,
    "set/broadcast": null,
    "serviceIndex": null,
    "set/serviceIndex": null,
    "supressLog": null,
    "set/supressLog": null,
    "started": null,
    "set/started": null,
    "advertisementData": null,
    "set/advertisementData": null,
    "handlers": null,
    "set/handlers": null,
    "systemActive": null,
    "set/systemActive": null,
    "config": null,
    "set/config": null,
    "registers": null,
    "set/registers": null,
    "serviceClass": null,
    "set/serviceClass": null,
    "role": null,
    "set/role": null,
    "currentDevice": jacdac_Client_currentDevice__P3200,
    "set/currentDevice": jacdac_Client_currentDevice__P3201,
    "handlePacketOuter": jacdac_Client_handlePacketOuter__P3208,
    "handlePacket": jacdac_Client_handlePacket__P3209,
    "_attach": jacdac_Client__attach__P3210,
    "handleConnected": jacdac_Client_handleConnected__P3939,
    "_detach": jacdac_Client__detach__P3211,
    "sendCommand": jacdac_Client_sendCommand__P3212,
    "raiseEvent": jacdac_Client_raiseEvent__P3941,
    "start": jacdac_Client_start__P3216,
    "announceCallback": jacdac_Client_announceCallback__P3218,
    "on": jacdac_EventSource_on__P3256,
    "addListenerInternal": jacdac_EventSource_addListenerInternal__P3936,
    "removeListenerInternal": jacdac_EventSource_removeListenerInternal__P3937,
    "emit": jacdac_EventSource_emit__P3259,
    "subscribe": jacdac_EventSource_subscribe__P3261,
  },
});
const jacdac_RegisterClient__C3184_VT = mkVTable({
  name: "RegisterClient",
  numFields: 6,
  classNo: 24,
  lastSubtypeNo: 24,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "listeners": null,
    "set/listeners": null,
    "_data": null,
    "set/_data": null,
    "_localTime": null,
    "set/_localTime": null,
    "service": null,
    "set/service": null,
    "code": null,
    "set/code": null,
    "packFormat": null,
    "set/packFormat": null,
    "reset": jacdac_RegisterClient_reset__P3186,
    "handlePacket": jacdac_RegisterClient_handlePacket__P3192,
    "on": jacdac_EventSource_on__P3256,
    "addListenerInternal": jacdac_EventSource_addListenerInternal__P3936,
    "removeListenerInternal": jacdac_EventSource_removeListenerInternal__P3937,
    "emit": jacdac_EventSource_emit__P3259,
    "subscribe": jacdac_EventSource_subscribe__P3261,
  },
});
const jacdac_ClientPacketQueue__C4034_VT = mkVTable({
  name: "ClientPacketQueue",
  numFields: 2,
  classNo: 28,
  lastSubtypeNo: 28,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "pkts": null,
    "set/pkts": null,
    "parent": null,
    "set/parent": null,
    "resend": jacdac_ClientPacketQueue_resend__P4038,
  },
});
const SoundExpression__C2683_VT = mkVTable({
  name: "SoundExpression",
  numFields: 1,
  classNo: 29,
  lastSubtypeNo: 29,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "notes": null,
    "set/notes": null,
    "play": SoundExpression_play__P2685,
  },
});
const jacdac_EventListener__C3251_VT = mkVTable({
  name: "EventListener",
  numFields: 3,
  classNo: 30,
  lastSubtypeNo: 30,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "key": null,
    "set/key": null,
    "handler": null,
    "set/handler": null,
    "once": null,
    "set/once": null,
  },
});
const jacdac_LoggerServer__C2993_VT = mkVTable({
  name: "LoggerServer",
  numFields: 10,
  classNo: 20,
  lastSubtypeNo: 20,
  maxBgInstances: null,
  methods: {
    "handlePacketOuter": jacdac_Server_handlePacketOuter__P3178,
    "handlePacket": jacdac_LoggerServer_handlePacket__P2996,
    "log": jacdac_LoggerServer_log__P2998,
  },
  iface: {
    "listeners": null,
    "set/listeners": null,
    "supressLog": null,
    "set/supressLog": null,
    "running": null,
    "set/running": null,
    "serviceIndex": null,
    "set/serviceIndex": null,
    "stateUpdated": null,
    "set/stateUpdated": null,
    "_statusCode": null,
    "set/_statusCode": null,
    "instanceName": null,
    "set/instanceName": null,
    "serviceClass": null,
    "set/serviceClass": null,
    "_lastListenerTime": null,
    "set/_lastListenerTime": null,
    "minPriority": null,
    "set/minPriority": null,
    "handlePacket": jacdac_LoggerServer_handlePacket__P2996,
    "log": jacdac_LoggerServer_log__P2998,
    "add": jacdac_LoggerServer_add__P3001,
    "handlePacketOuter": jacdac_Server_handlePacketOuter__P3178,
    "advertisementData": jacdac_Server_advertisementData__P3181,
    "sendReport": jacdac_Server_sendReport__P3947,
    "sendEvent": jacdac_Server_sendEvent__P3948,
    "sendChangeEvent": jacdac_Server_sendChangeEvent__P3949,
    "handleAnnounce": jacdac_Server_handleAnnounce__P3950,
    "handleStatusCode": jacdac_Server_handleStatusCode__P3951,
    "handleInstanceName": jacdac_Server_handleInstanceName__P3952,
    "handleRegValue": jacdac_Server_handleRegValue__P3954,
    "handleRegBool": jacdac_Server_handleRegBool__P3955,
    "handleRegUInt32": jacdac_Server_handleRegUInt32__P3957,
    "start": jacdac_Server_start__P3182,
    "on": jacdac_EventSource_on__P3256,
    "addListenerInternal": jacdac_EventSource_addListenerInternal__P3936,
    "removeListenerInternal": jacdac_EventSource_removeListenerInternal__P3937,
    "emit": jacdac_EventSource_emit__P3259,
    "subscribe": jacdac_EventSource_subscribe__P3261,
  },
});
const jacdac__rolemgr_RoleManagerServer__C3075_VT = mkVTable({
  name: "RoleManagerServer",
  numFields: 10,
  classNo: 21,
  lastSubtypeNo: 21,
  maxBgInstances: null,
  methods: {
    "handlePacketOuter": jacdac_Server_handlePacketOuter__P3178,
    "handlePacket": jacdac__rolemgr_RoleManagerServer_handlePacket__P3078,
    "log": jacdac_Server_log__P3959,
  },
  iface: {
    "listeners": null,
    "set/listeners": null,
    "supressLog": null,
    "set/supressLog": null,
    "running": null,
    "set/running": null,
    "serviceIndex": null,
    "set/serviceIndex": null,
    "stateUpdated": null,
    "set/stateUpdated": null,
    "_statusCode": null,
    "set/_statusCode": null,
    "instanceName": null,
    "set/instanceName": null,
    "serviceClass": null,
    "set/serviceClass": null,
    "_oldBindingsHash": null,
    "set/_oldBindingsHash": null,
    "autoBind": null,
    "set/autoBind": null,
    "handlePacket": jacdac__rolemgr_RoleManagerServer_handlePacket__P3078,
    "bindingHash": jacdac__rolemgr_RoleManagerServer_bindingHash__P4022,
    "resetToProxy": jacdac__rolemgr_RoleManagerServer_resetToProxy__P3079,
    "checkProxy": jacdac__rolemgr_RoleManagerServer_checkProxy__P3080,
    "bindRoles": jacdac__rolemgr_RoleManagerServer_bindRoles__P3081,
    "checkChanges": jacdac__rolemgr_RoleManagerServer_checkChanges__P4023,
    "handlePacketOuter": jacdac_Server_handlePacketOuter__P3178,
    "advertisementData": jacdac_Server_advertisementData__P3181,
    "sendReport": jacdac_Server_sendReport__P3947,
    "sendEvent": jacdac_Server_sendEvent__P3948,
    "sendChangeEvent": jacdac_Server_sendChangeEvent__P3949,
    "handleAnnounce": jacdac_Server_handleAnnounce__P3950,
    "handleStatusCode": jacdac_Server_handleStatusCode__P3951,
    "handleInstanceName": jacdac_Server_handleInstanceName__P3952,
    "handleRegValue": jacdac_Server_handleRegValue__P3954,
    "handleRegBool": jacdac_Server_handleRegBool__P3955,
    "handleRegUInt32": jacdac_Server_handleRegUInt32__P3957,
    "start": jacdac_Server_start__P3182,
    "log": jacdac_Server_log__P3959,
    "on": jacdac_EventSource_on__P3256,
    "addListenerInternal": jacdac_EventSource_addListenerInternal__P3936,
    "removeListenerInternal": jacdac_EventSource_removeListenerInternal__P3937,
    "emit": jacdac_EventSource_emit__P3259,
    "subscribe": jacdac_EventSource_subscribe__P3261,
  },
});
const jacdac__rolemgr_DeviceWrapper__C4010_VT = mkVTable({
  name: "DeviceWrapper",
  numFields: 3,
  classNo: 31,
  lastSubtypeNo: 31,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "bindings": null,
    "set/bindings": null,
    "score": null,
    "set/score": null,
    "device": null,
    "set/device": null,
  },
});
const jacdac__rolemgr_RoleBinding__C4012_VT = mkVTable({
  name: "RoleBinding",
  numFields: 4,
  classNo: 32,
  lastSubtypeNo: 32,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "boundToDev": null,
    "set/boundToDev": null,
    "boundToServiceIdx": null,
    "set/boundToServiceIdx": null,
    "role": null,
    "set/role": null,
    "serviceClass": null,
    "set/serviceClass": null,
    "host": jacdac__rolemgr_RoleBinding_host__P4013,
    "select": jacdac__rolemgr_RoleBinding_select__P4014,
  },
});
const jacdac__rolemgr_ServerBindings__C4016_VT = mkVTable({
  name: "ServerBindings",
  numFields: 2,
  classNo: 33,
  lastSubtypeNo: 33,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "bindings": null,
    "set/bindings": null,
    "host": null,
    "set/host": null,
    "fullyBound": jacdac__rolemgr_ServerBindings_fullyBound__P4017,
    "scoreFor": jacdac__rolemgr_ServerBindings_scoreFor__P4018,
  },
});
const jacdac_DelayedPacket__C3976_VT = mkVTable({
  name: "DelayedPacket",
  numFields: 2,
  classNo: 34,
  lastSubtypeNo: 34,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "timestamp": null,
    "set/timestamp": null,
    "pkt": null,
    "set/pkt": null,
  },
});
const jacdac_RegQuery__C4042_VT = mkVTable({
  name: "RegQuery",
  numFields: 5,
  classNo: 35,
  lastSubtypeNo: 35,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "lastQuery": null,
    "set/lastQuery": null,
    "lastReport": null,
    "set/lastReport": null,
    "value": null,
    "set/value": null,
    "reg": null,
    "set/reg": null,
    "serviceIdx": null,
    "set/serviceIdx": null,
  },
});
const jacdac_ControlServer__C3243_VT = mkVTable({
  name: "ControlServer",
  numFields: 8,
  classNo: 22,
  lastSubtypeNo: 22,
  maxBgInstances: null,
  methods: {
    "handlePacketOuter": jacdac_ControlServer_handlePacketOuter__P3246,
    "handlePacket": jacdac_Server_handlePacket__P3179,
    "log": jacdac_Server_log__P3959,
  },
  iface: {
    "listeners": null,
    "set/listeners": null,
    "supressLog": null,
    "set/supressLog": null,
    "running": null,
    "set/running": null,
    "serviceIndex": null,
    "set/serviceIndex": null,
    "stateUpdated": null,
    "set/stateUpdated": null,
    "_statusCode": null,
    "set/_statusCode": null,
    "instanceName": null,
    "set/instanceName": null,
    "serviceClass": null,
    "set/serviceClass": null,
    "sendUptime": jacdac_ControlServer_sendUptime__P3245,
    "handleFloodPing": jacdac_ControlServer_handleFloodPing__P4048,
    "handlePacketOuter": jacdac_ControlServer_handlePacketOuter__P3246,
    "handlePacket": jacdac_Server_handlePacket__P3179,
    "advertisementData": jacdac_Server_advertisementData__P3181,
    "sendReport": jacdac_Server_sendReport__P3947,
    "sendEvent": jacdac_Server_sendEvent__P3948,
    "sendChangeEvent": jacdac_Server_sendChangeEvent__P3949,
    "handleAnnounce": jacdac_Server_handleAnnounce__P3950,
    "handleStatusCode": jacdac_Server_handleStatusCode__P3951,
    "handleInstanceName": jacdac_Server_handleInstanceName__P3952,
    "handleRegValue": jacdac_Server_handleRegValue__P3954,
    "handleRegBool": jacdac_Server_handleRegBool__P3955,
    "handleRegUInt32": jacdac_Server_handleRegUInt32__P3957,
    "start": jacdac_Server_start__P3182,
    "log": jacdac_Server_log__P3959,
    "on": jacdac_EventSource_on__P3256,
    "addListenerInternal": jacdac_EventSource_addListenerInternal__P3936,
    "removeListenerInternal": jacdac_EventSource_removeListenerInternal__P3937,
    "emit": jacdac_EventSource_emit__P3259,
    "subscribe": jacdac_EventSource_subscribe__P3261,
  },
});
const jacdac_OutPipe__C2849_VT = mkVTable({
  name: "OutPipe",
  numFields: 3,
  classNo: 36,
  lastSubtypeNo: 36,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "nextCnt": null,
    "set/nextCnt": null,
    "deviceId": null,
    "set/deviceId": null,
    "port": null,
    "set/port": null,
    "from": jacdac_OutPipe_from__P2851,
    "respondForEach": jacdac_OutPipe_respondForEach__P2852,
    "writeEx": jacdac_OutPipe_writeEx__P3971,
    "write": jacdac_OutPipe_write__P2854,
    "writeAndClose": jacdac_OutPipe_writeAndClose__P2855,
    "close": jacdac_OutPipe_close__P2856,
  },
});
const jacdac_AckAwaiter__C3898_VT = mkVTable({
  name: "AckAwaiter",
  numFields: 6,
  classNo: 37,
  lastSubtypeNo: 37,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "nextRetry": null,
    "set/nextRetry": null,
    "numTries": null,
    "set/numTries": null,
    "crc": null,
    "set/crc": null,
    "eventId": null,
    "set/eventId": null,
    "pkt": null,
    "set/pkt": null,
    "srcId": null,
    "set/srcId": null,
  },
});

const breakpoints = setupDebugger(1, ["dev2Services___3646","service2dev___3651","sensorMap___3658","samplesCount___3660","knownSensors___3648","iconMap___3666","serviceKeys___3649","nextTone___3668","buttonNotes___3663","buttonPressIcons___3661","nextIcon___3664","playDeviceCountScheduled___3643","lastDeviceCount___3642","knownActuators___3647"])

return _main___P3679
})
