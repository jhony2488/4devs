import { CNPJ } from '../lib/index';

interface ICNPJ {
  cnpj: string;
  isValid: boolean;
}

const cnpjMock: ICNPJ = {
  cnpj: '999.999.999-99',
  isValid: false,
};

describe('CNPJ lib', () => {
  it('should create an instance', () => {
    expect(new CNPJ()).toBeTruthy();
  });

  it('should be valid CNPJ', async () => {
    const CNPJIsValid = await CNPJ.validate({ cnpj: cnpjMock.cnpj });

    expect(CNPJIsValid.isValid).toBe(cnpjMock.isValid);
  });

  it('should generate a CNPJ with dots', async () => {
    const { cnpj } = await CNPJ.generate({ isWithDots: true });

    expect(cnpj).toHaveLength(14);
  });

  it('should generate a CNPJ without dots', async () => {
    const { cnpj } = await CNPJ.generate({ isWithDots: false });

    expect(cnpj).toHaveLength(11);
  });

  it('should generate a CNPJ with state', async () => {
    const { cnpj } = await CNPJ.generate({ stateCode: 'BA' });

    expect(cnpj).toHaveLength(11);
  });
});
