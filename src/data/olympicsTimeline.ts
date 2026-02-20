export type EditionSeason = 'Summer' | 'Winter'

export type MedalTableEntry = {
  rank: number
  country: string
  gold: number
  silver: number
  bronze: number
  total: number
}

export type EditionSource = {
  label: string
  url: string
}

export type Edition = {
  id: string
  year: number
  season: EditionSeason
  city: string
  country: string
  dates: string
  hostNations: string[]
  title: string
  summary: string
  highlights: string[]
  medalTableTop: MedalTableEntry[]
  sources: EditionSource[]
}

export const olympicsTimeline: Edition[] = [
  {
    id: 'athens-1896',
    year: 1896,
    season: 'Summer',
    city: 'Athens',
    country: 'Greece',
    dates: '6-15 April 1896',
    hostNations: ['Greece'],
    title: 'Athens 1896 (Summer)',
    summary:
      'The first modern Olympic Games relaunched the Olympic tradition and gathered athletes from 14 nations in the Panathenaic Stadium.',
    highlights: [
      'Roughly 241 athletes competed in 43 events.',
      'Spyridon Louis won the marathon and became a national hero in Greece.',
      'Most participants were amateurs from Europe and North America.',
    ],
    medalTableTop: [
      { rank: 1, country: 'United States', gold: 11, silver: 7, bronze: 2, total: 20 },
      { rank: 2, country: 'Greece', gold: 10, silver: 17, bronze: 19, total: 46 },
      { rank: 3, country: 'Germany', gold: 6, silver: 5, bronze: 2, total: 13 },
    ],
    sources: [
      { label: 'IOC - Athens 1896', url: 'https://olympics.com/en/olympic-games/athens-1896' },
      { label: 'Wikipedia - 1896 Summer Olympics', url: 'https://en.wikipedia.org/wiki/1896_Summer_Olympics' },
    ],
  },
  {
    id: 'berlin-1936',
    year: 1936,
    season: 'Summer',
    city: 'Berlin',
    country: 'Germany',
    dates: '1-16 August 1936',
    hostNations: ['Germany'],
    title: 'Berlin 1936 (Summer)',
    summary:
      'The Games were heavily used for propaganda, but also remembered for Jesse Owens, whose four gold medals challenged Nazi racial ideology.',
    highlights: [
      'Jesse Owens won 4 gold medals in track and field.',
      'For the first time, the Olympic torch relay was introduced.',
      'Live television broadcasts were experimented with in Berlin.',
    ],
    medalTableTop: [
      { rank: 1, country: 'Germany', gold: 33, silver: 26, bronze: 30, total: 89 },
      { rank: 2, country: 'United States', gold: 24, silver: 20, bronze: 12, total: 56 },
      { rank: 3, country: 'Hungary', gold: 10, silver: 1, bronze: 5, total: 16 },
    ],
    sources: [
      { label: 'IOC - Berlin 1936', url: 'https://olympics.com/en/olympic-games/berlin-1936' },
      { label: 'Wikipedia - 1936 Summer Olympics', url: 'https://en.wikipedia.org/wiki/1936_Summer_Olympics' },
    ],
  },
  {
    id: 'mexico-city-1968',
    year: 1968,
    season: 'Summer',
    city: 'Mexico City',
    country: 'Mexico',
    dates: '12-27 October 1968',
    hostNations: ['Mexico'],
    title: 'Mexico City 1968 (Summer)',
    summary:
      'Held at high altitude, these Games produced many records and iconic moments of athlete activism and global social change.',
    highlights: [
      'Tommie Smith and John Carlos gave the Black Power salute on the podium.',
      'Bob Beamon set a long jump world record of 8.90 m.',
      'Mexico City was the first Olympics in Latin America.',
    ],
    medalTableTop: [
      { rank: 1, country: 'United States', gold: 45, silver: 28, bronze: 34, total: 107 },
      { rank: 2, country: 'Soviet Union', gold: 29, silver: 32, bronze: 30, total: 91 },
      { rank: 3, country: 'Japan', gold: 11, silver: 7, bronze: 7, total: 25 },
    ],
    sources: [
      { label: 'IOC - Mexico City 1968', url: 'https://olympics.com/en/olympic-games/mexico-city-1968' },
      { label: 'Wikipedia - 1968 Summer Olympics', url: 'https://en.wikipedia.org/wiki/1968_Summer_Olympics' },
    ],
  },
  {
    id: 'moscow-1980',
    year: 1980,
    season: 'Summer',
    city: 'Moscow',
    country: 'Soviet Union',
    dates: '19 July-3 August 1980',
    hostNations: ['Soviet Union'],
    title: 'Moscow 1980 (Summer)',
    summary:
      'A major US-led boycott shaped participation, making Moscow 1980 one of the most politically charged Olympic editions.',
    highlights: [
      'Over 60 countries joined the boycott in protest of the Soviet invasion of Afghanistan.',
      'Mascot Misha became one of the most recognizable Olympic symbols.',
      'The USSR topped the medal table on home soil.',
    ],
    medalTableTop: [
      { rank: 1, country: 'Soviet Union', gold: 80, silver: 69, bronze: 46, total: 195 },
      { rank: 2, country: 'East Germany', gold: 47, silver: 37, bronze: 42, total: 126 },
      { rank: 3, country: 'Bulgaria', gold: 8, silver: 16, bronze: 17, total: 41 },
    ],
    sources: [
      { label: 'IOC - Moscow 1980', url: 'https://olympics.com/en/olympic-games/moscow-1980' },
      { label: 'Wikipedia - 1980 Summer Olympics', url: 'https://en.wikipedia.org/wiki/1980_Summer_Olympics' },
    ],
  },
  {
    id: 'sydney-2000',
    year: 2000,
    season: 'Summer',
    city: 'Sydney',
    country: 'Australia',
    dates: '15 September-1 October 2000',
    hostNations: ['Australia'],
    title: 'Sydney 2000 (Summer)',
    summary:
      'Sydney delivered a highly praised edition, often called one of the best-organized modern Olympic Games.',
    highlights: [
      'Cathy Freeman lit the cauldron and later won 400 m gold.',
      'North and South Korean athletes marched together at opening ceremony.',
      'The Games emphasized sustainability and volunteer culture.',
    ],
    medalTableTop: [
      { rank: 1, country: 'United States', gold: 37, silver: 24, bronze: 32, total: 93 },
      { rank: 2, country: 'Russia', gold: 32, silver: 28, bronze: 29, total: 89 },
      { rank: 3, country: 'China', gold: 28, silver: 16, bronze: 15, total: 59 },
    ],
    sources: [
      { label: 'IOC - Sydney 2000', url: 'https://olympics.com/en/olympic-games/sydney-2000' },
      { label: 'Wikipedia - 2000 Summer Olympics', url: 'https://en.wikipedia.org/wiki/2000_Summer_Olympics' },
    ],
  },
  {
    id: 'beijing-2008',
    year: 2008,
    season: 'Summer',
    city: 'Beijing',
    country: 'China',
    dates: '8-24 August 2008',
    hostNations: ['China'],
    title: 'Beijing 2008 (Summer)',
    summary:
      'Beijing staged a spectacular opening ceremony and marked a major shift in the global balance of Olympic sports power.',
    highlights: [
      'Michael Phelps won 8 gold medals in one Games.',
      'Usain Bolt set world records in 100 m and 200 m.',
      'China topped the gold-medal ranking for the first time.',
    ],
    medalTableTop: [
      { rank: 1, country: 'China', gold: 48, silver: 22, bronze: 30, total: 100 },
      { rank: 2, country: 'United States', gold: 36, silver: 38, bronze: 36, total: 110 },
      { rank: 3, country: 'Russia', gold: 24, silver: 13, bronze: 23, total: 60 },
    ],
    sources: [
      { label: 'IOC - Beijing 2008', url: 'https://olympics.com/en/olympic-games/beijing-2008' },
      { label: 'Wikipedia - 2008 Summer Olympics', url: 'https://en.wikipedia.org/wiki/2008_Summer_Olympics' },
    ],
  },
  {
    id: 'vancouver-2010',
    year: 2010,
    season: 'Winter',
    city: 'Vancouver',
    country: 'Canada',
    dates: '12-28 February 2010',
    hostNations: ['Canada'],
    title: 'Vancouver 2010 (Winter)',
    summary:
      'Vancouver combined compact venues with strong atmosphere and produced one of the most memorable Winter Olympic finals in hockey.',
    highlights: [
      'Canada won men\'s hockey gold after overtime against the USA.',
      'The host nation set a Winter Games record with 14 gold medals.',
      'These Games were praised for crowd energy and mountain venue design.',
    ],
    medalTableTop: [
      { rank: 1, country: 'Canada', gold: 14, silver: 7, bronze: 5, total: 26 },
      { rank: 2, country: 'Germany', gold: 10, silver: 13, bronze: 7, total: 30 },
      { rank: 3, country: 'United States', gold: 9, silver: 15, bronze: 13, total: 37 },
      { rank: 4, country: 'Norway', gold: 9, silver: 8, bronze: 6, total: 23 },
      { rank: 5, country: 'South Korea', gold: 6, silver: 6, bronze: 2, total: 14 },
      { rank: 6, country: 'Switzerland', gold: 6, silver: 0, bronze: 3, total: 9 },
      { rank: 7, country: 'China', gold: 5, silver: 2, bronze: 4, total: 11 },
      { rank: 8, country: 'Sweden', gold: 5, silver: 2, bronze: 4, total: 11 },
      { rank: 9, country: 'Austria', gold: 4, silver: 6, bronze: 6, total: 16 },
      { rank: 10, country: 'Netherlands', gold: 4, silver: 1, bronze: 3, total: 8 },
    ],
    sources: [
      { label: 'IOC - Vancouver 2010', url: 'https://olympics.com/en/olympic-games/vancouver-2010' },
      { label: 'Wikipedia - 2010 Winter Olympics', url: 'https://en.wikipedia.org/wiki/2010_Winter_Olympics' },
    ],
  },
  {
    id: 'paris-2024',
    year: 2024,
    season: 'Summer',
    city: 'Paris',
    country: 'France',
    dates: '26 July-11 August 2024',
    hostNations: ['France'],
    title: 'Paris 2024 (Summer)',
    summary:
      'Paris returned as host after a century, with ceremonies and competition integrated into iconic city landmarks.',
    highlights: [
      'Opening ceremony moved from stadium to the Seine river setting.',
      'Breaking debuted as an Olympic discipline in Paris.',
      'Urban landmarks were integrated into venue storytelling.',
    ],
    medalTableTop: [
      { rank: 1, country: 'United States', gold: 40, silver: 44, bronze: 42, total: 126 },
      { rank: 2, country: 'China', gold: 40, silver: 27, bronze: 24, total: 91 },
      { rank: 3, country: 'Japan', gold: 20, silver: 12, bronze: 13, total: 45 },
    ],
    sources: [
      { label: 'IOC - Paris 2024', url: 'https://olympics.com/en/paris-2024' },
      { label: 'Wikipedia - 2024 Summer Olympics', url: 'https://en.wikipedia.org/wiki/2024_Summer_Olympics' },
    ],
  },
]
