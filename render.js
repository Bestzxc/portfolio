document.addEventListener('DOMContentLoaded', () => {

  // Hero
  document.getElementById('hero-name').innerHTML =
    `${data.name}<br><span class="surname">${data.surname}</span>`;
  document.getElementById('hero-title').textContent = data.title;
  document.getElementById('hero-status').textContent = `✦ ${data.status}`;
  document.getElementById('hero-avatar').src = data.avatar;
  document.getElementById('hero-avatar').alt = `${data.name} ${data.surname}`;

  // About Me
  document.getElementById('about-list').innerHTML = `
    <li><strong>Background:</strong> ${data.aboutBackground}</li>
    <li><strong>Approach:</strong> ${data.aboutApproach}</li>
    <li><strong>Priorities:</strong> ${data.aboutPriorities}</li>
    <li><strong>Growth:</strong> ${data.aboutGrowth}</li>
  `;

  // Quick stats
  document.getElementById('about-stats').innerHTML = `
    <div class="stat-item">
      <div class="stat-num">${data.university}</div>
      <div class="stat-label">University</div>
    </div>
    <div class="stat-item">
      <div class="stat-num">${data.universityGpax}</div>
      <div class="stat-label">GPAX</div>
    </div>
    <div class="stat-item">
      <div class="stat-num">${data.favoriteSubjects}</div>
      <div class="stat-label">Favorite Subjects</div>
    </div>
    <div class="stat-item">
      <div class="stat-num">${data.projectsCompleted}</div>
      <div class="stat-label">Projects Completed</div>
    </div>
  `;

  // Programming languages
  const skillsLanguages = document.getElementById('skills-languages');
  data.programmingLanguages.forEach(lang => {
    const div = document.createElement('div');
    div.className = 'skill-block';
    div.innerHTML = `<span class="skill-name">${lang}</span>`;
    skillsLanguages.appendChild(div);
  });

  // Soft skills
  document.getElementById('skills-soft').innerHTML = `
    <div class="skill-item">
      <div class="skill-name"><span>Communication</span></div>
      <div class="skill-bar"><div class="skill-fill" style="--w:${data.skillCommunication}"></div></div>
    </div>
    <div class="skill-item">
      <div class="skill-name"><span>Teamwork & Collaboration</span></div>
      <div class="skill-bar"><div class="skill-fill" style="--w:${data.skillTeamwork}"></div></div>
    </div>
    <div class="skill-item">
      <div class="skill-name"><span>Problem Solving</span></div>
      <div class="skill-bar"><div class="skill-fill" style="--w:${data.skillProblemSolving}"></div></div>
    </div>
    <div class="skill-item">
      <div class="skill-name"><span>Time Management</span></div>
      <div class="skill-bar"><div class="skill-fill" style="--w:${data.skillTimeManagement}"></div></div>
    </div>
    <div class="skill-item">
      <div class="skill-name"><span>Adaptability</span></div>
      <div class="skill-bar"><div class="skill-fill" style="--w:${data.skillAdaptability}"></div></div>
    </div>
  `;

  // Tools & IDEs
  const skillsTools = document.getElementById('skills-tools');
  data.toolsAndIde.forEach(tool => {
    const div = document.createElement('div');
    div.className = 'skill-block';
    div.innerHTML = `<span class="skill-name">${tool}</span>`;
    skillsTools.appendChild(div);
  });

  // Spoken languages
  const skillsSpoken = document.getElementById('skills-spoken');
  data.spokenLanguages.forEach(lang => {
    const div = document.createElement('div');
    div.className = 'skill-block';
    div.innerHTML = `<span class="skill-name">${lang.name}${lang.level ? ` (${lang.level})` : ''}</span>`;
    skillsSpoken.appendChild(div);
  });

  // AI tools
  const skillsAi = document.getElementById('skills-ai');
  data.aiTools.forEach(tool => {
    const div = document.createElement('div');
    div.className = 'skill-block';
    const uses = tool.uses.join('<br>- ');
    div.innerHTML = `<span class="skill-name">${tool.name}</span><p class="skill-description">- ${uses}</p>`;
    skillsAi.appendChild(div);
  });

  // Projects
  const projectsGrid = document.getElementById('projects-grid');
  data.projects.forEach(project => {
    const div = document.createElement('div');
    div.className = 'project-card';
    const tags = project.tags.map(t => `<span class="tag">${t}</span>`).join('');
    div.innerHTML = `
      <div class="project-num">${project.id}</div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${project.description}</p>
      <div class="project-tags">${tags}</div>
    `;
    projectsGrid.appendChild(div);
  });

  // Activities
  const activitiesTrack = document.getElementById('activities-track');
  data.activities.forEach(activity => {
    const article = document.createElement('article');
    article.className = 'activity-card';
    article.innerHTML = `
      <div class="activity-image" style="background-image:url('${activity.image}')"></div>
      <div class="activity-info">
        <h3>${activity.title}</h3>
        <p>${activity.description}</p>
      </div>
    `;
    activitiesTrack.appendChild(article);
  });

  // Footer contacts
  document.getElementById('footer-contacts').innerHTML = `
    <a href="mailto:${data.email}" class="contact-link">
      <span class="material-symbols-outlined">mail</span>
      <span>Gmail</span>
      <span class="contact-value">${data.email}</span>
    </a>
    <a href="https://${data.github}" target="_blank" class="contact-link">
      <span class="material-symbols-outlined">code</span>
      <span>GitHub</span>
      <span class="contact-value">${data.github}</span>
    </a>
    <div class="contact-link">
      <span class="material-symbols-outlined">chat_bubble</span>
      <span>Line</span>
      <span class="contact-value">${data.line}</span>
    </div>
    <div class="contact-link">
      <span class="material-symbols-outlined">phone_in_talk</span>
      <span>Phone</span>
      <span class="contact-value">${data.phone}</span>
    </div>
  `;

  // Footer note
  document.getElementById('footer-note').textContent = data.footerNote;
});