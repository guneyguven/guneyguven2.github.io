export const site = {
  name: 'Güven ÇALIŞKAN',
  title: 'Engineer & Multidisciplinary Digital Artist',
  email: 'guneyguven@gmail.com',
  socials: {
    github: 'https://github.com/guneyguven',
    linkedin: 'https://www.linkedin.com/in/guneyguven',
    instagram: 'https://www.instagram.com/guneyguven'
  }
};

const legacy = 'https://raw.githubusercontent.com/guneyguven/guneyguven.github.io/main/images/';
export const image = (name: string) => `${legacy}${encodeURIComponent(name)}`;

export const gallery = [
  ['roboduck.jpg', 'Robo Duck'],
  ['run.jpg', 'Run'],
  ['bomber.jpg', 'Bomber'],
  ['Gp.png', 'Gp'],
  ['foxie.jpg', 'Foxie'],
  ['sahra.jpg', 'Sahra'],
  ['hehevakvak.JPG', 'Hehe Vakvak'],
  ['durorda.png', 'Dur Orda'],
  ['kahkaha.jpg', 'Kahkaha'],
  ['atkili.JPG', 'Atkili']
] as const;

export const profileCards = [
  ['Engineering', 'Civil engineering background with strong analytical and technical problem-solving skills.', '◈'],
  ['Software', 'Experience across JavaScript, React, Next.js, Python, Selenium, data management and machine-learning tooling.', '</>'],
  ['Project Management', 'Digital project management, coordination, strategy, stakeholder communication and delivery.', '↗'],
  ['Kaizen', 'Continuous-improvement mindset focused on removing friction, measuring results and making systems better.', '↻'],
  ['Digital Art', 'Multidisciplinary digital artist working across concept design, illustration and character-focused visual development.', '✦'],
  ['Outside work', 'Drums, drawing, visual experimentation and an unapologetic interest in good food.', '♪']
] as const;
