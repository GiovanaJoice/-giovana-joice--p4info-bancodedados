----- Quanto a cardinalidade que define um relacionamento, pede-se: -----

a) Exemplifique e conceitue Cardinalidade Máxima e Cardinalidade Mínima
    - Cardinalidade Mínima - define se o relacionamento entre duas entidades é obrigatório ou não. Na cardinalidades mínima temos o número mínimo de vezes que uma entidade A pode ocorrer em B, ela pode assumir o valor de 0 ou 1.
    Ex: Temos a entidade País e a Entidade UF. Uma UF pertence pelo menos a UM País.
    - Cardinalidade Máxima - define a quantidade máxima de ocorrências da Entidade que pode participar do Relacionamento. Na cardinalidades Mínima temos o número máximo de vezes que uma entidade A pode ocorrer em B, ele pode assumir o valor de 1 ou N (inúmeras vezes).
    Ex: Temos a entidade País e a Entidade UF novamente. País possui no máximo Várias (mais de uma) UF.Juntando as duas cardinalidade temos o modelo lógico: País pertence no mínimo a ZERO UF e no máximo a VÁRIOS UF, UF pertence no máximo e no mínimo a UM País.
        
b) Explique um exemplo de uma cardinalidade 1:1;
    Ex: PESSOA pode ser no mínimo um CLIENTE. (Opcional) 
    CLIENTE É uma PESSOA. (Obrigatório)

c) Explique um exemplo de uma cardinalidade 1:n;
    Ex: PRODUTO possui nenhum ou muitas modalidade de produto 
        MODALIDADE DE PRODUTO pertence a um produto. 
    No relacionamento Um para Um temos o lado opcional e o lado obrigatório. A chave primária se desloca em direção ao lado opcional. No exemplo, o descolamento seria da entidade CLIENTE para a entidade PESSOA.

d) Explique um exemplo de uma cardinalidade n:n.
    Ex: CLIENTE celebra um ou vários Contratos
        CONTRATO é celebrado por um ou vários clientes
    A cardinalidade N para N leva para o modelo lógico a necessidade de definição de mais um entidade. Chamamos isto de ASSOCIATIVA.
