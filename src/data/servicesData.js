// src/data/servicesData.js
const servicesData = {
  categories: [
    {
      category: "Unwanted Hair",
      about:
        "Safe and effective diode laser treatments for long-term, smooth, hair-free skin. Personalized sessions designed for maximum comfort and results.",
      services: [
        {
          id: "lhr-full-body",
          name: "Full Body Laser Hair Reduction",
          tagline: "Permanent reduction of unwanted body hair.",
          image: "images/face-laser.jpg",
          description:
            "Enjoy the freedom of smooth, hair-free skin from head to toe. Our advanced diode laser offers long-term reduction across large areas with minimal discomfort and maximum safety.",
          details: {
            about:
              "A comprehensive solution for lasting hair reduction across arms, legs, back, underarms, bikini, and more. Our diode laser adapts to your skin type, ensuring effective results with unmatched comfort.",
            perfectFor: [
              "Busy professionals who want a low-maintenance routine",
              "People prone to ingrown hairs or shaving irritation",
              "Anyone seeking a permanent alternative to waxing",
            ],
            steps: [
              "Skin consultation & patch test",
              "Shaving & prepping the areas",
              "Laser treatment with cooling technology",
              "Moisturizer & aftercare guidance",
            ],
            beforeCare: [
              "Avoid waxing, threading, or bleaching 4 weeks before",
              "Shave the treatment area 24 hrs prior",
              "No tanning/sun exposure for 1 week before",
            ],
            afterCare: [
              "Avoid hot showers & workouts for 24 hrs",
              "Apply aloe vera for soothing",
              "Use sunscreen daily on exposed areas",
            ],
            faqs: [
              {
                q: "How many sessions are required?",
                a: "Most clients see noticeable results in 6–8 sessions, depending on hair density.",
              },
              {
                q: "Is it safe for all skin tones?",
                a: "Yes, our diode technology is customizable for different skin types.",
              },
            ],
            duration: "90–120 mins",
          },
        },
        {
          id: "lhr-full-face",
          name: "Full Face LHR",
          tagline: "Complete facial hair reduction.",
          image: "images/face-laser.jpg",
          description:
            "Get rid of unwanted hair across your forehead, cheeks, upper lip, chin, and sideburns. Achieve a smoother, clearer look without the need for regular threading or waxing.",
          details: {
            about:
              "A focused treatment for complete face hair removal. Helps reduce growth, lighten pigmentation, and restore natural skin glow.",
            perfectFor: [
              "Women with hormonal facial hair growth",
              "Clients tired of painful threading/waxing",
            ],
            steps: ["Cleansing", "Laser treatment", "Cooling gel application"],
            beforeCare: ["Avoid bleaching or waxing 4 weeks prior"],
            afterCare: ["No makeup for 24 hrs", "Always apply sunscreen"],
            faqs: [
              {
                q: "Does it hurt?",
                a: "Discomfort is minimal, with cooling applied for relief.",
              },
            ],
            duration: "20–45 mins",
          },
        },
        {
          id: "lhr-upperlower-face",
          name: "Upper Face / Lower Face LHR",
          tagline: "Quick sessions for upper/lower face.",
          image: "/images/face-laser.jpg",
          description:
            "Target specific areas like the forehead, chin, or jawline. A short, effective laser session designed for precision and fast results.",
          details: {
            about:
              "Perfect for clients who don’t need a full-face session but want targeted hair reduction.",
            perfectFor: ["Quick touch-ups", "Localized facial hair"],
            steps: ["Skin prep", "Laser passes", "Soothing gel"],
            beforeCare: ["Shave if directed"],
            afterCare: ["Avoid hot showers & scrubbing for 48 hrs"],
            faqs: [
              {
                q: "Can I combine with other treatments?",
                a: "Yes, you can add this to a full-face or body package.",
              },
            ],
            duration: "15–25 mins",
          },
        },
        {
          id: "lhr-upperlip-chin",
          name: "Upper Lip & Chin LHR",
          tagline: "Fast treatment for upper lip & chin.",
          image: "/images/upper-lip-chin.jpg",
          description:
            "A quick solution for stubborn upper lip and chin hair. Say goodbye to frequent threading and enjoy smoother skin for weeks at a time.",
          details: {
            about:
              "Focused diode laser treatment for delicate upper lip and chin areas. Provides effective reduction with minimal downtime.",
            perfectFor: ["Small, stubborn facial areas"],
            steps: ["Cleanse", "Laser", "Soothe"],
            beforeCare: ["Avoid waxing 4 weeks before"],
            afterCare: ["No exfoliation for 48 hrs"],
            faqs: [
              {
                q: "Is it permanent?",
                a: "It provides long-term reduction; occasional maintenance may be needed.",
              },
            ],
            duration: "10–15 mins",
          },
        },
        {
          id: "lhr-side-locks",
          name: "Side Locks LHR",
          tagline: "Remove sideburns & facial hair.",
          image: "/images/side-locks.jpg",
          description:
            "Redefine your facial profile with precise laser shaping of sideburns and temple areas. Gentle on skin, long-lasting on results.",
          details: {
            about:
              "Targeted treatment to sculpt and smoothen the sideburns and temple region.",
            perfectFor: ["Sideburn shaping", "Facial contouring"],
            steps: ["Skin prep", "Laser pulses", "Cooling gel"],
            beforeCare: ["Shave if required"],
            afterCare: ["Moisturize gently if dry"],
            faqs: [
              {
                q: "Any risk of scarring?",
                a: "No, when performed with medical-grade lasers.",
              },
            ],
            duration: "10–15 mins",
          },
        },
        {
          id: "lhr-underarms",
          name: "Underarms LHR",
          tagline: "Long lasting underarm hair reduction.",
          image: "/images/underarms-laser.jpg",
          description:
            "Say goodbye to daily shaving and dark patches. Our underarm laser not only removes hair but also improves skin texture and pigmentation over time.",
          details: {
            about:
              "A quick and effective diode laser treatment designed for smooth, fresh underarms.",
            perfectFor: ["Daily shavers", "Dark underarm pigmentation"],
            steps: ["Shave area", "Laser treatment", "Soothing gel"],
            beforeCare: ["Avoid deodorant on treatment day"],
            afterCare: ["No deodorant for 24 hrs", "Wear loose clothing"],
            faqs: [
              {
                q: "Will it lighten my underarms?",
                a: "Yes, many clients notice skin brightening after a few sessions.",
              },
            ],
            duration: "8–15 mins",
          },
        },
        {
          id: "lhr-bikini-line",
          name: "Bikini Line LHR",
          tagline: "Clean bikini line with long-term results.",
          image: "/images/bikini-laser.jpg",
          description:
            "Enjoy confidence in swimwear and intimate wear. Our safe bikini line laser treatment ensures hygiene, comfort, and long-term smoothness.",
          details: {
            about:
              "A sensitive-area treatment tailored with lower energy levels to maintain comfort while achieving results.",
            perfectFor: ["Hygiene-conscious individuals", "Swimsuit confidence"],
            steps: ["Consent & prep", "Laser treatment", "Cooling therapy"],
            beforeCare: ["No waxing for 4 weeks", "Shave 24 hrs prior"],
            afterCare: ["Avoid hot tubs for 48 hrs"],
            faqs: [
              {
                q: "Is it painful?",
                a: "Slight discomfort may occur, but cooling minimizes it.",
              },
            ],
            duration: "15–25 mins",
          },
        },
        {
          id: "lhr-full-front",
          name: "Full Front LHR",
          tagline: "Front body hair reduction.",
          image: "/images/full-front.jpg",
          description:
            "Smoothen your chest, abs, and front torso with effective diode laser treatment. Ideal for men and women looking for clean, well-groomed skin.",
          details: {
            about:
              "Targets front torso, stomach, and chest hair with safe laser technology.",
            perfectFor: ["Men’s grooming", "Chest/abs hair reduction"],
            steps: ["Assessment", "Laser session", "Moisturizer"],
            beforeCare: ["Shave the area 24 hrs before"],
            afterCare: ["Avoid exfoliation for 48 hrs"],
            faqs: [
              {
                q: "How many sessions are needed?",
                a: "6–8 sessions usually give long-lasting results.",
              },
            ],
            duration: "30–45 mins",
          },
        },
        {
          id: "lhr-full-back",
          name: "Full Back LHR",
          tagline: "Back hair removal & smoothing.",
          image: "/images/full-back-laser.jpg",
          description:
            "Achieve a clean, smooth back with our diode laser. No more shaving hard-to-reach spots — enjoy long-term results and improved confidence.",
          details: {
            about:
              "Targets the full back area, reducing regrowth with long-term results.",
            perfectFor: ["Men with back hair", "Women with hormonal growth"],
            steps: ["Prep", "Laser treatment", "Soothing gel"],
            beforeCare: ["Shave before treatment"],
            afterCare: ["Avoid sweating for 24 hrs"],
            faqs: [
              {
                q: "Can it cause scarring?",
                a: "No, it’s a safe and FDA-approved treatment.",
              },
            ],
            duration: "30–60 mins",
          },
        },
        {
          id: "lhr-full-arms",
          name: "Full Arms LHR",
          tagline: "Smooth, hair-reduced arms.",
          image: "/images/full-arms.jpg",
          description:
            "Get sleek, hair-free arms that stay smooth for weeks. Our diode laser covers shoulders to wrists with precision and comfort.",
          details: {
            about:
              "Long-term solution for arm hair reduction, tailored to all skin tones.",
            perfectFor: ["Regular waxers", "People with thick arm hair"],
            steps: ["Prep", "Laser treatment", "Soothe"],
            beforeCare: ["No waxing 4 weeks prior"],
            afterCare: ["Moisturize daily", "Avoid scrubbing 48 hrs"],
            faqs: [
              {
                q: "How many sessions are required?",
                a: "Usually 6–8, depending on density.",
              },
            ],
            duration: "20–40 mins",
          },
        },
        {
          id: "lhr-full-legs",
          name: "Full Legs LHR",
          tagline: "Legs hair reduction for smooth skin.",
          image: "/images/full-legs.jpg",
          description:
            "Walk confidently with hair-free legs. Our diode laser ensures long-term smoothness without the hassle of razors or waxing strips.",
          details: {
            about:
              "Covers thighs, calves, and feet areas with advanced diode laser.",
            perfectFor: ["Women with busy routines", "Active lifestyles"],
            steps: ["Shave", "Laser treatment", "Cool soothe"],
            beforeCare: ["Shave 24 hrs prior", "Avoid tanning"],
            afterCare: ["Apply sunscreen", "No gym 24 hrs"],
            faqs: [
              {
                q: "Is it safe for all skin tones?",
                a: "Yes, we adjust device settings per individual.",
              },
            ],
            duration: "45–90 mins",
          },
        },
      ],
    },
      
  

    {
  category: "Advanced Facials",
  about: "Customized facials designed to treat acne, boost hydration, brighten dull skin, and restore youthful elasticity. Each treatment is curated to match your skin concerns and provide a visible glow without downtime.",
  services: [
    {
      id: "facial-derma-revive",
      name: "Derma Revive Facial",
      tagline: "Revive tired skin with deep hydration.",
      image: "/images/derma-revive.jpg",
      description: "Multi-step facial to deeply hydrate & restore glow.",
      details: {
        about: "The Derma Revive Facial is a luxurious treatment that restores deep hydration while improving skin barrier strength. It revives dull, fatigued skin and leaves it plump, supple, and glowing.",
        perfectFor: [
          "Dry, flaky or dehydrated skin",
          "Loss of skin radiance",
          "Fatigued or travel-worn skin",
          "Skin exposed to harsh climates"
        ],
        steps: [
          "Double cleanse to remove impurities",
          "Gentle exfoliation",
          "Hydration serum infusion",
          "Relaxing massage",
          "Moisturizing mask",
          "SPF application"
        ],
        beforeCare: [
          "Avoid strong retinoids or exfoliants 3 days prior",
          "Stay hydrated for best results"
        ],
        afterCare: [
          "Use gentle cleansers for 24 hrs",
          "Apply broad-spectrum sunscreen daily",
          "Continue hydrating serums at home"
        ],
        faqs: [
          { q: "How often should I get this?", a: "Once every 3–4 weeks for long-lasting results." },
          { q: "Is there downtime?", a: "No, you can resume normal activities immediately." }
        ],
        duration: "60–75 mins"
      }
    },
    {
      id: "facial-korean",
      name: "Korean Glass-Skin Facial",
      tagline: "Hydration & glow, Korean-style.",
      image: "/images/korean-facial.jpg",
      description: "Brightens skin and reduces pigmentation for a glass-skin finish.",
      details: {
        about: "An advanced Korean-inspired multi-step facial that deeply hydrates and brightens skin. It helps reduce pigmentation, refine texture, and deliver a glass-skin glow.",
        perfectFor: [
          "Uneven skin tone",
          "Pigmentation",
          "Dull complexion",
          "Texture improvement"
        ],
        steps: [
          "Multi-step cleansing ritual",
          "Mild exfoliation",
          "Essence & serum infusion",
          "Hydration masks",
          "Cooling therapy"
        ],
        beforeCare: [
          "Avoid chemical peels 2 weeks prior",
          "Pause use of harsh actives"
        ],
        afterCare: [
          "Avoid direct sun for 24 hrs",
          "Apply moisturizer & SPF regularly"
        ],
        faqs: [
          { q: "Safe for sensitive skin?", a: "Yes, the protocol is customizable for sensitivity." },
          { q: "How many sessions for best results?", a: "A series of 3–4 sessions enhances long-term glow." }
        ],
        duration: "70–90 mins"
      }
    },
    {
      id: "facial-acne-arrestor",
      name: "Acne Arrestor Facial",
      tagline: "Targets acne & calms skin.",
      image: "/images/acne-facial.jpg",
      description: "Reduces acne, unclogs pores & soothes irritation.",
      details: {
        about: "The Acne Arrestor Facial is specifically designed for acne-prone skin. It clears clogged pores, reduces active breakouts, and calms redness for a clearer complexion.",
        perfectFor: [
          "Active acne",
          "Oily or congested skin",
          "Blackheads & whiteheads",
          "Post-inflammatory redness"
        ],
        steps: [
          "Deep pore cleanse",
          "Gentle exfoliation",
          "Acne-safe actives",
          "Soothing antibacterial mask",
          "Oil-free hydration"
        ],
        beforeCare: [
          "Avoid heavy topical acne creams 48 hrs prior",
          "Do not pick or irritate active acne before session"
        ],
        afterCare: [
          "Use only gentle cleansers & non-comedogenic products",
          "Avoid picking or squeezing acne",
          "Apply prescribed acne-safe moisturizer"
        ],
        faqs: [
          { q: "Does it remove scars?", a: "No, it reduces acne activity. Scars need targeted treatments." },
          { q: "Is it safe for teens?", a: "Yes, it is safe and effective for teenagers." }
        ],
        duration: "50–70 mins"
      }
    },
    {
      id: "facial-quick-fix",
      name: "Quick Fix Radiance Facial",
      tagline: "Instant glow for events.",
      image: "/images/quick-fix.jpg",
      description: "Fast brightening treatment for pre-events.",
      details: {
        about: "A 30–40 minute express treatment designed to give you an instant glow before an event. Perfect for those short on time but in need of visible brightness.",
        perfectFor: [
          "Event-ready skin",
          "Last-minute glow",
          "Pre-wedding or party prep",
          "Busy professionals"
        ],
        steps: [
          "Gentle cleanse",
          "Exfoliation",
          "Brightening mask",
          "Hydration & SPF"
        ],
        beforeCare: ["No special preparation required"],
        afterCare: ["Hydrate well & avoid heavy makeup for 6–8 hrs"],
        faqs: [
          { q: "How long does the glow last?", a: "Usually 3–7 days depending on skincare routine." }
        ],
        duration: "30–40 mins"
      }
    },
    {
      id: "facial-insta-collagen",
      name: "Insta Collagen Boost Facial",
      tagline: "Plumps skin with collagen infusion.",
      image: "/images/collagen-boost.jpg",
      description: "Stimulates collagen to improve elasticity & reduce fine lines.",
      details: {
        about: "A rejuvenating facial that stimulates collagen production, reduces fine lines, and enhances skin elasticity for a youthful appearance.",
        perfectFor: [
          "Fine lines",
          "Loss of firmness",
          "Early signs of aging",
          "Skin fatigue"
        ],
        steps: [
          "Deep cleanse",
          "Collagen serum infusion",
          "Massage therapy",
          "Firming mask",
          "SPF application"
        ],
        beforeCare: ["Avoid retinoids 48 hrs prior"],
        afterCare: ["Hydrate well & apply SPF daily"],
        faqs: [
          { q: "Are results immediate?", a: "Skin looks plumper instantly, but long-term results improve with regular sessions." }
        ],
        duration: "50–70 mins"
      }
    },
    {
      id: "facial-hydra-boost",
      name: "Hydra Boost Facial",
      tagline: "Deep hydration & soothing.",
      image: "/images/hydra-boost.jpg",
      description: "Replenishes skin moisture and repairs barrier.",
      details: {
        about: "The Hydra Boost Facial is a hydration-focused treatment that restores moisture levels, soothes sensitivity, and leaves skin looking fresh and supple.",
        perfectFor: [
          "Dehydrated skin",
          "Post-sun exposure",
          "Flaky or rough texture",
          "Sensitive skin"
        ],
        steps: [
          "Hydrating cleanse",
          "Serum infusion",
          "Moisture-lock mask",
          "Calming finish"
        ],
        beforeCare: ["Avoid exfoliating treatments 3 days prior"],
        afterCare: ["Maintain hydration with serums & moisturizers"],
        faqs: [
          { q: "Does it make skin oily?", a: "No, only water-based hydrators are used, making it safe even for oily skin." }
        ],
        duration: "45–60 mins"
      }
    },
    {
      id: "facial-double-derma-boost",
      name: "Double Derma Boost Facial",
      tagline: "Dual-action rejuvenation.",
      image: "/images/double-derma.jpg",
      description: "Combines exfoliation + infusion for advanced glow.",
      details: {
        about: "This advanced facial combines two skin-boosting steps: deep exfoliation followed by nutrient-rich infusion for brighter, healthier skin.",
        perfectFor: [
          "Pigmentation",
          "Texture irregularities",
          "Tired skin",
          "Uneven tone"
        ],
        steps: [
          "Skin exfoliation",
          "Nutrient-rich serum infusion",
          "Moisturizing mask"
        ],
        beforeCare: ["Avoid strong topical actives 72 hrs prior"],
        afterCare: ["Sun protection is essential to maintain results"],
        faqs: [
          { q: "Any downtime?", a: "No, but mild redness may occur for a few hours." }
        ],
        duration: "60–80 mins"
      }
    },
    {
      id: "facial-elastic-boost",
      name: "Elastic Boost Facial",
      tagline: "Restores firmness & elasticity.",
      image: "/images/elastic-boost.jpg",
      description: "Firming treatment to fight sagging & loss of elasticity.",
      details: {
        about: "A peptide-powered facial that restores firmness, improves elasticity, and provides visible lifting for mature or sagging skin.",
        perfectFor: [
          "Loss of firmness",
          "Sagging skin",
          "Mature skin",
          "Post-weight loss skin"
        ],
        steps: [
          "Deep cleanse",
          "Peptide serum infusion",
          "Firming massage",
          "Tightening mask"
        ],
        beforeCare: ["Avoid heavy peels 2 weeks prior"],
        afterCare: ["Maintain results with peptide serums & SPF"],
        faqs: [
          { q: "How many sessions are needed?", a: "3–6 sessions are recommended for best results." }
        ],
        duration: "50–70 mins"
      }
    },
    {
      id: "facial-couple-laser",
      name: "Couple Laser Facial",
      tagline: "Glow together, skin sync radiance.",
      image: "/images/couple-laser.jpg",
      description: "A relaxing laser facial designed for two.",
      details: {
        about: "Enjoy a premium laser facial together with a partner or friend. This treatment offers the same skin-rejuvenating benefits while making it a memorable shared experience.",
        perfectFor: [
          "Couples",
          "Friends pre-event",
          "Wedding or special occasions",
          "Shared pampering experience"
        ],
        steps: [
          "Skin consultation",
          "Customized laser rejuvenation",
          "Soothing mask & hydration"
        ],
        beforeCare: ["Avoid tanning for 2 weeks prior"],
        afterCare: ["Hydration & sunscreen daily"],
        faqs: [
          { q: "Will both get same results?", a: "Yes, but treatment is adjusted individually per skin needs." }
        ],
        duration: "60–90 mins"
      },
    },
  ],
},



    {
  category: "Body Contouring",
  about: "Safe, non-surgical inch-loss and body sculpting treatments that combine advanced technologies with expert techniques to tone, tighten, and refine your silhouette. Each treatment is personalized to target stubborn areas while ensuring comfort and long-lasting results.",
  services: [
    {
      id: "body-kb-slimming",
      name: "KB Slimming Facial",
      tagline: "Targeted slimming for small zones.",
      image: "/images/kb-slimming.jpg",
      description: "Localized slimming treatment designed for smaller body areas.",
      details: {
        about: "A precision contouring treatment that targets localized fat deposits in small zones like chin, arms, or under-bust using non-invasive machine technology and lymphatic massage.",
        perfectFor: [
          "Double chin or jawline bulge",
          "Small stubborn fat pockets",
          "Pre-event shaping",
          "Non-surgical contouring seekers"
        ],
        steps: [
          "Personalized assessment",
          "Slimming machine application",
          "Focused lymphatic massage",
          "Hydration & cooling"
        ],
        beforeCare: ["Avoid heavy meals 2 hours before session", "Stay hydrated prior to treatment"],
        afterCare: ["Drink 2–3 liters of water within 24 hrs", "Avoid heavy exercise for 24 hrs"],
        faqs: [
          { q: "Is this painful?", a: "No, most clients find it relaxing with only mild warmth." },
          { q: "When will I see results?", a: "Mild changes may be visible immediately, with optimal results after 3–5 sessions." }
        ],
        duration: "30–45 mins"
      }
    },
    {
      id: "body-abdomen-inch-loss",
      name: "Abdomen Inch Loss",
      tagline: "Safely reduce inches from the waistline.",
      image: "/images/abdomen-inch-loss.jpg",
      description: "Advanced fat melting and inch-loss treatment for the midsection.",
      details: {
        about: "A combination of cavitation, massage, and topical actives designed to reduce abdominal circumference and enhance waist contour without surgery.",
        perfectFor: [
          "Stubborn belly fat",
          "Post-pregnancy shaping",
          "Post-weight loss tightening",
          "Event preparation"
        ],
        steps: [
          "Measurement & assessment",
          "Cavitation & fat mobilization",
          "Lymphatic massage",
          "Final measurement"
        ],
        beforeCare: ["Avoid heavy meals 2 hrs before", "Do not consume alcohol 24 hrs prior"],
        afterCare: ["Hydrate well", "Light walking or mild activity recommended"],
        faqs: [
          { q: "How many sessions are required?", a: "3–6 sessions are usually needed for visible results." },
          { q: "Will results last?", a: "Yes, when combined with healthy diet & lifestyle." }
        ],
        duration: "45–60 mins"
      }
    },
    {
      id: "body-arms-inch-loss",
      name: "Arms Inch Loss",
      tagline: "Tone & slim your arms safely.",
      image: "/images/arms-inch-loss.jpg",
      description: "Targeted inch-loss treatment for upper and lower arms.",
      details: {
        about: "Designed to address stubborn arm fat and flabbiness, this treatment combines cavitation, massage, and tightening modalities for a more toned look.",
        perfectFor: [
          "Upper arm flabbiness",
          "Post-weight loss sagging",
          "Uneven arm tone",
          "Event preparation (sleeveless outfits)"
        ],
        steps: [
          "Assessment & measurements",
          "Targeted slimming treatment",
          "Firming massage",
          "Cooling gel application"
        ],
        beforeCare: ["Avoid strenuous exercise right before session"],
        afterCare: ["Moisturize treated area", "Light arm exercises recommended post-treatment"],
        faqs: [
          { q: "Are results permanent?", a: "Maintenance sessions and exercise help sustain results." },
          { q: "Any downtime?", a: "None, you can resume daily activities immediately." }
        ],
        duration: "30–45 mins"
      }
    },
    {
      id: "body-hips-inch-loss",
      name: "Hips Inch Loss",
      tagline: "Sculpt & contour the hip area.",
      image: "/images/hips-inch-loss.jpg",
      description: "Non-surgical hip sculpting & inch-loss program.",
      details: {
        about: "Focused on reducing hip circumference and contouring flanks, this treatment combines cavitation, RF, and massage for visible shaping.",
        perfectFor: [
          "Love handles",
          "Hip bulges",
          "Hourglass shaping",
          "Post-pregnancy body refinement"
        ],
        steps: [
          "Assessment & planning",
          "Cavitation or RF therapy",
          "Lymphatic massage",
          "Final sculpting"
        ],
        beforeCare: ["Avoid alcohol or heavy meals prior to session"],
        afterCare: ["Hydrate generously", "Avoid intense exercise for 24 hrs"],
        faqs: [
          { q: "Is it safe?", a: "Yes, completely non-invasive with minimal discomfort." },
          { q: "How long do results last?", a: "With a healthy lifestyle, results can be maintained long term." }
        ],
        duration: "40–60 mins"
      }
    },
    {
      id: "body-thighs-inch-loss",
      name: "Thighs Inch Loss",
      tagline: "Slim & refine your thighs.",
      image: "/images/thighs-inch-loss.jpg",
      description: "Targeted thigh slimming & contouring treatment.",
      details: {
        about: "A specialized program that reduces inner thigh fat, tones outer thighs, and improves leg contour using combined modalities.",
        perfectFor: [
          "Inner thigh fat",
          "Outer thigh bulges",
          "Post-weight loss reshaping",
          "Mild cellulite improvement"
        ],
        steps: [
          "Consultation & marking",
          "Slimming treatment",
          "Cooling down",
          "Moisturization"
        ],
        beforeCare: ["Avoid applying heavy creams before session"],
        afterCare: ["Light walks recommended", "Stay hydrated"],
        faqs: [
          { q: "Does it reduce cellulite?", a: "Yes, it may improve mild cellulite with multiple sessions." },
          { q: "Will I lose weight?", a: "It reduces inches, not overall body weight." }
        ],
        duration: "40–60 mins"
      }
    },
    {
      id: "body-love-handle-inch-loss",
      name: "Love Handle Inch Loss",
      tagline: "Smooth your waistline & sides.",
      image: "/images/love-handle.jpg",
      description: "Focused slimming for love handles & flank region.",
      details: {
        about: "This treatment specifically targets the side waist (love handles) to create a smoother, more sculpted silhouette.",
        perfectFor: [
          "Love handles",
          "Flank bulges",
          "Refining waistline",
          "Non-surgical shaping"
        ],
        steps: [
          "Assessment & measurements",
          "Targeted cavitation & massage",
          "Cooling gel application"
        ],
        beforeCare: ["Avoid heavy meals 2 hrs before"],
        afterCare: ["Drink plenty of water", "Light stretching or walking helps circulation"],
        faqs: [
          { q: "How many sessions do I need?", a: "3–6 sessions usually provide the best results." },
          { q: "Any discomfort?", a: "Only mild warmth or tingling during treatment." }
        ],
        duration: "45–60 mins"
      }
    },
    {
      id: "body-upper-slimming",
      name: "Upper Body Slimming",
      tagline: "Comprehensive contouring for chest, arms & back.",
      image: "/images/upper-body-slimming.jpg",
      description: "Holistic upper body recontouring & inch-loss program.",
      details: {
        about: "A multi-technique program designed to slim and sculpt the upper torso, including arms, back, and chest, for a more balanced physique.",
        perfectFor: [
          "Multiple upper body fat zones",
          "Back bulges",
          "Event preparation",
          "Post-weight loss shaping"
        ],
        steps: [
          "Detailed assessment & plan",
          "Combination treatment session",
          "Final massage & aftercare"
        ],
        beforeCare: ["Initial consultation required", "Avoid heavy workouts same day"],
        afterCare: ["Follow provided home-care plan", "Maintain hydration"],
        faqs: [
          { q: "Are packages available?", a: "Yes, discounted multi-session packages are offered." },
          { q: "How soon will I see results?", a: "Visible reduction usually after 2–3 sessions." }
        ],
        duration: "60–90 mins"
      }
    },
    {
      id: "body-lower-slimming",
      name: "Lower Body Slimming",
      tagline: "Shape thighs, hips & calves.",
      image: "/images/lower-body-slimming.jpg",
      description: "Targeted slimming for the lower body.",
      details: {
        about: "A specialized slimming program for the thighs, hips, and calves, aimed at improving leg contour and reducing stubborn fat pockets.",
        perfectFor: [
          "Thigh & hip contouring",
          "Calf shaping",
          "Post-pregnancy body refinement",
          "Full lower body toning"
        ],
        steps: [
          "Measurement & planning",
          "Targeted treatments",
          "Massage & cooling gel",
          "Final review"
        ],
        beforeCare: ["Avoid strenuous leg workouts same day"],
        afterCare: ["Light activity encouraged", "Stay hydrated"],
        faqs: [
          { q: "Is it painful?", a: "Mild tingling or warmth may be felt, but it is well-tolerated." },
          { q: "Will I lose weight?", a: "It reduces inches and improves contour, not overall weight." }
        ],
        duration: "60–90 mins"
      }
    },
    {
      id: "body-fat-burn-injection",
      name: "Fat Burn Injection",
      tagline: "Clinically assisted fat reduction.",
      image: "/images/fat-burn-injection.jpg",
      description: "Medical injections to assist localized fat metabolism.",
      details: {
        about: "Under clinical supervision, safe fat-burning injections are administered to target stubborn fat deposits and accelerate metabolism in localized areas.",
        perfectFor: [
          "Stubborn fat pockets",
          "Boost to slimming treatments",
          "Non-surgical solution seekers",
          "Localized contouring"
        ],
        steps: [
          "Medical consultation & assessment",
          "Injection procedure",
          "Observation period"
        ],
        beforeCare: ["Detailed medical history required", "Avoid blood thinners if advised by doctor"],
        afterCare: ["Follow diet & hydration advice", "Mild soreness is normal for 1–2 days"],
        faqs: [
          { q: "Is it safe?", a: "Yes, when administered under professional supervision." },
          { q: "Side effects?", a: "Mild soreness or redness, which subsides quickly." }
        ],
        duration: "10–20 mins"
      },
    },
  ],
},


    {
    category: "Hair Restoration",
    about: "Combat hair fall and restore natural density with our advanced, science-backed treatments.",
    services: [
      {
        id: "hair-vit-trichology",
        name: "Vit Hair Trichology",
        tagline: "Scalp & hair health diagnostics + treatment.",
        image: "/images/vit-hair.jpg",
        description: "Trichology consultation and targeted therapies.",
        details: {
          about: "Comprehensive hair & scalp assessment plus targeted therapy.",
          perfectFor: ["Hair fall", "Scalp issues"],
          steps: ["Trichoscopy", "Treatment plan", "Therapies"],
          beforeCare: ["Shampoo 24 hrs prior"],
          afterCare: ["Follow recommended hair care"],
          faqs: [{ q: "Is it permanent?", a: "Depends on cause; plan created." }],
          duration: "45–60 mins"
        }
      },
      {
        id: "hair-prp",
        name: "Hair PRP",
        tagline: "Platelet-rich plasma for hair regrowth.",
        image: "/images/hair-prp.jpg",
        description: "PRP injections to stimulate hair follicles.",
        details: {
          about: "Uses patient’s platelets to boost hair follicle regeneration.",
          perfectFor: ["Early thinning", "Pattern baldness"],
          steps: ["Blood draw", "PRP prep", "Scalp injections"],
          beforeCare: ["Avoid aspirin 48 hrs prior", "No alcohol"],
          afterCare: ["Avoid heavy sweating 48 hrs", "Gentle shampooing after 24 hrs"],
          faqs: [{ q: "How many sessions?", a: "3–6 sessions recommended." }],
          duration: "45–90 mins"
        }
      },
      {
        id: "hair-gfc",
        name: "Hair GFC",
        tagline: "Growth factor concentrate therapy for hair.",
        image: "/images/hair-gfc.jpg",
        description: "GFC therapy to stimulate hair regrowth.",
        details: {
          about: "Advanced growth factor injections for hair stimulation.",
          perfectFor: ["Thinning hair", "Maintenance after PRP"],
          steps: ["Assessment", "Injection", "Follow-up"],
          beforeCare: ["Consultation mandatory"],
          afterCare: ["Avoid heavy heat treatments"],
          faqs: [{ q: "Better than PRP?", a: "Different tech; clinician will advise best option." }],
          duration: "45–90 mins"
        },
      },
    ],
  },


    {
  category: "Skin Rejuvenation & Polishing",
  about: "Restore skin health with peels and polishing for glowing skin.",
  services: [
    {
      id: "polish-full-body",
      name: "Full Body Polish",
      tagline: "Full body glow — choices of peel.",
      image: "/images/full-body-polish.jpg",
      description: "Full Body Polish available with multiple peel options.",
      variants: [
        { name: "Carbon Peel" },
        { name: "Lactic Peel" },
        { name: "Glycolic Peel" }
      ],
      details: {
        about: "Complete exfoliation & peel options for head-to-toe glow.",
        perfectFor: ["Full body tan", "Dull skin"],
        steps: ["Assess", "Polishing", "Peel (variant)", "Soothe"],
        beforeCare: ["Avoid sun & tanning 2 weeks prior"],
        afterCare: ["Moisturize; avoid friction 48 hrs"],
        faqs: [{ q: "Which peel is best?", a: "Depends on skin type — clinician selects." }],
        duration: "60–120 mins"
      }
    },
    {
      id: "polish-back-arms-legs",
      name: "Full Back / Arms / Legs Polish",
      tagline: "Targeted body polishing with peel options.",
      image: "/images/back-polish.jpg",
      description: "Polish for back, arms or legs; choose peel.",
      variants: [
        { name: "Carbon Peel" },
        { name: "Lactic Peel" },
        { name: "Glycolic Peel" }
      ],
      details: {
        about: "Targeted polishing for large body zones.",
        perfectFor: ["Tanning", "Texture irregularities"],
        steps: ["Cleanse", "Polish", "Peel variant", "Soothe"],
        beforeCare: ["Avoid retinol 1 week prior"],
        afterCare: ["Moisturize", "Sunscreen"],
        faqs: [{ q: "How long until results?", a: "Immediate brighter look; maintenance recommended." }],
        duration: "45–75 mins"
      }
    },
    {
      id: "detan-bikini-underarms-neck",
      name: "Bikini / Under Arms / Neck De-tan",
      tagline: "Lighten & rejuvenate sensitive zones.",
      image: "/images/bikini-rejuvenation.jpg",
      description: "De-tan options for intimate and small body areas.",
      variants: [
        { name: "Carbon Peel" },
        { name: "Lactic Peel" },
        { name: "Glycolic Peel" }
      ],
      details: {
        about: "Gentle peels & polishing for sensitive regions.",
        perfectFor: ["Pigmented underarms", "Neck tan", "Intimate area discoloration"],
        steps: ["Consult", "Polish/Peel", "Soothe"],
        beforeCare: ["Avoid waxing 2 weeks prior"],
        afterCare: ["No deodorant 24 hrs for underarms", "Avoid friction"],
        faqs: [{ q: "Is it painful?", a: "Generally mild; topical soothe used." }],
        duration: "25–45 mins"
      }
    },
    {
      id: "detan-dermabrasion-fullbody",
      name: "Skin De-Tan with Dermabrasion - Full Body",
      tagline: "Dermabrasion based full body detan.",
      image: "/images/dermabrasion-full.jpg",
      description: "Dermabrasion + polishing for full body.",
      details: {
        about: "Mechanical exfoliation + aftercare for deep de-tanning.",
        perfectFor: ["Stubborn tan", "Uneven skin tone"],
        steps: ["Assess", "Dermabrasion passes", "Soothing & mask"],
        beforeCare: ["Avoid sun & exfoliants 1 week prior"],
        afterCare: ["Gentle skincare", "Sun protection"],
        faqs: [{ q: "Downtime?", a: "Mild redness for 24–48 hrs." }],
        duration: "60–120 mins"
      }
    },
    {
      id: "detan-dermabrasion-back-arms-legs",
      name: "Skin De-Tan with Dermabrasion - Back/Arms/Legs",
      tagline: "Localized dermabrasion detan.",
      image: "/images/dermabrasion-limb.jpg",
      description: "Back/arms/legs dermabrasion.",
      details: {
        about: "Targeted dermabrasion for medium-sized areas.",
        perfectFor: ["Localized tan", "Texture improvement"],
        steps: ["Prep", "Dermabrasion", "Soothe"],
        beforeCare: ["Avoid waxing before"],
        afterCare: ["Moisturize; avoid friction"],
        faqs: [{ q: "How many sessions?", a: "May require multiple sessions for deep tan." }],
        duration: "30–60 mins"
      }
    },
    {
      id: "detan-dermabrasion-bikini-underarms-neck",
      name: "Skin De-Tan with Dermabrasion - Bikini/Under Arms/Neck",
      tagline: "Small-area dermabrasion detan.",
      image: "/images/neck-detan.jpg",
      description: "Dermabrasion for sensitive small areas.",
      details: {
        about: "Dermabrasion tailored to small, sensitive zones.",
        perfectFor: ["Neck tan", "Underarm pigmentation"],
        steps: ["Assessment", "Dermabrasion", "Aftercare"],
        beforeCare: ["Avoid deodorant / creams 24 hrs prior"],
        afterCare: ["Avoid friction & heat"],
        faqs: [{ q: "Pain?", a: "Minimal; topical soothing applied." }],
        duration: "20–40 mins"
      },
    },
  ],
},

    {
  category: "Chemical Peels",
  about: "Supervised chemical peels for targeted skin concerns.",
  services: [
    {
      id: "peel-glycolic",
      name: "Full Face Glycolic Peel",
      tagline: "Surface renewal & brightness.",
      image: "/images/peel-glycolic.jpg",
      description: "Glycolic peel for skin texture & glow.",
      details: {
        about: "AHA-based chemical peel to improve texture and brightness.",
        perfectFor: ["Dull skin", "Fine lines"],
        steps: ["Cleanse", "Apply peel", "Neutralize & soothe"],
        beforeCare: ["Avoid retinoids 1 week prior"],
        afterCare: ["Sunscreen mandatory", "Avoid exfoliants 1 week"],
        faqs: [{ q: "Peel strength?", a: "Customizable per skin type." }],
        duration: "20–30 mins"
      }
    },
    {
      id: "peel-salicylic",
      name: "Full Face Salicylic Peel",
      tagline: "Oil control & acne-friendly peel.",
      image: "/images/peel-salicylic.jpg",
      description: "BHA peel for oily & acne-prone skin.",
      details: {
        about: "Salicylic acid peel to unclog pores and reduce oiliness.",
        perfectFor: ["Acne-prone skin", "Blackheads"],
        steps: ["Cleanse", "Apply salicylic peel", "Neutralize"],
        beforeCare: ["Avoid waxing/strong exfoliants"],
        afterCare: ["Gentle skincare; sunscreen"],
        faqs: [{ q: "Will it purge skin?", a: "Some purging may occur initially." }],
        duration: "20–30 mins"
      }
    },
    {
      id: "peel-mandelic-under-eye",
      name: "Under Eye Mandelic Peel",
      tagline: "Gentle brightening for under-eye.",
      image: "/images/peel-under-eye.jpg",
      description: "Mild mandelic peel for under-eye area.",
      details: {
        about: "Gentle peel for delicate under eye skin to reduce pigmentation.",
        perfectFor: ["Dark circles due to pigmentation"],
        steps: ["Assess", "Apply peel carefully", "Neutralize"],
        beforeCare: ["Avoid heavy eye creams 24 hrs prior"],
        afterCare: ["No rubbing; moisturize lightly"],
        faqs: [{ q: "Safe?", a: "Yes, when performed by trained professional." }],
        duration: "15–25 mins"
      }
    },
    {
      id: "peel-mandelic-perioral",
      name: "Perioral (Monkey Mouth) Mandelic Peel",
      tagline: "Brighten perioral area.",
      image: "/images/peel-perioral.jpg",
      description: "Targeted mild peel around mouth.",
      details: {
        about: "Corrects perioral pigmentation & texture.",
        perfectFor: ["Pigmented perioral area"],
        steps: ["Cleanse", "Peel", "Soothe"],
        beforeCare: ["Avoid heavy lip products 24 hrs prior"],
        afterCare: ["Use gentle balm"],
        faqs: [{ q: "Number of sessions?", a: "3–4 sessions for best results." }],
        duration: "15–30 mins"
      }
    },
    {
      id: "peel-lactic",
      name: "Full Face Lactic Peel",
      tagline: "Gentle AHA peel for hydration & brightness.",
      image: "/images/peel-lactic.jpg",
      description: "Hydrating lactic acid peel.",
      details: {
        about: "Mild AHA peel that exfoliates while hydrating.",
        perfectFor: ["Dry/sensitive skin", "Pigmentation"],
        steps: ["Cleanse", "Apply lactic peel", "Neutralize"],
        beforeCare: ["Avoid retinol 48–72 hrs prior"],
        afterCare: ["Hydrate & apply sunscreen"],
        faqs: [{ q: "Good for sensitive skin?", a: "Yes, at lower strengths." }],
        duration: "20–30 mins"
      }
    },
    {
      id: "peel-retinol-yellow",
      name: "Retinol / Yellow Peel",
      tagline: "Stronger peel for advanced skin concerns.",
      image: "/images/peel-retinol.jpg",
      description: "Retinol / Yellow peel for deeper correction.",
      details: {
        about: "Medium depth peel for pigmentation & texture issues.",
        perfectFor: ["Hyperpigmentation", "Sun-damaged skin"],
        steps: ["Consult", "Apply peel", "Post-peel care"],
        beforeCare: ["Avoid retinoids prior; follow pre-peel protocol"],
        afterCare: ["Strict sun protection & follow instructions"],
        faqs: [{ q: "Downtime?", a: "Some peeling for several days possible." }],
        duration: "30–40 mins"
      },
    },
  ],
},


    {
  category: "Injectable Treatments",
  about: "Clinician-delivered injectable therapies and IV treatments.",
  services: [
    {
      id: "inject-face-prp",
      name: "Face PRP",
      tagline: "Platelet therapy for skin rejuvenation.",
      image: "/images/face-prp.jpg",
      description: "PRP injections to boost facial skin quality.",
      details: {
        about: "Uses patient platelet-rich plasma to stimulate collagen.",
        perfectFor: ["Dull skin", "Fine lines"],
        steps: ["Blood draw", "PRP prep", "Microinjections"],
        beforeCare: ["Avoid blood thinners as advised"],
        afterCare: ["Mild redness possible", "Avoid heavy makeup 24 hrs"],
        faqs: [
          {
            q: "Results duration?",
            a: "Improvement over months; maintenance advised."
          }
        ],
        duration: "45–60 mins"
      }
    },
    {
      id: "inject-face-gfc",
      name: "Face GFC",
      tagline: "Growth factor concentrate for face.",
      image: "/images/face-gfc.jpg",
      description: "GFC injections to rejuvenate skin.",
      details: {
        about: "Advanced growth-factor therapy for facial rejuvenation.",
        perfectFor: ["Aging skin", "Post-acne scars"],
        steps: ["Consult", "Injection", "Aftercare"],
        beforeCare: ["Clinician assessment needed"],
        afterCare: ["Hydrate & sunscreen"],
        faqs: [
          {
            q: "How soon results?",
            a: "Gradual improvement in weeks."
          }
        ],
        duration: "45–60 mins"
      }
    },
    {
      id: "inject-glutathione-600",
      name: "Glutathione IV (600mg)",
      tagline: "IV glutathione for antioxidant boost.",
      image: "/images/glutathione-600.jpg",
      description: "600mg IV glutathione infusion.",
      details: {
        about: "IV antioxidant therapy under medical supervision.",
        perfectFor: ["Glow & detox support"],
        steps: ["Pre-checks", "IV infusion", "Observation"],
        beforeCare: ["Hydration advised", "Disclose medical history"],
        afterCare: ["Rest briefly after infusion"],
        faqs: [
          {
            q: "Any side effects?",
            a: "Rare nausea or lightheadedness."
          }
        ],
        duration: "30–45 mins"
      }
    },
    {
      id: "inject-glutathione-1800",
      name: "Glutathione IV (1800mg)",
      tagline: "Higher-dose IV antioxidant therapy.",
      image: "/images/glutathione-1800.jpg",
      description: "1800mg IV glutathione infusion for stronger effect.",
      details: {
        about: "Higher dose infusion for intensive antioxidant support.",
        perfectFor: ["Strong detox needs", "Skin brightening regimens"],
        steps: ["Pre-checks", "IV infusion", "Observation"],
        beforeCare: ["Medical screening required"],
        afterCare: ["Rest & hydrate"],
        faqs: [
          {
            q: "Need medical clearance?",
            a: "Yes, must disclose full medical history."
          }
        ],
        duration: "45–60 mins"
      },
    },
  ],
},

  ]
};

export default servicesData;
