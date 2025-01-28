// Async

const esperarSegundos = async (segundos) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log(`Han pasado ${segundos} segundos.`);
          resolve();
      }, segundos * 5000);
  });
};

export default esperarSegundos;




  
