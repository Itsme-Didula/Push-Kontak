/**
 * Source Code By Reza
 * Don't Forget Smile
 * Thank You :)
*/

function _0x46e3(_0x160b10,_0x73b2ef){const _0x38c09f=_0x38c0();return _0x46e3=function(_0x46e34e,_0x26e38a){_0x46e34e=_0x46e34e-0x167;let _0x3be90e=_0x38c09f[_0x46e34e];return _0x3be90e;},_0x46e3(_0x160b10,_0x73b2ef);}const _0x36857e=_0x46e3;(function(_0x2a4487,_0x135edb){const _0x1c33da=_0x46e3,_0xd17df=_0x2a4487();while(!![]){try{const _0x591f95=-parseInt(_0x1c33da(0x190))/0x1*(-parseInt(_0x1c33da(0x176))/0x2)+-parseInt(_0x1c33da(0x1ed))/0x3+-parseInt(_0x1c33da(0x1b1))/0x4*(-parseInt(_0x1c33da(0x1d6))/0x5)+parseInt(_0x1c33da(0x1d4))/0x6*(-parseInt(_0x1c33da(0x185))/0x7)+parseInt(_0x1c33da(0x175))/0x8+parseInt(_0x1c33da(0x194))/0x9+parseInt(_0x1c33da(0x196))/0xa*(-parseInt(_0x1c33da(0x16b))/0xb);if(_0x591f95===_0x135edb)break;else _0xd17df['push'](_0xd17df['shift']());}catch(_0x1a04d7){_0xd17df['push'](_0xd17df['shift']());}}}(_0x38c0,0xd9569),require('./setting/config'));const {default:EzaConnect,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,makeInMemoryStore,jidDecode,proto,getContentType,Browsers}=require(_0x36857e(0x1e1)),pino=require(_0x36857e(0x1c5)),{Boom}=require(_0x36857e(0x1fa)),fs=require('fs'),axios=require(_0x36857e(0x187)),chalk=require('chalk'),figlet=require('figlet'),_=require(_0x36857e(0x19a)),PhoneNumber=require(_0x36857e(0x203)),store=makeInMemoryStore({'logger':pino()[_0x36857e(0x178)]({'level':_0x36857e(0x170),'stream':_0x36857e(0x1c0)})}),color=(_0x38f512,_0x68d96a)=>{const _0x1803ae=_0x36857e;return!_0x68d96a?chalk['green'](_0x38f512):chalk[_0x1803ae(0x1b8)](_0x68d96a)(_0x38f512);},fetchJson=async(_0x8273b2,_0x34ce1f)=>{const _0xf6d7c1=_0x36857e;try{_0x34ce1f?_0x34ce1f:{};const _0x3f9bd4=await axios({'method':_0xf6d7c1(0x1ae),'url':_0x8273b2,'headers':{'User-Agent':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/95.0.4638.69\x20Safari/537.36'},..._0x34ce1f});return _0x3f9bd4[_0xf6d7c1(0x18b)];}catch(_0x213eda){return _0x213eda;}};function smsg(_0x43e580,_0x346d7a,_0xdee943){const _0x29f6a0=_0x36857e;if(!_0x346d7a)return _0x346d7a;let _0x194c71=proto[_0x29f6a0(0x1b2)];if(_0x346d7a['key']){_0x346d7a['id']=_0x346d7a[_0x29f6a0(0x186)]['id'],_0x346d7a[_0x29f6a0(0x19d)]=_0x346d7a['id'][_0x29f6a0(0x1a2)](_0x29f6a0(0x1ac))&&_0x346d7a['id']['length']===0x10,_0x346d7a[_0x29f6a0(0x1dc)]=_0x346d7a[_0x29f6a0(0x186)][_0x29f6a0(0x1f2)],_0x346d7a['fromMe']=_0x346d7a['key']['fromMe'],_0x346d7a[_0x29f6a0(0x1eb)]=_0x346d7a[_0x29f6a0(0x1dc)]['endsWith'](_0x29f6a0(0x1a0)),_0x346d7a['sender']=_0x43e580['decodeJid'](_0x346d7a[_0x29f6a0(0x1cb)]&&_0x43e580[_0x29f6a0(0x1bd)]['id']||_0x346d7a[_0x29f6a0(0x18d)]||_0x346d7a[_0x29f6a0(0x186)]['participant']||_0x346d7a[_0x29f6a0(0x1dc)]||'');if(_0x346d7a[_0x29f6a0(0x1eb)])_0x346d7a['participant']=_0x43e580[_0x29f6a0(0x209)](_0x346d7a[_0x29f6a0(0x186)][_0x29f6a0(0x18d)])||'';}if(_0x346d7a[_0x29f6a0(0x1e7)]){_0x346d7a[_0x29f6a0(0x1af)]=getContentType(_0x346d7a['message']),_0x346d7a['msg']=_0x346d7a[_0x29f6a0(0x1af)]==_0x29f6a0(0x1d2)?_0x346d7a[_0x29f6a0(0x1e7)][_0x346d7a[_0x29f6a0(0x1af)]][_0x29f6a0(0x1e7)][getContentType(_0x346d7a['message'][_0x346d7a['mtype']][_0x29f6a0(0x1e7)])]:_0x346d7a[_0x29f6a0(0x1e7)][_0x346d7a[_0x29f6a0(0x1af)]],_0x346d7a[_0x29f6a0(0x180)]=_0x346d7a[_0x29f6a0(0x1e7)]['conversation']||_0x346d7a[_0x29f6a0(0x1df)][_0x29f6a0(0x1a9)]||_0x346d7a[_0x29f6a0(0x1df)][_0x29f6a0(0x18e)]||_0x346d7a['mtype']==_0x29f6a0(0x174)&&_0x346d7a['msg'][_0x29f6a0(0x1b4)][_0x29f6a0(0x1d9)]||_0x346d7a[_0x29f6a0(0x1af)]==_0x29f6a0(0x1ab)&&_0x346d7a['msg'][_0x29f6a0(0x16a)]||_0x346d7a[_0x29f6a0(0x1af)]==_0x29f6a0(0x1d2)&&_0x346d7a[_0x29f6a0(0x1df)][_0x29f6a0(0x1a9)]||_0x346d7a[_0x29f6a0(0x18e)];let _0x4f9c78=_0x346d7a[_0x29f6a0(0x1a4)]=_0x346d7a[_0x29f6a0(0x1df)][_0x29f6a0(0x17e)]?_0x346d7a[_0x29f6a0(0x1df)][_0x29f6a0(0x17e)][_0x29f6a0(0x1e4)]:null;_0x346d7a[_0x29f6a0(0x1f7)]=_0x346d7a[_0x29f6a0(0x1df)][_0x29f6a0(0x17e)]?_0x346d7a[_0x29f6a0(0x1df)]['contextInfo'][_0x29f6a0(0x1f7)]:[];if(_0x346d7a[_0x29f6a0(0x1a4)]){let _0x84fcc0=getContentType(_0x4f9c78);_0x346d7a[_0x29f6a0(0x1a4)]=_0x346d7a['quoted'][_0x84fcc0];[_0x29f6a0(0x1cf)][_0x29f6a0(0x173)](_0x84fcc0)&&(_0x84fcc0=getContentType(_0x346d7a[_0x29f6a0(0x1a4)]),_0x346d7a[_0x29f6a0(0x1a4)]=_0x346d7a['quoted'][_0x84fcc0]);if(typeof _0x346d7a[_0x29f6a0(0x1a4)]==='string')_0x346d7a['quoted']={'text':_0x346d7a[_0x29f6a0(0x1a4)]};_0x346d7a[_0x29f6a0(0x1a4)]['mtype']=_0x84fcc0,_0x346d7a[_0x29f6a0(0x1a4)]['id']=_0x346d7a[_0x29f6a0(0x1df)][_0x29f6a0(0x17e)]['stanzaId'],_0x346d7a[_0x29f6a0(0x1a4)][_0x29f6a0(0x1dc)]=_0x346d7a[_0x29f6a0(0x1df)]['contextInfo'][_0x29f6a0(0x1f2)]||_0x346d7a['chat'],_0x346d7a[_0x29f6a0(0x1a4)][_0x29f6a0(0x19d)]=_0x346d7a[_0x29f6a0(0x1a4)]['id']?_0x346d7a[_0x29f6a0(0x1a4)]['id'][_0x29f6a0(0x1a2)](_0x29f6a0(0x1ac))&&_0x346d7a['quoted']['id'][_0x29f6a0(0x172)]===0x10:![],_0x346d7a['quoted']['sender']=_0x43e580[_0x29f6a0(0x209)](_0x346d7a[_0x29f6a0(0x1df)][_0x29f6a0(0x17e)][_0x29f6a0(0x18d)]),_0x346d7a['quoted'][_0x29f6a0(0x1cb)]=_0x346d7a[_0x29f6a0(0x1a4)][_0x29f6a0(0x208)]===_0x43e580[_0x29f6a0(0x209)](_0x43e580[_0x29f6a0(0x1bd)]['id']),_0x346d7a['quoted'][_0x29f6a0(0x18e)]=_0x346d7a['quoted'][_0x29f6a0(0x18e)]||_0x346d7a[_0x29f6a0(0x1a4)]['caption']||_0x346d7a[_0x29f6a0(0x1a4)][_0x29f6a0(0x19e)]||_0x346d7a[_0x29f6a0(0x1a4)][_0x29f6a0(0x182)]||_0x346d7a[_0x29f6a0(0x1a4)][_0x29f6a0(0x18c)]||_0x346d7a[_0x29f6a0(0x1a4)]['title']||'',_0x346d7a['quoted'][_0x29f6a0(0x1f7)]=_0x346d7a[_0x29f6a0(0x1df)][_0x29f6a0(0x17e)]?_0x346d7a[_0x29f6a0(0x1df)]['contextInfo']['mentionedJid']:[],_0x346d7a[_0x29f6a0(0x1c2)]=_0x346d7a[_0x29f6a0(0x1f1)]=async()=>{const _0x2090eb=_0x29f6a0;if(!_0x346d7a[_0x2090eb(0x1a4)]['id'])return![];let _0x247ba8=await _0xdee943[_0x2090eb(0x1f4)](_0x346d7a[_0x2090eb(0x1dc)],_0x346d7a['quoted']['id'],_0x43e580);return exports[_0x2090eb(0x1cd)](_0x43e580,_0x247ba8,_0xdee943);};let _0x3ac8e7=_0x346d7a[_0x29f6a0(0x1a4)]['fakeObj']=_0x194c71['fromObject']({'key':{'remoteJid':_0x346d7a[_0x29f6a0(0x1a4)][_0x29f6a0(0x1dc)],'fromMe':_0x346d7a[_0x29f6a0(0x1a4)][_0x29f6a0(0x1cb)],'id':_0x346d7a['quoted']['id']},'message':_0x4f9c78,..._0x346d7a['isGroup']?{'participant':_0x346d7a[_0x29f6a0(0x1a4)][_0x29f6a0(0x208)]}:{}});_0x346d7a[_0x29f6a0(0x1a4)]['delete']=()=>_0x43e580[_0x29f6a0(0x206)](_0x346d7a[_0x29f6a0(0x1a4)][_0x29f6a0(0x1dc)],{'delete':_0x3ac8e7[_0x29f6a0(0x186)]}),_0x346d7a[_0x29f6a0(0x1a4)]['copyNForward']=(_0x1bc2aa,_0x2f59f6=![],_0x28c583={})=>_0x43e580[_0x29f6a0(0x1ad)](_0x1bc2aa,_0x3ac8e7,_0x2f59f6,_0x28c583),_0x346d7a[_0x29f6a0(0x1a4)][_0x29f6a0(0x192)]=()=>_0x43e580[_0x29f6a0(0x1da)](_0x346d7a[_0x29f6a0(0x1a4)]);}}if(_0x346d7a[_0x29f6a0(0x1df)][_0x29f6a0(0x1b7)])_0x346d7a[_0x29f6a0(0x192)]=()=>_0x43e580['downloadMediaMessage'](_0x346d7a['msg']);return _0x346d7a['text']=_0x346d7a[_0x29f6a0(0x1df)][_0x29f6a0(0x18e)]||_0x346d7a['msg'][_0x29f6a0(0x1a9)]||_0x346d7a[_0x29f6a0(0x1e7)]['conversation']||_0x346d7a[_0x29f6a0(0x1df)][_0x29f6a0(0x182)]||_0x346d7a[_0x29f6a0(0x1df)][_0x29f6a0(0x18c)]||_0x346d7a[_0x29f6a0(0x1df)]['title']||'',_0x346d7a[_0x29f6a0(0x1b9)]=(_0x22bc0d,_0x14f6a5=_0x346d7a[_0x29f6a0(0x1dc)],_0x277f4c={})=>Buffer['isBuffer'](_0x22bc0d)?_0x43e580['sendMedia'](_0x14f6a5,_0x22bc0d,_0x29f6a0(0x19c),'',_0x346d7a,{..._0x277f4c}):_0x43e580[_0x29f6a0(0x1a6)](_0x14f6a5,_0x22bc0d,_0x346d7a,{..._0x277f4c}),_0x346d7a['copy']=()=>exports[_0x29f6a0(0x1cd)](_0x43e580,_0x194c71['fromObject'](_0x194c71[_0x29f6a0(0x191)](_0x346d7a))),_0x346d7a[_0x29f6a0(0x1ad)]=(_0x5536c4=_0x346d7a[_0x29f6a0(0x1dc)],_0x204d70=![],_0x28b93c={})=>_0x43e580['copyNForward'](_0x5536c4,_0x346d7a,_0x204d70,_0x28b93c),_0x346d7a;}async function startEza(){const _0x14b235=_0x36857e,{state:_0x577e4c,saveCreds:_0x426491}=await useMultiFileAuthState('./'+(sessionName?sessionName:_0x14b235(0x1bf))),{version:_0x40d8a1,isLatest:_0xdea3ee}=await fetchLatestBaileysVersion();console['log']('using\x20WA\x20v'+_0x40d8a1[_0x14b235(0x19b)]('.')+_0x14b235(0x1ea)+_0xdea3ee),console[_0x14b235(0x1ff)](color(figlet[_0x14b235(0x1bc)]('Push-Kontak',{'font':_0x14b235(0x1c7),'horizontalLayout':_0x14b235(0x197),'vertivalLayout':_0x14b235(0x197),'whitespaceBreak':![]}),_0x14b235(0x201)));const _0x148539=EzaConnect({'logger':pino({'level':'silent'}),'printQRInTerminal':!![],'browser':Browsers[_0x14b235(0x1a7)](_0x14b235(0x1f0)),'patchMessageBeforeSending':_0x24c348=>{const _0x5f157f=_0x14b235,_0x3398d2=!!(_0x24c348[_0x5f157f(0x205)]||_0x24c348[_0x5f157f(0x17c)]||_0x24c348[_0x5f157f(0x16d)]);return _0x3398d2&&(_0x24c348={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x24c348}}}),_0x24c348;},'auth':_0x577e4c});store[_0x14b235(0x200)](_0x148539['ev']),_0x148539['ev']['on'](_0x14b235(0x16e),async _0x2e54d0=>{const _0x294a91=_0x14b235;try{mek=_0x2e54d0[_0x294a91(0x1aa)][0x0];if(!mek[_0x294a91(0x1e7)])return;mek[_0x294a91(0x1e7)]=Object['keys'](mek[_0x294a91(0x1e7)])[0x0]===_0x294a91(0x1c6)?mek[_0x294a91(0x1e7)][_0x294a91(0x1c6)][_0x294a91(0x1e7)]:mek[_0x294a91(0x1e7)];if(mek['key']&&mek['key'][_0x294a91(0x1f2)]===_0x294a91(0x1dd))return;if(!_0x148539[_0x294a91(0x1c1)]&&!mek['key'][_0x294a91(0x1cb)]&&_0x2e54d0[_0x294a91(0x1d8)]===_0x294a91(0x195))return;if(mek[_0x294a91(0x186)]['id'][_0x294a91(0x1a2)]('BAE5')&&mek[_0x294a91(0x186)]['id']['length']===0x10)return;m=smsg(_0x148539,mek,store),require(_0x294a91(0x1fd))(_0x148539,m,_0x2e54d0,store);}catch(_0x18746f){console[_0x294a91(0x1ff)](_0x18746f);}});const _0x541dd4=new Map();process['on'](_0x14b235(0x1a5),(_0x3519a1,_0x15de5b)=>{const _0x2dbc4c=_0x14b235;_0x541dd4[_0x2dbc4c(0x16c)](_0x15de5b,_0x3519a1),console['log'](_0x2dbc4c(0x1bb),_0x15de5b,'reason:',_0x3519a1);}),process['on'](_0x14b235(0x1be),_0x95c142=>{const _0x5ec4ba=_0x14b235;_0x541dd4[_0x5ec4ba(0x1db)](_0x95c142);}),process['on']('Something\x20went\x20wrong',function(_0x5f2ae4){const _0x1d6903=_0x14b235;console[_0x1d6903(0x1ff)]('Caught\x20exception:\x20',_0x5f2ae4);}),_0x148539[_0x14b235(0x209)]=_0x575b46=>{const _0x5ee482=_0x14b235;if(!_0x575b46)return _0x575b46;if(/:\d+@/gi[_0x5ee482(0x1b5)](_0x575b46)){let _0x672976=jidDecode(_0x575b46)||{};return _0x672976[_0x5ee482(0x1bd)]&&_0x672976[_0x5ee482(0x1f3)]&&_0x672976['user']+'@'+_0x672976[_0x5ee482(0x1f3)]||_0x575b46;}else return _0x575b46;},_0x148539['ev']['on'](_0x14b235(0x184),_0x4fc032=>{const _0x3d405a=_0x14b235;for(let _0x597f9e of _0x4fc032){let _0x51a37d=_0x148539['decodeJid'](_0x597f9e['id']);if(store&&store[_0x3d405a(0x199)])store['contacts'][_0x51a37d]={'id':_0x51a37d,'name':_0x597f9e['notify']};}}),_0x148539[_0x14b235(0x1ee)]=(_0xde9bfe,_0x33851a=![])=>{const _0x257aff=_0x14b235;id=_0x148539['decodeJid'](_0xde9bfe),_0x33851a=_0x148539[_0x257aff(0x1b3)]||_0x33851a;let _0x5ecc86;if(id['endsWith'](_0x257aff(0x1a0)))return new Promise(async _0x1c2678=>{const _0x51cc1c=_0x257aff;_0x5ecc86=store[_0x51cc1c(0x199)][id]||{};if(!(_0x5ecc86['name']||_0x5ecc86[_0x51cc1c(0x1c8)]))_0x5ecc86=_0x148539[_0x51cc1c(0x1c9)](id)||{};_0x1c2678(_0x5ecc86['name']||_0x5ecc86[_0x51cc1c(0x1c8)]||PhoneNumber('+'+id[_0x51cc1c(0x1de)](_0x51cc1c(0x169),''))[_0x51cc1c(0x1e9)](_0x51cc1c(0x1e2)));});else _0x5ecc86=id===_0x257aff(0x1d7)?{'id':id,'name':_0x257aff(0x183)}:id===_0x148539[_0x257aff(0x209)](_0x148539['user']['id'])?_0x148539[_0x257aff(0x1bd)]:store[_0x257aff(0x199)][id]||{};return(_0x33851a?'':_0x5ecc86[_0x257aff(0x1d1)])||_0x5ecc86['subject']||_0x5ecc86['verifiedName']||PhoneNumber('+'+_0xde9bfe[_0x257aff(0x1de)]('@s.whatsapp.net',''))[_0x257aff(0x1e9)](_0x257aff(0x1e2));},_0x148539[_0x14b235(0x193)]=_0x5a48c8=>{const _0x130cb0=_0x14b235;return _0x148539['query']({'tag':'iq','attrs':{'to':'@s.whatsapp.net','type':'set','xmlns':_0x130cb0(0x1e5)},'content':[{'tag':'status','attrs':{},'content':Buffer[_0x130cb0(0x1c3)](_0x5a48c8,_0x130cb0(0x189))}]}),_0x5a48c8;},_0x148539[_0x14b235(0x1c1)]=!![],_0x148539[_0x14b235(0x171)]=_0x5880bc=>smsg(_0x148539,_0x5880bc,store),_0x148539['ev']['on']('connection.update',async _0x54ee0d=>{const _0x458072=_0x14b235,{connection:_0x3daccd,lastDisconnect:_0x2341cc}=_0x54ee0d;if(_0x3daccd==='close'){let _0x40c5f2=new Boom(_0x2341cc?.[_0x458072(0x204)])?.[_0x458072(0x18a)][_0x458072(0x207)];if(_0x40c5f2===DisconnectReason['badSession'])console[_0x458072(0x1ff)](_0x458072(0x1fe)),process[_0x458072(0x181)]();else{if(_0x40c5f2===DisconnectReason[_0x458072(0x177)])console['log'](_0x458072(0x198)),startEza();else{if(_0x40c5f2===DisconnectReason[_0x458072(0x1ef)])console[_0x458072(0x1ff)](_0x458072(0x167)),startEza();else{if(_0x40c5f2===DisconnectReason['connectionReplaced'])console['log'](_0x458072(0x1ec)),process['exit']();else{if(_0x40c5f2===DisconnectReason[_0x458072(0x1ce)])console[_0x458072(0x1ff)](_0x458072(0x1a1)+sessionName+_0x458072(0x17f)),process['exit']();else{if(_0x40c5f2===DisconnectReason[_0x458072(0x1b0)])console[_0x458072(0x1ff)](_0x458072(0x1fb)),startEza();else _0x40c5f2===DisconnectReason[_0x458072(0x16f)]?(console[_0x458072(0x1ff)](_0x458072(0x179)),startEza()):(console['log'](_0x458072(0x202)+_0x40c5f2+'|'+_0x3daccd),startEza());}}}}}}else{if(_0x3daccd==='open'){const _0x16bb75=await _0x148539['decodeJid'](_0x148539[_0x458072(0x1bd)]['id']);console[_0x458072(0x1ff)](color(_0x458072(0x1e6),_0x458072(0x17a))),console[_0x458072(0x1ff)](color(_0x458072(0x1d5),_0x458072(0x1fc))),console[_0x458072(0x1ff)](color(_0x458072(0x1d3))),_0x148539[_0x458072(0x206)](owner+_0x458072(0x169),{'text':_0x458072(0x1a8)+owner+_0x458072(0x168)+author+'_\x0a*_Session:_*\x20_'+sessionName+_0x458072(0x188)+versionbot+_0x458072(0x1d0)+_0x16bb75+'_*'});}}}),_0x148539['ev']['on'](_0x14b235(0x18f),_0x426491);const _0x4001db=async(_0x4da82c,_0x427304)=>{const _0x1b3f31=_0x14b235;try{_0x427304?_0x427304:{};const _0xa05334=await axios({'method':_0x1b3f31(0x1ba),'url':_0x4da82c,'headers':{'DNT':0x1,'Upgrade-Insecure-Request':0x1},..._0x427304,'responseType':'arraybuffer'});return _0xa05334['data'];}catch(_0x5d7ee0){return _0x5d7ee0;}};return _0x148539['sendImage']=async(_0x28acd2,_0x2bea0f,_0x146ade='',_0x41a587='',_0x203f62)=>{const _0x416527=_0x14b235;let _0x5215bf=Buffer['isBuffer'](_0x2bea0f)?_0x2bea0f:/^data:.*?\/.*?;base64,/i[_0x416527(0x1b5)](_0x2bea0f)?Buffer[_0x416527(0x1c3)](_0x2bea0f[_0x416527(0x1e8)]`,`[0x1],'base64'):/^https?:\/\//['test'](_0x2bea0f)?await await _0x4001db(_0x2bea0f):fs[_0x416527(0x1e3)](_0x2bea0f)?fs[_0x416527(0x1a3)](_0x2bea0f):Buffer[_0x416527(0x17b)](0x0);return await _0x148539['sendMessage'](_0x28acd2,{'image':_0x5215bf,'caption':_0x146ade,..._0x203f62},{'quoted':_0x41a587});},_0x148539[_0x14b235(0x1a6)]=(_0x2c5103,_0x3e1b57,_0x32316a='',_0x55dca9)=>_0x148539['sendMessage'](_0x2c5103,{'text':_0x3e1b57,..._0x55dca9},{'quoted':_0x32316a}),_0x148539['cMod']=(_0x1ad303,_0x5bc8d9,_0x27ff72='',_0x3404ff=_0x148539[_0x14b235(0x1bd)]['id'],_0x20cc40={})=>{const _0x48aff1=_0x14b235;let _0x129447=Object[_0x48aff1(0x1e0)](_0x5bc8d9[_0x48aff1(0x1e7)])[0x0],_0x4bd475=_0x129447===_0x48aff1(0x1c6);_0x4bd475&&(_0x129447=Object[_0x48aff1(0x1e0)](_0x5bc8d9[_0x48aff1(0x1e7)][_0x48aff1(0x1c6)]['message'])[0x0]);let _0x3c5868=_0x4bd475?_0x5bc8d9[_0x48aff1(0x1e7)][_0x48aff1(0x1c6)][_0x48aff1(0x1e7)]:_0x5bc8d9[_0x48aff1(0x1e7)],_0x4ffd60=_0x3c5868[_0x129447];if(typeof _0x4ffd60==='string')_0x3c5868[_0x129447]=_0x27ff72||_0x4ffd60;else{if(_0x4ffd60['caption'])_0x4ffd60[_0x48aff1(0x1a9)]=_0x27ff72||_0x4ffd60[_0x48aff1(0x1a9)];else{if(_0x4ffd60['text'])_0x4ffd60['text']=_0x27ff72||_0x4ffd60[_0x48aff1(0x18e)];}}if(typeof _0x4ffd60!==_0x48aff1(0x1cc))_0x3c5868[_0x129447]={..._0x4ffd60,..._0x20cc40};if(_0x5bc8d9[_0x48aff1(0x186)][_0x48aff1(0x18d)])_0x3404ff=_0x5bc8d9[_0x48aff1(0x186)][_0x48aff1(0x18d)]=_0x3404ff||_0x5bc8d9[_0x48aff1(0x186)]['participant'];else{if(_0x5bc8d9[_0x48aff1(0x186)]['participant'])_0x3404ff=_0x5bc8d9['key'][_0x48aff1(0x18d)]=_0x3404ff||_0x5bc8d9[_0x48aff1(0x186)][_0x48aff1(0x18d)];}if(_0x5bc8d9[_0x48aff1(0x186)][_0x48aff1(0x1f2)][_0x48aff1(0x173)](_0x48aff1(0x169)))_0x3404ff=_0x3404ff||_0x5bc8d9['key'][_0x48aff1(0x1f2)];else{if(_0x5bc8d9[_0x48aff1(0x186)][_0x48aff1(0x1f2)][_0x48aff1(0x173)]('@broadcast'))_0x3404ff=_0x3404ff||_0x5bc8d9[_0x48aff1(0x186)][_0x48aff1(0x1f2)];}return _0x5bc8d9[_0x48aff1(0x186)][_0x48aff1(0x1f2)]=_0x1ad303,_0x5bc8d9[_0x48aff1(0x186)][_0x48aff1(0x1cb)]=_0x3404ff===_0x148539[_0x48aff1(0x1bd)]['id'],proto[_0x48aff1(0x1b2)][_0x48aff1(0x1ca)](_0x5bc8d9);},_0x148539;}function _0x38c0(){const _0x5c4360=['watchFile','@g.us','Device\x20Logged\x20Out,\x20Please\x20Delete\x20Folder\x20Session\x20','startsWith','readFileSync','quoted','unhandledRejection','sendText','macOS','*──\x20「\x20DETAIL\x20CONFIGURASI\x20」\x20──*\x0a\x0a*_Owner:_*\x20_','caption','messages','buttonsResponseMessage','BAE5','copyNForward','GET','mtype','restartRequired','888UKVrRi','WebMessageInfo','withoutContact','singleSelectReply','test','cache','url','keyword','reply','get','Unhandled\x20Rejection\x20at:','textSync','user','rejectionHandled','session','store','public','getQuotedObj','from','Silahkan\x20Lakukan\x20Pembelian\x20Lisensi\x20Push-Kontak\x20Melalui\x20WhatsApp\x20085742632270!','pino','ephemeralMessage','Standard','subject','groupMetadata','fromObject','fromMe','string','smsg','loggedOut','productMessage','_\x0a\x0a*_','name','viewOnceMessage','Type\x20.menu\x20to\x20see\x20all\x20menu','81186aMRgmY','Don\x27t\x20Forget\x20Smile\x20:)','7425kZZpvy','0@s.whatsapp.net','type','selectedRowId','downloadMediaMessage','delete','chat','status@broadcast','replace','msg','keys','@adiwajshing/baileys','international','existsSync','quotedMessage','status','Created\x20By\x20RezaDevv','message','split','getNumber',',\x20isLatest:\x20','isGroup','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Restart\x20Bot','922977LLrMcR','getName','connectionLost','Desktop','getQuotedMessage','remoteJid','server','loadMessage','redBright','unwatchFile','mentionedJid','https://temp.pesaku.com/lisensi.json','resolve','@hapi/boom','Restart\x20Required,\x20Restarting...','yellow','./setting/mechaine','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','log','bind','cyan','Unknown\x20DisconnectReason:\x20','awesome-phonenumber','error','buttonsMessage','sendMessage','statusCode','sender','decodeJid','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','_\x0a*_Author:_*\x20_','@s.whatsapp.net','selectedButtonId','28468Dbobil','set','listMessage','messages.upsert','timedOut','silent','serializeM','length','includes','listResponseMessage','13686072WrtOQn','20MCXjnt','connectionClosed','child','Connection\x20TimedOut,\x20Reconnecting...','green','alloc','templateMessage','Update\x20','contextInfo','\x20and\x20Scan\x20Again.','body','exit','contentText','WhatsApp','contacts.update','665jDTAfK','key','axios','_\x0a*_Version:_*\x20_','utf-8','output','data','selectedDisplayText','participant','text','creds.update','148462wyifZQ','toObject','download','setStatus','3108960zbaSFa','notify','5360xrOukd','default','Connection\x20closed,\x20reconnecting....','contacts','lodash','join','file','isBaileys','conversation'];_0x38c0=function(){return _0x5c4360;};return _0x38c0();}async function main(){const _0x1a50ac=_0x36857e;let _0x51b7d4=await fetchJson(_0x1a50ac(0x1f8));_0x51b7d4[0x0]['lisensi']!==lisensi?console[_0x1a50ac(0x1ff)](_0x1a50ac(0x1c4)):startEza();}main();let file=require[_0x36857e(0x1f9)](__filename);fs[_0x36857e(0x19f)](file,()=>{const _0x3e727a=_0x36857e;fs[_0x3e727a(0x1f6)](file),console['log'](chalk[_0x3e727a(0x1f5)](_0x3e727a(0x17d)+__filename)),delete require[_0x3e727a(0x1b6)][file],require(file);});