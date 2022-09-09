const s = BigInt(883423532389192164791648750371459257913741948437809479060803100646309888);
const r = s*BigInt(8192)
console.log(r)
const hex = r.toString('hex')
console.log(hex)