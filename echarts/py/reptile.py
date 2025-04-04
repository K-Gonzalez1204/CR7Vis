import csv

import requests
from bs4 import BeautifulSoup
import pandas as pd
import re
import lxml

url = 'https://fbref.com/en/players/dea698d9/nat_tm/Cristiano-Ronaldo-National-Team-Stats'
sl = requests.get(url)
sl.encoding = 'utf-8'

soup = BeautifulSoup(sl.text, 'lxml')
data1 = soup.select('#stats_standard_dom_lg')
sbody = soup.findAll('tr')
leng = 0
title = []
data = []
istitle = True
pre = None
i = 0
for a in sbody:
    if istitle is True and a.parent != pre:
        tt = []
        for content in a.contents:
            if content.text != ' ':
                b1 = content.text.encode('utf-8')
                title.append(b1.decode())
        istitle = False
    elif istitle is False and len(data) == 0:
        tt = []
        for content in a.contents:
            if content.text != ' ':
                b1 = content.text.replace('\xa0','').encode('utf-8')
                tt.append(b1.decode())
        data.append(tt)
        pre = a.parent
    elif a.parent == pre:
        tt = []
        for content in a.contents:
            if content.text != ' ':
                b1 = content.text.replace('\xa0','').encode('utf-8')
                tt.append(b1.decode())
        data.append(tt)
    else:
        f = open(str(i)+'national'+'.csv','w', encoding='utf-8',newline='')
        # with open(f, encoding='utf-8') as csvfile:
        writer = csv.writer(f)
        writer.writerow(title)
        for item in data:
            writer.writerow(item)
            # print('Dušan Vlahović')
        # print("Title")
        # print(title)
        # print("DATA")
        # print(data)
        title.clear()
        data.clear()
        istitle = True
        pre = None
        if a.attrs != {'class': ['over_header']}:
            for content in a.contents:
                if content.text != ' ':
                    b1 = content.text.replace('\xa0', '').encode('utf-8')
                    title.append(b1.decode())
            istitle = False
        i+=1

# stats = [row for row in soup.findAll('tbody',) if row.id == 'stats']
# print(stats)
dataframe = pd.DataFrame
