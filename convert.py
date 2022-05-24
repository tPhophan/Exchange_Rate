import json

f = open("rates.json")
f2 = open("dropdown.txt", "w")
data  = json.load(f)
for i in data['conversion_rates']:
    #<option value="AED"</option>
    f2.write(f'<option value=\"{i}\"</option>\n')
    

f.close()
f2.close()