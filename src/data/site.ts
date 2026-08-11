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

const base = import.meta.env.BASE_URL;
export const image = (name: string) => `${base}images/${encodeURIComponent(name)}`;

export const gallery = [
  ['roboduck.jpg', 'Robo Duck'], ['run.jpg', 'Run'], ['bomber.jpg', 'Bomber'],
  ['Gp.png', 'Gp'], ['foxie.jpg', 'Foxie'], ['sahra.jpg', 'Sahra'],
  ['hehevakvak.JPG', 'Hehe Vakvak'], ['durorda.png', 'Dur Orda'],
  ['kahkaha.jpg', 'Kahkaha'], ['atkili.JPG', 'Atkili']
] as const;

export const profileCards = [
  ['Engineering', 'Civil engineering background with strong analytical and technical problem-solving skills.', '01'],
  ['Software', 'JavaScript, React, Next.js, Python, Selenium, data management and machine-learning tooling.', '02'],
  ['Project Management', 'Digital project management, coordination, strategy, stakeholder communication and delivery.', '03'],
  ['Kaizen', 'Continuous improvement focused on removing friction, measuring results and making systems better.', '04'],
  ['Digital Art', 'Concept design, illustration and character-focused visual development.', '05'],
  ['Outside work', 'Drums, drawing, visual experimentation and an unapologetic interest in good food.', '06']
] as const;
