export interface Place {
    slug: string;
    name: string;
    tag: string;
    vibe?: string;
    description: string;
    img: string;
    features?: string[];
    tips?: string[];
}

export const neighborhoods: Place[] = [
    {
        slug: "indiranagar",
        name: "Indiranagar",
        tag: "Area",
        vibe: "Cafés, craft beer & boutiques",
        description: "One of Bengaluru's most sought-after neighborhoods, Indiranagar is a vibrant mix of high-end boutiques, world-class breweries, and charming cafes. Its lush lanes and upscale residence make it a favorite for both locals and expats.",
        img: "/Screenshot 2026-02-24 004554.png",
        features: ["Craft Breweries", "Designer Boutiques", "Global Cuisine", "Nightlife"],
        tips: ["Visit 100 Feet Road for shopping.", "Try the craft beers at local microbreweries.", "Book tables in advance for weekend dinners."]
    },
    {
        slug: "whitefield",
        name: "Whitefield",
        tag: "Area",
        vibe: "Tech parks & global cuisine",
        description: "What was once a quiet Anglo-Indian settlement is now a sprawling tech powerhouse. Whitefield is characterized by its massive IT parks, luxury gated communities, and international shopping malls.",
        img: "/whitefield.webp",
        features: ["IT Parks", "Five-Star Hotels", "Luxury Malls", "Diverse Cuisine"],
        tips: ["Visit Phoenix Marketcity for a full day of entertainment.", "Explore the historic inner circle for a glimpse of its past.", "Best visited on weekends to avoid office traffic."]
    },
    {
        slug: "jayanagar",
        name: "Jayanagar",
        tag: "Area",
        vibe: "Old Bangalore charm & local eateries",
        description: "One of the first planned neighborhoods in Asia, Jayanagar retains the 'Old Bangalore' soul. With its massive parks, traditional markets, and iconic local eateries, it offers a peaceful yet vibrant lifestyle.",
        img: "/jayanagar.jpg",
        features: ["Massive Parks", "Traditional Markets", "Iconic Eateries", "Broad Avenues"],
        tips: ["The Jayanagar 4th Block market is at the heart of the area.", "Visit Vidyarthi Bhavan for legendary dosas.", "Enjoy a morning walk in the Madhavan Park."]
    }
];

export const featuredLocations: Place[] = [
    {
        slug: "lalbagh-botanical-garden",
        name: "Lalbagh Botanical Garden",
        tag: "Nature",
        description: "Spread over 240 acres, Lalbagh is a biological storehouse with over 1,000 species of flora. The Glass House, modeled after London's Crystal Palace, is its crowning jewel.",
        img: "/Lalbagh.jpeg",
        features: ["Glass House", "Centuries-old Trees", "Flower Shows", "Bird Watching"],
        tips: ["Visit during the annual flower shows in January and August.", "Early mornings are best for peaceful walks.", "Carry water and wear comfortable walking shoes."]
    },
    {
        slug: "cubbon-park",
        name: "Cubbon Park",
        tag: "Nature",
        description: "The 'Lung of the City', Cubbon Park is a sprawling green oasis in the central business district. It houses historical buildings like the State Central Library and the Karnataka High Court.",
        img: "/cubbon.jpg",
        features: ["Bamboo Groves", "Statues", "Public Library", "Bandstand"],
        tips: ["Sundays are great for dog watching as many pets visit.", "Explore the various statues of historical figures.", "The park is vehicle-free on Sundays."]
    },
    {
        slug: "vidhana-soudha",
        name: "Vidhana Soudha",
        tag: "Heritage",
        description: "An architectural masterpiece in the 'Neo-Dravidian' style, Vidhana Soudha is the seat of the state legislature of Karnataka and is the largest legislative building in India.",
        img: "/Bengaluru’s-Vidhana-Soudha-could-be-worth-over-Rs-3900-crores-FB-1200x700-compressed.jpg",
        features: ["Neo-Dravidian Architecture", "Grand Facade", "Illumination on Sundays", "Public Square"],
        tips: ["Best viewed in the evening when it is illuminated (Sundays/Public Holidays).", "Photography is permitted from outside the gates.", "Combine with a visit to the nearby High Court."]
    },
    {
        slug: "church-street",
        name: "Church Street",
        tag: "Food & Culture",
        description: "Known for its bookshops, cafes, and diverse restaurants, Church Street is a vibrant pedestrian-friendly stretch that captures the cosmopolitan spirit of modern Bengaluru.",
        img: "/churchstreet.jpg",
        features: ["Blossom Book House", "Restobars", "Street Performers", "Pedestrian Plaza"],
        tips: ["Best explored on foot.", "Visit Blossom Book House for rare finds.", "Plenty of options for dinner and drinks."]
    },
    {
        slug: "commercial-street",
        name: "Commercial Street",
        tag: "Shopping",
        description: "One of the oldest and busiest shopping areas in the city, Commercial Street is a maze of lanes offering everything from high-street brands to unique artifacts and bargain finds.",
        img: "/commercialstreet.jpg",
        features: ["Clothing & Accessories", "Antique Shops", "Traditional Snacks", "Bargain Markets"],
        tips: ["Be prepared for crowds.", "Bargaining is expected in the smaller shops.", "Try the local street food like 'Chaat' and Corn."]
    },
    {
        slug: "nandi-hills",
        name: "Nandi Hills",
        tag: "Weekend Trip",
        description: "An ancient hill fortress offering breathtaking sunrise views. Located about 60km from the city, it's a popular weekend getaway for trekking, cycling, and nature photography.",
        img: "/nandihills.jpeg",
        features: ["Sunrise Point", "Tipu's Drop", "Trekking Trails", "Amrut Sarovar"],
        tips: ["Reach before sunrise to catch the 'cloud bed' view.", "Carry warm clothing as it can be chilly.", "Expect large crowds on weekends; visit during weekdays for peace."]
    }
];

export const allPlaces = [...neighborhoods, ...featuredLocations];
