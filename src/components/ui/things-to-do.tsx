import { MapPin, Star, Camera, Mountain, Waves, Zap } from "lucide-react";
import jharkhandHero from "@/assets/jharkhand-hero.jpg";
import betlaPark from "@/assets/betla-park.jpg";
import hillsLandscape from "@/assets/hills-landscape.jpg";
import tribalVillage from "@/assets/tribal-village.jpg";

const attractions = [
  {
    id: 1,
    name: "Dassam Falls",
    description: "The lush green surroundings add to its charm, making it a perfect spot for picnics and relaxation. A spectacular waterfall ideal for nature lovers.",
    image: jharkhandHero,
    category: "Waterfalls",
    rating: 4.2,
    reviews: 2847,
    location: "Ranchi District",
    highlights: ["Scenic beauty", "Picnic spot", "Photography", "Natural pools"],
    icon: <Waves className="h-5 w-5" />
  },
  {
    id: 2,
    name: "Trikuta Parvata",
    description: "Located 15 kilometers from Deoghar on way to Dumka. There are three peaks representing the holy trinity of Brahma, Vishnu and Mahesh.",
    image: hillsLandscape,
    category: "Religious Sites",
    rating: 4.5,
    reviews: 1235,
    location: "Deoghar District",
    highlights: ["Religious significance", "Three peaks", "Spiritual experience", "Pilgrimage site"],
    icon: <Mountain className="h-5 w-5" />
  },
  {
    id: 3,
    name: "Trikut Ropeway",
    description: "Cable car that takes passengers to the three peaks of TRIKUT hill. Pilgrims visit this holy site all around the year with stunning aerial views.",
    image: betlaPark,
    category: "Adventure",
    rating: 4.3,
    reviews: 892,
    location: "Deoghar District",
    highlights: ["Cable car ride", "Panoramic views", "Adventure", "Accessible transport"],
    icon: <Zap className="h-5 w-5" />
  },
  {
    id: 4,
    name: "Panch Gagh Falls",
    description: "Multiple waterfalls with a huge sandy river bed. Volleyball enthusiasts will enjoy this location along with nature lovers seeking tranquility.",
    image: tribalVillage,
    category: "Waterfalls",
    rating: 4.1,
    reviews: 654,
    location: "Ranchi District",
    highlights: ["Multiple falls", "Sandy beach", "Sports activities", "River activities"],
    icon: <Waves className="h-5 w-5" />
  },
  {
    id: 5,
    name: "Rikhia Yogashram",
    description: "Located 13 kilometers from Deoghar, this ashram is a hub center of Yoga, Meditation and Peace. Experience spiritual awakening in serene surroundings.",
    image: hillsLandscape,
    category: "Wellness",
    rating: 4.6,
    reviews: 423,
    location: "Deoghar District",
    highlights: ["Yoga sessions", "Meditation", "Peaceful environment", "Spiritual retreat"],
    icon: <Mountain className="h-5 w-5" />
  }
];

const categories = [
  { name: "All", count: attractions.length },
  { name: "Waterfalls", count: attractions.filter(a => a.category === "Waterfalls").length },
  { name: "Religious Sites", count: attractions.filter(a => a.category === "Religious Sites").length },
  { name: "Adventure", count: attractions.filter(a => a.category === "Adventure").length },
  { name: "Wellness", count: attractions.filter(a => a.category === "Wellness").length }
];

export const ThingsToDo = () => {
  return (
    <section id="activities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Top Things to Do in Jharkhand
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the most adventurous and spiritually enriching experiences Jharkhand has to offer. 
            From magnificent waterfalls to sacred hills, every destination tells a unique story.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className="px-6 py-3 rounded-full border border-border bg-background hover:bg-muted transition-colors text-sm font-medium"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="group cursor-pointer">
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {attraction.icon}
                      {attraction.category}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {attraction.rating}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {attraction.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <MapPin className="h-4 w-4" />
                    {attraction.location}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {attraction.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {attraction.highlights.slice(0, 3).map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Reviews */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{attraction.rating}</span>
                      <span>({attraction.reviews.toLocaleString()} reviews)</span>
                    </div>
                    <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-4">
              <Camera className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Explore Jharkhand?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Plan your perfect trip with our AI-powered travel assistant. Get personalized recommendations, 
              detailed itineraries, and insider tips for an unforgettable experience.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Plan Your Adventure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};