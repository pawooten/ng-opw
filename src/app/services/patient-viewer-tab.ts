export class PatientViewerTab {

  constructor( private label: string, private count: number, private backgroundColor: string, private textColor: string ) {}

  get Label(): string {
    return this.label;
  }

  get Count(): number {
    return this.count;
  }

  get BackgroundColor(): string {
    return this.backgroundColor;
  }

  get TextColor(): string {
    return this.textColor;
  }
}
