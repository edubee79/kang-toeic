// Part 2 Shadowing Data - 5 Tests (Q7-Q31 each)
// Extracted from original shadowing2.html

export type QuestionType =
    | "How" | "What" | "When" | "Where" | "Who" | "Why"
    | "YesNo" | "Choice" | "Statement" | "Negative" | "Tag"
    | "Indirect";  // 우회적 답변 - 학생들이 가장 많이 틀리는 유형!

export interface Part2Question {
    id: number;
    script: string;
    options: string[];
    correct: number;
    questionType?: QuestionType;  // Optional for now, can fill in gradually
}

interface Part2TestData {
    [testNum: number]: Part2Question[];
}

export const part2Data: Part2TestData = {
    1: [
        { id: 7, script: "How old is this building?", options: ["To ship some materials.", "About ten years old.", "Company offices, I think."], correct: 1, questionType: "How" },
        { id: 8, script: "Can you come to my jazz performance tonight?", options: ["I'm sorry I was late for the meeting.", "Mostly just local musicians.", "Sure, I'll be there!"], correct: 2, questionType: "YesNo" },
        { id: 9, script: "Which apartment submitted a work order?", options: ["It's what you did for a living.", "Submit your assignment here.", "It came from the tenants in B23."], correct: 2, questionType: "What" },
        { id: 10, script: "Will you contact the vendor about changing our delivery date?", options: ["Of course, I'll take care of it.", "An e-mail receipt.", "Could I get change for a dollar?"], correct: 0, questionType: "YesNo" },
        { id: 11, script: "Why was the maintenance worker here?", options: ["No, he didn't.", "From three o'clock until four.", "Because a light needed to be fixed."], correct: 2, questionType: "Why" },
        { id: 12, script: "Did management make a hiring decision yet?", options: ["Put it on the highest shelf.", "The personnel department.", "Yes, they chose Jacob Borgman."], correct: 2, questionType: "YesNo" },
        { id: 13, script: "Do you want to eat here in our cafeteria or go out?", options: ["He went there yesterday.", "Well, maybe a sandwich.", "Lets eat here."], correct: 2, questionType: "Choice" },
        { id: 14, script: "Didn't you e-mail the employment contract to Mr. Patel yesterday?", options: ["Yes, I would agree.", "No, I'll send it now.", "Check the employee manual."], correct: 1, questionType: "Negative" },
        { id: 15, script: "Our division's picnic is this Saturday, right?", options: ["There's a lot of rain in the forecast.", "Sure, I like salad.", "At the end of this corridor."], correct: 0, questionType: "Indirect" },
        { id: 16, script: "Would you like coffee or tea?", options: ["Just water, please.", "For a few dollars more.", "A fifteen-minute break."], correct: 0, questionType: "Choice" },
        { id: 17, script: "We achieved our sales targets this month.", options: ["That's excellent news!", "A few times a day.", "To the end of April."], correct: 0, questionType: "Statement" },
        { id: 18, script: "How often do you travel for your job?", options: ["It turned out well.", "Yes, I did find one.", "About once a month."], correct: 2, questionType: "How" },
        { id: 19, script: "We should hike the Wildflower Trail today.", options: ["This seat is available.", "I didn't bring boots.", "At the visitors' center."], correct: 1, questionType: "Statement" },
        { id: 20, script: "You've booked a hotel in London, haven't you?", options: ["Very enjoyable, thanks.", "He usually takes the train.", "Yes, I made a reservation last week."], correct: 2, questionType: "Tag" },
        { id: 21, script: "Are there any tickets left for tonight's concert?", options: ["It's sold out.", "He's a concert violinist.", "They already left."], correct: 0, questionType: "YesNo" },
        { id: 22, script: "Haven't you used this software before?", options: ["Can I take your order?", "I haven't had the chance.", "About 40 dollars."], correct: 1, questionType: "Negative" },
        { id: 23, script: "When is the new blender going to be released?", options: ["Only with fruits and vegetables.", "In the kitchen cabinet.", "The prototype is still being tested."], correct: 2, questionType: "Indirect" },
        { id: 24, script: "Who's picking up our clients at the airport?", options: ["They decided to drive.", "At terminal 2.", "It's a marketing position."], correct: 0, questionType: "Indirect" },
        { id: 25, script: "Where are the red roses that came in this morning?", options: ["About three liters of water.", "No, I didn't check out the sale.", "I needed some for a large bouquet."], correct: 2, questionType: "Where" },
        { id: 26, script: "This film has been nominated for several awards.", options: ["Why don't we go see it?", "After the announcement.", "He made a great speech."], correct: 0, questionType: "Statement" },
        { id: 27, script: "Who's interested in starting a car pool program?", options: ["Thanks, but I can't swim.", "Clara's already organizing one.", "It's a very interesting article."], correct: 1, questionType: "Who" },
        { id: 28, script: "Where will I teach my workshop this month?", options: ["We just sent an e-mail to all instructors.", "Five to seven months.", "Yes, it's a beautiful building."], correct: 0, questionType: "Indirect" },
        { id: 29, script: "Why are we moving these sweaters to the back of the store?", options: ["In the new shopping mall.", "Yes, they come in other colors.", "Our spring merchandise is arriving soon."], correct: 2, questionType: "Why" },
        { id: 30, script: "Would you be interested in working on some of these contracts?", options: ["Thank you for meeting me.", "A contact lens prescription.", "I have very limited time."], correct: 2, questionType: "Indirect" },
        { id: 31, script: "What type of job are you looking for?", options: ["No, at ten A.M.", "I really like working with computers.", "Just a résumé is needed."], correct: 1, questionType: "What" }
    ],
    2: [
        { id: 7, script: "Have the machines on the factory floor been cleaned?", options: ["No, not yet.", "Ifs in the shipping container.", "I just put it in the trash bin."], correct: 0, questionType: "YesNo" },
        { id: 8, script: "How much will the budget increase next year?", options: ["About 10 percent.", "Three hours, I think.", "At the bank's main branch."], correct: 0, questionType: "How" },
        { id: 9, script: "You're going to water the plants before you leave, aren't you?", options: ["I walked the whole way.", "Yes, right after lunch.", "In the breakroom."], correct: 1, questionType: "Tag" },
        { id: 10, script: "Aren't you going to schedule an eye doctor appointment?", options: ["Those glasses look nice on you.", "I already scheduled one.", "The seminar is three days long."], correct: 1, questionType: "Negative" },
        { id: 11, script: "I'm going to try to fix this printer.", options: ["You're right, it doesn't fit.", "Double-sided copies.", "Are you sure it can be repaired?"], correct: 2, questionType: "Statement" },
        { id: 12, script: "What should we do with these brochures?", options: ["A trip to the seashore.", "Yes, I found it already.", "111 leave them at the front desk."], correct: 2, questionType: "What" },
        { id: 13, script: "Has the policy meeting been rescheduled?", options: ["We have lots of desk calendar designs.", "Yes, its happening tomorrow instead.", "This soup I ordered is delicious."], correct: 1, questionType: "YesNo" },
        { id: 14, script: "Why don't we stop by the office cafeteria on our way to the workshop?", options: ["Sure, we have time for that.", "A full-service buffet.", "The topic is professional networking."], correct: 0, questionType: "Why" },
        { id: 15, script: "Have you tried our famous pasta dish?", options: ["We need a table for five.", "Yes, it was delicious.", "111 try to make it on time."], correct: 1, questionType: "YesNo" },
        { id: 16, script: "Who's the opening act at tonight's concert?", options: ["Could you turn up the volume?", "A jazz singer from France.", "The position has been filled."], correct: 1, questionType: "Who" },
        { id: 17, script: "When do the product demonstrations start?", options: ["The schedule was e-mailed last Friday.", "Some innovative features.", "In room 202, I think."], correct: 2, questionType: "Indirect" },
        { id: 18, script: "I tried updating the Web site, but it didn't work.", options: ["That date works for me.", "Usually our online reviews.", "Just send me the changes you want."], correct: 2, questionType: "Statement" },
        { id: 19, script: "Did you hire a new welding specialist?", options: ["The parts back-ordered.", "Yes, he starts tomorrow.", "No, it should be higher."], correct: 1, questionType: "YesNo" },
        { id: 20, script: "How was the color palette for the lobby chosen?", options: ["Blue and orange.", "It was fine, thanks.", "I wasn't involved."], correct: 2, questionType: "Indirect" },
        { id: 21, script: "When are we ordering more supplies for the office?", options: ["In the storage closet.", "Next week on Monday.", "The new desk looks great!"], correct: 1, questionType: "When" },
        { id: 22, script: "The battery for the water p-rip is going to be solar powered, right?", options: ["We're still in the planning stages.", "A hundred and forty dollars per year.", "Yes, I'd love a glass of water."], correct: 0, questionType: "Indirect" },
        { id: 23, script: "Where can I buy a charger for this laptop?", options: ["Around three o'clock.", "I can order one for you.", "A limited return policy."], correct: 1, questionType: "Indirect" },
        { id: 24, script: "Do I need to reserve a meeting room?", options: ["Yes, let me show you how.", "The service is good.", "My slide presentation."], correct: 0, questionType: "YesNo" },
        { id: 25, script: "When's the new department director supposed to start?", options: ["Ifs an hour long.", "Ms. Pavlova isn't retiring for several weeks.", "No, that department's upstairs."], correct: 1, questionType: "Indirect" },
        { id: 26, script: "Should I deliver these pizzas, or will you?", options: ["No thanks—I'm not hungry.", "Ten dollars for two.", "They're being picked up."], correct: 2, questionType: "Indirect" },
        { id: 27, script: "This month's shipment schedule has been revised.", options: ["I couldn't find them either.", "Which dates have been changed?", "Two dollars per pound."], correct: 1, questionType: "Statement" },
        { id: 28, script: "How much will the repairs cost?", options: ["The work is covered under the warranty plan.", "Yes, it's also available in red.", "In about two weeks."], correct: 0, questionType: "Indirect" },
        { id: 29, script: "Why don't we provide more samples of the wallpaper patterns?", options: ["The newspaper is delivered daily.", "An interior design course.", "There are plenty in the binders."], correct: 2, questionType: "Indirect" },
        { id: 30, script: "Can you give me a tour of the property this afternoon?", options: ["Sorry, I won't have time until tomorrow.", "It has a very modern design.", "A house on Maple Street."], correct: 0, questionType: "Indirect" },
        { id: 31, script: "Who's scheduled to test the product today?", options: ["We're waiting for confirmation.", "Ifs a great album, right?", "Ab=jt six weeks ago."], correct: 0, questionType: "Indirect" }
    ],
    3: [
        { id: 7, script: "Why is there no flour on the shelf?", options: ["Because it's out of stock.", "Those roses smell nice.", "No, the other cake."], correct: 0, questionType: "Why" },
        { id: 8, script: "When will the catering company arrive?", options: ["At four o'clock.", "Thats a delicious flavor.", "Many vegetarian options."], correct: 0, questionType: "When" },
        { id: 9, script: "When's the meeting scheduled to start?", options: ["At a networking event.", "I started this job six years ago.", "Right after lunch."], correct: 2, questionType: "When" },
        { id: 10, script: "How much will the repairs cost?", options: ["I have two pairs of shoes.", "Around 200 dollars.", "The restaurant downtown."], correct: 1, questionType: "How" },
        { id: 11, script: "You went to the dentist this morning, didn't you?", options: ["Oh, I've already had breakfast.", "Yes, for an annual checkup.", "Let's take the bus."], correct: 1, questionType: "Tag" },
        { id: 12, script: "Where should we put the new printer?", options: ["In the corner by the stairs.", "The third page of the document.", "A reusable ink cartridge."], correct: 0, questionType: "Where" },
        { id: 13, script: "What type of plant do you have in your office?", options: ["Whenever I sit at my desk.", "Thanks—I just bought it.", "One that doesn't require much water."], correct: 2, questionType: "What" },
        { id: 14, script: "There was a sale at the furniture store.", options: ["No, it wasn't in storage.", "Did you buy anything?", "Some old receipts."], correct: 1, questionType: "Statement" },
        { id: 15, script: "Can you show me how to submit a tech help ticket?", options: ["Let me send you the link.", "A broken power cable.", "No, over ten minutes."], correct: 0, questionType: "YesNo" },
        { id: 16, script: "Where is the power button on this device?", options: ["I've never used that model before.", "Ten euros per hour.", "We charge more for color photographs."], correct: 0, questionType: "Indirect" },
        { id: 17, script: "Do you want to take a walk now, or would later be better?", options: ["A nearby lake.", "I'm free to walk now.", "No, I don't use a fitness tracker."], correct: 1, questionType: "Choice" },
        { id: 18, script: "I ordered some new equipment for the factory.", options: ["The news program on Channel Ten.", "Great—I can't wait to use it.", "The car dealership."], correct: 1, questionType: "Statement" },
        { id: 19, script: "There's a nice place to rent on Mercer Street.", options: ["I just renewed my current lease.", "It was a great show.", "A standard rental application."], correct: 0, questionType: "Indirect" },
        { id: 20, script: "Is the heating system working?", options: ["Yes, that's my Web site.", "A five-kilometer run.", "I just called maintenance."], correct: 2, questionType: "Indirect" },
        { id: 21, script: "Isn't the roadwork in front of city hall finished yet?", options: ["I just finished my conference presentation.", "A lot of traffic in the evening.", "No, they still have another month to go."], correct: 2, questionType: "Negative" },
        { id: 22, script: "Who will lead the new-employee training today?", options: ["we're using a recorded video.", "yes, right after lunch.", "classroom 124"], correct: 0, questionType: "Indirect" },
        { id: 23, script: "Is the safety inspection scheduled for this month or next month?", options: ["I thought I saved the file.", "The factory supervisor.", "It's this Wednesday."], correct: 2, questionType: "Choice" },
        { id: 24, script: "When is the harvest festival taking place?", options: ["It's a week from tomorrow.", "Sure, I can take it.", "The park next to the art museum."], correct: 0, questionType: "When" },
        { id: 25, script: "Was your new laptop expensive?", options: ["Do you have a new password?", "I had a discount coupon.", "On top of the cabinet."], correct: 1, questionType: "Indirect" },
        { id: 26, script: "Why don't we go on our camping trip next weekend?", options: ["Yes, that table lamp is quite nice.", "Should we go left or right?", "I have a performance scheduled with my band."], correct: 2, questionType: "Indirect" },
        { id: 27, script: "The workshop for this afternoon was postponed, wasn't it?", options: ["At the post office.", "I haven't checked my e-mail.", "A ticket for two o'clock, please."], correct: 1, questionType: "Indirect" },
        { id: 28, script: "How were our production figures last month?", options: ["they produce electric cars.", "nice o'clock in the morning.", "we were closed down for a week."], correct: 2, questionType: "Indirect" },
        { id: 29, script: "When can I see the speech therapist?", options: ["a one-hour session.", "just a microphone.", "how about tomorrow afternoon?"], correct: 2, questionType: "When" },
        { id: 30, script: "Aren't you picking up the clients from the airport?", options: ["a product demonstration.", "no, I believe Tomoko is doing that.", "he prefers an aisle seat."], correct: 1, questionType: "Indirect" },
        { id: 31, script: "How was your morning client meeting?", options: ["it's great to meet you", "no, over in conference room two", "the contact is now officially signed"], correct: 2, questionType: "How" }
    ],
    4: [
        { id: 7, script: "Does the shop open on Sundays?", options: ["Yes, at one o'clock.", "Because we drove.", "I'd like to return this item, please."], correct: 0, questionType: "YesNo" },
        { id: 8, script: "Where did these oranges come from?", options: ["Here's a basket you can use.", "From a supplier in California.", "That umbrella is a nice color."], correct: 1, questionType: "Where" },
        { id: 9, script: "Should I make the dinner reservation for Friday or Saturday?", options: ["The Beachside Bistro.", "Saturday is better.", "A large plate of pasta."], correct: 1, questionType: "Choice" },
        { id: 10, script: "Will Dr. Ivanova be late today?", options: ["No, you shouldn't have to wait long.", "It's just under the desk.", "Sure, I can do that for you."], correct: 0, questionType: "YesNo" },
        { id: 11, script: "Aren't there locker rooms at this gym?", options: ["These socks are quite comfortable.", "She teaches an exercise class.", "Yes, they're on the lower floor."], correct: 2, questionType: "Negative" },
        { id: 12, script: "Who needs a copy of my safety training certificate?", options: ["Maksim does.", "You can hang your vest on that hook.", "No, I'm certain about that."], correct: 0, questionType: "Who" },
        { id: 13, script: "Could you phone Mr. Feras and let him know we're in the hotel lobby?", options: ["Thank you, it was just renovated.", "A free continental breakfast.", "Yes, of course."], correct: 2, questionType: "YesNo" },
        { id: 14, script: "Where does she sell her handmade jewelry?", options: ["They'll give you a discount.", "A pair of earrings.", "At a store in the city center."], correct: 2, questionType: "Where" },
        { id: 15, script: "You're taking a business class in the afternoon, aren't you?", options: ["Actually, its in the morning.", "That office is on the corner.", "I have the train schedule here."], correct: 0, questionType: "Tag" },
        { id: 16, script: "Could I see some sample floral arrangements before I order?", options: ["It's for an award ceremony.", "A charge for expedited delivery.", "Certainly, I have some right here."], correct: 2, questionType: "YesNo" },
        { id: 17, script: "Don't you want to buy the black sofa?", options: ["Some customer reviews.", "We already have one.", "I take my coffee with sugar."], correct: 1, questionType: "Indirect" },
        { id: 18, script: "Do you have this jacket in a larger size?", options: ["Oh, I'm not a sales associate.", "Pve read the information packet.", "A very large uniform."], correct: 0, questionType: "Indirect" },
        { id: 19, script: "Where did you first learn about the job opening?", options: ["Are there any outdoor tables available?", "The door to the building is still open.", "I read an online newspaper every morning."], correct: 2, questionType: "Where" },
        { id: 20, script: "Should I bring anything to the meeting?", options: ["Probably in the conference room.", "They were hired by our manager.", "Do we have enough handouts?"], correct: 2, questionType: "Indirect" },
        { id: 21, script: "What was the total charge for the hotel stay?", options: ["I'd have to look at the receipt.", "The fitness center is across from the reception desk.", "I'll be eating breakfast in my room."], correct: 0, questionType: "Indirect" },
        { id: 22, script: "Why did you pursue a career in video game design?", options: ["Because I have a talent for it.", "This is my new laptop.", "Ifs on the other shelf."], correct: 0, questionType: "Why" },
        { id: 23, script: "I'd like to attend the job fair next month.", options: ["The speech was inspiring.", "Tunji updated the memo.", "Registration closed yesterday."], correct: 2, questionType: "Indirect" },
        { id: 24, script: "Hasn't anyone called you back for the second interview yet?", options: ["A new phone number.", "Yes, any available position.", "I'm still waiting."], correct: 2, questionType: "Negative" },
        { id: 25, script: "How many tickets do we need for tonight's concert?", options: ["The theater is on Johnson Avenue.", "At seven thirty sharp.", "I'll buy mine at the door."], correct: 2, questionType: "Indirect" },
        { id: 26, script: "When are they going to decide who to hire?", options: ["A much higher salary.", "A lot of good résumés have come in.", "In the building across the street."], correct: 1, questionType: "Indirect" },
        { id: 27, script: "I had a chance to look over the contract this morning.", options: ["Their contact information.", "Early next week.", "What did you think of it?"], correct: 2, questionType: "Statement" },
        { id: 28, script: "How are the database updates coming along?", options: ["I've been really busy with the Williams account", "some customer addresses", "she arrives on Wednesday"], correct: 0, questionType: "Indirect" },
        { id: 29, script: "When can I bring these boxes into the warehouse?", options: ["the in a package", "thanks, I just bought it", "we'll need to clear some space"], correct: 2, questionType: "Indirect" },
        { id: 30, script: "The market on fifth street is closed for a week.", options: ["some new clothes", "is there another one nearby?", "the price has been marked down"], correct: 1, questionType: "Indirect" },
        { id: 31, script: "Does the company pay for professional-development courses?", options: ["Insook helped develop a new product", "we do have a significant budget surplus", "No information"], correct: 1, questionType: "Indirect" }
    ],
    5: [
        { id: 7, script: "There's a meeting in the conference room soon, right?", options: ["Yes, it's for the whole department.", "No, put it in the closet.", "The rent is too high."], correct: 0, questionType: "YesNo" },
        { id: 8, script: "Why hasn't the mural in the lobby been painted yet?", options: ["Red and yellow.", "Please pick up the ladder.", "Because the artist is out of town."], correct: 2, questionType: "Why" },
        { id: 9, script: "Do you prefer writing in the morning or the afternoon?", options: ["My publisher requested edits.", "Thanks for providing a solution.", "Mornings are usually better for me."], correct: 2, questionType: "Choice" },
        { id: 10, script: "I suggest we paint the waiting room light blue.", options: ["Doctor Park has an opening at three.", "That's a good idea.", "I prefer the red jacket."], correct: 1, questionType: "Statement" },
        { id: 11, script: "Did you know that the music school is closed on Sundays?", options: ["Forty dollars an hour.", "No, I didn't know that.", "I saw the piano recital."], correct: 1, questionType: "YesNo" },
        { id: 12, script: "How do I find the office manager?", options: ["The receptionist would know.", "Desk lamps and headsets.", "Twelve euros."], correct: 0, questionType: "How" },
        { id: 13, script: "When did you place the order for the lumber?", options: ["Yes, it's a great place for hiking.", "It's out of stock right now.", "The warehouse on William Street."], correct: 1, questionType: "Indirect" },
        { id: 14, script: "Where is the new packaging machine?", options: ["Ten packages a minute.", "We met last Thursday.", "We decided to keep the old one."], correct: 2, questionType: "Indirect" },
        { id: 15, script: "111 be out of the office this afternoon.", options: ["An awfully long commute.", "OK—I'll update your schedule.", "It's right down the hallway."], correct: 1, questionType: "Statement" },
        { id: 16, script: "Are you taking a vacation once this project is over?", options: ["Yes—I'm planning a trip to Barcelona.", "This is your second time, isn't it?", "Blueprints for a high-rise building."], correct: 0, questionType: "YesNo" },
        { id: 17, script: "Let's post the sales report to our team's Web page.", options: ["We're sharing a taxi to the airport.", "I can do that.", "A recent hiring decision."], correct: 1, questionType: "Statement" },
        { id: 18, script: "Which airline are you planning on using?", options: ["The usual one.", "A one-way ticket.", "Yes, you can use mine."], correct: 0, questionType: "What" },
        { id: 19, script: "Where's this shipment of parts being sent?", options: ["Around five thirty this evening.", "To the assembly plant in Dublin.", "Just half the order."], correct: 1, questionType: "Where" },
        { id: 20, script: "Who paid for lunch?", options: ["I just ate.", "It closes at five.", "Alberto did."], correct: 2, questionType: "Who" },
        { id: 21, script: "How many employees work in your department?", options: ["I don't mind taking notes at the meeting.", "A couple dozen, I think.", "It's seven meters long."], correct: 1, questionType: "How" },
        { id: 22, script: "We should leave for our training course soon, shouldn't we?", options: ["We still have a few minutes.", "There's a map on the wall.", "Two sessions per day."], correct: 0, questionType: "Indirect" },
        { id: 23, script: "Isn't there a limit on travel expenses?", options: ["To fix the vending machine.", "One hundred dollars per day.", "Next to the travel agency."], correct: 1, questionType: "Negative" },
        { id: 24, script: "When should I tell the director that I'm interested in the management position?", options: ["Yes, we're extending our business hours.", "Didn't Andrey direct the play?", "I'm not on the hiring team."], correct: 2, questionType: "Indirect" },
        { id: 25, script: "The layout of the footwear department has changed.", options: ["There's a charging station in the cafe.", "Yes, a three-bedroom apartment.", "The store has a new manager."], correct: 2, questionType: "Statement" },
        { id: 26, script: "Can you look at this month's revenue report?", options: ["The news program is informative.", "I have some free time tomorrow afternoon.", "He started that position in July."], correct: 1, questionType: "YesNo" },
        { id: 27, script: "Why haven't the windows been replaced yet?", options: ["Not too much wind, no.", "Look in the filing cabinet.", "Did you see the cost estimate?"], correct: 2, questionType: "Indirect" },
        { id: 28, script: "Isn't you suitcase going to be heavier than the permitted weight?", options: ["the building permit arrived today", "there are seats in the lobby", "I'll have to pay a little bit extra."], correct: 2, questionType: "Indirect" },
        { id: 29, script: "Who manufactures the engines for our machines?", options: ["Koji is in charge of supplier contracts", "I'm sorry- the storage room is full", "that's cargo airplane"], correct: 0, questionType: "Who" },
        { id: 30, script: "Should we meet at the department store on fifth street or the one on Grover Lane?", options: ["let's ask Patricia first", "no, I don't mind", "how much does it cost?"], correct: 0, questionType: "Indirect" },
        { id: 31, script: "Which band is playing at the club tonight?", options: ["there's always a comedy show on Thursday night", "yes, I've played the piano for many years", "their number one hit"], correct: 2, questionType: "Indirect" }
    ],
    6: [
        { id: 7, script: "Who made changes to the budget proposal?", options: ["The associate director.", "Additional funding.", "A range of menu options."], correct: 0, questionType: "Who" },
        { id: 8, script: "When are they delivering the manuals?", options: ["Because they're busy.", "The new cover design.", "On Wednesday."], correct: 2, questionType: "When" },
        { id: 9, script: "How much does it cost to rent this retail space?", options: ["By living close to work.", "The desk measures five feet long.", "The fee is 200 dollars."], correct: 2, questionType: "How" },
        { id: 10, script: "Where is the store manager?", options: ["Some items from the back room.", "No, I'm not a manager.", "She went out for lunch."], correct: 2, questionType: "Where" },
        { id: 11, script: "Should I turn off my computer or leave it on?", options: ["Please turn it off.", "How did you sleep?", "The yellow one."], correct: 0, questionType: "Choice" },
        { id: 12, script: "Who has attended a public speaking workshop before?", options: ["Next Monday.", "I think Julia has.", "A copy from the public library."], correct: 1, questionType: "Who" },
        { id: 13, script: "Why is Min-Soo selling his car?", options: ["He's buying a new one.", "Twenty years ago.", "The next stop, please."], correct: 0, questionType: "Why" },
        { id: 14, script: "When should we call the client in Beijing?", options: ["That's what I heard.", "I usually take a direct flight.", "It's only five A.M. there now."], correct: 2, questionType: "Indirect" },
        { id: 15, script: "Where should we set up the packaging machine?", options: ["Many small parts.", "By the loading dock.", "Overnight delivery."], correct: 1, questionType: "Where" },
        { id: 16, script: "Who will we purchase costumes from?", options: ["In the rehearsal hall, I think.", "It's cheaper to make them ourselves.", "I'm excited about the performance!"], correct: 1, questionType: "Who" },
        { id: 17, script: "Isn't the building inspector coming this afternoon?", options: ["No, he'll be here next week.", "It's a beautiful building.", "Some updated safety regulations."], correct: 0, questionType: "Negative" },
        { id: 18, script: "Do you have an appointment to see Ms. Singh?", options: ["The event calendar.", "Thanks, I'll be right back.", "Oh, we're old friends."], correct: 2, questionType: "Indirect" },
        { id: 19, script: "I could let you know when we have a job opening.", options: ["It opens at ten o'clock on weekdays.", "OK, here's my e-mail address.", "I don't have the right set of keys."], correct: 1, questionType: "Statement" },
        { id: 20, script: "What kind of business are you interested in launching?", options: ["I'm very aware of that.", "One that sells clothes and accessories.", "Yes, many different hobbies."], correct: 1, questionType: "What" },
        { id: 21, script: "When did this pharmaceutical company move to this larger facility?", options: ["In several pharmacies.", "By offering more sessions.", "About a year ago."], correct: 2, questionType: "When" },
        { id: 22, script: "Ms. Johnson will be coming to today's meeting.", options: ["It was a pleasure to meet you.", "Actually, it's been rescheduled.", "Every few hours."], correct: 1, questionType: "Statement" },
        { id: 23, script: "I'll need to update the software, right?", options: ["I like that fabric, too.", "Yes, it's easy to do.", "The machine in the warehouse."], correct: 1, questionType: "Tag" },
        { id: 24, script: "Where's the museum's sculpture exhibit?", options: ["It's a large database.", "A course on ancient cultures.", "I'm going that way now."], correct: 2, questionType: "Indirect" },
        { id: 25, script: "Why don't we interview the two candidates together?", options: ["Multiple references.", "That's a great suggestion.", "It went well, thank you."], correct: 1, questionType: "Indirect" },
        { id: 26, script: "This research report is unusually long.", options: ["For three to six months.", "I typed up a summary page.", "No, I don't have a measuring stick."], correct: 1, questionType: "Statement" },
        { id: 27, script: "We reserved a booth at the festival, didn't we?", options: ["That sounds like a fair price.", "Round-trip tickets to Rome, please.", "Yes, it was done last week."], correct: 2, questionType: "Tag" },
        { id: 28, script: "Could you help me draw up a contract?", options: ["I have no legal expertise.", "Those pencil drawings should be framed.", "It looks like a compact vehicle."], correct: 0, questionType: "Indirect" },
        { id: 29, script: "What are your dinner specials this evening?", options: ["At the corner of Main Street and Linden Avenue.", "That table is reserved.", "Your server will be with you momentarily."], correct: 2, questionType: "Indirect" },
        { id: 30, script: "Have you signed up to access your medical records online?", options: ["It's not a requirement, is it?", "I'll hang up the sign.", "Another recording studio, I think."], correct: 0, questionType: "Indirect" },
        { id: 31, script: "Didn't the office manager order more company letterhead?", options: ["The lunch caterer should be arriving by eleven.", "I have some that you can use.", "We haven't confirmed the hotel reservation yet."], correct: 1, questionType: "Negative" }
    ],
    7: [
        { id: 7, script: "Who is coming to the meeting?", options: ["The department managers.", "About the budget report.", "It starts at noon."], correct: 0, questionType: "Who" },
        { id: 8, script: "I like having lots of plants in the office.", options: ["Try the file cabinet.", "I already made plans for next week.", "Yeah, I do too."], correct: 2, questionType: "Statement" },
        { id: 9, script: "When will the training manager arrive?", options: ["Let me get my umbrella.", "Of course I will.", "At four thirty this afternoon."], correct: 2, questionType: "When" },
        { id: 10, script: "Isn't there a pharmacy on Fifteenth Street?", options: ["Yes, it's near the bank.", "A prescription refill.", "No, they're locally grown."], correct: 0, questionType: "Negative" },
        { id: 11, script: "Where is this shipment of supplies going?", options: ["Not until five o'clock.", "It's going to Texas.", "We met on the ship."], correct: 1, questionType: "Where" },
        { id: 12, script: "The new Peruvian restaurant is great, isn't it?", options: ["No, it's at gate eighteen.", "Yeah, the food is delicious.", "A table for two, please."], correct: 1, questionType: "Tag" },
        { id: 13, script: "How did your presentation for the client go?", options: ["Our biggest customers.", "Can I join you?", "It went very well."], correct: 2, questionType: "How" },
        { id: 14, script: "Please arrive ten minutes before your scheduled appointment.", options: ["OK, is there parking nearby?", "She made several good points.", "But we ordered ten boxes."], correct: 0, questionType: "Statement" },
        { id: 15, script: "Do you want to talk after your conference call?", options: ["Actually, my call was canceled.", "Some new employees.", "The client in Chicago."], correct: 0, questionType: "YesNo" },
        { id: 16, script: "Why is Maria out of the office today?", options: ["About two thousand square meters.", "Because she's picking up some clients.", "It's next to the marketing department."], correct: 1, questionType: "Why" },
        { id: 17, script: "There's heavy traffic on the highway.", options: ["I hope I don't miss my plane.", "I'm doing well, thanks.", "The box is very light."], correct: 0, questionType: "Statement" },
        { id: 18, script: "Did John send the expense sheet by e-mail or regular mail?", options: ["In the printer.", "Yes, it's very expensive.", "Probably by e-mail."], correct: 2, questionType: "Choice" },
        { id: 19, script: "Why don't we invite an author to speak at our bookstore?", options: ["I'll check the storage room.", "Some microphones and loudspeakers.", "My friend just had a novel published."], correct: 2, questionType: "Why" },
        { id: 20, script: "What documents should I bring on my first day of work?", options: ["The ones in the welcome packet.", "The first Monday in August.", "Sure, I'll make 30 copies."], correct: 0, questionType: "What" },
        { id: 21, script: "We completed the training course, right?", options: ["To Paris in the spring.", "No, there's still one session left.", "Platform Seven."], correct: 1, questionType: "Tag" },
        { id: 22, script: "How can I get to the mail room?", options: ["Only a few more packages.", "I'm on my way there now.", "Yes, there's enough room."], correct: 1, questionType: "How" },
        { id: 23, script: "Didn't you register for the webinar?", options: ["Some of the latest research findings.", "No, I'm busy at that time.", "This cash register is closed."], correct: 1, questionType: "Negative" },
        { id: 24, script: "Is there a fee to use my credit card abroad?", options: ["There's no additional charge.", "A twelve-hour plane ride.", "Right—it expires soon."], correct: 0, questionType: "YesNo" },
        { id: 25, script: "Are you taking the train or riding the bus to work?", options: ["Usually, they're on schedule.", "No, it's a project for work.", "My car's back from the repair shop!"], correct: 2, questionType: "Choice" },
        { id: 26, script: "Would you like a tour of the new automobile factory this afternoon?", options: ["A manufacturing process.", "I was there on Monday.", "It's the old model."], correct: 1, questionType: "YesNo" },
        { id: 27, script: "Who ordered the cake for Miguel's retirement party?", options: ["We need to replace that tire.", "No, it's at eight o'clock.", "We're serving ice cream instead."], correct: 2, questionType: "Who" },
        { id: 28, script: "Where is Mr. Watanabe's office?", options: ["Only on weekdays.", "All directors are on the fifth floor.", "A lot of modern equipment."], correct: 1, questionType: "Where" },
        { id: 29, script: "When will you start looking for a new apartment?", options: ["Turn the knob on the side.", "My job transfer has been canceled.", "No more than two bedrooms."], correct: 1, questionType: "When" },
        { id: 30, script: "Let's get extra screws in case we need more.", options: ["He just started a new career.", "The store closed half an hour ago.", "That piece of wood is the perfect size."], correct: 1, questionType: "Statement" },
        { id: 31, script: "Which radio advertisement did the focus group like best?", options: ["That's the best decision.", "An increased advertising budget.", "There was a problem with the sound system."], correct: 2, questionType: "What" }
    ],
    8: [
        { id: 7, script: "Who is covering Maria's shift at the clinic on Saturday?", options: ["Yes, click on the check box.", "Cover the pot on the stove.", "Alexi is going to do it."], correct: 2, questionType: "Who" },
        { id: 8, script: "Would you like to meet the new clients?", options: ["It was made of wood.", "The new setup process.", "Sure, I have some time right now."], correct: 2, questionType: "YesNo" },
        { id: 9, script: "Here's my presentation proposal.", options: ["About an hour ago.", "Thanks, I'll look over it shortly.", "Did you like your present?"], correct: 1, questionType: "Statement" },
        { id: 10, script: "Do the city buses stop in the front or the back of the city hall building?", options: ["A city council meeting.", "There's a stop in the front.", "A monthly bus pass."], correct: 1, questionType: "Choice" },
        { id: 11, script: "Why is the ceremony being moved indoors?", options: ["It was nice seeing her there.", "Because there's rain in the forecast.", "I'll hold the door for you."], correct: 1, questionType: "Why" },
        { id: 12, script: "I just love the taste of coffee, don't you?", options: ["About five minutes ago.", "A teaspoon of sugar.", "I always drink tea."], correct: 2, questionType: "Tag" },
        { id: 13, script: "Are you interested in a freelance translation job?", options: ["An interest-free loan.", "Please don't touch the walls.", "No, I'm too busy these days."], correct: 2, questionType: "YesNo" },
        { id: 14, script: "Could you send me this month's maintenance schedule?", options: ["I'd be happy to.", "No, he left in January.", "You should use the stairs."], correct: 0, questionType: "YesNo" },
        { id: 15, script: "Doesn't our firm reimburse travel expenses?", options: ["Yes, but only flight and hotel.", "No, Friday doesn't work.", "It's arriving at Gate 206."], correct: 0, questionType: "Negative" },
        { id: 16, script: "I need to stop at the pharmacy on my way to work.", options: ["It's a large dairy farm.", "Her résumé was very impressive.", "Oh, could you buy something for me?"], correct: 2, questionType: "Statement" },
        { id: 17, script: "Why are we meeting to discuss the budget?", options: ["Have you seen last quarter's sales figures?", "Next Tuesday at two o'clock.", "I'd like to, but it's expensive."], correct: 0, questionType: "Why" },
        { id: 18, script: "When does your flight land in Los Angeles?", options: ["Yes, it's finished.", "I'm flying into San Francisco.", "They bought a plot of land."], correct: 1, questionType: "When" },
        { id: 19, script: "How do I sign up for the accounting webinar?", options: ["You can do that online.", "No, it's not too far.", "I like the Web design."], correct: 0, questionType: "How" },
        { id: 20, script: "What kind of food should I bring to the company picnic?", options: ["They hired a catering service this year.", "Yes, Barbara will be at the meeting.", "A park on Grand Street."], correct: 0, questionType: "What" },
        { id: 21, script: "Where did you put my copy of our project proposal?", options: ["Actually, only the charts are in color.", "It's in the file cabinet.", "The company newsletter."], correct: 1, questionType: "Where" },
        { id: 22, script: "How many more deliveries are we expecting today?", options: ["It was a great turnout.", "I can wait for them if you need to leave.", "No, it should be less than that."], correct: 2, questionType: "How" },
        { id: 23, script: "When are we handing out the employee survey?", options: ["On a scale of one to ten.", "Have a seat in the front row.", "Probably at the end of the quarter."], correct: 2, questionType: "When" },
        { id: 24, script: "Would you like me to send you samples of the fabrics we have available?", options: ["The hotel room is available.", "They built a brick wall around the garden.", "I saw the pictures on your Web site."], correct: 2, questionType: "YesNo" },
        { id: 25, script: "Her contract ends next month, doesn't it?", options: ["I'm sure it will get renewed.", "Please sign at the bottom.", "The employee orientation."], correct: 0, questionType: "Tag" },
        { id: 26, script: "Should we open the store at eight thirty or nine on Saturday?", options: ["Since it's a holiday, let's open later.", "I've never been there before.", "That sign on the door."], correct: 0, questionType: "Choice" },
        { id: 27, script: "What kinds of audiobooks do you listen to?", options: ["Could you turn the volume down please?", "Yes, an auto repair shop.", "I like mystery novels."], correct: 2, questionType: "What" },
        { id: 28, script: "How long will it take to receive a confirmation e-mail?", options: ["It shouldn't take more than a few minutes.", "The construction noise is getting worse.", "The color will fade in direct sunlight."], correct: 0, questionType: "How" },
        { id: 29, script: "Where should I have the workers stack the cases when they arrive?", options: ["Tomorrow at the latest.", "I'll be there to supervise.", "It was a challenging legal case."], correct: 1, questionType: "Where" },
        { id: 30, script: "Would offering more specialty breads attract more customers?", options: ["Please turn off the lights.", "No thanks, I've already eaten.", "That could get expensive."], correct: 2, questionType: "YesNo" },
        { id: 31, script: "Who's going with you to the technology convention?", options: ["Thanks, I'd appreciate that.", "Management budgeted for only one attendee.", "It's a great product."], correct: 1, questionType: "Who" }
    ],
    9: [
        { id: 7, script: "Why is this restaurant so popular?", options: ["A table for five, please.", "On the corner of Fourth and Main.", "Because they hired a new chef."], correct: 2, questionType: "Why" },
        { id: 8, script: "When does the park close?", options: ["I parked over there.", "The bank's already closed.", "Every night at eight."], correct: 2, questionType: "When" },
        { id: 9, script: "Which house did Ms. Lopez move into?", options: ["A real estate agent.", "Leave the box at the door, please.", "The yellow one down the street."], correct: 2, questionType: "Choice" },
        { id: 10, script: "Excuse me, how do I get to platform six?", options: ["There's a map over there on the wall.", "Because it's only 50 cents.", "An office downtown."], correct: 0, questionType: "How" },
        { id: 11, script: "Who's responsible for ordering equipment?", options: ["A long time ago.", "In the storage closet.", "That's Robert's job."], correct: 2, questionType: "Who" },
        { id: 12, script: "What was wrong with the refrigerator?", options: ["On the right side of the road.", "The technician left a report.", "Yeah, it's a good recipe!"], correct: 1, questionType: "What" },
        { id: 13, script: "This document needs a signature before it's sent out.", options: ["A total of fifteen pages.", "OK, I'll do that now.", "A book of stamps."], correct: 1, questionType: "Statement" },
        { id: 14, script: "Why do you have so much luggage?", options: ["Here are your tickets.", "Because I'll be traveling for six months.", "When the taxi gets here."], correct: 1, questionType: "Why" },
        { id: 15, script: "You must be the new sales director, right?", options: ["Yes, it's nice to meet you.", "Sorry, I don't have the directions.", "It's our year-end sale."], correct: 0, questionType: "Tag" },
        { id: 16, script: "Are you running the workshop in the morning or in the afternoon?", options: ["That was a long race.", "Attendees are arriving after lunch.", "Yes, I actually enjoy shopping."], correct: 1, questionType: "Choice" },
        { id: 17, script: "When should I return your book?", options: ["Actually, I have another copy.", "On page 25.", "This is a beautiful library."], correct: 0, questionType: "When" },
        { id: 18, script: "Where can I find the event schedule?", options: ["Yeah, that's right.", "Yesterday afternoon.", "On the conference Web site."], correct: 2, questionType: "Where" },
        { id: 19, script: "I'll be late to the luncheon if I take the eleven o'clock bus.", options: ["I have room in my car.", "Sure, Heidi can make some now.", "That'll be five dollars, please."], correct: 0, questionType: "Statement" },
        { id: 20, script: "How many shipments are we sending out every day?", options: ["No, I'll make it on time.", "It should arrive tomorrow.", "We're up to 50."], correct: 2, questionType: "How" },
        { id: 21, script: "Should we replace the insulation in the building?", options: ["My office is 34C, near the lobby.", "Well, I have considered retiring soon.", "No, it's too expensive."], correct: 2, questionType: "YesNo" },
        { id: 22, script: "Do we have to stop at the post office?", options: ["No, the mail carrier picked up the letter.", "Can you call me a taxi, please?", "Our office is close by."], correct: 0, questionType: "YesNo" },
        { id: 23, script: "Hasn't Alan seen the doctor yet?", options: ["It's in the medical building.", "He hasn't had any time.", "No, we didn't see it."], correct: 1, questionType: "Negative" },
        { id: 24, script: "Did you correct the error in the spreadsheet?", options: ["The bank on Fourteenth Street.", "Actually, I fixed a few things.", "Everyone should get a copy."], correct: 1, questionType: "YesNo" },
        { id: 25, script: "Don't you want to come with us to the art gallery opening tonight?", options: ["I have a presentation tomorrow morning.", "The prices are marked on the frames.", "Leave it closed, please."], correct: 0, questionType: "Negative" },
        { id: 26, script: "Does your restaurant buy vegetables from wholesalers or local farmers?", options: ["The carrots were overcooked.", "This table seats five people comfortably.", "Only from local farmers."], correct: 2, questionType: "Choice" },
        { id: 27, script: "Who supplies your copy paper?", options: ["Under the printer.", "Check with the office manager.", "No, I don't have an extra copy."], correct: 1, questionType: "Who" },
        { id: 28, script: "Could you take a look at my article before I submit it?", options: ["A magazine subscription.", "He submitted a payment online.", "I do have some editing experience."], correct: 2, questionType: "Indirect" },
        { id: 29, script: "Let me look into renting a storage unit for this furniture.", options: ["Put the leftover soup in the refrigerator.", "Thanks, that would be helpful.", "A sofa and two chairs."], correct: 1, questionType: "Statement" },
        { id: 30, script: "Will the Henderson invoice be ready for review this afternoon?", options: ["At the main post office.", "Carol checked it this morning.", "Either cash or credit card."], correct: 1, questionType: "YesNo" },
        { id: 31, script: "Would you like a beverage while you wait for our loan specialist?", options: ["Do you think I'll be waiting very long?", "No, we haven't seen her.", "Yes, we have a special on shoes."], correct: 0, questionType: "YesNo" }
    ],
    10: [
        { id: 7, script: "Where's the marketing department?", options: ["Are the shoes on sale?", "I've been to the farmers market.", "On the third floor."], correct: 2, questionType: "Where" },
        { id: 8, script: "What time does your flight leave?", options: ["At nine in the morning.", "Only one suitcase.", "That's a great destination."], correct: 0, questionType: "What" },
        { id: 9, script: "Who reviewed the order forms?", options: ["Today at noon.", "The manager did.", "Sure, I'll sign for the delivery."], correct: 1, questionType: "Who" },
        { id: 10, script: "How much do the tickets cost?", options: ["It's on the coast.", "The concert was great!", "Twenty dollars, I think."], correct: 2, questionType: "How" },
        { id: 11, script: "Would you like to have lunch with us?", options: ["They don't work together.", "She called yesterday.", "No, thanks—I already ate."], correct: 2, questionType: "YesNo" },
        { id: 12, script: "Should we discuss the merger tomorrow or Friday?", options: ["He's a vegetarian.", "Tomorrow is better.", "A few weeks ago."], correct: 1, questionType: "Choice" },
        { id: 13, script: "Why are you still at the office?", options: ["Because my meeting ran late.", "Please leave it with my assistant.", "The room at the end of the hall."], correct: 0, questionType: "Why" },
        { id: 14, script: "Doesn't the art exhibit open today?", options: ["No, not until next week.", "Sure, you can leave it open.", "Many local artists."], correct: 0, questionType: "Negative" },
        { id: 15, script: "When did Takumi start working here?", options: ["I think it was a year ago.", "Since my computer isn't working.", "No, he retired last month."], correct: 0, questionType: "When" },
        { id: 16, script: "We still sell this brand of washing machine, don't we?", options: ["I appreciate the help.", "Yes, there are some in stock.", "Adjust the temperature setting."], correct: 1, questionType: "Tag" },
        { id: 17, script: "Haven't you finished the report yet?", options: ["The deadline's been extended.", "Usually once a week.", "That would help, thanks."], correct: 0, questionType: "Negative" },
        { id: 18, script: "Do you want to fly or drive to the trade show?", options: ["The new French film is showing tonight.", "That's a positive trend.", "Where is it this year?"], correct: 2, questionType: "Choice" },
        { id: 19, script: "Who's leading the focus group meeting on Friday?", options: ["In the second-floor conference room.", "John is making those assignments.", "At the management seminar."], correct: 1, questionType: "Who" },
        { id: 20, script: "Why don't we create some videos for the interns?", options: ["It was very creative.", "Sure, let's work on that.", "A review of our television show."], correct: 1, questionType: "Statement" },
        { id: 21, script: "Prackwood Bank has extended business hours today, doesn't it?", options: ["My extension is 204.", "Small business loans.", "Only at the Main Street location."], correct: 2, questionType: "Tag" },
        { id: 22, script: "When do concert tickets go on sale?", options: ["They're already sold out.", "At the ticket office.", "That's a good price!"], correct: 0, questionType: "When" },
        { id: 23, script: "Has anyone volunteered to organize the reception?", options: ["The event's been canceled.", "Sorry, I don't have a receipt.", "It is a well-known organization."], correct: 2, questionType: "YesNo" },
        { id: 24, script: "How do I turn off the copy machine?", options: ["I still need to make a few.", "Try the traffic light.", "I will call a few mechanics."], correct: 0, questionType: "How" },
        { id: 25, script: "I'm calling to make an appointment with a physical therapist.", options: ["Yes, that is my home address.", "A lot of exercise.", "Your next options are next Monday or Tuesday."], correct: 2, questionType: "Statement" },
        { id: 26, script: "Our fabric shipment hasn't arrived yet, has it?", options: ["A large number of orders.", "There's a printer on my desk.", "I'll call our supplier now."], correct: 2, questionType: "Tag" },
        { id: 27, script: "Did you send all staff the revised vacation policy?", options: ["You'll need a visitor badge to enter the building.", "Our computer system has been down all morning.", "A two-week trip to Boston."], correct: 1, questionType: "YesNo" },
        { id: 28, script: "What's the telephone number for Primavera restaurant?", options: ["It's closed for renovations.", "Chicken or pasta?", "Our supervisor is expecting his call."], correct: 0, questionType: "What" },
        { id: 29, script: "Could you represent our company at the recruitment fair this week?", options: ["Five new interns.", "Thomas said not to get him any presents.", "I always enjoy meeting new people."], correct: 2, questionType: "YesNo" },
        { id: 30, script: "The engine's been making a strange noise for the past hour.", options: ["We'd better go find some oil.", "No, I'm not going to make anything for the party.", "Let's turn down the volume on the TV."], correct: 0, questionType: "Statement" },
        { id: 31, script: "Where can we buy a microwave oven for the office kitchen?", options: ["Yes, I really like cooking.", "My office is located near the kitchen.", "There's one in the storage area."], correct: 2, questionType: "Where" }
    ]
};
/**
 * Utility functions for Weakness Analysis and AI Recommendations
 */

export const getPart2QuestionByUniqueId = (uniqueId: string): (Part2Question & { testId: number }) | null => {
    // Format: P2_T1_Q7
    const match = uniqueId.match(/P2_T(\d+)_Q(\d+)/);
    if (!match) return null;

    const testId = parseInt(match[1]);
    const questionId = parseInt(match[2]);

    const testQuestions = part2Data[testId];
    if (!testQuestions) return null;

    const question = testQuestions.find(q => q.id === questionId);
    return question ? { ...question, testId } : null;
};

export const findSimilarPart2Questions = (
    type: string,
    excludeIds: string[],
    limit: number = 3
): string[] => {
    const similarIds: string[] = [];
    const excludeSet = new Set(excludeIds);

    // Iterate through all tests to find matching types
    for (const [testIdStr, questions] of Object.entries(part2Data)) {
        const testId = parseInt(testIdStr);
        for (const q of questions) {
            const uid = `P2_T${testId}_Q${q.id}`;
            if (q.questionType === type && !excludeSet.has(uid)) {
                similarIds.push(uid);
            }
            if (similarIds.length >= limit) break;
        }
        if (similarIds.length >= limit) break;
    }

    return similarIds;
};
