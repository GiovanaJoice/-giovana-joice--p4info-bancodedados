/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_ITEM_NOTA_FISCAL').del()
  await knex('TB_ITEM_NOTA_FISCAL').insert([
    {id: 11, sequencial: '100', quantidade: "10", valor: "85,00", produto_id: "1111", notaFiscal_id: "111", TipoCliente: "Pessoa_Fisica"},
    {id: 12, sequencial: '200', quantidade: "5", valor: "50,00", produto_id: "2222", notaFiscal_id: "222", TipoCliente: "Pessoa_Fisica"},
    {id: 13, sequencial: '300', quantidade: "7", valor: "54,60", produto_id: "3333", notaFiscal_id: "333", TipoCliente: "Pessoa_Juridica"},
  ]);
};
