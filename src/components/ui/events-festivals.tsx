import { Calendar, MapPin, Users, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";

const festivals = [
  {
    name: "Tusu Parab",
    time: "January (After Dec 15 to Makar Sankranti)",
    location: "Southeastern Jharkhand",
    description: "A month-long festival to celebrate spring with Goddess Tusumani worship",
    highlights: "Beautiful Chaurals, folk songs, and rice dumplings",
    type: "Spring Celebration"
  },
  {
    name: "Sarhul",
    time: "Spring Season (Chaitra to Jeth month)",
    location: "Tribal areas across Jharkhand",
    description: "Celebration of the New Year welcoming spring with nature worship",
    highlights: "Saal tree worship, village processions, and tribal dances",
    type: "New Year"
  },
  {
    name: "Karam",
    time: "August - September (Bahdo Ekadashi)",
    location: "Throughout Jharkhand",
    description: "Harvest festival celebrating youth, power, and hard work",
    highlights: "Drums, folk songs, dancing, and traditional liquor",
    type: "Harvest Festival"
  },
  {
    name: "Bandna Festival (Sohrai)",
    time: "October - November (Kartik no moon day)",
    location: "Jharkhand and neighboring states",
    description: "7-day festival similar to Diwali celebrating nature's masterpieces",
    highlights: "Cattle grooming, earthen lamps, and bonfire celebrations",
    type: "Festival of Lights"
  },
  {
    name: "Jitiya",
    time: "September - October (7th-9th after Amavasya)",
    location: "Throughout Jharkhand",
    description: "35-hour dry fasting by mothers for their children's longevity",
    highlights: "Motherly devotion, ritual feeding of birds, and community prayers",
    type: "Devotional"
  },
  {
    name: "Bhagta Parab",
    time: "Between Spring and Summer",
    location: "Tamar, Jharkhand",
    description: "Festival devoted to devotees with brave acts and Chhau dance",
    highlights: "Human chain rituals, sky dancing, and adventurous activities",
    type: "Devotional"
  },
  {
    name: "Manda Mela",
    time: "April - May (7-9 days in Vaisakh)",
    location: "Near Shiva temples",
    description: "Festival for abundance and good rainfall with Lord Shiva worship",
    highlights: "Firewalking, brave acts, and prayers for good monsoon",
    type: "Religious"
  },
  {
    name: "Jani Shikar",
    time: "Once every 12 years",
    location: "Tribal areas",
    description: "Festival celebrating the bravery of Kurukh women",
    highlights: "Women dress as men, forest hunting, and traditional cooking",
    type: "Historical"
  }
];

export const EventsFestivals = () => {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Events & Festivals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the vibrant cultural tapestry of Jharkhand through its authentic tribal festivals and celebrations. 
            From harvest ceremonies to devotional gatherings, each festival tells a unique story of tradition and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {festivals.map((festival, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs px-3 py-1">
                    {festival.type}
                  </Badge>
                  <Sparkles className="h-5 w-5 text-primary/60 group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {festival.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {festival.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{festival.time}</span>
                </div>
                
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{festival.location}</span>
                </div>
                
                <div className="flex items-start gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{festival.highlights}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Plan your visit around these authentic cultural celebrations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};