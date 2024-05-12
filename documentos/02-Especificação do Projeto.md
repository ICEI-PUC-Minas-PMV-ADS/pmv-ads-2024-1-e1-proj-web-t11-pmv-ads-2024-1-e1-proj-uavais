# Especificação do Projeto

## Perfis de Usuários

[Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]

<table>
<tbody>
<tr align=center>
<th colspan="2">Engenharia </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Empresas de engenharia seja civil e ambiental </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1 – Melhorar o desempenho de mapeamento de área
  
2 – Inspecionar e identificar possíveis riscos em estruturas

3 – Facilitar o acesso em lugares remotos e de difícil acesso

4 – Sistema de patrulhamento remoto </td>
</tr>
<th colspan="2"> Agronegócio  </th>
</tr>
<tr>

<td width="150px"><b>Descrição</b></td>
<td width="600px">Empresas relacionadas ao comércio de produtos agrícolas  </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1 – Otimizar o processo de plantio 
  
2 – Verificação possíveis pragas gerando um informativo ao agricultor </th>
</tr>
<th colspan="2"> Agronegócio </tr>
</tr>
<tr>

<td width="150px"><b>Descrição</b></td>
<td width="600px">Empresas de segurança privada e pública  </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1 - Aprimorar o sistema de segurança 

2 - Monitorar atividades suspeitas  

3 - Facilitar o trabalho dos vigilantes
</table>


## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`|
|-----------------------------           |---------------------------                     |----------------------------------|
| Empresa de entrega de alimentos.       | Realizar entrega de alimentos nas residências. | Agilizar a entrega de alimentos e reduzir custos.| 
|Indústria.                              |Fazer ronda no perímetro da empresa|Identificar possível ameaça à segurança e emitir alerta para base, para que o funcionário identifique a posição e o nível de ameaça e tome a ação necessária|
| Empresa de sensoriamento remoto.       |  Mapear área necessária.                       | Facilitar o serviço do técnico, realizando a função de mapeamento e reconhecimento de tipos de solos como: Mata fechada, vegetação rasteira, solo impermeável e solo exposto.                                     |   
| Salva-vidas.                           | Fazer rondas em áreas de risco de afogamento.  | Identificar afogamento e emitir chamado para o salva-vidas de plantão, indicando a posição e emitindo alerta luminoso sobre o local para facilitar e agilizar o encontro da pessoa em que precisa ser salva.| 
| Concessionária de rodovias.            |Fazer ronda em trechos da rodovia.              | Identificar possíveis ameaças à segurança e relatar ao profissional de plantão, que terá acesso às imagens para a ação se necessária.               |
| Indústria agropecuária.                | Localizar ervas daninhas em plantações e pasto.| Otimizar a detecção de ervas daninhas que podem prejudicar a plantação e a alimentação do gado.                              |
| Empresa de construção civil e reparos prediais. | Identificar fissuras, trincas ou rachaduras na construção civil.| Otimizar a detecção de problemas na construção, ganhando tempo no serviço e melhorando a segurança da obra.   |
|Mineradora e construtoras.              | Fiscalizar a utilização de EPI.                |Verificar o uso de EPI em áreas de grande risco, onde não é cômodo haver câmera fixa.|
| Órgão de fiscalização de desmatamento. | Sobrevoar área de interesse.                    | Identificar e mapear áreas desmatadas utilizando técnicas de georreferenciamento e reconhecimento de imagem. |
| Concessionária de energia elétrica     | Identificar equipamentos com necessidade de manutenção em torres de energia elétrica. | Auxiliar na manutenção preventiva e corretiva da rede elétrica, desempenhando a tarefa de identificação em muito menos tempo.  |
|Empresa de terraplenagem                |Sobrevoar área onde será feita a terraplenagem     |Mapear o terreno e identificar a topografia para planejamento da obra.|


## Requisitos do Projeto

Este documento delineia os requisitos do projeto para a implementação bem-sucedida de drones em uma variedade de setores, visando melhorar a eficiência, segurança e eficácia das operações. 
Realizando em diferentes áreas, com ênfase em aplicações como agricultura, topografia, monitoramento ambiental, entre outros que possam ajudar no dia a dia da população ou governamental.


### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  A aplicação deve permitir ao usuário criar uma conta.| ALTA  | 
| RF-02 |  A aplicação deve permitir que o usuário faça login com a conta.  | ALTA  |
| RF-03 |  A aplicação deve oferecer a funcionalidade de cadastrar empresas  | ALTA  |
| RF-03 |	 A aplicação deve oferecer a funcionalidade de cadastrar empresas  | AlTA |
| RF-04 |	 A aplicação deve oferecer a funcionalidade de notificar qualquer ameaça detectada pelo drone. | MÉDIA |
| RF-05 |	 A aplicação deve oferecer a funcionalidade de cadastrar as imagens tiradas pelo drone. | MÉDIA |
| RF-06 |	 A aplicação deve permitir visualizar os detalhes da imagem adicionando mais informações. | MÉDIA |
| RF-07 |	 A aplicação deve mostrar a localização exata quando o drone estiver sobrevoando a rota. 	| ALTA |
| RF-08 |	 A aplicação deve oferecer a funcionalidade de cadastrar rotas de voo. | ALTA |
| RF-09 |	 A aplicação deve permitir a autorização do voo em determinada localização.	| MÉDIA |
**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |	A aplicação deve ser responsiva para diversos dispositivos | Alta |
| RNF-02 |  A aplicação deve ser compatível com os principais navegadores do mercado (Chrome, Firefox, Safari e Microsoft Edge). | ALTA |
| RNF-03 |	A aplicação deve ter um bom nível de acessibilidade ao usuário.	 | ALTA |
**Prioridade: Alta / Média / Baixa. 


**Prioridade: Alta / Média / Baixa. 

