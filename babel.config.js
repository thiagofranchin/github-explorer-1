module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      /*
       * Ao adicionar runtime: 'automatic' não é necessário importar o React
       * nos arquivos.
      */
      runtime: 'automatic',
    }],
  ],
}