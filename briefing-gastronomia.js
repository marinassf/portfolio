/**
 * BRIEFING DE IDENTIDADE PARA GASTRONOMIA — Mari Design Co.
 * Página privada por URL (noindex). Reaproveita o design do site e as
 * mesmas classes do briefing de identidade. Etapas, condicionais,
 * limites, validação, envio (Web3Forms) e i18n PT/EN vivem aqui.
 * Integra-se ao sistema de idioma existente (mesmo botão #lang-toggle e
 * mesma chave localStorage 'lang'); não cria um novo sistema de idioma.
 */
(function () {
    'use strict';

    /* =========================================================
       1. TRADUÇÕES (apenas as chaves bg.* desta página)
       ========================================================= */
    const BG = {
        pt: {
            "bg.header": "[ BRIEFING DE PROJETO CONTRATADO ]",
            "bg.title": "BRIEFING DE IDENTIDADE PARA GASTRONOMIA",
            "bg.intro": "ESTE É O BRIEFING OFICIAL DO SEU PROJETO DE IDENTIDADE PARA GASTRONOMIA.<br>RESPONDA COM CALMA E SINCERIDADE — SUAS RESPOSTAS SÃO A BASE DA PESQUISA E DA DIREÇÃO DA MARCA.",
            "bg.caption": "Leva cerca de 15–25 minutos. Você pode voltar a qualquer etapa sem perder o que já preencheu.",

            "bg.sel": "[ SELECIONE ]",
            "bg.opt.sim": "SIM",
            "bg.opt.nao": "NÃO",
            "bg.opt.ainda_nao": "AINDA NÃO",
            "bg.opt.ainda_nao_sei": "AINDA NÃO SEI",
            "bg.opt.talvez": "TALVEZ",
            "bg.opt.em_dev": "ESTÁ EM DESENVOLVIMENTO",
            "bg.opt.outro": "OUTRO",
            "bg.opt.aberto": "ESTOU ABERTA/O A AVALIAR",
            "bg.opt.nome_def_sim": "SIM, JÁ ESTÁ DEFINIDO",
            "bg.opt.nome_def_ajustes": "AINDA PODE SOFRER AJUSTES",
            "bg.q.especifique": "QUAL?",

            "bg.s1.label": "01 — MARCA",
            "bg.s1.title": "VAMOS COMEÇAR PELA MARCA.",
            "bg.s1.text": "Antes de pensar em como ela vai parecer, quero entender o nome, o contexto e a ideia por trás do negócio.",
            "bg.q.nome_marca": "NOME DA MARCA *",
            "bg.q.significado_nome": "O NOME POSSUI ALGUM SIGNIFICADO OU HISTÓRIA?",
            "bg.q.tem_tagline": "EXISTE ALGUMA TAGLINE, ASSINATURA OU SLOGAN?",
            "bg.q.tagline": "QUAL?",
            "bg.q.nome_definitivo": "O NOME DA MARCA JÁ ESTÁ DEFINIDO DEFINITIVAMENTE?",
            "bg.q.info_nome": "EXISTE ALGUMA INFORMAÇÃO QUE OBRIGATORIAMENTE PRECISA ACOMPANHAR O NOME?",
            "bg.h.info_nome": "Por exemplo: cafeteria, bar, cozinha autoral, padaria, restaurante, confeitaria ou outra informação necessária.",

            "bg.s2.label": "02 — NEGÓCIO",
            "bg.s2.title": "AGORA, O NEGÓCIO.",
            "bg.q.tipo_negocio": "QUAL É O TIPO DE NEGÓCIO?",
            "bg.tn.1": "RESTAURANTE", "bg.tn.2": "CAFÉ / CAFETERIA", "bg.tn.3": "BAR",
            "bg.tn.4": "PADARIA / CONFEITARIA", "bg.tn.5": "DELIVERY", "bg.tn.6": "PRODUTO ALIMENTÍCIO",
            "bg.q.momento": "EM QUE MOMENTO O NEGÓCIO ESTÁ? *",
            "bg.mo.1": "AINDA SERÁ LANÇADO", "bg.mo.2": "ESTÁ EM FASE DE LANÇAMENTO",
            "bg.mo.3": "JÁ ESTÁ FUNCIONANDO", "bg.mo.4": "JÁ EXISTE E ESTÁ PASSANDO POR UMA REFORMULAÇÃO",
            "bg.q.historia": "CONTE A HISTÓRIA DO NEGÓCIO. *",
            "bg.h.historia": "Como surgiu a ideia, em que momento está hoje e o que motivou a criação ou transformação da marca?",
            "bg.q.oferta": "O QUE O NEGÓCIO OFERECE? *",
            "bg.h.oferta": "Descreva os principais produtos, pratos, bebidas, experiências ou serviços oferecidos.",
            "bg.q.prioridade": "O QUE É MAIS IMPORTANTE FORTALECER NESTE MOMENTO? *",
            "bg.h.prioridade": "Pode ser o salão, o delivery, um produto específico, a percepção da marca, o lançamento, o ticket médio ou outro foco importante.",
            "bg.q.porque_escolher": "EM POUCAS PALAVRAS, POR QUE ALGUÉM ESCOLHERIA ESSE NEGÓCIO EM VEZ DE OUTRO? *",

            "bg.s3.label": "03 — CONCEITO & EXPERIÊNCIA",
            "bg.s3.title": "QUE EXPERIÊNCIA ESSA MARCA QUER CRIAR?",
            "bg.q.experiencia": "COMO VOCÊ GOSTARIA QUE AS PESSOAS SE SENTISSEM AO ENTRAR EM CONTATO COM A MARCA? *",
            "bg.h.experiencia": "Pense no primeiro contato com o nome, identidade, ambiente, cardápio, embalagem ou redes sociais.",
            "bg.q.atmosfera": "QUAL É A ATMOSFERA DESEJADA PARA O NEGÓCIO? *",
            "bg.h.atmosfera": "Pode pensar em clima, ritmo, energia, sensação e tipo de presença que o espaço ou a marca devem transmitir.",
            "bg.q.conceito": "EXISTE ALGUMA HISTÓRIA, MEMÓRIA, REFERÊNCIA CULTURAL OU PONTO DE PARTIDA CONCEITUAL IMPORTANTE PARA A MARCA?",
            "bg.q.aspectos": "EXISTE ALGUM ASPECTO DA EXPERIÊNCIA QUE DEVE SER ESPECIALMENTE VALORIZADO?",
            "bg.asp.1": "ATENDIMENTO", "bg.asp.2": "AMBIENTE", "bg.asp.3": "PRODUTO", "bg.asp.4": "RITUAL DE CONSUMO",
            "bg.asp.5": "AGILIDADE", "bg.asp.6": "SOFISTICAÇÃO", "bg.asp.7": "PROXIMIDADE", "bg.asp.8": "CRIATIVIDADE",
            "bg.asp.9": "CONFORTO", "bg.asp.10": "CONVENIÊNCIA",
            "bg.q.experiencia_evitar": "O QUE VOCÊ DEFINITIVAMENTE NÃO QUER QUE A EXPERIÊNCIA PAREÇA? *",

            "bg.s4.label": "04 — PÚBLICO",
            "bg.s4.title": "PARA QUEM ESSA MARCA EXISTE?",
            "bg.q.publico": "QUEM COSTUMA CONSUMIR O NEGÓCIO HOJE?",
            "bg.h.publico": "Se o negócio ainda não foi lançado, conte quem você espera que consuma a marca.",
            "bg.q.publico_desejado_flag": "EXISTE UM PÚBLICO QUE VOCÊ GOSTARIA DE ATRAIR MAIS?",
            "bg.q.publico_desejado": "QUEM?",
            "bg.q.publico_valoriza": "O QUE ESSE PÚBLICO COSTUMA VALORIZAR AO ESCOLHER UM NEGÓCIO COMO O SEU? *",
            "bg.q.barreira": "EXISTE ALGUMA BARREIRA OU OBJEÇÃO QUE PODE DIFICULTAR ESSA ESCOLHA?",
            "bg.h.barreira": "Por exemplo: preço, localização, confiança, percepção de qualidade, concorrência, desconhecimento, tipo de cozinha ou proposta.",
            "bg.q.ocasioes": "EM QUE OCASIÕES OU CONTEXTOS VOCÊ IMAGINA QUE ESSE PÚBLICO CONSUMIRÁ SUA MARCA?",
            "bg.h.ocasioes": "Exemplos: almoço de trabalho, café casual, jantar especial, encontro, delivery do dia a dia, presente, consumo rápido, celebração etc.",

            "bg.s5.label": "05 — OFERTA & CARDÁPIO",
            "bg.s5.title": "O QUE ESSA MARCA ENTREGA NA PRÁTICA?",
            "bg.q.itens": "QUAIS SÃO OS PRINCIPAIS PRODUTOS, PRATOS, BEBIDAS OU CATEGORIAS OFERECIDAS? *",
            "bg.q.item_central": "EXISTE ALGUM ITEM OU CATEGORIA QUE TENHA PAPEL CENTRAL NA PERCEPÇÃO DA MARCA?",
            "bg.h.item_central": "Pode ser um prato assinatura, tipo de cozinha, produto carro-chefe, linha específica ou combinação importante.",
            "bg.q.proposta_cardapio": "COMO VOCÊ DESCREVERIA O CARDÁPIO OU OFERTA EM TERMOS DE PROPOSTA?",
            "bg.h.proposta_cardapio": "Exemplos de lógica, não para escolher literalmente: enxuto, sazonal, técnico, casual, experimental, acessível, autoral, confortável, funcional, indulgente etc.",
            "bg.q.cardapio_existe": "O CARDÁPIO JÁ EXISTE?",
            "bg.q.cardapio_consideracoes": "O QUE PRECISA SER LEVADO EM CONTA NO DESENVOLVIMENTO DO CARDÁPIO COMO PEÇA DE MARCA? *",
            "bg.h.cardapio_consideracoes": "Pode envolver quantidade de itens, trocas frequentes, preço, leitura rápida, versão digital, QR code, menu de balcão, mesas, takeout etc.",
            "bg.q.delivery": "O NEGÓCIO TRABALHA OU PRETENDE TRABALHAR COM DELIVERY?",
            "bg.q.embalagens": "QUAIS MATERIAIS LIGADOS A DELIVERY E EMBALAGEM SÃO MAIS IMPORTANTES?",
            "bg.emb.1": "EMBALAGEM PRINCIPAL", "bg.emb.2": "ETIQUETA / ADESIVO", "bg.emb.3": "RÓTULO",
            "bg.emb.4": "SACOLA", "bg.emb.5": "MATERIAL DE APOIO", "bg.emb.6": "CARD DE AGRADECIMENTO",
            "bg.q.requisito_embalagem": "EXISTE ALGUM REQUISITO PRÁTICO IMPORTANTE EM RELAÇÃO À EMBALAGEM OU ROTULAGEM?",
            "bg.h.requisito_embalagem": "Por exemplo: contato com alimento, fornecedor já definido, poucos tamanhos, aplicação em etiqueta, resistência, custo, produção simples etc.",

            "bg.s6.label": "06 — MERCADO",
            "bg.s6.title": "O CONTEXTO EM QUE A MARCA EXISTE.",
            "bg.q.concorrentes": "QUAIS MARCAS OU NEGÓCIOS VOCÊ CONSIDERA SEUS PRINCIPAIS CONCORRENTES?",
            "bg.h.concorrentes": "Se possível, adicione os links (um por linha).",
            "bg.q.concorrentes_bem": "O QUE VOCÊ ACREDITA QUE ESSES CONCORRENTES FAZEM BEM?",
            "bg.q.espaco_mercado": "E ONDE VOCÊ ENXERGA ESPAÇO PARA FAZER DIFERENTE? *",
            "bg.q.afastar": "EXISTE ALGUMA LINGUAGEM VISUAL, COMPORTAMENTO OU PADRÃO DO SEGMENTO DO QUAL VOCÊ GOSTARIA DE SE AFASTAR? *",
            "bg.h.afastar": "Pode ser uma estética previsível, uma promessa genérica, um tipo de comunicação ou uma postura muito comum no setor.",

            "bg.s7.label": "07 — POSICIONAMENTO",
            "bg.s7.title": "COMO A MARCA QUER SER PERCEBIDA.",
            "bg.q.percepcao_atual": "COMO VOCÊ ACREDITA QUE O NEGÓCIO É PERCEBIDO HOJE?",
            "bg.h.percepcao_atual": "Se a marca ainda não foi lançada, conte como você acredita que negócios semelhantes ao seu costumam ser percebidos hoje.",
            "bg.q.percepcao_desejada": "E COMO VOCÊ GOSTARIA QUE A MARCA FOSSE PERCEBIDA? *",
            "bg.q.percepcoes_construir": "QUAIS PERCEPÇÕES VOCÊ MAIS PRECISA CONSTRUIR OU FORTALECER? (ATÉ 3)",
            "bg.perc.1": "QUALIDADE", "bg.perc.2": "CONFIANÇA", "bg.perc.3": "DESEJO", "bg.perc.4": "SOFISTICAÇÃO",
            "bg.perc.5": "ACESSIBILIDADE", "bg.perc.6": "CRIATIVIDADE", "bg.perc.7": "CUIDADO", "bg.perc.8": "CONFORTO",
            "bg.perc.9": "AGILIDADE", "bg.perc.10": "ORIGINALIDADE", "bg.perc.11": "AUTORIDADE", "bg.perc.12": "PROXIMIDADE",
            "bg.perc.13": "CONTEMPORANEIDADE", "bg.perc.14": "EXCLUSIVIDADE",
            "bg.q.percepcao_evitar": "EXISTE ALGUMA PERCEPÇÃO QUE VOCÊ DEFINITIVAMENTE NÃO QUER TRANSMITIR? *",
            "bg.q.frase_reconhecidos": "COMPLETE: QUEREMOS SER RECONHECIDOS COMO UMA MARCA QUE ______. *",
            "bg.q.espaco_proprio": "SE SUA MARCA PUDESSE OCUPAR UM ESPAÇO PRÓPRIO NO MERCADO, QUAL VOCÊ GOSTARIA QUE FOSSE? *",

            "bg.s8.label": "08 — IDENTIDADE ATUAL",
            "bg.s8.title": "O QUE JÁ EXISTE HOJE?",
            "bg.q.id_atual": "A MARCA JÁ POSSUI IDENTIDADE VISUAL? *",
            "bg.id.sim": "SIM", "bg.id.nao": "NÃO", "bg.id.logo": "POSSUI APENAS UM LOGOTIPO",
            "bg.id.parcial": "POSSUI ALGUNS ELEMENTOS, MAS NÃO UM SISTEMA DEFINIDO",
            "bg.q.elemento_importante": "EXISTE ALGUM ELEMENTO JÁ UTILIZADO PELA MARCA QUE VOCÊ CONSIDERA IMPORTANTE?",
            "bg.q.funciona_bem": "O QUE FUNCIONA BEM NA IDENTIDADE ATUAL?",
            "bg.q.nao_funciona": "O QUE NÃO FUNCIONA? *",
            "bg.q.porque_mudar": "POR QUE VOCÊ DECIDIU MUDAR AGORA?",
            "bg.q.preservar_flag": "EXISTE ALGO DA IDENTIDADE ATUAL QUE VOCÊ GOSTARIA QUE FOSSE CONSIDERADO OU PRESERVADO?",
            "bg.q.preservar_detalhe": "O QUÊ? E POR QUÊ?",
            "bg.q.desaparecer": "EXISTE ALGUM ELEMENTO QUE DEFINITIVAMENTE DEVERIA DESAPARECER?",

            "bg.s9.label": "09 — UNIVERSO VISUAL",
            "bg.s9.title": "REFERÊNCIAS, NÃO RECEITAS.",
            "bg.s9.text": "As próximas perguntas não servem para copiar referências nem definir antecipadamente como a identidade deve ser. Elas ajudam a entender repertório, expectativas e limites visuais.",
            "bg.q.ref_boas": "EXISTEM MARCAS CUJA IDENTIDADE VISUAL VOCÊ CONSIDERA ESPECIALMENTE BEM RESOLVIDA?",
            "bg.h.ref_boas": "Pode incluir links, um por linha.",
            "bg.q.ref_boas_pq": "O QUE EXATAMENTE CHAMA SUA ATENÇÃO NESSAS REFERÊNCIAS?",
            "bg.h.ref_boas_pq": "Tente falar sobre atmosfera, organização, atitude, clareza, sensação ou percepção — não apenas cores e fontes.",
            "bg.q.ref_evitar": "EXISTEM REFERÊNCIAS VISUAIS QUE DEFINITIVAMENTE NÃO COMBINAM COM A SUA MARCA?",
            "bg.q.ref_evitar_pq": "O QUE INCOMODA NESSAS REFERÊNCIAS?",
            "bg.q.repertorio": "EXISTE ALGUM REPERTÓRIO CULTURAL, GASTRONÔMICO, GEOGRÁFICO, HISTÓRICO OU COMPORTAMENTAL RELEVANTE PARA A MARCA?",
            "bg.h.repertorio": "Pode ser culinária, território, ingredientes, arquitetura, música, arte, objetos, materiais, memória afetiva, hábitos de consumo ou outros universos que façam sentido real para o negócio.",
            "bg.q.cor_flag": "EXISTE ALGUMA COR JÁ FORTEMENTE ASSOCIADA À MARCA?",
            "bg.q.cor_associada": "QUAL? POR QUE ELA É IMPORTANTE?",
            "bg.q.cor_evitar_flag": "EXISTE ALGUMA COR QUE TENHA UMA RAZÃO REAL PARA NÃO SER UTILIZADA?",
            "bg.q.cor_evitar": "QUAL? POR QUÊ?",
            "bg.h.cor_evitar": "Considere concorrência, segmento, cultura, produto, legibilidade, contexto de uso ou outras razões relevantes — não apenas gosto pessoal.",
            "bg.q.simbolo_evitar": "EXISTE ALGUM SÍMBOLO, ELEMENTO, PALAVRA OU ASSOCIAÇÃO VISUAL QUE PRECISA SER EVITADA?",
            "bg.q.simbolo_significado": "EXISTE ALGUM SÍMBOLO, INGREDIENTE, OBJETO OU REFERÊNCIA QUE TENHA SIGNIFICADO REAL PARA A MARCA?",
            "bg.h.simbolo_significado": "Isso não significa que ele necessariamente será utilizado no logotipo.",

            "bg.s10.label": "10 — APLICAÇÕES & USO REAL",
            "bg.s10.title": "ONDE ESSA MARCA PRECISA FUNCIONAR?",
            "bg.q.pontos_contato": "QUAIS PONTOS DE CONTATO SÃO MAIS IMPORTANTES PARA ESTE PROJETO?",
            "bg.pc.1": "CARDÁPIO IMPRESSO", "bg.pc.2": "CARDÁPIO DIGITAL / QR CODE", "bg.pc.3": "EMBALAGEM PRINCIPAL",
            "bg.pc.4": "RÓTULO / ETIQUETA / ADESIVO", "bg.pc.5": "PAPELARIA ESSENCIAL", "bg.pc.6": "MATERIAIS DIGITAIS DE LANÇAMENTO",
            "bg.pc.7": "INSTAGRAM / REDES SOCIAIS", "bg.pc.8": "FACHADA / SINALIZAÇÃO BÁSICA", "bg.pc.9": "AMBIENTE FÍSICO",
            "bg.pc.10": "UNIFORMES", "bg.pc.11": "DELIVERY",
            "bg.q.aplicacoes_prioritarias": "QUAIS DESSES PONTOS DE CONTATO SÃO PRIORITÁRIOS? (ATÉ 3)",
            "bg.q.contextos": "O LOGOTIPO OU SISTEMA VISUAL PRECISA FUNCIONAR ESPECIALMENTE BEM EM ALGUM CONTEXTO PEQUENO OU ESPECÍFICO?",
            "bg.ctx.1": "ETIQUETA PEQUENA", "bg.ctx.2": "ADESIVO", "bg.ctx.3": "PERFIL DE REDE SOCIAL",
            "bg.ctx.4": "QR CODE / MENU DIGITAL", "bg.ctx.5": "APLICAÇÃO EM EMBALAGEM", "bg.ctx.6": "APLICAÇÃO EM UNIFORME",
            "bg.ctx.7": "CARIMBO / UMA COR", "bg.ctx.nenhum": "NENHUM ESPECÍFICO",
            "bg.q.limitacao": "EXISTE ALGUMA LIMITAÇÃO TÉCNICA QUE EU DEVERIA CONHECER?",
            "bg.h.limitacao": "Por exemplo: aplicação em uma cor, etiqueta pronta, orçamento de produção, fornecedores, tamanhos mínimos, tipos de papel, materiais de embalagem ou outro processo de produção.",
            "bg.q.desdobramentos": "VOCÊ IMAGINA PRECISAR DE ALGUM MATERIAL ADICIONAL ALÉM DOS ITENS CENTRAIS DO PACOTE?",
            "bg.des.1": "PORTA-COPOS", "bg.des.2": "CARTÃO FIDELIDADE", "bg.des.3": "CARTÃO DE AGRADECIMENTO",
            "bg.des.4": "EMBALAGEM ADICIONAL", "bg.des.5": "RÓTULO ADICIONAL", "bg.des.6": "SACOLA",
            "bg.des.7": "BANNER OU PEÇA DE LANÇAMENTO", "bg.des.8": "TEMPLATES PARA REDES SOCIAIS", "bg.des.9": "MATERIAL PROMOCIONAL",
            "bg.des.naosei": "AINDA NÃO SEI",
            "bg.h.desdobramentos": "Esses itens não são automaticamente adicionados ao escopo contratado. A resposta serve para entender como a identidade precisará funcionar e identificar possíveis desdobramentos futuros.",

            "bg.s11.label": "11 — FINALIZAR",
            "bg.s11.title": "ANTES DE FINALIZAR.",
            "bg.q.aprovacao": "QUEM PARTICIPA DA APROVAÇÃO DESTE PROJETO?",
            "bg.apr.1": "APENAS EU", "bg.apr.2": "EU + SÓCIO(A)", "bg.apr.3": "EQUIPE",
            "bg.q.decisao_final": "QUEM TERÁ A DECISÃO FINAL SOBRE A IDENTIDADE? *",
            "bg.q.consulta_flag": "EXISTE ALGUMA OUTRA PESSOA QUE PRECISARÁ SER CONSULTADA DURANTE O PROCESSO?",
            "bg.q.consulta_detalhe": "QUEM E EM QUAL MOMENTO?",
            "bg.q.info_adicional": "EXISTE ALGUMA INFORMAÇÃO IMPORTANTE SOBRE O NEGÓCIO QUE NÃO APARECEU NESTE BRIEFING?",
            "bg.q.preocupacao": "EXISTE ALGUMA PREOCUPAÇÃO ESPECÍFICA EM RELAÇÃO AO PROJETO?",
            "bg.q.sucesso": "O QUE FARIA VOCÊ CONSIDERAR ESTE PROJETO UM SUCESSO? *",
            "bg.q.essencia": "SE EU PUDESSE LEMBRAR DE APENAS UMA COISA SOBRE ESSA MARCA ANTES DE COMEÇAR A CRIAR, O QUE DEVERIA SER? *",
            "bg.confirm.label": "TUDO CERTO?",
            "bg.confirm.text": "Suas respostas serão a base para a pesquisa, direção estratégica e desenvolvimento da identidade. Você não precisa saber todas as respostas “certas” — o mais importante é compartilhar o que conhece sobre o negócio com sinceridade.",
            "bg.confirm.check": "Confirmo que revisei as informações e que elas representam o cenário atual do negócio.",

            "bg.back": "[ ⟵ VOLTAR ]",
            "bg.next": "[ CONTINUAR ⟶ ]",
            "bg.submit": "[ ENVIAR BRIEFING ]",

            "bg.success.label": "RECEBIDO",
            "bg.success.title": "BRIEFING RECEBIDO.",
            "bg.success.text": "Obrigada por dedicar esse tempo ao projeto. Vou usar suas respostas como base para a pesquisa e construção da direção da marca.",
            "bg.success.home": "[ ⟵ VOLTAR AO INÍCIO ]",

            "bg.err.campo": "Preencha este campo para continuar.",
            "bg.msg.enviando": "ENVIANDO...",
            "bg.msg.erro": "Não foi possível enviar o briefing agora. Tente novamente em alguns instantes.",
            "bg.limit.msg3": "Você pode selecionar até 3 opções.",
            "bg.subject": "Briefing de Identidade para Gastronomia"
        },
        en: {
            "bg.header": "[ CONTRACTED PROJECT BRIEF ]",
            "bg.title": "FOOD & DRINK IDENTITY BRIEF",
            "bg.intro": "THIS IS THE OFFICIAL BRIEF FOR YOUR FOOD & DRINK IDENTITY PROJECT.<br>TAKE YOUR TIME AND BE HONEST — YOUR ANSWERS ARE THE FOUNDATION OF THE RESEARCH AND THE BRAND'S DIRECTION.",
            "bg.caption": "It takes about 15–25 minutes. You can go back to any step without losing what you've already filled in.",

            "bg.sel": "[ SELECT ]",
            "bg.opt.sim": "YES",
            "bg.opt.nao": "NO",
            "bg.opt.ainda_nao": "NOT YET",
            "bg.opt.ainda_nao_sei": "NOT SURE YET",
            "bg.opt.talvez": "MAYBE",
            "bg.opt.em_dev": "IN DEVELOPMENT",
            "bg.opt.outro": "OTHER",
            "bg.opt.aberto": "I'M OPEN TO CONSIDERING IT",
            "bg.opt.nome_def_sim": "YES, IT'S FINAL",
            "bg.opt.nome_def_ajustes": "IT MAY STILL CHANGE",
            "bg.q.especifique": "WHICH ONE?",

            "bg.s1.label": "01 — BRAND",
            "bg.s1.title": "LET'S START WITH THE BRAND.",
            "bg.s1.text": "Before thinking about how it will look, I want to understand the name, the context and the idea behind the business.",
            "bg.q.nome_marca": "BRAND NAME *",
            "bg.q.significado_nome": "DOES THE NAME HAVE A MEANING OR STORY?",
            "bg.q.tem_tagline": "IS THERE A TAGLINE, SIGNATURE OR SLOGAN?",
            "bg.q.tagline": "WHICH ONE?",
            "bg.q.nome_definitivo": "IS THE BRAND NAME ALREADY FINAL?",
            "bg.q.info_nome": "IS THERE ANY INFORMATION THAT MUST ALWAYS GO WITH THE NAME?",
            "bg.h.info_nome": "For example: café, bar, chef-driven kitchen, bakery, restaurant, patisserie or other required information.",

            "bg.s2.label": "02 — BUSINESS",
            "bg.s2.title": "NOW, THE BUSINESS.",
            "bg.q.tipo_negocio": "WHAT TYPE OF BUSINESS IS IT?",
            "bg.tn.1": "RESTAURANT", "bg.tn.2": "CAFÉ / COFFEE SHOP", "bg.tn.3": "BAR",
            "bg.tn.4": "BAKERY / PATISSERIE", "bg.tn.5": "DELIVERY", "bg.tn.6": "FOOD PRODUCT",
            "bg.q.momento": "WHAT STAGE IS THE BUSINESS AT? *",
            "bg.mo.1": "NOT LAUNCHED YET", "bg.mo.2": "IN THE LAUNCH PHASE",
            "bg.mo.3": "ALREADY OPERATING", "bg.mo.4": "ALREADY EXISTS AND IS BEING REFRESHED",
            "bg.q.historia": "TELL THE STORY OF THE BUSINESS. *",
            "bg.h.historia": "How did the idea come about, where is it today and what motivated creating or transforming the brand?",
            "bg.q.oferta": "WHAT DOES THE BUSINESS OFFER? *",
            "bg.h.oferta": "Describe the main products, dishes, drinks, experiences or services you offer.",
            "bg.q.prioridade": "WHAT MATTERS MOST TO STRENGTHEN RIGHT NOW? *",
            "bg.h.prioridade": "It could be the dining room, delivery, a specific product, brand perception, the launch, the average ticket or another key focus.",
            "bg.q.porque_escolher": "IN A FEW WORDS, WHY WOULD SOMEONE CHOOSE THIS BUSINESS OVER ANOTHER? *",

            "bg.s3.label": "03 — CONCEPT & EXPERIENCE",
            "bg.s3.title": "WHAT EXPERIENCE DOES THIS BRAND WANT TO CREATE?",
            "bg.q.experiencia": "HOW WOULD YOU LIKE PEOPLE TO FEEL WHEN THEY ENCOUNTER THE BRAND? *",
            "bg.h.experiencia": "Think of the first contact with the name, identity, space, menu, packaging or social media.",
            "bg.q.atmosfera": "WHAT ATMOSPHERE DO YOU WANT FOR THE BUSINESS? *",
            "bg.h.atmosfera": "Think about mood, pace, energy, feeling and the kind of presence the space or brand should convey.",
            "bg.q.conceito": "IS THERE A STORY, MEMORY, CULTURAL REFERENCE OR CONCEPTUAL STARTING POINT IMPORTANT TO THE BRAND?",
            "bg.q.aspectos": "IS THERE AN ASPECT OF THE EXPERIENCE THAT SHOULD BE ESPECIALLY VALUED?",
            "bg.asp.1": "SERVICE", "bg.asp.2": "ATMOSPHERE", "bg.asp.3": "PRODUCT", "bg.asp.4": "RITUAL OF CONSUMPTION",
            "bg.asp.5": "SPEED", "bg.asp.6": "SOPHISTICATION", "bg.asp.7": "CLOSENESS", "bg.asp.8": "CREATIVITY",
            "bg.asp.9": "COMFORT", "bg.asp.10": "CONVENIENCE",
            "bg.q.experiencia_evitar": "WHAT DO YOU DEFINITELY NOT WANT THE EXPERIENCE TO FEEL LIKE? *",

            "bg.s4.label": "04 — AUDIENCE",
            "bg.s4.title": "WHO IS THIS BRAND FOR?",
            "bg.q.publico": "WHO USUALLY CONSUMES THE BUSINESS TODAY?",
            "bg.h.publico": "If the business hasn't launched yet, tell me who you expect to consume the brand.",
            "bg.q.publico_desejado_flag": "IS THERE AN AUDIENCE YOU'D LIKE TO ATTRACT MORE?",
            "bg.q.publico_desejado": "WHO?",
            "bg.q.publico_valoriza": "WHAT DOES THIS AUDIENCE USUALLY VALUE WHEN CHOOSING A BUSINESS LIKE YOURS? *",
            "bg.q.barreira": "IS THERE A BARRIER OR OBJECTION THAT COULD MAKE THAT CHOICE HARDER?",
            "bg.h.barreira": "For example: price, location, trust, perceived quality, competition, lack of awareness, type of cuisine or concept.",
            "bg.q.ocasioes": "IN WHICH OCCASIONS OR CONTEXTS DO YOU IMAGINE THIS AUDIENCE CONSUMING YOUR BRAND?",
            "bg.h.ocasioes": "Examples: work lunch, casual coffee, special dinner, a date, everyday delivery, a gift, a quick bite, a celebration, etc.",

            "bg.s5.label": "05 — OFFER & MENU",
            "bg.s5.title": "WHAT DOES THIS BRAND ACTUALLY DELIVER?",
            "bg.q.itens": "WHAT ARE THE MAIN PRODUCTS, DISHES, DRINKS OR CATEGORIES OFFERED? *",
            "bg.q.item_central": "IS THERE AN ITEM OR CATEGORY THAT PLAYS A CENTRAL ROLE IN THE BRAND'S PERCEPTION?",
            "bg.h.item_central": "It could be a signature dish, a type of cuisine, a flagship product, a specific line or an important combination.",
            "bg.q.proposta_cardapio": "HOW WOULD YOU DESCRIBE THE MENU OR OFFER IN TERMS OF ITS APPROACH?",
            "bg.h.proposta_cardapio": "Examples of logic, not to pick literally: tight, seasonal, technical, casual, experimental, accessible, chef-driven, comforting, functional, indulgent, etc.",
            "bg.q.cardapio_existe": "DOES THE MENU ALREADY EXIST?",
            "bg.q.cardapio_consideracoes": "WHAT NEEDS TO BE CONSIDERED IN DEVELOPING THE MENU AS A BRAND PIECE? *",
            "bg.h.cardapio_consideracoes": "It may involve number of items, frequent changes, price, quick reading, a digital version, QR code, counter menu, tables, takeout, etc.",
            "bg.q.delivery": "DOES THE BUSINESS DO OR PLAN TO DO DELIVERY?",
            "bg.q.embalagens": "WHICH DELIVERY AND PACKAGING MATERIALS ARE MOST IMPORTANT?",
            "bg.emb.1": "MAIN PACKAGING", "bg.emb.2": "LABEL / STICKER", "bg.emb.3": "PRODUCT LABEL",
            "bg.emb.4": "BAG", "bg.emb.5": "SUPPORTING MATERIAL", "bg.emb.6": "THANK-YOU CARD",
            "bg.q.requisito_embalagem": "IS THERE AN IMPORTANT PRACTICAL REQUIREMENT REGARDING PACKAGING OR LABELING?",
            "bg.h.requisito_embalagem": "For example: food contact, an already-chosen supplier, few sizes, application on a label, durability, cost, simple production, etc.",

            "bg.s6.label": "06 — MARKET",
            "bg.s6.title": "THE CONTEXT THE BRAND LIVES IN.",
            "bg.q.concorrentes": "WHICH BRANDS OR BUSINESSES DO YOU SEE AS YOUR MAIN COMPETITORS?",
            "bg.h.concorrentes": "If you can, add the links (one per line).",
            "bg.q.concorrentes_bem": "WHAT DO YOU THINK THESE COMPETITORS DO WELL?",
            "bg.q.espaco_mercado": "AND WHERE DO YOU SEE ROOM TO DO IT DIFFERENTLY? *",
            "bg.q.afastar": "IS THERE A VISUAL LANGUAGE, BEHAVIOR OR PATTERN IN THE SEGMENT YOU'D LIKE TO MOVE AWAY FROM? *",
            "bg.h.afastar": "It could be a predictable aesthetic, a generic promise, a way of communicating or a posture that's very common in the sector.",

            "bg.s7.label": "07 — POSITIONING",
            "bg.s7.title": "HOW THE BRAND WANTS TO BE PERCEIVED.",
            "bg.q.percepcao_atual": "HOW DO YOU THINK THE BUSINESS IS PERCEIVED TODAY?",
            "bg.h.percepcao_atual": "If the brand hasn't launched, tell me how you think businesses similar to yours are usually perceived today.",
            "bg.q.percepcao_desejada": "AND HOW WOULD YOU LIKE THE BRAND TO BE PERCEIVED? *",
            "bg.q.percepcoes_construir": "WHICH PERCEPTIONS DO YOU MOST NEED TO BUILD OR STRENGTHEN? (UP TO 3)",
            "bg.perc.1": "QUALITY", "bg.perc.2": "TRUST", "bg.perc.3": "DESIRE", "bg.perc.4": "SOPHISTICATION",
            "bg.perc.5": "ACCESSIBILITY", "bg.perc.6": "CREATIVITY", "bg.perc.7": "CARE", "bg.perc.8": "COMFORT",
            "bg.perc.9": "SPEED", "bg.perc.10": "ORIGINALITY", "bg.perc.11": "AUTHORITY", "bg.perc.12": "CLOSENESS",
            "bg.perc.13": "CONTEMPORANEITY", "bg.perc.14": "EXCLUSIVITY",
            "bg.q.percepcao_evitar": "IS THERE A PERCEPTION YOU DEFINITELY DON'T WANT TO CONVEY? *",
            "bg.q.frase_reconhecidos": "COMPLETE: WE WANT TO BE KNOWN AS A BRAND THAT ______. *",
            "bg.q.espaco_proprio": "IF YOUR BRAND COULD OWN A SPACE OF ITS OWN IN THE MARKET, WHAT WOULD YOU WANT IT TO BE? *",

            "bg.s8.label": "08 — CURRENT IDENTITY",
            "bg.s8.title": "WHAT ALREADY EXISTS TODAY?",
            "bg.q.id_atual": "DOES THE BRAND ALREADY HAVE A VISUAL IDENTITY? *",
            "bg.id.sim": "YES", "bg.id.nao": "NO", "bg.id.logo": "ONLY A LOGO",
            "bg.id.parcial": "SOME ELEMENTS, BUT NOT A DEFINED SYSTEM",
            "bg.q.elemento_importante": "IS THERE AN ELEMENT ALREADY USED BY THE BRAND THAT YOU CONSIDER IMPORTANT?",
            "bg.q.funciona_bem": "WHAT WORKS WELL IN THE CURRENT IDENTITY?",
            "bg.q.nao_funciona": "WHAT DOESN'T WORK? *",
            "bg.q.porque_mudar": "WHY DID YOU DECIDE TO CHANGE NOW?",
            "bg.q.preservar_flag": "IS THERE ANYTHING IN THE CURRENT IDENTITY YOU'D LIKE CONSIDERED OR PRESERVED?",
            "bg.q.preservar_detalhe": "WHAT? AND WHY?",
            "bg.q.desaparecer": "IS THERE AN ELEMENT THAT SHOULD DEFINITELY GO AWAY?",

            "bg.s9.label": "09 — VISUAL WORLD",
            "bg.s9.title": "REFERENCES, NOT RECIPES.",
            "bg.s9.text": "The next questions aren't meant to copy references or decide in advance how the identity should look. They help me understand your repertoire, expectations and visual limits.",
            "bg.q.ref_boas": "ARE THERE BRANDS WHOSE VISUAL IDENTITY YOU FIND ESPECIALLY WELL RESOLVED?",
            "bg.h.ref_boas": "You can include links, one per line.",
            "bg.q.ref_boas_pq": "WHAT EXACTLY CATCHES YOUR ATTENTION IN THESE REFERENCES?",
            "bg.h.ref_boas_pq": "Try to talk about atmosphere, organization, attitude, clarity, feeling or perception — not just colors and fonts.",
            "bg.q.ref_evitar": "ARE THERE VISUAL REFERENCES THAT DEFINITELY DON'T FIT YOUR BRAND?",
            "bg.q.ref_evitar_pq": "WHAT BOTHERS YOU ABOUT THESE REFERENCES?",
            "bg.q.repertorio": "IS THERE A CULTURAL, CULINARY, GEOGRAPHIC, HISTORICAL OR BEHAVIORAL REPERTOIRE RELEVANT TO THE BRAND?",
            "bg.h.repertorio": "It can be cuisine, territory, ingredients, architecture, music, art, objects, materials, affective memory, consumption habits or other worlds that genuinely make sense for the business.",
            "bg.q.cor_flag": "IS THERE A COLOR ALREADY STRONGLY ASSOCIATED WITH THE BRAND?",
            "bg.q.cor_associada": "WHICH ONE? WHY IS IT IMPORTANT?",
            "bg.q.cor_evitar_flag": "IS THERE A COLOR WITH A REAL REASON NOT TO BE USED?",
            "bg.q.cor_evitar": "WHICH ONE? WHY?",
            "bg.h.cor_evitar": "Consider competition, segment, culture, product, legibility, context of use or other relevant reasons — not just personal taste.",
            "bg.q.simbolo_evitar": "IS THERE A SYMBOL, ELEMENT, WORD OR VISUAL ASSOCIATION THAT MUST BE AVOIDED?",
            "bg.q.simbolo_significado": "IS THERE A SYMBOL, INGREDIENT, OBJECT OR REFERENCE WITH REAL MEANING FOR THE BRAND?",
            "bg.h.simbolo_significado": "This doesn't mean it will necessarily be used in the logo.",

            "bg.s10.label": "10 — APPLICATIONS & REAL USE",
            "bg.s10.title": "WHERE DOES THIS BRAND NEED TO WORK?",
            "bg.q.pontos_contato": "WHICH TOUCHPOINTS ARE MOST IMPORTANT FOR THIS PROJECT?",
            "bg.pc.1": "PRINTED MENU", "bg.pc.2": "DIGITAL MENU / QR CODE", "bg.pc.3": "MAIN PACKAGING",
            "bg.pc.4": "LABEL / TAG / STICKER", "bg.pc.5": "ESSENTIAL STATIONERY", "bg.pc.6": "DIGITAL LAUNCH MATERIALS",
            "bg.pc.7": "INSTAGRAM / SOCIAL MEDIA", "bg.pc.8": "STOREFRONT / BASIC SIGNAGE", "bg.pc.9": "PHYSICAL SPACE",
            "bg.pc.10": "UNIFORMS", "bg.pc.11": "DELIVERY",
            "bg.q.aplicacoes_prioritarias": "WHICH OF THESE TOUCHPOINTS ARE PRIORITIES? (UP TO 3)",
            "bg.q.contextos": "DOES THE LOGO OR VISUAL SYSTEM NEED TO WORK ESPECIALLY WELL IN A SMALL OR SPECIFIC CONTEXT?",
            "bg.ctx.1": "SMALL LABEL", "bg.ctx.2": "STICKER", "bg.ctx.3": "SOCIAL MEDIA PROFILE",
            "bg.ctx.4": "QR CODE / DIGITAL MENU", "bg.ctx.5": "PACKAGING APPLICATION", "bg.ctx.6": "UNIFORM APPLICATION",
            "bg.ctx.7": "STAMP / ONE COLOR", "bg.ctx.nenhum": "NONE IN PARTICULAR",
            "bg.q.limitacao": "IS THERE A TECHNICAL LIMITATION I SHOULD KNOW ABOUT?",
            "bg.h.limitacao": "For example: one-color application, ready-made labels, production budget, suppliers, minimum sizes, paper types, packaging materials or another production process.",
            "bg.q.desdobramentos": "DO YOU IMAGINE NEEDING ANY ADDITIONAL MATERIAL BEYOND THE CORE ITEMS OF THE PACKAGE?",
            "bg.des.1": "COASTERS", "bg.des.2": "LOYALTY CARD", "bg.des.3": "THANK-YOU CARD",
            "bg.des.4": "ADDITIONAL PACKAGING", "bg.des.5": "ADDITIONAL LABEL", "bg.des.6": "BAG",
            "bg.des.7": "LAUNCH BANNER OR PIECE", "bg.des.8": "SOCIAL MEDIA TEMPLATES", "bg.des.9": "PROMOTIONAL MATERIAL",
            "bg.des.naosei": "NOT SURE YET",
            "bg.h.desdobramentos": "These items are not automatically added to the contracted scope. Your answer helps me understand how the identity will need to work and spot possible future extensions.",

            "bg.s11.label": "11 — FINISH",
            "bg.s11.title": "BEFORE WE FINISH.",
            "bg.q.aprovacao": "WHO TAKES PART IN APPROVING THIS PROJECT?",
            "bg.apr.1": "JUST ME", "bg.apr.2": "ME + PARTNER", "bg.apr.3": "TEAM",
            "bg.q.decisao_final": "WHO WILL HAVE THE FINAL DECISION ON THE IDENTITY? *",
            "bg.q.consulta_flag": "IS THERE ANYONE ELSE WHO WILL NEED TO BE CONSULTED DURING THE PROCESS?",
            "bg.q.consulta_detalhe": "WHO AND AT WHICH STAGE?",
            "bg.q.info_adicional": "IS THERE IMPORTANT INFORMATION ABOUT THE BUSINESS THAT DIDN'T COME UP IN THIS BRIEF?",
            "bg.q.preocupacao": "IS THERE A SPECIFIC CONCERN ABOUT THE PROJECT?",
            "bg.q.sucesso": "WHAT WOULD MAKE YOU CONSIDER THIS PROJECT A SUCCESS? *",
            "bg.q.essencia": "IF I COULD REMEMBER ONLY ONE THING ABOUT THIS BRAND BEFORE I START CREATING, WHAT SHOULD IT BE? *",
            "bg.confirm.label": "ALL GOOD?",
            "bg.confirm.text": "Your answers will be the basis for the research, strategic direction and development of the identity. You don't need to know all the “right” answers — what matters most is sharing what you know about the business honestly.",
            "bg.confirm.check": "I confirm that I've reviewed the information and that it represents the business's current situation.",

            "bg.back": "[ ⟵ BACK ]",
            "bg.next": "[ CONTINUE ⟶ ]",
            "bg.submit": "[ SEND BRIEF ]",

            "bg.success.label": "RECEIVED",
            "bg.success.title": "BRIEF RECEIVED.",
            "bg.success.text": "Thank you for taking the time. I'll use your answers as the basis for the research and for shaping the brand's direction.",
            "bg.success.home": "[ ⟵ BACK TO HOME ]",

            "bg.err.campo": "Please fill in this field to continue.",
            "bg.msg.enviando": "SENDING...",
            "bg.msg.erro": "The brief couldn't be sent right now. Please try again in a few moments.",
            "bg.limit.msg3": "You can select up to 3 options.",
            "bg.subject": "Food & Drink Identity Brief"
        }
    };

    /* =========================================================
       2. ARRANQUE
       ========================================================= */
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('briefing-gastronomia-form');
        if (!form) return;

        const steps = Array.from(form.querySelectorAll('.bi-step'));
        const btnBack = document.getElementById('bg-back');
        const btnNext = document.getElementById('bg-next');
        const btnSubmit = document.getElementById('bg-submit');
        const curEl = document.getElementById('bg-current');
        const totalEl = document.getElementById('bg-total');
        const statusEl = document.getElementById('bg-status');
        const successEl = document.getElementById('bg-success');
        const subjectField = document.getElementById('bg-subject');
        let current = 0;
        let enviando = false;

        const curLang = () => (localStorage.getItem('lang') === 'en' ? 'en' : 'pt');
        const t = (key) => (BG[curLang()][key] != null ? BG[curLang()][key] : key);

        /* ---------- I18N (aplica só as chaves bg.*) ---------- */
        function applyBG() {
            const dict = BG[curLang()];
            document.querySelectorAll('[data-i18n]').forEach(function (el) {
                const k = el.getAttribute('data-i18n');
                if (dict[k] != null) el.innerHTML = dict[k];
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
                const k = el.getAttribute('data-i18n-placeholder');
                if (dict[k] != null) el.placeholder = dict[k];
            });
            if (statusEl.dataset.k) statusEl.textContent = dict[statusEl.dataset.k] || '';
        }

        /* ---------- CONDICIONAIS (com disabled) ---------- */
        function ligar(el, ativo) {
            el.hidden = !ativo;
            el.querySelectorAll('input, select, textarea').forEach(function (f) {
                if (f.hasAttribute('data-keep')) return;
                f.disabled = !ativo;
                if (f.dataset.req === '1') f.required = ativo;
            });
        }

        function whenActive(el) {
            const parts = el.dataset.when.split(':');
            const src = form.querySelector('#' + parts[0]);
            if (!src || src.disabled) return false;
            if (parts[1] === 'checked') return src.checked;
            return src.value === parts[1];
        }

        function aplicarCondicionais() {
            const idSel = form.querySelector('#bg-id-atual');
            const idv = idSel ? idSel.value : '';
            const delSel = form.querySelector('#bg-delivery');
            const dv = delSel ? delSel.value : '';
            const condState = {
                'id-nao': idv === 'Não',
                'id-tem': idv === 'Sim' || idv === 'Apenas um logotipo' || idv === 'Alguns elementos, sem sistema',
                'delivery-on': dv === 'Sim' || dv === 'Talvez'
            };
            form.querySelectorAll('[data-when], [data-cond]').forEach(function (el) {
                let ativo = true;
                if (el.dataset.cond) ativo = ativo && !!condState[el.dataset.cond];
                if (el.dataset.when) ativo = ativo && whenActive(el);
                ligar(el, ativo);
            });
        }

        /* ---------- LIMITES DE SELEÇÃO ---------- */
        function enforceLimit(grid, justChanged) {
            const max = parseInt(grid.dataset.max, 10);
            const checked = grid.querySelectorAll('input[type="checkbox"]:checked');
            if (checked.length > max && justChanged && justChanged.checked) {
                justChanged.checked = false;
                showStatus(grid.dataset.maxMsg, 'erro');
            }
        }

        /* ---------- STATUS / ERROS ---------- */
        function showStatus(key, tipo) {
            statusEl.dataset.k = key || '';
            statusEl.textContent = key ? t(key) : '';
            statusEl.className = 'form-status mono' + (tipo ? ' is-' + tipo : '');
        }

        function clearErrors(scope) {
            (scope || form).querySelectorAll('.has-error').forEach(function (el) {
                el.classList.remove('has-error');
            });
        }

        function markError(field) {
            const box = field.closest('.input-group') || field.closest('.bi-confirm') || field.closest('.check-item');
            if (box) box.classList.add('has-error');
        }

        /* ---------- VALIDAÇÃO POR ETAPA ---------- */
        function validateStep(stepEl) {
            clearErrors(stepEl);
            const req = Array.from(stepEl.querySelectorAll('[data-req="1"]')).filter(function (f) {
                return !f.disabled && !f.closest('[hidden]');
            });
            for (let i = 0; i < req.length; i++) {
                const f = req[i];
                const ok = (f.type === 'checkbox') ? f.checked : String(f.value).trim() !== '';
                if (!ok) {
                    markError(f);
                    showStatus('bg.err.campo', 'erro');
                    try { f.focus({ preventScroll: false }); } catch (e) { f.focus(); }
                    return false;
                }
            }
            showStatus('', '');
            return true;
        }

        /* ---------- NAVEGAÇÃO ---------- */
        const pad = function (n) { return String(n).padStart(2, '0'); };

        function scrollToForm() {
            const anchor = document.querySelector('.briefing-page .raw-section') || form;
            if (anchor && anchor.scrollIntoView) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function show(i) {
            current = Math.max(0, Math.min(steps.length - 1, i));
            steps.forEach(function (s, idx) { s.hidden = idx !== current; });
            const last = current === steps.length - 1;
            curEl.textContent = pad(current + 1);
            btnBack.hidden = current === 0;
            btnNext.hidden = last;
            btnSubmit.hidden = !last;
        }

        function goNext() {
            if (validateStep(steps[current])) {
                if (current < steps.length - 1) { show(current + 1); scrollToForm(); }
            }
        }

        function goBack() {
            if (current > 0) { show(current - 1); scrollToForm(); }
        }

        btnNext.addEventListener('click', goNext);
        btnBack.addEventListener('click', goBack);

        /* ---------- CHANGE / INPUT GLOBAL ---------- */
        form.addEventListener('change', function (e) {
            const target = e.target;
            const limitGrid = target.closest ? target.closest('.check-grid[data-max]') : null;
            if (limitGrid && target.type === 'checkbox') enforceLimit(limitGrid, target);
            aplicarCondicionais();
        });

        form.addEventListener('input', function (e) {
            const box = e.target.closest ? e.target.closest('.has-error') : null;
            if (box) { box.classList.remove('has-error'); showStatus('', ''); }
        });

        /* ---------- ENVIO (WEB3FORMS) ---------- */
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            if (current < steps.length - 1) { goNext(); return; }
            if (enviando) return;
            if (!validateStep(steps[current])) return;

            const nome = (form.querySelector('#bg-nome-marca') || {}).value || '';
            subjectField.value = t('bg.subject') + ' — ' + (nome.trim() || 'Mari Design Co.');

            enviando = true;
            btnSubmit.disabled = true;
            btnSubmit.style.pointerEvents = 'none';
            showStatus('bg.msg.enviando');

            try {
                const resp = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: new FormData(form)
                });
                const data = await resp.json();
                if (data.success) {
                    form.hidden = true;
                    successEl.hidden = false;
                    scrollToForm();
                } else {
                    showStatus('bg.msg.erro', 'erro');
                }
            } catch (err) {
                showStatus('bg.msg.erro', 'erro');
            } finally {
                enviando = false;
                btnSubmit.disabled = false;
                btnSubmit.style.pointerEvents = '';
            }
        });

        /* ---------- INICIALIZAÇÃO ---------- */
        totalEl.textContent = pad(steps.length);
        aplicarCondicionais();
        applyBG();
        show(0);

        new MutationObserver(applyBG).observe(document.documentElement, {
            attributes: true, attributeFilter: ['lang']
        });
        const lt = document.getElementById('lang-toggle');
        if (lt) lt.addEventListener('click', function () { setTimeout(applyBG, 0); });
    });
})();
