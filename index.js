/**
 * Source Code By Reza
 * Don't Forget Smile
 * Thank You :)
*/

function _0x56e5(_0x8a4749,_0x1d3ef5){const _0x385e93=_0x385e();return _0x56e5=function(_0x56e542,_0x50ca58){_0x56e542=_0x56e542-0x163;let _0x3d0776=_0x385e93[_0x56e542];return _0x3d0776;},_0x56e5(_0x8a4749,_0x1d3ef5);}const _0x3bbdf2=_0x56e5;(function(_0x6527bd,_0x1dad89){const _0x4d366f=_0x56e5,_0x4f6a58=_0x6527bd();while(!![]){try{const _0x37529d=parseInt(_0x4d366f(0x1db))/0x1*(parseInt(_0x4d366f(0x203))/0x2)+-parseInt(_0x4d366f(0x1b7))/0x3*(-parseInt(_0x4d366f(0x194))/0x4)+-parseInt(_0x4d366f(0x174))/0x5*(-parseInt(_0x4d366f(0x19f))/0x6)+-parseInt(_0x4d366f(0x1b5))/0x7+-parseInt(_0x4d366f(0x1d3))/0x8*(-parseInt(_0x4d366f(0x164))/0x9)+parseInt(_0x4d366f(0x1df))/0xa+parseInt(_0x4d366f(0x1c3))/0xb*(-parseInt(_0x4d366f(0x17a))/0xc);if(_0x37529d===_0x1dad89)break;else _0x4f6a58['push'](_0x4f6a58['shift']());}catch(_0x87095c){_0x4f6a58['push'](_0x4f6a58['shift']());}}}(_0x385e,0xed6da),require(_0x3bbdf2(0x1e6)));const {default:EzaConnect,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,makeInMemoryStore,jidDecode,downloadMediaMessage,downloadContentFromMessage,proto,getContentType,Browsers}=require('@adiwajshing/baileys'),pino=require(_0x3bbdf2(0x18b)),{Boom}=require(_0x3bbdf2(0x1b6)),fs=require('fs'),axios=require('axios'),chalk=require(_0x3bbdf2(0x1e5)),figlet=require(_0x3bbdf2(0x167)),_=require(_0x3bbdf2(0x1fa)),PhoneNumber=require(_0x3bbdf2(0x1a1)),store=makeInMemoryStore({'logger':pino()['child']({'level':_0x3bbdf2(0x1bb),'stream':_0x3bbdf2(0x1aa)})}),color=(_0x54493d,_0x33cf83)=>{const _0x2e8287=_0x3bbdf2;return!_0x33cf83?chalk[_0x2e8287(0x1ba)](_0x54493d):chalk['keyword'](_0x33cf83)(_0x54493d);},fetchJson=async(_0x57aa0d,_0x4f468d)=>{const _0x1d32da=_0x3bbdf2;try{_0x4f468d?_0x4f468d:{};const _0x59fca5=await axios({'method':_0x1d32da(0x17f),'url':_0x57aa0d,'headers':{'User-Agent':_0x1d32da(0x199)},..._0x4f468d});return _0x59fca5[_0x1d32da(0x1a3)];}catch(_0x561004){return _0x561004;}};function smsg(_0x5dfe7f,_0x59a133,_0xa63036){const _0x4cb51d=_0x3bbdf2;if(!_0x59a133)return _0x59a133;let _0x15bce3=proto[_0x4cb51d(0x1ab)];if(_0x59a133[_0x4cb51d(0x1a0)]){_0x59a133['id']=_0x59a133['key']['id'],_0x59a133[_0x4cb51d(0x1fd)]=_0x59a133['id'][_0x4cb51d(0x202)](_0x4cb51d(0x1cd))&&_0x59a133['id']['length']===0x10,_0x59a133[_0x4cb51d(0x1e0)]=_0x59a133[_0x4cb51d(0x1a0)][_0x4cb51d(0x204)],_0x59a133['fromMe']=_0x59a133[_0x4cb51d(0x1a0)][_0x4cb51d(0x1da)],_0x59a133[_0x4cb51d(0x1e1)]=_0x59a133[_0x4cb51d(0x1e0)][_0x4cb51d(0x1ee)]('@g.us'),_0x59a133[_0x4cb51d(0x1b1)]=_0x5dfe7f[_0x4cb51d(0x1d8)](_0x59a133[_0x4cb51d(0x1da)]&&_0x5dfe7f['user']['id']||_0x59a133[_0x4cb51d(0x1a2)]||_0x59a133[_0x4cb51d(0x1a0)][_0x4cb51d(0x1a2)]||_0x59a133['chat']||'');if(_0x59a133[_0x4cb51d(0x1e1)])_0x59a133[_0x4cb51d(0x1a2)]=_0x5dfe7f[_0x4cb51d(0x1d8)](_0x59a133[_0x4cb51d(0x1a0)][_0x4cb51d(0x1a2)])||'';}if(_0x59a133[_0x4cb51d(0x177)]){_0x59a133[_0x4cb51d(0x1d1)]=getContentType(_0x59a133[_0x4cb51d(0x177)]),_0x59a133['msg']=_0x59a133[_0x4cb51d(0x1d1)]==_0x4cb51d(0x200)?_0x59a133[_0x4cb51d(0x177)][_0x59a133[_0x4cb51d(0x1d1)]][_0x4cb51d(0x177)][getContentType(_0x59a133['message'][_0x59a133[_0x4cb51d(0x1d1)]][_0x4cb51d(0x177)])]:_0x59a133[_0x4cb51d(0x177)][_0x59a133[_0x4cb51d(0x1d1)]],_0x59a133[_0x4cb51d(0x1ff)]=_0x59a133[_0x4cb51d(0x177)][_0x4cb51d(0x1bc)]||_0x59a133[_0x4cb51d(0x19e)]['caption']||_0x59a133[_0x4cb51d(0x19e)][_0x4cb51d(0x189)]||_0x59a133[_0x4cb51d(0x1d1)]==_0x4cb51d(0x1eb)&&_0x59a133[_0x4cb51d(0x19e)][_0x4cb51d(0x19a)]['selectedRowId']||_0x59a133['mtype']=='buttonsResponseMessage'&&_0x59a133[_0x4cb51d(0x19e)][_0x4cb51d(0x1b3)]||_0x59a133[_0x4cb51d(0x1d1)]=='viewOnceMessage'&&_0x59a133[_0x4cb51d(0x19e)][_0x4cb51d(0x207)]||_0x59a133[_0x4cb51d(0x189)];let _0x6cd9ae=_0x59a133['quoted']=_0x59a133[_0x4cb51d(0x19e)][_0x4cb51d(0x1a8)]?_0x59a133[_0x4cb51d(0x19e)][_0x4cb51d(0x1a8)][_0x4cb51d(0x1f9)]:null;_0x59a133[_0x4cb51d(0x1e7)]=_0x59a133[_0x4cb51d(0x19e)][_0x4cb51d(0x1a8)]?_0x59a133[_0x4cb51d(0x19e)][_0x4cb51d(0x1a8)]['mentionedJid']:[];if(_0x59a133[_0x4cb51d(0x169)]){let _0x13a3c7=getContentType(_0x6cd9ae);_0x59a133[_0x4cb51d(0x169)]=_0x59a133[_0x4cb51d(0x169)][_0x13a3c7];[_0x4cb51d(0x201)][_0x4cb51d(0x182)](_0x13a3c7)&&(_0x13a3c7=getContentType(_0x59a133[_0x4cb51d(0x169)]),_0x59a133[_0x4cb51d(0x169)]=_0x59a133['quoted'][_0x13a3c7]);if(typeof _0x59a133[_0x4cb51d(0x169)]===_0x4cb51d(0x1d4))_0x59a133[_0x4cb51d(0x169)]={'text':_0x59a133[_0x4cb51d(0x169)]};_0x59a133[_0x4cb51d(0x169)][_0x4cb51d(0x1d1)]=_0x13a3c7,_0x59a133['quoted']['id']=_0x59a133[_0x4cb51d(0x19e)][_0x4cb51d(0x1a8)][_0x4cb51d(0x1cf)],_0x59a133[_0x4cb51d(0x169)][_0x4cb51d(0x1e0)]=_0x59a133[_0x4cb51d(0x19e)][_0x4cb51d(0x1a8)]['remoteJid']||_0x59a133[_0x4cb51d(0x1e0)],_0x59a133[_0x4cb51d(0x169)][_0x4cb51d(0x1fd)]=_0x59a133[_0x4cb51d(0x169)]['id']?_0x59a133[_0x4cb51d(0x169)]['id'][_0x4cb51d(0x202)](_0x4cb51d(0x1cd))&&_0x59a133[_0x4cb51d(0x169)]['id'][_0x4cb51d(0x1cc)]===0x10:![],_0x59a133[_0x4cb51d(0x169)][_0x4cb51d(0x1b1)]=_0x5dfe7f[_0x4cb51d(0x1d8)](_0x59a133['msg'][_0x4cb51d(0x1a8)][_0x4cb51d(0x1a2)]),_0x59a133[_0x4cb51d(0x169)][_0x4cb51d(0x1da)]=_0x59a133[_0x4cb51d(0x169)][_0x4cb51d(0x1b1)]===_0x5dfe7f[_0x4cb51d(0x1d8)](_0x5dfe7f[_0x4cb51d(0x1e2)]['id']),_0x59a133[_0x4cb51d(0x169)][_0x4cb51d(0x189)]=_0x59a133['quoted'][_0x4cb51d(0x189)]||_0x59a133[_0x4cb51d(0x169)][_0x4cb51d(0x207)]||_0x59a133[_0x4cb51d(0x169)][_0x4cb51d(0x1bc)]||_0x59a133[_0x4cb51d(0x169)][_0x4cb51d(0x1c7)]||_0x59a133[_0x4cb51d(0x169)]['selectedDisplayText']||_0x59a133[_0x4cb51d(0x169)]['title']||'',_0x59a133[_0x4cb51d(0x169)]['mentionedJid']=_0x59a133[_0x4cb51d(0x19e)][_0x4cb51d(0x1a8)]?_0x59a133['msg']['contextInfo'][_0x4cb51d(0x1e7)]:[],_0x59a133[_0x4cb51d(0x1d7)]=_0x59a133['getQuotedMessage']=async()=>{const _0x2658ef=_0x4cb51d;if(!_0x59a133['quoted']['id'])return![];let _0x5d4c2c=await _0xa63036['loadMessage'](_0x59a133[_0x2658ef(0x1e0)],_0x59a133[_0x2658ef(0x169)]['id'],_0x5dfe7f);return exports[_0x2658ef(0x1bf)](_0x5dfe7f,_0x5d4c2c,_0xa63036);};let _0x38d66e=_0x59a133[_0x4cb51d(0x169)]['fakeObj']=_0x15bce3['fromObject']({'key':{'remoteJid':_0x59a133[_0x4cb51d(0x169)]['chat'],'fromMe':_0x59a133[_0x4cb51d(0x169)][_0x4cb51d(0x1da)],'id':_0x59a133[_0x4cb51d(0x169)]['id']},'message':_0x6cd9ae,..._0x59a133[_0x4cb51d(0x1e1)]?{'participant':_0x59a133['quoted'][_0x4cb51d(0x1b1)]}:{}});_0x59a133[_0x4cb51d(0x169)][_0x4cb51d(0x186)]=()=>_0x5dfe7f[_0x4cb51d(0x180)](_0x59a133['quoted']['chat'],{'delete':_0x38d66e[_0x4cb51d(0x1a0)]}),_0x59a133[_0x4cb51d(0x169)]['copyNForward']=(_0x57028d,_0x10612e=![],_0x33e76f={})=>_0x5dfe7f[_0x4cb51d(0x16d)](_0x57028d,_0x38d66e,_0x10612e,_0x33e76f),_0x59a133[_0x4cb51d(0x169)][_0x4cb51d(0x1c5)]=()=>_0x5dfe7f[_0x4cb51d(0x168)](_0x59a133['quoted']);}}if(_0x59a133[_0x4cb51d(0x19e)][_0x4cb51d(0x181)])_0x59a133[_0x4cb51d(0x1c5)]=()=>_0x5dfe7f[_0x4cb51d(0x168)](_0x59a133[_0x4cb51d(0x19e)]);return _0x59a133[_0x4cb51d(0x189)]=_0x59a133[_0x4cb51d(0x19e)][_0x4cb51d(0x189)]||_0x59a133[_0x4cb51d(0x19e)]['caption']||_0x59a133[_0x4cb51d(0x177)][_0x4cb51d(0x1bc)]||_0x59a133[_0x4cb51d(0x19e)][_0x4cb51d(0x1c7)]||_0x59a133[_0x4cb51d(0x19e)][_0x4cb51d(0x172)]||_0x59a133[_0x4cb51d(0x19e)][_0x4cb51d(0x1c4)]||'',_0x59a133[_0x4cb51d(0x1dc)]=(_0x445f83,_0x5d2aaa=_0x59a133[_0x4cb51d(0x1e0)],_0x41d6f5={})=>Buffer['isBuffer'](_0x445f83)?_0x5dfe7f['sendMedia'](_0x5d2aaa,_0x445f83,_0x4cb51d(0x1f6),'',_0x59a133,{..._0x41d6f5}):_0x5dfe7f[_0x4cb51d(0x198)](_0x5d2aaa,_0x445f83,_0x59a133,{..._0x41d6f5}),_0x59a133['copy']=()=>exports[_0x4cb51d(0x1bf)](_0x5dfe7f,_0x15bce3['fromObject'](_0x15bce3[_0x4cb51d(0x17c)](_0x59a133))),_0x59a133[_0x4cb51d(0x16d)]=(_0x1e9199=_0x59a133[_0x4cb51d(0x1e0)],_0x740440=![],_0x4d7e1e={})=>_0x5dfe7f['copyNForward'](_0x1e9199,_0x59a133,_0x740440,_0x4d7e1e),_0x59a133;}async function startEza(){const _0xf5b9a9=_0x3bbdf2,{state:_0x18a42e,saveCreds:_0x14b896}=await useMultiFileAuthState('./'+(sessionName?sessionName:_0xf5b9a9(0x1f3))),{version:_0x498247,isLatest:_0x26ffad}=await fetchLatestBaileysVersion();console[_0xf5b9a9(0x173)]('using\x20WA\x20v'+_0x498247[_0xf5b9a9(0x18f)]('.')+',\x20isLatest:\x20'+_0x26ffad),console[_0xf5b9a9(0x173)](color(figlet[_0xf5b9a9(0x1fb)](_0xf5b9a9(0x175),{'font':_0xf5b9a9(0x193),'horizontalLayout':'default','vertivalLayout':'default','whitespaceBreak':![]}),_0xf5b9a9(0x1c1)));const _0x17b8b2=EzaConnect({'logger':pino({'level':'silent'}),'printQRInTerminal':!![],'browser':Browsers[_0xf5b9a9(0x163)]('Desktop'),'patchMessageBeforeSending':_0x53348c=>{const _0xc5945f=_0xf5b9a9,_0x3b104a=!!(_0x53348c[_0xc5945f(0x166)]||_0x53348c['templateMessage']||_0x53348c[_0xc5945f(0x1ce)]);return _0x3b104a&&(_0x53348c={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x53348c}}}),_0x53348c;},'auth':_0x18a42e});store[_0xf5b9a9(0x1c2)](_0x17b8b2['ev']),_0x17b8b2['ev']['on'](_0xf5b9a9(0x1d0),async _0x3a7642=>{const _0x3294fa=_0xf5b9a9;try{mek=_0x3a7642['messages'][0x0];if(!mek[_0x3294fa(0x177)])return;mek['message']=Object[_0x3294fa(0x1de)](mek[_0x3294fa(0x177)])[0x0]===_0x3294fa(0x1d9)?mek[_0x3294fa(0x177)][_0x3294fa(0x1d9)][_0x3294fa(0x177)]:mek[_0x3294fa(0x177)];if(mek[_0x3294fa(0x1a0)]&&mek[_0x3294fa(0x1a0)][_0x3294fa(0x204)]==='status@broadcast')return;if(!_0x17b8b2[_0x3294fa(0x1dd)]&&!mek[_0x3294fa(0x1a0)][_0x3294fa(0x1da)]&&_0x3a7642[_0x3294fa(0x192)]==='notify')return;if(mek[_0x3294fa(0x1a0)]['id']['startsWith'](_0x3294fa(0x1cd))&&mek[_0x3294fa(0x1a0)]['id'][_0x3294fa(0x1cc)]===0x10)return;m=smsg(_0x17b8b2,mek,store),require(_0x3294fa(0x1ca))(_0x17b8b2,m,_0x3a7642,store);}catch(_0x747b3f){console[_0x3294fa(0x173)](_0x747b3f);}});const _0x2d8edd=new Map();process['on'](_0xf5b9a9(0x18e),(_0x4a3f5f,_0x445bb2)=>{const _0x2001f7=_0xf5b9a9;_0x2d8edd[_0x2001f7(0x18d)](_0x445bb2,_0x4a3f5f),console[_0x2001f7(0x173)]('Unhandled\x20Rejection\x20at:',_0x445bb2,_0x2001f7(0x1fe),_0x4a3f5f);}),process['on'](_0xf5b9a9(0x1f7),_0x1ebca0=>{const _0xfc8605=_0xf5b9a9;_0x2d8edd[_0xfc8605(0x186)](_0x1ebca0);}),process['on']('Something\x20went\x20wrong',function(_0x525ec2){const _0xcc06d2=_0xf5b9a9;console[_0xcc06d2(0x173)](_0xcc06d2(0x1c6),_0x525ec2);}),_0x17b8b2[_0xf5b9a9(0x1d8)]=_0x28bb89=>{const _0x389eb7=_0xf5b9a9;if(!_0x28bb89)return _0x28bb89;if(/:\d+@/gi[_0x389eb7(0x1af)](_0x28bb89)){let _0x3bc2df=jidDecode(_0x28bb89)||{};return _0x3bc2df[_0x389eb7(0x1e2)]&&_0x3bc2df['server']&&_0x3bc2df['user']+'@'+_0x3bc2df[_0x389eb7(0x1f5)]||_0x28bb89;}else return _0x28bb89;},_0x17b8b2['ev']['on'](_0xf5b9a9(0x190),_0x55e0ae=>{const _0x187e09=_0xf5b9a9;for(let _0x2b9dd3 of _0x55e0ae){let _0x435780=_0x17b8b2[_0x187e09(0x1d8)](_0x2b9dd3['id']);if(store&&store['contacts'])store['contacts'][_0x435780]={'id':_0x435780,'name':_0x2b9dd3[_0x187e09(0x1ea)]};}}),_0x17b8b2[_0xf5b9a9(0x1ef)]=(_0x2fb3ad,_0x69ca3e=![])=>{const _0x1ec901=_0xf5b9a9;id=_0x17b8b2[_0x1ec901(0x1d8)](_0x2fb3ad),_0x69ca3e=_0x17b8b2[_0x1ec901(0x188)]||_0x69ca3e;let _0x20ded9;if(id['endsWith'](_0x1ec901(0x16a)))return new Promise(async _0x2a7619=>{const _0x1f971d=_0x1ec901;_0x20ded9=store[_0x1f971d(0x1ae)][id]||{};if(!(_0x20ded9[_0x1f971d(0x185)]||_0x20ded9[_0x1f971d(0x16f)]))_0x20ded9=_0x17b8b2[_0x1f971d(0x19b)](id)||{};_0x2a7619(_0x20ded9[_0x1f971d(0x185)]||_0x20ded9[_0x1f971d(0x16f)]||PhoneNumber('+'+id[_0x1f971d(0x1b2)](_0x1f971d(0x1b8),''))[_0x1f971d(0x1fc)](_0x1f971d(0x1e3)));});else _0x20ded9=id===_0x1ec901(0x1ac)?{'id':id,'name':_0x1ec901(0x178)}:id===_0x17b8b2['decodeJid'](_0x17b8b2[_0x1ec901(0x1e2)]['id'])?_0x17b8b2[_0x1ec901(0x1e2)]:store[_0x1ec901(0x1ae)][id]||{};return(_0x69ca3e?'':_0x20ded9[_0x1ec901(0x185)])||_0x20ded9[_0x1ec901(0x16f)]||_0x20ded9['verifiedName']||PhoneNumber('+'+_0x2fb3ad[_0x1ec901(0x1b2)](_0x1ec901(0x1b8),''))[_0x1ec901(0x1fc)](_0x1ec901(0x1e3));},_0x17b8b2[_0xf5b9a9(0x1cb)]=_0x3ad6d5=>{const _0x5d02ef=_0xf5b9a9;return _0x17b8b2['query']({'tag':'iq','attrs':{'to':_0x5d02ef(0x1b8),'type':_0x5d02ef(0x18d),'xmlns':_0x5d02ef(0x16c)},'content':[{'tag':'status','attrs':{},'content':Buffer[_0x5d02ef(0x16e)](_0x3ad6d5,_0x5d02ef(0x1b4))}]}),_0x3ad6d5;},_0x17b8b2[_0xf5b9a9(0x1dd)]=!![],_0x17b8b2[_0xf5b9a9(0x195)]=_0x5b6cb5=>smsg(_0x17b8b2,_0x5b6cb5,store),_0x17b8b2['ev']['on'](_0xf5b9a9(0x176),async _0x11d08a=>{const _0x266ae4=_0xf5b9a9,{connection:_0x3b4997,lastDisconnect:_0x16ca0d}=_0x11d08a;if(_0x3b4997==='close'){let _0x49c1e5=new Boom(_0x16ca0d?.['error'])?.[_0x266ae4(0x1f0)][_0x266ae4(0x1b0)];if(_0x49c1e5===DisconnectReason['badSession'])console[_0x266ae4(0x173)](_0x266ae4(0x183)),process[_0x266ae4(0x1bd)]();else{if(_0x49c1e5===DisconnectReason[_0x266ae4(0x1f2)])console[_0x266ae4(0x173)](_0x266ae4(0x1f1)),startEza();else{if(_0x49c1e5===DisconnectReason[_0x266ae4(0x170)])console[_0x266ae4(0x173)](_0x266ae4(0x1a5)),startEza();else{if(_0x49c1e5===DisconnectReason[_0x266ae4(0x1ed)])console[_0x266ae4(0x173)](_0x266ae4(0x1e8)),process['exit']();else{if(_0x49c1e5===DisconnectReason['loggedOut'])console[_0x266ae4(0x173)](_0x266ae4(0x196)+sessionName+_0x266ae4(0x206)),process[_0x266ae4(0x1bd)]();else{if(_0x49c1e5===DisconnectReason['restartRequired'])console[_0x266ae4(0x173)]('Restart\x20Required,\x20Restarting...'),startEza();else _0x49c1e5===DisconnectReason[_0x266ae4(0x205)]?(console[_0x266ae4(0x173)](_0x266ae4(0x1be)),startEza()):(console[_0x266ae4(0x173)]('Unknown\x20DisconnectReason:\x20'+_0x49c1e5+'|'+_0x3b4997),startEza());}}}}}}else{if(_0x3b4997===_0x266ae4(0x1e4)){const _0x6173e7=await _0x17b8b2[_0x266ae4(0x1d8)](_0x17b8b2[_0x266ae4(0x1e2)]['id']);console['log'](color(_0x266ae4(0x187),_0x266ae4(0x1ba))),console[_0x266ae4(0x173)](color(_0x266ae4(0x1f4),_0x266ae4(0x19c))),console['log'](color(_0x266ae4(0x1a6))),_0x17b8b2[_0x266ae4(0x180)](owner+'@s.whatsapp.net',{'text':'*──\x20「\x20DETAIL\x20CONFIGURASI\x20」\x20──*\x0a\x0a*_Owner:_*\x20_'+owner+'_\x0a*_Author:_*\x20_'+author+_0x266ae4(0x1ec)+sessionName+_0x266ae4(0x1a9)+versionbot+'_\x0a\x0a*_'+_0x6173e7+'_*'});}}}),_0x17b8b2['ev']['on'](_0xf5b9a9(0x1c0),_0x14b896),_0x17b8b2['downloadMediaMessage']=async _0x2aad16=>{const _0x25a850=_0xf5b9a9;let _0xc89f1d=(_0x2aad16[_0x25a850(0x19e)]||_0x2aad16)[_0x25a850(0x19d)]||'',_0x4d257a=_0x2aad16[_0x25a850(0x1d1)]?_0x2aad16[_0x25a850(0x1d1)][_0x25a850(0x1b2)](/Message/gi,''):_0xc89f1d['split']('/')[0x0];const _0x145b68=await downloadContentFromMessage(_0x2aad16,_0x4d257a);let _0x17284d=Buffer[_0x25a850(0x16e)]([]);for await(const _0xca5be9 of _0x145b68){_0x17284d=Buffer[_0x25a850(0x1a4)]([_0x17284d,_0xca5be9]);}return _0x17b8b2['sendImageAsSticker']=async(_0x1cf980,_0x40abf1,_0xd22172,_0x266dc3={})=>{const _0x49a4bc=_0x25a850;let _0x1c95e0=Buffer[_0x49a4bc(0x1c9)](_0x40abf1)?_0x40abf1:/^data:.*?\/.*?;base64,/i[_0x49a4bc(0x1af)](_0x40abf1)?Buffer[_0x49a4bc(0x16e)](_0x40abf1['split']`,`[0x1],_0x49a4bc(0x179)):/^https?:\/\//[_0x49a4bc(0x1af)](_0x40abf1)?await await _0x548588(_0x40abf1):fs[_0x49a4bc(0x1d5)](_0x40abf1)?fs[_0x49a4bc(0x17b)](_0x40abf1):Buffer['alloc'](0x0),_0x10f8ce;return _0x266dc3&&(_0x266dc3[_0x49a4bc(0x1d6)]||_0x266dc3['author'])?_0x10f8ce=await writeExifImg(_0x1c95e0,_0x266dc3):_0x10f8ce=await imageToWebp(_0x1c95e0),await _0x17b8b2['sendMessage'](_0x1cf980,{'sticker':{'url':_0x10f8ce},..._0x266dc3},{'quoted':_0xd22172}),_0x10f8ce;},_0x17b8b2[_0x25a850(0x1b9)]=async(_0x1286af,_0x3f8ad5,_0x7940e1,_0x1d678e={})=>{const _0x1fae38=_0x25a850;let _0x1b92d8=Buffer['isBuffer'](_0x3f8ad5)?_0x3f8ad5:/^data:.*?\/.*?;base64,/i['test'](_0x3f8ad5)?Buffer[_0x1fae38(0x16e)](_0x3f8ad5[_0x1fae38(0x191)]`,`[0x1],_0x1fae38(0x179)):/^https?:\/\//[_0x1fae38(0x1af)](_0x3f8ad5)?await await _0x548588(_0x3f8ad5):fs[_0x1fae38(0x1d5)](_0x3f8ad5)?fs[_0x1fae38(0x17b)](_0x3f8ad5):Buffer[_0x1fae38(0x1e9)](0x0),_0x4f29e2;return _0x1d678e&&(_0x1d678e[_0x1fae38(0x1d6)]||_0x1d678e['author'])?_0x4f29e2=await writeExifVid(_0x1b92d8,_0x1d678e):_0x4f29e2=await videoToWebp(_0x1b92d8),await _0x17b8b2[_0x1fae38(0x180)](_0x1286af,{'sticker':{'url':_0x4f29e2},..._0x1d678e},{'quoted':_0x7940e1}),_0x4f29e2;},_0x17284d;},_0x17b8b2[_0xf5b9a9(0x1a7)]=async(_0x1f1506,_0x1fe640,_0x5d4bec=!![])=>{const _0x5eb29a=_0xf5b9a9;let _0x57fa11=_0x1f1506[_0x5eb29a(0x19e)]?_0x1f1506[_0x5eb29a(0x19e)]:_0x1f1506,_0x50b9d2=(_0x1f1506[_0x5eb29a(0x19e)]||_0x1f1506)[_0x5eb29a(0x19d)]||'',_0x32f189=_0x1f1506[_0x5eb29a(0x1d1)]?_0x1f1506[_0x5eb29a(0x1d1)][_0x5eb29a(0x1b2)](/Message/gi,''):_0x50b9d2['split']('/')[0x0];const _0x49c28f=await downloadContentFromMessage(_0x57fa11,_0x32f189);let _0x467ab6=Buffer[_0x5eb29a(0x16e)]([]);for await(const _0x1006b6 of _0x49c28f){_0x467ab6=Buffer[_0x5eb29a(0x1a4)]([_0x467ab6,_0x1006b6]);}let _0x1d518f=await FileType[_0x5eb29a(0x184)](_0x467ab6);return trueFileName=_0x5d4bec?_0x1fe640+'.'+_0x1d518f['ext']:_0x1fe640,await fs[_0x5eb29a(0x16b)](trueFileName,_0x467ab6),trueFileName;};const _0x548588=async(_0x306969,_0x55779f)=>{const _0x5c2378=_0xf5b9a9;try{_0x55779f?_0x55779f:{};const _0xdf872=await axios({'method':'get','url':_0x306969,'headers':{'DNT':0x1,'Upgrade-Insecure-Request':0x1},..._0x55779f,'responseType':_0x5c2378(0x17d)});return _0xdf872[_0x5c2378(0x1a3)];}catch(_0x8ab206){return _0x8ab206;}};return _0x17b8b2['sendImage']=async(_0x58e632,_0x9ae5ee,_0x15d5a7='',_0x35faf4='',_0x436e6c)=>{const _0x1f7744=_0xf5b9a9;let _0x7001ee=Buffer['isBuffer'](_0x9ae5ee)?_0x9ae5ee:/^data:.*?\/.*?;base64,/i[_0x1f7744(0x1af)](_0x9ae5ee)?Buffer[_0x1f7744(0x16e)](_0x9ae5ee[_0x1f7744(0x191)]`,`[0x1],_0x1f7744(0x179)):/^https?:\/\//['test'](_0x9ae5ee)?await await _0x548588(_0x9ae5ee):fs[_0x1f7744(0x1d5)](_0x9ae5ee)?fs[_0x1f7744(0x17b)](_0x9ae5ee):Buffer[_0x1f7744(0x1e9)](0x0);return await _0x17b8b2[_0x1f7744(0x180)](_0x58e632,{'image':_0x7001ee,'caption':_0x15d5a7,..._0x436e6c},{'quoted':_0x35faf4});},_0x17b8b2[_0xf5b9a9(0x198)]=(_0x38606c,_0x504ebf,_0x516685='',_0x31fa39)=>_0x17b8b2['sendMessage'](_0x38606c,{'text':_0x504ebf,..._0x31fa39},{'quoted':_0x516685}),_0x17b8b2[_0xf5b9a9(0x17e)]=(_0x46ac31,_0xb04639,_0x156064='',_0x40ae82=_0x17b8b2['user']['id'],_0x14beb0={})=>{const _0xc5b70e=_0xf5b9a9;let _0xc7c7ab=Object['keys'](_0xb04639[_0xc5b70e(0x177)])[0x0],_0x7081a3=_0xc7c7ab==='ephemeralMessage';_0x7081a3&&(_0xc7c7ab=Object[_0xc5b70e(0x1de)](_0xb04639[_0xc5b70e(0x177)][_0xc5b70e(0x1d9)][_0xc5b70e(0x177)])[0x0]);let _0x495a0e=_0x7081a3?_0xb04639[_0xc5b70e(0x177)][_0xc5b70e(0x1d9)][_0xc5b70e(0x177)]:_0xb04639[_0xc5b70e(0x177)],_0x3ef7e3=_0x495a0e[_0xc7c7ab];if(typeof _0x3ef7e3==='string')_0x495a0e[_0xc7c7ab]=_0x156064||_0x3ef7e3;else{if(_0x3ef7e3[_0xc5b70e(0x207)])_0x3ef7e3[_0xc5b70e(0x207)]=_0x156064||_0x3ef7e3[_0xc5b70e(0x207)];else{if(_0x3ef7e3['text'])_0x3ef7e3['text']=_0x156064||_0x3ef7e3['text'];}}if(typeof _0x3ef7e3!==_0xc5b70e(0x1d4))_0x495a0e[_0xc7c7ab]={..._0x3ef7e3,..._0x14beb0};if(_0xb04639[_0xc5b70e(0x1a0)][_0xc5b70e(0x1a2)])_0x40ae82=_0xb04639[_0xc5b70e(0x1a0)]['participant']=_0x40ae82||_0xb04639['key']['participant'];else{if(_0xb04639[_0xc5b70e(0x1a0)][_0xc5b70e(0x1a2)])_0x40ae82=_0xb04639[_0xc5b70e(0x1a0)][_0xc5b70e(0x1a2)]=_0x40ae82||_0xb04639[_0xc5b70e(0x1a0)][_0xc5b70e(0x1a2)];}if(_0xb04639['key'][_0xc5b70e(0x204)]['includes'](_0xc5b70e(0x1b8)))_0x40ae82=_0x40ae82||_0xb04639['key'][_0xc5b70e(0x204)];else{if(_0xb04639[_0xc5b70e(0x1a0)][_0xc5b70e(0x204)][_0xc5b70e(0x182)](_0xc5b70e(0x1f8)))_0x40ae82=_0x40ae82||_0xb04639[_0xc5b70e(0x1a0)][_0xc5b70e(0x204)];}return _0xb04639[_0xc5b70e(0x1a0)][_0xc5b70e(0x204)]=_0x46ac31,_0xb04639[_0xc5b70e(0x1a0)][_0xc5b70e(0x1da)]=_0x40ae82===_0x17b8b2[_0xc5b70e(0x1e2)]['id'],proto['WebMessageInfo'][_0xc5b70e(0x197)](_0xb04639);},_0x17b8b2;}async function main(){const _0x3e6574=_0x3bbdf2;let _0x2082fe=await fetchJson(_0x3e6574(0x1c8));_0x2082fe[0x0]['lisensi']!==lisensi?console[_0x3e6574(0x173)](_0x3e6574(0x171)):startEza();}function _0x385e(){const _0x3d8efd=['arraybuffer','cMod','GET','sendMessage','url','includes','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','fromBuffer','name','delete','Created\x20By\x20RezaDevv','withoutContact','text','watchFile','pino','cache','set','unhandledRejection','join','contacts.update','split','type','Standard','4nhOpZi','serializeM','Device\x20Logged\x20Out,\x20Please\x20Delete\x20Folder\x20Session\x20','fromObject','sendText','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/95.0.4638.69\x20Safari/537.36','singleSelectReply','groupMetadata','yellow','mimetype','msg','403122wMdQen','key','awesome-phonenumber','participant','data','concat','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','Type\x20.menu\x20to\x20see\x20all\x20menu','downloadAndSaveMediaMessage','contextInfo','_\x0a*_Version:_*\x20_','store','WebMessageInfo','0@s.whatsapp.net','redBright','contacts','test','statusCode','sender','replace','selectedButtonId','utf-8','12594442uTGNGu','@hapi/boom','327093ZGxTSS','@s.whatsapp.net','sendVideoAsSticker','green','silent','conversation','exit','Connection\x20TimedOut,\x20Reconnecting...','smsg','creds.update','cyan','bind','121HNfYlM','title','download','Caught\x20exception:\x20','contentText','https://temp.pesaku.com/lisensi.json','isBuffer','./setting/mechaine','setStatus','length','BAE5','listMessage','stanzaId','messages.upsert','mtype','unwatchFile','1336asFTKY','string','existsSync','packname','getQuotedObj','decodeJid','ephemeralMessage','fromMe','21442bWzueD','reply','public','keys','15546610waabdC','chat','isGroup','user','international','open','chalk','./setting/config','mentionedJid','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Restart\x20Bot','alloc','notify','listResponseMessage','_\x0a*_Session:_*\x20_','connectionReplaced','endsWith','getName','output','Connection\x20closed,\x20reconnecting....','connectionClosed','session','Don\x27t\x20Forget\x20Smile\x20:)','server','file','rejectionHandled','@broadcast','quotedMessage','lodash','textSync','getNumber','isBaileys','reason:','body','viewOnceMessage','productMessage','startsWith','44DsrdIs','remoteJid','timedOut','\x20and\x20Scan\x20Again.','caption','macOS','65781MdzjdS','Update\x20','buttonsMessage','figlet','downloadMediaMessage','quoted','@g.us','writeFileSync','status','copyNForward','from','subject','connectionLost','Silahkan\x20Lakukan\x20Pembelian\x20Lisensi\x20Push-Kontak\x20Melalui\x20WhatsApp\x20085742632270!','selectedDisplayText','log','100WhMvnM','Push-Kontak','connection.update','message','WhatsApp','base64','2103324OyZpJb','readFileSync','toObject'];_0x385e=function(){return _0x3d8efd;};return _0x385e();}main();let file=require['resolve'](__filename);fs[_0x3bbdf2(0x18a)](file,()=>{const _0x92692e=_0x3bbdf2;fs[_0x92692e(0x1d2)](file),console[_0x92692e(0x173)](chalk[_0x92692e(0x1ad)](_0x92692e(0x165)+__filename)),delete require[_0x92692e(0x18c)][file],require(file);});