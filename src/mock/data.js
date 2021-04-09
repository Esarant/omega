import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, welcome to ',
  name: 'The Digital Life of a Pandemic',
  subtitle: 'My Creative Project for the "Digital Citizenship" ACG course',
  cta: 'EXPLORE',
};

// ABOUT DATA
export const aboutData = {
  img: 'VR.jpg',
  paragraphOne: 'The project, regarding the antithesis of the different lives in the times of a pandemic was inspired by two distinct experiences. ',
  paragraphTwo: 'The first was the short film “When you sleep the world empties” and my city strolls during the first national quarantine. The second was my personal 14-day quarantine/confinement in my room due to covid. ',
  paragraphThree: 'The former stigmatized me with the emptiness of the real world and the image of deserted cities. The latter was a complete antithesis to first. I was confined in four walls all by myself, yet I “enjoyed” everything that I did in my pre-pandemic life. I was interacting with my friends, I was getting entertained via events, I was getting educated via e-classes, I was purchasing things via digital commerce and so on. ',
  paragraphFour: 'A complete antithesis and a lingering void inside me. This made me realize that the digital life serves to enhance our real life and not substitute it. I then created a video in three layers with images depicting the past “normal life”, the present “deserted” cities and the present digital life. ',
  paragraphFive: 'The aim of the project is to raise awareness about how, given the technological background and the required circumstances like a global pandemic, digital life substitutes real life.',
  paragraphSix: 'My goal is to show that this substitution takes place ostensibly and not in reality, as face to face interaction cannot be substituted and after prolonged human absence you are left with a void.',
  paragraphSeven: 'The project is relevant to the course of digital citizenship as it handles the issue of digital life, something that is prevalent in the concept of digital citizenship. As the world digital implies, the whole concept is based on technology and the digitalization of aspects of life so that we can be netizens. ',
  paragraphEight: 'While certainly digitalization is a positive procedure for the progress of humanity, proponents of it sometimes overdo it in their quest to digitalize everything- myself included.',
  paragraphNine: 'I believe that humankind, at least in the West realized that not everything can be substituted, and we don’t appreciate everyday “normal” things until we lose them. The project serves the purpose to remind us that there has to be a balance between the digital and “analog” aspects of life.',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'gi.jpg',
    title: 'The Digital Life of a Pandemic',
    info: 'The video moves in three layers: The past, the real present, and the digital present. In essence we have two chronic layers and two reality layers. As said before, its aim is to show the antithesis between the "normal" past life and the current pandemic life. The video has also distinct thematic layers. These layers show the impact of the pandemic on specific aspects of life',
    info2: 'These categories include entertainment, in the form of theaters and event spaces that were locked up and livestreamed. Education, in the form of closed schools and e-classes. Economic Activity, in the form of closed shops and digital commerce. Human interraction, in the form of closed spaces and video calls',
    url: 'https://vimeo.com/534661274'
  },
  {
    id: nanoid(),
    img: 'nais.jpg',
    title: 'As you sleep the world empties',
    info: 'Part of my original inspiration together with my strolls in the empty city. The awarded film by Vasilis Kekatos touched me in an unparalled way and I could not omit it from my presentation. The emotions it conveyed along with the imagery of the deserted cities made me realize the ANTITHESIS that is taking place and I am trying to explain',
    info2: 'The synapsis is the following. An epidemic has hit mankind. People from all ends of the Earth are asleep, and no one knows when they will wake. Few are those who are not infected; among them, a boy who fell in love with a girl right before the disease outbreak. With an old camera, he attempts to capture what beauty is left, so that the girl can see it once she awakens.',
    url: 'https://www.youtube.com/watch?v=i-7g_-4gZwE'
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'The digital life we are experiencing is complementary and cannot replace the real world in any way shape or form (yet)'
};

// FOOTER DATA
export const footerData = {
  networks: [
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
