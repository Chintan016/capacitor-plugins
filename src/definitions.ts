export interface BattiPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
