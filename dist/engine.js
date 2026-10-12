const MathEngine = (() => {
  const topics = [
    {id:'quantity',title:'Tall og mengder',icon:'●',desc:'Se hvor mange. Bli kjent med tallene.',hint:'Tell én prikk om gangen. Det siste tallet forteller hvor mange det er.'},
    {id:'line',title:'På tallinja',icon:'↔',desc:'Finn plassen til tallet, ett steg av gangen.',hint:'Tallene vokser med én for hvert steg mot høyre.'},
    {id:'place',title:'Enere og tiere',icon:'▥',desc:'Oppdag hvordan vi bygger større tall.',hint:'En tier er ti enere. I 23 betyr 2 to tiere, og 3 betyr tre enere.'},
    {id:'ten',title:'Venner som blir ti',icon:'✦',desc:'Finn tallene som sammen fyller opp til ti.',hint:'Tenk på en ramme med ti plasser. Hvor mange plasser står tomme?'},
    {id:'add',title:'Legge sammen',icon:'+',desc:'To mengder blir én. Utforsk pluss.',hint:'Pluss betyr å legge sammen. Start med den første mengden og tell videre.'},
    {id:'subtract',title:'Trekke fra',icon:'−',desc:'Hva er igjen når vi tar noe bort?',hint:'Minus betyr her å ta bort. Start med hele mengden og fjern det som trekkes fra.'}
  ];
  function question(id,step=0,easy=false,rng=Math.random){
    const rand=(a,b)=>a+Math.floor(rng()*(b-a+1));
    let a,b,answer,prompt,visual,explain;
    const variant=step%2;
    switch(id){
      case 'quantity': a=rand(2,easy?5:10);answer=a;prompt=variant?'Hvilket tall passer til prikkene?':'Hvor mange prikker ser du?';visual={type:'dots',a};explain=`Det er ${a} prikker. Tell hver prikk én gang: ${Array.from({length:a},(_,i)=>i+1).join(', ')}.`;break;
      case 'line': a=rand(1,easy?5:9);answer=a;prompt=variant?`Hvilket tall kommer rett etter ${a-1}?`:'Hvilket tall mangler på tallinja?';visual={type:'line',a,max:easy?6:10};explain=`Etter ${a-1} kommer ${a}. Tallinja øker med én for hvert steg mot høyre.`;break;
      case 'place': a=rand(1,easy?2:5);b=rand(1,9);answer=variant?a:a*10+b;prompt=variant?`Hvor mange hele tiere er det i ${a*10+b}?`:`Hvilket tall er ${a} tiere og ${b} enere?`;visual={type:'place',a,b};explain=`${a} tiere er ${a*10}. Med ${b} enere får vi ${a*10+b}. Tallet har ${a} tiere.`;break;
      case 'ten': a=rand(easy?6:1,9);answer=10-a;prompt=variant?`${a} + hvilket tall blir 10?`:`Du har ${a}. Hvor mange mangler for å få 10?`;visual={type:'frame',a};explain=`Ti plasser, ${a} er fylt. ${10-a} er tomme. Derfor er ${a} + ${10-a} = 10.`;break;
      case 'add': a=rand(1,easy?4:9);b=rand(1,easy?3:6);answer=a+b;prompt=variant?`Du har ${a} klosser og får ${b} til. Hvor mange har du nå?`:`Hva er ${a} + ${b}?`;visual={type:'add',a,b};explain=`Start på ${a} og tell ${b} videre: ${Array.from({length:b},(_,i)=>a+i+1).join(', ')}. Du ender på ${answer}.`;break;
      case 'subtract': a=rand(3,easy?6:12);b=rand(1,a-1);answer=a-b;prompt=variant?`Du har ${a} epler og gir bort ${b}. Hvor mange har du igjen?`:`Hva er ${a} − ${b}?`;visual={type:'subtract',a,b};explain=`Når vi tar ${b} fra ${a}, er ${answer} igjen. Sjekk ved å legge sammen: ${answer} + ${b} = ${a}.`;break;
      default:throw Error('Ukjent tema');
    }
    const options=new Set([answer]);let offset=1;while(options.size<4){options.add(Math.max(0,answer-offset));if(options.size<4)options.add(answer+offset);offset++;}
    const shuffled=[...options];for(let i=shuffled.length-1;i>0;i--){const j=rand(0,i);[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];}
    return {id,variant,answer,prompt,visual,explain,options:shuffled};
  }
  return {topics,question};
})();
if(typeof module!=='undefined')module.exports=MathEngine;
