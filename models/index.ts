export interface User {
  username: string;
  password: string;
}

export interface Moment {
  _id: string;
  created: string;
  from: string
  labels: string[]
  moment: string
  timestamp: string
  when: string
}

export interface Label {
  _id: string;
  value: string;
  label: string;
}
