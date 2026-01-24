#!/usr/bin/env python3
"""Update the Stories from our learners section in index.html"""

# Read the file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Story 1 replacement
old_story_1 = '''                <!-- Story 1 -->
                <div class="card story-card">
                    <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Ananya" class="story-img">
                    <p style="font-style: italic;">"The MBA–IEV program gave me the space to experiment, fail, and try again with guidance. By the time I graduated, my idea had become a working venture with real users and mentors I could lean on."</p>
                    <h4 style="margin-bottom: 4px;">Ananya</h4>
                    <div style="font-size: 0.875rem; color: var(--color-text-muted);">MBA–IEV, Batch 2024 · Founder</div>
                    <div style="margin-top: 16px;"><span class="chip" style="font-size: 0.75rem;">Alumni · Founder</span></div>
                </div>'''

new_story_1 = '''                <!-- Story 1 -->
                <div class="card story-card">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sangita" class="story-img">
                    <p style="font-style: italic; color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.7;">"Every journey is different. Here's how learners from the School of Leadership are using what they learned to shape their careers, ventures and communities."</p>
                    <h4 style="margin-bottom: 4px; margin-top: 20px;">Sangita</h4>
                    <div style="font-size: 0.875rem; color: var(--color-text-muted); margin-bottom: 12px;">MBA–IEV, Batch 2025</div>
                    <div style="margin-top: 16px;"><span class="chip" style="font-size: 0.75rem; background: #D1FAE5; color: #065F46; font-weight: 600;">FUTURE FOUNDER</span></div>
                </div>'''

# Story 2 replacement
old_story_2 = '''                <!-- Story 2 -->
                <div class="card story-card">
                    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Rohan" class="story-img">
                    <p style="font-style: italic;">"Working with professors of practice shifted how I think about problems. We weren't just solving case studies—we were working on live challenges from startups and organisations."</p>
                    <h4 style="margin-bottom: 4px;">Rohan</h4>
                    <div style="font-size: 0.875rem; color: var(--color-text-muted);">MBA–IEV, Batch 2023 · Product Manager</div>
                    <div style="margin-top: 16px;"><span class="chip" style="font-size: 0.75rem;">Alumni · Product Manager</span></div>
                </div>'''

new_story_2 = '''                <!-- Story 2 -->
                <div class="card story-card">
                    <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Soumya" class="story-img">
                    <p style="font-style: italic; color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.7;">"Working with professors of practice shifted how I think about problems. We weren't just solving case studies—we were working on live challenges from startups and organisations."</p>
                    <h4 style="margin-bottom: 4px; margin-top: 20px;">Soumya</h4>
                    <div style="font-size: 0.875rem; color: var(--color-text-muted); margin-bottom: 12px;">MBA–IEV, Batch 2025</div>
                    <div style="margin-top: 16px;"><span class="chip" style="font-size: 0.75rem; background: #D1FAE5; color: #065F46; font-weight: 600;">EMERGING ENTREPRENEUR</span></div>
                </div>'''

# Story 3 replacement
old_story_3 = '''                <!-- Story 3 -->
                <div class="card story-card">
                    <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="Meera" class="story-img">
                    <p style="font-style: italic;">"Through SRI I spent months in the field, listening to communities and co-creating solutions with local partners. It changed what leadership means to me."</p>
                    <h4 style="margin-bottom: 4px;">Meera</h4>
                    <div style="font-size: 0.875rem; color: var(--color-text-muted);">SRI Fellow</div>
                    <div style="margin-top: 16px;"><span class="chip" style="font-size: 0.75rem;">Fellow · Social Impact</span></div>
                </div>'''

new_story_3 = '''                <!-- Story 3 -->
                <div class="card story-card">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Pratidwandi" class="story-img">
                    <p style="font-style: italic; color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.7;">"Through SRI I spent months in the field, listening to communities and co-creating solutions with local partners. It changed what leadership means to me."</p>
                    <h4 style="margin-bottom: 4px; margin-top: 20px;">Pratidwandi</h4>
                    <div style="font-size: 0.875rem; color: var(--color-text-muted); margin-bottom: 12px;">MBA–IEV, Batch 2025</div>
                    <div style="margin-top: 16px;"><span class="chip" style="font-size: 0.75rem; background: #D1FAE5; color: #065F46; font-weight: 600;">VENTURE CREATOR</span></div>
                </div>'''

# Perform replacements
content = content.replace(old_story_1, new_story_1)
content = content.replace(old_story_2, new_story_2)
content = content.replace(old_story_3, new_story_3)

# Write back to file
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Successfully updated all three story cards in index.html")
