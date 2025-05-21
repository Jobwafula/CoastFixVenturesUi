export const tours = [
    {
      id: 1,
      title: 'Amboseli Wildlife Safari',
      description: 'Experience breathtaking views of Kilimanjaro and encounter elephants in their natural habitat.',
      detailedDescription: 'This 3-day safari takes you to Amboseli National Park, famous for its large elephant herds and views of Mount Kilimanjaro across the border in Tanzania. You\'ll stay in comfortable lodges with stunning views, enjoy game drives at dawn and dusk when animals are most active, and have the opportunity to visit a Maasai village to learn about their culture.',
      price: 'KSH 45,000',
      image: '/Amboseli.jpg',
      duration: '3 days',
      highlights: [
        'Close encounters with elephant herds',
        'Spectacular views of Mount Kilimanjaro',
        'Visit to a traditional Maasai village',
        'Sunset game drives',
        'Bird watching (over 400 species recorded)'
      ],
      includes: [
        'All park entry fees',
        'Accommodation in luxury tented camps',
        'All meals (breakfast, lunch, dinner)',
        'Professional guide/driver',
        'Game drives in 4x4 safari vehicles'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Nairobi to Amboseli',
          description: 'Depart Nairobi in the morning, stopping for lunch en route. Arrive in Amboseli in time for an evening game drive.'
        },
        {
          day: 2,
          title: 'Full Day in Amboseli',
          description: 'Early morning and late afternoon game drives with leisure time at the lodge during the hot midday hours.'
        },
        {
          day: 3,
          title: 'Amboseli to Nairobi',
          description: 'Morning game drive followed by breakfast, then depart back to Nairobi with lunch en route.'
        }
      ],
      reviews: [
        {
          name: 'Sarah Johnson',
          rating: 5,
          comment: 'The views of Kilimanjaro were absolutely stunning! We saw so many elephants up close.'
        },
        {
          name: 'Michael Brown',
          rating: 4,
          comment: 'Great safari experience. The Maasai village visit was a highlight for our family.'
        }
      ]
    },
    {
      id: 2,
      title: 'Tsavo National Park Adventure',
      description: 'Explore Kenya\'s largest national park on a 4-day safari featuring the famous "red elephants" and diverse landscapes.',
      detailedDescription: 'Embark on a 4-day adventure to Tsavo National Park, known for its vast landscapes and the iconic "red elephants" covered in red dust. This safari offers thrilling game drives, opportunities to spot lions, leopards, and unique birdlife, and a visit to the Mzima Springs.',
      price: 'KSH 55,000',
      image: '/Tsavo.jpg',
      duration: '4 days',
      highlights: [
        'Spotting the famous red elephants',
        'Exploring Mzima Springs',
        'Game drives in diverse landscapes',
        'Lion and leopard sightings',
        'Bird watching opportunities'
      ],
      includes: [
        'All park entry fees',
        'Accommodation in lodges or camps',
        'All meals',
        'Professional guide/driver',
        '4x4 safari vehicle transport'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Nairobi to Tsavo',
          description: 'Depart Nairobi and arrive at Tsavo for an afternoon game drive.'
        },
        {
          day: 2,
          title: 'Full Day Tsavo West',
          description: 'Full day exploring Tsavo West, including a visit to Mzima Springs.'
        },
        {
          day: 3,
          title: 'Tsavo East Exploration',
          description: 'Morning transfer to Tsavo East for game drives and wildlife spotting.'
        },
        {
          day: 4,
          title: 'Tsavo to Nairobi',
          description: 'Morning game drive, then return to Nairobi with lunch en route.'
        }
      ],
      reviews: [
        {
          name: 'Jane Doe',
          rating: 4,
          comment: 'The red elephants were a sight to behold! Loved the vastness of Tsavo.'
        }
      ]
    },
    {
      id: 3,
      title: 'Maasai Mara Great Migration',
      description: 'Witness the spectacular wildebeest migration on this 5-day luxury safari in the world-famous Maasai Mara reserve.',
      detailedDescription: 'This 5-day luxury safari takes you to the heart of the Maasai Mara to witness the Great Migration, one of nature’s most spectacular events. Enjoy game drives, luxury accommodations, and cultural interactions with the Maasai people.',
      price: 'KSH 75,000',
      image: '/Maasai-Mara.jpg',
      duration: '5 days',
      highlights: [
        'Witness the Great Wildebeest Migration',
        'Luxury accommodations with savanna views',
        'Maasai cultural experiences',
        'Big Five game drives',
        'Hot air balloon safari option'
      ],
      includes: [
        'All park entry fees',
        'Luxury lodge or camp accommodation',
        'All meals and select drinks',
        'Professional guide/driver',
        '4x4 safari vehicle transport'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Nairobi to Maasai Mara',
          description: 'Travel to Maasai Mara with an afternoon game drive upon arrival.'
        },
        {
          day: 2,
          title: 'Full Day Migration Viewing',
          description: 'Full-day game drives to witness the wildebeest migration.'
        },
        {
          day: 3,
          title: 'Maasai Mara Exploration',
          description: 'Morning and evening game drives, optional Maasai village visit.'
        },
        {
          day: 4,
          title: 'Optional Balloon Safari',
          description: 'Optional hot air balloon ride followed by a game drive.'
        },
        {
          day: 5,
          title: 'Maasai Mara to Nairobi',
          description: 'Morning game drive, then return to Nairobi.'
        }
      ],
      reviews: [
        {
          name: 'John Smith',
          rating: 5,
          comment: 'The migration was unforgettable! The guides were incredibly knowledgeable.'
        }
      ]
    },
    {
      id: 4,
      title: 'Samburu Special Five Safari',
      description: 'Discover the unique wildlife of northern Kenya including the rare reticulated giraffe and Grevy\'s zebra.',
      detailedDescription: 'This 4-day safari explores Samburu National Reserve, home to the "Special Five" species unique to northern Kenya. Experience game drives, cultural visits, and stunning riverine landscapes.',
      price: 'KSH 50,000',
      image: '/samburu.jpg',
      duration: '4 days',
      highlights: [
        'Spotting the Special Five (Grevy’s zebra, reticulated giraffe, Somali ostrich, gerenuk, Beisa oryx)',
        'Ewaso Ng’iro River scenery',
        'Samburu cultural experiences',
        'Night game drives',
        'Bird watching'
      ],
      includes: [
        'All park entry fees',
        'Accommodation in lodges or camps',
        'All meals',
        'Professional guide/driver',
        '4x4 safari vehicle transport'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Nairobi to Samburu',
          description: 'Depart Nairobi and arrive in Samburu for an evening game drive.'
        },
        {
          day: 2,
          title: 'Full Day in Samburu',
          description: 'Full-day game drives to spot the Special Five.'
        },
        {
          day: 3,
          title: 'Samburu Cultural Day',
          description: 'Morning game drive and afternoon Samburu village visit.'
        },
        {
          day: 4,
          title: 'Samburu to Nairobi',
          description: 'Morning game drive, then return to Nairobi.'
        }
      ],
      reviews: [
        {
          name: 'Emma Wilson',
          rating: 5,
          comment: 'The Special Five were amazing to see! Samburu is a hidden gem.'
        }
      ]
    },
    {
      id: 5,
      title: 'Lake Nakuru Flamingo Tour',
      description: 'Marvel at thousands of flamingos painting the lake pink and search for rhinos in this 2-day Rift Valley adventure.',
      detailedDescription: 'This 2-day tour takes you to Lake Nakuru National Park, famous for its flamingo populations and rhino conservation efforts. Enjoy game drives and scenic views of the Rift Valley.',
      price: 'KSH 35,000',
      image: '/nakuru.jpg',
      duration: '2 days',
      highlights: [
        'Flamingo watching at Lake Nakuru',
        'Rhino and buffalo sightings',
        'Scenic Rift Valley views',
        'Waterfall exploration',
        'Bird watching (over 450 species)'
      ],
      includes: [
        'All park entry fees',
        'Accommodation in lodges or camps',
        'All meals',
        'Professional guide/driver',
        '4x4 safari vehicle transport'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Nairobi to Lake Nakuru',
          description: 'Travel to Lake Nakuru with an afternoon game drive.'
        },
        {
          day: 2,
          title: 'Lake Nakuru to Nairobi',
          description: 'Morning game drive, then return to Nairobi.'
        }
      ],
      reviews: [
        {
          name: 'David Lee',
          rating: 4,
          comment: 'The flamingos were a highlight! Wish we had more time at the lake.'
        }
      ]
    },
    {
      id: 6,
      title: 'Luxury Beach & Safari Combo',
      description: 'Combine an exciting safari with relaxation on Diani Beach for the ultimate Kenyan holiday experience.',
      detailedDescription: 'This 7-day package combines a thrilling safari in Tsavo with relaxation on the pristine Diani Beach. Enjoy wildlife adventures and beachside luxury in one trip.',
      price: 'KSH 90,000',
      image: '/beach-safari.jpg',
      duration: '7 days',
      highlights: [
        'Safari in Tsavo National Park',
        'Relaxation on Diani Beach',
        'Water sports and snorkeling',
        'Luxury beach resort stay',
        'Wildlife and marine life experiences'
      ],
      includes: [
        'All park and beach activity fees',
        'Luxury accommodation (safari camp and beach resort)',
        'All meals and select drinks',
        'Professional guide/driver',
        'Transfers between locations'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Nairobi to Tsavo',
          description: 'Travel to Tsavo for an afternoon game drive.'
        },
        {
          day: 2,
          title: 'Full Day in Tsavo',
          description: 'Full-day game drives in Tsavo National Park.'
        },
        {
          day: 3,
          title: 'Tsavo to Diani Beach',
          description: 'Morning game drive, then transfer to Diani Beach.'
        },
        {
          day: 4,
          title: 'Diani Beach Relaxation',
          description: 'Free day to enjoy the beach and resort amenities.'
        },
        {
          day: 5,
          title: 'Water Sports and Snorkeling',
          description: 'Engage in water sports or snorkeling at Diani Beach.'
        },
        {
          day: 6,
          title: 'Diani Beach Leisure',
          description: 'Another day to relax or explore Diani Beach.'
        },
        {
          day: 7,
          title: 'Diani Beach to Nairobi',
          description: 'Morning at the beach, then return to Nairobi.'
        }
      ],
      reviews: [
        {
          name: 'Lisa Taylor',
          rating: 5,
          comment: 'The perfect mix of adventure and relaxation! Diani Beach was stunning.'
        }
      ]
    }
  ];