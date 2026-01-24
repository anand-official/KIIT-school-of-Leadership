
import os

new_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KIIT School of Leadership</title>
    <meta name="description" content="Building leaders who build the future. A practice-first School of Leadership within KIIT Deemed to be University.">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/design-system.css">
</head>
<body>

    <!-- Navbar -->
    <nav class="navbar" id="navbar">
        <div class="container nav-container">
            <a href="#" class="brand">
                <img src="https://ksld.ac.in/wp-content/uploads/2023/08/ksld-logo.png" alt="KIIT School of Leadership" style="height: 40px;">
            </a>
            
            <div class="nav-links">
                <a href="#" class="nav-link">Home</a>
                <a href="#programs" class="nav-link">Programs</a>
                <a href="#network" class="nav-link">Leadership Network</a>
                <a href="#sri" class="nav-link">Social Impact (SRI)</a>
                <a href="#faculty" class="nav-link">Faculty</a>
                <a href="#ecosystem" class="nav-link">Ecosystem</a>
                <a href="#admissions" class="nav-link">Admissions</a>
            </div>
            
            <div class="nav-actions">
                <a href="#apply" class="btn btn-primary">Apply Now</a>
                <button class="mobile-menu-toggle" aria-label="Toggle Menu">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
        
        <!-- Mobile Menu -->
        <div class="mobile-menu">
            <a href="#" class="mobile-nav-link">Home</a>
            <a href="#programs" class="mobile-nav-link">Programs</a>
            <a href="#network" class="mobile-nav-link">Leadership Network</a>
            <a href="#sri" class="mobile-nav-link">Social Impact (SRI)</a>
            <a href="#faculty" class="mobile-nav-link">Faculty</a>
            <a href="#ecosystem" class="mobile-nav-link">Ecosystem</a>
            <a href="#admissions" class="mobile-nav-link">Admissions</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero bg-light">
        <div class="container">
            <div class="hero-grid">
                <div class="hero-content">
                    <span class="hero-eyebrow">KIIT School of Leadership · KIIT Deemed to be University</span>
                    <h1>Building leaders who <span style="color: var(--color-primary);">build the future.</span></h1>
                    <p class="lead" style="font-size: 1.25rem; margin-top: 24px; margin-bottom: 32px;">
                        A practice-first School of Leadership where you learn from founders, CXOs, policymakers, and social innovators while working on real ventures and impact projects.
                    </p>
                    <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 40px;">
                        <a href="#programs" class="btn btn-primary">Apply for MBA–IEV</a>
                        <a href="#programs" class="btn btn-outline">Explore all programs</a>
                    </div>
                    
                    <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                        <div class="stat-chip"><i class="fa-solid fa-check-circle" style="color: var(--color-primary);"></i> AICTE-approved MBA</div>
                        <div class="stat-chip"><i class="fa-solid fa-user-tie" style="color: var(--color-primary);"></i> 40+ Professors of Practice</div>
                        <div class="stat-chip"><i class="fa-solid fa-network-wired" style="color: var(--color-primary);"></i> 50+ Ecosystem Partners</div>
                    </div>
                </div>
                
                <div class="hero-image-card">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Students collaborating">
                </div>
            </div>
        </div>
    </section>

    <!-- Why KSLD -->
    <section id="about" class="section bg-white">
        <div class="container">
            <div style="text-align: center; max-width: 800px; margin: 0 auto 60px;">
                <h2>Why KIIT School of Leadership?</h2>
                <p style="font-size: 1.125rem; color: var(--color-text-muted);">We bring management education, venture building, and social impact under one roof—so you don’t just learn leadership, you practice it.</p>
            </div>
            
            <div class="feature-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
                <!-- Card 1 -->
                <div class="card">
                    <div class="feature-icon"><i class="fa-solid fa-chalkboard-user"></i></div>
                    <h3>Real-world mentorship</h3>
                    <p>Learn directly from founders, CXOs, civil servants, and social leaders through studios, masterclasses, mentoring circles, and clinics.</p>
                </div>
                <!-- Card 2 -->
                <div class="card">
                    <div class="feature-icon"><i class="fa-solid fa-rocket"></i></div>
                    <h3>Startup & innovation ecosystem</h3>
                    <p>Build and test ideas with access to incubators, challenges, demo days, and networks that support you from problem discovery to venture launch.</p>
                </div>
                <!-- Card 3 -->
                <div class="card">
                    <div class="feature-icon"><i class="fa-solid fa-hand-holding-heart"></i></div>
                    <h3>Social impact at the core</h3>
                    <p>Work with the Centre for Social Research & Innovation (SRI) and field partners on projects aligned with the Sustainable Development Goals.</p>
                </div>
                <!-- Card 4 -->
                <div class="card">
                    <div class="feature-icon"><i class="fa-solid fa-laptop-code"></i></div>
                    <h3>Future-ready curriculum</h3>
                    <p>Blend strong management foundations with innovation, design thinking, digital skills, and leadership labs that prepare you for a changing world.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Programs -->
    <section id="programs" class="section bg-light">
        <div class="container">
            <div style="margin-bottom: 40px;">
                <h2>Programs & pathways</h2>
                <p style="font-size: 1.125rem; color: var(--color-text-muted);">Choose how you want to grow—as a manager, founder, intrapreneur, or change-maker.</p>
            </div>
            
            <div class="programs-grid">
                <!-- Program 1 -->
                <div class="card">
                    <div style="margin-bottom: 16px;">
                        <span class="chip" style="background: #DBEAFE; color: #1E40AF;">Flagship program</span>
                    </div>
                    <h3>MBA–IEV: Innovation, Entrepreneurship & Venture Development</h3>
                    <p>A two-year, AICTE-approved MBA that combines management education with venture building, leadership development, and hands-on work with real problems.</p>
                    <ul style="margin: 16px 0; padding-left: 20px; color: var(--color-text-muted); font-size: 0.9rem; list-style-type: disc;">
                        <li>2-year full-time MBA</li>
                        <li>Venture studio & incubation support</li>
                        <li>Co-taught by industry mentors</li>
                    </ul>
                    <div class="program-meta">
                        <span>Duration: 2 years · Full-time</span>
                        <a href="#" class="text-link">View MBA–IEV program <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <!-- Program 2 -->
                <div class="card">
                    <div style="margin-bottom: 16px;">
                        <span class="chip" style="background: #FCE7F3; color: #9D174D;">Working professionals</span>
                    </div>
                    <h3>PACE: Leadership & executive programs</h3>
                    <p>Short, intensive programs for emerging and experienced leaders who want to upgrade their skills without pausing their careers.</p>
                    <ul style="margin: 16px 0; padding-left: 20px; color: var(--color-text-muted); font-size: 0.9rem; list-style-type: disc;">
                        <li>Leadership, communication & innovation</li>
                        <li>For early to senior professionals</li>
                        <li>Blended workshops & coaching</li>
                    </ul>
                    <div class="program-meta">
                        <span>3–5 day programs · Blended</span>
                        <a href="#" class="text-link">Explore certification programs <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <!-- Program 3 -->
                <div class="card">
                    <div style="margin-bottom: 16px;">
                        <span class="chip" style="background: #FEF3C7; color: #92400E;">Social impact</span>
                    </div>
                    <h3>Social research, innovation & youth leadership</h3>
                    <p>Pathways for students and young professionals to engage with social issues through research, projects, and leadership initiatives.</p>
                    <ul style="margin: 16px 0; padding-left: 20px; color: var(--color-text-muted); font-size: 0.9rem; list-style-type: disc;">
                        <li>Field-based research via SRI</li>
                        <li>Civic engagement initiatives</li>
                        <li>Govt & social sector partners</li>
                    </ul>
                    <div class="program-meta">
                        <span>Labs · Projects · Fellowships</span>
                        <a href="#" class="text-link">Discover social impact <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Leadership Network -->
    <section id="network" class="section bg-white">
        <div class="container">
            <div class="grid-12">
                <div style="grid-column: span 5;">
                    <h2>Learn from leaders, not just lecturers.</h2>
                    <p style="margin-bottom: 24px; color: var(--color-text-muted);">At the School of Leadership, you learn from people who do the work every day—founders, CXOs, policymakers, development professionals, and researchers.</p>
                    <ul style="margin-bottom: 32px; list-style: none;">
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--color-primary); margin-right: 8px;"></i> 20+ full-time core faculty</li>
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--color-primary); margin-right: 8px;"></i> 40+ Professors of Practice</li>
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--color-primary); margin-right: 8px;"></i> Small cohorts & personalised mentoring</li>
                    </ul>
                    <a href="#faculty" class="btn btn-outline">Meet our faculty & mentors</a>
                </div>
                <div style="grid-column: span 7;">
                    <div class="faculty-grid">
                        <!-- Mentor 1 -->
                        <div class="mini-person-card">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Prof. A. Sharma" class="mini-person-img">
                            <div>
                                <h4 style="margin-bottom: 4px;">Prof. A. Sharma</h4>
                                <div style="font-size: 0.875rem; color: var(--color-text-muted);">Innovation & Strategy · Professor of Practice</div>
                                <a href="#" style="font-size: 0.75rem; color: var(--color-primary); margin-top: 4px; display: inline-block;">View profile →</a>
                            </div>
                        </div>
                        <!-- Mentor 2 -->
                        <div class="mini-person-card">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Ms. R. Mehta" class="mini-person-img">
                            <div>
                                <h4 style="margin-bottom: 4px;">Ms. R. Mehta</h4>
                                <div style="font-size: 0.875rem; color: var(--color-text-muted);">Founder & CEO, Early-stage venture mentor</div>
                                <a href="#" style="font-size: 0.75rem; color: var(--color-primary); margin-top: 4px; display: inline-block;">View profile →</a>
                            </div>
                        </div>
                        <!-- Mentor 3 -->
                        <div class="mini-person-card">
                            <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Dr. S. Iqbal" class="mini-person-img">
                            <div>
                                <h4 style="margin-bottom: 4px;">Dr. S. Iqbal</h4>
                                <div style="font-size: 0.875rem; color: var(--color-text-muted);">Leadership & Organizational Behaviour · Core Faculty</div>
                                <a href="#" style="font-size: 0.75rem; color: var(--color-primary); margin-top: 4px; display: inline-block;">View profile →</a>
                            </div>
                        </div>
                        <!-- Mentor 4 -->
                        <div class="mini-person-card">
                            <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="Mr. V. Rao" class="mini-person-img">
                            <div>
                                <h4 style="margin-bottom: 4px;">Mr. V. Rao</h4>
                                <div style="font-size: 0.875rem; color: var(--color-text-muted);">Corporate leader & board advisor · Professor of Practice</div>
                                <a href="#" style="font-size: 0.75rem; color: var(--color-primary); margin-top: 4px; display: inline-block;">View profile →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Ecosystem Partners -->
    <section id="ecosystem" class="section bg-light">
        <div class="container">
            <div style="text-align: center; margin-bottom: 40px;">
                <h2>An ecosystem that backs your ambitions.</h2>
                <p style="max-width: 700px; margin: 0 auto 24px; color: var(--color-text-muted);">We collaborate with government bodies, corporates, startups, investors and civil society organisations so that your learning stays connected to the real world.</p>
                <p style="font-size: 0.875rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Some of the organisations our students, faculty and projects engage with:</p>
            </div>
            <div class="partner-grid">
                <!-- Placeholders for logos -->
                <div class="partner-card"><i class="fa-brands fa-google fa-2x"></i></div>
                <div class="partner-card"><i class="fa-brands fa-microsoft fa-2x"></i></div>
                <div class="partner-card"><i class="fa-brands fa-aws fa-2x"></i></div>
                <div class="partner-card"><i class="fa-brands fa-ibm fa-2x"></i></div>
                <div class="partner-card"><i class="fa-brands fa-intel fa-2x"></i></div>
                <div class="partner-card"><i class="fa-brands fa-slack fa-2x"></i></div>
            </div>
            <div style="text-align: center; margin-top: 32px;">
                <a href="#" class="text-link">See all ecosystem partners <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </section>

    <!-- Social Impact (SRI) -->
    <section id="sri" class="section bg-white">
        <div class="container">
            <div class="grid-12" style="align-items: center;">
                <div style="grid-column: span 6;">
                    <span class="chip" style="background: #DCFCE7; color: #166534;">Centre for Social Research & Innovation</span>
                    <h2 style="margin-top: 16px;">Leadership rooted in social impact.</h2>
                    <p style="margin-bottom: 24px; color: var(--color-text-muted);">Through the Centre for Social Research & Innovation (SRI), the School of Leadership works with communities, governments and organisations on real development challenges. Students and faculty co-create solutions in areas such as livelihoods, health, education, gender, and sustainability.</p>
                    
                    <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px;">
                        <span class="chip" style="background: var(--color-bg);">Field-based research</span>
                        <span class="chip" style="background: var(--color-bg);">UN SDGs Aligned</span>
                        <span class="chip" style="background: var(--color-bg);">Fellowships</span>
                    </div>
                    
                    <a href="#" class="btn btn-primary">Explore SRI & ongoing projects</a>
                </div>
                <div style="grid-column: span 6;">
                    <div style="position: relative; border-radius: 24px; overflow: hidden; box-shadow: var(--shadow-lg);">
                        <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Social Impact Work" style="width: 100%; height: auto; display: block;">
                        <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: rgba(0,0,0,0.7); color: white; padding: 20px; font-size: 0.875rem;">
                            Our work contributes to national priorities and global goals by connecting classroom learning with real-world impact.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Stories -->
    <section class="section bg-light">
        <div class="container">
            <div style="text-align: center; margin-bottom: 48px;">
                <h2>Stories from our learners.</h2>
                <p style="color: var(--color-text-muted);">Every journey is different. Here’s how learners from the School of Leadership are using what they learned to shape their careers, ventures and communities.</p>
            </div>
            <div class="stories-grid">
                <!-- Story 1 -->
                <div class="card story-card">
                    <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Ananya" class="story-img">
                    <p style="font-style: italic;">“The MBA–IEV program gave me the space to experiment, fail, and try again with guidance. By the time I graduated, my idea had become a working venture with real users and mentors I could lean on.”</p>
                    <h4 style="margin-bottom: 4px;">Ananya</h4>
                    <div style="font-size: 0.875rem; color: var(--color-text-muted);">MBA–IEV, Batch 2024 · Founder</div>
                    <div style="margin-top: 16px;"><span class="chip" style="font-size: 0.75rem;">Alumni · Founder</span></div>
                </div>
                <!-- Story 2 -->
                <div class="card story-card">
                    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Rohan" class="story-img">
                    <p style="font-style: italic;">“Working with professors of practice shifted how I think about problems. We weren’t just solving case studies—we were working on live challenges from startups and organisations.”</p>
                    <h4 style="margin-bottom: 4px;">Rohan</h4>
                    <div style="font-size: 0.875rem; color: var(--color-text-muted);">MBA–IEV, Batch 2023 · Product Manager</div>
                    <div style="margin-top: 16px;"><span class="chip" style="font-size: 0.75rem;">Alumni · Product Manager</span></div>
                </div>
                <!-- Story 3 -->
                <div class="card story-card">
                    <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="Meera" class="story-img">
                    <p style="font-style: italic;">“Through SRI I spent months in the field, listening to communities and co-creating solutions with local partners. It changed what leadership means to me.”</p>
                    <h4 style="margin-bottom: 4px;">Meera</h4>
                    <div style="font-size: 0.875rem; color: var(--color-text-muted);">SRI Fellow</div>
                    <div style="margin-top: 16px;"><span class="chip" style="font-size: 0.75rem;">Fellow · Social Impact</span></div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 32px;">
                <a href="#" class="text-link">View more stories <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </section>

    <!-- Campus Strip -->
    <section id="campus" class="campus-strip">
        <div class="container">
            <h2>A vibrant campus in Bhubaneswar.</h2>
            <p style="max-width: 700px; margin: 20px auto; color: rgba(255,255,255,0.9);">
                The School of Leadership is part of KIIT Deemed to be University—one of India’s leading multidisciplinary campuses. You learn in a diverse, residential environment with modern infrastructure, student-led clubs, and opportunities to collaborate across disciplines.
            </p>
            <div class="campus-stats">
                <div class="campus-stat-chip">40,000+ students across KIIT DU</div>
                <div class="campus-stat-chip">30+ schools and centres</div>
                <div class="campus-stat-chip">Modern classrooms & labs</div>
            </div>
            <div style="margin-top: 40px;">
                <a href="https://kiit.ac.in/tour/" target="_blank" rel="noopener noreferrer" class="btn btn-white-outline">See campus life at KIIT</a>
            </div>
        </div>
    </section>

    <!-- News -->
    <section class="section bg-white">
        <div class="container">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; flex-wrap: wrap; gap: 16px;">
                <div>
                    <h2>News & events</h2>
                    <p style="color: var(--color-text-muted);">Workshops, demo days, guest lectures, and more from the School of Leadership calendar.</p>
                </div>
            </div>
            <div class="news-grid">
                <!-- News 1 -->
                <div class="card news-card">
                    <div class="news-content">
                        <span class="chip" style="background: #E0E7FF; color: #3730A3; margin-bottom: 12px;">Event</span>
                        <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 8px;">12 October 2025</div>
                        <h4>Demo Day: Student ventures pitch to an industry jury</h4>
                        <p style="font-size: 0.9rem; margin-bottom: 16px;">MBA–IEV students presented their ventures to a panel of investors, founders and mentors.</p>
                        <a href="#" class="text-link" style="font-size: 0.875rem;">Read more →</a>
                    </div>
                </div>
                <!-- News 2 -->
                <div class="card news-card">
                    <div class="news-content">
                        <span class="chip" style="background: #FEF3C7; color: #92400E; margin-bottom: 12px;">Workshop</span>
                        <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 8px;">28 September 2025</div>
                        <h4>Leadership lab on “Leading in uncertainty”</h4>
                        <p style="font-size: 0.9rem; margin-bottom: 16px;">A hands-on session with a senior industry leader on decision-making and resilience.</p>
                        <a href="#" class="text-link" style="font-size: 0.875rem;">Read more →</a>
                    </div>
                </div>
                <!-- News 3 -->
                <div class="card news-card">
                    <div class="news-content">
                        <span class="chip" style="background: #DCFCE7; color: #166534; margin-bottom: 12px;">Announcement</span>
                        <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 8px;">5 September 2025</div>
                        <h4>SRI launches new project on rural livelihoods</h4>
                        <p style="font-size: 0.9rem; margin-bottom: 16px;">The Centre for Social Research & Innovation has partnered with field organisations.</p>
                        <a href="#" class="text-link" style="font-size: 0.875rem;">Read more →</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA Band -->
    <section class="section bg-green" style="text-align: center;">
        <div class="container">
            <h2 style="color: white; margin-bottom: 16px;">Ready to start your leadership journey?</h2>
            <p style="color: rgba(255,255,255,0.9); font-size: 1.125rem; margin-bottom: 32px; max-width: 600px; margin-left: auto; margin-right: auto;">
                Take the next step—start your application or talk to our admissions team about which path fits you best.
            </p>
            <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
                <a href="#apply" class="btn" style="background: white; color: var(--color-primary);">Apply now</a>
                <a href="#contact" class="btn btn-white-outline">Talk to admissions</a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <!-- Col 1 -->
                <div>
                    <h3 style="color: white; margin-bottom: 24px;">KIIT School of Leadership</h3>
                    <p style="max-width: 300px; line-height: 1.6;">A practice-first school within KIIT Deemed to be University, focused on leadership, innovation, entrepreneurship and social impact—through programs, ventures and research that stay close to the real world.</p>
                    <div style="margin-top: 24px;">
                        <span style="display: block; color: rgba(255,255,255,0.5); margin-bottom: 12px; font-size: 0.875rem;">Follow us</span>
                        <div style="display: flex; gap: 16px;">
                            <a href="#" style="color: white;"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#" style="color: white;"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="#" style="color: white;"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#" style="color: white;"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                
                <!-- Col 2 -->
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#admissions">Admissions</a></li>
                        <li><a href="#programs">Programs</a></li>
                        <li><a href="#faculty">Faculty & mentors</a></li>
                        <li><a href="#ecosystem">Ecosystem partners</a></li>
                        <li><a href="#sri">Social Impact (SRI)</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                
                <!-- Col 3 -->
                <div class="footer-links">
                    <h4>Contact</h4>
                    <p style="color: #9CA3AF; line-height: 1.6;">
                        KIIT School of Leadership<br>
                        KIIT Deemed to be University<br>
                        Bhubaneswar, Odisha, India
                    </p>
                    <p style="color: #9CA3AF; margin-top: 16px;">
                        Phone: +91-XXXXXXXXXX<br>
                        Email: <a href="mailto:leadership@kiit.ac.in" style="color: white;">leadership@kiit.ac.in</a>
                    </p>
                    <div style="margin-top: 24px;">
                        <a href="#" class="btn btn-outline" style="border-color: rgba(255,255,255,0.3); color: white; padding: 8px 16px; font-size: 0.875rem;">Download brochure →</a>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; KIIT School of Leadership · KIIT Deemed to be University · 2025</p>
            </div>
        </div>
    </footer>

    <script src="assets/js/main.js"></script>
</body>
</html>"""

with open('/workspaces/KIIT-school-of-Leadership/index.html', 'w') as f:
    f.write(new_content)
