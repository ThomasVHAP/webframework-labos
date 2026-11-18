export interface CommandExample {
  usage: string;
  explanation: string;
}

export interface CommandItem {
  rank: number;
  command: string;
  description: string;
  syntax: string;
  examples: CommandExample[];
}

export type CommandList = CommandItem[];

export interface Tweets {
  handle: string;
  text: string;
  createdOn: string;
}

export interface TweetsProfile {
  handle: string;
  name: string;
  bio: string;
}

export type TweetsList = Tweets[];
export type TweetsProfileList = TweetsProfile[];