export type EditionSeason = 'Summer' | 'Winter'
export type EditionStatus = 'held' | 'cancelled'

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
  status: EditionStatus
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

type RawEdition = {
  year: number
  season: EditionSeason
  city: string
  country: string
  dates: string
  status?: EditionStatus
}

const IOC_OVERVIEW_URL = 'https://olympics.com/en/olympic-games'

const RAW_EDITIONS: RawEdition[] = [
  { year: 1896, season: 'Summer', city: 'Athens', country: 'Greece', dates: '6-15 April 1896' },
  { year: 1900, season: 'Summer', city: 'Paris', country: 'France', dates: '14 May-28 October 1900' },
  { year: 1904, season: 'Summer', city: 'St. Louis', country: 'United States', dates: '1 July-23 November 1904' },
  { year: 1908, season: 'Summer', city: 'London', country: 'Great Britain', dates: '27 April-31 October 1908' },
  { year: 1912, season: 'Summer', city: 'Stockholm', country: 'Sweden', dates: '5 May-27 July 1912' },
  { year: 1916, season: 'Summer', city: 'Berlin', country: 'Germany', dates: 'Cancelled (World War I)', status: 'cancelled' },
  { year: 1920, season: 'Summer', city: 'Antwerp', country: 'Belgium', dates: '20 April-12 September 1920' },
  { year: 1924, season: 'Winter', city: 'Chamonix', country: 'France', dates: '25 January-5 February 1924' },
  { year: 1924, season: 'Summer', city: 'Paris', country: 'France', dates: '4 May-27 July 1924' },
  { year: 1928, season: 'Winter', city: 'St. Moritz', country: 'Switzerland', dates: '11-19 February 1928' },
  { year: 1928, season: 'Summer', city: 'Amsterdam', country: 'Netherlands', dates: '17 May-12 August 1928' },
  { year: 1932, season: 'Winter', city: 'Lake Placid', country: 'United States', dates: '4-15 February 1932' },
  { year: 1932, season: 'Summer', city: 'Los Angeles', country: 'United States', dates: '30 July-14 August 1932' },
  { year: 1936, season: 'Winter', city: 'Garmisch-Partenkirchen', country: 'Germany', dates: '6-16 February 1936' },
  { year: 1936, season: 'Summer', city: 'Berlin', country: 'Germany', dates: '1-16 August 1936' },
  { year: 1940, season: 'Winter', city: 'Sapporo', country: 'Japan', dates: 'Cancelled (World War II)', status: 'cancelled' },
  { year: 1940, season: 'Summer', city: 'Tokyo', country: 'Japan', dates: 'Cancelled (World War II)', status: 'cancelled' },
  { year: 1944, season: 'Winter', city: 'Cortina d\'Ampezzo', country: 'Italy', dates: 'Cancelled (World War II)', status: 'cancelled' },
  { year: 1944, season: 'Summer', city: 'London', country: 'Great Britain', dates: 'Cancelled (World War II)', status: 'cancelled' },
  { year: 1948, season: 'Winter', city: 'St. Moritz', country: 'Switzerland', dates: '30 January-8 February 1948' },
  { year: 1948, season: 'Summer', city: 'London', country: 'Great Britain', dates: '29 July-14 August 1948' },
  { year: 1952, season: 'Winter', city: 'Oslo', country: 'Norway', dates: '14-25 February 1952' },
  { year: 1952, season: 'Summer', city: 'Helsinki', country: 'Finland', dates: '19 July-3 August 1952' },
  { year: 1956, season: 'Winter', city: 'Cortina d\'Ampezzo', country: 'Italy', dates: '26 January-5 February 1956' },
  { year: 1956, season: 'Summer', city: 'Melbourne', country: 'Australia', dates: '22 November-8 December 1956' },
  { year: 1960, season: 'Winter', city: 'Squaw Valley', country: 'United States', dates: '18-28 February 1960' },
  { year: 1960, season: 'Summer', city: 'Rome', country: 'Italy', dates: '25 August-11 September 1960' },
  { year: 1964, season: 'Winter', city: 'Innsbruck', country: 'Austria', dates: '29 January-9 February 1964' },
  { year: 1964, season: 'Summer', city: 'Tokyo', country: 'Japan', dates: '10-24 October 1964' },
  { year: 1968, season: 'Winter', city: 'Grenoble', country: 'France', dates: '6-18 February 1968' },
  { year: 1968, season: 'Summer', city: 'Mexico City', country: 'Mexico', dates: '12-27 October 1968' },
  { year: 1972, season: 'Winter', city: 'Sapporo', country: 'Japan', dates: '3-13 February 1972' },
  { year: 1972, season: 'Summer', city: 'Munich', country: 'West Germany', dates: '26 August-11 September 1972' },
  { year: 1976, season: 'Winter', city: 'Innsbruck', country: 'Austria', dates: '4-15 February 1976' },
  { year: 1976, season: 'Summer', city: 'Montreal', country: 'Canada', dates: '17 July-1 August 1976' },
  { year: 1980, season: 'Winter', city: 'Lake Placid', country: 'United States', dates: '13-24 February 1980' },
  { year: 1980, season: 'Summer', city: 'Moscow', country: 'Soviet Union', dates: '19 July-3 August 1980' },
  { year: 1984, season: 'Winter', city: 'Sarajevo', country: 'Yugoslavia', dates: '8-19 February 1984' },
  { year: 1984, season: 'Summer', city: 'Los Angeles', country: 'United States', dates: '28 July-12 August 1984' },
  { year: 1988, season: 'Winter', city: 'Calgary', country: 'Canada', dates: '13-28 February 1988' },
  { year: 1988, season: 'Summer', city: 'Seoul', country: 'South Korea', dates: '17 September-2 October 1988' },
  { year: 1992, season: 'Winter', city: 'Albertville', country: 'France', dates: '8-23 February 1992' },
  { year: 1992, season: 'Summer', city: 'Barcelona', country: 'Spain', dates: '25 July-9 August 1992' },
  { year: 1994, season: 'Winter', city: 'Lillehammer', country: 'Norway', dates: '12-27 February 1994' },
  { year: 1996, season: 'Summer', city: 'Atlanta', country: 'United States', dates: '19 July-4 August 1996' },
  { year: 1998, season: 'Winter', city: 'Nagano', country: 'Japan', dates: '7-22 February 1998' },
  { year: 2000, season: 'Summer', city: 'Sydney', country: 'Australia', dates: '15 September-1 October 2000' },
  { year: 2002, season: 'Winter', city: 'Salt Lake City', country: 'United States', dates: '8-24 February 2002' },
  { year: 2004, season: 'Summer', city: 'Athens', country: 'Greece', dates: '13-29 August 2004' },
  { year: 2006, season: 'Winter', city: 'Turin', country: 'Italy', dates: '10-26 February 2006' },
  { year: 2008, season: 'Summer', city: 'Beijing', country: 'China', dates: '8-24 August 2008' },
  { year: 2010, season: 'Winter', city: 'Vancouver', country: 'Canada', dates: '12-28 February 2010' },
  { year: 2012, season: 'Summer', city: 'London', country: 'Great Britain', dates: '27 July-12 August 2012' },
  { year: 2014, season: 'Winter', city: 'Sochi', country: 'Russia', dates: '7-23 February 2014' },
  { year: 2016, season: 'Summer', city: 'Rio de Janeiro', country: 'Brazil', dates: '5-21 August 2016' },
  { year: 2018, season: 'Winter', city: 'PyeongChang', country: 'South Korea', dates: '9-25 February 2018' },
  { year: 2020, season: 'Summer', city: 'Tokyo', country: 'Japan', dates: '23 July-8 August 2021' },
  { year: 2022, season: 'Winter', city: 'Beijing', country: 'China', dates: '4-20 February 2022' },
  { year: 2024, season: 'Summer', city: 'Paris', country: 'France', dates: '26 July-11 August 2024' },
]

function toSeasonLabel(season: EditionSeason) {
  return season === 'Winter' ? 'Zimowe' : 'Letnie'
}

function toId({ season, city, year }: Pick<Edition, 'season' | 'city' | 'year'>) {
  const cleanCity = city
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  return `${season.toLowerCase()}-${cleanCity}-${year}`
}

function toWikiUrl(year: number, season: EditionSeason) {
  const seasonPart = season === 'Winter' ? 'Winter_Olympics' : 'Summer_Olympics'
  return `https://en.wikipedia.org/wiki/${year}_${seasonPart}`
}

function buildBaseEdition(raw: RawEdition): Edition {
  const status = raw.status ?? 'held'
  const title = `${raw.city} ${raw.year} (${toSeasonLabel(raw.season)})`

  if (status === 'cancelled') {
    return {
      id: toId({ season: raw.season, city: raw.city, year: raw.year }),
      year: raw.year,
      season: raw.season,
      status,
      city: raw.city,
      country: raw.country,
      dates: raw.dates,
      hostNations: [raw.country],
      title,
      summary:
        'Ta edycja igrzysk zosta�a odwo�ana z powod�w historycznych. Zachowujemy j� na osi czasu jako wa�ny punkt kontekstu.',
      highlights: [
        'Odwo�anie igrzysk pokazuje jak wydarzenia globalne wp�ywa�y na sport.',
        'Edycja pozostaje cz�ci� historii ruchu olimpijskiego.',
      ],
      medalTableTop: [],
      sources: [
        { label: 'IOC - Olympic Games Overview', url: IOC_OVERVIEW_URL },
        { label: `Wikipedia - ${raw.year} ${raw.season} Olympics`, url: toWikiUrl(raw.year, raw.season) },
      ],
    }
  }

  return {
    id: toId({ season: raw.season, city: raw.city, year: raw.year }),
    year: raw.year,
    season: raw.season,
    status,
    city: raw.city,
    country: raw.country,
    dates: raw.dates,
    hostNations: [raw.country],
    title,
    summary:
      'Edycja olimpijska wpisana w globaln� histori� sportu. W tej wersji muzeum cz�� danych jest skr�cona i mo�e by� rozwijana o kolejne eksponaty.',
    highlights: [
      'To jedna z pe�nej osi igrzysk nowo�ytnych.',
      'W kolejnych iteracjach mo�na rozszerzy� o rekordy, bohater�w i kontekst polityczny.',
    ],
    medalTableTop: [],
    sources: [
      { label: 'IOC - Olympic Games Overview', url: IOC_OVERVIEW_URL },
      { label: `Wikipedia - ${raw.year} ${raw.season} Olympics`, url: toWikiUrl(raw.year, raw.season) },
    ],
  }
}

type EditionOverride = Partial<Omit<Edition, 'id' | 'year' | 'season' | 'city' | 'country' | 'dates'>>

const EDITION_OVERRIDES: Record<string, EditionOverride> = {
  [toId({ season: 'Summer', city: 'Athens', year: 1896 })]: {
    summary:
      'Pierwsze nowo�ytne igrzyska olimpijskie odnowi�y tradycj� olimpijsk� i zgromadzi�y zawodnik�w z 14 pa�stw.',
    highlights: [
      'Oko�o 241 sportowc�w rywalizowa�o w 43 konkurencjach.',
      'Spyridon Louis wygra� maraton i sta� si� bohaterem narodowym Grecji.',
      'Wi�kszo�� uczestnik�w stanowili sportowcy-amatorzy.',
    ],
    medalTableTop: [
      { rank: 1, country: 'United States', gold: 11, silver: 7, bronze: 2, total: 20 },
      { rank: 2, country: 'Greece', gold: 10, silver: 17, bronze: 19, total: 46 },
      { rank: 3, country: 'Germany', gold: 6, silver: 5, bronze: 2, total: 13 },
    ],
  },
  [toId({ season: 'Summer', city: 'Berlin', year: 1936 })]: {
    summary:
      'Igrzyska silnie wykorzystywane propagandowo, zapami�tane tak�e dzi�ki czterem z�otom Jessego Owensa.',
    highlights: [
      'Jesse Owens zdoby� 4 z�ote medale w lekkoatletyce.',
      'Po raz pierwszy zastosowano sztafet� z ogniem olimpijskim.',
      'Transmitowano wybrane wydarzenia telewizyjnie.',
    ],
    medalTableTop: [
      { rank: 1, country: 'Germany', gold: 33, silver: 26, bronze: 30, total: 89 },
      { rank: 2, country: 'United States', gold: 24, silver: 20, bronze: 12, total: 56 },
      { rank: 3, country: 'Hungary', gold: 10, silver: 1, bronze: 5, total: 16 },
    ],
  },
  [toId({ season: 'Summer', city: 'Mexico City', year: 1968 })]: {
    summary:
      'Igrzyska na wysoko�ci, pe�ne rekord�w i pami�tnych gest�w spo�ecznych sportowc�w.',
    highlights: [
      'Tommie Smith i John Carlos wykonali symboliczny gest na podium.',
      'Bob Beamon ustanowi� legendarny rekord skoku w dal.',
      'By�y to pierwsze igrzyska olimpijskie w Ameryce �aci�skiej.',
    ],
    medalTableTop: [
      { rank: 1, country: 'United States', gold: 45, silver: 28, bronze: 34, total: 107 },
      { rank: 2, country: 'Soviet Union', gold: 29, silver: 32, bronze: 30, total: 91 },
      { rank: 3, country: 'Japan', gold: 11, silver: 7, bronze: 7, total: 25 },
    ],
  },
  [toId({ season: 'Summer', city: 'Moscow', year: 1980 })]: {
    summary:
      'Jedna z najbardziej upolitycznionych edycji, ukszta�towana przez mi�dzynarodowy bojkot.',
    highlights: [
      'Wiele kraj�w zbojkotowa�o igrzyska po inwazji ZSRR na Afganistan.',
      'Maskotka Misza sta�a si� jednym z najs�ynniejszych symboli olimpijskich.',
      'Gospodarze zdominowali klasyfikacj� medalow�.',
    ],
    medalTableTop: [
      { rank: 1, country: 'Soviet Union', gold: 80, silver: 69, bronze: 46, total: 195 },
      { rank: 2, country: 'East Germany', gold: 47, silver: 37, bronze: 42, total: 126 },
      { rank: 3, country: 'Bulgaria', gold: 8, silver: 16, bronze: 17, total: 41 },
    ],
  },
  [toId({ season: 'Summer', city: 'Sydney', year: 2000 })]: {
    summary:
      'Sydney 2000 jest cz�sto uznawane za jedn� z najlepiej zorganizowanych nowoczesnych olimpiad.',
    highlights: [
      'Cathy Freeman zapali�a znicz i wygra�a bieg na 400 m.',
      'Delegacje Korei P�nocnej i Po�udniowej maszerowa�y wsp�lnie.',
      'Mocno akcentowano wolontariat i zr�wnowa�enie wydarzenia.',
    ],
    medalTableTop: [
      { rank: 1, country: 'United States', gold: 37, silver: 24, bronze: 32, total: 93 },
      { rank: 2, country: 'Russia', gold: 32, silver: 28, bronze: 29, total: 89 },
      { rank: 3, country: 'China', gold: 28, silver: 16, bronze: 15, total: 59 },
    ],
  },
  [toId({ season: 'Summer', city: 'Beijing', year: 2008 })]: {
    summary:
      'Beijing 2008 ��czy�o wielk� skal� widowiska z prze�omowymi wynikami sportowymi.',
    highlights: [
      'Michael Phelps zdoby� 8 z�otych medali podczas jednej edycji.',
      'Usain Bolt ustanowi� rekordy �wiata na 100 i 200 m.',
      'Chiny po raz pierwszy prowadzi�y w liczbie z�otych medali.',
    ],
    medalTableTop: [
      { rank: 1, country: 'China', gold: 48, silver: 22, bronze: 30, total: 100 },
      { rank: 2, country: 'United States', gold: 36, silver: 38, bronze: 36, total: 110 },
      { rank: 3, country: 'Russia', gold: 24, silver: 13, bronze: 23, total: 60 },
    ],
  },
  [toId({ season: 'Winter', city: 'Vancouver', year: 2010 })]: {
    summary:
      'Vancouver po��czy�o znakomit� atmosfer� z pami�tnym fina�em hokeja i rekordowym wynikiem gospodarzy.',
    highlights: [
      'Kanada wygra�a z�oto w hokeju m�czyzn po dogrywce z USA.',
      'Gospodarze ustanowili rekord 14 z�otych medali zimowych igrzysk.',
      'Edycj� chwalono za energi� kibic�w i logistyk� obiekt�w g�rskich.',
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
  },
  [toId({ season: 'Summer', city: 'Paris', year: 2024 })]: {
    summary:
      'Powr�t Pary�a po 100 latach jako gospodarza letnich igrzysk i mocne osadzenie zawod�w w tkance miasta.',
    highlights: [
      'Ceremonia otwarcia zosta�a przeniesiona ze stadionu na Sekwan�.',
      'Breaking zadebiutowa� jako dyscyplina olimpijska.',
      'Wiele aren oparto o ikoniczne lokalizacje Pary�a.',
    ],
    medalTableTop: [
      { rank: 1, country: 'United States', gold: 40, silver: 44, bronze: 42, total: 126 },
      { rank: 2, country: 'China', gold: 40, silver: 27, bronze: 24, total: 91 },
      { rank: 3, country: 'Japan', gold: 20, silver: 12, bronze: 13, total: 45 },
    ],
  },
}

export const olympicsTimeline: Edition[] = RAW_EDITIONS.map((raw) => {
  const base = buildBaseEdition(raw)
  const override = EDITION_OVERRIDES[base.id]

  return {
    ...base,
    ...override,
    highlights: override?.highlights ?? base.highlights,
    medalTableTop: override?.medalTableTop ?? base.medalTableTop,
    sources: override?.sources ?? base.sources,
  }
})
