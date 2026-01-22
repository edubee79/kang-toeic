
import os
import re

mapping = {
    'P5_POS_NOUN': 'n1',
    'P5_POS_ADJ': 'a1',
    'P5_POS_ADV': 'av1',
    'P5_POS_VERB': 'v1',
    'P5_PR_CASE': 'p1',
    'P5_PR_REFL': 'p4',
    'P5_PR_DEMO': 'p3',
    'P5_PR_INDEF': 'p2',
    'P5_V_AGREE': 'v1',
    'P5_V_VOICE': 'v2',
    'P5_V_TENSE': 'v4',
    'P5_V_FINITE': 'v8',
    'P5_V_SUBJ': 'v5',
    'P5_PREP_PHRA': 'pr1',
    'P5_CONJ_SUB': 'c3',
    'P5_CONJ_COOR': 'c1',
    'P5_CONJ_CORR': 'c2',
    'P5_REL_PRON': 'ac1',
    'P5_REL_ADV': 'ac6',
    'P5_NOUN_CLAU': 'nc1',
    'P5_VOC_NOUN': 'voc1',
    'P5_VOC_VERB': 'voc1',
    'P5_VOC_ADJ': 'voc1',
    'P5_VOC_ADV': 'voc1',
}

path = r'c:\Users\user\.gemini\antigravity\scratch\kangs-toeic-next\src\data\toeic\reading\part5\tests.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

def replacer(match):
    old_tag = match.group(1)
    if old_tag in mapping:
        return f'\"classification\": \"{mapping[old_tag]}\"'
    return match.group(0)

new_content = re.sub(r'\"classification\": \"(P5_[A-Z_]+)\"', replacer, content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Successfully mapped Part 5 Test classifications.')
