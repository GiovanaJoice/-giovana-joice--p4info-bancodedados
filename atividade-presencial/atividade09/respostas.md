  ----- Defina uma Tabela e exemplifique o uso de comando SQL que executam operações CRUD. -----  

      Uma coleção de dados pertinentes a um assunto, como clientes ou preços de ações. Um arquivo de banco de dados contém
    uma ou mais tabelas, que consistem em campos e registros. Quando se cria uma nova tabela, uma representação visual ou
    uma ocorrência da tabela aparece no gráfico de relacionamentos. É possível especificar várias ocorrências de tabela 
    (com nomes exclusivos) da mesma tabela para se trabalhar com relacionamentos complexos no gráfico.
      Primeiramente, para conceituar, CRUD um acrônimo para Create, Read, Update e Delete, as quatro operações elementares
    com bancos de dados relacionais. Para exemplificar, podemos demonstrar os comandos:
    __________________________________________________________________________________________________________________
    Create: depois de criar a tabela (create table), essa operação de cria um registro em uma tabela, é realizada pelo 
    comando INSERT):
          Exemplo:
            INSERT into FUNCIONARIO (IdFuncionario, Nome) values (1, ‘Funcionário A’);
    ___________________________________________________________________________________________________________________
    Read: é a operação de consulta de um ou mais registros em uma tabela, é realizada pelo comando SELECT.
          Exemplo:
            INSERT INTO CLIENTES (CODIGO, NOME, FONE, ENDERECO)
            SELECT (COD_CLI, NOME, FONE_CLI, END_CLI)
            FROM CLIENTES_INATIVOS;
    ___________________________________________________________________________________________________________________
    Update: esse comando é utilizado para a atualização de um ou mais registros de uma tabela, é realizado pelo comando
    UPDATE. 
          Exemplo:
            UPDATE CLIENTES
            SET CIDADE = 'Curitiba', UF = 'PR'
            WHERE COD_REF = 20;
    ____________________________________________________________________________________________________________________
    Delete: ele é comando utilizado para a exclusão de registro(s) de uma tabela. 
          Exemplo:
            DELETE from FUNCIONARIO where IdFuncionario = 1;
