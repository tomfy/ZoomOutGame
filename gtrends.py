#!/usr/bin/python3.2

# is this how to make a comment?

from urllib.request import urlopen, Request
from urllib.parse import urlencode, quote
import sys, pprint, csv, re

p = pprint.PrettyPrinter().pprint

terms = sys.argv[1:]
avg = lambda x: sum(x) / float(len(x))
u = 'http://www.google.com/trends/trendsReport?'
q = ', '.join(terms)
print(q)
u += urlencode(dict(q=q, content='1', export='1'))
print(u)
cookie = 'I4SUserLocale=en_US; S=izeitgeist-ad-metrics=LvIFv-JeB_o; HSID=AeYWQUjLvolCrTb_l; APISID=kn6cYUSfR3myyPBo/A142KI1rz8XllaDWT; PREF=ID=a9fbfa537b2e4906:U=9fa37af093865eab:FF=0:LD=en:TM=1357394553:LM=1357394565:S=XMgydgupTS1kdwVK; NID=67=RvmDKEvZQAfO0QR4j8xVg0F2E5LDqnchlnoRQnfo2RUZLSiw0eb-3Nc5fHmGNCBxYXBiRobNBQaKgr7Q7jAxjXtHAB_WZ46dqIKD-eMqEg0a7GdoEZplXIepexgYRfXkFOhH4Sxe5sUvyWcvwRoM; SID=DQAAAMkAAADCWdwDXB4cJaoN5Lql4xyZDyf0Y20SVHC5d-o6vxrlZgXX5sS5zns0mwupeuxDp2tpMn03U-GJkJFqSv-oofLACz1l78S5QIe-h598efh6DJgp7mqAGPKA6lNwMN9HIc8htjOYudxEeKBhmZgAIFPDCfFlBhotxacHsKUUoyRJfE-BjnjBg8_-GB8vbNLdmCzX_iKkuEL5zAx84YSorFZ6FlWrVCsOOgZ8AOi-6p2NSXwKEjDxika2yInbmLv3wvsA5-YX6gVIAuqCC0zi66Cr'
resp = urlopen(Request(u, headers={'Cookie': cookie}))

a = resp.read().decode('utf-8').split('\n')
pattern = re.compile('\d\d\d\d-\d\d-\d\d - \d\d\d\d-\d\d-\d\d')
reader = csv.reader(a)
toavg = {}
rterms = []

for row in reader:
 if len(row) > 0 and row[0] == 'Week':
  for i in range(1, len(row)):
   toavg[row[i]] = []
   rterms += [row[i]]
  continue
 if len(row) < 2: continue
 if not pattern.match(row[0]): continue
 for i in range(1, len(row)):
  try:
   toavg[rterms[i-1]] += [int(row[i])]
  except ValueError:
   pass

avgs = {x: avg(toavg[x]) for x in toavg}
p(avgs)
