import pandas as pd

path = "../player list/top200_player.txt"
with open(path, encoding='utf-8', mode='r') as top_file:
    top_text = top_file.read()
    text = top_text.split('\n')
    title = text[0].split('-')
    index = []
    name_c = []
    name_f = []
    position = []
    goal = []
    assist = []
    for i in range(1, 202):
        temp = text[i].split('-')
        index.append(temp[0])
        name_c.append(temp[1])
        name_f.append(temp[2])
        position.append(temp[3])
        goal.append(int(temp[4])+int(temp[6]))
        assist.append(int(temp[5])+int(temp[7]))
        print(text[i])
    dicts = {title[0]:  index, title[1]: name_c, title[2]: name_f, title[3]: position, "goal_total": goal, "assist_total": assist}
    df = pd.DataFrame(dicts)
    df.to_csv('../source/top200_player.csv')
