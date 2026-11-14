#!/bin/bash
# Stamp one BUILD into both pages + data.js ?v=, version.json, commit, push.
set -e; cd "$(dirname "$0")"
B=$(date +%Y%m%d-%H%M%S)
python3 - "$B" <<'PY'
import re,sys
b=sys.argv[1]
for p in ('index.html','show.html'):
    s=open(p).read()
    s,n=re.subn(r"var BUILD='[^']*';","var BUILD='%s';"%b,s);assert n==1,p
    s,n=re.subn(r'data\.js\?v=[\w-]+','data.js?v=%s'%b,s);assert n==1,p
    open(p,'w').write(s)
open('version.json','w').write('{"build":"%s"}\n'%b)
PY
cd ..; cd ..; git add fall-festival/mc
git commit -qm "${1:-MC sheet update} (build $B)

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
git push -q
until curl -s "https://achyboy.github.io/links/fall-festival/mc/version.json?t=$RANDOM" | grep -q $B; do sleep 5; done
echo "live $B"
