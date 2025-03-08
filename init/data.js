const sampleListings  = [
  {
    "title": "Amalfi Coast Getaway",
    "description": "A stunning coastal escape featuring picturesque villages and crystal-clear waters. Perfect for a luxurious retreat.",
    "image": {
      "filename": "Amalfi Coast",
      "url": "https://plus.unsplash.com/premium_photo-1722927254497-ed40548c5b85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW1hbGZpJTIwQ29hc3QlMjBHZXRhd2F5fGVufDB8fDB8fHww"
    },
    "price": 5000,
    "location": "Amalfi Coast",
    "country": "Italy"
  },
  {
    "title": "Lake Como Retreat",
    "description": "A serene getaway to the enchanting Lake Como. Perfect for a romantic escape or peaceful vacation.",
    "image": {
      "filename": "Lake Como",
      "url": "https://images.unsplash.com/photo-1439066290691-510066268af5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGFrZSUyMENvbW8lMjBSZXRyZWF0fGVufDB8fDB8fHww"
    },
    "price": 4500,
    "location": "Lake Como",
    "country": "Italy"
  },
  {
    "title": "Plitvice Lakes Adventure",
    "description": "A magical escape to Croatia's most famous national park, featuring cascading lakes and lush forests.",
    "image": {
      "filename": "Plitvice National Park",
      "url": "https://images.unsplash.com/photo-1590053404184-ce4ee04f3d58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGxpdHZpY2UlMjBMYWtlcyUyMEFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    "price": 2000,
    "location": "Plitvice National Park",
    "country": "Croatia"
  },
  {
    "title": "Bora Bora Overwater Paradise",
    "description": "Luxury overwater bungalows overlooking turquoise waters and pristine beaches.",
    "image": {
      "filename": "Bora Bora",
      "url": "https://images.unsplash.com/photo-1595256875238-9c2111c52554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvcmElMjBib3JhfGVufDB8fDB8fHww"
    },
    "price": 12000,
    "location": "Bora Bora",
    "country": "French Polynesia"
  },
  {
    "title": "Maldives Beach Bliss",
    "description": "Experience the ultimate tropical vacation with pristine beaches and crystal-clear waters.",
    "image": {
      "filename": "Maldives",
      "url": "https://media.istockphoto.com/id/1406869055/photo/aerial-view-of-luxury-resort-in-maldives.webp?a=1&b=1&s=612x612&w=0&k=20&c=wEhjpDavTfmP3wrOuZaXUz0s4diHVmIQDoBsFhz-Nlc="
    },
    "price": 8000,
    "location": "Maldives",
    "country": "Maldives"
  },
  {
    "title": "Cesenna Countryside Stay",
    "description": "Immerse yourself in the tranquil countryside of Moscarazzano with rolling hills and local vineyards.",
    "image": {
      "filename": "Cesenna",
      "url": "https://plus.unsplash.com/premium_photo-1661380377549-81ea5d33ad10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2VzZW5uYSUyMENvdW50cnlzaWRlJTIwU3RheXxlbnwwfHwwfHx8MA%3D%3D"
    },
    "price": 3000,
    "location": "Cesenna, Moscarazzano",
    "country": "Italy"
  },
  {
    "title": "Los Angeles City Escape",
    "description": "Discover the vibrant city of Los Angeles, famous for its beaches, Hollywood, and iconic landmarks.",
    "image": {
      "filename": "Los Angeles",
      "url": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TG9zJTIwQW5nZWxlcyUyMENpdHklMjBFc2NhcGV8ZW58MHx8MHx8fDA%3D"
    },
    "price": 7000,
    "location": "Los Angeles",
    "country": "USA"
  },
  {
    "title": "Arizona Desert Adventure",
    "description": "Explore the breathtaking landscapes of Arizona, including its deserts, canyons, and natural wonders.",
    "image": {
      "filename": "Arizona",
      "url": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXJpem9uYSUyMERlc2VydCUyMEFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    "price": 3000,
    "location": "Arizona",
    "country": "USA"
  },
  {
    "title": "Desert Adventure Between Arizona and California",
    "description": "Embark on an adventure through the desert strip between Arizona and California, with unique landscapes and views.",
    "image": {
      "filename": "Desert Strip",
      "url": "https://media.istockphoto.com/id/1217070886/photo/biker-ride-through-a-desert-alone.webp?a=1&b=1&s=612x612&w=0&k=20&c=mA-xdPyQI2kZIShRfxGQgahWWrwQ96yliPvKOvOcS2Y="
    },
    "price": 2500,
    "location": "Arizona-California Border",
    "country": "USA"
  },
  {
    "title": "Normandy Historic Retreat",
    "description": "Experience the charm and history of Normandy, with its beaches, villages, and rich cultural heritage.",
    "image": {
      "filename": "Normandy",
      "url": "https://images.unsplash.com/photo-1615571434009-40163f6363c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Tm9ybWFuZHklMjBIaXN0b3JpYyUyMFJldHJlYXR8ZW58MHx8MHx8fDA%3D"
    },
    "price": 4000,
    "location": "Normandy",
    "country": "France"
  },
  {
    "title": "Lake Garda Adventure",
    "description": "Relax at the beautiful Lake Garda with its stunning scenery, quaint villages, and crystal-clear waters.",
    "image": {
      "filename": "Lake Garda",
      "url": "https://images.unsplash.com/photo-1660646133311-736d0a0a6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGFrZSUyMEdhcmRhfGVufDB8fDB8fHww"
    },
    "price": 3500,
    "location": "Lake Garda",
    "country": "Italy"
  },
  {
    "title": "Siena Tuscan Retreat",
    "description": "Discover the medieval charm of Siena, nestled in the picturesque Tuscany region of Italy.",
    "image": {
      "filename": "Siena",
      "url": "https://images.unsplash.com/photo-1604065318249-095f3919f957?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2llbmElMjBUdXNjYW58ZW58MHx8MHx8fDA%3D"
    },
    "price": 3200,
    "location": "Siena",
    "country": "Italy"
  },
  {
    "title": "Tanzania Safari Lodge",
    "description": "Experience the thrill of a safari in Tanzania, staying at a luxurious lodge surrounded by wildlife and stunning landscapes.",
    "image": {
      "filename": "Tanzania Safari",
      "url": "https://images.unsplash.com/photo-1516465675917-6856496ffa3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFuemFuaWElMjBTYWZhcmklMjBMb2RnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    "price": 6000,
    "location": "Tanzania",
    "country": "Tanzania"
  },
  {
    "title": "Château de Gudanes Escape",
    "description": "A regal getaway to the historic Château de Gudanes, nestled in the French countryside.",
    "image": {
      "filename": "Château de Gudanes",
      "url": "https://plus.unsplash.com/premium_photo-1694475547624-f7ad4d8a1b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2glQzMlQTJ0ZWF1JTIwZGUlMjBHdWRhbmVzfGVufDB8fDB8fHww"
    },
    "price": 7000,
    "location": "Château de Gudanes",
    "country": "France"
  },
  {
    "title": "Serengeti Safari Adventure",
    "description": "Embark on an unforgettable safari adventure in the iconic Serengeti National Park.",
    "image": {
      "filename": "Serengeti",
      "url": "https://images.unsplash.com/photo-1602410125631-7e736e36797c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U2VyZW5nZXRpJTIwU2FmYXJpJTIwQWR2ZW50dXJlfGVufDB8fDB8fHww"
    },
    "price": 8500,
    "location": "Serengeti National Park",
    "country": "Tanzania"
  },
  {
    "title": "Yosemite National Park Adventure",
    "description": "Explore the breathtaking beauty of Yosemite National Park, with its granite cliffs, waterfalls, and giant sequoias.",
    "image": {
      "filename": "Yosemite",
      "url": "https://plus.unsplash.com/premium_photo-1673603988679-a7af90f563a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WW9zZW1pdGUlMjBOYXRpb25hbCUyMFBhcmt8ZW58MHx8MHx8fDA%3D"
    },
    "price": 4000,
    "location": "Yosemite National Park",
    "country": "USA"
  },
  {
    "title": "Central Park Retreat",
    "description": "Enjoy the urban oasis of Central Park in the heart of New York City, with its scenic trails and iconic attractions.",
    "image": {
      "filename": "Central Park",
      "url": "https://media.istockphoto.com/id/1129184262/photo/unrecognizable-people-rowing-in-a-lake-during-summer-at-central-park-midtown-manhattan-new.webp?a=1&b=1&s=612x612&w=0&k=20&c=cQrhQxz3ZD68GjMe-JaJDo3fJ4GzyK8sEBqSHqfPADg="
    },
    "price": 2000,
    "location": "Central Park, NYC",
    "country": "USA"
  },
  {
    "title": "Madison Square Garden Experience",
    "description": "Witness world-class events and entertainment at the legendary Madison Square Garden in New York City.",
    "image": {
      "filename": "Madison Square Garden",
      "url": "https://media.istockphoto.com/id/1168982953/photo/traffic-in-new-york-city-5th-avenue-near-flatiron-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=vZ2S0jybwkUY-4hH0vln3wyE4Mx9pX25Vjw77_qY4UQ="
    },
    "price": 3000,
    "location": "Madison Square Garden, NYC",
    "country": "USA"
  },
  {
    "title": "Rifugio Antonio Curò Alpine Stay",
    "description": "Stay in a mountain lodge amidst the breathtaking scenery of the Italian Alps.",
    "image": {
      "filename": "Rifugio Antonio Curò",
      "url": "https://images.unsplash.com/photo-1480548004877-593316be2bd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJpZnVnaW8lMjBBbnRvbmlvJTIwQ3VyJUMzJUIyJTJDJTIwSXRhbHl8ZW58MHx8MHx8fDA%3D"
    },
    "price": 2500,
    "location": "Rifugio Antonio Curò, Italy",
    "country": "Italy"
  },
  {
    "title": "Cascade del Serio Hike",
    "description": "Explore the stunning Cascade del Serio, one of Italy's tallest waterfalls.",
    "image": {
      "filename": "Cascade del Serio",
      "url": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2FzY2FkZSUyMGRlbCUyMFNlcmlvJTJDJTIwSXRhbHl8ZW58MHx8MHx8fDA%3D"
    },
    "price": 2000,
    "location": "Cascade del Serio, Italy",
    "country": "Italy"
  },
  {
    "title": "Bergamo Historic Escape",
    "description": "Immerse yourself in the charm of Bergamo, a city known for its medieval architecture and rich history.",
    "image": {
      "filename": "Bergamo",
      "url": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXJnYW1vJTIwSGlzdG9yaWMlMjBFc2NhcGUlMjBJdGFseXxlbnwwfHwwfHx8MA%3D%3D"
    },
    "price": 3000,
    "location": "Bergamo, Italy",
    "country": "Italy"
  },
  {
    "title": "Iao Needle Adventure",
    "description": "Visit the iconic Iao Needle in Maui, surrounded by lush valleys and scenic trails.",
    "image": {
      "filename": "Iao Needle",
      "url": "https://images.unsplash.com/photo-1562191326-0da0767cfffe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SWFvJTIwTmVlZGxlJTIwTWF1aSUyMEhhd2FpfGVufDB8fDB8fHww"
    },
    "price": 3500,
    "location": "Maui, Hawaii",
    "country": "USA"
  },
  {
    "title": "Akagera National Park Safari",
    "description": "Enjoy a wildlife safari at Akagera National Park, home to diverse animals and stunning savannahs.",
    "image": {
      "filename": "Akagera National Park",
      "url": "https://plus.unsplash.com/premium_photo-1694475004289-7c3d7beb7d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWthZ2VyYSUyME5hdGlvbmFsJTIwUGFyayUyMFJ3YW5kYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    "price": 5000,
    "location": "Akagera National Park",
    "country": "Rwanda"
  },
  {
    "title": "Singita Malilangwe Escape",
    "description": "Experience luxury in the heart of the African wilderness at Singita Malilangwe.",
    "image": {
      "filename": "Singita Malilangwe",
      "url": "https://images.unsplash.com/photo-1562419331-de4c5f604cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2luZ2l0YSUyME1hbGlsYW5nd2UlMjBlc2NhcGUlMjAlMjBaaW1iYWJ3ZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    "price": 12000,
    "location": "Singita Malilangwe, Zimbabwe",
    "country": "Zimbabwe"
  },
  {
    "title": "Giant's Causeway Adventure",
    "description": "Visit the stunning Giant's Causeway, a UNESCO World Heritage site in Northern Ireland.",
    "image": {
      "filename": "Giant's Causeway",
      "url": "https://images.unsplash.com/photo-1569531412913-08101790fb10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R2lhbnQncyUyMENhdXNld2F5JTIwVUt8ZW58MHx8MHx8fDA%3D"
    },
    "price": 4000,
    "location": "Northern Ireland, UK",
    "country": "UK"
  },
  {
    "title": "Lake District Countryside",
    "description": "Relax in the scenic Lake District, known for its rolling hills, tranquil lakes, and charming villages.",
    "image": {
      "filename": "Lake District",
      "url": "https://media.istockphoto.com/id/1027179192/photo/lakeland-view-of-windermere-from-loughrigg-fell.webp?a=1&b=1&s=612x612&w=0&k=20&c=SfPh3M1MyJ8yKlsyPlsRypMxv5WDhyK7vIKv31-8orA="
    },
    "price": 3000,
    "location": "Lake District, UK",
    "country": "UK"
  },
  {
    "title": "Paris City of Lights",
    "description": "Experience the charm and romance of Paris, the iconic City of Lights.",
    "image": {
      "filename": "Paris",
      "url": "https://images.unsplash.com/photo-1684485442894-8516e58643b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGFyaXMlMjBDaXR5fGVufDB8fDB8fHww"
    },
    "price": 5500,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Machu Picchu Expedition",
    "description": "Explore the breathtaking Incan citadel of Machu Picchu, nestled in the Andes Mountains.",
    "image": {
      "filename": "Machu Picchu",
      "url": "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFjaHUlMjBQaWNjaHUlMjBQZXJ1fGVufDB8fDB8fHww"
    },
    "price": 7000,
    "location": "Machu Picchu",
    "country": "Peru"
  }


];



module.exports = { data: sampleListings };
