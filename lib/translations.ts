export type Language = 'en' | 'bn';

export const translations = {
  en: {
    nav: {
      mission: 'Our Mission',
      join: 'Join Us',
    },
    hero: {
      headlinePart1: 'A journey from',
      headlineDarkness: 'darkness',
      headlineToLight: 'to light.',
      subheadline: 'From Fajr to Isha',
      subheadlineItalic: '· Reflect, Reset, Return. ·',
      microcopyLine1: 'A day in life,',
      microcopyLine2: 'a reminder for the akhirah.',
      btnExplore: 'Explore',
      btnLearnMore: 'Learn More',
    },
    contentTitle: 'The Pillar of Faith',
    contentDescription: 'Salat (Prayer) is the second pillar of Islam and the first act that believers will be questioned about on the Day of Judgment. It is an intimate conversation with the Creator, a momentary pause from the worldly illusions, and the ultimate source of spiritual grounding.',
    about: {
      title: 'Our Mission',
      description: 'NUR was created to provide a digital sanctuary—a small, visceral reminder of our temporary time in this Dunya and the profound beauty of our daily prayers. Through scrollytelling, we aim to inspire reflection on the Akhirah.',
    },
    join: {
      title: 'Join the Community',
      description: 'Sign up to receive weekly reflections, beautiful recitations, and reminders directly to your inbox.',
      placeholder: 'Enter your email address...',
      button: 'Subscribe',
    },
    footer: {
      createdBy: 'Created by'
    }
  },
  bn: {
    nav: {
      mission: 'আমাদের লক্ষ্য',
      join: 'যুক্ত হোন',
    },
    hero: {
      headlinePart1: 'অন্ধকার থেকে',
      headlineDarkness: 'আলোর',
      headlineToLight: 'দিকে এক যাত্রা।',
      subheadline: 'ফজর থেকে ইশা পর্যন্ত',
      subheadlineItalic: '· অনুধাবন, পরিশুদ্ধি, প্রত্যাবর্তন ·',
      microcopyLine1: 'জীবনের একটি দিন,',
      microcopyLine2: 'আখিরাতের জন্য একটি স্মরণিকা।',
      btnExplore: 'অন্বেষণ করুন',
      btnLearnMore: 'আরও জানুন',
    },
    contentTitle: 'ঈমানের স্তম্ভ',
    contentDescription: 'সালাত (নামাজ) হলো ইসলামের দ্বিতীয় স্তম্ভ এবং কিয়ামতের দিন প্রথম আমল যার হিসাব নেওয়া হবে। এটি স্রষ্টার সাথে এক নিবিড় কথোপকথন, জাগতিক মায়া থেকে ক্ষণিকের বিরতি এবং আত্মিক প্রশান্তির সর্বোচ্চ মাধ্যম।',
    about: {
      title: 'আমাদের লক্ষ্য',
      description: 'NUR তৈরি করা হয়েছে একটি ডিজিটাল আশ্রয়স্থল হিসেবে—দুনিয়ার অস্থায়ী সময় এবং আমাদের দৈনন্দিন নামাজের গভীর সৌন্দর্য সম্পর্কে একটি জীবন্ত স্মরণিকা। স্ক্রলিটেলিং এর মাধ্যমে, আমরা আখিরাতের চিন্তাকে জাগ্রত করতে চাই।',
    },
    join: {
      title: 'কমিউনিটিতে যুক্ত হোন',
      description: 'সাপ্তাহিক ইসলামিক ভাবনা, সুন্দর তিলাওয়াত এবং স্মরণিকা আপনার ইনবক্সে পেতে সাইন আপ করুন।',
      placeholder: 'আপনার ইমেইল ঠিকানা লিখুন...',
      button: 'সাবস্ক্রাইব করুন',
    },
    footer: {
      createdBy: 'নির্মাতা:'
    }
  }
};

export const islamicSources = [
  {
    id: 1,
    arabic: "وَأَقِمِ الصَّلَاةَ ۖ إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ ۗ وَلَذِكْرُ اللَّهِ أَكْبَرُ ۗ",
    en: {
      text: "And establish prayer. Indeed, prayer prohibits immorality and wrongdoing, and the remembrance of Allah is greater.",
      reference: "Surah Al-'Ankabut, 29:45"
    },
    bn: {
      text: "এবং নামাজ কায়েম করো। নিশ্চয়ই নামাজ অশ্লীল ও গর্হিত কাজ থেকে বিরত রাখে, এবং আল্লাহর স্মরণই সর্বশ্রেষ্ঠ।",
      reference: "সূরা আল-আনকাবুত, ২৯:৪৫"
    }
  },
  {
    id: 2,
    arabic: "رَأْسُ الأَمْرِ الإِسْلاَمُ وَعَمُودُهُ الصَّلاَةُ وَذِرْوَةُ سَنَامِهِ الْجِهَادُ",
    en: {
      text: "The head of the matter is Islam, its pillar is the prayer, and its highest peak is Jihad.",
      reference: "Jami` at-Tirmidhi 2616 (Hadith)"
    },
    bn: {
      text: "সকল বিষয়ের মূল হচ্ছে ইসলাম, এর স্তম্ভ হচ্ছে সালাত এবং এর সর্বোচ্চ শিখর হচ্ছে জিহাদ।",
      reference: "জামে আত-তিরমিজি, হাদিস: ২৬১৬"
    }
  },
  {
    id: 3,
    arabic: "أَرَأَيْتُمْ لَوْ أَنَّ نَهَرًا بِبَابِ أَحَدِكُمْ يَغْتَسِلُ فِيهِ كُلَّ يَوْمٍ خَمْسًا، مَا تَقُولُ ذَلِكَ يُبْقِي مِنْ دَرَنِهِ ؟ قَالُوا: لَا يُبْقِي مِنْ دَرَنِهِ شَيْئًا، قَالَ: فَذَلِكَ مِثْلُ الصَّلَوَاتِ الْخَمْسِ يَمْحُو اللَّهُ بِهَا الْخَطَايَا",
    en: {
      text: "The Prophet (ﷺ) said: 'If a river was at the door of anyone of you and he bathed in it five times a day, would any dirt be left?' They said, 'Not a trace.' He added, 'That is the example of the five prayers with which Allah blots out evil deeds.'",
      reference: "Sahih al-Bukhari 528"
    },
    bn: {
      text: "নবী (সাঃ) বলেছেন: 'তোমাদের বাড়ির সামনে যদি একটি নদী থাকে এবং প্রতিদিন তাতে পাঁচবার গোসল করো, তবে কি কোনো ময়লা অবশিষ্ট থাকবে?' সাহাবীগণ বললেন, 'না।' তিনি বললেন, 'পাঁচ ওয়াক্ত নামাজের দৃষ্টান্তও এমনই। এর মাধ্যমে আল্লাহ গুনাহসমূহ ধুয়ে মুছে সাফ করে দেন।'",
      reference: "সহীহ বুখারী, ৫২৮"
    }
  },
  {
    id: 4,
    arabic: "حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَىٰ وَقُومُوا لِلَّهِ قَانِتِينَ",
    en: {
      text: "Maintain with care the [obligatory] prayers and [in particular] the middle prayer and stand before Allah, devoutly obedient.",
      reference: "Surah Al-Baqarah, 2:238"
    },
    bn: {
      text: "তোমরা সমস্ত নামাজের প্রতি যত্নবান হও, বিশেষ করে মধ্যবর্তী (আসর) নামাজের ব্যাপারে। আর আল্লাহর সামনে বিনীতভাবে দাঁড়াও।",
      reference: "সূরা আল-বাকারা, ২:২৩৮"
    }
  },
  {
    id: 5,
    arabic: "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا",
    en: {
      text: "Indeed, prayer has been decreed upon the believers a decree of specified times.",
      reference: "Surah An-Nisa, 4:103"
    },
    bn: {
      text: "নিশ্চয়ই মুমিনদের ওপর নির্ধারিত সময়ে নামাজ আদায় করা ফরজ করা হয়েছে।",
      reference: "সূরা আন-নিসা, ৪:১০৩"
    }
  },
  {
    id: 6,
    arabic: "إِنَّ أَوَّلَ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ صَلَاتُهُ فَإِنْ صَلُحَتْ فَقَدْ أَفْلَحَ وَأَنْجَحَ وَإِنْ فَسَدَتْ فَقَدْ خَابَ وَخَسِرَ",
    en: {
      text: "The first thing for which a servant will be held accountable on the Day of Resurrection will be his prayer. If it is sound, he will be successful; if it is corrupt, he will be ruined.",
      reference: "Sunan an-Nasa'i 465 (Hadith)"
    },
    bn: {
      text: "কিয়ামতের দিন বান্দার আমলসমূহের মধ্যে সর্বপ্রথম নামাজের হিসাব নেওয়া হবে। যদি তা সঠিক হয় তবে সে সফল হবে, আর যদি তা নষ্ট হয় তবে সে ক্ষতিগ্রস্ত ও ধ্বংস হবে।",
      reference: "সুনান আন-নাসায়ী, ৪৬৫"
    }
  },
  {
    id: 7,
    arabic: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى الْخَاشِعِينَ",
    en: {
      text: "And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive.",
      reference: "Surah Al-Baqarah, 2:45"
    },
    bn: {
      text: "তোমরা ধৈর্য ও নামাজের মাধ্যমে সাহায্য প্রার্থনা করো। এবং নিশ্চয়ই এটি অত্যন্ত কঠিন, তবে বিনীতদের জন্য নয়।",
      reference: "সূরা আল-বাকারা, ২:৪৫"
    }
  },
  {
    id: 8,
    arabic: "بَيْنَ الرَّجُلِ وَبَيْنَ الشِّرْكِ وَالْكُفْرِ تَرْكُ الصَّلَاةِ",
    en: {
      text: "Between a man and polytheism and disbelief is the abandonment of prayer.",
      reference: "Sahih Muslim 82 (Hadith)"
    },
    bn: {
      text: "একজন ব্যক্তি এবং শিরক ও কুফরের মধ্যে পার্থক্য হলো নামাজ পরিত্যাগ করা।",
      reference: "সহীহ মুসলিম, ৮২"
    }
  },
  {
    id: 9,
    arabic: "قَدْ أَفْلَحَ الْمُؤْمِنُونَ - الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ",
    en: {
      text: "Certainly will the believers have succeeded. They who are during their prayer humbly submissive.",
      reference: "Surah Al-Mu'minun, 23:1-2"
    },
    bn: {
      text: "অবশ্যই মুমিনগণ সফলকাম হয়েছে। যারা নিজেদের নামাজে বিনয়ী ও নম্র।",
      reference: "সূরা আল-মুমিনুন, ২৩:১-২"
    }
  },
  {
    id: 10,
    arabic: "الصَّلَاةُ نُورٌ",
    en: {
      text: "Prayer is light.",
      reference: "Sahih Muslim 223 (Hadith excerpt)"
    },
    bn: {
      text: "নামাজ হলো আলো (নূর)।",
      reference: "সহীহ মুসলিম, ২২৩"
    }
  },
  {
    id: 11,
    arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    en: {
      text: "And when My servants ask you concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.",
      reference: "Surah Al-Baqarah, 2:186"
    },
    bn: {
      text: "আর আমার বান্দারা যখন আপনার কাছে আমার সম্পর্কে জিজ্ঞাসা করে- নিশ্চয়ই আমি খুব কাছে। আহ্বানকারী যখন আমাকে ডাকে, আমি তার ডাকে সাড়া দেই।",
      reference: "সূরা আল-বাকারা, ২:১৮৬"
    }
  },
  {
    id: 12,
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    en: {
      text: "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
      reference: "Surah Al-Baqarah, 2:152"
    },
    bn: {
      text: "সুতরাং তোমরা আমাকে স্মরণ করো; আমি তোমাদের স্মরণ করব। আর আমার প্রতি কৃতজ্ঞ হও এবং অকৃতজ্ঞ হয়ো না।",
      reference: "সূরা আল-বাকারা, ২:১৫২"
    }
  },
  {
    id: 13,
    arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    en: {
      text: "Allah does not burden a soul beyond that it can bear.",
      reference: "Surah Al-Baqarah, 2:286"
    },
    bn: {
      text: "আল্লাহ কোনো সাধ্যের অতিরিক্ত ভার কারো ওপর চাপিয়ে দেন না।",
      reference: "সূরা আল-বাকারা, ২:২৮৬"
    }
  },
  {
    id: 14,
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    en: {
      text: "Indeed, with hardship [will be] ease.",
      reference: "Surah Ash-Sharh, 94:6"
    },
    bn: {
      text: "নিশ্চয়ই কষ্টের সাথেই রয়েছে স্বস্তি।",
      reference: "সূরা আল-ইনশিরাহ, ৯৪:৬"
    }
  },
  {
    id: 15,
    arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
    en: {
      text: "And whoever fears Allah - He will make for him a way out And will provide for him from where he does not expect.",
      reference: "Surah At-Talaq, 65:2-3"
    },
    bn: {
      text: "আর যে আল্লাহকে ভয় করে, আল্লাহ তার জন্য উত্তরণের পথ বের করে দেন এবং তাকে এমন স্থান থেকে রিযিক দান করেন, যা সে ধারণাও করতে পারে না।",
      reference: "সূরা আত-তালাক, ৬৫:২-৩"
    }
  }
];
