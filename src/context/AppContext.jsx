import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const translations = {
  en: {
    // Nav
    nav_overview: "Overview",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_education: "Education",
    nav_cv: "Resume / CV",
    nav_contact: "Contact",
    nav_talk: "Let's Talk",

    // Hero
    hero_available: "Available for Internship & Full-Time Opportunities",
    hero_greeting: "Hi there, I am",
    hero_title: "SRUN Borath",
    hero_bio:
      "4th-year ICT student at the University of Puthisastra. Passionate about building performant web applications, RESTful APIs, and cross-platform mobile apps with modern frameworks.",
    hero_btn_projects: "Explore My Projects",
    hero_btn_cv: "Download CV",
    hero_roles: [
      "Full-Stack Web Developer",
      "Instructor of Python Programming",
      "Instructor of Backend Web Development",
      "Mobile App Developer (Flutter)",
      "Backend Engineer (Laravel / Node.js)",
      "ICT Student @ University of Puthisastra",
    ],
    hero_clean_code: "Clean Code",
    hero_fast_learner: "Fast Learner",
    hero_team_player: "Team Player",
    hero_honest: "Honest & Orderly",
    hero_student_tag: "ICT Faculty • 4th Year Student",

    // About
    about_badge: "Get To Know Me",
    about_title_pre: "About",
    about_sub:
      "Dedicated software developer & ICT student with a passion for building user-centric, scalable digital solutions.",
    about_p1:
      "I am a fourth-year Information and Communication Technology (ICT) student at the University of Puthisastra with a deep passion for modern programming, full-stack web architectures, and mobile applications.",
    about_p2:
      "Throughout my academic and professional journey, I have accumulated hands-on engineering experience designing and building systems with React.js, Laravel, Node.js, Spring Boot, Python, and Flutter.",
    about_p3:
      "Beyond writing code, I love sharing knowledge and mentoring aspiring developers. As an Instructor at ICT Center, I guide students through Python OOP logic, backend web development with PHP/Laravel, and database integrations.",
    about_strengths_title: "Key Professional Strengths:",
    about_btn_cv: "View Full CV & Qualifications",
    about_btn_contact: "Get In Touch",
    stat_year: "Year 4 ICT",
    stat_year_sub: "Univ. of Puthisastra",
    stat_roles: "3+ Positions",
    stat_roles_sub: "Instructor & Coordinator",
    stat_projects: "5+ Built",
    stat_projects_sub: "Web, Mobile & Desktop",
    stat_tools: "10+ Tools",
    stat_tools_sub: "React, Laravel, Flutter",

    // Projects
    proj_badge: "Featured Portfolio",
    proj_title_pre: "Recent",
    proj_title_highlight: "Projects & Engineering",
    proj_sub:
      "A selection of web, mobile, and backend software systems I've designed, architected, and built.",
    proj_all: "All",
    proj_source: "Source Code",
    proj_preview: "Live Preview",

    // Skills
    skills_badge: "Technical Stack & Capabilities",
    skills_title_pre: "Skills &",
    skills_title_highlight: "Competencies",
    skills_sub:
      "A comprehensive matrix of technologies, frameworks, spoken languages, and interpersonal capabilities.",
    skills_tab_tech: "Technical",
    skills_tab_soft: "Soft Skills",
    skills_tab_lang: "Languages",

    // Experience
    exp_badge: "Career Journey",
    exp_title_pre: "Work",
    exp_title_highlight: "Experience",
    exp_sub:
      "My practical track record as an Instructor, Coordinator, and Enterprise Web Developer.",
    exp_resp_title: "Key Responsibilities & Achievements:",

    // Education
    edu_badge: "Academic Background",
    edu_title_pre: "Education &",
    edu_title_highlight: "Qualifications",
    edu_sub:
      "Formal education, specialized professional certifications, and active community volunteer work.",
    edu_volunteer_title: "Volunteer & Workshop Engagements",
    edu_volunteer_sub: "Community contributions and technology innovation workshops.",

    // References
    ref_badge: "Endorsements & Verification",
    ref_title_pre: "Academic & Professional",
    ref_title_highlight: "References",
    ref_sub:
      "Respected university faculty leaders available for background verification and academic recommendations.",
    ref_email_btn: "Send Email",
    ref_telegram_btn: "Telegram",

    // Contact
    contact_badge: "Get In Touch",
    contact_title_pre: "Let's Build Something",
    contact_title_highlight: "Remarkable",
    contact_sub:
      "Have a project idea, internship opportunity, or technical question? Feel free to reach out anytime!",
    contact_fast_resp: "⚡ Fast Response Time",
    contact_fast_desc:
      "I am actively online on Telegram and email. Expected response turnaround is typically within a few hours.",
    contact_form_title: "Send Direct Message",
    contact_form_sub: "Fill out this quick form",
    contact_name_label: "Your Name",
    contact_name_ph: "John Doe",
    contact_email_label: "Your Email *",
    contact_email_ph: "john@example.com",
    contact_subject_label: "Subject",
    contact_subject_ph: "Job Opportunity / Project Inquiry",
    contact_msg_label: "Message *",
    contact_msg_ph: "Hi Borath, I'd like to talk about...",
    contact_btn_send: "Send Message",
    contact_btn_sending: "Sending Message...",

    // CV
    cv_badge: "Curriculum Vitae",
    cv_title_pre: "Resume &",
    cv_title_highlight: "Qualifications",
    cv_sub:
      "View my complete curriculum vitae or download a copy for offline review.",
    cv_download: "Download Resume",
    cv_inquire: "Inquire on Telegram",

    // Footer
    footer_tagline:
      "Bachelor of ICT Student @ University of Puthisastra | Full-Stack Web & Mobile Developer",
    footer_rights: "All rights reserved.",
  },

  kh: {
    // Nav
    nav_overview: "ទិដ្ឋភាពទូទៅ",
    nav_projects: "គម្រោងការងារ",
    nav_experience: "បទពិសោធន៍",
    nav_skills: "ជំនាញ",
    nav_education: "ការអប់រំ",
    nav_cv: "ប្រវត្តិរូបសង្ខេប / CV",
    nav_contact: "ទំនាក់ទំនង",
    nav_talk: "ជជែកជាមួយខ្ញុំ",

    // Hero
    hero_available: "បើកទទួលឱកាសការងារពេញម៉ោង និងការហាត់ការ",
    hero_greeting: "សួស្តី ខ្ញុំបាទឈ្មោះ",
    hero_title: "ស្រ៊ុន បូរ៉ាត់",
    hero_bio:
      "និស្សិតឆ្នាំទី៤ ផ្នែកបច្ចេកវិទ្យាព័ត៌មានវិទ្យា (ICT) នៅសាកលវិទ្យាល័យពុទ្ធិសាស្ត្រ។ មានចំណង់ចំណូលចិត្តខ្ពស់ក្នុងការអភិវឌ្ឍគេហទំព័រ Web APIs និងកម្មវិធីទូរស័ព្ទ Mobile App ទំនើបៗ។",
    hero_btn_projects: "មើលគម្រោងការងារខ្ញុំ",
    hero_btn_cv: "ទាញយក CV",
    hero_roles: [
      "អ្នកអភិវឌ្ឍន៍គេហទំព័រ Full-Stack",
      "គ្រូបង្រៀន Python Programming",
      "គ្រូបង្រៀន Backend Web Development",
      "អ្នកបង្កើតកម្មវិធីទូរស័ព្ទ (Flutter)",
      "វិស្វករប្រព័ន្ធ Backend (Laravel / Node.js)",
      "និស្សិត ICT ឆ្នាំទី៤ @ សាកលវិទ្យាល័យពុទ្ធិសាស្ត្រ",
    ],
    hero_clean_code: "សរសេរកូដស្អាត",
    hero_fast_learner: "រៀនឆាប់ចេះ",
    hero_team_player: "សហការក្រុមល្អ",
    hero_honest: "ស្មោះត្រង់ & មានរបៀប",
    hero_student_tag: "មហាវិទ្យាល័យ ICT • និស្សិតឆ្នាំទី៤",

    // About
    about_badge: "ស្គាល់អំពីខ្ញុំ",
    about_title_pre: "អំពីខ្ញុំ",
    about_sub:
      "អ្នកអភិវឌ្ឍន៍សូហ្វវែរ និងជានិស្សិត ICT ដែលមានការប្តេជ្ញាចិត្តខ្ពស់ក្នុងការកសាងប្រព័ន្ធបច្ចេកវិទ្យាដែលមានគុណភាព និងប្រសិទ្ធភាព។",
    about_p1:
      "ខ្ញុំបាទជានិស្សិតឆ្នាំទី ៤ ជំនាញបច្ចេកវិទ្យាព័ត៌មាន និងសារគមនាគមន៍ (ICT) នៅសាកលវិទ្យាល័យពុទ្ធិសាស្ត្រ ដែលមានចំណង់ចំណូលចិត្តយ៉ាងខ្លាំងលើការសរសេរកូដ និងការអភិវឌ្ឍកម្មវិធី។",
    about_p2:
      "ឆ្លងកាត់ការសិក្សា និងការអនុវត្តការងារជាក់ស្តែង ខ្ញុំមានបទពិសោធន៍ផ្ទាល់ក្នុងការបង្កើតគេហទំព័រ និងកម្មវិធីទូរស័ព្ទដោយប្រើប្រាស់បច្ចេកវិទ្យាទំនើបដូចជា React.js, Laravel, Node.js, Spring Boot, Python, និង Flutter។",
    about_p3:
      "ក្រៅពីការសរសេរកូដ ខ្ញុំចូលចិត្តចែករំលែកចំណេះដឹង។ ក្នុងនាមជាគ្រូបង្រៀន (Instructor) នៅមជ្ឈមណ្ឌល ICT Center ខ្ញុំបានបង្រៀនសិស្សអំពី Python OOP និងការអភិវឌ្ឍ Backend ជាមួយ PHP/Laravel និង Database។",
    about_strengths_title: "ចំណុចខ្លាំង និងគុណសម្បត្តិវិជ្ជាជីវៈ៖",
    about_btn_cv: "មើលប្រវត្តិរូបសង្ខេបពេញលេញ",
    about_btn_contact: "ទំនាក់ទំនងមកខ្ញុំ",
    stat_year: "និស្សិតឆ្នាំទី៤",
    stat_year_sub: "សាកលវិទ្យាល័យពុទ្ធិសាស្ត្រ",
    stat_roles: "៣+ តួនាទី",
    stat_roles_sub: "គ្រូបង្រៀន & អ្នកសម្របសម្រួល",
    stat_projects: "៥+ គម្រោង",
    stat_projects_sub: "Web, Mobile & Desktop",
    stat_tools: "១០+ បច្ចេកវិទ្យា",
    stat_tools_sub: "React, Laravel, Flutter",

    // Projects
    proj_badge: "ស្នាដៃ & គម្រោងការងារ",
    proj_title_pre: "គម្រោង",
    proj_title_highlight: "ដែលបានបង្កើតថ្មីៗ",
    proj_sub:
      "បណ្តុំគម្រោងគេហទំព័រ កម្មវិធីទូរស័ព្ទ និងប្រព័ន្ធ Backend APIs ដែលខ្ញុំបានរចនា និងសរសេរកូដផ្ទាល់។",
    proj_all: "ទាំងអស់",
    proj_source: "កូដប្រភព (GitHub)",
    proj_preview: "មើលគំរូផ្ទាល់",

    // Skills
    skills_badge: "ជំនាញ & សមត្ថភាពបច្ចេកវិទ្យា",
    skills_title_pre: "ជំនាញ &",
    skills_title_highlight: "សមត្ថភាពស្នូល",
    skills_sub:
      "តារាងបច្ចេកវិទ្យា ក្របខ័ណ្ឌការងារ (Frameworks) ភាសានិយាយ និងជំនាញទន់។",
    skills_tab_tech: "បច្ចេកទេស",
    skills_tab_soft: "ជំនាញទន់",
    skills_tab_lang: "ភាសា",

    // Experience
    exp_badge: "ប្រវត្តិការងារ",
    exp_title_pre: "បទពិសោធន៍",
    exp_title_highlight: "ការងារ",
    exp_sub:
      "បទពិសោធន៍ជាក់ស្តែងក្នុងនាមជាគ្រូបង្រៀន អ្នកសម្របសម្រួល និងអ្នកអភិវឌ្ឍន៍គេហទំព័រ ERP Odoo 19។",
    exp_resp_title: "ភារកិច្ច និងសមិទ្ធផលសំខាន់ៗ៖",

    // Education
    edu_badge: "ប្រវត្តិការសិក្សា",
    edu_title_pre: "ការអប់រំ &",
    edu_title_highlight: "សញ្ញាបត្រវិញ្ញាបនបត្រ",
    edu_sub:
      "ការសិក្សាថ្នាក់បរិញ្ញាបត្រ វិញ្ញាបនបត្រជំនាញវិជ្ជាជីវៈ និងសកម្មភាពការងារស្ម័គ្រចិត្តសង្គម។",
    edu_volunteer_title: "សកម្មភាពការងារស្ម័គ្រចិត្ត & វគ្គបណ្តុះបណ្តាល",
    edu_volunteer_sub: "ការចូលរួមជួយសង្គម និងសិក្ខាសាលាច្នៃប្រឌិតបច្ចេកវិទ្យា។",

    // References
    ref_badge: "បុគ្គលយោង & ផ្តល់អនុសាសន៍",
    ref_title_pre: "សាស្ត្រាចារ្យ &",
    ref_title_highlight: "បុគ្គលយោង",
    ref_sub:
      "ថ្នាក់ដឹកនាំមហាវិទ្យាល័យ និងសាកលវិទ្យាល័យដែលអាចផ្តល់ការបញ្ជាក់លើប្រវត្តិសិក្សា និងការងារ។",
    ref_email_btn: "ផ្ញើអ៊ីមែល",
    ref_telegram_btn: "តេឡេក្រាម",

    // Contact
    contact_badge: "ទំនាក់ទំនង",
    contact_title_pre: "តោះចាប់ផ្តើមបង្កើត",
    contact_title_highlight: "គម្រោងដ៏អស្ចារ្យជាមួយគ្នា",
    contact_sub:
      "តើលោកអ្នកមានគម្រោងការងារ ឱកាសការងារ ឬសំណួរផ្សេងៗ? សូមទាក់ទងមកខ្ញុំគ្រប់ពេលវេលា!",
    contact_fast_resp: "⚡ ការឆ្លើយតបរហ័ស",
    contact_fast_desc:
      "ខ្ញុំមានវត្តមានជាប្រចាំនៅលើ Telegram និង Email ហើយនឹងឆ្លើយតបយ៉ាងរហ័ស។",
    contact_form_title: "ផ្ញើសារផ្ទាល់",
    contact_form_sub: "បំពេញទម្រង់ខ្លីខាងក្រោម",
    contact_name_label: "ឈ្មោះរបស់អ្នក",
    contact_name_ph: "សូមបញ្ចូលឈ្មោះ",
    contact_email_label: "អ៊ីមែលរបស់អ្នក *",
    contact_email_ph: "example@gmail.com",
    contact_subject_label: "ប្រធានបទ",
    contact_subject_ph: "ឱកាសការងារ / សាកសួរគម្រោង",
    contact_msg_label: "ខ្លឹមសារសារ *",
    contact_msg_ph: "សួស្តី បូរ៉ាត់ ខ្ញុំចង់ពិភាក្សាអំពី...",
    contact_btn_send: "ផ្ញើសារ",
    contact_btn_sending: "កំពុងផ្ញើសារ...",

    // CV
    cv_badge: "ប្រវត្តិរូបសង្ខេប",
    cv_title_pre: "ប្រវត្តិរូប &",
    cv_title_highlight: "គុណវុឌ្ឍិសិក្សា",
    cv_sub:
      "មើលប្រវត្តិរូបសង្ខេប (CV) ពេញលេញ ឬទាញយកឯកសារទុកមើលក្រៅបណ្តាញ។",
    cv_download: "ទាញយកប្រវត្តិរូប (CV)",
    cv_inquire: "សាកសួរតាម Telegram",

    // Footer
    footer_tagline:
      "និស្សិតបរិញ្ញាបត្រ ICT នៅសាកលវិទ្យាល័យពុទ្ធិសាស្ត្រ | អ្នកអភិវឌ្ឍន៍ Full-Stack & Mobile",
    footer_rights: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
  },
};

export const AppProvider = ({ children }) => {
  // Theme state: dark by default, persists in localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio_theme") || "dark";
  });

  // Language state: 'en' by default, persists in localStorage
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio_lang") || "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("portfolio_lang", language);
    document.documentElement.lang = language;
    if (language === "kh") {
      document.body.classList.add("font-khmer");
    } else {
      document.body.classList.remove("font-khmer");
    }
  }, [language]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setLang = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => {
    return translations[language]?.[key] || translations["en"]?.[key] || key;
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        language,
        setLanguage: setLang,
        t,
        isKhmer: language === "kh",
        isDark: theme === "dark",
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
export default AppContext;
