import pdb
import requests
from tqdm import tqdm
import json

state_list = ["Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Daman & Diu"]
dist_list = []

try:
    for i, st in tqdm(enumerate(state_list), total=len(state_list)):
        resp = requests.get('https://cdn-api.co-vin.in/api/v2/admin/location/districts/'+str(i+1))
        if resp.ok:
            state = {'no':i+1, 'name':st, 'districts': resp.json()['districts']}
            dist_list.append(state)
    with open('districts.json', 'w') as inp:
        json.dump(dist_list, inp)
except Exception as e:
    print(e)
    

