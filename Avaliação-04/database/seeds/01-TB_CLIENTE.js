/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

  // Deletes ALL existing entries
//  await knex('TB_CLIENTE').del()
 // await knex('TB_CLIENTE').insert([
  //  {id: 1, colName: 'rowValue1'},
   // {id: 2, colName: 'rowValue2'},
   // {id: 3, colName: 'rowValue3'}
 // ]);
//};
  // Inserts seed entries
  exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('TB_CLIENTE').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('TB_CLIENTE').insert([
          {id: 1, codigo: '10', cnpjcpf: '965.760.453-28', nome: "Alexia", TipoCliente: "Pessoa_Fisica"},
          {id: 2, codigo: '20', cnpjcpf: '514.734.203-69', nome: "Frederico", TipoCliente: "Pessoa_Fisica"},
          {id: 3, codigo: '30', cnpjcpf: '35.892.243/0001-66', nome: "Nelson", TipoCliente: "Pessoa_Juridica"},
        ]);
      });
  };
