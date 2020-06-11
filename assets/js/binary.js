// meta={"simUrl":"/sim/simulator.html","cdnUrl":"/cdn/","version":"0.0.1","target":"arcade","targetVersion":"0.18.1","repo":"microsoft/pxt-jacdac-services"}
// total=42965 new=17.59% cached=68.76% other=13.65%
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
pxsim.setTitle("jacdac-services");
pxsim.setConfigData({}, {});
pxtrt.mapKeyNames = [
 "",
 "_lastState",
 "_localTime",
 "_max",
 "_min",
 "_offset",
 "_stateChangedHandler",
 "advertisementData",
 "broadcast",
 "config",
 "currentDevice",
 "device",
 "eventId",
 "isStreaming",
 "name",
 "parent",
 "pkts",
 "requiredDeviceName",
 "scale",
 "serviceClass",
 "serviceNumber",
 "started",
 "supressLog"
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


function _main___P59043(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    globals._intervals___47512 = (undefined);
    globals._pollEventQueue___47525 = (undefined);
    globals.RUN_KEY___47704 = ("#run");
    globals.SCOPE_KEY___47705 = ("#scope");
    s.tmp_0 = settings_initScopes__P47717_mk(s);
    s.callLocIdx = 0; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_RotaryEncoderClient__C53696_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_RotaryEncoderClient_constructor__P53701_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = null;
    s.callLocIdx = 4; s.pc = 2; return s.tmp_1;
  case 2:
    r0 = s.retval;
    globals.rotaryEncoderClient___53780 = (s.tmp_0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
_main___P59043.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"test.ts","functionName":"<main>","argumentNames":[]}
_main___P59043.continuations = [  ]

function _main___P59043_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _main___P59043, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }





function jacdac_RotaryEncoderClient_constructor__P53701(s) {
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
    if (!checkSubtype(r0, jacdac_RotaryEncoderClient__C53696_VT)) failedCast(r0);
    r0 = (s.arg0).fields["isStreaming"] = (false);
    r0 = (s.arg0).fields["scale"] = (1);
    s.tmp_0 = jacdac_SensorClient_constructor__P51627_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = "crank";
    s.tmp_0.arg2 = 284830153;
    s.tmp_0.arg3 = s.arg1;
    s.callLocIdx = 3; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_RotaryEncoderClient_constructor__P53701.info = {"start":110,"length":123,"line":3,"column":8,"endLine":5,"endColumn":9,"fileName":"rotaryencoderclient.ts","functionName":"inline","argumentNames":["this","requiredDevice"]}

function jacdac_RotaryEncoderClient_constructor__P53701_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_RotaryEncoderClient_constructor__P53701, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function jacdac_SensorClient_constructor__P51627(s) {
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
    if (!checkSubtype(r0, jacdac_SensorClient__C51617_VT)) failedCast(r0);
    r0 = (s.arg0).fields["isStreaming"] = (false);
    s.tmp_0 = jacdac_Client_constructor__P48457_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.arg1;
    s.tmp_0.arg2 = s.arg2;
    s.tmp_0.arg3 = s.arg3;
    s.callLocIdx = 2; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim.control.createBuffer(0);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["_lastState"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_SensorClient_constructor__P51627.info = {"start":306,"length":191,"line":11,"column":8,"endLine":14,"endColumn":9,"fileName":"sensorclient.ts","functionName":"inline","argumentNames":["this","name","deviceClass","requiredDevice"]}

function jacdac_SensorClient_constructor__P51627_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_SensorClient_constructor__P51627, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }





function jacdac_Client_constructor__P48457(s) {
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
    if (!checkSubtype(r0, jacdac_Client__C48370_VT)) failedCast(r0);
    r0 = (s.arg0).fields["name"] = (s.arg1);
    r0 = (s.arg0).fields["serviceClass"] = (s.arg2);
    r0 = (s.arg0).fields["requiredDeviceName"] = (s.arg3);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim.control.allocateNotifyEvent();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["eventId"] = (s.tmp_1);
    r0 = pxsim_pxtcore_mkClassInstance(jacdac_ClientPacketQueue__C48309_VT);
    s.tmp_0 = r0;
    s.tmp_1 = jacdac_ClientPacketQueue_constructor__P48314_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg0;
    s.callLocIdx = 1; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = (s.arg0).fields["config"] = (s.tmp_0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_Client_constructor__P48457.info = {"start":7498,"length":266,"line":243,"column":8,"endLine":250,"endColumn":9,"fileName":"routing.ts","functionName":"inline","argumentNames":["this","name","serviceClass","requiredDeviceName"]}

function jacdac_Client_constructor__P48457_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_Client_constructor__P48457, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }





function jacdac_ClientPacketQueue_constructor__P48314(s) {
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
    if (!checkSubtype(r0, jacdac_ClientPacketQueue__C48309_VT)) failedCast(r0);
    r0 = (s.arg0).fields["parent"] = (s.arg1);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["pkts"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
jacdac_ClientPacketQueue_constructor__P48314.info = {"start":5778,"length":38,"line":188,"column":8,"endLine":188,"endColumn":46,"fileName":"routing.ts","functionName":"inline","argumentNames":["this","parent"]}

function jacdac_ClientPacketQueue_constructor__P48314_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: jacdac_ClientPacketQueue_constructor__P48314, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function settings_initScopes__P47717(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.rn___55579 = undefined;
    s.tmp_1 = settings_runNumber__P47715_mk(s);
    s.callLocIdx = 69; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 1);
    s.rn___55579 = (r0);
    s.tmp_0 = settings_writeNumber__P47722_mk(s);
    s.tmp_0.arg0 = globals.RUN_KEY___47704;
    s.tmp_0.arg1 = s.rn___55579;
    s.callLocIdx = 70; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = pxsim.control.deviceSerialNumber();
    s.tmp_1 = r0;
    r0 = (s.tmp_1 & 2147483647);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.seedAddRandom(s.tmp_0);
    r0 = pxsim_pxtcore.seedAddRandom(s.rn___55579);
    s.tmp_0 = settings_setScope__P47716_mk(s);
    r0 = pxsim_pxtcore.programName();
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 71; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_initScopes__P47717.info = {"start":1104,"length":230,"line":41,"column":4,"endLine":49,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"initScopes","argumentNames":[]}

function settings_initScopes__P47717_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_initScopes__P47717, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  rn___55579: undefined,
} }





function settings_writeNumber__P47722(s) {
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
    s.tmp_1 = settings_writeBuffer__P47720_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_2 = msgpack_packNumberArray__P47419_mk(s);
    s.tmp_2.arg0 = s.tmp_0;
    s.callLocIdx = 74; s.pc = 2; return s.tmp_2;
  case 2:
    r0 = s.retval;
    s.tmp_1.arg1 = r0;
    s.callLocIdx = 75; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_writeNumber__P47722.info = {"start":2087,"length":122,"line":82,"column":4,"endLine":84,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"writeNumber","argumentNames":["key","value"]}

function settings_writeNumber__P47722_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_writeNumber__P47722, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function settings_writeBuffer__P47720(s) {
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
settings_writeBuffer__P47720.info = {"start":1538,"length":290,"line":63,"column":4,"endLine":70,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"writeBuffer","argumentNames":["key","value"]}

function settings_writeBuffer__P47720_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_writeBuffer__P47720, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function msgpack_packNumberArray__P47419(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.off___55629 = undefined;
    s.n___55631 = undefined;
    s.unnamed1552___U2 = undefined;
    s.unnamed1553___U3 = undefined;
    s.buf___55641 = undefined;
    s.n___55647 = undefined;
    s.unnamed1554___U6 = undefined;
    s.unnamed1555___U7 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.off___55629 = (0);
    s.n___55631 = (undefined);
    s.unnamed1552___U2 = (s.arg0);
    s.unnamed1553___U3 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed1553___U3;
    r0 = pxsim_Array__length(s.unnamed1552___U2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__getAt(s.unnamed1552___U2, s.unnamed1553___U3);
    s.n___55631 = (r0);
    s.tmp_2 = r0 = s.off___55629;
    s.tmp_4 = msgpack_packNumberCore__P47417_mk(s);
    s.tmp_4.arg0 = null;
    s.tmp_4.arg1 = s.off___55629;
    s.tmp_4.arg2 = s.n___55631;
    s.callLocIdx = 22; s.pc = 5; return s.tmp_4;
  case 5:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (s.tmp_2 + s.tmp_3);
    s.off___55629 = (r0);
    r0 = (s.unnamed1553___U3 + 1);
    s.unnamed1553___U3 = (r0);
    { step = 1; continue; }
  case 2:
    s.unnamed1552___U2 = (undefined);
    r0 = pxsim.control.createBuffer(s.off___55629);
    s.buf___55641 = (r0);
    s.off___55629 = (0);
    s.n___55647 = (undefined);
    s.unnamed1554___U6 = (s.arg0);
    s.unnamed1555___U7 = (0);
  case 3:
    s.tmp_0 = r0 = s.unnamed1555___U7;
    r0 = pxsim_Array__length(s.unnamed1554___U6);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.unnamed1554___U6, s.unnamed1555___U7);
    s.n___55647 = (r0);
    s.tmp_2 = r0 = s.off___55629;
    s.tmp_4 = msgpack_packNumberCore__P47417_mk(s);
    s.tmp_4.arg0 = s.buf___55641;
    s.tmp_4.arg1 = s.off___55629;
    s.tmp_4.arg2 = s.n___55647;
    s.callLocIdx = 23; s.pc = 6; return s.tmp_4;
  case 6:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (s.tmp_2 + s.tmp_3);
    s.off___55629 = (r0);
    r0 = (s.unnamed1555___U7 + 1);
    s.unnamed1555___U7 = (r0);
    { step = 3; continue; }
  case 4:
    s.unnamed1554___U6 = (undefined);
    r0 = s.buf___55641;
    return leave(s, r0)
  default: oops()
} } }
msgpack_packNumberArray__P47419.info = {"start":3427,"length":330,"line":117,"column":4,"endLine":128,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"packNumberArray","argumentNames":["nums"]}

function msgpack_packNumberArray__P47419_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_packNumberArray__P47419, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  off___55629: undefined,
  n___55631: undefined,
  unnamed1552___U2: undefined,
  unnamed1553___U3: undefined,
  buf___55641: undefined,
  n___55647: undefined,
  unnamed1554___U6: undefined,
  unnamed1555___U7: undefined,
  arg0: undefined,
} }





function msgpack_packNumberCore__P47417(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tag___55661 = undefined;
    s.fmt___55704 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    s.tag___55661 = (203);
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
    s.tag___55661 = (204);
    { step = 11; continue; }
  case 8:
    r0 = (s.arg2 <= 65535);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    s.tag___55661 = (205);
    { step = 10; continue; }
  case 9:
    s.tag___55661 = (206);
  case 10:
  case 11:
    { step = 17; continue; }
  case 12:
    r0 = (-127 <= s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    s.tag___55661 = (208);
    { step = 16; continue; }
  case 13:
    r0 = (-32767 <= s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    s.tag___55661 = (209);
    { step = 15; continue; }
  case 14:
    s.tag___55661 = (210);
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
    s.tmp_0 = msgpack_tagFormat__P47416_mk(s);
    s.tmp_0.arg0 = s.tag___55661;
    s.callLocIdx = 18; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.fmt___55704 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    if (!r0) { step = 21; continue; }
    r0 = pxsim.BufferMethods.setByte(s.arg0, s.arg1, s.tag___55661);
    s.tmp_0 = r0 = s.arg0;
    s.tmp_1 = r0 = s.fmt___55704;
    r0 = (s.arg1 + 1);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, s.tmp_1, s.tmp_2, s.arg2);
  case 21:
  case 22:
    s.tmp_1 = pins_sizeOf__P47409_mk(s);
    s.tmp_1.arg0 = s.fmt___55704;
    s.callLocIdx = 19; s.pc = 25; return s.tmp_1;
  case 25:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 1);
  case 23:
    return leave(s, r0)
  default: oops()
} } }
msgpack_packNumberCore__P47417.info = {"start":1632,"length":951,"line":56,"column":4,"endLine":86,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"packNumberCore","argumentNames":["buf","offset","num"]}

function msgpack_packNumberCore__P47417_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_packNumberCore__P47417, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tag___55661: undefined,
  fmt___55704: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function msgpack_tagFormat__P47416(s) {
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
msgpack_tagFormat__P47416.info = {"start":1145,"length":481,"line":42,"column":4,"endLine":54,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"tagFormat","argumentNames":["tag"]}

function msgpack_tagFormat__P47416_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_tagFormat__P47416, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function pins_sizeOf__P47409(s) {
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
    s.tmp_0 = Buffer_sizeOfNumberFormat__P47440_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 16; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
pins_sizeOf__P47409.info = {"start":42,"length":101,"line":2,"column":4,"endLine":4,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"sizeOf","argumentNames":["format"]}

function pins_sizeOf__P47409_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pins_sizeOf__P47409, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function Buffer_sizeOfNumberFormat__P47440(s) {
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
Buffer_sizeOfNumberFormat__P47440.info = {"start":12467,"length":856,"line":427,"column":4,"endLine":451,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"sizeOfNumberFormat","argumentNames":["format"]}

function Buffer_sizeOfNumberFormat__P47440_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_sizeOfNumberFormat__P47440, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function settings_setScope__P47716(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.currScope___55608 = undefined;
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
    s.tmp_0 = settings_readString__P47725_mk(s);
    s.tmp_0.arg0 = globals.SCOPE_KEY___47705;
    s.callLocIdx = 67; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    s.currScope___55608 = (r0);
    r0 = (s.currScope___55608 != s.arg0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = pxsim.settings._userClean();
    s.tmp_0 = settings_writeString__P47721_mk(s);
    s.tmp_0.arg0 = globals.SCOPE_KEY___47705;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 68; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
  case 5:
  case 6:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_setScope__P47716.info = {"start":826,"length":272,"line":31,"column":4,"endLine":39,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"setScope","argumentNames":["scope"]}

function settings_setScope__P47716_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_setScope__P47716, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  currScope___55608: undefined,
  arg0: undefined,
} }





function settings_readString__P47725(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___54950 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._get(s.arg0);
    s.buf___54950 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.buf___54950);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = undefined;
    { step = 3; continue; }
    { step = 2; continue; }
  case 1:
    r0 = pxsim.BufferMethods.toString(s.buf___54950);
    { step = 3; continue; }
  case 2:
    r0 = undefined;
  case 3:
    return leave(s, r0)
  default: oops()
} } }
settings_readString__P47725.info = {"start":2649,"length":177,"line":103,"column":4,"endLine":109,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"readString","argumentNames":["key"]}

function settings_readString__P47725_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_readString__P47725, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  buf___54950: undefined,
  arg0: undefined,
} }





function settings_readBuffer__P47724(s) {
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
settings_readBuffer__P47724.info = {"start":2516,"length":72,"line":96,"column":4,"endLine":98,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"readBuffer","argumentNames":["key"]}

function settings_readBuffer__P47724_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_readBuffer__P47724, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function settings_writeString__P47721(s) {
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
    s.tmp_0 = settings_writeBuffer__P47720_mk(s);
    s.tmp_0.arg0 = s.arg0;
    r0 = pxsim.control.createBufferFromUTF8(s.arg1);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 73; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_writeString__P47721.info = {"start":1895,"length":125,"line":75,"column":4,"endLine":77,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"writeString","argumentNames":["key","value"]}

function settings_writeString__P47721_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_writeString__P47721, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function settings_runNumber__P47715(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_1 = settings_readNumber__P47726_mk(s);
    s.tmp_1.arg0 = globals.RUN_KEY___47704;
    s.callLocIdx = 66; s.pc = 3; return s.tmp_1;
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
settings_runNumber__P47715.info = {"start":745,"length":75,"line":27,"column":4,"endLine":29,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"runNumber","argumentNames":[]}

function settings_runNumber__P47715_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_runNumber__P47715, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
} }





function settings_readNumber__P47726(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___55744 = undefined;
    s.nums___55751 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._get(s.arg0);
    s.buf___55744 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.buf___55744);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = undefined;
    { step = 7; continue; }
    { step = 6; continue; }
  case 1:
    s.tmp_2 = msgpack_unpackNumberArray__P47418_mk(s);
    s.tmp_2.arg0 = s.buf___55744;
    s.tmp_2.arg1 = 0;
    s.callLocIdx = 78; s.pc = 8; return s.tmp_2;
  case 8:
    r0 = s.retval;
    s.nums___55751 = (r0);
    s.tmp_0 = r0 = s.nums___55751;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = pxsim_Array__length(s.nums___55751);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >= 1);
  case 3:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.nums___55751, 0);
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
settings_readNumber__P47726.info = {"start":2887,"length":313,"line":114,"column":4,"endLine":124,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"readNumber","argumentNames":["key"]}

function settings_readNumber__P47726_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_readNumber__P47726, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  buf___55744: undefined,
  nums___55751: undefined,
  arg0: undefined,
} }





function msgpack_unpackNumberArray__P47418(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___55764 = undefined;
    s.fmt___55771 = undefined;
    s.v___55780 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___55764 = (r0);
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
    s.tmp_4 = msgpack_tagFormat__P47416_mk(s);
    r0 = pxsim.BufferMethods.getByte(s.arg0, s.tmp_3);
    s.tmp_4.arg0 = r0;
    s.callLocIdx = 20; s.pc = 12; return s.tmp_4;
  case 12:
    r0 = s.retval;
    s.fmt___55771 = (r0);
    r0 = (s.fmt___55771 === null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_1 = r0 = s.arg0;
    r0 = (s.arg1 - 1);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 6, s.tmp_2);
    s.v___55780 = (r0);
    r0 = (-31 <= s.v___55780);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = (s.v___55780 <= 127);
  case 3:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__push(s.res___55764, s.v___55780);
    { step = 5; continue; }
  case 4:
    r0 = null;
    { step = 11; continue; }
  case 5:
    { step = 7; continue; }
  case 6:
    s.tmp_0 = r0 = s.res___55764;
    r0 = pxsim.BufferMethods.getNumber(s.arg0, s.fmt___55771, s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    s.tmp_0 = r0 = s.arg1;
    s.tmp_2 = pins_sizeOf__P47409_mk(s);
    s.tmp_2.arg0 = s.fmt___55771;
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
    r0 = s.res___55764;
  case 11:
    return leave(s, r0)
  default: oops()
} } }
msgpack_unpackNumberArray__P47418.info = {"start":2650,"length":669,"line":91,"column":4,"endLine":111,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"unpackNumberArray","argumentNames":["buf","offset"]}

function msgpack_unpackNumberArray__P47418_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_unpackNumberArray__P47418, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  res___55764: undefined,
  fmt___55771: undefined,
  v___55780: undefined,
  arg0: undefined,
  arg1: undefined,
} }




const jacdac_Client__C48370_VT = mkVTable({
  name: "Client",
  numFields: 12,
  classNo: 16,
  lastSubtypeNo: 18,
  maxBgInstances: null,
  methods: {
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
    "config": null,
    "set/config": null,
    "name": null,
    "set/name": null,
    "serviceClass": null,
    "set/serviceClass": null,
    "requiredDeviceName": null,
    "set/requiredDeviceName": null,
  },
});
const jacdac_SensorClient__C51617_VT = mkVTable({
  name: "SensorClient",
  numFields: 16,
  classNo: 17,
  lastSubtypeNo: 18,
  maxBgInstances: null,
  methods: {
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
    "config": null,
    "set/config": null,
    "name": null,
    "set/name": null,
    "serviceClass": null,
    "set/serviceClass": null,
    "requiredDeviceName": null,
    "set/requiredDeviceName": null,
    "_localTime": null,
    "set/_localTime": null,
    "_lastState": null,
    "set/_lastState": null,
    "_stateChangedHandler": null,
    "set/_stateChangedHandler": null,
    "isStreaming": null,
    "set/isStreaming": null,
  },
});
const jacdac_RotaryEncoderClient__C53696_VT = mkVTable({
  name: "RotaryEncoderClient",
  numFields: 20,
  classNo: 18,
  lastSubtypeNo: 18,
  maxBgInstances: null,
  methods: {
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
    "config": null,
    "set/config": null,
    "name": null,
    "set/name": null,
    "serviceClass": null,
    "set/serviceClass": null,
    "requiredDeviceName": null,
    "set/requiredDeviceName": null,
    "_localTime": null,
    "set/_localTime": null,
    "_lastState": null,
    "set/_lastState": null,
    "_stateChangedHandler": null,
    "set/_stateChangedHandler": null,
    "isStreaming": null,
    "set/isStreaming": null,
    "scale": null,
    "set/scale": null,
    "_min": null,
    "set/_min": null,
    "_max": null,
    "set/_max": null,
    "_offset": null,
    "set/_offset": null,
  },
});
const jacdac_ClientPacketQueue__C48309_VT = mkVTable({
  name: "ClientPacketQueue",
  numFields: 2,
  classNo: 19,
  lastSubtypeNo: 19,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "pkts": null,
    "set/pkts": null,
    "parent": null,
    "set/parent": null,
  },
});

const breakpoints = setupDebugger(1, ["rotaryEncoderClient___53780"])

return _main___P59043
})
