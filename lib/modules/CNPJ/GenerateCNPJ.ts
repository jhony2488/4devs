import { RequestUtil } from '../../utils/RequestUtil';
import { ICNPJGenerated } from '../../interfaces/ICNPJ';

export class GenerateCNPJ {
  requestUtil = new RequestUtil();
  async execute({
    isWithDots,
    stateCode,
  }: {
    isWithDots?: boolean;
    stateCode?: string;
  }): Promise<ICNPJGenerated> {
    const { data: cnpj }: { data: string } = await this.requestUtil.post({
      path: '/ferramentas_online.php',
      json: {
        acao: 'gerar_cnpj',
        pontuacao: isWithDots ? 'S' : 'N',
        cpf_estado: stateCode || '',
      },
    });

    return {
      cnpj,
    };
  }
}
