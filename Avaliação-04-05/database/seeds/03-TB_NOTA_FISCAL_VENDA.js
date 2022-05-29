/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_NOTA_FISCAL_VENDA').del()
  await knex('TB_NOTA_FISCAL_VENDA').insert([
    {id: 111, codigo: "534", data: "29/05", valorNota: "85,00", cliente_id: "1", itemNotaFiscal_id: "11"},
    {id: 222, codigo: "758", data: "13/04", valorNota: "50,00", cliente_id: "2", itemNotaFiscal_id: "22"},
    {id: 333, codigo: "828", data: "01/01", valorNota: "54,60", cliente_id: "3", itemNotaFiscal_id: "33"},
  ]);
};
