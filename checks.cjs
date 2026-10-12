const assert=require('node:assert/strict');const engine=require('./dist/engine.js');
let seed=20261012;
const rng=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
for(const topic of engine.topics)for(let i=0;i<1000;i++){const q=engine.question(topic.id,i,i%3===0,rng);assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.ok(q.options.includes(q.answer));assert.ok(q.options.every(n=>Number.isInteger(n)&&n>=0));const v=q.visual;const expected=topic.id==='quantity'||topic.id==='line'?v.a:topic.id==='place'?(q.variant?v.a:v.a*10+v.b):topic.id==='ten'?10-v.a:topic.id==='add'?v.a+v.b:v.a-v.b;assert.equal(q.answer,expected);}
console.log('6000 oppgaver kontrollert: fasit, svaralternativer og tallområder OK.');
