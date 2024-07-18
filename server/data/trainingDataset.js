const bagOfWords = {
    "Food": ["pizza", "burger", "meat", "chipotle", "starbucks", "sandwich", "salad", "taco", "sushi", "pasta", "steak", "fries", "noodles", "soup", "grill", "barbecue", "bbq", "subway", "kfc", "mcdonalds", "wendys", "dunkin", "baskin", "robbins", "panera", "dairy", "queen", "smoothie", "shake", "dessert", "chocolate", "cookie", "cake", "icecream", "burrito", "nachos", "quesadilla", "gyro", "shawarma", "falafel", "hummus", "pita", "bread", "bagel", "cream", "cheese", "omelette", "breakfast", "brunch", "dinner", "lunch", "appetizer", "main", "course", "soda", "juice", "water", "tea", "coffee", "latte", "cappuccino", "espresso", "americano", "milkshake", "mocha", "hotdog", "sausage", "bacon", "egg", "salmon", "tuna", "trout", "lobster", "crab", "shrimp", "scallops", "clams", "mussels", "oyster", "octopus", "caviar", "beef", "pork", "lamb", "chicken", "turkey", "duck", "goose", "venison", "rabbit", "quail", "pigeon", "goat", "veal", "tripe", "intestines"],
    "Entertainment": ["spotify", "hiking", "movies", "karaoke", "netflix", "concert", "theater", "museum", "exhibit", "gallery", "art", "dance", "ballet", "opera", "circus", "festival", "fair", "amusement", "park", "theme", "roller", "coaster", "arcade", "gaming", "video", "games", "board", "games", "puzzles", "escape", "room", "trivia", "quiz", "night", "bar", "club", "party", "event", "music", "band", "dj", "live", "show", "performance", "comedy", "standup", "joke", "laugh", "fun", "leisure", "recreation", "sport", "football", "soccer", "basketball", "baseball", "tennis", "golf", "swimming", "diving", "surfing", "skating", "skiing", "snowboarding", "sledding", "skateboarding", "biking", "cycling", "running", "jogging", "climbing", "mountaineering", "fishing", "hunting", "archery", "paintball", "laser", "tag", "bowling", "billiards", "pool", "pingpong", "table", "tennis", "darts", "air", "hockey", "foosball", "gym", "workout", "fitness", "yoga", "pilates", "meditation"],
    "Transport": ["run", "gas", "plane", "uber", "taxi", "cab", "bus", "train", "subway", "metro", "bicycle", "bike", "scooter", "motorcycle", "car", "automobile", "vehicle", "truck", "van", "minivan", "pickup", "jeep", "suv", "sedan", "convertible", "coupe", "limousine", "limo", "ride", "share", "carpool", "carsharing", "lyft", "hitchhiking", "drive", "driving", "road", "trip", "journey", "commute", "travel", "journey", "trip", "tour", "voyage", "expedition", "airplane", "flight", "jet", "helicopter", "airport", "terminal", "station", "stop", "port", "harbor", "dock", "ferry", "cruise", "ship", "boat", "yacht", "sailboat", "kayak", "canoe", "paddle", "boarding", "rafting", "rowboat", "skateboard", "rollerblades", "roller", "skates", "hoverboard", "unicycle", "monowheel", "segway", "walk", "stroll", "trot", "amble", "meander", "hike", "trek", "march", "trudge", "plod", "ride", "drive", "fly"],
    "Bills": ["electricity", "rent", "insurance", "credit-card", "water", "gas", "sewage", "trash", "phone", "internet", "cable", "satellite", "mortgage", "loan", "student", "tuition", "fees", "membership", "subscription", "renewal", "lease", "payment", "installment", "charge", "expense", "balance", "debt", "liability", "bill", "statement", "invoice", "account", "finance", "money", "fund", "bank", "transaction", "withdrawal", "deposit", "savings", "checking", "overdraft", "fee", "interest", "penalty", "fine", "levy", "tax", "duty", "tariff", "customs", "service", "charge", "commission", "premium", "contribution", "subscription", "dues", "fare", "toll", "fare", "rate", "pricing", "price", "cost", "expense", "expenditure", "outlay", "disbursement", "spending", "disbursement", "allocation", "funding", "financing", "sponsorship", "grant", "subsidy", "stipend", "allowance", "endowment", "investment", "fund", "capital", "venture", "equity", "stock", "bond", "share", "security", "debenture"],
    "Personal": ["books", "barber", "nail", "concert", "clothes", "shoes", "accessories", "jewelry", "watch", "handbag", "purse", "wallet", "belt", "hat", "scarf", "gloves", "coat", "jacket", "sweater", "shirt", "blouse", "pants", "jeans", "shorts", "skirt", "dress", "suit", "tie", "bathing", "suit", "swimwear", "lingerie", "underwear", "socks", "stockings", "tights", "gym", "wear", "sportswear", "activewear", "athleisure", "cosmetics", "makeup", "perfume", "cologne", "deodorant", "shampoo", "conditioner", "soap", "bodywash", "lotion", "moisturizer", "cream", "serum", "oil", "hair", "product", "haircut", "style", "blowdry", "curl", "straighten", "color", "dye", "highlight", "manicure", "pedicure", "facial", "massage", "spa", "treatment", "therapy", "wellness", "fitness", "gym", "membership", "workout", "yoga", "pilates", "meditation", "therapy", "counseling", "psychotherapy", "life", "coaching", "personal", "training", "diet", "nutrition", "health", "vitamins", "supplements", "herbs", "natural", "remedies", "books", "literature", "novels", "nonfiction", "poetry", "essays", "biography", "memoir", "selfhelp", "guide", "manual", "journal", "notebook", "planner", "stationery", "pen", "pencil", "highlighter", "marker", "crayon", "paint", "brush", "canvas", "easel", "palette", "sketchbook", "sculpting", "clay", "ceramics", "pottery", "crafts", "diy", "hobbies", "projects", "activities"]
};

const trainingDataset = {
  "Food": [
    "I love pizza", "I bought some bread and tea", "Had a delicious burger for lunch",
    "Made a sandwich for breakfast", "Ordered sushi for dinner", "Had a steak and fries",
    "Picked up some noodles from the restaurant", "Cooked pasta at home", "Grilled some meat",
    "Had a barbecue with friends", "Bought a sub from Subway", "Got some coffee from Starbucks",
    "Had a smoothie for breakfast", "Bought some dessert", "Ate some chocolate", "Baked a cake",
    "Had ice cream for dessert", "Ordered a burrito", "Had nachos and cheese", "Made a quesadilla",
    "Ate a gyro", "Bought shawarma", "Had falafel for lunch", "Made some hummus", "Baked pita bread",
    "Had a bagel with cream cheese", "Cooked an omelette", "Went out for brunch", "Made dinner at home",
    "Had lunch at a cafe", "Ordered an appetizer", "Enjoyed a main course", "Drank soda", "Had some juice",
    "Bought bottled water", "Enjoyed a cup of tea", "Had a latte", "Bought a cappuccino", "Drank espresso",
    "Had an americano", "Made a milkshake", "Ordered a mocha", "Had a hotdog", "Grilled sausage", "Cooked bacon",
    "Made scrambled eggs", "Bought salmon", "Had tuna for lunch", "Cooked trout", "Ordered lobster", "Bought some crab",
    "Ate shrimp for dinner", "Had scallops", "Bought clams", "Ate mussels", "Had oysters", "Cooked octopus", "Bought caviar",
    "Grilled beef", "Made pork chops", "Cooked lamb", "Bought chicken", "Roasted turkey", "Cooked duck", "Made goose",
    "Grilled venison", "Cooked rabbit", "Had quail", "Cooked pigeon", "Bought goat meat", "Made veal", "Cooked tripe",
    "Bought intestines", "Had a smoothie bowl", "Made avocado toast", "Cooked quinoa", "Bought kale", "Had a green salad",
    "Made a fruit salad", "Bought a protein bar", "Cooked oatmeal", "Made a veggie wrap", "Bought a fruit smoothie",
    "Had a protein shake", "Made a yogurt parfait", "Cooked rice and beans", "Bought a veggie burger", "Had tofu for dinner",
    "Made a chickpea salad", "Bought almond milk", "Had soy milk", "Made a green smoothie", "Cooked lentils", "Bought coconut water",
    "Had a salad with avocado", "Made a quinoa bowl", "Bought a smoothie with spinach", "Had a protein-packed smoothie", "Made a chia pudding"
  ],
  "Entertainment": [
    "Watched a movie at the theater", "Went hiking last weekend", "Attended a live concert",
    "Played video games", "Went to a karaoke bar", "Visited a museum", "Saw an art exhibit",
    "Went to a comedy show", "Watched a play at the theater", "Visited an amusement park",
    "Went to a music festival", "Played board games", "Went bowling", "Visited a zoo", "Went to a sports game",
    "Played mini golf", "Went to a water park", "Visited a botanical garden", "Went to a nightclub",
    "Saw a ballet performance", "Went to the circus", "Played laser tag", "Went ice skating", "Visited an aquarium",
    "Went to a fair", "Attended a book reading", "Went to a poetry slam", "Visited a science center", "Went to a magic show",
    "Played paintball", "Went to a casino", "Saw an opera", "Played air hockey", "Went to a gallery opening",
    "Went to a wine tasting", "Visited a planetarium", "Went to a jazz club", "Played bingo", "Went to a live podcast recording",
    "Saw a musical", "Played darts", "Went to a trivia night", "Went to a pottery class", "Visited a historic site",
    "Went to a cooking class", "Attended a dance class", "Visited a haunted house", "Went to a storytelling event",
    "Played pool", "Went to a drumming circle", "Visited a wildlife sanctuary", "Attended a workshop", "Went to a lecture",
    "Visited a castle", "Went to a historical reenactment", "Attended a street fair", "Visited a theme park", "Went to a community theater",
    "Saw a street performance", "Went to a film festival", "Attended a cultural festival", "Went to a light show", "Visited a cathedral",
    "Attended a craft fair", "Went to a cider tasting", "Saw a puppet show", "Went to a mime performance", "Visited a lighthouse",
    "Went to a fireworks show", "Attended a renaissance fair", "Went to a holiday market", "Visited a pumpkin patch", "Went to a Christmas light display",
    "Attended a winter carnival", "Went to a Mardi Gras parade", "Visited a hot air balloon festival", "Went to a sandcastle competition",
    "Attended a beach festival", "Went to a seafood festival", "Visited a wine and cheese festival", "Went to a chocolate festival",
    "Attended a garden show", "Visited a tulip festival", "Went to a lavender festival", "Attended a peach festival", "Visited a blueberry festival",
    "Went to a maple syrup festival", "Attended a harvest festival", "Visited an apple festival", "Went to a scarecrow festival",
    "Attended a kite festival", "Went to a lantern festival", "Visited a bonsai show", "Went to a butterfly festival",
    "Attended a dragon boat race", "Visited a boat show", "Went to a motorcycle rally"
  ],
  "Transport": [
    "Took an Uber to the city", "Filled up the car with gas", "Caught the morning bus",
    "Took a train to the suburbs", "Rode my bike to work", "Hailed a cab", "Booked a flight to New York",
    "Rented a car for the weekend", "Got on the subway", "Took a ferry to the island", "Hopped on a tram",
    "Went for a walk", "Skated to the park", "Drove to the mountains", "Went for a run", "Took a road trip",
    "Caught a ride with a friend", "Hired a moving truck", "Took a helicopter tour", "Rented a scooter",
    "Caught a Lyft", "Took a cruise", "Rode a horse", "Took a kayak out on the lake", "Rented a paddleboard",
    "Went skateboarding", "Took a segway tour", "Went rollerblading", "Rode a motorcycle", "Booked a shuttle",
    "Took a monorail", "Got on a bus tour", "Went for a scenic drive", "Caught a regional train", "Rode a unicycle",
    "Hitchhiked to the next town", "Rode an electric bike", "Booked a private jet", "Took a yacht out on the sea",
    "Got a ride from a friend", "Took a camel ride", "Went paragliding", "Took a hot air balloon ride", "Booked a limo",
    "Took a sailboat out", "Went snowmobiling", "Rode a toboggan", "Took a zipline ride", "Rented a snowplow",
    "Went tubing", "Rode an ATV", "Took a water taxi", "Rented a speedboat", "Went jet skiing", "Booked a river cruise",
    "Caught a fishing boat", "Went bungee jumping", "Rode a hovercraft", "Took a rideshare", "Rented a car",
    "Went off-roading", "Caught a ferry", "Went sandboarding", "Rented a dune buggy", "Took a rideshare to the airport",
    "Rode a gondola", "Went rafting", "Caught a train to the countryside", "Took a tramway", "Rode a funicular",
    "Went dogsledding", "Took a scenic flight", "Rented a RV", "Went mudding in a 4x4", "Took a cable car",
    "Rented a minivan", "Went hang gliding", "Took a polar plunge", "Rode a snowcat", "Caught a commuter train",
    "Went on a jeep safari", "Took a motorhome trip", "Rented a jet ski", "Went snorkeling", "Rode an electric scooter",
    "Took a charter flight", "Rented a trailer", "Went sailing", "Caught a bus to the city", "Took a gondola ride",
    "Rented a golf cart", "Went ziplining", "Caught a commuter ferry", "Took a commuter bus", "Went parasailing",
    "Caught a taxi to the hotel", "Took a train to the airport", "Rode an e-bike", "Went glacier walking", "Rented a convertible"
  ],
  "Bills": [
    "Paid the electricity bill", "Rent is due next week", "Insurance premium increased",
    "Paid the water bill", "Settled the phone bill", "Paid the internet bill",
    "Cleared the credit card balance", "Paid the mortgage", "Settled the loan payment",
    "Paid the gas bill", "Renewed the car insurance", "Paid the tuition fee",
    "Paid the subscription fee", "Paid the gym membership", "Paid the cable bill",
    "Paid the property tax", "Paid the maintenance fee", "Paid the trash collection fee",
    "Paid the service charge", "Paid the HOA fee", "Paid the parking fee", "Paid the security deposit",
    "Paid the late fee", "Paid the overdraft fee", "Paid the transaction fee",
    "Paid the medical bill", "Paid the dental bill", "Paid the vet bill",
    "Paid the utility bill", "Paid the loan interest", "Paid the bank fee",
    "Paid the finance charge", "Paid the renewal fee", "Paid the penalty fee",
    "Paid the processing fee", "Paid the handling fee", "Paid the transfer fee",
    "Paid the booking fee", "Paid the convenience fee", "Paid the inspection fee",
    "Paid the admission fee", "Paid the registration fee", "Paid the annual fee",
    "Paid the entrance fee", "Paid the licensing fee", "Paid the examination fee",
    "Paid the placement fee", "Paid the assessment fee", "Paid the testing fee",
    "Paid the certification fee", "Paid the application fee", "Paid the issuance fee",
    "Paid the settlement fee", "Paid the reservation fee", "Paid the appointment fee",
    "Paid the setup fee", "Paid the facility fee", "Paid the administration fee",
    "Paid the activation fee", "Paid the origination fee", "Paid the disbursement fee",
    "Paid the adjustment fee", "Paid the audit fee", "Paid the management fee",
    "Paid the collection fee", "Paid the cancellation fee", "Paid the access fee",
    "Paid the transaction fee", "Paid the storage fee", "Paid the consultation fee",
    "Paid the facilitation fee", "Paid the program fee", "Paid the packaging fee",
    "Paid the evaluation fee", "Paid the analysis fee", "Paid the subscription charge",
    "Paid the delivery fee", "Paid the service fee", "Paid the financing fee",
    "Paid the handling charge", "Paid the processing charge", "Paid the maintenance charge",
    "Paid the assessment charge", "Paid the review fee", "Paid the supervision fee",
    "Paid the replacement fee", "Paid the reinstatement fee", "Paid the adjustment charge",
    "Paid the inspection charge", "Paid the correction fee", "Paid the alteration fee",
    "Paid the maintenance cost", "Paid the repair cost", "Paid the upgrade cost",
    "Paid the improvement cost", "Paid the enhancement cost", "Paid the installation cost",
    "Paid the conversion cost", "Paid the modification cost", "Paid the maintenance expenditure",
    "Paid the replacement expenditure"
  ],
  "Personal": [
    "Bought a new book", "Went to the barber for a haircut", "Got a manicure and pedicure",
    "Bought new clothes", "Purchased a new pair of shoes", "Bought some accessories",
    "Got a new watch", "Bought a handbag", "Purchased a new wallet",
    "Bought a scarf", "Got a new coat", "Purchased a new jacket",
    "Bought a sweater", "Got a new shirt", "Purchased a new pair of pants",
    "Bought a new dress", "Got a new suit", "Bought a bathing suit",
    "Purchased new lingerie", "Bought new gym wear", "Got new sportswear",
    "Bought new activewear", "Purchased new makeup", "Got a new perfume",
    "Bought a new deodorant", "Got new shampoo", "Bought a new conditioner",
    "Purchased new soap", "Got new body wash", "Bought new lotion",
    "Purchased new moisturizer", "Got a new hair product", "Bought new hair color",
    "Got a new hair dye", "Purchased new highlights", "Got a new blow-dry",
    "Bought new hair straightener", "Got a new hair curler", "Purchased a new hairbrush",
    "Got a new comb", "Bought new hair ties", "Purchased a new facial mask",
    "Got a new face scrub", "Bought new face wash", "Purchased a new face cream",
    "Got new face serum", "Bought a new eye cream", "Purchased new lip balm",
    "Got a new lip gloss", "Bought new lipsticks", "Purchased new foundation",
    "Got new concealer", "Bought new blush", "Purchased new mascara",
    "Got new eyeliner", "Bought new eyeshadow", "Purchased a new eyeshadow palette",
    "Got new nail polish", "Bought new nail art", "Purchased new nail clippers",
    "Got new nail files", "Bought a new nail buffer", "Purchased new nail scissors",
    "Got a new pedicure set", "Bought a new manicure set", "Purchased a new spa treatment",
    "Got a new massage", "Bought a new wellness treatment", "Purchased a new fitness membership",
    "Got a new personal trainer", "Bought new vitamins", "Purchased new supplements",
    "Got new herbal remedies", "Bought a new yoga mat", "Purchased a new meditation cushion",
    "Got new exercise equipment", "Bought new workout clothes", "Purchased a new gym bag",
    "Got a new water bottle", "Bought new running shoes", "Purchased a new fitness tracker",
    "Got new hiking gear", "Bought a new bicycle", "Purchased a new helmet",
    "Got new biking accessories", "Bought a new set of weights", "Purchased new resistance bands",
    "Got a new jump rope", "Bought new boxing gloves", "Purchased new workout DVDs",
    "Got new fitness apps", "Bought a new smartwatch", "Purchased new wireless earbuds",
    "Got a new phone case", "Bought a new phone charger", "Purchased new screen protectors",
    "Got a new phone holder", "Bought a new power bank"
  ]
};


export { bagOfWords, trainingDataset };