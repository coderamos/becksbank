const Utils = {
  validarCPF: (cpf: string) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf === '') return false;
    // Elimina CPFs invalidos conhecidos
    if (
      cpf.length !== 11 ||
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    )
      return false;
    // Valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(9))) return false;
    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(10))) return false;
    return true;
  },

  formatMoney: (amount) => {
    const decimalCount = 2;
    const decimal = ',';
    const thousands = '.';
    const currencyPattern = 'R$ ';
    let amountFormat;

    if (typeof amount === 'number') {
      amountFormat = amount;
    } else {
      try {
        amountFormat = parseFloat(amount);
      } catch (e) {
        console.error(e);
        amountFormat = 0;
      }
    }

    if (amountFormat > 0) {
      amountFormat = amountFormat.toFixed(decimalCount);
      amountFormat = amountFormat.replace('.', decimal);
      amountFormat = amountFormat.replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
      amountFormat = currencyPattern + amountFormat;
      return amountFormat;
    }
    return 'R$ 0,00';
  }
};

export default Utils;
