import { RequestUtil } from '../../utils/RequestUtil';
import { ICPFValid } from '../../interfaces/ICPF';

export class ValidateCNPJ {
  requestUtil = new RequestUtil();
  async execute({ cnpj }: { cnpj: string }): Promise<ICPFValid> {
    const { data }: { data: string } = await this.requestUtil.post({
      path: '/ferramentas_online.php',
      json: {
        acao: 'validar_cnpj',
        txt_cnpj: cnpj,
      },
    });
    const isValid = data.toLowerCase().includes('verdadeiro');

    return {
      isValid,
    };
  }
}
