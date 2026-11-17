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