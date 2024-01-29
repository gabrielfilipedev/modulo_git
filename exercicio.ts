// Função de multiplicação
function multiplicacao(a: number, b: number): number {
    return a * b;
  }
  
  // Função de saudação
  function saudacao(nome: string): string {
    return `Olá ${nome}`;
  }
  
  const resultadoMultiplicacao: number = multiplicacao(2, 3);
  console.log(resultadoMultiplicacao); 
  
  const saudacaoParaUsuario: string = saudacao("Gabriel");
  console.log(saudacaoParaUsuario); 
  