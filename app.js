// ============================================
// APP.JS - Renders content from data.js
// You typically don't need to edit this file
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    renderProfile();
    renderAbout();
    renderResearchProjects();
    renderPublications();
    renderTeaching();
    renderRecruiting();
    setupMobileMenu();
    setupSmoothScroll();
});

// Helper to decode email (prevents scraping)
function decodeEmail() {
    return atob(SITE_DATA.profile.emailEncoded);
}

// ----------------
// PROFILE / HERO
// ----------------
function renderProfile() {
    const { profile } = SITE_DATA;
    const email = decodeEmail();
    
    document.getElementById('profile-photo').src = profile.photo;
    document.getElementById('profile-photo').alt = profile.name;
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-title').textContent = profile.title;
    document.getElementById('profile-affiliation').textContent = `${profile.department}, ${profile.university}`;
    
    // Social links
    const socialContainer = document.getElementById('social-links');
    const socialLinks = [
        { 
            url: `mailto:${email}`, 
            icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
            label: 'Email'
        },
        { 
            url: profile.links.scholar, 
            icon: `<i class="ai ai-google-scholar text-xl"></i>`,
            label: 'Google Scholar'
        },
        { 
            url: profile.links.dblp, 
            icon: `<i class="ai ai-dblp text-xl"></i>`,
            label: 'DBLP'
        },
        { 
            url: profile.links.github, 
            icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
            label: 'GitHub'
        }
    ];
    
    socialContainer.innerHTML = socialLinks.map(link => `
        <a href="${link.url}" target="${link.url.startsWith('mailto') ? '_self' : '_blank'}" 
           class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
           title="${link.label}">
            ${link.icon}
        </a>
    `).join('');
    
    // DBLP link in publications
    document.getElementById('dblp-link').href = profile.links.dblp;
    
    // Footer contact (email already decoded above)
    document.getElementById('footer-contact').innerHTML = `
        ${profile.name} &middot; ${profile.office} &middot; 
        <a href="mailto:${email}" class="text-primary-600 hover:underline">${email}</a>
    `;
}

// ----------------
// ABOUT
// ----------------
function renderAbout() {
    document.getElementById('about-text').innerHTML = SITE_DATA.about;
    
    const interestsContainer = document.getElementById('research-interests');
    interestsContainer.innerHTML = SITE_DATA.researchInterests.map(interest => `
        <span class="px-4 py-2 bg-white rounded-full text-gray-700 text-sm font-medium shadow-sm border border-gray-200">
            ${interest}
        </span>
    `).join('');
}

// ----------------
// RESEARCH PROJECTS
// ----------------
function renderResearchProjects() {
    const container = document.getElementById('research-projects');
    
    container.innerHTML = SITE_DATA.researchProjects.map(project => `
        <div class="project-card bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-start justify-between mb-3">
                <h3 class="text-lg font-semibold text-gray-900">${project.title}</h3>
                ${project.isNew ? '<span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">New</span>' : ''}
            </div>
            ${project.subtitle ? `<p class="text-sm text-primary-600 mb-2">${project.subtitle}</p>` : ''}
            <p class="text-gray-600 text-sm leading-relaxed mb-4">${project.description}</p>
            ${project.papers ? `
                <div class="text-sm text-gray-500 mb-2">
                    <span class="font-medium">Papers:</span> ${project.papers.join(', ')}
                </div>
            ` : ''}
            ${project.links ? `
                <div class="flex flex-wrap gap-2 mt-3">
                    ${project.links.map(link => {
                        const isGitHub = link.url.includes('github.com');
                        const isPyPI = link.url.includes('pypi.org');
                        let icon = '';
                        if (isGitHub) {
                            icon = `<svg class="w-3.5 h-3.5 inline mr-1.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
                        } else if (isPyPI) {
                            icon = `<svg class="w-3.5 h-3.5 inline mr-1.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.866 0L23.999 2.323l-2.323 11.132L12.866 24 1.733 13.455 0 2.323z"/></svg>`;
                        }
                        return `
                        <a href="${link.url}" target="_blank" 
                           class="inline-flex items-center text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors">
                            ${icon}${link.label}
                        </a>
                    `;
                    }).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

// ----------------
// PUBLICATIONS (Paginated)
// ----------------
const PAPERS_PER_PAGE = 8;
let currentPage = 1;

function renderPublications() {
    renderPublicationsList();
    renderPagination();
}

function getTotalPages() {
    return Math.ceil(SITE_DATA.publications.length / PAPERS_PER_PAGE);
}

function goToPage(page) {
    const totalPages = getTotalPages();
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderPublicationsList();
    renderPagination();
    // Scroll to publications section
    document.getElementById('publications').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderPagination() {
    const container = document.getElementById('pagination');
    const totalPages = getTotalPages();
    
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let buttons = [];
    
    // Previous button
    buttons.push(`
        <button onclick="goToPage(${currentPage - 1})" 
                class="px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}"
                ${currentPage === 1 ? 'disabled' : ''}>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
        </button>
    `);
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        // Show first, last, current, and adjacent pages
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            buttons.push(`
                <button onclick="goToPage(${i})" 
                        class="w-10 h-10 rounded-lg text-sm font-medium transition-colors ${i === currentPage ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-100'}">
                    ${i}
                </button>
            `);
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            buttons.push(`<span class="px-2 text-gray-400">...</span>`);
        }
    }
    
    // Next button
    buttons.push(`
        <button onclick="goToPage(${currentPage + 1})" 
                class="px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}"
                ${currentPage === totalPages ? 'disabled' : ''}>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
        </button>
    `);
    
    container.innerHTML = buttons.join('');
}

function renderPublicationsList() {
    const container = document.getElementById('publications-list');
    const start = (currentPage - 1) * PAPERS_PER_PAGE;
    const end = start + PAPERS_PER_PAGE;
    const paginated = SITE_DATA.publications.slice(start, end);
    
    container.innerHTML = paginated.map(pub => `
        <div class="publication-item bg-white rounded-lg p-5 shadow-sm border border-gray-100">
            <div class="flex items-start justify-between gap-4">
                <div class="flex-1">
                    <h4 class="font-medium text-gray-900 mb-1">${pub.title}</h4>
                    <p class="text-sm text-gray-500 mb-2">${pub.authors}</p>
                    <div class="flex items-center gap-2">
                        <span class="px-2 py-1 ${pub.type === 'full' ? 'bg-amber-100 text-amber-700' : pub.type === 'workshop' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'} text-xs font-medium rounded">
                            ${pub.type === 'full' ? 'Full Paper' : pub.type === 'workshop' ? 'Workshop' : 'Demo'}
                        </span>
                        <span class="text-sm text-gray-600">${pub.venue} ${pub.year}</span>
                    </div>
                </div>
                <div class="flex items-center gap-2 flex-shrink-0">
                    ${pub.link ? `
                        <a href="${pub.link}" target="_blank" 
                           class="p-2 text-gray-400 hover:text-primary-600 transition-colors" title="View Paper">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                        </a>
                    ` : ''}
                    ${pub.pdf ? `
                        <a href="${pub.pdf}" target="_blank" 
                           class="p-2 text-gray-400 hover:text-primary-600 transition-colors" title="Download PDF">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                        </a>
                    ` : ''}
                    ${pub.video ? `
                        <a href="${pub.video}" target="_blank" 
                           class="p-2 text-gray-400 hover:text-primary-600 transition-colors" title="Watch Video">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </a>
                    ` : ''}
                </div>
            </div>
            ${pub.links ? `
                <div class="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
                    ${pub.links.map(link => `
                        <a href="${link.url}" target="_blank" 
                           class="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors">
                            ${link.label}
                        </a>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

// ----------------
// TEACHING
// ----------------
function renderTeaching() {
    const container = document.getElementById('teaching-list');
    
    container.innerHTML = SITE_DATA.teaching.current.map(course => `
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-start justify-between mb-2">
                <a href="${course.url}" target="_blank" class="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                    ${course.name}
                    <svg class="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                </a>
                <span class="text-sm text-gray-500">${course.years}</span>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">${course.description}</p>
        </div>
    `).join('');
}

// ----------------
// RECRUITING
// ----------------
function renderRecruiting() {
    const { recruiting } = SITE_DATA;
    const container = document.getElementById('recruiting-content');
    
    container.innerHTML = `
        <p class="text-lg text-gray-700 mb-4">${recruiting.intro}</p>
        <p class="text-gray-600 mb-4">${recruiting.details}</p>
        <div class="mb-6">
            <span class="text-sm font-medium text-gray-700">Example projects: </span>
            ${recruiting.projects.map(p => `
                <a href="${p.url}" target="_blank" class="text-primary-600 hover:underline text-sm">${p.name}</a>
            `).join(', ')}
        </div>
        <p class="text-gray-700 font-medium">${recruiting.cta}</p>
        <a href="mailto:${decodeEmail()}" 
           class="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Get in Touch
        </a>
    `;
}

// ----------------
// MOBILE MENU
// ----------------
function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
    
    // Close menu when clicking a link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}

// ----------------
// SMOOTH SCROLL
// ----------------
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Account for fixed navbar
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Make pagination globally accessible
window.goToPage = goToPage;
