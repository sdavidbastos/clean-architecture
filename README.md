# Clena Arquitecture

## Entities

```
Responsável por concentrar os principais
participantes das regras de negócio.
```

- Objetos de negócio;
- Aplica regras que geralmente fazem parte apenas da entidade.
- Sem vínculo com frameworks (ORM)

## Use Cases

```
Realizam a orquestração das Entities na 
concepção das regras de negócio.
```

- Representas as regras de negócio.
- Sem vinculo com frameorks, exceto por 
  algumas bibliotecas utilitárias.
- O caso de uso não sabe quem o está utilizando, se está 
  consumindo os dados no formato JSON ou XML.
- Lançam exceções de negócio.

## Interface Adapters

```
Fazem a tradução entre o mundo externo e as regras de negócio.
```
- Fazem o intercâmbio de dados entre a base de dados,
  interface gráfica e outros serviços utilizados
  pela aplicação.
- Definem interfaces de maneira que uma ou mais
  implementações podem existir.
- Os casos de uso não sabem de onde os dados
  estão vindo.
- Covertem os dados para o mecanismo de I/O.

## Frameworks and Drivres
```
São aspectos puramente tecnológicos, não funcionais.
```
- São frameowrks e outras estruturas externas que fazem
  I/O com a aplicação.

## Camadas
```
As camadas da Clena Architecture são logícas, não
tem relação fisica, ou seja, com as pastas que
devem ser criadas.
```

## Passos
1. Regras de negocios. 

# Desacoplar
```
Considerando uma linguagem orientada a objetos,
a forma mais normal de desacoplar é utilizando
a inversão de dependência.
```