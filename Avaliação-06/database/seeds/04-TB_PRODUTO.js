/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_PRODUTO').del()
  await knex('TB_PRODUTO').insert([
    {id: 1111, codigo: '534', descricao: "Arroz", valor: 8.50},
    {id: 2222, codigo: '758', descricao: "Feijão", valor: 10},
    {id: 3333, codigo: '828', descricao: "Biscoito", valor: 7.80},
  ]);
};
