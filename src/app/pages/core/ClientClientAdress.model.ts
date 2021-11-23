import { ClientAdress } from "../clientadress/models/ClientAdress.model";

export class ClientClientAdress {
  name: string;
  idCompany: number;
  clientAdressList: ClientAdress[] = [];
}
