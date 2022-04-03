----- Quanto a Abordagem Relacional, descreva os seguintes conceitos: -----

    a) Tabela
        Organiza e agrupa os seus dados por características ou princípios em comum. O banco de dados pode conter quantas
        tabelas forem necessárias para organizar os seus dados (limitado somente pela quantidade de espaço de armazenamento
        no seu disco rígido).

    b) Chave Primária
        A chave primária é usada para identificar univocamente uma linha em uma tabela. A chave primária pode ser composta,
        ter vários atributos, ou simples, um único atributo. 
            Ex: o atributo CPF pode ser usado como chave primária para a tabela CLIENTES pois identifica um único cliente
            considerando que não existe mais de um cliente com o mesmo CPF.

    c) Chave Estrangeira
        A chave estrangeira é formada por atributos que são chave primária em outra tabela, servindo assim para estabelecer
        relacionamentos entre as tabelas de um banco de dados. Assim, quando dizemos que duas tabelas estão relacionadas através
        de uma coluna devemos observar que em uma tabela esta coluna será chave primária e na outra tabela ela será uma chave
        estrangeira que fará a ligação entre as duas tabelas, estabelecendo o relacionamento. 
            Ex: podemos ter na tabela FUNCIONARIOS uma chave estrangeira COD_DEPTO que estabelece um relacionamento entre a tabela
            FUNCIONARIOS e a tabela DEPTOS, sendo que na tabela DEPTOS a coluna COD_DEPTO é a chave primária.

    d) Chave Alternativa
        Quando há várias chaves candidatas, uma é escolhida para ser a chave primária, e as restantes são chamadas de chaves
        alternativas. 
            Ex: Clientes(CPF, identidade, Nome, Endereco, LimCre)
            No caso CPF é a chave primária e identidade é a chave alternativa. Pode haver mais de uma chave alternativa em uma tabela.

    e) Domínio da Coluna
        O tipo de dados que descreve os tipos de valores que podem aparecer em cada coluna é chamado de domínio. Um domínio é um
        conjunto de valores atômicos. A especificação de um domínio é definida por um tipo de dados do qual os valores de dados que
        formam o domínio sejam retirados e a especificação de um nome para este domínio de modo a ajudar na interpretação de seus
        valores.

    f) Integridade de Dominio
        Restringe o conjunto de valores que podem ser gravados em uma coluna de uma tabela. Desta forma, somente os valores 
        que pertencem ao domínio podem ser gravados na coluna da tabela. Outros valores não são permitidos e a atualização é
        desfeita pelo gerenciador de banco de dados. O domínio define um conjunto de valores. Quando este domínio é associado
        a uma coluna de uma tabela, somente os valores definidos para o domínio podem ser gravados na coluna. Este tipo de restrição
        garante a qualidade de dados na base de dados.
 
    g) Integridade de Vazio
        Este tipo de integridade informa se a coluna é obrigatória ou opcional – ou seja, se é possível ou não inserir um valor na
        coluna.

    h) Integridade de Chave
        Os valores inseridos na coluna de chave primária (PK) devem ser sempre únicos, não admitindo-se repetições nesses valores.
        Desta forma, as tuplas (registros) serão sempre distintas. Os valores de chave primária também não podem ser nulos.

    i) Integridade Referencial
        Integridade referencial é um conceito relacionado à chaves estrangeiras. Este conceito diz que o valor que é chave 
        estrangeira em uma tabela destino, deve ser chave primária de algum registro na tabela origem. Quando essa regra é
        desrespeitada, então temos o caso em que a integridade referencial é violada.
