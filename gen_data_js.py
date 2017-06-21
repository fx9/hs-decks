import json 
deck_content = []
with open("decks.txt") as fd:
	deckname = "<>"
	for line in fd.readlines():
		line = line.strip()
		if not line:
			continue
		if line.startswith("###"):
			deckname = "<{0}>".format(line[3:].strip())
		elif line.startswith("#"):
			continue
		else:
			deck_content.append((deckname,line))
			deckname = "<>"

deck_content = sorted(deck_content)
output = []
for deckname, line in deck_content:
	output.append({"name":deckname, "code":line})

with open("data.js",'w') as fd:
	fd.write("decks=")
	fd.write(json.dumps(output,indent=2))
	fd.write("\n")