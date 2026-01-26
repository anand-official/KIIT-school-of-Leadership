# LinkedIn Profile Links Update - Completion Report

**Date**: January 2025  
**Task**: Add LinkedIn profile URLs to faculty and professors of practice pages

## Summary

Successfully updated all faculty profile pages with LinkedIn URLs, replacing placeholder "#" links with actual LinkedIn profile links. All links now open in new tabs with proper security attributes (`target="_blank" rel="noopener noreferrer"`).

## Files Updated

### 1. people-regular-faculty.html
**Total Updates**: 12 faculty members

All faculty cards updated with:
- LinkedIn profile URLs in both `data-link` attribute and `href` attribute
- LinkedIn branding icon (`fa-brands fa-linkedin`)
- Proper security attributes for external links
- Consistent "LinkedIn" text replacing "View Profile"

**Faculty Updated**:
1. Prof. (Dr.) Kumar Mohanty - https://www.linkedin.com/in/kumarmohanty/
2. Dr. Pinaki Nandan - https://www.linkedin.com/in/pinaki-nandan-pattnaik-955096125/
3. Dr. Saswat Kishore Mishra - https://www.linkedin.com/in/saswat-kishore-mishra-57a23228/
4. Prof. Suvasis Ghosh - https://www.linkedin.com/in/suvasisghosh/
5. Dr. Bignya Patnaik - https://www.linkedin.com/in/bignya-patnaik-54a84518a/
6. Dr. Sanjaya Kumar Lanka - https://www.linkedin.com/in/sanjaya-kumar-lenka-824537361/
7. Dr. Ananya Das - https://www.linkedin.com/in/ananya-das-34b838277/
8. Dr. Queen Sarkar - https://www.linkedin.com/in/queen-sarkar-2645a2319/
9. Dr. Sweta Leena Hota - https://www.linkedin.com/in/dr-sweta-leena-hota-40352655/
10. Dr. Sikta Singh - https://www.linkedin.com/in/dr-shikta-singh-8750741a0/
11. Dr. Sameer Shekhar - https://www.linkedin.com/in/dr-sameer-shekhar-51098726/
12. Dr. Namrata Misra - https://www.linkedin.com/in/dr-namrata-misra-486a06229/

### 2. people-professors-of-practice.html
**Total Updates**: 27 professors of practice

All professor cards updated with the same pattern as regular faculty.

**Professors Updated**:
1. Jay Krishnan - https://www.linkedin.com/in/jaykrishnan/
2. Srinivas Kollipara - https://www.linkedin.com/in/skollipara/
3. Bodhisattwa Sanghapriya - https://in.linkedin.com/in/sbodhisattwa
4. Partha Das - https://www.linkedin.com/in/partha-das-baa1454/
5. Lt Col Monish Ahuja - https://in.linkedin.com/in/lt-col-monish-ahuja-75317423
6. Samidha Mahapatra - https://in.linkedin.com/in/samidhamahapatra
7. Bibhu Bahalia - https://www.linkedin.com/in/bibhu-bahalia-a9807ba0/
8. CA Praveen Munukutla - https://www.linkedin.com/in/ca-praveen-munukutla-b3254b1b/
9. Pramod Chandrasekhar - https://www.linkedin.com/in/pramodchandrasekhar
10. Praveen Pantula - https://in.linkedin.com/in/praveenpantula
11. Babu Vittal - https://in.linkedin.com/in/babuvittal
12. Tanmaya Das - https://in.linkedin.com/in/tanmaya-das-4a355218
13. Tejaswy Rama - https://in.linkedin.com/in/tejaswyrama
14. Rajashree Sahoo - https://in.linkedin.com/in/rajashree-sahoo-21488514
15. Ajay Jain - https://in.linkedin.com/in/ajayjainprofile
16. Piyush Patnaik - https://in.linkedin.com/in/piyush-patnaik-3809863
17. Gautam Kumar - https://in.linkedin.com/in/gautamkr
18. Indranil Das - https://in.linkedin.com/in/indranil-das-leaderion
19. Aditya Prakash Rao - https://in.linkedin.com/in/adityaprakashrao
20. Salil Panda - https://in.linkedin.com/in/salil-panda-39b59516a
21. Rakesh Prasad - https://in.linkedin.com/in/rakesh-prasad-52166299
22. Nibedita Panda - https://in.linkedin.com/in/nibedita-panda-32261120
23. Manbhanjan Panda - https://sg.linkedin.com/in/manu-panda-105b75
24. Gopal Sharma - https://in.linkedin.com/in/gopal-sharma-39a22762
25. Hruday Kumar - https://in.linkedin.com/in/thehruday
26. Nivedita Satpathy - https://in.linkedin.com/in/nivedita-satpathy-999272184
27. Subir Mahapatra - https://in.linkedin.com/in/subirmahapatra

## Technical Implementation

### Update Pattern
Each person card was updated from:
```html
<a class="profile-link" href="#">View Profile <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
```

To:
```html
<a class="profile-link" href="[LinkedIn URL]" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i> LinkedIn <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
```

### Security & Best Practices
- ✅ `target="_blank"` - Opens links in new tab
- ✅ `rel="noopener noreferrer"` - Prevents security vulnerabilities and protects referrer information
- ✅ LinkedIn brand icon for visual consistency
- ✅ Both `data-link` attribute and `href` updated for consistency

## Notes

Six faculty names from the original list were not found in the HTML files:
- Debasish Mahapatra
- Faizan Mustafa
- Pratik Modi
- Nirmalya Bagchi
- Suva Kanta Mohanty
- Mrutyunjay Suar

These individuals may not currently have profile cards in the system, or may be listed under different names.

## Verification

All profile links have been verified to:
- Have valid LinkedIn URLs
- Include proper security attributes
- Display LinkedIn branding
- Open in new tabs

**Total Updates**: 39 profile cards (12 regular faculty + 27 professors of practice)  
**Status**: ✅ Complete
