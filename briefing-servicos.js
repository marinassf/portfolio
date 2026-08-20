/**
 * BRIEFING DE SERVIÇOS AVULSOS — Mari Design Co.
 * Página privada por URL (noindex). Um único briefing que se adapta aos
 * serviços contratados: cada serviço ativa apenas os blocos (A–G) que
 * realmente se aplicam. Reaproveita o design e as classes dos demais
 * briefings. Etapas, condicionais, blocos por serviço, limites, validação,
 * envio (Web3Forms) e i18n PT/EN vivem aqui. Integra-se ao sistema de
 * idioma existente (mesmo #lang-toggle e localStorage 'lang').
 */
(function () {
    'use strict';

    /* Rótulos curtos por serviço, só para montar o assunto do e-mail. */
    const SHORT = {
        pt: { cartao: 'Cartão', papel: 'Papel timbrado', papelaria: 'Papelaria', folder: 'Folder', poster: 'Poster', embalagem: 'Embalagem', rotulo: 'Rótulo', menu: 'Cardápio', assinatura: 'Assinatura', templates: 'Templates', banner: 'Banner', apresentacao: 'Apresentação', landing: 'Landing', livro: 'Livro', revista: 'Revista', catalogo: 'Catálogo', relatorio: 'Relatório', manual: 'Manual' },
        en: { cartao: 'Business card', papel: 'Letterhead', papelaria: 'Stationery', folder: 'Folder', poster: 'Poster', embalagem: 'Packaging', rotulo: 'Label', menu: 'Menu', assinatura: 'Signature', templates: 'Templates', banner: 'Banner', apresentacao: 'Deck', landing: 'Landing', livro: 'Book', revista: 'Magazine', catalogo: 'Catalog', relatorio: 'Report', manual: 'Manual' }
    };

    const BS = {
        pt: {
            "bs.header": "[ BRIEFING DE PROJETO CONTRATADO ]",
            "bs.title": "BRIEFING DE SERVIÇOS",
            "bs.intro": "ESTE É O BRIEFING DOS SERVIÇOS QUE VOCÊ JÁ CONTRATOU.<br>SELECIONE AS PEÇAS DO PROJETO E RESPONDA APENAS O QUE SE APLICA A ELAS.",
            "bs.caption": "O formulário se adapta aos serviços selecionados. Você pode voltar a qualquer etapa sem perder o que já preencheu.",

            "bs.sel": "[ SELECIONE ]",
            "bs.opt.sim": "SIM", "bs.opt.nao": "NÃO", "bs.opt.parcial": "PARCIALMENTE",
            "bs.opt.nao_sei": "NÃO SEI", "bs.opt.ainda_nao_sei": "AINDA NÃO SEI", "bs.opt.ainda_nao": "AINDA NÃO",
            "bs.opt.na": "NÃO SE APLICA", "bs.opt.outro": "OUTRO", "bs.opt.outra": "OUTRA", "bs.opt.outras": "OUTRAS",
            "bs.opt.nenhuma": "NENHUMA", "bs.opt.talvez": "TALVEZ", "bs.opt.algumas": "ALGUMAS", "bs.opt.quase": "QUASE",
            "bs.opt.alguns": "TENHO APENAS ALGUNS", "bs.opt.impresso": "IMPRESSO", "bs.opt.digital": "DIGITAL",
            "bs.opt.ambos": "IMPRESSO E DIGITAL", "bs.opt.ainda_def": "AINDA SERÁ DEFINIDO",
            "bs.q.especifique": "QUAL?", "bs.q.qual": "QUAL?", "bs.q.quais": "QUAIS?",

            "bs.grp.impresso": "IMPRESSO", "bs.grp.digital": "DIGITAL", "bs.grp.editorial": "EDITORIAL",
            "bs.sv.cartao": "CARTÃO DE VISITA", "bs.sv.papel": "PAPEL TIMBRADO", "bs.sv.papelaria": "PAPELARIA CORPORATIVA",
            "bs.sv.folder": "FOLDER E MATERIAIS PROMOCIONAIS", "bs.sv.poster": "POSTER / CARTAZ", "bs.sv.embalagem": "EMBALAGEM",
            "bs.sv.rotulo": "RÓTULO", "bs.sv.menu": "MENU / CARDÁPIO", "bs.sv.assinatura": "ASSINATURA DE E-MAIL",
            "bs.sv.templates": "TEMPLATES PARA REDES SOCIAIS", "bs.sv.banner": "BANNER DIGITAL", "bs.sv.apresentacao": "APRESENTAÇÃO",
            "bs.sv.landing": "LANDING PAGE", "bs.sv.livro": "LIVRO", "bs.sv.revista": "REVISTA", "bs.sv.catalogo": "CATÁLOGO",
            "bs.sv.relatorio": "RELATÓRIO", "bs.sv.manual": "MANUAL",

            "bs.s1.label": "01 — PROJETO", "bs.s1.title": "VAMOS ORGANIZAR O PROJETO.",
            "bs.q.nome_marca": "NOME DA MARCA OU EMPRESA *", "bs.q.cliente": "SEU NOME *", "bs.q.email": "E-MAIL *",
            "bs.q.servicos": "QUAIS SERVIÇOS FAZEM PARTE DESTE PROJETO? *",
            "bs.h.servicos": "Selecione apenas os materiais que fazem parte do projeto já contratado.",

            "bs.s2.label": "02 — MARCA", "bs.s2.title": "ANTES DA PEÇA, A MARCA.",
            "bs.q.id_existente": "SUA MARCA JÁ POSSUI IDENTIDADE VISUAL DEFINIDA? *",
            "bs.q.materiais_id": "QUAIS MATERIAIS DE IDENTIDADE VISUAL VOCÊ POSSUI?",
            "bs.mid.1": "LOGOTIPO", "bs.mid.2": "VARIAÇÕES DO LOGOTIPO", "bs.mid.3": "PALETA DE CORES", "bs.mid.4": "TIPOGRAFIA",
            "bs.mid.5": "ELEMENTOS GRÁFICOS", "bs.mid.6": "MANUAL DE MARCA", "bs.mid.7": "ARQUIVOS EDITÁVEIS", "bs.mid.8": "NENHUM / NÃO SEI",
            "bs.q.arquivos": "VOCÊ POSSUI OS ARQUIVOS DA IDENTIDADE VISUAL?",
            "bs.h.arquivos": "Se necessário, os arquivos poderão ser enviados separadamente conforme as orientações do projeto.",
            "bs.q.regra_id": "EXISTE ALGUMA REGRA DA IDENTIDADE QUE PRECISA SER RESPEITADA?",
            "bs.q.nao_alterar": "EXISTE ALGO VISUAL QUE NÃO DEVE SER ALTERADO OU REINTERPRETADO?",

            "bs.s3.label": "03 — OBJETIVO & USO", "bs.s3.title": "O QUE ESSA PEÇA PRECISA FAZER?",
            "bs.q.objetivo": "QUAL É O PRINCIPAL OBJETIVO DOS MATERIAIS CONTRATADOS? *",
            "bs.h.objetivo": "Conte o que você precisa comunicar, resolver ou facilitar com essas peças.",
            "bs.q.publico": "PARA QUEM ESSE MATERIAL SERÁ DIRECIONADO? *",
            "bs.q.onde_uso": "ONDE OS MATERIAIS SERÃO UTILIZADOS?",
            "bs.uso.1": "AMBIENTE FÍSICO", "bs.uso.2": "ATENDIMENTO AO CLIENTE", "bs.uso.3": "EVENTO", "bs.uso.4": "PONTO DE VENDA",
            "bs.uso.5": "ENVIO PARA CLIENTES", "bs.uso.6": "REDES SOCIAIS", "bs.uso.7": "SITE", "bs.uso.8": "E-MAIL",
            "bs.uso.9": "APRESENTAÇÃO COMERCIAL", "bs.uso.10": "IMPRESSÃO", "bs.uso.11": "DELIVERY", "bs.uso.12": "EMBALAGEM DE PRODUTO",
            "bs.q.acao": "EXISTE ALGUMA AÇÃO QUE VOCÊ ESPERA QUE A PESSOA TOME AO RECEBER OU VISUALIZAR ESSE MATERIAL?",
            "bs.h.acao": "Por exemplo: entrar em contato, comprar, solicitar orçamento, acessar um link, compreender uma informação, escolher um produto etc.",

            "bs.s4.label": "04 — CONTEÚDO", "bs.s4.title": "AGORA, O CONTEÚDO.",
            "bs.q.conteudo_status": "O CONTEÚDO QUE SERÁ UTILIZADO JÁ ESTÁ PRONTO? *",
            "bs.cs.1": "SIM, ESTÁ FINALIZADO", "bs.cs.2": "TENHO A MAIOR PARTE", "bs.cs.3": "AINDA ESTÁ SENDO PREPARADO", "bs.cs.4": "PRECISO ORGANIZAR ANTES DE ENVIAR",
            "bs.q.responsavel_textos": "QUEM SERÁ RESPONSÁVEL PELOS TEXTOS?",
            "bs.rt.1": "EU / MINHA EQUIPE", "bs.rt.2": "JÁ TENHO OS TEXTOS PRONTOS", "bs.rt.3": "OUTRO PROFISSIONAL",
            "bs.q.imagens_existem": "AS IMAGENS E FOTOGRAFIAS NECESSÁRIAS JÁ EXISTEM?", "bs.ie.3": "NÃO SERÃO NECESSÁRIAS",
            "bs.q.imagens_fornecedor": "QUEM FORNECERÁ AS IMAGENS?",
            "bs.if.1": "EU / MINHA EQUIPE", "bs.if.2": "FOTÓGRAFO", "bs.if.3": "BANCO DE IMAGENS", "bs.if.4": "AINDA SERÁ DEFINIDO",
            "bs.q.conteudo_obrigatorio": "EXISTE ALGUM CONTEÚDO OBRIGATÓRIO?",
            "bs.h.conteudo_obrigatorio": "Por exemplo: telefone, site, endereço, redes sociais, QR Code, preços, informações legais, dados de contato, créditos ou outras informações.",
            "bs.q.nao_aparecer": "EXISTE ALGUMA INFORMAÇÃO QUE NÃO PODE APARECER?",

            "bs.s5.label": "05 — ESPECIFICAÇÕES", "bs.s5.title": "SOBRE CADA PEÇA.",
            "bs.s5.text": "As perguntas abaixo aparecem de acordo com os serviços que você marcou. Responda apenas o que já estiver definido.",

            "bs.blkA.title": "SOBRE OS MATERIAIS IMPRESSOS",
            "bs.a.uso": "QUAL SERÁ O USO PRINCIPAL DO MATERIAL?",
            "bs.a.tem_dim": "VOCÊ JÁ POSSUI AS DIMENSÕES FINAIS?", "bs.a.dim_gr": "AINDA SERÁ DEFINIDO COM A GRÁFICA", "bs.a.dim": "QUAIS SÃO?",
            "bs.a.grafica": "JÁ EXISTE UMA GRÁFICA OU FORNECEDOR DEFINIDO?", "bs.a.escolhendo": "AINDA ESTOU ESCOLHENDO",
            "bs.a.grafica_spec": "A GRÁFICA FORNECEU ALGUMA ESPECIFICAÇÃO OU GABARITO?", "bs.a.vou_solicitar": "AINDA VOU SOLICITAR",
            "bs.a.frente_verso": "O MATERIAL TERÁ IMPRESSÃO FRENTE E VERSO?",
            "bs.a.acabamentos": "EXISTE ALGUM ACABAMENTO JÁ DEFINIDO?",
            "bs.ac.1": "NENHUM", "bs.ac.2": "LAMINAÇÃO", "bs.ac.3": "VERNIZ LOCALIZADO", "bs.ac.4": "HOT STAMPING",
            "bs.ac.5": "RELEVO", "bs.ac.6": "CORTE ESPECIAL", "bs.ac.7": "DOBRA",
            "bs.a.versoes": "QUANTAS VERSÕES DIFERENTES SERÃO NECESSÁRIAS?",
            "bs.h.a_versoes": "Por exemplo: cartões para pessoas diferentes, versões por unidade, cidade, idioma ou departamento.",
            "bs.cartao.pessoas": "QUANTAS PESSOAS PRECISARÃO DE CARTÃO?", "bs.cartao.infos": "QUAIS INFORMAÇÕES DEVERÃO APARECER NO CARTÃO?",
            "bs.ci.1": "NOME", "bs.ci.2": "CARGO", "bs.ci.3": "TELEFONE", "bs.ci.4": "E-MAIL", "bs.ci.5": "SITE", "bs.ci.6": "INSTAGRAM",
            "bs.ci.7": "ENDEREÇO", "bs.ci.8": "QR CODE", "bs.ci.9": "REDES SOCIAIS", "bs.ci.10": "LOGO",
            "bs.cartao.muda": "AS INFORMAÇÕES MUDAM ENTRE OS CARTÕES?",
            "bs.papel.uso": "O PAPEL TIMBRADO SERÁ UTILIZADO:", "bs.papel.editavel": "VOCÊ PRECISA DE UMA VERSÃO EDITÁVEL PARA DOCUMENTOS?",
            "bs.folder.paginas": "O FOLDER TERÁ APROXIMADAMENTE QUANTAS PÁGINAS OU FACES?", "bs.folder.dobra": "EXISTE ALGUMA DOBRA PREVISTA?",
            "bs.fd.1": "SEM DOBRA", "bs.fd.2": "UMA DOBRA", "bs.fd.3": "DUAS OU MAIS DOBRAS",
            "bs.folder.ordem": "O CONTEÚDO JÁ ESTÁ ORGANIZADO NA ORDEM EM QUE DEVE APARECER?",
            "bs.poster.local": "ONDE O POSTER / CARTAZ SERÁ EXIBIDO?", "bs.poster.distancia": "EXISTE UMA DISTÂNCIA APROXIMADA DE LEITURA?",
            "bs.pd.1": "PRÓXIMA", "bs.pd.2": "MÉDIA", "bs.pd.3": "LONGA",
            "bs.poster.destaque": "EXISTE ALGUMA INFORMAÇÃO QUE PRECISA TER DESTAQUE PRINCIPAL?",

            "bs.blkB.title": "SOBRE O PRODUTO E A PRODUÇÃO",
            "bs.b.produto": "QUAL PRODUTO RECEBERÁ ESTA EMBALAGEM OU RÓTULO? *", "bs.b.versoes": "QUANTAS VERSÕES SERÃO NECESSÁRIAS?",
            "bs.h.b_versoes": "Por exemplo: sabores, fragrâncias, tamanhos, produtos ou linhas diferentes.",
            "bs.b.estrutura": "A ESTRUTURA FÍSICA DA EMBALAGEM JÁ ESTÁ DEFINIDA?", "bs.b.na_proj": "NÃO SE APLICA AO PROJETO",
            "bs.b.fornecedor": "JÁ EXISTE FORNECEDOR?", "bs.b.dieline": "VOCÊ POSSUI O GABARITO / DIELINE FORNECIDO PELO FABRICANTE?",
            "bs.b.vou_receber": "AINDA VOU RECEBER", "bs.b.dimensoes": "QUAIS SÃO AS DIMENSÕES?", "bs.b.dim_ph": "Ainda não definidas",
            "bs.b.material": "QUAL É O MATERIAL DA EMBALAGEM OU RÓTULO?", "bs.b.limitacao": "EXISTE ALGUMA LIMITAÇÃO DE IMPRESSÃO?",
            "bs.b.infos": "QUAIS INFORMAÇÕES OBRIGATÓRIAS PRECISAM APARECER?", "bs.h.b_infos": "Envie apenas informações já definidas e aprovadas para o produto.",
            "bs.b.barras": "HÁ CÓDIGO DE BARRAS?", "bs.b.qr": "EXISTE QR CODE?", "bs.b.legais": "EXISTEM INFORMAÇÕES LEGAIS, NUTRICIONAIS OU REGULATÓRIAS?",
            "bs.b.legais_nota": "Essas informações deverão ser fornecidas pelo cliente prontas e revisadas.",
            "bs.b.sem_impressao": "EXISTE ALGUMA ÁREA DA EMBALAGEM ONDE NÃO PODE HAVER IMPRESSÃO?",
            "bs.b.aviso": "O projeto de design não inclui automaticamente engenharia estrutural de embalagem, desenvolvimento de faca, cálculos técnicos, textos legais, tabela nutricional, registro sanitário, validação regulatória ou produção gráfica. Quando necessários, esses dados e arquivos deverão ser fornecidos pelo cliente ou pelo fornecedor responsável.",

            "bs.blkC.title": "SOBRE O CARDÁPIO",
            "bs.c.formato": "O CARDÁPIO SERÁ:", "bs.c.conteudo": "O CONTEÚDO ESTÁ FINALIZADO?", "bs.c.itens": "QUANTOS ITENS APROXIMADAMENTE EXISTEM?",
            "bs.c.org": "COMO OS ITENS ESTÃO ORGANIZADOS?", "bs.h.c_org": "Por exemplo: entradas, principais, sobremesas, cafés, bebidas etc.",
            "bs.c.precos": "OS PREÇOS JÁ ESTÃO DEFINIDOS?", "bs.c.desc": "AS DESCRIÇÕES DOS ITENS JÁ ESTÃO PRONTAS?",
            "bs.c.complementar": "EXISTE ALGUMA INFORMAÇÃO COMPLEMENTAR?",
            "bs.cc.1": "INGREDIENTES", "bs.cc.2": "ALÉRGENOS", "bs.cc.3": "VEGANO / VEGETARIANO", "bs.cc.4": "PICÂNCIA", "bs.cc.5": "TAMANHOS / PORÇÕES", "bs.cc.6": "HARMONIZAÇÕES",
            "bs.c.atualiza": "O CARDÁPIO PRECISARÁ SER ATUALIZADO COM FREQUÊNCIA?", "bs.c.qr": "HAVERÁ QR CODE?", "bs.c.fotos": "HAVERÁ FOTOGRAFIAS?",
            "bs.c.formato_def": "JÁ EXISTE FORMATO OU DIMENSÃO DEFINIDOS?", "bs.c.dimensoes": "QUAL FORMATO / DIMENSÃO?",
            "bs.c.grafica": "JÁ EXISTE GRÁFICA?", "bs.c.so_digital": "SERÁ SOMENTE DIGITAL",

            "bs.blkD.title": "SOBRE O USO DIGITAL",
            "bs.d.plataformas": "EM QUAIS PLATAFORMAS O MATERIAL SERÁ UTILIZADO?",
            "bs.dp.1": "INSTAGRAM", "bs.dp.2": "LINKEDIN", "bs.dp.3": "FACEBOOK", "bs.dp.4": "SITE", "bs.dp.5": "E-MAIL",
            "bs.d.dimensoes": "EXISTEM DIMENSÕES OBRIGATÓRIAS?", "bs.d.versoes": "QUANTAS VERSÕES OU FORMATOS SERÃO NECESSÁRIOS?",
            "bs.d.atualizado": "O CONTEÚDO SERÁ ATUALIZADO DEPOIS?", "bs.d.editavel": "VOCÊ PRECISA QUE ALGUM MATERIAL SEJA EDITÁVEL POSTERIORMENTE?",
            "bs.assin.pessoas": "QUANTAS PESSOAS UTILIZARÃO A ASSINATURA?", "bs.assin.infos": "QUAIS INFORMAÇÕES PRECISAM APARECER NA ASSINATURA?",
            "bs.assin.servico": "QUAL SERVIÇO DE E-MAIL É UTILIZADO?", "bs.as.1": "GMAIL", "bs.as.2": "OUTLOOK", "bs.as.3": "APPLE MAIL",
            "bs.tpl.redes": "PARA QUAL REDE SOCIAL?", "bs.tr.tiktok": "TIKTOK", "bs.tpl.conteudo": "QUE TIPOS DE CONTEÚDO A MARCA PUBLICA COM MAIS FREQUÊNCIA?",
            "bs.tpl.formatos": "QUAIS FORMATOS SERÃO NECESSÁRIOS?", "bs.tf.1": "POST", "bs.tf.2": "STORY", "bs.tf.3": "CARROSSEL", "bs.tf.4": "CAPA",
            "bs.tpl.quem": "QUEM UTILIZARÁ OS TEMPLATES DEPOIS?", "bs.tq.1": "EU", "bs.tq.2": "MINHA EQUIPE", "bs.tq.3": "SOCIAL MEDIA",
            "bs.banner.local": "ONDE O BANNER SERÁ PUBLICADO?", "bs.banner.cta": "EXISTE CTA (CHAMADA PARA AÇÃO)?", "bs.banner.spec": "EXISTE ALGUMA ESPECIFICAÇÃO TÉCNICA DA PLATAFORMA?",

            "bs.blkE.title": "SOBRE A APRESENTAÇÃO",
            "bs.e.objetivo": "QUAL É O OBJETIVO PRINCIPAL?", "bs.eo.1": "APRESENTAÇÃO INSTITUCIONAL", "bs.eo.2": "COMERCIAL", "bs.eo.3": "PITCH",
            "bs.eo.4": "PORTFÓLIO", "bs.eo.5": "TREINAMENTO", "bs.eo.6": "RELATÓRIO",
            "bs.e.publico": "PARA QUEM SERÁ APRESENTADA?", "bs.e.slides": "QUANTOS SLIDES APROXIMADAMENTE?",
            "bs.e.estruturado": "O CONTEÚDO JÁ ESTÁ ESTRUTURADO SLIDE A SLIDE?", "bs.e.texto": "QUEM FORNECERÁ O TEXTO?",
            "bs.et.1": "CLIENTE", "bs.et.2": "EQUIPE", "bs.e.graficos": "EXISTEM GRÁFICOS OU TABELAS?", "bs.e.imagens": "EXISTEM IMAGENS?",
            "bs.e.editavel": "O ARQUIVO PRECISARÁ SER EDITADO PELO CLIENTE POSTERIORMENTE?", "bs.e.formato": "EXISTE ALGUM FORMATO ESPECÍFICO NECESSÁRIO?",
            "bs.ef.1": "PDF", "bs.ef.2": "POWERPOINT",

            "bs.blkF.title": "SOBRE A LANDING PAGE",
            "bs.f.objetivo": "QUAL É O PRINCIPAL OBJETIVO DA PÁGINA?",
            "bs.fo.1": "APRESENTAR UM SERVIÇO", "bs.fo.2": "GERAR CONTATOS", "bs.fo.3": "RECEBER INSCRIÇÕES", "bs.fo.4": "DIVULGAR LANÇAMENTO", "bs.fo.5": "VENDER PRODUTO", "bs.fo.6": "APRESENTAR CAMPANHA",
            "bs.f.acao": "QUAL É A PRINCIPAL AÇÃO QUE O VISITANTE DEVE REALIZAR?", "bs.f.publico": "PARA QUEM ESSA PÁGINA SERÁ DIRECIONADA?",
            "bs.f.conteudo": "O CONTEÚDO JÁ ESTÁ PRONTO?", "bs.f.dominio": "JÁ EXISTE DOMÍNIO?", "bs.f.parte_site": "A LANDING PAGE FARÁ PARTE DE UM SITE JÁ EXISTENTE?",
            "bs.f.site_url": "QUAL É O ENDEREÇO?", "bs.f.secoes": "QUE SEÇÕES VOCÊ ACREDITA QUE PRECISAM EXISTIR?",
            "bs.h.f_secoes": "Essa resposta não determina obrigatoriamente a arquitetura final.",
            "bs.fs.1": "HERO", "bs.fs.2": "SOBRE", "bs.fs.3": "BENEFÍCIOS", "bs.fs.4": "SERVIÇOS / PRODUTO", "bs.fs.5": "DEPOIMENTOS",
            "bs.fs.6": "PORTFÓLIO", "bs.fs.7": "FAQ", "bs.fs.8": "FORMULÁRIO", "bs.fs.9": "CONTATO", "bs.fs.10": "CTA",
            "bs.f.formulario": "HAVERÁ FORMULÁRIO?", "bs.f.integracao": "ALGUMA INTEGRAÇÃO É NECESSÁRIA?",
            "bs.fi.1": "E-MAIL", "bs.fi.2": "WHATSAPP", "bs.fi.3": "WEB3FORMS", "bs.fi.4": "NEWSLETTER",
            "bs.f.links": "EXISTEM LINKS EXTERNOS IMPORTANTES?", "bs.f.requisitos": "EXISTEM REQUISITOS TÉCNICOS ESPECÍFICOS?",

            "bs.blkG.title": "SOBRE A PUBLICAÇÃO",
            "bs.g.tipo": "TIPO(S) DE PUBLICAÇÃO SELECIONADO(S):", "bs.g.objetivo": "QUAL É O OBJETIVO DA PUBLICAÇÃO?", "bs.g.publico": "QUEM É O PÚBLICO?",
            "bs.g.conteudo": "O CONTEÚDO ESTÁ FINALIZADO?", "bs.g.fase_final": "EM FASE FINAL", "bs.g.produzindo": "AINDA ESTÁ SENDO PRODUZIDO",
            "bs.g.paginas": "QUANTAS PÁGINAS APROXIMADAMENTE?", "bs.g.revisado": "O TEXTO JÁ FOI REVISADO?", "bs.g.em_revisao": "ESTÁ EM REVISÃO",
            "bs.g.estrutura": "A ESTRUTURA JÁ ESTÁ DEFINIDA?", "bs.g.capitulos": "EXISTEM CAPÍTULOS OU SEÇÕES?", "bs.g.indice": "EXISTE ÍNDICE?",
            "bs.g.imagens": "EXISTEM IMAGENS OU FOTOGRAFIAS?", "bs.g.tabelas": "EXISTEM TABELAS OU GRÁFICOS?", "bs.g.legendas": "EXISTEM LEGENDAS, CRÉDITOS OU NOTAS?",
            "bs.g.formato": "A PUBLICAÇÃO SERÁ:", "bs.gf.1": "IMPRESSA", "bs.gf.3": "IMPRESSA E DIGITAL",
            "bs.g.formato_def": "EXISTE FORMATO FINAL DEFINIDO?", "bs.g.dimensoes": "QUAIS DIMENSÕES?", "bs.g.grafica": "EXISTE GRÁFICA DEFINIDA?",
            "bs.g.acabamento": "EXISTE ACABAMENTO PREVISTO?", "bs.g.versoes": "SERÁ NECESSÁRIA MAIS DE UMA VERSÃO?",
            "bs.h.g_versoes": "Por exemplo: idioma, edição, tamanho, versão digital etc.",

            "bs.s6.label": "06 — PRODUÇÃO", "bs.s6.title": "ANTES DE PRODUZIR.",
            "bs.q.fornecedores": "EXISTEM FORNECEDORES OU GRÁFICAS QUE EU PRECISAREI CONSIDERAR?",
            "bs.q.spec_recebidas": "VOCÊ JÁ RECEBEU ESPECIFICAÇÕES TÉCNICAS DESSES FORNECEDORES?",
            "bs.q.tem_data": "EXISTE ALGUMA DATA DE PRODUÇÃO, PUBLICAÇÃO, LANÇAMENTO OU EVENTO?", "bs.q.data": "QUAL?",
            "bs.q.prazo_int": "EXISTE ALGUM PRAZO INTERMEDIÁRIO IMPORTANTE?",

            "bs.s7.label": "07 — APROVAÇÃO", "bs.s7.title": "QUEM APROVA O PROJETO?",
            "bs.q.quem_aprova": "QUEM PARTICIPA DAS APROVAÇÕES?",
            "bs.qa.1": "APENAS EU", "bs.qa.2": "EU + SÓCIO(A)", "bs.qa.3": "EQUIPE", "bs.qa.4": "DIRETORIA", "bs.qa.5": "CLIENTE FINAL",
            "bs.q.decisao_final": "QUEM POSSUI A DECISÃO FINAL? *",
            "bs.q.fornecedor_aprova": "EXISTE ALGUM FORNECEDOR QUE TAMBÉM PRECISARÁ APROVAR ESPECIFICAÇÕES TÉCNICAS?",

            "bs.s8.label": "08 — FINALIZAR", "bs.s8.title": "ÚLTIMAS INFORMAÇÕES.",
            "bs.q.algo_importante": "EXISTE ALGO IMPORTANTE SOBRE O PROJETO QUE AINDA NÃO APARECEU NESTE BRIEFING?",
            "bs.q.preocupacao": "EXISTE ALGUMA PREOCUPAÇÃO ESPECÍFICA EM RELAÇÃO ÀS PEÇAS?",
            "bs.q.sucesso": "O QUE FARIA VOCÊ CONSIDERAR ESTE PROJETO BEM RESOLVIDO? *",
            "bs.q.pendencias": "EXISTE ALGUM ARQUIVO, TEXTO, ESPECIFICAÇÃO OU INFORMAÇÃO QUE AINDA PRECISARÁ SER ENVIADO?",
            "bs.confirm.label": "TUDO CERTO?",
            "bs.confirm.text": "Revise suas respostas antes de enviar. Elas serão utilizadas como base para o desenvolvimento dos materiais contratados. Caso alguma informação técnica ainda não esteja definida, podemos alinhá-la durante o projeto quando necessário.",
            "bs.confirm.check": "Confirmo que revisei as informações e que os conteúdos fornecidos estão corretos para o desenvolvimento do projeto.",

            "bs.back": "[ ⟵ VOLTAR ]", "bs.next": "[ CONTINUAR ⟶ ]", "bs.submit": "[ ENVIAR BRIEFING ]",
            "bs.success.label": "RECEBIDO", "bs.success.title": "BRIEFING RECEBIDO.",
            "bs.success.text": "Obrigada. Vou usar essas informações como base para organizar e desenvolver os materiais do projeto.",
            "bs.success.home": "[ ⟵ VOLTAR AO INÍCIO ]",
            "bs.err.campo": "Preencha este campo para continuar.",
            "bs.err.servico": "Selecione pelo menos um serviço para continuar.",
            "bs.msg.enviando": "ENVIANDO...", "bs.msg.erro": "Não foi possível enviar o briefing agora. Tente novamente em alguns instantes.",
            "bs.subject": "Briefing de Serviços", "bs.subject.servicos": "serviços"
        },
        en: {
            "bs.header": "[ CONTRACTED PROJECT BRIEF ]",
            "bs.title": "SERVICES BRIEF",
            "bs.intro": "THIS IS THE BRIEF FOR THE SERVICES YOU'VE ALREADY CONTRACTED.<br>SELECT THE PIECES IN THE PROJECT AND ANSWER ONLY WHAT APPLIES TO THEM.",
            "bs.caption": "The form adapts to the services you select. You can go back to any step without losing what you've already filled in.",

            "bs.sel": "[ SELECT ]",
            "bs.opt.sim": "YES", "bs.opt.nao": "NO", "bs.opt.parcial": "PARTIALLY",
            "bs.opt.nao_sei": "NOT SURE", "bs.opt.ainda_nao_sei": "NOT SURE YET", "bs.opt.ainda_nao": "NOT YET",
            "bs.opt.na": "NOT APPLICABLE", "bs.opt.outro": "OTHER", "bs.opt.outra": "OTHER", "bs.opt.outras": "OTHERS",
            "bs.opt.nenhuma": "NONE", "bs.opt.talvez": "MAYBE", "bs.opt.algumas": "SOME", "bs.opt.quase": "ALMOST",
            "bs.opt.alguns": "ONLY SOME", "bs.opt.impresso": "PRINTED", "bs.opt.digital": "DIGITAL",
            "bs.opt.ambos": "PRINTED AND DIGITAL", "bs.opt.ainda_def": "TO BE DEFINED",
            "bs.q.especifique": "WHICH ONE?", "bs.q.qual": "WHICH ONE?", "bs.q.quais": "WHICH ONES?",

            "bs.grp.impresso": "PRINT", "bs.grp.digital": "DIGITAL", "bs.grp.editorial": "EDITORIAL",
            "bs.sv.cartao": "BUSINESS CARD", "bs.sv.papel": "LETTERHEAD", "bs.sv.papelaria": "CORPORATE STATIONERY",
            "bs.sv.folder": "FOLDER & PROMOTIONAL MATERIALS", "bs.sv.poster": "POSTER", "bs.sv.embalagem": "PACKAGING",
            "bs.sv.rotulo": "LABEL", "bs.sv.menu": "MENU", "bs.sv.assinatura": "EMAIL SIGNATURE",
            "bs.sv.templates": "SOCIAL MEDIA TEMPLATES", "bs.sv.banner": "DIGITAL BANNER", "bs.sv.apresentacao": "PRESENTATION",
            "bs.sv.landing": "LANDING PAGE", "bs.sv.livro": "BOOK", "bs.sv.revista": "MAGAZINE", "bs.sv.catalogo": "CATALOG",
            "bs.sv.relatorio": "REPORT", "bs.sv.manual": "MANUAL",

            "bs.s1.label": "01 — PROJECT", "bs.s1.title": "LET'S ORGANIZE THE PROJECT.",
            "bs.q.nome_marca": "BRAND OR COMPANY NAME *", "bs.q.cliente": "YOUR NAME *", "bs.q.email": "EMAIL *",
            "bs.q.servicos": "WHICH SERVICES ARE PART OF THIS PROJECT? *",
            "bs.h.servicos": "Select only the materials that are part of the already contracted project.",

            "bs.s2.label": "02 — BRAND", "bs.s2.title": "BEFORE THE PIECE, THE BRAND.",
            "bs.q.id_existente": "DOES YOUR BRAND ALREADY HAVE A DEFINED VISUAL IDENTITY? *",
            "bs.q.materiais_id": "WHICH VISUAL IDENTITY MATERIALS DO YOU HAVE?",
            "bs.mid.1": "LOGO", "bs.mid.2": "LOGO VARIATIONS", "bs.mid.3": "COLOR PALETTE", "bs.mid.4": "TYPOGRAPHY",
            "bs.mid.5": "GRAPHIC ELEMENTS", "bs.mid.6": "BRAND GUIDELINES", "bs.mid.7": "EDITABLE FILES", "bs.mid.8": "NONE / NOT SURE",
            "bs.q.arquivos": "DO YOU HAVE THE VISUAL IDENTITY FILES?",
            "bs.h.arquivos": "If needed, the files can be sent separately according to the project's instructions.",
            "bs.q.regra_id": "IS THERE AN IDENTITY RULE THAT MUST BE RESPECTED?",
            "bs.q.nao_alterar": "IS THERE SOMETHING VISUAL THAT MUST NOT BE CHANGED OR REINTERPRETED?",

            "bs.s3.label": "03 — GOAL & USE", "bs.s3.title": "WHAT DOES THIS PIECE NEED TO DO?",
            "bs.q.objetivo": "WHAT IS THE MAIN GOAL OF THE CONTRACTED MATERIALS? *",
            "bs.h.objetivo": "Tell me what you need to communicate, solve or make easier with these pieces.",
            "bs.q.publico": "WHO WILL THIS MATERIAL BE DIRECTED TO? *",
            "bs.q.onde_uso": "WHERE WILL THE MATERIALS BE USED?",
            "bs.uso.1": "PHYSICAL SPACE", "bs.uso.2": "CUSTOMER SERVICE", "bs.uso.3": "EVENT", "bs.uso.4": "POINT OF SALE",
            "bs.uso.5": "SENDING TO CLIENTS", "bs.uso.6": "SOCIAL MEDIA", "bs.uso.7": "WEBSITE", "bs.uso.8": "EMAIL",
            "bs.uso.9": "SALES PRESENTATION", "bs.uso.10": "PRINT", "bs.uso.11": "DELIVERY", "bs.uso.12": "PRODUCT PACKAGING",
            "bs.q.acao": "IS THERE AN ACTION YOU EXPECT PEOPLE TO TAKE WHEN THEY RECEIVE OR SEE THIS MATERIAL?",
            "bs.h.acao": "For example: get in touch, buy, request a quote, open a link, understand information, choose a product, etc.",

            "bs.s4.label": "04 — CONTENT", "bs.s4.title": "NOW, THE CONTENT.",
            "bs.q.conteudo_status": "IS THE CONTENT TO BE USED ALREADY READY? *",
            "bs.cs.1": "YES, IT'S FINALIZED", "bs.cs.2": "I HAVE MOST OF IT", "bs.cs.3": "STILL BEING PREPARED", "bs.cs.4": "I NEED TO ORGANIZE IT BEFORE SENDING",
            "bs.q.responsavel_textos": "WHO WILL BE RESPONSIBLE FOR THE COPY?",
            "bs.rt.1": "ME / MY TEAM", "bs.rt.2": "I ALREADY HAVE THE COPY", "bs.rt.3": "ANOTHER PROFESSIONAL",
            "bs.q.imagens_existem": "DO THE NEEDED IMAGES AND PHOTOS ALREADY EXIST?", "bs.ie.3": "THEY WON'T BE NEEDED",
            "bs.q.imagens_fornecedor": "WHO WILL PROVIDE THE IMAGES?",
            "bs.if.1": "ME / MY TEAM", "bs.if.2": "PHOTOGRAPHER", "bs.if.3": "STOCK LIBRARY", "bs.if.4": "TO BE DEFINED",
            "bs.q.conteudo_obrigatorio": "IS THERE ANY MANDATORY CONTENT?",
            "bs.h.conteudo_obrigatorio": "For example: phone, website, address, social media, QR Code, prices, legal info, contact details, credits or other information.",
            "bs.q.nao_aparecer": "IS THERE ANY INFORMATION THAT CANNOT APPEAR?",

            "bs.s5.label": "05 — SPECIFICATIONS", "bs.s5.title": "ABOUT EACH PIECE.",
            "bs.s5.text": "The questions below appear according to the services you selected. Answer only what's already defined.",

            "bs.blkA.title": "ABOUT THE PRINTED MATERIALS",
            "bs.a.uso": "WHAT WILL BE THE MAIN USE OF THE MATERIAL?",
            "bs.a.tem_dim": "DO YOU ALREADY HAVE THE FINAL DIMENSIONS?", "bs.a.dim_gr": "TO BE DEFINED WITH THE PRINTER", "bs.a.dim": "WHAT ARE THEY?",
            "bs.a.grafica": "IS THERE A PRINTER OR SUPPLIER ALREADY DEFINED?", "bs.a.escolhendo": "STILL CHOOSING",
            "bs.a.grafica_spec": "DID THE PRINTER PROVIDE A SPEC OR TEMPLATE?", "bs.a.vou_solicitar": "I'LL REQUEST IT",
            "bs.a.frente_verso": "WILL THE MATERIAL BE PRINTED FRONT AND BACK?",
            "bs.a.acabamentos": "IS THERE A FINISH ALREADY DEFINED?",
            "bs.ac.1": "NONE", "bs.ac.2": "LAMINATION", "bs.ac.3": "SPOT VARNISH", "bs.ac.4": "HOT STAMPING",
            "bs.ac.5": "EMBOSSING", "bs.ac.6": "SPECIAL CUT", "bs.ac.7": "FOLD",
            "bs.a.versoes": "HOW MANY DIFFERENT VERSIONS WILL BE NEEDED?",
            "bs.h.a_versoes": "For example: cards for different people, versions by unit, city, language or department.",
            "bs.cartao.pessoas": "HOW MANY PEOPLE WILL NEED A CARD?", "bs.cartao.infos": "WHAT INFORMATION SHOULD APPEAR ON THE CARD?",
            "bs.ci.1": "NAME", "bs.ci.2": "ROLE", "bs.ci.3": "PHONE", "bs.ci.4": "EMAIL", "bs.ci.5": "WEBSITE", "bs.ci.6": "INSTAGRAM",
            "bs.ci.7": "ADDRESS", "bs.ci.8": "QR CODE", "bs.ci.9": "SOCIAL MEDIA", "bs.ci.10": "LOGO",
            "bs.cartao.muda": "DOES THE INFORMATION CHANGE BETWEEN CARDS?",
            "bs.papel.uso": "THE LETTERHEAD WILL BE USED:", "bs.papel.editavel": "DO YOU NEED AN EDITABLE VERSION FOR DOCUMENTS?",
            "bs.folder.paginas": "ROUGHLY HOW MANY PAGES OR FACES WILL THE FOLDER HAVE?", "bs.folder.dobra": "IS THERE A FOLD PLANNED?",
            "bs.fd.1": "NO FOLD", "bs.fd.2": "ONE FOLD", "bs.fd.3": "TWO OR MORE FOLDS",
            "bs.folder.ordem": "IS THE CONTENT ALREADY ORGANIZED IN THE ORDER IT SHOULD APPEAR?",
            "bs.poster.local": "WHERE WILL THE POSTER BE DISPLAYED?", "bs.poster.distancia": "IS THERE AN APPROXIMATE READING DISTANCE?",
            "bs.pd.1": "CLOSE", "bs.pd.2": "MEDIUM", "bs.pd.3": "FAR",
            "bs.poster.destaque": "IS THERE INFORMATION THAT NEEDS TO BE THE MAIN HIGHLIGHT?",

            "bs.blkB.title": "ABOUT THE PRODUCT AND PRODUCTION",
            "bs.b.produto": "WHICH PRODUCT WILL RECEIVE THIS PACKAGING OR LABEL? *", "bs.b.versoes": "HOW MANY VERSIONS WILL BE NEEDED?",
            "bs.h.b_versoes": "For example: flavors, scents, sizes, different products or lines.",
            "bs.b.estrutura": "IS THE PHYSICAL STRUCTURE OF THE PACKAGING ALREADY DEFINED?", "bs.b.na_proj": "NOT APPLICABLE TO THIS PROJECT",
            "bs.b.fornecedor": "IS THERE A SUPPLIER ALREADY?", "bs.b.dieline": "DO YOU HAVE THE DIELINE PROVIDED BY THE MANUFACTURER?",
            "bs.b.vou_receber": "I'LL RECEIVE IT", "bs.b.dimensoes": "WHAT ARE THE DIMENSIONS?", "bs.b.dim_ph": "Not defined yet",
            "bs.b.material": "WHAT IS THE MATERIAL OF THE PACKAGING OR LABEL?", "bs.b.limitacao": "IS THERE A PRINTING LIMITATION?",
            "bs.b.infos": "WHAT MANDATORY INFORMATION NEEDS TO APPEAR?", "bs.h.b_infos": "Send only information already defined and approved for the product.",
            "bs.b.barras": "IS THERE A BARCODE?", "bs.b.qr": "IS THERE A QR CODE?", "bs.b.legais": "ARE THERE LEGAL, NUTRITIONAL OR REGULATORY DETAILS?",
            "bs.b.legais_nota": "This information must be provided by the client, ready and reviewed.",
            "bs.b.sem_impressao": "IS THERE AN AREA OF THE PACKAGING WHERE PRINTING IS NOT ALLOWED?",
            "bs.b.aviso": "The design project does not automatically include structural packaging engineering, dieline development, technical calculations, legal copy, nutrition tables, sanitary registration, regulatory validation or print production. When needed, that data and those files must be provided by the client or the responsible supplier.",

            "bs.blkC.title": "ABOUT THE MENU",
            "bs.c.formato": "THE MENU WILL BE:", "bs.c.conteudo": "IS THE CONTENT FINALIZED?", "bs.c.itens": "ROUGHLY HOW MANY ITEMS ARE THERE?",
            "bs.c.org": "HOW ARE THE ITEMS ORGANIZED?", "bs.h.c_org": "For example: starters, mains, desserts, coffees, drinks, etc.",
            "bs.c.precos": "ARE THE PRICES ALREADY SET?", "bs.c.desc": "ARE THE ITEM DESCRIPTIONS READY?",
            "bs.c.complementar": "IS THERE ANY COMPLEMENTARY INFORMATION?",
            "bs.cc.1": "INGREDIENTS", "bs.cc.2": "ALLERGENS", "bs.cc.3": "VEGAN / VEGETARIAN", "bs.cc.4": "SPICINESS", "bs.cc.5": "SIZES / PORTIONS", "bs.cc.6": "PAIRINGS",
            "bs.c.atualiza": "WILL THE MENU NEED FREQUENT UPDATES?", "bs.c.qr": "WILL THERE BE A QR CODE?", "bs.c.fotos": "WILL THERE BE PHOTOS?",
            "bs.c.formato_def": "IS THERE A FORMAT OR SIZE ALREADY DEFINED?", "bs.c.dimensoes": "WHICH FORMAT / SIZE?",
            "bs.c.grafica": "IS THERE A PRINTER ALREADY?", "bs.c.so_digital": "IT WILL BE DIGITAL ONLY",

            "bs.blkD.title": "ABOUT DIGITAL USE",
            "bs.d.plataformas": "ON WHICH PLATFORMS WILL THE MATERIAL BE USED?",
            "bs.dp.1": "INSTAGRAM", "bs.dp.2": "LINKEDIN", "bs.dp.3": "FACEBOOK", "bs.dp.4": "WEBSITE", "bs.dp.5": "EMAIL",
            "bs.d.dimensoes": "ARE THERE MANDATORY DIMENSIONS?", "bs.d.versoes": "HOW MANY VERSIONS OR FORMATS WILL BE NEEDED?",
            "bs.d.atualizado": "WILL THE CONTENT BE UPDATED LATER?", "bs.d.editavel": "DO YOU NEED ANY MATERIAL TO BE EDITABLE LATER?",
            "bs.assin.pessoas": "HOW MANY PEOPLE WILL USE THE SIGNATURE?", "bs.assin.infos": "WHAT INFORMATION NEEDS TO APPEAR IN THE SIGNATURE?",
            "bs.assin.servico": "WHICH EMAIL SERVICE IS USED?", "bs.as.1": "GMAIL", "bs.as.2": "OUTLOOK", "bs.as.3": "APPLE MAIL",
            "bs.tpl.redes": "FOR WHICH SOCIAL NETWORK?", "bs.tr.tiktok": "TIKTOK", "bs.tpl.conteudo": "WHAT TYPES OF CONTENT DOES THE BRAND POST MOST OFTEN?",
            "bs.tpl.formatos": "WHICH FORMATS WILL BE NEEDED?", "bs.tf.1": "POST", "bs.tf.2": "STORY", "bs.tf.3": "CAROUSEL", "bs.tf.4": "COVER",
            "bs.tpl.quem": "WHO WILL USE THE TEMPLATES AFTERWARDS?", "bs.tq.1": "ME", "bs.tq.2": "MY TEAM", "bs.tq.3": "SOCIAL MEDIA MANAGER",
            "bs.banner.local": "WHERE WILL THE BANNER BE PUBLISHED?", "bs.banner.cta": "IS THERE A CTA (CALL TO ACTION)?", "bs.banner.spec": "IS THERE A TECHNICAL SPEC FROM THE PLATFORM?",

            "bs.blkE.title": "ABOUT THE PRESENTATION",
            "bs.e.objetivo": "WHAT IS THE MAIN GOAL?", "bs.eo.1": "INSTITUTIONAL PRESENTATION", "bs.eo.2": "SALES", "bs.eo.3": "PITCH",
            "bs.eo.4": "PORTFOLIO", "bs.eo.5": "TRAINING", "bs.eo.6": "REPORT",
            "bs.e.publico": "WHO WILL IT BE PRESENTED TO?", "bs.e.slides": "ROUGHLY HOW MANY SLIDES?",
            "bs.e.estruturado": "IS THE CONTENT ALREADY STRUCTURED SLIDE BY SLIDE?", "bs.e.texto": "WHO WILL PROVIDE THE COPY?",
            "bs.et.1": "CLIENT", "bs.et.2": "TEAM", "bs.e.graficos": "ARE THERE CHARTS OR TABLES?", "bs.e.imagens": "ARE THERE IMAGES?",
            "bs.e.editavel": "WILL THE FILE NEED TO BE EDITED BY THE CLIENT LATER?", "bs.e.formato": "IS THERE A SPECIFIC FORMAT NEEDED?",
            "bs.ef.1": "PDF", "bs.ef.2": "POWERPOINT",

            "bs.blkF.title": "ABOUT THE LANDING PAGE",
            "bs.f.objetivo": "WHAT IS THE MAIN GOAL OF THE PAGE?",
            "bs.fo.1": "PRESENT A SERVICE", "bs.fo.2": "GENERATE LEADS", "bs.fo.3": "COLLECT SIGN-UPS", "bs.fo.4": "ANNOUNCE A LAUNCH", "bs.fo.5": "SELL A PRODUCT", "bs.fo.6": "PRESENT A CAMPAIGN",
            "bs.f.acao": "WHAT IS THE MAIN ACTION THE VISITOR SHOULD TAKE?", "bs.f.publico": "WHO WILL THIS PAGE BE DIRECTED TO?",
            "bs.f.conteudo": "IS THE CONTENT ALREADY READY?", "bs.f.dominio": "IS THERE A DOMAIN ALREADY?", "bs.f.parte_site": "WILL THE LANDING PAGE BE PART OF AN EXISTING SITE?",
            "bs.f.site_url": "WHAT IS THE ADDRESS?", "bs.f.secoes": "WHICH SECTIONS DO YOU THINK NEED TO EXIST?",
            "bs.h.f_secoes": "This answer does not necessarily determine the final architecture.",
            "bs.fs.1": "HERO", "bs.fs.2": "ABOUT", "bs.fs.3": "BENEFITS", "bs.fs.4": "SERVICES / PRODUCT", "bs.fs.5": "TESTIMONIALS",
            "bs.fs.6": "PORTFOLIO", "bs.fs.7": "FAQ", "bs.fs.8": "FORM", "bs.fs.9": "CONTACT", "bs.fs.10": "CTA",
            "bs.f.formulario": "WILL THERE BE A FORM?", "bs.f.integracao": "IS ANY INTEGRATION NEEDED?",
            "bs.fi.1": "EMAIL", "bs.fi.2": "WHATSAPP", "bs.fi.3": "WEB3FORMS", "bs.fi.4": "NEWSLETTER",
            "bs.f.links": "ARE THERE IMPORTANT EXTERNAL LINKS?", "bs.f.requisitos": "ARE THERE SPECIFIC TECHNICAL REQUIREMENTS?",

            "bs.blkG.title": "ABOUT THE PUBLICATION",
            "bs.g.tipo": "SELECTED PUBLICATION TYPE(S):", "bs.g.objetivo": "WHAT IS THE GOAL OF THE PUBLICATION?", "bs.g.publico": "WHO IS THE AUDIENCE?",
            "bs.g.conteudo": "IS THE CONTENT FINALIZED?", "bs.g.fase_final": "IN THE FINAL PHASE", "bs.g.produzindo": "STILL BEING PRODUCED",
            "bs.g.paginas": "ROUGHLY HOW MANY PAGES?", "bs.g.revisado": "HAS THE TEXT BEEN PROOFREAD?", "bs.g.em_revisao": "IT'S BEING PROOFREAD",
            "bs.g.estrutura": "IS THE STRUCTURE ALREADY DEFINED?", "bs.g.capitulos": "ARE THERE CHAPTERS OR SECTIONS?", "bs.g.indice": "IS THERE A TABLE OF CONTENTS?",
            "bs.g.imagens": "ARE THERE IMAGES OR PHOTOS?", "bs.g.tabelas": "ARE THERE TABLES OR CHARTS?", "bs.g.legendas": "ARE THERE CAPTIONS, CREDITS OR NOTES?",
            "bs.g.formato": "THE PUBLICATION WILL BE:", "bs.gf.1": "PRINTED", "bs.gf.3": "PRINTED AND DIGITAL",
            "bs.g.formato_def": "IS THE FINAL FORMAT DEFINED?", "bs.g.dimensoes": "WHICH DIMENSIONS?", "bs.g.grafica": "IS THERE A PRINTER DEFINED?",
            "bs.g.acabamento": "IS THERE A FINISH PLANNED?", "bs.g.versoes": "WILL MORE THAN ONE VERSION BE NEEDED?",
            "bs.h.g_versoes": "For example: language, edition, size, digital version, etc.",

            "bs.s6.label": "06 — PRODUCTION", "bs.s6.title": "BEFORE WE PRODUCE.",
            "bs.q.fornecedores": "ARE THERE SUPPLIERS OR PRINTERS I'LL NEED TO CONSIDER?",
            "bs.q.spec_recebidas": "HAVE YOU ALREADY RECEIVED TECHNICAL SPECS FROM THESE SUPPLIERS?",
            "bs.q.tem_data": "IS THERE A PRODUCTION, PUBLICATION, LAUNCH OR EVENT DATE?", "bs.q.data": "WHEN?",
            "bs.q.prazo_int": "IS THERE AN IMPORTANT INTERMEDIATE DEADLINE?",

            "bs.s7.label": "07 — APPROVAL", "bs.s7.title": "WHO APPROVES THE PROJECT?",
            "bs.q.quem_aprova": "WHO TAKES PART IN THE APPROVALS?",
            "bs.qa.1": "JUST ME", "bs.qa.2": "ME + PARTNER", "bs.qa.3": "TEAM", "bs.qa.4": "BOARD", "bs.qa.5": "END CLIENT",
            "bs.q.decisao_final": "WHO HAS THE FINAL DECISION? *",
            "bs.q.fornecedor_aprova": "IS THERE A SUPPLIER WHO WILL ALSO NEED TO APPROVE TECHNICAL SPECS?",

            "bs.s8.label": "08 — FINISH", "bs.s8.title": "LAST DETAILS.",
            "bs.q.algo_importante": "IS THERE SOMETHING IMPORTANT ABOUT THE PROJECT THAT HASN'T COME UP IN THIS BRIEF?",
            "bs.q.preocupacao": "IS THERE A SPECIFIC CONCERN ABOUT THE PIECES?",
            "bs.q.sucesso": "WHAT WOULD MAKE YOU CONSIDER THIS PROJECT WELL RESOLVED? *",
            "bs.q.pendencias": "IS THERE A FILE, TEXT, SPEC OR INFORMATION THAT STILL NEEDS TO BE SENT?",
            "bs.confirm.label": "ALL GOOD?",
            "bs.confirm.text": "Review your answers before sending. They'll be used as the basis for developing the contracted materials. If any technical information isn't defined yet, we can align it during the project when needed.",
            "bs.confirm.check": "I confirm that I've reviewed the information and that the content provided is correct for developing the project.",

            "bs.back": "[ ⟵ BACK ]", "bs.next": "[ CONTINUE ⟶ ]", "bs.submit": "[ SEND BRIEF ]",
            "bs.success.label": "RECEIVED", "bs.success.title": "BRIEF RECEIVED.",
            "bs.success.text": "Thank you. I'll use this information as the basis to organize and develop the project's materials.",
            "bs.success.home": "[ ⟵ BACK TO HOME ]",
            "bs.err.campo": "Please fill in this field to continue.",
            "bs.err.servico": "Select at least one service to continue.",
            "bs.msg.enviando": "SENDING...", "bs.msg.erro": "The brief couldn't be sent right now. Please try again in a few moments.",
            "bs.subject": "Services Brief", "bs.subject.servicos": "services"
        }
    };

    /* Serviços que compõem o bloco G (editorial), para o resumo automático. */
    const EDITORIAL = ['livro', 'revista', 'catalogo', 'relatorio', 'manual'];

    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('briefing-servicos-form');
        if (!form) return;

        const steps = Array.from(form.querySelectorAll('.bi-step'));
        const btnBack = document.getElementById('bs-back');
        const btnNext = document.getElementById('bs-next');
        const btnSubmit = document.getElementById('bs-submit');
        const curEl = document.getElementById('bs-current');
        const totalEl = document.getElementById('bs-total');
        const statusEl = document.getElementById('bs-status');
        const successEl = document.getElementById('bs-success');
        const subjectField = document.getElementById('bs-subject');
        let current = 0;
        let enviando = false;

        const curLang = () => (localStorage.getItem('lang') === 'en' ? 'en' : 'pt');
        const t = (key) => (BS[curLang()][key] != null ? BS[curLang()][key] : key);

        /* serviços marcados (chaves data-key), ignorando os desabilitados */
        function selectedServices() {
            const set = new Set();
            form.querySelectorAll('input[name="servicos_contratados"]:checked').forEach(function (i) {
                if (!i.disabled && i.dataset.key) set.add(i.dataset.key);
            });
            return set;
        }

        function applyBS() {
            const dict = BS[curLang()];
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

        function updateEditorialTipo(sel) {
            const label = document.getElementById('bs-g-tipo-label');
            const hidden = document.getElementById('bs-g-tipo');
            if (!label || !hidden) return;
            const nomes = [];
            form.querySelectorAll('input[name="servicos_contratados"]:checked').forEach(function (i) {
                if (EDITORIAL.indexOf(i.dataset.key) !== -1) nomes.push(i.value);
            });
            label.textContent = nomes.length ? nomes.join(', ') : '—';
            hidden.value = nomes.join(', ');
        }

        function aplicarCondicionais() {
            const sel = selectedServices();
            // 1. blocos por serviço (habilita/desabilita tudo que está dentro)
            form.querySelectorAll('[data-svc-block]').forEach(function (b) {
                const svcs = (b.dataset.blockSvcs || '').split(' ');
                ligar(b, svcs.some(function (s) { return sel.has(s); }));
            });
            // 2. subcondições por serviço + condicionais internas (data-when)
            form.querySelectorAll('[data-svc], [data-when]').forEach(function (el) {
                let ativo = true;
                if (el.dataset.svc) ativo = ativo && sel.has(el.dataset.svc);
                if (el.dataset.when) ativo = ativo && whenActive(el);
                ligar(el, ativo);
            });
            updateEditorialTipo(sel);
        }

        function enforceLimit(grid, justChanged) {
            const max = parseInt(grid.dataset.max, 10);
            const checked = grid.querySelectorAll('input[type="checkbox"]:checked');
            if (checked.length > max && justChanged && justChanged.checked) {
                justChanged.checked = false;
                showStatus(grid.dataset.maxMsg, 'erro');
            }
        }

        function showStatus(key, tipo) {
            statusEl.dataset.k = key || '';
            statusEl.textContent = key ? t(key) : '';
            statusEl.className = 'form-status mono' + (tipo ? ' is-' + tipo : '');
        }

        function clearErrors(scope) {
            (scope || form).querySelectorAll('.has-error').forEach(function (el) { el.classList.remove('has-error'); });
        }

        function markError(field) {
            const box = field.closest('.input-group') || field.closest('.bi-confirm') || field.closest('.check-item');
            if (box) box.classList.add('has-error');
        }

        function validateStep(stepEl) {
            clearErrors(stepEl);
            // campos obrigatórios visíveis e habilitados
            const req = Array.from(stepEl.querySelectorAll('[data-req="1"]')).filter(function (f) {
                return !f.disabled && !f.closest('[hidden]');
            });
            for (let i = 0; i < req.length; i++) {
                const f = req[i];
                const ok = (f.type === 'checkbox') ? f.checked : String(f.value).trim() !== '';
                if (!ok) {
                    markError(f);
                    showStatus('bs.err.campo', 'erro');
                    try { f.focus({ preventScroll: false }); } catch (e) { f.focus(); }
                    return false;
                }
            }
            // grupos com mínimo (ex.: pelo menos um serviço)
            const minGrids = stepEl.querySelectorAll('.check-grid[data-req-min]');
            for (let g = 0; g < minGrids.length; g++) {
                const grid = minGrids[g];
                const min = parseInt(grid.dataset.reqMin, 10);
                const first = grid.querySelector('input[type="checkbox"]');
                if (!first) continue;
                const n = form.querySelectorAll('input[name="' + first.name + '"]:checked').length;
                if (n < min) {
                    const box = grid.closest('.input-group');
                    if (box) box.classList.add('has-error');
                    showStatus('bs.err.servico', 'erro');
                    try { first.focus({ preventScroll: false }); } catch (e) { first.focus(); }
                    return false;
                }
            }
            showStatus('', '');
            return true;
        }

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
        function goBack() { if (current > 0) { show(current - 1); scrollToForm(); } }

        btnNext.addEventListener('click', goNext);
        btnBack.addEventListener('click', goBack);

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

        /* assunto: Briefing de Serviços — [MARCA] — [resumo dos serviços] */
        function buildSubject() {
            const nome = ((form.querySelector('#bs-nome-marca') || {}).value || '').trim() || 'Mari Design Co.';
            const checked = Array.from(form.querySelectorAll('input[name="servicos_contratados"]:checked'));
            let resumo = '';
            if (checked.length) {
                const short = SHORT[curLang()];
                if (checked.length <= 3) {
                    resumo = ' — ' + checked.map(function (i) { return short[i.dataset.key] || i.value; }).join(' + ');
                } else {
                    resumo = ' — ' + checked.length + ' ' + t('bs.subject.servicos');
                }
            }
            return t('bs.subject') + ' — ' + nome + resumo;
        }

        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            if (current < steps.length - 1) { goNext(); return; }
            if (enviando) return;
            if (!validateStep(steps[current])) return;

            subjectField.value = buildSubject();

            enviando = true;
            btnSubmit.disabled = true;
            btnSubmit.style.pointerEvents = 'none';
            showStatus('bs.msg.enviando');

            try {
                const resp = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(form) });
                const data = await resp.json();
                if (data.success) {
                    form.hidden = true;
                    successEl.hidden = false;
                    scrollToForm();
                } else {
                    showStatus('bs.msg.erro', 'erro');
                }
            } catch (err) {
                showStatus('bs.msg.erro', 'erro');
            } finally {
                enviando = false;
                btnSubmit.disabled = false;
                btnSubmit.style.pointerEvents = '';
            }
        });

        /* inicialização */
        totalEl.textContent = pad(steps.length);
        aplicarCondicionais();
        applyBS();
        show(0);

        new MutationObserver(applyBS).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
        const lt = document.getElementById('lang-toggle');
        if (lt) lt.addEventListener('click', function () { setTimeout(applyBS, 0); });
    });
})();
