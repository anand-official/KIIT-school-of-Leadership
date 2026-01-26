KSLD — CMS / Notion-ready Content (Markdown + Metadata)

Instructions
- Each page below is given with a YAML-style metadata block (copy into Notion or your CMS). Keep the `slug` and `template` fields.
- Program curricula and faculty lists are preserved verbatim in a separate folder or page and should be linked from these canonical pages.

---

---
slug: /
title: Home
template: landing
seo_title: KIIT School of Leadership — Where Leaders and Innovators Are Built
seo_description: A future-focused school for creators, changemakers, and founders — powered by multidisciplinary learning and KIIT-TBI's innovation ecosystem.
hero:
  title: "Where Leaders and Innovators Are Built."
  subtitle: "A future-focused school for creators, changemakers, and founders — powered by multidisciplinary learning and a live innovation ecosystem."
  ctas:
    - label: "Apply to MBA-IEV"
      href: "/apply"
      type: primary
    - label: "Explore Programs"
      href: "/programs"
      type: secondary
impact:
  - stat: "423+"
    label: "Startups Supported"
  - stat: "₹1300 Cr+"
    label: "Funding Raised"
  - stat: "300+"
    label: "Mentors & Partners"
  - stat: "10,000+"
    label: "Jobs Created"

---

slug: /about-us
title: About
template: page
seo_title: About KIIT School of Leadership (KSLD)
seo_description: KSLD nurtures leaders who build ventures, drive policy, and create societal impact through multidisciplinary learning and a live innovation ecosystem.
lead: "Leadership isn't a title — it's responsibility, vision, and action."
content:
  - heading: "Who We Are"
    body: "The KIIT School of Leadership is built for individuals who aspire to lead, build, and transform. We focus on experiential learning, ethical leadership, innovation, and human-centered decision-making. Rooted in Indian values — built for global impact."
  - heading: "Our Approach"
    bullets:
      - "Multidisciplinary learning"
      - "Industry exposure"
      - "Research grounded in real-world challenges"
      - "Startup and venture-building pathways"
      - "Values-driven leadership"

---

slug: /programs/mba-iev
title: MBA in Innovation & Entrepreneurship (MBA-IEV)
template: program
seo_title: MBA in Innovation & Entrepreneurship — KSLD
seo_description: Two-year MBA focused on venture creation, startup growth, and leadership inside an active innovation ecosystem powered by KIIT-TBI.
lead: "A specialized two-year program for future founders, venture architects, and innovation leaders."
highlights:
  - "Study inside a real innovation ecosystem powered by KIIT-TBI"
  - "Hands-on venture journey: idea → prototype → validation → launch"
  - "Mentorship from founders, investors, and ecosystem leaders"
outcomes:
  - "Start and scale ventures"
  - "Lead innovation in organizations"
  - "Careers in VCs, accelerators, or policy innovation"
curriculum_link: "/assets/content/mba-iev-curriculum.md" # link to verbatim curriculum file
capstone: true

---

slug: /student-development
title: Student Development
template: page
seo_title: Student Development — KSLD
seo_description: Career pathways, leadership labs, and hands-on experiences that prepare learners to build ventures and lead in high-impact roles.
lead: "This is not just an MBA — it's a launchpad."
content:
  - heading: "Outcomes"
    bullets:
      - "Founder / Co-Founder"
      - "Innovation Lead"
      - "Venture Capital & Ecosystem Roles"
      - "Consultant, Strategist, Research or Leadership Pathways"
  - heading: "Campus and Facilities"
    body: "Spaces for collaboration, reflection, innovation, and execution — from classrooms to incubation labs to leadership lounges."

---

slug: /contact-us
title: Contact
template: page
seo_title: Contact Admissions — KSLD
seo_description: Reach the KSLD admissions team to learn about the MBA-IEV, campus visits, and application support.
contact:
  address: "KIIT School of Leadership, Bhubaneswar, Odisha"
  email: "admissions.ksld@kiit.ac.in"
  phone: "+91-674-2725113"
  hours: "Mon–Fri, 9 AM–5 PM IST"

---

Notes
- Keep program curriculum files as canonical source files (do not rewrite there). Link from program pages.
- For Notion import: create a page per `slug` then paste the metadata into the page description (or use the CMS import tool if available).
