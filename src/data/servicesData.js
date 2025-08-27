// src/data/servicesData.js
const servicesData = {
  categories: [
    {
      category: "Unwanted Hair",
      about: "Safe and effective laser treatments for long-term hair reduction.",
      services: [
        { id: "lhr-full-body", name: "Full Body Laser Hair Reduction", price: 5999, tagline: "Permanent reduction of unwanted body hair.", image: "/images/full-body-laser.jpg", description: "Full body diode laser sessions for long-term hair reduction.", details: {
            about: "Laser treatment to reduce unwanted hair growth across the body.",
            perfectFor: ["Anyone seeking long-term hair reduction", "Multiple body areas"],
            steps: ["Skin assessment", "Shave & prep area", "Diode laser passes", "Cooling & soothe"],
            beforeCare: ["Avoid waxing 4 weeks before", "Shave day before session"],
            afterCare: ["Avoid sun for 48 hrs","Apply aloe vera if irritated"],
            faqs: [{ q: "How many sessions?", a: "Usually 6–8 sessions depending on hair & skin." }],
            duration: "30–90 mins"
          }
        },
        { id: "lhr-full-face", name: "Full Face LHR", price: 1999, tagline: "Complete facial hair reduction.", image: "/images/full-face-laser.jpg", description: "Face-wide laser hair reduction.", details: {
            about: "Targeted treatment for forehead, cheeks, sideburns, chin.",
            perfectFor: ["Unwanted facial hair", "Hirsutism"],
            steps: ["Cleansing", "Laser passes", "Soothing gel"],
            beforeCare: ["Avoid bleaching/waxing 4 weeks prior"],
            afterCare: ["Use sunscreen", "No heavy makeup 24 hrs"],
            faqs: [{ q: "Pain level?", a: "Mild - cooling reduces discomfort." }],
            duration: "20–45 mins"
          }
        },
        { id: "lhr-upperlower-face", name: "Upper Face / Lower Face LHR", price: 1499, tagline: "Quick sessions for upper/lower face.", image: "/images/face-laser.jpg", description: "Upper face or lower face selective laser.", details: {
            about: "Focused sessions on upper or lower face areas.",
            perfectFor: ["Small, stubborn areas", "Quick touch-ups"],
            steps: ["Prep", "Laser", "Cool"],
            beforeCare: ["Shave if directed"],
            afterCare: ["Avoid hot showers 24 hrs"],
            faqs: [{ q: "Can it be combined?", a: "Yes, combine with full face packages." }],
            duration: "15–25 mins"
          } 
        },
        { id: "lhr-upperlip-chin", name: "Upper Lip & Chin LHR", price: 999, tagline: "Fast treatment for upper lip & chin.", image: "/images/upper-lip-chin.jpg", description: "Quick and effective upper lip & chin hair removal.", details: {
            about: "Short sessions, targeted to small facial areas.",
            perfectFor: ["Upper lip hair", "Chin fuzz"],
            steps: ["Cleanse","Laser pulses","Soothe"],
            beforeCare: ["No waxing 4 weeks prior"],
            afterCare: ["Don't exfoliate the area for 48 hrs"],
            faqs: [{ q: "Is this permanent?", a: "It greatly reduces hair growth; maintenance may be required." }],
            duration: "10–15 mins"
          }
        },
        { id: "lhr-side-locks", name: "Side Locks LHR", price: 999, tagline: "Remove sideburns & facial hair.", image: "/images/side-locks.jpg", description: "Sideburn and temple area laser.", details: {
            about: "Sculpting & hair removal focused on side locks.",
            perfectFor: ["Sideburn shaping","Temple hair"],
            steps: ["Assess","Laser","Cool"],
            beforeCare: ["Shave if needed"],
            afterCare: ["Mild moisturizer if dry"],
            faqs: [{ q: "Will it scar?", a: "No, when performed correctly it is safe." }],
            duration: "10–15 mins"
          }
        },
        { id: "lhr-underarms", name: "Underarms LHR", price: 999, tagline: "Long lasting underarm hair reduction.", image: "/images/underarms-laser.jpg", description: "Underarm hair removal with diode laser.", details: {
            about: "Efficient removal for underarm hair and reduction of regrowth.",
            perfectFor: ["Underarm fuzz", "Pigmentation due to shaving"],
            steps: ["Shave area","Laser passes","Soothe gel"],
            beforeCare: ["Avoid deodorants on day of treatment"],
            afterCare: ["Avoid deodorant 24 hrs","Wear loose clothing"],
            faqs: [{ q: "Staining or darkening?", a: "Pigmentation may lighten over sessions." }],
            duration: "8–15 mins"
          }
        },
        { id: "lhr-bikini-line", name: "Bikini Line LHR", price: 1499, tagline: "Clean bikini line with long-term results.", image: "/images/bikini-laser.jpg", description: "Laser for bikini line shaping & reduction.", details: {
            about: "Safe laser for bikini line and sensitive areas.",
            perfectFor: ["Swimsuit-ready confidence", "Pigmentation improvement"],
            steps: ["Consent & prep","Laser with lower energy in sensitive zones","Cool & soothe"],
            beforeCare: ["Avoid waxing 4 weeks prior","Shave 24 hrs before"],
            afterCare: ["Avoid hot tubs 48 hrs"],
            faqs: [{ q: "Is it painful?", a: "Mild discomfort; topical cooling applied." }],
            duration: "15–25 mins"
          }
        },
        { id: "lhr-full-front", name: "Full Front LHR", price: 1999, tagline: "Front body hair reduction.", image: "/images/full-front.jpg", description: "Chest/abdomen/front body hair treatment.", details: {
            about: "Laser passes on front torso & chest areas.",
            perfectFor: ["Chest hair reduction","Stomach hair"],
            steps: ["Assess","Laser","Cool"],
            beforeCare: ["Shave day before"],
            afterCare: ["Moisturize; avoid scrub 48 hrs"],
            faqs: [{ q: "How many sessions?", a: "6–8 usually recommended." }],
            duration: "30–45 mins"
          }
        },
        { id: "lhr-full-back", name: "Full Back LHR", price: 1999, tagline: "Back hair removal & smoothing.", image: "/images/full-back-laser.jpg", description: "Laser for entire back area.", details: {
            about: "Full back hair reduction for smooth results.",
            perfectFor: ["Back hair", "Shoulders"],
            steps: ["Prep","Laser passes","Soothe"],
            beforeCare: ["Shave if possible"],
            afterCare: ["Avoid heavy sweating 24 hrs"],
            faqs: [{ q: "Any scarring risk?", a: "Low when done by trained staff." }],
            duration: "30–60 mins"
          }
        },
        { id: "lhr-full-arms", name: "Full Arms LHR", price: 1999, tagline: "Smooth, hair-reduced arms.", image: "/images/full-arms.jpg", description: "Arms hair reduction sessions.", details: {
            about: "From shoulders to wrists; long-term hair reduction.",
            perfectFor: ["Sparse to dense arm hair"],
            steps: ["Prep","Laser","Cool"],
            beforeCare: ["No waxing 4 weeks prior"],
            afterCare: ["Moisturize; avoid friction"],
            faqs: [{ q: "How many sessions?", a: "Depends on hair type; usually 6–8." }],
            duration: "20–40 mins"
          }
        },
        { id: "lhr-full-legs", name: "Full Legs LHR", price: 2499, tagline: "Legs hair reduction for months of smooth skin.", image: "/images/full-legs.jpg", description: "Full legs hair reduction package.", details: {
            about: "Full legs treatment for long-term reduction.",
            perfectFor: ["Active lifestyles","Swimwear readiness"],
            steps: ["Shave","Laser","Cool"],
            beforeCare: ["Shave day before, avoid tanning"],
            afterCare: ["Avoid sun 48 hrs"],
            faqs: [{ q: "Is it suitable for all skin tones?", a: "Device settings adjusted per skin tone." }],
            duration: "45–90 mins"
          }
        }
      ]
    },

    {
      category: "Advanced Facials",
      about: "Customized facials designed to target acne, brighten dull skin, and provide deep hydration.",
      services: [
        { id: "facial-derma-revive", name: "Derma Revive Facial", price: 2999, tagline: "Revive tired skin with deep hydration.", image: "/images/derma-revive.jpg", description: "Multi-step facial to hydrate & revive.", details: {
            about: "Targets dullness and uneven texture with potent hydrators.",
            perfectFor: ["Dry skin","Dull complexion"],
            steps: ["Cleanse","Exfoliate","Hydration infusion","Mask"],
            beforeCare: ["Avoid retinoids 3 days prior"],
            afterCare: ["Use gentle cleanser","Sunscreen daily"],
            faqs: [{ q: "Number of sessions?", a: "Monthly maintenance recommended." }],
            duration: "60–75 mins"
          }
        },
        { id: "facial-korean", name: "Korean Facial", price: 3499, tagline: "Glass-skin hydration & glow.", image: "/images/korean-facial.jpg", description: "Brightens skin, reduces pigmentation, gives a glass-skin effect.", details: {
            about: "An advanced Korean facial that deeply hydrates and brightens skin.",
            perfectFor: ["Pigmentation","Texture improvement"],
            steps: ["Multistep cleansing","Hydration infusion","Rejuvenation masks"],
            beforeCare: ["Avoid chemical peels 2 weeks prior"],
            afterCare: ["Avoid sun","Use moisturizer and sunscreen"],
            faqs: [{ q: "Safe for sensitive skin?", a: "Yes, customizable for sensitivity." }],
            duration: "70–90 mins"
          }
        },
        { id: "facial-acne-arrestor", name: "Acne Arrestor Facial", price: 2499, tagline: "Calms acne & clogged pores.", image: "/images/acne-facial.jpg", description: "Targets acne and clogged pores while soothing skin.", details: {
            about: "Designed to reduce active acne and soothe inflammation.",
            perfectFor: ["Active acne","Oily skin"],
            steps: ["Deep cleanse","Exfoliation","Acne-safe actives","Soothing mask"],
            beforeCare: ["Avoid heavy topical treatments 48 hrs prior"],
            afterCare: ["Use gentle skincare; avoid picking"],
            faqs: [{ q: "Does it remove scars?", a: "Active acne reduces; scars need targeted sessions." }],
            duration: "50–70 mins"
          }
        },
        { id: "facial-quick-fix", name: "Quick Fix Radiance Facial", price: 2999, tagline: "Instant glow for events.", image: "/images/quick-fix.jpg", description: "Fast brightening treatment pre-event.", details: {
            about: "Express facial for quick radiance.",
            perfectFor: ["Event-ready skin","Last-minute glow"],
            steps: ["Cleanse","Exfoliate","Sheet mask"],
            beforeCare: ["No special prep"],
            afterCare: ["Hydrate well"],
            faqs: [{ q: "How long does glow last?", a: "A few days to a week depending on skin care." }],
            duration: "30–40 mins"
          }
        },
        { id: "facial-insta-collagen", name: "Insta Collagen Boost Facial", price: 2999, tagline: "Plumps skin with collagen stimulation.", image: "/images/collagen-boost.jpg", description: "Collagen stimulating facial for elasticity.", details: {
            about: "Stimulates collagen to reduce fine lines and plump skin.",
            perfectFor: ["Aging skin","Fine lines"],
            steps: ["Cleanse","Collagen infusion","Massage","Mask"],
            beforeCare: ["Avoid retinoids for 48 hrs"],
            afterCare: ["Hydrate & sunscreen"],
            faqs: [{ q: "Immediate results?", a: "Mild improvement; cumulative with sessions." }],
            duration: "50–70 mins"
          }
        },
        { id: "facial-hydra-boost", name: "Hydra Boost Facial", price: 2499, tagline: "Deep hydration & soothing.", image: "/images/hydra-boost.jpg", description: "Hydrating facial for thirsty skin.", details: {
            about: "Deep infusion of hydrators to restore moisture levels.",
            perfectFor: ["Dehydrated skin","Post-sun care"],
            steps: ["Hydrating cleanse","Serum infusion","Soothing mask"],
            beforeCare: ["Avoid exfoliating 3 days prior"],
            afterCare: ["Keep skin moisturized"],
            faqs: [{ q: "Is it oily?", a: "No, balanced hydrating formulas are used." }],
            duration: "45–60 mins"
          }
        },
        { id: "facial-double-derma-boost", name: "Double Derma Boost Facial", price: 2999, tagline: "Dual-action rejuvenation.", image: "/images/double-derma.jpg", description: "Two-step facial for advanced rejuvenation.", details: {
            about: "Combines exfoliation + infusion for brighter skin.",
            perfectFor: ["Texture issues","Pigmentation"],
            steps: ["Exfoliate","Infusion","Mask"],
            beforeCare: ["Avoid strong topical actives 72 hrs prior"],
            afterCare: ["Sun protection essential"],
            faqs: [{ q: "Downtime?", a: "None — mild redness possible." }],
            duration: "60–80 mins"
          }
        },
        { id: "facial-elastic-boost", name: "Elastic Boost Facial", price: 2999, tagline: "Firmness & elasticity restoration.", image: "/images/elastic-boost.jpg", description: "Targets sagging skin & loss of elasticity.", details: {
            about: "Firming facial with peptides and massage.",
            perfectFor: ["Loss of firmness","Mature skin"],
            steps: ["Cleanse","Peptide infusion","Firming massage"],
            beforeCare: ["Avoid heavy peels 2 weeks prior"],
            afterCare: ["Moisturize & SPF"],
            faqs: [{ q: "How many sessions?", a: "3–6 sessions for best effect." }],
            duration: "50–70 mins"
          }
        },
        { id: "facial-couple-laser", name: "Couple Laser Facial", price: 3499, tagline: "Treat together — skin sync radiance.", image: "/images/couple-laser.jpg", description: "Laser-based facial suitable for two people together.", details: {
            about: "A relaxing laser facial for two; same benefits as single sessions with couple discounts.",
            perfectFor: ["Couples","Friends prepping for event"],
            steps: ["Consult","Laser facial","Soothe"],
            beforeCare: ["Both avoid tanning 2 weeks prior"],
            afterCare: ["Sunscreen & hydration"],
            faqs: [{ q: "Is it same outcome for both?", a: "Yes, but treatment tuned per skin." }],
            duration: "60–90 mins"
          }
        }
      ]
    },

    {
      category: "Body Contouring",
      about: "Non-surgical inch loss and slimming treatments designed to shape and tone.",
      services: [
        { id: "body-kb-slimming", name: "KB Slimming Facial", price: 1999, tagline: "Slimming for targeted areas.", image: "/images/kb-slimming.jpg", description: "Localised slimming facial for small zones.", details: {
            about: "Targeted fat reduction using topical and machine-assisted methods.",
            perfectFor: ["Localized bulges","Pre-event shaping"],
            steps: ["Assessment","Slimming machine","Massage"],
            beforeCare: ["Avoid heavy meals 2 hrs prior"],
            afterCare: ["Drink water","Avoid heavy exercise 24 hrs"],
            faqs: [{ q: "Non-surgical?", a: "Yes, non-invasive techniques." }],
            duration: "30–45 mins"
          }
        },
        { id: "body-abdomen-inch-loss", name: "Abdomen Inch Loss", price: 2999, tagline: "Reduce waist inches safely.", image: "/images/abdomen-inch-loss.jpg", description: "Fat melting & inch loss for abdomen.", details: {
            about: "Procedures combining massage, cavitation & topical actives to reduce inches.",
            perfectFor: ["Post-weight loss shaping","Pregnancy-related changes"],
            steps: ["Measure","Treatment","Measure again"],
            beforeCare: ["Avoid heavy meals"],
            afterCare: ["Hydrate; light activity recommended"],
            faqs: [{ q: "How many sessions?", a: "3–6 sessions usually." }],
            duration: "45–60 mins"
          }
        },
        { id: "body-arms-inch-loss", name: "Arms Inch Loss", price: 2999, tagline: "Tone & reduce arm circumference.", image: "/images/arms-inch-loss.jpg", description: "Slimming for arms.", details: {
            about: "Targeted inch loss for upper/lower arms.",
            perfectFor: ["Flabby arms","Toning"],
            steps: ["Assessment","Treatment","Massage"],
            beforeCare: ["No heavy exercise right before"],
            afterCare: ["Moisturize","Exercise lightly"],
            faqs: [{ q: "Visible results?", a: "Improves with multiple sessions & home care." }],
            duration: "30–45 mins"
          }
        },
        { id: "body-hips-inch-loss", name: "Hips Inch Loss", price: 2999, tagline: "Sculpt the hip area.", image: "/images/hips-inch-loss.jpg", description: "Hip contouring & inch-loss treatments.", details: {
            about: "Non-surgical sculpting for hips and flanks.",
            perfectFor: ["Hourglass shaping","Love handles"],
            steps: ["Assess","Cavitation/Radiofrequency","Massage"],
            beforeCare: ["Avoid alcohol before session"],
            afterCare: ["Hydrate well"],
            faqs: [{ q: "Any downtime?", a: "Minimal; some soreness possible." }],
            duration: "40–60 mins"
          }
        },
        { id: "body-thighs-inch-loss", name: "Thighs Inch Loss", price: 2999, tagline: "Slim thighs & reduce circumference.", image: "/images/thighs-inch-loss.jpg", description: "Focused thigh slimming.", details: {
            about: "Combines modalities to reduce thigh fat pockets.",
            perfectFor: ["Inner thigh fat","Booty reshaping"],
            steps: ["Consult","Treatment","Cool down"],
            beforeCare: ["Avoid heavy creams before"],
            afterCare: ["Gentle walks recommended"],
            faqs: [{ q: "Will it affect cellulite?", a: "It may reduce the appearance with multiple sessions." }],
            duration: "40–60 mins"
          }
        },
        { id: "body-love-handle-inch-loss", name: "Love Handle Inch Loss", price: 2999, tagline: "Target side fat & love handles.", image: "/images/love-handle.jpg", description: "Focused slimming for flank region.", details: {
            about: "Machine + manual techniques to reduce flanks.",
            perfectFor: ["Love handles","Waist contour"],
            steps: ["Assessment","Treatment","Sculpt massage"],
            beforeCare: ["Avoid heavy meals"],
            afterCare: ["Hydration & light activity"],
            faqs: [{ q: "How many sessions?", a: "3–6 depending on starting point." }],
            duration: "45 mins"
          }
        },
        { id: "body-upper-slimming", name: "Upper Body Slimming", price: 4999, tagline: "Comprehensive upper body contouring.", image: "/images/upper-body-slimming.jpg", description: "Upper torso slimming program.", details: {
            about: "Holistic program for upper body recontouring.",
            perfectFor: ["Multiple zones","Comprehensive results"],
            steps: ["Plan","Multi-technique session","Aftercare"],
            beforeCare: ["Consultation required"],
            afterCare: ["Follow home-care plan"],
            faqs: [{ q: "Packages available?", a: "Yes, enquire for multi-session packages." }],
            duration: "60–90 mins"
          }
        },
        { id: "body-lower-slimming", name: "Lower Body Slimming", price: 4999, tagline: "Lower body inch-loss program.", image: "/images/lower-body-slimming.jpg", description: "Lower body targeted slimming package.", details: {
            about: "Includes thighs, hips, calves as needed.",
            perfectFor: ["Leg & hip contouring"],
            steps: ["Measure & plan","Treatment","Review"],
            beforeCare: ["Avoid heavy workouts same day"],
            afterCare: ["Hydrate & light walk"],
            faqs: [{ q: "Is it painful?", a: "Mild discomfort possible." }],
            duration: "60–90 mins"
          }
        },
        { id: "body-fat-burn-injection", name: "Fat Burn Injection", price: 4999, tagline: "Injection-assisted fat metabolism boost.", image: "/images/fat-burn-injection.jpg", description: "Injectable aid to help fat metabolism.", details: {
            about: "Medical injections under supervision to assist fat reduction.",
            perfectFor: ["Localized stubborn fat","Boost therapy"],
            steps: ["Consult","Injection","Observation"],
            beforeCare: ["Medical history review required"],
            afterCare: ["Follow diet & hydration advice"],
            faqs: [{ q: "Side effects?", a: "Possible soreness or redness; clinician will explain." }],
            duration: "10–20 mins"
          }
        }
      ]
    },

    {
      category: "Hair Restoration",
      about: "Combat hair fall and restore natural density with our advanced, science-backed treatments.",
      services: [
        { id: "hair-vit-trichology", name: "Vit Hair Trichology", price: 2999, tagline: "Scalp & hair health diagnostics + treatment.", image: "/images/vit-hair.jpg", description: "Trichology consultation and targeted therapies.", details: {
            about: "Comprehensive hair & scalp assessment plus targeted therapy.",
            perfectFor: ["Hair fall","Scalp issues"],
            steps: ["Trichoscopy","Treatment plan","Therapies"],
            beforeCare: ["Shampoo 24 hrs prior"],
            afterCare: ["Follow recommended hair care"],
            faqs: [{ q: "Is it permanent?", a: "Depends on cause; plan created." }],
            duration: "45–60 mins"
          }
        },
        { id: "hair-prp", name: "Hair PRP", price: 4555, tagline: "Platelet-rich plasma for hair regrowth.", image: "/images/hair-prp.jpg", description: "PRP injections to stimulate hair follicles.", details: {
            about: "Uses patient’s platelets to boost hair follicle regeneration.",
            perfectFor: ["Early thinning","Pattern baldness"],
            steps: ["Blood draw","PRP prep","Scalp injections"],
            beforeCare: ["Avoid aspirin 48 hrs prior","No alcohol"],
            afterCare: ["Avoid heavy sweating 48 hrs","Gentle shampooing after 24 hrs"],
            faqs: [{ q: "How many sessions?", a: "3–6 sessions recommended." }],
            duration: "45–90 mins"
          }
        },
        { id: "hair-gfc", name: "Hair GFC", price: 5555, tagline: "Growth factor concentrate therapy for hair.", image: "/images/hair-gfc.jpg", description: "GFC therapy to stimulate hair regrowth.", details: {
            about: "Advanced growth factor injections for hair stimulation.",
            perfectFor: ["Thinning hair","Maintenance after PRP"],
            steps: ["Assessment","Injection","Follow-up"],
            beforeCare: ["Consultation mandatory"],
            afterCare: ["Avoid heavy heat treatments"],
            faqs: [{ q: "Better than PRP?", a: "Different tech; clinician will advise best option." }],
            duration: "45–90 mins"
          }
        }
      ]
    },

    {
      category: "Skin Rejuvenation & Polishing",
      about: "Restore skin health with peels and polishing for glowing skin.",
      services: [
        { id: "polish-full-body", name: "Full Body Polish", price: 5999, tagline: "Full body glow — choices of peel.", image: "/images/full-body-polish.jpg", description: "Full Body Polish available with multiple peel options.", variants: [
            { name: "Carbon Peel", price: 7999 },
            { name: "Lactic Peel", price: 5999 },
            { name: "Glycolic Peel", price: 5999 }
          ], details: {
            about: "Complete exfoliation & peel options for head-to-toe glow.",
            perfectFor: ["Full body tan","Dull skin"],
            steps: ["Assess","Polishing","Peel (variant)","Soothe"],
            beforeCare: ["Avoid sun & tanning 2 weeks prior"],
            afterCare: ["Moisturize; avoid friction 48 hrs"],
            faqs: [{ q: "Which peel is best?", a: "Depends on skin type — clinician selects." }],
            duration: "60–120 mins"
          }
        },
        { id: "polish-back-arms-legs", name: "Full Back / Arms / Legs Polish", price: 2999, tagline: "Targeted body polishing with peel options.", image: "/images/back-polish.jpg", variants: [
            { name: "Carbon Peel", price: 2999 },
            { name: "Lactic Peel", price: 2999 },
            { name: "Glycolic Peel", price: 2999 }
          ], description: "Polish for back, arms or legs; choose peel.", details: {
            about: "Targeted polishing for large body zones.",
            perfectFor: ["Tanning","Texture irregularities"],
            steps: ["Cleanse","Polish","Peel variant","Soothe"],
            beforeCare: ["Avoid retinol 1 week prior"],
            afterCare: ["Moisturize","Sunscreen"],
            faqs: [{ q: "How long until results?", a: "Immediate brighter look; maintenance recommended." }],
            duration: "45–75 mins"
          }
        },
        { id: "detan-bikini-underarms-neck", name: "Bikini / Under Arms / Neck De-tan", price: 2999, tagline: "Lighten & rejuvenate sensitive zones.", image: "/images/bikini-rejuvenation.jpg", variants: [
            { name: "Carbon Peel", price: 2999 },
            { name: "Lactic Peel", price: 2999 },
            { name: "Glycolic Peel", price: 2999 }
          ], description: "De-tan options for intimate and small body areas.", details: {
            about: "Gentle peels & polishing for sensitive regions.",
            perfectFor: ["Pigmented underarms","Neck tan","Intimate area discoloration"],
            steps: ["Consult","Polish/Peel","Soothe"],
            beforeCare: ["Avoid waxing 2 weeks prior"],
            afterCare: ["No deodorant 24 hrs for underarms","Avoid friction"],
            faqs: [{ q: "Is it painful?", a: "Generally mild; topical soothe used." }],
            duration: "25–45 mins"
          }
        },
        { id: "detan-dermabrasion-fullbody", name: "Skin De-Tan with Dermabrasion - Full Body", price: 3999, tagline: "Dermabrasion based full body detan.", image: "/images/dermabrasion-full.jpg", description: "Dermabrasion + polishing for full body.", details: {
            about: "Mechanical exfoliation + aftercare for deep de-tanning.",
            perfectFor: ["Stubborn tan","Uneven skin tone"],
            steps: ["Assess","Dermabrasion passes","Soothing & mask"],
            beforeCare: ["Avoid sun & exfoliants 1 week prior"],
            afterCare: ["Gentle skincare","Sun protection"],
            faqs: [{ q: "Downtime?", a: "Mild redness for 24–48 hrs." }],
            duration: "60–120 mins"
          }
        },
        { id: "detan-dermabrasion-back-arms-legs", name: "Skin De-Tan with Dermabrasion - Back/Arms/Legs", price: 1999, tagline: "Localized dermabrasion detan.", image: "/images/dermabrasion-limb.jpg", description: "Back/arms/legs dermabrasion.", details: {
            about: "Targeted dermabrasion for medium-sized areas.",
            perfectFor: ["Localized tan","Texture improvement"],
            steps: ["Prep","Dermabrasion","Soothe"],
            beforeCare: ["Avoid waxing before"],
            afterCare: ["Moisturize; avoid friction"],
            faqs: [{ q: "How many sessions?", a: "May require multiple sessions for deep tan." }],
            duration: "30–60 mins"
          }
        },
        { id: "detan-dermabrasion-bikini-underarms-neck", name: "Skin De-Tan with Dermabrasion - Bikini/Under Arms/Neck", price: 1999, tagline: "Small-area dermabrasion detan.", image: "/images/neck-detan.jpg", description: "Dermabrasion for sensitive small areas.", details: {
            about: "Dermabrasion tailored to small, sensitive zones.",
            perfectFor: ["Neck tan","Underarm pigmentation"],
            steps: ["Assessment","Dermabrasion","Aftercare"],
            beforeCare: ["Avoid deodorant / creams 24 hrs prior"],
            afterCare: ["Avoid friction & heat"],
            faqs: [{ q: "Pain?", a: "Minimal; topical soothing applied." }],
            duration: "20–40 mins"
          }
        }
      ]
    },

    {
      category: "Chemical Peels",
      about: "Supervised chemical peels for targeted skin concerns.",
      services: [
        { id: "peel-glycolic", name: "Full Face Glycolic Peel", price: 1799, tagline: "Surface renewal & brightness.", image: "/images/peel-glycolic.jpg", description: "Glycolic peel for skin texture & glow.", details: {
            about: "AHA-based chemical peel to improve texture and brightness.",
            perfectFor: ["Dull skin","Fine lines"],
            steps: ["Cleanse","Apply peel","Neutralize & soothe"],
            beforeCare: ["Avoid retinoids 1 week prior"],
            afterCare: ["Sunscreen mandatory","Avoid exfoliants 1 week"],
            faqs: [{ q: "Peel strength?", a: "Customizable per skin type." }],
            duration: "20–30 mins"
          }
        },
        { id: "peel-salicylic", name: "Full Face Salicylic Peel", price: 1799, tagline: "Oil control & acne-friendly peel.", image: "/images/peel-salicylic.jpg", description: "BHA peel for oily & acne-prone skin.", details: {
            about: "Salicylic acid peel to unclog pores and reduce oiliness.",
            perfectFor: ["Acne-prone skin","Blackheads"],
            steps: ["Cleanse","Apply salicylic peel","Neutralize"],
            beforeCare: ["Avoid waxing/strong exfoliants"],
            afterCare: ["Gentle skincare; sunscreen"],
            faqs: [{ q: "Will it purge skin?", a: "Some purging may occur initially." }],
            duration: "20–30 mins"
          }
        },
        { id: "peel-mandelic-under-eye", name: "Under Eye Mandelic Peel", price: 1799, tagline: "Gentle brightening for under-eye.", image: "/images/peel-under-eye.jpg", description: "Mild mandelic peel for under-eye area.", details: {
            about: "Gentle peel for delicate under eye skin to reduce pigmentation.",
            perfectFor: ["Dark circles due to pigmentation"],
            steps: ["Assess","Apply peel carefully","Neutralize"],
            beforeCare: ["Avoid heavy eye creams 24 hrs prior"],
            afterCare: ["No rubbing; moisturize lightly"],
            faqs: [{ q: "Safe?", a: "Yes, when performed by trained professional." }],
            duration: "15–25 mins"
          }
        },
        { id: "peel-mandelic-perioral", name: "Perioral (Monkey Mouth) Mandelic Peel", price: 1799, tagline: "Brighten perioral area.", image: "/images/peel-perioral.jpg", description: "Targeted mild peel around mouth.", details: {
            about: "Corrects perioral pigmentation & texture.",
            perfectFor: ["Pigmented perioral area"],
            steps: ["Cleanse","Peel","Soothe"],
            beforeCare: ["Avoid heavy lip products 24 hrs prior"],
            afterCare: ["Use gentle balm"],
            faqs: [{ q: "Number of sessions?", a: "3–4 sessions for best results." }],
            duration: "15–30 mins"
          }
        },
        { id: "peel-lactic", name: "Full Face Lactic Peel", price: 1799, tagline: "Gentle AHA peel for hydration & brightness.", image: "/images/peel-lactic.jpg", description: "Hydrating lactic acid peel.", details: {
            about: "Mild AHA peel that exfoliates while hydrating.",
            perfectFor: ["Dry/sensitive skin","Pigmentation"],
            steps: ["Cleanse","Apply lactic peel","Neutralize"],
            beforeCare: ["Avoid retinol 48–72 hrs prior"],
            afterCare: ["Hydrate & apply sunscreen"],
            faqs: [{ q: "Good for sensitive skin?", a: "Yes, at lower strengths." }],
            duration: "20–30 mins"
          }
        },
        { id: "peel-retinol-yellow", name: "Retinol / Yellow Peel", price: 2499, tagline: "Stronger peel for advanced skin concerns.", image: "/images/peel-retinol.jpg", description: "Retinol / Yellow peel for deeper correction.", details: {
            about: "Medium depth peel for pigmentation & texture issues.",
            perfectFor: ["Hyperpigmentation","Sun-damaged skin"],
            steps: ["Consult","Apply peel","Post-peel care"],
            beforeCare: ["Avoid retinoids prior; follow pre-peel protocol"],
            afterCare: ["Strict sun protection & follow instructions"],
            faqs: [{ q: "Downtime?", a: "Some peeling for several days possible." }],
            duration: "30–40 mins"
          }
        }
      ]
    },

    {
      category: "Injectable Treatments",
      about: "Clinician-delivered injectable therapies and IV treatments.",
      services: [
        { id: "inject-face-prp", name: "Face PRP", price: 4555, tagline: "Platelet therapy for skin rejuvenation.", image: "/images/face-prp.jpg", description: "PRP injections to boost facial skin quality.", details: {
            about: "Uses patient platelet-rich plasma to stimulate collagen.",
            perfectFor: ["Dull skin","Fine lines"],
            steps: ["Blood draw","PRP prep","Microinjections"],
            beforeCare: ["Avoid blood thinners as advised"],
            afterCare: ["Mild redness possible","Avoid heavy makeup 24 hrs"],
            faqs: [{ q: "Results duration?", a: "Improvement over months; maintenance advised." }],
            duration: "45–60 mins"
          }
        },
        { id: "inject-face-gfc", name: "Face GFC", price: 5555, tagline: "Growth factor concentrate for face.", image: "/images/face-gfc.jpg", description: "GFC injections to rejuvenate skin.", details: {
            about: "Advanced growth-factor therapy for facial rejuvenation.",
            perfectFor: ["Aging skin","Post-acne scars"],
            steps: ["Consult","Injection","Aftercare"],
            beforeCare: ["Clinician assessment needed"],
            afterCare: ["Hydrate & sunscreen"],
            faqs: [{ q: "How soon results?", a: "Gradual improvement in weeks." }],
            duration: "45–60 mins"
          }
        },
        { id: "inject-glutathione-600", name: "Glutathione IV (600mg)", price: 4999, tagline: "IV glutathione for antioxidant boost.", image: "/images/glutathione-600.jpg", description: "600mg IV glutathione infusion.", details: {
            about: "IV antioxidant therapy under medical supervision.",
            perfectFor: ["Glow & detox support"],
            steps: ["Pre-checks","IV infusion","Observation"],
            beforeCare: ["Hydration advised","Disclose medical history"],
            afterCare: ["Rest briefly after infusion"],
            faqs: [{ q: "Any side effects?", a: "Rare nausea or lightheadedness." }],
            duration: "30–45 mins"
          }
        },
        { id: "inject-glutathione-1800", name: "Glutathione IV (1800mg)", price: 5999, tagline: "Higher-dose IV antioxidant therapy.", image: "/images/glutathione-1800.jpg", description: "1800mg IV glutathione infusion for stronger effect.", details: {
            about: "Higher dose infusion for intensive antioxidant support.",
            perfectFor: ["Strong detox needs","Skin brightening regimens"],
            steps: ["Pre-checks","IV infusion","Observation"],
            beforeCare: ["Medical screening required"],
            afterCare: ["Rest & hydrate"],
            faqs: [{ q: "Need medical clearance?", a: "Yes, must disclose full medical history." }],
            duration: "45–60 mins"
          }
        }
      ]
    }
  ]
};

export default servicesData;
