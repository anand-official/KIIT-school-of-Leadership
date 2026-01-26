# KIIT School of Leadership - Comprehensive Faculty Social Profiles Audit
**Last Updated**: 2025  
**Status**: In Progress  
**Total Faculty Tracked**: 27 (12 Core Faculty + 7 KIIT Board Members + 4 External Board Members + 24 PoP)

---

## EXECUTIVE SUMMARY

### Current Status
- ✅ **24/24 Professors of Practice**: All have verified LinkedIn profiles with complete data attributes
- ⏳ **12 Core Faculty**: Missing social profile links (designations identified from Board page)
- ⏳ **7 KIIT Board Members**: Missing social profile links (some are duplicate entries from core faculty)
- ⏳ **4 External Board Members**: Missing social profile links (most are prominent academics)

---

## SECTION 1: CORE FACULTY (12 Members)

### Current HTML Status
- **File**: `people-regular-faculty.html`
- **Current Data Structure**: Simple cards with image, name, generic "Faculty" role
- **Missing**: Data attributes (data-name, data-link, data-company, data-role, data-bio, data-avatar)

| # | Name | Verified Title | Image File | LinkedIn Status | Notes |
|---|------|----------------|------------|-----------------|-------|
| 1 | Prof. Kumar Mohanty | DIRECTOR, KSOM | Dr_LKumar_mohanty.png | 🔍 Searching | Also on Board of Studies (duplicate) |
| 2 | Dr. Pinaki Nandan Pattnaik | Dean, School of Leadership | dr-pinaki-nandan-pattnaik.png | 🔍 Searching | Also on Board of Studies (duplicate) |
| 3 | Dr. Saswat Kishore Mishra | ASSOCIATE DEAN KSEC | dr-saswat-kishore-mishra.png | 🔍 Searching | Also on Board of Studies (duplicate) |
| 4 | Prof. Suvasis Ghosh | Placement Head, KSOM | prof-suvasis-ghosh.png | 🔍 Searching | Also on Board of Studies (duplicate) |
| 5 | Dr. Bignya Patnaik | Faculty | bignya_patnaik.png | 🔍 Searching | Independent core faculty |
| 6 | Dr. Sanjaya Kumar Lenka | Faculty | sanjaya_kumar_lenka.png | 🔍 Searching | Independent core faculty |
| 7 | Dr. Ananya Das | Faculty | ananya_das.png | 🔍 Searching | Independent core faculty |
| 8 | Dr. Queen Sarkar | Faculty | queen_sarkar.png | 🔍 Searching | Independent core faculty |
| 9 | Dr. Sweta Leena Hota | Co-ordinator, MBA IEV | dr-sweta-leena-hota.png | 🔍 Searching | Also on Board of Studies (duplicate) |
| 10 | Sikta Singh | Faculty | sikta singh.png | 🔍 Searching | Independent core faculty |
| 11 | Sameer Shekhar | Faculty | Sameer Shekhar.png | 🔍 Searching | Independent core faculty |
| 12 | Namrata Misra | CEO, RCKIC | dr-namrata-misra.png | 🔍 Searching | Also on Board of Studies (duplicate) |

### Data Attribute Template (to be implemented)
```html
<div class="person-card" 
     data-name="[Full Name]" 
     data-company="[Organization/Department]" 
     data-role="[Title/Designation]" 
     data-link="[LinkedIn URL]" 
     data-avatar="[Image Path]" 
     data-bio="[Bio Text]">
```

---

## SECTION 2: BOARD OF STUDIES - KIIT ACADEMICIANS (7 Members)

### Current HTML Status
- **File**: `people-board-of-studies.html` (Section 1)
- **Current Data**: Cards with image, name, specific role designation
- **Missing**: Functional data-link attributes (href="#" only)

| # | Name | Title | Status | LinkedIn | Notes |
|---|------|-------|--------|----------|-------|
| 1 | Dr. Pinaki Nandan Pattnaik | Dean, KIIT School of Leadership | Duplicate | 🔍 Searching | Same person as core faculty #2 |
| 2 | Prof. Mrutyunjay Suar | Director General (R & D) | ⚠️ New | 🔍 Searching | Not listed in core faculty |
| 3 | Dr. Sweta Leena Hota | Co-ordinator, MBA IEV | Duplicate | 🔍 Searching | Same person as core faculty #9 |
| 4 | Prof. (Dr.) Kumar Mohanty | DIRECTOR, KSOM | Duplicate | 🔍 Searching | Same person as core faculty #1 |
| 5 | Dr. Saswat Kishore Mishra | ASSOCIATE DEAN KSEC | Duplicate | 🔍 Searching | Same person as core faculty #3 |
| 6 | Dr. Namrata Misra | CEO, RCKIC | Duplicate | 🔍 Searching | Same person as core faculty #12 |
| 7 | Prof. Suvasis Ghosh | Placement Head, KSOM | Duplicate | 🔍 Searching | Same person as core faculty #4 |

### Key Finding
✅ **Boards clarifies true designations**: Board page reveals detailed titles (Director General, Associate Dean, CEO) for core faculty members

---

## SECTION 3: BOARD OF STUDIES - EXTERNAL ACADEMICIANS (4 Members)

### Current HTML Status
- **File**: `people-board-of-studies.html` (Section 2)
- **Current Data**: Profile link buttons with href="#" (non-functional)
- **Missing**: Functional LinkedIn URLs in data-link attributes

| # | Name | Institution | Title | LinkedIn Status |
|---|------|-------------|-------|-----------------|
| 1 | Prof. (Dr.) Faizan Mustafa | Chanakya National Law University | Vice–Chancellor | 🔍 Searching |
| 2 | Prof. (Dr.) Pratik Modi | BML Munjal University | Dean, School of Management | 🔍 Searching |
| 3 | Prof. (Dr.) Nirmalya Bagchi | ASCI | Director, Centre for Management Studies | 🔍 Searching |
| 4 | Prof. (Dr.) Suva Kanta Mohanty | VAMNICOM | Director | 🔍 Searching |

### Search Strategy for External Academicians
- ✅ High-profile positions (Vice-Chancellor, Dean, Director)
- ✅ Likely to have public LinkedIn profiles
- ✅ May also have ResearchGate & Google Scholar profiles

---

## SECTION 4: INDUSTRY EXPERTS ON BOARD (4 Members)

### Current HTML Status
- **File**: `people-board-of-studies.html` (Section 3)
- **Current Data**: Profile link buttons with href="#" (non-functional)
- **Missing**: Functional LinkedIn URLs in data-link attributes

| # | Name | Organization | Title | LinkedIn URL | Status |
|---|------|--------------|-------|--------------|--------|
| 1 | Mr. Jay Krishnan | Beyond Next Ventures / T-Hub | Partner / Founder | https://www.linkedin.com/in/jaykrishnan/ | ✅ VERIFIED |
| 2 | Mr. Indranil Das | Leaderion | Founder | https://in.linkedin.com/in/indranil-das-leaderion | ✅ VERIFIED |
| 3 | Mr. Pramod Chandrasekhar | Brane Enterprises | Corporate Leadership Coach | https://www.linkedin.com/in/pramodchandrasekhar | ✅ VERIFIED |
| 4 | Mr. Gautam Kumar | FarEye | Co-Founder | https://in.linkedin.com/in/gautamkr | ✅ VERIFIED |

**Note**: These 4 are also Professors of Practice (24 member roster) - so profiles are already verified and available

---

## SECTION 5: PROFESSORS OF PRACTICE (24 Members)

### Current HTML Status
- **File**: `people-professors-of-practice.html`
- **Current Data**: ✅ Complete - all data attributes populated with LinkedIn URLs
- **Implementation**: JavaScript modal that parses data-link and opens LinkedIn profiles

### List (All ✅ Verified with LinkedIn URLs)
1. Jay Krishnan - https://www.linkedin.com/in/jaykrishnan/
2. Bibhu Bahalia - https://www.linkedin.com/in/bibhu-bahalia-a9807ba0/
3. Bodhisattwa Sanghapriya - https://in.linkedin.com/in/sbodhisattwa
4. Partha Das - https://www.linkedin.com/in/partha-das-baa1454/
5. Lt Col Monish Ahuja - https://in.linkedin.com/in/lt-col-monish-ahuja-75317423
6. Samidha Mahapatra - https://in.linkedin.com/in/samidhamahapatra
7. Srinivas Kollipara - https://www.linkedin.com/in/skollipara/
8. CA Praveen Munukutla - https://www.linkedin.com/in/ca-praveen-munukutla-b3254b1b/
9. Pramod Chandrasekhar - https://www.linkedin.com/in/pramodchandrasekhar
10. Praveen Pantula - https://in.linkedin.com/in/praveenpantula
11. Babu Vittal - https://in.linkedin.com/in/babuvittal
12. Tanmaya Das - https://in.linkedin.com/in/tanmaya-das-4a355218
13. Tejaswy Rama - https://in.linkedin.com/in/tejaswyrama
14. Indranil Das - https://in.linkedin.com/in/indranil-das-leaderion
15. Aditya Prakash Rao - https://in.linkedin.com/in/adityaprakashrao
16. Rajashree Sahoo - https://in.linkedin.com/in/rajashree-sahoo-21488514
17. Ajay Jain - https://in.linkedin.com/in/ajayjainprofile
18. Gautam Kumar - https://in.linkedin.com/in/gautamkr
19. Salil Panda - https://in.linkedin.com/in/salil-panda-39b59516a
20. Nivedita Satpathy - https://in.linkedin.com/in/nivedita-satpathy-999272184
21. Hruday Kumar - https://in.linkedin.com/in/thehruday
22. Piyush Patnaik - https://in.linkedin.com/in/piyush-patnaik-3809863
23. Rakesh Prasad - https://in.linkedin.com/in/rakesh-prasad-52166299
24. Nibedita Panda - https://in.linkedin.com/in/nibedita-panda-32261120
25. Manu Panda - https://sg.linkedin.com/in/manu-panda-105b75
26. Gopal Sharma - https://in.linkedin.com/in/gopal-sharma-39a22762
27. Subir Mahapatra - https://in.linkedin.com/in/subirmahapatra

---

## ACTION PLAN - IMPLEMENTATION ROADMAP

### Phase 1: Research & Verification (Current)
- [ ] Search LinkedIn for each of 12 core faculty members
- [ ] Search for 4 external board academicians
- [ ] Verify designations against KIIT website
- [ ] Document LinkedIn URLs, Twitter handles, ResearchGate profiles

### Phase 2: Data Enrichment (Next)
- [ ] Update `people-regular-faculty.html` with data attributes and LinkedIn URLs
- [ ] Update `people-board-of-studies.html` with functional LinkedIn links
- [ ] Verify JavaScript handler correctly parses data-link attributes
- [ ] Test profile links on all pages

### Phase 3: Documentation (Final)
- [ ] Create individual staff profile pages (optional)
- [ ] Update this audit document with verified profiles
- [ ] Document any faculty without publicly available profiles

---

## IMPLEMENTATION CHECKLIST

### For Regular Faculty (12)
```html
<!-- Current (incomplete) -->
<div class="person-card">
    <img src="assets/images/people/[photo].png" alt="[Name]">
    <div class="person-name">[Name]</div>
    <div class="person-role">Faculty</div>
</div>

<!-- Target (complete) -->
<div class="person-card" 
     data-name="[Name]" 
     data-company="KIIT School of Leadership" 
     data-role="[Verified Title]" 
     data-link="[LinkedIn URL]" 
     data-avatar="assets/images/people/[photo].png" 
     data-bio="[Professional bio]">
    <img src="assets/images/people/[photo].png" alt="[Name]">
    <div class="person-name">[Name]</div>
    <div class="person-role">[Verified Title]</div>
    <a class="profile-link" href="#">View Profile <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
</div>
```

### For Board Members
```html
<!-- Update href from "#" to LinkedIn URL or add data-link attribute -->
<a class="profile-link" href="[LinkedIn URL]" target="_blank" rel="noopener">LinkedIn Profile <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
```

---

## SEARCH STRATEGY

### For KIIT Faculty
1. Search: `"[Name]" KIIT Bhubaneswar`
2. Search: `"[Name]" "KIIT School of Leadership"`
3. Search: `"[Name]" linkedin.com faculty`
4. Check: KIIT official website staff directory

### For External Board Members
1. Search: `"[Name]" "[University Name]" linkedin`
2. Search: `"[Name]" Vice-Chancellor Dean Director`
3. Check: University official websites
4. Check: ResearchGate profiles

---

## NOTES

- **Duplicate Detection**: Several core faculty also serve on Board of Studies
- **Designation Clarification**: Board page reveals detailed titles (Director General, CEO) for core faculty
- **PoP Reference Pattern**: 24 Professors of Practice provide template for data structure implementation
- **JavaScript Handler**: Modal in PoP HTML shows proper implementation pattern for profile links
