
import { QuestionData } from './part5_data';

export interface Part6Set {
    id: number;
    type: string;
    startQ: number;
    endQ: number;
    title: string;
    content: string; // HTML allowed for line breaks
    questions: QuestionData[];
}

export const part6Sets: Part6Set[] = [
    {
        id: 1,
        type: 'notice',
        startQ: 131,
        endQ: 134,
        title: "Questions 131-134 refer to the following notice.",
        content: `<strong>NOTICE</strong><br/><br/>
To continue providing the highest level of --- 131 --- to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. --- 132 --- this time, the restrooms will be out of order, so tenants and their guests should instead use the facilities in the north lobby.<br/><br/>
We --- 133 --- for any inconvenience this might cause. --- 134 ---.<br/><br/>
Denville Property Management Partners`,
        questions: [
            { id: 131, text: "", options: ["(A) serve", "(B) served", "(C) server", "(D) service"] },
            { id: 132, text: "", options: ["(A) Along", "(B) During", "(C) Without", "(D) Between"] },
            { id: 133, text: "", options: ["(A) apologize", "(B) organize", "(C) realize", "(D) recognize"] },
            { id: 134, text: "", options: ["(A) If you would like to join our property management team, call us today.", "(B) Thank you for your patience while the main lobby is being painted.", "(C) Please do not attempt to access the north lobby on these days.", "(D) Questions or comments may be directed to the Management Office."] }
        ]
    },
    {
        id: 2,
        type: 'review',
        startQ: 135,
        endQ: 138,
        title: "Questions 135-138 refer to the following customer review.",
        content: `<strong>Jim Kestren, Auckland</strong><br/><br/>
I recently received a last-minute invitation to a formal dinner. I bought a suit and needed it tailored as --- 135 --- as possible. A friend suggested that I use Antonio’s Tailoring Shop in downtown Auckland.<br/><br/>
When I met Antonio, he gave me his full attention --- 136 --- his shop was busy. He took the time to listen to me and carefully noted all my measurements. He then explained all the tailoring costs up front and assured me that he could have my suit ready in three days, but he had it done in two! --- 137 ---.<br/><br/>
Antonio has run his shop for over 30 years, and his experience really shows. He is a --- 138 --- tailor. I highly recommend him.`,
        questions: [
            { id: 135, text: "", options: ["(A) quickly", "(B) quicken", "(C) quickest", "(D) quickness"] },
            { id: 136, text: "", options: ["(A) as far as", "(B) even though", "(C) such as", "(D) whether"] },
            { id: 137, text: "", options: ["(A) Of course, the shop is busiest on Saturdays.", "(B) The suit fits me perfectly too.", "(C) I made another purchase.", "(D) He used to sell shirts."] },
            { id: 138, text: "", options: ["(A) former", "(B) temporary", "(C) superb", "(D) best"] }
        ]
    },
    {
        id: 3,
        type: 'letter',
        startQ: 139,
        endQ: 142,
        title: "Questions 139-142 refer to the following letter.",
        content: `Dear Director Yoshida,<br/><br/>
Thank you for your school’s interest in visiting our farm next month. Please note that children must be at least six years old to visit and tour the farm. --- 139 ---.<br/><br/>
I have enclosed a list of the --- 140 --- activities available for our young visitors. Two of these --- 141 --- must be scheduled in advance. They are a cheese-making class and an introduction to beekeeping. Both are very popular with our visitors.<br/><br/>
Please let --- 142 --- know your selection by early next week. I look forward to welcoming your group soon!<br/><br/>
Sincerely,<br/>
Annabel Romero, Coordinator<br/>
Merrytree Family Farm`,
        questions: [
            { id: 139, text: "", options: ["(A) In the event of bad weather, the animals will be inside.", "(B) There are no exceptions to this policy.", "(C) Ones younger than that can find much to enjoy.", "(D) This fee includes lunch and a small souvenir."] },
            { id: 140, text: "", options: ["(A) legal", "(B) artistic", "(C) athletic", "(D) educational"] },
            { id: 141, text: "", options: ["(A) events", "(B) plays", "(C) treatments", "(D) trips"] },
            { id: 142, text: "", options: ["(A) they", "(B) me", "(C) her", "(D) one"] }
        ]
    },
    {
        id: 4,
        type: 'email',
        startQ: 143,
        endQ: 146,
        title: "Questions 143-146 refer to the following e-mail.",
        content: `To: Lakshmi Aiyar<br/>
From: info@healthonity.com<br/>
Date: February 8<br/>
Subject: Healthonity Dental<br/><br/>
Dear Ms. Aiyar,<br/><br/>
We, the dental health professionals of the Healthonity Dental Center, are --- 143 --- to introduce our just-opened practice. We aim to provide access to the largest team of dental specialists in the region. On our Web site, you can see a comprehensive list of the procedures we offer. --- 144 ---.<br/><br/>
The members of our practice share a passion for helping people maintain beautiful and healthy smiles. Contact our center today at 305-555-0121 --- 145 --- an initial evaluation. All first-time --- 146 --- will benefit from a 50 percent discount on the cost through the end of the month.<br/><br/>
Sincerely,<br/>
The Team at Healthonity Dental Center`,
        questions: [
            { id: 143, text: "", options: ["(A) prouder", "(B) proudly", "(C) pride", "(D) proud"] },
            { id: 144, text: "", options: ["(A) They include general and cosmetic procedures.", "(B) We have relocated from neighboring Hillsborough.", "(C) The Web site is a creation of A to Z Host Builders.", "(D) Several of them are surprisingly expensive."] },
            { id: 145, text: "", options: ["(A) to schedule", "(B) scheduled", "(C) scheduling", "(D) being scheduled"] },
            { id: 146, text: "", options: ["(A) shoppers", "(B) residents", "(C) patients", "(D) tenants"] }
        ]
    }
];
