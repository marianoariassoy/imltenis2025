export interface Tournament {
  id: number;
  name: string;
  season: number;
  season_name: string;
}

export interface Serie {
  id: number;
  date: string;
  hour: string;
  home_id: number;
  home_name: string;
  home_image: string;
  away_id: number;
  away_name: string;
  away_image: string;
  score_home: number;
  score_away: number;
  winner: boolean;
  status: number;
  group_id: string;
  tournament_id: string;
  tournament_name: string;
  top: boolean;
}

export interface Juego {
  id: number;
  playerhome1_id: number;
  playerhome1_image: string;
  playerhome2_id: number;
  playerhome2_image: string;
  playerhome1_name: string;
  playerhome2_name: string;
  playeraway1_id: number;
  playeraway1_image: string;
  playeraway2_id: number;
  playeraway2_image: string;
  playeraway1_name: string;
  playeraway2_name: string;

  type: string;
  score: string;
  result: string;
  status: string;
}

export interface Player {
  id: number;
  name: string;
  image: string;
  series_total: number;
  series_won_total: number;
  series_dif: number;
  age: number;
}

export interface Single {
  id: string;
  result: string;
  date: string;
  oponent_id: string;
  oponent_name: string;
  team_oponent_id: string;
  team_oponent_name: string;
  score: string;
  tournament_id: string;
  tournament_name: string;
}

export interface Double {
  id: string;
  result: string;
  date: string;
  oponent1_id: string;
  oponent2_id: string;
  oponent1_name: string;
  oponent2_name: string;
  partner_id: string;
  partner_name: string;
  team_oponent_id: string;
  team_oponent_name: string;
  score: string;
  tournament_id: string;
  tournament_name: string;
}

export interface Club {
  club_id: string;
  name: string;
  image: string;
  location: string;
  phone: string;
  googlemaps: string;
  googlemapslink: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  web: string;
}

export interface Group {
  id: string;
  name: string;
  title: string;
  type: number;
  winner: boolean;
  status: number;
  winners: number;
  tournament_description: string;
}

export interface Table {
  id: string;
  name: string;
  image: string;
  club_image: string;
  match_won: number;
  series_won: number;
  sets: number;
  games: number;
  series_total: number;
  series: boolean[];
}
