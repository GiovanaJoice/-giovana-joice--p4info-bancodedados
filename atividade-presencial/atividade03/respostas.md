----- Descreva as fases de um Projeto de Banco de Dados: -----

    1) Modelagem Conceitual
        Nesta primeira fase, é construído um modelo conceitual, na forma de um diagrama entidade-relacionamento. 
        Este modelo captura as necessidades da organização em termos de armazenamento de dados de forma independente
        de implementação.

    2) Projeto Lógico
        A etapa de projeto lógico objetiva transformar o modelo conceitual obtido na primeira fase em um modelo lógico. 
        O modelo lógico define como o banco de dados será implementado em um SGBD específico. Ele possui um nível de
        abstração visto pelo usuário do SGBD.

    3) Projeto Físico
        Na etapa de projeto físico, o modelo do banco de dados é enriquecido com detalhes que influenciam no desempenho do
        banco de dados, mas não interfere em sua funcionalidade. Também é decisão de como serão representados os dados no
        banco de dados armazenado. Contém detalhes de armazenamento interno de informações, detalhes que: não têm influência
        sobre a programação de aplicações no SGBD, mas, influenciam a performance das aplicações. Este processo normalmente é
        chamado de sintonia (“tuning”), contínuo.
