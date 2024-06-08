import { ValidateCNPJ } from './ValidateCNPJ';
import { GenerateCNPJ } from './GenerateCNPJ';

import { ICNPJGenerated, ICNPJValid } from '../../interfaces/ICNPJ';

export class CNPJ {
  public static async validate({ cnpj }: { cnpj: string }): Promise<ICNPJValid> {
    const validateCNPJ = new ValidateCNPJ ();
    return await validateCNPJ.execute({ cnpj });
  }
  public static async generate(options?: {
    isWithDots?: boolean;
    stateCode?: string;
  }): Promise<ICNPJGenerated> {
    const generateCNPJ = new GenerateCNPJ();
    return await generateCNPJ.execute(options ? options : {});
  }
}
