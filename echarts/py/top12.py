import pandas as pd

path1 = "../source/top12_CF.txt"

with open(path1, encoding='utf-8', mode='r') as top_file1:
    top_text1 = top_file1.read()
    text = top_text1.split('\n')
    title = text[0].split('-')
    name_c = []
    name_f = []
    GA_per90 = []
    SOT_per = []
    G_per_SOT = []
    SCA_per90 = []
    for i in range(1, 13):
        temp = text[i].split('-')
        name_c.append(temp[0])
        name_f.append(temp[1])
        GA_per90.append(temp[2])
        SOT_per.append(temp[3])
        G_per_SOT.append(temp[4])
        SCA_per90.append(temp[5])
        print(text[i])
    dicts = {title[0]:  name_c, title[1]: name_f, title[2]: GA_per90, title[3]: SOT_per, title[4]: G_per_SOT, title[5]: SCA_per90}
    df = pd.DataFrame(dicts)
    df.to_csv('../source/top12_CF.csv')

path2 = "../source/top12_WF.txt"

with open(path2, encoding='utf-8', mode='r') as top_file:
    top_text = top_file.read()
    text = top_text.split('\n')
    title = text[0].split('-')
    name_c = []
    name_f = []
    GA_per90 = []
    SOT_per = []
    G_per_SOT = []
    SCA_per90 = []
    for i in range(1, 13):
        temp = text[i].split('-')
        name_c.append(temp[0])
        name_f.append(temp[1])
        GA_per90.append(temp[2])
        SOT_per.append(temp[3])
        G_per_SOT.append(temp[4])
        SCA_per90.append(temp[5])
        print(text[i])
    dicts = {title[0]:  name_c, title[1]: name_f, title[2]: GA_per90, title[3]: SOT_per, title[4]: G_per_SOT, title[5]: SCA_per90}
    df = pd.DataFrame(dicts)
    df.to_csv('../source/top12_WF.csv')


