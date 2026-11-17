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

// Type for the full array
export type CommandList = CommandItem[];