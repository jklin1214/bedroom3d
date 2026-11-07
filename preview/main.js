window.__INT=1;window.__PDUP=new Set(["btile", "floor_oak", "ktile", "ceiling", "molding", "wall", "counter", "door", "steel", "metal", "skirting", "dark", "cabinet", "vase", "brass", "books", "shade", "slats", "curtain", "sheer", "opal", "oak", "task_fabric", "rug2", "headboard", "oak_dark", "boucle", "kwall_v", "kwall_p", "kfurn_v", "kfurn_p", "kwall_g", "kwall_b", "kacc_v", "kacc_p", "dleaf_o", "dhw_o", "dmold_o", "dleaf_c", "dhw_c", "dmold_c"]);window.__PCO=new Set(["kacc_g", "kfurn_g", "kbed_g", "kbed2_g", "kacc_b", "kfurn_b", "kbed_b", "kbed2_b"]);window.__PLAYON=0;window.__cutn=!1;window.__xhv=(o)=>{const nm=(o.userData&&o.userData.name)||"",p=/__p$/.test(nm),b=nm.replace(/__p$/,"");if(window.__cutn)return!1;return p?!!window.__PLAYON:!(window.__PLAYON&&window.__PDUP.has(b));};

var th="160",as={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pp=0,lu=1,Ip=2;var Zd=1,nh=2,ci=3,In=0,qt=1,Sn=2;var Jn=0,Ys=1,Qi=2,cu=3,hu=4,Lp=5,Yi=100,Dp=101,Up=102,uu=103,du=104,Np=200,Fp=201,Op=202,Bp=203,hc=204,uc=205,kp=206,zp=207,Hp=208,Vp=209,Gp=210,Wp=211,Xp=212,qp=213,Yp=214,Zp=0,Jp=1,Kp=2,ao=3,$p=4,jp=5,Qp=6,em=7,Jd=0,tm=1,nm=2,Ri=0,ih=1,sh=2,rh=3,ah=4,im=5,aa=6;var Kd=300,Ks=301,$s=302,es=303,dc=304,Vo=306,Ii=1e3,zn=1001,fc=1002,dn=1003,fu=1004;var Cl=1005;var _n=1006,sm=1007;var Or=1008;var Ci=1009,rm=1010,am=1011,oh=1012,$d=1013,Ti=1014,Ai=1015,rn=1016,jd=1017,Qd=1018,Ki=1020,om=1021,Hn=1023,lm=1024,cm=1025,$i=1026,js=1027,hm=1028,ef=1029,um=1030,tf=1031,nf=1033,Pl=33776,Il=33777,Ll=33778,Dl=33779,pu=35840,mu=35841,gu=35842,_u=35843,sf=36196,xu=37492,vu=37496,yu=37808,Mu=37809,Eu=37810,bu=37811,Su=37812,wu=37813,Tu=37814,Au=37815,Ru=37816,Cu=37817,Pu=37818,Iu=37819,Lu=37820,Du=37821,Ul=36492,Uu=36494,Nu=36495,dm=36283,Fu=36284,Ou=36285,Bu=36286;var oo=2300,lo=2301,Nl=2302,ku=2400,zu=2401,Hu=2402;var rf=3e3,ji=3001,fm=3200,pm=3201,af=0,mm=1,xn="",Et="srgb",di="srgb-linear",lh="display-p3",Go="display-p3-linear",co="linear",gt="srgb",ho="rec709",uo="p3";var bs=7680;var Vu=519,gm=512,_m=513,xm=514,of=515,vm=516,ym=517,Mm=518,Em=519,pc=35044;var Gu="300 es",mc=1035,hi=2e3,fo=2001,$n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=1234567,Ir=Math.PI/180,Br=180/Math.PI;function Kn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Ft(i,e,t){return Math.max(e,Math.min(t,i))}function ch(i,e){return(i%e+e)%e}function bm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Sm(i,e,t){return i!==e?(t-i)/(e-i):0}function Lr(i,e,t){return(1-t)*i+t*e}function wm(i,e,t,n){return Lr(i,e,1-Math.exp(-t*n))}function Tm(i,e=1){return e-Math.abs(ch(i,e*2)-e)}function Am(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Rm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Pm(i,e){return i+Math.random()*(e-i)}function Im(i){return i*(.5-Math.random())}function Lm(i){i!==void 0&&(Wu=i);let e=Wu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dm(i){return i*Ir}function Um(i){return i*Br}function gc(i){return(i&i-1)===0&&i!==0}function Nm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function po(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Dt={DEG2RAD:Ir,RAD2DEG:Br,generateUUID:Kn,clamp:Ft,euclideanModulo:ch,mapLinear:bm,inverseLerp:Sm,lerp:Lr,damp:wm,pingpong:Tm,smoothstep:Am,smootherstep:Rm,randInt:Cm,randFloat:Pm,randFloatSpread:Im,seededRandom:Lm,degToRad:Dm,radToDeg:Um,isPowerOfTwo:gc,ceilPowerOfTwo:Nm,floorPowerOfTwo:po,setQuaternionFromProperEuler:Fm,normalize:pt,denormalize:Zn},se=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],d=s[6],v=s[1],x=s[4],E=s[7],P=s[2],R=s[5],C=s[8];return r[0]=o*_+a*v+l*P,r[3]=o*p+a*x+l*R,r[6]=o*d+a*E+l*C,r[1]=c*_+h*v+u*P,r[4]=c*p+h*x+u*R,r[7]=c*d+h*E+u*C,r[2]=f*_+m*v+g*P,r[5]=f*p+m*x+g*R,r[8]=f*d+m*E+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=t*u+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fl.makeScale(e,t)),this}rotate(e){return this.premultiply(Fl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fl=new tt;function lf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Om(){let i=kr("canvas");return i.style.display="block",i}var Xu={};function Dr(i){i in Xu||(Xu[i]=!0,console.warn(i))}var qu=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yu=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Aa={[di]:{transfer:co,primaries:ho,toReference:i=>i,fromReference:i=>i},[Et]:{transfer:gt,primaries:ho,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Go]:{transfer:co,primaries:uo,toReference:i=>i.applyMatrix3(Yu),fromReference:i=>i.applyMatrix3(qu)},[lh]:{transfer:gt,primaries:uo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Yu),fromReference:i=>i.applyMatrix3(qu).convertLinearToSRGB()}},Bm=new Set([di,Go]),ut={enabled:!0,_workingColorSpace:di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Bm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Aa[e].toReference,s=Aa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Aa[i].primaries},getTransfer:function(i){return i===xn?co:Aa[i].transfer}};function Zs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ol(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ss,mo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ss===void 0&&(Ss=kr("canvas")),Ss.width=e.width,Ss.height=e.height;let n=Ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=kr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zs(t[n]/255)*255):t[n]=Zs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},km=0,go=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Kn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bl(s[o].image)):r.push(Bl(s[o]))}else r=Bl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zm=0,fn=class i extends $n{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=zn,s=zn,r=_n,o=Or,a=Hn,l=Ci,c=i.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Kn(),this.name="",this.source=new go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ji?Et:xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Et?ji:rf}set encoding(e){Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ji?Et:xn}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Kd;fn.DEFAULT_ANISOTROPY=1;var yt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,E=(m+1)/2,P=(d+1)/2,R=(h+f)/4,C=(u+_)/4,O=(g+p)/4;return x>E&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=R/n,r=C/n):E>P?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=R/s,r=O/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=C/r,s=O/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_c=class extends $n{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Dr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ji?Et:xn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new go(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends _c{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_o=class extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xc=class extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==m||h!==g){let p=1-a,d=l*f+c*m+h*g+u*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let P=Math.sqrt(x),R=Math.atan2(P,d*v);p=Math.sin(p*R)/P,a=Math.sin(a*R)/P}let E=a*v;if(l=l*p+f*E,c=c*p+m*E,h=h*p+g*E,u=u*p+_*E,p===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-a*m,e[t+2]=c*g+h*m+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kl.copy(this).projectOnVector(e),this.sub(kl)}reflect(e){return this.sub(kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kl=new A,Zu=new Zt,Ln=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ra.copy(n.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),Ca.subVectors(this.max,Er),ws.subVectors(e.a,Er),Ts.subVectors(e.b,Er),As.subVectors(e.c,Er),Mi.subVectors(Ts,ws),Ei.subVectors(As,Ts),Vi.subVectors(ws,As);let t=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-Vi.z,Vi.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,Vi.z,0,-Vi.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-Vi.y,Vi.x,0];return!zl(t,ws,Ts,As,Ca)||(t=[1,0,0,0,1,0,0,0,1],!zl(t,ws,Ts,As,Ca))?!1:(Pa.crossVectors(Mi,Ei),t=[Pa.x,Pa.y,Pa.z],zl(t,ws,Ts,As,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},si=[new A,new A,new A,new A,new A,new A,new A,new A],On=new A,Ra=new Ln,ws=new A,Ts=new A,As=new A,Mi=new A,Ei=new A,Vi=new A,Er=new A,Ca=new A,Pa=new A,Gi=new A;function zl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gi.fromArray(i,r);let a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Hm=new Ln,br=new A,Hl=new A,fi=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Hm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(Hl)),this.expandByPoint(br.copy(e.center).sub(Hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ri=new A,Vl=new A,Ia=new A,bi=new A,Gl=new A,La=new A,Wl=new A,Li=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Vl.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Vl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ia),a=bi.dot(this.direction),l=-bi.dot(Ia),c=bi.lengthSq(),h=Math.abs(1-o*o),u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vl).addScaledVector(Ia,f),m}intersectSphere(e,t){ri.subVectors(e.center,this.origin);let n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,s,r){Gl.subVectors(t,e),La.subVectors(n,e),Wl.crossVectors(Gl,La);let o=this.direction.dot(Wl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);let l=a*this.direction.dot(La.crossVectors(bi,La));if(l<0)return null;let c=a*this.direction.dot(Gl.cross(bi));if(c<0||l+c>o)return null;let h=-a*bi.dot(Wl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rt=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,f,m,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,m,g,_,p)}set(e,t,n,s,r,o,a,l,c,h,u,f,m,g,_,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),o=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,m=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,m=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,m=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,m=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vm,e,Gm)}lookAt(e,t,n){let s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Si.crossVectors(n,En),Si.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Si.crossVectors(n,En)),Si.normalize(),Da.crossVectors(En,Si),s[0]=Si.x,s[4]=Da.x,s[8]=En.x,s[1]=Si.y,s[5]=Da.y,s[9]=En.y,s[2]=Si.z,s[6]=Da.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],v=n[3],x=n[7],E=n[11],P=n[15],R=s[0],C=s[4],O=s[8],y=s[12],b=s[1],B=s[5],X=s[9],U=s[13],I=s[2],F=s[6],G=s[10],K=s[14],te=s[3],Z=s[7],re=s[11],ee=s[15];return r[0]=o*R+a*b+l*I+c*te,r[4]=o*C+a*B+l*F+c*Z,r[8]=o*O+a*X+l*G+c*re,r[12]=o*y+a*U+l*K+c*ee,r[1]=h*R+u*b+f*I+m*te,r[5]=h*C+u*B+f*F+m*Z,r[9]=h*O+u*X+f*G+m*re,r[13]=h*y+u*U+f*K+m*ee,r[2]=g*R+_*b+p*I+d*te,r[6]=g*C+_*B+p*F+d*Z,r[10]=g*O+_*X+p*G+d*re,r[14]=g*y+_*U+p*K+d*ee,r[3]=v*R+x*b+E*I+P*te,r[7]=v*C+x*B+E*F+P*Z,r[11]=v*O+x*X+E*G+P*re,r[15]=v*y+x*U+E*K+P*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*m-n*l*m)+_*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+t*c*u-t*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+d*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],v=u*p*c-_*f*c+_*l*m-a*p*m-u*l*d+a*f*d,x=g*f*c-h*p*c-g*l*m+o*p*m+h*l*d-o*f*d,E=h*_*c-g*u*c+g*a*m-o*_*m-h*a*d+o*u*d,P=g*u*l-h*_*l-g*a*f+o*_*f+h*a*p-o*u*p,R=t*v+n*x+s*E+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return e[0]=v*C,e[1]=(_*f*r-u*p*r-_*s*m+n*p*m+u*s*d-n*f*d)*C,e[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*d+n*l*d)*C,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*m-n*l*m)*C,e[4]=x*C,e[5]=(h*p*r-g*f*r+g*s*m-t*p*m-h*s*d+t*f*d)*C,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*d-t*l*d)*C,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*m+t*l*m)*C,e[8]=E*C,e[9]=(g*u*r-h*_*r-g*n*m+t*_*m+h*n*d-t*u*d)*C,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*d+t*a*d)*C,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*m-t*a*m)*C,e[12]=P*C,e[13]=(h*_*s-g*u*s+g*n*f-t*_*f-h*n*p+t*u*p)*C,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*p-t*a*p)*C,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,g=r*u,_=o*h,p=o*u,d=a*u,v=l*c,x=l*h,E=l*u,P=n.x,R=n.y,C=n.z;return s[0]=(1-(_+d))*P,s[1]=(m+E)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(m-E)*R,s[5]=(1-(f+d))*R,s[6]=(p+v)*R,s[7]=0,s[8]=(g+x)*C,s[9]=(p-v)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Rs.set(s[0],s[1],s[2]).length(),o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Bn.copy(this);let c=1/r,h=1/o,u=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,t.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=hi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),m,g;if(a===hi)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===fo)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=hi){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*c,m=(n+s)*h,g,_;if(a===hi)g=(o+r)*u,_=-2*u;else if(a===fo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rs=new A,Bn=new rt,Vm=new A(0,0,0),Gm=new A(1,1,1),Si=new A,Da=new A,En=new A,Ju=new rt,Ku=new Zt,ts=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ts.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wm=0,$u=new A,Cs=new Zt,ai=new rt,Ua=new A,Sr=new A,Xm=new A,qm=new Zt,ju=new A(1,0,0),Qu=new A(0,1,0),ed=new A(0,0,1),Ym={type:"added"},Zm={type:"removed"},Jt=class i extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new A,t=new ts,n=new Zt,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new tt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(ju,e)}rotateY(e){return this.rotateOnAxis(Qu,e)}rotateZ(e){return this.rotateOnAxis(ed,e)}translateOnAxis(e,t){return $u.copy(e).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ju,e)}translateY(e){return this.translateOnAxis(Qu,e)}translateZ(e){return this.translateOnAxis(ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ua.copy(e):Ua.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Sr,Ua,this.up):ai.lookAt(Ua,Sr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ai),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ym)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,Xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,qm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Jt.DEFAULT_UP=new A(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=new A,oi=new A,Xl=new A,li=new A,Ps=new A,Is=new A,td=new A,ql=new A,Yl=new A,Zl=new A,Na=!1,Ji=class i{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),kn.subVectors(e,t),s.cross(kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){kn.subVectors(s,t),oi.subVectors(n,t),Xl.subVectors(e,t);let o=kn.dot(kn),a=kn.dot(oi),l=kn.dot(Xl),c=oi.dot(oi),h=oi.dot(Xl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getUV(e,t,n,s,r,o,a,l){return Na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Na=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static isFrontFacing(e,t,n,s){return kn.subVectors(n,t),oi.subVectors(e,t),kn.cross(oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),kn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Na=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ps.subVectors(s,n),Is.subVectors(r,n),ql.subVectors(e,n);let l=Ps.dot(ql),c=Is.dot(ql);if(l<=0&&c<=0)return t.copy(n);Yl.subVectors(e,s);let h=Ps.dot(Yl),u=Is.dot(Yl);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ps,o);Zl.subVectors(e,r);let m=Ps.dot(Zl),g=Is.dot(Zl);if(g>=0&&m<=g)return t.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Is,a);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return td.subVectors(r,s),a=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(td,a);let d=1/(p+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(Ps,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Jl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=ch(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Jl(o,r,e+1/3),this.g=Jl(o,r,e),this.b=Jl(o,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=cf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}copyLinearToSRGB(e){return this.r=Ol(e.r),this.g=Ol(e.g),this.b=Ol(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return ut.fromWorkingColorSpace(nn.copy(this),e),Math.round(Ft(nn.r*255,0,255))*65536+Math.round(Ft(nn.g*255,0,255))*256+Math.round(Ft(nn.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(nn.copy(this),t);let n=nn.r,s=nn.g,r=nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Et){ut.fromWorkingColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,s=nn.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(Fa);let n=Lr(wi.h,Fa.h,t),s=Lr(wi.s,Fa.s,t),r=Lr(wi.l,Fa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Ae;Ae.NAMES=cf;var Jm=0,Vn=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Ys,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=uc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hc&&(n.blendSrc=this.blendSrc),this.blendDst!==uc&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Kt=class extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Lt=new A,Oa=new se,lt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pc&&(e.usage=this.usage),e}};var Qs=class extends lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var er=class extends lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends lt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Km=0,Pn=new rt,Kl=new Jt,Ls=new A,bn=new Ln,wr=new Ln,Wt=new A,_t=class i extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lf(e)?er:Qs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(bn.min,wr.min),bn.expandByPoint(Wt),Wt.addVectors(bn.max,wr.max),bn.expandByPoint(Wt)):(bn.expandByPoint(wr.min),bn.expandByPoint(wr.max))}bn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Wt.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(e,c),Wt.add(Ls)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new A,h[b]=new A;let u=new A,f=new A,m=new A,g=new se,_=new se,p=new se,d=new A,v=new A;function x(b,B,X){u.fromArray(s,b*3),f.fromArray(s,B*3),m.fromArray(s,X*3),g.fromArray(o,b*2),_.fromArray(o,B*2),p.fromArray(o,X*2),f.sub(u),m.sub(u),_.sub(g),p.sub(g);let U=1/(_.x*p.y-p.x*_.y);isFinite(U)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(U),v.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(U),c[b].add(d),c[B].add(d),c[X].add(d),h[b].add(v),h[B].add(v),h[X].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let b=0,B=E.length;b<B;++b){let X=E[b],U=X.start,I=X.count;for(let F=U,G=U+I;F<G;F+=3)x(n[F+0],n[F+1],n[F+2])}let P=new A,R=new A,C=new A,O=new A;function y(b){C.fromArray(r,b*3),O.copy(C);let B=c[b];P.copy(B),P.sub(C.multiplyScalar(C.dot(B))).normalize(),R.crossVectors(O,B);let U=R.dot(h[b])<0?-1:1;l[b*4]=P.x,l[b*4+1]=P.y,l[b*4+2]=P.z,l[b*4+3]=U}for(let b=0,B=E.length;b<B;++b){let X=E[b],U=X.start,I=X.count;for(let F=U,G=U+I;F<G;F+=3)y(n[F+0]),y(n[F+1]),y(n[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new lt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nd=new rt,Wi=new Li,Ba=new fi,id=new A,Ds=new A,Us=new A,Ns=new A,$l=new A,ka=new A,za=new se,Ha=new se,Va=new se,sd=new A,rd=new A,ad=new A,Ga=new A,Wa=new A,dt=class extends Jt{constructor(e=new _t,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&($l.fromBufferAttribute(u,e),o?ka.addScaledVector($l,h):ka.addScaledVector($l.sub(t),h))}t.add(ka)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(Ba.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Ba,id)===null||Wi.origin.distanceToSquared(id)>(e.far-e.near)**2))&&(nd.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(nd),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],d=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=v,P=x;E<P;E+=3){let R=a.getX(E),C=a.getX(E+1),O=a.getX(E+2);s=Xa(this,d,e,n,c,h,u,R,C,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){let v=a.getX(p),x=a.getX(p+1),E=a.getX(p+2);s=Xa(this,o,e,n,c,h,u,v,x,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],d=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=v,P=x;E<P;E+=3){let R=E,C=E+1,O=E+2;s=Xa(this,d,e,n,c,h,u,R,C,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){let v=p,x=p+1,E=p+2;s=Xa(this,o,e,n,c,h,u,v,x,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function $m(i,e,t,n,s,r,o,a){let l;if(e.side===qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===In,a),l===null)return null;Wa.copy(a),Wa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:i}}function Xa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ds),i.getVertexPosition(l,Us),i.getVertexPosition(c,Ns);let h=$m(i,e,t,n,Ds,Us,Ns,Ga);if(h){s&&(za.fromBufferAttribute(s,a),Ha.fromBufferAttribute(s,l),Va.fromBufferAttribute(s,c),h.uv=Ji.getInterpolation(Ga,Ds,Us,Ns,za,Ha,Va,new se)),r&&(za.fromBufferAttribute(r,a),Ha.fromBufferAttribute(r,l),Va.fromBufferAttribute(r,c),h.uv1=Ji.getInterpolation(Ga,Ds,Us,Ns,za,Ha,Va,new se),h.uv2=h.uv1),o&&(sd.fromBufferAttribute(o,a),rd.fromBufferAttribute(o,l),ad.fromBufferAttribute(o,c),h.normal=Ji.getInterpolation(Ga,Ds,Us,Ns,sd,rd,ad,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new A,materialIndex:0};Ji.getNormal(Ds,Us,Ns,u.normal),h.face=u}return h}var an=class i extends _t{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(_,p,d,v,x,E,P,R,C,O,y){let b=E/C,B=P/O,X=E/2,U=P/2,I=R/2,F=C+1,G=O+1,K=0,te=0,Z=new A;for(let re=0;re<G;re++){let ee=re*B-U;for(let j=0;j<F;j++){let W=j*b-X;Z[_]=W*v,Z[p]=ee*x,Z[d]=I,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[p]=0,Z[d]=R>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(j/C),u.push(1-re/O),K+=1}}for(let re=0;re<O;re++)for(let ee=0;ee<C;ee++){let j=f+ee+F*re,W=f+ee+F*(re+1),ne=f+(ee+1)+F*(re+1),pe=f+(ee+1)+F*re;l.push(j,W,pe),l.push(W,ne,pe),te+=6}a.addGroup(m,te,y),m+=te,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function tr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=tr(i[t]);for(let s in n)e[s]=n[s]}return e}function jm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hf(i){return i.getRenderTarget()===null?i.outputColorSpace:ut.workingColorSpace}var Qn={clone:tr,merge:un},Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bt=class extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=e0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},xo=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xt=class extends xo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fs=-90,Os=1,Hr=class extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(Fs,Os,e,t);s.layers=this.layers,this.add(s);let r=new Xt(Fs,Os,e,t);r.layers=this.layers,this.add(r);let o=new Xt(Fs,Os,e,t);o.layers=this.layers,this.add(o);let a=new Xt(Fs,Os,e,t);a.layers=this.layers,this.add(a);let l=new Xt(Fs,Os,e,t);l.layers=this.layers,this.add(l);let c=new Xt(Fs,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},vo=class extends fn{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vr=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Dr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ji?Et:xn),this.texture=new vo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new an(5,5,5),r=new bt({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Jn});r.uniforms.tEquirect.value=t;let o=new dt(s,r),a=t.minFilter;return t.minFilter===Or&&(t.minFilter=_n),new Hr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},jl=new A,t0=new A,n0=new tt,sn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=jl.subVectors(n,t).cross(t0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(jl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||n0.getNormalMatrix(e),s=this.coplanarPoint(jl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new fi,qa=new A,Gr=class{constructor(e=new sn,t=new sn,n=new sn,s=new sn,r=new sn,o=new sn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],d=s[12],v=s[13],x=s[14],E=s[15];if(n[0].setComponents(l-r,f-c,p-m,E-d).normalize(),n[1].setComponents(l+r,f+c,p+m,E+d).normalize(),n[2].setComponents(l+o,f+h,p+g,E+v).normalize(),n[3].setComponents(l-o,f-h,p-g,E-v).normalize(),n[4].setComponents(l-a,f-u,p-_,E-x).normalize(),t===hi)n[5].setComponents(l+a,f+u,p+_,E+x).normalize();else if(t===fo)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(qa.x=s.normal.x>0?e.max.x:e.min.x,qa.y=s.normal.y>0?e.max.y:e.min.y,qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function uf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function i0(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let f=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){let d=g[_];t?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var jn=class i extends _t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){let v=d*f-o;for(let x=0;x<c;x++){let E=x*u-r;g.push(E,-v,0),_.push(0,0,1),p.push(x/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){let x=v+c*d,E=v+c*(d+1),P=v+1+c*(d+1),R=v+1+c*d;m.push(x,E,R),m.push(E,P,R)}this.setIndex(m),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},s0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,a0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,c0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,f0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,p0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,x0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,A0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U0="gl_FragColor = linearToOutputTexel( gl_FragColor );",N0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,F0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,j0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ng=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ig=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ag=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,og=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_g=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$g=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,n_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,u_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,d_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,__=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,x_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,E_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,R_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,N_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:s0,alphahash_pars_fragment:r0,alphamap_fragment:a0,alphamap_pars_fragment:o0,alphatest_fragment:l0,alphatest_pars_fragment:c0,aomap_fragment:h0,aomap_pars_fragment:u0,batching_pars_vertex:d0,batching_vertex:f0,begin_vertex:p0,beginnormal_vertex:m0,bsdfs:g0,iridescence_fragment:_0,bumpmap_pars_fragment:x0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:M0,clipping_planes_vertex:E0,color_fragment:b0,color_pars_fragment:S0,color_pars_vertex:w0,color_vertex:T0,common:A0,cube_uv_reflection_fragment:R0,defaultnormal_vertex:C0,displacementmap_pars_vertex:P0,displacementmap_vertex:I0,emissivemap_fragment:L0,emissivemap_pars_fragment:D0,colorspace_fragment:U0,colorspace_pars_fragment:N0,envmap_fragment:F0,envmap_common_pars_fragment:O0,envmap_pars_fragment:B0,envmap_pars_vertex:k0,envmap_physical_pars_fragment:$0,envmap_vertex:z0,fog_vertex:H0,fog_pars_vertex:V0,fog_fragment:G0,fog_pars_fragment:W0,gradientmap_pars_fragment:X0,lightmap_fragment:q0,lightmap_pars_fragment:Y0,lights_lambert_fragment:Z0,lights_lambert_pars_fragment:J0,lights_pars_begin:K0,lights_toon_fragment:j0,lights_toon_pars_fragment:Q0,lights_phong_fragment:eg,lights_phong_pars_fragment:tg,lights_physical_fragment:ng,lights_physical_pars_fragment:ig,lights_fragment_begin:sg,lights_fragment_maps:rg,lights_fragment_end:ag,logdepthbuf_fragment:og,logdepthbuf_pars_fragment:lg,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:hg,map_fragment:ug,map_pars_fragment:dg,map_particle_fragment:fg,map_particle_pars_fragment:pg,metalnessmap_fragment:mg,metalnessmap_pars_fragment:gg,morphcolor_vertex:_g,morphnormal_vertex:xg,morphtarget_pars_vertex:vg,morphtarget_vertex:yg,normal_fragment_begin:Mg,normal_fragment_maps:Eg,normal_pars_fragment:bg,normal_pars_vertex:Sg,normal_vertex:wg,normalmap_pars_fragment:Tg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:Rg,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Pg,opaque_fragment:Ig,packing:Lg,premultiplied_alpha_fragment:Dg,project_vertex:Ug,dithering_fragment:Ng,dithering_pars_fragment:Fg,roughnessmap_fragment:Og,roughnessmap_pars_fragment:Bg,shadowmap_pars_fragment:kg,shadowmap_pars_vertex:zg,shadowmap_vertex:Hg,shadowmask_pars_fragment:Vg,skinbase_vertex:Gg,skinning_pars_vertex:Wg,skinning_vertex:Xg,skinnormal_vertex:qg,specularmap_fragment:Yg,specularmap_pars_fragment:Zg,tonemapping_fragment:Jg,tonemapping_pars_fragment:Kg,transmission_fragment:$g,transmission_pars_fragment:jg,uv_pars_fragment:Qg,uv_pars_vertex:e_,uv_vertex:t_,worldpos_vertex:n_,background_vert:i_,background_frag:s_,backgroundCube_vert:r_,backgroundCube_frag:a_,cube_vert:o_,cube_frag:l_,depth_vert:c_,depth_frag:h_,distanceRGBA_vert:u_,distanceRGBA_frag:d_,equirect_vert:f_,equirect_frag:p_,linedashed_vert:m_,linedashed_frag:g_,meshbasic_vert:__,meshbasic_frag:x_,meshlambert_vert:v_,meshlambert_frag:y_,meshmatcap_vert:M_,meshmatcap_frag:E_,meshnormal_vert:b_,meshnormal_frag:S_,meshphong_vert:w_,meshphong_frag:T_,meshphysical_vert:A_,meshphysical_frag:R_,meshtoon_vert:C_,meshtoon_frag:P_,points_vert:I_,points_frag:L_,shadow_vert:D_,shadow_frag:U_,sprite_vert:N_,sprite_frag:F_},Se={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Yn={basic:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:un([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:un([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:un([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:un([Se.points,Se.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:un([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:un([Se.common,Se.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:un([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:un([Se.sprite,Se.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:un([Se.common,Se.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:un([Se.lights,Se.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Yn.physical={uniforms:un([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Ya={r:0,b:0,g:0};function O_(i,e,t,n,s,r,o){let a=new Ae(0),l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Vo)?(h===void 0&&(h=new dt(new an(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:tr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=ut.getTransfer(x.colorSpace)!==gt,(u!==x||f!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new dt(new jn(2,2),new bt({name:"BackgroundMaterial",uniforms:tr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=ut.getTransfer(x.colorSpace)!==gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(Ya,hf(i)),n.buffers.color.setClear(Ya.r,Ya.g,Ya.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function B_(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function u(I,F,G,K,te){let Z=!1;if(o){let re=_(K,G,F);c!==re&&(c=re,m(c.object)),Z=d(I,K,G,te),Z&&v(I,K,G,te)}else{let re=F.wireframe===!0;(c.geometry!==K.id||c.program!==G.id||c.wireframe!==re)&&(c.geometry=K.id,c.program=G.id,c.wireframe=re,Z=!0)}te!==null&&t.update(te,i.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,O(I,F,G,K),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,F,G){let K=G.wireframe===!0,te=a[I.id];te===void 0&&(te={},a[I.id]=te);let Z=te[F.id];Z===void 0&&(Z={},te[F.id]=Z);let re=Z[K];return re===void 0&&(re=p(f()),Z[K]=re),re}function p(I){let F=[],G=[],K=[];for(let te=0;te<s;te++)F[te]=0,G[te]=0,K[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:K,object:I,attributes:{},index:null}}function d(I,F,G,K){let te=c.attributes,Z=F.attributes,re=0,ee=G.getAttributes();for(let j in ee)if(ee[j].location>=0){let ne=te[j],pe=Z[j];if(pe===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(pe=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(pe=I.instanceColor)),ne===void 0||ne.attribute!==pe||pe&&ne.data!==pe.data)return!0;re++}return c.attributesNum!==re||c.index!==K}function v(I,F,G,K){let te={},Z=F.attributes,re=0,ee=G.getAttributes();for(let j in ee)if(ee[j].location>=0){let ne=Z[j];ne===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));let pe={};pe.attribute=ne,ne&&ne.data&&(pe.data=ne.data),te[j]=pe,re++}c.attributes=te,c.attributesNum=re,c.index=K}function x(){let I=c.newAttributes;for(let F=0,G=I.length;F<G;F++)I[F]=0}function E(I){P(I,0)}function P(I,F){let G=c.newAttributes,K=c.enabledAttributes,te=c.attributeDivisors;G[I]=1,K[I]===0&&(i.enableVertexAttribArray(I),K[I]=1),te[I]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),te[I]=F)}function R(){let I=c.newAttributes,F=c.enabledAttributes;for(let G=0,K=F.length;G<K;G++)F[G]!==I[G]&&(i.disableVertexAttribArray(G),F[G]=0)}function C(I,F,G,K,te,Z,re){re===!0?i.vertexAttribIPointer(I,F,G,te,Z):i.vertexAttribPointer(I,F,G,K,te,Z)}function O(I,F,G,K){if(n.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let te=K.attributes,Z=G.getAttributes(),re=F.defaultAttributeValues;for(let ee in Z){let j=Z[ee];if(j.location>=0){let W=te[ee];if(W===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){let ne=W.normalized,pe=W.itemSize,be=t.get(W);if(be===void 0)continue;let ve=be.buffer,Ie=be.type,Le=be.bytesPerElement,Pe=n.isWebGL2===!0&&(Ie===i.INT||Ie===i.UNSIGNED_INT||W.gpuType===$d);if(W.isInterleavedBufferAttribute){let ze=W.data,D=ze.stride,_e=W.offset;if(ze.isInstancedInterleavedBuffer){for(let ae=0;ae<j.locationSize;ae++)P(j.location+ae,ze.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let ae=0;ae<j.locationSize;ae++)E(j.location+ae);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let ae=0;ae<j.locationSize;ae++)C(j.location+ae,pe/j.locationSize,Ie,ne,D*Le,(_e+pe/j.locationSize*ae)*Le,Pe)}else{if(W.isInstancedBufferAttribute){for(let ze=0;ze<j.locationSize;ze++)P(j.location+ze,W.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ze=0;ze<j.locationSize;ze++)E(j.location+ze);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let ze=0;ze<j.locationSize;ze++)C(j.location+ze,pe/j.locationSize,Ie,ne,pe*Le,pe/j.locationSize*ze*Le,Pe)}}else if(re!==void 0){let ne=re[ee];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(j.location,ne);break;case 3:i.vertexAttrib3fv(j.location,ne);break;case 4:i.vertexAttrib4fv(j.location,ne);break;default:i.vertexAttrib1fv(j.location,ne)}}}}R()}function y(){X();for(let I in a){let F=a[I];for(let G in F){let K=F[G];for(let te in K)g(K[te].object),delete K[te];delete F[G]}delete a[I]}}function b(I){if(a[I.id]===void 0)return;let F=a[I.id];for(let G in F){let K=F[G];for(let te in K)g(K[te].object),delete K[te];delete F[G]}delete a[I.id]}function B(I){for(let F in a){let G=a[F];if(G[I.id]===void 0)continue;let K=G[I.id];for(let te in K)g(K[te].object),delete K[te];delete G[I.id]}}function X(){U(),h=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:U,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:B,initAttributes:x,enableAttribute:E,disableUnusedAttributes:R}}function k_(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function z_(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=o||e.has("OES_texture_float"),P=x&&E,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:R}}function H_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new sn,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,x=v*4,E=d.clippingState||null;l.value=E,E=h(g,f,x,m);for(let P=0;P!==x;++P)E[P]=t[P];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let d=m+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,E=m;x!==_;++x,E+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function V_(i){let e=new WeakMap;function t(o,a){return a===es?o.mapping=Ks:a===dc&&(o.mapping=$s),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===es||a===dc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Vr(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var nr=class extends xo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ws=4,od=[.125,.215,.35,.446,.526,.582],Zi=20,Ql=new nr,ld=new Ae,ec=null,tc=0,nc=0,qi=(1+Math.sqrt(5))/2,Bs=1/qi,cd=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,qi,Bs),new A(0,qi,-Bs),new A(Bs,0,qi),new A(-Bs,0,qi),new A(qi,Bs,0),new A(-qi,Bs,0)],ir=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ec,tc,nc),e.scissorTest=!1,Za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:rn,format:Hn,colorSpace:di,depthBuffer:!1},s=hd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G_(r)),this._blurMaterial=W_(r,e,t)}return s}_compileMaterial(e){let t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Ql)}_sceneToCubeUV(e,t,n,s){let a=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ld),h.toneMapping=Ri,h.autoClear=!1;let m=new Kt({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new dt(new an,m),_=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(ld),_=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let x=this._cubeSize;Za(s,v*x,d>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ks||e.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Za(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ql)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=cd[(s-1)%cd.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new dt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Zi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Zi;p>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zi}`);let d=[],v=0;for(let C=0;C<Zi;++C){let O=C/_,y=Math.exp(-O*O/2);d.push(y),C===0?v+=y:C<p&&(v+=2*y)}for(let C=0;C<d.length;C++)d[C]=d[C]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let E=this._sizeLods[s],P=3*E*(s>x-Ws?s-x+Ws:0),R=4*(this._cubeSize-E);Za(t,P,R,3*E,2*E),l.setRenderTarget(t),l.render(u,Ql)}};function G_(i){let e=[],t=[],n=[],s=i,r=i-Ws+1+od.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ws?l=od[o-i+Ws-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,d=1,v=new Float32Array(_*g*m),x=new Float32Array(p*g*m),E=new Float32Array(d*g*m);for(let R=0;R<m;R++){let C=R%3*2/3-1,O=R>2?0:-1,y=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];v.set(y,_*g*R),x.set(f,p*g*R);let b=[R,R,R,R,R,R];E.set(b,d*g*R)}let P=new _t;P.setAttribute("position",new lt(v,_)),P.setAttribute("uv",new lt(x,p)),P.setAttribute("faceIndex",new lt(E,d)),e.push(P),s>Ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hd(i,e,t){let n=new Ot(i,e,t);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Za(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function W_(i,e,t){let n=new Float32Array(Zi),s=new A(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ud(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function dd(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function hh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function X_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===es||l===dc,h=l===Ks||l===$s;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ir(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new ir(i));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function q_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Y_(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let p=0,d=_.length;p<d;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(u){let f=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let v=m.array;_=m.version;for(let x=0,E=v.length;x<E;x+=3){let P=v[x+0],R=v[x+1],C=v[x+2];f.push(P,R,R,C,C,P)}}else if(g!==void 0){let v=g.array;_=g.version;for(let x=0,E=v.length/3-1;x<E;x+=3){let P=x+0,R=x+1,C=x+2;f.push(P,R,R,C,C,P)}}else return;let p=new(lf(f)?er:Qs)(f,1);p.version=_;let d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Z_(i,e,t,n){let s=n.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,a,m*l),t.update(g,r,1)}function u(m,g,_){if(_===0)return;let p,d;if(s)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,a,m*l,_),t.update(g,r,_)}function f(m,g,_){if(_===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let d=0;for(let v=0;v<_;v++)d+=g[v];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function J_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function K_(i,e){return i[0]-e[0]}function $_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function j_(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new yt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==g){let I=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();let v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],O=0;v===!0&&(O=1),x===!0&&(O=2),E===!0&&(O=3);let y=h.attributes.position.count*O,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let B=new Float32Array(y*b*4*g),X=new _o(B,y,b,g);X.type=Ai,X.needsUpdate=!0;let U=O*4;for(let F=0;F<g;F++){let G=P[F],K=R[F],te=C[F],Z=y*b*4*F;for(let re=0;re<G.count;re++){let ee=re*U;v===!0&&(o.fromBufferAttribute(G,re),B[Z+ee+0]=o.x,B[Z+ee+1]=o.y,B[Z+ee+2]=o.z,B[Z+ee+3]=0),x===!0&&(o.fromBufferAttribute(K,re),B[Z+ee+4]=o.x,B[Z+ee+5]=o.y,B[Z+ee+6]=o.z,B[Z+ee+7]=0),E===!0&&(o.fromBufferAttribute(te,re),B[Z+ee+8]=o.x,B[Z+ee+9]=o.y,B[Z+ee+10]=o.z,B[Z+ee+11]=te.itemSize===4?o.w:1)}}_={count:g,texture:X,size:new se(y,b)},r.set(h,_),h.addEventListener("dispose",I)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];let d=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let m=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<m;x++){let E=g[x];E[0]=x,E[1]=f[x]}g.sort($_);for(let x=0;x<8;x++)x<m&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(K_);let _=h.morphAttributes.position,p=h.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let E=a[x],P=E[0],R=E[1];P!==Number.MAX_SAFE_INTEGER&&R?(_&&h.getAttribute("morphTarget"+x)!==_[P]&&h.setAttribute("morphTarget"+x,_[P]),p&&h.getAttribute("morphNormal"+x)!==p[P]&&h.setAttribute("morphNormal"+x,p[P]),s[x]=R,d+=R):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let v=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Q_(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var yo=class extends fn{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:$i,h!==$i&&h!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$i&&(n=Ti),n===void 0&&h===js&&(n=Ki),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},df=new fn,ff=new yo(1,1);ff.compareFunction=of;var pf=new _o,mf=new xc,gf=new vo,fd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),_d=new Float32Array(4);function ar(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=fd[s];if(r===void 0&&(r=new Float32Array(s),fd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wo(i,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ex(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function sx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;_d.set(n),i.uniformMatrix2fv(this.addr,!1,_d),kt(t,n)}}function rx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;gd.set(n),i.uniformMatrix3fv(this.addr,!1,gd),kt(t,n)}}function ax(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;md.set(n),i.uniformMatrix4fv(this.addr,!1,md),kt(t,n)}}function ox(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function ux(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function mx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?ff:df;t.setTexture2D(e||r,s)}function gx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||mf,s)}function _x(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||gf,s)}function xx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||pf,s)}function vx(i){switch(i){case 5126:return ex;case 35664:return tx;case 35665:return nx;case 35666:return ix;case 35674:return sx;case 35675:return rx;case 35676:return ax;case 5124:case 35670:return ox;case 35667:case 35671:return lx;case 35668:case 35672:return cx;case 35669:case 35673:return hx;case 5125:return ux;case 36294:return dx;case 36295:return fx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return xx}}function yx(i,e){i.uniform1fv(this.addr,e)}function Mx(i,e){let t=ar(e,this.size,2);i.uniform2fv(this.addr,t)}function Ex(i,e){let t=ar(e,this.size,3);i.uniform3fv(this.addr,t)}function bx(i,e){let t=ar(e,this.size,4);i.uniform4fv(this.addr,t)}function Sx(i,e){let t=ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wx(i,e){let t=ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tx(i,e){let t=ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ax(i,e){i.uniform1iv(this.addr,e)}function Rx(i,e){i.uniform2iv(this.addr,e)}function Cx(i,e){i.uniform3iv(this.addr,e)}function Px(i,e){i.uniform4iv(this.addr,e)}function Ix(i,e){i.uniform1uiv(this.addr,e)}function Lx(i,e){i.uniform2uiv(this.addr,e)}function Dx(i,e){i.uniform3uiv(this.addr,e)}function Ux(i,e){i.uniform4uiv(this.addr,e)}function Nx(i,e,t){let n=this.cache,s=e.length,r=Wo(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||df,r[o])}function Fx(i,e,t){let n=this.cache,s=e.length,r=Wo(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||mf,r[o])}function Ox(i,e,t){let n=this.cache,s=e.length,r=Wo(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||gf,r[o])}function Bx(i,e,t){let n=this.cache,s=e.length,r=Wo(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||pf,r[o])}function kx(i){switch(i){case 5126:return yx;case 35664:return Mx;case 35665:return Ex;case 35666:return bx;case 35674:return Sx;case 35675:return wx;case 35676:return Tx;case 5124:case 35670:return Ax;case 35667:case 35671:return Rx;case 35668:case 35672:return Cx;case 35669:case 35673:return Px;case 5125:return Ix;case 36294:return Lx;case 36295:return Dx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Bx}}var vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vx(t.type)}},yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kx(t.type)}},Mc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ic=/(\w+)(\])?(\[|\.)?/g;function xd(i,e){i.seq.push(e),i.map[e.id]=e}function zx(i,e,t){let n=i.name,s=n.length;for(ic.lastIndex=0;;){let r=ic.exec(n),o=ic.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){xd(t,c===void 0?new vc(a,i,e):new yc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Mc(a),xd(t,u)),t=u}}}var Js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);zx(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function vd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Hx=37297,Vx=0;function Gx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Wx(i){let e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(i),n;switch(e===t?n="":e===uo&&t===ho?n="LinearDisplayP3ToLinearSRGB":e===ho&&t===uo&&(n="LinearSRGBToLinearDisplayP3"),i){case di:case Go:return[n,"LinearTransferOETF"];case Et:case lh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function yd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Gx(i.getShaderSource(e),o)}else return s}function Xx(i,e){let t=Wx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qx(i,e){let t;switch(e){case ih:t="Linear";break;case sh:t="Reinhard";break;case rh:t="OptimizedCineon";break;case ah:t="ACESFilmic";break;case aa:t="AgX";break;case im:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Yx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}function Zx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Xs).join(`
`)}function Jx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xs(i){return i!==""}function Md(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ed(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(i){return i.replace($x,Qx)}var jx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Qx(i,e){let t=Ze[e];if(t===void 0){let n=jx.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ec(t)}var ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(i){return i.replace(ev,tv)}function tv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function iv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ks:case $s:e="ENVMAP_TYPE_CUBE";break;case Vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function rv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jd:e="ENVMAP_BLENDING_MULTIPLY";break;case tm:e="ENVMAP_BLENDING_MIX";break;case nm:e="ENVMAP_BLENDING_ADD";break}return e}function av(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ov(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=nv(t),c=iv(t),h=sv(t),u=rv(t),f=av(t),m=t.isWebGL2?"":Yx(t),g=Zx(t),_=Jx(r),p=s.createProgram(),d,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xs).join(`
`),d.length>0&&(d+=`
`),v=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xs).join(`
`),v.length>0&&(v+=`
`)):(d=[Sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),v=[m,Sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ri?qx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Xx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),o=Ec(o),o=Md(o,t),o=Ed(o,t),a=Ec(a),a=Md(a,t),a=Ed(a,t),o=bd(o),a=bd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let E=x+d+o,P=x+v+a,R=vd(s,s.VERTEX_SHADER,E),C=vd(s,s.FRAGMENT_SHADER,P);s.attachShader(p,R),s.attachShader(p,C),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function O(X){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(p).trim(),I=s.getShaderInfoLog(R).trim(),F=s.getShaderInfoLog(C).trim(),G=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,R,C);else{let te=yd(s,R,"vertex"),Z=yd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+te+`
`+Z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(I===""||F==="")&&(K=!1);K&&(X.diagnostics={runnable:G,programLog:U,vertexShader:{log:I,prefix:d},fragmentShader:{log:F,prefix:v}})}s.deleteShader(R),s.deleteShader(C),y=new Js(s,p),b=Kx(s,p)}let y;this.getUniforms=function(){return y===void 0&&O(this),y};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(p,Hx)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=C,this}var lv=0,bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sc(e),t.set(e,n)),n}},Sc=class{constructor(e){this.id=lv++,this.code=e,this.usedTimes=0}};function cv(i,e,t,n,s,r,o){let a=new zr,l=new bc,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function p(y,b,B,X,U){let I=X.fog,F=U.geometry,G=y.isMeshStandardMaterial?X.environment:null,K=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),te=K&&K.mapping===Vo?K.image.height:null,Z=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ee=re!==void 0?re.length:0,j=0;F.morphAttributes.position!==void 0&&(j=1),F.morphAttributes.normal!==void 0&&(j=2),F.morphAttributes.color!==void 0&&(j=3);let W,ne,pe,be;if(Z){let Ee=Yn[Z];W=Ee.vertexShader,ne=Ee.fragmentShader}else W=y.vertexShader,ne=y.fragmentShader,l.update(y),pe=l.getVertexShaderID(y),be=l.getFragmentShaderID(y);let ve=i.getRenderTarget(),Ie=U.isInstancedMesh===!0,Le=U.isBatchedMesh===!0,Pe=!!y.map,ze=!!y.matcap,D=!!K,_e=!!y.aoMap,ae=!!y.lightMap,me=!!y.bumpMap,ie=!!y.normalMap,Fe=!!y.displacementMap,Te=!!y.emissiveMap,S=!!y.metalnessMap,M=!!y.roughnessMap,V=y.anisotropy>0,de=y.clearcoat>0,oe=y.iridescence>0,he=y.sheen>0,Ue=y.transmission>0,we=V&&!!y.anisotropyMap,Re=de&&!!y.clearcoatMap,ke=de&&!!y.clearcoatNormalMap,We=de&&!!y.clearcoatRoughnessMap,ce=oe&&!!y.iridescenceMap,$e=oe&&!!y.iridescenceThicknessMap,L=he&&!!y.sheenColorMap,ue=he&&!!y.sheenRoughnessMap,ye=!!y.specularMap,ge=!!y.specularColorMap,Ne=!!y.specularIntensityMap,Je=Ue&&!!y.transmissionMap,Qe=Ue&&!!y.thicknessMap,qe=!!y.gradientMap,Me=!!y.alphaMap,N=y.alphaTest>0,xe=!!y.alphaHash,w=!!y.extensions,k=!!F.attributes.uv1,H=!!F.attributes.uv2,$=!!F.attributes.uv3,Q=Ri;return y.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Q=i.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:ne,defines:y.defines,customVertexShaderID:pe,customFragmentShaderID:be,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Le,instancing:Ie,instancingColor:Ie&&U.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:di,map:Pe,matcap:ze,envMap:D,envMapMode:D&&K.mapping,envMapCubeUVHeight:te,aoMap:_e,lightMap:ae,bumpMap:me,normalMap:ie,displacementMap:f&&Fe,emissiveMap:Te,normalMapObjectSpace:ie&&y.normalMapType===mm,normalMapTangentSpace:ie&&y.normalMapType===af,metalnessMap:S,roughnessMap:M,anisotropy:V,anisotropyMap:we,clearcoat:de,clearcoatMap:Re,clearcoatNormalMap:ke,clearcoatRoughnessMap:We,iridescence:oe,iridescenceMap:ce,iridescenceThicknessMap:$e,sheen:he,sheenColorMap:L,sheenRoughnessMap:ue,specularMap:ye,specularColorMap:ge,specularIntensityMap:Ne,transmission:Ue,transmissionMap:Je,thicknessMap:Qe,gradientMap:qe,opaque:y.transparent===!1&&y.blending===Ys,alphaMap:Me,alphaTest:N,alphaHash:xe,combine:y.combine,mapUv:Pe&&_(y.map.channel),aoMapUv:_e&&_(y.aoMap.channel),lightMapUv:ae&&_(y.lightMap.channel),bumpMapUv:me&&_(y.bumpMap.channel),normalMapUv:ie&&_(y.normalMap.channel),displacementMapUv:Fe&&_(y.displacementMap.channel),emissiveMapUv:Te&&_(y.emissiveMap.channel),metalnessMapUv:S&&_(y.metalnessMap.channel),roughnessMapUv:M&&_(y.roughnessMap.channel),anisotropyMapUv:we&&_(y.anisotropyMap.channel),clearcoatMapUv:Re&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ke&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:L&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ue&&_(y.sheenRoughnessMap.channel),specularMapUv:ye&&_(y.specularMap.channel),specularColorMapUv:ge&&_(y.specularColorMap.channel),specularIntensityMapUv:Ne&&_(y.specularIntensityMap.channel),transmissionMapUv:Je&&_(y.transmissionMap.channel),thicknessMapUv:Qe&&_(y.thicknessMap.channel),alphaMapUv:Me&&_(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ie||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:k,vertexUv2s:H,vertexUv3s:$,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(Pe||Me),fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:j,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Pe&&y.map.isVideoTexture===!0&&ut.getTransfer(y.map.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Sn,flipSided:y.side===qt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:w&&y.extensions.derivatives===!0,extensionFragDepth:w&&y.extensions.fragDepth===!0,extensionDrawBuffers:w&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:w&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:w&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let B in y.defines)b.push(B),b.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(v(b,y),x(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function v(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function E(y){let b=g[y.type],B;if(b){let X=Yn[b];B=Qn.clone(X.uniforms)}else B=y.uniforms;return B}function P(y,b){let B;for(let X=0,U=c.length;X<U;X++){let I=c[X];if(I.cacheKey===b){B=I,++B.usedTimes;break}}return B===void 0&&(B=new ov(i,b,y,r),c.push(B)),B}function R(y){if(--y.usedTimes===0){let b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:P,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:O}}function hv(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function uv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Td(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,m,g,_,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),e++,d}function a(u,f,m,g,_,p){let d=o(u,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(u,f,m,g,_,p){let d=o(u,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||uv),n.length>1&&n.sort(f||wd),s.length>1&&s.sort(f||wd)}function h(){for(let u=e,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function dv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Td,i.set(n,[o])):s>=r.length?(o=new Td,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function fv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ae};break;case"SpotLight":t={position:new A,direction:new A,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function pv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var mv=0;function gv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _v(i,e){let t=new fv,n=pv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new A);let r=new A,o=new rt,a=new rt;function l(h,u){let f=0,m=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let _=0,p=0,d=0,v=0,x=0,E=0,P=0,R=0,C=0,O=0,y=0;h.sort(gv);let b=u===!0?Math.PI:1;for(let X=0,U=h.length;X<U;X++){let I=h[X],F=I.color,G=I.intensity,K=I.distance,te=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=F.r*G*b,m+=F.g*G*b,g+=F.b*G*b;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(I.sh.coefficients[Z],G);y++}else if(I.isDirectionalLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){let re=I.shadow,ee=n.get(I);ee.shadowBias=re.bias,ee.shadowNormalBias=re.normalBias,ee.shadowRadius=re.radius,ee.shadowMapSize=re.mapSize,s.directionalShadow[_]=ee,s.directionalShadowMap[_]=te,s.directionalShadowMatrix[_]=I.shadow.matrix,E++}s.directional[_]=Z,_++}else if(I.isSpotLight){let Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(F).multiplyScalar(G*b),Z.distance=K,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,s.spot[d]=Z;let re=I.shadow;if(I.map&&(s.spotLightMap[C]=I.map,C++,re.updateMatrices(I),I.castShadow&&O++),s.spotLightMatrix[d]=re.matrix,I.castShadow){let ee=n.get(I);ee.shadowBias=re.bias,ee.shadowNormalBias=re.normalBias,ee.shadowRadius=re.radius,ee.shadowMapSize=re.mapSize,s.spotShadow[d]=ee,s.spotShadowMap[d]=te,R++}d++}else if(I.isRectAreaLight){let Z=t.get(I);Z.color.copy(F).multiplyScalar(G),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),s.rectArea[v]=Z,v++}else if(I.isPointLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*b),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let re=I.shadow,ee=n.get(I);ee.shadowBias=re.bias,ee.shadowNormalBias=re.normalBias,ee.shadowRadius=re.radius,ee.shadowMapSize=re.mapSize,ee.shadowCameraNear=re.camera.near,ee.shadowCameraFar=re.camera.far,s.pointShadow[p]=ee,s.pointShadowMap[p]=te,s.pointShadowMatrix[p]=I.shadow.matrix,P++}s.point[p]=Z,p++}else if(I.isHemisphereLight){let Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(G*b),Z.groundColor.copy(I.groundColor).multiplyScalar(G*b),s.hemi[x]=Z,x++}}v>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let B=s.hash;(B.directionalLength!==_||B.pointLength!==p||B.spotLength!==d||B.rectAreaLength!==v||B.hemiLength!==x||B.numDirectionalShadows!==E||B.numPointShadows!==P||B.numSpotShadows!==R||B.numSpotMaps!==C||B.numLightProbes!==y)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=v,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=R+C-O,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=y,B.directionalLength=_,B.pointLength=p,B.spotLength=d,B.rectAreaLength=v,B.hemiLength=x,B.numDirectionalShadows=E,B.numPointShadows=P,B.numSpotShadows=R,B.numSpotMaps=C,B.numLightProbes=y,s.version=mv++)}function c(h,u){let f=0,m=0,g=0,_=0,p=0,d=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){let E=h[v];if(E.isDirectionalLight){let P=s.directional[f];P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),f++}else if(E.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),g++}else if(E.isRectAreaLight){let P=s.rectArea[_];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let P=s.point[m];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){let P=s.hemi[p];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:s}}function Ad(i,e){let t=new _v(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function xv(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Ad(i,e),t.set(r,[l])):o>=a.length?(l=new Ad(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var wc=class extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tc=class extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mv(i,e,t){let n=new Gr,s=new se,r=new se,o=new yt,a=new wc({depthPacking:pm}),l=new Tc,c={},h=t.maxTextureSize,u={[In]:qt,[qt]:In,[Sn]:Sn},f=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:vv,fragmentShader:yv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new _t;g.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new dt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zd;let d=this.type;this.render=function(R,C,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let y=i.getRenderTarget(),b=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Jn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let U=d!==ci&&this.type===ci,I=d===ci&&this.type!==ci;for(let F=0,G=R.length;F<G;F++){let K=R[F],te=K.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;s.copy(te.mapSize);let Z=te.getFrameExtents();if(s.multiply(Z),r.copy(te.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,te.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,te.mapSize.y=r.y)),te.map===null||U===!0||I===!0){let ee=this.type!==ci?{minFilter:dn,magFilter:dn}:{};te.map!==null&&te.map.dispose(),te.map=new Ot(s.x,s.y,ee),te.map.texture.name=K.name+".shadowMap",te.camera.updateProjectionMatrix()}i.setRenderTarget(te.map),i.clear();let re=te.getViewportCount();for(let ee=0;ee<re;ee++){let j=te.getViewport(ee);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),X.viewport(o),te.updateMatrices(K,ee),n=te.getFrustum(),E(C,O,te.camera,K,this.type)}te.isPointLightShadow!==!0&&this.type===ci&&v(te,O),te.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(y,b,B)};function v(R,C){let O=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ot(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,O,f,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,O,m,_,null)}function x(R,C,O,y){let b=null,B=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(B!==void 0)b=B;else if(b=O.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let X=b.uuid,U=C.uuid,I=c[X];I===void 0&&(I={},c[X]=I);let F=I[U];F===void 0&&(F=b.clone(),I[U]=F,C.addEventListener("dispose",P)),b=F}if(b.visible=C.visible,b.wireframe=C.wireframe,y===ci?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let X=i.properties.get(b);X.light=O}return b}function E(R,C,O,y,b){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===ci)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);let U=e.update(R),I=R.material;if(Array.isArray(I)){let F=U.groups;for(let G=0,K=F.length;G<K;G++){let te=F[G],Z=I[te.materialIndex];if(Z&&Z.visible){let re=x(R,Z,y,b);R.onBeforeShadow(i,R,C,O,U,re,te),i.renderBufferDirect(O,null,U,re,R,te),R.onAfterShadow(i,R,C,O,U,re,te)}}}else if(I.visible){let F=x(R,I,y,b);R.onBeforeShadow(i,R,C,O,U,F,null),i.renderBufferDirect(O,null,U,F,R,null),R.onAfterShadow(i,R,C,O,U,F,null)}}let X=R.children;for(let U=0,I=X.length;U<I;U++)E(X[U],C,O,y,b)}function P(R){R.target.removeEventListener("dispose",P);for(let O in c){let y=c[O],b=R.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function Ev(i,e,t){let n=t.isWebGL2;function s(){let N=!1,xe=new yt,w=null,k=new yt(0,0,0,0);return{setMask:function(H){w!==H&&!N&&(i.colorMask(H,H,H,H),w=H)},setLocked:function(H){N=H},setClear:function(H,$,Q,le,Ee){Ee===!0&&(H*=le,$*=le,Q*=le),xe.set(H,$,Q,le),k.equals(xe)===!1&&(i.clearColor(H,$,Q,le),k.copy(xe))},reset:function(){N=!1,w=null,k.set(-1,0,0,0)}}}function r(){let N=!1,xe=null,w=null,k=null;return{setTest:function(H){H?Le(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(H){xe!==H&&!N&&(i.depthMask(H),xe=H)},setFunc:function(H){if(w!==H){switch(H){case Zp:i.depthFunc(i.NEVER);break;case Jp:i.depthFunc(i.ALWAYS);break;case Kp:i.depthFunc(i.LESS);break;case ao:i.depthFunc(i.LEQUAL);break;case $p:i.depthFunc(i.EQUAL);break;case jp:i.depthFunc(i.GEQUAL);break;case Qp:i.depthFunc(i.GREATER);break;case em:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}w=H}},setLocked:function(H){N=H},setClear:function(H){k!==H&&(i.clearDepth(H),k=H)},reset:function(){N=!1,xe=null,w=null,k=null}}}function o(){let N=!1,xe=null,w=null,k=null,H=null,$=null,Q=null,le=null,Ee=null;return{setTest:function(fe){N||(fe?Le(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(fe){xe!==fe&&!N&&(i.stencilMask(fe),xe=fe)},setFunc:function(fe,De,ct){(w!==fe||k!==De||H!==ct)&&(i.stencilFunc(fe,De,ct),w=fe,k=De,H=ct)},setOp:function(fe,De,ct){($!==fe||Q!==De||le!==ct)&&(i.stencilOp(fe,De,ct),$=fe,Q=De,le=ct)},setLocked:function(fe){N=fe},setClear:function(fe){Ee!==fe&&(i.clearStencil(fe),Ee=fe)},reset:function(){N=!1,xe=null,w=null,k=null,H=null,$=null,Q=null,le=null,Ee=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},m={},g=new WeakMap,_=[],p=null,d=!1,v=null,x=null,E=null,P=null,R=null,C=null,O=null,y=new Ae(0,0,0),b=0,B=!1,X=null,U=null,I=null,F=null,G=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,Z=0,re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(re)[1]),te=Z>=1):re.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),te=Z>=2);let ee=null,j={},W=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),pe=new yt().fromArray(W),be=new yt().fromArray(ne);function ve(N,xe,w,k){let H=new Uint8Array(4),$=i.createTexture();i.bindTexture(N,$),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Q=0;Q<w;Q++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(xe,0,i.RGBA,1,1,k,0,i.RGBA,i.UNSIGNED_BYTE,H):i.texImage2D(xe+Q,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,H);return $}let Ie={};Ie[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ie[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(i.DEPTH_TEST),l.setFunc(ao),Te(!1),S(lu),Le(i.CULL_FACE),ie(Jn);function Le(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function Pe(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function ze(N,xe){return m[N]!==xe?(i.bindFramebuffer(N,xe),m[N]=xe,n&&(N===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=xe),N===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=xe)),!0):!1}function D(N,xe){let w=_,k=!1;if(N)if(w=g.get(xe),w===void 0&&(w=[],g.set(xe,w)),N.isWebGLMultipleRenderTargets){let H=N.texture;if(w.length!==H.length||w[0]!==i.COLOR_ATTACHMENT0){for(let $=0,Q=H.length;$<Q;$++)w[$]=i.COLOR_ATTACHMENT0+$;w.length=H.length,k=!0}}else w[0]!==i.COLOR_ATTACHMENT0&&(w[0]=i.COLOR_ATTACHMENT0,k=!0);else w[0]!==i.BACK&&(w[0]=i.BACK,k=!0);k&&(t.isWebGL2?i.drawBuffers(w):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(w))}function _e(N){return p!==N?(i.useProgram(N),p=N,!0):!1}let ae={[Yi]:i.FUNC_ADD,[Dp]:i.FUNC_SUBTRACT,[Up]:i.FUNC_REVERSE_SUBTRACT};if(n)ae[uu]=i.MIN,ae[du]=i.MAX;else{let N=e.get("EXT_blend_minmax");N!==null&&(ae[uu]=N.MIN_EXT,ae[du]=N.MAX_EXT)}let me={[Np]:i.ZERO,[Fp]:i.ONE,[Op]:i.SRC_COLOR,[hc]:i.SRC_ALPHA,[Gp]:i.SRC_ALPHA_SATURATE,[Hp]:i.DST_COLOR,[kp]:i.DST_ALPHA,[Bp]:i.ONE_MINUS_SRC_COLOR,[uc]:i.ONE_MINUS_SRC_ALPHA,[Vp]:i.ONE_MINUS_DST_COLOR,[zp]:i.ONE_MINUS_DST_ALPHA,[Wp]:i.CONSTANT_COLOR,[Xp]:i.ONE_MINUS_CONSTANT_COLOR,[qp]:i.CONSTANT_ALPHA,[Yp]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(N,xe,w,k,H,$,Q,le,Ee,fe){if(N===Jn){d===!0&&(Pe(i.BLEND),d=!1);return}if(d===!1&&(Le(i.BLEND),d=!0),N!==Lp){if(N!==v||fe!==B){if((x!==Yi||R!==Yi)&&(i.blendEquation(i.FUNC_ADD),x=Yi,R=Yi),fe)switch(N){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFunc(i.ONE,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,P=null,C=null,O=null,y.set(0,0,0),b=0,v=N,B=fe}return}H=H||xe,$=$||w,Q=Q||k,(xe!==x||H!==R)&&(i.blendEquationSeparate(ae[xe],ae[H]),x=xe,R=H),(w!==E||k!==P||$!==C||Q!==O)&&(i.blendFuncSeparate(me[w],me[k],me[$],me[Q]),E=w,P=k,C=$,O=Q),(le.equals(y)===!1||Ee!==b)&&(i.blendColor(le.r,le.g,le.b,Ee),y.copy(le),b=Ee),v=N,B=!1}function Fe(N,xe){N.side===Sn?Pe(i.CULL_FACE):Le(i.CULL_FACE);let w=N.side===qt;xe&&(w=!w),Te(w),N.blending===Ys&&N.transparent===!1?ie(Jn):ie(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);let k=N.stencilWrite;c.setTest(k),k&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),V(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Le(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Te(N){X!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),X=N)}function S(N){N!==Pp?(Le(i.CULL_FACE),N!==U&&(N===lu?i.cullFace(i.BACK):N===Ip?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),U=N}function M(N){N!==I&&(te&&i.lineWidth(N),I=N)}function V(N,xe,w){N?(Le(i.POLYGON_OFFSET_FILL),(F!==xe||G!==w)&&(i.polygonOffset(xe,w),F=xe,G=w)):Pe(i.POLYGON_OFFSET_FILL)}function de(N){N?Le(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function oe(N){N===void 0&&(N=i.TEXTURE0+K-1),ee!==N&&(i.activeTexture(N),ee=N)}function he(N,xe,w){w===void 0&&(ee===null?w=i.TEXTURE0+K-1:w=ee);let k=j[w];k===void 0&&(k={type:void 0,texture:void 0},j[w]=k),(k.type!==N||k.texture!==xe)&&(ee!==w&&(i.activeTexture(w),ee=w),i.bindTexture(N,xe||Ie[N]),k.type=N,k.texture=xe)}function Ue(){let N=j[ee];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function we(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function We(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(N){pe.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),pe.copy(N))}function Je(N){be.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),be.copy(N))}function Qe(N,xe){let w=u.get(xe);w===void 0&&(w=new WeakMap,u.set(xe,w));let k=w.get(N);k===void 0&&(k=i.getUniformBlockIndex(xe,N.name),w.set(N,k))}function qe(N,xe){let k=u.get(xe).get(N);h.get(xe)!==k&&(i.uniformBlockBinding(xe,k,N.__bindingPointIndex),h.set(xe,k))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ee=null,j={},m={},g=new WeakMap,_=[],p=null,d=!1,v=null,x=null,E=null,P=null,R=null,C=null,O=null,y=new Ae(0,0,0),b=0,B=!1,X=null,U=null,I=null,F=null,G=null,pe.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Le,disable:Pe,bindFramebuffer:ze,drawBuffers:D,useProgram:_e,setBlending:ie,setMaterial:Fe,setFlipSided:Te,setCullFace:S,setLineWidth:M,setPolygonOffset:V,setScissorTest:de,activeTexture:oe,bindTexture:he,unbindTexture:Ue,compressedTexImage2D:we,compressedTexImage3D:Re,texImage2D:ye,texImage3D:ge,updateUBOMapping:Qe,uniformBlockBinding:qe,texStorage2D:L,texStorage3D:ue,texSubImage2D:ke,texSubImage3D:We,compressedTexSubImage2D:ce,compressedTexSubImage3D:$e,scissor:Ne,viewport:Je,reset:Me}}function bv(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,M){return m?new OffscreenCanvas(S,M):kr("canvas")}function _(S,M,V,de){let oe=1;if((S.width>de||S.height>de)&&(oe=de/Math.max(S.width,S.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let he=M?po:Math.floor,Ue=he(oe*S.width),we=he(oe*S.height);u===void 0&&(u=g(Ue,we));let Re=V?g(Ue,we):u;return Re.width=Ue,Re.height=we,Re.getContext("2d").drawImage(S,0,0,Ue,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Ue+"x"+we+")."),Re}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return gc(S.width)&&gc(S.height)}function d(S){return a?!1:S.wrapS!==zn||S.wrapT!==zn||S.minFilter!==dn&&S.minFilter!==_n}function v(S,M){return S.generateMipmaps&&M&&S.minFilter!==dn&&S.minFilter!==_n}function x(S){i.generateMipmap(S)}function E(S,M,V,de,oe=!1){if(a===!1)return M;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let he=M;if(M===i.RED&&(V===i.FLOAT&&(he=i.R32F),V===i.HALF_FLOAT&&(he=i.R16F),V===i.UNSIGNED_BYTE&&(he=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(he=i.R8UI),V===i.UNSIGNED_SHORT&&(he=i.R16UI),V===i.UNSIGNED_INT&&(he=i.R32UI),V===i.BYTE&&(he=i.R8I),V===i.SHORT&&(he=i.R16I),V===i.INT&&(he=i.R32I)),M===i.RG&&(V===i.FLOAT&&(he=i.RG32F),V===i.HALF_FLOAT&&(he=i.RG16F),V===i.UNSIGNED_BYTE&&(he=i.RG8)),M===i.RGBA){let Ue=oe?co:ut.getTransfer(de);V===i.FLOAT&&(he=i.RGBA32F),V===i.HALF_FLOAT&&(he=i.RGBA16F),V===i.UNSIGNED_BYTE&&(he=Ue===gt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function P(S,M,V){return v(S,V)===!0||S.isFramebufferTexture&&S.minFilter!==dn&&S.minFilter!==_n?Math.log2(Math.max(M.width,M.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?M.mipmaps.length:1}function R(S){return S===dn||S===fu||S===Cl?i.NEAREST:i.LINEAR}function C(S){let M=S.target;M.removeEventListener("dispose",C),y(M),M.isVideoTexture&&h.delete(M)}function O(S){let M=S.target;M.removeEventListener("dispose",O),B(M)}function y(S){let M=n.get(S);if(M.__webglInit===void 0)return;let V=S.source,de=f.get(V);if(de){let oe=de[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(S),Object.keys(de).length===0&&f.delete(V)}n.remove(S)}function b(S){let M=n.get(S);i.deleteTexture(M.__webglTexture);let V=S.source,de=f.get(V);delete de[M.__cacheKey],o.memory.textures--}function B(S){let M=S.texture,V=n.get(S),de=n.get(M);if(de.__webglTexture!==void 0&&(i.deleteTexture(de.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(V.__webglFramebuffer[oe]))for(let he=0;he<V.__webglFramebuffer[oe].length;he++)i.deleteFramebuffer(V.__webglFramebuffer[oe][he]);else i.deleteFramebuffer(V.__webglFramebuffer[oe]);V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[oe])}else{if(Array.isArray(V.__webglFramebuffer))for(let oe=0;oe<V.__webglFramebuffer.length;oe++)i.deleteFramebuffer(V.__webglFramebuffer[oe]);else i.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let oe=0;oe<V.__webglColorRenderbuffer.length;oe++)V.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[oe]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let oe=0,he=M.length;oe<he;oe++){let Ue=n.get(M[oe]);Ue.__webglTexture&&(i.deleteTexture(Ue.__webglTexture),o.memory.textures--),n.remove(M[oe])}n.remove(M),n.remove(S)}let X=0;function U(){X=0}function I(){let S=X;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),X+=1,S}function F(S){let M=[];return M.push(S.wrapS),M.push(S.wrapT),M.push(S.wrapR||0),M.push(S.magFilter),M.push(S.minFilter),M.push(S.anisotropy),M.push(S.internalFormat),M.push(S.format),M.push(S.type),M.push(S.generateMipmaps),M.push(S.premultiplyAlpha),M.push(S.flipY),M.push(S.unpackAlignment),M.push(S.colorSpace),M.join()}function G(S,M){let V=n.get(S);if(S.isVideoTexture&&Fe(S),S.isRenderTargetTexture===!1&&S.version>0&&V.__version!==S.version){let de=S.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(V,S,M);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function K(S,M){let V=n.get(S);if(S.version>0&&V.__version!==S.version){pe(V,S,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function te(S,M){let V=n.get(S);if(S.version>0&&V.__version!==S.version){pe(V,S,M);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function Z(S,M){let V=n.get(S);if(S.version>0&&V.__version!==S.version){be(V,S,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}let re={[Ii]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[fc]:i.MIRRORED_REPEAT},ee={[dn]:i.NEAREST,[fu]:i.NEAREST_MIPMAP_NEAREST,[Cl]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[sm]:i.LINEAR_MIPMAP_NEAREST,[Or]:i.LINEAR_MIPMAP_LINEAR},j={[gm]:i.NEVER,[Em]:i.ALWAYS,[_m]:i.LESS,[of]:i.LEQUAL,[xm]:i.EQUAL,[Mm]:i.GEQUAL,[vm]:i.GREATER,[ym]:i.NOTEQUAL};function W(S,M,V){if(V?(i.texParameteri(S,i.TEXTURE_WRAP_S,re[M.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,re[M.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,re[M.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ee[M.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ee[M.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==zn||M.wrapT!==zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,R(M.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==dn&&M.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,j[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let de=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===dn||M.minFilter!==Cl&&M.minFilter!==Or||M.type===Ai&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===rn&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(S,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ne(S,M){let V=!1;S.__webglInit===void 0&&(S.__webglInit=!0,M.addEventListener("dispose",C));let de=M.source,oe=f.get(de);oe===void 0&&(oe={},f.set(de,oe));let he=F(M);if(he!==S.__cacheKey){oe[he]===void 0&&(oe[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),oe[he].usedTimes++;let Ue=oe[S.__cacheKey];Ue!==void 0&&(oe[S.__cacheKey].usedTimes--,Ue.usedTimes===0&&b(M)),S.__cacheKey=he,S.__webglTexture=oe[he].texture}return V}function pe(S,M,V){let de=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(de=i.TEXTURE_3D);let oe=ne(S,M),he=M.source;t.bindTexture(de,S.__webglTexture,i.TEXTURE0+V);let Ue=n.get(he);if(he.version!==Ue.__version||oe===!0){t.activeTexture(i.TEXTURE0+V);let we=ut.getPrimaries(ut.workingColorSpace),Re=M.colorSpace===xn?null:ut.getPrimaries(M.colorSpace),ke=M.colorSpace===xn||we===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let We=d(M)&&p(M.image)===!1,ce=_(M.image,We,!1,s.maxTextureSize);ce=Te(M,ce);let $e=p(ce)||a,L=r.convert(M.format,M.colorSpace),ue=r.convert(M.type),ye=E(M.internalFormat,L,ue,M.colorSpace,M.isVideoTexture);W(de,M,$e);let ge,Ne=M.mipmaps,Je=a&&M.isVideoTexture!==!0&&ye!==sf,Qe=Ue.__version===void 0||oe===!0,qe=P(M,ce,$e);if(M.isDepthTexture)ye=i.DEPTH_COMPONENT,a?M.type===Ai?ye=i.DEPTH_COMPONENT32F:M.type===Ti?ye=i.DEPTH_COMPONENT24:M.type===Ki?ye=i.DEPTH24_STENCIL8:ye=i.DEPTH_COMPONENT16:M.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===$i&&ye===i.DEPTH_COMPONENT&&M.type!==oh&&M.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ti,ue=r.convert(M.type)),M.format===js&&ye===i.DEPTH_COMPONENT&&(ye=i.DEPTH_STENCIL,M.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ki,ue=r.convert(M.type))),Qe&&(Je?t.texStorage2D(i.TEXTURE_2D,1,ye,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,ye,ce.width,ce.height,0,L,ue,null));else if(M.isDataTexture)if(Ne.length>0&&$e){Je&&Qe&&t.texStorage2D(i.TEXTURE_2D,qe,ye,Ne[0].width,Ne[0].height);for(let Me=0,N=Ne.length;Me<N;Me++)ge=Ne[Me],Je?t.texSubImage2D(i.TEXTURE_2D,Me,0,0,ge.width,ge.height,L,ue,ge.data):t.texImage2D(i.TEXTURE_2D,Me,ye,ge.width,ge.height,0,L,ue,ge.data);M.generateMipmaps=!1}else Je?(Qe&&t.texStorage2D(i.TEXTURE_2D,qe,ye,ce.width,ce.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,L,ue,ce.data)):t.texImage2D(i.TEXTURE_2D,0,ye,ce.width,ce.height,0,L,ue,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Je&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,ye,Ne[0].width,Ne[0].height,ce.depth);for(let Me=0,N=Ne.length;Me<N;Me++)ge=Ne[Me],M.format!==Hn?L!==null?Je?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,ge.width,ge.height,ce.depth,L,ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,ye,ge.width,ge.height,ce.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,ge.width,ge.height,ce.depth,L,ue,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,ye,ge.width,ge.height,ce.depth,0,L,ue,ge.data)}else{Je&&Qe&&t.texStorage2D(i.TEXTURE_2D,qe,ye,Ne[0].width,Ne[0].height);for(let Me=0,N=Ne.length;Me<N;Me++)ge=Ne[Me],M.format!==Hn?L!==null?Je?t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,ge.width,ge.height,L,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,ye,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(i.TEXTURE_2D,Me,0,0,ge.width,ge.height,L,ue,ge.data):t.texImage2D(i.TEXTURE_2D,Me,ye,ge.width,ge.height,0,L,ue,ge.data)}else if(M.isDataArrayTexture)Je?(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,ye,ce.width,ce.height,ce.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,L,ue,ce.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,ce.width,ce.height,ce.depth,0,L,ue,ce.data);else if(M.isData3DTexture)Je?(Qe&&t.texStorage3D(i.TEXTURE_3D,qe,ye,ce.width,ce.height,ce.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,L,ue,ce.data)):t.texImage3D(i.TEXTURE_3D,0,ye,ce.width,ce.height,ce.depth,0,L,ue,ce.data);else if(M.isFramebufferTexture){if(Qe)if(Je)t.texStorage2D(i.TEXTURE_2D,qe,ye,ce.width,ce.height);else{let Me=ce.width,N=ce.height;for(let xe=0;xe<qe;xe++)t.texImage2D(i.TEXTURE_2D,xe,ye,Me,N,0,L,ue,null),Me>>=1,N>>=1}}else if(Ne.length>0&&$e){Je&&Qe&&t.texStorage2D(i.TEXTURE_2D,qe,ye,Ne[0].width,Ne[0].height);for(let Me=0,N=Ne.length;Me<N;Me++)ge=Ne[Me],Je?t.texSubImage2D(i.TEXTURE_2D,Me,0,0,L,ue,ge):t.texImage2D(i.TEXTURE_2D,Me,ye,L,ue,ge);M.generateMipmaps=!1}else Je?(Qe&&t.texStorage2D(i.TEXTURE_2D,qe,ye,ce.width,ce.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,L,ue,ce)):t.texImage2D(i.TEXTURE_2D,0,ye,L,ue,ce);v(M,$e)&&x(de),Ue.__version=he.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function be(S,M,V){if(M.image.length!==6)return;let de=ne(S,M),oe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+V);let he=n.get(oe);if(oe.version!==he.__version||de===!0){t.activeTexture(i.TEXTURE0+V);let Ue=ut.getPrimaries(ut.workingColorSpace),we=M.colorSpace===xn?null:ut.getPrimaries(M.colorSpace),Re=M.colorSpace===xn||Ue===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ke=M.isCompressedTexture||M.image[0].isCompressedTexture,We=M.image[0]&&M.image[0].isDataTexture,ce=[];for(let Me=0;Me<6;Me++)!ke&&!We?ce[Me]=_(M.image[Me],!1,!0,s.maxCubemapSize):ce[Me]=We?M.image[Me].image:M.image[Me],ce[Me]=Te(M,ce[Me]);let $e=ce[0],L=p($e)||a,ue=r.convert(M.format,M.colorSpace),ye=r.convert(M.type),ge=E(M.internalFormat,ue,ye,M.colorSpace),Ne=a&&M.isVideoTexture!==!0,Je=he.__version===void 0||de===!0,Qe=P(M,$e,L);W(i.TEXTURE_CUBE_MAP,M,L);let qe;if(ke){Ne&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,ge,$e.width,$e.height);for(let Me=0;Me<6;Me++){qe=ce[Me].mipmaps;for(let N=0;N<qe.length;N++){let xe=qe[N];M.format!==Hn?ue!==null?Ne?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,N,0,0,xe.width,xe.height,ue,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,N,ge,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,N,0,0,xe.width,xe.height,ue,ye,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,N,ge,xe.width,xe.height,0,ue,ye,xe.data)}}}else{qe=M.mipmaps,Ne&&Je&&(qe.length>0&&Qe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,ge,ce[0].width,ce[0].height));for(let Me=0;Me<6;Me++)if(We){Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ce[Me].width,ce[Me].height,ue,ye,ce[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ge,ce[Me].width,ce[Me].height,0,ue,ye,ce[Me].data);for(let N=0;N<qe.length;N++){let w=qe[N].image[Me].image;Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,N+1,0,0,w.width,w.height,ue,ye,w.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,N+1,ge,w.width,w.height,0,ue,ye,w.data)}}else{Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ue,ye,ce[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ge,ue,ye,ce[Me]);for(let N=0;N<qe.length;N++){let xe=qe[N];Ne?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,N+1,0,0,ue,ye,xe.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,N+1,ge,ue,ye,xe.image[Me])}}}v(M,L)&&x(i.TEXTURE_CUBE_MAP),he.__version=oe.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function ve(S,M,V,de,oe,he){let Ue=r.convert(V.format,V.colorSpace),we=r.convert(V.type),Re=E(V.internalFormat,Ue,we,V.colorSpace);if(!n.get(M).__hasExternalTextures){let We=Math.max(1,M.width>>he),ce=Math.max(1,M.height>>he);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,he,Re,We,ce,M.depth,0,Ue,we,null):t.texImage2D(oe,he,Re,We,ce,0,Ue,we,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),ie(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,oe,n.get(V).__webglTexture,0,me(M)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,oe,n.get(V).__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(S,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,S),M.depthBuffer&&!M.stencilBuffer){let de=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||ie(M)){let oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Ai?de=i.DEPTH_COMPONENT32F:oe.type===Ti&&(de=i.DEPTH_COMPONENT24));let he=me(M);ie(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,de,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,he,de,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,de,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(M.depthBuffer&&M.stencilBuffer){let de=me(M);V&&ie(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,i.DEPTH24_STENCIL8,M.width,M.height):ie(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{let de=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<de.length;oe++){let he=de[oe],Ue=r.convert(he.format,he.colorSpace),we=r.convert(he.type),Re=E(he.internalFormat,Ue,we,he.colorSpace),ke=me(M);V&&ie(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Re,M.width,M.height):ie(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke,Re,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Re,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(S,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);let de=n.get(M.depthTexture).__webglTexture,oe=me(M);if(M.depthTexture.format===$i)ie(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(M.depthTexture.format===js)ie(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Pe(S){let M=n.get(S),V=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Le(M.__webglFramebuffer,S)}else if(V){M.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[de]),M.__webglDepthbuffer[de]=i.createRenderbuffer(),Ie(M.__webglDepthbuffer[de],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Ie(M.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(S,M,V){let de=n.get(S);M!==void 0&&ve(de.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Pe(S)}function D(S){let M=S.texture,V=n.get(S),de=n.get(M);S.addEventListener("dispose",O),S.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=M.version,o.memory.textures++);let oe=S.isWebGLCubeRenderTarget===!0,he=S.isWebGLMultipleRenderTargets===!0,Ue=p(S)||a;if(oe){V.__webglFramebuffer=[];for(let we=0;we<6;we++)if(a&&M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[we]=[];for(let Re=0;Re<M.mipmaps.length;Re++)V.__webglFramebuffer[we][Re]=i.createFramebuffer()}else V.__webglFramebuffer[we]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let we=0;we<M.mipmaps.length;we++)V.__webglFramebuffer[we]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(he)if(s.drawBuffers){let we=S.texture;for(let Re=0,ke=we.length;Re<ke;Re++){let We=n.get(we[Re]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&ie(S)===!1){let we=he?M:[M];V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Re=0;Re<we.length;Re++){let ke=we[Re];V.__webglColorRenderbuffer[Re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Re]);let We=r.convert(ke.format,ke.colorSpace),ce=r.convert(ke.type),$e=E(ke.internalFormat,We,ce,ke.colorSpace,S.isXRRenderTarget===!0),L=me(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,L,$e,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,V.__webglColorRenderbuffer[Re])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(V.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),W(i.TEXTURE_CUBE_MAP,M,Ue);for(let we=0;we<6;we++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)ve(V.__webglFramebuffer[we][Re],S,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Re);else ve(V.__webglFramebuffer[we],S,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);v(M,Ue)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){let we=S.texture;for(let Re=0,ke=we.length;Re<ke;Re++){let We=we[Re],ce=n.get(We);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),W(i.TEXTURE_2D,We,Ue),ve(V.__webglFramebuffer,S,We,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,0),v(We,Ue)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let we=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?we=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,de.__webglTexture),W(we,M,Ue),a&&M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)ve(V.__webglFramebuffer[Re],S,M,i.COLOR_ATTACHMENT0,we,Re);else ve(V.__webglFramebuffer,S,M,i.COLOR_ATTACHMENT0,we,0);v(M,Ue)&&x(we),t.unbindTexture()}S.depthBuffer&&Pe(S)}function _e(S){let M=p(S)||a,V=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let de=0,oe=V.length;de<oe;de++){let he=V[de];if(v(he,M)){let Ue=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,we=n.get(he).__webglTexture;t.bindTexture(Ue,we),x(Ue),t.unbindTexture()}}}function ae(S){if(a&&S.samples>0&&ie(S)===!1){let M=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],V=S.width,de=S.height,oe=i.COLOR_BUFFER_BIT,he=[],Ue=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(S),Re=S.isWebGLMultipleRenderTargets===!0;if(Re)for(let ke=0;ke<M.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ke=0;ke<M.length;ke++){he.push(i.COLOR_ATTACHMENT0+ke),S.depthBuffer&&he.push(Ue);let We=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(We===!1&&(S.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),Re&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[ke]),We===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ue]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ue])),Re){let ce=n.get(M[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,V,de,0,0,V,de,oe,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Re)for(let ke=0;ke<M.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,we.__webglColorRenderbuffer[ke]);let We=n.get(M[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function me(S){return Math.min(s.maxSamples,S.samples)}function ie(S){let M=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Fe(S){let M=o.render.frame;h.get(S)!==M&&(h.set(S,M),S.update())}function Te(S,M){let V=S.colorSpace,de=S.format,oe=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===mc||V!==di&&V!==xn&&(ut.getTransfer(V)===gt?a===!1?e.has("EXT_sRGB")===!0&&de===Hn?(S.format=mc,S.minFilter=_n,S.generateMipmaps=!1):M=mo.sRGBToLinear(M):(de!==Hn||oe!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}this.allocateTextureUnit=I,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=K,this.setTexture3D=te,this.setTextureCube=Z,this.rebindTextures=ze,this.setupRenderTarget=D,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ie}function Sv(i,e,t){let n=t.isWebGL2;function s(r,o=xn){let a,l=ut.getTransfer(o);if(r===Ci)return i.UNSIGNED_BYTE;if(r===jd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Qd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===rm)return i.BYTE;if(r===am)return i.SHORT;if(r===oh)return i.UNSIGNED_SHORT;if(r===$d)return i.INT;if(r===Ti)return i.UNSIGNED_INT;if(r===Ai)return i.FLOAT;if(r===rn)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===om)return i.ALPHA;if(r===Hn)return i.RGBA;if(r===lm)return i.LUMINANCE;if(r===cm)return i.LUMINANCE_ALPHA;if(r===$i)return i.DEPTH_COMPONENT;if(r===js)return i.DEPTH_STENCIL;if(r===mc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===hm)return i.RED;if(r===ef)return i.RED_INTEGER;if(r===um)return i.RG;if(r===tf)return i.RG_INTEGER;if(r===nf)return i.RGBA_INTEGER;if(r===Pl||r===Il||r===Ll||r===Dl)if(l===gt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Pl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Il)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ll)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Pl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Il)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ll)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pu||r===mu||r===gu||r===_u)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===pu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_u)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===xu||r===vu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===xu)return l===gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===vu)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yu||r===Mu||r===Eu||r===bu||r===Su||r===wu||r===Tu||r===Au||r===Ru||r===Cu||r===Pu||r===Iu||r===Lu||r===Du)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===yu)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mu)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Eu)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bu)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Su)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wu)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Tu)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Au)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ru)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cu)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pu)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Iu)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lu)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Du)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ul||r===Uu||r===Nu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ul)return l===gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Uu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dm||r===Fu||r===Ou||r===Bu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ul)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Fu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ou)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ki?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ac=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ui=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},wv={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rc=class extends $n{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null,_=t.getContextAttributes(),p=null,d=null,v=[],x=[],E=new se,P=null,R=new Xt;R.layers.enable(1),R.viewport=new yt;let C=new Xt;C.layers.enable(2),C.viewport=new yt;let O=[R,C],y=new Ac;y.layers.enable(1),y.layers.enable(2);let b=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ne=v[W];return ne===void 0&&(ne=new Ur,v[W]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(W){let ne=v[W];return ne===void 0&&(ne=new Ur,v[W]=ne),ne.getGripSpace()},this.getHand=function(W){let ne=v[W];return ne===void 0&&(ne=new Ur,v[W]=ne),ne.getHandSpace()};function X(W){let ne=x.indexOf(W.inputSource);if(ne===-1)return;let pe=v[ne];pe!==void 0&&(pe.update(W.inputSource,W.frame,c||o),pe.dispatchEvent({type:W.type,data:W.inputSource}))}function U(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",I);for(let W=0;W<v.length;W++){let ne=x[W];ne!==null&&(x[W]=null,v[W].disconnect(ne))}b=null,B=null,e.setRenderTarget(p),m=null,f=null,u=null,s=null,d=null,j.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",U),s.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ne={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Ot(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ne=null,pe=null,be=null;_.depth&&(be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=_.stencil?js:$i,pe=_.stencil?Ki:Ti);let ve={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(ve),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Ot(f.textureWidth,f.textureHeight,{format:Hn,type:Ci,depthTexture:new yo(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ie=e.properties.get(d);Ie.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(W){for(let ne=0;ne<W.removed.length;ne++){let pe=W.removed[ne],be=x.indexOf(pe);be>=0&&(x[be]=null,v[be].disconnect(pe))}for(let ne=0;ne<W.added.length;ne++){let pe=W.added[ne],be=x.indexOf(pe);if(be===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=x.length){x.push(pe),be=Ie;break}else if(x[Ie]===null){x[Ie]=pe,be=Ie;break}if(be===-1)break}let ve=v[be];ve&&ve.connect(pe)}}let F=new A,G=new A;function K(W,ne,pe){F.setFromMatrixPosition(ne.matrixWorld),G.setFromMatrixPosition(pe.matrixWorld);let be=F.distanceTo(G),ve=ne.projectionMatrix.elements,Ie=pe.projectionMatrix.elements,Le=ve[14]/(ve[10]-1),Pe=ve[14]/(ve[10]+1),ze=(ve[9]+1)/ve[5],D=(ve[9]-1)/ve[5],_e=(ve[8]-1)/ve[0],ae=(Ie[8]+1)/Ie[0],me=Le*_e,ie=Le*ae,Fe=be/(-_e+ae),Te=Fe*-_e;ne.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Te),W.translateZ(Fe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let S=Le+Fe,M=Pe+Fe,V=me-Te,de=ie+(be-Te),oe=ze*Pe/M*S,he=D*Pe/M*S;W.projectionMatrix.makePerspective(V,de,oe,he,S,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function te(W,ne){ne===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ne.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;y.near=C.near=R.near=W.near,y.far=C.far=R.far=W.far,(b!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,B=y.far);let ne=W.parent,pe=y.cameras;te(y,ne);for(let be=0;be<pe.length;be++)te(pe[be],ne);pe.length===2?K(y,R,C):y.projectionMatrix.copy(R.projectionMatrix),Z(W,y,ne)};function Z(W,ne,pe){pe===null?W.matrix.copy(ne.matrixWorld):(W.matrix.copy(pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(ne.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Br*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)};let re=null;function ee(W,ne){if(h=ne.getViewerPose(c||o),g=ne,h!==null){let pe=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let be=!1;pe.length!==y.cameras.length&&(y.cameras.length=0,be=!0);for(let ve=0;ve<pe.length;ve++){let Ie=pe[ve],Le=null;if(m!==null)Le=m.getViewport(Ie);else{let ze=u.getViewSubImage(f,Ie);Le=ze.viewport,ve===0&&(e.setRenderTargetTextures(d,ze.colorTexture,f.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(d))}let Pe=O[ve];Pe===void 0&&(Pe=new Xt,Pe.layers.enable(ve),Pe.viewport=new yt,O[ve]=Pe),Pe.matrix.fromArray(Ie.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ie.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Le.x,Le.y,Le.width,Le.height),ve===0&&(y.matrix.copy(Pe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),be===!0&&y.cameras.push(Pe)}}for(let pe=0;pe<v.length;pe++){let be=x[pe],ve=v[pe];be!==null&&ve!==void 0&&ve.update(be,ne,c||o)}re&&re(W,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let j=new uf;j.setAnimationLoop(ee),this.setAnimationLoop=function(W){re=W},this.dispose=function(){}}};function Tv(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,hf(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,v,x,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,v,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===qt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===qt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let v=e.get(d).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,v,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=x*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){let v=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Av(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){let E=x.program;n.uniformBlockBinding(v,E)}function c(v,x){let E=s[v.id];E===void 0&&(g(v),E=h(v),s[v.id]=E,v.addEventListener("dispose",p));let P=x.program;n.updateUBOMapping(v,P);let R=e.render.frame;r[v.id]!==R&&(f(v),r[v.id]=R)}function h(v){let x=u();v.__bindingPointIndex=x;let E=i.createBuffer(),P=v.__size,R=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let x=s[v.id],E=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,C=E.length;R<C;R++){let O=Array.isArray(E[R])?E[R]:[E[R]];for(let y=0,b=O.length;y<b;y++){let B=O[y];if(m(B,R,y,P)===!0){let X=B.__offset,U=Array.isArray(B.value)?B.value:[B.value],I=0;for(let F=0;F<U.length;F++){let G=U[F],K=_(G);typeof G=="number"||typeof G=="boolean"?(B.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,X+I,B.__data)):G.isMatrix3?(B.__data[0]=G.elements[0],B.__data[1]=G.elements[1],B.__data[2]=G.elements[2],B.__data[3]=0,B.__data[4]=G.elements[3],B.__data[5]=G.elements[4],B.__data[6]=G.elements[5],B.__data[7]=0,B.__data[8]=G.elements[6],B.__data[9]=G.elements[7],B.__data[10]=G.elements[8],B.__data[11]=0):(G.toArray(B.__data,I),I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(v,x,E,P){let R=v.value,C=x+"_"+E;if(P[C]===void 0)return typeof R=="number"||typeof R=="boolean"?P[C]=R:P[C]=R.clone(),!0;{let O=P[C];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return P[C]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function g(v){let x=v.uniforms,E=0,P=16;for(let C=0,O=x.length;C<O;C++){let y=Array.isArray(x[C])?x[C]:[x[C]];for(let b=0,B=y.length;b<B;b++){let X=y[b],U=Array.isArray(X.value)?X.value:[X.value];for(let I=0,F=U.length;I<F;I++){let G=U[I],K=_(G),te=E%P;te!==0&&P-te<K.boundary&&(E+=P-te),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=K.storage}}}let R=E%P;return R>0&&(E+=P-R),v.__size=E,v.__cache={},this}function _(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){let x=v.target;x.removeEventListener("dispose",p);let E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Wr=class{constructor(e={}){let{canvas:t=Om(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;let x=this,E=!1,P=0,R=0,C=null,O=-1,y=null,b=new yt,B=new yt,X=null,U=new Ae(0),I=0,F=t.width,G=t.height,K=1,te=null,Z=null,re=new yt(0,0,F,G),ee=new yt(0,0,F,G),j=!1,W=new Gr,ne=!1,pe=!1,be=null,ve=new rt,Ie=new se,Le=new A,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return C===null?K:1}let D=n;function _e(T,z){for(let Y=0;Y<T.length;Y++){let J=T[Y],q=t.getContext(J,z);if(q!==null)return q}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${th}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",xe,!1),D===null){let z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),D=_e(z,T),D===null)throw _e(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ae,me,ie,Fe,Te,S,M,V,de,oe,he,Ue,we,Re,ke,We,ce,$e,L,ue,ye,ge,Ne,Je;function Qe(){ae=new q_(D),me=new z_(D,ae,e),ae.init(me),ge=new Sv(D,ae,me),ie=new Ev(D,ae,me),Fe=new J_(D),Te=new hv,S=new bv(D,ae,ie,Te,me,ge,Fe),M=new V_(x),V=new X_(x),de=new i0(D,me),Ne=new B_(D,ae,de,me),oe=new Y_(D,de,Fe,Ne),he=new Q_(D,oe,de,Fe),L=new j_(D,me,S),We=new H_(Te),Ue=new cv(x,M,V,ae,me,Ne,We),we=new Tv(x,Te),Re=new dv,ke=new xv(ae,me),$e=new O_(x,M,V,ie,he,f,l),ce=new Mv(x,he,me),Je=new Av(D,Fe,me,ie),ue=new k_(D,ae,Fe,me),ye=new Z_(D,ae,Fe,me),Fe.programs=Ue.programs,x.capabilities=me,x.extensions=ae,x.properties=Te,x.renderLists=Re,x.shadowMap=ce,x.state=ie,x.info=Fe}Qe();let qe=new Rc(x,D);this.xr=qe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(F,G,!1))},this.getSize=function(T){return T.set(F,G)},this.setSize=function(T,z,Y=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,G=z,t.width=Math.floor(T*K),t.height=Math.floor(z*K),Y===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(F*K,G*K).floor()},this.setDrawingBufferSize=function(T,z,Y){F=T,G=z,K=Y,t.width=Math.floor(T*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(re)},this.setViewport=function(T,z,Y,J){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,z,Y,J),ie.viewport(b.copy(re).multiplyScalar(K).floor())},this.getScissor=function(T){return T.copy(ee)},this.setScissor=function(T,z,Y,J){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,z,Y,J),ie.scissor(B.copy(ee).multiplyScalar(K).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(T){ie.setScissorTest(j=T)},this.setOpaqueSort=function(T){te=T},this.setTransparentSort=function(T){Z=T},this.getClearColor=function(T){return T.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(T=!0,z=!0,Y=!0){let J=0;if(T){let q=!1;if(C!==null){let Ce=C.texture.format;q=Ce===nf||Ce===tf||Ce===ef}if(q){let Ce=C.texture.type,Oe=Ce===Ci||Ce===Ti||Ce===oh||Ce===Ki||Ce===jd||Ce===Qd,Ve=$e.getClearColor(),Xe=$e.getClearAlpha(),je=Ve.r,Ye=Ve.g,Ke=Ve.b;Oe?(m[0]=je,m[1]=Ye,m[2]=Ke,m[3]=Xe,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=je,g[1]=Ye,g[2]=Ke,g[3]=Xe,D.clearBufferiv(D.COLOR,0,g))}else J|=D.COLOR_BUFFER_BIT}z&&(J|=D.DEPTH_BUFFER_BIT),Y&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Re.dispose(),ke.dispose(),Te.dispose(),M.dispose(),V.dispose(),he.dispose(),Ne.dispose(),Je.dispose(),Ue.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Ee),qe.removeEventListener("sessionend",fe),be&&(be.dispose(),be=null),De.stop()};function Me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=Fe.autoReset,z=ce.enabled,Y=ce.autoUpdate,J=ce.needsUpdate,q=ce.type;Qe(),Fe.autoReset=T,ce.enabled=z,ce.autoUpdate=Y,ce.needsUpdate=J,ce.type=q}function xe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function w(T){let z=T.target;z.removeEventListener("dispose",w),k(z)}function k(T){H(T),Te.remove(T)}function H(T){let z=Te.get(T).programs;z!==void 0&&(z.forEach(function(Y){Ue.releaseProgram(Y)}),T.isShaderMaterial&&Ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Y,J,q,Ce){z===null&&(z=Pe);let Oe=q.isMesh&&q.matrixWorld.determinant()<0,Ve=jt(T,z,Y,J,q);ie.setMaterial(J,Oe);let Xe=Y.index,je=1;if(J.wireframe===!0){if(Xe=oe.getWireframeAttribute(Y),Xe===void 0)return;je=2}let Ye=Y.drawRange,Ke=Y.attributes.position,Ct=Ye.start*je,Mn=(Ye.start+Ye.count)*je;Ce!==null&&(Ct=Math.max(Ct,Ce.start*je),Mn=Math.min(Mn,(Ce.start+Ce.count)*je)),Xe!==null?(Ct=Math.max(Ct,0),Mn=Math.min(Mn,Xe.count)):Ke!=null&&(Ct=Math.max(Ct,0),Mn=Math.min(Mn,Ke.count));let Gt=Mn-Ct;if(Gt<0||Gt===1/0)return;Ne.setup(q,J,Ve,Y,Xe);let ii,St=ue;if(Xe!==null&&(ii=de.get(Xe),St=ye,St.setIndex(ii)),q.isMesh)J.wireframe===!0?(ie.setLineWidth(J.wireframeLinewidth*ze()),St.setMode(D.LINES)):St.setMode(D.TRIANGLES);else if(q.isLine){let et=J.linewidth;et===void 0&&(et=1),ie.setLineWidth(et*ze()),q.isLineSegments?St.setMode(D.LINES):q.isLineLoop?St.setMode(D.LINE_LOOP):St.setMode(D.LINE_STRIP)}else q.isPoints?St.setMode(D.POINTS):q.isSprite&&St.setMode(D.TRIANGLES);if(q.isBatchedMesh)St.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)St.renderInstances(Ct,Gt,q.count);else if(Y.isInstancedBufferGeometry){let et=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,wl=Math.min(Y.instanceCount,et);St.renderInstances(Ct,Gt,wl)}else St.render(Ct,Gt)};function $(T,z,Y){T.transparent===!0&&T.side===Sn&&T.forceSinglePass===!1?(T.side=qt,T.needsUpdate=!0,Rn(T,z,Y),T.side=In,T.needsUpdate=!0,Rn(T,z,Y),T.side=Sn):Rn(T,z,Y)}this.compile=function(T,z,Y=null){Y===null&&(Y=T),p=ke.get(Y),p.init(),v.push(p),Y.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),T!==Y&&T.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights(x._useLegacyLights);let J=new Set;return T.traverse(function(q){let Ce=q.material;if(Ce)if(Array.isArray(Ce))for(let Oe=0;Oe<Ce.length;Oe++){let Ve=Ce[Oe];$(Ve,Y,q),J.add(Ve)}else $(Ce,Y,q),J.add(Ce)}),v.pop(),p=null,J},this.compileAsync=function(T,z,Y=null){let J=this.compile(T,z,Y);return new Promise(q=>{function Ce(){if(J.forEach(function(Oe){Te.get(Oe).currentProgram.isReady()&&J.delete(Oe)}),J.size===0){q(T);return}setTimeout(Ce,10)}ae.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Q=null;function le(T){Q&&Q(T)}function Ee(){De.stop()}function fe(){De.start()}let De=new uf;De.setAnimationLoop(le),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(T){Q=T,qe.setAnimationLoop(T),T===null?De.stop():De.start()},qe.addEventListener("sessionstart",Ee),qe.addEventListener("sessionend",fe),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(z),z=qe.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,z,C),p=ke.get(T,v.length),p.init(),v.push(p),ve.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(ve),pe=this.localClippingEnabled,ne=We.init(this.clippingPlanes,pe),_=Re.get(T,d.length),_.init(),d.push(_),ct(T,z,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(te,Z),this.info.render.frame++,ne===!0&&We.beginShadows();let Y=p.state.shadowsArray;if(ce.render(Y,T,z),ne===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(_,T),p.setupLights(x._useLegacyLights),z.isArrayCamera){let J=z.cameras;for(let q=0,Ce=J.length;q<Ce;q++){let Oe=J[q];Ht(_,T,Oe,Oe.viewport)}}else Ht(_,T,z);C!==null&&(S.updateMultisampleRenderTarget(C),S.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(x,T,z),Ne.resetDefaultState(),O=-1,y=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function ct(T,z,Y,J){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){J&&Le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ve);let Oe=he.update(T),Ve=T.material;Ve.visible&&_.push(T,Oe,Ve,Y,Le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){let Oe=he.update(T),Ve=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Le.copy(T.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Le.copy(Oe.boundingSphere.center)),Le.applyMatrix4(T.matrixWorld).applyMatrix4(ve)),Array.isArray(Ve)){let Xe=Oe.groups;for(let je=0,Ye=Xe.length;je<Ye;je++){let Ke=Xe[je],Ct=Ve[Ke.materialIndex];Ct&&Ct.visible&&_.push(T,Oe,Ct,Y,Le.z,Ke)}}else Ve.visible&&_.push(T,Oe,Ve,Y,Le.z,null)}}let Ce=T.children;for(let Oe=0,Ve=Ce.length;Oe<Ve;Oe++)ct(Ce[Oe],z,Y,J)}function Ht(T,z,Y,J){let q=T.opaque,Ce=T.transmissive,Oe=T.transparent;p.setupLightsView(Y),ne===!0&&We.setGlobalState(x.clippingPlanes,Y),Ce.length>0&&Yt(q,Ce,z,Y),J&&ie.viewport(b.copy(J)),q.length>0&&ot(q,z,Y),Ce.length>0&&ot(Ce,z,Y),Oe.length>0&&ot(Oe,z,Y),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Yt(T,z,Y,J){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;let Ce=me.isWebGL2;be===null&&(be=new Ot(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?rn:Ci,minFilter:Or,samples:Ce?4:0})),x.getDrawingBufferSize(Ie),Ce?be.setSize(Ie.x,Ie.y):be.setSize(po(Ie.x),po(Ie.y));let Oe=x.getRenderTarget();x.setRenderTarget(be),x.getClearColor(U),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();let Ve=x.toneMapping;x.toneMapping=Ri,ot(T,Y,J),S.updateMultisampleRenderTarget(be),S.updateRenderTargetMipmap(be);let Xe=!1;for(let je=0,Ye=z.length;je<Ye;je++){let Ke=z[je],Ct=Ke.object,Mn=Ke.geometry,Gt=Ke.material,ii=Ke.group;if(Gt.side===Sn&&Ct.layers.test(J.layers)){let St=Gt.side;Gt.side=qt,Gt.needsUpdate=!0,Fn(Ct,Y,J,Mn,Gt,ii),Gt.side=St,Gt.needsUpdate=!0,Xe=!0}}Xe===!0&&(S.updateMultisampleRenderTarget(be),S.updateRenderTargetMipmap(be)),x.setRenderTarget(Oe),x.setClearColor(U,I),x.toneMapping=Ve}function ot(T,z,Y){let J=z.isScene===!0?z.overrideMaterial:null;for(let q=0,Ce=T.length;q<Ce;q++){let Oe=T[q],Ve=Oe.object,Xe=Oe.geometry,je=J===null?Oe.material:J,Ye=Oe.group;Ve.layers.test(Y.layers)&&Fn(Ve,z,Y,Xe,je,Ye)}}function Fn(T,z,Y,J,q,Ce){T.onBeforeRender(x,z,Y,J,q,Ce),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(x,z,Y,J,T,Ce),q.transparent===!0&&q.side===Sn&&q.forceSinglePass===!1?(q.side=qt,q.needsUpdate=!0,x.renderBufferDirect(Y,z,J,q,T,Ce),q.side=In,q.needsUpdate=!0,x.renderBufferDirect(Y,z,J,q,T,Ce),q.side=Sn):x.renderBufferDirect(Y,z,J,q,T,Ce),T.onAfterRender(x,z,Y,J,q,Ce)}function Rn(T,z,Y){z.isScene!==!0&&(z=Pe);let J=Te.get(T),q=p.state.lights,Ce=p.state.shadowsArray,Oe=q.state.version,Ve=Ue.getParameters(T,q.state,Ce,z,Y),Xe=Ue.getProgramCacheKey(Ve),je=J.programs;J.environment=T.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(T.isMeshStandardMaterial?V:M).get(T.envMap||J.environment),je===void 0&&(T.addEventListener("dispose",w),je=new Map,J.programs=je);let Ye=je.get(Xe);if(Ye!==void 0){if(J.currentProgram===Ye&&J.lightsStateVersion===Oe)return ht(T,Ve),Ye}else Ve.uniforms=Ue.getUniforms(T),T.onBuild(Y,Ve,x),T.onBeforeCompile(Ve,x),Ye=Ue.acquireProgram(Ve,Xe),je.set(Xe,Ye),J.uniforms=Ve.uniforms;let Ke=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ke.clippingPlanes=We.uniform),ht(T,Ve),J.needsLights=Qt(T),J.lightsStateVersion=Oe,J.needsLights&&(Ke.ambientLightColor.value=q.state.ambient,Ke.lightProbe.value=q.state.probe,Ke.directionalLights.value=q.state.directional,Ke.directionalLightShadows.value=q.state.directionalShadow,Ke.spotLights.value=q.state.spot,Ke.spotLightShadows.value=q.state.spotShadow,Ke.rectAreaLights.value=q.state.rectArea,Ke.ltc_1.value=q.state.rectAreaLTC1,Ke.ltc_2.value=q.state.rectAreaLTC2,Ke.pointLights.value=q.state.point,Ke.pointLightShadows.value=q.state.pointShadow,Ke.hemisphereLights.value=q.state.hemi,Ke.directionalShadowMap.value=q.state.directionalShadowMap,Ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ke.spotShadowMap.value=q.state.spotShadowMap,Ke.spotLightMatrix.value=q.state.spotLightMatrix,Ke.spotLightMap.value=q.state.spotLightMap,Ke.pointShadowMap.value=q.state.pointShadowMap,Ke.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=Ye,J.uniformsList=null,Ye}function ft(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=Js.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function ht(T,z){let Y=Te.get(T);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function jt(T,z,Y,J,q){z.isScene!==!0&&(z=Pe),S.resetTextureUnits();let Ce=z.fog,Oe=J.isMeshStandardMaterial?z.environment:null,Ve=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:di,Xe=(J.isMeshStandardMaterial?V:M).get(J.envMap||Oe),je=J.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ye=!!Y.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ke=!!Y.morphAttributes.position,Ct=!!Y.morphAttributes.normal,Mn=!!Y.morphAttributes.color,Gt=Ri;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Gt=x.toneMapping);let ii=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,St=ii!==void 0?ii.length:0,et=Te.get(J),wl=p.state.lights;if(ne===!0&&(pe===!0||T!==y)){let Cn=T===y&&J.id===O;We.setState(J,T,Cn)}let Tt=!1;J.version===et.__version?(et.needsLights&&et.lightsStateVersion!==wl.state.version||et.outputColorSpace!==Ve||q.isBatchedMesh&&et.batching===!1||!q.isBatchedMesh&&et.batching===!0||q.isInstancedMesh&&et.instancing===!1||!q.isInstancedMesh&&et.instancing===!0||q.isSkinnedMesh&&et.skinning===!1||!q.isSkinnedMesh&&et.skinning===!0||q.isInstancedMesh&&et.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&et.instancingColor===!1&&q.instanceColor!==null||et.envMap!==Xe||J.fog===!0&&et.fog!==Ce||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==We.numPlanes||et.numIntersection!==We.numIntersection)||et.vertexAlphas!==je||et.vertexTangents!==Ye||et.morphTargets!==Ke||et.morphNormals!==Ct||et.morphColors!==Mn||et.toneMapping!==Gt||me.isWebGL2===!0&&et.morphTargetsCount!==St)&&(Tt=!0):(Tt=!0,et.__version=J.version);let zi=et.currentProgram;Tt===!0&&(zi=Rn(J,z,q));let au=!1,Mr=!1,Tl=!1,en=zi.getUniforms(),Hi=et.uniforms;if(ie.useProgram(zi.program)&&(au=!0,Mr=!0,Tl=!0),J.id!==O&&(O=J.id,Mr=!0),au||y!==T){en.setValue(D,"projectionMatrix",T.projectionMatrix),en.setValue(D,"viewMatrix",T.matrixWorldInverse);let Cn=en.map.cameraPosition;Cn!==void 0&&Cn.setValue(D,Le.setFromMatrixPosition(T.matrixWorld)),me.logarithmicDepthBuffer&&en.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&en.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Mr=!0,Tl=!0)}if(q.isSkinnedMesh){en.setOptional(D,q,"bindMatrix"),en.setOptional(D,q,"bindMatrixInverse");let Cn=q.skeleton;Cn&&(me.floatVertexTextures?(Cn.boneTexture===null&&Cn.computeBoneTexture(),en.setValue(D,"boneTexture",Cn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(en.setOptional(D,q,"batchingTexture"),en.setValue(D,"batchingTexture",q._matricesTexture,S));let Al=Y.morphAttributes;if((Al.position!==void 0||Al.normal!==void 0||Al.color!==void 0&&me.isWebGL2===!0)&&L.update(q,Y,zi),(Mr||et.receiveShadow!==q.receiveShadow)&&(et.receiveShadow=q.receiveShadow,en.setValue(D,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Hi.envMap.value=Xe,Hi.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Mr&&(en.setValue(D,"toneMappingExposure",x.toneMappingExposure),et.needsLights&&Vt(Hi,Tl),Ce&&J.fog===!0&&we.refreshFogUniforms(Hi,Ce),we.refreshMaterialUniforms(Hi,J,K,G,be),Js.upload(D,ft(et),Hi,S)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Js.upload(D,ft(et),Hi,S),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&en.setValue(D,"center",q.center),en.setValue(D,"modelViewMatrix",q.modelViewMatrix),en.setValue(D,"normalMatrix",q.normalMatrix),en.setValue(D,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Cn=J.uniformsGroups;for(let Rl=0,Cp=Cn.length;Rl<Cp;Rl++)if(me.isWebGL2){let ou=Cn[Rl];Je.update(ou,zi),Je.bind(ou,zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zi}function Vt(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Qt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,z,Y){Te.get(T.texture).__webglTexture=z,Te.get(T.depthTexture).__webglTexture=Y;let J=Te.get(T);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Y===void 0,J.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){let Y=Te.get(T);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,Y=0){C=T,P=z,R=Y;let J=!0,q=null,Ce=!1,Oe=!1;if(T){let Xe=Te.get(T);Xe.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(D.FRAMEBUFFER,null),J=!1):Xe.__webglFramebuffer===void 0?S.setupRenderTarget(T):Xe.__hasExternalTextures&&S.rebindTextures(T,Te.get(T.texture).__webglTexture,Te.get(T.depthTexture).__webglTexture);let je=T.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Oe=!0);let Ye=Te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ye[z])?q=Ye[z][Y]:q=Ye[z],Ce=!0):me.isWebGL2&&T.samples>0&&S.useMultisampledRTT(T)===!1?q=Te.get(T).__webglMultisampledFramebuffer:Array.isArray(Ye)?q=Ye[Y]:q=Ye,b.copy(T.viewport),B.copy(T.scissor),X=T.scissorTest}else b.copy(re).multiplyScalar(K).floor(),B.copy(ee).multiplyScalar(K).floor(),X=j;if(ie.bindFramebuffer(D.FRAMEBUFFER,q)&&me.drawBuffers&&J&&ie.drawBuffers(T,q),ie.viewport(b),ie.scissor(B),ie.setScissorTest(X),Ce){let Xe=Te.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Xe.__webglTexture,Y)}else if(Oe){let Xe=Te.get(T.texture),je=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Xe.__webglTexture,Y||0,je)}O=-1},this.readRenderTargetPixels=function(T,z,Y,J,q,Ce,Oe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve){ie.bindFramebuffer(D.FRAMEBUFFER,Ve);try{let Xe=T.texture,je=Xe.format,Ye=Xe.type;if(je!==Hn&&ge.convert(je)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ke=Ye===rn&&(ae.has("EXT_color_buffer_half_float")||me.isWebGL2&&ae.has("EXT_color_buffer_float"));if(Ye!==Ci&&ge.convert(Ye)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===Ai&&(me.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-J&&Y>=0&&Y<=T.height-q&&D.readPixels(z,Y,J,q,ge.convert(je),ge.convert(Ye),Ce)}finally{let Xe=C!==null?Te.get(C).__webglFramebuffer:null;ie.bindFramebuffer(D.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(T,z,Y=0){let J=Math.pow(2,-Y),q=Math.floor(z.image.width*J),Ce=Math.floor(z.image.height*J);S.setTexture2D(z,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,T.x,T.y,q,Ce),ie.unbindTexture()},this.copyTextureToTexture=function(T,z,Y,J=0){let q=z.image.width,Ce=z.image.height,Oe=ge.convert(Y.format),Ve=ge.convert(Y.type);S.setTexture2D(Y,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment),z.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,J,T.x,T.y,q,Ce,Oe,Ve,z.image.data):z.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,J,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Oe,z.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,J,T.x,T.y,Oe,Ve,z.image),J===0&&Y.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ie.unbindTexture()},this.copyTextureToTexture3D=function(T,z,Y,J,q=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ce=T.max.x-T.min.x+1,Oe=T.max.y-T.min.y+1,Ve=T.max.z-T.min.z+1,Xe=ge.convert(J.format),je=ge.convert(J.type),Ye;if(J.isData3DTexture)S.setTexture3D(J,0),Ye=D.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)S.setTexture2DArray(J,0),Ye=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,J.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,J.unpackAlignment);let Ke=D.getParameter(D.UNPACK_ROW_LENGTH),Ct=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Mn=D.getParameter(D.UNPACK_SKIP_PIXELS),Gt=D.getParameter(D.UNPACK_SKIP_ROWS),ii=D.getParameter(D.UNPACK_SKIP_IMAGES),St=Y.isCompressedTexture?Y.mipmaps[q]:Y.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,St.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,T.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,T.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,T.min.z),Y.isDataTexture||Y.isData3DTexture?D.texSubImage3D(Ye,q,z.x,z.y,z.z,Ce,Oe,Ve,Xe,je,St.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ye,q,z.x,z.y,z.z,Ce,Oe,Ve,Xe,St.data)):D.texSubImage3D(Ye,q,z.x,z.y,z.z,Ce,Oe,Ve,Xe,je,St),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ke),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ct),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ii),q===0&&J.generateMipmaps&&D.generateMipmap(Ye),ie.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?S.setTextureCube(T,0):T.isData3DTexture?S.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?S.setTexture2DArray(T,0):S.setTexture2D(T,0),ie.unbindTexture()},this.resetState=function(){P=0,R=0,C=null,ie.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===lh?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Go?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Et?ji:rf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ji?Et:di}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Cc=class extends Wr{};Cc.prototype.isWebGL1Renderer=!0;var Mo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Eo=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Pc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},hn=new A,bo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xr=class extends Vn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ks,Tr=new A,zs=new A,Hs=new A,Vs=new se,Ar=new se,_f=new rt,Ja=new A,Rr=new A,Ka=new A,Rd=new se,sc=new se,Cd=new se,So=class extends Jt{constructor(e=new Xr){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new _t;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pc(t,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new bo(n,3,0,!1)),ks.setAttribute("uv",new bo(n,2,3,!1))}this.geometry=ks,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),_f.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-Hs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;$a(Ja.set(-.5,-.5,0),Hs,o,zs,s,r),$a(Rr.set(.5,-.5,0),Hs,o,zs,s,r),$a(Ka.set(.5,.5,0),Hs,o,zs,s,r),Rd.set(0,0),sc.set(1,0),Cd.set(1,1);let a=e.ray.intersectTriangle(Ja,Rr,Ka,!1,Tr);if(a===null&&($a(Rr.set(-.5,.5,0),Hs,o,zs,s,r),sc.set(0,1),a=e.ray.intersectTriangle(Ja,Ka,Rr,!1,Tr),a===null))return;let l=e.ray.origin.distanceTo(Tr);l<e.near||l>e.far||t.push({distance:l,point:Tr.clone(),uv:Ji.getInterpolation(Tr,Ja,Rr,Ka,Rd,sc,Cd,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function $a(i,e,t,n,s,r){Vs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ar.x=r*Vs.x-s*Vs.y,Ar.y=s*Vs.x+r*Vs.y):Ar.copy(Vs),i.copy(e),i.x+=Ar.x,i.y+=Ar.y,i.applyMatrix4(_f)}var ns=class extends lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gs=new rt,Pd=new rt,ja=[],Id=new Ln,Rv=new rt,Cr=new dt,Pr=new fi,pn=class extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ns(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Id.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Id)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Pr.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Cr.geometry=this.geometry,Cr.material=this.material,Cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),e.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),Pd.multiplyMatrices(n,Gs),Cr.matrixWorld=Pd,Cr.raycast(e,ja);for(let o=0,a=ja.length;o<a;o++){let l=ja[o];l.instanceId=r,l.object=this,t.push(l)}ja.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ns(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var qr=class extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ld=new A,Dd=new A,Ud=new rt,rc=new Li,Qa=new fi,Ic=class extends Jt{constructor(e=new _t,t=new qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ld.fromBufferAttribute(t,s-1),Dd.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ld.distanceTo(Dd);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(s),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;Ud.copy(s).invert(),rc.copy(e.ray).applyMatrix4(Ud);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new A,h=new A,u=new A,f=new A,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let d=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let x=d,E=v-1;x<E;x+=m){let P=g.getX(x),R=g.getX(x+1);if(c.fromBufferAttribute(p,P),h.fromBufferAttribute(p,R),rc.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let O=e.ray.origin.distanceTo(f);O<e.near||O>e.far||t.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let x=d,E=v-1;x<E;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),rc.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Nd=new A,Fd=new A,wo=class extends Ic{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Nd.fromBufferAttribute(t,s),Fd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Nd.distanceTo(Fd);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Yr=class extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Od=new rt,Lc=new Li,eo=new fi,to=new A,To=class extends Jt{constructor(e=new _t,t=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;Od.copy(s).invert(),Lc.copy(e.ray).applyMatrix4(Od);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){let p=c.getX(g);to.fromBufferAttribute(u,p),Bd(to,p,l,s,e,t,this)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,_=m;g<_;g++)to.fromBufferAttribute(u,g),Bd(to,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bd(i,e,t,n,s,r,o){let a=Lc.distanceSqToPoint(i);if(a<t){let l=new A;Lc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var pi=class extends fn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,m=(o-h)/f;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new se:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new A,s=[],r=[],o=[],a=new A,l=new rt;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ft(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Ft(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zr=class extends Dn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new se,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dc=class extends Zr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function uh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,m*=h,s(o,a,f,m)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var no=new A,ac=new uh,oc=new uh,lc=new uh,Uc=class extends Dn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(no.subVectors(s[0],s[1]).add(s[0]),c=no);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(no.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=no),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),ac.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,p),oc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,p),lc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(ac.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),oc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),lc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ac.calc(l),oc.calc(l),lc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function kd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Cv(i,e){let t=1-i;return t*t*e}function Pv(i,e){return 2*(1-i)*i*e}function Iv(i,e){return i*i*e}function Nr(i,e,t,n){return Cv(i,e)+Pv(i,t)+Iv(i,n)}function Lv(i,e){let t=1-i;return t*t*t*e}function Dv(i,e){let t=1-i;return 3*t*t*i*e}function Uv(i,e){return 3*(1-i)*i*i*e}function Nv(i,e){return i*i*i*e}function Fr(i,e,t,n,s){return Lv(i,e)+Dv(i,t)+Uv(i,n)+Nv(i,s)}var Ao=class extends Dn{constructor(e=new se,t=new se,n=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new se){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fr(e,s.x,r.x,o.x,a.x),Fr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nc=class extends Dn{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fr(e,s.x,r.x,o.x,a.x),Fr(e,s.y,r.y,o.y,a.y),Fr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ro=class extends Dn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fc=class extends Dn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Co=class extends Dn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Nr(e,s.x,r.x,o.x),Nr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oc=class extends Dn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Nr(e,s.x,r.x,o.x),Nr(e,s.y,r.y,o.y),Nr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(kd(a,l.x,c.x,h.x,u.x),kd(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new se().fromArray(s))}return this}},Bc=Object.freeze({__proto__:null,ArcCurve:Dc,CatmullRomCurve3:Uc,CubicBezierCurve:Ao,CubicBezierCurve3:Nc,EllipseCurve:Zr,LineCurve:Ro,LineCurve3:Fc,QuadraticBezierCurve:Co,QuadraticBezierCurve3:Oc,SplineCurve:Po}),kc=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Bc[s.type]().fromJSON(s))}return this}},Io=class extends kc{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ro(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Co(this.currentPoint.clone(),new se(e,t),new se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Ao(this.currentPoint.clone(),new se(e,t),new se(n,s),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Po(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Zr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var sr=class i extends _t{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],m=[],g=0,_=[],p=n/2,d=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(m,2));function v(){let E=new A,P=new A,R=0,C=(t-e)/n;for(let O=0;O<=r;O++){let y=[],b=O/r,B=b*(t-e)+e;for(let X=0;X<=s;X++){let U=X/s,I=U*l+a,F=Math.sin(I),G=Math.cos(I);P.x=B*F,P.y=-b*n+p,P.z=B*G,u.push(P.x,P.y,P.z),E.set(F,C,G).normalize(),f.push(E.x,E.y,E.z),m.push(U,1-b),y.push(g++)}_.push(y)}for(let O=0;O<s;O++)for(let y=0;y<r;y++){let b=_[y][O],B=_[y+1][O],X=_[y+1][O+1],U=_[y][O+1];h.push(b,B,U),h.push(B,X,U),R+=6}c.addGroup(d,R,0),d+=R}function x(E){let P=g,R=new se,C=new A,O=0,y=E===!0?e:t,b=E===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,p*b,0),f.push(0,b,0),m.push(.5,.5),g++;let B=g;for(let X=0;X<=s;X++){let I=X/s*l+a,F=Math.cos(I),G=Math.sin(I);C.x=y*G,C.y=p*b,C.z=y*F,u.push(C.x,C.y,C.z),f.push(0,b,0),R.x=F*.5+.5,R.y=G*.5*b+.5,m.push(R.x,R.y),g++}for(let X=0;X<s;X++){let U=P+X,I=B+X;E===!0?h.push(I,I+1,U):h.push(I+1,I,U),O+=3}c.addGroup(d,O,E===!0?1:2),d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Lo=class i extends _t{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let x=new A,E=new A,P=new A;for(let R=0;R<t.length;R+=3)m(t[R+0],x),m(t[R+1],E),m(t[R+2],P),l(x,E,P,v)}function l(v,x,E,P){let R=P+1,C=[];for(let O=0;O<=R;O++){C[O]=[];let y=v.clone().lerp(E,O/R),b=x.clone().lerp(E,O/R),B=R-O;for(let X=0;X<=B;X++)X===0&&O===R?C[O][X]=y:C[O][X]=y.clone().lerp(b,X/B)}for(let O=0;O<R;O++)for(let y=0;y<2*(R-O)-1;y++){let b=Math.floor(y/2);y%2===0?(f(C[O][b+1]),f(C[O+1][b]),f(C[O][b])):(f(C[O][b+1]),f(C[O+1][b+1]),f(C[O+1][b]))}}function c(v){let x=new A;for(let E=0;E<r.length;E+=3)x.x=r[E+0],x.y=r[E+1],x.z=r[E+2],x.normalize().multiplyScalar(v),r[E+0]=x.x,r[E+1]=x.y,r[E+2]=x.z}function h(){let v=new A;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];let E=p(v)/2/Math.PI+.5,P=d(v)/Math.PI+.5;o.push(E,1-P)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let x=o[v+0],E=o[v+2],P=o[v+4],R=Math.max(x,E,P),C=Math.min(x,E,P);R>.9&&C<.1&&(x<.2&&(o[v+0]+=1),E<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function m(v,x){let E=v*3;x.x=e[E+0],x.y=e[E+1],x.z=e[E+2]}function g(){let v=new A,x=new A,E=new A,P=new A,R=new se,C=new se,O=new se;for(let y=0,b=0;y<r.length;y+=9,b+=6){v.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),E.set(r[y+6],r[y+7],r[y+8]),R.set(o[b+0],o[b+1]),C.set(o[b+2],o[b+3]),O.set(o[b+4],o[b+5]),P.copy(v).add(x).add(E).divideScalar(3);let B=p(P);_(R,b+0,v,B),_(C,b+2,x,B),_(O,b+4,E,B)}}function _(v,x,E,P){P<0&&v.x===1&&(o[x]=v.x-1),E.x===0&&E.z===0&&(o[x]=P/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Di=class extends Io{constructor(e){super(e),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Io().fromJSON(s))}return this}},Fv={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=xf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,m;if(n&&(r=Hv(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return Jr(r,o,t,a,l,m,0),o}};function xf(i,e,t,n,s){let r,o;if(s===jv(i,e,t,n)>0)for(r=e;r<t;r+=n)o=zd(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=zd(r,i[r],i[r+1],o);return o&&Xo(o,o.next)&&($r(o),o=o.next),o}function is(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Xo(t,t.next)||wt(t.prev,t,t.next)===0)){if($r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Jr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&qv(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Bv(i,n,s,r):Ov(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),$r(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=kv(is(i),e,t),Jr(i,e,t,n,s,r,2)):o===2&&zv(i,e,t,n,s,r):Jr(is(i),e,t,n,s,r,1);break}}}function Ov(i){let e=i.prev,t=i,n=i.next;if(wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&qs(s,a,r,l,o,c,g.x,g.y)&&wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(wt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,d=zc(m,g,e,t,n),v=zc(_,p,e,t,n),x=i.prevZ,E=i.nextZ;for(;x&&x.z>=d&&E&&E.z<=v;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&qs(a,h,l,u,c,f,x.x,x.y)&&wt(x.prev,x,x.next)>=0||(x=x.prevZ,E.x>=m&&E.x<=_&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&qs(a,h,l,u,c,f,E.x,E.y)&&wt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;x&&x.z>=d;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&qs(a,h,l,u,c,f,x.x,x.y)&&wt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;E&&E.z<=v;){if(E.x>=m&&E.x<=_&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&qs(a,h,l,u,c,f,E.x,E.y)&&wt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function kv(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Xo(s,r)&&vf(s,n,n.next,r)&&Kr(s,r)&&Kr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),$r(n),$r(n.next),n=i=r),n=n.next}while(n!==i);return is(n)}function zv(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jv(o,a)){let l=yf(o,a);o=is(o,o.next),l=is(l,l.next),Jr(o,e,t,n,s,r,0),Jr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Hv(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=xf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Zv(c));for(s.sort(Vv),r=0;r<s.length;r++)t=Gv(s[r],t);return t}function Vv(i,e){return i.x-e.x}function Gv(i,e){let t=Wv(i,e);if(!t)return e;let n=yf(t,i);return is(n,n.next),is(t,t.next)}function Wv(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&qs(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Kr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Xv(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function Xv(i,e){return wt(i.prev,i,e.prev)<0&&wt(e.next,i,i.next)<0}function qv(i,e,t,n){let s=i;do s.z===0&&(s.z=zc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Yv(s)}function Yv(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function zc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Zv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function qs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Jv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Kv(i,e)&&(Kr(i,e)&&Kr(e,i)&&$v(i,e)&&(wt(i.prev,i,e.prev)||wt(i,e.prev,e))||Xo(i,e)&&wt(i.prev,i,i.next)>0&&wt(e.prev,e,e.next)>0)}function wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Xo(i,e){return i.x===e.x&&i.y===e.y}function vf(i,e,t,n){let s=so(wt(i,e,t)),r=so(wt(i,e,n)),o=so(wt(t,n,i)),a=so(wt(t,n,e));return!!(s!==r&&o!==a||s===0&&io(i,t,e)||r===0&&io(i,n,e)||o===0&&io(t,i,n)||a===0&&io(t,e,n))}function io(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function so(i){return i>0?1:i<0?-1:0}function Kv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&vf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Kr(i,e){return wt(i.prev,i,i.next)<0?wt(i,e,i.next)>=0&&wt(i,i.prev,e)>=0:wt(i,e,i.prev)<0||wt(i,i.next,e)<0}function $v(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function yf(i,e){let t=new Hc(i.i,i.x,i.y),n=new Hc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function zd(i,e,t,n){let s=new Hc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jv(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Pi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Hd(e),Vd(n,e);let o=e.length;t.forEach(Hd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Vd(n,t[l]);let a=Fv.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Hd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Vd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var jr=class i extends _t{constructor(e=new Di([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Qv,x,E=!1,P,R,C,O;d&&(x=d.getSpacedPoints(h),E=!0,f=!1,P=d.computeFrenetFrames(h,!1),R=new A,C=new A,O=new A),f||(p=0,m=0,g=0,_=0);let y=a.extractPoints(c),b=y.shape,B=y.holes;if(!Pi.isClockWise(b)){b=b.reverse();for(let D=0,_e=B.length;D<_e;D++){let ae=B[D];Pi.isClockWise(ae)&&(B[D]=ae.reverse())}}let U=Pi.triangulateShape(b,B),I=b;for(let D=0,_e=B.length;D<_e;D++){let ae=B[D];b=b.concat(ae)}function F(D,_e,ae){return _e||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(_e,ae)}let G=b.length,K=U.length;function te(D,_e,ae){let me,ie,Fe,Te=D.x-_e.x,S=D.y-_e.y,M=ae.x-D.x,V=ae.y-D.y,de=Te*Te+S*S,oe=Te*V-S*M;if(Math.abs(oe)>Number.EPSILON){let he=Math.sqrt(de),Ue=Math.sqrt(M*M+V*V),we=_e.x-S/he,Re=_e.y+Te/he,ke=ae.x-V/Ue,We=ae.y+M/Ue,ce=((ke-we)*V-(We-Re)*M)/(Te*V-S*M);me=we+Te*ce-D.x,ie=Re+S*ce-D.y;let $e=me*me+ie*ie;if($e<=2)return new se(me,ie);Fe=Math.sqrt($e/2)}else{let he=!1;Te>Number.EPSILON?M>Number.EPSILON&&(he=!0):Te<-Number.EPSILON?M<-Number.EPSILON&&(he=!0):Math.sign(S)===Math.sign(V)&&(he=!0),he?(me=-S,ie=Te,Fe=Math.sqrt(de)):(me=Te,ie=S,Fe=Math.sqrt(de/2))}return new se(me/Fe,ie/Fe)}let Z=[];for(let D=0,_e=I.length,ae=_e-1,me=D+1;D<_e;D++,ae++,me++)ae===_e&&(ae=0),me===_e&&(me=0),Z[D]=te(I[D],I[ae],I[me]);let re=[],ee,j=Z.concat();for(let D=0,_e=B.length;D<_e;D++){let ae=B[D];ee=[];for(let me=0,ie=ae.length,Fe=ie-1,Te=me+1;me<ie;me++,Fe++,Te++)Fe===ie&&(Fe=0),Te===ie&&(Te=0),ee[me]=te(ae[me],ae[Fe],ae[Te]);re.push(ee),j=j.concat(ee)}for(let D=0;D<p;D++){let _e=D/p,ae=m*Math.cos(_e*Math.PI/2),me=g*Math.sin(_e*Math.PI/2)+_;for(let ie=0,Fe=I.length;ie<Fe;ie++){let Te=F(I[ie],Z[ie],me);ve(Te.x,Te.y,-ae)}for(let ie=0,Fe=B.length;ie<Fe;ie++){let Te=B[ie];ee=re[ie];for(let S=0,M=Te.length;S<M;S++){let V=F(Te[S],ee[S],me);ve(V.x,V.y,-ae)}}}let W=g+_;for(let D=0;D<G;D++){let _e=f?F(b[D],j[D],W):b[D];E?(C.copy(P.normals[0]).multiplyScalar(_e.x),R.copy(P.binormals[0]).multiplyScalar(_e.y),O.copy(x[0]).add(C).add(R),ve(O.x,O.y,O.z)):ve(_e.x,_e.y,0)}for(let D=1;D<=h;D++)for(let _e=0;_e<G;_e++){let ae=f?F(b[_e],j[_e],W):b[_e];E?(C.copy(P.normals[D]).multiplyScalar(ae.x),R.copy(P.binormals[D]).multiplyScalar(ae.y),O.copy(x[D]).add(C).add(R),ve(O.x,O.y,O.z)):ve(ae.x,ae.y,u/h*D)}for(let D=p-1;D>=0;D--){let _e=D/p,ae=m*Math.cos(_e*Math.PI/2),me=g*Math.sin(_e*Math.PI/2)+_;for(let ie=0,Fe=I.length;ie<Fe;ie++){let Te=F(I[ie],Z[ie],me);ve(Te.x,Te.y,u+ae)}for(let ie=0,Fe=B.length;ie<Fe;ie++){let Te=B[ie];ee=re[ie];for(let S=0,M=Te.length;S<M;S++){let V=F(Te[S],ee[S],me);E?ve(V.x,V.y+x[h-1].y,x[h-1].x+ae):ve(V.x,V.y,u+ae)}}}ne(),pe();function ne(){let D=s.length/3;if(f){let _e=0,ae=G*_e;for(let me=0;me<K;me++){let ie=U[me];Ie(ie[2]+ae,ie[1]+ae,ie[0]+ae)}_e=h+p*2,ae=G*_e;for(let me=0;me<K;me++){let ie=U[me];Ie(ie[0]+ae,ie[1]+ae,ie[2]+ae)}}else{for(let _e=0;_e<K;_e++){let ae=U[_e];Ie(ae[2],ae[1],ae[0])}for(let _e=0;_e<K;_e++){let ae=U[_e];Ie(ae[0]+G*h,ae[1]+G*h,ae[2]+G*h)}}n.addGroup(D,s.length/3-D,0)}function pe(){let D=s.length/3,_e=0;be(I,_e),_e+=I.length;for(let ae=0,me=B.length;ae<me;ae++){let ie=B[ae];be(ie,_e),_e+=ie.length}n.addGroup(D,s.length/3-D,1)}function be(D,_e){let ae=D.length;for(;--ae>=0;){let me=ae,ie=ae-1;ie<0&&(ie=D.length-1);for(let Fe=0,Te=h+p*2;Fe<Te;Fe++){let S=G*Fe,M=G*(Fe+1),V=_e+me+S,de=_e+ie+S,oe=_e+ie+M,he=_e+me+M;Le(V,de,oe,he)}}}function ve(D,_e,ae){l.push(D),l.push(_e),l.push(ae)}function Ie(D,_e,ae){Pe(D),Pe(_e),Pe(ae);let me=s.length/3,ie=v.generateTopUV(n,s,me-3,me-2,me-1);ze(ie[0]),ze(ie[1]),ze(ie[2])}function Le(D,_e,ae,me){Pe(D),Pe(_e),Pe(me),Pe(_e),Pe(ae),Pe(me);let ie=s.length/3,Fe=v.generateSideWallUV(n,s,ie-6,ie-3,ie-2,ie-1);ze(Fe[0]),ze(Fe[1]),ze(Fe[3]),ze(Fe[1]),ze(Fe[2]),ze(Fe[3])}function Pe(D){s.push(l[D*3+0]),s.push(l[D*3+1]),s.push(l[D*3+2])}function ze(D){r.push(D.x),r.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ey(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Bc[s.type]().fromJSON(s)),new i(n,e.options)}},Qv={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new se(r,o),new se(a,l),new se(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],m=e[s*3+1],g=e[s*3+2],_=e[r*3],p=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new se(o,1-l),new se(c,1-u),new se(f,1-g),new se(_,1-d)]:[new se(a,1-l),new se(h,1-u),new se(m,1-g),new se(p,1-d)]}};function ey(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Do=class i extends Lo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Uo=class i extends Lo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var No=class i extends _t{constructor(e=new Di([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(r,3)),this.setAttribute("uv",new st(o,2));function c(h){let u=s.length/3,f=h.extractPoints(t),m=f.shape,g=f.holes;Pi.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,d=g.length;p<d;p++){let v=g[p];Pi.isClockWise(v)===!0&&(g[p]=v.reverse())}let _=Pi.triangulateShape(m,g);for(let p=0,d=g.length;p<d;p++){let v=g[p];m=m.concat(v)}for(let p=0,d=m.length;p<d;p++){let v=m[p];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let p=0,d=_.length;p<d;p++){let v=_[p],x=v[0]+u,E=v[1]+u,P=v[2]+u;n.push(x,E,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ty(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function ty(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Qr=class i extends _t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new A,f=new A,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){let v=[],x=d/n,E=0;d===0&&o===0?E=.5/t:d===n&&l===Math.PI&&(E=-.5/t);for(let P=0;P<=t;P++){let R=P/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(R+E,1-x),v.push(c++)}h.push(v)}for(let d=0;d<n;d++)for(let v=0;v<t;v++){let x=h[d][v+1],E=h[d][v],P=h[d+1][v],R=h[d+1][v+1];(d!==0||o>0)&&m.push(x,E,R),(d!==n-1||l<Math.PI)&&m.push(E,P,R)}this.setIndex(m),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fo=class extends Vn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ae(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Oo=class extends bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ea=class extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ta=class extends ea{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ro(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ny(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var rr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vc=class extends rr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ku,endingEnd:ku}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zu:r=e,a=2*t-n;break;case Hu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zu:o=e,l=2*n-t;break;case Hu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,d=-f*p+2*f*_-f*g,v=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-m)*p+(1.5+m)*_+.5*g,E=m*p-m*_;for(let P=0;P!==a;++P)r[P]=d*o[h+P]+v*o[c+P]+x*o[l+P]+E*o[u+P];return r}},Gc=class extends rr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Wc=class extends rr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ro(t,this.TimeBufferType),this.values=ro(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ro(e.times,Array),values:ro(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case oo:t=this.InterpolantFactoryMethodDiscrete;break;case lo:t=this.InterpolantFactoryMethodLinear;break;case Nl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return lo;case this.InterpolantFactoryMethodSmooth:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ny(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Nl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,m=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=lo;var ss=class extends Gn{};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=oo;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends Gn{};Xc.prototype.ValueTypeName="color";var qc=class extends Gn{};qc.prototype.ValueTypeName="number";var Yc=class extends rr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Zt.slerpFlat(r,0,o,c-a,o,c,l);return r}},na=class extends Gn{InterpolantFactoryMethodLinear(e){return new Yc(this.times,this.values,this.getValueSize(),e)}};na.prototype.ValueTypeName="quaternion";na.prototype.DefaultInterpolation=lo;na.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Gn{};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=oo;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zc=class extends Gn{};Zc.prototype.ValueTypeName="vector";var Gd={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Jc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},dh=new Jc,ia=class{constructor(e){this.manager=e!==void 0?e:dh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var sa=class extends ia{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Gd.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=kr("img");function l(){h(),Gd.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Bo=class extends ia{constructor(e){super(e)}load(e,t,n,s){let r=new fn,o=new sa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Kc=class extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var cc=new rt,Wd=new A,Xd=new A,$c=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Wd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wd),Xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xd),t.updateMatrixWorld(),cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var jc=class extends $c{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ko=class extends Kc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new jc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var zo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=qd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function qd(){return(typeof performance>"u"?Date:performance).now()}var fh="\\[\\]\\.:\\/",iy=new RegExp("["+fh+"]","g"),ph="[^"+fh+"]",sy="[^"+fh.replace("\\.","")+"]",ry=/((?:WC+[\/:])*)/.source.replace("WC",ph),ay=/(WCOD+)?/.source.replace("WCOD",sy),oy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ph),ly=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ph),cy=new RegExp("^"+ry+ay+oy+ly+"$"),hy=["material","materials","bones","map"],Qc=class{constructor(e,t,n){let s=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iy,"")}static parseTrackName(e){let t=cy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=Qc;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var m1=new Float32Array(1);var Ho=class{constructor(e,t,n=0,s=1/0){this.ray=new Li(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return eh(e,this,n,t),n.sort(Yd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)eh(e[s],this,n,t);return n.sort(Yd),n}};function Yd(i,e){return i.distance-e.distance}function eh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)eh(s[r],e,t,!0)}}var ra=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);var Mf={type:"change"},mh={type:"start"},Ef={type:"end"},qo=new Li,bf=new sn,dy=Math.cos(70*Dt.DEG2RAD),Yo=class extends $n{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",he),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",he),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Mf),n.update(),r=s.NONE},this.update=function(){let L=new A,ue=new Zt().setFromUnitVectors(e.up,new A(0,1,0)),ye=ue.clone().invert(),ge=new A,Ne=new Zt,Je=new A,Qe=2*Math.PI;return function(Me=null){let N=n.object.position;L.copy(N).sub(n.target),L.applyQuaternion(ue),a.setFromVector3(L),n.autoRotate&&r===s.NONE&&B(y(Me)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let xe=n.minAzimuthAngle,w=n.maxAzimuthAngle;isFinite(xe)&&isFinite(w)&&(xe<-Math.PI?xe+=Qe:xe>Math.PI&&(xe-=Qe),w<-Math.PI?w+=Qe:w>Math.PI&&(w-=Qe),xe<=w?a.theta=Math.max(xe,Math.min(w,a.theta)):a.theta=a.theta>(xe+w)/2?Math.max(xe,a.theta):Math.min(w,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=Z(a.radius):a.radius=Z(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(ye),N.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let k=!1;if(n.zoomToCursor&&R){let H=null;if(n.object.isPerspectiveCamera){let $=L.length();H=Z($*c);let Q=$-H;n.object.position.addScaledVector(E,Q),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let $=new A(P.x,P.y,0);$.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),k=!0;let Q=new A(P.x,P.y,0);Q.unproject(n.object),n.object.position.sub(Q).add($),n.object.updateMatrixWorld(),H=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;H!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(H).add(n.object.position):(qo.origin.copy(n.object.position),qo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(qo.direction))<dy?e.lookAt(n.target):(bf.setFromNormalAndCoplanarPoint(n.object.up,n.target),qo.intersectPlane(bf,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),k=!0);return c=1,R=!1,k||ge.distanceToSquared(n.object.position)>o||8*(1-Ne.dot(n.object.quaternion))>o||Je.distanceToSquared(n.target)>0?(n.dispatchEvent(Mf),ge.copy(n.object.position),Ne.copy(n.object.quaternion),Je.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Re),n.domElement.removeEventListener("pointerdown",Te),n.domElement.removeEventListener("pointercancel",M),n.domElement.removeEventListener("wheel",oe),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",M),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",he),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new ra,l=new ra,c=1,h=new A,u=new se,f=new se,m=new se,g=new se,_=new se,p=new se,d=new se,v=new se,x=new se,E=new A,P=new se,R=!1,C=[],O={};function y(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function b(L){let ue=Math.abs(L)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*ue)}function B(L){l.theta-=L}function X(L){l.phi-=L}let U=function(){let L=new A;return function(ye,ge){L.setFromMatrixColumn(ge,0),L.multiplyScalar(-ye),h.add(L)}}(),I=function(){let L=new A;return function(ye,ge){n.screenSpacePanning===!0?L.setFromMatrixColumn(ge,1):(L.setFromMatrixColumn(ge,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ye),h.add(L)}}(),F=function(){let L=new A;return function(ye,ge){let Ne=n.domElement;if(n.object.isPerspectiveCamera){let Je=n.object.position;L.copy(Je).sub(n.target);let Qe=L.length();Qe*=Math.tan(n.object.fov/2*Math.PI/180),U(2*ye*Qe/Ne.clientHeight,n.object.matrix),I(2*ge*Qe/Ne.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(ye*(n.object.right-n.object.left)/n.object.zoom/Ne.clientWidth,n.object.matrix),I(ge*(n.object.top-n.object.bottom)/n.object.zoom/Ne.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function te(L,ue){if(!n.zoomToCursor)return;R=!0;let ye=n.domElement.getBoundingClientRect(),ge=L-ye.left,Ne=ue-ye.top,Je=ye.width,Qe=ye.height;P.x=ge/Je*2-1,P.y=-(Ne/Qe)*2+1,E.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function Z(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function re(L){u.set(L.clientX,L.clientY)}function ee(L){te(L.clientX,L.clientX),d.set(L.clientX,L.clientY)}function j(L){g.set(L.clientX,L.clientY)}function W(L){f.set(L.clientX,L.clientY),m.subVectors(f,u).multiplyScalar(n.rotateSpeed);let ue=n.domElement;B(2*Math.PI*m.x/ue.clientHeight),X(2*Math.PI*m.y/ue.clientHeight),u.copy(f),n.update()}function ne(L){v.set(L.clientX,L.clientY),x.subVectors(v,d),x.y>0?G(b(x.y)):x.y<0&&K(b(x.y)),d.copy(v),n.update()}function pe(L){_.set(L.clientX,L.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),F(p.x,p.y),g.copy(_),n.update()}function be(L){te(L.clientX,L.clientY),L.deltaY<0?K(b(L.deltaY)):L.deltaY>0&&G(b(L.deltaY)),n.update()}function ve(L){let ue=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),ue=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),ue=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),ue=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),ue=!0;break}ue&&(L.preventDefault(),n.update())}function Ie(L){if(C.length===1)u.set(L.pageX,L.pageY);else{let ue=$e(L),ye=.5*(L.pageX+ue.x),ge=.5*(L.pageY+ue.y);u.set(ye,ge)}}function Le(L){if(C.length===1)g.set(L.pageX,L.pageY);else{let ue=$e(L),ye=.5*(L.pageX+ue.x),ge=.5*(L.pageY+ue.y);g.set(ye,ge)}}function Pe(L){let ue=$e(L),ye=L.pageX-ue.x,ge=L.pageY-ue.y,Ne=Math.sqrt(ye*ye+ge*ge);d.set(0,Ne)}function ze(L){n.enableZoom&&Pe(L),n.enablePan&&Le(L)}function D(L){n.enableZoom&&Pe(L),n.enableRotate&&Ie(L)}function _e(L){if(C.length==1)f.set(L.pageX,L.pageY);else{let ye=$e(L),ge=.5*(L.pageX+ye.x),Ne=.5*(L.pageY+ye.y);f.set(ge,Ne)}m.subVectors(f,u).multiplyScalar(n.rotateSpeed);let ue=n.domElement;B(2*Math.PI*m.x/ue.clientHeight),X(2*Math.PI*m.y/ue.clientHeight),u.copy(f)}function ae(L){if(C.length===1)_.set(L.pageX,L.pageY);else{let ue=$e(L),ye=.5*(L.pageX+ue.x),ge=.5*(L.pageY+ue.y);_.set(ye,ge)}p.subVectors(_,g).multiplyScalar(n.panSpeed),F(p.x,p.y),g.copy(_)}function me(L){let ue=$e(L),ye=L.pageX-ue.x,ge=L.pageY-ue.y,Ne=Math.sqrt(ye*ye+ge*ge);v.set(0,Ne),x.set(0,Math.pow(v.y/d.y,n.zoomSpeed)),G(x.y),d.copy(v);let Je=(L.pageX+ue.x)*.5,Qe=(L.pageY+ue.y)*.5;te(Je,Qe)}function ie(L){n.enableZoom&&me(L),n.enablePan&&ae(L)}function Fe(L){n.enableZoom&&me(L),n.enableRotate&&_e(L)}function Te(L){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",M)),ke(L),L.pointerType==="touch"?Ue(L):V(L))}function S(L){n.enabled!==!1&&(L.pointerType==="touch"?we(L):de(L))}function M(L){We(L),C.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",M)),n.dispatchEvent(Ef),r=s.NONE}function V(L){let ue;switch(L.button){case 0:ue=n.mouseButtons.LEFT;break;case 1:ue=n.mouseButtons.MIDDLE;break;case 2:ue=n.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case as.DOLLY:if(n.enableZoom===!1)return;ee(L),r=s.DOLLY;break;case as.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;j(L),r=s.PAN}else{if(n.enableRotate===!1)return;re(L),r=s.ROTATE}break;case as.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;re(L),r=s.ROTATE}else{if(n.enablePan===!1)return;j(L),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(mh)}function de(L){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;W(L);break;case s.DOLLY:if(n.enableZoom===!1)return;ne(L);break;case s.PAN:if(n.enablePan===!1)return;pe(L);break}}function oe(L){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(L.preventDefault(),n.dispatchEvent(mh),be(L),n.dispatchEvent(Ef))}function he(L){n.enabled===!1||n.enablePan===!1||ve(L)}function Ue(L){switch(ce(L),C.length){case 1:switch(n.touches.ONE){case os.ROTATE:if(n.enableRotate===!1)return;Ie(L),r=s.TOUCH_ROTATE;break;case os.PAN:if(n.enablePan===!1)return;Le(L),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case os.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ze(L),r=s.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;D(L),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(mh)}function we(L){switch(ce(L),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(L),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ae(L),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ie(L),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Fe(L),n.update();break;default:r=s.NONE}}function Re(L){n.enabled!==!1&&L.preventDefault()}function ke(L){C.push(L.pointerId)}function We(L){delete O[L.pointerId];for(let ue=0;ue<C.length;ue++)if(C[ue]==L.pointerId){C.splice(ue,1);return}}function ce(L){let ue=O[L.pointerId];ue===void 0&&(ue=new se,O[L.pointerId]=ue),ue.set(L.pageX,L.pageY)}function $e(L){let ue=L.pointerId===C[0]?C[1]:C[0];return O[ue]}n.domElement.addEventListener("contextmenu",Re),n.domElement.addEventListener("pointerdown",Te),n.domElement.addEventListener("pointercancel",M),n.domElement.addEventListener("wheel",oe,{passive:!1}),this.update()}};var Zo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var wn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},fy=new nr(-1,1,1,-1,0,1),gh=class extends _t{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}},py=new gh,Ui=class{constructor(e){this._mesh=new dt(py,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Jo=class extends wn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qn.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ui(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var oa=class extends wn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ko=class extends wn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var $o=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new se);this._width=n.width,this._height=n.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jo(Zo),this.copyPass.material.blending=Jn,this.clock=new zo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}oa!==void 0&&(o instanceof oa?n=!0:o instanceof Ko&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var jo=class extends wn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Sf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var or=class i extends wn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new Ae(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(r,o,{type:rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ot(r,o,{type:rn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let m=new Ot(r,o,{type:rn});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=Sf;this.highPassUniforms=Qn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new se(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Zo;this.copyUniforms=Qn.clone(h.uniforms),this.blendMaterial=new bt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Qi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.basic=new Kt,this.fsQuad=new Ui(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};or.BlurDirectionX=new se(1,0);or.BlurDirectionY=new se(0,1);var la={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Qo=class extends wn{constructor(){super();let e=la;this.uniforms=Qn.clone(e.uniforms),this.material=new Oo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ui(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ih?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===rh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ah?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===aa&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ca=class i extends dt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Xt;let n=this,s=t.color!==void 0?new Ae(t.color):new Ae(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new sn,u=new A,f=new A,m=new A,g=new rt,_=new A(0,0,-1),p=new yt,d=new A,v=new A,x=new yt,E=new rt,P=this.camera,R=new Ot(r,o,{samples:c,type:rn}),C=new bt({name:l.name!==void 0?l.name:"unspecified",uniforms:Qn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});C.uniforms.tDiffuse.value=R.texture,C.uniforms.color.value=s,C.uniforms.textureMatrix.value=E,this.material=C,this.onBeforeRender=function(O,y,b){if(f.setFromMatrixPosition(n.matrixWorld),m.setFromMatrixPosition(b.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),d.subVectors(f,m),d.dot(u)>0)return;d.reflect(u).negate(),d.add(f),g.extractRotation(b.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(m),v.subVectors(f,_),v.reflect(u).negate(),v.add(f),P.position.copy(d),P.up.set(0,1,0),P.up.applyMatrix4(g),P.up.reflect(u),P.lookAt(v),P.far=b.far,P.updateMatrixWorld(),P.projectionMatrix.copy(b.projectionMatrix),E.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),E.multiply(P.projectionMatrix),E.multiply(P.matrixWorldInverse),E.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(P.matrixWorldInverse),p.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let B=P.projectionMatrix;x.x=(Math.sign(p.x)+B.elements[8])/B.elements[0],x.y=(Math.sign(p.y)+B.elements[9])/B.elements[5],x.z=-1,x.w=(1+B.elements[10])/B.elements[14],p.multiplyScalar(2/p.dot(x)),B.elements[2]=p.x,B.elements[6]=p.y,B.elements[10]=p.z+1-a,B.elements[14]=p.w,n.visible=!1;let X=O.getRenderTarget(),U=O.xr.enabled,I=O.shadowMap.autoUpdate;O.xr.enabled=!1,O.shadowMap.autoUpdate=!1,O.setRenderTarget(R),O.state.buffers.depth.setMask(!0),O.autoClear===!1&&O.clear(),O.render(y,P),O.xr.enabled=U,O.shadowMap.autoUpdate=I,O.setRenderTarget(X);let F=b.viewport;F!==void 0&&O.state.viewport(F),n.visible=!0},this.getRenderTarget=function(){return R},this.dispose=function(){R.dispose(),n.material.dispose()}}};ca.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};dh.setURLModifier(i=>window.__fileURL(i));la.fragmentShader=la.fragmentShader.replace("gl_FragColor = texture2D( tDiffuse, vUv );",`gl_FragColor = texture2D( tDiffuse, vUv );
			float a0 = gl_FragColor.a;
			if ( a0 > 0.0 ) gl_FragColor.rgb /= a0;`).replace(/}\s*$/,`	gl_FragColor.rgb *= a0;
		}`);var zt = 0.0205,
  Oi = 694,
  Bi = 575,
  my = [
    [
      [9.307, -6.2833],
      [9.395, -6.2821],
      [9.483, -6.2786],
      [9.5708, -6.2729],
      [9.6584, -6.2648],
      [9.7458, -6.2545],
      [9.8329, -6.2419],
      [9.9197, -6.227],
      [10.006, -6.2098],
      [10.0918, -6.1904],
      [10.1771, -6.1687],
      [10.2619, -6.1448],
      [10.3459, -6.1187],
      [10.4293, -6.0904],
      [10.5118, -6.0599],
      [10.5936, -6.0273],
      [10.6744, -5.9926],
      [10.7544, -5.9557],
      [10.8333, -5.9168],
      [10.9112, -5.8758],
      [10.988, -5.8328],
      [11.0636, -5.7878],
      [11.1381, -5.7409],
      [11.2113, -5.692],
      [11.2831, -5.6412],
      [11.3537, -5.5885],
      [11.4228, -5.534],
      [11.4904, -5.4777],
      [11.5566, -5.4197],
      [11.6212, -5.36],
      [11.6843, -5.2985],
      [11.7457, -5.2355],
      [11.8055, -5.1709],
      [11.8635, -5.1047],
      [11.9198, -5.037],
      [11.9743, -4.9679],
      [12.0269, -4.8974],
      [12.0777, -4.8255],
      [12.1266, -4.7523],
      [12.1736, -4.6779],
      [12.2186, -4.6023],
      [12.2616, -4.5255],
      [12.3026, -4.4476],
      [12.3415, -4.3686],
      [12.3783, -4.2887],
      [12.4131, -4.2078],
      [12.4457, -4.1261],
      [12.4762, -4.0435],
      [12.5045, -3.9602],
      [12.5306, -3.8761],
      [12.5544, -3.7914],
      [12.5761, -3.7061],
      [12.5955, -3.6202],
      [12.6127, -3.5339],
      [12.6276, -3.4472],
      [12.6402, -3.3601],
      [12.6506, -3.2727],
      [12.6586, -3.185],
      [12.6644, -3.0972],
      [12.6678, -3.0093],
      [12.669, -2.9213],
      [12.6678, -2.8332],
      [12.6644, -2.7453],
      [12.6586, -2.6575],
      [12.6506, -2.5698],
      [12.6402, -2.4824],
      [12.6276, -2.3953],
      [12.6127, -2.3086],
      [12.5955, -2.2223],
      [12.5761, -2.1364],
      [12.5544, -2.0511],
      [12.5306, -1.9664],
      [12.5045, -1.8823],
      [12.4762, -1.799],
      [12.4457, -1.7164],
      [12.4131, -1.6347],
      [12.3783, -1.5538],
      [12.3415, -1.4739],
      [12.3026, -1.3949],
      [12.2616, -1.317],
      [12.2186, -1.2403],
      [12.1736, -1.1646],
      [12.1266, -1.0902],
      [12.0777, -1.017],
      [12.0269, -0.9451],
      [11.9743, -0.8746],
      [11.9198, -0.8055],
      [11.8635, -0.7378],
      [11.8055, -0.6716],
      [11.7457, -0.607],
      [11.6843, -0.544],
      [11.6212, -0.4825],
      [11.5566, -0.4228],
      [11.4904, -0.3648],
      [11.4228, -0.3085],
      [11.3537, -0.254],
      [11.2831, -0.2013],
      [11.2113, -0.1505],
      [11.1381, -0.1016],
      [11.0636, -0.0547],
      [10.988, -0.0097],
      [10.9112, 0.0333],
      [10.8333, 0.0743],
      [10.7544, 0.1132],
      [10.6744, 0.1501],
      [10.5936, 0.1848],
      [10.5118, 0.2174],
      [10.4293, 0.2479],
      [10.3459, 0.2762],
      [10.2619, 0.3023],
      [10.1771, 0.3262],
      [10.0918, 0.3479],
      [10.006, 0.3673],
      [9.9197, 0.3845],
      [9.8329, 0.3994],
      [9.7458, 0.412],
      [9.6584, 0.4223],
      [9.5708, 0.4304],
      [9.483, 0.4361],
      [9.395, 0.4396],
      [9.307, 0.4407],
    ],
    [
      [-6.56, -5.74],
      [-6.56, -6.109],
      [-6.558, -6.1841],
      [-6.5521, -6.259],
      [-6.5423, -6.3335],
      [-6.5286, -6.4074],
      [-6.5111, -6.4804],
      [-6.4898, -6.5524],
      [-6.4647, -6.6233],
      [-6.4359, -6.6927],
      [-6.4036, -6.7605],
      [-6.3677, -6.8265],
      [-6.3285, -6.8906],
      [-6.2859, -6.9525],
      [-6.2402, -7.0121],
      [-6.1914, -7.0692],
      [-6.1397, -7.1237],
      [-6.0852, -7.1754],
      [-6.0281, -7.2242],
      [-5.9685, -7.2699],
      [-5.9066, -7.3125],
      [-5.8425, -7.3517],
      [-5.7765, -7.3876],
      [-5.7087, -7.4199],
      [-5.6393, -7.4487],
      [-5.5684, -7.4738],
      [-5.4964, -7.4951],
      [-5.4234, -7.5126],
      [-5.3495, -7.5263],
      [-5.275, -7.5361],
      [-5.2001, -7.542],
      [-5.125, -7.544],
      [-5.0499, -7.542],
      [-4.975, -7.5361],
      [-4.9005, -7.5263],
      [-4.8266, -7.5126],
      [-4.7536, -7.4951],
      [-4.6816, -7.4738],
      [-4.6107, -7.4487],
      [-4.5413, -7.4199],
      [-4.4735, -7.3876],
      [-4.4075, -7.3517],
      [-4.3434, -7.3125],
      [-4.2815, -7.2699],
      [-4.2219, -7.2242],
      [-4.1648, -7.1754],
      [-4.1103, -7.1237],
      [-4.0586, -7.0692],
      [-4.0098, -7.0121],
      [-3.9641, -6.9525],
      [-3.9215, -6.8906],
      [-3.8823, -6.8265],
      [-3.8464, -6.7605],
      [-3.8141, -6.6927],
      [-3.7853, -6.6233],
      [-3.7602, -6.5524],
      [-3.7389, -6.4804],
      [-3.7214, -6.4074],
      [-3.7077, -6.3335],
      [-3.6979, -6.259],
      [-3.692, -6.1841],
      [-3.69, -6.109],
      [-3.69, -5.74],
    ],
  ],
  wf = {
    sheer: [
      ["y", 1111, 1118, 729, 814, 730.7, 0.2],
      ["y", 1111, 1118, 814.1, 899, 897.6, 0.2],
      ["x", 472, 509, 852, 858, 474, 0.3],
      ["x", 598, 635, 852, 858, 600, 0.3],
      ["x", 724, 761, 852, 858, 726, 0.3],
      ["x", 850, 887, 852, 858, 852, 0.3],
    ],
    curtain: [["y", 1107, 1116, 867, 899, 897, 0.55]],
    curtain2: [["y", 1107, 1116, 867, 899, 897, 0.55]],
  },
  Tf = [
    [-6.66, 6.08],
    [-6.631, 6.408],
    [-6.543, 6.696],
    [-6.401, 6.962],
    [-6.174, 7.229],
    [-5.893, 7.438],
    [-5.618, 7.563],
    [-5.325, 7.631],
    [-5.025, 7.641],
    [-4.728, 7.592],
    [-4.491, 7.507],
    [-4.231, 7.357],
    [-4.005, 7.158],
    [-3.821, 6.92],
    [-3.688, 6.65],
    [-3.611, 6.359],
    [-3.59, 6.08],
    [9.307, 6.08],
    [9.307, 6.433],
    [9.737, 6.407],
    [10.244, 6.306],
    [10.49, 6.228],
    [10.809, 6.096],
    [11.113, 5.934],
    [11.329, 5.793],
    [11.729, 5.465],
    [11.966, 5.215],
    [12.128, 5.013],
    [12.319, 4.727],
    [12.444, 4.5],
    [12.552, 4.265],
    [12.668, 3.941],
    [12.752, 3.606],
    [12.793, 3.351],
    [12.815, 3.094],
    [12.815, 2.749],
    [12.781, 2.406],
    [12.734, 2.152],
    [12.642, 1.82],
    [12.552, 1.577],
    [12.404, 1.266],
    [12.274, 1.042],
    [12.076, 0.761],
    [11.851, 0.5],
    [11.601, 0.262],
    [11.329, 0.05],
    [11.113, -0.091],
    [10.809, -0.254],
    [10.571, -0.355],
    [10.244, -0.464],
    [9.907, -0.539],
    [9.65, -0.574],
    [9.65, -7.02],
    [-13.2, -7.02],
    [-13.2, 6.08],
  ],
  It = (i) => (i - Oi) * zt,
  Ut = (i) => (i - Bi) * zt,
  yi =
    matchMedia("(pointer: coarse)").matches ||
    Math.min(innerWidth, innerHeight) < 600,
  ma = new A(1.05, 1, 0.93),
  gy = new A(1.08, 0.98, 0.87),
  _y = 0,
  cl = [
    { id: "all", name: "\u5168\u5C4B", kind: "orbit", ev: 0.6 },
    {
      id: "tour",
      name: "\u25B6 \u8D70\u51FA\u5927\u9580",
      kind: "tour",
      scr: 0,
    },
    {
      id: "school",
      name: "\u25B6 \u8D70\u5230\u5927\u58A9\u570B\u5C0F",
      kind: "tour2",
      scr: 0,
    },
    {
      id: "living",
      name: "\u5BA2\u5EF3",
      eye: [850, 610, 1.45],
      look: [1110, 420, 0.9],
      lens: 16,
      ev: 0.5,
    },
    {
      id: "readtable",
      name: "\u5171\u8B80\u9577\u684C",
      eye: [892, 372, 1.55],
      look: [1080, 381, 0.75],
      lens: 16,
      ev: 0.5,
    },
    {
      id: "seatview",
      name: "\u5EA7\u4F4D\u770B\u96FB\u8996",
      eye: [994, 350, 1.2],
      look: [1014, 660, 1.15],
      lens: 18,
      ev: 0.5,
    },
    {
      id: "tvwall",
      name: "\u96FB\u8996\u7246",
      eye: [1016, 470, 1.35],
      look: [1015, 666, 1.25],
      lens: 18,
      ev: 0.6,
    },
    {
      id: "sofa",
      name: "\u6C99\u767C\u30FB\u9577\u684C",
      eye: [1016, 640, 1.35],
      look: [1010, 390, 0.85],
      lens: 17,
      ev: 0.5,
    },
    {
      id: "chairs",
      name: "\u55AE\u6905\uFF08\u897F\uFF09",
      eye: [1060, 570, 1.5],
      look: [930, 515, 0.55],
      lens: 18,
      ev: 0.5,
    },
    {
      id: "chairD",
      name: "\u96F2\u6735\u6905",
      eye: [990, 575, 1.45],
      look: [1110, 518, 0.5],
      lens: 16,
      ev: 0.5,
    },
    {
      id: "great",
      name: "\u5BA2\u9910\u5EF3",
      eye: [1128, 600, 1.4],
      look: [560, 575, 1.1],
      lens: 16,
      ev: 0.6,
    },
    {
      id: "reading",
      name: "\u95B1\u8B80\u89D2",
      eye: [878, 430, 1.4],
      look: [826, 322, 0.9],
      lens: 16,
      ev: 0.6,
    },
    {
      id: "dining",
      name: "\u9910\u5EF3",
      eye: [770, 680, 1.55],
      look: [565, 594, 0.8],
      lens: 16,
      ev: 0.6,
      scr: 0,
    },
    {
      id: "kitchen",
      name: "\u5EDA\u623F",
      eye: [655, 640, 1.55],
      look: [410, 575, 1],
      lens: 15,
      ev: 0.8,
    },
    {
      id: "island",
      name: "\u4E2D\u5CF6",
      eye: [575, 705, 1.55],
      look: [490, 585, 0.9],
      lens: 15,
      ev: 0.8,
    },
    {
      id: "gap",
      name: "\u4E2D\u5CF6\uFF0B\u9910\u684C",
      eye: [640, 470, 1.6],
      look: [540, 610, 0.8],
      lens: 16,
      ev: 0.7,
    },
    {
      id: "tall",
      name: "\u96FB\u5668\u9AD8\u6AC3",
      eye: [548, 690, 1.55],
      look: [452, 478, 1.2],
      lens: 15,
      ev: 0.8,
    },
    {
      id: "foyer",
      name: "\u7384\u95DC",
      eye: [425, 885, 1.5],
      look: [470, 690, 1.3],
      lens: 16,
      ev: 0.9,
    },
    {
      id: "foyercab",
      name: "\u7384\u95DC\u6AC3\uFF08\u9032\u9580\u6B63\u9762\uFF09",
      eye: [397, 852, 1.55],
      look: [470, 812, 1.2],
      lens: 15,
      ev: 0.9,
    },
    {
      id: "mirror",
      name: "\u7384\u95DC\u93E1",
      eye: [420, 792, 1.35],
      look: [452, 899, 1.25],
      lens: 17,
      ev: 1,
    },
    {
      id: "entry",
      name: "\u7384\u95DC\u52D5\u7DDA",
      eye: [440, 860, 1.55],
      look: [640, 715, 1.3],
      lens: 16,
      ev: 0.9,
    },
    {
      id: "fstore",
      name: "\u5132\u85CF\u5BA4\uFF08\u6697\u9580\u9032\uFF09",
      eye: [502, 784, 1.5],
      look: [552, 872, 1],
      lens: 14,
      ev: 1,
    },
    {
      id: "kitcab",
      name: "\u4E2D\u5CF6\u65C1\u5EDA\u623F\u6AC3",
      eye: [532, 688, 1.5],
      look: [522, 756, 1.15],
      lens: 15,
      ev: 0.8,
    },
    {
      id: "screen",
      name: "\u6295\u5F71\u5E55",
      eye: [829, 470, 1.45],
      look: [829, 659, 1.45],
      lens: 22,
      ev: 0.6,
      scr: 1,
    },
    {
      id: "screensofa",
      name: "\u6C99\u767C\u770B\u6295\u5F71\u5E55",
      eye: [1012, 425, 1.15],
      look: [829, 659, 1.4],
      lens: 20,
      ev: 0.55,
      scr: 1,
    },
    {
      id: "hallN",
      name: "\u5C0F\u5B69\u623F 1\u30FB2 \u9580\u53E3",
      eye: [700, 610, 1.5],
      look: [700, 458, 1.3],
      lens: 16,
      ev: 0.7,
    },
    {
      id: "hallS",
      name: "\u5C0F\u5B69\u623F 3\u30FB4 \u9580\u53E3",
      eye: [700, 520, 1.5],
      look: [700, 740, 1.3],
      lens: 16,
      ev: 0.7,
    },
    {
      id: "kids1",
      name: "\u5C0F\u5B69\u623F1",
      eye: [664, 444, 1.62],
      look: [598, 330, 0.6],
      lens: 15,
      ev: 1,
    },
    {
      id: "kids2",
      name: "\u5C0F\u5B69\u623F2",
      eye: [782, 444, 1.62],
      look: [716, 330, 0.6],
      lens: 15,
      ev: 1,
    },
    {
      id: "kids3",
      name: "\u5C0F\u5B69\u623F3",
      eye: [582, 754, 1.62],
      look: [648, 868, 0.6],
      lens: 15,
      ev: 1,
    },
    {
      id: "kids4",
      name: "\u5C0F\u5B69\u623F4",
      eye: [700, 754, 1.62],
      look: [766, 868, 0.6],
      lens: 15,
      ev: 1,
    },
    {
      id: "store",
      name: "\u5132\u7269\u9593",
      eye: [540, 430, 1.5],
      look: [540, 320, 1.2],
      lens: 15,
      ev: 1,
    },
    {
      id: "suitedoor",
      name: "\u4E3B\u81E5\u9580\u53E3",
      eye: [760, 700, 1.55],
      look: [900, 700, 1.2],
      lens: 16,
      ev: 0.7,
    },
    {
      id: "master",
      name: "\u4E3B\u81E5",
      eye: [1098, 752, 1.6],
      look: [880, 850, 0.9],
      lens: 15,
      ev: 0.7,
    },
    {
      id: "mbed",
      name: "\u4E3B\u81E5\u30FB\u5E8A",
      eye: [1062, 748, 1.4],
      look: [1062, 899, 0.95],
      lens: 16,
      ev: 0.7,
    },
    {
      id: "mtv",
      name: "\u4E3B\u81E5\u30FB\u5E8A\u5C3E\u96FB\u8996",
      eye: [1062, 862, 1.2],
      look: [1062, 730, 1.2],
      lens: 17,
      ev: 0.7,
    },
    {
      id: "closet",
      name: "\u66F4\u8863\u5340",
      eye: [868, 690, 1.55],
      look: [835, 860, 1.1],
      lens: 15,
      ev: 0.8,
    },
    {
      id: "vanity",
      name: "\u68B3\u599D\u53F0",
      eye: [971, 800, 1.45],
      look: [971, 875, 1.05],
      lens: 16,
      ev: 0.8,
    },
    {
      id: "mward",
      name: "\u4E3B\u81E5\u6574\u6392\u8863\u6AC3",
      eye: [1004, 772, 1.55],
      look: [1012, 886, 1.3],
      lens: 14,
      ev: 0.8,
    },
    {
      id: "mbath",
      name: "\u4E3B\u6D74",
      eye: [946, 722, 1.6],
      look: [1115, 692, 0.85],
      lens: 14,
      ev: 0.9,
    },
    {
      id: "mbath2",
      name: "\u4E3B\u6D74\u30FB\u6D17\u624B\u53F0",
      eye: [965, 748, 1.6],
      look: [978, 674, 1.15],
      lens: 15,
      ev: 0.9,
    },
    {
      id: "mbath3",
      name: "\u4E3B\u6D74\u30FB\u6D74\u7F38",
      eye: [992, 712, 1.6],
      look: [1135, 690, 0.8],
      lens: 14,
      ev: 0.9,
    },
    {
      id: "bath2",
      name: "\u885B\u6D742",
      eye: [292, 470, 1.6],
      look: [200, 528, 1],
      lens: 14,
      ev: 0.9,
    },
    {
      id: "bath2s",
      name: "\u885B\u6D742\u30FB\u6DCB\u6D74",
      eye: [238, 482, 1.6],
      look: [233, 405, 1],
      lens: 15,
      ev: 0.9,
    },
    {
      id: "bath1",
      name: "\u885B\u6D741",
      eye: [330, 469, 1.62],
      look: [362, 545, 0.95],
      lens: 14,
      ev: 0.9,
    },
    {
      id: "study",
      name: "\u66F8\u623F\u30FB\u66F8\u684C",
      eye: [505, 306, 1.55],
      look: [410, 375, 0.7],
      lens: 15,
      ev: 1,
    },
    {
      id: "study2",
      name: "\u66F8\u623F\u30FB\u5F80\u967D\u53F0",
      eye: [497, 393, 1.6],
      look: [440, 305, 0.8],
      lens: 15,
      ev: 1,
    },
    {
      id: "corridor",
      name: "\u885B\u6D74\u8D70\u9053",
      eye: [552, 431, 1.45],
      look: [220, 433, 1.2],
      lens: 17,
      ev: 0.8,
    },
    {
      id: "corrcab",
      name: "\u8D70\u9053\u6DFA\u6AC3",
      eye: [280, 440, 1.5],
      look: [480, 412, 1.2],
      lens: 15,
      ev: 0.8,
    },
    {
      id: "passage",
      name: "\u8D70\u9053\u6539\u9053\u30FB\u5F80\u5317",
      eye: [275, 455, 1.55],
      look: [270, 362, 1.25],
      lens: 15,
      ev: 0.9,
    },
    {
      id: "maid",
      name: "\u50AD\u4EBA\u623F",
      eye: [344, 404, 1.55],
      look: [305, 318, 0.8],
      lens: 14,
      ev: 1,
    },
    {
      id: "maidbath",
      name: "\u50AD\u6D74",
      eye: [290, 354, 1.62],
      look: [232, 305, 0.95],
      lens: 14,
      ev: 0.9,
    },
    {
      id: "e1wide",
      name: "\u843D\u5730\u7A97\u5168\u666F",
      eye: [960, 470, 1.4],
      look: [1146, 470, 1.3],
      lens: 13,
      ev: 0.5,
    },
    {
      id: "livingout",
      name: "\u5BA2\u5EF3\u30FB\u770B\u7A97\u5916",
      eye: [1060, 560, 1.45],
      dir: [90, -3],
      lens: 16,
      ev: 0.5,
    },
    {
      id: "masterout",
      name: "\u4E3B\u81E5\u30FB\u770B\u7A97\u5916",
      eye: [990, 795, 1.45],
      dir: [92, -4],
      lens: 16,
      ev: 0.7,
    },
    {
      id: "balcony",
      name: "\u5927\u967D\u53F0\u30FB\u516C\u5712",
      eye: [1190, 434, 1.55],
      dir: [92, -7],
      lens: 15,
      out: 1,
    },
    {
      id: "balcony2",
      name: "\u5927\u967D\u53F0\u30FB\u4FEF\u77B0",
      eye: [1286, 372, 1.6],
      dir: [62, -30],
      lens: 15,
      out: 1,
    },
    {
      id: "theatre",
      name: "\u5927\u967D\u53F0\u30FB\u5287\u5834",
      eye: [1190, 434, 1.55],
      dir: [97, -12],
      lens: 34,
      out: 1,
    },
    {
      id: "balcony3",
      name: "\u5927\u967D\u53F0\u30FB\u71C8\u5149",
      eye: [1166, 318, 1.55],
      look: [1255, 505, 0.6],
      lens: 15,
      out: 1,
    },
    {
      id: "nbalcony",
      name: "\u5317\u967D\u53F0\u30FBIKEA",
      eye: [444, 236, 1.6],
      dir: [356, -12],
      lens: 15,
      out: 1,
    },
    {
      id: "door",
      name: "\u5927\u9580\u30FB\u6253\u958B",
      eye: [446, 860, 1.55],
      look: [300, 828, 1.35],
      lens: 16,
      ev: 0.9,
    },
    {
      id: "lift18",
      name: "18F \u96FB\u68AF\u5EF3",
      eye: [372, 846, 1.6],
      look: [205, 792, 1.3],
      lens: 15,
      ev: 0.9,
    },
    {
      id: "lift18b",
      name: "\u96FB\u68AF\u5EF3\u30FB\u770B\u5927\u9580",
      eye: [214, 760, 1.6],
      look: [384, 845, 1.1],
      lens: 15,
      ev: 0.9,
    },
    {
      id: "car",
      name: "\u96FB\u68AF",
      eye: [152, 800, 1.6],
      look: [300, 800, 1.4],
      lens: 15,
      ev: 0.9,
      doors: 0,
    },
    {
      id: "lift1",
      name: "1F \u96FB\u68AF\u5EF3",
      eye: [214, 830, -54.4],
      look: [700, 805, -55],
      lens: 15,
      ev: 0.8,
      doors: 1,
    },
    {
      id: "bar",
      name: "\u85DD\u5ECA\u5427\u6AAF",
      eye: [690, 878, -54.4],
      look: [400, 830, -54.7],
      lens: 15,
      ev: 0.8,
    },
    {
      id: "lobby",
      name: "\u6311\u9AD8\u5927\u5EF3",
      eye: [1120, 610, -54.4],
      look: [700, 520, -53.4],
      lens: 14,
      ev: 0.6,
    },
    {
      id: "stair",
      name: "\u6C34\u6676\u65CB\u8F49\u68AF",
      eye: [780, 720, -54.4],
      look: [880, 450, -51.5],
      lens: 14,
      ev: 0.6,
    },
    {
      id: "garden",
      name: "\u4E2D\u5EAD\u82B1\u5712",
      eye: [1172, 600, -54.4],
      look: [1767, 600, -54.6],
      lens: 15,
      out: 1,
    },
    {
      id: "gate",
      name: "\u793E\u5340\u5927\u9580",
      eye: [1805, 598, -54.4],
      look: [1150, 600, -53.2],
      lens: 15,
      out: 1,
    },
    {
      id: "park",
      name: "\u6587\u5FC3\u68EE\u6797\u516C\u5712",
      eye: [5304, 648, -54.4],
      look: [5621, 877, -55.4],
      lens: 15,
      out: 1,
    },
    {
      id: "xs1",
      name: "\u5411\u4E0A\u8DEF\u30FB\u5F80\u5B78\u6821",
      eye: [-2525, -1113, -54.4],
      look: [-9062, -1279, -54.3],
      lens: 15,
      out: 1,
      route: 1,
    },
    {
      id: "post",
      name: "\u5411\u4E0A\u8DEF\u30FB\u90F5\u5C40",
      eye: [-9062, -1181, -54.4],
      look: [-10135, -596, -51],
      lens: 15,
      out: 1,
      route: 1,
    },
    {
      id: "huizhong",
      name: "\u60E0\u4E2D\u8DEF\u53E3",
      eye: [-11794, -2269, -54.4],
      look: [-13940, -1279, -54],
      lens: 15,
      out: 1,
      route: 1,
    },
    {
      id: "schoolgate",
      name: "\u5927\u58A9\u570B\u5C0F\u6821\u9580",
      eye: [-18550, -2020, -54.4],
      look: [-19404, -1645, -54.1],
      lens: 15,
      out: 1,
      route: 1,
    },
  ],
  ya = [
    { id: "luxe", name: "\u8F15\u5962\u98A8" },
    { id: "neo", name: "\u6CD5\u5F0F\u98A8" },
  ],
  kh = [
    {
      id: "day",
      name: "\u767D\u5929",
      note: "\u767D\u5929\uFF0C\u4E0A\u5348\u967D\u5149",
    },
    {
      id: "night",
      name: "\u591C\u665A",
      note: "\u591C\u665A\uFF0C\u5BA4\u5167\u958B\u71C8",
    },
  ],
  Sh = [
    "floor",
    "oak",
    "oak_dark",
    "entry",
    "counter",
    "bwall",
    "rug",
    "rug2",
    "outdoor",
    "slats",
    "rug_living",
    "art1",
    "art2",
    "wallp",
    "cabp",
  ],
  xy = {},
  vy = (i, e) => {
    let t = xy[i];
    return "tex/" + (t && !t.own.includes(e) ? t.from : i) + "/" + e + ".jpg";
  },
  yy = { modern: -0.55, luxe: -0.62, neo: -0.6, wabi: -0.4, eclectic: -0.35 },
  Af = { modern: 0.25, luxe: 0.3, neo: 0.3, wabi: 0.35, eclectic: 0.4 },
  wh = {
    modern: {
      bedding: ["#E6E4E0", 0.55],
      accent_fabric: ["#7D7770", 0.8],
      books: ["#D6D1C9", 0.45],
      decor_attr: ["#9A958E", 0.35],
    },
    luxe: {
      bedding: ["#EFEBE5", 0.5],
      accent_fabric: ["#B39C7E", 0.75],
      books: ["#E2DBD0", 0.4],
      decor_attr: ["#CDBB9F", 0.35],
    },
    neo: {
      bedding: ["#F6F3EE", 0.5],
      accent_fabric: ["#EEE6DA", 0.85],
      books: ["#EEE8DE", 0.4],
      decor_attr: ["#E8DCC8", 0.35],
    },
    wabi: {
      bedding: ["#E3D9CA", 0.6],
      accent_fabric: ["#B7A48A", 0.8],
      books: ["#D6CBBB", 0.5],
      decor_attr: ["#BCAE98", 0.45],
    },
    eclectic: {
      bedding: ["#EADDC9", 0.3],
      accent_fabric: ["#C4903E", 0.55],
      books: ["#C9A27A", 0.15],
      decor_attr: ["#B9855A", 0.15],
    },
  },
  My = { modern: 0.66, luxe: 0.78, neo: 0.72, wabi: 0.55, eclectic: 0.55 },
  Fi = {
    wall: { map: "wallp", rep: 2.4, r: 0.88, bc: "#E8E4DE" },
    ceiling: { c: "#F7F5F1", r: 0.9 },
    skirting: { c: "#F1EEE8", r: 0.4 },
    floor_oak: { map: "floor", r: 0.4, so: 1 },
    ktile: { map: "floor", r: 0.3, so: 1 },
    stone: { map: "floor", r: 0.22, so: 1 },
    btile: { map: "floor", r: 0.25, so: 1 },
    bwall: { map: "bwall", rep: 1.2, r: 0.2 },
    outdoor: {
      map: "outdoor",
      c: "#F6D6B4",
      rep: 1.2,
      r: 0.6,
      ext: 1,
      envi: 0.24,
    },
    slab: { c: "#D3C8B8", r: 0.9, ext: 1, envi: 0.35 },
    facade: { c: "#D4C3AE", r: 0.85, ext: 1, envi: 0.35 },
    frame: { c: "#D9D9D6", r: 0.45, m: 1 },
    frame_dark: { c: "#2B2B2A", r: 0.5, m: 1 },
    door: { map: "cabp", rep: 1.6, r: 0.4, bc: "#D8D2C9" },
    entry: { map: "entry", rep: 2.4, r: 0.42 },
    cabinet: { map: "cabp", rep: 1.6, r: 0.4, bc: "#D8D2C9" },
    oak: { map: "oak", rep: 1.6, r: 0.45 },
    oak_dark: { map: "oak_dark", rep: 1.6, r: 0.42 },
    slats: { map: "slats", rep: 2.6, r: 0.2 },
    counter: { map: "counter", rep: 2, r: 0.14, cc: 0.25 },
    metal: { c: "#2E2E2C", r: 0.42, m: 0.6 },
    steel: { c: "#C9CBCC", r: 0.28, m: 1 },
    brass: { c: "#C9A66B", r: 0.3, m: 1 },
    chrome: { c: "#E8E9EA", r: 0.06, m: 1 },
    dark: { c: "#1C1C1B", r: 0.5 },
    screen: { c: "#020202", r: 0.1, cc: 0.6, nobake: !0, envk: 0.3 },
    scr_fabric: { c: "#F3F2EF", r: 0.95 },
    scr_dark: { c: "#151514", r: 0.6 },
    ovenglass: { c: "#020202", r: 0.05, cc: 0.6, nobake: !0, envk: 0.5 },
    mirror: { c: "#ECEDED", r: 0.02, m: 1, nobake: !0 },
    mirror_kids: {
      c: "#ECEDED",
      r: 0.02,
      m: 1,
      nobake: !0,
      mirror: [-0.7, 0, 0],
    },
    mirror_kids2: {
      c: "#ECEDED",
      r: 0.02,
      m: 1,
      nobake: !0,
      mirror: [0, 0, -0.7],
    },
    mirror_maid: {
      c: "#ECEDED",
      r: 0.02,
      m: 1,
      nobake: !0,
      mirror: [0, 0, 0.7],
    },
    kwall_p: { c: "#F4CDD9", r: 0.9 },
    kacc_p: { c: "#EAADC2", r: 0.9 },
    kfurn_p: { c: "#E8A3BC", r: 0.45 },
    kbed_p: { c: "#F3BCD0", r: 0.95, sh: 0.5 },
    kbed2_p: { c: "#FBE4EC", r: 0.9, sh: 0.4 },
    kwall_v: { c: "#D7C7EB", r: 0.9 },
    kacc_v: { c: "#BFA6DE", r: 0.9 },
    kfurn_v: { c: "#A78AD0", r: 0.45 },
    kbed_v: { c: "#C8AEEA", r: 0.95, sh: 0.5 },
    kbed2_v: { c: "#EEE6F8", r: 0.9, sh: 0.4 },
    kwall_b: { c: "#C7DCF1", r: 0.9 },
    kacc_b: { c: "#A7C4E8", r: 0.9 },
    kfurn_b: { c: "#84A9D8", r: 0.45 },
    kbed_b: { c: "#ABCBEF", r: 0.95, sh: 0.5 },
    kbed2_b: { c: "#E3EEFA", r: 0.9, sh: 0.4 },
    kwall_g: { c: "#CDE6D2", r: 0.9 },
    kacc_g: { c: "#A9D4B3", r: 0.9 },
    kfurn_g: { c: "#88BE96", r: 0.45 },
    kbed_g: { c: "#B0DCB9", r: 0.95, sh: 0.5 },
    kbed2_g: { c: "#E4F3E7", r: 0.9, sh: 0.4 },
    mirror_bath: {
      c: "#ECEDED",
      r: 0.02,
      m: 1,
      nobake: !0,
      mirror: [0, 0, 0.7],
    },
    mirror_foyer: {
      c: "#ECEDED",
      r: 0.02,
      m: 1,
      nobake: !0,
      mirror: [0, 0, -0.7],
      arch: 1,
    },
    mirror_vanity: {
      c: "#ECEDED",
      r: 0.02,
      m: 1,
      nobake: !0,
      mirror: [0, 0, -0.7],
      arch: 1,
    },
    ceramic: { c: "#F4F3F0", r: 0.06, cc: 0.5 },
    sofa: { c: "#CFC4B4", r: 0.95, sh: 0.7, lf: 1 },
    boucle: { c: "#E9E3D8", r: 0.97, sh: 0.8, lf: 1 },
    linen_white: { c: "#F3F0EA", r: 0.9, sh: 0.4, lf: 1 },
    bedding: { vc: 1, r: 0.9, sh: 0.45, lf: 1 },
    accent_fabric: { vc: 1, r: 0.92, sh: 0.6, lf: 1 },
    chair_fabric: { c: "#D9D2C6", r: 0.95, sh: 0.7, lf: 1 },
    task_fabric: { c: "#5D5F5E", r: 0.9, sh: 0.5, lf: 1 },
    headboard: { c: "#C7BCAA", r: 0.95, sh: 0.6, lf: 1 },
    rug: { map: "rug", rep: 1, r: 0.97, sh: 1 },
    rug2: { map: "rug2", rep: 1, r: 0.97, sh: 1 },
    rug_living: { map: "rug_living", r: 0.97, sh: 1 },
    curtain: { c: "#E8E1D4", r: 0.92, sh: 0.5, ds: 1, nb: 1 },
    sheer: { c: "#F6F4EF", r: 0.8, op: 0.7, ds: 1, nb: 1 },
    shade: {
      c: "#F3EEE4",
      r: 0.9,
      em: "#FFCB8E",
      ek: 1.3,
      ekn: 3,
      hc: 6,
      ds: 1,
    },
    books: { vc: 1, r: 0.55 },
    decor_attr: { vc: 1, r: 0.55 },
    leaves: { vc: 1, r: 0.45, ds: 1 },
    pot: { c: "#D8D2C8", r: 0.75 },
    pot_dark: { c: "#4A4844", r: 0.6 },
    soil: { c: "#3B3026", r: 0.95 },
    stem: { c: "#6B5A43", r: 0.8 },
    vase: { c: "#D9D3C7", r: 0.1, cc: 0.5 },
    vase2: { c: "#8E9C88", r: 0.5 },
    decor: { c: "#FFFFFF", r: 0.5 },
    art1: { map: "art1", r: 0.85 },
    art2: { map: "art2", r: 0.85 },
    canvas_frame: { c: "#C9A86B", r: 0.3, m: 1 },
    appliance: { c: "#ECECEA", r: 0.3 },
    fruit: { c: "#D9822B", r: 0.35 },
    glass: { glass: 1 },
    frost: { glass: 1, frost: 1 },
    water: { glass: 1 },
    ground: { c: "#6E7A5A", r: 0.95, ext: 1 },
    tree: { c: "#4E6B3F", r: 0.85, ext: 1 },
    bldg1: {
      map: "bldg1",
      repx: 6.4,
      repy: 6.2,
      r: 0.7,
      ext: 1,
      night: [25.6, 24.8],
    },
    bldg2: {
      map: "bldg2",
      repx: 5.6,
      repy: 6,
      r: 0.7,
      ext: 1,
      night: [22.4, 24],
    },
    bldg3: {
      map: "bldg3",
      repx: 7.2,
      repy: 6.4,
      r: 0.7,
      ext: 1,
      night: [28.8, 25.6],
    },
    downlight: { emit: "#FFE9CF", ei: 7, nk: 0.8 },
    bdown: { emit: "#FFD3A0", ei: 7, nk: 0.9, dc: "#8F8A83" },
    soffit: { c: "#D3C8B8", r: 0.9 },
    balc_floor: { map: "outdoor", c: "#F6D6B4", rep: 1.2, r: 0.6 },
    bulb: { emit: "#FFDCAE", ei: 9, nk: 0.8 },
    ledstrip: { emit: "#FFDCAE", ei: 4, nk: 0.6 },
    molding: { c: "#F5F2EC", r: 0.42 },
    quilt: { c: "#D3CCC2", r: 0.95, sh: 0.7, lf: 1 },
    velvet_dark: { c: "#2D2A2A", r: 0.86, sh: 0.95, lf: 1 },
    opal: { c: "#F6F3EE", r: 0.3, cc: 0.6, em: "#FFDDB0", ek: 1.6, hc: 5 },
    cove: { emit: "#FFD7A6", ei: 5, nk: 0.3 },
    c_marble: {
      map: "c_marble",
      rep: 2.4,
      r: 0.16,
      cc: 0.3,
      so: 1,
      ph: "#E4DCCD",
      lazy: 1,
    },
    c_wall: { c: "#D9D0C3", r: 0.6 },
    c_ceiling: { c: "#F3F0EA", r: 0.9 },
    c_stone: { c: "#77706A", r: 0.35 },
    c_steel: { c: "#B9BCC0", r: 0.3, m: 1 },
    c_gold: { c: "#C3A46D", r: 0.28, m: 1 },
    c_wood: { c: "#5B4130", r: 0.45 },
    c_frame: { c: "#3A3530", r: 0.4, m: 0.6 },
    c_sofa: { c: "#8E7E6E", r: 0.9, sh: 0.5 },
    c_leaf: { c: "#2E4A2B", r: 0.85 },
    c_bark: { c: "#4B3D33", r: 0.9 },
    c_hedge: { c: "#36552F", r: 0.9 },
    c_lawn: { c: "#5F7F3F", r: 0.95 },
    c_paving: { c: "#CDC6B9", r: 0.7 },
    c_bronze: { c: "#6E4C2F", r: 0.35, m: 1 },
    c_art1: { map: "c_art1", r: 0.7, ph: "#9C9A94", lazy: 1 },
    c_art2: { map: "c_art2", r: 0.7, ph: "#C9C0AE", lazy: 1 },
    c_art3: { map: "c_art3", r: 0.7, ph: "#2A3F66", lazy: 1 },
    c_water: { c: "#5E98AA", r: 0.04, op: 0.6, nobake: !0, envk: 0.9 },
    c_glow: { emit: "#BFE8F5", ei: 1.3, nk: 1 },
    c_crystal: { emit: "#FFF3DF", ei: 2.4, nk: 1 },
    c_lamp: { emit: "#FFE3BC", ei: 2, nk: 1 },
    c_flame: { emit: "#FF8A2A", ei: 3.2, nk: 1 },
    c_dmarble: {
      map: "c_dmarble",
      rep: 2.4,
      r: 0.18,
      cc: 0.2,
      ph: "#3A322C",
      so: 1,
      lazy: 1,
    },
    c_door: { c: "#C3AB86", r: 0.34, m: 0.35, so: 1 },
  },
  ua = {
    modern: {
      wall: { r: 0.9, bc: "#E9E6E1" },
      cabinet: { r: 0.45, bc: "#CEC8BF" },
      door: { r: 0.45, bc: "#CEC8BF" },
      ceiling: { c: "#F3F2EF", r: 0.9, m: 0 },
      skirting: { c: "#CFCAC3", r: 0.4, m: 0 },
      molding: { c: "#EAE7E2", r: 0.4, m: 0 },
      frame: { c: "#2C2C2B", r: 0.45, m: 1 },
      frame_dark: { c: "#2C2C2B", r: 0.45, m: 1 },
      metal: { c: "#2B2B2A", r: 0.38, m: 0.8 },
      brass: { c: "#2F2E2C", r: 0.35, m: 0.8 },
      chrome: { c: "#D7D8D9", r: 0.1, m: 1 },
      steel: { c: "#C9CBCC", r: 0.28, m: 1 },
      canvas_frame: { c: "#262524", r: 0.4, m: 0.6 },
      sofa: { c: "#A49D94", r: 0.95, m: 0, sh: 0.7 },
      boucle: { c: "#D9D4CB", r: 0.97, m: 0, sh: 0.8 },
      linen_white: { c: "#EEECE8", r: 0.9, m: 0, sh: 0.4 },
      chair_fabric: { c: "#57534F", r: 0.9, m: 0, sh: 0.8 },
      velvet_dark: { c: "#7A5238", r: 0.5, m: 0, sh: 0.2 },
      quilt: { c: "#CFCAC2", r: 0.95, m: 0, sh: 0.6 },
      task_fabric: { c: "#6E6A65", r: 0.9, m: 0, sh: 0.5 },
      headboard: { c: "#8F8A84", r: 0.9, m: 0, sh: 0.8 },
      curtain: { c: "#CFC9C1", r: 0.92, m: 0, sh: 0.5 },
      sheer: { c: "#F2F1EE", r: 0.8 },
      pot: { c: "#D9D5CF", r: 0.7 },
      pot_dark: { c: "#3A3836", r: 0.6, m: 0 },
      vase: { c: "#2E2D2B", r: 0.3, m: 0 },
      vase2: { c: "#A9A49C", r: 0.5, m: 0 },
      ceramic: { c: "#F2F1EE", r: 0.08 },
      shade: { c: "#EDEBE7", r: 0.9 },
      floor_oak: { r: 0.3 },
      ktile: { r: 0.3 },
      stone: { r: 0.3 },
      btile: { r: 0.4 },
      counter: { r: 0.2 },
      bwall: { r: 0.3 },
      slats: { r: 0.2 },
      oak: { r: 0.5 },
      oak_dark: { r: 0.45 },
      entry: { r: 0.4 },
    },
    luxe: {
      wall: { r: 0.88, bc: "#E3DFD9" },
      cabinet: { r: 0.28, bc: "#CBC3B8" },
      door: { r: 0.3, bc: "#CBC3B8" },
      ceiling: { c: "#F6F4F1", r: 0.9, m: 0 },
      skirting: { c: "#CBC3B8", r: 0.3, m: 0 },
      molding: { c: "#EEEAE4", r: 0.4, m: 0 },
      frame: { c: "#3A3836", r: 0.45, m: 1 },
      frame_dark: { c: "#3A3836", r: 0.45, m: 1 },
      metal: { c: "#C8AD80", r: 0.25, m: 1 },
      brass: { c: "#C8AD80", r: 0.25, m: 1 },
      chrome: { c: "#E3D3B6", r: 0.15, m: 1 },
      steel: { c: "#D6CDBE", r: 0.22, m: 1 },
      canvas_frame: { c: "#C8AD80", r: 0.25, m: 1 },
      sofa: { c: "#F1ECE4", r: 0.85, m: 0, sh: 0.95 },
      boucle: { c: "#ECE7DF", r: 0.97, m: 0, sh: 0.8 },
      linen_white: { c: "#F2EFEA", r: 0.9, m: 0, sh: 0.4 },
      chair_fabric: { c: "#8C8075", r: 0.85, m: 0, sh: 0.95 },
      velvet_dark: { c: "#2E5245", r: 0.86, m: 0, sh: 0.95 },
      quilt: { c: "#CEC6BB", r: 0.95, m: 0, sh: 0.7 },
      task_fabric: { c: "#7E756C", r: 0.9, m: 0, sh: 0.5 },
      headboard: { c: "#9C8F82", r: 0.86, m: 0, sh: 0.95 },
      curtain: { c: "#D8CBB6", r: 0.8, m: 0, sh: 0.6 },
      sheer: { c: "#F4F1EC", r: 0.8 },
      pot: { c: "#E9E4DC", r: 0.2 },
      pot_dark: { c: "#2B2A28", r: 0.25, m: 0 },
      vase: { c: "#D8C7A8", r: 0.15, m: 0.3 },
      vase2: { c: "#CFC6BA", r: 0.3, m: 0 },
      ceramic: { c: "#F3F1ED", r: 0.06 },
      shade: { c: "#EFE9DE", r: 0.9 },
      floor_oak: { r: 0.12 },
      ktile: { r: 0.1 },
      stone: { r: 0.1 },
      btile: { r: 0.15 },
      counter: { r: 0.08 },
      bwall: { r: 0.12 },
      slats: { r: 0.08 },
      oak: { r: 0.35 },
      oak_dark: { r: 0.3 },
      entry: { r: 0.35 },
    },
    neo: {
      wall: { r: 0.88, bc: "#F4F2ED" },
      cabinet: { r: 0.32, bc: "#F5F3EE" },
      door: { r: 0.32, bc: "#F5F3EE" },
      ceiling: { c: "#FAF9F6", r: 0.9, m: 0 },
      skirting: { c: "#F5F3EE", r: 0.35, m: 0 },
      molding: { c: "#F8F6F1", r: 0.4, m: 0 },
      frame: { c: "#4A4540", r: 0.45, m: 1 },
      frame_dark: { c: "#4A4540", r: 0.45, m: 1 },
      metal: { c: "#C9AE7C", r: 0.3, m: 1 },
      brass: { c: "#C9AE7C", r: 0.28, m: 1 },
      chrome: { c: "#E2D6BF", r: 0.18, m: 1 },
      steel: { c: "#DAD2C4", r: 0.25, m: 1 },
      canvas_frame: { c: "#CDB27E", r: 0.3, m: 1 },
      sofa: { c: "#F1ECE4", r: 0.95, m: 0, sh: 0.7 },
      boucle: { c: "#F4F1EC", r: 0.97, m: 0, sh: 0.8 },
      linen_white: { c: "#F7F5F1", r: 0.9, m: 0, sh: 0.4 },
      chair_fabric: { c: "#EEE9E1", r: 0.85, m: 0, sh: 0.9 },
      velvet_dark: { c: "#ECE6DD", r: 0.86, m: 0, sh: 0.9 },
      quilt: { c: "#EFEAE3", r: 0.95, m: 0, sh: 0.7 },
      task_fabric: { c: "#E6E0D7", r: 0.9, m: 0, sh: 0.5 },
      headboard: { c: "#EDE8E1", r: 0.86, m: 0, sh: 0.9 },
      curtain: { c: "#F2EDE6", r: 0.85, m: 0, sh: 0.6 },
      sheer: { c: "#F9F7F3", r: 0.8 },
      pot: { c: "#F4F1EC", r: 0.3 },
      pot_dark: { c: "#E6E0D7", r: 0.6, m: 0 },
      vase: { c: "#F6F3EE", r: 0.1, m: 0 },
      vase2: { c: "#EAE6E0", r: 0.3, m: 0 },
      ceramic: { c: "#F7F5F1", r: 0.06 },
      shade: { c: "#F6F1EA", r: 0.9 },
      floor_oak: { r: 0.2 },
      ktile: { r: 0.15 },
      stone: { r: 0.15 },
      btile: { r: 0.2 },
      counter: { r: 0.1 },
      bwall: { r: 0.15 },
      slats: { r: 0.1 },
      oak: { r: 0.4 },
      oak_dark: { r: 0.4 },
      entry: { r: 0.4 },
    },
    wabi: {
      wall: { r: 0.95, bc: "#DCD0BE" },
      cabinet: { r: 0.7, bc: "#C4A989" },
      door: { r: 0.7, bc: "#C4A989" },
      ceiling: { c: "#ECE5DA", r: 0.95, m: 0 },
      skirting: { c: "#CDBFAC", r: 0.8, m: 0 },
      molding: { c: "#DCD0BE", r: 0.8, m: 0 },
      frame: { c: "#3D3833", r: 0.55, m: 0.8 },
      frame_dark: { c: "#3D3833", r: 0.55, m: 0.8 },
      metal: { c: "#5B4A3A", r: 0.5, m: 0.6 },
      brass: { c: "#5E4D3D", r: 0.5, m: 0.6 },
      chrome: { c: "#8A7C6C", r: 0.4, m: 0.7 },
      steel: { c: "#8C8174", r: 0.4, m: 0.7 },
      canvas_frame: { c: "#6B5A48", r: 0.6, m: 0 },
      sofa: { c: "#CDBEA8", r: 0.97, m: 0, sh: 0.5 },
      boucle: { c: "#E3D9C9", r: 0.97, m: 0, sh: 0.8 },
      linen_white: { c: "#ECE5DA", r: 0.95, m: 0, sh: 0.4 },
      chair_fabric: { c: "#B49C80", r: 0.95, m: 0, sh: 0.5 },
      velvet_dark: { c: "#8A6A52", r: 0.95, m: 0, sh: 0.3 },
      quilt: { c: "#CDBFAA", r: 0.97, m: 0, sh: 0.5 },
      task_fabric: { c: "#9C8B78", r: 0.95, m: 0, sh: 0.4 },
      headboard: { c: "#BDAE98", r: 0.95, m: 0, sh: 0.5 },
      curtain: { c: "#D8CCB9", r: 0.95, m: 0, sh: 0.4 },
      sheer: { c: "#EFE8DD", r: 0.85 },
      pot: { c: "#A89A88", r: 0.9 },
      pot_dark: { c: "#6E6255", r: 0.85, m: 0 },
      vase: { c: "#B9AA95", r: 0.8, m: 0 },
      vase2: { c: "#8E8070", r: 0.8, m: 0 },
      ceramic: { c: "#E6DED2", r: 0.5 },
      shade: { c: "#E9DFD0", r: 0.95 },
      floor_oak: { r: 0.7 },
      ktile: { r: 0.7 },
      stone: { r: 0.7 },
      btile: { r: 0.7 },
      counter: { r: 0.6 },
      bwall: { r: 0.7 },
      slats: { r: 0.85 },
      oak: { r: 0.7 },
      oak_dark: { r: 0.7 },
      entry: { r: 0.6 },
    },
    eclectic: {
      wall: { r: 0.9, bc: "#D9C6AB" },
      cabinet: { r: 0.4, bc: "#6E4C33" },
      door: { r: 0.4, bc: "#6E4C33" },
      ceiling: { c: "#F1EBE1", r: 0.9, m: 0 },
      skirting: { c: "#C9B59A", r: 0.5, m: 0 },
      molding: { c: "#E5D8C4", r: 0.5, m: 0 },
      frame: { c: "#2E2A26", r: 0.45, m: 1 },
      frame_dark: { c: "#2E2A26", r: 0.45, m: 1 },
      metal: { c: "#B08D57", r: 0.32, m: 1 },
      brass: { c: "#B08D57", r: 0.32, m: 1 },
      chrome: { c: "#C9A86E", r: 0.25, m: 1 },
      steel: { c: "#C2AD86", r: 0.28, m: 1 },
      canvas_frame: { c: "#B08D57", r: 0.32, m: 1 },
      sofa: { c: "#A25A3C", r: 0.85, m: 0, sh: 0.95 },
      boucle: { c: "#C9A24E", r: 0.97, m: 0, sh: 0.8 },
      linen_white: { c: "#F0E9DD", r: 0.9, m: 0, sh: 0.4 },
      chair_fabric: { c: "#2F5E62", r: 0.85, m: 0, sh: 0.95 },
      velvet_dark: { c: "#6D2633", r: 0.86, m: 0, sh: 0.95 },
      quilt: { c: "#D2BFA3", r: 0.95, m: 0, sh: 0.6 },
      task_fabric: { c: "#8C6B4F", r: 0.9, m: 0, sh: 0.5 },
      headboard: { c: "#5C3F2E", r: 0.86, m: 0, sh: 0.9 },
      curtain: { c: "#C7A56C", r: 0.9, m: 0, sh: 0.5 },
      sheer: { c: "#F3EDE2", r: 0.8 },
      pot: { c: "#B86F4A", r: 0.7 },
      pot_dark: { c: "#2F2B27", r: 0.6, m: 0 },
      vase: { c: "#3E5E55", r: 0.2, m: 0 },
      vase2: { c: "#C9A24E", r: 0.3, m: 0 },
      ceramic: { c: "#EFE7DA", r: 0.08 },
      shade: { c: "#E9D9BD", r: 0.9 },
      floor_oak: { r: 0.35 },
      ktile: { r: 0.35 },
      stone: { r: 0.35 },
      btile: { r: 0.4 },
      counter: { r: 0.12 },
      bwall: { r: 0.1 },
      slats: { r: 0.5 },
      oak: { r: 0.4 },
      oak_dark: { r: 0.4 },
      entry: { r: 0.4 },
    },
  };
for (let [i, e] of [
  ["dleaf_o", "door"],
  ["dleaf_c", "door"],
  ["dhw_o", "metal"],
  ["dhw_c", "metal"],
  ["dmold_o", "molding"],
  ["dmold_c", "molding"],
]) {
  Fi[e] && (Fi[i] = Fi[e]);
  for (let t in ua) ua[t][e] && (ua[t][i] = ua[t][e]);
}
for (let e of Object.keys(Fi)) Fi[e + "__p"] = Fi[e]; for (let t in ua) for (let e of Object.keys(ua[t])) ua[t][e + "__p"] = ua[t][e];
var Ey = document.getElementById("stage"),
  Ge = new Wr({
    antialias: !1,
    alpha: !0,
    powerPreference: "high-performance",
  });
Ge.setClearColor(0, 0);
Ge.setPixelRatio(Math.min(devicePixelRatio, yi ? 1.5 : 2));
Ge.setSize(innerWidth, innerHeight);
Ge.toneMapping = aa;
Ge.toneMappingExposure = Math.pow(2, 0.6);
Ge.shadowMap.enabled = !0;
Ge.shadowMap.type = nh;
Ge.shadowMap.autoUpdate = !1;
Ey.appendChild(Ge.domElement);
var it = new Eo(),
  mr = new Ae(2.4, 2.45, 2.5),
  Ma = new Ae(0.035, 0.028, 0.026);
it.fog = new Mo(mr.clone(), 150, 4200);
Ze.fog_fragment = `#ifdef USE_FOG
	float fogD = max( vFogDepth - fogNear, 0.0 );
	float fogFactor = max( 1.0 - exp( - fogD / fogFar ), smoothstep( 2300.0, 2950.0, vFogDepth ) * 0.9 );
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;
var Be = new Xt(60, innerWidth / innerHeight, 0.05, 3e3),
  at = new Yo(Be, Ge.domElement);
at.enableDamping = !0;
at.dampingFactor = 0.09;
var by = new Ot(innerWidth, innerHeight, { type: rn, samples: yi ? 2 : 4 }),
  Es = new $o(Ge, by);
Es.setPixelRatio(Ge.getPixelRatio());
Es.setSize(innerWidth, innerHeight);
Es.addPass(new jo(it, Be));
var qn = new or(new se(innerWidth, innerHeight), 0.22, 0.55, 1.6);
qn.materialHighPassFilter.fragmentShader =
  qn.materialHighPassFilter.fragmentShader.replace(
    "vec4 texel = texture2D( tDiffuse, vUv );",
    `vec4 texel = texture2D( tDiffuse, vUv );
	texel.rgb = min( texel.rgb, vec3( 5.0 ) );`,
  );
Es.addPass(qn);
Es.addPass(new Qo());
var Th = new sn(new A(0, -1, 0), 1.3),
  Sy = new sn(new A(0, 1, 0), 5),
  ei = 2;
function Nt() {
  ei = Math.max(ei, 2);
}
var wy = document.getElementById("prog"),
  zh = document.getElementById("progText"),
  _h = 0,
  Ah = 1;
function el(i) {
  _h += i;
  let e = Math.min(1, _h / Ah);
  ((wy.style.width = (e * 100).toFixed(0) + "%"),
    (zh.textContent =
      "\u5DF2\u8F09\u5165 " +
      (_h / 1048576).toFixed(1) +
      " / " +
      (Ah / 1048576).toFixed(1) +
      " MB"));
}
async function Hh(i, e) {
  let t = await fetch(i);
  if (!t.ok) throw new Error(i + " " + t.status);
  let n = t.body.getReader(),
    s = [],
    r = 0;
  for (;;) {
    let { done: l, value: c } = await n.read();
    if (l) break;
    (s.push(c), (r += c.length), e && e(c.length));
  }
  let o = new Uint8Array(r),
    a = 0;
  for (let l of s) (o.set(l, a), (a += l.length));
  return o;
}
async function Vh(i, e) {
  let t = new Blob([i], { type: "image/png" }),
    n;
  try {
    n = await createImageBitmap(t, {
      colorSpaceConversion: "none",
      premultiplyAlpha: "none",
    });
  } catch {
    n = await new Promise((c, h) => {
      let u = new Image();
      ((u.onload = () => c(u)),
        (u.onerror = h),
        (u.src = URL.createObjectURL(t)));
    });
  }
  let s = document.createElement("canvas");
  ((s.width = n.width), (s.height = n.height));
  let r = s.getContext("2d", { willReadFrequently: !0 });
  r.drawImage(n, 0, 0);
  let o = r.getImageData(0, 0, n.width, n.height).data,
    a = new Uint8Array(e + 8);
  for (let l = 0, c = 0; c < e; l += 4)
    ((a[c++] = o[l]), (a[c++] = o[l + 1]), (a[c++] = o[l + 2]));
  return a.buffer;
}
function yr(i, e) {
  return new Promise((t, n) =>
    new Bo().load(
      i,
      (s) => {
        ((s.colorSpace = Et),
          (s.anisotropy = Math.min(8, Ge.capabilities.getMaxAnisotropy())),
          e && e(),
          t(s));
      },
      void 0,
      () => n(new Error(i)),
    ),
  );
}
var tl = (i) => (i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4)),
  Un = {
    bakeMax: { value: 1 },
    bakeGain: { value: ma },
    specRef: { value: 0.05 },
  },
  Ty = new Ae(0.03, 0.029, 0.027);
function Rf(i, e, t, n, s, r, o) {
  ((i.onBeforeCompile = (a) => {
    (e &&
      ((a.uniforms.bakeMax = Un.bakeMax),
      (a.uniforms.bakeGain = Un.bakeGain),
      (a.uniforms.specRef = Un.specRef),
      (a.vertexShader = a.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
attribute vec3 bake;
varying vec3 vBake;
uniform float bakeMax;
uniform float specRef;`,
        )
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
vBake = bake * bake * bakeMax;` +
            (o
              ? `
vBake *= 1.0 / ( 1.0 + dot( vBake, vec3( 0.2126, 0.7152, 0.0722 ) ) / ( ` +
                o.toFixed(2) +
                " * specRef ) );"
              : "") +
            (s
              ? `
vBake = vec3( dot( vBake, vec3( 0.2126, 0.7152, 0.0722 ) ) ) * 0.92;`
              : "") +
            (r
              ? `
vBake = max( vBake, vec3( 0.45 * specRef ) );`
              : "") +
            `
transformed += objectNormal * ( 0.002 * smoothstep( 0.003, 0.03, dot( vBake, vec3( 0.2126, 0.7152, 0.0722 ) ) ) );`,
        )),
      (a.fragmentShader = a.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
varying vec3 vBake;
uniform vec3 bakeGain;
uniform float specRef;`,
        )
        .replace(
          "#include <lights_fragment_maps>",
          `#include <lights_fragment_maps>
irradiance += vBake * bakeGain * PI;
iblIrradiance = vec3( 0.0 );` +
            (n
              ? `
radiance *= clamp( dot( vBake, vec3( 0.2126, 0.7152, 0.0722 ) ) / specRef, 0.06, 1.0 );`
              : ""),
        ))),
      t &&
        ((a.uniforms.capColor = { value: Ty }),
        (a.fragmentShader = a.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform vec3 capColor;`,
          )
          .replace(
            "#include <dithering_fragment>",
            `#include <dithering_fragment>
if ( ! gl_FrontFacing ) gl_FragColor = vec4( capColor, 1.0 );`,
          ))));
  }),
    (i.customProgramCacheKey = () =>
      (e ? "baked" : "plain") +
      (e && n ? "-so" : "") +
      (e && s ? "-nb" : "") +
      (e && r ? "-lf" : "") +
      (e && o ? "-hc" + o : "") +
      (t ? "-cap" : "")));
}
function Rh(i, e) {
  let t = e.clone();
  return (
    (t.needsUpdate = !0),
    (i.rep || i.repx) &&
      ((t.wrapS = t.wrapT = Ii),
      t.repeat.set(1 / (i.repx || i.rep), 1 / (i.repy || i.rep))),
    t
  );
}
var hl = [],
  _s = {},
  Hf = [],
  Vf = [],
  Gf = [],
  vs = null,
  ha = {},
  ul = {};
function Ay(i) {
  if (!ha[i.map]) {
    let e = (s) => (
        (s.colorSpace = Et),
        (s.anisotropy = Math.min(8, Ge.capabilities.getMaxAnisotropy())),
        i.rep && ((s.wrapS = s.wrapT = Ii), s.repeat.set(1 / i.rep, 1 / i.rep)),
        s
      ),
      t = document.createElement("canvas");
    t.width = t.height = 2;
    let n = t.getContext("2d");
    ((n.fillStyle = i.ph || "#D8D0C2"),
      n.fillRect(0, 0, 2, 2),
      (ha[i.map] = e(new pi(t))),
      (ul[i.map] = []),
      new sa().load("tex/common/" + i.map + ".jpg", (s) => {
        let r = e(new fn(s));
        r.needsUpdate = !0;
        let o = ha[i.map];
        ha[i.map] = r;
        for (let a of ul[i.map]) a.map = r;
        (o.dispose(), Nt());
      }));
  }
  return ha[i.map];
}
function Wf(i, e, t, n) {
  if (e.emit) {
    let l = new Kt({ color: new Ae(e.emit).multiplyScalar(e.ei) });
    return (
      (l.userData.base = l.color.clone()),
      (l.userData.nk = e.nk ?? 1),
      (l.userData.day = e.dc ? new Ae(e.dc) : l.color.clone()),
      l.color.copy(l.userData.day),
      Hf.push(l),
      l
    );
  }
  if (e.glass) {
    let l = new ta({
      color: e.frost ? 15265004 : 15922933,
      roughness: e.frost ? 0.35 : 0.02,
      metalness: 0,
      transparent: !0,
      opacity: e.frost ? 0.75 : 0.1,
      depthWrite: !1,
      envMapIntensity: 0.15,
    });
    return (i === "glass" && (vs = l), l);
  }
  let s = {
    color: e.c ? new Ae(e.c) : new Ae(1, 1, 1),
    roughness: e.r ?? 0.5,
    metalness: e.m ?? 0,
  };
  (e.map && (s.map = e.lazy ? Ay(e) : Rh(e, t[e.map])),
    e.vc && (s.vertexColors = !0),
    e.sh &&
      ((s.sheen = e.sh),
      (s.sheenRoughness = 0.5),
      (s.sheenColor = new Ae(1, 1, 1))),
    e.cc && ((s.clearcoat = e.cc), (s.clearcoatRoughness = 0.06)),
    e.op && ((s.transparent = !0), (s.opacity = e.op), (s.depthWrite = !1)),
    e.ds && (s.side = Sn),
    e.em && ((s.emissive = new Ae(e.em)), (s.emissiveIntensity = e.ei ?? 0)),
    e.envk && (s.envMapIntensity = e.envk));
  let r = new ta(s);
  e.lazy && e.map && ul[e.map].push(r);
  let o = !e.ext && !e.nobake && n,
    a = null;
  return (
    !e.ext &&
      !e.ds &&
      !e.op &&
      ((a = r.clone()),
      (a.side = Sn),
      e.map &&
        ((a.map = e.lazy ? r.map : Rh(e, t[e.map])),
        e.lazy && ul[e.map].push(a)),
      Rf(a, o, !0, !!e.so, !!e.nb, !!e.lf, e.hc || 0),
      hl.push(a)),
    o && Rf(r, o, !1, !!e.so, !!e.nb, !!e.lf, e.hc || 0),
    e.ext || hl.push(r),
    (r.userData.cap = a),
    (_s[i] = { m: r, cap: a }),
    r
  );
}
var Ry = document.getElementById("views"),
  xi = {};
cl.forEach((i) => {
  let e = document.createElement("button");
  ((e.type = "button"),
    (e.textContent = i.name),
    e.setAttribute("aria-pressed", "false"),
    (e.onclick = () => Yh(i)),
    Ry.appendChild(e),
    (xi[i.id] = e));
  const KEEP = { all: "全屋俯視", living: "客廳", island: "餐廚中島", mbed: "主臥", mbath: "主浴", kids1: "小孩房" };
  e.dataset.view = i.id;
  if (KEEP[i.id]) e.textContent = KEEP[i.id]; else { e.style.display = "none"; e.dataset.hidden = "1"; }
});
{ const kv = cl.find((q) => q.id === "kids1"); const b = document.createElement("button"); b.type = "button"; b.textContent = "開放遊戲區"; b.setAttribute("aria-pressed", "false");
  b.onclick = () => { window.__play && window.__play(1); kv && Yh(kv); }; Ry.appendChild(b); xi.__playview = b; }
var Xf = document.getElementById("cut"),
  Ch = document.getElementById("cutWrap"),
  gr = document.getElementById("hintText"),
  Cy = document.getElementById("note");
Xf.onchange = () => Nt();
var qf = {},
  Yf = {};
function Gh(i, e, t, n) {
  e.forEach((s) => {
    let r = document.createElement("button");
    ((r.type = "button"),
      r.setAttribute("role", "radio"),
      r.setAttribute("aria-checked", "false"),
      (r.textContent = s.name),
      (r.onclick = () => n(s.id)),
      i.appendChild(r),
      (t[s.id] = r));
  });
}
Gh(document.getElementById("styles"), ya, qf, (i) => lp(i, Xn));
Gh(document.getElementById("times"), kh, Yf, (i) => lp(Pt, i));
var Zf = [
    { id: "earth", name: "Google Earth" },
    { id: "photo", name: "\u967D\u53F0\u7167\u7247" },
    { id: "model", name: "3D \u6A21\u64EC" },
  ],
  Jf = {};
Gh(document.getElementById("outside"), Zf, Jf, (i) => {
  ((Dh = i), yl(), Nt());
});
var Py = document.getElementById("gattr");
function dl() {
  return Dh === "earth"
    ? cn && (!He || vi.night)
      ? "earth"
      : "model"
    : Dh === "photo" && vn && !He
      ? "photo"
      : "model";
}
function yl() {
  let i = dl();
  for (let e of Zf) {
    let t = Jf[e.id];
    (t.setAttribute("aria-checked", e.id === i ? "true" : "false"),
      (t.disabled =
        e.id === "earth"
          ? !(cn && (!He || vi.night))
          : e.id === "photo"
            ? He || !vn
            : !1),
      (t.title =
        e.id === "earth"
          ? He
            ? "Google Earth \u5BE6\u666F\u5408\u6210\u7684\u591C\u666F\uFF08\u5927\u6A13\u958B\u71C8\u3001\u8DEF\u71C8\u3001\u62DB\u724C\uFF09"
            : "Google Earth 3D \u5BE6\u666F\uFF08\u5317\u3001\u6771\u3001\u5357\u4E09\u9762\u7A97\u5916\uFF09"
          : e.id === "photo"
            ? He
              ? "\u5BE6\u666F\u7167\u7247\u53EA\u6709\u767D\u5929"
              : "\u5927\u967D\u53F0\u5BE6\u62CD\u7167\u7247\u5408\u6210"
            : "\u5468\u908A\u8857\u666F 3D \u6A21\u578B"));
  }
  Py.hidden = i !== "earth";
}
var xs = "orbit",
  He = !1,
  Ea = null,
  mi = null,
  wa = [],
  Wh = [],
  Kf = [],
  Xh = [],
  An = "";
function Iy() {
  let i = xs === "orbit" && !At,
    e = i ? 0 : Dt.clamp((3.4 - Be.position.y) / 1.7, 0, 1),
    t = i ? 1.3 : 1.3 + 2.3 * e,
    n = i ? Xf.checked : t < 3.15,
    s = !i && t >= 3.15;
  Th.constant = t;
  let r = (n ? "c" : "-") + (s ? "i" : "o");
  if (r !== An) {
    ((An = r), (Ge.clippingPlanes = (n ? [Th] : []).concat(s ? [] : [Sy])));
    for (let o of Kf) o.material = n ? o.userData.cap : o.userData.base;
    for (let o of wa) o.visible = s;
    window.__cutn = n; for (let o of Xh) o.visible = window.__xhv(o);
    for (let o of Wh) o.visible = s;
    (mi && (mi.visible = !s && !He),
      (it.background = s ? Ea : null),
      (qn.enabled = s));
  }
}
var ls = new Ln(new A(-13, -0.35, -7.9), new A(13.05, 1.3, 7.9)),
  qh = (i) => (i < 1 ? 52 : 40);
function Ly() {
  let i = Be.aspect,
    e = i < 1,
    t = Math.max(200, innerHeight),
    n = document.querySelector(".card").getBoundingClientRect(),
    s = document.querySelector(".dock .views").getBoundingClientRect(),
    r =
      innerWidth < 760
        ? Math.min(0.34 * t, n.bottom + 10)
        : Math.min(0.18 * t, 92),
    o = Math.min(0.26 * t, t - s.top + 44),
    a = 1 - (2 * r) / t,
    l = -1 + (2 * o) / t,
    c = 0.94,
    h = Dt.degToRad(e ? 20 : 41),
    u = Dt.degToRad(e ? 50 : 43),
    f = new A(
      Math.cos(u) * Math.cos(h),
      Math.sin(u),
      Math.cos(u) * Math.sin(h),
    ),
    m = new Xt(qh(i), i, 0.1, 1e3),
    g = [];
  for (let v = 0; v < 8; v++)
    g.push(
      new A(
        v & 1 ? ls.max.x : ls.min.x,
        v & 2 ? ls.max.y : ls.min.y,
        v & 4 ? ls.max.z : ls.min.z,
      ),
    );
  let _ = (v, x) => {
      (m.position.copy(x).addScaledVector(f, v),
        m.lookAt(x),
        m.updateMatrixWorld());
      let E = { x0: 9, x1: -9, y0: 9, y1: -9 };
      for (let P of g) {
        let R = P.clone().project(m);
        ((E.x0 = Math.min(E.x0, R.x)),
          (E.x1 = Math.max(E.x1, R.x)),
          (E.y0 = Math.min(E.y0, R.y)),
          (E.y1 = Math.max(E.y1, R.y)));
      }
      return E;
    },
    p = ls.getCenter(new A()).setY(0.1),
    d = 30;
  for (let v = 0; v < 3; v++) {
    let x = 4,
      E = 300;
    for (let b = 0; b < 26; b++) {
      let B = (x + E) / 2,
        X = _(B, p);
      X.x1 - X.x0 <= 2 * c && X.y1 - X.y0 <= a - l ? (E = B) : (x = B);
    }
    d = E;
    let P = _(d, p),
      R = Math.tan(Dt.degToRad(m.fov / 2)) * d,
      C = R * i,
      O = new A().setFromMatrixColumn(m.matrixWorld, 0),
      y = new A().setFromMatrixColumn(m.matrixWorld, 1);
    p = p
      .clone()
      .addScaledVector(O, ((P.x0 + P.x1) / 2) * C)
      .addScaledVector(y, ((P.y0 + P.y1) / 2 - (a + l) / 2) * R);
  }
  return { pos: p.clone().addScaledVector(f, d), tgt: p, dist: d };
}
function Dy(i) {
  return 2 * Math.atan(18 / i);
}
function fl(i) {
  let e = Be.aspect,
    t = Dy(i),
    n = 2 * Math.atan(Math.tan(t / 2) / e);
  return (
    (n = Math.min(n, Dt.degToRad(e < 1 ? 82 : 75))),
    (n = Math.max(n, Dt.degToRad(40))),
    Dt.radToDeg(n)
  );
}
var nt = null,
  Pt = "luxe",
  Xn = "day";
function Uy(i) {
  let e = nt.variants[i + "_day"],
    t = nt.variants[i + "_night"],
    n =
      e && t && t.floorMedian ? Math.log2(e.floorMedian / t.floorMedian) : 0.4;
  return Dt.clamp(n * 0.5 - 0.55, -0.8, 1.5) + _y;
}
var il = -1.2,
  Ph = -0.25,
  ba = (i) => (i && i.out ? (He ? Ph : il) : Ny(i)),
  Ny = (i) =>
    (i && i.ev !== void 0 ? i.ev : 0.8) +
    (i && i.kind === "orbit" && Af[Pt] !== void 0 ? Af[Pt] : yy[Pt]) +
    (He ? Uy(Pt) : 0),
  At = null,
  yn = null,
  gi = null;
function Yh(i) {
  if (
    (i.scr !== void 0 && typeof vl == "function" && vl(i.scr),
    i.kind === "tour")
  ) {
    Oh(
      r1,
      cl.find((r) => r.id === "park"),
      "tour",
    );
    return;
  }
  if (i.kind === "tour2") {
    Oh(
      a1,
      cl.find((r) => r.id === "schoolgate"),
      "school",
    );
    return;
  }
  (i.route && ms !== 2 && gs(),
    su("go"),
    (at.enabled = !0),
    i.doors !== void 0 && _i(i.doors, 1),
    (yn = i));
  for (let r in xi)
    xi[r].setAttribute("aria-pressed", r === i.id ? "true" : "false");
  if (i.id === "walk")
    for (let r in xi) xi[r].setAttribute("aria-pressed", "false");
  let e, t, n;
  if (i.kind === "orbit") {
    xs = "orbit";
    let r = Ly();
    ((t = r.tgt),
      (e = r.pos),
      (n = qh),
      (at.enablePan = !0),
      (at.enableZoom = !0),
      (at.rotateSpeed = 0.7),
      (at.minDistance = 3),
      (at.maxDistance = Math.max(70, r.dist * 1.8)),
      (at.maxPolarAngle = 0.49 * Math.PI),
      (at.minPolarAngle = 0),
      (Ch.hidden = !1),
      (gr.textContent = yi
        ? "\u62D6\u66F3\u65CB\u8F49\u30FB\u9EDE\u5169\u4E0B\u5730\u677F\u9032\u5165"
        : "\u62D6\u66F3\u65CB\u8F49\u30FB\u96D9\u64CA\u5730\u677F\u9032\u5165"));
  } else {
    xs = "eye";
    let r;
    if (i.eyeW) ((e = i.eyeW.clone()), (r = i.lookW.clone()));
    else {
      let o = i.eye;
      if (((e = new A(It(o[0]), o[2], Ut(o[1]))), i.dir)) {
        let a = Dt.degToRad(i.dir[0]),
          l = Dt.degToRad(i.dir[1]);
        r = e
          .clone()
          .add(
            new A(
              Math.sin(a) * Math.cos(l),
              Math.sin(l),
              -Math.cos(a) * Math.cos(l),
            ),
          );
      } else {
        let a = i.look;
        r = new A(It(a[0]), a[2], Ut(a[1]));
      }
    }
    ((t = e.clone().add(r.sub(e).normalize().multiplyScalar(0.15))),
      (n = () => fl(i.lens)),
      (at.enablePan = !1),
      (at.enableZoom = !1),
      (at.rotateSpeed = -0.35),
      (at.minDistance = 0.01),
      (at.maxDistance = 1),
      (at.minPolarAngle = 0.15 * Math.PI),
      (at.maxPolarAngle = 0.85 * Math.PI),
      (Ch.hidden = !0),
      (gr.textContent = yi
        ? "\u62D6\u66F3\u74B0\u9867\u30FB\u9EDE\u5169\u4E0B\u5730\u677F\u8D70\u904E\u53BB"
        : "\u62D6\u66F3\u74B0\u9867\u30FB\u96D9\u64CA\u5730\u677F\u8D70\u904E\u53BB"));
  }
  gi = null;
  let s = Math.abs(e.y - Be.position.y) > 20;
  ((At = {
    t0: performance.now(),
    dur: s ? 1500 : 900,
    fade: s,
    p0: Be.position.clone(),
    t0v: at.target.clone(),
    p1: e,
    t1: t,
    f0: Be.fov,
    f1: typeof n == "function" ? n(Be.aspect) : n,
    e0: Ge.toneMappingExposure,
    e1: Math.pow(2, ba(i)),
  }),
    Nt());
}
var sl = {},
  ps = {},
  $f = [],
  jf = [],
  Rt = null,
  rl = null,
  Ni = null,
  da = null,
  pl = null,
  Qf = null,
  xh = null,
  Nn = null,
  Ih = null,
  Ml = [],
  ep = new Map(),
  tp = new Map();
async function np(i, e) {
  if (!sl[i]) {
    let t = nt.variants[i];
    sl[i] = await Vh(await Hh("light/" + i + ".png", e), t.bytes);
  }
  return sl[i];
}
async function ip(i, e) {
  if (!ps[i]) {
    let t = await Promise.all(Sh.map((s) => yr(vy(i, s), e))),
      n = {};
    (Sh.forEach((s, r) => (n[s] = t[r])), (ps[i] = n));
  }
  return ps[i];
}
function Fy(i, e) {
  ((Un.bakeMax.value = nt.variants[i].bakeMax),
    (Un.specRef.value = nt.variants[i].floorMedian || 0.05));
  for (let { g: t, r: n } of jf) {
    let s = t.getAttribute("bake");
    (s.array.set(new Uint16Array(e, n.bake, n.n * 3)), (s.needsUpdate = !0));
  }
  Zh();
}
function Zh() {
  for (let i in _s) {
    let e = Fi[i] || {},
      t = He && e.ekn ? e.ekn : e.ek;
    if (t)
      for (let n of [_s[i].m, _s[i].cap])
        n && (n.emissiveIntensity = t * Un.specRef.value);
  }
}
function Oy(i) {
  let e = wh[i] || {};
  for (let t of $f) {
    let n = e[t.name],
      s = t.attr.array;
    if (!n) s.set(t.orig);
    else {
      let r = new Ae(n[0]),
        o = n[1];
      for (let a = 0; a < s.length; a += 3)
        ((s[a] = t.orig[a] * (1 - o) + r.r * o),
          (s[a + 1] = t.orig[a + 1] * (1 - o) + r.g * o),
          (s[a + 2] = t.orig[a + 2] * (1 - o) + r.b * o));
    }
    t.attr.needsUpdate = !0;
  }
}
function sp(i, e) {
  Oy(i);
  let t = ua[i];
  for (let n in _s) {
    let s = Object.assign({}, Fi[n], t[n] || {});
    for (let r of [_s[n].m, _s[n].cap])
      if (
        r &&
        (s.vc || r.color.set(s.c || "#FFFFFF"),
        (r.roughness = s.r ?? 0.5),
        (r.metalness = s.m ?? 0),
        r.sheen > 0 && s.sh && (r.sheen = s.sh),
        s.map && e[s.map])
      ) {
        let o = r.map;
        ((r.map = Rh(s, e[s.map])), o && o.dispose());
      }
  }
  for (let n of Xh) {
    let s = t[n.userData.name] || {},
      r = Fi[n.userData.name];
    n.material.uniforms.albedo.value.set(
      s.bc || s.c || r.bc || r.c || "#FFFFFF",
    );
  }
  for (let n of it.children) {
    n.isMesh && n.name === "molding" && (window.__PLAYON ? (n.__pv = i === "neo") : (n.visible = i === "neo")); n.isMesh && n.name === "molding__p" && (n.visible = !!window.__PLAYON && i === "neo"); }
  typeof Bh == "function" && Bh(i);
  for (let n in ps)
    if (n !== i) {
      for (let s in ps[n]) ps[n][s].dispose();
      delete ps[n];
    }
}
var ga = null;
function rp() {
  if (!ga) return;
  let i = nt.variants[Pt + "_" + Xn],
    e = My[Pt];
  if (e && i && i.floorMedian) {
    let t = e * i.floorMedian,
      n = Un.bakeGain.value;
    ga.color.setRGB(t * n.x, t * n.y, t * n.z);
  } else ga.color.setRGB(0.042, 0.031, 0.021);
}
function ap(i) {
  ((He = i),
    document.body.classList.toggle("night", He),
    (Rt.intensity = He ? 0 : nt.sunStrength),
    (Ea = He ? da : Ni),
    (it.backgroundIntensity = He ? 1 : nt.skyScale * gl),
    $h ? jh(He) : it.fog.color.copy(He ? Ma : mr),
    up(He));
  for (let e of Ml)
    ((e.envMap = He ? Qf : pl),
      (e.envMapIntensity = e.userData.envi
        ? e.userData.envi * (He ? 2.2 : nt.skyScale)
        : 1));
  for (let e of wa) e.material = He ? tp.get(e) : ep.get(e);
  (vs && (vs.envMapIntensity = He ? 0.9 : 0.15),
    (qn.strength = He ? 0.14 : 0.22),
    (qn.threshold = He ? 2 : 1.6),
    (qn.radius = He ? 0.3 : 0.55),
    (Un.bakeGain.value = He ? gy : ma));
  for (let e of Hf)
    He
      ? e.color.copy(e.userData.base).multiplyScalar(e.userData.nk)
      : e.color.copy(e.userData.day);
  for (let e of Vf) e.visible = He;
  for (let e of Gf) e.visible = !He;
  (Zh(), (An = ""), yl());
}
function ys() {
  let i = Ge.clippingPlanes,
    e = it.background;
  ((Ge.clippingPlanes = []), (it.background = Ea));
  for (let n of wa) n.visible = !0;
  for (let n of Wh) n.visible = !1;
  ((Ge.shadowMap.needsUpdate = !0),
    vn &&
      (vn.position.copy(Nn.position),
      vn.updateMatrixWorld(),
      (vn.visible = !xr && dl() === "photo")),
    cn &&
      (cn.position.copy(Nn.position),
      cn.updateMatrixWorld(),
      (cn.visible = !xr && dl() === "earth")),
    Nn.update(Ge, it));
  let t = rl.fromCubemap(Ih.texture).texture;
  for (let n of hl) n.envMap = t;
  (vs && (vs.envMap = t),
    xh && xh.dispose(),
    (xh = t),
    (Ge.clippingPlanes = i),
    (it.background = e),
    (An = ""));
}
function Lh() {
  let i = ol;
  for (let e of ya) {
    let t = qf[e.id],
      n = !!nt.variants[e.id + "_" + Xn] || !!nt.variants[e.id + "_day"];
    ((t.disabled = i || !n),
      (t.title = n
        ? ""
        : "\u9019\u500B\u98A8\u683C\u9084\u5728\u8A08\u7B97\u5149\u7DDA"),
      t.setAttribute("aria-checked", e.id === Pt ? "true" : "false"));
  }
  for (let e of kh) {
    let t = Yf[e.id],
      n = !!nt.variants[Pt + "_" + e.id];
    ((t.disabled = i || !n),
      (t.title = n
        ? ""
        : "\u9019\u500B\u6642\u6BB5\u9084\u5728\u8A08\u7B97\u5149\u7DDA"),
      t.setAttribute("aria-checked", e.id === Xn ? "true" : "false"));
  }
}
var By = {
    luxe: "\u8F15\u5962\u98A8\uFF1A\u767D\u5E95\u7070\u91D1\u7D0B\u5927\u7406\u77F3\u4EAE\u9762\u5730\u576A\uFF08\u81E5\u5BA4\u6728\u5730\u677F\uFF09\u3001\u9999\u6AB3\u7070\u70E4\u6F06\u6AC3\u9AD4\u3001\u9999\u6AB3\u91D1\u4E94\u91D1\u3001\u5927\u7406\u77F3\u5C0D\u82B1\u96FB\u8996\u7246\uFF1B\u7070\u8272\u7D68\u5E03\u6C99\u767C\u3001\u7956\u6BCD\u7DA0\u7D72\u7D68\u55AE\u6905\u3002\u683C\u5C40\uFF1AU3P69A\uFF08\u4E3B\u81E5 A\uFF09\u3002",
    neo: "\u6CD5\u5F0F\u98A8\uFF08\u767D\u8272\u7CFB\uFF09\uFF1A\u767D\u8272\u5927\u7406\u77F3\u4EBA\u5B57\u62FC\u5730\u576A\u3001\u81E5\u5BA4\u6DFA\u767D\u6A61\u6728\u4EBA\u5B57\u62FC\u3001\u5EDA\u623F\u8207\u7384\u95DC\u767D\u7070\u659C\u683C\u78DA\uFF1B\u767D\u8272\u7246\u9762\u8207\u6AC3\u9AD4\u3001\u5929\u82B1\u51A0\u9802\u7DDA\u677F\u3001\u7246\u9762\u6846\u7DDA\u677F\u8207\u8170\u7DDA\u3001\u6AC3\u9580\u8207\u623F\u9580\u7DDA\u677F\u3001\u540A\u71C8\u5929\u82B1\u5713\u76E4\uFF1B\u767D\u8272\u7CFB\u5BB6\u5177\u3001\u9999\u6AB3\u91D1\u4E94\u91D1\u3002\u683C\u5C40\u540C\u8F15\u5962\u98A8\u3002",
  },
  ky = document.getElementById("desc");
function al(i) {
  ((Cy.textContent = i), (ky.textContent = By[Pt] || ""));
}
function op() {
  return (
    ya.find((i) => i.id === Pt).name +
    "\u30FB" +
    kh.find((i) => i.id === Xn).note
  );
}
var ol = !1;
async function lp(i, e) {
  if (ol || (i === Pt && e === Xn)) return;
  nt.variants[i + "_" + e] || (e = nt.variants[i + "_day"] ? "day" : e);
  let t = i + "_" + e;
  if (nt.variants[t]) {
    ((ol = !0), Lh(), al("\u8F09\u5165\u4E2D\u2026"));
    try {
      let [n, s] = await Promise.all([
        np(t),
        i !== Pt ? ip(i) : Promise.resolve(null),
      ]);
      (Fy(t, n),
        s && sp(i, s),
        (e === "night") !== He && ap(e === "night"),
        (Pt = i),
        (Xn = e),
        ys(),
        At
          ? (At.e1 = Math.pow(2, ba(yn)))
          : (gi = {
              t0: performance.now(),
              e0: Ge.toneMappingExposure,
              e1: Math.pow(2, ba(yn)),
            }));
      try {
        localStorage.setItem(
          "u3-69-look",
          JSON.stringify({ style: i, time: e }),
        );
      } catch {}
      (rp(), al(op()));
    } catch (n) {
      (console.error(n),
        al("\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u518D\u6309\u4E00\u6B21"));
    }
    ((ol = !1), Lh(), Nt());
  }
}
var vn = null,
  cn = null,
  Dh = "earth",
  vi = { day: null, night: null },
  ll = `uniform sampler2D tPhoto; uniform sampler2D tAlpha; uniform vec3 uR; uniform vec3 uU; uniform vec3 uF; uniform vec2 uFoc; uniform vec2 uC; uniform float uGain;
varying vec3 vDir;
const mat3 INV_R2S = mat3(vec3(0.627409440, 0.069124839, 0.016423358), vec3(0.329260252, 0.919548614, 0.088047848), vec3(0.043271894, 0.011320767, 0.895616714));
const mat3 INV_OUTSET = mat3(vec3(0.899796956, 0.111420989, 0.111420989), vec3(0.087199619, 0.875575586, 0.087199619), vec3(0.013003425, 0.013003425, 0.801379392));
const mat3 INV_INSET = mat3(vec3(1.197441077, -0.196474626, -0.146557417), vec3(-0.144261513, 1.354095131, -0.108284059), vec3(-0.053179564, -0.157620505, 1.254841476));
const mat3 INV_S2R = mat3(vec3(1.660512276, -0.124563464, -0.018167504), vec3(-0.587704679, 1.132949121, -0.100559587), vec3(-0.072866367, -0.008272362, 1.118717035));
float agxPoly( float x ) { float x2 = x * x; float x4 = x2 * x2; return 15.5 * x4 * x2 - 40.14 * x4 * x + 31.96 * x4 - 6.868 * x2 * x + 0.4298 * x2 + 0.1191 * x - 0.00232; }
float invPoly( float y ) { float lo = 0.0; float hi = 1.0; for ( int i = 0; i < 16; i ++ ) { float m = 0.5 * ( lo + hi ); if ( agxPoly( m ) < y ) lo = m; else hi = m; } return 0.5 * ( lo + hi ); }
vec3 invAgX( vec3 l ) {
  vec3 c = INV_R2S * l;
  c = pow( max( c, vec3( 0.0 ) ), vec3( 1.0 / 2.2 ) );
  c = clamp( INV_OUTSET * c, vec3( -0.00232 ), vec3( 0.99858 ) );
  c = vec3( invPoly( c.r ), invPoly( c.g ), invPoly( c.b ) );
  c = exp2( c * ( 4.026069 + 12.47393 ) - 12.47393 );
  return max( INV_S2R * ( INV_INSET * c ), vec3( 0.0 ) );
}
void main() {
  vec3 d = normalize( vDir );
  float z = dot( d, uF );
  if ( z < 0.05 ) discard;
  vec2 uv = uC + uFoc * vec2( dot( d, uR ), dot( d, uU ) ) / z;
  if ( uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0 ) discard;
  float a = texture2D( tAlpha, uv ).r;
  if ( a < 0.004 ) discard;
  gl_FragColor = vec4( invAgX( texture2D( tPhoto, uv ).rgb ) * uGain, a );
}`;
function zy(i, e, t) {
  let n = Dt.degToRad(t.yaw),
    s = Dt.degToRad(t.pitch),
    r = new A(
      Math.sin(n) * Math.cos(s),
      Math.sin(s),
      -Math.cos(n) * Math.cos(s),
    ),
    o = new A(Math.cos(n), 0, Math.sin(n)),
    a = new A().crossVectors(o, r).normalize();
  ((e.colorSpace = xn), (e.needsUpdate = !0));
  let l = new bt({
      uniforms: {
        tPhoto: { value: i },
        tAlpha: { value: e },
        uR: { value: o },
        uU: { value: a },
        uF: { value: r },
        uFoc: { value: new se(t.f / t.w, t.f / t.h) },
        uC: { value: new se(t.cx / t.w, 1 - t.cy / t.h) },
        uGain: { value: 1 },
      },
      vertexShader:
        "varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }",
      fragmentShader: ll,
      side: qt,
      transparent: !0,
      depthWrite: !1,
      depthTest: !0,
      fog: !1,
    }),
    c = new dt(new Qr(40, 72, 36), l);
  return ((c.frustumCulled = !1), (c.renderOrder = -10), (c.visible = !1), c);
}
var Cf = "earth/",
  Jh = ll.slice(ll.indexOf("const mat3 INV_R2S"), ll.indexOf("void main()")),
  cp = "tex/tv_sea.jpg",
  ml = 1,
  cr = null;
async function Hy() {
  let i = it.getObjectByName("screen");
  if (!i) return;
  let e = i.geometry,
    t = e.getAttribute("position").array,
    n = e.getAttribute("normal").array,
    s = e.index.array,
    r = 1e9,
    o = -1e9,
    a = 1e9,
    l = -1e9,
    c = 1e9,
    h = 0;
  for (let g = 0; g < s.length; g += 3) {
    let _ = s[g] * 3,
      p = s[g + 1] * 3,
      d = s[g + 2] * 3,
      v = t[p] - t[_],
      x = t[p + 1] - t[_ + 1],
      E = t[p + 2] - t[_ + 2],
      P = t[d] - t[_],
      R = t[d + 1] - t[_ + 1],
      C = t[d + 2] - t[_ + 2],
      O = 0.5 * Math.hypot(x * C - E * R, E * P - v * C, v * R - x * P);
    if (!(O < 0.3) && !((n[_ + 2] + n[p + 2] + n[d + 2]) / 381 > -0.5)) {
      for (let y of [_, p, d])
        ((r = Math.min(r, t[y])),
          (o = Math.max(o, t[y])),
          (a = Math.min(a, t[y + 1])),
          (l = Math.max(l, t[y + 1])),
          (c = Math.min(c, t[y + 2])));
      h += O;
    }
  }
  if (h < 1) return;
  let u = await yr(cp);
  cr = new Kt({ map: u, fog: !1 });
  let f = { value: ml / Ge.toneMappingExposure };
  ((cr.userData.uGain = f),
    (cr.onBeforeCompile = (g) => {
      ((g.uniforms.uGain = f),
        (g.fragmentShader = g.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform float uGain;
` + Jh,
          )
          .replace(
            "#include <opaque_fragment>",
            "gl_FragColor = vec4( invAgX( outgoingLight ) * uGain, 1.0 );",
          )));
    }));
  let m = new dt(new jn(o - r, l - a), cr);
  ((m.rotation.y = Math.PI),
    m.position.set((r + o) / 2, (a + l) / 2, c - 0.002),
    (m.name = "tvpicture"),
    m.updateMatrix(),
    (m.matrixAutoUpdate = !1),
    it.add(m),
    Nn && typeof ys == "function" && ys(),
    Nt(),
    (window.tvReady = !0));
}
var Vy = `uniform sampler2D tN; uniform sampler2D tE; uniform sampler2D tS;
uniform vec3 mN; uniform vec3 mE; uniform vec3 mS; uniform vec3 pN; uniform vec3 pE; uniform vec3 pS;
uniform vec4 uBox; uniform vec4 uWallA; uniform vec4 uWallB; uniform float uGround; uniform float uGain;
varying vec3 vDir;
${Jh}
uniform vec3 uZen;
float kSky( float e ) { return pow( clamp( ( e - 16.5 ) / 73.5, 0.0, 1.0 ), 0.6 ); }
void main() {
  vec3 d = normalize( vDir ); vec3 O = cameraPosition;
  int face = 0;
  if ( O.x > uBox.y ) face = 1;
  else if ( O.z < uBox.z ) face = 0;
  else if ( O.z > uBox.w ) face = 2;
  else {
    float tx = d.x > 1e-5 ? ( uBox.y - O.x ) / d.x : ( d.x < -1e-5 ? ( uBox.x - O.x ) / d.x : 1e9 );
    float tz = d.z > 1e-5 ? ( uBox.w - O.z ) / d.z : ( d.z < -1e-5 ? ( uBox.z - O.z ) / d.z : 1e9 );
    if ( tx < tz ) face = d.x > 0.0 ? 1 : 0; else face = d.z > 0.0 ? 2 : 0;
  }
  vec3 P = face == 1 ? pE : ( face == 2 ? pS : pN );
  vec3 m = face == 1 ? mE : ( face == 2 ? mS : mN );
  float t = d.y < -1e-5 ? ( uGround - O.y ) / d.y : 1e9;
  if ( face == 2 ) {
    if ( d.z > 1e-5 ) { float ta = ( uWallA.x - O.z ) / d.z; vec3 q = O + ta * d; if ( ta > 0.0 && ta < t && q.x > uWallA.y && q.x < uWallA.z && q.y < uWallA.w ) t = ta; }
    if ( d.x < -1e-5 ) { float tb = ( uWallB.x - O.x ) / d.x; vec3 q = O + tb * d; if ( tb > 0.0 && tb < t && q.z > uWallB.y && q.z < uWallB.z && q.y < uWallB.w ) t = tb; }
  }
  vec3 dd = t < 1e8 ? normalize( O + t * d - P ) : d;
  float az = degrees( atan( dd.x, -dd.z ) );
  if ( az < m.x ) az += 360.0;
  if ( az > m.y ) az -= 360.0;
  float el = degrees( asin( clamp( dd.y, -1.0, 1.0 ) ) );
  vec2 uv = vec2( clamp( ( az - m.x ) / ( m.y - m.x ), 0.0, 1.0 ), clamp( ( el + 90.0 ) / ( m.z + 90.0 ), 0.0, 1.0 ) );
  vec3 c = face == 1 ? texture2D( tE, uv ).rgb : ( face == 2 ? texture2D( tS, uv ).rgb : texture2D( tN, uv ).rgb );
  if ( el > m.z ) { float k0 = kSky( m.z ); c = mix( c, uZen, ( kSky( el ) - k0 ) / ( 1.0 - k0 ) ); }
  gl_FragColor = vec4( invAgX( c ) * uGain, 1.0 );
}`,
  hp = [0.034, 0.107, 0.392],
  Gy = [0.0016, 0.0026, 0.0072];
function up(i) {
  if (!cn) return;
  let e = i && vi.night ? vi.night : vi.day,
    t = cn.material.uniforms;
  ((t.tN.value = e.N),
    (t.tE.value = e.E),
    (t.tS.value = e.S),
    t.uZen.value.set(...(i && vi.night ? Gy : hp)));
}
function Wy(i, e) {
  let t = (o) => new A(o[0], o[1], o[2]),
    n = (o) => new A(e[o].az0, e[o].az1, e[o].top),
    s = new bt({
      uniforms: {
        tN: { value: i.N },
        tE: { value: i.E },
        tS: { value: i.S },
        mN: { value: n("N") },
        mE: { value: n("E") },
        mS: { value: n("S") },
        pN: { value: t(e.pts.N) },
        pE: { value: t(e.pts.E) },
        pS: { value: t(e.pts.S) },
        uBox: { value: new yt(...e.box) },
        uWallA: { value: new yt(...e.wallA) },
        uWallB: { value: new yt(...e.wallB) },
        uGround: { value: e.ground },
        uGain: { value: 1 },
        uZen: { value: new A(...hp) },
      },
      vertexShader:
        "varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }",
      fragmentShader: Vy,
      side: qt,
      transparent: !0,
      depthWrite: !1,
      depthTest: !0,
      fog: !1,
    }),
    r = new dt(new Qr(40, 72, 36), s);
  return ((r.frustumCulled = !1), (r.renderOrder = -10), (r.visible = !1), r);
}
async function Xy() {
  try {
    let i = await fetch(Cf + "earth.json").then((t) => t.json()),
      e = async (t) => {
        let n = await Promise.all(
            ["N", "E", "S"].map((r) => yr(Cf + "earth_" + r + t + ".jpg")),
          ),
          s = {};
        return (
          ["N", "E", "S"].forEach((r, o) => {
            let a = n[o];
            ((a.generateMipmaps = !1),
              (a.minFilter = _n),
              (a.anisotropy = 1),
              (a.needsUpdate = !0),
              (s[r] = a));
          }),
          s
        );
      };
    ((vi.day = await e("")),
      (cn = Wy(vi.day, i)),
      it.add(cn),
      (vi.night = await e("_n")),
      up(He),
      (dr = -1),
      yl(),
      Nn && ys(),
      (window.earthReady = !0),
      Nt());
  } catch (i) {
    (console.error("earth", i),
      (window.earthError = String((i && i.stack) || i)));
  }
}
var dr = -1;
function qy() {
  if (!nt) return;
  let i = Math.pow(2, He ? Ph : il),
    e = Math.pow(i / Ge.toneMappingExposure, 0.7);
  if (Math.abs(e - dr) > 0.003 || dr < 0) {
    ((dr = e),
      (it.backgroundIntensity = (He ? 1 : nt.skyScale * gl) * e),
      it.fog.color.copy(He ? Ma : mr).multiplyScalar(e));
    for (let n of gn)
      for (let s of [n.day, n.night])
        s && s.userData.base && s.color.copy(s.userData.base).multiplyScalar(e);
    (vn && (vn.material.uniforms.uGain.value = e / Math.pow(2, il)),
      cn && (cn.material.uniforms.uGain.value = e / Math.pow(2, He ? Ph : il)));
    for (let n of Ml)
      (n.userData.baseC || (n.userData.baseC = n.color.clone()),
        n.color.copy(n.userData.baseC).multiplyScalar(e));
  }
  let t = ti(Be.position.y) ? "model" : dl();
  (vn &&
    ((vn.visible = t === "photo" && An.endsWith("i")),
    vn.position.copy(Be.position),
    vn.updateMatrixWorld()),
    cn &&
      ((cn.visible = t === "earth" && An.endsWith("i")),
      cn.position.copy(Be.position),
      cn.updateMatrixWorld()));
}
var Kh = "env/",
  gl = 0.24,
  fr = 2.2,
  vh = 0.42,
  pr = 1.3,
  Tn = new ui();
Tn.matrixAutoUpdate = !1;
var gn = [],
  $h = !1,
  _r = null,
  yh = [1, 0.965, 0.9],
  Mh = [0.8, 0.88, 1],
  on = (i, e) => {
    let t = Math.sin(i * 12.9898 + e * 78.233) * 43758.5453;
    return t - Math.floor(t);
  };
function cs(i, e, t, n) {
  let s = Math.max(0, i * n[0] + e * n[1] + t * n[2]),
    r = (0.75 * s) / n[2],
    o = 0.25 * (0.5 + 0.5 * t),
    a = 0.045 * (0.5 - 0.5 * t);
  return [
    r * yh[0] + o * Mh[0] + a,
    r * yh[1] + o * Mh[1] + a,
    r * yh[2] + o * Mh[2] + a * 0.9,
  ];
}
var ln = class {
  constructor(e) {
    ((this.G = e), (this.p = []), (this.uv = []), (this.c = []), (this.i = []));
  }
  v(e, t, n, s, r, o) {
    return (
      this.p.push(e, n - this.G, -t),
      this.uv.push(s, r),
      this.c.push(o[0], o[1], o[2]),
      this.p.length / 3 - 1
    );
  }
  quad(e, t, n) {
    let s = this.v(...e[0], ...t[0], n[0]),
      r = this.v(...e[1], ...t[1], n[1]),
      o = this.v(...e[2], ...t[2], n[2]),
      a = this.v(...e[3], ...t[3], n[3]);
    this.i.push(s, r, o, s, o, a);
  }
  get empty() {
    return this.i.length === 0;
  }
  build() {
    let e = new _t();
    return (
      e.setAttribute("position", new st(this.p, 3)),
      e.setAttribute("uv", new st(this.uv, 2)),
      e.setAttribute("color", new st(this.c, 3)),
      e.setIndex(
        this.p.length / 3 > 65535 ? new er(this.i, 1) : new Qs(this.i, 1),
      ),
      e.computeBoundingSphere(),
      e
    );
  }
};
function $t(i, e, t, n, s, r, o, a = {}) {
  let l = _r.sun,
    c = a.alb || [1, 1, 1],
    h = a.tex,
    u = a.ao ?? (r < 0.5 ? 0.72 : 1),
    f = (g, _, p, d = 1) => {
      let v = cs(g, _, p, l);
      return [v[0] * c[0] * d, v[1] * c[1] * d, v[2] * c[2] * d];
    },
    m = [
      [[e, t], [n, t], 0, -1],
      [[n, t], [n, s], 1, 0],
      [[n, s], [e, s], 0, 1],
      [[e, s], [e, t], -1, 0],
    ];
  if (a.walls !== !1)
    for (let [g, _, p, d] of m) {
      let v = Math.hypot(_[0] - g[0], _[1] - g[1]),
        x = f(p, d, 0),
        E = f(p, d, 0, u),
        P = 0,
        R = 0,
        C = 0,
        O = 0;
      (h &&
        ((P = h.uoff || 0),
        (R = P + v / h.w),
        (C = (r - (h.zref ?? 0) + (h.voff || 0)) / h.h),
        (O = C + (o - r) / h.h)),
        i.quad(
          [
            [g[0], g[1], r],
            [_[0], _[1], r],
            [_[0], _[1], o],
            [g[0], g[1], o],
          ],
          [
            [P, C],
            [R, C],
            [R, O],
            [P, O],
          ],
          [E, E, x, x],
        ));
    }
  if (a.top !== !1) {
    let g = f(0, 0, 1),
      _ = a.topUV || ((d, v) => [d / 20, v / 20]);
    (a.topGB || i).quad(
      [
        [e, t, o],
        [n, t, o],
        [n, s, o],
        [e, s, o],
      ],
      [_(e, t), _(n, t), _(n, s), _(e, s)],
      [g, g, g, g],
    );
  }
  if (a.bottom) {
    let g = f(0, 0, -1);
    i.quad(
      [
        [e, s, r],
        [n, s, r],
        [n, t, r],
        [e, t, r],
      ],
      [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ],
      [g, g, g, g],
    );
  }
}
function dp(i) {
  let e = new _t();
  for (let t of ["position", "normal", "uv"]) {
    let n = i.map((a) => a.getAttribute(t).array),
      s = n.reduce((a, l) => a + l.length, 0),
      r = new Float32Array(s),
      o = 0;
    for (let a of n) (r.set(a, o), (o += a.length));
    e.setAttribute(t, new lt(r, t === "uv" ? 2 : 3));
  }
  return e;
}
function Uh(i, e, t) {
  let n = new Di(i.map(([r, o]) => new se(r, o))),
    s = new jr(n, { depth: t - e, bevelEnabled: !1, curveSegments: 1 });
  return (
    s.rotateX(-Math.PI / 2),
    s.translate(0, e, 0),
    s.index ? s.toNonIndexed() : s
  );
}
function xt(i) {
  let e = (s, r, o, a) =>
      Object.assign(
        new Kt({
          map: s || null,
          vertexColors: !!o,
          color: new Ae(r[0], r[1], r[2]),
          side: i.side || In,
        }),
        a || {},
      ),
    t = e(i.day, i.dk || [fr, fr, fr], i.vc !== !1, i.dayExtra),
    n = e(i.night, i.nk || [vh, vh, vh], i.nvc, i.nightExtra);
  if (
    ((t.userData.base = t.color.clone()),
    (n.userData.base = n.color.clone()),
    i.transparent)
  )
    for (let s of [t, n])
      ((s.transparent = !0), (s.opacity = i.opacity), (s.depthWrite = !1));
  return { day: t, night: n };
}
function mn(i, e, t) {
  let n = new dt(i, He ? e.night : e.day);
  return (
    (n.matrixAutoUpdate = !1),
    t && (n.renderOrder = t),
    Tn.add(n),
    gn.push({ mesh: n, day: e.day, night: e.night }),
    n
  );
}
async function fp(i, e) {
  let t = await yr(Kh + i + ".jpg");
  if (yi && e && t.image && t.image.width > 2048) {
    let n = document.createElement("canvas");
    ((n.width = n.height = 2048),
      n.getContext("2d").drawImage(t.image, 0, 0, 2048, 2048));
    let s = new pi(n);
    return ((s.colorSpace = Et), (s.anisotropy = t.anisotropy), t.dispose(), s);
  }
  return t;
}
function lr(i, e) {
  let t = _r.arrays[e],
    n = new Int16Array(i, t.off, t.n * t.fields),
    s = [];
  for (let r = 0; r < t.n; r++) {
    let o = [];
    for (let a = 0; a < t.fields; a++) o.push(n[r * t.fields + a] * t.scale[a]);
    s.push(o);
  }
  return s;
}
function hr(i, e) {
  let t = new Do(1, i),
    n = t.getAttribute("position"),
    s = _r.sun,
    r = new Float32Array(n.count * 3);
  for (let o = 0; o < n.count; o++) {
    let a = n.getX(o),
      l = n.getY(o),
      c = n.getZ(o),
      h = Math.hypot(a, l, c) || 1,
      u = a / h,
      f = l / h,
      m = c / h,
      g =
        0.16 * Math.sin(u * 4.1 + e) * Math.cos(m * 3.7 - e) +
        0.1 * Math.sin(f * 5.3 + u * 2.1 + e * 2),
      _ = 1 + g;
    n.setXYZ(o, u * _, f * _ * (f < 0 ? 0.8 : 1), m * _);
    let p = u,
      d = -m,
      v = f,
      x = cs(p, d, v, s),
      E = (0.5 + 0.5 * (f * 0.5 + 0.5)) * (0.86 + 0.9 * g),
      P = 0.07 * Math.max(0, -(p * s[0] + d * s[1] + v * s[2]));
    ((r[o * 3] = (x[0] + P) * E),
      (r[o * 3 + 1] = (x[1] + P * 1.1) * E),
      (r[o * 3 + 2] = (x[2] + P * 0.4) * E));
  }
  return (t.setAttribute("color", new lt(r, 3)), t);
}
async function Yy() {
  try {
    let i = await fetch(Kh + "env.json").then((w) => w.json()),
      e = atob(i.bin),
      t = new Uint8Array(e.length);
    for (let w = 0; w < e.length; w++) t[w] = e.charCodeAt(w);
    let n = t.buffer;
    (delete i.bin, (_r = i));
    let s = i.G,
      r = i.sun;
    (i.ground.push({ name: "walk", rect: [18, -14, 100, 68], hole: null }),
      i.westLayer &&
        i.ground.push({ name: "west", rect: i.westLayer, hole: null }));
    let o = [
        "photo1",
        "photo1_a",
        "g_walk",
        "g_walk_n",
        ...(i.westLayer ? ["g_west", "g_west_n"] : []),
        "g_near",
        "g_near_n",
        "g_mid",
        "g_mid_n",
        "g_far",
        "g_far_n",
        "roof",
        "roof_night",
        "foliage",
        "ikea",
        "ikea_n",
        "ikea_roof",
        "ikea_roof_n",
        "station",
        "station_n",
        "train",
        "train_n",
        ...i.types,
        ...i.types.map((w) => w + "_night"),
      ],
      a = await Promise.all(o.map((w) => fp(w, w === "g_mid"))),
      l = {};
    o.forEach((w, k) => (l[w] = a[k]));
    let c = (w) => ((w.wrapS = w.wrapT = Ii), w);
    for (let w of i.ground) {
      let k = new ln(s),
        [H, $, Q, le] = w.rect,
        Ee = [1, 1, 1],
        fe = w.hole
          ? [
              [H, $, Q, w.hole[1]],
              [H, w.hole[3], Q, le],
              [H, w.hole[1], w.hole[0], w.hole[3]],
              [w.hole[2], w.hole[1], Q, w.hole[3]],
            ]
          : [w.rect],
        De = (ot, Fn) => [(ot - H) / (Q - H), (Fn - $) / (le - $)],
        ct = w.name === "walk" ? 0.004 : w.name === "west" ? 0.002 : 0;
      for (let ot of fe)
        k.quad(
          [
            [ot[0], ot[1], ct],
            [ot[2], ot[1], ct],
            [ot[2], ot[3], ct],
            [ot[0], ot[3], ct],
          ],
          [
            De(ot[0], ot[1]),
            De(ot[2], ot[1]),
            De(ot[2], ot[3]),
            De(ot[0], ot[3]),
          ],
          [Ee, Ee, Ee, Ee],
        );
      let Ht =
          w.name === "near" || w.name === "walk"
            ? {
                polygonOffset: !0,
                polygonOffsetFactor: w.name === "near" ? 2 : 1,
                polygonOffsetUnits: w.name === "near" ? 4 : 2,
              }
            : w.name === "west"
              ? {
                  polygonOffset: !0,
                  polygonOffsetFactor: -0.5,
                  polygonOffsetUnits: -1,
                }
              : void 0,
        Yt = mn(
          k.build(),
          xt({
            day: l["g_" + w.name],
            night: l["g_" + w.name + "_n"],
            vc: !1,
            nk: [pr, pr, pr],
            dayExtra: Ht,
            nightExtra: Ht,
          }),
        );
      (w.name === "near" || w.name === "walk") &&
        ((Yt.name = "envground"), Sa.push(Yt), Sl.push(Yt));
    }
    let h = lr(n, "bldg"),
      u = {},
      f = new ln(s),
      m = new ln(s),
      g = [],
      _ = [];
    for (let w of i.types) u[w] = new ln(s);
    let p = {},
      d = new ln(s);
    for (let w of i.types) p[w] = new ln(s);
    let v = [0.62, 0.6, 0.56],
      x = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 0.95, 0.86],
        [0.93, 0.94, 0.96],
        [0.84, 0.78, 0.7],
        [0.97, 0.92, 0.89],
        [0.8, 0.82, 0.85],
        [0.9, 0.86, 0.78],
      ],
      E = [
        [0.3, 0.42, 0.55],
        [0.52, 0.33, 0.25],
        [0.82, 0.82, 0.8],
        [0.3, 0.52, 0.5],
        [0.52, 0.53, 0.54],
        [0.62, 0.56, 0.42],
      ];
    h.forEach(([w, k, H, $, Q, le, Ee, fe], De) => {
      let ct = i.types[le],
        Ht = i.tile[ct],
        Yt = {
          w: Ht[0],
          h: Ht[1],
          uoff: Math.floor(on(De, 1) * 8) * 0.25,
          voff: (Math.floor(on(De, 2) * 6) * Ht[1]) / 6,
        },
        ot = ct === "bldg3" ? [1, 1, 1] : x[Math.floor(on(De, 5) * x.length)];
      if (fe) {
        $t(p[ct], w, k, H, $, 0, Q, { tex: Yt, topGB: d, alb: ot });
        return;
      }
      $t(u[ct], w, k, H, $, 0, Q, { tex: Yt, topGB: f, alb: ot });
      let Fn = H - w,
        Rn = $ - k;
      if (ct === "bldg4") {
        let ft = Fn > Rn,
          ht = on(De, 11),
          jt = ft ? Fn : Rn;
        if (ht < 0.6) {
          let Qt = 0.35 + 0.35 * on(De, 12),
            T = on(De, 13) < 0.5 ? 0 : (1 - Qt) * jt,
            z = ft
              ? [w + T + 0.4, k + 0.5, w + T + Qt * jt - 0.4, $ - 0.5]
              : [w + 0.5, k + T + 0.4, H - 0.5, k + T + Qt * jt - 0.4];
          ($t(m, z[0], z[1], z[2], z[3], Q, Q + 2.7, {
            alb: [0.74, 0.73, 0.7],
            top: !1,
            ao: 1,
          }),
            $t(
              m,
              z[0] - 0.2,
              z[1] - 0.2,
              z[2] + 0.2,
              z[3] + 0.2,
              Q + 2.7,
              Q + 2.8,
              { alb: E[Math.floor(on(De, 14) * E.length)], ao: 1 },
            ));
        }
        let Vt = 1 + Math.floor(on(De, 15) * 2.2);
        for (let Qt = 0; Qt < Vt; Qt++) {
          let T = w + 1 + (Fn - 3) * on(De, 20 + Qt),
            z = k + 1 + (Rn - 3) * on(De, 30 + Qt);
          $t(m, T, z, T + 1.1, z + 1.1, Q, Q + 1.5, {
            alb: [0.62, 0.64, 0.66],
            ao: 1,
          });
        }
      }
      if (Ee === 1) {
        let ft = Fn * 0.28,
          ht = Rn * 0.28,
          jt = 4.5 + (Q > 60 ? 1.5 : 0);
        $t(m, w + ft, k + ht, H - ft, $ - ht, Q, Q + jt, { alb: v, ao: 1 });
      } else if (Ee === 2) {
        let ft = Fn * 0.12,
          ht = Rn * 0.12,
          jt = 9;
        $t(u.bldg3, w + ft, k + ht, H - ft, $ - ht, Q, Q + jt, {
          tex: { w: 9, h: 19.8, uoff: on(De, 3) },
          topGB: f,
          ao: 1,
        });
        let Vt = Q + jt + 6,
          Qt = [0.92, 0.91, 0.89];
        for (let [z, Y] of [
          [w + ft, k + ht],
          [H - ft - 0.7, k + ht],
          [H - ft - 0.7, $ - ht - 0.7],
          [w + ft, $ - ht - 0.7],
        ])
          $t(m, z, Y, z + 0.7, Y + 0.7, Q + jt, Vt, { alb: Qt, ao: 1 });
        ($t(m, w + ft, k + ht, H - ft, k + ht + 0.5, Vt - 0.8, Vt, {
          alb: Qt,
          ao: 1,
        }),
          $t(m, w + ft, $ - ht - 0.5, H - ft, $ - ht, Vt - 0.8, Vt, {
            alb: Qt,
            ao: 1,
          }),
          $t(m, w + ft, k + ht, w + ft + 0.5, $ - ht, Vt - 0.8, Vt, {
            alb: Qt,
            ao: 1,
          }),
          $t(m, H - ft - 0.5, k + ht, H - ft, $ - ht, Vt - 0.8, Vt, {
            alb: Qt,
            ao: 1,
          }));
        let T = (z, Y) => {
          let J = [
            [w + ft, k + ht],
            [H - ft, k + ht],
            [H - ft, $ - ht],
            [w + ft, $ - ht],
          ];
          for (let q = 0; q < 4; q++) {
            let Ce = J[q],
              Oe = J[(q + 1) % 4];
            g.push(Ce[0], z - s, -Ce[1], Oe[0], z - s, -Oe[1]);
          }
        };
        (T(Vt + 0.05),
          T(Q + jt + 0.05),
          Q > 110 && _.push((w + H) / 2, Vt + 0.6 - s, -(k + $) / 2));
      }
      Q > 95 && Ee !== 2 && _.push(w + 1, Q + 0.5 - s, -(k + 1));
    });
    let P = (w) => (c(w), w.repeat.set(0.5, 0.5), w);
    for (let w of i.types)
      u[w].empty ||
        mn(u[w].build(), xt({ day: c(l[w]), night: P(l[w + "_night"]) }));
    for (let w of i.types)
      p[w].empty ||
        fa.push(
          mn(p[w].build(), xt({ day: c(l[w]), night: P(l[w + "_night"]) })),
        );
    (d.empty ||
      fa.push(mn(d.build(), xt({ day: c(l.roof), night: c(l.roof_night) }))),
      mn(f.build(), xt({ day: c(l.roof), night: c(l.roof_night) })));
    let R = xt({ nk: [0.012, 0.012, 0.013], nvc: !0 }),
      C = i.parts,
      O = {},
      y = {
        body: null,
        plate: [0.7, 0.68, 0.64],
        parapet: [0.66, 0.64, 0.6],
        crown: [0.66, 0.64, 0.6],
        core: [0.66, 0.64, 0.6],
        ikea_body: null,
        ikea_par: [0.012, 0.11, 0.33],
        ikea_yellow: [0.82, 0.6, 0.035],
        ikea_glass: [0.2, 0.27, 0.34],
        crane: [0.86, 0.66, 0.1],
        concrete: [0.6, 0.59, 0.56],
        ikea_canopy: [0.85, 0.85, 0.83],
        ikea_pent: [0.55, 0.55, 0.54],
        ikea_unit: [0.52, 0.53, 0.53],
        ikea_duct: [0.55, 0.57, 0.58],
        mrt_deck: [0.56, 0.54, 0.5],
        mrt_par: [0.62, 0.6, 0.56],
        mrt_pier: [0.54, 0.52, 0.48],
        mrt_conc: null,
        mrt_plat: null,
        train: null,
        stage: [0.7, 0.68, 0.63],
        backstage: [0.8, 0.79, 0.76],
      },
      b = new ln(s),
      B = new ln(s),
      X = new ln(s),
      U = new ln(s),
      I = new ln(s),
      F = [];
    for (let w of i.boxes) {
      let k = C[w[6]];
      if (k === "body" && w[4] < 1 && w[5] > 50 && w[2] > 9) {
        for (let H of [
          [-46, -6.72, 9.35, 5.78, 9.2, w[5]],
          [-46, -6.72, -11.7, 5.78, 0, 9.2],
          [-11.7, -2.5, 0, 5.78, 0, 9.2],
          [-11.7, -6.72, 0, -2.5, 3.2, 9.2],
        ])
          F.push([...H, w[6]]);
        continue;
      }
      if (k === "core" && w[4] > 55 && w[2] > -11.7) {
        F.push([w[0], w[1], -11.7, w[3], w[4], w[5], w[6]]);
        continue;
      }
      F.push(w);
    }
    for (let [w, k, H, $, Q, le, Ee] of F) {
      let fe = C[Ee];
      fe === "body"
        ? $t(
            b,
            w,
            k,
            H,
            $,
            Q,
            Math.abs(le - (s - 0.34)) < 0.01 ? le - 0.03 : le,
            {
              tex: { w: 16, h: 19.8, zref: 0 },
              topGB: m,
              alb: [0.93, 0.85, 0.75],
            },
          )
        : fe === "ikea_body"
          ? $t(B, w, k, H, $, Q, le, {
              tex: { w: 12, h: 24, zref: 0 },
              topGB: X,
              topUV: (De, ct) => [(De - w) / (H - w), (ct - k) / ($ - k)],
            })
          : fe === "mrt_conc" || fe === "mrt_plat"
            ? $t(U, w, k, H, $, Q, le, {
                tex: {
                  w: 12,
                  h: 10.5,
                  zref: Q - (fe === "mrt_plat" ? 0 : 4.2),
                },
                topGB: m,
                bottom: !0,
                ao: 1,
              })
            : fe === "train"
              ? $t(I, w, k, H, $, Q, le, {
                  tex: { w: 21.8, h: 3.6, zref: Q },
                  topGB: m,
                  ao: 1,
                })
              : $t(m, w, k, H, $, Q, le, {
                  alb: y[fe] || [0.6, 0.6, 0.6],
                  bottom: Q > 0.5,
                });
    }
    (mn(b.build(), xt({ day: c(l.bldg5), night: l.bldg5_night })),
      mn(B.build(), xt({ day: c(l.ikea), night: c(l.ikea_n) })),
      mn(X.build(), xt({ day: l.ikea_roof, night: l.ikea_roof_n })),
      mn(
        U.build(),
        xt({ day: c(l.station), night: c(l.station_n), nk: [0.9, 0.9, 0.9] }),
      ),
      mn(
        I.build(),
        xt({ day: c(l.train), night: c(l.train_n), nk: [0.9, 0.9, 0.9] }),
      ));
    for (let [w, k, H] of [
      [i.shell, [0.94, 0.94, 0.92], [0.1, 0.105, 0.12]],
      [i.mroof, [0.66, 0.67, 0.68], [0.02, 0.02, 0.022]],
    ]) {
      let $ = new _t(),
        Q = [];
      for (let fe = 0; fe < w.V.length; fe += 3)
        Q.push(w.V[fe], w.V[fe + 2] - s, -w.V[fe + 1]);
      ($.setAttribute("position", new st(Q, 3)),
        $.setIndex(w.F),
        $.computeVertexNormals());
      let le = $.getAttribute("normal"),
        Ee = new Float32Array(le.count * 3);
      for (let fe = 0; fe < le.count; fe++) {
        let De = cs(le.getX(fe), -le.getZ(fe), le.getY(fe), r);
        ((Ee[3 * fe] = De[0] * k[0]),
          (Ee[3 * fe + 1] = De[1] * k[1]),
          (Ee[3 * fe + 2] = De[2] * k[2]));
      }
      ($.setAttribute("color", new lt(Ee, 3)), mn($, xt({ nk: H, nvc: !1 })));
    }
    {
      let w = [];
      for (let le = -14; le <= i.topK; le++) {
        let Ee = le === 0 || le === 1 ? i.plates.west : i.plates.all,
          fe = le * i.floor;
        w.push(Uh(Ee, fe - 0.34, fe - (le === 0 ? 0.003 : 0)));
      }
      let k = dp(w),
        H = k.getAttribute("normal"),
        $ = new Float32Array(H.count * 3),
        Q = [0.7, 0.68, 0.64];
      for (let le = 0; le < H.count; le++) {
        let Ee = cs(H.getX(le), -H.getZ(le), H.getY(le), r);
        (($[3 * le] = Ee[0] * Q[0]),
          ($[3 * le + 1] = Ee[1] * Q[1]),
          ($[3 * le + 2] = Ee[2] * Q[2]));
      }
      (k.setAttribute("color", new lt($, 3)), mn(k, R));
    }
    let G = new ln(s),
      K = new ln(s),
      te = [0.25, 0.25, 0.25],
      Z = [1, 1, 1];
    for (let w = -14; w <= i.topK - 1; w++) {
      if (w === 0) continue;
      let k = s + w * i.floor;
      for (let H of i.balc)
        for (let $ = 0; $ + 1 < H.length; $++) {
          let Q = H[$],
            le = H[$ + 1];
          (G.quad(
            [
              [Q[0], Q[1], k],
              [le[0], le[1], k],
              [le[0], le[1], k + 1.05],
              [Q[0], Q[1], k + 1.05],
            ],
            [
              [0, 0],
              [0, 0],
              [0, 0],
              [0, 0],
            ],
            [Z, Z, Z, Z],
          ),
            G.quad(
              [
                [le[0], le[1], k],
                [Q[0], Q[1], k],
                [Q[0], Q[1], k + 1.05],
                [le[0], le[1], k + 1.05],
              ],
              [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
              ],
              [Z, Z, Z, Z],
            ));
          let Ee = cs(0, 0, 1, r).map((fe, De) => fe * te[De]);
          K.quad(
            [
              [Q[0], Q[1], k + 1.05],
              [le[0], le[1], k + 1.05],
              [le[0], le[1], k + 1.1],
              [Q[0], Q[1], k + 1.1],
            ],
            [
              [0, 0],
              [0, 0],
              [0, 0],
              [0, 0],
            ],
            [Ee, Ee, Ee, Ee],
          );
        }
    }
    (mn(
      G.build(),
      xt({
        vc: !1,
        dk: [0.1, 0.095, 0.09],
        nk: [0.003, 0.003, 0.003],
        transparent: !0,
        opacity: 0.55,
        side: In,
      }),
      2,
    ),
      mn(K.build(), R),
      mn(m.build(), R));
    let re = lr(n, "trees").filter(
        (w) => !(w[0] > -46 && w[0] < 22.5 && w[1] > -7.6 && w[1] < 7.6),
      ),
      ee = [
        [0.205, 0.33, 0.105],
        [0.15, 0.27, 0.085],
        [0.175, 0.3, 0.1],
        [0.24, 0.33, 0.12],
      ],
      j = c(l.foliage);
    j.repeat.set(3, 2);
    let W = new sr(1, 1, 1, 6, 1, !0);
    W.translate(0, 0.5, 0);
    {
      let w = W.getAttribute("normal"),
        k = new Float32Array(w.count * 3);
      for (let H = 0; H < w.count; H++) {
        let $ = cs(w.getX(H), -w.getZ(H), 0, r);
        ((k[3 * H] = $[0] * 0.3),
          (k[3 * H + 1] = $[1] * 0.26),
          (k[3 * H + 2] = $[2] * 0.22));
      }
      W.setAttribute("color", new lt(k, 3));
    }
    let ne = [hr(1, 0), hr(1, 1.7), hr(2, 0), hr(2, 1.7)],
      pe = {};
    (re.forEach((w, k) => {
      let $ =
        (Math.hypot(w[0] - 120, w[1] + 60) < 300 ? 2 : 0) +
        (k % 2) +
        (w[8] ? 4 : 0);
      (pe[$] = pe[$] || []).push(w);
    }),
      (Nh = j),
      (mp = W));
    let be = new rt(),
      ve = new Zt(),
      Ie = new ts(),
      Le = new Ae(),
      Pe = xt({ day: j, vc: !0, night: j, nk: [0.006, 0.0075, 0.006] }),
      ze = lr(n, "lights"),
      D = new Map(),
      _e = 20;
    for (let w of ze) {
      let k = Math.floor(w[0] / _e) + "," + Math.floor(w[1] / _e);
      (D.has(k) || D.set(k, []), D.get(k).push(w));
    }
    let ae = (w, k) => {
        let H = 0,
          $ = Math.floor(w / _e),
          Q = Math.floor(k / _e);
        for (let le = $ - 1; le <= $ + 1; le++)
          for (let Ee = Q - 1; Ee <= Q + 1; Ee++)
            for (let fe of D.get(le + "," + Ee) || []) {
              let De =
                (fe[0] + fe[3] * 2 - w) ** 2 + (fe[1] + fe[4] * 2 - k) ** 2;
              H += 1 / (1 + De / 30);
            }
        return H;
      },
      me = [];
    for (let w in pe) {
      let k = pe[w],
        H = new pn(ne[w % 4], Pe.day, k.length);
      (w >= 4 && fa.push(H),
        k.forEach((Ee, fe) => {
          let [De, ct, Ht, Yt, ot, Fn, Rn, ft] = Ee;
          (Ie.set(0, on(fe, 7) * 6.28, 0),
            ve.setFromEuler(Ie),
            be.compose(new A(De, ot - s, -ct), ve, new A(Ht, Yt, Ht)),
            H.setMatrixAt(fe, be));
          let ht = ee[Rn | 0],
            jt = 0.82 + 0.36 * ft,
            Vt = (on(fe, 9) - 0.5) * 0.25;
          (Le.setRGB(ht[0] * jt * (1 + Vt), ht[1] * jt, ht[2] * jt * (1 - Vt)),
            H.setColorAt(fe, Le));
        }),
        (H.instanceMatrix.needsUpdate = !0),
        (H.instanceColor.needsUpdate = !0),
        (H.matrixAutoUpdate = !1),
        (H.frustumCulled = !1));
      let $ = new Float32Array(k.length * 3);
      k.forEach((Ee, fe) => {
        let De = Math.min(1.5, ae(Ee[0], Ee[1]));
        (($[3 * fe] =
          H.instanceColor.array[3 * fe] * (1 + 30 * De) + 0.01 * De),
          ($[3 * fe + 1] =
            H.instanceColor.array[3 * fe + 1] * (1 + 24 * De) + 0.007 * De),
          ($[3 * fe + 2] = H.instanceColor.array[3 * fe + 2] * (1 + 14 * De)));
      });
      let Q = H.instanceColor,
        le = new ns($, 3);
      (Tn.add(H),
        gn.push({
          mesh: H,
          day: Pe.day,
          night: Pe.night,
          dayC: Q,
          nightC: le,
        }));
    }
    let ie = xt({ vc: !0, nk: [0.004, 0.004, 0.004] });
    Zy = ie;
    for (let w of [0, 1]) {
      let k = re.filter(($) => !!$[8] == !!w);
      if (!k.length) continue;
      let H = new pn(W, He ? ie.night : ie.day, k.length);
      (k.forEach(($, Q) => {
        let [le, Ee, fe, De, ct, Ht, Yt] = $;
        (be.compose(
          new A(le, -s, -Ee),
          new Zt(),
          new A(Ht, Math.max(1, ct - De * 0.4), Ht),
        ),
          H.setMatrixAt(Q, be));
      }),
        (H.matrixAutoUpdate = !1),
        (H.frustumCulled = !1),
        Tn.add(H),
        gn.push({ mesh: H, day: ie.day, night: ie.night }),
        w && fa.push(H));
    }
    let Fe = lr(n, "cars").filter(
        (w) =>
          !(
            Math.round(w[4]) === 1 &&
            w[0] > 22 &&
            w[0] < 46 &&
            w[1] > -15 &&
            w[1] < 15
          ),
      ),
      Te = [
        "#F2F2F0",
        "#EDEDEA",
        "#F4F3EF",
        "#B9BCBF",
        "#A7AAAD",
        "#1D1E20",
        "#26282B",
        "#6E7175",
        "#2C3E5C",
        "#8E1F1F",
        "#E8C21C",
        "#C9B99B",
      ],
      S = (w, k) => {
        let H = w.getAttribute("normal"),
          $ = new Float32Array(H.count * 3);
        for (let Q = 0; Q < H.count; Q++) {
          let le = cs(H.getX(Q), -H.getZ(Q), H.getY(Q), r);
          (($[3 * Q] = le[0] * k),
            ($[3 * Q + 1] = le[1] * k),
            ($[3 * Q + 2] = le[2] * k));
        }
        return (w.setAttribute("color", new lt($, 3)), w);
      },
      M = (w) => {
        let k = new _t();
        for (let H of ["position", "normal", "color"]) {
          let $ = w.map((fe) => fe.getAttribute(H).array),
            Q = $.reduce((fe, De) => fe + De.length, 0),
            le = new Float32Array(Q),
            Ee = 0;
          for (let fe of $) (le.set(fe, Ee), (Ee += fe.length));
          k.setAttribute(H, new lt(le, 3));
        }
        return k;
      },
      V = (w, k) => {
        let H = w.getAttribute("color"),
          $ = w.getAttribute("normal"),
          Q = w.getAttribute("position");
        for (let le = 0; le < H.count; le++) {
          let Ee = k(
            Q.getX(le),
            Q.getY(le),
            Q.getZ(le),
            $.getX(le),
            $.getY(le),
            $.getZ(le),
          );
          H.setXYZ(
            le,
            H.getX(le) * Ee[0],
            H.getY(le) * Ee[1],
            H.getZ(le) * Ee[2],
          );
        }
        return w;
      },
      de = (w, k) => {
        let H = new Di();
        H.moveTo(w[0][0], w[0][1]);
        for (let Q = 1; Q < w.length; Q++) H.lineTo(w[Q][0], w[Q][1]);
        H.closePath();
        let $ = new jr(H, { depth: k, bevelEnabled: !1, curveSegments: 1 });
        return ($.translate(0, 0, -k / 2), ($ = $.toNonIndexed()), $);
      },
      oe = (w, k, H, $) => {
        let Q = new sr(H, H, $, 12).rotateX(Math.PI / 2).toNonIndexed();
        return (Q.translate(w, H, k), V(S(Q, 1), () => [0.05, 0.05, 0.055]));
      },
      he = (() => {
        let w = de(
            [
              [-2.3, 0.3],
              [2.3, 0.3],
              [2.3, 0.62],
              [2.18, 0.76],
              [1.05, 0.88],
              [0.4, 1.36],
              [-1.2, 1.4],
              [-1.95, 1],
              [-2.3, 0.93],
            ],
            1.8,
          ),
          k = w.getAttribute("position");
        for (let $ = 0; $ < k.count; $++)
          k.getY($) > 0.9 && k.setZ($, k.getZ($) * 0.84);
        (w.computeVertexNormals(),
          S(w, 1),
          V(w, ($, Q, le, Ee, fe, De) =>
            Q > 0.9 && Math.abs(fe) < 0.75
              ? [0.11, 0.12, 0.135]
              : Q < 0.42
                ? [0.55, 0.55, 0.55]
                : [1, 1, 1],
          ));
        let H = V(
          S(new an(4.2, 0.22, 1.66).translate(0, 0.27, 0).toNonIndexed(), 1),
          () => [0.06, 0.06, 0.06],
        );
        return M([
          w,
          H,
          oe(1.45, 0.78, 0.33, 0.24),
          oe(1.45, -0.78, 0.33, 0.24),
          oe(-1.45, 0.78, 0.33, 0.24),
          oe(-1.45, -0.78, 0.33, 0.24),
        ]);
      })(),
      Ue = (() => {
        let w = (le, Ee, fe, De, ct, Ht, Yt) =>
            V(
              S(new an(le, Ee, fe).translate(De, ct, Ht).toNonIndexed(), 1),
              () => Yt,
            ),
          k = [1, 1, 1],
          H = [0.1, 0.11, 0.12],
          $ = [0.3, 0.3, 0.31],
          Q = [
            w(11.5, 1.12, 2.5, 0, 0.94, 0, k),
            w(11.42, 1.2, 2.42, 0, 2.1, 0, H),
            w(11.5, 0.42, 2.5, 0, 2.91, 0, k),
            w(0.06, 0.52, 2.2, 5.74, 1.26, 0, H),
            w(11.52, 0.1, 2.52, 0, 0.62, 0, $),
            w(9, 0.16, 1.6, -0.6, 3.2, 0, [0.85, 0.85, 0.85]),
          ];
        for (let le = -4.2; le < 5; le += 1.75)
          Q.push(w(0.16, 1.2, 2.47, le, 2.1, 0, k));
        return (
          Q.push(
            oe(3.8, 1.05, 0.5, 0.35),
            oe(3.8, -1.05, 0.5, 0.35),
            oe(-3.4, 1.05, 0.5, 0.35),
            oe(-3.4, -1.05, 0.5, 0.35),
          ),
          M(Q)
        );
      })(),
      we = (() => {
        let w = de(
          [
            [-0.82, 0.3],
            [0.55, 0.3],
            [0.62, 0.55],
            [0.72, 1],
            [0.6, 1.02],
            [0.42, 0.62],
            [-0.15, 0.62],
            [-0.25, 0.86],
            [-0.85, 0.86],
            [-0.92, 0.6],
          ],
          0.42,
        );
        (w.computeVertexNormals(), S(w, 1));
        let k = V(
            S(
              new an(0.7, 0.1, 0.36).translate(-0.52, 0.91, 0).toNonIndexed(),
              1,
            ),
            () => [0.05, 0.05, 0.05],
          ),
          H = V(
            S(
              new an(0.06, 0.06, 0.68).translate(0.66, 1.12, 0).toNonIndexed(),
              1,
            ),
            () => [0.12, 0.12, 0.12],
          );
        return M([w, k, H, oe(0.66, 0, 0.24, 0.1), oe(-0.7, 0, 0.24, 0.12)]);
      })(),
      Re = xt({ vc: !0, nk: [0.01, 0.01, 0.01] }),
      ke = xt({ vc: !1, dk: [0.9, 0.9, 0.88], nk: [30, 29, 26] }),
      We = xt({ vc: !1, dk: [0.25, 0.03, 0.02], nk: [14, 1.2, 0.6] }),
      ce = (w, k, H, $, Q, le) => {
        let Ee = new an(Q, $, H).translate(w, k, le),
          fe = new an(Q, $, H).translate(w, k, -le);
        return M([Ee, fe].map((De) => ((De = De.toNonIndexed()), S(De, 1))));
      },
      $e = [
        {
          g: he,
          len: 4.6,
          head: ce(2.31, 0.66, 0.34, 0.12, 0.04, 0.6),
          tail: ce(-2.31, 0.84, 0.3, 0.12, 0.04, 0.62),
        },
        {
          g: Ue,
          len: 11.5,
          head: ce(5.76, 0.85, 0.4, 0.18, 0.04, 0.9),
          tail: ce(-5.76, 1, 0.3, 0.3, 0.04, 1),
        },
        {
          g: we,
          len: 1.9,
          head: ce(0.74, 0.9, 0.14, 0.1, 0.04, 0),
          tail: ce(-0.93, 0.78, 0.14, 0.06, 0.04, 0),
        },
      ];
    for (let w = 0; w < 3; w++) {
      let k = Fe.filter((Ee) => (Ee[4] | 0) === w);
      if (!k.length) continue;
      let H = $e[w],
        $ = new pn(H.g, Re.day, k.length),
        Q = new pn(H.head, ke.day, k.length),
        le = new pn(H.tail, We.day, k.length);
      k.forEach(([Ee, fe, De, ct, Ht, Yt], ot) => {
        (Ie.set(0, Dt.degToRad(De), 0),
          ve.setFromEuler(Ie),
          be.compose(
            new A(Ee, -s, -fe),
            ve,
            new A(w === 1 ? ct / H.len : 1, 1, 1),
          ),
          $.setMatrixAt(ot, be),
          Q.setMatrixAt(ot, be),
          le.setMatrixAt(ot, be),
          Le.set(
            w === 1
              ? ["#E9ECEA", "#3C7A55", "#2F5E8E"][Yt % 3]
              : w === 2
                ? [
                    "#EDEDEA",
                    "#C8352B",
                    "#1D1E20",
                    "#A7AAAD",
                    "#2C5E9E",
                    "#E8C21C",
                    "#7DB8A8",
                  ][Yt % 7]
                : Te[Yt % Te.length],
          ),
          $.setColorAt(ot, Le));
      });
      for (let [Ee, fe] of [
        [$, Re],
        [Q, ke],
        [le, We],
      ])
        ((Ee.instanceMatrix.needsUpdate = !0),
          Ee.instanceColor && (Ee.instanceColor.needsUpdate = !0),
          (Ee.matrixAutoUpdate = !1),
          (Ee.frustumCulled = !1),
          Tn.add(Ee),
          gn.push({ mesh: Ee, day: fe.day, night: fe.night }));
    }
    let L = lr(n, "lights"),
      ue = lr(n, "plights"),
      ye = new sr(0.09, 0.12, 1, 5, 1, !0);
    (ye.translate(0, 0.5, 0), S(ye, 0.45));
    let ge = new an(0.7, 0.18, 0.32);
    S(ge, 0.5);
    let Ne = xt({ vc: !0, nk: [0.006, 0.006, 0.006] }),
      Je = xt({ vc: !0, nk: [24, 22, 18], nvc: !1 }),
      Qe = L.length + ue.length,
      qe = new pn(ye, Ne.day, Qe),
      Me = new pn(ge, Je.day, Qe),
      N = new an(2, 0.08, 0.08);
    (N.translate(-1, 0.1, 0), S(N, 0.45));
    let xe = new pn(N, Ne.day, L.length);
    [
      ...L.map((w) => [w[0], w[1], w[2], w[3], w[4], 1]),
      ...ue.map((w) => [w[0], w[1], w[2], 0, 0, 0.6]),
    ].forEach(([w, k, H, $, Q, le], Ee) => {
      (be.compose(new A(w, -s, -k), new Zt(), new A(1, H, 1)),
        qe.setMatrixAt(Ee, be),
        Ie.set(0, Math.atan2(Q, $), 0),
        ve.setFromEuler(Ie),
        be.compose(
          new A(w + $ * 2, H - 0.1 - s, -(k + Q * 2)),
          ve,
          new A(le, le, le),
        ),
        Me.setMatrixAt(Ee, be),
        Ee < L.length && xe.setMatrixAt(Ee, be));
    });
    for (let [w, k] of [
      [qe, Ne],
      [Me, Je],
      [xe, Ne],
    ])
      ((w.instanceMatrix.needsUpdate = !0),
        (w.matrixAutoUpdate = !1),
        (w.frustumCulled = !1),
        Tn.add(w),
        gn.push({ mesh: w, day: k.day, night: k.night }));
    if (g.length) {
      let w = new _t();
      w.setAttribute("position", new st(g, 3));
      let k = new wo(w, new qr({ color: new Ae(5, 5.2, 6) }));
      ((k.matrixAutoUpdate = !1),
        (k.frustumCulled = !1),
        (k.material.userData.base = k.material.color.clone()),
        Tn.add(k),
        gn.push({ mesh: k, day: null, night: k.material, hideDay: !0 }));
    }
    if (_.length) {
      let w = new _t();
      w.setAttribute("position", new st(_, 3));
      let k = new To(
        w,
        new Yr({ color: new Ae(9, 0.4, 0.3), size: 2.5, sizeAttenuation: !1 }),
      );
      ((k.matrixAutoUpdate = !1),
        (k.frustumCulled = !1),
        (k.material.userData.base = k.material.color.clone()),
        Tn.add(k),
        gn.push({ mesh: k, day: null, night: k.material, hideDay: !0 }));
    }
    (Tn.updateMatrixWorld(!0),
      i.photo && ((vn = zy(l.photo1, l.photo1_a, i.photo)), it.add(vn)),
      it.add(Tn),
      wa.push(Tn),
      (Tn.visible = An.endsWith("i")),
      ($h = !0),
      (window.envReady = !0),
      jh(He),
      (An = ""),
      (dr = -1),
      yl(),
      Nn && ys(),
      Nt());
  } catch (i) {
    (console.error("env", i), (window.envError = String((i && i.stack) || i)));
  }
}
var Eh = "route/",
  ms = 0,
  pp = null,
  Nh = null,
  mp = null,
  Zy = null,
  fa = [],
  hs = new ui();
hs.matrixAutoUpdate = !1;
function Pf(i, e, t) {
  let n = new dt(i, He ? e.night : e.day);
  ((n.matrixAutoUpdate = !1), t && (n.renderOrder = t), hs.add(n));
  let s = { mesh: n, day: e.day, night: e.night };
  return (gn.push(s), n);
}
function gs() {
  return ms === 2
    ? Promise.resolve(!0)
    : (gs.p ||
        ((ms = 1),
        (gs.p = (async () => {
          try {
            for (; !$h;) {
              if (window.envError) throw new Error("env");
              await new Promise((_) => setTimeout(_, 200));
            }
            let i = await fetch(Eh + "route.json").then((_) => _.json()),
              e = await Vh(await Hh(Eh + "route.png"), i.bytes),
              t = [
                "rt_atlas",
                "rt_glow",
                ...i.ground.flatMap((_) => [
                  "g_" + _.name,
                  "g_" + _.name + "_n",
                ]),
              ],
              n = await Promise.all(t.map((_) => fp("../" + Eh + _, !1))),
              s = {};
            t.forEach((_, p) => (s[_] = n[p]));
            let r = _r.G,
              o = _r.sun;
            for (let _ of i.ground) {
              let [p, d, v, x] = _.rect,
                E = new ln(r),
                P = [1, 1, 1],
                R = (b, B) => [(b - p) / (v - p), (B - d) / (x - d)],
                C = 0.008;
              E.quad(
                [
                  [p, d, C],
                  [v, d, C],
                  [v, x, C],
                  [p, x, C],
                ],
                [R(p, d), R(v, d), R(v, x), R(p, x)],
                [P, P, P, P],
              );
              let O = {
                  polygonOffset: !0,
                  polygonOffsetFactor: -1,
                  polygonOffsetUnits: -2,
                },
                y = Pf(
                  E.build(),
                  xt({
                    day: s["g_" + _.name],
                    night: s["g_" + _.name + "_n"],
                    vc: !1,
                    nk: [pr, pr, pr],
                    dayExtra: O,
                    nightExtra: O,
                  }),
                );
              ((y.name = "envground"), Sa.push(y), Sl.push(y));
            }
            for (let _ of i.groups) {
              let p = _.n,
                d = new Uint16Array(e, _.pos, p * 3),
                v = new Float32Array(p * 3);
              for (let y = 0; y < p; y++)
                ((v[3 * y] = _.lo[0] + (d[3 * y] / 65535) * _.ext[0]),
                  (v[3 * y + 1] =
                    _.lo[2] + (d[3 * y + 2] / 65535) * _.ext[2] - r),
                  (v[3 * y + 2] = -(
                    _.lo[1] +
                    (d[3 * y + 1] / 65535) * _.ext[1]
                  )));
              let x = new _t();
              x.setAttribute("position", new lt(v, 3));
              let E = (y, b) => {
                  let B = new Uint16Array(e, y, p * 3),
                    X = new Float32Array(p * 3);
                  for (let U = 0; U < p * 3; U++) {
                    let I = B[U] / 65535;
                    X[U] = I * I * b;
                  }
                  return new lt(X, 3);
                },
                P = E(_.cd, _.vmaxD),
                R = E(_.cn, _.vmaxN);
              if ((x.setAttribute("color", He ? R : P), _.uv !== void 0)) {
                let y = new Uint16Array(e, _.uv, p * 2),
                  b = new Float32Array(p * 2);
                for (let B = 0; B < p * 2; B++) b[B] = y[B] / 65535;
                x.setAttribute("uv", new lt(b, 2));
              }
              (x.setIndex(new lt(new Uint16Array(e, _.idx, _.ntri * 3), 1)),
                x.computeBoundingSphere());
              let C =
                  _.name === "fac"
                    ? xt({
                        day: s.rt_atlas,
                        night: s.rt_atlas,
                        vc: !0,
                        nvc: !0,
                        nk: [1, 1, 1],
                      })
                    : _.name === "veil"
                      ? xt({
                          vc: !0,
                          nvc: !0,
                          nk: [1, 1, 1],
                          transparent: !0,
                          opacity: 0.38,
                          side: Sn,
                        })
                      : xt({ vc: !0, nvc: !0, nk: [1, 1, 1] }),
                O = Pf(x, C, _.name === "veil" ? 2 : 0);
              if (
                ((gn[gn.length - 1].cols = { day: P, night: R }),
                _.name !== "veil" && Sa.push(O),
                _.name === "fac")
              ) {
                let y = new Kt({
                  map: s.rt_glow,
                  transparent: !0,
                  blending: Qi,
                  depthWrite: !1,
                  color: new Ae(0.46, 0.42, 0.36),
                });
                y.userData.base = y.color.clone();
                let b = new dt(x, y);
                ((b.matrixAutoUpdate = !1),
                  (b.renderOrder = 1),
                  (b.visible = He),
                  hs.add(b),
                  gn.push({ mesh: b, day: null, night: y, hideDay: !0 }));
              }
            }
            let a = [
                [0.205, 0.33, 0.105],
                [0.15, 0.27, 0.085],
                [0.175, 0.3, 0.1],
                [0.24, 0.33, 0.12],
              ],
              l = xt({
                day: Nh,
                vc: !0,
                night: Nh,
                nk: [0.006, 0.0075, 0.006],
              }),
              c = [hr(2, 0.4), hr(2, 2.3)],
              h = new rt(),
              u = new Zt(),
              f = new ts(),
              m = new Ae();
            for (let _ = 0; _ < 2; _++) {
              let p = i.blobs.filter((x, E) => E % 2 === _);
              if (!p.length) continue;
              let d = new pn(c[_], l.day, p.length),
                v = new Float32Array(p.length * 3);
              (p.forEach((x, E) => {
                let [P, R, C, O, y, b, B, X, U, I, F] = x;
                (f.set(0, on(E * 2 + _, 7) * 6.28, 0),
                  u.setFromEuler(f),
                  h.compose(new A(P, C - r, -R), u, new A(O, y, O)),
                  d.setMatrixAt(E, h));
                let G = a[b | 0],
                  K = (0.82 + 0.36 * B) * (0.9 + 0.2 * on(E * 2 + _, 9)),
                  te = (on(E, 11) - 0.5) * 0.2;
                (m.setRGB(
                  G[0] * K * X * (1 + te),
                  G[1] * K * X,
                  G[2] * K * X * (1 - te),
                ),
                  d.setColorAt(E, m),
                  (v[3 * E] = G[0] * K * (1 + 26 * U)),
                  (v[3 * E + 1] = G[1] * K * (1 + 24 * I)),
                  (v[3 * E + 2] = G[2] * K * (1 + 20 * F)));
              }),
                (d.instanceMatrix.needsUpdate = !0),
                (d.instanceColor.needsUpdate = !0),
                (d.matrixAutoUpdate = !1),
                (d.frustumCulled = !1),
                hs.add(d),
                gn.push({
                  mesh: d,
                  day: l.day,
                  night: l.night,
                  dayC: d.instanceColor,
                  nightC: new ns(v, 3),
                }));
            }
            let g = xt({
              vc: !0,
              dk: [fr * 0.32, fr * 0.29, fr * 0.26],
              nk: [0.004, 0.004, 0.004],
            });
            {
              let _ = i.trunks,
                p = new pn(mp, He ? g.night : g.day, _.length),
                d = new A(0, 1, 0);
              (_.forEach((v, x) => {
                let E = new A(v[0], v[2] - r, -v[1]),
                  P = new A(v[3], v[5] - r, -v[4]),
                  R = P.clone().sub(E),
                  C = R.length();
                (u.setFromUnitVectors(d, R.normalize()),
                  h.compose(E, u, new A(v[6], C, v[6])),
                  p.setMatrixAt(x, h));
              }),
                (p.instanceMatrix.needsUpdate = !0),
                (p.matrixAutoUpdate = !1),
                (p.frustumCulled = !1),
                hs.add(p),
                gn.push({ mesh: p, day: g.day, night: g.night }));
            }
            pp = i;
            for (let _ of fa) _.visible = !1;
            return (
              Tn.add(hs),
              hs.updateMatrixWorld(!0),
              jh(He),
              (dr = -1),
              (An = ""),
              (ms = 2),
              (window.routeReady = !0),
              Nt(),
              !0
            );
          } catch (i) {
            return (
              console.error("route", i),
              (window.routeError = String((i && i.stack) || i)),
              (ms = -1),
              !1
            );
          }
        })())),
      gs.p);
}
function jh(i) {
  for (let e of gn) {
    if (e.hideDay) {
      e.mesh.visible = i;
      continue;
    }
    ((e.mesh.material = i ? e.night : e.day),
      e.dayC && (e.mesh.instanceColor = i ? e.nightC : e.dayC),
      e.cols &&
        e.mesh.geometry.setAttribute("color", i ? e.cols.night : e.cols.day));
  }
  it.fog.color.copy(i ? Ma : mr);
}
function Jy(i, e) {
  return (i > 9.25 &&
    Math.abs(Math.hypot(i - 9.307, e + 2.921) - 3.362) < 0.22) ||
    (e < -6.05 && Math.abs(Math.hypot(i + 5.125, e + 6.109) - 1.435) < 0.22)
    ? !0
    : e < -5.7 &&
        e > -6.25 &&
        (Math.abs(i + 6.56) < 0.15 || Math.abs(i + 3.69) < 0.15);
}
function Ky() {
  let i = new an(1, 1, 1),
    e = new A(0, 1, 0),
    t = { metal: [], curb: [], fascia: [] },
    n = (o, a, l, c, h, u, f, m, g) => {
      let _ = new A(-c.z, 0, c.x),
        p = new rt()
          .makeBasis(c, e, _)
          .multiply(new rt().makeScale(h, m - f, u));
      (p.setPosition(a + _.x * g, (f + m) / 2, l + _.z * g), o.push(p));
    };
  for (let o of my) {
    let a = o.map(([m, g]) => new se(m, g)),
      l = [0];
    for (let m = 1; m < a.length; m++)
      l.push(l[m - 1] + a[m].distanceTo(a[m - 1]));
    let c = a
        .reduce((m, g) => m.clone().add(g), new se())
        .multiplyScalar(1 / a.length),
      h = (m) => {
        let g = 1;
        for (; g < a.length - 1 && l[g] < m;) g++;
        let _ = (m - l[g - 1]) / Math.max(1e-6, l[g] - l[g - 1]),
          p = a[g - 1].clone().lerp(a[g], _),
          d = new A(a[g].x - a[g - 1].x, 0, a[g].y - a[g - 1].y).normalize(),
          v = -d.z * (p.x - c.x) + d.x * (p.y - c.y) >= 0 ? 1 : -1;
        return { p, t: d, sg: v };
      },
      u = l[l.length - 1];
    for (let m = 0.05; m < u - 0.03; m += 0.105) {
      let g = h(m);
      n(t.metal, g.p.x, g.p.y, g.t, 0.014, 0.05, 0.3, 1.08, -0.04 * g.sg);
    }
    let f = Math.max(2, Math.round(u / 1));
    for (let m = 0; m <= f; m++) {
      let g = h(Math.min(u - 0.02, Math.max(0.02, (m * u) / f)));
      n(t.metal, g.p.x, g.p.y, g.t, 0.06, 0.06, 0.26, 1.1, -0.04 * g.sg);
    }
    for (let m = 1; m < a.length; m++) {
      let g = h((l[m - 1] + l[m]) / 2),
        _ = l[m] - l[m - 1] + 0.012,
        p = a[m - 1].clone().add(a[m]).multiplyScalar(0.5);
      (n(t.metal, p.x, p.y, g.t, _, 0.07, 1.08, 1.125, -0.04 * g.sg),
        n(t.metal, p.x, p.y, g.t, _, 0.04, 0.28, 0.31, -0.04 * g.sg),
        n(t.curb, p.x, p.y, g.t, _, 0.22, 0, 0.26, -0.03 * g.sg),
        n(t.fascia, p.x, p.y, g.t, _, 0.24, 2.5, 3.16, 0.07 * g.sg));
    }
  }
  let s = (o, a, l) => {
      let c = new ea({ color: new Ae(o), roughness: a, metalness: l });
      return (
        (c.envMap = pl),
        (c.userData.envi = 0.35),
        (c.envMapIntensity = 0.35 * nt.skyScale),
        Ml.push(c),
        c
      );
    },
    r = {
      metal: s("#3B3833", 0.45, 0.55),
      curb: s("#A69786", 0.8, 0),
      fascia: s("#6E4C37", 0.55, 0.15),
    };
  for (let o in t) {
    let a = new pn(i, r[o], t[o].length);
    (t[o].forEach((l, c) => a.setMatrixAt(c, l)),
      (a.instanceMatrix.needsUpdate = !0),
      (a.castShadow = !0),
      (a.receiveShadow = !0),
      (a.matrixAutoUpdate = !1),
      (a.frustumCulled = !1),
      it.add(a));
  }
}
async function $y() {
  nt = await (await fetch("scene.json")).json();
  let e = {
    style: (ya.find((U) => nt.variants[U.id + "_day"]) || ya[0]).id,
    time: "day",
  };
  try {
    let U = JSON.parse(localStorage.getItem("u3-69-look") || "null");
    U && nt.variants[U.style + "_" + U.time] && (e = U);
  } catch {}
  ((Pt = e.style), (Xn = e.time));
  let t = Pt + "_" + Xn,
    n = (nt.texBytes && nt.texBytes[Pt]) || 21e5,
    s = n / Sh.length;
  Ah = nt.pngBytes + nt.variants[t].pngBytes + n + 26e4;
  let r = ["sky", "sky_night"],
    [o, , a, ...l] = await Promise.all([
      Hh("geo.png", el),
      np(t, el),
      ip(Pt, () => el(s)),
      ...r.map((U) => yr(Kh + U + ".jpg", () => el(8e4))),
    ]),
    c = Object.assign({}, a);
  (r.forEach((U, I) => (c[U] = l[I])),
    (zh.textContent = "\u7D44\u88DD\u6A21\u578B\u4E2D"));
  let h = await Vh(o, nt.bytes);
  ((Ni = c.sky),
    (Ni.mapping = es),
    (da = c.sky_night),
    (da.mapping = es),
    (rl = new ir(Ge)));
  let u = document.createElement("canvas");
  ((u.width = Ni.image.width), (u.height = Ni.image.height));
  let f = u.getContext("2d");
  (f.drawImage(Ni.image, 0, 0), (f.globalCompositeOperation = "multiply"));
  let m = f.createLinearGradient(0, u.height * 0.5, 0, u.height * 0.54);
  (m.addColorStop(0, "#ffffff"),
    m.addColorStop(1, "#4a4844"),
    (f.fillStyle = m),
    f.fillRect(0, u.height * 0.5, u.width, u.height * 0.5));
  let g = new pi(u);
  ((g.colorSpace = Et),
    (g.mapping = es),
    (pl = rl.fromEquirectangular(g).texture),
    g.dispose(),
    (Qf = rl.fromEquirectangular(da).texture));
  for (let [U, I, F] of [
    [Ni.image, mr, nt.skyScale * gl],
    [da.image, Ma, 1],
  ]) {
    let G = document.createElement("canvas");
    ((G.width = 256), (G.height = 128));
    let K = G.getContext("2d", { willReadFrequently: !0 });
    K.drawImage(U, 0, 0, 256, 128);
    let te = K.getImageData(0, 63, 256, 1).data,
      Z = 0,
      re = 0,
      ee = 0;
    for (let j = 0; j < te.length; j += 4)
      ((Z += tl(te[j] / 255)),
        (re += tl(te[j + 1] / 255)),
        (ee += tl(te[j + 2] / 255)));
    I.setRGB((Z / 256) * F, (re / 256) * F, (ee / 256) * F);
  }
  it.fog.color.copy(Xn === "night" ? Ma : mr);
  let _ = new A(...nt.sunDir).normalize();
  ((Rt = new ko(
    new Ae(1, 0.96, 0.9).multiply(new Ae(ma.x, ma.y, ma.z)),
    nt.sunStrength,
  )),
    Rt.position.copy(_).multiplyScalar(40),
    Rt.target.position.set(0, 0, 0),
    (Rt.castShadow = !0));
  let p = yi ? 2048 : 4096;
  Rt.shadow.mapSize.set(p, p);
  let d = Rt.shadow.camera;
  ((d.left = -16),
    (d.right = 16),
    (d.top = 16),
    (d.bottom = -16),
    (d.near = 1),
    (d.far = 90),
    (Rt.shadow.bias = -3e-4),
    (Rt.shadow.normalBias = 0.025),
    (Rt.shadow.radius = 2),
    it.add(Rt, Rt.target));
  let v = new dt(
    new an(It(1153) - It(176), 0.5, Ut(907) - Ut(290)),
    new Kt({ shadowSide: In, colorWrite: !1, depthWrite: !1 }),
  );
  (v.position.set(
    (It(176) + It(1153)) / 2,
    2.72 + 0.25,
    (Ut(290) + Ut(907)) / 2,
  ),
    (v.castShadow = !0),
    v.updateMatrix(),
    (v.matrixAutoUpdate = !1),
    it.add(v));
  let x = [],
    E = sl[t];
  ((Un.bakeMax.value = nt.variants[t].bakeMax),
    (Un.specRef.value = nt.variants[t].floorMedian || 0.05));
  for (let U of nt.meshes) {
    if (U.name === "ground" || U.name === "tree" || U.name.startsWith("bldg"))
      continue;
    let I = Fi[U.name] || { c: "#BBBBBB", r: 0.6 },
      F = new _t(),
      G = new Uint16Array(h, U.pos, U.n * 3),
      K = new Float32Array(U.n * 3);
    for (let j = 0; j < U.n; j++)
      ((K[3 * j] = U.lo[0] + (G[3 * j] / 65535) * U.ext[0]),
        (K[3 * j + 1] = U.lo[1] + (G[3 * j + 1] / 65535) * U.ext[1]),
        (K[3 * j + 2] = U.lo[2] + (G[3 * j + 2] / 65535) * U.ext[2]));
    if (!window.__INT && wf[U.name])
      for (let [j, W, ne, pe, be, ve, Ie] of wf[U.name])
        for (let Le = 0; Le < U.n; Le++) {
          let Pe = K[3 * Le] / zt + Oi,
            ze = K[3 * Le + 2] / zt + Bi;
          Pe < W ||
            Pe > ne ||
            ze < pe ||
            ze > be ||
            (j === "y"
              ? (K[3 * Le + 2] = (ve + (ze - ve) * Ie - Bi) * zt)
              : (K[3 * Le] = (ve + (Pe - ve) * Ie - Oi) * zt));
        }
    (F.setAttribute("position", new lt(K, 3)),
      F.setAttribute(
        "normal",
        new lt(new Int8Array(h, U.nrm, U.n * 3), 3, !0),
      ));
    let te = new Int16Array(h, U.uv, U.n * 2),
      Z = new Float32Array(U.n * 2);
    for (let j = 0; j < U.n * 2; j++) Z[j] = te[j] * U.us;
    if (
      (F.setAttribute("uv", new lt(Z, 2)),
      U.bake !== void 0 &&
        (F.setAttribute(
          "bake",
          new lt(new Uint16Array(U.n * 3).fill(0), 3, !0),
        ),
        F.getAttribute("bake").array.set(new Uint16Array(E, U.bake, U.n * 3)),
        jf.push({ g: F, r: U })),
      U.col !== void 0)
    ) {
      let j = new Uint8Array(h, U.col, U.n * 3),
        W = new Float32Array(U.n * 3);
      for (let ne = 0; ne < U.n * 3; ne++) W[ne] = tl(j[ne] / 255);
      (F.setAttribute("color", new lt(W, 3)),
        wh[Pt] &&
          Object.values(wh).some((ne) => ne[U.name]) &&
          $f.push({
            name: U.name,
            attr: F.getAttribute("color"),
            orig: W.slice(),
          }));
    }
    if (
      (F.setIndex(
        new lt(
          U.idx32
            ? new Uint32Array(h, U.idx, U.ntri * 3)
            : new Uint16Array(h, U.idx, U.ntri * 3),
          1,
        ),
      ),
      U.name === "glass" || U.name === "steel")
    ) {
      let j = F.index.array,
        W = F.getAttribute("position").array,
        ne = [];
      for (let pe = 0; pe < j.length; pe += 3) {
        let be = 0,
          ve = 0,
          Ie = 0;
        for (let Le = 0; Le < 3; Le++)
          ((be += W[j[pe + Le] * 3] / 3),
            (ve += W[j[pe + Le] * 3 + 1] / 3),
            (Ie += W[j[pe + Le] * 3 + 2] / 3));
        (ve < 1.3 && Jy(be, Ie)) || ne.push(j[pe], j[pe + 1], j[pe + 2]);
      }
      F.setIndex(
        new lt(
          j instanceof Uint32Array ? new Uint32Array(ne) : new Uint16Array(ne),
          1,
        ),
      );
    }
    if (U.name === "outdoor") {
      let j = F.index.array,
        W = F.getAttribute("position").array;
      for (let ne = 0; ne < j.length; ne += 3) {
        let pe = j[ne] * 3,
          be = j[ne + 1] * 3,
          ve = j[ne + 2] * 3;
        if (
          (W[be + 2] - W[pe + 2]) * (W[ve] - W[pe]) -
            (W[be] - W[pe]) * (W[ve + 2] - W[pe + 2]) <
          0
        ) {
          let Ie = j[ne + 1];
          ((j[ne + 1] = j[ne + 2]), (j[ne + 2] = Ie));
        }
      }
    }
    U.name === "slab" &&
      (F.dispose(), (F = dp([Uh(Tf, -0.34, -0.003), Uh(Tf, 2.802, 3.12)])));
    let re = Wf(U.name, I, c, U.bake !== void 0);
    I.ext &&
      ((re.envMap = pl),
      (re.userData.envi = I.envi || 0),
      (re.envMapIntensity = I.envi ? I.envi * nt.skyScale : 1),
      Ml.push(re));
    let ee = new dt(F, re);
    if (
      ((ee.name = U.name),
      (ee.castShadow = !(
        I.glass ||
        I.emit ||
        I.op ||
        U.name === "ground" ||
        U.name === "tree" ||
        U.name.startsWith("bldg")
      )),
      (ee.receiveShadow = !(I.emit || I.glass)),
      (ee.matrixAutoUpdate = !1),
      re.userData.cap &&
        ((ee.userData.base = re),
        (ee.userData.cap = re.userData.cap),
        Kf.push(ee)),
      U.name === "ground" || U.name === "tree" || U.name.startsWith("bldg"))
    ) {
      (wa.push(ee), ep.set(ee, re));
      let j;
      if (I.night) {
        let W = c[U.name + "_night"];
        ((W.wrapS = W.wrapT = Ii),
          W.repeat.set(1 / I.night[0], 1 / I.night[1]),
          (j = new Kt({ map: W })));
      } else
        j = new Kt({
          color:
            U.name === "tree"
              ? new Ae(0.004, 0.006, 0.004)
              : new Ae(0.006, 0.0065, 0.006),
        });
      tp.set(ee, j);
    }
    if (
      (I.mirror && x.push({ mesh: ee, off: I.mirror, arch: I.arch }),
      U.bake !== void 0 && ["wall", "cabinet", "door"].includes(U.name.replace(/__p$/, "")))
    ) {
      let j = new dt(
        F,
        new bt({
          side: qt,
          uniforms: {
            bakeMax: Un.bakeMax,
            gain: Un.bakeGain,
            albedo: { value: new Ae(I.bc || I.c || "#FFFFFF") },
          },
          vertexShader:
            "attribute vec3 bake; uniform float bakeMax; varying vec3 vB; void main() { vB = bake * bake * bakeMax; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }",
          fragmentShader:
            "uniform vec3 gain; uniform vec3 albedo; varying vec3 vB; void main() { gl_FragColor = vec4( albedo * vB * gain, 1.0 ); }",
        }),
      );
      ((j.userData.name = U.name),
        (j.matrixAutoUpdate = !1),
        (j.renderOrder = 1),
        it.add(j),
        Xh.push(j));
    }
    ([
      "floor_oak",
      "ktile",
      "stone",
      "btile",
      "rug",
      "rug2",
      "rug_living",
      "outdoor",
      "c_marble",
      "c_dmarble",
      "c_paving",
      "c_lawn",
    ].includes(U.name.replace(/__p$/, "")) && Sl.push(ee),
      (!I.ext || U.name === "outdoor") &&
        !I.glass &&
        !I.emit &&
        !I.op &&
        U.name !== "soffit" &&
        U.name !== "balc_floor" &&
        Sa.push(ee),
      (U.name === "soffit" || U.name === "balc_floor") &&
        (Vf.push(ee), (ee.visible = He)),
      U.name === "outdoor" && (Gf.push(ee), (ee.visible = !He)),
      it.add(ee));
  }
  (__mods(), __kids(), __master(), sp(Pt, a), Zh(), Hy().catch((U) => console.error("tv", U)), Ky(), h1());
  let P = nt.floor,
    R = document.createElement("canvas");
  ((R.width = 768), (R.height = 512));
  let C = R.getContext("2d");
  C.drawImage(c.floor.image, 0, 0, 768, 512);
  let O = C.getImageData(0, 0, 768, 512);
  for (let U = 0; U < O.data.length; U += 4) {
    let I = O.data[U] + O.data[U + 1] + O.data[U + 2] > 20 ? 255 : 0;
    O.data[U] = O.data[U + 1] = O.data[U + 2] = I;
  }
  C.putImageData(O, 0, 0);
  let y = new pi(R);
  ((ga = new Kt({
    color: new Ae(0.042, 0.031, 0.021),
    alphaMap: y,
    alphaTest: 0.5,
  })),
    rp());
  let b = new dt(new jn(P.x1 - P.x0, P.z1 - P.z0), ga);
  ((b.rotation.x = -Math.PI / 2),
    b.position.set((P.x0 + P.x1) / 2, -0.0015, (P.z0 + P.z1) / 2),
    b.updateMatrix(),
    (b.matrixAutoUpdate = !1),
    it.add(b),
    (Ih = new Vr(256, { type: rn })),
    (Nn = new Hr(0.05, 500, Ih)),
    Nn.position.set(It(960), 1.3, Ut(440)),
    it.add(Nn),
    (Ea = Ni),
    (it.backgroundIntensity = nt.skyScale * gl),
    Xn === "night" && ap(!0),
    Qy(),
    e1(),
    n1(),
    (Ge.clippingPlanes = []),
    (it.background = Ea),
    (Ge.shadowMap.needsUpdate = !0),
    Ge.render(it, Be),
    ys());
  for (let U of hl) U.needsUpdate = !0;
  vs && (vs.needsUpdate = !0);
  function B(U, I) {
    let F = U / 2,
      G = new Di();
    return (
      G.moveTo(-F, -I / 2),
      G.lineTo(F, -I / 2),
      G.lineTo(F, I / 2 - F),
      G.absarc(0, I / 2 - F, F, 0, Math.PI, !1),
      G.lineTo(-F, -I / 2),
      new No(G, 40)
    );
  }
  for (let U of x) {
    let I = new Ln().setFromObject(U.mesh),
      F = I.getSize(new A()),
      G = I.getCenter(new A()),
      K = new A(...U.off).normalize(),
      te = Math.abs(K.x) > 0.5 ? F.z : F.x,
      Z = F.y,
      re = Math.min(1, yi ? 0.5 : 0.75) * Ge.getPixelRatio(),
      ee = new ca(U.arch ? B(te, Z) : new jn(te, Z), {
        clipBias: 0.002,
        textureWidth: Math.round(innerWidth * re),
        textureHeight: Math.round(innerHeight * re),
        color: 14277852,
        multisample: yi ? 0 : 4,
      });
    (ee.position
      .copy(G)
      .add(
        K.clone().multiplyScalar((Math.abs(K.x) > 0.5 ? F.x : F.z) / 2 + 0.002),
      ),
      ee.lookAt(ee.position.clone().add(K)),
      it.add(ee),
      Wh.push(ee));
  }
  ((mi = new dt(
    new jn(90, 90),
    new Fo({ color: 1909273, opacity: 0.2, transparent: !0, depthWrite: !1 }),
  )),
    (mi.rotation.x = -Math.PI / 2),
    mi.position.set(0, -0.37, 0),
    (mi.receiveShadow = !0),
    (mi.visible = !1),
    (mi.renderOrder = -1),
    it.add(mi),
    (Ge.shadowMap.needsUpdate = !0),
    (document.getElementById("loader").hidden = !0),
    Lh(),
    al(op()),
    (An = ""),
    Yh(cl[0]));
  let X = At;
  ((At = null),
    Be.position.copy(X.p1),
    at.target.copy(X.t1),
    (Be.fov = X.f1),
    (Ge.toneMappingExposure = X.e1),
    Be.updateProjectionMatrix(),
    Nt());
}
var Ms = [0, -56],
  gp = 1.6,
  jy = -28,
  ti = (i) => i < jy,
  _a = new Set(),
  Qh = (i) => i * i * (3 - 2 * i);
function ki(i, e, t) {
  return new Promise((n) => {
    if (t && t.abort) {
      n(!1);
      return;
    }
    let s = performance.now(),
      r = (o) => {
        if (t && t.abort) {
          (_a.delete(r), n(!1));
          return;
        }
        let a = Math.min(1, (o - s) / Math.max(1, i * 1e3));
        (e(a, o), a >= 1 && (_a.delete(r), n(!0)));
      };
    (_a.add(r), Nt());
  });
}
var ni = document.createElement("div");
ni.style.cssText =
  "position:fixed;inset:0;background:#000;opacity:0;pointer-events:none;z-index:4";
document.body.appendChild(ni);
var Wn = { mesh: null, base: null, idx: [[], []], open: [0, 0] };
function Qy() {
  let i = it.children.find((t) => t.isMesh && t.name === "c_door");
  if (!i) return;
  let e = i.geometry.getAttribute("position");
  ((Wn.mesh = i), (Wn.base = e.array.slice()), (i.castShadow = !1));
  for (let t = 0; t < e.count; t++) {
    let n = e.getX(t) / zt + Oi,
      s = e.getZ(t) / zt + Bi;
    n < 197.2 ||
      n > 198.8 ||
      s < 778.3 ||
      s > 822.7 ||
      Wn.idx[ti(e.getY(t)) ? 1 : 0].push([t, s < 800.5 ? -1 : 1]);
  }
}
function _p(i, e) {
  if (((Wn.open[i] = e), !Wn.mesh)) return;
  let t = Wn.mesh.geometry.getAttribute("position"),
    n = e * 21.6 * zt;
  for (let [s, r] of Wn.idx[i]) t.array[3 * s + 2] = Wn.base[3 * s + 2] + r * n;
  ((t.needsUpdate = !0), Nt());
}
function _i(i, e, t = 1.6, n) {
  let s = Wn.open[i];
  return Math.abs(s - e) < 0.001
    ? Promise.resolve(!0)
    : ki(t * Math.abs(e - s), (r) => _p(i, s + (e - s) * Qh(r)), n);
}
var El = document.createElement("canvas");
El.width = 128;
El.height = 64;
var eu = new pi(El);
eu.colorSpace = Et;
var Ta = new dt(new jn(10 * zt, 0.12), new Kt({ map: eu, toneMapped: !1 }));
Ta.rotation.y = -Math.PI / 2;
Ta.position.set(It(195.42), 2.24, Ut(800.5));
Ta.matrixAutoUpdate = !0;
it.add(Ta);
var If = "";
function tu(i, e) {
  let t = i + ":" + e;
  if (t === If) return;
  If = t;
  let n = El.getContext("2d");
  ((n.fillStyle = "#070504"),
    n.fillRect(0, 0, 128, 64),
    (n.fillStyle = "#FFB347"),
    (n.textAlign = "center"),
    (n.textBaseline = "middle"),
    (n.font = "bold 42px system-ui, sans-serif"),
    n.fillText(String(i), 80, 35),
    e &&
      ((n.font = "bold 24px system-ui, sans-serif"),
      n.fillText(e < 0 ? "\u25BC" : "\u25B2", 28, 35)),
    (eu.needsUpdate = !0),
    Nt());
}
tu(18, 0);
function e1() {
  let i = Fi.c_crystal;
  if (!i) return;
  let e = new pn(new Uo(1, 0), Wf("c_crystal", i, {}, !1), 360 * 36),
    t = new rt(),
    n = new Zt(),
    s = new A(),
    r = new A(),
    o = 7,
    a = () => ((o = (o * 16807) % 2147483647), (o - 1) / 2147483646),
    l = 0;
  for (let c = 0; c < 360; c++) {
    let h = 34 * Math.sqrt(0.05 + 0.95 * a()),
      u = a() * 2 * Math.PI,
      f = It(870 + h * Math.cos(u)),
      m = Ut(470 + h * Math.sin(u)),
      g = -47,
      _ = -56 + 1.2 + 2 * a();
    for (let p = 0; p < 36; p++) {
      let d = 0.8 + 0.4 * a();
      (r.set(f, g - ((g - _) * (p + 0.5 * a())) / 36, m),
        s.set(0.012 * d, 0.022 * d, 0.012 * d),
        t.compose(r, n, s),
        e.setMatrixAt(l++, t));
    }
  }
  ((e.instanceMatrix.needsUpdate = !0),
    e.computeBoundingSphere(),
    (e.matrixAutoUpdate = !1),
    e.updateMatrix(),
    it.add(e));
}
var nu = [],
  t1 = new A(It(1475), -56, Ut(600));
function n1() {
  let i = document.createElement("canvas");
  ((i.width = 64), (i.height = 128));
  let e = i.getContext("2d");
  e.globalCompositeOperation = "lighter";
  let t = (s, r, o, a, l, c) => {
    (e.save(), e.translate(s, r), e.scale(o / a, 1));
    let h = e.createRadialGradient(0, 0, 0, 0, 0, a);
    (h.addColorStop(0, l),
      h.addColorStop(1, c),
      (e.fillStyle = h),
      e.beginPath(),
      e.arc(0, 0, a, 0, 2 * Math.PI),
      e.fill(),
      e.restore());
  };
  (t(32, 100, 22, 28, "rgba(255,110,30,0.55)", "rgba(255,50,10,0)"),
    t(32, 76, 15, 42, "rgba(255,160,50,0.6)", "rgba(255,80,20,0)"),
    t(32, 48, 8, 36, "rgba(255,195,90,0.5)", "rgba(255,100,30,0)"),
    t(32, 98, 10, 15, "rgba(255,245,215,0.95)", "rgba(255,200,120,0)"));
  let n = new pi(i);
  n.colorSpace = Et;
  for (let s of [1410, 1475, 1540])
    for (let r = 0; r < 3; r++) {
      let o = new So(
        new Xr({ map: n, blending: Qi, depthWrite: !1, transparent: !0 }),
      );
      (o.center.set(0.5, 0.05),
        (o.userData = {
          x: It(s) + (r - 1) * 0.07,
          z: Ut(600) + (r === 1 ? 0.06 : -0.04),
          ph: s * 0.37 + r * 2.1,
          s: 0.75 + 0.2 * r,
        }),
        o.position.set(o.userData.x, -56 + 0.42, o.userData.z),
        o.scale.set(0.22, 0.5, 1),
        it.add(o),
        nu.push(o));
    }
  xp(0);
}
function xp(i) {
  let e = i / 1e3;
  for (let t of nu) {
    let n = t.userData,
      s =
        0.78 +
        0.16 * Math.sin(e * 9.1 + n.ph) +
        0.09 * Math.sin(e * 15.7 + 2 * n.ph) +
        0.06 * Math.sin(e * 23.3 + 3 * n.ph);
    (t.scale.set(
      0.2 * n.s * (0.9 + 0.12 * Math.sin(e * 6.3 + n.ph)),
      0.6 * n.s * s,
      1,
    ),
      (t.position.x = n.x + 0.012 * Math.sin(e * 5.1 + n.ph)),
      t.material.color.setScalar(He ? 3 : 1.8));
  }
}
var xr = !1;
function iu(i) {
  if (i === xr || !Rt || !nt) return;
  ((xr = i), i && ms === 0 && gs());
  let e = new A(...nt.sunDir).normalize(),
    t = Rt.shadow.camera;
  (i
    ? (Rt.target.position.set(It(1150), -56, Ut(600)),
      Rt.position.copy(Rt.target.position).addScaledVector(e, 70),
      (t.left = -30),
      (t.right = 30),
      (t.top = 30),
      (t.bottom = -30),
      (t.far = 160))
    : (Rt.target.position.set(0, 0, 0),
      Rt.position.copy(e).multiplyScalar(40),
      (t.left = -16),
      (t.right = 16),
      (t.top = 16),
      (t.bottom = -16),
      (t.far = 90)),
    t.updateProjectionMatrix(),
    Rt.target.updateMatrixWorld(),
    Rt.updateMatrixWorld(),
    (Ta.position.y = (i ? -56 : 0) + 2.24),
    mt.riding || tu(i ? 1 : 18, 0),
    Nn &&
      (i
        ? Nn.position.set(It(925), -54.5, Ut(600))
        : Nn.position.set(It(960), 1.3, Ut(440)),
      ys()),
    (Ge.shadowMap.needsUpdate = !0),
    (An = ""),
    Nt());
}
function _l(i) {
  let e = i.x / zt + Oi,
    t = i.z / zt + Bi;
  return ti(i.y)
    ? e > 1150 || e < 120 || t < 300 || t > 905
      ? { out: 1 }
      : { ev: e < 700 ? 0.8 : 0.6 }
    : { ev: e < 384 ? 0.9 : 1 };
}
var mt = { seq: null, dir: new A(0, 0, -1), lens: 16 },
  xa = (i) => Math.atan2(i.x, -i.z),
  Fh = (i) => Math.asin(Dt.clamp(i.y / (i.length() || 1), -1, 1)),
  vp = (i, e) =>
    new A(Math.sin(i) * Math.cos(e), Math.sin(e), -Math.cos(i) * Math.cos(e)),
  yp = (i) => {
    for (; i > Math.PI;) i -= 2 * Math.PI;
    for (; i < -Math.PI;) i += 2 * Math.PI;
    return i;
  };
function xl(i, e) {
  (Be.position.copy(i),
    at.target.copy(i).add(e.clone().sub(i).normalize().multiplyScalar(0.15)),
    Be.lookAt(e),
    Nt());
}
function Mp(i, e) {
  let t = Math.pow(2, ba(_l(i)));
  Ge.toneMappingExposure += (t - Ge.toneMappingExposure) * Math.min(1, e / 0.7);
}
function i1(i) {
  let e = i.map((n) => new se(It(n[0]), Ut(n[1])));
  for (let n = 0; n < 3; n++) {
    let s = [e[0]];
    for (let r = 0; r + 1 < e.length; r++) {
      let o = e[r],
        a = e[r + 1];
      (r > 0 && s.push(o.clone().lerp(a, 0.25)),
        s.push(r + 2 < e.length ? o.clone().lerp(a, 0.75) : a.clone()));
    }
    e = s;
  }
  let t = [0];
  for (let n = 1; n < e.length; n++)
    t.push(t[n - 1] + e[n].distanceTo(e[n - 1]));
  return { P: e, L: t, len: t[t.length - 1] };
}
function Lf(i, e) {
  e = Dt.clamp(e, 0, i.len);
  let t = 1;
  for (; t < i.L.length - 1 && i.L[t] < e;) t++;
  let n = (e - i.L[t - 1]) / Math.max(1e-6, i.L[t] - i.L[t - 1]);
  return i.P[t - 1].clone().lerp(i.P[t], Dt.clamp(n, 0, 1));
}
function s1(i, e, t) {
  t = Math.min(t, e / 2);
  let n = 1 / (e - t);
  if (i < t) return (0.5 * n * i * i) / t;
  if (i > e - t) {
    let s = e - i;
    return 1 - (0.5 * n * s * s) / t;
  }
  return 0.5 * n * t + n * (i - t);
}
function us(i, e, t, n, s = {}) {
  let r = i1(e),
    o = Ms[t] + gp,
    a = Math.min(0.9, r.len / n / 3),
    l = r.len / n + a,
    c = performance.now(),
    h = Fh(Be.getWorldDirection(new A()));
  return ki(
    l,
    (u, f) => {
      let m = Math.min(0.05, (f - c) / 1e3);
      c = f;
      let g = r.len * s1(u * l, l, a),
        _ = Lf(r, g),
        p = Lf(r, Math.min(r.len, g + (s.ahead || 2))),
        d = new A(p.x - _.x, 0, p.y - _.y);
      if (d.lengthSq() > 1e-6) {
        let x = xa(mt.dir),
          E = yp(xa(d) - x),
          P = (s.turn || 1.5) * (0.35 + 0.65 * Math.min(1, Math.abs(E) / 0.6)),
          R = x + Math.sign(E) * Math.min(Math.abs(E), P * m);
        mt.dir.set(Math.sin(R), 0, -Math.cos(R));
      }
      h += ((s.pitch ?? -0.06) - h) * Math.min(1, m / 0.5);
      let v = new A(_.x, o, _.y);
      (xl(v, v.clone().add(vp(xa(mt.dir), h))), Mp(v, m));
    },
    i,
  );
}
function ds(i, e, t, n) {
  let s = Be.position.clone(),
    r = Be.getWorldDirection(new A()),
    o = new A(It(e[0]), Ms[t] + e[2], Ut(e[1])).sub(s),
    a = xa(r),
    l = yp(xa(o) - a),
    c = Fh(r),
    h = Fh(o),
    u = performance.now();
  return ki(
    n,
    (f, m) => {
      let g = Math.min(0.05, (m - u) / 1e3);
      u = m;
      let _ = Qh(f),
        p = vp(a + l * _, c + (h - c) * _);
      (mt.dir.set(p.x, 0, p.z).normalize(), xl(s, s.clone().add(p)), Mp(s, g));
    },
    i,
  );
}
var va = (i, e) => ki(e, () => {}, i);
function Ep(i, e, t, n = 5) {
  let s = e ? 1 : 18,
    r = t ? 1 : 18,
    o = r < s ? -1 : 1,
    a = Ms[t] - Ms[e],
    l = !1;
  return (
    (mt.riding = !0),
    ki(
      n,
      (c) => {
        let h = c < 0.5 ? 2 * c * c : 1 - 2 * (1 - c) * (1 - c);
        (!l &&
          c >= 0.5 &&
          ((l = !0),
          (Be.position.y += a),
          (at.target.y += a),
          iu(ti(Be.position.y)),
          Be.lookAt(Be.position.clone().add(Be.getWorldDirection(new A())))),
          tu(Math.round(s + (r - s) * h), c < 1 ? o : 0),
          c >= 1 && (mt.riding = !1));
      },
      i,
    ).then((c) => ((mt.riding = !1), c))
  );
}
async function bp(i, e, t, n, s) {
  let r = new A(It(e[0]), Ms[t] + gp, Ut(e[1])),
    o = new A(It(n[0]), Ms[t] + n[2], Ut(n[1]));
  if (Be.position.distanceTo(r) > 0.6) {
    if (
      !(await ki(
        0.45,
        (l) => {
          ni.style.opacity = String(l);
        },
        i,
      )) ||
      (xl(r, o),
      (Be.fov = fl(s)),
      Be.updateProjectionMatrix(),
      iu(ti(r.y)),
      (Ge.toneMappingExposure = Math.pow(2, ba(_l(r)))),
      !(await ki(
        0.6,
        (l) => {
          ni.style.opacity = String(1 - l);
        },
        i,
      )))
    )
      return !1;
  } else (xl(r, o), (Be.fov = fl(s)), Be.updateProjectionMatrix());
  let a = o.clone().sub(r);
  return (mt.dir.set(a.x, 0, a.z).normalize(), !0);
}
function Df() {
  ((at.enablePan = !1),
    (at.enableZoom = !1),
    (at.rotateSpeed = -0.35),
    (at.minDistance = 0.01),
    (at.maxDistance = 1),
    (at.minPolarAngle = 0.15 * Math.PI),
    (at.maxPolarAngle = 0.85 * Math.PI),
    (Ch.hidden = !0),
    (gr.textContent = yi
      ? "\u62D6\u66F3\u74B0\u9867\u30FB\u9EDE\u5169\u4E0B\u5730\u677F\u8D70\u904E\u53BB"
      : "\u62D6\u66F3\u74B0\u9867\u30FB\u96D9\u64CA\u5730\u677F\u8D70\u904E\u53BB"));
}
function su(i) {
  (mt.seq && ((mt.seq.abort = !0), (mt.seq.by = i), (mt.seq = null)),
    (ni.style.opacity = "0"));
}
async function Oh(i, e, t) {
  su("new");
  let n = { abort: !1, by: "" };
  ((mt.seq = n),
    (At = null),
    (gi = null),
    (xs = "eye"),
    (at.enabled = !1),
    Df(),
    t &&
      (gr.textContent =
        "\u5C0E\u89BD\u4E2D\u30FB\u9EDE\u4E00\u4E0B\u756B\u9762\u5C31\u505C\u5728\u9019\u88E1"));
  for (let o in xi)
    xi[o].setAttribute("aria-pressed", o === t ? "true" : "false");
  let s = Be.getWorldDirection(new A());
  (mt.dir.set(s.x, 0, s.z),
    mt.dir.lengthSq() < 1e-6 && mt.dir.set(0, 0, -1),
    mt.dir.normalize(),
    (yn = { id: "walk", kind: "eye", lens: mt.lens, ..._l(Be.position) }));
  let r = !1;
  try {
    (await i(n), (r = !n.abort));
  } catch (o) {
    console.error("seq", o);
  }
  if ((mt.seq === n && (mt.seq = null), !(n.by === "go" || n.by === "new"))) {
    ((ni.style.opacity = "0"),
      (at.enabled = !0),
      Df(),
      (yn =
        r && e
          ? e
          : { id: "walk", kind: "eye", lens: mt.lens, ..._l(Be.position) }));
    for (let o in xi)
      xi[o].setAttribute(
        "aria-pressed",
        r && e && o === e.id ? "true" : "false",
      );
    Nt();
  }
}
Ge.domElement.addEventListener("pointerdown", () => {
  mt.seq && (su("user"), (at.enabled = !0));
});
async function r1(i) {
  if (
    ((mt.lens = 16),
    !(await bp(i, [446, 862], 0, [300, 830, 1.45], 16)) ||
      (_p(1, 0), _i(0, 0, 0.01, i), !(await va(i, 0.7))) ||
      !(await us(
        i,
        [
          [446, 862],
          [420, 852],
          [392, 845],
          [360, 832],
          [300, 812],
          [252, 800],
        ],
        0,
        1.1,
      )))
  )
    return;
  let e = _i(0, 1, 1.6, i);
  (await ds(i, [190, 800, 1.4], 0, 0.9)) &&
    (await e,
    (await us(
      i,
      [
        [252, 800],
        [214, 800],
        [166, 800],
      ],
      0,
      0.9,
      { ahead: 1 },
    )) &&
      (await ds(i, [300, 800, 1.5], 0, 1.6)) &&
      (await _i(0, 0, 1.6, i)) &&
      (await Ep(i, 0, 1, 5.5)) &&
      (await _i(1, 1, 1.6, i)) &&
      (await us(
        i,
        [
          [166, 800],
          [230, 806],
          [300, 834],
          [400, 878],
          [560, 880],
          [660, 878],
          [722, 862],
          [790, 832],
        ],
        1,
        1.25,
      )) &&
      (_i(1, 0, 1.6),
      (await ds(i, [870, 470, 4], 1, 1.8)) &&
        (await va(i, 1.8)) &&
        (await us(
          i,
          [
            [790, 832],
            [880, 792],
            [1e3, 762],
            [1075, 702],
            [1125, 626],
            [1160, 600],
            [1290, 600],
            [1350, 532],
            [1366, 497],
            [1600, 497],
            [1626, 530],
            [1680, 600],
            [1767, 600],
            [1812, 600],
          ],
          1,
          1.5,
        )) &&
        (await us(
          i,
          [
            [1812, 600],
            [2036, 526],
            [2167, 380],
            [2328, 185],
            [2353, -718],
            [2426, -898],
            [3328, -908],
            [3548, -937],
            [3816, -864],
            [4157, -498],
            [4499, -108],
            [4889, 356],
            [5304, 648],
          ],
          1,
          3,
          { ahead: 3.5, pitch: 0, turn: 1.2 },
        )) &&
        (await ds(i, [5621, 877, 0.6], 1, 1.8)) &&
        (await va(i, 1.2)) &&
        (await ds(i, [12889, 2038, 9], 1, 2.6))));
}
var nl = (i) => [i[0] / zt + Oi, Bi - i[1] / zt];
async function a1(i) {
  if (((mt.lens = 15), ms !== 2)) {
    ((gr.textContent = "\u8F09\u5165\u8857\u666F\u4E2D\u2026"),
      (ni.style.opacity = "0.6"));
    let t = await gs();
    if (((ni.style.opacity = "0"), !t || i.abort)) return;
    gr.textContent =
      "\u5C0E\u89BD\u4E2D\u30FB\u9EDE\u4E00\u4E0B\u756B\u9762\u5C31\u505C\u5728\u9019\u88E1";
  }
  let e = pp.walk.map(nl);
  (await bp(i, e[0], 1, [e[3][0], e[3][1], 1.5], 15)) &&
    (await va(i, 0.9)) &&
    (await us(i, e.concat([nl([-392, 52.3]), nl([-398.5, 52.4])]), 1, 3.2, {
      ahead: 3.5,
      pitch: 0,
      turn: 1.15,
    })) &&
    (await ds(i, [...nl([-410.5, 44.5]), 2.4], 1, 2.2)) &&
    (await va(i, 1));
}
var vt = { scr: [], fs: 0, pj: null, pjMat: null, tex: null, cr: 1 },
  o1 = 2.583,
  l1 = 2.583 - 0.3,
  fs = 0.36,
  ur = 2.54,
  Uf = 734.5,
  Nf = 923.6,
  c1 = 658.85,
  Sp = 0.62;
function h1() {
  for (let i of ["scr_fabric", "scr_dark"]) {
    let e = it.children.find((s) => s.isMesh && s.name === i);
    if (!e) continue;
    let t = e.geometry.getAttribute("position"),
      n = new Float32Array(t.count);
    for (let s = 0; s < t.count; s++) n[s] = t.getY(s);
    vt.scr.push({ mesh: e, pos: t, z: n });
  }
  (bl(vt.fs), u1().catch((i) => console.error("projection", i)));
}
function bl(i) {
  vt.fs = i;
  let e = (1 - i) * l1;
  for (let t of vt.scr) {
    let n = t.pos.array;
    for (let s = 0; s < t.z.length; s++)
      n[3 * s + 1] = Math.min(t.z[s] + e, o1);
    ((t.pos.needsUpdate = !0), (t.mesh.visible = i > 0.002));
  }
  if (vt.pj) {
    let t = Math.max(fs, fs + e),
      n = ur - t,
      s = (t - fs) / (ur - fs);
    ((vt.pj.visible = n > 0.01),
      n > 0.01 &&
        ((vt.pj.scale.y = n / (ur - fs)),
        (vt.pj.position.y = ur - n / 2),
        vt.pj.updateMatrix(),
        vt.tex.repeat.set(1, vt.cr * (1 - s)),
        vt.tex.offset.set(0, (1 - vt.cr) / 2 + vt.cr * s)));
  }
  (ru(), Nt());
}
function vl(i, e = 2.6) {
  let t = vt.fs;
  return Math.abs(t - i) < 0.001
    ? Promise.resolve(!0)
    : ki(e * Math.abs(i - t), (n) => bl(t + (i - t) * Qh(n)));
}
async function u1() {
  let i = await yr(cp),
    e = (Nf - Uf) * zt,
    t = ur - fs;
  ((vt.cr = Math.min(1, i.image.width / i.image.height / (e / t))),
    (vt.tex = i));
  let n = new Kt({
      map: i,
      fog: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -4,
    }),
    s = { value: (Sp * ml) / Ge.toneMappingExposure };
  ((n.userData.uGain = s),
    (n.onBeforeCompile = (o) => {
      ((o.uniforms.uGain = s),
        (o.fragmentShader = o.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform float uGain;
` + Jh,
          )
          .replace(
            "#include <opaque_fragment>",
            "gl_FragColor = vec4( invAgX( outgoingLight ) * uGain, 1.0 );",
          )));
    }));
  let r = new dt(new jn(e, t), n);
  ((r.rotation.y = Math.PI),
    r.position.set(It((Uf + Nf) / 2), (fs + ur) / 2, Ut(c1) - 0.003),
    (r.name = "pjpicture"),
    (r.matrixAutoUpdate = !1),
    r.updateMatrix(),
    it.add(r),
    (vt.pj = r),
    (vt.pjMat = n),
    bl(vt.fs));
}
var vr = { closed: !1 };
function Bh(i = Pt) {
  for (let e of it.children) {
    if (!e.isMesh) continue;
    let t = e.name,
      n = vr.closed;
    t === "dleaf_o" || t === "dhw_o"
      ? (e.visible = !n)
      : t === "dleaf_c" || t === "dhw_c"
        ? (e.visible = n)
        : t === "dmold_o"
          ? (e.visible = !n && i === "neo")
          : t === "dmold_c" && (e.visible = n && i === "neo");
  }
  { const Pon = window.__PLAYON, n = vr.closed;
    const dv = (t) => t === "dleaf_o" || t === "dhw_o" ? !n : t === "dleaf_c" || t === "dhw_c" ? n : t === "dmold_o" ? !n && i === "neo" : t === "dmold_c" ? n && i === "neo" : !0;
    for (let e of it.children) { if (!e.isMesh) continue; const nm = e.name;
      if (/__p$/.test(nm)) continue;
      if (window.__PDUP.has(nm) || window.__PCO.has(nm)) { if (Pon) { if (e.__pv === undefined) e.__pv = e.visible; e.visible = !1; } else if (e.__pv !== undefined) { e.visible = e.__pv; e.__pv = undefined; } } }
    const base = {}; for (let e of it.children) if (e.isMesh && window.__PDUP.has(e.name)) base[e.name] = e;
    for (let e of it.children) { if (!e.isMesh || !/__p$/.test(e.name)) continue; const o = base[e.name.slice(0, -3)]; e.visible = !!Pon && (o ? (o.__pv !== undefined ? o.__pv : o.visible) : !0); } }
  try { for (let o of Xh) o.visible = window.__xhv(o); } catch (e) {}
  Nt();
}
function wp(i) {
  ((vr.closed = i), Bh(), ru());
}
var d1 = document.getElementById("r10seg"),
  pa = {};
for (let [i, e] of [
  ["scr", () => vl(vt.fs > 0.5 ? 0 : 1)],
  ["door", () => wp(!vr.closed)],
]) {
  let t = document.createElement("button");
  ((t.type = "button"),
    t.setAttribute("role", "switch"),
    (t.onclick = e),
    d1.appendChild(t),
    (pa[i] = t));
}
function ru() {
  (pa.scr.setAttribute("aria-checked", vt.fs > 0.5 ? "true" : "false"),
    (pa.scr.textContent =
      vt.fs > 0.5
        ? "\u6536\u8D77\u6295\u5F71\u5E55"
        : "\u653E\u4E0B\u6295\u5F71\u5E55"),
    pa.door.setAttribute("aria-checked", vr.closed ? "true" : "false"),
    (pa.door.textContent = vr.closed
      ? "\u6253\u958B\u623F\u9580"
      : "\u95DC\u4E0A\u623F\u9580"));
}
ru();
window.__r10 = {
  setScreen: bl,
  screenTo: vl,
  setRoomDoors: wp,
  R10: vt,
  RDOORS: vr,
};
window.__r7 = {
  cam: () => Be.position.toArray().map((i) => +i.toFixed(2)),
  busy: () => !!mt.seq,
  doors: () => Wn.open.slice(),
};
async function f1(i, e) {
  let t = Be.position.x / zt + Oi,
    n = Be.position.z / zt + Bi,
    s =
      t > 214
        ? [
            [t, n],
            [214, 800],
            [166, 800],
          ]
        : [
            [t, n],
            [166, 800],
          ];
  (Math.hypot(t - 166, n - 800) > 2 &&
    !(await us(i, s, e, 0.9, { ahead: 1 }))) ||
    ((await ds(i, [300, 800, 1.5], e, 1.4)) &&
      (await _i(e, 0, 1.6, i)) &&
      (await Ep(i, e, 1 - e, 5)) &&
      (await _i(1 - e, 1, 1.6, i)));
}
var Sl = [],
  Sa = [],
  Ff = new Ho();
function Tp(i, e) {
  let t = Ge.domElement.getBoundingClientRect();
  Ff.setFromCamera(
    new se(((i - t.left) / t.width) * 2 - 1, -((e - t.top) / t.height) * 2 + 1),
    Be,
  );
  let n = Ge.clippingPlanes.length ? Th.constant : 1 / 0;
  if (mt.seq) return;
  let s = An.endsWith("i"),
    r = Ff.intersectObjects(Sa, !1).find(
      (f) => (() => { for (let q = f.object; q; q = q.parent) if (!q.visible) return !1; return !0; })() && f.point.y <= n + 0.001 && (s || f.point.y > -5),
    );
  if (!r || (xs !== "orbit" && ti(r.point.y) !== ti(Be.position.y))) return;
  let o = r.point.x / zt + Oi,
    a = r.point.z / zt + Bi,
    l = ti(r.point.y) ? 1 : 0;
  if (
    ["c_door", "c_dmarble", "c_gold", "dark"].includes(r.object.name) &&
    o > 194 &&
    o < 202.5 &&
    a > 700 &&
    a < 900 &&
    r.point.y - Ms[l] > 0.05
  ) {
    _i(l, 1);
    return;
  }
  if (!Sl.includes(r.object) || (r.face && r.face.normal.y < 0.7)) return;
  if (
    o > 128 &&
    o < 196 &&
    a > 769 &&
    a < 832 &&
    Wn.open[l] > 0.9 &&
    xs !== "orbit"
  ) {
    Oh((f) => f1(f, l));
    return;
  }
  let c = new A();
  (Be.getWorldDirection(c),
    (c.y = 0),
    xs === "orbit" && c.copy(r.point).sub(Be.position).setY(0),
    c.lengthSq() < 1e-6 && c.set(0, 0, -1),
    c.normalize());
  let h = new A(r.point.x, r.point.y + 1.45, r.point.z),
    u = ["outdoor", "c_paving", "c_lawn", "envground"].includes(r.object.name);
  Yh({
    id: "walk",
    kind: "eye",
    eyeW: h,
    lookW: h
      .clone()
      .add(c)
      .setY(h.y - (u ? 0.25 : 0.15)),
    lens: u ? 15 : 17,
    out: u ? 1 : 0,
    ev:
      !u && yn && yn.kind !== "orbit" && !yn.out && yn.ev !== void 0
        ? yn.ev
        : 0.8,
  });
}
Ge.domElement.addEventListener("dblclick", (i) => Tp(i.clientX, i.clientY));
var bh = 0,
  Of = 0,
  Bf = 0,
  Ap = 0,
  Rp = 0;
Ge.domElement.addEventListener("pointerdown", (i) => {
  ((Ap = i.clientX), (Rp = i.clientY));
});
Ge.domElement.addEventListener("pointerup", (i) => {
  if (
    i.pointerType !== "touch" ||
    Math.hypot(i.clientX - Ap, i.clientY - Rp) > 10
  )
    return;
  let e = performance.now();
  e - bh < 320 && Math.hypot(i.clientX - Of, i.clientY - Bf) < 30
    ? (Tp(i.clientX, i.clientY), (bh = 0))
    : ((bh = e), (Of = i.clientX), (Bf = i.clientY));
});
function p1() {
  let i = innerWidth,
    e = innerHeight;
  ((Be.aspect = i / e),
    yn && yn.kind !== "orbit"
      ? (Be.fov = fl(yn.lens))
      : yn && (Be.fov = qh(i / e)),
    Be.updateProjectionMatrix(),
    Ge.setSize(i, e),
    Es.setSize(i, e),
    qn.setSize(i, e),
    Nt());
}
addEventListener("resize", p1);
at.addEventListener("change", Nt);
var kf = (i) => (i < 0.5 ? 4 * i * i * i : 1 - Math.pow(-2 * i + 2, 3) / 2),
  zf = matchMedia("(prefers-reduced-motion: reduce)");
Ge.setAnimationLoop(() => {
  if (_a.size) {
    let e = performance.now();
    for (let t of [..._a]) t(e);
    ei = 2;
  }
  if (
    (nt && Rt && ti(Be.position.y) !== xr && iu(ti(Be.position.y)),
    xr &&
      nu.length &&
      Be.position.distanceTo(t1) < 70 &&
      (xp(performance.now()), (ei = Math.max(ei, 1))),
    At)
  ) {
    let e = Math.min(
        1,
        (performance.now() - At.t0) / (zf.matches ? 1 : At.dur),
      ),
      t = kf(e);
    (Be.position.lerpVectors(At.p0, At.p1, t),
      at.target.lerpVectors(At.t0v, At.t1, t),
      (Be.fov = At.f0 + (At.f1 - At.f0) * t),
      (Ge.toneMappingExposure = At.e0 + (At.e1 - At.e0) * t),
      Be.updateProjectionMatrix(),
      (ni.style.opacity = At.fade
        ? Math.min(1, 1.7 * Math.sin(Math.PI * e)).toFixed(3)
        : "0"),
      e >= 1 && ((At = null), (ni.style.opacity = "0")),
      (ei = 2));
  } else if (gi) {
    let e = Math.min(1, (performance.now() - gi.t0) / (zf.matches ? 1 : 500));
    ((Ge.toneMappingExposure = gi.e0 + (gi.e1 - gi.e0) * kf(e)),
      e >= 1 && (gi = null),
      (ei = 2));
  }
  !mt.seq && at.update() && (ei = 2);
  let i = Dt.clamp(Be.position.y * 0.06, 0.1, 1.2);
  if (
    (Math.abs(Be.near - i) > 1e-4 &&
      ((Be.near = i), Be.updateProjectionMatrix()),
    ei > 0)
  ) {
    let e =
      Be.position.x > It(1150) + 0.05 ||
      Be.position.z < Ut(293) - 0.05 ||
      Be.position.x < It(210) - 0.05;
    (Iy(),
      (qn.enabled = An.endsWith("i") && (He || !e)),
      (qn.threshold = He ? (e ? 2.6 : 2) : 2.6),
      (qn.strength = He ? 0.14 : 0.09),
      qy(),
      cr && (cr.userData.uGain.value = ml / Ge.toneMappingExposure),
      vt.pjMat &&
        (vt.pjMat.userData.uGain.value = (Sp * ml) / Ge.toneMappingExposure),
      Es.render(),
      ei--);
  }
});
$y()
  .then(() => (Xy(), Yy()))
  .catch((i) => {
    ((zh.textContent = "\u8F09\u5165\u5931\u6557\uFF1A" + i.message),
      console.error(i));
  });
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

// ===== Living-room edits (bookcase ext, warm sofa, glass display, full TV wall, chandelier) =====
function __mods() {
  try {
    Ge.localClippingEnabled = !0;
    const byName = (n) => it.children.find((c) => c.isMesh && c.name === n);
    const box = (x0, x1, y0, y1, z0, z1) => [
      new sn(new A(1, 0, 0), -x1), new sn(new A(-1, 0, 0), x0),
      new sn(new A(0, 1, 0), -y1), new sn(new A(0, -1, 0), y0),
      new sn(new A(0, 0, 1), -z1), new sn(new A(0, 0, -1), z0)];
    const clip = (names, planes) => (window.__INT ? [] : names).forEach((n) => {
      const m = byName(n); if (!m) return;
      const mats = [m.material, m.userData.base, m.userData.cap].filter(Boolean);
      new Set(mats).forEach((mt) => { mt.clippingPlanes = (mt.clippingPlanes || []).concat(planes); mt.clipIntersection = !0; mt.needsUpdate = !0; });
    });
    // NOTE: clipIntersection with multiple boxes on one material would merge; keep one box per material.
    // --- clone triangles of a region (keeps uv + baked light) ---
    const cloneRegion = (name, inside, xf) => { if (window.__INT) return;
      const m = byName(name); if (!m) return;
      const g = m.geometry, idx = g.index.array, P = g.attributes.position.array, out = [];
      for (let k = 0; k < idx.length; k += 3) {
        let cx = 0, cy = 0, cz = 0;
        for (let q = 0; q < 3; q++) { cx += P[idx[k + q] * 3] / 3; cy += P[idx[k + q] * 3 + 1] / 3; cz += P[idx[k + q] * 3 + 2] / 3; }
        if (inside(cx, cy, cz)) out.push(idx[k], idx[k + 1], idx[k + 2]);
      }
      if (!out.length) return;
      const ng = new _t();
      for (const key in g.attributes) {
        const a = g.attributes[key], s = a.itemSize, arr = new a.array.constructor(out.length * s);
        out.forEach((vi, j) => { for (let c = 0; c < s; c++) arr[j * s + c] = a.array[vi * s + c]; });
        if (key === 'position') for (let j = 0; j < out.length; j++) { const r = xf(arr[j * 3], arr[j * 3 + 1], arr[j * 3 + 2]); arr[j * 3] = r[0]; arr[j * 3 + 1] = r[1]; arr[j * 3 + 2] = r[2]; }
        ng.setAttribute(key, new lt(arr, s, a.normalized));
      }
      const nm = new dt(ng, m.material); nm.name = name + '_mod'; nm.userData = m.userData; nm.castShadow = nm.receiveShadow = !0; it.add(nm);
    };
    // 1) bookcase: copy west bookcase (z -4.16..-2.52) into the gap up to the back-wall window corner
    const Z0 = -4.1616, Z1 = -2.5216, T0 = -5.645, sc = (Z0 - T0) / (Z1 - Z0);
    const inBk = (x, y, z) => x > 2.215 && x < 2.53 && z > Z0 - 0.002 && z < Z1 + 0.002;
    ['cabinet', 'books', 'vase', 'metal', 'brass', 'ledstrip'].forEach((n) =>
      cloneRegion(n, inBk, (x, y, z) => [x, y, T0 + (z - Z0) * sc]));
    clip(['shade', 'metal'], box(2.15, 2.66, -0.1, 1.8, -5.67, -5.2)); // remove corner floor lamp now covered by bookcase
    // 3) glass display: cut upper doors of rear cabinet run
    const X0 = 3.444, X1 = 9.225, YC = 1.2, YT = 2.58, ZB = -5.6, ZF = -5.07;
    clip(['cabinet', 'molding'], box(X0 - 0.001, X1 + 0.01, YC, 2.7, -5.63, -4.94));
    const G = new ui(); G.name = 'mods'; it.add(G);
    it.children.forEach((o) => { if (!window.__INT && o.userData && o.userData.name === 'cabinet' && o.material && o.material.isShaderMaterial) {
      const m = o.material;
      m.vertexShader = m.vertexShader.replace('void main() {', 'varying vec3 vWp; void main() { vWp = (modelMatrix * vec4(position,1.0)).xyz;');
      m.fragmentShader = m.fragmentShader.replace('void main() {', 'varying vec3 vWp; void main() { if (vWp.x > 3.443 && vWp.x < 9.235 && vWp.y > 1.2 && vWp.z > -5.63 && vWp.z < -4.94) discard;');
      m.needsUpdate = !0; } });
    const std = (c, o = {}) => new ea(Object.assign({ color: new Ae(c), roughness: 0.5, metalness: 0, emissive: new Ae(c).multiplyScalar(0.55) }, o));
    const addBox = (mat, x0, x1, y0, y1, z0, z1, par = G) => { const b = new dt(new an(x1 - x0, y1 - y0, z1 - z0), mat); b.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2); par.add(b); return b; };
    const carc = new Kt({ color: new Ae('#E6DDD0') });
    const backM = new Kt({ color: new Ae('#EADBC2') });
    const brassM = std('#C8AD80', { roughness: 0.3, metalness: 0.7, emissive: new Ae('#8a6c3e') });
    const glassM = new ta({ color: 0xffffff, roughness: 0.03, metalness: 0, transparent: !0, opacity: 0.16, clearcoat: 1, depthWrite: !1, envMapIntensity: 1.5 });
    const ledM = new Kt({ color: new Ae(3.2, 2.6, 1.8) });
    addBox(backM, X0, X1, YC, YT, ZB - 0.02, ZB);
    addBox(carc, X0, X1, YC - 0.03, YC, ZB, ZF + 0.01); // solid ledge
    addBox(carc, X0, X1, YT - 0.03, YT, ZB, ZF);
    const nb = 12, bw = (X1 - X0) / nb;
    for (let k = 0; k <= nb; k++) { const x = X0 + k * bw; if (k % 3 == 0) addBox(carc, Math.max(X0, x - 0.012), Math.min(X1, x + 0.012), YC, YT, ZB, ZF); addBox(brassM, x - 0.008, x + 0.008, YC, YT, ZF, ZF + 0.012); }
    [1.66, 2.12].forEach((y) => { addBox(glassM, X0, X1, y - 0.008, y, ZB, ZF - 0.02); addBox(brassM, X0, X1, y - 0.012, y, ZF - 0.03, ZF - 0.02); addBox(ledM, X0 + 0.01, X1 - 0.01, y - 0.016, y - 0.012, ZB + 0.02, ZB + 0.04); });
    addBox(ledM, X0 + 0.01, X1 - 0.01, YT - 0.05, YT - 0.04, ZB + 0.02, ZB + 0.04);
    addBox(brassM, X0, X1, YC, YC + 0.012, ZF, ZF + 0.012); addBox(brassM, X0, X1, YT - 0.012, YT, ZF, ZF + 0.012);
    const gl = addBox(glassM, X0, X1, YC, YT, ZF, ZF + 0.006); gl.renderOrder = 3;
    // display objects
    let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const decoM = [std('#F2EEE6', { roughness: 0.15 }), std('#C8AD80', { roughness: 0.25, metalness: 1 }), std('#8A6A4F', { roughness: 0.4 }), std('#2E2B28', { roughness: 0.3 }), std('#B9C7C2', { roughness: 0.1 })];
    [YC, 1.66, 2.12].forEach((y) => { for (let k = 0; k < nb; k++) { if (rnd() < 0.25) continue; const x = X0 + (k + 0.3 + rnd() * 0.4) * bw, t = rnd(); const mt = decoM[Math.floor(rnd() * decoM.length)];
      if (t < 0.45) { const h = 0.12 + rnd() * 0.18, r = 0.035 + rnd() * 0.04; const v = new dt(new sr(r * 0.6, r, h, 20), mt); v.position.set(x, y + h / 2, -5.36); G.add(v); }
      else if (t < 0.75) { const r = 0.05 + rnd() * 0.04; const v = new dt(new Qr(r, 20, 14), mt); v.position.set(x, y + r, -5.36); G.add(v); }
      else { for (let b = 0; b < 5; b++) addBox(decoM[(b + k) % 4], x - 0.1 + b * 0.035, x - 0.07 + b * 0.035, y, y + 0.2 + rnd() * 0.04, -5.5, -5.33); } } });
    // 4) TV wall: extend marble feature panel across the whole wall
    const sl = byName('slats');
    if (sl && !window.__INT) {
      const ba = sl.geometry.attributes.bake; let bs = [0, 0, 0], bn = 0;
      if (ba) { for (let v = 0; v < ba.count; v++) { bs[0] += ba.array[v * 3]; bs[1] += ba.array[v * 3 + 1]; bs[2] += ba.array[v * 3 + 2]; bn++; } bs = [0,1,2].map((c) => { const v = []; for (let q = 0; q < ba.count; q++) v.push(ba.array[q * 3 + c]); v.sort((a, b) => a - b); return v[Math.floor(v.length * 0.8)]; }); }
      const panel = (x0, x1, y0, y1, zf, zb) => {
        const pos = [], uv = [], nrm = [];
        const quad = (a, b, c, d, n) => { [a, b, c, a, c, d].forEach((p) => { pos.push(...p); uv.push(0.6 * p[0] - 0.072 + (n[0] ? p[2] * 0.6 : 0), 0.6435 * p[1] + (n[1] ? p[2] * 0.6 : 0)); nrm.push(...n.map((q) => q * 127)); }); };
        quad([x1, y0, zf], [x0, y0, zf], [x0, y1, zf], [x1, y1, zf], [0, 0, -1]);
        quad([x0, y1, zf], [x0, y1, zb], [x1, y1, zb], [x1, y1, zf], [0, 1, 0]);
        quad([x0, y0, zb], [x0, y0, zf], [x0, y1, zf], [x0, y1, zb], [-1, 0, 0]);
        quad([x1, y0, zf], [x1, y0, zb], [x1, y1, zb], [x1, y1, zf], [1, 0, 0]);
        const g = new _t(); g.setAttribute('position', new lt(new Float32Array(pos), 3)); g.setAttribute('normal', new lt(new Int8Array(nrm), 3, !0)); g.setAttribute('uv', new lt(new Float32Array(uv), 2));
        if (ba) { const b = new Uint16Array(pos.length); for (let v = 0; v < pos.length / 3; v++) { b[v * 3] = bs[0]; b[v * 3 + 1] = bs[1]; b[v * 3 + 2] = bs[2]; } g.setAttribute('bake', new lt(b, 3, !0)); }
        const mm = new dt(g, sl.material); mm.name = 'slats_mod'; mm.userData = sl.userData; it.add(mm);
      };
      panel(2.216, 4.918, 0, 2.58, 1.804, 1.864);
      panel(8.202, 9.224, 0, 2.58, 1.804, 1.864);
    }
    // 5) crystal chandelier over the living area
    const C = new ui(); C.position.set(6.56, 0, -1.96); G.add(C);
    const crys = new ta({ color: 0xffffff, roughness: 0.02, metalness: 0, transparent: !0, opacity: 0.75, ior: 1.6, emissive: new Ae('#cfd8e0'), clearcoat: 1, clearcoatRoughness: 0, specularIntensity: 1, envMapIntensity: 2.5, iridescence: 0.4, flatShading: !0 });
    const bulbM = new Kt({ color: new Ae(9, 7, 4.5) });
    const goldM = std('#D4B47E', { roughness: 0.25, metalness: 0.6, emissive: new Ae('#9a7a45') });
    const cyl = (r, h, y, mt, rt) => { const c = new dt(new sr(rt ?? r, r, h, 32, 1, !1), mt); c.position.y = y; C.add(c); return c; };
    const ring = (R, y) => { const n = 48; for (let k = 0; k < n; k++) { const a0 = k / n * Math.PI * 2, a1 = (k + 1) / n * Math.PI * 2, l = 2 * R * Math.sin(Math.PI / n); const s = new dt(new an(l * 1.02, 0.014, 0.014), goldM); s.position.set(R * Math.cos((a0 + a1) / 2), y, R * Math.sin((a0 + a1) / 2)); s.rotation.y = -(a0 + a1) / 2 + Math.PI / 2; C.add(s); } };
    cyl(0.11, 0.03, 2.785, goldM, 0.09); cyl(0.008, 0.28, 2.63, goldM); cyl(0.04, 0.06, 2.47, goldM);
    const tiers = [{ R: 0.42, y: 2.38, n: 10 }, { R: 0.3, y: 2.24, n: 8 }, { R: 0.17, y: 2.12, n: 6 }];
    const drop = new Uo(1, 0);
    tiers.forEach(({ R, y, n }, ti) => {
      ring(R, y);
      for (let k = 0; k < n; k++) { const a = k / n * Math.PI * 2 + ti * 0.3; const x = R * Math.cos(a), z = R * Math.sin(a);
        const arm = new dt(new an(R, 0.01, 0.01), goldM); arm.position.set(x / 2, y, z / 2); arm.rotation.y = -a; C.add(arm);
        const cup = new dt(new sr(0.022, 0.012, 0.025, 12), goldM); cup.position.set(x, y + 0.02, z); C.add(cup);
        const b = new dt(new Qr(0.018, 12, 8), bulbM); b.position.set(x, y + 0.05, z); C.add(b); }
      const nd = Math.round(R * 70);
      for (let k = 0; k < nd; k++) { const a = k / nd * Math.PI * 2; const L = 0.1 + (k % 3) * 0.035;
        for (let s = 0; s < 3; s++) { const d = new dt(drop, crys); const sz = s == 2 ? 0.022 : 0.011; d.scale.set(sz * 0.7, sz * 1.6, sz * 0.7); d.position.set(R * Math.cos(a), y - 0.03 - s * L / 2.4 - (s == 2 ? 0.02 : 0), R * Math.sin(a)); C.add(d); } }
    });
    const big = new dt(drop, crys); big.scale.set(0.05, 0.11, 0.05); big.position.y = 2.0; C.add(big);
    cyl(0.025, 0.2, 2.25, crys); 
    const bl = new dt(new Qr(0.04, 16, 12), bulbM); bl.position.y = 2.3; C.add(bl);
    console.log('DBG mods ok');
  } catch (e) { console.error('DBG mods failed', e); }
}

// ===== Annotation UI (標註) =====
(function(){
  const css=`#anBtn{position:fixed;right:10px;top:46%;z-index:60;font:600 14px var(--body,sans-serif);padding:9px 13px;border-radius:22px;border:1px solid rgba(0,0,0,.15);background:#fff;color:#222;box-shadow:0 2px 8px rgba(0,0,0,.2)}
#anBtn.on{background:#e53935;color:#fff}
#anCv{position:fixed;inset:0;width:100%;height:100%;z-index:50;touch-action:none;pointer-events:none}
#anCv.on{pointer-events:auto;cursor:crosshair}
#anBar{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(env(safe-area-inset-bottom,0px) + 10px);z-index:61;display:none;flex-wrap:wrap;justify-content:center;gap:4px;width:min(372px,calc(100% - 16px));padding:6px;border-radius:14px;background:rgba(20,20,20,.82);touch-action:none;-webkit-user-select:none;user-select:none}
#anBar.on{display:flex}
#anBar button{font:500 12.5px var(--body,sans-serif);color:#fff;background:rgba(255,255,255,.12);border:0;border-radius:8px;padding:7px 8px;min-width:34px}
#anBar button.sel{background:#fff;color:#111}
#anBar .c{width:28px;height:28px;min-width:28px;padding:0;border-radius:50%;border:2px solid transparent}
#anBar .c.sel{border-color:#fff;outline:2px solid #000}
#anBar .sep{width:100%;height:0}
#anToast{position:fixed;left:50%;top:40%;transform:translate(-50%,-50%);z-index:70;background:rgba(0,0,0,.85);color:#fff;padding:12px 14px;border-radius:10px;font:13px var(--body,sans-serif);max-width:86%;display:none;white-space:pre-wrap;word-break:break-all;text-align:center}
body.annot .dock,body.annot #hint{visibility:hidden}`;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  const cv=document.createElement('canvas');cv.id='anCv';document.body.appendChild(cv);
  const ctx=cv.getContext('2d');
  const btn=document.createElement('button');btn.id='anBtn';btn.type='button';btn.textContent='✏️ 標註';document.body.appendChild(btn);
  const bar=document.createElement('div');bar.id='anBar';document.body.appendChild(bar);
  const toast=document.createElement('div');toast.id='anToast';document.body.appendChild(toast);
  const S={on:false,color:'#e53935',w:4,tool:'pen',items:[],cur:null};
  const COLORS=[['#e53935','紅'],['#fdd835','黃'],['#1e88e5','藍'],['#43a047','綠']];
  const mk=(t,f,cls)=>{const b=document.createElement('button');b.type='button';b.innerHTML=t;if(cls)b.className=cls;b.onclick=f;bar.appendChild(b);return b;};
  const cBtns=COLORS.map(([c,n])=>{const b=mk('',()=>{S.color=c;sync();},'c');b.style.background=c;b.title=n;b.setAttribute('aria-label',n);b.dataset.v=c;return b;});
  const wBtns=[[3,'細'],[8,'粗']].map(([w,n])=>{const b=mk(n,()=>{S.w=w;sync();});b.dataset.v=w;return b;});
  bar.appendChild(Object.assign(document.createElement('div'),{className:'sep'}));
  const tBtns=[['pen','畫筆'],['arrow','箭頭'],['rect','框選'],['text','文字']].map(([t,n])=>{const b=mk(n,()=>{S.tool=t;sync();});b.dataset.v=t;return b;});
  mk('復原',()=>{S.items.pop();draw();});
  mk('清除',()=>{if(!S.items.length||confirm('清除所有標註？')){S.items=[];draw();}});
  bar.appendChild(Object.assign(document.createElement('div'),{className:'sep'}));
  mk('💾 儲存圖片',()=>save());
  mk('📍 複製視角',()=>copyView());
  mk('🖼️ 顯示圖片',()=>showImg());
  mk('✅ 完成/離開',()=>setOn(false));
  function sync(){cBtns.forEach(b=>b.classList.toggle('sel',b.dataset.v===S.color));wBtns.forEach(b=>b.classList.toggle('sel',+b.dataset.v===S.w));tBtns.forEach(b=>b.classList.toggle('sel',b.dataset.v===S.tool));}
  sync();
  let dpr=1;
  function resize(){dpr=Math.min(devicePixelRatio||1,3);cv.width=Math.round(innerWidth*dpr);cv.height=Math.round(innerHeight*dpr);draw();}
  addEventListener('resize',resize);resize();
  function paint(c,it,k){
    c.save();c.scale(k,k);c.strokeStyle=c.fillStyle=it.color;c.lineWidth=it.w;c.lineCap='round';c.lineJoin='round';
    const p=it.pts;
    if(it.tool==='pen'){c.beginPath();p.forEach((q,i)=>i?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1]));if(p.length===1)c.lineTo(p[0][0]+.1,p[0][1]);c.stroke();}
    else if(it.tool==='rect'&&p.length>1){c.strokeRect(p[0][0],p[0][1],p[1][0]-p[0][0],p[1][1]-p[0][1]);}
    else if(it.tool==='arrow'&&p.length>1){const[a,b]=p,ang=Math.atan2(b[1]-a[1],b[0]-a[0]),h=10+it.w*2.2;c.beginPath();c.moveTo(a[0],a[1]);c.lineTo(b[0],b[1]);c.stroke();c.beginPath();c.moveTo(b[0],b[1]);c.lineTo(b[0]-h*Math.cos(ang-.45),b[1]-h*Math.sin(ang-.45));c.lineTo(b[0]-h*Math.cos(ang+.45),b[1]-h*Math.sin(ang+.45));c.closePath();c.fill();}
    else if(it.tool==='text'){const fs=it.w>5?24:17;c.font=`700 ${fs}px "Noto Sans TC",sans-serif`;c.textBaseline='middle';c.lineWidth=4;c.strokeStyle='rgba(0,0,0,.75)';c.strokeText(it.text,p[0][0],p[0][1]);c.fillText(it.text,p[0][0],p[0][1]);}
    c.restore();
  }
  function draw(){ctx.clearRect(0,0,cv.width,cv.height);S.items.forEach(it=>paint(ctx,it,dpr));if(S.cur)paint(ctx,S.cur,dpr);}
  const pos=e=>[e.clientX,e.clientY];
  cv.addEventListener('pointerdown',e=>{if(!S.on)return;e.preventDefault();
    if(S.tool==='text'){const p=pos(e);setTimeout(()=>{const t=prompt('輸入文字：');if(t&&t.trim()){S.items.push({tool:'text',color:S.color,w:S.w,pts:[p],text:t.trim()});draw();}},10);return;}
    cv.setPointerCapture(e.pointerId);S.cur={tool:S.tool,color:S.color,w:S.w,pts:[pos(e)]};draw();});
  cv.addEventListener('pointermove',e=>{if(!S.cur)return;e.preventDefault();const p=pos(e);if(S.cur.tool==='pen')S.cur.pts.push(p);else S.cur.pts[1]=p;draw();});
  const up=()=>{if(!S.cur)return;if(S.cur.tool==='pen'||S.cur.pts.length>1)S.items.push(S.cur);S.cur=null;draw();};
  cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
  ['touchstart','touchmove','gesturestart'].forEach(t=>cv.addEventListener(t,e=>{if(S.on)e.preventDefault();},{passive:false}));
  function setOn(v){S.on=v;btn.classList.toggle('on',v);btn.textContent=v?'✏️ 標註中':'✏️ 標註';cv.classList.toggle('on',v);bar.classList.toggle('on',v);document.body.classList.toggle('annot',v);at.enabled=!v;}
  btn.onclick=()=>setOn(!S.on);
  function info(){const v=document.querySelector('#views button[aria-pressed="true"]'),s=document.querySelector('#styles [aria-checked="true"]'),t=document.querySelector('#times [aria-checked="true"]');return [v?v.textContent:'自由視角',s?s.textContent:'',t?t.textContent:''].filter(Boolean).join('・');}
  const f2=n=>n.toFixed(2);
  function viewCode(){const p=Be.position,t=at.target;return `VIEW p=${f2(p.x)},${f2(p.y)},${f2(p.z)} t=${f2(t.x)},${f2(t.y)},${f2(t.z)} fov=${Math.round(Be.fov)} [${info()}]`;}
  function showToast(m,ms=2600){toast.textContent=m;toast.style.display='block';clearTimeout(showToast.h);showToast.h=setTimeout(()=>toast.style.display='none',ms);}
  async function copyView(){const c=viewCode();try{await navigator.clipboard.writeText(c);showToast('已複製視角代碼：\n'+c,4000);}catch(e){prompt('複製這段視角代碼：',c);}}
  window.__annotViewCode=viewCode;
  // capture right after the composer renders (no preserveDrawingBuffer needed)
  let capRes=null;const _r=Es.render.bind(Es);
  Es.render=function(...a){const r=_r(...a);if(capRes){const f=capRes;capRes=null;try{const g=Ge.domElement,o=document.createElement('canvas');o.width=g.width;o.height=g.height;o.getContext('2d').drawImage(g,0,0);f(o);}catch(e){f(null);}}return r;};
  function grab(){return new Promise(res=>{capRes=res;ei=Math.max(ei,2);setTimeout(()=>{if(capRes===res){capRes=null;res(null);}},8000);});}
  async function makeImg(){
    const g=await grab();const W=Math.round(innerWidth*dpr),H=Math.round(innerHeight*dpr);
    const o=document.createElement('canvas');o.width=W;o.height=H;const c=o.getContext('2d');
    c.fillStyle='#ddd';c.fillRect(0,0,W,H);if(g)c.drawImage(g,0,0,W,H);
    c.drawImage(cv,0,0,W,H);
    const cap=info()+'  '+new Date().toLocaleString('zh-TW',{hour12:false}),fs=13*dpr;
    c.font=`500 ${fs}px "Noto Sans TC",sans-serif`;const tw=c.measureText(cap).width;
    c.fillStyle='rgba(0,0,0,.6)';c.fillRect(8*dpr,H-fs-18*dpr,tw+14*dpr,fs+10*dpr);c.fillStyle='#fff';c.textBaseline='middle';c.fillText(cap,15*dpr,H-fs/2-13*dpr);
    let blob=await new Promise(r=>o.toBlob(r,'image/png'));
    if(!blob||!blob.size){const d=o.toDataURL('image/png'),bin=atob(d.split(',')[1]),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);blob=new Blob([u],{type:'image/png'});}
    const name='annot_'+new Date().toISOString().replace(/[-:T]/g,'').slice(0,14)+'.png';
    const file=new File([blob],name,{type:'image/png',lastModified:Date.now()});
    window.__annotLast=o;return {blob,name,file,ok:!!g};
  }
  function download(im){const a=document.createElement('a');a.href=URL.createObjectURL(im.blob);a.download=im.name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},60000);}
  const canFiles=(f)=>{try{return !!(navigator.share&&navigator.canShare&&navigator.canShare({files:[f]}));}catch(e){return false;}};
  function overlay(im){
    let ov=document.getElementById('anOv');if(ov)ov.remove();
    ov=document.createElement('div');ov.id='anOv';ov.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.92);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:12px;box-sizing:border-box';
    const tip=document.createElement('div');tip.textContent='長按圖片 → 儲存到相簿，再從聊天室上傳';tip.style.cssText='color:#fff;font:600 16px "Noto Sans TC",sans-serif;text-align:center';
    const img=document.createElement('img');img.src=URL.createObjectURL(im.blob);img.alt=im.name;img.style.cssText='max-width:100%;max-height:72vh;object-fit:contain;border-radius:6px;-webkit-touch-callout:default;user-select:auto';
    const row=document.createElement('div');row.style.cssText='display:flex;gap:10px';
    const bt=(t,f)=>{const b=document.createElement('button');b.textContent=t;b.style.cssText='font:600 15px sans-serif;padding:10px 16px;border-radius:20px;border:0;background:#fff;color:#222';b.onclick=f;row.appendChild(b);};
    if(canFiles(im.file))bt('📤 分享圖片',async()=>{try{await navigator.share({files:[im.file]});}catch(e){}});
    bt('⬇️ 下載',()=>download(im));
    bt('✕ 關閉',()=>{URL.revokeObjectURL(img.src);ov.remove();});
    ov.append(tip,img,row);document.body.appendChild(ov);
  }
  async function save(){
    showToast('產生圖片中…',8000);
    const im=await makeImg();toast.style.display='none';
    if(canFiles(im.file)){
      try{await navigator.share({files:[im.file]});return;}
      catch(e){if(e&&e.name==='AbortError')return; overlay(im);return;} // e.g. gesture expired: overlay has a share button
    }
    overlay(im);download(im);
  }
  async function showImg(){showToast('產生圖片中…',8000);const im=await makeImg();toast.style.display='none';overlay(im);}
})();

// ===== White TV wall (白色系電視牆) =====
(function(){
  const W=new Ae('#F4F2EE');
  const patch=(mt)=>{ if(!mt||mt.__white) return; mt.__white=1;
    if(mt.isShaderMaterial){ if(mt.uniforms&&mt.uniforms.albedo) mt.uniforms.albedo.value.copy(W); return; }
    const prev=mt.onBeforeCompile;
    mt.onBeforeCompile=(sh,r)=>{ prev&&prev.call(mt,sh,r); sh.uniforms.uWhite={value:W};
      sh.fragmentShader='uniform vec3 uWhite;\n'+sh.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\n diffuseColor.rgb = mix(diffuseColor.rgb, uWhite, 0.85);'); };
    mt.customProgramCacheKey=()=> 'white1'; mt.needsUpdate=!0; };
  const run=()=>{ let n=0; it.traverse(o=>{ if(o.isMesh&&(o.name==='slats'||o.name==='slats__p'||o.name==='slats_mod'||(o.userData&&o.userData.name==='slats'))){ n++; [o.material,o.userData.base,o.userData.cap].forEach(patch);} }); return n; };
  const h=setInterval(()=>{ if(run()>0 && it.getObjectByName('slats_mod')){ clearInterval(h); ei=Math.max(ei,2); } },700);
  setTimeout(()=>clearInterval(h),180000);
})();

// ===== Kids rooms: wardrobe to door wall, door moved, desk to west wall =====
function __kids() {
  try {
    const R = [ // local(room1) -> world
      { s: 1, ox: 0, oz: 0 }, { s: 1, ox: 2.419, oz: 0 },
      { s: -1, ox: -2.911, oz: 0.984 }, { s: -1, ox: -0.492, oz: 0.984 }];
    const W = (r, x, z) => [r.ox + r.s * x, r.oz + r.s * z];
    const L = (r, x, z) => [r.s * (x - r.ox), r.s * (z - r.oz)];
    const meshes = (re) => it.children.filter((c) => c.isMesh && !c.isInstancedMesh && re.test(c.name));
    const inB = (b, x, y, z) => x >= b[0] && x <= b[1] && y >= b[2] && y <= b[3] && z >= b[4] && z <= b[5];
    const wbox = (r, b) => { const a = W(r, b[0], b[4]), c = W(r, b[1], b[5]); return [Math.min(a[0], c[0]), Math.max(a[0], c[0]), b[2], b[3], Math.min(a[1], c[1]), Math.max(a[1], c[1])]; };
    // in-place vertex transform (local coords), positions + normals
    const xformVerts = (re, r, b, f) => (window.__INT ? [] : meshes(re)).forEach((m) => {
      const P = m.geometry.attributes.position, N = m.geometry.attributes.normal; let hit = 0;
      for (let v = 0; v < P.count; v++) {
        const [lx, lz] = L(r, P.getX(v), P.getZ(v)), y = P.getY(v);
        if (!inB(b, lx, y, lz)) continue;
        const o = f(lx, y, lz, N.getX(v) * r.s, N.getZ(v) * r.s); const w = W(r, o[0], o[2]);
        P.setXYZ(v, w[0], o[1], w[1]); if (o[3] !== undefined) N.setXYZ(v, o[3] * r.s, N.getY(v), o[4] * r.s); hit++;
      }
      if (hit) { P.needsUpdate = N.needsUpdate = !0; m.geometry.computeBoundingSphere(); m.geometry.computeBoundingBox(); }
    });
    // remove triangles with centroid in local box
    const dropTris = (re, r, b) => (window.__INT ? [] : meshes(re)).forEach((m) => {
      const g = m.geometry, I = g.index.array, P = g.attributes.position.array, out = [];
      for (let k = 0; k < I.length; k += 3) { let cx = 0, cy = 0, cz = 0; for (let q = 0; q < 3; q++) { cx += P[I[k + q] * 3] / 3; cy += P[I[k + q] * 3 + 1] / 3; cz += P[I[k + q] * 3 + 2] / 3; }
        const [lx, lz] = L(r, cx, cz); if (!inB(b, lx, cy, lz)) out.push(I[k], I[k + 1], I[k + 2]); }
      if (out.length < I.length) g.setIndex(new lt(new I.constructor(out), 1));
    });
    // clone triangles with centroid in local box, transformed (bake refreshed on light switch)
    const clones = [];
    const cloneRegion = (re, r, b, f) => (window.__INT ? [] : meshes(re)).forEach((m) => {
      const g = m.geometry, idx = g.index.array, P = g.attributes.position.array, out = [];
      for (let k = 0; k < idx.length; k += 3) { let cx = 0, cy = 0, cz = 0; for (let q = 0; q < 3; q++) { cx += P[idx[k + q] * 3] / 3; cy += P[idx[k + q] * 3 + 1] / 3; cz += P[idx[k + q] * 3 + 2] / 3; }
        const [lx, lz] = L(r, cx, cz); if (inB(b, lx, cy, lz)) out.push(idx[k], idx[k + 1], idx[k + 2]); }
      if (!out.length) return;
      const ng = new _t();
      for (const key in g.attributes) { const a = g.attributes[key], s = a.itemSize, arr = new a.array.constructor(out.length * s);
        out.forEach((vi, j) => { for (let c = 0; c < s; c++) arr[j * s + c] = a.array[vi * s + c]; });
        if (key === 'position') for (let j = 0; j < out.length; j++) { const [lx, lz] = L(r, arr[j * 3], arr[j * 3 + 2]); const o = f(lx, arr[j * 3 + 1], lz); const w = W(r, o[0], o[2]); arr[j * 3] = w[0]; arr[j * 3 + 1] = o[1]; arr[j * 3 + 2] = w[1]; }
        ng.setAttribute(key, new lt(arr, s, a.normalized)); }
      ng.setAttribute('kidKeep', new lt(new Float32Array(out.length).fill(1), 1)); const nm = new dt(ng, m.material); nm.name = m.name + '_kid'; nm.userData = m.userData; nm.castShadow = nm.receiveShadow = !0; it.add(nm);
      clones.push({ src: g, dst: ng, map: out });
    });
    // world-box discard on materials (exact rectangular cuts)
    const disc = {}; (window.__discs=window.__discs||[]).push(disc);
    const addDisc = (re, r, b) => (window.__INT ? [] : meshes(re)).forEach((m0) => { [m0].concat(it.children.filter((c) => c.isMesh && c !== m0 && c.userData && c.userData.name === m0.name && c.material && c.material.isShaderMaterial)).forEach((m) => { const k = m.uuid; (disc[k] = disc[k] || { m, boxes: [] }).boxes.push(wbox(r, b)); }); });
    const applyDisc = () => Object.values(disc).forEach(({ m, boxes }) => {
      const cond = boxes.map((b) => `(vKw.x>${b[0].toFixed(4)}&&vKw.x<${b[1].toFixed(4)}&&vKw.y>${b[2].toFixed(4)}&&vKw.y<${b[3].toFixed(4)}&&vKw.z>${b[4].toFixed(4)}&&vKw.z<${b[5].toFixed(4)})`).join('||');
      new Set([m.material, m.userData.base, m.userData.cap].filter(Boolean)).forEach((mt) => {
        if (mt.__kd) return; mt.__kd = 1; const prev = mt.onBeforeCompile, pk = mt.customProgramCacheKey;
        mt.onBeforeCompile = (sh, rr) => { prev && prev.call(mt, sh, rr);
          sh.vertexShader = sh.vertexShader.replace('void main() {', 'attribute float kidKeep;\nvarying vec3 vKw;\nvarying float vKk;\nvoid main() {\nvKk = kidKeep;\nvKw = (modelMatrix * vec4(position,1.0)).xyz;');
          sh.fragmentShader = sh.fragmentShader.replace('void main() {', 'varying vec3 vKw;\nvarying float vKk;\nvoid main() {\nif(vKk<0.5&&(' + cond + ')) discard;'); };
        mt.customProgramCacheKey = function () { return (pk ? pk.call(this) : '') + '|kd' + m.uuid; }; mt.needsUpdate = !0; });
    });
    // flat patch quads using a mesh's material; bake/color/uv fitted from nearby verts
    const patch = (name, r, quads, sb) => { if (window.__INT) return;
      const m = meshes(new RegExp('^' + name + '$'))[0]; if (!m) return;
      const g = m.geometry, P = g.attributes.position, N = g.attributes.normal, UV = g.attributes.uv, B = g.attributes.bake, C = g.attributes.color;
      const pos = [], nrm = [], uv = [], bk = [], col = [];
      quads.forEach(({ c, n }) => {
        // world corners & normal
        const wc = c.map((p) => { const w = W(r, p[0], p[2]); return [w[0], p[1], w[1]]; }), wn = [n[0] * r.s, n[1], n[2] * r.s];
        const sw = wbox(r, sb), S = [];
        for (let v = 0; v < P.count; v++) { const x = P.getX(v), y = P.getY(v), z = P.getZ(v);
          if (inB(sw, x, y, z) && N.getX(v) * wn[0] + N.getY(v) * wn[1] + N.getZ(v) * wn[2] > 0.9) S.push(v); }
        const ax = Math.abs(wn[0]) > 0.5 ? [2, 1] : Math.abs(wn[1]) > 0.5 ? [0, 2] : [0, 1];
        // least squares uv = a*u + b*v + c
        const fit = (comp) => { let A = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], y = [0, 0, 0];
          S.forEach((v) => { const p = [P.getComponent(v, ax[0]), P.getComponent(v, ax[1]), 1], t = UV.getComponent(v, comp); for (let i = 0; i < 3; i++) { y[i] += p[i] * t; for (let j = 0; j < 3; j++) A[i][j] += p[i] * p[j]; } });
          const det = (M) => M[0][0] * (M[1][1] * M[2][2] - M[1][2] * M[2][1]) - M[0][1] * (M[1][0] * M[2][2] - M[1][2] * M[2][0]) + M[0][2] * (M[1][0] * M[2][1] - M[1][1] * M[2][0]);
          const D = det(A); if (Math.abs(D) < 1e-9) return [0, 0, S.length ? UV.getComponent(S[0], comp) : 0];
          return [0, 1, 2].map((i) => det(A.map((row, ri) => row.map((e, ci) => (ci === i ? y[ri] : e)))) / D); };
        const fu = UV ? fit(0) : null, fv = UV ? fit(1) : null;
        const avg = (a) => [0, 1, 2].map((i) => { const v = S.map((q) => a.getComponent(q, i)).sort((x, y) => x - y); return v.length ? v[v.length >> 1] : 0.5; });
        const ab = B ? avg(B) : null, ac = C ? avg(C) : null;
        [0, 1, 2, 0, 2, 3].forEach((i) => { const p = wc[i]; pos.push(...p); nrm.push(...wn.map((q) => Math.round(q * 127)));
          if (UV) { const u = [p[ax[0]], p[ax[1]], 1]; uv.push(fu[0] * u[0] + fu[1] * u[1] + fu[2], fv[0] * u[0] + fv[1] * u[1] + fv[2]); }
          if (B) bk.push(...ab); if (C) col.push(...ac); });
      });
      const ng = new _t(); ng.setAttribute('position', new lt(new Float32Array(pos), 3)); ng.setAttribute('normal', new lt(new Int8Array(nrm), 3, !0));
      if (UV) ng.setAttribute('uv', new lt(new Float32Array(uv), 2));
      if (B) ng.setAttribute('bake', new lt(new B.array.constructor(bk.map((q) => Math.round(q * (B.normalized ? 65535 : 1)))), 3, B.normalized));
      if (C) ng.setAttribute('color', new lt(new Float32Array(col), 3));
      ng.setAttribute('kidKeep', new lt(new Float32Array(pos.length / 3).fill(1), 1)); const nm = new dt(ng, m.material); nm.name = name + '_kidp'; nm.userData = m.userData; nm.receiveShadow = !0; it.add(nm);
    };
    // fix winding so face points along n: quad corners given CCW seen from n side
    const qz = (x0, x1, y0, y1, z, nz) => ({ c: nz > 0 ? [[x0, y0, z], [x1, y0, z], [x1, y1, z], [x0, y1, z]] : [[x1, y0, z], [x0, y0, z], [x0, y1, z], [x1, y1, z]], n: [0, 0, nz] });
    const qx = (x, y0, y1, z0, z1, nx) => ({ c: nx > 0 ? [[x, y0, z1], [x, y0, z0], [x, y1, z0], [x, y1, z1]] : [[x, y0, z0], [x, y0, z1], [x, y1, z1], [x, y1, z0]], n: [nx, 0, 0] });
    const qy = (x0, x1, z0, z1, y) => ({ c: [[x0, y, z1], [x1, y, z1], [x1, y, z0], [x0, y, z0]], n: [0, 1, 0] });

    const DX = -0.42;                       // door shift along door wall (local -x)
    const NX0 = -1.126 + DX, NX1 = -0.268 + DX; // new frame extents
    const ZR = -2.481, ZH = -2.398;          // wall faces (room / hall)
    const WZ = -2.505;                        // wardrobe end
    const sc = (WZ + 4.059) / (-4.059 + 5.576);
    R.forEach((r, ri) => {
      // 1) wardrobe extension (clone the 3-module run toward the door wall)
      const wb = [-0.80, -0.28, -0.01, 2.81, -5.585, -4.05];
      cloneRegion(/^(kfurn_[a-z]|dark|brass)$/, r, wb, (x, y, z) => [x, y, -4.059 + (z + 5.576) * sc]);
      cloneRegion(/^molding$/, r, [-0.80, -0.28, 2.6, 2.81, -5.585, -4.05], (x, y, z) => [x, y, -4.059 + (z + 5.576) * sc]);
      addDisc(/^molding$/, r, [-0.745, -0.28, 2.6, 2.81, -4.06, -2.40]);
      dropTris(/^metal$/, r, [-0.46, -0.28, 0.9, 1.1, -2.77, -2.58]); // old door stop, now inside wardrobe
      // 2) move door frame / leaves / hardware / mouldings
      xformVerts(/^(door|dleaf_[oc]|dhw_[oc]|dmold_[oc])$/, r, [-1.13, -0.26, -0.02, 2.2, -3.25, -2.36], (x, y, z, nx, nz) => [x + DX, y, z, nx, nz]);
      xformVerts(/^cabinet$/, r, [-1.40, -1.10, 0.3, 1.25, -2.492, -2.478], (x, y, z) => [x - 0.47, y, z]); // light switch
      // 3) wall: cut new opening, rebuild old opening segment
      const cutN = [NX0, NX1, -0.02, 2.161, -2.40 - 0.1, -2.36];
      const fill = [NX1, -0.268, -0.02, 2.161, ZR - 0.0005, -2.36];
      addDisc(/^(wall|kwall_[a-z]|skirting)$/, r, [NX0, NX1, -0.02, 2.161, ZR - 0.02, -2.36]);
      addDisc(/^(wall|kwall_[a-z]|skirting)$/, r, fill);
      addDisc(/^molding$/, r, [-1.83, NX1, 0.15, 2.45, -2.40, -2.36]);   // hall wainscot panel cut by the door
      patch('wall', r, [qz(NX1, -0.268, 0, 2.161, ZH, 1)], [NX0 - 0.45, NX0 - 0.02, 0.5, 2.0, -2.40, -2.39]);
      patch('kwall_' + ['g', 'b', 'v', 'p'][ri], r, [qz(NX1, -0.287, 0, 2.161, ZR, -1)], [-2.6, -0.3, 0.3, 2.5, -2.49, -2.47]);
      patch('skirting', r, [qz(NX1, -0.268, 0, 0.12, -2.382, 1), qy(NX1, -0.268, -2.398, -2.382, 0.12)], [-2.0, 0.3, 0.0, 0.13, -2.40, -2.37]);
      patch('floor_oak', r, [qy(NX0, -1.066, ZR, ZH, 0.0)], [-1.07, -0.3, -0.01, 0.01, -2.49, -2.39]);
      // 4) desk + shelves + chair + lamp rotated onto the west wall (left on entry)
      xformVerts(/^(kfurn_[a-z]|books|metal|task_fabric|steel)$/, r, [-2.62, -1.29, -0.01, 2.785, -3.76, -2.478],
        (x, y, z, nx, nz) => [-5.102 - z, y, x - 1.208, -nz, nx]);
    });
    // fix kfurn suffix per room: patch() picked by index; verify quickly
    applyDisc();
    // keep cloned bake in sync with day/night & style switches
    const syncBake = () => clones.forEach(({ src, dst, map }) => { const a = src.attributes.bake, b = dst.attributes.bake; if (!a || !b) return; map.forEach((vi, j) => { b.array[j * 3] = a.array[vi * 3]; b.array[j * 3 + 1] = a.array[vi * 3 + 1]; b.array[j * 3 + 2] = a.array[vi * 3 + 2]; }); b.needsUpdate = !0; });
    const _Fy = Fy; Fy = function (...a) { const o = _Fy.apply(this, a); syncBake(); return o; };
    // viewpoints: stand just inside the new doors, looking in
    const px = (x) => x / zt + Oi, pz = (z) => z / zt + Bi;
    ['kids1', 'kids2', 'kids3', 'kids4'].forEach((id, ri) => { const v = cl.find((q) => q.id === id); if (!v) return; const r = R[ri];
      const e = W(r, (NX0 + NX1) / 2 + 0.05, -2.62), t = W(r, -1.45, -4.9); v.eye = [px(e[0]), pz(e[1]), 1.62]; v.look = [px(t[0]), pz(t[1]), 0.85]; });
    window.__it = it; window.__ray = (x, y) => { Ff.setFromCamera({ x, y }, Be); return Ff.intersectObjects(it.children, !0).slice(0, 8).map((h) => [h.object.name, +h.point.x.toFixed(3), +h.point.y.toFixed(2), +h.point.z.toFixed(3)]); }; window.__kick = () => { ei = Math.max(ei, 4); }; window.__rayO = (x, y) => { Ff.setFromCamera({ x, y }, Be); return Ff.intersectObjects(it.children, !0); }; window.__rayAll = (x, y) => { Ff.setFromCamera({ x, y }, Be); return Ff.intersectObjects(it.children, !0).map((h) => [h.object.name, +h.point.x.toFixed(3), +h.point.y.toFixed(2), +h.point.z.toFixed(3)]); };
    window.__setView = (p, t, f) => { Be.position.set(...p); at.target.set(...t); if (f) { Be.fov = f; Be.updateProjectionMatrix(); } at.update(); ei = Math.max(ei, 3); };
    console.log('DBG kids ok');
  } catch (e) { console.error('DBG kids failed', e); }
}

// ===== STEP1: move living/master wall + TV wall 1.17 m toward sofa; master bath moved rigidly north; bedroom gains the space =====
function __master() {
  try {
    const R = [ // local(room1) -> world
      { s: 1, ox: 0, oz: 0 }, { s: 1, ox: 2.419, oz: 0 },
      { s: -1, ox: -2.911, oz: 0.984 }, { s: -1, ox: -0.492, oz: 0.984 }];
    const W = (r, x, z) => [r.ox + r.s * x, r.oz + r.s * z];
    const L = (r, x, z) => [r.s * (x - r.ox), r.s * (z - r.oz)];
    const meshes = (re) => it.children.filter((c) => c.isMesh && !c.isInstancedMesh && re.test(c.name));
    const inB = (b, x, y, z) => x >= b[0] && x <= b[1] && y >= b[2] && y <= b[3] && z >= b[4] && z <= b[5];
    const wbox = (r, b) => { const a = W(r, b[0], b[4]), c = W(r, b[1], b[5]); return [Math.min(a[0], c[0]), Math.max(a[0], c[0]), b[2], b[3], Math.min(a[1], c[1]), Math.max(a[1], c[1])]; };
    // in-place vertex transform (local coords), positions + normals
    const xformVerts = (re, r, b, f) => (window.__INT ? [] : meshes(re)).forEach((m) => {
      const P = m.geometry.attributes.position, N = m.geometry.attributes.normal; let hit = 0;
      for (let v = 0; v < P.count; v++) {
        const [lx, lz] = L(r, P.getX(v), P.getZ(v)), y = P.getY(v);
        if (!inB(b, lx, y, lz)) continue;
        const o = f(lx, y, lz, N.getX(v) * r.s, N.getZ(v) * r.s); const w = W(r, o[0], o[2]);
        P.setXYZ(v, w[0], o[1], w[1]); if (o[3] !== undefined) N.setXYZ(v, o[3] * r.s, N.getY(v), o[4] * r.s); hit++;
      }
      if (hit) { P.needsUpdate = N.needsUpdate = !0; m.geometry.computeBoundingSphere(); m.geometry.computeBoundingBox(); }
    });
    // remove triangles with centroid in local box
    const dropTris = (re, r, b) => (window.__INT ? [] : meshes(re)).forEach((m) => {
      const g = m.geometry, I = g.index.array, P = g.attributes.position.array, out = [];
      for (let k = 0; k < I.length; k += 3) { let cx = 0, cy = 0, cz = 0; for (let q = 0; q < 3; q++) { cx += P[I[k + q] * 3] / 3; cy += P[I[k + q] * 3 + 1] / 3; cz += P[I[k + q] * 3 + 2] / 3; }
        const [lx, lz] = L(r, cx, cz); if (!inB(b, lx, cy, lz)) out.push(I[k], I[k + 1], I[k + 2]); }
      if (out.length < I.length) g.setIndex(new lt(new I.constructor(out), 1));
    });
    // clone triangles with centroid in local box, transformed (bake refreshed on light switch)
    const clones = [];
    const cloneRegion = (re, r, b, f) => (window.__INT ? [] : meshes(re)).forEach((m) => {
      const g = m.geometry, idx = g.index.array, P = g.attributes.position.array, out = [];
      for (let k = 0; k < idx.length; k += 3) { let cx = 0, cy = 0, cz = 0; for (let q = 0; q < 3; q++) { cx += P[idx[k + q] * 3] / 3; cy += P[idx[k + q] * 3 + 1] / 3; cz += P[idx[k + q] * 3 + 2] / 3; }
        const [lx, lz] = L(r, cx, cz); if (inB(b, lx, cy, lz)) out.push(idx[k], idx[k + 1], idx[k + 2]); }
      if (!out.length) return;
      const ng = new _t();
      for (const key in g.attributes) { const a = g.attributes[key], s = a.itemSize, arr = new a.array.constructor(out.length * s);
        out.forEach((vi, j) => { for (let c = 0; c < s; c++) arr[j * s + c] = a.array[vi * s + c]; });
        if (key === 'position') for (let j = 0; j < out.length; j++) { const [lx, lz] = L(r, arr[j * 3], arr[j * 3 + 2]); const o = f(lx, arr[j * 3 + 1], lz); const w = W(r, o[0], o[2]); arr[j * 3] = w[0]; arr[j * 3 + 1] = o[1]; arr[j * 3 + 2] = w[1]; }
        ng.setAttribute(key, new lt(arr, s, a.normalized)); }
      ng.setAttribute('kidKeep', new lt(new Float32Array(out.length).fill(1), 1)); const nm = new dt(ng, m.material); nm.name = m.name + '_mk'; nm.userData = m.userData; nm.castShadow = nm.receiveShadow = !0; it.add(nm);
      clones.push({ src: g, dst: ng, map: out });
    });
    // world-box discard on materials (exact rectangular cuts)
    const disc = {}; (window.__discs=window.__discs||[]).push(disc);
    const addDisc = (re, r, b) => (window.__INT ? [] : meshes(re)).forEach((m0) => { [m0].concat(it.children.filter((c) => c.isMesh && c !== m0 && c.userData && c.userData.name === m0.name && c.material && c.material.isShaderMaterial)).forEach((m) => { const k = m.uuid; (disc[k] = disc[k] || { m, boxes: [] }).boxes.push(wbox(r, b)); }); });
    const applyDisc = () => Object.values(disc).forEach(({ m, boxes }) => {
      const cond = boxes.map((b) => `(vKw.x>${b[0].toFixed(4)}&&vKw.x<${b[1].toFixed(4)}&&vKw.y>${b[2].toFixed(4)}&&vKw.y<${b[3].toFixed(4)}&&vKw.z>${b[4].toFixed(4)}&&vKw.z<${b[5].toFixed(4)})`).join('||');
      new Set([m.material, m.userData.base, m.userData.cap].filter(Boolean)).forEach((mt) => {
        if (mt.__md) return; mt.__md = 1; const prev = mt.onBeforeCompile, pk = mt.customProgramCacheKey;
        mt.onBeforeCompile = (sh, rr) => { prev && prev.call(mt, sh, rr);
          const had = sh.vertexShader.includes('varying vec3 vKw'); if (!had) sh.vertexShader = sh.vertexShader.replace('void main() {', 'attribute float kidKeep;\nvarying vec3 vKw;\nvarying float vKk;\nvoid main() {\nvKk = kidKeep;\nvKw = (modelMatrix * vec4(position,1.0)).xyz;');
          sh.fragmentShader = sh.fragmentShader.replace('void main() {', (had ? '' : 'varying vec3 vKw;\nvarying float vKk;\n') + 'void main() {\nif(vKk<0.5&&(' + cond + ')) discard;'); };
        mt.customProgramCacheKey = function () { return (pk ? pk.call(this) : '') + '|md' + m.uuid; }; mt.needsUpdate = !0; });
    });
    // flat patch quads using a mesh's material; bake/color/uv fitted from nearby verts
    const patch = (name, r, quads, sb, sh) => { if (window.__INT) return;
      const m = meshes(new RegExp('^' + name + '$'))[0]; if (!m) return;
      const g = m.geometry, P = g.attributes.position, N = g.attributes.normal, UV = g.attributes.uv, B = g.attributes.bake, C = g.attributes.color;
      const pos = [], nrm = [], uv = [], bk = [], col = [];
      quads.forEach(({ c, n }) => {
        // world corners & normal
        const wc = c.map((p) => { const w = W(r, p[0], p[2]); return [w[0], p[1], w[1]]; }), wn = [n[0] * r.s, n[1], n[2] * r.s];
        const sw = wbox(r, sb), S = [];
        for (let v = 0; v < P.count; v++) { const x = P.getX(v), y = P.getY(v), z = P.getZ(v);
          if (inB(sw, x, y, z) && N.getX(v) * wn[0] + N.getY(v) * wn[1] + N.getZ(v) * wn[2] > 0.9) S.push(v); }
        const ax = Math.abs(wn[0]) > 0.5 ? [2, 1] : Math.abs(wn[1]) > 0.5 ? [0, 2] : [0, 1];
        // least squares uv = a*u + b*v + c
        const fit = (comp) => { let A = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], y = [0, 0, 0];
          S.forEach((v) => { const p = [P.getComponent(v, ax[0]), P.getComponent(v, ax[1]), 1], t = UV.getComponent(v, comp); for (let i = 0; i < 3; i++) { y[i] += p[i] * t; for (let j = 0; j < 3; j++) A[i][j] += p[i] * p[j]; } });
          const det = (M) => M[0][0] * (M[1][1] * M[2][2] - M[1][2] * M[2][1]) - M[0][1] * (M[1][0] * M[2][2] - M[1][2] * M[2][0]) + M[0][2] * (M[1][0] * M[2][1] - M[1][1] * M[2][0]);
          const D = det(A); if (Math.abs(D) < 1e-9) return [0, 0, S.length ? UV.getComponent(S[0], comp) : 0];
          return [0, 1, 2].map((i) => det(A.map((row, ri) => row.map((e, ci) => (ci === i ? y[ri] : e)))) / D); };
        const fu = UV ? fit(0) : null, fv = UV ? fit(1) : null;
        if (/^(bwall|btile|floor_oak|rug_living)$/.test(name)) console.log('DBG patch ' + name + ' S=' + S.length + ' uv ' + (UV ? fu.map((q) => q.toFixed(3)) + '/' + fv.map((q) => q.toFixed(3)) : '-') + ' bake ' + (B ? [0, 1, 2].map((i) => { const v = S.map((q) => B.getComponent(q, i)).sort((x, y) => x - y); return v.length ? v[v.length >> 1].toFixed(3) : -1; }) : '-'));
        const avg = (a) => [0, 1, 2].map((i) => { const v = S.map((q) => a.getComponent(q, i)).sort((x, y) => x - y); return v.length ? v[v.length >> 1] : 0.5; });
        const ab = B ? avg(B) : null, ac = C ? avg(C) : null;
        [0, 1, 2, 0, 2, 3].forEach((i) => { const p = wc[i]; pos.push(...p); nrm.push(...wn.map((q) => Math.round(q * 127)));
          if (UV) { const u = [p[ax[0]] + (sh ? sh[ax[0]] : 0), p[ax[1]] + (sh ? sh[ax[1]] : 0), 1]; uv.push(fu[0] * u[0] + fu[1] * u[1] + fu[2], fv[0] * u[0] + fv[1] * u[1] + fv[2]); }
          if (B) bk.push(...ab); if (C) col.push(...ac); });
      });
      const ng = new _t(); ng.setAttribute('position', new lt(new Float32Array(pos), 3)); ng.setAttribute('normal', new lt(new Int8Array(nrm), 3, !0));
      if (UV) ng.setAttribute('uv', new lt(new Float32Array(uv), 2));
      if (B) ng.setAttribute('bake', new lt(new B.array.constructor(bk.map((q) => Math.round(q * (B.normalized ? 65535 : 1)))), 3, B.normalized));
      if (C) ng.setAttribute('color', new lt(new Float32Array(col), 3));
      ng.setAttribute('kidKeep', new lt(new Float32Array(pos.length / 3).fill(1), 1)); const nm = new dt(ng, m.material); nm.name = name + '_mp'; nm.userData = m.userData; nm.receiveShadow = !0; it.add(nm);
    };
    // fix winding so face points along n: quad corners given CCW seen from n side
    const qz = (x0, x1, y0, y1, z, nz) => ({ c: nz > 0 ? [[x0, y0, z], [x1, y0, z], [x1, y1, z], [x0, y1, z]] : [[x1, y0, z], [x0, y0, z], [x0, y1, z], [x1, y1, z]], n: [0, 0, nz] });
    const qx = (x, y0, y1, z0, z1, nx) => ({ c: nx > 0 ? [[x, y0, z1], [x, y0, z0], [x, y1, z0], [x, y1, z1]] : [[x, y0, z0], [x, y0, z1], [x, y1, z1], [x, y1, z0]], n: [nx, 0, 0] });
    const qy = (x0, x1, z0, z1, y) => ({ c: [[x0, y, z1], [x1, y, z1], [x1, y, z0], [x0, y, z0]], n: [0, 1, 0] });
    const r0 = R[0], DZ = -1.17;
    // ---------- shear detector (before) ----------
    const triN = (P, I, k) => { const a = I[k] * 3, b = I[k + 1] * 3, c = I[k + 2] * 3; const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2], vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
      const n = [uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx]; const L0 = Math.hypot(n[0], n[1], n[2]), L = L0 || 1; return [n[0] / L, n[1] / L, n[2] / L, L0 / 2]; };
    const before = new Map(); meshes(/./).forEach((m) => { if (m.geometry.index) before.set(m, m.geometry.attributes.position.array.slice()); });
    // ---------- vertex move rules (pure +z/-z translation) ----------
    const EXC = /^(wall|bwall|skirting|molding|ceiling|downlight|cove|floor_oak.*|btile|ktile|rug|rug_living|rug2|door|dleaf_[oc]|dhw_[oc]|dmold_[oc]|frame|frost|curtain|sheer|facade|outdoor|soffit|balc_floor|c_.*|k(wall|furn|acc|bed|bed2)_.*|.*_kid.*|.*_mk|.*_mp)$/;
    const inTV = (x, y, z) => x > 0.7 && x < 9.2 && z > 1.0 && z < 1.90 && y > -0.05 && y < 2.81;
    const inBath = (x, z) => z > 1.99 && ((x > 4.0 && x < 5.97 && z < 3.95) || (x >= 5.97 && x < 8.735 && z < 3.30) || (x >= 8.735 && x < 9.235 && z < 2.5));
    const F = (n, x, y, z) => {
      if (y < -1) return 0;
      if (n === 'glass') return (inTV(x, y, z) && y < 1.0) || (inBath(x, z) && x < 8.745 && y > 0 && y < 2.5) ? DZ : 0;
      if (n === 'downlight') return (inBath(x, z) && y > 2.7) ? DZ : 0;
      if (n === 'btile') return (x > 4.0 && x < 9.235 && z > 1.9 && z < 3.95) ? DZ : 0;
      if (n === 'wall') return ((x > 2.12 && x < 9.215 && z > 1.99 && z <= 2.045) || (x > 4.0 && (x < 8.70 || (x < 8.745 && z < 3.19)) && z > 2.045 && z < 3.95)) ? DZ : 0;
      if (n === 'bwall') return inBath(x, z) ? DZ : 0;
      if (n === 'skirting') return ((x > 4.0 && x < 8.70 && z > 2.045 && z < 3.95) || (x > 2.2 && x < 8.70 && z > 1.995 && z < 2.075) || (x > 8.0 && x < 8.745 && z > 2.045 && z < 3.32) || (x > 4.0 && x < 6.2 && z > 2.045 && z < 4.05)) ? DZ : 0;
      if (n === 'molding') return ((x > 3.9 && x < 8.70 && z > 2.045 && z < 3.95) || (x > 3.9 && x < 6.2 && z > 2.045 && z < 4.05) || (x > 8.0 && x < 8.745 && z > 2.045 && z < 3.32) || (x > 2.2 && x < 8.70 && z > 1.995 && z < 2.2)) ? DZ : 0;
      if (/^(door|dleaf_[oc]|dhw_[oc]|dmold_[oc])$/.test(n)) return (x > 4.7 && x < 5.7 && z > 3.0 && z < 3.95) ? DZ : 0;
      if (EXC.test(n)) return 0;
      if (inTV(x, y, z)) return DZ;
      if (inBath(x, z) && y > -0.05) return DZ;
      return 0; };
    const moved = [];
    (window.__INT ? [] : meshes(/./)).forEach((m) => { if (!m.geometry.index) return; const P = m.geometry.attributes.position; let h = 0;
      for (let v = 0; v < P.count; v++) { const d = F(m.name, P.getX(v), P.getY(v), P.getZ(v)); if (d) { P.setZ(v, P.getZ(v) + d); h++; } }
      if (h) { P.needsUpdate = !0; m.geometry.computeBoundingSphere(); m.geometry.computeBoundingBox(); moved.push(m.name + ':' + h); } });
    console.log('DBG step1 moved ' + moved.join(' '));
    // ===== v7a: master bath extended south to the user's red line (partition bath face z=2.92, bedroom face z=3.00) =====
    { const DW = 0.297, DE = 0.994, ST = /^(wall|bwall|skirting|molding|door|dleaf_[oc]|dmold_[oc]|dhw_[oc])$/, NOGEN = /^(slab|floor.*|btile|ceiling.*|cove|downlight|rug.*)$/; const mv = [];
      (window.__INT ? [] : meshes(/./)).forEach((m) => { if (!m.geometry.index) return; const P = m.geometry.attributes.position, n = m.name; let h = 0;
        for (let v = 0; v < P.count; v++) { const x = P.getX(v), y = P.getY(v), z = P.getZ(v); let d = 0;
          if (ST.test(n) && x > 3.90 && x < 6.17 && z > 2.59 && z < 2.83 && y > -0.05 && y < 2.81) d = DW;                       // west part partition + door + bath west wall end
          else if (ST.test(n) && x > 5.95 && x < 6.17 && z >= 2.02 && z <= 2.59 && !(n === 'molding' && z > 2.10 && z < 2.13) && y > -0.05 && y < 2.81) d = 2.96 - z;                // old stub between bath parts: fold into new wall thickness
          else if (/^dleaf_o|^dmold_o|^dhw_o/.test(n) && x > 4.7 && x < 5.0 && z > 1.85 && z < 2.6) d = DW;                         // open door leaf follows the door
          else if (n === 'bwall' && x > 8.70) d = 0;                                                                              // pier tile face stays (patched below instead of stretched)
          else if (x > 5.95 && x < 8.746 && z > 1.92 && z < 2.13 && y > -0.05 && y < 2.81 && (ST.test(n) || n === 'metal' || (!EXC.test(n) && !NOGEN.test(n)))) d = DE; // east partition + bedroom TV/shelf + rail/molding ends
          if (d) { P.setZ(v, z + d); h++; } }
        if (h) { P.needsUpdate = !0; m.geometry.computeBoundingSphere(); m.geometry.computeBoundingBox(); mv.push(n + ':' + h); } });
      console.log('DBG v7a moved ' + mv.join(' '));
      // even out the bedroom face light-map across the new partition (west part came from a darker spot)
      (window.__INT ? [] : meshes(/^wall$/)).forEach((m) => { const P = m.geometry.attributes.position, N = m.geometry.attributes.normal, B = m.geometry.attributes.bake; if (!B) return; const ref = [[], [], []], tgt = [];
        for (let v = 0; v < P.count; v++) { if (Math.abs(P.getZ(v) - 3.0015) > 0.004 || N.getZ(v) < 0.9) continue; const x = P.getX(v); if (x > 6.3 && x < 8.6) for (let k = 0; k < 3; k++) ref[k].push(B.getComponent(v, k)); else if (x > 4.0 && x < 6.3) tgt.push(v); }
        if (!ref[0].length) return; const md = ref.map((a) => (a.sort((p, q) => p - q), a[a.length >> 1])); tgt.forEach((v) => { for (let k = 0; k < 3; k++) B.setComponent(v, k, md[k]); }); B.needsUpdate = !0; console.log('DBG v7a bake even ' + tgt.length + ' ' + md.map((q) => q.toFixed(3))); }); }
    // ---------- old wall / living ceiling band / floors under the new master strip: exact shader cut ----------
    addDisc(/^(wall|skirting|molding)$/, r0, [2.205, 9.215, -0.02, 2.81, 1.84, 2.045]);
    addDisc(/^molding$/, r0, [2.205, 9.215, 2.4, 2.81, 1.55, 2.045]);
    addDisc(/^(ceiling|downlight|cove)$/, r0, [2.205, 9.225, 2.40, 2.76, 0.70, 2.10]);
    addDisc(/^floor_oak$/, r0, [2.205, 9.225, -0.01, 0.01, 0.85, 2.07]);
    addDisc(/^bwall$/, r0, [8.715, 8.745, -0.02, 2.81, 1.25, 1.945]);
    addDisc(/^curtain$/, r0, [9.10, 9.245, -0.1, 2.9, 1.15, 1.90]);            // old living curtain at the frosted window -> replaced by bath roller blind          // tub-zone east wall removed -> bath reaches the frosted window
    // ---------- new geometry (patch quads fitted to neighbouring surfaces: same material, uv, flat baked light) ----------
    const qyd = (x0, x1, z0, z1, y) => ({ c: [[x0, y, z0], [x1, y, z0], [x1, y, z1], [x0, y, z1]], n: [0, -1, 0] });
    const NW0 = 0.70, NW1 = 0.86;
    patch('wall', r0, [qz(2.13, 9.22, 0, 2.80, NW0, -1)], [2.3, 4.8, 0.3, 2.4, 1.86, 1.88]);                          // new wall, living face
    patch('wall', r0, [qz(2.21, 4.06, 0, 2.80, NW1, 1)], [2.25, 4.0, 0.3, 2.4, 2.02, 2.04]);                            // new wall, master corridor face
    patch('wall', r0, [qx(2.13, 0, 2.80, NW0, 2.072, -1)], [2.12, 2.14, 0.3, 2.0, 2.82, 3.6]);                            // master west wall extension, hallway face
    patch('skirting', r0, [qx(2.112, 0, 0.12, NW0 - 0.018, 2.072, -1), qx(2.112, 0, 0.12, NW0 - 0.018, 2.072, 1), qy(2.112, 2.13, NW0 - 0.018, 2.072, 0.12)], [0.5, 2.2, 0.0, 0.13, 2.0, 9.0]);
    patch('molding', r0, [qx(2.09, 2.48, 2.58, NW0 - 0.04, 2.072, -1), qx(2.09, 2.48, 2.58, NW0 - 0.04, 2.072, 1), qyd(2.09, 2.13, NW0 - 0.04, 2.072, 2.48)], [1.9, 2.14, 2.45, 2.81, 2.0, 9.0]);
    patch('skirting', r0, [qz(2.21, 4.06, 0, 0.12, NW1 + 0.017, 1), qx(2.227, 0, 0.12, NW1, 2.03, 1)], [2.2, 4.0, 0.0, 0.12, 2.04, 2.07]);
    patch('ceiling', r0, [qyd(2.13, 9.22, NW0, 2.06, 2.80)], [4.3, 8.5, 2.79, 2.81, 4.0, 6.0]);
    // pocket at the frosted window: closing wall (bath tile face + bedroom face), floors
    patch('bwall', r0, [qz(8.73, 9.22, 0, 2.80, 1.93, -1)], [6.1, 8.6, 0.3, 2.4, 1.92, 1.94]);
    patch('wall', r0, [qz(8.73, 9.22, 0, 2.80, 2.01, 1)], [6.1, 8.6, 0.3, 2.4, 2.00, 2.02]);
    patch('btile', r0, [qy(8.72, 9.22, 1.26, 1.94, 0.0015)], [4.2, 5.9, -0.01, 0.01, 1.0, 2.5]);
    patch('floor_oak', r0, [qy(2.21, 4.07, 0.85, 2.075, 0.0015)], [4.3, 6.0, -0.01, 0.01, 3.95, 5.5]);                   // corridor strip
    // v7 floors: bedroom keeps wood only south of the new partition (z>=3.0); bath extension gets the bath floor tile
    patch('floor_oak', r0, [qy(4.06, 6.06, 2.995, 3.885, 0.0015), qy(5.96, 8.745, 2.995, 3.19, 0.0015)], [6.3, 8.6, -0.01, 0.01, 3.25, 4.6], [0, 0, 1.0]); // bedroom strip (plan-wide floor map: sample wood 1m south)
    patch('btile', r0, [qy(4.145, 5.97, 2.55, 2.92, 0.003), qy(5.96, 8.727, 1.85, 2.92, 0.003)], [4.3, 5.9, -0.01, 0.01, 0.9, 2.5], [0, 0, -1.0]); // bath extension (sample bath tile 1m north)
    // v7a: tile (bwall) faces for the bath extension: new partition bath face (east part) + pier face
    // (bath south faces are 'wall' material in the original west part too -> no tile patch needed)
    patch('bwall', r0, [qx(8.727, 0, 2.80, 1.90, 2.918, -1)], [8.70, 8.74, -0.01, 2.81, 1.0, 2.0]);   // pier face inside bath extension: tile like the rest of that wall
    applyDisc();
    // ---------- light-map consistency for patches is flat by construction; nothing stale moved except rigid blocks ----------
    // ---------- shear detector (after) ----------
    before.forEach((P0, m) => { const P = m.geometry.attributes.position.array, n = P.length / 3; let any = 0; const kk = m.geometry.attributes.kidKeep ? m.geometry.attributes.kidKeep.array : new Float32Array(n); for (let i = 0; i < n; i++) if (P[i * 3 + 2] !== P0[i * 3 + 2]) { kk[i] = 1; any = 1; } if (any) { if (m.geometry.attributes.kidKeep) m.geometry.attributes.kidKeep.needsUpdate = !0; else m.geometry.setAttribute('kidKeep', new lt(kk, 1)); } });
    let bad = []; before.forEach((P0, m) => { const P = m.geometry.attributes.position.array, I = m.geometry.index.array;
      for (let k = 0; k < I.length; k += 3) { if (/^b?wall$/.test(m.name) && [0, 1, 2].every((j) => { const x = P[I[k + j] * 3], z = P[I[k + j] * 3 + 2]; return x > 8.715 && x < 8.745 && z > 1.24 && z < 1.95; })) { I[k + 1] = I[k + 2] = I[k]; m.geometry.index.needsUpdate = !0; continue; } if (m.name === 'wall' && [0, 1, 2].every((j) => { const x = P0[I[k + j] * 3], z = P0[I[k + j] * 3 + 2]; return x > 2.12 && x < 2.14 && z > 1.80 && z < 2.05; }) || (m.name === 'wall' && [0, 1, 2].every((j) => { const x = P0[I[k + j] * 3]; return x > 2.12 && x < 2.14; }) && [0, 1, 2].some((j) => P0[I[k + j] * 3 + 2] !== P[I[k + j] * 3 + 2]) && Math.abs(triN(P0, I, k)[0]) > 0.9)) { I[k + 1] = I[k + 2] = I[k]; m.geometry.index.needsUpdate = !0; continue; } const a = triN(P0, I, k); if (a[3] < 1e-5) continue; const b = triN(P, I, k); if (Math.abs(a[0] * b[0] + a[1] * b[1] + a[2] * b[2]) < 0.999) { if (m.name === 'wall' && Math.max(P0[I[k]*3], P0[I[k+1]*3], P0[I[k+2]*3]) > 9.1) { I[k+1] = I[k]; I[k+2] = I[k]; m.geometry.index.needsUpdate = true; continue; } if (bad.length < 40) bad.push(m.name + '@' + [0,1,2].map((j) => [P0[I[k+j] * 3], P0[I[k+j] * 3 + 1], P0[I[k+j] * 3 + 2]].map((q) => q.toFixed(2)).join(',') + (P0[I[k+j]*3+2] !== P[I[k+j]*3+2] ? 'M' : '')).join('|')); else bad.push(1); } } });
    console.log('DBG step1 sheared ' + bad.length + ' ' + bad.filter((q) => q !== 1).join(' '));
    // projector picture plane created later at Ut(c1)
    c1 = c1 + DZ / zt;
    // ---------- viewpoints ----------
    const dz = DZ / zt, sv = (id, e, l) => { const v = cl.find((q) => q.id === id); if (!v) return; if (v.eye) v.eye[1] += e; if (v.look) v.look[1] += l; };
    const sz = (id, ez) => { const v = cl.find((q) => q.id === id); if (v && v.eye) v.eye[1] = ez / zt + Bi; };
    sv('tvwall', 0, dz); sv('seatview', 0, dz); sv('sofa', dz, 0); sz('living', 0.35); sz('great', 0.30); sv('screen', 0, dz); sv('screensofa', 0, dz);
    sv('mtv', 0, dz); sv('mbath', dz, dz); sv('mbath2', dz, dz); sv('mbath3', dz, dz);
    window.__cam = Be;
    const fixMir = () => Wh.forEach((o) => { if (o.__mv) return; const q = o.position; if (q.x > 4.0 && q.x < 9.235 && q.z > 1.99 && q.z < 3.95 && q.y > 0.3) { q.z += DZ; o.__mv = 1; o.updateMatrixWorld(); console.log('DBG mirror moved ' + q.x.toFixed(2) + ',' + q.z.toFixed(2)); } else o.__mv = 1; });
    { const bm = new Kt({ color: 0xe9e5dd }); const tube = new dt(new sr(0.035, 0.035, 0.66, 20), bm); tube.rotation.x = Math.PI / 2; tube.position.set(9.245, 2.47, 1.53); it.add(tube);
      const sh = new dt(new an(0.006, 0.42, 0.66), bm); sh.position.set(9.255, 2.24, 1.53); it.add(sh); const bar = new dt(new an(0.016, 0.025, 0.67), new Kt({ color: 0xb9a27a })); bar.position.set(9.255, 2.03, 1.53); it.add(bar); }
    it.children.forEach((c) => { if (/^molding_mp$/.test(c.name) && c.geometry.attributes.position.array[0] < 2.2 && c.geometry.attributes.bake) { const a = c.geometry.attributes.bake.array; if (a[0]) { for (let i = 0; i < a.length; i++) a[i] = Math.min(65535, a[i] * 1.35); c.geometry.attributes.bake.needsUpdate = !0; } } });
    { const sk = it.children.find((c) => c.name === 'skirting_mp' && c.geometry.attributes.bake), mo = it.children.find((c) => c.name === 'molding_mp' && c.geometry.attributes.bake && c.geometry.attributes.bake.array[0] === 0); if (sk && mo) { const a = mo.geometry.attributes.bake.array, b = sk.geometry.attributes.bake.array; for (let i = 0; i < a.length; i++) a[i] = Math.min(65535, b[i % 3] * 1.15); mo.geometry.attributes.bake.needsUpdate = !0; } }
    { const src = {}; it.children.forEach((c) => { if (c.isMesh && !/_/.test(c.name)) src[c.name] = src[c.name] || c; }); const mp = it.children.filter((c) => c.isMesh && /_mp$/.test(c.name)); setInterval(() => mp.forEach((c) => { const o = src[c.name.slice(0, -3)]; if (o && c.visible !== o.visible) { c.visible = o.visible; ei = Math.max(ei, 2); } }), 300); }
    it.children.forEach((c) => { if (c.isMesh && c.name === 'frost') { const b = new c.geometry.constructor(); c.geometry.computeBoundingBox(); const bb = c.geometry.boundingBox; if (bb.min.x > 9.2 && bb.max.z < 1.95) c.material = new Kt({ color: 0xe6eaec, transparent: !0, opacity: 0.95 }); const fm = c.material; let ln = null; setInterval(() => { if (ln !== He) { ln = He; fm.color.setHex(He ? 0x4a5058 : 0xe6eaec); ei = Math.max(ei, 2); } }, 300); } });
    window.__Wh = Wh; fixMir(); { let c = 0; const iv = setInterval(() => { fixMir(); if (++c > 600) clearInterval(iv); }, 200); }

    // ===== STEP 2: projector screen -> max 16:9 touching the floor =====
    { const SDX = 0.228, K = o1 / (o1 - 0.30), cx = It((Uf + Nf) / 2); let cnt = 0, cs = 0;
      it.children.forEach((m) => { if (window.__INT || !m.isMesh || !/^scr_(fabric|dark)$/.test(m.name)) return; const P = m.geometry.attributes.position;
        for (let v = 0; v < P.count; v++) { P.setX(v, cx + (P.getX(v) - cx) * K + SDX); P.setY(v, o1 - (o1 - P.getY(v)) * K); cnt++; } P.needsUpdate = !0; m.geometry.computeBoundingBox(); m.geometry.computeBoundingSphere(); });
      it.children.forEach((m) => { if (window.__INT || !m.isMesh || m.name !== 'dark') return; const P = m.geometry.attributes.position; let h = 0;
        for (let v = 0; v < P.count; v++) { const x = P.getX(v), y = P.getY(v), z = P.getZ(v); if (x > 0.70 && x < 4.85 && y > 2.45 && y < 2.65 && z > 0.40 && z < 0.66) { P.setX(v, cx + (x - cx) * K + SDX); h++; } }
        if (h) { P.needsUpdate = !0; m.geometry.computeBoundingSphere(); cs += h; } });
      const hw = (Nf - Uf) / 2 * K; Uf = (Uf + Nf) / 2 - hw + SDX / zt; Nf = Uf + 2 * hw;
      fs = o1 - (o1 - fs) * K; ur = o1 - (o1 - ur) * K; l1 = l1 * K;
      console.log('DBG step2 K=' + K.toFixed(4) + ' pic ' + ((Nf - Uf) * zt).toFixed(3) + 'x' + (ur - fs).toFixed(3) + ' fs ' + fs.toFixed(3) + ' ur ' + ur.toFixed(3) + ' x ' + It(Uf).toFixed(3) + '..' + It(Nf).toFixed(3) + ' scrV ' + cnt + ' caseV ' + cs);
      const _bl = bl; bl = function (i) { const r = _bl.apply(this, arguments); const on = i > 0.002; if (vt.pj) vt.pj.layers.set(vt.pj.visible ? 0 : 31); vt.scr.forEach((t) => t.mesh.layers.set(on ? 0 : 31)); return r; };
    }
    // ===== STEP 3: kids open play-area toggle =====
    try {
      const U = { value: 0 };
      const S = [[-0.305, -0.185, -0.02, 2.795, -5.645, -2.47], [-2.725, 2.225, -0.02, 2.565, -2.495, -2.385], [-2.725, -2.605, -0.02, 2.795, -5.645, -2.47], [2.115, 2.225, -0.02, 2.565, -5.645, -2.47], [-3.605, -2.70, -0.02, 2.565, -3.645, -3.54]];
      const thin = (b) => { const w = b[1] - b[0] < b[5] - b[4]; return w ? [b[0] - 0.13, b[1] + 0.13, b[2], 2.83, b[4], b[5]] : [b[0], b[1], b[2], 2.83, b[4] - 0.13, b[5] + 0.13]; };
      const T = S.map(thin).concat([[-3.62, 2.64, 2.50, 2.85, -5.68, -2.37], [2.215, 2.62, -0.02, 2.795, -5.645, -2.40]]);
      const I = [[-2.61, 2.12, -0.02, 2.799, -5.615, -2.49], [-3.70, -2.60, -0.02, 2.795, -5.70, -3.538], [2.215, 2.62, -0.02, 2.795, -5.645, -2.40], [-99.5, -99.4, -99.5, -99.4, -99.5, -99.4], [-99.5, -99.4, -99.5, -99.4, -99.5, -99.4], [-99.5, -99.4, -99.5, -99.4, -99.5, -99.4], /* I3-I5 nook boxes neutralised: nook objects dropped permanently in L4, dining table now there */ [-3.72, -2.55, -0.02, 2.62, -3.70, -3.47]]; // I4/I5: reading nook (chair rest, rug, lamp table) ; I6: storage door frame
      const SKIP = /^(floor_oak.*|ktile|ceiling.*|cove|downlight|glass|frame|frost|sheer|curtain|outdoor|facade|slab|c_.*|play_.*|.*_pl|.*_mp)$/;
      const STRUCT = /^(wall|bwall|kwall_[gb]|kacc_[gb]|wall_kid|wall_kidp|kwall_[gb]_kid.*)$/;
      const TRIM = /^(skirting|molding|skirting_kidp?|molding_kidp?)$/;
      const HIDE = /^molding_kid.*$|^(kacc|kfurn|kbed|kbed2)_[gb](_.*)?$|^(kfurn|kbed|kbed2)_[gb]/;
      const cnd = (B) => B.map((b) => `(vPw.x>${b[0]}&&vPw.x<${b[1]}&&vPw.y>${b[2]}&&vPw.y<${b[3]}&&vPw.z>${b[4]}&&vPw.z<${b[5]})`).join('||');
      const boxesFor = (n) => n === 'ceiling' ? [[-3.62, 2.10, 2.40, 2.79, -5.70, -2.50]] : SKIP.test(n) ? null : n === 'metal' ? S.concat([[-2.61, 2.12, -0.02, 2.70, -5.615, -2.49], I[1], I[2], I[3], I[4], I[5], I[6]]) : STRUCT.test(n) ? S : TRIM.test(n) ? T : S.concat(I);
      window.__play3={U,S,T,I,SKIP,STRUCT,TRIM,HIDE,boxesFor,get PL(){return PL;}};
      const done = new WeakMap();
      const patchMat = (mt, B) => { if (!mt || done.has(mt)) return; done.set(mt, 1); const c = cnd(B), prev = mt.onBeforeCompile, pk = mt.customProgramCacheKey;
        mt.onBeforeCompile = function (sh, rr) { prev && prev.call(this, sh, rr); sh.uniforms.uPlay = U;
          sh.vertexShader = sh.vertexShader.replace('void main() {', 'varying vec3 vPw;\nvoid main() {\nvPw = (modelMatrix * vec4(position,1.0)).xyz;');
          sh.fragmentShader = sh.fragmentShader.replace('void main() {', 'uniform float uPlay;\nvarying vec3 vPw;\nvoid main() {\nif(uPlay>0.5&&(' + c + ')) discard;'); };
        mt.customProgramCacheKey = function () { return (pk ? pk.call(this) : '') + '|pl3' + c.length; }; mt.needsUpdate = !0; };
      const inAny = (m, B) => { const g = m.geometry; if (!g.boundingBox) g.computeBoundingBox(); const b = g.boundingBox.clone().applyMatrix4(m.matrixWorld);
        return B.some((q) => b.max.x > q[0] && b.min.x < q[1] && b.max.z > q[4] && b.min.z < q[5] && b.max.y > q[2] && b.min.y < q[3]); };
      const scan = () => it.traverse((m) => { if (!m.isMesh || m.isInstancedMesh) return; const n = m.name || ''; if (HIDE.test(n)) return; const B = boxesFor(n); if (!B || !inAny(m, B)) return;
        [m.material, m.userData && m.userData.base, m.userData && m.userData.cap].forEach((mt) => patchMat(mt, B)); });
      // patches (own meshes, toggled with play)
      const PL = []; const grab = (fn) => { const k = it.children.length; fn(); for (let i = k; i < it.children.length; i++) { const c = it.children[i]; c.name = c.name.replace(/_mp$/, '_pl'); c.visible = !1; PL.push(c); } };
      const fsb = [-2.4, -0.5, -0.01, 0.01, -5.2, -2.7];
      grab(() => { patch('floor_oak', r0, [qy(-3.605, 2.62, -5.655, -2.39, 0.0025)], [-3.0, 1.5, -0.01, 0.01, -2.3, -1.2]); });
      grab(() => { [S[0], S[2]].forEach((b) => patch('ceiling', r0, [qyd(b[0] - 0.005, b[1] + 0.005, b[4], b[5], 2.797)], [4.3, 8.5, 2.79, 2.81, 4.0, 6.0])); });
      grab(() => { [S[1], S[3], S[4]].forEach((b) => patch('wall', r0, [qyd(b[0], b[1], b[4], b[5], 2.567)], [-2.4, 1.9, 2.55, 2.81, -2.50, -2.38])); });
      grab(() => { patch('wall', r0, [qx(-3.600, 0, 2.795, -5.645, -3.645, 1), qx(-3.600, 0, 2.795, -5.645, -3.645, -1)], [2.20, 2.23, 0.3, 2.4, 2.2, 3.5]); patch('ceiling', r0, [qyd(-3.605, -2.70, -5.645, -3.54, 2.796)], [4.3, 8.5, 2.79, 2.81, 4.0, 6.0]); });

      // 3b: floor gradient toward neighbouring floors (seamless edges)
      { const fp = PL.find((c) => c.name === 'floor_oak_pl'), src = it.children.find((c) => c.name === 'floor_oak' && c.isMesh);
        if (fp && src && src.geometry.attributes.bake) { const SP = src.geometry.attributes.position, SB = src.geometry.attributes.bake;
          const med = (x0, x1, z0, z1) => { const a = [[], [], []]; for (let v = 0; v < SP.count; v++) { const x = SP.getX(v), y = SP.getY(v), z = SP.getZ(v); if (Math.abs(y) < 0.005 && x > x0 && x < x1 && z > z0 && z < z1) for (let k = 0; k < 3; k++) a[k].push(SB.array[v * 3 + k]); } return a[0].length ? a.map((q) => q.sort((u, w) => u - w)[q.length >> 1]) : null; };
          const g = fp.geometry, P = g.attributes.position.array, UVa = g.attributes.uv ? g.attributes.uv.array : null, B0 = Array.from(g.attributes.bake.array.slice(0, 3));
          const bE = med(2.64, 2.95, -5.4, -2.6) || B0, bS = med(-3.2, 2.0, -2.37, -2.15) || B0;
          // uv linear map from first triangle
          let uvf = null; if (UVa) { const X = [0, 1, 2].map((i) => [P[i * 3], P[i * 3 + 2], 1]), Uu = [0, 1, 2].map((i) => UVa[i * 2]), Vv = [0, 1, 2].map((i) => UVa[i * 2 + 1]);
            const det = (M) => M[0][0] * (M[1][1] * M[2][2] - M[1][2] * M[2][1]) - M[0][1] * (M[1][0] * M[2][2] - M[1][2] * M[2][0]) + M[0][2] * (M[1][0] * M[2][1] - M[1][1] * M[2][0]);
            const sol = (y) => { const D = det(X); return [0, 1, 2].map((c) => det(X.map((r, ri) => r.map((e, ci) => (ci === c ? y[ri] : e)))) / D); }; uvf = [sol(Uu), sol(Vv)]; }
          const x0 = -3.605, x1 = 2.62, z0 = -5.655, z1 = -2.39, NX = 32, NZ = 16, pos = [], nrm = [], uv = [], bk = [], kk = [];
          const ss = (t) => t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t);
          const bakeAt = (x, z) => { const we = ss((x - 1.6) / (x1 - 1.6)), ws = ss((z - (-3.2)) / (z1 + 3.2)); return [0, 1, 2].map((k) => { let b = B0[k] * (1 - we) + bE[k] * we; return b * (1 - ws) + bS[k] * ws; }); };
          const V = (x, z) => { pos.push(x, 0.0025, z); nrm.push(0, 127, 0); if (uvf) uv.push(uvf[0][0] * x + uvf[0][1] * z + uvf[0][2], uvf[1][0] * x + uvf[1][1] * z + uvf[1][2]); bk.push(...bakeAt(x, z).map(Math.round)); kk.push(1); };
          for (let i = 0; i < NX; i++) for (let j = 0; j < NZ; j++) { const xa = x0 + (x1 - x0) * i / NX, xb = x0 + (x1 - x0) * (i + 1) / NX, za = z0 + (z1 - z0) * j / NZ, zb = z0 + (z1 - z0) * (j + 1) / NZ;
            [[xa, zb], [xb, zb], [xb, za], [xa, zb], [xb, za], [xa, za]].forEach((q) => V(q[0], q[1])); }
          const ng = new _t(); ng.setAttribute('position', new lt(new Float32Array(pos), 3)); ng.setAttribute('normal', new lt(new Int8Array(nrm), 3, !0)); if (uvf) ng.setAttribute('uv', new lt(new Float32Array(uv), 2));
          ng.setAttribute('bake', new lt(new g.attributes.bake.array.constructor(bk), 3, g.attributes.bake.normalized)); if (g.attributes.color) { const c0 = Array.from(g.attributes.color.array.slice(0, 3)); ng.setAttribute('color', new lt(new Float32Array(pos.length).map((_, i) => c0[i % 3]), 3)); }
          ng.setAttribute('kidKeep', new lt(new Float32Array(kk), 1)); fp.geometry = ng; console.log('DBG play3 floor B0 ' + B0 + ' E ' + bE + ' S ' + bS); } }
      patch('floor_oak', r0, [qy(2.625, 3.44, -5.60, -4.12, 0.0025), qy(3.44, 3.98, -5.05, -4.12, 0.0025)], [3.9, 4.9, -0.01, 0.01, -4.9, -4.0]); // nook floor (permanent since L4) // reading-nook floor (chair shadow) in play mode
      // 3b: north wall strip in former storage corner
      grab(() => { patch('wall', r0, [qz(-3.605, -2.48, 0, 2.795, -5.648, 1), qz(-3.605, -2.48, 0, 2.795, -5.648, -1)], [2.20, 2.23, 0.3, 2.4, 2.2, 3.5]); });
      { const ref = it.children.find((c) => c.name === 'wall_mp' && c.geometry.attributes.bake); const rb = ref ? Array.from(ref.geometry.attributes.bake.array.slice(0, 3)) : [16700, 16300, 15500]; PL.forEach((c) => { const B = c.geometry.attributes.bake; if (B && /^wall/.test(c.name)) { for (let i = 0; i < B.array.length; i++) B.array[i] = Math.round(rb[i % 3] * [1.03, 1.01, 0.97][i % 3]); B.needsUpdate = !0; } }); }
      // play items
      const G = new ui(); G.name = 'play_items'; G.visible = !1; it.add(G);
      const std = (c, o = {}) => new ea(Object.assign({ color: new Ae(c), roughness: 0.75, metalness: 0, emissive: new Ae(c).multiplyScalar(0.45) }, o));
      const box = (mat, x0, x1, y0, y1, z0, z1) => { const b = new dt(new an(x1 - x0, y1 - y0, z1 - z0), mat); b.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2); b.name = 'play_box'; G.add(b); return b; };
      const pal = ['#F2C6B4', '#BFD8C8', '#C9D6EA', '#F3E1A6', '#E7D3E8', '#F6F1E7'].map((c) => std(c));
      const MX0 = -2.3, MZ0 = -5.2; for (let i = 0; i < 6; i++) for (let j = 0; j < 4; j++) box(pal[(i + j) % 4], MX0 + i * 0.6 + 0.004, MX0 + (i + 1) * 0.6 - 0.004, 0.003, 0.02, MZ0 + j * 0.6 + 0.004, MZ0 + (j + 1) * 0.6 - 0.004);
      const wood = std('#E8D9C0', { roughness: 0.6 });
      if (0) [[-5.5, -4.6], [-4.55, -3.75]].forEach(([z0, z1]) => { const x0 = -3.58, x1 = -3.24; [0, 0.34, 0.68].forEach((y) => box(wood, x0, x1, y, y + 0.02, z0, z1));
        [0, 0.5, 1].forEach((t) => { const z = z0 + t * (z1 - z0); box(wood, x0, x1, 0, 0.70, z - 0.01, z + 0.01); });
        [0, 1].forEach((r) => [0, 1].forEach((k) => box(pal[(r * 2 + k + 1) % 6], x0 + 0.03, x1 - 0.03, 0.03 + r * 0.34, 0.27 + r * 0.34, z0 + 0.05 + k * (z1 - z0) / 2, z0 - 0.05 + (k + 1) * (z1 - z0) / 2))); });
      [[-0.6, -3.3, 0.3, 0], [-0.25, -3.25, 0.25, 1], [-0.45, -3.3, 0.22, 2, 0.3], [0.3, -3.9, 0.35, 3], [0.62, -3.95, 0.28, 4]].forEach(([x, z, s, c, y = 0]) => { const b = box(pal[c], x - s / 2, x + s / 2, 0.02 + y, 0.02 + y + s, z - s / 2, z + s / 2); b.rotation.y = c * 0.4; });
      const Tp = new ui(); Tp.position.set(1.45, 0.003, -4.85); G.add(Tp);
      const cloth = std('#F4EEE2', { side: 2, roughness: 0.9 }); const cone = new dt(new sr(0.05, 0.62, 1.45, 6, 1, !0), cloth); cone.position.y = 0.725; Tp.add(cone);
      const pole = std('#B89A72'); for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2 + 0.4; const p = new dt(new sr(0.015, 0.015, 1.75, 8), pole); p.position.set(Math.cos(a) * 0.3, 0.8, Math.sin(a) * 0.3); p.rotation.set(Math.sin(a) * 0.4, 0, -Math.cos(a) * 0.4); Tp.add(p); }
      const cush = new dt(new sr(0.5, 0.5, 0.08, 24), pal[0]); cush.position.y = 0.04; Tp.add(cush);
      const ball = new dt(new Qr(0.13, 20, 14), std('#E9A37E')); ball.position.set(0.9, 0.153, -3.2); G.add(ball);
      const rugR = new dt(new sr(0.75, 0.75, 0.01, 40), std('#E6E0EF')); rugR.position.set(0.6, 0.008, -3.6); G.add(rugR);
      G.traverse((c) => { if (c.isMesh) c.name = 'play_' + (c.name || 'item'); });
      { const thm = std('#CDBB9E', { roughness: 0.55 }); const t1 = box(thm, 2.60, 2.645, 0.0, 0.006, -5.655, -2.37); t1.name = 'threshold_x'; const t2 = box(thm, -3.605, 2.645, 0.0, 0.006, -2.415, -2.37); t2.name = 'threshold_z'; }
      const mkRB = () => (() => { const ref = it.children.find((c) => c.name === 'wall_mp' && c.geometry.attributes.bake); return ref ? Array.from(ref.geometry.attributes.bake.array.slice(0, 3)) : [16700, 16300, 15500]; })();
      let RB = mkRB(), WW = [Math.round(RB[0] * 1.03), Math.round(RB[1] * 1.01), Math.round(RB[2] * 0.97)];
      const inK = (x, z) => x > -3.62 && x < 2.64 && z > -5.68 && z < -2.37;
      const mkCB = () => (() => { const c = it.children.find((m) => m.name === 'ceiling' && m.geometry.attributes.bake); if (!c) return RB; c.updateMatrixWorld(); const P = c.geometry.attributes.position, B = c.geometry.attributes.bake.array, v = new it.position.constructor(), r = [[], [], []]; for (let i = 0; i < P.count; i++) { v.fromBufferAttribute(P, i).applyMatrix4(c.matrixWorld); if (v.x > 2.8 && v.x < 6 && v.z > -5.6 && v.z < -1) for (let k = 0; k < 3; k++) r[k].push(B[i * 3 + k]); } return r[0].length ? r.map((a) => (a.sort((x, y) => x - y), a[a.length >> 1])) : RB; })();
      const rebake = () => it.traverse((m) => { if (!m.isMesh) return; const kw = /^k(wall|acc)_[gb]/.test(m.name || ''), ce = /^ceiling(_pl|_mp)?$/.test(m.name || ''); if (!kw && !ce) return; const g = m.geometry, B = g.attributes.bake; if (!B) return; if (on) { if (g.__ob) return; g.__ob = B.array.slice(); m.updateMatrixWorld(); const P = g.attributes.position, v = new it.position.constructor(); for (let i = 0; i < P.count; i++) { if (ce) { v.fromBufferAttribute(P, i).applyMatrix4(m.matrixWorld); if (!inK(v.x, v.z)) continue; } const t = kw ? WW : CB; for (let k = 0; k < 3; k++) B.array[i * 3 + k] = t[k]; } B.needsUpdate = !0; } else if (g.__ob) { B.array.set(g.__ob); g.__ob = null; B.needsUpdate = !0; } });
      let CB = mkCB();
      // L7: recompute targets after every day/night/style bake switch (Fy rewrites bake arrays; previously kid walls/ceiling kept their night kid-room bake)
      { const _Fy7 = Fy; Fy = function (...a) { const o = _Fy7.apply(this, a); try { it.traverse((m) => { if (m.isMesh && m.geometry && m.geometry.__ob) m.geometry.__ob = null; }); RB = mkRB(); WW = [Math.round(RB[0] * 1.03), Math.round(RB[1] * 1.01), Math.round(RB[2] * 0.97)]; CB = mkCB(); if (on) rebake(); console.log('DBG L7 rebake RB ' + RB + ' CB ' + CB); } catch (e) { console.error('DBG L7 failed', e); } return o; }; }
      console.log('DBG play3b RB ' + RB + ' CB ' + CB);
      let on = 0;
      const NEU = (() => { const w = it.children.find((c) => c.name === 'wall' && c.isMesh); return w && w.material.color ? w.material.color.clone() : new Ae('#ECE8E1'); })();
      const paint = () => it.traverse((m) => { if (!m.isMesh || !/^k(wall|acc)_[gb]/.test(m.name || '')) return; [m.material, m.userData && m.userData.base, m.userData && m.userData.cap].forEach((mt) => { if (!mt || !mt.color) return; if (on) { if (!mt.__pc) mt.__pc = mt.color.clone(); mt.color.copy(NEU); } else if (mt.__pc) { mt.color.copy(mt.__pc); mt.__pc = null; } }); });
      const sliv = () => { const w = it.children.find((c) => c.name === 'wall' && c.isMesh); if (!w) return; const g = w.geometry, P = g.attributes.position; if (!g.__sv) { w.updateMatrixWorld(); const v = new it.position.constructor(), L = []; const n = g.index ? g.index.count / 3 : P.count / 3; for (let t = 0; t < n; t++) { const ix = [0, 1, 2].map((k) => g.index ? g.index.getX(t * 3 + k) : t * 3 + k); let ok = !0, mz = 9; ix.forEach((i) => { v.fromBufferAttribute(P, i).applyMatrix4(w.matrixWorld); if (Math.abs(v.x + 2.624) > 0.004) ok = !1; mz = Math.min(mz, v.z); }); if (ok && mz < -5.644) L.push(ix); } g.__sv = L; console.log('DBG play3f sliver tris ' + L.length + (g.index ? ' idx' : ' flat')); }
        if (g.index) { const I = g.index; g.__sv.forEach((ix) => { if (!ix.pos) { ix.pos = []; for (let t = 0; t < I.count; t += 3) if (I.getX(t) === ix[0] && I.getX(t + 1) === ix[1] && I.getX(t + 2) === ix[2]) { ix.pos.push(t); } } ix.pos.forEach((t) => { if (on) { I.setX(t + 1, ix[0]); I.setX(t + 2, ix[0]); } else { I.setX(t + 1, ix[1]); I.setX(t + 2, ix[2]); } }); }); I.needsUpdate = !0; }
        else { g.__sv.forEach((ix) => { if (!ix.o) ix.o = ix.map((i) => [P.getX(i), P.getY(i), P.getZ(i)]); ix.forEach((i, k) => { const q = on ? ix.o[0] : ix.o[k]; P.setXYZ(i, q[0], q[1], q[2]); }); }); P.needsUpdate = !0; } };
      const apply = () => { if (window.__INT) { window.__PLAYON = on; G.visible = !!on; paint(); Bh(); ei = Math.max(ei, 3); return; } if (on) scan(); paint(); rebake(); sliv(); it.traverse((m) => { if (m.isMesh && HIDE.test(m.name || '')) { if (on) { if (m.__plv === undefined) m.__plv = m.visible; m.visible = !1; } else if (m.__plv !== undefined) { m.visible = m.__plv; m.__plv = undefined; } } });
        U.value = on; G.visible = !!on; PL.forEach((c) => (c.visible = !!on)); ei = Math.max(ei, 3); try { Nt(); } catch (e) {} };
      const btn = document.createElement('button'); btn.type = 'button'; btn.id = 'playBtn';
      const lbl = () => { btn.textContent = on ? '小孩房：開放遊戲區' : '小孩房：隔間'; btn.classList.toggle('on', !!on); };
      btn.onclick = () => { on = on ? 0 : 1; apply(); lbl(); }; lbl();
      const seg = document.getElementById('r10seg'); seg && seg.appendChild(btn);
      setInterval(() => { if (on) apply(); }, 1500);
      window.__play = (v) => { on = v ? 1 : 0; apply(); lbl(); };
      console.log('DBG play3 ok PL ' + PL.length);
    } catch (e) { console.error('DBG play3 failed', e); }
    // ===== L1: living sofa 6 seats -> 4 (remove the two middle seat modules 5.98..7.14, close up symmetrically about x=6.56) =====
    if (!window.__INT) try { const A0 = 5.98, A1 = 7.14, C = (A0 + A1) / 2, H = (A1 - A0) / 2, inS = (x, y, z) => x > 4.6 && x < 8.52 && z > -3.62 && z < -2.62 && y > -0.01 && y < 1.0;
      const tgt = { sofa: 1, accent_fabric: 1, dark: 1 }; let nv = 0, nt = 0;
      it.children.forEach((m) => { if (!m.isMesh || !tgt[m.name] || !m.geometry.index) return; const g = m.geometry, P = g.attributes.position, I = g.index.array, sel = new Uint8Array(P.count);
        for (let v = 0; v < P.count; v++) if (inS(P.getX(v), P.getY(v), P.getZ(v))) sel[v] = 1;
        const out = []; for (let k = 0; k < I.length; k += 3) { const a = I[k], b = I[k + 1], c = I[k + 2];
          if (sel[a] && sel[b] && sel[c] && [a, b, c].every((v) => P.getX(v) > A0 + 0.004 && P.getX(v) < A1 - 0.004)) { nt++; continue; } out.push(a, b, c); }
        if (out.length < I.length) g.setIndex(new lt(new I.constructor(out), 1));
        for (let v = 0; v < P.count; v++) { if (!sel[v]) continue; const x = P.getX(v); P.setX(v, x <= A0 + 0.001 ? x + H : x >= A1 - 0.001 ? x - H : C); nv++; }
        P.needsUpdate = !0; g.computeBoundingBox(); g.computeBoundingSphere(); });
      console.log('DBG L1 sofa verts ' + nv + ' dropped tris ' + nt);
    } catch (e) { console.error('DBG L1 failed', e); }
    // ===== L2: remove west armchair (right side when facing the TV) =====
    if (!window.__INT) try { let nt = 0; const inA = (x, y, z) => x > 4.18 && x < 5.02 && z > -1.60 && z < -0.75 && y > 0.0 && y < 0.95;
      it.children.forEach((m) => { if (!m.isMesh || !/^(accent_fabric|brass)$/.test(m.name) || !m.geometry.index) return; const g = m.geometry, P = g.attributes.position.array, I = g.index.array, out = [];
        for (let k = 0; k < I.length; k += 3) { if ([0, 1, 2].every((q) => { const v = I[k + q] * 3; return inA(P[v], P[v + 1], P[v + 2]); })) { nt++; continue; } out.push(I[k], I[k + 1], I[k + 2]); }
        if (out.length < I.length) g.setIndex(new lt(new I.constructor(out), 1)); });
      console.log('DBG L2 armchair dropped ' + nt);
      patch('rug_living', r0, [qy(4.47, 5.08, -1.62, -0.72, 0.0215)], [5.1, 6.2, 0.01, 0.03, -1.9, -0.5]); patch('floor_oak', r0, [qy(3.95, 4.475, -1.70, -0.66, 0.0025)], [4.6, 7.5, -0.01, 0.01, -0.3, 0.3], [0, 0, 1.0]); /* floor map has the chair AO painted in: sample 1m south */ // cover armchair shadow
    } catch (e) { console.error('DBG L2 failed', e); }
    // ===== L3: remove the small side table + lamp at the sofa's west end =====
    if (!window.__INT) try { let nt = 0; const inT = (x, y, z) => x > 4.08 && x < 4.68 && z > -3.70 && z < -3.08 && y > -0.005 && y < 1.1;
      it.children.forEach((m) => { if (!m.isMesh || !/^(counter|vase|shade|brass|bulb|metal|decor.*)$/.test(m.name) || !m.geometry.index) return; const g = m.geometry, P = g.attributes.position.array, I = g.index.array, out = [];
        for (let k = 0; k < I.length; k += 3) { if ([0, 1, 2].every((q) => { const v = I[k + q] * 3; return inT(P[v], P[v + 1], P[v + 2]); })) { nt++; continue; } out.push(I[k], I[k + 1], I[k + 2]); }
        if (out.length < I.length) g.setIndex(new lt(new I.constructor(out), 1)); });
      console.log('DBG L3 side table dropped ' + nt);
    } catch (e) { console.error('DBG L3 failed', e); }
    // ===== L4: dining table + chairs moved off the island into the nook between sofa and west bookcase (rotated, end chair to the south) =====
    if (!window.__INT) try {
      const dropBox = (re, B) => { let nt = 0; it.children.forEach((m) => { if (!m.isMesh || !re.test(m.name) || !m.geometry.index) return; const g = m.geometry, P = g.attributes.position.array, I = g.index.array, out = [];
        for (let k = 0; k < I.length; k += 3) { const ins = (b) => [0, 1, 2].every((q) => { const v = I[k + q] * 3; return P[v] > b[0] && P[v] < b[1] && P[v + 1] > b[2] && P[v + 1] < b[3] && P[v + 2] > b[4] && P[v + 2] < b[5]; }); if (B.some(ins)) { nt++; continue; } out.push(I[k], I[k + 1], I[k + 2]); }
        if (out.length < I.length) g.setIndex(new lt(new I.constructor(out), 1)); }); return nt; };
      // nook: reading chair, rug, lamp table
      const nk = dropBox(/^(velvet_dark|rug2|counter|vase|shade|brass|metal|bulb|decor.*|leaves|accent_fabric|linen.*|books)$/, [[2.55, 3.44, -0.01, 1.35, -5.62, -4.10], [3.44, 3.98, -0.01, 1.35, -5.06, -4.10]]);
      // dining set: clone tris (rotated) then drop originals
      const DB = [-3.565, -0.95, -0.005, 1.05, -0.60, 1.35], cx = -2.51, cz = 0.39, Tx = 3.79, Tz = -3.88, DN = /^(counter|cabinet|brass|chair_fabric|decor.*|bulb|fruit|dark|oak|ceramic|vase|leaves|chrome|metal|linen.*|glass)$/, BX = (n) => n === 'counter' ? [-3.66, DB[1], DB[2], 0.80, DB[4], DB[5]] : DB;
      let nc = 0; const rep = [];
      it.children.slice().forEach((m) => { if (!m.isMesh || !DN.test(m.name) || !m.geometry.index) return; const D0 = BX(m.name), g = m.geometry, P = g.attributes.position.array, I = g.index.array, sel = [];
        for (let k = 0; k < I.length; k += 3) if ([0, 1, 2].every((q) => { const v = I[k + q] * 3; return P[v] > D0[0] && P[v] < D0[1] && P[v + 1] > D0[2] && P[v + 1] < D0[3] && P[v + 2] > D0[4] && P[v + 2] < D0[5]; })) sel.push(I[k], I[k + 1], I[k + 2]);
        if (!sel.length) return; const ng = new _t();
        for (const key in g.attributes) { const a = g.attributes[key], sz = a.itemSize, arr = new a.array.constructor(sel.length * sz); sel.forEach((vi, j) => { for (let c = 0; c < sz; c++) arr[j * sz + c] = a.array[vi * sz + c]; });
          if (key === 'position') for (let j = 0; j < sel.length; j++) { const x = arr[j * 3], z = arr[j * 3 + 2]; arr[j * 3] = Tx - (z - cz); arr[j * 3 + 2] = Tz + (x - cx); }
          if (key === 'normal') for (let j = 0; j < sel.length; j++) { const x = arr[j * 3], z = arr[j * 3 + 2]; arr[j * 3] = -z; arr[j * 3 + 2] = x; }
          ng.setAttribute(key, new lt(arr, sz, a.normalized)); }
        ng.setAttribute('kidKeep', new lt(new Float32Array(sel.length).fill(1), 1)); ng.computeBoundingBox(); ng.computeBoundingSphere();
        const nm = new dt(ng, m.material); nm.name = m.name + '_dn'; nm.userData = m.userData; nm.castShadow = nm.receiveShadow = !0; it.add(nm); nc += sel.length / 3;
        const bb = ng.boundingBox; rep.push(m.name + ':' + sel.length / 3 + '[' + [bb.min.x, bb.max.x, bb.min.z, bb.max.z].map((q) => q.toFixed(2)) + ']'); });
      const nd = dropBox(/^(cabinet|brass|chair_fabric|decor.*|bulb|fruit|dark|oak|ceramic|vase|leaves|chrome|metal|linen.*|glass)$/, [DB]) + dropBox(/^counter$/, [BX('counter')]);
      // (L6) old dining footprint now fixed in the floor texture itself, see L6 below
      console.log('DBG L4 nook ' + nk + ' moved ' + nc + ' dropped ' + nd + ' ' + rep.join(' '));
    } catch (e) { console.error('DBG L4 failed', e); }
    // ===== L5: island back to 4 bar stools: clone the stool at z~-0.77 to z~0.0 and z~0.77 =====
    if (!window.__INT) try {
      const SB = [-3.87, -2.70, -0.005, 0.90, -1.20, -0.36], SR = /^(boucle|brass|chrome|metal)$/; let ns = 0; const rp = [];
      it.children.slice().forEach((m) => { if (!m.isMesh || !SR.test(m.name) || !m.geometry.index) return; const g = m.geometry, P = g.attributes.position.array, I = g.index.array, sel = [];
        for (let k = 0; k < I.length; k += 3) if ([0, 1, 2].every((q) => { const v = I[k + q] * 3; return P[v] > SB[0] && P[v] < SB[1] && P[v + 1] > SB[2] && P[v + 1] < SB[3] && P[v + 2] > SB[4] && P[v + 2] < SB[5]; })) sel.push(I[k], I[k + 1], I[k + 2]);
        if (!sel.length) return;
        [0.77, 1.54].forEach((dz, di) => { const ng = new _t();
          for (const key in g.attributes) { const a = g.attributes[key], sz = a.itemSize, arr = new a.array.constructor(sel.length * sz); sel.forEach((vi, j) => { for (let c = 0; c < sz; c++) arr[j * sz + c] = a.array[vi * sz + c]; });
            if (key === 'position') for (let j = 0; j < sel.length; j++) arr[j * 3 + 2] += dz;
            ng.setAttribute(key, new lt(arr, sz, a.normalized)); }
          ng.setAttribute('kidKeep', new lt(new Float32Array(sel.length).fill(1), 1)); ng.computeBoundingBox(); ng.computeBoundingSphere();
          const nm = new dt(ng, m.material); nm.name = m.name + '_st' + di; nm.userData = m.userData; nm.castShadow = nm.receiveShadow = !0; it.add(nm); ns += sel.length / 3;
          if (!di) { const bb = ng.boundingBox; rp.push(m.name + ':' + sel.length / 3 + '[' + [bb.min.x, bb.max.x, bb.min.y, bb.max.y, bb.min.z - dz, bb.max.z - dz].map((q) => q.toFixed(2)) + ']'); } }); });
      console.log('DBG L5 stools ' + ns + ' ' + rp.join(' '));
    } catch (e) { console.error('DBG L5 failed', e); }
    // ===== L6: remove the old dining-table AO blob from the plan-wide floor texture (keeps veins: divide out low-freq tone) =====
    try {
      const fm = it.children.find((m) => m.isMesh && m.name === 'floor_oak'), tx = fm && fm.material.map, im = tx && tx.image;
      const g = fm.geometry, P = g.attributes.position, UV = g.attributes.uv; let a = null, b = null;
      for (let v = 0; v < P.count && !b; v++) { if (P.getY(v) > 0.05) continue; if (!a) a = v; else if (Math.abs(P.getX(v) - P.getX(a)) > 2 && Math.abs(P.getZ(v) - P.getZ(a)) > 2) b = v; }
      const ku = (UV.getX(b) - UV.getX(a)) / (P.getX(b) - P.getX(a)), cu = UV.getX(a) - ku * P.getX(a), kv = (UV.getY(b) - UV.getY(a)) / (P.getZ(b) - P.getZ(a)), cv = UV.getY(a) - kv * P.getZ(a);
      const Wd = im.width, Ht = im.height, cvs = document.createElement('canvas'); cvs.width = Wd; cvs.height = Ht; const c2 = cvs.getContext('2d'); c2.drawImage(im, 0, 0);
      const px = (x) => (ku * x + cu) * Wd, py = (z) => (tx.flipY ? 1 - (kv * z + cv) : kv * z + cv) * Ht;
      const X0 = -3.50, X1 = -1.10, Z0 = -0.75, Z1 = 1.45, M = 0.35; // footprint + margin (m)
      const xa = Math.floor(Math.min(px(X0 - M), px(X1 + M))), xb = Math.ceil(Math.max(px(X0 - M), px(X1 + M))), ya = Math.floor(Math.min(py(Z0 - M), py(Z1 + M))), yb = Math.ceil(Math.max(py(Z0 - M), py(Z1 + M)));
      const w = xb - xa, h = yb - ya, D = c2.getImageData(xa, ya, w, h), d = D.data, L = new Float32Array(w * h);
      for (let i = 0; i < w * h; i++) L[i] = 0.299 * d[i * 4] + 0.587 * d[i * 4 + 1] + 0.114 * d[i * 4 + 2];
      const ppm = Math.abs(px(1) - px(0)), R = Math.max(4, Math.round(ppm * 0.25));
      // separable box blur x2 (approx gaussian), vein-robust: clamp dark vein texels to the local median-ish tone first
      const blur = (src) => { const t = new Float32Array(w * h), o = new Float32Array(w * h);
        for (let y = 0; y < h; y++) { let s = 0, n = 0; for (let x = -R; x < w + R; x++) { if (x + R < w) { s += src[y * w + x + R]; n++; } if (x - R - 1 >= 0) { s -= src[y * w + x - R - 1]; n--; } if (x >= 0 && x < w) t[y * w + x] = s / n; } }
        for (let x = 0; x < w; x++) { let s = 0, n = 0; for (let y = -R; y < h + R; y++) { if (y + R < h) { s += t[(y + R) * w + x]; n++; } if (y - R - 1 >= 0) { s -= t[(y - R - 1) * w + x]; n--; } if (y >= 0 && y < h) o[y * w + x] = s / n; } } return o; };
      const B1 = blur(L), Lc = L.map((q, i) => Math.max(q, B1[i] * 0.97)), Bl = blur(blur(Lc));
      // target tone: median of ring (outside footprint) texels
      const inF = (x, y) => { const wx = X0 + (x - (px(X0) - xa)) / (px(X1) - px(X0)) * (X1 - X0); return [wx, Z0 + (y - (py(Z0) - ya)) / (py(Z1) - py(Z0)) * (Z1 - Z0)]; };
      const ring = []; for (let y = 0; y < h; y += 3) for (let x = 0; x < w; x += 3) { const [wx, wz] = inF(x, y); if ((wx < X0 || wx > X1 || wz < Z0 || wz > Z1) && wx > -3.5) ring.push(Bl[y * w + x]); }
      ring.sort((p, q) => p - q); const T = ring[ring.length >> 1] || 230;
      let gmax = 0;
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const [wx, wz] = inF(x, y); if (wx < -3.52) continue; // keep island's own contact shadow
        const e = Math.min(wx - (X0 - M), (X1 + M) - wx, wz - (Z0 - M), (Z1 + M) - wz), f = Math.max(0, Math.min(1, e / M)), fs = f * f * (3 - 2 * f), i = y * w + x;
        const gn = 1 + (Math.max(1, T / Bl[i]) - 1) * fs; gmax = Math.max(gmax, gn); for (let c = 0; c < 3; c++) d[i * 4 + c] = Math.min(255, d[i * 4 + c] * gn); }
      c2.putImageData(D, xa, ya); tx.image = cvs; tx.needsUpdate = !0;
      console.log('DBG L6 floortex ' + Wd + 'x' + Ht + ' rect ' + [xa, ya, w, h] + ' ppm ' + ppm.toFixed(1) + ' T ' + T.toFixed(1) + ' gmax ' + gmax.toFixed(3) + ' flipY ' + tx.flipY);
    } catch (e) { console.error('DBG L6 failed', e); }
    // ===== L6b: floor vertex bake under old dining footprint: refill from surrounding vertices (IDW), only brighten =====
    if (!window.__INT) try {
      const fm = it.children.find((m) => m.isMesh && m.name === 'floor_oak'), g = fm.geometry, P = g.attributes.position, B = g.attributes.bake;
      const X0 = -3.52, X1 = -0.95, Z0 = -0.85, Z1 = 1.55, M = 0.7, ins = (x, z) => x > X0 && x < X1 && z > Z0 && z < Z1, inR = (x, z) => x > X0 - 0.02 && x < X1 + M && z > Z0 - M && z < Z1 + M && !ins(x, z);
      const ring = [], tgt = [];
      for (let v = 0; v < P.count; v++) { const x = P.getX(v), y = P.getY(v), z = P.getZ(v); if (y > 0.05) continue; if (ins(x, z)) tgt.push(v); else if (inR(x, z)) ring.push(v); }
      const fix = () => { const arr = B.array; let ch = 0, dmax = 0;
      tgt.forEach((v) => { const x = P.getX(v), z = P.getZ(v); let ws = 0; const acc = [0, 0, 0];
        ring.forEach((u) => { const dx = P.getX(u) - x, dz = P.getZ(u) - z, w = 1 / Math.pow(dx * dx + dz * dz + 0.01, 1.5); ws += w; for (let c = 0; c < 3; c++) acc[c] += w * arr[u * 3 + c]; });
        if (!ws) return; for (let c = 0; c < 3; c++) { const nv = Math.max(arr[v * 3 + c], acc[c] / ws); dmax = Math.max(dmax, nv - arr[v * 3 + c]); arr[v * 3 + c] = nv; } ch++; });
      B.needsUpdate = !0; return [ch, dmax]; };
      const r6 = fix(); const _Fy6 = Fy; Fy = function (...a) { const o = _Fy6.apply(this, a); fix(); return o; };
      console.log('DBG L6b bake tgt ' + tgt.length + ' ring ' + ring.length + ' changed ' + r6[0] + ' dmax ' + r6[1].toFixed(1));
    } catch (e) { console.error('DBG L6b failed', e); }
    console.log('DBG master ok');
  } catch (e) { console.error('DBG master failed', e); }
}

setTimeout(()=>{window.__rayO=(x,y)=>{Ff.setFromCamera({x,y},Be);return Ff.intersectObjects(Sa,!1);};window.__cl=cl;window.__cam=Be;window.__Oi=Oi;window.__Bi=Bi;window.__zt=zt;},1);

setTimeout(()=>{window.__look=(x,z)=>Yh({id:"walk",kind:"eye",eyeW:Be.position.clone(),lookW:new A(x,Be.position.y-0.6,z),lens:17,out:0,ev:0.8});},1);
setTimeout(()=>{try{const re=/^kfurn_/;it.children.forEach(o=>{if(!o.isMesh)return;const nm=(o.userData&&o.userData.name)||o.name||"";if(!re.test(nm))return;const ms=Array.isArray(o.material)?o.material:[o.material];ms.forEach(m=>{if(m){m.flatShading=true;if("envMapIntensity" in m)m.envMapIntensity=0;if("roughness" in m)m.roughness=Math.max(m.roughness||0,0.85);if("metalness" in m)m.metalness=0;m.needsUpdate=true;}});});console.log("kfurn flatShading on");}catch(e){console.warn(e);}},50);
setTimeout(()=>{try{let wallMat=null;it.children.forEach(o=>{if(!o.isMesh)return;const nm=((o.userData&&o.userData.name)||o.name||"");if(nm==="wall"&&o.material)wallMat=Array.isArray(o.material)?o.material[0]:o.material;});it.children.forEach(o=>{if(!o.isMesh)return;const nm=((o.userData&&o.userData.name)||o.name||"");if(!/^wall_ov/.test(nm))return;if(wallMat){const c=wallMat.clone();c.polygonOffset=true;c.polygonOffsetFactor=-1;c.polygonOffsetUnits=-4;c.needsUpdate=true;o.material=c;}else{const ms=Array.isArray(o.material)?o.material:[o.material];ms.forEach(m=>{if(!m)return;m.polygonOffset=true;m.polygonOffsetFactor=-1;m.polygonOffsetUnits=-4;m.needsUpdate=true;});}});console.log("wall_ov polyOffset");}catch(e){console.warn(e);}},70);


setTimeout(()=>{try{if(!/[?&#]closetDiag=1/.test(location.href))return;let n=0;(window.__it||it).children.forEach(o=>{if(!o.isMesh||!o.material)return;const nm=((o.userData&&o.userData.name)||o.name||"").toLowerCase();if(!/^kfurn_/.test(nm))return;let c=0xffff00;if(/door|leaf|dleaf|panel/.test(nm))c=0xff00ff;else if(/frame|jamb|trim|mold/.test(nm))c=0x00ffff;const ms=Array.isArray(o.material)?o.material:[o.material];ms.forEach(m=>{if(m&&m.color){m.color=new THREE.Color(c);m.flatShading=true;m.needsUpdate=true;}});n++;});console.log("closetDiag colored",n);}catch(e){console.warn(e);}},100);

setTimeout(()=>{try{
  const LinearFilter=THREE.LinearFilter, Clamp=THREE.ClampToEdgeWrapping;
  const fix=tex=>{
    if(!tex||!tex.isTexture)return;
    tex.generateMipmaps=false;
    tex.minFilter=LinearFilter;
    tex.magFilter=LinearFilter;
    if(tex.wrapS!==undefined){tex.wrapS=Clamp;tex.wrapT=Clamp;}
    tex.needsUpdate=true;
  };
  (window.__it||it).children.forEach(o=>{
    if(!o.isMesh||!o.material)return;
    const ms=Array.isArray(o.material)?o.material:[o.material];
    ms.forEach(m=>{
      if(!m)return;
      ["map","lightMap","aoMap","emissiveMap","bumpMap","normalMap","roughnessMap","metalnessMap"].forEach(k=>fix(m[k]));
    });
  });
  console.log("lightmap/tex no-mip LinearFilter ClampToEdge");
}catch(e){console.warn(e);}},90);

