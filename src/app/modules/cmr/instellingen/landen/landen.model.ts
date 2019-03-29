export class Land {
  id: number;
  code: string;
  naam: string;
  settings: LandSettings;
}

export class LandSettings{
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}