/**
 * BRIEFING DE IDENTIDADE VISUAL — Mari Design Co.
 * Página privada por URL (noindex). Reaproveita o design do site.
 * Toda a lógica de etapas, condicionais, limites, conflito, validação,
 * envio (Web3Forms) e i18n PT/EN específica desta página vive aqui.
 * Integra-se ao sistema de idioma existente (mesmo botão #lang-toggle e
 * mesma chave localStorage 'lang'); não cria um novo sistema de idioma.
 */
(function () {
    'use strict';

    /* =========================================================
       1. TRADUÇÕES (apenas as chaves bi.* desta página)
       ========================================================= */
    const BI = {
        pt: {
            "bi.header": "[ BRIEFING DE PROJETO CONTRATADO ]",
            "bi.title": "BRIEFING DE IDENTIDADE VISUAL",
            "bi.intro": "ESTE É O BRIEFING OFICIAL DO SEU PROJETO DE IDENTIDADE VISUAL.<br>RESPONDA COM CALMA E SINCERIDADE — SUAS RESPOSTAS SÃO A BASE DA PESQUISA E DA DIREÇÃO DA MARCA.",
            "bi.caption": "Leva cerca de 15–20 minutos. Você pode voltar a qualquer etapa sem perder o que já preencheu.",

            "bi.sel": "[ SELECIONE ]",
            "bi.opt.sim": "SIM",
            "bi.opt.nao": "NÃO",
            "bi.opt.ainda_nao": "AINDA NÃO",
            "bi.opt.ainda_nao_sei": "AINDA NÃO SEI",
            "bi.opt.outro": "OUTRO",
            "bi.opt.outra": "OUTRA",
            "bi.opt.aberto": "ESTOU ABERTA/O A AVALIAR",
            "bi.opt.nome_def_sim": "SIM, JÁ ESTÁ DEFINIDO",
            "bi.opt.nome_def_ajustes": "AINDA PODE SOFRER AJUSTES",
            "bi.q.especifique": "QUAL?",

            "bi.s1.label": "01 — MARCA",
            "bi.s1.title": "VAMOS COMEÇAR PELA MARCA.",
            "bi.s1.text": "Antes de pensar em como ela vai parecer, quero entender de onde ela vem, o que faz e para onde quer ir.",
            "bi.q.nome_marca": "NOME DA MARCA *",
            "bi.q.significado_nome": "O NOME POSSUI ALGUM SIGNIFICADO OU HISTÓRIA?",
            "bi.h.significado_nome": "Se existir alguma história, referência ou significado importante por trás do nome, conte aqui.",
            "bi.q.tem_tagline": "EXISTE ALGUMA TAGLINE, ASSINATURA OU SLOGAN?",
            "bi.q.tagline": "QUAL?",
            "bi.q.nome_definitivo": "O NOME DA MARCA JÁ ESTÁ DEFINIDO DEFINITIVAMENTE?",
            "bi.q.info_nome": "EXISTE ALGUMA INFORMAÇÃO QUE OBRIGATORIAMENTE PRECISA ACOMPANHAR O NOME?",
            "bi.h.info_nome": "Por exemplo: segmento, especialidade, descrição ou outra informação necessária.",

            "bi.s2.label": "02 — NEGÓCIO",
            "bi.s2.title": "AGORA, O NEGÓCIO.",
            "bi.q.historia": "CONTE A HISTÓRIA DA MARCA. *",
            "bi.h.historia": "Como ela surgiu, em que momento está hoje e o que levou à criação ou transformação do negócio?",
            "bi.q.oferta": "O QUE A MARCA OFERECE? *",
            "bi.h.oferta": "Descreva os principais produtos, serviços ou experiências oferecidos.",
            "bi.q.receita": "QUAL É HOJE A PRINCIPAL FONTE DE RECEITA DA MARCA?",
            "bi.h.receita": "Opcional caso o negócio ainda não esteja operando.",
            "bi.q.prioridade": "O QUE É MAIS IMPORTANTE VENDER OU FORTALECER NESTE MOMENTO? *",
            "bi.q.porque_escolhem": "EM POUCAS PALAVRAS, POR QUE ALGUÉM ESCOLHE OU ESCOLHERIA SUA MARCA? *",
            "bi.h.porque_escolhem": "Pense nos motivos reais que fazem um cliente escolher você em vez de outra opção.",
            "bi.q.diferencial": "EXISTE ALGO QUE A MARCA FAZ DE FORMA ESPECIALMENTE DIFERENTE?",
            "bi.q.objetivos": "QUAIS SÃO OS PRINCIPAIS OBJETIVOS DO NEGÓCIO PARA OS PRÓXIMOS 1–3 ANOS?",
            "bi.obj.1": "CRESCER E CONQUISTAR NOVOS CLIENTES",
            "bi.obj.2": "AUMENTAR PERCEPÇÃO DE VALOR",
            "bi.obj.3": "ENTRAR EM UM NOVO MERCADO",
            "bi.obj.4": "LANÇAR O NEGÓCIO",
            "bi.obj.5": "REPOSICIONAR A MARCA",
            "bi.obj.6": "ATRAIR UM PÚBLICO DIFERENTE",
            "bi.obj.7": "AUMENTAR TICKET MÉDIO",
            "bi.obj.8": "EXPANDIR PRODUTOS OU SERVIÇOS",
            "bi.obj.9": "PROFISSIONALIZAR A COMUNICAÇÃO",
            "bi.obj.10": "CONSOLIDAR A MARCA",
            "bi.obj.11": "OUTRO",

            "bi.s3.label": "03 — PÚBLICO",
            "bi.s3.title": "PARA QUEM ESSA MARCA EXISTE?",
            "bi.q.publico_atual": "QUEM COSTUMA COMPRAR OU CONTRATAR VOCÊ HOJE?",
            "bi.h.publico_atual": "Se o negócio ainda não foi lançado, conte quem você espera que compre ou contrate sua marca.",
            "bi.q.publico_desejado_flag": "EXISTE ALGUM PÚBLICO QUE VOCÊ GOSTARIA DE ATRAIR MAIS?",
            "bi.q.publico_desejado": "QUEM?",
            "bi.q.publico_valoriza": "O QUE VOCÊ ACREDITA QUE ESSE PÚBLICO VALORIZA AO ESCOLHER UMA MARCA COMO A SUA?",
            "bi.q.barreira": "EXISTE ALGUMA BARREIRA OU OBJEÇÃO QUE PODE DIFICULTAR ESSA ESCOLHA?",
            "bi.h.barreira": "Por exemplo: preço, confiança, desconhecimento, percepção de qualidade, concorrência ou complexidade do serviço.",
            "bi.q.primeira_impressao": "COMO VOCÊ GOSTARIA QUE UMA PESSOA SE SENTISSE AO ENTRAR EM CONTATO COM SUA MARCA PELA PRIMEIRA VEZ? *",

            "bi.s4.label": "04 — MERCADO",
            "bi.s4.title": "O CONTEXTO EM QUE A MARCA EXISTE.",
            "bi.q.concorrentes": "QUAIS MARCAS OU EMPRESAS VOCÊ CONSIDERA SEUS PRINCIPAIS CONCORRENTES?",
            "bi.h.concorrentes": "Se possível, adicione os links (um por linha).",
            "bi.q.concorrentes_bem": "O QUE VOCÊ ACREDITA QUE ESSES CONCORRENTES FAZEM BEM?",
            "bi.q.espaco_mercado": "E ONDE VOCÊ ENXERGA ESPAÇO PARA FAZER DIFERENTE? *",
            "bi.q.afastar": "EXISTE ALGUM COMPORTAMENTO COMUM NO SEU SEGMENTO DO QUAL VOCÊ GOSTARIA DE SE AFASTAR? *",
            "bi.h.afastar": "Pode ser uma estética repetida, uma forma de comunicação, uma postura ou qualquer padrão que você considera previsível no mercado.",

            "bi.s5.label": "05 — POSICIONAMENTO",
            "bi.s5.title": "COMO A MARCA QUER SER PERCEBIDA.",
            "bi.q.percepcao_atual": "SE ALGUÉM CONHECESSE SUA MARCA HOJE, COMO VOCÊ ACREDITA QUE ELA SERIA DESCRITA?",
            "bi.h.percepcao_atual": "Se a marca ainda não foi lançada, conte como você acredita que marcas semelhantes à sua costumam ser percebidas hoje.",
            "bi.q.percepcao_desejada": "E COMO VOCÊ GOSTARIA QUE SUA MARCA FOSSE DESCRITA? *",
            "bi.q.percepcoes_construir": "QUAIS PERCEPÇÕES VOCÊ MAIS PRECISA CONSTRUIR OU FORTALECER? (ATÉ 3)",
            "bi.perc.1": "CONFIANÇA", "bi.perc.2": "AUTORIDADE", "bi.perc.3": "PROXIMIDADE",
            "bi.perc.4": "SOFISTICAÇÃO", "bi.perc.5": "INOVAÇÃO", "bi.perc.6": "ACESSIBILIDADE",
            "bi.perc.7": "EXCLUSIVIDADE", "bi.perc.8": "CRIATIVIDADE", "bi.perc.9": "SIMPLICIDADE",
            "bi.perc.10": "PRECISÃO", "bi.perc.11": "CONTEMPORANEIDADE", "bi.perc.12": "TRADIÇÃO",
            "bi.perc.13": "ENERGIA", "bi.perc.14": "CUIDADO",
            "bi.q.percepcao_evitar": "EXISTE ALGUMA PERCEPÇÃO QUE VOCÊ DEFINITIVAMENTE NÃO QUER TRANSMITIR? *",
            "bi.q.frase_reconhecidos": "COMPLETE: QUEREMOS SER RECONHECIDOS COMO UMA MARCA QUE ______. *",
            "bi.q.espaco_proprio": "SE SUA MARCA PUDESSE OCUPAR UM ESPAÇO PRÓPRIO NO MERCADO, QUAL VOCÊ GOSTARIA QUE FOSSE?",
            "bi.h.espaco_proprio": "Não precisa usar termos de marketing. Descreva com suas próprias palavras.",

            "bi.s6.label": "06 — PERSONALIDADE",
            "bi.s6.title": "SE ESSA MARCA FOSSE UMA PRESENÇA.",
            "bi.q.personalidade": "ESCOLHA ATÉ 5 CARACTERÍSTICAS QUE DEVERIAM FAZER PARTE DA PERSONALIDADE DA MARCA (ATÉ 5)",
            "bi.pers.1": "PRECISA", "bi.pers.2": "HUMANA", "bi.pers.3": "DIRETA", "bi.pers.4": "REFINADA",
            "bi.pers.5": "EXPERIMENTAL", "bi.pers.6": "CONTEMPORÂNEA", "bi.pers.7": "DISCRETA",
            "bi.pers.8": "EXPRESSIVA", "bi.pers.9": "INTELIGENTE", "bi.pers.10": "ACOLHEDORA",
            "bi.pers.11": "CONFIANTE", "bi.pers.12": "IRREVERENTE", "bi.pers.13": "ELEGANTE",
            "bi.pers.14": "TÉCNICA", "bi.pers.15": "CULTURAL", "bi.pers.16": "ATEMPORAL",
            "bi.pers.17": "ENERGÉTICA", "bi.pers.18": "MINIMALISTA",
            "bi.q.personalidade_evitar": "AGORA ESCOLHA ATÉ 3 CARACTERÍSTICAS QUE NÃO COMBINAM COM A MARCA (ATÉ 3)",
            "bi.q.escalas": "ENTRE OS CONTRASTES ABAIXO, ONDE A MARCA SE APROXIMA MAIS?",
            "bi.q.tom_voz": "COMO A MARCA DEVE FALAR COM AS PESSOAS?",
            "bi.h.tom_voz": "Pense em proximidade, formalidade, objetividade, humor, ritmo ou outras características importantes.",
            "bi.scale.classica": "CLÁSSICA", "bi.scale.contemporanea": "CONTEMPORÂNEA",
            "bi.scale.contida": "CONTIDA", "bi.scale.expressiva": "EXPRESSIVA",
            "bi.scale.acessivel": "ACESSÍVEL", "bi.scale.exclusiva": "EXCLUSIVA",
            "bi.scale.racional": "RACIONAL", "bi.scale.emocional": "EMOCIONAL",
            "bi.scale.institucional": "INSTITUCIONAL", "bi.scale.humana": "HUMANA",
            "bi.scale.segura": "SEGURA", "bi.scale.experimental": "EXPERIMENTAL",
            "bi.scale.na": "NÃO SEI / NÃO SE APLICA",

            "bi.s7.label": "07 — IDENTIDADE ATUAL",
            "bi.s7.title": "O QUE JÁ EXISTE HOJE?",
            "bi.q.id_atual": "A MARCA JÁ POSSUI IDENTIDADE VISUAL? *",
            "bi.id.sim": "SIM",
            "bi.id.nao": "NÃO",
            "bi.id.logo": "POSSUI APENAS UM LOGOTIPO",
            "bi.id.parcial": "POSSUI ALGUNS ELEMENTOS, MAS NÃO UM SISTEMA DEFINIDO",
            "bi.q.elemento_importante": "EXISTE ALGUM ELEMENTO JÁ UTILIZADO PELA MARCA QUE VOCÊ CONSIDERA IMPORTANTE?",
            "bi.q.funciona_bem": "O QUE FUNCIONA BEM NA IDENTIDADE ATUAL?",
            "bi.q.nao_funciona": "O QUE NÃO FUNCIONA? *",
            "bi.q.porque_mudar": "POR QUE VOCÊ DECIDIU MUDAR AGORA?",
            "bi.q.preservar_flag": "EXISTE ALGO DA IDENTIDADE ATUAL QUE VOCÊ GOSTARIA QUE FOSSE CONSIDERADO OU PRESERVADO?",
            "bi.q.preservar_detalhe": "O QUÊ? E POR QUÊ?",
            "bi.q.desaparecer": "EXISTE ALGUM ELEMENTO QUE DEFINITIVAMENTE DEVERIA DESAPARECER?",

            "bi.s8.label": "08 — UNIVERSO VISUAL",
            "bi.s8.title": "REFERÊNCIAS, NÃO RECEITAS.",
            "bi.s8.text": "As próximas perguntas não servem para copiar referências nem definir antecipadamente como a identidade deve ser. Elas ajudam a entender seu repertório, expectativas e limites visuais.",
            "bi.q.ref_boas": "EXISTEM MARCAS CUJA IDENTIDADE VISUAL VOCÊ CONSIDERA ESPECIALMENTE BEM RESOLVIDA?",
            "bi.h.ref_boas": "Pode incluir links, um por linha.",
            "bi.q.ref_boas_pq": "O QUE EXATAMENTE CHAMA SUA ATENÇÃO NESSAS REFERÊNCIAS?",
            "bi.h.ref_boas_pq": "Tente falar sobre sensação, organização, atitude ou percepção — não apenas cores e fontes.",
            "bi.q.ref_evitar": "EXISTEM REFERÊNCIAS VISUAIS QUE DEFINITIVAMENTE NÃO COMBINAM COM A SUA MARCA?",
            "bi.q.ref_evitar_pq": "O QUE INCOMODA NESSAS REFERÊNCIAS?",
            "bi.q.repertorio": "EXISTE ALGUM REPERTÓRIO CULTURAL, GEOGRÁFICO, HISTÓRICO OU COMPORTAMENTAL RELEVANTE PARA A MARCA?",
            "bi.h.repertorio": "Pode ser arquitetura, música, arte, gastronomia, território, materiais, períodos históricos, movimentos culturais ou outros universos que façam sentido de verdade para o negócio.",
            "bi.q.cor_flag": "EXISTE ALGUMA COR JÁ FORTEMENTE ASSOCIADA À MARCA?",
            "bi.q.cor_associada": "QUAL? POR QUE ELA É IMPORTANTE?",
            "bi.q.cor_evitar_flag": "EXISTE ALGUMA COR QUE TENHA UMA RAZÃO REAL PARA NÃO SER UTILIZADA?",
            "bi.q.cor_evitar": "QUAL? POR QUÊ?",
            "bi.h.cor_evitar": "Considere concorrência, segmento, cultura, produto ou outras razões relevantes — não apenas gosto pessoal.",
            "bi.q.simbolo_evitar": "EXISTE ALGUM SÍMBOLO, ELEMENTO, PALAVRA OU ASSOCIAÇÃO VISUAL QUE PRECISA SER EVITADA?",
            "bi.q.simbolo_significado": "EXISTE ALGUM SÍMBOLO OU ELEMENTO QUE TENHA SIGNIFICADO REAL PARA A HISTÓRIA DA MARCA?",
            "bi.h.simbolo_significado": "Isso não significa que ele necessariamente será utilizado no logotipo.",

            "bi.s9.label": "09 — APLICAÇÕES",
            "bi.s9.title": "ONDE ESSA IDENTIDADE PRECISA FUNCIONAR?",
            "bi.q.aplicacoes": "ONDE A MARCA SERÁ VISTA COM MAIS FREQUÊNCIA?",
            "bi.apl.1": "SITE", "bi.apl.2": "INSTAGRAM / REDES SOCIAIS", "bi.apl.3": "APLICATIVOS",
            "bi.apl.4": "MATERIAIS IMPRESSOS", "bi.apl.5": "EMBALAGENS", "bi.apl.6": "DOCUMENTOS",
            "bi.apl.7": "APRESENTAÇÕES", "bi.apl.8": "AMBIENTE FÍSICO", "bi.apl.9": "UNIFORMES",
            "bi.apl.10": "PRODUTOS", "bi.apl.11": "PLATAFORMAS DE TERCEIROS",
            "bi.q.pontos_importantes": "QUAIS DESSES PONTOS DE CONTATO SÃO MAIS IMPORTANTES? (ATÉ 3)",
            "bi.q.contextos_pequenos": "EXISTE ALGUM CONTEXTO MUITO PEQUENO OU ESPECÍFICO EM QUE A MARCA PRECISARÁ FUNCIONAR?",
            "bi.ctx.1": "FOTO DE PERFIL", "bi.ctx.2": "FAVICON", "bi.ctx.3": "ETIQUETA",
            "bi.ctx.4": "EMBALAGEM PEQUENA", "bi.ctx.5": "ASSINATURA", "bi.ctx.6": "APLICATIVO",
            "bi.ctx.nenhum": "NENHUM ESPECÍFICO",
            "bi.q.limitacao": "EXISTE ALGUMA LIMITAÇÃO TÉCNICA QUE EU DEVERIA CONHECER?",
            "bi.h.limitacao": "Por exemplo: impressão em uma cor, bordado, gravação, fornecedor específico, material, tamanho mínimo ou processo de produção.",
            "bi.q.desdobramentos": "VOCÊ IMAGINA DESENVOLVER ALGUM MATERIAL ADICIONAL JUNTO OU DEPOIS DA IDENTIDADE?",
            "bi.des.1": "CARTÃO DE VISITA", "bi.des.2": "PAPELARIA", "bi.des.3": "ASSINATURA DE E-MAIL",
            "bi.des.4": "APRESENTAÇÃO", "bi.des.5": "TEMPLATES PARA REDES SOCIAIS", "bi.des.6": "MATERIAIS IMPRESSOS",
            "bi.des.7": "EMBALAGENS", "bi.des.8": "RÓTULOS", "bi.des.9": "PROJETO EDITORIAL",
            "bi.des.10": "LANDING PAGE", "bi.des.naosei": "AINDA NÃO SEI",
            "bi.h.desdobramentos": "Esses itens não são automaticamente adicionados ao escopo contratado. A resposta serve para entender como a identidade precisará funcionar e identificar possíveis desdobramentos futuros.",

            "bi.s10.label": "10 — FINALIZAR",
            "bi.s10.title": "ANTES DE FINALIZAR.",
            "bi.q.aprovacao": "QUEM PARTICIPA DA APROVAÇÃO DESTE PROJETO?",
            "bi.apr.1": "APENAS EU", "bi.apr.2": "EU + SÓCIO(A)", "bi.apr.3": "EQUIPE", "bi.apr.4": "DIRETORIA",
            "bi.q.decisao_final": "QUEM TERÁ A DECISÃO FINAL SOBRE A IDENTIDADE? *",
            "bi.q.consulta_flag": "EXISTE ALGUMA OUTRA PESSOA QUE PRECISARÁ SER CONSULTADA DURANTE O PROCESSO?",
            "bi.q.consulta_detalhe": "QUEM E EM QUAL MOMENTO?",
            "bi.q.info_adicional": "EXISTE ALGUMA INFORMAÇÃO IMPORTANTE SOBRE A MARCA QUE NÃO APARECEU NESTE BRIEFING?",
            "bi.q.preocupacao": "EXISTE ALGUMA PREOCUPAÇÃO ESPECÍFICA EM RELAÇÃO AO PROJETO?",
            "bi.q.sucesso": "O QUE FARIA VOCÊ CONSIDERAR ESTE PROJETO UM SUCESSO? *",
            "bi.q.essencia": "SE EU PUDESSE LEMBRAR DE APENAS UMA COISA SOBRE SUA MARCA ANTES DE COMEÇAR A CRIAR, O QUE DEVERIA SER? *",
            "bi.confirm.label": "TUDO CERTO?",
            "bi.confirm.text": "Suas respostas serão a base para a pesquisa, direção estratégica e desenvolvimento da identidade. Você não precisa saber todas as respostas “certas” — o mais importante é compartilhar o que conhece sobre o negócio com sinceridade.",
            "bi.confirm.check": "Confirmo que revisei as informações e que elas representam o cenário atual da marca.",

            "bi.back": "[ ⟵ VOLTAR ]",
            "bi.next": "[ CONTINUAR ⟶ ]",
            "bi.submit": "[ ENVIAR BRIEFING ]",

            "bi.success.label": "RECEBIDO",
            "bi.success.title": "BRIEFING RECEBIDO.",
            "bi.success.text": "Obrigada por dedicar esse tempo ao projeto. Vou usar suas respostas como base para a pesquisa e construção da direção da marca.",
            "bi.success.home": "[ ⟵ VOLTAR AO INÍCIO ]",

            "bi.err.campo": "Preencha este campo para continuar.",
            "bi.msg.enviando": "ENVIANDO...",
            "bi.msg.erro": "Não foi possível enviar o briefing agora. Tente novamente em alguns instantes.",
            "bi.limit.msg3": "Você pode selecionar até 3 opções.",
            "bi.limit.msg5": "Você pode selecionar até 5 opções.",
            "bi.subject": "Briefing de Identidade Visual"
        },
        en: {
            "bi.header": "[ CONTRACTED PROJECT BRIEF ]",
            "bi.title": "VISUAL IDENTITY BRIEF",
            "bi.intro": "THIS IS THE OFFICIAL BRIEF FOR YOUR VISUAL IDENTITY PROJECT.<br>TAKE YOUR TIME AND BE HONEST — YOUR ANSWERS ARE THE FOUNDATION OF THE RESEARCH AND THE BRAND'S DIRECTION.",
            "bi.caption": "It takes about 15–20 minutes. You can go back to any step without losing what you've already filled in.",

            "bi.sel": "[ SELECT ]",
            "bi.opt.sim": "YES",
            "bi.opt.nao": "NO",
            "bi.opt.ainda_nao": "NOT YET",
            "bi.opt.ainda_nao_sei": "NOT SURE YET",
            "bi.opt.outro": "OTHER",
            "bi.opt.outra": "OTHER",
            "bi.opt.aberto": "I'M OPEN TO CONSIDERING IT",
            "bi.opt.nome_def_sim": "YES, IT'S FINAL",
            "bi.opt.nome_def_ajustes": "IT MAY STILL CHANGE",
            "bi.q.especifique": "WHICH ONE?",

            "bi.s1.label": "01 — BRAND",
            "bi.s1.title": "LET'S START WITH THE BRAND.",
            "bi.s1.text": "Before thinking about how it will look, I want to understand where it comes from, what it does and where it's headed.",
            "bi.q.nome_marca": "BRAND NAME *",
            "bi.q.significado_nome": "DOES THE NAME HAVE A MEANING OR STORY?",
            "bi.h.significado_nome": "If there's a story, reference or meaning behind the name, share it here.",
            "bi.q.tem_tagline": "IS THERE A TAGLINE, SIGNATURE OR SLOGAN?",
            "bi.q.tagline": "WHICH ONE?",
            "bi.q.nome_definitivo": "IS THE BRAND NAME ALREADY FINAL?",
            "bi.q.info_nome": "IS THERE ANY INFORMATION THAT MUST ALWAYS GO WITH THE NAME?",
            "bi.h.info_nome": "For example: segment, specialty, description or other required information.",

            "bi.s2.label": "02 — BUSINESS",
            "bi.s2.title": "NOW, THE BUSINESS.",
            "bi.q.historia": "TELL THE STORY OF THE BRAND. *",
            "bi.h.historia": "How did it start, where is it today and what led to creating or transforming the business?",
            "bi.q.oferta": "WHAT DOES THE BRAND OFFER? *",
            "bi.h.oferta": "Describe the main products, services or experiences you offer.",
            "bi.q.receita": "WHAT IS THE MAIN SOURCE OF REVENUE TODAY?",
            "bi.h.receita": "Optional if the business isn't operating yet.",
            "bi.q.prioridade": "WHAT MATTERS MOST TO SELL OR STRENGTHEN RIGHT NOW? *",
            "bi.q.porque_escolhem": "IN A FEW WORDS, WHY DOES (OR WOULD) SOMEONE CHOOSE YOUR BRAND? *",
            "bi.h.porque_escolhem": "Think of the real reasons a client chooses you over another option.",
            "bi.q.diferencial": "IS THERE SOMETHING THE BRAND DOES IN A NOTABLY DIFFERENT WAY?",
            "bi.q.objetivos": "WHAT ARE THE MAIN BUSINESS GOALS FOR THE NEXT 1–3 YEARS?",
            "bi.obj.1": "GROW AND WIN NEW CLIENTS",
            "bi.obj.2": "INCREASE PERCEIVED VALUE",
            "bi.obj.3": "ENTER A NEW MARKET",
            "bi.obj.4": "LAUNCH THE BUSINESS",
            "bi.obj.5": "REPOSITION THE BRAND",
            "bi.obj.6": "ATTRACT A DIFFERENT AUDIENCE",
            "bi.obj.7": "INCREASE AVERAGE TICKET",
            "bi.obj.8": "EXPAND PRODUCTS OR SERVICES",
            "bi.obj.9": "PROFESSIONALIZE COMMUNICATION",
            "bi.obj.10": "CONSOLIDATE THE BRAND",
            "bi.obj.11": "OTHER",

            "bi.s3.label": "03 — AUDIENCE",
            "bi.s3.title": "WHO IS THIS BRAND FOR?",
            "bi.q.publico_atual": "WHO USUALLY BUYS FROM OR HIRES YOU TODAY?",
            "bi.h.publico_atual": "If the business hasn't launched yet, tell me who you expect to buy from or hire your brand.",
            "bi.q.publico_desejado_flag": "IS THERE AN AUDIENCE YOU'D LIKE TO ATTRACT MORE?",
            "bi.q.publico_desejado": "WHO?",
            "bi.q.publico_valoriza": "WHAT DO YOU BELIEVE THIS AUDIENCE VALUES WHEN CHOOSING A BRAND LIKE YOURS?",
            "bi.q.barreira": "IS THERE A BARRIER OR OBJECTION THAT COULD MAKE THAT CHOICE HARDER?",
            "bi.h.barreira": "For example: price, trust, lack of awareness, perceived quality, competition or how complex the service is.",
            "bi.q.primeira_impressao": "HOW WOULD YOU LIKE SOMEONE TO FEEL WHEN THEY FIRST ENCOUNTER YOUR BRAND? *",

            "bi.s4.label": "04 — MARKET",
            "bi.s4.title": "THE CONTEXT THE BRAND LIVES IN.",
            "bi.q.concorrentes": "WHICH BRANDS OR COMPANIES DO YOU SEE AS YOUR MAIN COMPETITORS?",
            "bi.h.concorrentes": "If you can, add the links (one per line).",
            "bi.q.concorrentes_bem": "WHAT DO YOU THINK THESE COMPETITORS DO WELL?",
            "bi.q.espaco_mercado": "AND WHERE DO YOU SEE ROOM TO DO IT DIFFERENTLY? *",
            "bi.q.afastar": "IS THERE A COMMON BEHAVIOR IN YOUR SEGMENT YOU'D LIKE TO MOVE AWAY FROM? *",
            "bi.h.afastar": "It can be a repeated aesthetic, a way of communicating, a posture or any pattern you find predictable in the market.",

            "bi.s5.label": "05 — POSITIONING",
            "bi.s5.title": "HOW THE BRAND WANTS TO BE PERCEIVED.",
            "bi.q.percepcao_atual": "IF SOMEONE KNEW YOUR BRAND TODAY, HOW DO YOU THINK IT WOULD BE DESCRIBED?",
            "bi.h.percepcao_atual": "If the brand hasn't launched, tell me how you think brands similar to yours are usually perceived today.",
            "bi.q.percepcao_desejada": "AND HOW WOULD YOU LIKE YOUR BRAND TO BE DESCRIBED? *",
            "bi.q.percepcoes_construir": "WHICH PERCEPTIONS DO YOU MOST NEED TO BUILD OR STRENGTHEN? (UP TO 3)",
            "bi.perc.1": "TRUST", "bi.perc.2": "AUTHORITY", "bi.perc.3": "CLOSENESS",
            "bi.perc.4": "SOPHISTICATION", "bi.perc.5": "INNOVATION", "bi.perc.6": "ACCESSIBILITY",
            "bi.perc.7": "EXCLUSIVITY", "bi.perc.8": "CREATIVITY", "bi.perc.9": "SIMPLICITY",
            "bi.perc.10": "PRECISION", "bi.perc.11": "CONTEMPORANEITY", "bi.perc.12": "TRADITION",
            "bi.perc.13": "ENERGY", "bi.perc.14": "CARE",
            "bi.q.percepcao_evitar": "IS THERE A PERCEPTION YOU DEFINITELY DON'T WANT TO CONVEY? *",
            "bi.q.frase_reconhecidos": "COMPLETE: WE WANT TO BE KNOWN AS A BRAND THAT ______. *",
            "bi.q.espaco_proprio": "IF YOUR BRAND COULD OWN A SPACE OF ITS OWN IN THE MARKET, WHAT WOULD YOU WANT IT TO BE?",
            "bi.h.espaco_proprio": "No need for marketing terms. Describe it in your own words.",

            "bi.s6.label": "06 — PERSONALITY",
            "bi.s6.title": "IF THIS BRAND WERE A PRESENCE.",
            "bi.q.personalidade": "CHOOSE UP TO 5 TRAITS THAT SHOULD BE PART OF THE BRAND'S PERSONALITY (UP TO 5)",
            "bi.pers.1": "PRECISE", "bi.pers.2": "HUMAN", "bi.pers.3": "DIRECT", "bi.pers.4": "REFINED",
            "bi.pers.5": "EXPERIMENTAL", "bi.pers.6": "CONTEMPORARY", "bi.pers.7": "DISCREET",
            "bi.pers.8": "EXPRESSIVE", "bi.pers.9": "INTELLIGENT", "bi.pers.10": "WELCOMING",
            "bi.pers.11": "CONFIDENT", "bi.pers.12": "IRREVERENT", "bi.pers.13": "ELEGANT",
            "bi.pers.14": "TECHNICAL", "bi.pers.15": "CULTURAL", "bi.pers.16": "TIMELESS",
            "bi.pers.17": "ENERGETIC", "bi.pers.18": "MINIMAL",
            "bi.q.personalidade_evitar": "NOW CHOOSE UP TO 3 TRAITS THAT DON'T FIT THE BRAND (UP TO 3)",
            "bi.q.escalas": "BETWEEN THE CONTRASTS BELOW, WHERE DOES THE BRAND LEAN?",
            "bi.q.tom_voz": "HOW SHOULD THE BRAND SPEAK TO PEOPLE?",
            "bi.h.tom_voz": "Think about closeness, formality, directness, humor, rhythm or other important qualities.",
            "bi.scale.classica": "CLASSIC", "bi.scale.contemporanea": "CONTEMPORARY",
            "bi.scale.contida": "RESTRAINED", "bi.scale.expressiva": "EXPRESSIVE",
            "bi.scale.acessivel": "ACCESSIBLE", "bi.scale.exclusiva": "EXCLUSIVE",
            "bi.scale.racional": "RATIONAL", "bi.scale.emocional": "EMOTIONAL",
            "bi.scale.institucional": "INSTITUTIONAL", "bi.scale.humana": "HUMAN",
            "bi.scale.segura": "SAFE", "bi.scale.experimental": "EXPERIMENTAL",
            "bi.scale.na": "NOT SURE / NOT APPLICABLE",

            "bi.s7.label": "07 — CURRENT IDENTITY",
            "bi.s7.title": "WHAT ALREADY EXISTS TODAY?",
            "bi.q.id_atual": "DOES THE BRAND ALREADY HAVE A VISUAL IDENTITY? *",
            "bi.id.sim": "YES",
            "bi.id.nao": "NO",
            "bi.id.logo": "ONLY A LOGO",
            "bi.id.parcial": "SOME ELEMENTS, BUT NOT A DEFINED SYSTEM",
            "bi.q.elemento_importante": "IS THERE AN ELEMENT ALREADY USED BY THE BRAND THAT YOU CONSIDER IMPORTANT?",
            "bi.q.funciona_bem": "WHAT WORKS WELL IN THE CURRENT IDENTITY?",
            "bi.q.nao_funciona": "WHAT DOESN'T WORK? *",
            "bi.q.porque_mudar": "WHY DID YOU DECIDE TO CHANGE NOW?",
            "bi.q.preservar_flag": "IS THERE ANYTHING IN THE CURRENT IDENTITY YOU'D LIKE CONSIDERED OR PRESERVED?",
            "bi.q.preservar_detalhe": "WHAT? AND WHY?",
            "bi.q.desaparecer": "IS THERE AN ELEMENT THAT SHOULD DEFINITELY GO AWAY?",

            "bi.s8.label": "08 — VISUAL WORLD",
            "bi.s8.title": "REFERENCES, NOT RECIPES.",
            "bi.s8.text": "The next questions aren't meant to copy references or decide in advance how the identity should look. They help me understand your repertoire, expectations and visual limits.",
            "bi.q.ref_boas": "ARE THERE BRANDS WHOSE VISUAL IDENTITY YOU FIND ESPECIALLY WELL RESOLVED?",
            "bi.h.ref_boas": "You can include links, one per line.",
            "bi.q.ref_boas_pq": "WHAT EXACTLY CATCHES YOUR ATTENTION IN THESE REFERENCES?",
            "bi.h.ref_boas_pq": "Try to talk about feeling, organization, attitude or perception — not just colors and fonts.",
            "bi.q.ref_evitar": "ARE THERE VISUAL REFERENCES THAT DEFINITELY DON'T FIT YOUR BRAND?",
            "bi.q.ref_evitar_pq": "WHAT BOTHERS YOU ABOUT THESE REFERENCES?",
            "bi.q.repertorio": "IS THERE A CULTURAL, GEOGRAPHIC, HISTORICAL OR BEHAVIORAL REPERTOIRE RELEVANT TO THE BRAND?",
            "bi.h.repertorio": "It can be architecture, music, art, food, territory, materials, historical periods, cultural movements or other worlds that genuinely make sense for the business.",
            "bi.q.cor_flag": "IS THERE A COLOR ALREADY STRONGLY ASSOCIATED WITH THE BRAND?",
            "bi.q.cor_associada": "WHICH ONE? WHY IS IT IMPORTANT?",
            "bi.q.cor_evitar_flag": "IS THERE A COLOR WITH A REAL REASON NOT TO BE USED?",
            "bi.q.cor_evitar": "WHICH ONE? WHY?",
            "bi.h.cor_evitar": "Consider competition, segment, culture, product or other relevant reasons — not just personal taste.",
            "bi.q.simbolo_evitar": "IS THERE A SYMBOL, ELEMENT, WORD OR VISUAL ASSOCIATION THAT MUST BE AVOIDED?",
            "bi.q.simbolo_significado": "IS THERE A SYMBOL OR ELEMENT WITH REAL MEANING FOR THE BRAND'S HISTORY?",
            "bi.h.simbolo_significado": "This doesn't mean it will necessarily be used in the logo.",

            "bi.s9.label": "09 — APPLICATIONS",
            "bi.s9.title": "WHERE DOES THIS IDENTITY NEED TO WORK?",
            "bi.q.aplicacoes": "WHERE WILL THE BRAND BE SEEN MOST OFTEN?",
            "bi.apl.1": "WEBSITE", "bi.apl.2": "INSTAGRAM / SOCIAL MEDIA", "bi.apl.3": "APPS",
            "bi.apl.4": "PRINTED MATERIALS", "bi.apl.5": "PACKAGING", "bi.apl.6": "DOCUMENTS",
            "bi.apl.7": "PRESENTATIONS", "bi.apl.8": "PHYSICAL SPACE", "bi.apl.9": "UNIFORMS",
            "bi.apl.10": "PRODUCTS", "bi.apl.11": "THIRD-PARTY PLATFORMS",
            "bi.q.pontos_importantes": "WHICH OF THESE TOUCHPOINTS ARE MOST IMPORTANT? (UP TO 3)",
            "bi.q.contextos_pequenos": "IS THERE A VERY SMALL OR SPECIFIC CONTEXT WHERE THE BRAND WILL NEED TO WORK?",
            "bi.ctx.1": "PROFILE PICTURE", "bi.ctx.2": "FAVICON", "bi.ctx.3": "LABEL",
            "bi.ctx.4": "SMALL PACKAGING", "bi.ctx.5": "SIGNATURE", "bi.ctx.6": "APP ICON",
            "bi.ctx.nenhum": "NONE IN PARTICULAR",
            "bi.q.limitacao": "IS THERE A TECHNICAL LIMITATION I SHOULD KNOW ABOUT?",
            "bi.h.limitacao": "For example: single-color printing, embroidery, engraving, a specific supplier, material, minimum size or production process.",
            "bi.q.desdobramentos": "DO YOU IMAGINE DEVELOPING ANY ADDITIONAL MATERIAL ALONGSIDE OR AFTER THE IDENTITY?",
            "bi.des.1": "BUSINESS CARD", "bi.des.2": "STATIONERY", "bi.des.3": "EMAIL SIGNATURE",
            "bi.des.4": "PRESENTATION", "bi.des.5": "SOCIAL MEDIA TEMPLATES", "bi.des.6": "PRINTED MATERIALS",
            "bi.des.7": "PACKAGING", "bi.des.8": "LABELS", "bi.des.9": "EDITORIAL PROJECT",
            "bi.des.10": "LANDING PAGE", "bi.des.naosei": "NOT SURE YET",
            "bi.h.desdobramentos": "These items are not automatically added to the contracted scope. Your answer helps me understand how the identity will need to work and spot possible future extensions.",

            "bi.s10.label": "10 — FINISH",
            "bi.s10.title": "BEFORE WE FINISH.",
            "bi.q.aprovacao": "WHO TAKES PART IN APPROVING THIS PROJECT?",
            "bi.apr.1": "JUST ME", "bi.apr.2": "ME + PARTNER", "bi.apr.3": "TEAM", "bi.apr.4": "BOARD",
            "bi.q.decisao_final": "WHO WILL HAVE THE FINAL DECISION ON THE IDENTITY? *",
            "bi.q.consulta_flag": "IS THERE ANYONE ELSE WHO WILL NEED TO BE CONSULTED DURING THE PROCESS?",
            "bi.q.consulta_detalhe": "WHO AND AT WHICH STAGE?",
            "bi.q.info_adicional": "IS THERE IMPORTANT INFORMATION ABOUT THE BRAND THAT DIDN'T COME UP IN THIS BRIEF?",
            "bi.q.preocupacao": "IS THERE A SPECIFIC CONCERN ABOUT THE PROJECT?",
            "bi.q.sucesso": "WHAT WOULD MAKE YOU CONSIDER THIS PROJECT A SUCCESS? *",
            "bi.q.essencia": "IF I COULD REMEMBER ONLY ONE THING ABOUT YOUR BRAND BEFORE I START CREATING, WHAT SHOULD IT BE? *",
            "bi.confirm.label": "ALL GOOD?",
            "bi.confirm.text": "Your answers will be the basis for the research, strategic direction and development of the identity. You don't need to know all the “right” answers — what matters most is sharing what you know about the business honestly.",
            "bi.confirm.check": "I confirm that I've reviewed the information and that it represents the brand's current situation.",

            "bi.back": "[ ⟵ BACK ]",
            "bi.next": "[ CONTINUE ⟶ ]",
            "bi.submit": "[ SEND BRIEF ]",

            "bi.success.label": "RECEIVED",
            "bi.success.title": "BRIEF RECEIVED.",
            "bi.success.text": "Thank you for taking the time. I'll use your answers as the basis for the research and for shaping the brand's direction.",
            "bi.success.home": "[ ⟵ BACK TO HOME ]",

            "bi.err.campo": "Please fill in this field to continue.",
            "bi.msg.enviando": "SENDING...",
            "bi.msg.erro": "The brief couldn't be sent right now. Please try again in a few moments.",
            "bi.limit.msg3": "You can select up to 3 options.",
            "bi.limit.msg5": "You can select up to 5 options.",
            "bi.subject": "Visual Identity Brief"
        }
    };

    /* =========================================================
       2. ARRANQUE
       ========================================================= */
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('briefing-identidade-form');
        if (!form) return;

        const steps = Array.from(form.querySelectorAll('.bi-step'));
        const btnBack = document.getElementById('bi-back');
        const btnNext = document.getElementById('bi-next');
        const btnSubmit = document.getElementById('bi-submit');
        const curEl = document.getElementById('bi-current');
        const totalEl = document.getElementById('bi-total');
        const statusEl = document.getElementById('bi-status');
        const successEl = document.getElementById('bi-success');
        const subjectField = document.getElementById('bi-subject');
        let current = 0;
        let enviando = false;

        const curLang = () => (localStorage.getItem('lang') === 'en' ? 'en' : 'pt');
        const t = (key) => (BI[curLang()][key] != null ? BI[curLang()][key] : key);

        /* ---------- ESCALAS DE PERSONALIDADE ---------- */
        function buildScales() {
            const host = form.querySelector('.bi-scales');
            if (!host) return;
            const rows = [
                ['escala_classica_contemporanea', 'bi.scale.classica', 'bi.scale.contemporanea'],
                ['escala_contida_expressiva', 'bi.scale.contida', 'bi.scale.expressiva'],
                ['escala_acessivel_exclusiva', 'bi.scale.acessivel', 'bi.scale.exclusiva'],
                ['escala_racional_emocional', 'bi.scale.racional', 'bi.scale.emocional'],
                ['escala_institucional_humana', 'bi.scale.institucional', 'bi.scale.humana'],
                ['escala_segura_experimental', 'bi.scale.segura', 'bi.scale.experimental']
            ];
            host.innerHTML = rows.map(function (r) {
                const name = r[0];
                let dots = '';
                for (let i = 1; i <= 5; i++) {
                    dots += '<label class="bi-scale-dot"><input type="radio" name="' + name + '" value="' + i + '">' +
                        '<span class="bi-scale-dot-visual" aria-hidden="true"></span>' +
                        '<span class="bi-scale-dot-num">' + i + '</span></label>';
                }
                return '<div class="bi-scale-row" role="radiogroup" data-scale="' + name + '">' +
                    '<span class="bi-scale-pole" data-i18n="' + r[1] + '"></span>' +
                    '<div class="bi-scale-dots">' + dots +
                    '<label class="bi-scale-na"><input type="radio" name="' + name + '" value="Não se aplica">' +
                    '<span data-i18n="bi.scale.na"></span></label>' +
                    '</div>' +
                    '<span class="bi-scale-pole align-right" data-i18n="' + r[2] + '"></span>' +
                    '</div>';
            }).join('');
        }

        /* ---------- I18N (aplica só as chaves bi.*) ---------- */
        function applyBI() {
            const dict = BI[curLang()];
            // varre o documento inteiro: as chaves bi.* aparecem no hero,
            // no formulário e na tela de sucesso. Chaves que não existem
            // aqui (nav.*, footer.*) são ignoradas e ficam com o script global.
            document.querySelectorAll('[data-i18n]').forEach(function (el) {
                const k = el.getAttribute('data-i18n');
                if (dict[k] != null) el.innerHTML = dict[k];
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
                const k = el.getAttribute('data-i18n-placeholder');
                if (dict[k] != null) el.placeholder = dict[k];
            });
            // aria-label das escalas
            form.querySelectorAll('.bi-scale-row').forEach(function (row) {
                const poles = row.querySelectorAll('.bi-scale-pole');
                if (poles.length === 2) row.setAttribute('aria-label', poles[0].textContent + ' — ' + poles[1].textContent);
            });
            // reaplica a mensagem de status corrente, se houver
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
            const idSel = form.querySelector('#bi-id-atual');
            const idv = idSel ? idSel.value : '';
            const condState = {
                'id-nao': idv === 'Não',
                'id-tem': idv === 'Sim' || idv === 'Apenas um logotipo' || idv === 'Alguns elementos, sem sistema'
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

        /* ---------- CONFLITO PERSONALIDADE x NÃO-PERSONALIDADE ---------- */
        function syncConflict(grid) {
            const partner = document.getElementById(grid.dataset.conflict);
            if (!partner) return;
            const marcados = new Set(
                Array.from(grid.querySelectorAll('input[type="checkbox"]:checked')).map(function (i) { return i.value; })
            );
            partner.querySelectorAll('input[type="checkbox"]').forEach(function (i) {
                const item = i.closest('.check-item');
                if (marcados.has(i.value)) {
                    if (i.checked) i.checked = false;
                    i.disabled = true;
                    if (item) item.classList.add('is-conflict');
                } else {
                    i.disabled = false;
                    if (item) item.classList.remove('is-conflict');
                }
            });
        }

        function refreshConflicts() {
            form.querySelectorAll('.check-grid[data-conflict]').forEach(syncConflict);
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
                    showStatus('bi.err.campo', 'erro');
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
            const conflictGrid = target.closest ? target.closest('.check-grid[data-conflict]') : null;
            if (conflictGrid) syncConflict(conflictGrid);
            aplicarCondicionais();
        });

        form.addEventListener('input', function (e) {
            const box = e.target.closest ? (e.target.closest('.has-error')) : null;
            if (box) { box.classList.remove('has-error'); showStatus('', ''); }
        });

        /* ---------- ENVIO (WEB3FORMS) ---------- */
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            // Enter em campo de texto não deve enviar antes da última etapa
            if (current < steps.length - 1) { goNext(); return; }
            if (enviando) return;
            if (!validateStep(steps[current])) return;

            // assunto dinâmico com o nome da marca
            const nome = (form.querySelector('#bi-nome-marca') || {}).value || '';
            subjectField.value = t('bi.subject') + ' — ' + (nome.trim() || 'Mari Design Co.');

            enviando = true;
            btnSubmit.disabled = true;
            btnSubmit.style.pointerEvents = 'none';
            showStatus('bi.msg.enviando');

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
                    showStatus('bi.msg.erro', 'erro');
                }
            } catch (err) {
                showStatus('bi.msg.erro', 'erro');
            } finally {
                enviando = false;
                btnSubmit.disabled = false;
                btnSubmit.style.pointerEvents = '';
            }
        });

        /* ---------- INICIALIZAÇÃO ---------- */
        buildScales();
        totalEl.textContent = pad(steps.length);
        aplicarCondicionais();
        refreshConflicts();
        applyBI();
        show(0);

        // Segue o botão de idioma existente: quando o <html lang> muda
        // (o script global troca esse atributo), reaplicamos as chaves bi.*.
        new MutationObserver(applyBI).observe(document.documentElement, {
            attributes: true, attributeFilter: ['lang']
        });
        const lt = document.getElementById('lang-toggle');
        if (lt) lt.addEventListener('click', function () { setTimeout(applyBI, 0); });
    });
})();
