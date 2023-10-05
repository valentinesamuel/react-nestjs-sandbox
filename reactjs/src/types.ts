export interface ServerToClientEvents {
  scidonetest: (a: unknown) => unknown;
}

export interface ClientToServerEvents {
  hello: () => void;
}

export interface InterServerEvents {}
