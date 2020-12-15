// meta={"simUrl":"/sim/simulator.html","cdnUrl":"/cdn/","version":"0.2.5","target":"arcade","targetVersion":"1.3.20","repo":"microsoft/pxt-jacdac"}
// total=520489 new=65.47% cached=29.91% other=4.62%
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
pxsim.setTitle("jacdac");
pxsim.setConfigData({}, {});
pxtrt.mapKeyNames = [
 "",
 "_attach",
 "_data",
 "_destroy",
 "_detach",
 "_header",
 "_lastListenerTime",
 "_name",
 "_sendCmd",
 "_sendCmdId",
 "_sendCore",
 "_sendReport",
 "_sendWithAck",
 "_shortId",
 "_statusCode",
 "add",
 "advertisementData",
 "announceCallback",
 "bool",
 "broadcast",
 "bytes",
 "c0",
 "clearNameCache",
 "clients",
 "close",
 "compress",
 "config",
 "crc",
 "currIndent",
 "currentDevice",
 "data",
 "deltaTimeMillis",
 "device",
 "deviceId",
 "device_identifier",
 "div",
 "doString",
 "eventId",
 "flags",
 "fmt",
 "fp",
 "frameCallbacks",
 "frameWorker",
 "framesInSample",
 "from",
 "fromBinary",
 "getNumber",
 "go",
 "handleCtrlReport",
 "handlePacket",
 "handlePacketOuter",
 "handleRegBool",
 "handleRegInt",
 "handleRegValue",
 "handleStatusCode",
 "handler",
 "handlers",
 "i32",
 "idleCallbacks",
 "indent",
 "indentStep",
 "intData",
 "isArray",
 "is_command",
 "is_reg_set",
 "jdpacked",
 "lastSeen",
 "log",
 "lookupQuery",
 "minPriority",
 "multicommand_class",
 "name",
 "nextCnt",
 "nextRetry",
 "nfmt",
 "numTries",
 "onAttach",
 "onDetach",
 "onlyHeader",
 "packed",
 "packet_flags",
 "parent",
 "parse",
 "pkt",
 "pkts",
 "port",
 "prevTimeMillis",
 "queries",
 "raiseEvent",
 "reg_identifier",
 "register",
 "registerHandler",
 "requiredDeviceName",
 "requires_ack",
 "resend",
 "respondForEach",
 "running",
 "runningCallbacks",
 "s",
 "sendChangeEvent",
 "sendCommand",
 "sendEvent",
 "sendReport",
 "serviceClass",
 "serviceNumber",
 "service_command",
 "service_number",
 "services",
 "shortId",
 "size",
 "src",
 "srcId",
 "start",
 "started",
 "stateUpdated",
 "supressLog",
 "timeInSample",
 "timestamp",
 "toString",
 "u32",
 "unjdpack",
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


function _main___P476895(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    globals._intervals___468519 = (undefined);
    globals._pollEventQueue___468528 = (undefined);
    globals.minPriority___466712 = (1);
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, inline__P468531);
    globals.listeners___468532 = (s.tmp_0);
    globals.RUN_KEY___468580 = ("#run");
    globals.SCOPE_KEY___468581 = ("#scope");
    s.tmp_0 = settings_initScopes__P468592_mk(s);
    s.callLocIdx = 0; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    globals.consolePriority___468079 = (0);
    globals.devNameSettingPrefix___468107 = ("#jddev:");
    r0 = pxsim_Array__mk();
    globals.devices____468708 = (r0);
    r0 = pxsim_Array__mk();
    globals.announceCallbacks___468710 = (r0);
    globals.restartCounter___468715 = (0);
    globals.onIdentifyRequest___468174 = (inline__P469870);
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_LoggerHost__C468365_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_LoggerHost_constructor__P468367_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 273; s.pc = 2; return s.tmp_1;
  case 2:
    r0 = s.retval;
    globals.loggerHost___468374 = (s.tmp_0);
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_RoleManagerHost__C468417_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_RoleManagerHost_constructor__P468418_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 307; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    globals.roleManagerHost___468420 = (s.tmp_0);
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_ProtoTestHost__C468461_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_ProtoTestHost_constructor__P468462_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 346; s.pc = 4; return s.tmp_1;
  case 4:
    r0 = s.retval;
    globals.protoTestHost___468469 = (s.tmp_0);
    globals.consolePriority___468079 = (2);
    s.tmp_0 = jacdac_Host_start__P468121_mk(s);
    s.tmp_0.arg0 = globals.roleManagerHost___468420;
    s.callLocIdx = 369; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    s.tmp_0 = jacdac_Host_start__P468121_mk(s);
    s.tmp_0.arg0 = globals.protoTestHost___468469;
    s.callLocIdx = 370; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    s.tmp_0 = jacdac_start__P468182_mk(s);
    s.callLocIdx = 371; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    s.tmp_0 = jacdac_LoggerHost__C468365_v2_2_mk(s);
    s.tmp_0.arg0 = globals.loggerHost___468374;
    s.tmp_0.arg1 = "test started";
    if (!checkSubtype(s.tmp_0.arg0, jacdac_LoggerHost__C468365_VT)) failedCast(s.tmp_0.arg0);
    s.tmp_0.fn = s.tmp_0.arg0.vtable.methods.log;
    s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    s.tmp_0 = jdpackTest__P468470_mk(s);
    s.callLocIdx = 372; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
_main___P476895.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"test.ts","functionName":"<main>","argumentNames":[]}
_main___P476895.continuations = [  ]

function _main___P476895_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _main___P476895, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }





function jdpackTest__P468470(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 42);
    r0 = pxsim_Array__push(s.tmp_0, 77);
    r0 = pxsim_Array__push(s.tmp_0, -10);
    s.tmp_1 = testOne__P473583_mk(s);
    s.tmp_1.arg0 = "u16 u16 i16";
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 356; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 42);
    r0 = pxsim_Array__push(s.tmp_0, "foo");
    r0 = pxsim_Array__push(s.tmp_0, "bar");
    s.tmp_1 = testOne__P473583_mk(s);
    s.tmp_1.arg0 = "u16 z s";
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 357; s.pc = 2; return s.tmp_1;
  case 2:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 42);
    r0 = pxsim_Array__push(s.tmp_0, "foo");
    r0 = pxsim_Array__push(s.tmp_0, "bar");
    s.tmp_1 = testOne__P473583_mk(s);
    s.tmp_1.arg0 = "u32 z s";
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 358; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 42);
    r0 = pxsim_Array__push(s.tmp_0, "foo");
    r0 = pxsim_Array__push(s.tmp_0, "bar");
    s.tmp_1 = testOne__P473583_mk(s);
    s.tmp_1.arg0 = "i8 z s";
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 359; s.pc = 4; return s.tmp_1;
  case 4:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 42);
    r0 = pxsim_Array__push(s.tmp_0, "foo12");
    r0 = pxsim_Array__push(s.tmp_0, "bar");
    s.tmp_1 = testOne__P473583_mk(s);
    s.tmp_1.arg0 = "u8 z s";
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 360; s.pc = 5; return s.tmp_1;
  case 5:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 42);
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_1, 17);
    r0 = pxsim_Array__push(s.tmp_1, "xy");
    r0 = pxsim_Array__mk();
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_2, s.tmp_1);
    r0 = pxsim_Array__mk();
    s.tmp_3 = r0;
    r0 = pxsim_Array__push(s.tmp_3, 18);
    r0 = pxsim_Array__push(s.tmp_3, "xx");
    r0 = pxsim_Array__push(s.tmp_2, s.tmp_3);
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_2);
    s.tmp_4 = testOne__P473583_mk(s);
    s.tmp_4.arg0 = "u8 r: u8 z";
    s.tmp_4.arg1 = s.tmp_0;
    s.callLocIdx = 361; s.pc = 6; return s.tmp_4;
  case 6:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 42);
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_1, 17);
    r0 = pxsim_Array__mk();
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_2, s.tmp_1);
    r0 = pxsim_Array__mk();
    s.tmp_3 = r0;
    r0 = pxsim_Array__push(s.tmp_3, 18);
    r0 = pxsim_Array__push(s.tmp_2, s.tmp_3);
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_2);
    s.tmp_4 = testOne__P473583_mk(s);
    s.tmp_4.arg0 = "u16 r: u16";
    s.tmp_4.arg1 = s.tmp_0;
    s.callLocIdx = 362; s.pc = 7; return s.tmp_4;
  case 7:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, -100);
    r0 = pxsim_Array__push(s.tmp_0, "foo");
    r0 = pxsim_Array__push(s.tmp_0, 1000);
    r0 = pxsim_Array__push(s.tmp_0, "barbaz");
    r0 = pxsim_Array__push(s.tmp_0, 250);
    s.tmp_1 = testOne__P473583_mk(s);
    s.tmp_1.arg0 = "i8 s[9] u16 s[10] u8";
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 363; s.pc = 8; return s.tmp_1;
  case 8:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, -100);
    r0 = pxsim_Array__push(s.tmp_0, "foo");
    r0 = pxsim_Array__push(s.tmp_0, 1000);
    r0 = pxsim_Array__push(s.tmp_0, "barbaz");
    r0 = pxsim_Array__push(s.tmp_0, 250);
    s.tmp_1 = testOne__P473583_mk(s);
    s.tmp_1.arg0 = "i8 x[4] s[9] u16 x[2] s[10] x[3] u8";
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 364; s.pc = 9; return s.tmp_1;
  case 9:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 42);
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_1, 17);
    r0 = pxsim_Array__push(s.tmp_1, 18);
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    s.tmp_2 = testOne__P473583_mk(s);
    s.tmp_2.arg0 = "u16 u16[]";
    s.tmp_2.arg1 = s.tmp_0;
    s.callLocIdx = 365; s.pc = 10; return s.tmp_2;
  case 10:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 42);
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_1, 18);
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    s.tmp_2 = testOne__P473583_mk(s);
    s.tmp_2.arg0 = "u16 u16[]";
    s.tmp_2.arg1 = s.tmp_0;
    s.callLocIdx = 366; s.pc = 11; return s.tmp_2;
  case 11:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 42);
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    s.tmp_2 = testOne__P473583_mk(s);
    s.tmp_2.arg0 = "u16 u16[]";
    s.tmp_2.arg1 = s.tmp_0;
    s.callLocIdx = 367; s.pc = 12; return s.tmp_2;
  case 12:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, 42);
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_1, "foo");
    r0 = pxsim_Array__push(s.tmp_1, "bar");
    r0 = pxsim_Array__push(s.tmp_1, "bz");
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    s.tmp_2 = testOne__P473583_mk(s);
    s.tmp_2.arg0 = "u16 z[]";
    s.tmp_2.arg1 = s.tmp_0;
    s.callLocIdx = 368; s.pc = 13; return s.tmp_2;
  case 13:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jdpackTest__P468470.info = {"start":0,"length":1389,"line":0,"column":0,"endLine":34,"endColumn":1,"fileName":"test.ts","functionName":"jdpackTest","argumentNames":[]}

function jdpackTest__P468470_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jdpackTest__P468470, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
} }





function testOne__P473583(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.checksame___473586 = undefined;
    s.buf___473626 = undefined;
    s.data1___473631 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkAction(1, checksame__P473586);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg0);
    s.checksame___473586 = (s.tmp_0);
    s.tmp_1 = jacdac_jdpack__P468253_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_1.arg1 = s.arg1;
    s.callLocIdx = 352; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.buf___473626 = (r0);
    s.tmp_0 = jacdac_jdunpack__P468252_mk(s);
    s.tmp_0.arg0 = s.buf___473626;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 353; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    s.data1___473631 = (r0);
    s.tmp_0 = console_log__P466717_mk(s);
    r0 = pxsim_String_.mkEmpty();
    s.tmp_3 = r0;
    if ((s.arg0) && (s.arg0).vtable) {
    setupResume(s, 4);
    pxsim_String__stringConv(s.arg0);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg0) + ""; }
  case 4:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_4);
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_2, " ");
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.toHex(s.buf___473626);
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 5);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 5:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(s.tmp_1, s.tmp_5);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 354; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.tmp_0 = lambda_3_mk(s);
    s.tmp_0.argL = s.checksame___473586;
    s.tmp_0.arg0 = s.arg1;
    s.tmp_0.arg1 = s.data1___473631;
    setupLambda(s.tmp_0, s.tmp_0.argL);
    s.callLocIdx = 355; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
testOne__P473583.info = {"start":28,"length":655,"line":1,"column":4,"endLine":18,"endColumn":5,"fileName":"test.ts","functionName":"testOne","argumentNames":["fmt","data0"]}

function testOne__P473583_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: testOne__P473583, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  checksame___473586: undefined,
  buf___473626: undefined,
  data1___473631: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function checksame__P473586(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.fail___473589 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkAction(3, fail__P473589);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.caps[0]);
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 1, s.arg0);
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 2, s.arg1);
    s.fail___473589 = (s.tmp_0);
    r0 = (s.arg0 === s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBool(s.tmp_1);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_1;
    { step = 2; continue; }
  case 1:
    s.tmp_3 = JSON_stringify__P466724_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.tmp_3.arg1 = null;
    s.tmp_3.arg2 = 0;
    s.callLocIdx = 349; s.pc = 6; return s.tmp_3;
  case 6:
    r0 = s.retval;
    s.tmp_2 = r0;
    s.tmp_5 = JSON_stringify__P466724_mk(s);
    s.tmp_5.arg0 = s.arg1;
    s.tmp_5.arg1 = null;
    s.tmp_5.arg2 = 0;
    s.callLocIdx = 350; s.pc = 7; return s.tmp_5;
  case 7:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = (s.tmp_2 == s.tmp_4);
  case 2:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_6);
    if (!r0) { step = 3; continue; }
    { step = 5; continue; }
  case 3:
  case 4:
    s.tmp_7 = lambda_2_mk(s);
    s.tmp_7.argL = s.fail___473589;
    s.tmp_7.arg0 = "not the same";
    setupLambda(s.tmp_7, s.tmp_7.argL);
    s.callLocIdx = 351; s.pc = 8; return s.tmp_7;
  case 8:
    r0 = s.retval;
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
checksame__P473586.info = {"start":82,"length":369,"line":2,"column":8,"endLine":11,"endColumn":9,"fileName":"test.ts","functionName":"checksame","argumentNames":["a","b"]}

function checksame__P473586_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: checksame__P473586, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  fail___473589: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function fail__P473589(s) {
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
    if ((s.arg0) && (s.arg0).vtable) {
    setupResume(s, 1);
    pxsim_String__stringConv(s.arg0);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg0) + ""; }
  case 1:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = pxsim_String__concat("jdpack test error: ", s.tmp_8);
    s.tmp_7 = r0;
    r0 = pxsim_String__concat(s.tmp_7, " (at ");
    s.tmp_6 = r0;
    if ((s.caps[0]) && (s.caps[0]).vtable) {
    setupResume(s, 2);
    pxsim_String__stringConv(s.caps[0]);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.caps[0]) + ""; }
  case 2:
    r0 = s.retval;
    s.tmp_9 = r0;
    r0 = pxsim_String__concat(s.tmp_6, s.tmp_9);
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(s.tmp_5, "; a=");
    s.tmp_4 = r0;
    s.tmp_12 = JSON_stringify__P466724_mk(s);
    s.tmp_12.arg0 = s.caps[1];
    s.tmp_12.arg1 = null;
    s.tmp_12.arg2 = 0;
    s.callLocIdx = 347; s.pc = 3; return s.tmp_12;
  case 3:
    r0 = s.retval;
    s.tmp_11 = r0;
    if ((s.tmp_11) && (s.tmp_11).vtable) {
    setupResume(s, 4);
    pxsim_String__stringConv(s.tmp_11);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_11) + ""; }
  case 4:
    r0 = s.retval;
    s.tmp_10 = r0;
    r0 = pxsim_String__concat(s.tmp_4, s.tmp_10);
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_3, "; b=");
    s.tmp_2 = r0;
    s.tmp_15 = JSON_stringify__P466724_mk(s);
    s.tmp_15.arg0 = s.caps[2];
    s.tmp_15.arg1 = null;
    s.tmp_15.arg2 = 0;
    s.callLocIdx = 348; s.pc = 5; return s.tmp_15;
  case 5:
    r0 = s.retval;
    s.tmp_14 = r0;
    if ((s.tmp_14) && (s.tmp_14).vtable) {
    setupResume(s, 6);
    pxsim_String__stringConv(s.tmp_14);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_14) + ""; }
  case 6:
    r0 = s.retval;
    s.tmp_13 = r0;
    r0 = pxsim_String__concat(s.tmp_2, s.tmp_13);
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_1, ")");
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.throwValue(s.tmp_0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
fail__P473589.info = {"start":131,"length":186,"line":3,"column":12,"endLine":6,"endColumn":13,"fileName":"test.ts","functionName":"fail","argumentNames":["msg"]}

function fail__P473589_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: fail__P473589, depth: s.depth + 1,
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
} }





function console_log__P466717(s) {
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
    s.tmp_0 = console_add__P466713_mk(s);
    s.tmp_0.arg0 = 1;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 53; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
console_log__P466717.info = {"start":1450,"length":86,"line":58,"column":4,"endLine":60,"endColumn":5,"fileName":"pxt_modules/base/console.ts","functionName":"log","argumentNames":["value"]}

function console_log__P466717_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_log__P466717, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function console_add__P466713(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.text___475451 = undefined;
    s.i___475460 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 < globals.minPriority___466712);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 5; continue; }
  case 1:
  case 2:
    s.tmp_1 = console_inspect__P466719_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.tmp_1.arg1 = 20;
    s.callLocIdx = 48; s.pc = 6; return s.tmp_1;
  case 6:
    r0 = s.retval;
    s.text___475451 = (r0);
    if ((s.text___475451) && (s.text___475451).vtable) {
    setupResume(s, 7);
    pxsim_String__stringConv(s.text___475451);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.text___475451) + ""; }
  case 7:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_String__concat(s.tmp_0, "\n");
    s.text___475451 = (r0);
    s.i___475460 = (0);
  case 3:
    s.tmp_1 = r0 = s.i___475460;
    r0 = pxsim_Array__length(globals.listeners___468532);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.tmp_3 = lambda_3_mk(s);
    r0 = pxsim_Array__getAt(globals.listeners___468532, s.i___475460);
    s.tmp_3.argL = r0;
    s.tmp_3.arg0 = s.arg0;
    s.tmp_3.arg1 = s.text___475451;
    setupLambda(s.tmp_3, s.tmp_3.argL);
    s.callLocIdx = 49; s.pc = 8; return s.tmp_3;
  case 8:
    r0 = s.retval;
    r0 = (s.i___475460 + 1);
    s.i___475460 = (r0);
    { step = 3; continue; }
  case 4:
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
console_add__P466713.info = {"start":632,"length":317,"line":28,"column":4,"endLine":36,"endColumn":5,"fileName":"pxt_modules/base/console.ts","functionName":"add","argumentNames":["priority","message"]}

function console_add__P466713_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_add__P466713, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  text___475451: undefined,
  i___475460: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function inline__P468531(s) {
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
    r0 = pxsim.control.__log(s.arg0, s.arg1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P468531.info = {"start":534,"length":85,"line":25,"column":8,"endLine":25,"endColumn":93,"fileName":"pxt_modules/base/console.ts","functionName":"inline","argumentNames":["priority","text"]}

function inline__P468531_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P468531, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
} }





function console_inspect__P466719(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.asArr___474460 = undefined;
    s.asString___474478 = undefined;
    s.keys___474490 = undefined;
    s.snipped___474494 = undefined;
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
    s.asArr___474460 = (s.arg0);
    r0 = pxsim_Array__length(s.asArr___474460);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 <= s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.tmp_2 = helpers_arrayJoin__P466447_mk(s);
    s.tmp_2.arg0 = s.asArr___474460;
    s.tmp_2.arg1 = ",";
    s.callLocIdx = 58; s.pc = 19; return s.tmp_2;
  case 19:
    r0 = s.retval;
    { step = 17; continue; }
    { step = 4; continue; }
  case 3:
    r0 = pxsim_String_.mkEmpty();
    s.tmp_4 = r0;
    s.tmp_7 = helpers_arrayJoin__P466447_mk(s);
    s.tmp_8 = helpers_arraySlice__P466459_mk(s);
    s.tmp_8.arg0 = s.asArr___474460;
    s.tmp_8.arg1 = 0;
    s.tmp_8.arg2 = s.arg1;
    s.callLocIdx = 59; s.pc = 21; return s.tmp_8;
  case 21:
    r0 = s.retval;
    s.tmp_7.arg0 = r0;
    s.tmp_7.arg1 = ",";
    s.callLocIdx = 60; s.pc = 20; return s.tmp_7;
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
    s.asString___474478 = (r0);
    r0 = (s.asString___474478 != "[object Object]");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = s.tmp_0;
    { step = 7; continue; }
  case 6:
    r0 = (s.asString___474478 != "[Object]");
  case 7:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 8; continue; }
    r0 = s.asString___474478;
    { step = 17; continue; }
  case 8:
  case 9:
    r0 = pxsim_pxtrt.keysOf(s.arg0);
    s.keys___474490 = (r0);
    r0 = pxsim_Array__length(s.keys___474490);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 > s.arg1);
    s.snipped___474494 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.snipped___474494);
    if (!r0) { step = 10; continue; }
    s.tmp_0 = helpers_arraySlice__P466459_mk(s);
    s.tmp_0.arg0 = s.keys___474490;
    s.tmp_0.arg1 = 0;
    s.tmp_0.arg2 = s.arg1;
    s.callLocIdx = 61; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.keys___474490 = (r0);
  case 10:
  case 11:
    r0 = pxsim_pxtcore_mkAction(1, inline__P474511);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg0);
    r0 = pxsim_numops_toBoolDecr(s.snipped___474494);
    if (!r0) { step = 12; continue; }
    r0 = "\n    ...";
    { step = 13; continue; }
  case 12:
    r0 = pxsim_String_.mkEmpty();
  case 13:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    s.tmp_7 = helpers_arrayReduce__P466456_mk(s);
    s.tmp_7.arg0 = s.keys___474490;
    s.tmp_7.arg1 = s.tmp_0;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_7.arg2 = r0;
    s.callLocIdx = 62; s.pc = 25; return s.tmp_7;
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
console_inspect__P466719.info = {"start":2271,"length":1190,"line":81,"column":4,"endLine":114,"endColumn":5,"fileName":"pxt_modules/base/console.ts","functionName":"inspect","argumentNames":["obj","maxElements"]}

function console_inspect__P466719_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_inspect__P466719, depth: s.depth + 1,
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
  asArr___474460: undefined,
  asString___474478: undefined,
  keys___474490: undefined,
  snipped___474494: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function inline__P474511(s) {
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
inline__P474511.info = {"start":3293,"length":61,"line":108,"column":20,"endLine":108,"endColumn":81,"fileName":"pxt_modules/base/console.ts","functionName":"inline","argumentNames":["prev","currKey"]}

function inline__P474511_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P474511, depth: s.depth + 1,
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





function helpers_arraySlice__P466459(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___475107 = undefined;
    s.len___475109 = undefined;
    s.i___475143 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___475107 = (r0);
    r0 = pxsim_Array__length(s.arg0);
    s.len___475109 = (r0);
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
    s.tmp_1 = Math_max__P466473_mk(s);
    r0 = (s.len___475109 + s.arg1);
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = 0;
    s.callLocIdx = 10; s.pc = 16; return s.tmp_1;
  case 16:
    r0 = s.retval;
    s.arg1 = (r0);
  case 2:
  case 3:
  case 4:
    r0 = (s.arg1 > s.len___475109);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = s.res___475107;
    { step = 15; continue; }
  case 5:
  case 6:
    r0 = (s.arg2 === undefined);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 7; continue; }
    s.arg2 = (s.len___475109);
    { step = 10; continue; }
  case 7:
    r0 = (s.arg2 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 8; continue; }
    r0 = (s.len___475109 + s.arg2);
    s.arg2 = (r0);
  case 8:
  case 9:
  case 10:
    r0 = (s.arg2 > s.len___475109);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    s.arg2 = (s.len___475109);
  case 11:
  case 12:
    s.i___475143 = (s.arg1);
  case 13:
    r0 = (s.i___475143 < s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    s.tmp_1 = r0 = s.res___475107;
    r0 = pxsim_Array__getAt(s.arg0, s.i___475143);
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_2);
    r0 = (s.i___475143 + 1);
    s.i___475143 = (r0);
    { step = 13; continue; }
  case 14:
    r0 = s.res___475107;
  case 15:
    return leave(s, r0)
  default: oops()
} } }
helpers_arraySlice__P466459.info = {"start":9027,"length":690,"line":303,"column":4,"endLine":328,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arraySlice","argumentNames":["arr","start","end"]}

function helpers_arraySlice__P466459_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arraySlice__P466459, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  res___475107: undefined,
  len___475109: undefined,
  i___475143: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function Math_max__P466473(s) {
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
Math_max__P466473.info = {"start":16099,"length":105,"line":542,"column":4,"endLine":545,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"max","argumentNames":["a","b"]}

function Math_max__P466473_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_max__P466473, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function helpers_arrayReduce__P466456(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___474538 = undefined;
    s.i___474541 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__length(s.arg0);
    s.len___474538 = (r0);
    s.i___474541 = (0);
  case 1:
    r0 = (s.i___474541 < s.len___474538);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = lambda_4_mk(s);
    s.tmp_1.argL = s.arg1;
    s.tmp_1.arg0 = s.arg2;
    r0 = pxsim_Array__getAt(s.arg0, s.i___474541);
    s.tmp_1.arg1 = r0;
    s.tmp_1.arg2 = s.i___474541;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 9; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.arg2 = (r0);
    r0 = (s.i___474541 + 1);
    s.i___474541 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = s.arg2;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayReduce__P466456.info = {"start":8316,"length":317,"line":280,"column":4,"endLine":286,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arrayReduce","argumentNames":["arr","callbackfn","initialValue"]}

function helpers_arrayReduce__P466456_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayReduce__P466456, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  len___474538: undefined,
  i___474541: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function helpers_arrayJoin__P466447(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.r___474566 = undefined;
    s.len___474567 = undefined;
    s.i___474570 = undefined;
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
    s.r___474566 = (r0);
    r0 = pxsim_Array__length(s.arg0);
    s.len___474567 = (r0);
    s.i___474570 = (0);
  case 5:
    r0 = (s.i___474570 < s.len___474567);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    r0 = (s.i___474570 > 0);
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
    if ((s.r___474566) && (s.r___474566).vtable) {
    setupResume(s, 15);
    pxsim_String__stringConv(s.r___474566);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___474566) + ""; }
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
    s.r___474566 = (r0);
  case 8:
  case 9:
    r0 = pxsim_Array__getAt(s.arg0, s.i___474570);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 10; continue; }
    r0 = s.tmp_0;
    { step = 11; continue; }
  case 10:
    r0 = pxsim_Array__getAt(s.arg0, s.i___474570);
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
    r0 = pxsim_Array__getAt(s.arg0, s.i___474570);
  case 13:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    if ((s.r___474566) && (s.r___474566).vtable) {
    setupResume(s, 17);
    pxsim_String__stringConv(s.r___474566);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___474566) + ""; }
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
    s.r___474566 = (r0);
    r0 = (s.i___474570 + 1);
    s.i___474570 = (r0);
    { step = 5; continue; }
  case 14:
    r0 = s.r___474566;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayJoin__P466447.info = {"start":4133,"length":432,"line":157,"column":4,"endLine":170,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arrayJoin","argumentNames":["arr","sep"]}

function helpers_arrayJoin__P466447_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayJoin__P466447, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  r___474566: undefined,
  len___474567: undefined,
  i___474570: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_jdunpack__P468252(s) {
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
    s.tmp_0 = jacdac_jdunpackCore__P471510_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = 0;
    s.callLocIdx = 240; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
jacdac_jdunpack__P468252.info = {"start":6182,"length":124,"line":195,"column":4,"endLine":197,"endColumn":5,"fileName":"pack.ts","functionName":"jdunpack","argumentNames":["buf","fmt"]}

function jacdac_jdunpack__P468252_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_jdunpack__P468252, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_jdunpackCore__P471510(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.repeatRes___471514 = undefined;
    s.res___471519 = undefined;
    s.off___471521 = undefined;
    s.fp0___471522 = undefined;
    s.parser___471523 = undefined;
    s.sz___471558 = undefined;
    s.c0___471561 = undefined;
    s.endoff___471567 = undefined;
    s.v___471596 = undefined;
    s.subbuf___471620 = undefined;
    s.zerop___471635 = undefined;
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
    s.repeatRes___471514 = (s.tmp_0);
    r0 = pxsim_Array__mk();
    s.res___471519 = (r0);
    s.off___471521 = (0);
    s.fp0___471522 = (0);
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_TokenParser__C471292_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_TokenParser_constructor__P471294_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg1;
    s.callLocIdx = 230; s.pc = 54; return s.tmp_1;
  case 54:
    r0 = s.retval;
    s.parser___471523 = (s.tmp_0);
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
    { step = 53; continue; }
  case 5:
  case 6:
  case 7:
    s.tmp_4 = jacdac_TokenParser_parse__P471293_mk(s);
    s.tmp_4.arg0 = s.parser___471523;
    s.callLocIdx = 231; s.pc = 55; return s.tmp_4;
  case 55:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 48; continue; }
    r0 = s.parser___471523.fields["isArray"];
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
    s.tmp_8 = r0 = s.res___471519;
    s.tmp_10 = jacdac_jdunpackCore__P471510_mk(s);
    s.tmp_11 = r0 = s.arg0;
    s.tmp_12 = r0 = s.off___471521;
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_13 = r0;
    r0 = (s.tmp_13 - s.tmp_12);
    s.tmp_14 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_11, s.tmp_12, s.tmp_14);
    s.tmp_10.arg0 = r0;
    s.tmp_15 = helpers_stringSlice__P466463_mk(s);
    s.tmp_15.arg0 = s.arg1;
    s.tmp_15.arg1 = s.fp0___471522;
    s.tmp_15.arg2 = undefined;
    s.callLocIdx = 233; s.pc = 57; return s.tmp_15;
  case 57:
    r0 = s.retval;
    s.tmp_10.arg1 = r0;
    s.tmp_10.arg2 = 1;
    s.callLocIdx = 234; s.pc = 56; return s.tmp_10;
  case 56:
    r0 = s.retval;
    s.tmp_9 = r0;
    r0 = pxsim_Array__push(s.tmp_8, s.tmp_9);
    r0 = s.res___471519;
    { step = 53; continue; }
  case 10:
  case 11:
    r0 = s.parser___471523.fields["fp"];
    s.fp0___471522 = (r0);
    r0 = s.parser___471523.fields["size"];
    s.sz___471558 = (r0);
    r0 = s.parser___471523.fields["c0"];
    s.c0___471561 = (r0);
    r0 = (s.c0___471561 == 122);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 16; continue; }
    s.endoff___471567 = (s.off___471521);
  case 12:
    s.tmp_1 = r0 = s.endoff___471567;
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = s.tmp_0;
    { step = 14; continue; }
  case 13:
    r0 = pxsim.BufferMethods.getByte(s.arg0, s.endoff___471567);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 != 0);
  case 14:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 15; continue; }
    r0 = (s.endoff___471567 + 1);
    s.endoff___471567 = (r0);
    { step = 12; continue; }
  case 15:
    r0 = (s.endoff___471567 - s.off___471521);
    s.sz___471558 = (r0);
    { step = 19; continue; }
  case 16:
    r0 = (s.sz___471558 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 17; continue; }
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 - s.off___471521);
    s.sz___471558 = (r0);
  case 17:
  case 18:
  case 19:
    r0 = s.parser___471523.fields["nfmt"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 !== null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 22; continue; }
    r0 = s.parser___471523.fields["nfmt"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.arg0, s.tmp_2, s.off___471521);
    s.v___471596 = (r0);
    r0 = s.parser___471523.fields["div"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 != 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 20; continue; }
    r0 = s.parser___471523.fields["div"];
    s.tmp_2 = r0;
    r0 = (s.v___471596 / s.tmp_2);
    s.v___471596 = (r0);
  case 20:
  case 21:
    r0 = pxsim_Array__push(s.res___471519, s.v___471596);
    r0 = s.parser___471523.fields["size"];
    s.tmp_0 = r0;
    r0 = (s.off___471521 + s.tmp_0);
    s.off___471521 = (r0);
    { step = 39; continue; }
  case 22:
    s.tmp_0 = r0 = s.arg0;
    s.tmp_1 = r0 = s.off___471521;
    r0 = (s.off___471521 + s.sz___471558);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 - s.tmp_1);
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_0, s.tmp_1, s.tmp_3);
    s.subbuf___471620 = (r0);
    r0 = (s.c0___471561 == 122);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 23; continue; }
    r0 = s.tmp_0;
    { step = 24; continue; }
  case 23:
    r0 = (s.c0___471561 == 115);
  case 24:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 29; continue; }
    s.zerop___471635 = (0);
  case 25:
    s.tmp_1 = r0 = s.zerop___471635;
    r0 = pxsim.BufferMethods.length(s.subbuf___471620);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 26; continue; }
    r0 = s.tmp_0;
    { step = 27; continue; }
  case 26:
    r0 = pxsim.BufferMethods.getByte(s.subbuf___471620, s.zerop___471635);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 != 0);
  case 27:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 28; continue; }
    r0 = (s.zerop___471635 + 1);
    s.zerop___471635 = (r0);
    { step = 25; continue; }
  case 28:
    s.tmp_0 = r0 = s.res___471519;
    s.tmp_3 = r0 = s.subbuf___471620;
    r0 = (s.zerop___471635 - 0);
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_3, 0, s.tmp_4);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.toString(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    { step = 36; continue; }
  case 29:
    r0 = (s.c0___471561 == 98);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 30; continue; }
    r0 = pxsim_Array__push(s.res___471519, s.subbuf___471620);
    { step = 35; continue; }
  case 30:
    r0 = (s.c0___471561 == 120);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 31; continue; }
    { step = 34; continue; }
  case 31:
    r0 = (s.c0___471561 == 114);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 32; continue; }
    s.tmp_2 = r0 = s.res___471519;
    s.tmp_4 = jacdac_jdunpackCore__P471510_mk(s);
    s.tmp_4.arg0 = s.subbuf___471620;
    s.tmp_5 = helpers_stringSlice__P466463_mk(s);
    s.tmp_5.arg0 = s.arg1;
    s.tmp_5.arg1 = s.fp0___471522;
    s.tmp_5.arg2 = undefined;
    s.callLocIdx = 238; s.pc = 59; return s.tmp_5;
  case 59:
    r0 = s.retval;
    s.tmp_4.arg1 = r0;
    s.tmp_4.arg2 = 2;
    s.callLocIdx = 239; s.pc = 58; return s.tmp_4;
  case 58:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_Array__push(s.tmp_2, s.tmp_3);
    { step = 48; continue; }
    { step = 33; continue; }
  case 32:
    r0 = pxsim_pxtcore.throwValue("whoops");
  case 33:
  case 34:
  case 35:
  case 36:
    s.tmp_0 = r0 = s.off___471521;
    r0 = pxsim.BufferMethods.length(s.subbuf___471620);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 + s.tmp_1);
    s.off___471521 = (r0);
    r0 = (s.c0___471561 == 122);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 37; continue; }
    r0 = (s.off___471521 + 1);
    s.off___471521 = (r0);
  case 37:
  case 38:
  case 39:
    s.tmp_0 = r0 = s.arg2;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 40; continue; }
    r0 = s.tmp_0;
    { step = 41; continue; }
  case 40:
    r0 = s.parser___471523.fields["fp"];
    s.tmp_1 = r0;
    r0 = pxsim_String_.length(s.arg1);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 >= s.tmp_2);
  case 41:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 46; continue; }
    r0 = (s.parser___471523).fields["fp"] = (0);
    r0 = (s.arg2 == 2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 42; continue; }
    r0 = pxsim_Array__push(s.repeatRes___471514, s.res___471519);
    r0 = pxsim_Array__mk();
    s.res___471519 = (r0);
  case 42:
  case 43:
    s.tmp_1 = r0 = s.off___471521;
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 >= s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 44; continue; }
    { step = 48; continue; }
  case 44:
  case 45:
  case 46:
  case 47:
    { step = 7; continue; }
  case 48:
    r0 = (s.arg2 == 2);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 51; continue; }
    r0 = pxsim_Array__length(s.res___471519);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 49; continue; }
    r0 = pxsim_Array__push(s.repeatRes___471514, s.res___471519);
  case 49:
  case 50:
    r0 = s.repeatRes___471514;
    { step = 53; continue; }
    { step = 52; continue; }
  case 51:
    r0 = s.res___471519;
    { step = 53; continue; }
  case 52:
    r0 = undefined;
  case 53:
    return leave(s, r0)
  default: oops()
} } }
jacdac_jdunpackCore__P471510.info = {"start":3789,"length":2387,"line":121,"column":4,"endLine":193,"endColumn":5,"fileName":"pack.ts","functionName":"jdunpackCore","argumentNames":["buf","fmt","repeat"]}

function jacdac_jdunpackCore__P471510_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_jdunpackCore__P471510, depth: s.depth + 1,
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
  repeatRes___471514: undefined,
  res___471519: undefined,
  off___471521: undefined,
  fp0___471522: undefined,
  parser___471523: undefined,
  sz___471558: undefined,
  c0___471561: undefined,
  endoff___471567: undefined,
  v___471596: undefined,
  subbuf___471620: undefined,
  zerop___471635: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_bufferToString__P471271(s) {
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
jacdac_bufferToString__P471271.info = {"start":981,"length":75,"line":32,"column":4,"endLine":34,"endColumn":5,"fileName":"pack.ts","functionName":"bufferToString","argumentNames":["buf"]}

function jacdac_bufferToString__P471271_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_bufferToString__P471271, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function helpers_stringSlice__P466463(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___474964 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_String_.length(s.arg0);
    s.len___474964 = (r0);
    r0 = (s.arg1 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = Math_max__P466473_mk(s);
    r0 = (s.len___474964 + s.arg1);
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
    s.arg2 = (s.len___474964);
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
    r0 = (s.len___474964 + s.arg2);
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
helpers_stringSlice__P466463.info = {"start":11496,"length":440,"line":384,"column":4,"endLine":402,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"stringSlice","argumentNames":["s","start","end"]}

function helpers_stringSlice__P466463_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_stringSlice__P466463, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  len___474964: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_bufferSlice__P471281(s) {
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
jacdac_bufferSlice__P471281.info = {"start":1149,"length":114,"line":40,"column":4,"endLine":42,"endColumn":5,"fileName":"pack.ts","functionName":"bufferSlice","argumentNames":["buf","start","end"]}

function jacdac_bufferSlice__P471281_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_bufferSlice__P471281, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_TokenParser_parse__P471293(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.fmt___471305 = undefined;
    s.endp___471314 = undefined;
    s.word___471330 = undefined;
    s.dotIdx___471343 = undefined;
    s.c0___471349 = undefined;
    s.sz0___471364 = undefined;
    s.sz1___471372 = undefined;
    s.c1___471398 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_TokenParser__C471292_VT)) failedCast(r0);
    r0 = (s.arg0).fields["div"] = (1);
    r0 = (s.arg0).fields["isArray"] = (false);
    r0 = s.arg0.fields["fmt"];
    s.fmt___471305 = (r0);
  case 1:
    r0 = s.arg0.fields["fp"];
    s.tmp_1 = r0;
    r0 = pxsim_String_.length(s.fmt___471305);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 42; continue; }
    r0 = s.arg0.fields["fp"];
    s.endp___471314 = (r0);
  case 2:
    s.tmp_1 = r0 = s.endp___471314;
    r0 = pxsim_String_.length(s.fmt___471305);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = s.tmp_0;
    { step = 4; continue; }
  case 3:
    r0 = pxsim_String_.charCodeAt(s.fmt___471305, s.endp___471314);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 != 32);
  case 4:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 5; continue; }
    r0 = (s.endp___471314 + 1);
    s.endp___471314 = (r0);
    { step = 2; continue; }
  case 5:
    s.tmp_0 = helpers_stringSlice__P466463_mk(s);
    s.tmp_0.arg0 = s.fmt___471305;
    r0 = s.arg0.fields["fp"];
    s.tmp_0.arg1 = r0;
    s.tmp_0.arg2 = s.endp___471314;
    s.callLocIdx = 220; s.pc = 44; return s.tmp_0;
  case 44:
    r0 = s.retval;
    s.word___471330 = (r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = (s.endp___471314 + 1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["fp"] = (s.tmp_1);
    r0 = pxsim_numops_toBoolDecr(s.word___471330);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    { step = 1; continue; }
  case 6:
  case 7:
    r0 = pxsim_String_.indexOf(s.word___471330, ".", undefined);
    s.dotIdx___471343 = (r0);
    r0 = pxsim_String_.charCodeAt(s.word___471330, 0);
    s.c0___471349 = (r0);
    r0 = (s.c0___471349 == 105);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 8; continue; }
    r0 = s.tmp_0;
    { step = 9; continue; }
  case 8:
    r0 = (s.c0___471349 == 117);
  case 9:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBool(s.tmp_1);
    if (r0) { step = 10; continue; }
    r0 = s.tmp_1;
    { step = 11; continue; }
  case 10:
    r0 = (s.dotIdx___471343 >= 0);
  case 11:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 12; continue; }
    s.tmp_3 = parseInt__P466441_mk(s);
    s.tmp_4 = helpers_stringSlice__P466463_mk(s);
    s.tmp_4.arg0 = s.word___471330;
    s.tmp_4.arg1 = 1;
    s.tmp_4.arg2 = s.dotIdx___471343;
    s.callLocIdx = 221; s.pc = 46; return s.tmp_4;
  case 46:
    r0 = s.retval;
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = undefined;
    s.callLocIdx = 222; s.pc = 45; return s.tmp_3;
  case 45:
    r0 = s.retval;
    s.sz0___471364 = (r0);
    s.tmp_0 = parseInt__P466441_mk(s);
    s.tmp_1 = helpers_stringSlice__P466463_mk(s);
    s.tmp_1.arg0 = s.word___471330;
    r0 = (s.dotIdx___471343 + 1);
    s.tmp_1.arg1 = r0;
    s.tmp_1.arg2 = undefined;
    s.callLocIdx = 223; s.pc = 48; return s.tmp_1;
  case 48:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = undefined;
    s.callLocIdx = 224; s.pc = 47; return s.tmp_0;
  case 47:
    r0 = s.retval;
    s.sz1___471372 = (r0);
    r0 = pxsim_String_.charAt(s.word___471330, 0);
    s.tmp_1 = r0;
    if ((s.tmp_1) && (s.tmp_1).vtable) {
    setupResume(s, 49);
    pxsim_String__stringConv(s.tmp_1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_1) + ""; }
  case 49:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = (s.sz0___471364 + s.sz1___471372);
    s.tmp_3 = r0;
    if ((s.tmp_3) && (s.tmp_3).vtable) {
    setupResume(s, 50);
    pxsim_String__stringConv(s.tmp_3);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_3) + ""; }
  case 50:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_2);
    s.word___471330 = (r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = (1 << s.sz1___471372);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["div"] = (s.tmp_1);
  case 12:
  case 13:
    r0 = pxsim_String_.charCodeAt(s.word___471330, 1);
    s.c1___471398 = (r0);
    r0 = (s.c1___471398 == 91);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    s.tmp_1 = r0 = s.arg0;
    s.tmp_3 = parseInt__P466441_mk(s);
    s.tmp_4 = helpers_stringSlice__P466463_mk(s);
    s.tmp_4.arg0 = s.word___471330;
    s.tmp_4.arg1 = 2;
    s.tmp_4.arg2 = undefined;
    s.callLocIdx = 225; s.pc = 52; return s.tmp_4;
  case 52:
    r0 = s.retval;
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = undefined;
    s.callLocIdx = 226; s.pc = 51; return s.tmp_3;
  case 51:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = (s.tmp_1).fields["size"] = (s.tmp_2);
    { step = 15; continue; }
  case 14:
    r0 = (s.arg0).fields["size"] = (-1);
  case 15:
    s.tmp_2 = r0 = s.word___471330;
    r0 = pxsim_String_.length(s.word___471330);
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
    s.tmp_6 = r0 = s.word___471330;
    r0 = pxsim_String_.length(s.word___471330);
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
    s.tmp_10 = helpers_stringSlice__P466463_mk(s);
    s.tmp_10.arg0 = s.word___471330;
    s.tmp_10.arg1 = 0;
    s.tmp_10.arg2 = -2;
    s.callLocIdx = 227; s.pc = 53; return s.tmp_10;
  case 53:
    r0 = s.retval;
    s.word___471330 = (r0);
    r0 = (s.arg0).fields["isArray"] = (true);
  case 18:
  case 19:
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = jacdac_numberFormatOfType__P471258_mk(s);
    s.tmp_2.arg0 = s.word___471330;
    s.callLocIdx = 228; s.pc = 54; return s.tmp_2;
  case 54:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["nfmt"] = (s.tmp_1);
    r0 = (s.arg0).fields["word"] = (s.word___471330);
    r0 = s.arg0.fields["nfmt"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 40; continue; }
    r0 = (s.c0___471349 == 114);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 22; continue; }
    r0 = (s.c1___471398 != 58);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 20; continue; }
    s.c0___471349 = (0);
  case 20:
  case 21:
    { step = 37; continue; }
  case 22:
    r0 = (s.c0___471349 == 115);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 23; continue; }
    r0 = s.tmp_0;
    { step = 24; continue; }
  case 23:
    r0 = (s.c0___471349 == 98);
  case 24:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBool(s.tmp_1);
    if (!r0) { step = 25; continue; }
    r0 = s.tmp_1;
    { step = 26; continue; }
  case 25:
    r0 = (s.c0___471349 == 120);
  case 26:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 31; continue; }
    r0 = pxsim_String_.length(s.word___471330);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 != 1);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBool(s.tmp_3);
    if (r0) { step = 27; continue; }
    r0 = s.tmp_3;
    { step = 28; continue; }
  case 27:
    r0 = s.arg0.fields["size"];
    s.tmp_5 = r0;
    r0 = (s.tmp_5 == -1);
  case 28:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_6);
    if (!r0) { step = 29; continue; }
    s.c0___471349 = (0);
  case 29:
  case 30:
    { step = 36; continue; }
  case 31:
    r0 = (s.c0___471349 == 122);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 34; continue; }
    r0 = pxsim_String_.length(s.word___471330);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 != 1);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 32; continue; }
    s.c0___471349 = (0);
  case 32:
  case 33:
    { step = 35; continue; }
  case 34:
    s.c0___471349 = (0);
  case 35:
  case 36:
  case 37:
    r0 = (s.c0___471349 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 38; continue; }
    if ((s.word___471330) && (s.word___471330).vtable) {
    setupResume(s, 55);
    pxsim_String__stringConv(s.word___471330);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.word___471330) + ""; }
  case 55:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_String__concat("invalid format: ", s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_pxtcore.throwValue(s.tmp_1);
  case 38:
  case 39:
    r0 = (s.arg0).fields["c0"] = (s.c0___471349);
    { step = 41; continue; }
  case 40:
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = Buffer_sizeOfNumberFormat__P466552_mk(s);
    r0 = s.arg0.fields["nfmt"];
    s.tmp_2.arg0 = r0;
    s.callLocIdx = 229; s.pc = 56; return s.tmp_2;
  case 56:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["size"] = (s.tmp_1);
    r0 = (s.arg0).fields["c0"] = (-1);
  case 41:
    r0 = true;
    { step = 43; continue; }
    { step = 1; continue; }
  case 42:
    r0 = false;
  case 43:
    return leave(s, r0)
  default: oops()
} } }
jacdac_TokenParser_parse__P471293.info = {"start":1491,"length":2286,"line":55,"column":8,"endLine":118,"endColumn":9,"fileName":"pack.ts","functionName":"parse","argumentNames":["this"]}

function jacdac_TokenParser_parse__P471293_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_TokenParser_parse__P471293, depth: s.depth + 1,
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
  fmt___471305: undefined,
  endp___471314: undefined,
  word___471330: undefined,
  dotIdx___471343: undefined,
  c0___471349: undefined,
  sz0___471364: undefined,
  sz1___471372: undefined,
  c1___471398: undefined,
  arg0: undefined,
} }





function Buffer_sizeOfNumberFormat__P466552(s) {
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
Buffer_sizeOfNumberFormat__P466552.info = {"start":12548,"length":856,"line":427,"column":4,"endLine":451,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"sizeOfNumberFormat","argumentNames":["format"]}

function Buffer_sizeOfNumberFormat__P466552_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_sizeOfNumberFormat__P466552, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_numberFormatOfType__P471258(s) {
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
jacdac_numberFormatOfType__P471258.info = {"start":321,"length":654,"line":16,"column":4,"endLine":30,"endColumn":5,"fileName":"pack.ts","functionName":"numberFormatOfType","argumentNames":["tp"]}

function jacdac_numberFormatOfType__P471258_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_numberFormatOfType__P471258, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function parseInt__P466441(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.start___474814 = undefined;
    s.sign___474844 = undefined;
    s.output___474889 = undefined;
    s.hasDigit___474890 = undefined;
    s.i___474891 = undefined;
    s.code___474898 = undefined;
    s.val___474905 = undefined;
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
    s.start___474814 = (0);
  case 9:
    s.tmp_1 = r0 = s.start___474814;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = s.tmp_0;
    { step = 11; continue; }
  case 10:
    s.tmp_3 = helpers_isWhitespace__P466467_mk(s);
    r0 = pxsim_String_.charCodeAt(s.arg0, s.start___474814);
    s.tmp_3.arg0 = r0;
    s.callLocIdx = 0; s.pc = 47; return s.tmp_3;
  case 47:
    r0 = s.retval;
  case 11:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 12; continue; }
    r0 = (s.start___474814 + 1);
    s.start___474814 = (r0);
    { step = 9; continue; }
  case 12:
    s.tmp_1 = r0 = s.start___474814;
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
    s.sign___474844 = (1);
    r0 = pxsim_String_.charAt(s.arg0, s.start___474814);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.switch_eq("-", s.tmp_0);
    if (r0) { step = 15; continue; }
    r0 = pxsim_pxtcore.switch_eq("+", s.tmp_0);
    if (r0) { step = 16; continue; }
    r0 = s.tmp_0;
    { step = 17; continue; }
  case 15:
    s.sign___474844 = (-1);
  case 16:
    r0 = (s.start___474814 + 1);
    s.start___474814 = (r0);
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
    r0 = pxsim_String_.charAt(s.arg0, s.start___474814);
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
    r0 = (s.start___474814 + 1);
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
    r0 = (s.start___474814 + 1);
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
    r0 = (s.start___474814 + 2);
    s.start___474814 = (r0);
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
    s.output___474889 = (0);
    s.hasDigit___474890 = (false);
    s.i___474891 = (s.start___474814);
  case 30:
    s.tmp_1 = r0 = s.i___474891;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 45; continue; }
    r0 = pxsim_String_.charCodeAt(s.arg0, s.i___474891);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 | 32);
    s.code___474898 = (r0);
    s.val___474905 = (undefined);
    r0 = (s.code___474898 >= 48);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 31; continue; }
    r0 = s.tmp_0;
    { step = 32; continue; }
  case 31:
    r0 = (s.code___474898 < 58);
  case 32:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 33; continue; }
    r0 = (s.code___474898 - 48);
    s.val___474905 = (r0);
    { step = 38; continue; }
  case 33:
    r0 = (s.code___474898 >= 97);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 34; continue; }
    r0 = s.tmp_0;
    { step = 35; continue; }
  case 34:
    r0 = (s.code___474898 < 123);
  case 35:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 36; continue; }
    r0 = (10 + s.code___474898);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 - 97);
    s.val___474905 = (r0);
  case 36:
  case 37:
  case 38:
    r0 = (s.val___474905 == undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 39; continue; }
    r0 = s.tmp_0;
    { step = 40; continue; }
  case 39:
    r0 = (s.val___474905 >= s.arg1);
  case 40:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 43; continue; }
    r0 = pxsim_numops_toBoolDecr(s.hasDigit___474890);
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
    s.hasDigit___474890 = (true);
    r0 = (s.output___474889 * s.arg1);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + s.val___474905);
    s.output___474889 = (r0);
    r0 = (s.i___474891 + 1);
    s.i___474891 = (r0);
    { step = 30; continue; }
  case 45:
    r0 = (s.sign___474844 * s.output___474889);
  case 46:
    return leave(s, r0)
  default: oops()
} } }
parseInt__P466441.info = {"start":1064,"length":1690,"line":44,"column":0,"endLine":103,"endColumn":1,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"parseInt","argumentNames":["text","radix"]}

function parseInt__P466441_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: parseInt__P466441, depth: s.depth + 1,
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
  start___474814: undefined,
  sign___474844: undefined,
  output___474889: undefined,
  hasDigit___474890: undefined,
  i___474891: undefined,
  code___474898: undefined,
  val___474905: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function helpers_isWhitespace__P466467(s) {
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
helpers_isWhitespace__P466467.info = {"start":14399,"length":674,"line":489,"column":4,"endLine":506,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"isWhitespace","argumentNames":["c"]}

function helpers_isWhitespace__P466467_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_isWhitespace__P466467, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_TokenParser_constructor__P471294(s) {
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
    if (!checkSubtype(r0, jacdac_TokenParser__C471292_VT)) failedCast(r0);
    r0 = (s.arg0).fields["fmt"] = (s.arg1);
    r0 = (s.arg0).fields["fp"] = (0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_TokenParser_constructor__P471294.info = {"start":1446,"length":35,"line":53,"column":8,"endLine":53,"endColumn":43,"fileName":"pack.ts","functionName":"inline","argumentNames":["this","fmt"]}

function jacdac_TokenParser_constructor__P471294_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_TokenParser_constructor__P471294, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_jdpack__P468253(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___471882 = undefined;
    s.res___471888 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = jacdac_jdpackCore__P471723_mk(s);
    s.tmp_0.arg0 = null;
    s.tmp_0.arg1 = s.arg0;
    s.tmp_0.arg2 = s.arg1;
    s.tmp_0.arg3 = 0;
    s.callLocIdx = 248; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.len___471882 = (r0);
    r0 = pxsim.control.createBuffer(s.len___471882);
    s.res___471888 = (r0);
    s.tmp_0 = jacdac_jdpackCore__P471723_mk(s);
    s.tmp_0.arg0 = s.res___471888;
    s.tmp_0.arg1 = s.arg0;
    s.tmp_0.arg2 = s.arg1;
    s.tmp_0.arg3 = 0;
    s.callLocIdx = 249; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = s.res___471888;
    return leave(s, r0)
  default: oops()
} } }
jacdac_jdpack__P468253.info = {"start":8813,"length":216,"line":275,"column":4,"endLine":280,"endColumn":5,"fileName":"pack.ts","functionName":"jdpack","argumentNames":["fmt","data"]}

function jacdac_jdpack__P468253_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_jdpack__P468253, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  len___471882: undefined,
  res___471888: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_jdpackCore__P471723(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.idx___471728 = undefined;
    s.parser___471729 = undefined;
    s.c0___471736 = undefined;
    s.dataItem___471747 = undefined;
    s.fmt0___471755 = undefined;
    s.velt___471763 = undefined;
    s.unnamed4400___U6 = undefined;
    s.unnamed4401___U7 = undefined;
    s.arr___471772 = undefined;
    s.v___471781 = undefined;
    s.unnamed4402___U10 = undefined;
    s.unnamed4403___U11 = undefined;
    s.buf___471814 = undefined;
    s.sz___471849 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.lambdaArgs = null;
    }
    s.idx___471728 = (0);
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_TokenParser__C471292_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_TokenParser_constructor__P471294_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg1;
    s.callLocIdx = 241; s.pc = 41; return s.tmp_1;
  case 41:
    r0 = s.retval;
    s.parser___471729 = (s.tmp_0);
  case 1:
    s.tmp_1 = jacdac_TokenParser_parse__P471293_mk(s);
    s.tmp_1.arg0 = s.parser___471729;
    s.callLocIdx = 242; s.pc = 42; return s.tmp_1;
  case 42:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 38; continue; }
    r0 = s.parser___471729.fields["c0"];
    s.c0___471736 = (r0);
    r0 = (s.c0___471736 == 120);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = s.parser___471729.fields["size"];
    s.tmp_1 = r0;
    r0 = (s.arg3 + s.tmp_1);
    s.arg3 = (r0);
    { step = 1; continue; }
  case 2:
  case 3:
    s.tmp_0 = r0 = s.idx___471728;
    r0 = (s.tmp_0 + 1);
    s.idx___471728 = (r0);
    r0 = pxsim_Array__getAt(s.arg2, s.tmp_0);
    s.dataItem___471747 = (r0);
    r0 = (s.c0___471736 == 114);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_1 = helpers_stringSlice__P466463_mk(s);
    s.tmp_1.arg0 = s.arg1;
    r0 = s.parser___471729.fields["fp"];
    s.tmp_1.arg1 = r0;
    s.tmp_1.arg2 = undefined;
    s.callLocIdx = 243; s.pc = 43; return s.tmp_1;
  case 43:
    r0 = s.retval;
    s.fmt0___471755 = (r0);
    s.velt___471763 = (undefined);
    s.unnamed4400___U6 = (s.dataItem___471747);
    s.unnamed4401___U7 = (0);
  case 4:
    s.tmp_0 = r0 = s.unnamed4401___U7;
    r0 = pxsim_Array__length(s.unnamed4400___U6);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 5; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4400___U6, s.unnamed4401___U7);
    s.velt___471763 = (r0);
    s.tmp_2 = jacdac_jdpackCore__P471723_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.fmt0___471755;
    s.tmp_2.arg2 = s.velt___471763;
    s.tmp_2.arg3 = s.arg3;
    s.callLocIdx = 244; s.pc = 44; return s.tmp_2;
  case 44:
    r0 = s.retval;
    s.arg3 = (r0);
    r0 = (s.unnamed4401___U7 + 1);
    s.unnamed4401___U7 = (r0);
    { step = 4; continue; }
  case 5:
    s.unnamed4400___U6 = (undefined);
    { step = 38; continue; }
  case 6:
  case 7:
    s.arr___471772 = (undefined);
    r0 = s.parser___471729.fields["isArray"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 8; continue; }
    s.arr___471772 = (s.dataItem___471747);
    { step = 9; continue; }
  case 8:
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.dataItem___471747);
    s.arr___471772 = (s.tmp_0);
  case 9:
    s.v___471781 = (undefined);
    s.unnamed4402___U10 = (s.arr___471772);
    s.unnamed4403___U11 = (0);
  case 10:
    s.tmp_0 = r0 = s.unnamed4403___U11;
    r0 = pxsim_Array__length(s.unnamed4402___U10);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 37; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4402___U10, s.unnamed4403___U11);
    s.v___471781 = (r0);
    r0 = s.parser___471729.fields["nfmt"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 !== null);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 15; continue; }
    r0 = pxsim_pxtcore.typeOf(s.v___471781);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 != "number");
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 11; continue; }
    r0 = pxsim_pxtcore.typeOf(s.v___471781);
    s.tmp_8 = r0;
    if ((s.tmp_8) && (s.tmp_8).vtable) {
    setupResume(s, 45);
    pxsim_String__stringConv(s.tmp_8);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_8) + ""; }
  case 45:
    r0 = s.retval;
    s.tmp_7 = r0;
    r0 = pxsim_String__concat("expecting number, got ", s.tmp_7);
    s.tmp_6 = r0;
    r0 = pxsim_pxtcore.throwValue(s.tmp_6);
  case 11:
  case 12:
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    if (!r0) { step = 13; continue; }
    s.tmp_9 = r0 = s.arg0;
    r0 = s.parser___471729.fields["nfmt"];
    s.tmp_10 = r0;
    s.tmp_11 = r0 = s.arg3;
    r0 = s.parser___471729.fields["div"];
    s.tmp_14 = r0;
    r0 = (s.v___471781 * s.tmp_14);
    s.tmp_13 = r0;
    r0 = (s.tmp_13 | 0);
    s.tmp_12 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_9, s.tmp_10, s.tmp_11, s.tmp_12);
  case 13:
  case 14:
    r0 = s.parser___471729.fields["size"];
    s.tmp_0 = r0;
    r0 = (s.arg3 + s.tmp_0);
    s.arg3 = (r0);
    { step = 36; continue; }
  case 15:
    s.buf___471814 = (undefined);
    r0 = pxsim_pxtcore.typeOf(s.v___471781);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == "string");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 20; continue; }
    r0 = (s.c0___471736 == 122);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 16; continue; }
    if ((s.v___471781) && (s.v___471781).vtable) {
    setupResume(s, 46);
    pxsim_String__stringConv(s.v___471781);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.v___471781) + ""; }
  case 46:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, "\u0000");
    s.tmp_3 = r0;
    r0 = pxsim.control.createBufferFromUTF8(s.tmp_3);
    s.buf___471814 = (r0);
    { step = 19; continue; }
  case 16:
    r0 = (s.c0___471736 == 115);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 17; continue; }
    r0 = pxsim.control.createBufferFromUTF8(s.v___471781);
    s.buf___471814 = (r0);
    { step = 18; continue; }
  case 17:
    r0 = pxsim_pxtcore.throwValue("unexpected string");
  case 18:
  case 19:
    { step = 29; continue; }
  case 20:
    s.tmp_0 = r0 = s.v___471781;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 21; continue; }
    r0 = s.tmp_0;
    { step = 22; continue; }
  case 21:
    r0 = pxsim_pxtcore.typeOf(s.v___471781);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == "object");
  case 22:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (r0) { step = 23; continue; }
    r0 = s.tmp_2;
    { step = 24; continue; }
  case 23:
    r0 = pxsim.BufferMethods.length(s.v___471781);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 != null);
  case 24:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 27; continue; }
    r0 = (s.c0___471736 == 98);
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 25; continue; }
    s.buf___471814 = (s.v___471781);
    { step = 26; continue; }
  case 25:
    r0 = pxsim_pxtcore.throwValue("unexpected buffer");
  case 26:
    { step = 28; continue; }
  case 27:
    r0 = pxsim_pxtcore.throwValue("expecting string or buffer");
  case 28:
  case 29:
    r0 = s.parser___471729.fields["size"];
    s.sz___471849 = (r0);
    r0 = (s.sz___471849 >= 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 32; continue; }
    r0 = pxsim.BufferMethods.length(s.buf___471814);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > s.sz___471849);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 30; continue; }
    s.tmp_3 = r0 = s.buf___471814;
    r0 = (s.sz___471849 - 0);
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_3, 0, s.tmp_4);
    s.buf___471814 = (r0);
  case 30:
  case 31:
    { step = 33; continue; }
  case 32:
    r0 = pxsim.BufferMethods.length(s.buf___471814);
    s.sz___471849 = (r0);
  case 33:
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    if (!r0) { step = 34; continue; }
    r0 = pxsim.BufferMethods.write(s.arg0, s.arg3, s.buf___471814);
  case 34:
  case 35:
    r0 = (s.arg3 + s.sz___471849);
    s.arg3 = (r0);
  case 36:
    r0 = (s.unnamed4403___U11 + 1);
    s.unnamed4403___U11 = (r0);
    { step = 10; continue; }
  case 37:
    s.unnamed4402___U10 = (undefined);
    { step = 1; continue; }
  case 38:
    r0 = pxsim_Array__length(s.arg2);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > s.idx___471728);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 39; continue; }
    r0 = pxsim_pxtcore.throwValue("format too short");
  case 39:
  case 40:
    r0 = s.arg3;
    return leave(s, r0)
  default: oops()
} } }
jacdac_jdpackCore__P471723.info = {"start":6312,"length":2495,"line":199,"column":4,"endLine":273,"endColumn":5,"fileName":"pack.ts","functionName":"jdpackCore","argumentNames":["trg","fmt","data","off"]}

function jacdac_jdpackCore__P471723_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_jdpackCore__P471723, depth: s.depth + 1,
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
  idx___471728: undefined,
  parser___471729: undefined,
  c0___471736: undefined,
  dataItem___471747: undefined,
  fmt0___471755: undefined,
  velt___471763: undefined,
  unnamed4400___U6: undefined,
  unnamed4401___U7: undefined,
  arr___471772: undefined,
  v___471781: undefined,
  unnamed4402___U10: undefined,
  unnamed4403___U11: undefined,
  buf___471814: undefined,
  sz___471849: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }





function jacdac_stringToBuffer__P471276(s) {
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
jacdac_stringToBuffer__P471276.info = {"start":1062,"length":81,"line":36,"column":4,"endLine":38,"endColumn":5,"fileName":"pack.ts","functionName":"stringToBuffer","argumentNames":["str"]}

function jacdac_stringToBuffer__P471276_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_stringToBuffer__P471276, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function JSON_stringify__P466724(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.ss___473706 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkClassInstance(JSON_Stringifier__C468543_VT);
    s.ss___473706 = (r0);
    s.tmp_0 = r0 = s.ss___473706;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["currIndent"] = (s.tmp_1);
    r0 = (s.arg2 | 0);
    s.arg2 = (r0);
    r0 = (s.arg2 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.arg2 = (0);
  case 1:
  case 2:
    r0 = (s.arg2 > 10);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.arg2 = (10);
  case 3:
  case 4:
    s.tmp_0 = r0 = s.ss___473706;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["indentStep"] = (s.tmp_1);
    s.tmp_0 = r0 = s.ss___473706;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["currIndent"] = (s.tmp_1);
    r0 = (s.ss___473706).fields["indent"] = (s.arg2);
  case 5:
    s.tmp_0 = r0 = s.arg2;
    r0 = (s.tmp_0 - 1);
    s.arg2 = (r0);
    r0 = (s.tmp_0 > 0);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 6; continue; }
    s.tmp_2 = r0 = s.ss___473706;
    r0 = s.tmp_2.fields["indentStep"];
    s.tmp_5 = r0;
    if ((s.tmp_5) && (s.tmp_5).vtable) {
    setupResume(s, 7);
    pxsim_String__stringConv(s.tmp_5);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_5) + ""; }
  case 7:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, " ");
    s.tmp_3 = r0;
    r0 = (s.tmp_2).fields["indentStep"] = (s.tmp_3);
    { step = 5; continue; }
  case 6:
    s.tmp_0 = JSON_Stringifier_go__P468545_mk(s);
    s.tmp_0.arg0 = s.ss___473706;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 69; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
JSON_stringify__P466724.info = {"start":8773,"length":414,"line":288,"column":4,"endLine":300,"endColumn":5,"fileName":"pxt_modules/base/json.ts","functionName":"stringify","argumentNames":["value","replacer","indent"]}

function JSON_stringify__P466724_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: JSON_stringify__P466724, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  ss___473706: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function JSON_Stringifier_go__P468545(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.t___473747 = undefined;
    s.arr___473771 = undefined;
    s.r___473777 = undefined;
    s.i___473794 = undefined;
    s.keys___473858 = undefined;
    s.r___473865 = undefined;
    s.i___473882 = undefined;
    s.k___473888 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, JSON_Stringifier__C468543_VT)) failedCast(r0);
    r0 = pxsim_pxtcore.typeOf(s.arg1);
    s.t___473747 = (r0);
    r0 = (s.t___473747 == "string");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = JSON_Stringifier_doString__P468544_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_1.arg1 = s.arg1;
    s.callLocIdx = 63; s.pc = 38; return s.tmp_1;
  case 38:
    r0 = s.retval;
    { step = 37; continue; }
    { step = 36; continue; }
  case 1:
    r0 = (s.t___473747 == "boolean");
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (!r0) { step = 2; continue; }
    r0 = s.tmp_2;
    { step = 3; continue; }
  case 2:
    r0 = (s.t___473747 == "number");
  case 3:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBool(s.tmp_3);
    if (!r0) { step = 4; continue; }
    r0 = s.tmp_3;
    { step = 5; continue; }
  case 4:
    r0 = (s.arg1 == null);
  case 5:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 6; continue; }
    r0 = pxsim_String_.mkEmpty();
    s.tmp_5 = r0;
    if ((s.arg1) && (s.arg1).vtable) {
    setupResume(s, 39);
    pxsim_String__stringConv(s.arg1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg1) + ""; }
  case 39:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(s.tmp_5, s.tmp_6);
    { step = 37; continue; }
    { step = 35; continue; }
  case 6:
    r0 = pxsim_Array_.isArray(s.arg1);
    s.tmp_7 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_7);
    if (!r0) { step = 19; continue; }
    s.arr___473771 = (s.arg1);
    r0 = pxsim_Array__length(s.arr___473771);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    r0 = "[]";
    { step = 37; continue; }
    { step = 18; continue; }
  case 7:
    s.r___473777 = ("[");
    r0 = s.arg0.fields["indent"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 8; continue; }
    s.tmp_1 = r0 = s.arg0;
    r0 = s.tmp_1.fields["currIndent"];
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 40);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 40:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = s.arg0.fields["indentStep"];
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 41);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 41:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_5);
    s.tmp_2 = r0;
    r0 = (s.tmp_1).fields["currIndent"] = (s.tmp_2);
    if ((s.r___473777) && (s.r___473777).vtable) {
    setupResume(s, 42);
    pxsim_String__stringConv(s.r___473777);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___473777) + ""; }
  case 42:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_String__concat(s.tmp_0, "\n");
    s.r___473777 = (r0);
  case 8:
  case 9:
    s.i___473794 = (0);
  case 10:
    s.tmp_1 = r0 = s.i___473794;
    r0 = pxsim_Array__length(s.arr___473771);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 15; continue; }
    if ((s.r___473777) && (s.r___473777).vtable) {
    setupResume(s, 43);
    pxsim_String__stringConv(s.r___473777);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___473777) + ""; }
  case 43:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = s.arg0.fields["currIndent"];
    s.tmp_7 = r0;
    if ((s.tmp_7) && (s.tmp_7).vtable) {
    setupResume(s, 44);
    pxsim_String__stringConv(s.tmp_7);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_7) + ""; }
  case 44:
    r0 = s.retval;
    s.tmp_6 = r0;
    s.tmp_10 = JSON_Stringifier_go__P468545_mk(s);
    s.tmp_10.arg0 = s.arg0;
    r0 = pxsim_Array__getAt(s.arr___473771, s.i___473794);
    s.tmp_10.arg1 = r0;
    s.callLocIdx = 64; s.pc = 45; return s.tmp_10;
  case 45:
    r0 = s.retval;
    s.tmp_9 = r0;
    if ((s.tmp_9) && (s.tmp_9).vtable) {
    setupResume(s, 46);
    pxsim_String__stringConv(s.tmp_9);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_9) + ""; }
  case 46:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = pxsim_String__concat(s.tmp_6, s.tmp_8);
    s.tmp_5 = r0;
    if ((s.tmp_5) && (s.tmp_5).vtable) {
    setupResume(s, 47);
    pxsim_String__stringConv(s.tmp_5);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_5) + ""; }
  case 47:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_4);
    s.r___473777 = (r0);
    s.tmp_1 = r0 = s.i___473794;
    r0 = pxsim_Array__length(s.arr___473771);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 - 1);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 != s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    if ((s.r___473777) && (s.r___473777).vtable) {
    setupResume(s, 48);
    pxsim_String__stringConv(s.r___473777);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___473777) + ""; }
  case 48:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, ",");
    s.r___473777 = (r0);
  case 11:
  case 12:
    r0 = s.arg0.fields["indent"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    if ((s.r___473777) && (s.r___473777).vtable) {
    setupResume(s, 49);
    pxsim_String__stringConv(s.r___473777);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___473777) + ""; }
  case 49:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_1, "\n");
    s.r___473777 = (r0);
  case 13:
  case 14:
    r0 = (s.i___473794 + 1);
    s.i___473794 = (r0);
    { step = 10; continue; }
  case 15:
    r0 = s.arg0.fields["indent"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 16; continue; }
    s.tmp_1 = r0 = s.arg0;
    s.tmp_3 = helpers_stringSlice__P466463_mk(s);
    r0 = s.arg0.fields["currIndent"];
    s.tmp_3.arg0 = r0;
    r0 = s.arg0.fields["indent"];
    s.tmp_3.arg1 = r0;
    s.tmp_3.arg2 = undefined;
    s.callLocIdx = 65; s.pc = 50; return s.tmp_3;
  case 50:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = (s.tmp_1).fields["currIndent"] = (s.tmp_2);
  case 16:
  case 17:
    if ((s.r___473777) && (s.r___473777).vtable) {
    setupResume(s, 51);
    pxsim_String__stringConv(s.r___473777);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___473777) + ""; }
  case 51:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = s.arg0.fields["currIndent"];
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 52);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 52:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_3, "]");
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 53);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 53:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_1);
    s.r___473777 = (r0);
    r0 = s.r___473777;
    { step = 37; continue; }
  case 18:
    { step = 34; continue; }
  case 19:
    r0 = pxsim_pxtrt.keysOf(s.arg1);
    s.keys___473858 = (r0);
    r0 = pxsim_Array__length(s.keys___473858);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 20; continue; }
    r0 = "{}";
    { step = 37; continue; }
  case 20:
  case 21:
    s.r___473865 = ("{");
    r0 = s.arg0.fields["indent"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 22; continue; }
    s.tmp_1 = r0 = s.arg0;
    r0 = s.tmp_1.fields["currIndent"];
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 54);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 54:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = s.arg0.fields["indentStep"];
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 55);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 55:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_5);
    s.tmp_2 = r0;
    r0 = (s.tmp_1).fields["currIndent"] = (s.tmp_2);
    if ((s.r___473865) && (s.r___473865).vtable) {
    setupResume(s, 56);
    pxsim_String__stringConv(s.r___473865);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___473865) + ""; }
  case 56:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_String__concat(s.tmp_0, "\n");
    s.r___473865 = (r0);
  case 22:
  case 23:
    s.i___473882 = (0);
  case 24:
    s.tmp_1 = r0 = s.i___473882;
    r0 = pxsim_Array__length(s.keys___473858);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 31; continue; }
    r0 = pxsim_Array__getAt(s.keys___473858, s.i___473882);
    s.k___473888 = (r0);
    if ((s.r___473865) && (s.r___473865).vtable) {
    setupResume(s, 57);
    pxsim_String__stringConv(s.r___473865);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___473865) + ""; }
  case 57:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = s.arg0.fields["currIndent"];
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 58);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 58:
    r0 = s.retval;
    s.tmp_3 = r0;
    s.tmp_7 = JSON_Stringifier_doString__P468544_mk(s);
    s.tmp_7.arg0 = s.arg0;
    s.tmp_7.arg1 = s.k___473888;
    s.callLocIdx = 66; s.pc = 59; return s.tmp_7;
  case 59:
    r0 = s.retval;
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 60);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 60:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_5);
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 61);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 61:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_1);
    s.r___473865 = (r0);
    r0 = s.arg0.fields["indent"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 25; continue; }
    if ((s.r___473865) && (s.r___473865).vtable) {
    setupResume(s, 62);
    pxsim_String__stringConv(s.r___473865);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___473865) + ""; }
  case 62:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_1, ": ");
    s.r___473865 = (r0);
    { step = 26; continue; }
  case 25:
    if ((s.r___473865) && (s.r___473865).vtable) {
    setupResume(s, 63);
    pxsim_String__stringConv(s.r___473865);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___473865) + ""; }
  case 63:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_String__concat(s.tmp_0, ":");
    s.r___473865 = (r0);
  case 26:
    if ((s.r___473865) && (s.r___473865).vtable) {
    setupResume(s, 64);
    pxsim_String__stringConv(s.r___473865);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___473865) + ""; }
  case 64:
    r0 = s.retval;
    s.tmp_0 = r0;
    s.tmp_3 = JSON_Stringifier_go__P468545_mk(s);
    s.tmp_3.arg0 = s.arg0;
    r0 = pxsim_pxtrt.mapGetGeneric(s.arg1, s.k___473888);
    s.tmp_3.arg1 = r0;
    s.callLocIdx = 67; s.pc = 65; return s.tmp_3;
  case 65:
    r0 = s.retval;
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 66);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 66:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_1);
    s.r___473865 = (r0);
    s.tmp_1 = r0 = s.i___473882;
    r0 = pxsim_Array__length(s.keys___473858);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 - 1);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 != s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 27; continue; }
    if ((s.r___473865) && (s.r___473865).vtable) {
    setupResume(s, 67);
    pxsim_String__stringConv(s.r___473865);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___473865) + ""; }
  case 67:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, ",");
    s.r___473865 = (r0);
  case 27:
  case 28:
    r0 = s.arg0.fields["indent"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 29; continue; }
    if ((s.r___473865) && (s.r___473865).vtable) {
    setupResume(s, 68);
    pxsim_String__stringConv(s.r___473865);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___473865) + ""; }
  case 68:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_1, "\n");
    s.r___473865 = (r0);
  case 29:
  case 30:
    r0 = (s.i___473882 + 1);
    s.i___473882 = (r0);
    { step = 24; continue; }
  case 31:
    r0 = s.arg0.fields["indent"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 32; continue; }
    s.tmp_1 = r0 = s.arg0;
    s.tmp_3 = helpers_stringSlice__P466463_mk(s);
    r0 = s.arg0.fields["currIndent"];
    s.tmp_3.arg0 = r0;
    r0 = s.arg0.fields["indent"];
    s.tmp_3.arg1 = r0;
    s.tmp_3.arg2 = undefined;
    s.callLocIdx = 68; s.pc = 69; return s.tmp_3;
  case 69:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = (s.tmp_1).fields["currIndent"] = (s.tmp_2);
  case 32:
  case 33:
    if ((s.r___473865) && (s.r___473865).vtable) {
    setupResume(s, 70);
    pxsim_String__stringConv(s.r___473865);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___473865) + ""; }
  case 70:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = s.arg0.fields["currIndent"];
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 71);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 71:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_3, "}");
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 72);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 72:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_1);
    s.r___473865 = (r0);
    r0 = s.r___473865;
    { step = 37; continue; }
  case 34:
  case 35:
  case 36:
    r0 = undefined;
  case 37:
    return leave(s, r0)
  default: oops()
} } }
JSON_Stringifier_go__P468545.info = {"start":6319,"length":2076,"line":223,"column":8,"endLine":279,"endColumn":9,"fileName":"pxt_modules/base/json.ts","functionName":"go","argumentNames":["this","v"]}

function JSON_Stringifier_go__P468545_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: JSON_Stringifier_go__P468545, depth: s.depth + 1,
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
  t___473747: undefined,
  arr___473771: undefined,
  r___473777: undefined,
  i___473794: undefined,
  keys___473858: undefined,
  r___473865: undefined,
  i___473882: undefined,
  k___473888: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function JSON_Stringifier_doString__P468544(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.r___473974 = undefined;
    s.i___473975 = undefined;
    s.c___473981 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, JSON_Stringifier__C468543_VT)) failedCast(r0);
    s.r___473974 = ("\"");
    s.i___473975 = (0);
  case 1:
    s.tmp_1 = r0 = s.i___473975;
    r0 = pxsim_String_.length(s.arg1);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    r0 = pxsim_String_.charAt(s.arg1, s.i___473975);
    s.c___473981 = (r0);
    r0 = (s.c___473981 == "\n");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.c___473981 = ("\\n");
    { step = 13; continue; }
  case 2:
    r0 = (s.c___473981 == "\r");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.c___473981 = ("\\r");
    { step = 12; continue; }
  case 3:
    r0 = (s.c___473981 == "\t");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.c___473981 = ("\\t");
    { step = 11; continue; }
  case 4:
    r0 = (s.c___473981 == "\b");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    s.c___473981 = ("\\b");
    { step = 10; continue; }
  case 5:
    r0 = (s.c___473981 == "\\");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.c___473981 = ("\\\\");
    { step = 9; continue; }
  case 6:
    r0 = (s.c___473981 == "\"");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    s.c___473981 = ("\\\"");
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
  case 13:
    if ((s.r___473974) && (s.r___473974).vtable) {
    setupResume(s, 15);
    pxsim_String__stringConv(s.r___473974);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___473974) + ""; }
  case 15:
    r0 = s.retval;
    s.tmp_0 = r0;
    if ((s.c___473981) && (s.c___473981).vtable) {
    setupResume(s, 16);
    pxsim_String__stringConv(s.c___473981);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.c___473981) + ""; }
  case 16:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_1);
    s.r___473974 = (r0);
    r0 = (s.i___473975 + 1);
    s.i___473975 = (r0);
    { step = 1; continue; }
  case 14:
    if ((s.r___473974) && (s.r___473974).vtable) {
    setupResume(s, 17);
    pxsim_String__stringConv(s.r___473974);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___473974) + ""; }
  case 17:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_String__concat(s.tmp_0, "\"");
    return leave(s, r0)
  default: oops()
} } }
JSON_Stringifier_doString__P468544.info = {"start":5837,"length":472,"line":208,"column":8,"endLine":221,"endColumn":9,"fileName":"pxt_modules/base/json.ts","functionName":"doString","argumentNames":["this","s"]}

function JSON_Stringifier_doString__P468544_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: JSON_Stringifier_doString__P468544, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  r___473974: undefined,
  i___473975: undefined,
  c___473981: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_LoggerHost_constructor__P468367(s) {
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
    if (!checkSubtype(r0, jacdac_LoggerHost__C468365_VT)) failedCast(r0);
    r0 = (s.arg0).fields["_statusCode"] = (0);
    r0 = (s.arg0).fields["_lastListenerTime"] = (0);
    r0 = (s.arg0).fields["minPriority"] = (4);
    s.tmp_0 = jacdac_Host_constructor__P468120_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = "conh";
    s.tmp_0.arg2 = 316415946;
    s.callLocIdx = 265; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = (s.arg0).fields["_lastListenerTime"] = (0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_LoggerHost_constructor__P468367.info = {"start":166,"length":104,"line":5,"column":8,"endLine":8,"endColumn":9,"fileName":"logger-host/host.ts","functionName":"inline","argumentNames":["this"]}

function jacdac_LoggerHost_constructor__P468367_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_LoggerHost_constructor__P468367, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_Host_constructor__P468120(s) {
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
    if (!checkSubtype(r0, jacdac_Host__C468110_VT)) failedCast(r0);
    r0 = (s.arg0).fields["name"] = (s.arg1);
    r0 = (s.arg0).fields["serviceClass"] = (s.arg2);
    r0 = (s.arg0).fields["_statusCode"] = (0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Host_constructor__P468120.info = {"start":5961,"length":99,"line":183,"column":8,"endLine":186,"endColumn":13,"fileName":"routing.ts","functionName":"inline","argumentNames":["this","name","serviceClass"]}

function jacdac_Host_constructor__P468120_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Host_constructor__P468120, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_LoggerHost_log__P468370(s) {
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
    if (!checkSubtype(r0, jacdac_LoggerHost__C468365_VT)) failedCast(r0);
    s.tmp_0 = jacdac_LoggerHost_add__P468373_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = 1;
    s.tmp_0.arg2 = s.arg1;
    s.callLocIdx = 269; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_LoggerHost_log__P468370.info = {"start":1343,"length":89,"line":35,"column":8,"endLine":37,"endColumn":9,"fileName":"logger-host/host.ts","functionName":"log","argumentNames":["this","message"]}

function jacdac_LoggerHost_log__P468370_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_LoggerHost_log__P468370, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_LoggerHost_add__P468373(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___472507 = undefined;
    s.unnamed4406___U1 = undefined;
    s.unnamed4407___U2 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_LoggerHost__C468365_VT)) failedCast(r0);
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_String_.length(s.arg2);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
  case 2:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBool(s.tmp_4);
    if (!r0) { step = 3; continue; }
    r0 = s.tmp_4;
    { step = 4; continue; }
  case 3:
    r0 = s.arg0.fields["minPriority"];
    s.tmp_5 = r0;
    r0 = (s.arg1 < s.tmp_5);
  case 4:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBool(s.tmp_6);
    if (!r0) { step = 5; continue; }
    r0 = s.tmp_6;
    { step = 6; continue; }
  case 5:
    r0 = s.arg0.fields["_lastListenerTime"];
    s.tmp_8 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_8);
    s.tmp_7 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_7);
  case 6:
    // jmp value (already in r0)
    s.tmp_9 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_9);
    if (!r0) { step = 7; continue; }
    { step = 13; continue; }
  case 7:
  case 8:
    r0 = pxsim.control.millis();
    s.tmp_12 = r0;
    r0 = s.arg0.fields["_lastListenerTime"];
    s.tmp_13 = r0;
    r0 = (s.tmp_12 - s.tmp_13);
    s.tmp_11 = r0;
    r0 = (s.tmp_11 > 3000);
    s.tmp_10 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_10);
    if (!r0) { step = 9; continue; }
    r0 = (s.arg0).fields["_lastListenerTime"] = (0);
    { step = 13; continue; }
  case 9:
  case 10:
    s.buf___472507 = (undefined);
    s.tmp_0 = Buffer_chunkedFromUTF8__P466546_mk(s);
    s.tmp_0.arg0 = s.arg2;
    s.tmp_0.arg1 = 236;
    s.callLocIdx = 270; s.pc = 14; return s.tmp_0;
  case 14:
    r0 = s.retval;
    s.unnamed4406___U1 = (r0);
    s.unnamed4407___U2 = (0);
  case 11:
    s.tmp_0 = r0 = s.unnamed4407___U2;
    r0 = pxsim_Array__length(s.unnamed4406___U1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 12; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4406___U1, s.unnamed4407___U2);
    s.buf___472507 = (r0);
    s.tmp_2 = jacdac_Host_sendReport__P468721_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_3 = jacdac_JDPacket_from__P468209_mk(s);
    r0 = (0 + s.arg1);
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = s.buf___472507;
    s.callLocIdx = 271; s.pc = 16; return s.tmp_3;
  case 16:
    r0 = s.retval;
    s.tmp_2.arg1 = r0;
    s.callLocIdx = 272; s.pc = 15; return s.tmp_2;
  case 15:
    r0 = s.retval;
    r0 = (s.unnamed4407___U2 + 1);
    s.unnamed4407___U2 = (r0);
    { step = 11; continue; }
  case 12:
    s.unnamed4406___U1 = (undefined);
  case 13:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_LoggerHost_add__P468373.info = {"start":1647,"length":566,"line":45,"column":8,"endLine":58,"endColumn":9,"fileName":"logger-host/host.ts","functionName":"add","argumentNames":["this","priority","message"]}

function jacdac_LoggerHost_add__P468373_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_LoggerHost_add__P468373, depth: s.depth + 1,
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
  buf___472507: undefined,
  unnamed4406___U1: undefined,
  unnamed4407___U2: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_JDPacket_from__P468209(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.p___470610 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_JDPacket__C468204_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_JDPacket_constructor__P470584_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 174; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.p___470610 = (s.tmp_0);
    s.tmp_0 = r0 = s.p___470610;
    r0 = pxsim.control.createBuffer(16);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["_header"] = (s.tmp_1);
    s.tmp_0 = jacdac_JDPacket_data__P468230_mk(s);
    s.tmp_0.arg0 = s.p___470610;
    s.tmp_0.arg1 = s.arg1;
    s.callLocIdx = 175; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    s.tmp_0 = jacdac_JDPacket_service_command__P468225_mk(s);
    s.tmp_0.arg0 = s.p___470610;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 176; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = s.p___470610;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_from__P468209.info = {"start":1452,"length":255,"line":42,"column":8,"endLine":48,"endColumn":9,"fileName":"packet.ts","functionName":"from","argumentNames":["service_command","data"]}

function jacdac_JDPacket_from__P468209_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_from__P468209, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  p___470610: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_service_command__P468225(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, 4, 14, s.arg1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_service_command__P468225.info = {"start":4243,"length":111,"line":125,"column":8,"endLine":127,"endColumn":9,"fileName":"packet.ts","functionName":"service_command","argumentNames":["this","cmd"]}

function jacdac_JDPacket_service_command__P468225_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_service_command__P468225, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_service_command__P468224(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_0, 4, 14);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_service_command__P468224.info = {"start":4124,"length":110,"line":122,"column":8,"endLine":124,"endColumn":9,"fileName":"packet.ts","functionName":"service_command","argumentNames":["this"]}
jacdac_JDPacket_service_command__P468224.isGetter = true;

function jacdac_JDPacket_service_command__P468224_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_service_command__P468224, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_data__P468230(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
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
jacdac_JDPacket_data__P468230.info = {"start":4742,"length":193,"line":145,"column":8,"endLine":150,"endColumn":9,"fileName":"packet.ts","functionName":"data","argumentNames":["this","buf"]}

function jacdac_JDPacket_data__P468230_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_data__P468230, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_data__P468229(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = s.arg0.fields["_data"];
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_data__P468229.info = {"start":4672,"length":60,"line":141,"column":8,"endLine":143,"endColumn":9,"fileName":"packet.ts","functionName":"data","argumentNames":["this"]}
jacdac_JDPacket_data__P468229.isGetter = true;

function jacdac_JDPacket_data__P468229_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_data__P468229, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_JDPacket_constructor__P470584(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim.control.millis();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["timestamp"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_constructor__P470584.info = {"start":1138,"length":79,"line":31,"column":8,"endLine":33,"endColumn":9,"fileName":"packet.ts","functionName":"inline","argumentNames":["this"]}

function jacdac_JDPacket_constructor__P470584_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_constructor__P470584, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_Host_sendReport__P468721(s) {
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
    if (!checkSubtype(r0, jacdac_Host__C468110_VT)) failedCast(r0);
    s.tmp_0 = jacdac_JDPacket_service_number__P468222_mk(s);
    s.tmp_0.arg0 = s.arg1;
    r0 = s.arg0.fields["serviceNumber"];
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 14; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = jacdac_JDPacket__sendReport__P468243_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.tmp_0.arg1 = globals.myDevice___468707;
    s.callLocIdx = 15; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Host_sendReport__P468721.info = {"start":1872,"length":137,"line":72,"column":8,"endLine":75,"endColumn":9,"fileName":"routing.ts","functionName":"sendReport","argumentNames":["this","pkt"]}

function jacdac_Host_sendReport__P468721_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Host_sendReport__P468721, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket__sendReport__P468243(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    s.tmp_2 = jacdac_JDPacket_device_identifier__P468215_mk(s);
    s.tmp_2.arg0 = s.arg0;
    r0 = s.arg1.fields["deviceId"];
    s.tmp_2.arg1 = r0;
    s.callLocIdx = 203; s.pc = 4; return s.tmp_2;
  case 4:
    r0 = s.retval;
    s.tmp_0 = jacdac_JDPacket__sendCore__P468242_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 204; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket__sendReport__P468243.info = {"start":6873,"length":160,"line":218,"column":8,"endLine":223,"endColumn":9,"fileName":"packet.ts","functionName":"_sendReport","argumentNames":["this","dev"]}

function jacdac_JDPacket__sendReport__P468243_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket__sendReport__P468243, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket__sendCore__P468242(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    s.tmp_0 = jacdac___physSendPacket__P468065_mk(s);
    r0 = s.arg0.fields["_header"];
    s.tmp_0.arg0 = r0;
    r0 = s.arg0.fields["_data"];
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 202; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket__sendCore__P468242.info = {"start":6778,"length":85,"line":214,"column":8,"endLine":216,"endColumn":9,"fileName":"packet.ts","functionName":"_sendCore","argumentNames":["this"]}

function jacdac_JDPacket__sendCore__P468242_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket__sendCore__P468242, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac___physSendPacket__P468065(s) {
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
    s.tmp_1 = helpers_bufferConcat__P466527_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_1.arg1 = s.arg1;
    s.callLocIdx = 1; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.sendMessage("jacdac", s.tmp_0, undefined);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac___physSendPacket__P468065.info = {"start":311,"length":140,"line":15,"column":4,"endLine":17,"endColumn":5,"fileName":"jdsim.ts","functionName":"__physSendPacket","argumentNames":["header","data"]}

function jacdac___physSendPacket__P468065_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac___physSendPacket__P468065, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function helpers_bufferConcat__P466527(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.r___475516 = undefined;
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
    s.r___475516 = (r0);
    r0 = pxsim.BufferMethods.write(s.r___475516, 0, s.arg0);
    s.tmp_0 = r0 = s.r___475516;
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.write(s.tmp_0, s.tmp_1, s.arg1);
    r0 = s.r___475516;
    return leave(s, r0)
  default: oops()
} } }
helpers_bufferConcat__P466527.info = {"start":3785,"length":179,"line":132,"column":4,"endLine":137,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"bufferConcat","argumentNames":["a","b"]}

function helpers_bufferConcat__P466527_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_bufferConcat__P466527, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  r___475516: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_device_identifier__P468215(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.idb___470683 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    s.tmp_0 = Buffer_fromHex__P466544_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.callLocIdx = 182; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.idb___470683 = (r0);
    r0 = pxsim.BufferMethods.length(s.idb___470683);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 != 8);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_2 = jacdac_error__P470581_mk(s);
    s.tmp_2.arg0 = "Invalid id";
    s.callLocIdx = 183; s.pc = 4; return s.tmp_2;
  case 4:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.write(s.tmp_0, 4, s.idb___470683);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_device_identifier__P468215.info = {"start":2804,"length":196,"line":82,"column":8,"endLine":87,"endColumn":9,"fileName":"packet.ts","functionName":"device_identifier","argumentNames":["this","id"]}

function jacdac_JDPacket_device_identifier__P468215_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_device_identifier__P468215, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  idb___470683: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_error__P470581(s) {
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
jacdac_error__P470581.info = {"start":971,"length":53,"line":22,"column":4,"endLine":24,"endColumn":5,"fileName":"packet.ts","functionName":"error","argumentNames":["msg"]}

function jacdac_error__P470581_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_error__P470581, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function Buffer_fromHex__P466544(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.hexStr___475191 = undefined;
    s.res___475193 = undefined;
    s.i___475202 = undefined;
    s.p0___475208 = undefined;
    s.p1___475217 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.hexStr___475191 = ("0123456789abcdef");
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >> 1);
    s.tmp_0 = r0;
    r0 = pxsim.control.createBuffer(s.tmp_0);
    s.res___475193 = (r0);
    s.tmp_0 = helpers_stringToLowerCase__P466464_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 25; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    s.arg0 = (r0);
    s.i___475202 = (0);
  case 1:
    s.tmp_1 = r0 = s.i___475202;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_3 = r0 = s.hexStr___475191;
    r0 = pxsim_String_.charAt(s.arg0, s.i___475202);
    s.tmp_4 = r0;
    r0 = pxsim_String_.indexOf(s.tmp_3, s.tmp_4, undefined);
    s.p0___475208 = (r0);
    s.tmp_0 = r0 = s.hexStr___475191;
    s.tmp_2 = r0 = s.arg0;
    r0 = (s.i___475202 + 1);
    s.tmp_3 = r0;
    r0 = pxsim_String_.charAt(s.tmp_2, s.tmp_3);
    s.tmp_1 = r0;
    r0 = pxsim_String_.indexOf(s.tmp_0, s.tmp_1, undefined);
    s.p1___475217 = (r0);
    r0 = (s.p0___475208 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = (s.p1___475217 < 0);
  case 3:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.throwValue("Invalid hex");
  case 4:
  case 5:
    s.tmp_2 = r0 = s.res___475193;
    r0 = (s.i___475202 >> 1);
    s.tmp_3 = r0;
    r0 = (s.p0___475208 << 4);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 | s.p1___475217);
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_2, s.tmp_3, s.tmp_4);
    r0 = (s.i___475202 + 2);
    s.i___475202 = (r0);
    { step = 1; continue; }
  case 6:
    r0 = s.res___475193;
    return leave(s, r0)
  default: oops()
} } }
Buffer_fromHex__P466544.info = {"start":7141,"length":469,"line":256,"column":4,"endLine":268,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"fromHex","argumentNames":["hex"]}

function Buffer_fromHex__P466544_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_fromHex__P466544, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  hexStr___475191: undefined,
  res___475193: undefined,
  i___475202: undefined,
  p0___475208: undefined,
  p1___475217: undefined,
  arg0: undefined,
} }





function helpers_stringToLowerCase__P466464(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.r___475248 = undefined;
    s.prev___475249 = undefined;
    s.i___475250 = undefined;
    s.c___475256 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_String_.mkEmpty();
    s.r___475248 = (r0);
    s.prev___475249 = (0);
    s.i___475250 = (0);
  case 1:
    s.tmp_1 = r0 = s.i___475250;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    r0 = pxsim_String_.charCodeAt(s.arg0, s.i___475250);
    s.c___475256 = (r0);
    r0 = (65 <= s.c___475256);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = (s.c___475256 <= 90);
  case 3:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 4; continue; }
    if ((s.r___475248) && (s.r___475248).vtable) {
    setupResume(s, 7);
    pxsim_String__stringConv(s.r___475248);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___475248) + ""; }
  case 7:
    r0 = s.retval;
    s.tmp_2 = r0;
    s.tmp_7 = helpers_stringSlice__P466463_mk(s);
    s.tmp_7.arg0 = s.arg0;
    s.tmp_7.arg1 = s.prev___475249;
    s.tmp_7.arg2 = s.i___475250;
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
    r0 = (s.c___475256 + 32);
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
    s.r___475248 = (r0);
    r0 = (s.i___475250 + 1);
    s.prev___475249 = (r0);
  case 4:
  case 5:
    r0 = (s.i___475250 + 1);
    s.i___475250 = (r0);
    { step = 1; continue; }
  case 6:
    if ((s.r___475248) && (s.r___475248).vtable) {
    setupResume(s, 12);
    pxsim_String__stringConv(s.r___475248);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.r___475248) + ""; }
  case 12:
    r0 = s.retval;
    s.tmp_0 = r0;
    s.tmp_3 = helpers_stringSlice__P466463_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.tmp_3.arg1 = s.prev___475249;
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
    s.r___475248 = (r0);
    r0 = s.r___475248;
    return leave(s, r0)
  default: oops()
} } }
helpers_stringToLowerCase__P466464.info = {"start":12062,"length":386,"line":406,"column":4,"endLine":418,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"stringToLowerCase","argumentNames":["s"]}

function helpers_stringToLowerCase__P466464_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_stringToLowerCase__P466464, depth: s.depth + 1,
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
  r___475248: undefined,
  prev___475249: undefined,
  i___475250: undefined,
  c___475256: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_device_identifier__P468214(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_1, 4, 8);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_0);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_device_identifier__P468214.info = {"start":2680,"length":115,"line":78,"column":8,"endLine":81,"endColumn":9,"fileName":"packet.ts","functionName":"device_identifier","argumentNames":["this"]}
jacdac_JDPacket_device_identifier__P468214.isGetter = true;

function jacdac_JDPacket_device_identifier__P468214_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_device_identifier__P468214, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_service_number__P468222(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = (s.arg1 == null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.throwValue("service_number not set");
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
jacdac_JDPacket_service_number__P468222.info = {"start":3769,"length":238,"line":112,"column":8,"endLine":116,"endColumn":9,"fileName":"packet.ts","functionName":"service_number","argumentNames":["this","service_number"]}

function jacdac_JDPacket_service_number__P468222_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_service_number__P468222, depth: s.depth + 1,
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





function jacdac_JDPacket_service_number__P468221(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_1, 13);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 63);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_service_number__P468221.info = {"start":3658,"length":102,"line":109,"column":8,"endLine":111,"endColumn":9,"fileName":"packet.ts","functionName":"service_number","argumentNames":["this"]}
jacdac_JDPacket_service_number__P468221.isGetter = true;

function jacdac_JDPacket_service_number__P468221_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_service_number__P468221, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function Buffer_chunkedFromUTF8__P466546(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.chunks___474325 = undefined;
    s.pos___474327 = undefined;
    s.len___474333 = undefined;
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
    s.chunks___474325 = (r0);
    s.pos___474327 = (0);
  case 3:
    s.tmp_1 = r0 = s.pos___474327;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.tmp_3 = Buffer_chunkLen__P468496_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.tmp_3.arg1 = s.pos___474327;
    s.tmp_3.arg2 = s.arg1;
    s.callLocIdx = 28; s.pc = 5; return s.tmp_3;
  case 5:
    r0 = s.retval;
    s.len___474333 = (r0);
    s.tmp_0 = r0 = s.chunks___474325;
    s.tmp_3 = helpers_stringSlice__P466463_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.tmp_3.arg1 = s.pos___474327;
    r0 = (s.pos___474327 + s.len___474333);
    s.tmp_3.arg2 = r0;
    s.callLocIdx = 29; s.pc = 6; return s.tmp_3;
  case 6:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim.control.createBufferFromUTF8(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    r0 = (s.pos___474327 + s.len___474333);
    s.pos___474327 = (r0);
    { step = 3; continue; }
  case 4:
    r0 = s.chunks___474325;
    return leave(s, r0)
  default: oops()
} } }
Buffer_chunkedFromUTF8__P466546.info = {"start":8339,"length":381,"line":298,"column":4,"endLine":309,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"chunkedFromUTF8","argumentNames":["str","maxBytes"]}

function Buffer_chunkedFromUTF8__P466546_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_chunkedFromUTF8__P466546, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  chunks___474325: undefined,
  pos___474327: undefined,
  len___474333: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Buffer_chunkLen__P468496(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.L___474358 = undefined;
    s.R___474362 = undefined;
    s.m___474380 = undefined;
    s.ll___474389 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.Math_.idiv(s.arg2, 3);
    s.L___474358 = (r0);
    s.R___474362 = (s.arg2);
    s.tmp_4 = helpers_stringSlice__P466463_mk(s);
    s.tmp_4.arg0 = s.arg0;
    s.tmp_4.arg1 = s.arg1;
    r0 = (s.arg1 + s.R___474362);
    s.tmp_4.arg2 = r0;
    s.callLocIdx = 26; s.pc = 10; return s.tmp_4;
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
    r0 = s.R___474362;
    { step = 9; continue; }
  case 1:
  case 2:
  case 3:
    r0 = (s.L___474358 < s.R___474362);
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 8; continue; }
    r0 = (s.L___474358 + s.R___474362);
    s.tmp_6 = r0;
    r0 = (s.tmp_6 >> 1);
    s.m___474380 = (r0);
    r0 = (s.m___474380 == s.L___474358);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    { step = 8; continue; }
  case 4:
  case 5:
    s.tmp_3 = helpers_stringSlice__P466463_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.tmp_3.arg1 = s.arg1;
    r0 = (s.arg1 + s.m___474380);
    s.tmp_3.arg2 = r0;
    s.callLocIdx = 27; s.pc = 11; return s.tmp_3;
  case 11:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim.control.createBufferFromUTF8(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_1);
    s.ll___474389 = (r0);
    r0 = (s.ll___474389 <= s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.L___474358 = (s.m___474380);
    { step = 7; continue; }
  case 6:
    s.R___474362 = (s.m___474380);
  case 7:
    { step = 3; continue; }
  case 8:
    r0 = s.L___474358;
  case 9:
    return leave(s, r0)
  default: oops()
} } }
Buffer_chunkLen__P468496.info = {"start":7837,"length":496,"line":277,"column":4,"endLine":296,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"chunkLen","argumentNames":["s","off","maxlen"]}

function Buffer_chunkLen__P468496_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_chunkLen__P468496, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  L___474358: undefined,
  R___474362: undefined,
  m___474380: undefined,
  ll___474389: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_start__P468182(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.faultpin___470496 = undefined;
    r0 = pxsim_numops_toBoolDecr(globals.hostServices___468706);
    if (!r0) { step = 1; continue; }
    { step = 5; continue; }
  case 1:
  case 2:
    s.tmp_0 = jacdac_log__P468716_mk(s);
    s.tmp_0.arg0 = "jacdac starting";
    s.callLocIdx = 152; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    globals.hostServices___468706 = (r0);
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_ControlService__C469889_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_ControlService_constructor__P469892_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 153; s.pc = 7; return s.tmp_1;
  case 7:
    r0 = s.retval;
    s.tmp_2 = jacdac_Host_start__P468121_mk(s);
    s.tmp_2.arg0 = s.tmp_0;
    s.callLocIdx = 154; s.pc = 8; return s.tmp_2;
  case 8:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    globals._unattachedClients___468108 = (r0);
    r0 = pxsim_Array__mk();
    globals._allClients___468109 = (r0);
    s.tmp_0 = jacdac___physStart__P468069_mk(s);
    s.callLocIdx = 155; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    r0 = 30;
    s.tmp_0 = r0;
    r0 = pxsim.control.internalOnEvent(s.tmp_0, 1, inline__P470473, 16);
    r0 = 30;
    s.tmp_0 = r0;
    r0 = pxsim.control.internalOnEvent(s.tmp_0, 100, jacdac_queueAnnounce__P469907, 16);
    s.tmp_0 = jacdac_enablePower__P468181_mk(s);
    s.tmp_0.arg0 = true;
    s.callLocIdx = 162; s.pc = 10; return s.tmp_0;
  case 10:
    r0 = s.retval;
    r0 = pxsim.pins.pinByCfg(1105);
    s.faultpin___470496 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.faultpin___470496);
    if (!r0) { step = 3; continue; }
    r0 = pxsim.DigitalInOutPinMethods.setPull(s.faultpin___470496, 1);
    r0 = pxsim.DigitalInOutPinMethods.digitalRead(s.faultpin___470496);
    r0 = pxsim_pxtcore_mkAction(1, inline__P470509);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.faultpin___470496);
    s.tmp_1 = jacdac_onAnnounce__P468177_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 169; s.pc = 11; return s.tmp_1;
  case 11:
    r0 = s.retval;
  case 3:
  case 4:
    s.tmp_0 = console_addListener__P466720_mk(s);
    s.tmp_0.arg0 = inline__P470526;
    s.callLocIdx = 171; s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
    s.tmp_0 = jacdac_Host_start__P468121_mk(s);
    s.tmp_0.arg0 = globals.loggerHost___468374;
    s.callLocIdx = 172; s.pc = 13; return s.tmp_0;
  case 13:
    r0 = s.retval;
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_start__P468182.info = {"start":27023,"length":1837,"line":830,"column":4,"endLine":877,"endColumn":5,"fileName":"routing.ts","functionName":"start","argumentNames":[]}

function jacdac_start__P468182_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_start__P468182, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  faultpin___470496: undefined,
} }





function inline__P470473(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___470474 = undefined;
    s.pkt___470481 = undefined;
  case 1:
    s.tmp_1 = jacdac___physGetPacket__P468066_mk(s);
    s.callLocIdx = 157; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.tmp_0 = r0;
    s.buf___470474 = (r0);
    r0 = (null != s.tmp_0);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 2; continue; }
    s.tmp_3 = jacdac_JDPacket_fromBinary__P468208_mk(s);
    s.tmp_3.arg0 = s.buf___470474;
    s.callLocIdx = 158; s.pc = 4; return s.tmp_3;
  case 4:
    r0 = s.retval;
    s.pkt___470481 = (r0);
    s.tmp_0 = r0 = s.pkt___470481;
    s.tmp_2 = jacdac___physGetTimestamp__P468067_mk(s);
    s.callLocIdx = 159; s.pc = 5; return s.tmp_2;
  case 5:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["timestamp"] = (s.tmp_1);
    s.tmp_0 = jacdac_routePacket__P468180_mk(s);
    s.tmp_0.arg0 = s.pkt___470481;
    s.callLocIdx = 160; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    { step = 1; continue; }
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P470473.info = {"start":27369,"length":269,"line":841,"column":67,"endLine":848,"endColumn":9,"fileName":"routing.ts","functionName":"inline","argumentNames":[]}

function inline__P470473_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P470473, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  buf___470474: undefined,
  pkt___470481: undefined,
} }





function inline__P470509(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim.DigitalInOutPinMethods.digitalRead(s.caps[0]);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == false);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_2 = control_runInBackground__P466627_mk(s);
    s.tmp_2.arg0 = inline__P470515;
    s.callLocIdx = 168; s.pc = 3; return s.tmp_2;
  case 3:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P470509.info = {"start":28075,"length":595,"line":858,"column":23,"endLine":869,"endColumn":13,"fileName":"routing.ts","functionName":"inline","argumentNames":[]}

function inline__P470509_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P470509, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
} }





function inline__P470515(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim.control.dmesg("jacdac power overload; restarting power");
    s.tmp_0 = jacdac_enablePower__P468181_mk(s);
    s.tmp_0.arg0 = false;
    s.callLocIdx = 163; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = jacdac_setPinByCfg__P469880_mk(s);
    s.tmp_0.arg0 = 1103;
    s.tmp_0.arg1 = true;
    s.callLocIdx = 164; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    s.tmp_0 = pause__P466750_mk(s);
    s.tmp_0.arg0 = 200;
    s.callLocIdx = 165; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.tmp_0 = jacdac_setPinByCfg__P469880_mk(s);
    s.tmp_0.arg0 = 1103;
    s.tmp_0.arg1 = false;
    s.callLocIdx = 166; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    s.tmp_0 = jacdac_enablePower__P468181_mk(s);
    s.tmp_0.arg0 = true;
    s.callLocIdx = 167; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P470515.info = {"start":28182,"length":455,"line":860,"column":44,"endLine":867,"endColumn":21,"fileName":"routing.ts","functionName":"inline","argumentNames":[]}

function inline__P470515_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P470515, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function inline__P470526(s) {
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
    s.tmp_2 = jacdac_LoggerHost_add__P468373_mk(s);
    s.tmp_2.arg0 = globals.loggerHost___468374;
    s.tmp_2.arg1 = s.arg0;
    s.tmp_2.arg2 = s.arg1;
    s.callLocIdx = 170; s.pc = 3; return s.tmp_2;
  case 3:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P470526.info = {"start":28711,"length":114,"line":872,"column":28,"endLine":875,"endColumn":9,"fileName":"routing.ts","functionName":"inline","argumentNames":["pri","msg"]}

function inline__P470526_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P470526, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function console_addListener__P466720(s) {
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
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_Array_.indexOf(globals.listeners___468532, s.arg0, undefined);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > -1);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    { step = 5; continue; }
  case 3:
  case 4:
    r0 = pxsim_Array__push(globals.listeners___468532, s.arg0);
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
console_addListener__P466720.info = {"start":3558,"length":197,"line":121,"column":4,"endLine":124,"endColumn":5,"fileName":"pxt_modules/base/console.ts","functionName":"addListener","argumentNames":["listener"]}

function console_addListener__P466720_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_addListener__P466720, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function pause__P466750(s) {
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
    pxsim.loops.pause(s.arg0);
    checkResumeConsumed();
    return;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
pause__P466750.info = {"start":246,"length":57,"line":7,"column":0,"endLine":9,"endColumn":1,"fileName":"pxt_modules/base/pause.ts","functionName":"pause","argumentNames":["ms"]}

function pause__P466750_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pause__P466750, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_setPinByCfg__P469880(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.pin___470434 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.pins.pinByCfg(s.arg0);
    s.pin___470434 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.pin___470434);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 5; continue; }
  case 1:
  case 2:
    r0 = pxsim_pxtcore.getConfig(s.arg0, 0);
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
    r0 = pxsim.DigitalInOutPinMethods.digitalWrite(s.pin___470434, s.arg1);
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_setPinByCfg__P469880.info = {"start":26542,"length":259,"line":815,"column":4,"endLine":822,"endColumn":5,"fileName":"routing.ts","functionName":"setPinByCfg","argumentNames":["cfg","val"]}

function jacdac_setPinByCfg__P469880_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_setPinByCfg__P469880, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  pin___470434: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function control_runInBackground__P466627(s) {
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
    r0 = pxsim.control.runInParallel(s.arg0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_runInBackground__P466627.info = {"start":384,"length":88,"line":10,"column":4,"endLine":12,"endColumn":5,"fileName":"pxt_modules/base/control.ts","functionName":"runInBackground","argumentNames":["a"]}

function control_runInBackground__P466627_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_runInBackground__P466627, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_onAnnounce__P468177(s) {
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
    r0 = pxsim_Array__push(globals.announceCallbacks___468710, s.arg0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_onAnnounce__P468177.info = {"start":19364,"length":85,"line":611,"column":4,"endLine":613,"endColumn":5,"fileName":"routing.ts","functionName":"onAnnounce","argumentNames":["cb"]}

function jacdac_onAnnounce__P468177_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_onAnnounce__P468177, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_enablePower__P468181(s) {
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
    s.tmp_0 = jacdac_setPinByCfg__P469880_mk(s);
    s.tmp_0.arg0 = 1104;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 151; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_enablePower__P468181.info = {"start":26807,"length":210,"line":824,"column":4,"endLine":828,"endColumn":5,"fileName":"routing.ts","functionName":"enablePower","argumentNames":["enabled"]}

function jacdac_enablePower__P468181_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_enablePower__P468181, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_queueAnnounce__P469907(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.fmt___469966 = undefined;
    s.ids___469977 = undefined;
    s.cl___470009 = undefined;
    s.unnamed4380___U3 = undefined;
    s.unnamed4381___U4 = undefined;
    r0 = pxsim_Array__length(globals.hostServices___468706);
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
    r0 = pxsim_String__concat("<", s.tmp_2);
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
    r0 = pxsim_String__concat(s.tmp_0, "I");
    s.fmt___469966 = (r0);
    s.tmp_0 = helpers_arrayMap__P466450_mk(s);
    s.tmp_0.arg0 = globals.hostServices___468706;
    s.tmp_0.arg1 = inline__P469979;
    s.callLocIdx = 93; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    s.ids___469977 = (r0);
    r0 = (globals.restartCounter___468715 < 15);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = (globals.restartCounter___468715 + 1);
    globals.restartCounter___468715 = (r0);
  case 1:
  case 2:
    s.tmp_0 = r0 = s.ids___469977;
    r0 = (globals.restartCounter___468715 | 256);
    s.tmp_1 = r0;
    r0 = pxsim_Array_.setAt(s.tmp_0, 0, s.tmp_1);
    s.tmp_0 = jacdac_JDPacket__sendReport__P468243_mk(s);
    s.tmp_1 = jacdac_JDPacket_packed__P468211_mk(s);
    s.tmp_1.arg0 = 0;
    s.tmp_1.arg1 = s.fmt___469966;
    s.tmp_1.arg2 = s.ids___469977;
    s.callLocIdx = 94; s.pc = 9; return s.tmp_1;
  case 9:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    s.tmp_2 = jacdac_selfDevice__P468176_mk(s);
    s.callLocIdx = 95; s.pc = 10; return s.tmp_2;
  case 10:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 96; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    s.tmp_0 = helpers_arrayForEach__P466453_mk(s);
    s.tmp_0.arg0 = globals.announceCallbacks___468710;
    s.tmp_0.arg1 = inline__P470005;
    s.callLocIdx = 98; s.pc = 11; return s.tmp_0;
  case 11:
    r0 = s.retval;
    s.cl___470009 = (undefined);
    s.unnamed4380___U3 = (globals._allClients___468109);
    s.unnamed4381___U4 = (0);
  case 3:
    s.tmp_0 = r0 = s.unnamed4381___U4;
    r0 = pxsim_Array__length(s.unnamed4380___U3);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4380___U3, s.unnamed4381___U4);
    s.cl___470009 = (r0);
    s.tmp_2 = jacdac_Client__C468128_v1_1_mk(s);
    s.tmp_2.arg0 = s.cl___470009;
    if (!checkSubtype(s.tmp_2.arg0, jacdac_Client__C468128_VT)) failedCast(s.tmp_2.arg0);
    s.tmp_2.fn = s.tmp_2.arg0.vtable.methods.announceCallback;
    s.pc = 12; return s.tmp_2;
  case 12:
    r0 = s.retval;
    r0 = (s.unnamed4381___U4 + 1);
    s.unnamed4381___U4 = (r0);
    { step = 3; continue; }
  case 4:
    s.unnamed4380___U3 = (undefined);
    s.tmp_0 = jacdac_gcDevices__P470014_mk(s);
    s.callLocIdx = 99; s.pc = 13; return s.tmp_0;
  case 13:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_queueAnnounce__P469907.info = {"start":19750,"length":479,"line":625,"column":4,"endLine":636,"endColumn":5,"fileName":"routing.ts","functionName":"queueAnnounce","argumentNames":[]}

function jacdac_queueAnnounce__P469907_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_queueAnnounce__P469907, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  fmt___469966: undefined,
  ids___469977: undefined,
  cl___470009: undefined,
  unnamed4380___U3: undefined,
  unnamed4381___U4: undefined,
} }





function inline__P469979(s) {
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
inline__P469979.info = {"start":19866,"length":36,"line":627,"column":37,"endLine":627,"endColumn":73,"fileName":"routing.ts","functionName":"inline","argumentNames":["h"]}

function inline__P469979_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P469979, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function inline__P470005(s) {
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
    s.tmp_0 = lambda_1_mk(s);
    s.tmp_0.argL = s.arg0;
    setupLambda(s.tmp_0, s.tmp_0.argL);
    s.callLocIdx = 97; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P470005.info = {"start":20122,"length":8,"line":632,"column":34,"endLine":632,"endColumn":42,"fileName":"routing.ts","functionName":"inline","argumentNames":["f"]}

function inline__P470005_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P470005, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_gcDevices__P470014(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.cutoff___470391 = undefined;
    s.numdel___470395 = undefined;
    s.i___470396 = undefined;
    s.dev___470402 = undefined;
    r0 = pxsim.control.millis();
    s.tmp_0 = r0;
    r0 = (s.tmp_0 - 2000);
    s.cutoff___470391 = (r0);
    s.numdel___470395 = (0);
    s.i___470396 = (0);
  case 1:
    s.tmp_1 = r0 = s.i___470396;
    r0 = pxsim_Array__length(globals.devices____468708);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(globals.devices____468708, s.i___470396);
    s.dev___470402 = (r0);
    r0 = s.dev___470402.fields["lastSeen"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 < s.cutoff___470391);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_2 = helpers_arraySplice__P466444_mk(s);
    s.tmp_2.arg0 = globals.devices____468708;
    s.tmp_2.arg1 = s.i___470396;
    s.tmp_2.arg2 = 1;
    s.callLocIdx = 148; s.pc = 7; return s.tmp_2;
  case 7:
    r0 = s.retval;
    r0 = (s.i___470396 - 1);
    s.i___470396 = (r0);
    s.tmp_0 = jacdac_Device__destroy__P468173_mk(s);
    s.tmp_0.arg0 = s.dev___470402;
    s.callLocIdx = 149; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    r0 = (s.numdel___470395 + 1);
    s.numdel___470395 = (r0);
  case 2:
  case 3:
    r0 = (s.i___470396 + 1);
    s.i___470396 = (r0);
    { step = 1; continue; }
  case 4:
    r0 = pxsim_numops_toBoolDecr(s.numdel___470395);
    if (!r0) { step = 5; continue; }
    s.tmp_0 = jacdac_newDevice__P470034_mk(s);
    s.callLocIdx = 150; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
  case 5:
  case 6:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_gcDevices__P470014.info = {"start":25978,"length":409,"line":794,"column":4,"endLine":808,"endColumn":5,"fileName":"routing.ts","functionName":"gcDevices","argumentNames":[]}

function jacdac_gcDevices__P470014_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_gcDevices__P470014, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  cutoff___470391: undefined,
  numdel___470395: undefined,
  i___470396: undefined,
  dev___470402: undefined,
} }





function jacdac_newDevice__P470034(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.f___470037 = undefined;
    s.unnamed4384___U1 = undefined;
    s.unnamed4385___U2 = undefined;
    r0 = pxsim_numops_toBoolDecr(globals.newDeviceCallbacks___468712);
    if (!r0) { step = 3; continue; }
    s.f___470037 = (undefined);
    s.unnamed4384___U1 = (globals.newDeviceCallbacks___468712);
    s.unnamed4385___U2 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed4385___U2;
    r0 = pxsim_Array__length(s.unnamed4384___U1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4384___U1, s.unnamed4385___U2);
    s.f___470037 = (r0);
    s.tmp_2 = lambda_1_mk(s);
    s.tmp_2.argL = s.f___470037;
    setupLambda(s.tmp_2, s.tmp_2.argL);
    s.callLocIdx = 101; s.pc = 5; return s.tmp_2;
  case 5:
    r0 = s.retval;
    r0 = (s.unnamed4385___U2 + 1);
    s.unnamed4385___U2 = (r0);
    { step = 1; continue; }
  case 2:
    s.unnamed4384___U1 = (undefined);
  case 3:
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_newDevice__P470034.info = {"start":20542,"length":126,"line":646,"column":4,"endLine":650,"endColumn":5,"fileName":"routing.ts","functionName":"newDevice","argumentNames":[]}

function jacdac_newDevice__P470034_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_newDevice__P470034, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  f___470037: undefined,
  unnamed4384___U1: undefined,
  unnamed4385___U2: undefined,
} }





function jacdac_Device__destroy__P468173(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.c___469862 = undefined;
    s.unnamed4378___U1 = undefined;
    s.unnamed4379___U2 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C468154_VT)) failedCast(r0);
    s.tmp_0 = jacdac_log__P468716_mk(s);
    s.tmp_3 = jacdac_Device_shortId__P468161_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.callLocIdx = 79; s.pc = 4; return s.tmp_3;
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
    s.callLocIdx = 80; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.c___469862 = (undefined);
    r0 = s.arg0.fields["clients"];
    s.unnamed4378___U1 = (r0);
    s.unnamed4379___U2 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed4379___U2;
    r0 = pxsim_Array__length(s.unnamed4378___U1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4378___U1, s.unnamed4379___U2);
    s.c___469862 = (r0);
    s.tmp_2 = jacdac_Client__detach__P468144_mk(s);
    s.tmp_2.arg0 = s.c___469862;
    s.callLocIdx = 81; s.pc = 6; return s.tmp_2;
  case 6:
    r0 = s.retval;
    r0 = (s.unnamed4379___U2 + 1);
    s.unnamed4379___U2 = (r0);
    { step = 1; continue; }
  case 2:
    s.unnamed4378___U1 = (undefined);
    r0 = (s.arg0).fields["clients"] = (null);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device__destroy__P468173.info = {"start":17806,"length":165,"line":558,"column":8,"endLine":563,"endColumn":9,"fileName":"routing.ts","functionName":"_destroy","argumentNames":["this"]}

function jacdac_Device__destroy__P468173_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device__destroy__P468173, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  c___469862: undefined,
  unnamed4378___U1: undefined,
  unnamed4379___U2: undefined,
  arg0: undefined,
} }





function jacdac_Client__detach__P468144(s) {
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
    if (!checkSubtype(r0, jacdac_Client__C468128_VT)) failedCast(r0);
    s.tmp_0 = jacdac_log__P468716_mk(s);
    r0 = s.arg0.fields["name"];
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
    s.callLocIdx = 58; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    r0 = (s.arg0).fields["serviceNumber"] = (null);
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
    r0 = pxsim_Array__push(globals._unattachedClients___468108, s.arg0);
    s.tmp_0 = jacdac_clearAttachCache__P469347_mk(s);
    s.callLocIdx = 59; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
  case 3:
  case 4:
    s.tmp_0 = jacdac_Client_onDetach__P469132_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 60; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client__detach__P468144.info = {"start":10691,"length":351,"line":335,"column":8,"endLine":345,"endColumn":9,"fileName":"routing.ts","functionName":"_detach","argumentNames":["this"]}

function jacdac_Client__detach__P468144_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client__detach__P468144, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
} }





function jacdac_Client_onDetach__P469132(s) {
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
    if (!checkSubtype(r0, jacdac_Client__C468128_VT)) failedCast(r0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_onDetach__P469132.info = {"start":11085,"length":24,"line":348,"column":8,"endLine":348,"endColumn":32,"fileName":"routing.ts","functionName":"onDetach","argumentNames":["this"]}

function jacdac_Client_onDetach__P469132_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_onDetach__P469132, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_clearAttachCache__P469347(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.d___470016 = undefined;
    s.unnamed4382___U1 = undefined;
    s.unnamed4383___U2 = undefined;
    s.d___470016 = (undefined);
    s.unnamed4382___U1 = (globals.devices____468708);
    s.unnamed4383___U2 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed4383___U2;
    r0 = pxsim_Array__length(s.unnamed4382___U1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 6; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4382___U1, s.unnamed4383___U2);
    s.d___470016 = (r0);
    r0 = s.d___470016.fields["services"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_2;
    { step = 3; continue; }
  case 2:
    r0 = s.d___470016.fields["services"];
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_5);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 & 3);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == 0);
  case 3:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_6);
    if (!r0) { step = 4; continue; }
    s.tmp_7 = r0 = s.d___470016;
    s.tmp_9 = helpers_bufferConcat__P466527_mk(s);
    r0 = s.d___470016.fields["services"];
    s.tmp_9.arg0 = r0;
    r0 = pxsim.control.createBuffer(1);
    s.tmp_9.arg1 = r0;
    s.callLocIdx = 100; s.pc = 7; return s.tmp_9;
  case 7:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = (s.tmp_7).fields["services"] = (s.tmp_8);
  case 4:
  case 5:
    r0 = (s.unnamed4383___U2 + 1);
    s.unnamed4383___U2 = (r0);
    { step = 1; continue; }
  case 6:
    s.unnamed4382___U1 = (undefined);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_clearAttachCache__P469347.info = {"start":20235,"length":301,"line":638,"column":4,"endLine":644,"endColumn":5,"fileName":"routing.ts","functionName":"clearAttachCache","argumentNames":[]}

function jacdac_clearAttachCache__P469347_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_clearAttachCache__P469347, depth: s.depth + 1,
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
  d___470016: undefined,
  unnamed4382___U1: undefined,
  unnamed4383___U2: undefined,
} }





function jacdac_Device_shortId__P468161(s) {
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
    if (!checkSubtype(r0, jacdac_Device__C468154_VT)) failedCast(r0);
    r0 = s.arg0.fields["_shortId"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_3 = r0 = s.arg0;
    s.tmp_5 = jacdac_shortDeviceId__P468153_mk(s);
    r0 = s.arg0.fields["deviceId"];
    s.tmp_5.arg0 = r0;
    s.callLocIdx = 69; s.pc = 3; return s.tmp_5;
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
jacdac_Device_shortId__P468161.info = {"start":15033,"length":203,"line":471,"column":8,"endLine":476,"endColumn":9,"fileName":"routing.ts","functionName":"shortId","argumentNames":["this"]}
jacdac_Device_shortId__P468161.isGetter = true;

function jacdac_Device_shortId__P468161_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_shortId__P468161, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
} }





function jacdac_shortDeviceId__P468153(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.h___469553 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_1 = Buffer_fromHex__P466544_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.callLocIdx = 67; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.hash(s.tmp_0, 30);
    s.h___469553 = (r0);
    r0 = (s.h___469553 % 26);
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
    r0 = pxsim.Math_.idiv(s.h___469553, 26);
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
    r0 = pxsim.Math_.idiv(s.h___469553, 676);
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
    r0 = pxsim.Math_.idiv(s.h___469553, 6760);
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
jacdac_shortDeviceId__P468153.info = {"start":13923,"length":358,"line":434,"column":4,"endLine":440,"endColumn":5,"fileName":"routing.ts","functionName":"shortDeviceId","argumentNames":["devid"]}

function jacdac_shortDeviceId__P468153_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_shortDeviceId__P468153, depth: s.depth + 1,
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
  h___469553: undefined,
  arg0: undefined,
} }





function helpers_arraySplice__P466444(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.i___475052 = undefined;
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
    s.i___475052 = (0);
  case 3:
    r0 = (s.i___475052 < s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array_.removeAt(s.arg0, s.arg1);
    r0 = (s.i___475052 + 1);
    s.i___475052 = (r0);
    { step = 3; continue; }
  case 4:
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
helpers_arraySplice__P466444.info = {"start":3642,"length":213,"line":137,"column":4,"endLine":144,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arraySplice","argumentNames":["arr","start","len"]}

function helpers_arraySplice__P466444_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arraySplice__P466444, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  i___475052: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_Client_announceCallback__P468152(s) {
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
    if (!checkSubtype(r0, jacdac_Client__C468128_VT)) failedCast(r0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_announceCallback__P468152.info = {"start":13789,"length":22,"line":430,"column":8,"endLine":430,"endColumn":30,"fileName":"routing.ts","functionName":"announceCallback","argumentNames":["this"]}

function jacdac_Client_announceCallback__P468152_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_announceCallback__P468152, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function helpers_arrayForEach__P466453(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___475066 = undefined;
    s.i___475069 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__length(s.arg0);
    s.len___475066 = (r0);
    s.i___475069 = (0);
  case 1:
    r0 = (s.i___475069 < s.len___475066);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = lambda_3_mk(s);
    s.tmp_1.argL = s.arg1;
    r0 = pxsim_Array__getAt(s.arg0, s.i___475069);
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = s.i___475069;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 6; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    r0 = (s.i___475069 + 1);
    s.i___475069 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayForEach__P466453.info = {"start":7439,"length":250,"line":254,"column":4,"endLine":259,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arrayForEach","argumentNames":["arr","callbackfn"]}

function helpers_arrayForEach__P466453_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayForEach__P466453, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  len___475066: undefined,
  i___475069: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_selfDevice__P468176(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals.myDevice___468707);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_Device__C468154_VT);
    s.tmp_2 = r0;
    s.tmp_3 = jacdac_Device_constructor__P468158_mk(s);
    s.tmp_3.arg0 = s.tmp_2;
    r0 = pxsim.control.deviceLongSerialNumber();
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_4);
    s.tmp_3.arg1 = r0;
    s.callLocIdx = 92; s.pc = 3; return s.tmp_3;
  case 3:
    r0 = s.retval;
    globals.myDevice___468707 = (s.tmp_2);
    s.tmp_0 = r0 = globals.myDevice___468707;
    r0 = pxsim.control.createBuffer(4);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["services"] = (s.tmp_1);
  case 1:
  case 2:
    r0 = globals.myDevice___468707;
    return leave(s, r0)
  default: oops()
} } }
jacdac_selfDevice__P468176.info = {"start":19138,"length":220,"line":603,"column":4,"endLine":609,"endColumn":5,"fileName":"routing.ts","functionName":"selfDevice","argumentNames":[]}

function jacdac_selfDevice__P468176_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_selfDevice__P468176, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
} }





function jacdac_Device_constructor__P468158(s) {
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
    if (!checkSubtype(r0, jacdac_Device__C468154_VT)) failedCast(r0);
    r0 = (s.arg0).fields["deviceId"] = (s.arg1);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["clients"] = (s.tmp_1);
    r0 = pxsim_Array__push(globals.devices____468708, s.arg0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device_constructor__P468158.info = {"start":14614,"length":80,"line":456,"column":8,"endLine":458,"endColumn":9,"fileName":"routing.ts","functionName":"inline","argumentNames":["this","deviceId"]}

function jacdac_Device_constructor__P468158_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_constructor__P468158, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_packed__P468211(s) {
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
    s.tmp_0 = jacdac_JDPacket_from__P468209_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_1 = Buffer_pack__P466550_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.tmp_1.arg1 = s.arg2;
    s.callLocIdx = 178; s.pc = 2; return s.tmp_1;
  case 2:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 179; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_packed__P468211.info = {"start":2011,"length":153,"line":61,"column":8,"endLine":63,"endColumn":9,"fileName":"packet.ts","functionName":"packed","argumentNames":["service_command","fmt","nums"]}

function jacdac_JDPacket_packed__P468211_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_packed__P468211, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function Buffer_pack__P466550(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___474998 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_1 = Buffer_packedSize__P466549_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.callLocIdx = 31; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.createBuffer(s.tmp_0);
    s.buf___474998 = (r0);
    s.tmp_0 = Buffer___packUnpackCore__P466551_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = s.buf___474998;
    s.tmp_0.arg3 = true;
    s.tmp_0.arg4 = 0;
    s.callLocIdx = 32; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = s.buf___474998;
    return leave(s, r0)
  default: oops()
} } }
Buffer_pack__P466550.info = {"start":9606,"length":181,"line":344,"column":4,"endLine":348,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"pack","argumentNames":["format","nums"]}

function Buffer_pack__P466550_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_pack__P466550, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  buf___474998: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Buffer___packUnpackCore__P466551(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.isBig___474627 = undefined;
    s.idx___474628 = undefined;
    s.i___474629 = undefined;
    s.i0___474640 = undefined;
    s.reps___474648 = undefined;
    s.fmt___474670 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.arg4 = (s.lambdaArgs[4]);
      s.lambdaArgs = null;
    }
    s.isBig___474627 = (false);
    s.idx___474628 = (0);
    s.i___474629 = (0);
  case 1:
    s.tmp_1 = r0 = s.i___474629;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 23; continue; }
    r0 = pxsim_String_.charAt(s.arg0, s.i___474629);
    s.tmp_3 = r0;
    r0 = pxsim_pxtcore.switch_eq(" ", s.tmp_3);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq("<", s.tmp_3);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq("=", s.tmp_3);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(">", s.tmp_3);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq("!", s.tmp_3);
    if (r0) { step = 6; continue; }
    r0 = s.tmp_3;
    { step = 7; continue; }
  case 2:
  case 3:
  case 4:
    s.isBig___474627 = (false);
    { step = 22; continue; }
  case 5:
  case 6:
    s.isBig___474627 = (true);
    { step = 22; continue; }
  case 7:
    s.i0___474640 = (s.i___474629);
  case 8:
    s.tmp_1 = Buffer_isDigit__P468498_mk(s);
    r0 = pxsim_String_.charAt(s.arg0, s.i___474629);
    s.tmp_1.arg0 = r0;
    s.callLocIdx = 33; s.pc = 24; return s.tmp_1;
  case 24:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    r0 = (s.i___474629 + 1);
    s.i___474629 = (r0);
    { step = 8; continue; }
  case 9:
    s.reps___474648 = (1);
    r0 = (s.i0___474640 != s.i___474629);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 10; continue; }
    s.tmp_1 = parseInt__P466441_mk(s);
    s.tmp_2 = helpers_stringSlice__P466463_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.i0___474640;
    s.tmp_2.arg2 = s.i___474629;
    s.callLocIdx = 34; s.pc = 26; return s.tmp_2;
  case 26:
    r0 = s.retval;
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = undefined;
    s.callLocIdx = 35; s.pc = 25; return s.tmp_1;
  case 25:
    r0 = s.retval;
    s.reps___474648 = (r0);
  case 10:
  case 11:
    r0 = pxsim_String_.charAt(s.arg0, s.i___474629);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == "x");
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 12; continue; }
    r0 = (s.arg4 + s.reps___474648);
    s.arg4 = (r0);
    { step = 21; continue; }
  case 12:
  case 13:
    s.tmp_0 = r0 = s.reps___474648;
    r0 = (s.tmp_0 - 1);
    s.reps___474648 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 20; continue; }
    s.tmp_1 = Buffer_getFormat__P468497_mk(s);
    r0 = pxsim_String_.charAt(s.arg0, s.i___474629);
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = s.isBig___474627;
    s.callLocIdx = 36; s.pc = 27; return s.tmp_1;
  case 27:
    r0 = s.retval;
    s.fmt___474670 = (r0);
    r0 = (s.fmt___474670 === null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    s.tmp_1 = control_fail__P466671_mk(s);
    r0 = pxsim_String_.charAt(s.arg0, s.i___474629);
    s.tmp_3 = r0;
    if ((s.tmp_3) && (s.tmp_3).vtable) {
    setupResume(s, 29);
    pxsim_String__stringConv(s.tmp_3);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_3) + ""; }
  case 29:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_String__concat("Unsupported format character: ", s.tmp_2);
    s.tmp_1.arg0 = r0;
    s.callLocIdx = 37; s.pc = 28; return s.tmp_1;
  case 28:
    r0 = s.retval;
    { step = 19; continue; }
  case 14:
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    if (!r0) { step = 17; continue; }
    r0 = pxsim_numops_toBoolDecr(s.arg3);
    if (!r0) { step = 15; continue; }
    s.tmp_0 = r0 = s.idx___474628;
    r0 = (s.tmp_0 + 1);
    s.idx___474628 = (r0);
    s.tmp_1 = r0 = s.arg2;
    s.tmp_2 = r0 = s.fmt___474670;
    s.tmp_3 = r0 = s.arg4;
    r0 = pxsim_Array__getAt(s.arg1, s.tmp_0);
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_1, s.tmp_2, s.tmp_3, s.tmp_4);
    { step = 16; continue; }
  case 15:
    s.tmp_0 = r0 = s.arg1;
    r0 = pxsim.BufferMethods.getNumber(s.arg2, s.fmt___474670, s.arg4);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
  case 16:
  case 17:
  case 18:
    s.tmp_0 = r0 = s.arg4;
    s.tmp_2 = Buffer_sizeOfNumberFormat__P466552_mk(s);
    s.tmp_2.arg0 = s.fmt___474670;
    s.callLocIdx = 38; s.pc = 30; return s.tmp_2;
  case 30:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0 + s.tmp_1);
    s.arg4 = (r0);
  case 19:
    { step = 13; continue; }
  case 20:
  case 21:
  case 22:
    r0 = (s.i___474629 + 1);
    s.i___474629 = (r0);
    { step = 1; continue; }
  case 23:
    r0 = s.arg4;
    return leave(s, r0)
  default: oops()
} } }
Buffer___packUnpackCore__P466551.info = {"start":10851,"length":1618,"line":380,"column":4,"endLine":422,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"__packUnpackCore","argumentNames":["format","nums","buf","isPack","off"]}

function Buffer___packUnpackCore__P466551_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer___packUnpackCore__P466551, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  isBig___474627: undefined,
  idx___474628: undefined,
  i___474629: undefined,
  i0___474640: undefined,
  reps___474648: undefined,
  fmt___474670: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
  arg4: undefined,
} }





function Buffer_isDigit__P468498(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.code___474750 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_String_.charCodeAt(s.arg0, 0);
    s.code___474750 = (r0);
    r0 = (48 <= s.code___474750);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = (s.code___474750 <= 57);
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = s.tmp_1;
    return leave(s, r0)
  default: oops()
} } }
Buffer_isDigit__P468498.info = {"start":10727,"length":118,"line":375,"column":4,"endLine":378,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"isDigit","argumentNames":["ch"]}

function Buffer_isDigit__P468498_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_isDigit__P468498, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  code___474750: undefined,
  arg0: undefined,
} }





function Buffer_getFormat__P468497(s) {
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
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq("B", s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq("b", s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq("H", s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq("h", s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq("I", s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim_pxtcore.switch_eq("L", s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = pxsim_pxtcore.switch_eq("i", s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = pxsim_pxtcore.switch_eq("l", s.tmp_0);
    if (r0) { step = 14; continue; }
    r0 = pxsim_pxtcore.switch_eq("f", s.tmp_0);
    if (r0) { step = 17; continue; }
    r0 = pxsim_pxtcore.switch_eq("d", s.tmp_0);
    if (r0) { step = 20; continue; }
    r0 = s.tmp_0;
    { step = 23; continue; }
  case 1:
    r0 = 2;
    { step = 24; continue; }
  case 2:
    r0 = 1;
    { step = 24; continue; }
  case 3:
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    if (!r0) { step = 4; continue; }
    r0 = 9;
    { step = 5; continue; }
  case 4:
    r0 = 4;
  case 5:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = s.tmp_1;
    { step = 24; continue; }
  case 6:
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    if (!r0) { step = 7; continue; }
    r0 = 8;
    { step = 8; continue; }
  case 7:
    r0 = 3;
  case 8:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = s.tmp_2;
    { step = 24; continue; }
  case 9:
  case 10:
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    if (!r0) { step = 11; continue; }
    r0 = 12;
    { step = 12; continue; }
  case 11:
    r0 = 11;
  case 12:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = s.tmp_3;
    { step = 24; continue; }
  case 13:
  case 14:
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    if (!r0) { step = 15; continue; }
    r0 = 10;
    { step = 16; continue; }
  case 15:
    r0 = 5;
  case 16:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = s.tmp_4;
    { step = 24; continue; }
  case 17:
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    if (!r0) { step = 18; continue; }
    r0 = 15;
    { step = 19; continue; }
  case 18:
    r0 = 13;
  case 19:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = s.tmp_5;
    { step = 24; continue; }
  case 20:
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    if (!r0) { step = 21; continue; }
    r0 = 16;
    { step = 22; continue; }
  case 21:
    r0 = 14;
  case 22:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    r0 = s.tmp_6;
    { step = 24; continue; }
  case 23:
    r0 = null;
    { step = 24; continue; }
    r0 = undefined;
  case 24:
    return leave(s, r0)
  default: oops()
} } }
Buffer_getFormat__P468497.info = {"start":9793,"length":928,"line":350,"column":4,"endLine":373,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"getFormat","argumentNames":["pychar","isBig"]}

function Buffer_getFormat__P468497_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_getFormat__P468497, depth: s.depth + 1,
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





function control_fail__P466671(s) {
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
    s.tmp_0 = console_log__P466717_mk(s);
    s.tmp_0.arg0 = "Fatal failure: ";
    s.callLocIdx = 39; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = console_log__P466717_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 40; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = pxsim.control.dmesg(s.arg0);
    r0 = pxsim_pxtrt.panic(108);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_fail__P466671.info = {"start":2656,"length":155,"line":89,"column":4,"endLine":94,"endColumn":5,"fileName":"pxt_modules/base/control.ts","functionName":"fail","argumentNames":["message"]}

function control_fail__P466671_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_fail__P466671, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function Buffer_packedSize__P466549(s) {
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
    s.tmp_0 = Buffer___packUnpackCore__P466551_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = null;
    s.tmp_0.arg2 = null;
    s.tmp_0.arg3 = true;
    s.tmp_0.arg4 = 0;
    s.callLocIdx = 30; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
Buffer_packedSize__P466549.info = {"start":9492,"length":108,"line":340,"column":4,"endLine":342,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"packedSize","argumentNames":["format"]}

function Buffer_packedSize__P466549_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_packedSize__P466549, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function helpers_arrayMap__P466450(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___475083 = undefined;
    s.len___475085 = undefined;
    s.i___475088 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___475083 = (r0);
    r0 = pxsim_Array__length(s.arg0);
    s.len___475085 = (r0);
    s.i___475088 = (0);
  case 1:
    r0 = (s.i___475088 < s.len___475085);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = r0 = s.res___475083;
    s.tmp_3 = lambda_3_mk(s);
    s.tmp_3.argL = s.arg1;
    r0 = pxsim_Array__getAt(s.arg0, s.i___475088);
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = s.i___475088;
    setupLambda(s.tmp_3, s.tmp_3.argL);
    s.callLocIdx = 4; s.pc = 3; return s.tmp_3;
  case 3:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_2);
    r0 = (s.i___475088 + 1);
    s.i___475088 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = s.res___475083;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayMap__P466450.info = {"start":6528,"length":299,"line":229,"column":4,"endLine":236,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arrayMap","argumentNames":["arr","callbackfn"]}

function helpers_arrayMap__P466450_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayMap__P466450, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  res___475083: undefined,
  len___475085: undefined,
  i___475088: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_routePacket__P468180(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.devId___470180 = undefined;
    s.multiCommandClass___470183 = undefined;
    s.crc___470196 = undefined;
    s.ack___470199 = undefined;
    s.f___470212 = undefined;
    s.unnamed4390___U5 = undefined;
    s.unnamed4391___U6 = undefined;
    s.h___470222 = undefined;
    s.h___470256 = undefined;
    s.dev___470270 = undefined;
    s.matches___470314 = undefined;
    s.service_class___470352 = undefined;
    s.client___470366 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_1, 4, 8);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_0);
    s.devId___470180 = (r0);
    s.tmp_0 = jacdac_JDPacket_multicommand_class__P468217_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 110; s.pc = 52; return s.tmp_0;
  case 52:
    r0 = s.retval;
    s.multiCommandClass___470183 = (r0);
    s.tmp_1 = jacdac_JDPacket_requires_ack__P468219_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.callLocIdx = 111; s.pc = 53; return s.tmp_1;
  case 53:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.tmp_2 = jacdac_JDPacket_requires_ack__P468220_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = false;
    s.callLocIdx = 112; s.pc = 54; return s.tmp_2;
  case 54:
    r0 = s.retval;
    r0 = s.arg0.fields["_header"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_3, 4, 8);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_2);
    s.tmp_1 = r0;
    s.tmp_5 = jacdac_selfDevice__P468176_mk(s);
    s.callLocIdx = 114; s.pc = 55; return s.tmp_5;
  case 55:
    r0 = s.retval;
    r0 = r0.fields["deviceId"];
    s.tmp_4 = r0;
    r0 = (s.tmp_1 == s.tmp_4);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0.fields["_header"];
    s.tmp_6 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_6, 4, 0);
    s.crc___470196 = (r0);
    s.tmp_0 = jacdac_JDPacket_onlyHeader__P468210_mk(s);
    s.tmp_0.arg0 = s.crc___470196;
    s.callLocIdx = 116; s.pc = 56; return s.tmp_0;
  case 56:
    r0 = s.retval;
    s.ack___470199 = (r0);
    s.tmp_0 = jacdac_JDPacket_service_number__P468222_mk(s);
    s.tmp_0.arg0 = s.ack___470199;
    s.tmp_0.arg1 = 63;
    s.callLocIdx = 117; s.pc = 57; return s.tmp_0;
  case 57:
    r0 = s.retval;
    s.tmp_0 = jacdac_JDPacket__sendReport__P468243_mk(s);
    s.tmp_0.arg0 = s.ack___470199;
    s.tmp_1 = jacdac_selfDevice__P468176_mk(s);
    s.callLocIdx = 118; s.pc = 59; return s.tmp_1;
  case 59:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 119; s.pc = 58; return s.tmp_0;
  case 58:
    r0 = s.retval;
  case 1:
  case 2:
  case 3:
  case 4:
    r0 = pxsim_numops_toBoolDecr(globals.pktCallbacks___468713);
    if (!r0) { step = 7; continue; }
    s.f___470212 = (undefined);
    s.unnamed4390___U5 = (globals.pktCallbacks___468713);
    s.unnamed4391___U6 = (0);
  case 5:
    s.tmp_0 = r0 = s.unnamed4391___U6;
    r0 = pxsim_Array__length(s.unnamed4390___U5);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 6; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4390___U5, s.unnamed4391___U6);
    s.f___470212 = (r0);
    s.tmp_2 = lambda_2_mk(s);
    s.tmp_2.argL = s.f___470212;
    s.tmp_2.arg0 = s.arg0;
    setupLambda(s.tmp_2, s.tmp_2.argL);
    s.callLocIdx = 120; s.pc = 60; return s.tmp_2;
  case 60:
    r0 = s.retval;
    r0 = (s.unnamed4391___U6 + 1);
    s.unnamed4391___U6 = (r0);
    { step = 5; continue; }
  case 6:
    s.unnamed4390___U5 = (undefined);
  case 7:
  case 8:
    r0 = (s.multiCommandClass___470183 != null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 15; continue; }
    s.tmp_4 = jacdac_JDPacket_is_command__P468239_mk(s);
    s.tmp_4.arg0 = s.arg0;
    s.callLocIdx = 121; s.pc = 61; return s.tmp_4;
  case 61:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 9; continue; }
    { step = 51; continue; }
  case 9:
  case 10:
    r0 = pxsim_pxtcore_mkAction(1, inline__P470224);
    s.tmp_5 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_5, 0, s.multiCommandClass___470183);
    s.tmp_6 = helpers_arrayFind__P466455_mk(s);
    s.tmp_6.arg0 = globals.hostServices___468706;
    s.tmp_6.arg1 = s.tmp_5;
    s.callLocIdx = 122; s.pc = 62; return s.tmp_6;
  case 62:
    r0 = s.retval;
    s.h___470222 = (r0);
    s.tmp_0 = r0 = s.h___470222;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 11; continue; }
    r0 = s.tmp_0;
    { step = 12; continue; }
  case 11:
    r0 = s.h___470222.fields["running"];
  case 12:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 13; continue; }
    s.tmp_2 = jacdac_JDPacket_device_identifier__P468215_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_3 = jacdac_selfDevice__P468176_mk(s);
    s.callLocIdx = 123; s.pc = 64; return s.tmp_3;
  case 64:
    r0 = s.retval;
    r0 = r0.fields["deviceId"];
    s.tmp_2.arg1 = r0;
    s.callLocIdx = 124; s.pc = 63; return s.tmp_2;
  case 63:
    r0 = s.retval;
    s.tmp_0 = jacdac_JDPacket_service_number__P468222_mk(s);
    s.tmp_0.arg0 = s.arg0;
    r0 = s.h___470222.fields["serviceNumber"];
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 125; s.pc = 65; return s.tmp_0;
  case 65:
    r0 = s.retval;
    s.tmp_0 = jacdac_Host__C468110_v0_2_mk(s);
    s.tmp_0.arg0 = s.h___470222;
    s.tmp_0.arg1 = s.arg0;
    if (!checkSubtype(s.tmp_0.arg0, jacdac_Host__C468110_VT)) failedCast(s.tmp_0.arg0);
    s.tmp_0.fn = s.tmp_0.arg0.vtable.methods.handlePacketOuter;
    s.pc = 66; return s.tmp_0;
  case 66:
    r0 = s.retval;
  case 13:
  case 14:
    { step = 50; continue; }
  case 15:
    s.tmp_1 = r0 = s.devId___470180;
    s.tmp_3 = jacdac_selfDevice__P468176_mk(s);
    s.callLocIdx = 126; s.pc = 67; return s.tmp_3;
  case 67:
    r0 = s.retval;
    r0 = r0.fields["deviceId"];
    s.tmp_2 = r0;
    r0 = (s.tmp_1 == s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 22; continue; }
    s.tmp_7 = jacdac_JDPacket_is_command__P468239_mk(s);
    s.tmp_7.arg0 = s.arg0;
    s.callLocIdx = 127; s.pc = 68; return s.tmp_7;
  case 68:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_6);
    s.tmp_5 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 16; continue; }
    { step = 51; continue; }
  case 16:
  case 17:
    s.tmp_8 = r0 = globals.hostServices___468706;
    r0 = s.arg0.fields["_header"];
    s.tmp_11 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_11, 13);
    s.tmp_10 = r0;
    r0 = (s.tmp_10 & 63);
    s.tmp_9 = r0;
    r0 = pxsim_Array__getAt(s.tmp_8, s.tmp_9);
    s.h___470256 = (r0);
    s.tmp_0 = r0 = s.h___470256;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 18; continue; }
    r0 = s.tmp_0;
    { step = 19; continue; }
  case 18:
    r0 = s.h___470256.fields["running"];
  case 19:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 20; continue; }
    s.tmp_2 = jacdac_Host__C468110_v0_2_mk(s);
    s.tmp_2.arg0 = s.h___470256;
    s.tmp_2.arg1 = s.arg0;
    if (!checkSubtype(s.tmp_2.arg0, jacdac_Host__C468110_VT)) failedCast(s.tmp_2.arg0);
    s.tmp_2.fn = s.tmp_2.arg0.vtable.methods.handlePacketOuter;
    s.pc = 69; return s.tmp_2;
  case 69:
    r0 = s.retval;
  case 20:
  case 21:
    { step = 49; continue; }
  case 22:
    s.tmp_1 = jacdac_JDPacket_is_command__P468239_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.callLocIdx = 129; s.pc = 70; return s.tmp_1;
  case 70:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 23; continue; }
    { step = 51; continue; }
  case 23:
  case 24:
    r0 = pxsim_pxtcore_mkAction(1, inline__P470273);
    s.tmp_2 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_2, 0, s.devId___470180);
    s.tmp_3 = helpers_arrayFind__P466455_mk(s);
    s.tmp_3.arg0 = globals.devices____468708;
    s.tmp_3.arg1 = s.tmp_2;
    s.callLocIdx = 130; s.pc = 71; return s.tmp_3;
  case 71:
    r0 = s.retval;
    s.dev___470270 = (r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_3, 13);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 63);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 37; continue; }
    r0 = s.arg0.fields["_header"];
    s.tmp_6 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_6, 4, 14);
    s.tmp_5 = r0;
    r0 = (s.tmp_5 == 0);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 33; continue; }
    s.tmp_7 = r0 = s.dev___470270;
    r0 = pxsim_numops_toBool(s.tmp_7);
    if (r0) { step = 25; continue; }
    r0 = s.tmp_7;
    { step = 26; continue; }
  case 25:
    r0 = s.dev___470270.fields["services"];
    s.tmp_10 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_10, 0);
    s.tmp_9 = r0;
    r0 = (s.tmp_9 & 15);
    s.tmp_8 = r0;
    r0 = s.arg0.fields["_data"];
    s.tmp_13 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_13, 0);
    s.tmp_12 = r0;
    r0 = (s.tmp_12 & 15);
    s.tmp_11 = r0;
    r0 = (s.tmp_8 > s.tmp_11);
  case 26:
    // jmp value (already in r0)
    s.tmp_14 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_14);
    if (!r0) { step = 27; continue; }
    r0 = pxsim_Array_.removeElement(globals.devices____468708, s.dev___470270);
    s.tmp_0 = jacdac_Device__destroy__P468173_mk(s);
    s.tmp_0.arg0 = s.dev___470270;
    s.callLocIdx = 134; s.pc = 72; return s.tmp_0;
  case 72:
    r0 = s.retval;
    s.dev___470270 = (null);
  case 27:
  case 28:
    r0 = pxsim_numops_toBoolDecr(s.dev___470270);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 29; continue; }
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_Device__C468154_VT);
    s.tmp_2 = r0;
    s.tmp_3 = jacdac_Device_constructor__P468158_mk(s);
    s.tmp_3.arg0 = s.tmp_2;
    r0 = s.arg0.fields["_header"];
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_5, 4, 8);
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_4);
    s.tmp_3.arg1 = r0;
    s.callLocIdx = 136; s.pc = 73; return s.tmp_3;
  case 73:
    r0 = s.retval;
    s.dev___470270 = (s.tmp_2);
  case 29:
  case 30:
    s.tmp_0 = jacdac_serviceMatches__P470150_mk(s);
    s.tmp_0.arg0 = s.dev___470270;
    r0 = s.arg0.fields["_data"];
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 138; s.pc = 74; return s.tmp_0;
  case 74:
    r0 = s.retval;
    s.matches___470314 = (r0);
    s.tmp_0 = r0 = s.dev___470270;
    r0 = s.arg0.fields["_data"];
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["services"] = (s.tmp_1);
    r0 = pxsim_numops_toBoolDecr(s.matches___470314);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 31; continue; }
    s.tmp_2 = r0 = s.dev___470270;
    r0 = pxsim.control.millis();
    s.tmp_3 = r0;
    r0 = (s.tmp_2).fields["lastSeen"] = (s.tmp_3);
    s.tmp_0 = jacdac_reattach__P470040_mk(s);
    s.tmp_0.arg0 = s.dev___470270;
    s.callLocIdx = 140; s.pc = 75; return s.tmp_0;
  case 75:
    r0 = s.retval;
  case 31:
  case 32:
  case 33:
  case 34:
    r0 = pxsim_numops_toBoolDecr(s.dev___470270);
    if (!r0) { step = 35; continue; }
    s.tmp_0 = jacdac_Device_handleCtrlReport__P468169_mk(s);
    s.tmp_0.arg0 = s.dev___470270;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 141; s.pc = 76; return s.tmp_0;
  case 76:
    r0 = s.retval;
    s.tmp_0 = r0 = s.dev___470270;
    r0 = pxsim.control.millis();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["lastSeen"] = (s.tmp_1);
  case 35:
  case 36:
    { step = 51; continue; }
    { step = 40; continue; }
  case 37:
    r0 = s.arg0.fields["_header"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_3, 13);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 63);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 63);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 38; continue; }
    s.tmp_4 = jacdac__gotAck__P468248_mk(s);
    s.tmp_4.arg0 = s.arg0;
    s.callLocIdx = 143; s.pc = 77; return s.tmp_4;
  case 77:
    r0 = s.retval;
  case 38:
  case 39:
  case 40:
    r0 = pxsim_numops_toBoolDecr(s.dev___470270);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 41; continue; }
    { step = 51; continue; }
  case 41:
  case 42:
    s.tmp_2 = r0 = s.dev___470270;
    r0 = pxsim.control.millis();
    s.tmp_3 = r0;
    r0 = (s.tmp_2).fields["lastSeen"] = (s.tmp_3);
    r0 = s.dev___470270.fields["services"];
    s.tmp_0 = r0;
    r0 = s.arg0.fields["_header"];
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_4, 13);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 & 63);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 << 2);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_0, 11, s.tmp_1);
    s.service_class___470352 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.service_class___470352);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 43; continue; }
    r0 = s.tmp_0;
    { step = 44; continue; }
  case 43:
    r0 = (s.service_class___470352 == 4294967295);
  case 44:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 45; continue; }
    { step = 51; continue; }
  case 45:
  case 46:
    r0 = pxsim_pxtcore_mkAction(2, inline__P470368);
    s.tmp_3 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_3, 0, s.service_class___470352);
    r0 = pxsim_pxtrt_stclo(s.tmp_3, 1, s.arg0);
    s.tmp_4 = helpers_arrayFind__P466455_mk(s);
    r0 = s.dev___470270.fields["clients"];
    s.tmp_4.arg0 = r0;
    s.tmp_4.arg1 = s.tmp_3;
    s.callLocIdx = 146; s.pc = 78; return s.tmp_4;
  case 78:
    r0 = s.retval;
    s.client___470366 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.client___470366);
    if (!r0) { step = 47; continue; }
    r0 = (s.client___470366).fields["currentDevice"] = (s.dev___470270);
    s.tmp_0 = jacdac_Client_handlePacketOuter__P468141_mk(s);
    s.tmp_0.arg0 = s.client___470366;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 147; s.pc = 79; return s.tmp_0;
  case 79:
    r0 = s.retval;
  case 47:
  case 48:
  case 49:
  case 50:
  case 51:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_routePacket__P468180.info = {"start":22289,"length":3683,"line":699,"column":4,"endLine":792,"endColumn":5,"fileName":"routing.ts","functionName":"routePacket","argumentNames":["pkt"]}

function jacdac_routePacket__P468180_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_routePacket__P468180, depth: s.depth + 1,
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
  devId___470180: undefined,
  multiCommandClass___470183: undefined,
  crc___470196: undefined,
  ack___470199: undefined,
  f___470212: undefined,
  unnamed4390___U5: undefined,
  unnamed4391___U6: undefined,
  h___470222: undefined,
  h___470256: undefined,
  dev___470270: undefined,
  matches___470314: undefined,
  service_class___470352: undefined,
  client___470366: undefined,
  arg0: undefined,
} }





function inline__P470224(s) {
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
    r0 = s.arg0.fields["serviceClass"];
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == s.caps[0]);
    return leave(s, r0)
  default: oops()
} } }
inline__P470224.info = {"start":23201,"length":40,"line":723,"column":40,"endLine":723,"endColumn":80,"fileName":"routing.ts","functionName":"inline","argumentNames":["s"]}

function inline__P470224_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P470224, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function inline__P470273(s) {
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
inline__P470273.info = {"start":24022,"length":24,"line":742,"column":36,"endLine":742,"endColumn":60,"fileName":"routing.ts","functionName":"inline","argumentNames":["d"]}

function inline__P470273_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P470273, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function inline__P470368(s) {
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
    r0 = s.arg0.fields["serviceNumber"];
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
inline__P470368.info = {"start":25598,"length":146,"line":782,"column":44,"endLine":785,"endColumn":59,"fileName":"routing.ts","functionName":"inline","argumentNames":["c"]}

function inline__P470368_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P470368, depth: s.depth + 1,
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





function jacdac_Client_handlePacketOuter__P468141(s) {
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
    if (!checkSubtype(r0, jacdac_Client__C468128_VT)) failedCast(r0);
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
    r0 = s.arg1.fields["_header"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_2, 4, 14);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = s.arg1.fields["_data"];
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_5);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 >= 8);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    r0 = s.arg1.fields["_data"];
    s.tmp_6 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_6, 5, 4);
    { step = 4; continue; }
  case 3:
    r0 = undefined;
  case 4:
    // jmp value (already in r0)
    s.tmp_7 = r0;
    s.tmp_8 = jacdac_Client_raiseEvent__P469133_mk(s);
    s.tmp_8.arg0 = s.arg0;
    s.tmp_9 = jacdac_JDPacket_intData__P468231_mk(s);
    s.tmp_9.arg0 = s.arg1;
    s.callLocIdx = 49; s.pc = 8; return s.tmp_9;
  case 8:
    r0 = s.retval;
    s.tmp_8.arg1 = r0;
    s.tmp_8.arg2 = s.tmp_7;
    s.callLocIdx = 52; s.pc = 7; return s.tmp_8;
  case 7:
    r0 = s.retval;
  case 5:
  case 6:
    s.tmp_0 = jacdac_Client__C468128_v0_2_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    if (!checkSubtype(s.tmp_0.arg0, jacdac_Client__C468128_VT)) failedCast(s.tmp_0.arg0);
    s.tmp_0.fn = s.tmp_0.arg0.vtable.methods.handlePacket;
    s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_handlePacketOuter__P468141.info = {"start":9595,"length":366,"line":307,"column":8,"endLine":315,"endColumn":9,"fileName":"routing.ts","functionName":"handlePacketOuter","argumentNames":["this","pkt"]}

function jacdac_Client_handlePacketOuter__P468141_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_handlePacketOuter__P468141, depth: s.depth + 1,
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
} }





function jacdac_Client_handlePacket__P468142(s) {
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
    if (!checkSubtype(r0, jacdac_Client__C468128_VT)) failedCast(r0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_handlePacket__P468142.info = {"start":9971,"length":31,"line":317,"column":8,"endLine":317,"endColumn":39,"fileName":"routing.ts","functionName":"handlePacket","argumentNames":["this","pkt"]}

function jacdac_Client_handlePacket__P468142_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_handlePacket__P468142, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_getNumber__P468237(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = s.arg0.fields["_data"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_0, s.arg1, s.arg2);
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_getNumber__P468237.info = {"start":6003,"length":109,"line":191,"column":8,"endLine":193,"endColumn":9,"fileName":"packet.ts","functionName":"getNumber","argumentNames":["this","fmt","offset"]}

function jacdac_JDPacket_getNumber__P468237_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_getNumber__P468237, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_JDPacket_intData__P468231(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    s.tmp_0 = jacdac_intOfBuffer__P468249_mk(s);
    r0 = s.arg0.fields["_data"];
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 189; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_intData__P468231.info = {"start":4945,"length":68,"line":152,"column":8,"endLine":154,"endColumn":9,"fileName":"packet.ts","functionName":"intData","argumentNames":["this"]}
jacdac_JDPacket_intData__P468231.isGetter = true;

function jacdac_JDPacket_intData__P468231_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_intData__P468231, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_intOfBuffer__P468249(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.fmt___471205 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.switch_eq(0, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(1, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(2, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(3, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = s.tmp_0;
    { step = 5; continue; }
  case 1:
  case 2:
    s.fmt___471205 = (1);
    { step = 6; continue; }
  case 3:
  case 4:
    s.fmt___471205 = (3);
    { step = 6; continue; }
  case 5:
    s.fmt___471205 = (5);
  case 6:
    r0 = pxsim.BufferMethods.getNumber(s.arg0, s.fmt___471205, 0);
    return leave(s, r0)
  default: oops()
} } }
jacdac_intOfBuffer__P468249.info = {"start":10055,"length":461,"line":323,"column":4,"endLine":339,"endColumn":5,"fileName":"packet.ts","functionName":"intOfBuffer","argumentNames":["data"]}

function jacdac_intOfBuffer__P468249_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_intOfBuffer__P468249, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  fmt___471205: undefined,
  arg0: undefined,
} }





function jacdac_Client_raiseEvent__P469133(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.h___469432 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Client__C468128_VT)) failedCast(r0);
    r0 = s.arg0.fields["eventId"];
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(s.tmp_0, s.arg1);
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
    s.h___469432 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.h___469432);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = lambda_2_mk(s);
    s.tmp_0.argL = s.h___469432;
    s.tmp_0.arg0 = s.arg2;
    setupLambda(s.tmp_0, s.tmp_0.argL);
    s.callLocIdx = 64; s.pc = 6; return s.tmp_0;
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
jacdac_Client_raiseEvent__P469133.info = {"start":12197,"length":271,"line":383,"column":8,"endLine":390,"endColumn":9,"fileName":"routing.ts","functionName":"raiseEvent","argumentNames":["this","value","argument"]}

function jacdac_Client_raiseEvent__P469133_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_raiseEvent__P469133, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  h___469432: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac__gotAck__P468248(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.numNotify___471167 = undefined;
    s.srcId___471168 = undefined;
    s.crc___471171 = undefined;
    s.a___471175 = undefined;
    s.unnamed4398___U4 = undefined;
    s.unnamed4399___U5 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(globals.ackAwaiters___470580);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 11; continue; }
  case 1:
  case 2:
    s.numNotify___471167 = (0);
    r0 = s.arg0.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_1, 4, 8);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_0);
    s.srcId___471168 = (r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_0, 4, 14);
    s.crc___471171 = (r0);
    s.a___471175 = (undefined);
    s.unnamed4398___U4 = (globals.ackAwaiters___470580);
    s.unnamed4399___U5 = (0);
  case 3:
    s.tmp_0 = r0 = s.unnamed4399___U5;
    r0 = pxsim_Array__length(s.unnamed4398___U4);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 8; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4398___U4, s.unnamed4399___U5);
    s.a___471175 = (r0);
    r0 = s.a___471175.fields["crc"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == s.crc___471171);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (r0) { step = 4; continue; }
    r0 = s.tmp_2;
    { step = 5; continue; }
  case 4:
    r0 = s.a___471175.fields["srcId"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 == s.srcId___471168);
  case 5:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 6; continue; }
    r0 = (s.a___471175).fields["nextRetry"] = (0);
    r0 = s.a___471175.fields["eventId"];
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(1023, s.tmp_0);
    r0 = (s.numNotify___471167 + 1);
    s.numNotify___471167 = (r0);
  case 6:
  case 7:
    r0 = (s.unnamed4399___U5 + 1);
    s.unnamed4399___U5 = (r0);
    { step = 3; continue; }
  case 8:
    s.unnamed4398___U4 = (undefined);
    r0 = pxsim_numops_toBoolDecr(s.numNotify___471167);
    if (!r0) { step = 9; continue; }
    s.tmp_0 = helpers_arrayFilter__P466454_mk(s);
    s.tmp_0.arg0 = globals.ackAwaiters___470580;
    s.tmp_0.arg1 = inline__P471199;
    s.callLocIdx = 219; s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
    globals.ackAwaiters___470580 = (r0);
  case 9:
  case 10:
  case 11:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac__gotAck__P468248.info = {"start":9515,"length":534,"line":306,"column":4,"endLine":321,"endColumn":5,"fileName":"packet.ts","functionName":"_gotAck","argumentNames":["pkt"]}

function jacdac__gotAck__P468248_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac__gotAck__P468248, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  numNotify___471167: undefined,
  srcId___471168: undefined,
  crc___471171: undefined,
  a___471175: undefined,
  unnamed4398___U4: undefined,
  unnamed4399___U5: undefined,
  arg0: undefined,
} }





function inline__P471199(s) {
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
inline__P471199.info = {"start":10020,"length":22,"line":320,"column":45,"endLine":320,"endColumn":67,"fileName":"packet.ts","functionName":"inline","argumentNames":["a"]}

function inline__P471199_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P471199, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function helpers_arrayFilter__P466454(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___475388 = undefined;
    s.len___475390 = undefined;
    s.i___475393 = undefined;
    s.v___475398 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___475388 = (r0);
    r0 = pxsim_Array__length(s.arg0);
    s.len___475390 = (r0);
    s.i___475393 = (0);
  case 1:
    r0 = (s.i___475393 < s.len___475390);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.arg0, s.i___475393);
    s.v___475398 = (r0);
    s.tmp_1 = lambda_3_mk(s);
    s.tmp_1.argL = s.arg1;
    s.tmp_1.arg0 = s.v___475398;
    s.tmp_1.arg1 = s.i___475393;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 7; s.pc = 5; return s.tmp_1;
  case 5:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__push(s.res___475388, s.v___475398);
  case 2:
  case 3:
    r0 = (s.i___475393 + 1);
    s.i___475393 = (r0);
    { step = 1; continue; }
  case 4:
    r0 = s.res___475388;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayFilter__P466454.info = {"start":7695,"length":317,"line":261,"column":4,"endLine":269,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arrayFilter","argumentNames":["arr","callbackfn"]}

function helpers_arrayFilter__P466454_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayFilter__P466454, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  res___475388: undefined,
  len___475390: undefined,
  i___475393: undefined,
  v___475398: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Device_handleCtrlReport__P468169(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.reg___469794 = undefined;
    s.q___469799 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Device__C468154_VT)) failedCast(r0);
    r0 = s.arg1.fields["_header"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_3, 4, 14);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 61440);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 4096);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = s.arg1.fields["_header"];
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_5, 4, 14);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 & 4095);
    s.reg___469794 = (r0);
    s.tmp_0 = jacdac_Device_lookupQuery__P469228_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.reg___469794;
    s.callLocIdx = 76; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    s.q___469799 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.q___469799);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = r0 = s.q___469799;
    r0 = s.arg1.fields["_data"];
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["value"] = (s.tmp_1);
  case 1:
  case 2:
  case 3:
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device_handleCtrlReport__P468169.info = {"start":16833,"length":302,"line":530,"column":8,"endLine":537,"endColumn":9,"fileName":"routing.ts","functionName":"handleCtrlReport","argumentNames":["this","pkt"]}

function jacdac_Device_handleCtrlReport__P468169_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_handleCtrlReport__P468169, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  reg___469794: undefined,
  q___469799: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Device_lookupQuery__P469228(s) {
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
    if (!checkSubtype(r0, jacdac_Device__C468154_VT)) failedCast(r0);
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
    r0 = pxsim_pxtcore_mkAction(1, inline__P469678);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg1);
    s.tmp_1 = helpers_arrayFind__P466455_mk(s);
    r0 = s.arg0.fields["queries"];
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 73; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device_lookupQuery__P469228.info = {"start":15349,"length":149,"line":482,"column":8,"endLine":485,"endColumn":9,"fileName":"routing.ts","functionName":"lookupQuery","argumentNames":["this","reg"]}

function jacdac_Device_lookupQuery__P469228_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_lookupQuery__P469228, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function inline__P469678(s) {
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
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == s.caps[0]);
    return leave(s, r0)
  default: oops()
} } }
inline__P469678.info = {"start":15470,"length":17,"line":484,"column":37,"endLine":484,"endColumn":54,"fileName":"routing.ts","functionName":"inline","argumentNames":["q"]}

function inline__P469678_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P469678, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_reattach__P470040(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.newClients___470060 = undefined;
    s.occupied___470062 = undefined;
    s.c___470070 = undefined;
    s.unnamed4386___U3 = undefined;
    s.unnamed4387___U4 = undefined;
    s.newClass___470077 = undefined;
    s.i___470117 = undefined;
    s.service_class___470127 = undefined;
    s.cc___470135 = undefined;
    s.unnamed4388___U9 = undefined;
    s.unnamed4389___U10 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = jacdac_log__P468716_mk(s);
    s.tmp_7 = jacdac_Device_toString__P468162_mk(s);
    s.tmp_7.arg0 = s.arg0;
    s.callLocIdx = 102; s.pc = 27; return s.tmp_7;
  case 27:
    r0 = s.retval;
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 28);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 28:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat("reattaching services to ", s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, "; cl=");
    s.tmp_3 = r0;
    r0 = pxsim_Array__length(globals._unattachedClients___468108);
    s.tmp_9 = r0;
    if ((s.tmp_9) && (s.tmp_9).vtable) {
    setupResume(s, 29);
    pxsim_String__stringConv(s.tmp_9);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_9) + ""; }
  case 29:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_8);
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_2, "/");
    s.tmp_1 = r0;
    r0 = pxsim_Array__length(globals._allClients___468109);
    s.tmp_11 = r0;
    if ((s.tmp_11) && (s.tmp_11).vtable) {
    setupResume(s, 30);
    pxsim_String__stringConv(s.tmp_11);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_11) + ""; }
  case 30:
    r0 = s.retval;
    s.tmp_10 = r0;
    r0 = pxsim_String__concat(s.tmp_1, s.tmp_10);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 103; s.pc = 26; return s.tmp_0;
  case 26:
    r0 = s.retval;
    r0 = pxsim_Array__mk();
    s.newClients___470060 = (r0);
    r0 = s.arg0.fields["services"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >> 2);
    s.tmp_0 = r0;
    r0 = pxsim.control.createBuffer(s.tmp_0);
    s.occupied___470062 = (r0);
    s.c___470070 = (undefined);
    r0 = s.arg0.fields["clients"];
    s.unnamed4386___U3 = (r0);
    s.unnamed4387___U4 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed4387___U4;
    r0 = pxsim_Array__length(s.unnamed4386___U3);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 11; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4386___U3, s.unnamed4387___U4);
    s.c___470070 = (r0);
    r0 = s.c___470070.fields["broadcast"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 2; continue; }
    s.tmp_3 = jacdac_Client__detach__P468144_mk(s);
    s.tmp_3.arg0 = s.c___470070;
    s.callLocIdx = 104; s.pc = 31; return s.tmp_3;
  case 31:
    r0 = s.retval;
    { step = 10; continue; }
  case 2:
  case 3:
    r0 = s.arg0.fields["services"];
    s.tmp_0 = r0;
    r0 = s.c___470070.fields["serviceNumber"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 << 2);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_0, 11, s.tmp_1);
    s.newClass___470077 = (r0);
    r0 = s.c___470070.fields["serviceClass"];
    s.tmp_1 = r0;
    r0 = (s.newClass___470077 == s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = s.tmp_0;
    { step = 7; continue; }
  case 4:
    r0 = s.c___470070.fields["requiredDeviceName"];
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    s.tmp_3 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (!r0) { step = 5; continue; }
    r0 = s.tmp_2;
    { step = 6; continue; }
  case 5:
    r0 = s.c___470070.fields["requiredDeviceName"];
    s.tmp_5 = r0;
    s.tmp_7 = jacdac_Device_name__P468160_mk(s);
    s.tmp_7.arg0 = s.arg0;
    s.callLocIdx = 105; s.pc = 32; return s.tmp_7;
  case 32:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = (s.tmp_5 == s.tmp_6);
  case 6:
    // jmp value (already in r0)
    s.tmp_8 = r0;
    r0 = s.tmp_8;
  case 7:
    // jmp value (already in r0)
    s.tmp_9 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_9);
    if (!r0) { step = 8; continue; }
    r0 = pxsim_Array__push(s.newClients___470060, s.c___470070);
    r0 = s.c___470070.fields["serviceNumber"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.setByte(s.occupied___470062, s.tmp_0, 1);
    { step = 9; continue; }
  case 8:
    s.tmp_0 = jacdac_Client__detach__P468144_mk(s);
    s.tmp_0.arg0 = s.c___470070;
    s.callLocIdx = 106; s.pc = 33; return s.tmp_0;
  case 33:
    r0 = s.retval;
  case 9:
  case 10:
    r0 = (s.unnamed4387___U4 + 1);
    s.unnamed4387___U4 = (r0);
    { step = 1; continue; }
  case 11:
    s.unnamed4386___U3 = (undefined);
    r0 = (s.arg0).fields["clients"] = (s.newClients___470060);
    s.tmp_0 = jacdac_newDevice__P470034_mk(s);
    s.callLocIdx = 107; s.pc = 34; return s.tmp_0;
  case 34:
    r0 = s.retval;
    r0 = pxsim_Array__length(globals._unattachedClients___468108);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 12; continue; }
    { step = 25; continue; }
  case 12:
  case 13:
    s.i___470117 = (4);
  case 14:
    s.tmp_1 = r0 = s.i___470117;
    r0 = s.arg0.fields["services"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_3);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 24; continue; }
    s.tmp_5 = r0 = s.occupied___470062;
    r0 = (s.i___470117 >> 2);
    s.tmp_6 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_5, s.tmp_6);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 15; continue; }
    { step = 23; continue; }
  case 15:
  case 16:
    r0 = s.arg0.fields["services"];
    s.tmp_7 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_7, 11, s.i___470117);
    s.service_class___470127 = (r0);
    s.cc___470135 = (undefined);
    s.unnamed4388___U9 = (globals._unattachedClients___468108);
    s.unnamed4389___U10 = (0);
  case 17:
    s.tmp_0 = r0 = s.unnamed4389___U10;
    r0 = pxsim_Array__length(s.unnamed4388___U9);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 22; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4388___U9, s.unnamed4389___U10);
    s.cc___470135 = (r0);
    r0 = s.cc___470135.fields["serviceClass"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == s.service_class___470127);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 20; continue; }
    s.tmp_5 = jacdac_Client__attach__P468143_mk(s);
    s.tmp_5.arg0 = s.cc___470135;
    s.tmp_5.arg1 = s.arg0;
    r0 = (s.i___470117 >> 2);
    s.tmp_5.arg2 = r0;
    s.callLocIdx = 108; s.pc = 35; return s.tmp_5;
  case 35:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 18; continue; }
    { step = 22; continue; }
  case 18:
  case 19:
  case 20:
  case 21:
    r0 = (s.unnamed4389___U10 + 1);
    s.unnamed4389___U10 = (r0);
    { step = 17; continue; }
  case 22:
    s.unnamed4388___U9 = (undefined);
  case 23:
    r0 = (s.i___470117 + 4);
    s.i___470117 = (r0);
    { step = 14; continue; }
  case 24:
  case 25:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_reattach__P470040.info = {"start":20674,"length":1314,"line":652,"column":4,"endLine":687,"endColumn":5,"fileName":"routing.ts","functionName":"reattach","argumentNames":["dev"]}

function jacdac_reattach__P470040_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_reattach__P470040, depth: s.depth + 1,
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
  newClients___470060: undefined,
  occupied___470062: undefined,
  c___470070: undefined,
  unnamed4386___U3: undefined,
  unnamed4387___U4: undefined,
  newClass___470077: undefined,
  i___470117: undefined,
  service_class___470127: undefined,
  cc___470135: undefined,
  unnamed4388___U9: undefined,
  unnamed4389___U10: undefined,
  arg0: undefined,
} }





function jacdac_Client__attach__P468143(s) {
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
    if (!checkSubtype(r0, jacdac_Client__C468128_VT)) failedCast(r0);
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
    if (!r0) { step = 9; continue; }
    r0 = s.arg0.fields["requiredDeviceName"];
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBool(s.tmp_4);
    if (r0) { step = 3; continue; }
    r0 = s.tmp_4;
    { step = 4; continue; }
  case 3:
    r0 = s.arg0.fields["requiredDeviceName"];
    s.tmp_5 = r0;
    s.tmp_7 = jacdac_Device_name__P468160_mk(s);
    s.tmp_7.arg0 = s.arg1;
    s.callLocIdx = 53; s.pc = 12; return s.tmp_7;
  case 12:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = (s.tmp_5 != s.tmp_6);
  case 4:
    // jmp value (already in r0)
    s.tmp_8 = r0;
    r0 = pxsim_numops_toBool(s.tmp_8);
    if (r0) { step = 5; continue; }
    r0 = s.tmp_8;
    { step = 6; continue; }
  case 5:
    r0 = s.arg0.fields["requiredDeviceName"];
    s.tmp_9 = r0;
    r0 = s.arg1.fields["deviceId"];
    s.tmp_10 = r0;
    r0 = (s.tmp_9 != s.tmp_10);
  case 6:
    // jmp value (already in r0)
    s.tmp_11 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_11);
    if (!r0) { step = 7; continue; }
    r0 = false;
    { step = 11; continue; }
  case 7:
  case 8:
    r0 = (s.arg0).fields["device"] = (s.arg1);
    r0 = (s.arg0).fields["serviceNumber"] = (s.arg2);
    r0 = pxsim_Array_.removeElement(globals._unattachedClients___468108, s.arg0);
  case 9:
  case 10:
    s.tmp_0 = jacdac_log__P468716_mk(s);
    s.tmp_7 = jacdac_Device_toString__P468162_mk(s);
    s.tmp_7.arg0 = s.arg1;
    s.callLocIdx = 54; s.pc = 14; return s.tmp_7;
  case 14:
    r0 = s.retval;
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
    r0 = pxsim_String__concat("attached ", s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, "/");
    s.tmp_3 = r0;
    if ((s.arg2) && (s.arg2).vtable) {
    setupResume(s, 16);
    pxsim_String__stringConv(s.arg2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg2) + ""; }
  case 16:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_8);
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_2, " to client ");
    s.tmp_1 = r0;
    r0 = s.arg0.fields["name"];
    s.tmp_10 = r0;
    if ((s.tmp_10) && (s.tmp_10).vtable) {
    setupResume(s, 17);
    pxsim_String__stringConv(s.tmp_10);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_10) + ""; }
  case 17:
    r0 = s.retval;
    s.tmp_9 = r0;
    r0 = pxsim_String__concat(s.tmp_1, s.tmp_9);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 55; s.pc = 13; return s.tmp_0;
  case 13:
    r0 = s.retval;
    r0 = s.arg1.fields["clients"];
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.arg0);
    s.tmp_0 = jacdac_Client_onAttach__P469131_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 56; s.pc = 18; return s.tmp_0;
  case 18:
    r0 = s.retval;
    s.tmp_0 = jacdac_ClientPacketQueue_resend__P468127_mk(s);
    r0 = s.arg0.fields["config"];
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 57; s.pc = 19; return s.tmp_0;
  case 19:
    r0 = s.retval;
    r0 = true;
  case 11:
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client__attach__P468143.info = {"start":10012,"length":669,"line":319,"column":8,"endLine":333,"endColumn":9,"fileName":"routing.ts","functionName":"_attach","argumentNames":["this","dev","serviceNum"]}

function jacdac_Client__attach__P468143_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client__attach__P468143, depth: s.depth + 1,
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
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_ClientPacketQueue_resend__P468127(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.sn___469146 = undefined;
    s.hasNonSet___469158 = undefined;
    s.p___469160 = undefined;
    s.unnamed4374___U3 = undefined;
    s.unnamed4375___U4 = undefined;
    s.pkt___469175 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_ClientPacketQueue__C468123_VT)) failedCast(r0);
    r0 = s.arg0.fields["parent"];
    r0 = r0.fields["serviceNumber"];
    s.sn___469146 = (r0);
    r0 = (s.sn___469146 == null);
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
    s.hasNonSet___469158 = (false);
    s.p___469160 = (undefined);
    r0 = s.arg0.fields["pkts"];
    s.unnamed4374___U3 = (r0);
    s.unnamed4375___U4 = (0);
  case 5:
    s.tmp_0 = r0 = s.unnamed4375___U4;
    r0 = pxsim_Array__length(s.unnamed4374___U3);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 8; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4374___U3, s.unnamed4375___U4);
    s.p___469160 = (r0);
    r0 = pxsim.BufferMethods.setByte(s.p___469160, 1, s.sn___469146);
    r0 = pxsim.BufferMethods.getByte(s.p___469160, 3);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 >> 4);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 != 2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.hasNonSet___469158 = (true);
  case 6:
  case 7:
    r0 = (s.unnamed4375___U4 + 1);
    s.unnamed4375___U4 = (r0);
    { step = 5; continue; }
  case 8:
    s.unnamed4374___U3 = (undefined);
    s.tmp_0 = jacdac_JDPacket_onlyHeader__P468210_mk(s);
    s.tmp_0.arg0 = 0;
    s.callLocIdx = 41; s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
    s.pkt___469175 = (r0);
    s.tmp_0 = jacdac_JDPacket_compress__P468235_mk(s);
    s.tmp_0.arg0 = s.pkt___469175;
    r0 = s.arg0.fields["pkts"];
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 42; s.pc = 13; return s.tmp_0;
  case 13:
    r0 = s.retval;
    s.tmp_0 = jacdac_Client_sendCommand__P468145_mk(s);
    r0 = s.arg0.fields["parent"];
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = s.pkt___469175;
    s.callLocIdx = 43; s.pc = 14; return s.tmp_0;
  case 14:
    r0 = s.retval;
    r0 = pxsim_numops_toBoolDecr(s.hasNonSet___469158);
    if (!r0) { step = 9; continue; }
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = helpers_arrayFilter__P466454_mk(s);
    r0 = s.arg0.fields["pkts"];
    s.tmp_2.arg0 = r0;
    s.tmp_2.arg1 = inline__P469193;
    s.callLocIdx = 44; s.pc = 15; return s.tmp_2;
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
jacdac_ClientPacketQueue_resend__P468127.info = {"start":7885,"length":647,"line":249,"column":8,"endLine":265,"endColumn":9,"fileName":"routing.ts","functionName":"resend","argumentNames":["this"]}

function jacdac_ClientPacketQueue_resend__P468127_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_ClientPacketQueue_resend__P468127, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  sn___469146: undefined,
  hasNonSet___469158: undefined,
  p___469160: undefined,
  unnamed4374___U3: undefined,
  unnamed4375___U4: undefined,
  pkt___469175: undefined,
  arg0: undefined,
} }





function inline__P469193(s) {
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
inline__P469193.info = {"start":8482,"length":39,"line":264,"column":45,"endLine":264,"endColumn":84,"fileName":"routing.ts","functionName":"inline","argumentNames":["p"]}

function inline__P469193_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P469193, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_Client_sendCommand__P468145(s) {
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
    if (!checkSubtype(r0, jacdac_Client__C468128_VT)) failedCast(r0);
    s.tmp_0 = jacdac_Client_start__P468150_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 61; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    r0 = s.arg0.fields["serviceNumber"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    s.tmp_2 = jacdac_JDPacket_service_number__P468222_mk(s);
    s.tmp_2.arg0 = s.arg1;
    r0 = s.arg0.fields["serviceNumber"];
    s.tmp_2.arg1 = r0;
    s.callLocIdx = 62; s.pc = 5; return s.tmp_2;
  case 5:
    r0 = s.retval;
    s.tmp_0 = jacdac_JDPacket__sendCmd__P468244_mk(s);
    s.tmp_0.arg0 = s.arg1;
    r0 = s.arg0.fields["device"];
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 63; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_sendCommand__P468145.info = {"start":11119,"length":220,"line":350,"column":8,"endLine":356,"endColumn":9,"fileName":"routing.ts","functionName":"sendCommand","argumentNames":["this","pkt"]}

function jacdac_Client_sendCommand__P468145_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_sendCommand__P468145, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket__sendCmd__P468244(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    s.tmp_2 = jacdac_JDPacket__sendCmdId__P468245_mk(s);
    s.tmp_2.arg0 = s.arg0;
    r0 = s.arg1.fields["deviceId"];
    s.tmp_2.arg1 = r0;
    s.callLocIdx = 205; s.pc = 4; return s.tmp_2;
  case 4:
    r0 = s.retval;
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket__sendCmd__P468244.info = {"start":7043,"length":120,"line":225,"column":8,"endLine":229,"endColumn":9,"fileName":"packet.ts","functionName":"_sendCmd","argumentNames":["this","dev"]}

function jacdac_JDPacket__sendCmd__P468244_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket__sendCmd__P468244, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket__sendCmdId__P468245(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    s.tmp_2 = jacdac_JDPacket_device_identifier__P468215_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.arg1;
    s.callLocIdx = 206; s.pc = 4; return s.tmp_2;
  case 4:
    r0 = s.retval;
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_0, 3);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 | 1);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.setByte(s.tmp_0, 3, s.tmp_1);
    s.tmp_0 = jacdac_JDPacket__sendCore__P468242_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 207; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket__sendCmdId__P468245.info = {"start":7173,"length":209,"line":231,"column":8,"endLine":237,"endColumn":9,"fileName":"packet.ts","functionName":"_sendCmdId","argumentNames":["this","devId"]}

function jacdac_JDPacket__sendCmdId__P468245_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket__sendCmdId__P468245, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Client_start__P468150(s) {
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
    if (!checkSubtype(r0, jacdac_Client__C468128_VT)) failedCast(r0);
    r0 = s.arg0.fields["started"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = (s.arg0).fields["started"] = (true);
    s.tmp_0 = jacdac_start__P468182_mk(s);
    s.callLocIdx = 65; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    r0 = pxsim_Array__push(globals._unattachedClients___468108, s.arg0);
    r0 = pxsim_Array__push(globals._allClients___468109, s.arg0);
    s.tmp_0 = jacdac_clearAttachCache__P469347_mk(s);
    s.callLocIdx = 66; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_start__P468150.info = {"start":13245,"length":223,"line":411,"column":8,"endLine":418,"endColumn":9,"fileName":"routing.ts","functionName":"start","argumentNames":["this"]}

function jacdac_Client_start__P468150_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_start__P468150, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_compress__P468235(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.sz___470841 = undefined;
    s.s___470845 = undefined;
    s.unnamed4392___U2 = undefined;
    s.unnamed4393___U3 = undefined;
    s.data___470852 = undefined;
    s.s___470873 = undefined;
    s.unnamed4394___U6 = undefined;
    s.unnamed4395___U7 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = pxsim_Array__length(s.arg1);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 7; continue; }
  case 1:
  case 2:
    s.sz___470841 = (-4);
    s.s___470845 = (undefined);
    s.unnamed4392___U2 = (s.arg1);
    s.unnamed4393___U3 = (0);
  case 3:
    s.tmp_0 = r0 = s.unnamed4393___U3;
    r0 = pxsim_Array__length(s.unnamed4392___U2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4392___U2, s.unnamed4393___U3);
    s.s___470845 = (r0);
    s.tmp_2 = r0 = s.sz___470841;
    r0 = pxsim.BufferMethods.length(s.s___470845);
    s.tmp_3 = r0;
    r0 = (s.tmp_2 + s.tmp_3);
    s.sz___470841 = (r0);
    r0 = (s.unnamed4393___U3 + 1);
    s.unnamed4393___U3 = (r0);
    { step = 3; continue; }
  case 4:
    s.unnamed4392___U2 = (undefined);
    r0 = pxsim.control.createBuffer(s.sz___470841);
    s.data___470852 = (r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim_Array__getAt(s.arg1, 0);
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.write(s.tmp_0, 12, s.tmp_1);
    s.tmp_0 = r0 = s.data___470852;
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
    s.sz___470841 = (r0);
    s.s___470873 = (undefined);
    s.tmp_0 = helpers_arraySlice__P466459_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.tmp_0.arg1 = 1;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 191; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    s.unnamed4394___U6 = (r0);
    s.unnamed4395___U7 = (0);
  case 5:
    s.tmp_0 = r0 = s.unnamed4395___U7;
    r0 = pxsim_Array__length(s.unnamed4394___U6);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 6; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4394___U6, s.unnamed4395___U7);
    s.s___470873 = (r0);
    r0 = pxsim.BufferMethods.write(s.data___470852, s.sz___470841, s.s___470873);
    s.tmp_0 = r0 = s.sz___470841;
    r0 = pxsim.BufferMethods.length(s.s___470873);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 + s.tmp_1);
    s.sz___470841 = (r0);
    r0 = (s.unnamed4395___U7 + 1);
    s.unnamed4395___U7 = (r0);
    { step = 5; continue; }
  case 6:
    s.unnamed4394___U6 = (undefined);
    r0 = (s.arg0).fields["_data"] = (s.data___470852);
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_compress__P468235.info = {"start":5345,"length":543,"line":169,"column":8,"endLine":185,"endColumn":9,"fileName":"packet.ts","functionName":"compress","argumentNames":["this","stripped"]}

function jacdac_JDPacket_compress__P468235_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_compress__P468235, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  sz___470841: undefined,
  s___470845: undefined,
  unnamed4392___U2: undefined,
  unnamed4393___U3: undefined,
  data___470852: undefined,
  s___470873: undefined,
  unnamed4394___U6: undefined,
  unnamed4395___U7: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Client_onAttach__P469131(s) {
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
    if (!checkSubtype(r0, jacdac_Client__C468128_VT)) failedCast(r0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_onAttach__P469131.info = {"start":11052,"length":24,"line":347,"column":8,"endLine":347,"endColumn":32,"fileName":"routing.ts","functionName":"onAttach","argumentNames":["this"]}

function jacdac_Client_onAttach__P469131_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_onAttach__P469131, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_Device_name__P468160(s) {
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
    if (!checkSubtype(r0, jacdac_Device__C468154_VT)) failedCast(r0);
    r0 = s.arg0.fields["_name"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.tmp_3 = settings_readString__P467942_mk(s);
    if ((globals.devNameSettingPrefix___468107) && (globals.devNameSettingPrefix___468107).vtable) {
    setupResume(s, 6);
    pxsim_String__stringConv(globals.devNameSettingPrefix___468107);
    checkResumeConsumed();
    return;
    } else { s.retval = (globals.devNameSettingPrefix___468107) + ""; }
  case 6:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = s.arg0.fields["deviceId"];
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 7);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 7:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(s.tmp_4, s.tmp_5);
    s.tmp_3.arg0 = r0;
    s.callLocIdx = 68; s.pc = 5; return s.tmp_3;
  case 5:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_2;
    { step = 2; continue; }
  case 1:
    r0 = null;
  case 2:
    // jmp value (already in r0)
    s.tmp_7 = r0;
    r0 = (s.arg0).fields["_name"] = (s.tmp_7);
  case 3:
  case 4:
    r0 = s.arg0.fields["_name"];
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_Device_name__P468160.info = {"start":14783,"length":240,"line":464,"column":8,"endLine":469,"endColumn":9,"fileName":"routing.ts","functionName":"name","argumentNames":["this"]}
jacdac_Device_name__P468160.isGetter = true;

function jacdac_Device_name__P468160_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_name__P468160, depth: s.depth + 1,
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





function settings_readString__P467942(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___475180 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._get(s.arg0);
    s.buf___475180 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.buf___475180);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = undefined;
    { step = 3; continue; }
    { step = 2; continue; }
  case 1:
    r0 = pxsim.BufferMethods.toString(s.buf___475180);
    { step = 3; continue; }
  case 2:
    r0 = undefined;
  case 3:
    return leave(s, r0)
  default: oops()
} } }
settings_readString__P467942.info = {"start":2649,"length":177,"line":103,"column":4,"endLine":109,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"readString","argumentNames":["key"]}

function settings_readString__P467942_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_readString__P467942, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  buf___475180: undefined,
  arg0: undefined,
} }





function settings_readBuffer__P467941(s) {
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
settings_readBuffer__P467941.info = {"start":2516,"length":72,"line":96,"column":4,"endLine":98,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"readBuffer","argumentNames":["key"]}

function settings_readBuffer__P467941_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_readBuffer__P467941, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_Device_toString__P468162(s) {
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
    if (!checkSubtype(r0, jacdac_Device__C468154_VT)) failedCast(r0);
    s.tmp_1 = jacdac_Device_name__P468160_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.callLocIdx = 71; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_5 = jacdac_Device_name__P468160_mk(s);
    s.tmp_5.arg0 = s.arg0;
    s.callLocIdx = 72; s.pc = 4; return s.tmp_5;
  case 4:
    r0 = s.retval;
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 5);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 5:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(" (", s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_2, ")");
    { step = 2; continue; }
  case 1:
    r0 = pxsim_String_.mkEmpty();
  case 2:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    s.tmp_9 = jacdac_Device_shortId__P468161_mk(s);
    s.tmp_9.arg0 = s.arg0;
    s.callLocIdx = 70; s.pc = 6; return s.tmp_9;
  case 6:
    r0 = s.retval;
    s.tmp_8 = r0;
    if ((s.tmp_8) && (s.tmp_8).vtable) {
    setupResume(s, 7);
    pxsim_String__stringConv(s.tmp_8);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_8) + ""; }
  case 7:
    r0 = s.retval;
    s.tmp_7 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 8);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 8:
    r0 = s.retval;
    s.tmp_10 = r0;
    r0 = pxsim_String__concat(s.tmp_7, s.tmp_10);
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device_toString__P468162.info = {"start":15246,"length":93,"line":478,"column":8,"endLine":480,"endColumn":9,"fileName":"routing.ts","functionName":"toString","argumentNames":["this"]}

function jacdac_Device_toString__P468162_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_toString__P468162, depth: s.depth + 1,
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





function jacdac_serviceMatches__P470150(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.ds___470153 = undefined;
    s.i___470164 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["services"];
    s.ds___470153 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.ds___470153);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim.BufferMethods.length(s.ds___470153);
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
    s.i___470164 = (4);
  case 5:
    s.tmp_1 = r0 = s.i___470164;
    r0 = pxsim.BufferMethods.length(s.arg1);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 8; continue; }
    r0 = pxsim.BufferMethods.getByte(s.ds___470153, s.i___470164);
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.getByte(s.arg1, s.i___470164);
    s.tmp_5 = r0;
    r0 = (s.tmp_4 != s.tmp_5);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 6; continue; }
    r0 = false;
    { step = 9; continue; }
  case 6:
  case 7:
    r0 = (s.i___470164 + 1);
    s.i___470164 = (r0);
    { step = 5; continue; }
  case 8:
    r0 = true;
  case 9:
    return leave(s, r0)
  default: oops()
} } }
jacdac_serviceMatches__P470150.info = {"start":21994,"length":289,"line":689,"column":4,"endLine":697,"endColumn":5,"fileName":"routing.ts","functionName":"serviceMatches","argumentNames":["dev","serv"]}

function jacdac_serviceMatches__P470150_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_serviceMatches__P470150, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  ds___470153: undefined,
  i___470164: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Host_handlePacketOuter__P468116(s) {
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
    if (!checkSubtype(r0, jacdac_Host__C468110_VT)) failedCast(r0);
    s.tmp_1 = jacdac_Host_handleStatusCode__P468724_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_1.arg1 = s.arg1;
    s.callLocIdx = 9; s.pc = 6; return s.tmp_1;
  case 6:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 5; continue; }
  case 1:
  case 2:
    r0 = s.arg1.fields["_header"];
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_4, 4, 14);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == 0);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 3; continue; }
    s.tmp_5 = jacdac_Host_sendReport__P468721_mk(s);
    s.tmp_5.arg0 = s.arg0;
    s.tmp_6 = jacdac_JDPacket_from__P468209_mk(s);
    s.tmp_6.arg0 = 0;
    r0 = pxsim.control.createBuffer(0);
    s.tmp_6.arg1 = r0;
    s.callLocIdx = 12; s.pc = 8; return s.tmp_6;
  case 8:
    r0 = s.retval;
    s.tmp_5.arg1 = r0;
    s.callLocIdx = 13; s.pc = 7; return s.tmp_5;
  case 7:
    r0 = s.retval;
    { step = 4; continue; }
  case 3:
    r0 = (s.arg0).fields["stateUpdated"] = (false);
    s.tmp_0 = jacdac_Host__C468110_v1_2_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    if (!checkSubtype(s.tmp_0.arg0, jacdac_Host__C468110_VT)) failedCast(s.tmp_0.arg0);
    s.tmp_0.fn = s.tmp_0.arg0.vtable.methods.handlePacket;
    s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
  case 4:
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Host_handlePacketOuter__P468116.info = {"start":1238,"length":439,"line":48,"column":8,"endLine":60,"endColumn":9,"fileName":"routing.ts","functionName":"handlePacketOuter","argumentNames":["this","pkt"]}

function jacdac_Host_handlePacketOuter__P468116_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Host_handlePacketOuter__P468116, depth: s.depth + 1,
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





function jacdac_Host_handlePacket__P468117(s) {
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
    if (!checkSubtype(r0, jacdac_Host__C468110_VT)) failedCast(r0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Host_handlePacket__P468117.info = {"start":1687,"length":31,"line":62,"column":8,"endLine":62,"endColumn":39,"fileName":"routing.ts","functionName":"handlePacket","argumentNames":["this","pkt"]}

function jacdac_Host_handlePacket__P468117_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Host_handlePacket__P468117, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Host_advertisementData__P468119(s) {
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
    if (!checkSubtype(r0, jacdac_Host__C468110_VT)) failedCast(r0);
    r0 = pxsim.control.createBuffer(0);
    return leave(s, r0)
  default: oops()
} } }
jacdac_Host_advertisementData__P468119.info = {"start":1795,"length":67,"line":68,"column":8,"endLine":70,"endColumn":9,"fileName":"routing.ts","functionName":"advertisementData","argumentNames":["this"]}

function jacdac_Host_advertisementData__P468119_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Host_advertisementData__P468119, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac_Host_handleStatusCode__P468724(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.getset___468819 = undefined;
    s.reg___468823 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Host__C468110_VT)) failedCast(r0);
    r0 = s.arg1.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 4, 14);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 12);
    s.getset___468819 = (r0);
    r0 = s.arg1.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 4, 14);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 4095);
    s.reg___468823 = (r0);
    r0 = (s.reg___468823 == 259);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = (s.getset___468819 == 1);
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 3; continue; }
    r0 = pxsim_Array__mk();
    s.tmp_2 = r0;
    r0 = s.arg0.fields["_statusCode"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 >> 0);
    s.tmp_3 = r0;
    r0 = pxsim_Array__push(s.tmp_2, s.tmp_3);
    s.tmp_5 = jacdac_Host_sendReport__P468721_mk(s);
    s.tmp_5.arg0 = s.arg0;
    s.tmp_6 = jacdac_JDPacket_jdpacked__P468212_mk(s);
    r0 = s.arg1.fields["_header"];
    s.tmp_7 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_7, 4, 14);
    s.tmp_6.arg0 = r0;
    s.tmp_6.arg1 = "u32";
    s.tmp_6.arg2 = s.tmp_2;
    s.callLocIdx = 22; s.pc = 7; return s.tmp_6;
  case 7:
    r0 = s.retval;
    s.tmp_5.arg1 = r0;
    s.callLocIdx = 23; s.pc = 6; return s.tmp_5;
  case 6:
    r0 = s.retval;
    r0 = true;
    { step = 5; continue; }
    { step = 4; continue; }
  case 3:
    r0 = false;
    { step = 5; continue; }
  case 4:
    r0 = undefined;
  case 5:
    return leave(s, r0)
  default: oops()
} } }
jacdac_Host_handleStatusCode__P468724.info = {"start":2460,"length":445,"line":89,"column":8,"endLine":99,"endColumn":9,"fileName":"routing.ts","functionName":"handleStatusCode","argumentNames":["this","pkt"]}

function jacdac_Host_handleStatusCode__P468724_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Host_handleStatusCode__P468724, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  getset___468819: undefined,
  reg___468823: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_jdpacked__P468212(s) {
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
    s.tmp_0 = jacdac_JDPacket_from__P468209_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_1 = jacdac_jdpack__P468253_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.tmp_1.arg1 = s.arg2;
    s.callLocIdx = 180; s.pc = 2; return s.tmp_1;
  case 2:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 181; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_jdpacked__P468212.info = {"start":2174,"length":147,"line":65,"column":8,"endLine":67,"endColumn":9,"fileName":"packet.ts","functionName":"jdpacked","argumentNames":["service_command","fmt","nums"]}

function jacdac_JDPacket_jdpacked__P468212_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_jdpacked__P468212, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function helpers_arrayFind__P466455(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___475160 = undefined;
    s.i___475163 = undefined;
    s.v___475168 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__length(s.arg0);
    s.len___475160 = (r0);
    s.i___475163 = (0);
  case 1:
    r0 = (s.i___475163 < s.len___475160);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.arg0, s.i___475163);
    s.v___475168 = (r0);
    s.tmp_1 = lambda_3_mk(s);
    s.tmp_1.argL = s.arg1;
    s.tmp_1.arg0 = s.v___475168;
    s.tmp_1.arg1 = s.i___475163;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 8; s.pc = 6; return s.tmp_1;
  case 6:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = s.v___475168;
    { step = 5; continue; }
  case 2:
  case 3:
    r0 = (s.i___475163 + 1);
    s.i___475163 = (r0);
    { step = 1; continue; }
  case 4:
    r0 = undefined;
  case 5:
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayFind__P466455.info = {"start":8018,"length":292,"line":271,"column":4,"endLine":278,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arrayFind","argumentNames":["arr","callbackfn"]}

function helpers_arrayFind__P466455_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayFind__P466455, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  len___475160: undefined,
  i___475163: undefined,
  v___475168: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_is_command__P468239(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
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
jacdac_JDPacket_is_command__P468239.info = {"start":6219,"length":93,"line":199,"column":8,"endLine":201,"endColumn":9,"fileName":"packet.ts","functionName":"is_command","argumentNames":["this"]}
jacdac_JDPacket_is_command__P468239.isGetter = true;

function jacdac_JDPacket_is_command__P468239_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_is_command__P468239, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_packet_flags__P468216(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_0, 3);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_packet_flags__P468216.info = {"start":3010,"length":45,"line":89,"column":8,"endLine":89,"endColumn":53,"fileName":"packet.ts","functionName":"packet_flags","argumentNames":["this"]}
jacdac_JDPacket_packet_flags__P468216.isGetter = true;

function jacdac_JDPacket_packet_flags__P468216_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_packet_flags__P468216, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_onlyHeader__P468210(s) {
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
    s.tmp_0 = jacdac_JDPacket_from__P468209_mk(s);
    s.tmp_0.arg0 = s.arg0;
    r0 = pxsim.control.createBuffer(0);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 177; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_onlyHeader__P468210.info = {"start":1717,"length":122,"line":50,"column":8,"endLine":52,"endColumn":9,"fileName":"packet.ts","functionName":"onlyHeader","argumentNames":["service_command"]}

function jacdac_JDPacket_onlyHeader__P468210_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_onlyHeader__P468210, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_crc__P468223(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_0, 4, 0);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_crc__P468223.info = {"start":4017,"length":97,"line":118,"column":8,"endLine":120,"endColumn":9,"fileName":"packet.ts","functionName":"crc","argumentNames":["this"]}
jacdac_JDPacket_crc__P468223.isGetter = true;

function jacdac_JDPacket_crc__P468223_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_crc__P468223, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_requires_ack__P468220(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    s.tmp_1 = r0 = s.arg1;
    s.tmp_3 = jacdac_JDPacket_requires_ack__P468219_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.callLocIdx = 186; s.pc = 3; return s.tmp_3;
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
jacdac_JDPacket_requires_ack__P468220.info = {"start":3501,"length":147,"line":104,"column":8,"endLine":107,"endColumn":9,"fileName":"packet.ts","functionName":"requires_ack","argumentNames":["this","ack"]}

function jacdac_JDPacket_requires_ack__P468220_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_requires_ack__P468220, depth: s.depth + 1,
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





function jacdac_JDPacket_requires_ack__P468219(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
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
jacdac_JDPacket_requires_ack__P468219.info = {"start":3368,"length":124,"line":101,"column":8,"endLine":103,"endColumn":9,"fileName":"packet.ts","functionName":"requires_ack","argumentNames":["this"]}
jacdac_JDPacket_requires_ack__P468219.isGetter = true;

function jacdac_JDPacket_requires_ack__P468219_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_requires_ack__P468219, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_multicommand_class__P468217(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
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
jacdac_JDPacket_multicommand_class__P468217.info = {"start":3065,"length":216,"line":91,"column":8,"endLine":95,"endColumn":9,"fileName":"packet.ts","functionName":"multicommand_class","argumentNames":["this"]}
jacdac_JDPacket_multicommand_class__P468217.isGetter = true;

function jacdac_JDPacket_multicommand_class__P468217_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_multicommand_class__P468217, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function jacdac___physGetTimestamp__P468067(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals.recvQ___468611);
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
jacdac___physGetTimestamp__P468067.info = {"start":810,"length":121,"line":33,"column":4,"endLine":36,"endColumn":5,"fileName":"jdsim.ts","functionName":"__physGetTimestamp","argumentNames":[]}

function jacdac___physGetTimestamp__P468067_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac___physGetTimestamp__P468067, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }





function jacdac_JDPacket_fromBinary__P468208(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.p___470591 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_JDPacket__C468204_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_JDPacket_constructor__P470584_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 173; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.p___470591 = (s.tmp_0);
    s.tmp_0 = r0 = s.p___470591;
    r0 = pxsim.BufferMethods.slice(s.arg0, 0, 16);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["_header"] = (s.tmp_1);
    s.tmp_0 = r0 = s.p___470591;
    r0 = pxsim.BufferMethods.slice(s.arg0, 16, -1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["_data"] = (s.tmp_1);
    r0 = s.p___470591;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_fromBinary__P468208.info = {"start":1227,"length":215,"line":35,"column":8,"endLine":40,"endColumn":9,"fileName":"packet.ts","functionName":"fromBinary","argumentNames":["buf"]}

function jacdac_JDPacket_fromBinary__P468208_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_fromBinary__P468208, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  p___470591: undefined,
  arg0: undefined,
} }





function jacdac___physGetPacket__P468066(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals.recvQ___468611);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = undefined;
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = pxsim_Array_.removeAt(globals.recvQ___468611, 0);
  case 3:
    return leave(s, r0)
  default: oops()
} } }
jacdac___physGetPacket__P468066.info = {"start":572,"length":115,"line":23,"column":4,"endLine":26,"endColumn":5,"fileName":"jdsim.ts","functionName":"__physGetPacket","argumentNames":[]}

function jacdac___physGetPacket__P468066_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac___physGetPacket__P468066, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }





function helpers_arrayShift__P466446(s) {
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
helpers_arrayShift__P466446.info = {"start":4045,"length":82,"line":153,"column":4,"endLine":155,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arrayShift","argumentNames":["arr"]}

function helpers_arrayShift__P466446_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayShift__P466446, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function jacdac___physId__P468064(s) {
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
jacdac___physId__P468064.info = {"start":139,"length":59,"line":7,"column":4,"endLine":9,"endColumn":5,"fileName":"jdsim.ts","functionName":"__physId","argumentNames":[]}

function jacdac___physId__P468064_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac___physId__P468064, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function jacdac___physStart__P468069(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = (globals.recvQ___468611 != null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = pxsim_Array__mk();
    globals.recvQ___468611 = (r0);
    s.tmp_0 = control_simmessages_onReceived__P466769_mk(s);
    s.tmp_0.arg0 = "jacdac";
    s.tmp_0.arg1 = inline__P468636;
    s.callLocIdx = 5; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    r0 = pxsim.control.runInParallel(inline__P468647);
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac___physStart__P468069.info = {"start":1206,"length":479,"line":50,"column":4,"endLine":64,"endColumn":5,"fileName":"jdsim.ts","functionName":"__physStart","argumentNames":[]}

function jacdac___physStart__P468069_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac___physStart__P468069, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function inline__P468636(s) {
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
    r0 = pxsim_Array__push(globals.recvQ___468611, s.arg0);
    r0 = 30;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(s.tmp_0, 1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P468636.info = {"start":1350,"length":92,"line":53,"column":49,"endLine":56,"endColumn":9,"fileName":"jdsim.ts","functionName":"inline","argumentNames":["buf"]}

function inline__P468636_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P468636, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function inline__P468647(s) {
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
    r0 = pxsim.control.raiseEvent(s.tmp_0, 100);
    s.tmp_0 = pause__P466750_mk(s);
    s.tmp_0.arg0 = 500;
    s.callLocIdx = 7; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    { step = 1; continue; }
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P468647.info = {"start":1524,"length":154,"line":58,"column":30,"endLine":63,"endColumn":9,"fileName":"jdsim.ts","functionName":"inline","argumentNames":[]}

function inline__P468647_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P468647, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function control_simmessages_onReceived__P466769(s) {
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
    r0 = pxsim_numops_toBoolDecr(globals.handlers___468560);
    s.tmp_3 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 3; continue; }
    r0 = pxsim_pxtrt.mkMap();
    globals.handlers___468560 = (r0);
  case 3:
  case 4:
    r0 = pxsim_pxtrt.mapSetGeneric(globals.handlers___468560, s.arg0, s.arg1);
    s.tmp_0 = control_onEvent__P466728_mk(s);
    s.tmp_0.arg0 = 2999;
    s.tmp_0.arg1 = 1;
    s.tmp_0.arg2 = control_simmessages_consumeMessages__P468561;
    s.tmp_0.arg3 = 16;
    s.callLocIdx = 76; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_simmessages_onReceived__P466769.info = {"start":1063,"length":293,"line":32,"column":4,"endLine":39,"endColumn":5,"fileName":"pxt_modules/base/controlmessage.ts","functionName":"onReceived","argumentNames":["channel","handler"]}

function control_simmessages_onReceived__P466769_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_simmessages_onReceived__P466769, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function control_simmessages_consumeMessages__P468561(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.channel___475494 = undefined;
    s.msg___475499 = undefined;
    s.handler___475502 = undefined;
  case 1:
    r0 = pxsim_numops_toBoolDecr(true);
    if (!r0) { step = 8; continue; }
    r0 = pxsim_pxtcore.peekMessageChannel();
    s.channel___475494 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.channel___475494);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    { step = 8; continue; }
  case 2:
  case 3:
    r0 = pxsim_pxtcore.readMessageData();
    s.msg___475499 = (r0);
    s.tmp_0 = r0 = globals.handlers___468560;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = s.tmp_0;
    { step = 5; continue; }
  case 4:
    r0 = pxsim_pxtrt.mapGetGeneric(globals.handlers___468560, s.channel___475494);
  case 5:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    s.handler___475502 = (s.tmp_1);
    r0 = pxsim_numops_toBoolDecr(s.handler___475502);
    if (!r0) { step = 6; continue; }
    s.tmp_0 = lambda_2_mk(s);
    s.tmp_0.argL = s.handler___475502;
    s.tmp_0.arg0 = s.msg___475499;
    setupLambda(s.tmp_0, s.tmp_0.argL);
    s.callLocIdx = 75; s.pc = 9; return s.tmp_0;
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
control_simmessages_consumeMessages__P468561.info = {"start":564,"length":414,"line":15,"column":4,"endLine":27,"endColumn":5,"fileName":"pxt_modules/base/controlmessage.ts","functionName":"consumeMessages","argumentNames":[]}

function control_simmessages_consumeMessages__P468561_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_simmessages_consumeMessages__P468561, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  channel___475494: undefined,
  msg___475499: undefined,
  handler___475502: undefined,
} }





function control_onEvent__P466728(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.ctx___475306 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = control_eventContext__P466745_mk(s);
    s.callLocIdx = 70; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.ctx___475306 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.ctx___475306);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim.control.internalOnEvent(s.arg0, s.arg1, s.arg2, s.arg3);
    { step = 2; continue; }
  case 1:
    s.tmp_0 = control_EventContext_registerHandler__P466742_mk(s);
    s.tmp_0.arg0 = s.ctx___475306;
    s.tmp_0.arg1 = s.arg0;
    s.tmp_0.arg2 = s.arg1;
    s.tmp_0.arg3 = s.arg2;
    s.tmp_0.arg4 = s.arg3;
    s.callLocIdx = 71; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_onEvent__P466728.info = {"start":336,"length":325,"line":9,"column":4,"endLine":15,"endColumn":5,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"onEvent","argumentNames":["src","value","handler","flags"]}

function control_onEvent__P466728_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_onEvent__P466728, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  ctx___475306: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }





function control_eventContext__P466745(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals.eventContexts___468554);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = r0 = globals.eventContexts___468554;
    r0 = pxsim_Array__length(globals.eventContexts___468554);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 - 1);
    s.tmp_1 = r0;
    r0 = pxsim_Array__getAt(s.tmp_0, s.tmp_1);
    { step = 2; continue; }
  case 1:
    r0 = undefined;
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = s.tmp_3;
    return leave(s, r0)
  default: oops()
} } }
control_eventContext__P466745.info = {"start":6907,"length":136,"line":209,"column":4,"endLine":211,"endColumn":5,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"eventContext","argumentNames":[]}

function control_eventContext__P466745_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_eventContext__P466745, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
} }





function control_EventContext_registerHandler__P466742(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.h___475329 = undefined;
    s.unnamed4212___U1 = undefined;
    s.unnamed4213___U2 = undefined;
    s.hn___475352 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.arg4 = (s.lambdaArgs[4]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventContext__C466732_VT)) failedCast(r0);
    s.h___475329 = (undefined);
    r0 = s.arg0.fields["handlers"];
    s.unnamed4212___U1 = (r0);
    s.unnamed4213___U2 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed4213___U2;
    r0 = pxsim_Array__length(s.unnamed4212___U1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 6; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4212___U1, s.unnamed4213___U2);
    s.h___475329 = (r0);
    r0 = s.h___475329.fields["src"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == s.arg1);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_2;
    { step = 3; continue; }
  case 2:
    r0 = s.h___475329.fields["value"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 == s.arg2);
  case 3:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 4; continue; }
    r0 = (s.h___475329).fields["flags"] = (s.arg4);
    r0 = (s.h___475329).fields["handler"] = (s.arg3);
    { step = 7; continue; }
  case 4:
  case 5:
    r0 = (s.unnamed4213___U2 + 1);
    s.unnamed4213___U2 = (r0);
    { step = 1; continue; }
  case 6:
    s.unnamed4212___U1 = (undefined);
    r0 = pxsim_pxtcore_mkClassInstance(control_EventHandler__C468546_VT);
    s.tmp_0 = r0;
    s.tmp_1 = control_EventHandler_constructor__P468549_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg1;
    s.tmp_1.arg2 = s.arg2;
    s.tmp_1.arg3 = s.arg3;
    s.tmp_1.arg4 = s.arg4;
    s.callLocIdx = 73; s.pc = 8; return s.tmp_1;
  case 8:
    r0 = s.retval;
    s.hn___475352 = (s.tmp_0);
    r0 = s.arg0.fields["handlers"];
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.hn___475352);
    s.tmp_0 = control_EventHandler_register__P468547_mk(s);
    s.tmp_0.arg0 = s.hn___475352;
    s.callLocIdx = 74; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_registerHandler__P466742.info = {"start":5573,"length":525,"line":169,"column":8,"endLine":182,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"registerHandler","argumentNames":["this","src","value","handler","flags"]}

function control_EventContext_registerHandler__P466742_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_registerHandler__P466742, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  h___475329: undefined,
  unnamed4212___U1: undefined,
  unnamed4213___U2: undefined,
  hn___475352: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
  arg4: undefined,
} }





function control_EventHandler_constructor__P468549(s) {
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
    if (!checkSubtype(r0, control_EventHandler__C468546_VT)) failedCast(r0);
    r0 = (s.arg0).fields["src"] = (s.arg1);
    r0 = (s.arg0).fields["value"] = (s.arg2);
    r0 = (s.arg0).fields["handler"] = (s.arg3);
    r0 = (s.arg0).fields["flags"] = (s.arg4);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventHandler_constructor__P468549.info = {"start":786,"length":165,"line":23,"column":8,"endLine":28,"endColumn":13,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"inline","argumentNames":["this","src","value","handler","flags"]}

function control_EventHandler_constructor__P468549_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventHandler_constructor__P468549, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
  arg4: undefined,
} }





function control_EventHandler_register__P468547(s) {
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
    if (!checkSubtype(r0, control_EventHandler__C468546_VT)) failedCast(r0);
    r0 = pxsim_pxtcore_mkAction(1, inline__P475373);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg0);
    r0 = s.arg0.fields["src"];
    s.tmp_1 = r0;
    r0 = s.arg0.fields["value"];
    s.tmp_2 = r0;
    r0 = s.arg0.fields["flags"];
    s.tmp_3 = r0;
    r0 = pxsim.control.internalOnEvent(s.tmp_1, s.tmp_2, s.tmp_0, s.tmp_3);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventHandler_register__P468547.info = {"start":961,"length":165,"line":30,"column":8,"endLine":34,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"register","argumentNames":["this"]}

function control_EventHandler_register__P468547_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventHandler_register__P468547, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function inline__P475373(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = s.caps[0].fields["handler"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = if_handler_1_mk(s);
    s.tmp_1.arg0 = s.caps[0];
    if (!s.tmp_1.arg0.vtable.iface) {
      setupLambda(s.tmp_1, pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "handler"), 1);
      s.callLocIdx = 72; s.pc = 3; return s.tmp_1;
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["handler"];
      if (s.tmp_1.fn == null) { setupLambda(s.tmp_1, s.tmp_1.arg0.fields["handler"], 1); s.callLocIdx = 72; s.pc = 3; return s.tmp_1; }
      else if (s.tmp_1.fn.isGetter) { s.tmp_1.stage2Call = true; s.callLocIdx = 72; s.pc = 3; return s.tmp_1;; }
     else { s.callLocIdx = 72; s.pc = 3; return s.tmp_1; }
    }
  case 3:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P475373.info = {"start":1032,"length":71,"line":31,"column":58,"endLine":33,"endColumn":13,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"inline","argumentNames":[]}

function inline__P475373_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P475373, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }





function jacdac___physIsRunning__P468068(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = (globals.recvQ___468611 != null);
    return leave(s, r0)
  default: oops()
} } }
jacdac___physIsRunning__P468068.info = {"start":1030,"length":79,"line":42,"column":4,"endLine":44,"endColumn":5,"fileName":"jdsim.ts","functionName":"__physIsRunning","argumentNames":[]}

function jacdac___physIsRunning__P468068_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac___physIsRunning__P468068, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function jacdac_ControlService_constructor__P469892(s) {
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
    if (!checkSubtype(r0, jacdac_ControlService__C469889_VT)) failedCast(r0);
    r0 = (s.arg0).fields["_statusCode"] = (0);
    s.tmp_0 = jacdac_Host_constructor__P468120_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = "ctrl";
    s.tmp_0.arg2 = 0;
    s.callLocIdx = 86; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_ControlService_constructor__P469892.info = {"start":18346,"length":54,"line":579,"column":8,"endLine":581,"endColumn":9,"fileName":"routing.ts","functionName":"inline","argumentNames":["this"]}

function jacdac_ControlService_constructor__P469892_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_ControlService_constructor__P469892, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_log__P468716(s) {
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
    s.tmp_0 = console_add__P466713_mk(s);
    s.tmp_0.arg0 = globals.consolePriority___468079;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 8; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_log__P468716.info = {"start":571,"length":83,"line":24,"column":4,"endLine":26,"endColumn":5,"fileName":"routing.ts","functionName":"log","argumentNames":["msg"]}

function jacdac_log__P468716_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_log__P468716, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_ProtoTestHost_constructor__P468462(s) {
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
    if (!checkSubtype(r0, jacdac_ProtoTestHost__C468461_VT)) failedCast(r0);
    r0 = (s.arg0).fields["_statusCode"] = (0);
    r0 = (s.arg0).fields["bool"] = (false);
    r0 = (s.arg0).fields["i32"] = (0);
    r0 = (s.arg0).fields["u32"] = (0);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["s"] = (s.tmp_1);
    s.tmp_2 = r0 = s.arg0;
    r0 = pxsim.control.createBuffer(0);
    s.tmp_3 = r0;
    r0 = (s.tmp_2).fields["bytes"] = (s.tmp_3);
    s.tmp_4 = jacdac_Host_constructor__P468120_mk(s);
    s.tmp_4.arg0 = s.arg0;
    s.tmp_4.arg1 = "prototest";
    s.tmp_4.arg2 = 382158442;
    s.callLocIdx = 308; s.pc = 1; return s.tmp_4;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_ProtoTestHost_constructor__P468462.info = {"start":73,"length":73,"line":2,"column":8,"endLine":4,"endColumn":9,"fileName":"proto-test/host.ts","functionName":"inline","argumentNames":["this"]}

function jacdac_ProtoTestHost_constructor__P468462_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_ProtoTestHost_constructor__P468462, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }





function jacdac_RoleManagerHost_constructor__P468418(s) {
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
    if (!checkSubtype(r0, jacdac_RoleManagerHost__C468417_VT)) failedCast(r0);
    r0 = (s.arg0).fields["_statusCode"] = (0);
    s.tmp_0 = jacdac_Host_constructor__P468120_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = "rolemgr";
    s.tmp_0.arg2 = 295451345;
    s.callLocIdx = 279; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_RoleManagerHost_constructor__P468418.info = {"start":2074,"length":72,"line":67,"column":8,"endLine":69,"endColumn":9,"fileName":"role-manager-host/host.ts","functionName":"inline","argumentNames":["this"]}

function jacdac_RoleManagerHost_constructor__P468418_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_RoleManagerHost_constructor__P468418, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_Host_start__P468121(s) {
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
    if (!checkSubtype(r0, jacdac_Host__C468110_VT)) failedCast(r0);
    r0 = s.arg0.fields["running"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = (s.arg0).fields["running"] = (true);
    s.tmp_0 = jacdac_start__P468182_mk(s);
    s.callLocIdx = 37; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__length(globals.hostServices___468706);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["serviceNumber"] = (s.tmp_1);
    r0 = pxsim_Array__push(globals.hostServices___468706, s.arg0);
    s.tmp_0 = jacdac_Host__C468110_v2_2_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = "start";
    if (!checkSubtype(s.tmp_0.arg0, jacdac_Host__C468110_VT)) failedCast(s.tmp_0.arg0);
    s.tmp_0.fn = s.tmp_0.arg0.vtable.methods.log;
    s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Host_start__P468121.info = {"start":6236,"length":252,"line":193,"column":8,"endLine":201,"endColumn":9,"fileName":"routing.ts","functionName":"start","argumentNames":["this"]}

function jacdac_Host_start__P468121_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Host_start__P468121, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_Host_log__P468729(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.dev___469053 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Host__C468110_VT)) failedCast(r0);
    r0 = s.arg0.fields["supressLog"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = (globals.consolePriority___468079 < globals.minPriority___466712);
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 3; continue; }
    { step = 5; continue; }
  case 3:
  case 4:
    s.tmp_2 = jacdac_Device_toString__P468162_mk(s);
    s.tmp_3 = jacdac_selfDevice__P468176_mk(s);
    s.callLocIdx = 38; s.pc = 7; return s.tmp_3;
  case 7:
    r0 = s.retval;
    s.tmp_2.arg0 = r0;
    s.callLocIdx = 39; s.pc = 6; return s.tmp_2;
  case 6:
    r0 = s.retval;
    s.dev___469053 = (r0);
    s.tmp_0 = console_add__P466713_mk(s);
    s.tmp_0.arg0 = globals.consolePriority___468079;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_7 = r0;
    if ((s.dev___469053) && (s.dev___469053).vtable) {
    setupResume(s, 9);
    pxsim_String__stringConv(s.dev___469053);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.dev___469053) + ""; }
  case 9:
    r0 = s.retval;
    s.tmp_8 = r0;
    r0 = pxsim_String__concat(s.tmp_7, s.tmp_8);
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(s.tmp_6, ":");
    s.tmp_5 = r0;
    r0 = s.arg0.fields["serviceClass"];
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
    r0 = pxsim_String__concat(s.tmp_5, s.tmp_9);
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, ">");
    s.tmp_3 = r0;
    r0 = s.arg0.fields["name"];
    s.tmp_12 = r0;
    if ((s.tmp_12) && (s.tmp_12).vtable) {
    setupResume(s, 11);
    pxsim_String__stringConv(s.tmp_12);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_12) + ""; }
  case 11:
    r0 = s.retval;
    s.tmp_11 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_11);
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_2, ">");
    s.tmp_1 = r0;
    if ((s.arg1) && (s.arg1).vtable) {
    setupResume(s, 12);
    pxsim_String__stringConv(s.arg1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg1) + ""; }
  case 12:
    r0 = s.retval;
    s.tmp_13 = r0;
    r0 = pxsim_String__concat(s.tmp_1, s.tmp_13);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 40; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Host_log__P468729.info = {"start":6806,"length":290,"line":215,"column":8,"endLine":220,"endColumn":9,"fileName":"routing.ts","functionName":"log","argumentNames":["this","text"]}

function jacdac_Host_log__P468729_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Host_log__P468729, depth: s.depth + 1,
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
  dev___469053: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function settings_initScopes__P468592(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.rn___475535 = undefined;
    s.tmp_1 = settings_runNumber__P467935_mk(s);
    s.callLocIdx = 80; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 1);
    s.rn___475535 = (r0);
    s.tmp_0 = settings_writeNumber__P467939_mk(s);
    s.tmp_0.arg0 = globals.RUN_KEY___468580;
    s.tmp_0.arg1 = s.rn___475535;
    s.callLocIdx = 81; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = pxsim.control.deviceSerialNumber();
    s.tmp_1 = r0;
    r0 = (s.tmp_1 & 2147483647);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.seedAddRandom(s.tmp_0);
    r0 = pxsim_pxtcore.seedAddRandom(s.rn___475535);
    s.tmp_0 = settings_setScope__P468591_mk(s);
    r0 = pxsim_pxtcore.programName();
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 82; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_initScopes__P468592.info = {"start":1104,"length":230,"line":41,"column":4,"endLine":49,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"initScopes","argumentNames":[]}

function settings_initScopes__P468592_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_initScopes__P468592, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  rn___475535: undefined,
} }





function settings_setScope__P468591(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.currScope___475564 = undefined;
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
    s.tmp_0 = settings_readString__P467942_mk(s);
    s.tmp_0.arg0 = globals.SCOPE_KEY___468581;
    s.callLocIdx = 78; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    s.currScope___475564 = (r0);
    r0 = (s.currScope___475564 != s.arg0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = pxsim.settings._userClean();
    s.tmp_0 = settings_writeString__P467938_mk(s);
    s.tmp_0.arg0 = globals.SCOPE_KEY___468581;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 79; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
  case 5:
  case 6:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_setScope__P468591.info = {"start":826,"length":272,"line":31,"column":4,"endLine":39,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"setScope","argumentNames":["scope"]}

function settings_setScope__P468591_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_setScope__P468591, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  currScope___475564: undefined,
  arg0: undefined,
} }





function settings_writeString__P467938(s) {
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
    s.tmp_0 = settings_writeBuffer__P467937_mk(s);
    s.tmp_0.arg0 = s.arg0;
    r0 = pxsim.control.createBufferFromUTF8(s.arg1);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 84; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_writeString__P467938.info = {"start":1895,"length":125,"line":75,"column":4,"endLine":77,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"writeString","argumentNames":["key","value"]}

function settings_writeString__P467938_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_writeString__P467938, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function settings_writeBuffer__P467937(s) {
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
settings_writeBuffer__P467937.info = {"start":1538,"length":290,"line":63,"column":4,"endLine":70,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"writeBuffer","argumentNames":["key","value"]}

function settings_writeBuffer__P467937_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_writeBuffer__P467937, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function settings_writeNumber__P467939(s) {
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
    s.tmp_1 = settings_writeBuffer__P467937_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_2 = msgpack_packNumberArray__P466525_mk(s);
    s.tmp_2.arg0 = s.tmp_0;
    s.callLocIdx = 85; s.pc = 2; return s.tmp_2;
  case 2:
    r0 = s.retval;
    s.tmp_1.arg1 = r0;
    s.callLocIdx = 86; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_writeNumber__P467939.info = {"start":2087,"length":122,"line":82,"column":4,"endLine":84,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"writeNumber","argumentNames":["key","value"]}

function settings_writeNumber__P467939_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_writeNumber__P467939, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function msgpack_packNumberArray__P466525(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.off___475585 = undefined;
    s.n___475587 = undefined;
    s.unnamed4208___U2 = undefined;
    s.unnamed4209___U3 = undefined;
    s.buf___475597 = undefined;
    s.n___475603 = undefined;
    s.unnamed4210___U6 = undefined;
    s.unnamed4211___U7 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.off___475585 = (0);
    s.n___475587 = (undefined);
    s.unnamed4208___U2 = (s.arg0);
    s.unnamed4209___U3 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed4209___U3;
    r0 = pxsim_Array__length(s.unnamed4208___U2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4208___U2, s.unnamed4209___U3);
    s.n___475587 = (r0);
    s.tmp_2 = r0 = s.off___475585;
    s.tmp_4 = msgpack_packNumberCore__P468495_mk(s);
    s.tmp_4.arg0 = null;
    s.tmp_4.arg1 = s.off___475585;
    s.tmp_4.arg2 = s.n___475587;
    s.callLocIdx = 22; s.pc = 5; return s.tmp_4;
  case 5:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (s.tmp_2 + s.tmp_3);
    s.off___475585 = (r0);
    r0 = (s.unnamed4209___U3 + 1);
    s.unnamed4209___U3 = (r0);
    { step = 1; continue; }
  case 2:
    s.unnamed4208___U2 = (undefined);
    r0 = pxsim.control.createBuffer(s.off___475585);
    s.buf___475597 = (r0);
    s.off___475585 = (0);
    s.n___475603 = (undefined);
    s.unnamed4210___U6 = (s.arg0);
    s.unnamed4211___U7 = (0);
  case 3:
    s.tmp_0 = r0 = s.unnamed4211___U7;
    r0 = pxsim_Array__length(s.unnamed4210___U6);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4210___U6, s.unnamed4211___U7);
    s.n___475603 = (r0);
    s.tmp_2 = r0 = s.off___475585;
    s.tmp_4 = msgpack_packNumberCore__P468495_mk(s);
    s.tmp_4.arg0 = s.buf___475597;
    s.tmp_4.arg1 = s.off___475585;
    s.tmp_4.arg2 = s.n___475603;
    s.callLocIdx = 23; s.pc = 6; return s.tmp_4;
  case 6:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (s.tmp_2 + s.tmp_3);
    s.off___475585 = (r0);
    r0 = (s.unnamed4211___U7 + 1);
    s.unnamed4211___U7 = (r0);
    { step = 3; continue; }
  case 4:
    s.unnamed4210___U6 = (undefined);
    r0 = s.buf___475597;
    return leave(s, r0)
  default: oops()
} } }
msgpack_packNumberArray__P466525.info = {"start":3427,"length":330,"line":117,"column":4,"endLine":128,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"packNumberArray","argumentNames":["nums"]}

function msgpack_packNumberArray__P466525_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_packNumberArray__P466525, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  off___475585: undefined,
  n___475587: undefined,
  unnamed4208___U2: undefined,
  unnamed4209___U3: undefined,
  buf___475597: undefined,
  n___475603: undefined,
  unnamed4210___U6: undefined,
  unnamed4211___U7: undefined,
  arg0: undefined,
} }





function msgpack_packNumberCore__P468495(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tag___475617 = undefined;
    s.fmt___475660 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    s.tag___475617 = (203);
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
    s.tag___475617 = (204);
    { step = 11; continue; }
  case 8:
    r0 = (s.arg2 <= 65535);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    s.tag___475617 = (205);
    { step = 10; continue; }
  case 9:
    s.tag___475617 = (206);
  case 10:
  case 11:
    { step = 17; continue; }
  case 12:
    r0 = (-127 <= s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    s.tag___475617 = (208);
    { step = 16; continue; }
  case 13:
    r0 = (-32767 <= s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    s.tag___475617 = (209);
    { step = 15; continue; }
  case 14:
    s.tag___475617 = (210);
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
    s.tmp_0 = msgpack_tagFormat__P468494_mk(s);
    s.tmp_0.arg0 = s.tag___475617;
    s.callLocIdx = 18; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.fmt___475660 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    if (!r0) { step = 21; continue; }
    r0 = pxsim.BufferMethods.setByte(s.arg0, s.arg1, s.tag___475617);
    s.tmp_0 = r0 = s.arg0;
    s.tmp_1 = r0 = s.fmt___475660;
    r0 = (s.arg1 + 1);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, s.tmp_1, s.tmp_2, s.arg2);
  case 21:
  case 22:
    s.tmp_1 = pins_sizeOf__P466516_mk(s);
    s.tmp_1.arg0 = s.fmt___475660;
    s.callLocIdx = 19; s.pc = 25; return s.tmp_1;
  case 25:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 1);
  case 23:
    return leave(s, r0)
  default: oops()
} } }
msgpack_packNumberCore__P468495.info = {"start":1632,"length":951,"line":56,"column":4,"endLine":86,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"packNumberCore","argumentNames":["buf","offset","num"]}

function msgpack_packNumberCore__P468495_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_packNumberCore__P468495, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tag___475617: undefined,
  fmt___475660: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function msgpack_tagFormat__P468494(s) {
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
msgpack_tagFormat__P468494.info = {"start":1145,"length":481,"line":42,"column":4,"endLine":54,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"tagFormat","argumentNames":["tag"]}

function msgpack_tagFormat__P468494_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_tagFormat__P468494, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function pins_sizeOf__P466516(s) {
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
    s.tmp_0 = Buffer_sizeOfNumberFormat__P466552_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 16; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
pins_sizeOf__P466516.info = {"start":42,"length":101,"line":2,"column":4,"endLine":4,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"sizeOf","argumentNames":["format"]}

function pins_sizeOf__P466516_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pins_sizeOf__P466516, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function settings_runNumber__P467935(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_1 = settings_readNumber__P467943_mk(s);
    s.tmp_1.arg0 = globals.RUN_KEY___468580;
    s.callLocIdx = 77; s.pc = 3; return s.tmp_1;
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
settings_runNumber__P467935.info = {"start":745,"length":75,"line":27,"column":4,"endLine":29,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"runNumber","argumentNames":[]}

function settings_runNumber__P467935_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_runNumber__P467935, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
} }





function settings_readNumber__P467943(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___475700 = undefined;
    s.nums___475707 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._get(s.arg0);
    s.buf___475700 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.buf___475700);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = undefined;
    { step = 7; continue; }
    { step = 6; continue; }
  case 1:
    s.tmp_2 = msgpack_unpackNumberArray__P466524_mk(s);
    s.tmp_2.arg0 = s.buf___475700;
    s.tmp_2.arg1 = 0;
    s.callLocIdx = 89; s.pc = 8; return s.tmp_2;
  case 8:
    r0 = s.retval;
    s.nums___475707 = (r0);
    s.tmp_0 = r0 = s.nums___475707;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = pxsim_Array__length(s.nums___475707);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >= 1);
  case 3:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.nums___475707, 0);
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
settings_readNumber__P467943.info = {"start":2887,"length":313,"line":114,"column":4,"endLine":124,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"readNumber","argumentNames":["key"]}

function settings_readNumber__P467943_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_readNumber__P467943, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  buf___475700: undefined,
  nums___475707: undefined,
  arg0: undefined,
} }





function msgpack_unpackNumberArray__P466524(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___475720 = undefined;
    s.fmt___475727 = undefined;
    s.v___475736 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___475720 = (r0);
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
    s.tmp_4 = msgpack_tagFormat__P468494_mk(s);
    r0 = pxsim.BufferMethods.getByte(s.arg0, s.tmp_3);
    s.tmp_4.arg0 = r0;
    s.callLocIdx = 20; s.pc = 12; return s.tmp_4;
  case 12:
    r0 = s.retval;
    s.fmt___475727 = (r0);
    r0 = (s.fmt___475727 === null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_1 = r0 = s.arg0;
    r0 = (s.arg1 - 1);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 6, s.tmp_2);
    s.v___475736 = (r0);
    r0 = (-31 <= s.v___475736);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = (s.v___475736 <= 127);
  case 3:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__push(s.res___475720, s.v___475736);
    { step = 5; continue; }
  case 4:
    r0 = null;
    { step = 11; continue; }
  case 5:
    { step = 7; continue; }
  case 6:
    s.tmp_0 = r0 = s.res___475720;
    r0 = pxsim.BufferMethods.getNumber(s.arg0, s.fmt___475727, s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    s.tmp_0 = r0 = s.arg1;
    s.tmp_2 = pins_sizeOf__P466516_mk(s);
    s.tmp_2.arg0 = s.fmt___475727;
    s.callLocIdx = 21; s.pc = 13; return s.tmp_2;
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
    r0 = s.res___475720;
  case 11:
    return leave(s, r0)
  default: oops()
} } }
msgpack_unpackNumberArray__P466524.info = {"start":2650,"length":669,"line":91,"column":4,"endLine":111,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"unpackNumberArray","argumentNames":["buf","offset"]}

function msgpack_unpackNumberArray__P466524_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_unpackNumberArray__P466524, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  res___475720: undefined,
  fmt___475727: undefined,
  v___475736: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_RoleManagerHost_handlePacket__P468419(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.name___473092 = undefined;
    s.namedClients___473148 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_RoleManagerHost__C468417_VT)) failedCast(r0);
    r0 = s.arg1.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 4, 14);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.switch_eq(128, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(129, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq(130, s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim_pxtcore.switch_eq(131, s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = pxsim_pxtcore.switch_eq(132, s.tmp_0);
    if (r0) { step = 11; continue; }
    r0 = s.tmp_0;
    { step = 12; continue; }
  case 1:
    r0 = s.arg1.fields["_data"];
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_4);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == 8);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 4; continue; }
    if ((globals.devNameSettingPrefix___468107) && (globals.devNameSettingPrefix___468107).vtable) {
    setupResume(s, 13);
    pxsim_String__stringConv(globals.devNameSettingPrefix___468107);
    checkResumeConsumed();
    return;
    } else { s.retval = (globals.devNameSettingPrefix___468107) + ""; }
  case 13:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = s.arg1.fields["_data"];
    s.tmp_9 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_9);
    s.tmp_8 = r0;
    if ((s.tmp_8) && (s.tmp_8).vtable) {
    setupResume(s, 14);
    pxsim_String__stringConv(s.tmp_8);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_8) + ""; }
  case 14:
    r0 = s.retval;
    s.tmp_7 = r0;
    r0 = pxsim_String__concat(s.tmp_6, s.tmp_7);
    s.tmp_5 = r0;
    r0 = pxsim.settings._get(s.tmp_5);
    s.name___473092 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.name___473092);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = pxsim.control.createBuffer(0);
    s.name___473092 = (r0);
  case 2:
  case 3:
    s.tmp_0 = jacdac_Host_sendReport__P468721_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_1 = jacdac_JDPacket_from__P468209_mk(s);
    s.tmp_1.arg0 = 128;
    s.tmp_2 = helpers_bufferConcat__P466527_mk(s);
    r0 = s.arg1.fields["_data"];
    s.tmp_2.arg0 = r0;
    s.tmp_2.arg1 = s.name___473092;
    s.callLocIdx = 285; s.pc = 17; return s.tmp_2;
  case 17:
    r0 = s.retval;
    s.tmp_1.arg1 = r0;
    s.callLocIdx = 286; s.pc = 16; return s.tmp_1;
  case 16:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 287; s.pc = 15; return s.tmp_0;
  case 15:
    r0 = s.retval;
  case 4:
  case 5:
    { step = 12; continue; }
  case 6:
    r0 = s.arg1.fields["_data"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.length(s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >= 8);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    s.tmp_3 = jacdac_setDevName__P473056_mk(s);
    r0 = s.arg1.fields["_data"];
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_5, 0, 8);
    s.tmp_4 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_4);
    s.tmp_3.arg0 = r0;
    r0 = s.arg1.fields["_data"];
    s.tmp_7 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_7, 8, -1);
    s.tmp_6 = r0;
    r0 = pxsim.BufferMethods.toString(s.tmp_6);
    s.tmp_3.arg1 = r0;
    s.callLocIdx = 291; s.pc = 18; return s.tmp_3;
  case 18:
    r0 = s.retval;
    s.tmp_0 = jacdac_Host_sendChangeEvent__P468723_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 292; s.pc = 19; return s.tmp_0;
  case 19:
    r0 = s.retval;
  case 7:
  case 8:
    { step = 12; continue; }
  case 9:
    s.tmp_0 = jacdac_OutPipe_respondForEach__P468276_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.tmp_1 = settings_list__P467945_mk(s);
    s.tmp_1.arg0 = globals.devNameSettingPrefix___468107;
    s.callLocIdx = 293; s.pc = 21; return s.tmp_1;
  case 21:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.tmp_0.arg2 = inline__P473137;
    s.callLocIdx = 298; s.pc = 20; return s.tmp_0;
  case 20:
    r0 = s.retval;
    { step = 12; continue; }
  case 10:
    s.tmp_0 = helpers_arrayFilter__P466454_mk(s);
    s.tmp_0.arg0 = globals._allClients___468109;
    s.tmp_0.arg1 = inline__P473150;
    s.callLocIdx = 299; s.pc = 22; return s.tmp_0;
  case 22:
    r0 = s.retval;
    s.namedClients___473148 = (r0);
    s.tmp_0 = jacdac_OutPipe_respondForEach__P468276_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.tmp_0.arg1 = s.namedClients___473148;
    s.tmp_0.arg2 = packName__P473162;
    s.callLocIdx = 300; s.pc = 23; return s.tmp_0;
  case 23:
    r0 = s.retval;
    { step = 12; continue; }
  case 11:
    s.tmp_0 = jacdac_clearAllNames__P468416_mk(s);
    s.callLocIdx = 301; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.tmp_0 = jacdac_Host_sendChangeEvent__P468723_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 302; s.pc = 25; return s.tmp_0;
  case 25:
    r0 = s.retval;
  case 12:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_RoleManagerHost_handlePacket__P468419.info = {"start":2156,"length":1865,"line":71,"column":8,"endLine":107,"endColumn":9,"fileName":"role-manager-host/host.ts","functionName":"handlePacket","argumentNames":["this","packet"]}

function jacdac_RoleManagerHost_handlePacket__P468419_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_RoleManagerHost_handlePacket__P468419, depth: s.depth + 1,
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
  name___473092: undefined,
  namedClients___473148: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function inline__P473137(s) {
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
    s.tmp_0 = helpers_bufferConcat__P466527_mk(s);
    s.tmp_1 = Buffer_fromHex__P466544_mk(s);
    s.tmp_2 = helpers_stringSlice__P466463_mk(s);
    s.tmp_2.arg0 = s.arg0;
    r0 = pxsim_String_.length(globals.devNameSettingPrefix___468107);
    s.tmp_2.arg1 = r0;
    s.tmp_2.arg2 = undefined;
    s.callLocIdx = 294; s.pc = 3; return s.tmp_2;
  case 3:
    r0 = s.retval;
    s.tmp_1.arg0 = r0;
    s.callLocIdx = 295; s.pc = 2; return s.tmp_1;
  case 2:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    r0 = pxsim.settings._get(s.arg0);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 297; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
inline__P473137.info = {"start":3083,"length":141,"line":87,"column":88,"endLine":89,"endColumn":59,"fileName":"role-manager-host/host.ts","functionName":"inline","argumentNames":["k"]}

function inline__P473137_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P473137, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }





function inline__P473150(s) {
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
    r0 = s.arg0.fields["requiredDeviceName"];
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_0);
    return leave(s, r0)
  default: oops()
} } }
inline__P473150.info = {"start":3367,"length":27,"line":92,"column":60,"endLine":92,"endColumn":87,"fileName":"role-manager-host/host.ts","functionName":"inline","argumentNames":["c"]}

function inline__P473150_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P473150, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }





function packName__P473162(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.devid___473166 = undefined;
    s.name___473176 = undefined;
    s.devdesc___473181 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["device"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = Buffer_fromHex__P466544_mk(s);
    r0 = s.arg0.fields["device"];
    r0 = r0.fields["deviceId"];
    s.tmp_1.arg0 = r0;
    s.callLocIdx = 303; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    { step = 2; continue; }
  case 1:
    r0 = pxsim.control.createBuffer(8);
  case 2:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    s.devid___473166 = (s.tmp_2);
    r0 = s.arg0.fields["requiredDeviceName"];
    s.tmp_0 = r0;
    r0 = pxsim.control.createBufferFromUTF8(s.tmp_0);
    s.name___473176 = (r0);
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = s.arg0.fields["serviceClass"];
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    s.tmp_2 = Buffer_pack__P466550_mk(s);
    s.tmp_2.arg0 = "I";
    s.tmp_2.arg1 = s.tmp_0;
    s.callLocIdx = 304; s.pc = 4; return s.tmp_2;
  case 4:
    r0 = s.retval;
    s.devdesc___473181 = (r0);
    s.tmp_0 = helpers_bufferConcat__P466527_mk(s);
    s.tmp_1 = helpers_bufferConcat__P466527_mk(s);
    s.tmp_1.arg0 = s.devid___473166;
    s.tmp_1.arg1 = s.devdesc___473181;
    s.callLocIdx = 305; s.pc = 6; return s.tmp_1;
  case 6:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = s.name___473176;
    s.callLocIdx = 306; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
packName__P473162.info = {"start":3681,"length":330,"line":101,"column":12,"endLine":106,"endColumn":13,"fileName":"role-manager-host/host.ts","functionName":"packName","argumentNames":["c"]}

function packName__P473162_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: packName__P473162, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  devid___473166: undefined,
  name___473176: undefined,
  devdesc___473181: undefined,
  arg0: undefined,
} }





function jacdac_clearAllNames__P468416(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_0 = helpers_arrayForEach__P466453_mk(s);
    s.tmp_1 = settings_list__P467945_mk(s);
    s.tmp_1.arg0 = globals.devNameSettingPrefix___468107;
    s.callLocIdx = 274; s.pc = 2; return s.tmp_1;
  case 2:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = settings_remove__P467946;
    s.callLocIdx = 275; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_clearAllNames__P468416.info = {"start":1645,"length":108,"line":53,"column":4,"endLine":55,"endColumn":5,"fileName":"role-manager-host/host.ts","functionName":"clearAllNames","argumentNames":[]}

function jacdac_clearAllNames__P468416_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_clearAllNames__P468416, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }





function settings_remove__P467946(s) {
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
settings_remove__P467946.info = {"start":3702,"length":64,"line":148,"column":4,"endLine":150,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"remove","argumentNames":["key"]}

function settings_remove__P467946_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_remove__P467946, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function settings_list__P467945(s) {
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
settings_list__P467945.info = {"start":3544,"length":107,"line":140,"column":4,"endLine":143,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"list","argumentNames":["prefix"]}

function settings_list__P467945_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_list__P467945, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_OutPipe_respondForEach__P468276(s) {
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
    r0 = pxsim_pxtcore_mkAction(3, inline__P472146);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg0);
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 1, s.arg1);
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 2, s.arg2);
    r0 = pxsim.control.runInParallel(s.tmp_0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_OutPipe_respondForEach__P468276.info = {"start":3066,"length":433,"line":111,"column":8,"endLine":122,"endColumn":9,"fileName":"pipes.ts","functionName":"respondForEach","argumentNames":["pkt","inp","f"]}

function jacdac_OutPipe_respondForEach__P468276_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_OutPipe_respondForEach__P468276, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function inline__P472146(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.outp___472148 = undefined;
    s.e___472153 = undefined;
    s.unnamed4404___U2 = undefined;
    s.unnamed4405___U3 = undefined;
    s.e___472161 = undefined;
    r0 = pxsim_pxtcore.beginTry(3);
    s.tmp_0 = jacdac_OutPipe_from__P468275_mk(s);
    s.tmp_0.arg0 = s.caps[0];
    s.callLocIdx = 254; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    s.outp___472148 = (r0);
    s.e___472153 = (undefined);
    s.unnamed4404___U2 = (s.caps[1]);
    s.unnamed4405___U3 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed4405___U3;
    r0 = pxsim_Array__length(s.unnamed4404___U2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4404___U2, s.unnamed4405___U3);
    s.e___472153 = (r0);
    s.tmp_2 = jacdac_OutPipe_write__P468278_mk(s);
    s.tmp_2.arg0 = s.outp___472148;
    s.tmp_3 = lambda_2_mk(s);
    s.tmp_3.argL = s.caps[2];
    s.tmp_3.arg0 = s.e___472153;
    setupLambda(s.tmp_3, s.tmp_3.argL);
    s.callLocIdx = 255; s.pc = 7; return s.tmp_3;
  case 7:
    r0 = s.retval;
    s.tmp_2.arg1 = r0;
    s.callLocIdx = 256; s.pc = 6; return s.tmp_2;
  case 6:
    r0 = s.retval;
    r0 = (s.unnamed4405___U3 + 1);
    s.unnamed4405___U3 = (r0);
    { step = 1; continue; }
  case 2:
    s.unnamed4404___U2 = (undefined);
    s.tmp_0 = jacdac_OutPipe_close__P468280_mk(s);
    s.tmp_0.arg0 = s.outp___472148;
    s.callLocIdx = 257; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    r0 = pxsim_pxtcore.endTry();
    { step = 4; continue; }
  case 3:
    r0 = pxsim_pxtcore.getThrownValue();
    s.e___472161 = (r0);
    s.tmp_0 = console_logValue__P466718_mk(s);
    s.tmp_0.arg0 = "respondForEach";
    s.tmp_0.arg1 = s.e___472161;
    s.callLocIdx = 258; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P472146.info = {"start":3173,"length":315,"line":112,"column":34,"endLine":121,"endColumn":13,"fileName":"pipes.ts","functionName":"inline","argumentNames":[]}

function inline__P472146_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P472146, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  outp___472148: undefined,
  e___472153: undefined,
  unnamed4404___U2: undefined,
  unnamed4405___U3: undefined,
  e___472161: undefined,
} }





function console_logValue__P466718(s) {
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
    s.tmp_5 = console_inspect__P466719_mk(s);
    s.tmp_5.arg0 = s.arg0;
    s.tmp_5.arg1 = 20;
    s.callLocIdx = 54; s.pc = 3; return s.tmp_5;
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
    s.tmp_8 = console_inspect__P466719_mk(s);
    s.tmp_8.arg0 = s.arg1;
    s.tmp_8.arg1 = 20;
    s.callLocIdx = 55; s.pc = 5; return s.tmp_8;
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
    s.tmp_12 = console_inspect__P466719_mk(s);
    s.tmp_12.arg0 = s.arg1;
    s.tmp_12.arg1 = 20;
    s.callLocIdx = 56; s.pc = 7; return s.tmp_12;
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
    s.tmp_14 = console_log__P466717_mk(s);
    s.tmp_14.arg0 = s.tmp_13;
    s.callLocIdx = 57; s.pc = 9; return s.tmp_14;
  case 9:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
console_logValue__P466718.info = {"start":1905,"length":141,"line":72,"column":4,"endLine":74,"endColumn":5,"fileName":"pxt_modules/base/console.ts","functionName":"logValue","argumentNames":["name","value"]}

function console_logValue__P466718_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_logValue__P466718, depth: s.depth + 1,
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





function jacdac_OutPipe_close__P468280(s) {
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
    if (!checkSubtype(r0, jacdac_OutPipe__C468273_VT)) failedCast(r0);
    s.tmp_0 = jacdac_OutPipe_writeAndClose__P468279_mk(s);
    s.tmp_0.arg0 = s.arg0;
    r0 = pxsim.control.createBuffer(0);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 264; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_OutPipe_close__P468280.info = {"start":4236,"length":68,"line":149,"column":8,"endLine":151,"endColumn":9,"fileName":"pipes.ts","functionName":"close","argumentNames":["this"]}

function jacdac_OutPipe_close__P468280_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_OutPipe_close__P468280, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_OutPipe_writeAndClose__P468279(s) {
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
    if (!checkSubtype(r0, jacdac_OutPipe__C468273_VT)) failedCast(r0);
    s.tmp_0 = jacdac_OutPipe_writeEx__P472119_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = 32;
    s.callLocIdx = 263; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_OutPipe_writeAndClose__P468279.info = {"start":4146,"length":80,"line":145,"column":8,"endLine":147,"endColumn":9,"fileName":"pipes.ts","functionName":"writeAndClose","argumentNames":["this","buf"]}

function jacdac_OutPipe_writeAndClose__P468279_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_OutPipe_writeAndClose__P468279, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_OutPipe_writeEx__P472119(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.pkt___472175 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_OutPipe__C468273_VT)) failedCast(r0);
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
    s.tmp_3 = jacdac_JDPacket_from__P468209_mk(s);
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
    s.callLocIdx = 259; s.pc = 8; return s.tmp_3;
  case 8:
    r0 = s.retval;
    s.pkt___472175 = (r0);
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
    s.tmp_0 = jacdac_JDPacket_service_number__P468222_mk(s);
    s.tmp_0.arg0 = s.pkt___472175;
    s.tmp_0.arg1 = 62;
    s.callLocIdx = 260; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    s.tmp_3 = jacdac_JDPacket__sendWithAck__P468247_mk(s);
    s.tmp_3.arg0 = s.pkt___472175;
    r0 = s.arg0.fields["deviceId"];
    s.tmp_3.arg1 = r0;
    s.callLocIdx = 261; s.pc = 10; return s.tmp_3;
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
    r0 = pxsim_pxtcore.throwValue("No ACK (pipe)");
  case 5:
  case 6:
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_OutPipe_writeEx__P472119.info = {"start":3574,"length":489,"line":128,"column":8,"endLine":139,"endColumn":9,"fileName":"pipes.ts","functionName":"writeEx","argumentNames":["this","buf","flags"]}

function jacdac_OutPipe_writeEx__P472119_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_OutPipe_writeEx__P472119, depth: s.depth + 1,
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
  pkt___472175: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_JDPacket__sendWithAck__P468247(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.aw___471065 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
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
    s.tmp_2 = jacdac_JDPacket_requires_ack__P468220_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = true;
    s.callLocIdx = 208; s.pc = 8; return s.tmp_2;
  case 8:
    r0 = s.retval;
    s.tmp_0 = jacdac_JDPacket__sendCmdId__P468245_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.callLocIdx = 209; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    r0 = pxsim_numops_toBoolDecr(globals.ackAwaiters___470580);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = pxsim_Array__mk();
    globals.ackAwaiters___470580 = (r0);
    r0 = pxsim.control.runInParallel(inline__P471058);
  case 3:
  case 4:
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_AckAwaiter__C471068_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_AckAwaiter_constructor__P471069_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg0;
    s.tmp_1.arg2 = s.arg1;
    s.callLocIdx = 212; s.pc = 10; return s.tmp_1;
  case 10:
    r0 = s.retval;
    s.aw___471065 = (s.tmp_0);
    r0 = pxsim_Array__push(globals.ackAwaiters___470580, s.aw___471065);
  case 5:
    r0 = s.aw___471065.fields["nextRetry"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    r0 = s.aw___471065.fields["eventId"];
    s.tmp_2 = r0;
    setupResume(s, 11);
    pxsim.control.waitForEvent(1023, s.tmp_2);
    checkResumeConsumed();
    return;
  case 11:
    r0 = s.retval;
    { step = 5; continue; }
  case 6:
    r0 = s.aw___471065.fields["nextRetry"];
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == 0);
  case 7:
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket__sendWithAck__P468247.info = {"start":7768,"length":692,"line":247,"column":8,"endLine":268,"endColumn":9,"fileName":"packet.ts","functionName":"_sendWithAck","argumentNames":["this","devId"]}

function jacdac_JDPacket__sendWithAck__P468247_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket__sendWithAck__P468247, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  aw___471065: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function inline__P471058(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

  case 1:
    r0 = pxsim_numops_toBoolDecr(1);
    if (!r0) { step = 2; continue; }
    s.tmp_0 = pause__P466750_mk(s);
    r0 = pxsim.Math_.randomRange(20, 50);
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 210; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.tmp_0 = jacdac_checkAckAwaiters__P471064_mk(s);
    s.callLocIdx = 211; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    { step = 1; continue; }
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P471058.info = {"start":8027,"length":178,"line":255,"column":38,"endLine":260,"endColumn":17,"fileName":"packet.ts","functionName":"inline","argumentNames":[]}

function inline__P471058_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P471058, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function jacdac_AckAwaiter_constructor__P471069(s) {
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
    if (!checkSubtype(r0, jacdac_AckAwaiter__C471068_VT)) failedCast(r0);
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
jacdac_AckAwaiter_constructor__P471069.info = {"start":8590,"length":240,"line":276,"column":8,"endLine":283,"endColumn":9,"fileName":"packet.ts","functionName":"inline","argumentNames":["this","pkt","srcId"]}

function jacdac_AckAwaiter_constructor__P471069_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_AckAwaiter_constructor__P471069, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_checkAckAwaiters__P471064(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.now___471108 = undefined;
    s.toRetry___471111 = undefined;
    s.a___471125 = undefined;
    s.unnamed4396___U3 = undefined;
    s.unnamed4397___U4 = undefined;
    r0 = pxsim.control.millis();
    s.now___471108 = (r0);
    r0 = pxsim_pxtcore_mkAction(1, inline__P471113);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.now___471108);
    s.tmp_1 = helpers_arrayFilter__P466454_mk(s);
    s.tmp_1.arg0 = globals.ackAwaiters___470580;
    s.tmp_1.arg1 = s.tmp_0;
    s.callLocIdx = 214; s.pc = 11; return s.tmp_1;
  case 11:
    r0 = s.retval;
    s.toRetry___471111 = (r0);
    r0 = pxsim_Array__length(s.toRetry___471111);
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
    s.a___471125 = (undefined);
    s.unnamed4396___U3 = (s.toRetry___471111);
    s.unnamed4397___U4 = (0);
  case 3:
    s.tmp_0 = r0 = s.unnamed4397___U4;
    r0 = pxsim_Array__length(s.unnamed4396___U3);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 9; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4396___U3, s.unnamed4397___U4);
    s.a___471125 = (r0);
    r0 = s.a___471125.fields["nextRetry"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == 0);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 4; continue; }
    { step = 8; continue; }
  case 4:
  case 5:
    r0 = s.a___471125.fields["numTries"];
    s.tmp_5 = r0;
    r0 = (s.tmp_5 >= 4);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 6; continue; }
    r0 = (s.a___471125).fields["nextRetry"] = (-1);
    r0 = s.a___471125.fields["eventId"];
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(1023, s.tmp_0);
    { step = 7; continue; }
  case 6:
    s.tmp_0 = r0 = s.a___471125;
    r0 = s.tmp_0.fields["numTries"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + 1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["numTries"] = (s.tmp_1);
    s.tmp_0 = r0 = s.a___471125;
    s.tmp_2 = r0 = s.now___471108;
    r0 = s.a___471125.fields["numTries"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 * 40);
    s.tmp_3 = r0;
    r0 = (s.tmp_2 + s.tmp_3);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["nextRetry"] = (s.tmp_1);
    s.tmp_0 = jacdac_JDPacket__sendCore__P468242_mk(s);
    r0 = s.a___471125.fields["pkt"];
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 215; s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
  case 7:
  case 8:
    r0 = (s.unnamed4397___U4 + 1);
    s.unnamed4397___U4 = (r0);
    { step = 3; continue; }
  case 9:
    s.unnamed4396___U3 = (undefined);
    s.tmp_0 = helpers_arrayFilter__P466454_mk(s);
    s.tmp_0.arg0 = globals.ackAwaiters___470580;
    s.tmp_0.arg1 = inline__P471159;
    s.callLocIdx = 216; s.pc = 13; return s.tmp_0;
  case 13:
    r0 = s.retval;
    globals.ackAwaiters___470580 = (r0);
  case 10:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_checkAckAwaiters__P471064.info = {"start":8842,"length":667,"line":286,"column":4,"endLine":304,"endColumn":5,"fileName":"packet.ts","functionName":"checkAckAwaiters","argumentNames":[]}

function jacdac_checkAckAwaiters__P471064_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_checkAckAwaiters__P471064, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  now___471108: undefined,
  toRetry___471111: undefined,
  a___471125: undefined,
  unnamed4396___U3: undefined,
  unnamed4397___U4: undefined,
} }





function inline__P471113(s) {
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
inline__P471113.info = {"start":8952,"length":22,"line":288,"column":43,"endLine":288,"endColumn":65,"fileName":"packet.ts","functionName":"inline","argumentNames":["a"]}

function inline__P471113_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P471113, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function inline__P471159(s) {
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
inline__P471159.info = {"start":9482,"length":20,"line":303,"column":41,"endLine":303,"endColumn":61,"fileName":"packet.ts","functionName":"inline","argumentNames":["a"]}

function inline__P471159_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P471159, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_OutPipe_write__P468278(s) {
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
    if (!checkSubtype(r0, jacdac_OutPipe__C468273_VT)) failedCast(r0);
    s.tmp_0 = jacdac_OutPipe_writeEx__P472119_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = 0;
    s.callLocIdx = 262; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_OutPipe_write__P468278.info = {"start":4073,"length":63,"line":141,"column":8,"endLine":143,"endColumn":9,"fileName":"pipes.ts","functionName":"write","argumentNames":["this","buf"]}

function jacdac_OutPipe_write__P468278_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_OutPipe_write__P468278, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_OutPipe_from__P468275(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.id___472125 = undefined;
    s.port___472136 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0.fields["_data"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_1, 0, 8);
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_0);
    s.id___472125 = (r0);
    s.tmp_1 = helpers_bufferUnpack__P466530_mk(s);
    r0 = s.arg0.fields["_data"];
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = "H";
    s.tmp_1.arg2 = 8;
    s.callLocIdx = 252; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_Array__getAt(s.tmp_0, 0);
    s.port___472136 = (r0);
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_OutPipe__C468273_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_OutPipe_constructor__P468274_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.id___472125;
    s.tmp_1.arg2 = s.port___472136;
    s.callLocIdx = 253; s.pc = 2; return s.tmp_1;
  case 2:
    r0 = s.retval;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
jacdac_OutPipe_from__P468275.info = {"start":2874,"length":182,"line":105,"column":8,"endLine":109,"endColumn":9,"fileName":"pipes.ts","functionName":"from","argumentNames":["pkt"]}

function jacdac_OutPipe_from__P468275_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_OutPipe_from__P468275, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  id___472125: undefined,
  port___472136: undefined,
  arg0: undefined,
} }





function jacdac_OutPipe_constructor__P468274(s) {
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
    if (!checkSubtype(r0, jacdac_OutPipe__C468273_VT)) failedCast(r0);
    r0 = (s.arg0).fields["deviceId"] = (s.arg1);
    r0 = (s.arg0).fields["port"] = (s.arg2);
    r0 = (s.arg0).fields["nextCnt"] = (0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_OutPipe_constructor__P468274.info = {"start":2803,"length":61,"line":103,"column":8,"endLine":103,"endColumn":69,"fileName":"pipes.ts","functionName":"inline","argumentNames":["this","deviceId","port"]}

function jacdac_OutPipe_constructor__P468274_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_OutPipe_constructor__P468274, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function helpers_bufferUnpack__P466530(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___474614 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.arg2 = (0);
  case 1:
  case 2:
    r0 = pxsim_Array__mk();
    s.res___474614 = (r0);
    s.tmp_0 = Buffer___packUnpackCore__P466551_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.tmp_0.arg1 = s.res___474614;
    s.tmp_0.arg2 = s.arg0;
    s.tmp_0.arg3 = false;
    s.tmp_0.arg4 = s.arg2;
    s.callLocIdx = 24; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = s.res___474614;
    return leave(s, r0)
  default: oops()
} } }
helpers_bufferUnpack__P466530.info = {"start":4698,"length":229,"line":165,"column":4,"endLine":170,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"bufferUnpack","argumentNames":["buf","format","offset"]}

function helpers_bufferUnpack__P466530_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_bufferUnpack__P466530, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  res___474614: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_Host_sendChangeEvent__P468723(s) {
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
    if (!checkSubtype(r0, jacdac_Host__C468110_VT)) failedCast(r0);
    s.tmp_0 = jacdac_Host_sendEvent__P468722_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = 2;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 18; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Host_sendChangeEvent__P468723.info = {"start":2357,"length":93,"line":85,"column":8,"endLine":87,"endColumn":9,"fileName":"routing.ts","functionName":"sendChangeEvent","argumentNames":["this"]}

function jacdac_Host_sendChangeEvent__P468723_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Host_sendChangeEvent__P468723, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_Host_sendEvent__P468722(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.payload___468790 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Host__C468110_VT)) failedCast(r0);
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    if (!r0) { step = 1; continue; }
    r0 = pxsim.BufferMethods.length(s.arg2);
    { step = 2; continue; }
  case 1:
    r0 = 0;
  case 2:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = (4 + s.tmp_0);
    s.tmp_1 = r0;
    r0 = pxsim.control.createBuffer(s.tmp_1);
    s.payload___468790 = (r0);
    r0 = pxsim.BufferMethods.setNumber(s.payload___468790, 11, 0, s.arg1);
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    if (!r0) { step = 3; continue; }
    r0 = pxsim.BufferMethods.write(s.payload___468790, 4, s.arg2);
  case 3:
  case 4:
    s.tmp_0 = jacdac_Host_sendReport__P468721_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_1 = jacdac_JDPacket_from__P468209_mk(s);
    s.tmp_1.arg0 = 1;
    s.tmp_1.arg1 = s.payload___468790;
    s.callLocIdx = 16; s.pc = 6; return s.tmp_1;
  case 6:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 17; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Host_sendEvent__P468722.info = {"start":2019,"length":328,"line":77,"column":8,"endLine":83,"endColumn":9,"fileName":"routing.ts","functionName":"sendEvent","argumentNames":["this","event","data"]}

function jacdac_Host_sendEvent__P468722_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Host_sendEvent__P468722, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  payload___468790: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function jacdac_setDevName__P473056(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.devid___473059 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    if ((globals.devNameSettingPrefix___468107) && (globals.devNameSettingPrefix___468107).vtable) {
    setupResume(s, 3);
    pxsim_String__stringConv(globals.devNameSettingPrefix___468107);
    checkResumeConsumed();
    return;
    } else { s.retval = (globals.devNameSettingPrefix___468107) + ""; }
  case 3:
    r0 = s.retval;
    s.tmp_0 = r0;
    if ((s.arg0) && (s.arg0).vtable) {
    setupResume(s, 4);
    pxsim_String__stringConv(s.arg0);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg0) + ""; }
  case 4:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_1);
    s.devid___473059 = (r0);
    r0 = pxsim_String_.length(s.arg1);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_2 = settings_remove__P467946_mk(s);
    s.tmp_2.arg0 = s.devid___473059;
    s.callLocIdx = 276; s.pc = 5; return s.tmp_2;
  case 5:
    r0 = s.retval;
    { step = 2; continue; }
  case 1:
    s.tmp_0 = settings_writeString__P467938_mk(s);
    s.tmp_0.arg0 = s.devid___473059;
    s.tmp_0.arg1 = s.arg1;
    s.callLocIdx = 277; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
  case 2:
    s.tmp_0 = jacdac_Device_clearNameCache__P468172_mk(s);
    s.callLocIdx = 278; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_setDevName__P473056.info = {"start":1759,"length":257,"line":57,"column":4,"endLine":64,"endColumn":5,"fileName":"role-manager-host/host.ts","functionName":"setDevName","argumentNames":["id","name"]}

function jacdac_setDevName__P473056_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_setDevName__P473056, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  devid___473059: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Device_clearNameCache__P468172(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.d___469848 = undefined;
    s.unnamed4376___U1 = undefined;
    s.unnamed4377___U2 = undefined;
    s.d___469848 = (undefined);
    s.unnamed4376___U1 = (globals.devices____468708);
    s.unnamed4377___U2 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed4377___U2;
    r0 = pxsim_Array__length(s.unnamed4376___U1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__getAt(s.unnamed4376___U1, s.unnamed4377___U2);
    s.d___469848 = (r0);
    r0 = (s.d___469848).fields["_name"] = (undefined);
    r0 = (s.unnamed4377___U2 + 1);
    s.unnamed4377___U2 = (r0);
    { step = 1; continue; }
  case 2:
    s.unnamed4376___U1 = (undefined);
    s.tmp_0 = jacdac_clearAttachCache__P469347_mk(s);
    s.callLocIdx = 78; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Device_clearNameCache__P468172.info = {"start":17658,"length":138,"line":552,"column":8,"endLine":556,"endColumn":9,"fileName":"routing.ts","functionName":"clearNameCache","argumentNames":[]}

function jacdac_Device_clearNameCache__P468172_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Device_clearNameCache__P468172, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  d___469848: undefined,
  unnamed4376___U1: undefined,
  unnamed4377___U2: undefined,
} }





function jacdac_ProtoTestHost_handlePacket__P468468(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.oldBool___473414 = undefined;
    s.oldi32___473417 = undefined;
    s.oldu32___473420 = undefined;
    s.olds___473423 = undefined;
    s.oldbytes___473426 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_ProtoTestHost__C468461_VT)) failedCast(r0);
    s.tmp_0 = jacdac_Host__C468110_v2_2_mk(s);
    s.tmp_0.arg0 = s.arg0;
    if ((s.arg1) && (s.arg1).vtable) {
    setupResume(s, 22);
    pxsim_String__stringConv(s.arg1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg1) + ""; }
  case 22:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat("pkt: ", s.tmp_1);
    s.tmp_0.arg1 = r0;
    if (!checkSubtype(s.tmp_0.arg0, jacdac_Host__C468110_VT)) failedCast(s.tmp_0.arg0);
    s.tmp_0.fn = s.tmp_0.arg0.vtable.methods.log;
    s.pc = 21; return s.tmp_0;
  case 21:
    r0 = s.retval;
    r0 = s.arg0.fields["bool"];
    s.oldBool___473414 = (r0);
    r0 = s.arg0.fields["i32"];
    s.oldi32___473417 = (r0);
    r0 = s.arg0.fields["u32"];
    s.oldu32___473420 = (r0);
    r0 = s.arg0.fields["s"];
    s.olds___473423 = (r0);
    r0 = s.arg0.fields["bytes"];
    s.oldbytes___473426 = (r0);
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = jacdac_Host_handleRegBool__P468726_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.arg1;
    s.tmp_2.arg2 = 129;
    r0 = s.arg0.fields["bool"];
    s.tmp_2.arg3 = r0;
    s.callLocIdx = 309; s.pc = 23; return s.tmp_2;
  case 23:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["bool"] = (s.tmp_1);
    s.tmp_0 = jacdac_Host_handleRegBool__P468726_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = 385;
    r0 = s.arg0.fields["bool"];
    s.tmp_0.arg3 = r0;
    s.callLocIdx = 310; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = jacdac_Host_handleRegInt__P468727_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.arg1;
    s.tmp_2.arg2 = 131;
    r0 = s.arg0.fields["i32"];
    s.tmp_2.arg3 = r0;
    s.callLocIdx = 311; s.pc = 25; return s.tmp_2;
  case 25:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["i32"] = (s.tmp_1);
    s.tmp_0 = jacdac_Host_handleRegInt__P468727_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = 387;
    r0 = s.arg0.fields["i32"];
    s.tmp_0.arg3 = r0;
    s.callLocIdx = 312; s.pc = 26; return s.tmp_0;
  case 26:
    r0 = s.retval;
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = jacdac_Host_handleRegValue__P468725_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.arg1;
    s.tmp_2.arg2 = 130;
    s.tmp_2.arg3 = "u32";
    r0 = s.arg0.fields["u32"];
    s.tmp_2.arg4 = r0;
    s.callLocIdx = 313; s.pc = 27; return s.tmp_2;
  case 27:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["u32"] = (s.tmp_1);
    s.tmp_0 = jacdac_Host_handleRegValue__P468725_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = 386;
    s.tmp_0.arg3 = "u32";
    r0 = s.arg0.fields["u32"];
    s.tmp_0.arg4 = r0;
    s.callLocIdx = 314; s.pc = 28; return s.tmp_0;
  case 28:
    r0 = s.retval;
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = jacdac_Host_handleRegValue__P468725_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.arg1;
    s.tmp_2.arg2 = 132;
    s.tmp_2.arg3 = "s";
    r0 = s.arg0.fields["s"];
    s.tmp_2.arg4 = r0;
    s.callLocIdx = 315; s.pc = 29; return s.tmp_2;
  case 29:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["s"] = (s.tmp_1);
    s.tmp_0 = jacdac_Host_handleRegValue__P468725_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = 388;
    s.tmp_0.arg3 = "s";
    r0 = s.arg0.fields["s"];
    s.tmp_0.arg4 = r0;
    s.callLocIdx = 316; s.pc = 30; return s.tmp_0;
  case 30:
    r0 = s.retval;
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = jacdac_Host_handleRegValue__P468725_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.arg1;
    s.tmp_2.arg2 = 133;
    s.tmp_2.arg3 = "b";
    r0 = s.arg0.fields["bytes"];
    s.tmp_2.arg4 = r0;
    s.callLocIdx = 317; s.pc = 31; return s.tmp_2;
  case 31:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["bytes"] = (s.tmp_1);
    s.tmp_0 = jacdac_Host_handleRegValue__P468725_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = 389;
    s.tmp_0.arg3 = "b";
    r0 = s.arg0.fields["bytes"];
    s.tmp_0.arg4 = r0;
    s.callLocIdx = 318; s.pc = 32; return s.tmp_0;
  case 32:
    r0 = s.retval;
    r0 = s.arg1.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 4, 14);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.switch_eq(129, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(131, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(130, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(132, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(133, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = s.tmp_0;
    { step = 6; continue; }
  case 1:
    s.tmp_2 = r0 = s.arg0;
    s.tmp_6 = jacdac_jdunpack__P468252_mk(s);
    r0 = s.arg1.fields["_data"];
    s.tmp_6.arg0 = r0;
    s.tmp_6.arg1 = "u8";
    s.callLocIdx = 321; s.pc = 33; return s.tmp_6;
  case 33:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_Array__getAt(s.tmp_5, 0);
    s.tmp_4 = r0;
    r0 = (s.tmp_4 != 0);
    s.tmp_3 = r0;
    r0 = (s.tmp_2).fields["bool"] = (s.tmp_3);
    { step = 6; continue; }
  case 2:
    s.tmp_0 = r0 = s.arg0;
    s.tmp_3 = jacdac_jdunpack__P468252_mk(s);
    r0 = s.arg1.fields["_data"];
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = "i32";
    s.callLocIdx = 323; s.pc = 34; return s.tmp_3;
  case 34:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_Array__getAt(s.tmp_2, 0);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["i32"] = (s.tmp_1);
    { step = 6; continue; }
  case 3:
    s.tmp_0 = r0 = s.arg0;
    s.tmp_3 = jacdac_jdunpack__P468252_mk(s);
    r0 = s.arg1.fields["_data"];
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = "u32";
    s.callLocIdx = 325; s.pc = 35; return s.tmp_3;
  case 35:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_Array__getAt(s.tmp_2, 0);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["u32"] = (s.tmp_1);
    { step = 6; continue; }
  case 4:
    s.tmp_0 = r0 = s.arg0;
    s.tmp_3 = jacdac_jdunpack__P468252_mk(s);
    r0 = s.arg1.fields["_data"];
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = "s";
    s.callLocIdx = 327; s.pc = 36; return s.tmp_3;
  case 36:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_Array__getAt(s.tmp_2, 0);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["s"] = (s.tmp_1);
    { step = 6; continue; }
  case 5:
    s.tmp_0 = r0 = s.arg0;
    s.tmp_3 = jacdac_jdunpack__P468252_mk(s);
    r0 = s.arg1.fields["_data"];
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = "b";
    s.callLocIdx = 329; s.pc = 37; return s.tmp_3;
  case 37:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_Array__getAt(s.tmp_2, 0);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["bytes"] = (s.tmp_1);
  case 6:
    s.tmp_1 = jacdac_JDPacket_is_reg_set__P468226_mk(s);
    s.tmp_1.arg0 = s.arg1;
    s.callLocIdx = 330; s.pc = 38; return s.tmp_1;
  case 38:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 19; continue; }
    s.tmp_4 = jacdac_JDPacket_reg_identifier__P468228_mk(s);
    s.tmp_4.arg0 = s.arg1;
    s.callLocIdx = 331; s.pc = 39; return s.tmp_4;
  case 39:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (s.tmp_3 === 129);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 9; continue; }
    r0 = s.arg0.fields["bool"];
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 7; continue; }
    r0 = 1;
    { step = 8; continue; }
  case 7:
    r0 = 0;
  case 8:
    // jmp value (already in r0)
    s.tmp_6 = r0;
    r0 = pxsim_Array__mk();
    s.tmp_7 = r0;
    r0 = pxsim_Array__push(s.tmp_7, s.tmp_6);
    s.tmp_8 = jacdac_Host_sendEvent__P468722_mk(s);
    s.tmp_8.arg0 = s.arg0;
    s.tmp_8.arg1 = 129;
    s.tmp_9 = jacdac_jdpack__P468253_mk(s);
    s.tmp_9.arg0 = "u8";
    s.tmp_9.arg1 = s.tmp_7;
    s.callLocIdx = 332; s.pc = 41; return s.tmp_9;
  case 41:
    r0 = s.retval;
    s.tmp_8.arg2 = r0;
    s.callLocIdx = 333; s.pc = 40; return s.tmp_8;
  case 40:
    r0 = s.retval;
    { step = 18; continue; }
  case 9:
    s.tmp_2 = jacdac_JDPacket_reg_identifier__P468228_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.callLocIdx = 334; s.pc = 42; return s.tmp_2;
  case 42:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === 131);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 10; continue; }
    r0 = pxsim_Array__mk();
    s.tmp_3 = r0;
    r0 = s.arg0.fields["i32"];
    s.tmp_4 = r0;
    r0 = pxsim_Array__push(s.tmp_3, s.tmp_4);
    s.tmp_5 = jacdac_Host_sendEvent__P468722_mk(s);
    s.tmp_5.arg0 = s.arg0;
    s.tmp_5.arg1 = 131;
    s.tmp_6 = jacdac_jdpack__P468253_mk(s);
    s.tmp_6.arg0 = "i32";
    s.tmp_6.arg1 = s.tmp_3;
    s.callLocIdx = 335; s.pc = 44; return s.tmp_6;
  case 44:
    r0 = s.retval;
    s.tmp_5.arg2 = r0;
    s.callLocIdx = 336; s.pc = 43; return s.tmp_5;
  case 43:
    r0 = s.retval;
    { step = 17; continue; }
  case 10:
    s.tmp_2 = jacdac_JDPacket_reg_identifier__P468228_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.callLocIdx = 337; s.pc = 45; return s.tmp_2;
  case 45:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === 130);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    r0 = pxsim_Array__mk();
    s.tmp_3 = r0;
    r0 = s.arg0.fields["i32"];
    s.tmp_4 = r0;
    r0 = pxsim_Array__push(s.tmp_3, s.tmp_4);
    s.tmp_5 = jacdac_Host_sendEvent__P468722_mk(s);
    s.tmp_5.arg0 = s.arg0;
    s.tmp_5.arg1 = 130;
    s.tmp_6 = jacdac_jdpack__P468253_mk(s);
    s.tmp_6.arg0 = "u32";
    s.tmp_6.arg1 = s.tmp_3;
    s.callLocIdx = 338; s.pc = 47; return s.tmp_6;
  case 47:
    r0 = s.retval;
    s.tmp_5.arg2 = r0;
    s.callLocIdx = 339; s.pc = 46; return s.tmp_5;
  case 46:
    r0 = s.retval;
    { step = 16; continue; }
  case 11:
    s.tmp_2 = jacdac_JDPacket_reg_identifier__P468228_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.callLocIdx = 340; s.pc = 48; return s.tmp_2;
  case 48:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === 132);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 12; continue; }
    r0 = pxsim_Array__mk();
    s.tmp_3 = r0;
    r0 = s.arg0.fields["s"];
    s.tmp_4 = r0;
    r0 = pxsim_Array__push(s.tmp_3, s.tmp_4);
    s.tmp_5 = jacdac_Host_sendEvent__P468722_mk(s);
    s.tmp_5.arg0 = s.arg0;
    s.tmp_5.arg1 = 132;
    s.tmp_6 = jacdac_jdpack__P468253_mk(s);
    s.tmp_6.arg0 = "s";
    s.tmp_6.arg1 = s.tmp_3;
    s.callLocIdx = 341; s.pc = 50; return s.tmp_6;
  case 50:
    r0 = s.retval;
    s.tmp_5.arg2 = r0;
    s.callLocIdx = 342; s.pc = 49; return s.tmp_5;
  case 49:
    r0 = s.retval;
    { step = 15; continue; }
  case 12:
    s.tmp_2 = jacdac_JDPacket_reg_identifier__P468228_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.callLocIdx = 343; s.pc = 51; return s.tmp_2;
  case 51:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === 133);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    r0 = pxsim_Array__mk();
    s.tmp_3 = r0;
    r0 = s.arg0.fields["bytes"];
    s.tmp_4 = r0;
    r0 = pxsim_Array__push(s.tmp_3, s.tmp_4);
    s.tmp_5 = jacdac_Host_sendEvent__P468722_mk(s);
    s.tmp_5.arg0 = s.arg0;
    s.tmp_5.arg1 = 133;
    s.tmp_6 = jacdac_jdpack__P468253_mk(s);
    s.tmp_6.arg0 = "b";
    s.tmp_6.arg1 = s.tmp_3;
    s.callLocIdx = 344; s.pc = 53; return s.tmp_6;
  case 53:
    r0 = s.retval;
    s.tmp_5.arg2 = r0;
    s.callLocIdx = 345; s.pc = 52; return s.tmp_5;
  case 52:
    r0 = s.retval;
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_ProtoTestHost_handlePacket__P468468.info = {"start":304,"length":2613,"line":12,"column":8,"endLine":69,"endColumn":9,"fileName":"proto-test/host.ts","functionName":"handlePacket","argumentNames":["this","pkt"]}

function jacdac_ProtoTestHost_handlePacket__P468468_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_ProtoTestHost_handlePacket__P468468, depth: s.depth + 1,
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
  oldBool___473414: undefined,
  oldi32___473417: undefined,
  oldu32___473420: undefined,
  olds___473423: undefined,
  oldbytes___473426: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_JDPacket_reg_identifier__P468228(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 4, 14);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 & 4095);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_reg_identifier__P468228.info = {"start":4582,"length":80,"line":137,"column":8,"endLine":139,"endColumn":9,"fileName":"packet.ts","functionName":"reg_identifier","argumentNames":["this"]}
jacdac_JDPacket_reg_identifier__P468228.isGetter = true;

function jacdac_JDPacket_reg_identifier__P468228_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_reg_identifier__P468228, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_is_reg_set__P468226(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_2, 4, 14);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >> 12);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 == 2);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_is_reg_set__P468226.info = {"start":4364,"length":99,"line":129,"column":8,"endLine":131,"endColumn":9,"fileName":"packet.ts","functionName":"is_reg_set","argumentNames":["this"]}
jacdac_JDPacket_is_reg_set__P468226.isGetter = true;

function jacdac_JDPacket_is_reg_set__P468226_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_is_reg_set__P468226, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }





function jacdac_Host_handleRegValue__P468725(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.getset___468846 = undefined;
    s.reg___468856 = undefined;
    s.v___468877 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.arg4 = (s.lambdaArgs[4]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Host__C468110_VT)) failedCast(r0);
    r0 = s.arg1.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 4, 14);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 12);
    s.getset___468846 = (r0);
    r0 = (s.getset___468846 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = (s.getset___468846 > 2);
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
    s.reg___468856 = (r0);
    r0 = (s.reg___468856 != s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = s.arg4;
    { step = 13; continue; }
  case 5:
  case 6:
    r0 = (s.getset___468846 == 1);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 7; continue; }
    r0 = pxsim_Array__mk();
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_2, s.arg4);
    s.tmp_3 = jacdac_Host_sendReport__P468721_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.tmp_4 = jacdac_JDPacket_jdpacked__P468212_mk(s);
    r0 = s.arg1.fields["_header"];
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_5, 4, 14);
    s.tmp_4.arg0 = r0;
    s.tmp_4.arg1 = s.arg3;
    s.tmp_4.arg2 = s.tmp_2;
    s.callLocIdx = 27; s.pc = 15; return s.tmp_4;
  case 15:
    r0 = s.retval;
    s.tmp_3.arg1 = r0;
    s.callLocIdx = 28; s.pc = 14; return s.tmp_3;
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
    s.tmp_2 = jacdac_JDPacket_unjdpack__P468234_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.tmp_2.arg1 = s.arg3;
    s.callLocIdx = 29; s.pc = 16; return s.tmp_2;
  case 16:
    r0 = s.retval;
    s.v___468877 = (r0);
    r0 = pxsim_Array__getAt(s.v___468877, 0);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 !== s.arg4);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 10; continue; }
    r0 = (s.arg0).fields["stateUpdated"] = (true);
    r0 = pxsim_Array__getAt(s.v___468877, 0);
    s.arg4 = (r0);
  case 10:
  case 11:
  case 12:
    r0 = s.arg4;
  case 13:
    return leave(s, r0)
  default: oops()
} } }
jacdac_Host_handleRegValue__P468725.info = {"start":2979,"length":848,"line":104,"column":8,"endLine":124,"endColumn":9,"fileName":"routing.ts","functionName":"handleRegValue","argumentNames":["this","pkt","register","fmt","current"]}

function jacdac_Host_handleRegValue__P468725_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Host_handleRegValue__P468725, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  getset___468846: undefined,
  reg___468856: undefined,
  v___468877: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
  arg4: undefined,
} }





function jacdac_JDPacket_unjdpack__P468234(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.p___470823 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
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
    s.tmp_2 = jacdac_jdunpack__P468252_mk(s);
    r0 = s.arg0.fields["_data"];
    s.tmp_2.arg0 = r0;
    s.tmp_2.arg1 = s.arg1;
    s.callLocIdx = 190; s.pc = 7; return s.tmp_2;
  case 7:
    r0 = s.retval;
  case 4:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    s.p___470823 = (s.tmp_3);
    s.tmp_0 = r0 = s.p___470823;
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
jacdac_JDPacket_unjdpack__P468234.info = {"start":5197,"length":138,"line":164,"column":8,"endLine":167,"endColumn":9,"fileName":"packet.ts","functionName":"unjdpack","argumentNames":["this","fmt"]}

function jacdac_JDPacket_unjdpack__P468234_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_unjdpack__P468234, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  p___470823: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Host_handleRegInt__P468727(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.getset___468905 = undefined;
    s.reg___468915 = undefined;
    s.v___468939 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_Host__C468110_VT)) failedCast(r0);
    r0 = s.arg1.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 4, 14);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 >> 12);
    s.getset___468905 = (r0);
    r0 = (s.getset___468905 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = (s.getset___468905 > 2);
  case 2:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 3; continue; }
    r0 = s.arg3;
    { step = 15; continue; }
  case 3:
  case 4:
    r0 = s.arg1.fields["_header"];
    s.tmp_3 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_3, 4, 14);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 & 4095);
    s.reg___468915 = (r0);
    r0 = (s.reg___468915 != s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = s.arg3;
    { step = 15; continue; }
  case 5:
  case 6:
    r0 = pxsim_numops_toBoolDecr(s.arg3);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 7; continue; }
    s.arg3 = (0);
  case 7:
  case 8:
    r0 = (s.getset___468905 == 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.arg3 >> 0);
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_2);
    s.tmp_3 = jacdac_Host_sendReport__P468721_mk(s);
    s.tmp_3.arg0 = s.arg0;
    s.tmp_4 = jacdac_JDPacket_packed__P468211_mk(s);
    r0 = s.arg1.fields["_header"];
    s.tmp_5 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_5, 4, 14);
    s.tmp_4.arg0 = r0;
    s.tmp_4.arg1 = "i";
    s.tmp_4.arg2 = s.tmp_1;
    s.callLocIdx = 34; s.pc = 17; return s.tmp_4;
  case 17:
    r0 = s.retval;
    s.tmp_3.arg1 = r0;
    s.callLocIdx = 35; s.pc = 16; return s.tmp_3;
  case 16:
    r0 = s.retval;
    { step = 14; continue; }
  case 9:
    r0 = (s.arg2 >> 8);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 10; continue; }
    r0 = s.arg3;
    { step = 15; continue; }
  case 10:
  case 11:
    s.tmp_2 = jacdac_JDPacket_intData__P468231_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.callLocIdx = 36; s.pc = 18; return s.tmp_2;
  case 18:
    r0 = s.retval;
    s.v___468939 = (r0);
    r0 = (s.v___468939 != s.arg3);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 12; continue; }
    r0 = (s.arg0).fields["stateUpdated"] = (true);
    s.arg3 = (s.v___468939);
  case 12:
  case 13:
  case 14:
    r0 = s.arg3;
  case 15:
    return leave(s, r0)
  default: oops()
} } }
jacdac_Host_handleRegInt__P468727.info = {"start":4016,"length":871,"line":130,"column":8,"endLine":151,"endColumn":9,"fileName":"routing.ts","functionName":"handleRegInt","argumentNames":["this","pkt","register","current"]}

function jacdac_Host_handleRegInt__P468727_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Host_handleRegInt__P468727, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  getset___468905: undefined,
  reg___468915: undefined,
  v___468939: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }





function jacdac_Host_handleRegBool__P468726(s) {
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
    if (!checkSubtype(r0, jacdac_Host__C468110_VT)) failedCast(r0);
    r0 = pxsim_numops_toBoolDecr(s.arg3);
    if (!r0) { step = 1; continue; }
    r0 = 1;
    { step = 2; continue; }
  case 1:
    r0 = 0;
  case 2:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    s.tmp_2 = jacdac_Host_handleRegInt__P468727_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.arg1;
    s.tmp_2.arg2 = s.arg2;
    s.tmp_2.arg3 = s.tmp_0;
    s.callLocIdx = 30; s.pc = 3; return s.tmp_2;
  case 3:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 != 0);
    return leave(s, r0)
  default: oops()
} } }
jacdac_Host_handleRegBool__P468726.info = {"start":3837,"length":169,"line":126,"column":8,"endLine":128,"endColumn":9,"fileName":"routing.ts","functionName":"handleRegBool","argumentNames":["this","pkt","register","current"]}

function jacdac_Host_handleRegBool__P468726_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Host_handleRegBool__P468726, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }





function control_EventContext_constructor__P466736(s) {
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
    if (!checkSubtype(r0, control_EventContext__C466732_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["handlers"] = (s.tmp_1);
    r0 = (s.arg0).fields["framesInSample"] = (0);
    r0 = (s.arg0).fields["timeInSample"] = (0);
    r0 = (s.arg0).fields["deltaTimeMillis"] = (0);
    r0 = (s.arg0).fields["frameWorker"] = (0);
    r0 = (s.arg0).fields["idleCallbacks"] = (undefined);
    r0 = pxsim_numops_toBoolDecr(globals.control_EventContext_lastStats___466734);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_String_.mkEmpty();
    globals.control_EventContext_lastStats___466734 = (r0);
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_constructor__P466736.info = {"start":1740,"length":347,"line":58,"column":8,"endLine":68,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"inline","argumentNames":["this"]}

function control_EventContext_constructor__P466736_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_constructor__P466736, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function jacdac_ClientPacketQueue_constructor__P468124(s) {
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
    if (!checkSubtype(r0, jacdac_ClientPacketQueue__C468123_VT)) failedCast(r0);
    r0 = (s.arg0).fields["parent"] = (s.arg1);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["pkts"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_ClientPacketQueue_constructor__P468124.info = {"start":7186,"length":38,"line":226,"column":8,"endLine":226,"endColumn":46,"fileName":"routing.ts","functionName":"inline","argumentNames":["this","parent"]}

function jacdac_ClientPacketQueue_constructor__P468124_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_ClientPacketQueue_constructor__P468124, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_Client_constructor__P468137(s) {
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
    if (!checkSubtype(r0, jacdac_Client__C468128_VT)) failedCast(r0);
    r0 = (s.arg0).fields["name"] = (s.arg1);
    r0 = (s.arg0).fields["serviceClass"] = (s.arg2);
    r0 = (s.arg0).fields["requiredDeviceName"] = (s.arg3);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim.control.allocateNotifyEvent();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["eventId"] = (s.tmp_1);
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_ClientPacketQueue__C468123_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_ClientPacketQueue_constructor__P468124_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg0;
    s.callLocIdx = 45; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = (s.arg0).fields["config"] = (s.tmp_0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_constructor__P468137.info = {"start":9022,"length":266,"line":286,"column":8,"endLine":293,"endColumn":9,"fileName":"routing.ts","functionName":"inline","argumentNames":["this","name","serviceClass","requiredDeviceName"]}

function jacdac_Client_constructor__P468137_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_constructor__P468137, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }





function jacdac_ControlService_handlePacketOuter__P469891(s) {
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
    if (!checkSubtype(r0, jacdac_ControlService__C469889_VT)) failedCast(r0);
    r0 = s.arg1.fields["_header"];
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 4, 14);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.switch_eq(0, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(129, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(130, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(4480, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = s.tmp_0;
    { step = 5; continue; }
  case 1:
    s.tmp_2 = jacdac_queueAnnounce__P469907_mk(s);
    s.callLocIdx = 88; s.pc = 6; return s.tmp_2;
  case 6:
    r0 = s.retval;
    { step = 5; continue; }
  case 2:
    r0 = pxsim.control.runInParallel(globals.onIdentifyRequest___468174);
    { step = 5; continue; }
  case 3:
    setupResume(s, 7);
    pxsim.control.reset();
    checkResumeConsumed();
    return;
  case 7:
    r0 = s.retval;
    { step = 5; continue; }
  case 4:
    s.tmp_0 = jacdac_Host_sendReport__P468721_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_1 = jacdac_JDPacket_from__P468209_mk(s);
    r0 = s.arg1.fields["_header"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_2, 4, 14);
    s.tmp_1.arg0 = r0;
    r0 = pxsim_pxtcore.programName();
    s.tmp_5 = r0;
    if ((s.tmp_5) && (s.tmp_5).vtable) {
    setupResume(s, 10);
    pxsim_String__stringConv(s.tmp_5);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_5) + ""; }
  case 10:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat("PXT: ", s.tmp_4);
    s.tmp_3 = r0;
    r0 = pxsim.control.createBufferFromUTF8(s.tmp_3);
    s.tmp_1.arg1 = r0;
    s.callLocIdx = 90; s.pc = 9; return s.tmp_1;
  case 9:
    r0 = s.retval;
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 91; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_ControlService_handlePacketOuter__P469891.info = {"start":18409,"length":647,"line":582,"column":8,"endLine":597,"endColumn":9,"fileName":"routing.ts","functionName":"handlePacketOuter","argumentNames":["this","pkt"]}

function jacdac_ControlService_handlePacketOuter__P469891_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_ControlService_handlePacketOuter__P469891, depth: s.depth + 1,
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





function inline__P469870(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.i___469875 = undefined;
    r0 = pxsim.pins.pinByCfg(13);
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
    s.i___469875 = (0);
  case 3:
    r0 = (s.i___469875 < 7);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.tmp_1 = jacdac_setPinByCfg__P469880_mk(s);
    s.tmp_1.arg0 = 13;
    s.tmp_1.arg1 = true;
    s.callLocIdx = 82; s.pc = 6; return s.tmp_1;
  case 6:
    r0 = s.retval;
    s.tmp_0 = pause__P466750_mk(s);
    s.tmp_0.arg0 = 50;
    s.callLocIdx = 83; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    s.tmp_0 = jacdac_setPinByCfg__P469880_mk(s);
    s.tmp_0.arg0 = 13;
    s.tmp_0.arg1 = false;
    s.callLocIdx = 84; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    s.tmp_0 = pause__P466750_mk(s);
    s.tmp_0.arg0 = 150;
    s.callLocIdx = 85; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    r0 = (s.i___469875 + 1);
    s.i___469875 = (r0);
    { step = 3; continue; }
  case 4:
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
inline__P469870.info = {"start":18031,"length":265,"line":567,"column":35,"endLine":576,"endColumn":5,"fileName":"routing.ts","functionName":"inline","argumentNames":[]}

function inline__P469870_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: inline__P469870, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  i___469875: undefined,
} }





function jacdac_JDPacket_toString__P468241(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.msg___470930 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = pxsim_String_.mkEmpty();
    s.tmp_8 = r0;
    s.tmp_11 = jacdac_shortDeviceId__P468153_mk(s);
    r0 = s.arg0.fields["_header"];
    s.tmp_13 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_13, 4, 8);
    s.tmp_12 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_12);
    s.tmp_11.arg0 = r0;
    s.callLocIdx = 194; s.pc = 3; return s.tmp_11;
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
    r0 = s.arg0.fields["_header"];
    s.tmp_23 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_23, 4, 14);
    s.tmp_22 = r0;
    if ((s.tmp_22) && (s.tmp_22).vtable) {
    setupResume(s, 7);
    pxsim_String__stringConv(s.tmp_22);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_22) + ""; }
  case 7:
    r0 = s.retval;
    s.tmp_21 = r0;
    r0 = pxsim_String__concat(s.tmp_2, s.tmp_21);
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_1, " sz=");
    s.tmp_0 = r0;
    r0 = s.arg0.fields["_header"];
    s.tmp_26 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_26, 12);
    s.tmp_25 = r0;
    if ((s.tmp_25) && (s.tmp_25).vtable) {
    setupResume(s, 8);
    pxsim_String__stringConv(s.tmp_25);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_25) + ""; }
  case 8:
    r0 = s.retval;
    s.tmp_24 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_24);
    s.msg___470930 = (r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_2, 12);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 < 20);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    if ((s.msg___470930) && (s.msg___470930).vtable) {
    setupResume(s, 9);
    pxsim_String__stringConv(s.msg___470930);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.msg___470930) + ""; }
  case 9:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = s.arg0.fields["_data"];
    s.tmp_8 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_8);
    s.tmp_7 = r0;
    if ((s.tmp_7) && (s.tmp_7).vtable) {
    setupResume(s, 10);
    pxsim_String__stringConv(s.tmp_7);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_7) + ""; }
  case 10:
    r0 = s.retval;
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(": ", s.tmp_6);
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
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_4);
    s.msg___470930 = (r0);
    { step = 2; continue; }
  case 1:
    if ((s.msg___470930) && (s.msg___470930).vtable) {
    setupResume(s, 12);
    pxsim_String__stringConv(s.msg___470930);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.msg___470930) + ""; }
  case 12:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = s.arg0.fields["_data"];
    s.tmp_8 = r0;
    r0 = pxsim.BufferMethods.slice(s.tmp_8, 0, 20);
    s.tmp_7 = r0;
    r0 = pxsim.BufferMethods.toHex(s.tmp_7);
    s.tmp_6 = r0;
    if ((s.tmp_6) && (s.tmp_6).vtable) {
    setupResume(s, 13);
    pxsim_String__stringConv(s.tmp_6);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_6) + ""; }
  case 13:
    r0 = s.retval;
    s.tmp_5 = r0;
    r0 = pxsim_String__concat(": ", s.tmp_5);
    s.tmp_4 = r0;
    if ((s.tmp_4) && (s.tmp_4).vtable) {
    setupResume(s, 14);
    pxsim_String__stringConv(s.tmp_4);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_4) + ""; }
  case 14:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_3, "...");
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 15);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 15:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_1);
    s.msg___470930 = (r0);
  case 2:
    r0 = s.msg___470930;
    return leave(s, r0)
  default: oops()
} } }
jacdac_JDPacket_toString__P468241.info = {"start":6423,"length":345,"line":207,"column":8,"endLine":212,"endColumn":9,"fileName":"packet.ts","functionName":"toString","argumentNames":["this"]}

function jacdac_JDPacket_toString__P468241_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_toString__P468241, depth: s.depth + 1,
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
  msg___470930: undefined,
  arg0: undefined,
} }





function jacdac_JDPacket_size__P468218(s) {
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
    if (!checkSubtype(r0, jacdac_JDPacket__C468204_VT)) failedCast(r0);
    r0 = s.arg0.fields["_header"];
    s.tmp_0 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tmp_0, 12);
    return leaveAccessor(s, r0)
  default: oops()
} } }
jacdac_JDPacket_size__P468218.info = {"start":3291,"length":67,"line":97,"column":8,"endLine":99,"endColumn":9,"fileName":"packet.ts","functionName":"size","argumentNames":["this"]}
jacdac_JDPacket_size__P468218.isGetter = true;

function jacdac_JDPacket_size__P468218_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_JDPacket_size__P468218, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function jacdac_LoggerHost_handlePacket__P468368(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.now___472436 = undefined;
    s.d___472439 = undefined;
    s.elapsed___472442 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, jacdac_LoggerHost__C468365_VT)) failedCast(r0);
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = jacdac_Host_handleRegValue__P468725_mk(s);
    s.tmp_2.arg0 = s.arg0;
    s.tmp_2.arg1 = s.arg1;
    s.tmp_2.arg2 = 128;
    s.tmp_2.arg3 = "u8";
    r0 = s.arg0.fields["minPriority"];
    s.tmp_2.arg4 = r0;
    s.callLocIdx = 266; s.pc = 8; return s.tmp_2;
  case 8:
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
    { step = 6; continue; }
  case 1:
    r0 = pxsim.control.millis();
    s.now___472436 = (r0);
    s.tmp_0 = jacdac_JDPacket_intData__P468231_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.callLocIdx = 268; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    s.d___472439 = (r0);
    r0 = s.arg0.fields["_lastListenerTime"];
    s.tmp_0 = r0;
    r0 = (s.now___472436 - s.tmp_0);
    s.elapsed___472442 = (r0);
    r0 = s.arg0.fields["minPriority"];
    s.tmp_1 = r0;
    r0 = (s.d___472439 <= s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = (s.elapsed___472442 > 1500);
  case 3:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 4; continue; }
    r0 = (s.arg0).fields["minPriority"] = (s.d___472439);
    r0 = (s.arg0).fields["_lastListenerTime"] = (s.now___472436);
  case 4:
  case 5:
    { step = 7; continue; }
  case 6:
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_LoggerHost_handlePacket__P468368.info = {"start":280,"length":951,"line":10,"column":8,"endLine":30,"endColumn":9,"fileName":"logger-host/host.ts","functionName":"handlePacket","argumentNames":["this","packet"]}

function jacdac_LoggerHost_handlePacket__P468368_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_LoggerHost_handlePacket__P468368, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  now___472436: undefined,
  d___472439: undefined,
  elapsed___472442: undefined,
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


function if_handler_1_mk(s) {
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


function jacdac_LoggerHost__C468365_v2_2_mk(s) {
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


function jacdac_Client__C468128_v1_1_mk(s) {
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


function jacdac_Host__C468110_v0_2_mk(s) {
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


function jacdac_Client__C468128_v0_2_mk(s) {
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


function jacdac_Host__C468110_v1_2_mk(s) {
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


function jacdac_Host__C468110_v2_2_mk(s) {
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

const jacdac_Host__C468110_VT = mkVTable({
  name: "Host",
  numFields: 7,
  classNo: 16,
  lastSubtypeNo: 20,
  maxBgInstances: null,
  methods: {
    "handlePacketOuter": jacdac_Host_handlePacketOuter__P468116,
    "handlePacket": jacdac_Host_handlePacket__P468117,
    "log": jacdac_Host_log__P468729,
  },
  iface: {
    "supressLog": null,
    "set/supressLog": null,
    "running": null,
    "set/running": null,
    "serviceNumber": null,
    "set/serviceNumber": null,
    "stateUpdated": null,
    "set/stateUpdated": null,
    "_statusCode": null,
    "set/_statusCode": null,
    "name": null,
    "set/name": null,
    "serviceClass": null,
    "set/serviceClass": null,
    "handlePacketOuter": jacdac_Host_handlePacketOuter__P468116,
    "handlePacket": jacdac_Host_handlePacket__P468117,
    "advertisementData": jacdac_Host_advertisementData__P468119,
    "sendReport": jacdac_Host_sendReport__P468721,
    "sendEvent": jacdac_Host_sendEvent__P468722,
    "sendChangeEvent": jacdac_Host_sendChangeEvent__P468723,
    "handleStatusCode": jacdac_Host_handleStatusCode__P468724,
    "handleRegValue": jacdac_Host_handleRegValue__P468725,
    "handleRegBool": jacdac_Host_handleRegBool__P468726,
    "handleRegInt": jacdac_Host_handleRegInt__P468727,
    "start": jacdac_Host_start__P468121,
    "log": jacdac_Host_log__P468729,
  },
});
const jacdac_LoggerHost__C468365_VT = mkVTable({
  name: "LoggerHost",
  numFields: 9,
  classNo: 17,
  lastSubtypeNo: 17,
  maxBgInstances: null,
  methods: {
    "handlePacketOuter": jacdac_Host_handlePacketOuter__P468116,
    "handlePacket": jacdac_LoggerHost_handlePacket__P468368,
    "log": jacdac_LoggerHost_log__P468370,
  },
  iface: {
    "supressLog": null,
    "set/supressLog": null,
    "running": null,
    "set/running": null,
    "serviceNumber": null,
    "set/serviceNumber": null,
    "stateUpdated": null,
    "set/stateUpdated": null,
    "_statusCode": null,
    "set/_statusCode": null,
    "name": null,
    "set/name": null,
    "serviceClass": null,
    "set/serviceClass": null,
    "_lastListenerTime": null,
    "set/_lastListenerTime": null,
    "minPriority": null,
    "set/minPriority": null,
    "handlePacket": jacdac_LoggerHost_handlePacket__P468368,
    "log": jacdac_LoggerHost_log__P468370,
    "add": jacdac_LoggerHost_add__P468373,
    "handlePacketOuter": jacdac_Host_handlePacketOuter__P468116,
    "advertisementData": jacdac_Host_advertisementData__P468119,
    "sendReport": jacdac_Host_sendReport__P468721,
    "sendEvent": jacdac_Host_sendEvent__P468722,
    "sendChangeEvent": jacdac_Host_sendChangeEvent__P468723,
    "handleStatusCode": jacdac_Host_handleStatusCode__P468724,
    "handleRegValue": jacdac_Host_handleRegValue__P468725,
    "handleRegBool": jacdac_Host_handleRegBool__P468726,
    "handleRegInt": jacdac_Host_handleRegInt__P468727,
    "start": jacdac_Host_start__P468121,
  },
});
const jacdac_TokenParser__C471292_VT = mkVTable({
  name: "TokenParser",
  numFields: 8,
  classNo: 21,
  lastSubtypeNo: 21,
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
    "word": null,
    "set/word": null,
    "isArray": null,
    "set/isArray": null,
    "fmt": null,
    "set/fmt": null,
    "parse": jacdac_TokenParser_parse__P471293,
  },
});
const JSON_Stringifier__C468543_VT = mkVTable({
  name: "Stringifier",
  numFields: 3,
  classNo: 22,
  lastSubtypeNo: 22,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "currIndent": null,
    "set/currIndent": null,
    "indentStep": null,
    "set/indentStep": null,
    "indent": null,
    "set/indent": null,
    "doString": JSON_Stringifier_doString__P468544,
    "go": JSON_Stringifier_go__P468545,
  },
});
const jacdac_JDPacket__C468204_VT = mkVTable({
  name: "JDPacket",
  numFields: 3,
  classNo: 23,
  lastSubtypeNo: 23,
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
    "fromBinary": jacdac_JDPacket_fromBinary__P468208,
    "from": jacdac_JDPacket_from__P468209,
    "onlyHeader": jacdac_JDPacket_onlyHeader__P468210,
    "packed": jacdac_JDPacket_packed__P468211,
    "jdpacked": jacdac_JDPacket_jdpacked__P468212,
    "device_identifier": jacdac_JDPacket_device_identifier__P468214,
    "set/device_identifier": jacdac_JDPacket_device_identifier__P468215,
    "packet_flags": jacdac_JDPacket_packet_flags__P468216,
    "multicommand_class": jacdac_JDPacket_multicommand_class__P468217,
    "size": jacdac_JDPacket_size__P468218,
    "requires_ack": jacdac_JDPacket_requires_ack__P468219,
    "set/requires_ack": jacdac_JDPacket_requires_ack__P468220,
    "service_number": jacdac_JDPacket_service_number__P468221,
    "set/service_number": jacdac_JDPacket_service_number__P468222,
    "crc": jacdac_JDPacket_crc__P468223,
    "service_command": jacdac_JDPacket_service_command__P468224,
    "set/service_command": jacdac_JDPacket_service_command__P468225,
    "is_reg_set": jacdac_JDPacket_is_reg_set__P468226,
    "reg_identifier": jacdac_JDPacket_reg_identifier__P468228,
    "data": jacdac_JDPacket_data__P468229,
    "set/data": jacdac_JDPacket_data__P468230,
    "intData": jacdac_JDPacket_intData__P468231,
    "unjdpack": jacdac_JDPacket_unjdpack__P468234,
    "compress": jacdac_JDPacket_compress__P468235,
    "getNumber": jacdac_JDPacket_getNumber__P468237,
    "is_command": jacdac_JDPacket_is_command__P468239,
    "toString": jacdac_JDPacket_toString__P468241,
    "_sendCore": jacdac_JDPacket__sendCore__P468242,
    "_sendReport": jacdac_JDPacket__sendReport__P468243,
    "_sendCmd": jacdac_JDPacket__sendCmd__P468244,
    "_sendCmdId": jacdac_JDPacket__sendCmdId__P468245,
    "_sendWithAck": jacdac_JDPacket__sendWithAck__P468247,
  },
  toStringMethod: jacdac_JDPacket_toString__P468241,
});
const jacdac_ControlService__C469889_VT = mkVTable({
  name: "ControlService",
  numFields: 7,
  classNo: 18,
  lastSubtypeNo: 18,
  maxBgInstances: null,
  methods: {
    "handlePacketOuter": jacdac_ControlService_handlePacketOuter__P469891,
    "handlePacket": jacdac_Host_handlePacket__P468117,
    "log": jacdac_Host_log__P468729,
  },
  iface: {
    "supressLog": null,
    "set/supressLog": null,
    "running": null,
    "set/running": null,
    "serviceNumber": null,
    "set/serviceNumber": null,
    "stateUpdated": null,
    "set/stateUpdated": null,
    "_statusCode": null,
    "set/_statusCode": null,
    "name": null,
    "set/name": null,
    "serviceClass": null,
    "set/serviceClass": null,
    "handlePacketOuter": jacdac_ControlService_handlePacketOuter__P469891,
    "handlePacket": jacdac_Host_handlePacket__P468117,
    "advertisementData": jacdac_Host_advertisementData__P468119,
    "sendReport": jacdac_Host_sendReport__P468721,
    "sendEvent": jacdac_Host_sendEvent__P468722,
    "sendChangeEvent": jacdac_Host_sendChangeEvent__P468723,
    "handleStatusCode": jacdac_Host_handleStatusCode__P468724,
    "handleRegValue": jacdac_Host_handleRegValue__P468725,
    "handleRegBool": jacdac_Host_handleRegBool__P468726,
    "handleRegInt": jacdac_Host_handleRegInt__P468727,
    "start": jacdac_Host_start__P468121,
    "log": jacdac_Host_log__P468729,
  },
});
const jacdac_Client__C468128_VT = mkVTable({
  name: "Client",
  numFields: 13,
  classNo: 24,
  lastSubtypeNo: 24,
  maxBgInstances: null,
  methods: {
    "handlePacket": jacdac_Client_handlePacket__P468142,
    "announceCallback": jacdac_Client_announceCallback__P468152,
  },
  iface: {
    "device": null,
    "set/device": null,
    "currentDevice": null,
    "set/currentDevice": null,
    "eventId": null,
    "set/eventId": null,
    "broadcast": null,
    "set/broadcast": null,
    "serviceNumber": null,
    "set/serviceNumber": null,
    "supressLog": null,
    "set/supressLog": null,
    "started": null,
    "set/started": null,
    "advertisementData": null,
    "set/advertisementData": null,
    "handlers": null,
    "set/handlers": null,
    "config": null,
    "set/config": null,
    "name": null,
    "set/name": null,
    "serviceClass": null,
    "set/serviceClass": null,
    "requiredDeviceName": null,
    "set/requiredDeviceName": null,
    "handlePacketOuter": jacdac_Client_handlePacketOuter__P468141,
    "handlePacket": jacdac_Client_handlePacket__P468142,
    "_attach": jacdac_Client__attach__P468143,
    "_detach": jacdac_Client__detach__P468144,
    "onAttach": jacdac_Client_onAttach__P469131,
    "onDetach": jacdac_Client_onDetach__P469132,
    "sendCommand": jacdac_Client_sendCommand__P468145,
    "raiseEvent": jacdac_Client_raiseEvent__P469133,
    "start": jacdac_Client_start__P468150,
    "announceCallback": jacdac_Client_announceCallback__P468152,
  },
});
const jacdac_Device__C468154_VT = mkVTable({
  name: "Device",
  numFields: 7,
  classNo: 25,
  lastSubtypeNo: 25,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "services": null,
    "set/services": null,
    "lastSeen": null,
    "set/lastSeen": null,
    "clients": null,
    "set/clients": null,
    "_name": null,
    "set/_name": null,
    "_shortId": null,
    "set/_shortId": null,
    "queries": null,
    "set/queries": null,
    "deviceId": null,
    "set/deviceId": null,
    "name": jacdac_Device_name__P468160,
    "shortId": jacdac_Device_shortId__P468161,
    "toString": jacdac_Device_toString__P468162,
    "lookupQuery": jacdac_Device_lookupQuery__P469228,
    "handleCtrlReport": jacdac_Device_handleCtrlReport__P468169,
    "clearNameCache": jacdac_Device_clearNameCache__P468172,
    "_destroy": jacdac_Device__destroy__P468173,
  },
  toStringMethod: jacdac_Device_toString__P468162,
});
const jacdac_ClientPacketQueue__C468123_VT = mkVTable({
  name: "ClientPacketQueue",
  numFields: 2,
  classNo: 26,
  lastSubtypeNo: 26,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "pkts": null,
    "set/pkts": null,
    "parent": null,
    "set/parent": null,
    "resend": jacdac_ClientPacketQueue_resend__P468127,
  },
});
const control_EventContext__C466732_VT = mkVTable({
  name: "EventContext",
  numFields: 9,
  classNo: 27,
  lastSubtypeNo: 27,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "handlers": null,
    "set/handlers": null,
    "frameCallbacks": null,
    "set/frameCallbacks": null,
    "frameWorker": null,
    "set/frameWorker": null,
    "framesInSample": null,
    "set/framesInSample": null,
    "timeInSample": null,
    "set/timeInSample": null,
    "deltaTimeMillis": null,
    "set/deltaTimeMillis": null,
    "prevTimeMillis": null,
    "set/prevTimeMillis": null,
    "idleCallbacks": null,
    "set/idleCallbacks": null,
    "runningCallbacks": null,
    "set/runningCallbacks": null,
    "registerHandler": control_EventContext_registerHandler__P466742,
  },
});
const control_EventHandler__C468546_VT = mkVTable({
  name: "EventHandler",
  numFields: 4,
  classNo: 28,
  lastSubtypeNo: 28,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "src": null,
    "set/src": null,
    "value": null,
    "set/value": null,
    "handler": null,
    "set/handler": null,
    "flags": null,
    "set/flags": null,
    "register": control_EventHandler_register__P468547,
  },
});
const jacdac_ProtoTestHost__C468461_VT = mkVTable({
  name: "ProtoTestHost",
  numFields: 12,
  classNo: 19,
  lastSubtypeNo: 19,
  maxBgInstances: null,
  methods: {
    "handlePacketOuter": jacdac_Host_handlePacketOuter__P468116,
    "handlePacket": jacdac_ProtoTestHost_handlePacket__P468468,
    "log": jacdac_Host_log__P468729,
  },
  iface: {
    "supressLog": null,
    "set/supressLog": null,
    "running": null,
    "set/running": null,
    "serviceNumber": null,
    "set/serviceNumber": null,
    "stateUpdated": null,
    "set/stateUpdated": null,
    "_statusCode": null,
    "set/_statusCode": null,
    "name": null,
    "set/name": null,
    "serviceClass": null,
    "set/serviceClass": null,
    "bool": null,
    "set/bool": null,
    "i32": null,
    "set/i32": null,
    "u32": null,
    "set/u32": null,
    "s": null,
    "set/s": null,
    "bytes": null,
    "set/bytes": null,
    "handlePacket": jacdac_ProtoTestHost_handlePacket__P468468,
    "handlePacketOuter": jacdac_Host_handlePacketOuter__P468116,
    "advertisementData": jacdac_Host_advertisementData__P468119,
    "sendReport": jacdac_Host_sendReport__P468721,
    "sendEvent": jacdac_Host_sendEvent__P468722,
    "sendChangeEvent": jacdac_Host_sendChangeEvent__P468723,
    "handleStatusCode": jacdac_Host_handleStatusCode__P468724,
    "handleRegValue": jacdac_Host_handleRegValue__P468725,
    "handleRegBool": jacdac_Host_handleRegBool__P468726,
    "handleRegInt": jacdac_Host_handleRegInt__P468727,
    "start": jacdac_Host_start__P468121,
    "log": jacdac_Host_log__P468729,
  },
});
const jacdac_RoleManagerHost__C468417_VT = mkVTable({
  name: "RoleManagerHost",
  numFields: 7,
  classNo: 20,
  lastSubtypeNo: 20,
  maxBgInstances: null,
  methods: {
    "handlePacketOuter": jacdac_Host_handlePacketOuter__P468116,
    "handlePacket": jacdac_RoleManagerHost_handlePacket__P468419,
    "log": jacdac_Host_log__P468729,
  },
  iface: {
    "supressLog": null,
    "set/supressLog": null,
    "running": null,
    "set/running": null,
    "serviceNumber": null,
    "set/serviceNumber": null,
    "stateUpdated": null,
    "set/stateUpdated": null,
    "_statusCode": null,
    "set/_statusCode": null,
    "name": null,
    "set/name": null,
    "serviceClass": null,
    "set/serviceClass": null,
    "handlePacket": jacdac_RoleManagerHost_handlePacket__P468419,
    "handlePacketOuter": jacdac_Host_handlePacketOuter__P468116,
    "advertisementData": jacdac_Host_advertisementData__P468119,
    "sendReport": jacdac_Host_sendReport__P468721,
    "sendEvent": jacdac_Host_sendEvent__P468722,
    "sendChangeEvent": jacdac_Host_sendChangeEvent__P468723,
    "handleStatusCode": jacdac_Host_handleStatusCode__P468724,
    "handleRegValue": jacdac_Host_handleRegValue__P468725,
    "handleRegBool": jacdac_Host_handleRegBool__P468726,
    "handleRegInt": jacdac_Host_handleRegInt__P468727,
    "start": jacdac_Host_start__P468121,
    "log": jacdac_Host_log__P468729,
  },
});
const jacdac_OutPipe__C468273_VT = mkVTable({
  name: "OutPipe",
  numFields: 3,
  classNo: 29,
  lastSubtypeNo: 29,
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
    "from": jacdac_OutPipe_from__P468275,
    "respondForEach": jacdac_OutPipe_respondForEach__P468276,
    "writeEx": jacdac_OutPipe_writeEx__P472119,
    "write": jacdac_OutPipe_write__P468278,
    "writeAndClose": jacdac_OutPipe_writeAndClose__P468279,
    "close": jacdac_OutPipe_close__P468280,
  },
});
const jacdac_AckAwaiter__C471068_VT = mkVTable({
  name: "AckAwaiter",
  numFields: 6,
  classNo: 30,
  lastSubtypeNo: 30,
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

const breakpoints = setupDebugger(1, ["consolePriority___468079","roleManagerHost___468420","protoTestHost___468469","loggerHost___468374","myDevice___468707","hostServices___468706","_unattachedClients___468108","_allClients___468109","announceCallbacks___468710","restartCounter___468715","devices____468708","newDeviceCallbacks___468712","pktCallbacks___468713","ackAwaiters___470580","devNameSettingPrefix___468107","recvQ___468611","onIdentifyRequest___468174"])

return _main___P476895
})
