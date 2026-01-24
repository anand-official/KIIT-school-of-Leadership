#!/usr/bin/env python3
"""Update the registration section in kites.html"""

with open('kites.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace the registration section
old_section = '''            <div class="section-header" style="margin-bottom: 20px;">
                <h2>Register & Contact</h2>
                <p class="section-description">Secure your seat for UDAAN. Reach out for questions on schedules, travel, or group enrollments.</p>
            </div>
            <div class="info-grid">
                <div class="info-card">
                    <h3>Registration</h3>
                    <p style="color: var(--color-text-muted);">Complete payment and share transaction details with the Program Office.</p>
                    <a class="btn btn-primary" href="mailto:info.sld@kiit.ac.in?subject=KITES%20UDAAN%20Registration">Email proof of payment</a>
                </div>
                <div class="contact-card">
                    <h3 style="margin-bottom: 8px;">Contact</h3>
                    <p style="margin-bottom: 8px; color: var(--color-text);"><strong>Sweta Ma'am / Ananya Ma'am</strong></p>
                    <p style="margin-bottom: 6px; color: var(--color-text);">9338120390 / 9938226743</p>
                    <p style="margin-bottom: 6px; color: var(--color-text);">info.sld@kiit.ac.in</p>
                    <p style="margin: 0; color: var(--color-text-muted);">Program Office – School of Leadership, KIIT Deemed to be University, Campus 11, KIIT Road, Bhubaneswar, Odisha, India 751024</p>
                </div>
            </div>'''

new_section = '''            <div class="section-header" style="margin-bottom: 32px;">
                <h2 style="font-size: 2.5rem; color: #0f172a; margin-bottom: 12px;">Register & Contact</h2>
                <p class="section-description" style="font-size: 1.125rem; color: var(--color-text-muted); max-width: 800px;">Secure your seat for UDAAN. Reach out for questions on schedules, travel, or group enrollments.</p>
            </div>
            <div class="info-grid">
                <div class="info-card">
                    <h3 style="margin-bottom: 16px; font-size: 1.25rem;">Registration</h3>
                    <p style="color: var(--color-text-muted); margin-bottom: 20px; line-height: 1.6;">Complete payment and share transaction details with the Program Office.</p>
                    <a class="btn btn-primary" href="mailto:info.sld@kiit.ac.in?subject=KITES%20UDAAN%20Registration" style="background: #064e3b; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">Email proof of payment</a>
                </div>
                <div class="contact-card">
                    <h3 style="margin-bottom: 16px; font-size: 1.25rem;">Contact</h3>
                    <p style="margin-bottom: 10px; color: #064e3b; font-weight: 600; font-size: 1rem;">Sweta Ma'am / Ananya Ma'am</p>
                    <p style="margin-bottom: 10px; color: #065f46; font-size: 1.125rem; font-weight: 600;">9338120390 / 9938226743</p>
                    <p style="margin-bottom: 14px; color: #065f46; font-weight: 500;">info.sld@kiit.ac.in</p>
                    <p style="margin: 0; color: var(--color-text-muted); font-size: 0.9rem; line-height: 1.6;">Program Office – School of Leadership, KIIT Deemed to be University, Campus 11, KIIT Road, Bhubaneswar, Odisha, India 751024</p>
                </div>
            </div>'''

if old_section in content:
    content = content.replace(old_section, new_section)
    print("✓ Registration section updated")
else:
    print("✗ Could not find section to update")
    
with open('kites.html', 'w', encoding='utf-8') as f:
    f.write(content)
    
print("Done!")
