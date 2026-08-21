/**
 * NIVES STUDIO — Vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. I18N (Bilingual System)
       ========================================= */
    const translations = {
        pt: {
            "nav.menu": "[ MENU ]",
            "nav.close": "[ FECHAR ]",
            "nav.work": "TRABALHOS",
            "nav.services": "SERVIÇOS",
            "nav.about": "SOBRE",
            "nav.contact": "CONTATO",
            "nav.back": "[ ⟵ VOLTAR ]",
            "nav.home": "[ ⟵ INÍCIO ]",
            "work.ref": "REF.001—003",
            "work.cat.id": "IDENTIDADE VISUAL",
            "work.cap.afora": "Arquitetura / São Paulo",
            "work.cap.lilt": "Gastronomia / Curitiba",
            "work.cap.helena": "Psicologia / Belo Horizonte",
            "about.doc": "DOCUMENTAÇÃO",
            "about.portrait.cap": "Direção de arte",
            "about.portrait.hint": "FOTO 3&times;4<br>assets/foto-marina.jpg",
            "footer.widget.tag": "ESTÚDIO DE DESIGN GRÁFICO<br>DESDE 2026.",
            "services.caption": "Pacotes e serviços avulsos / 2026",
            "services.sec1": "[01] IDENTIDADE VISUAL",
            "services.sec1.tag": "PACOTES",
            "services.sec2": "[02] SERVIÇOS AVULSOS",
            "services.sec2.tag": "INDIVIDUAIS OU COMBINADOS",
            "services.sec3": "[03] PROCESSO",
            "services.sec3.tag": "FLUXO DE TRABALHO",
            "services.sec4": "[04] PERGUNTAS",
            "services.sec4.tag": "DÚVIDAS FREQUENTES",
            "services.pkg1.cap": "Sistema completo de marca",
            "services.pkg2.cap": "Solução para restaurantes",
            "services.note": "NOTA",
            "proj.meta.client": "CLIENTE",
            "proj.meta.services": "SERVIÇOS",
            "proj.meta.year": "ANO",
            "proj.meta.location": "LOCAL",
            "proj.afora.kicker": "0.1 &nbsp; IDENTIDADE VISUAL",
            "proj.afora.cap": "Escritório de arquitetura / 2026",
            "proj.afora.services": "IDENTIDADE VISUAL",
            "proj.lilt.kicker": "0.2 &nbsp; IDENTIDADE VISUAL / EMBALAGENS",
            "proj.lilt.cap": "Gastronomia / 2026",
            "proj.lilt.services": "ID / EMBALAGENS / SINALIZAÇÃO",
            "proj.helena.kicker": "0.3 &nbsp; IDENTIDADE VISUAL / EDITORIAL",
            "proj.helena.cap": "Psicologia clínica / 2026",
            "proj.helena.services": "ID / EDITORIAL / DIGITAL",
            "gal.guidelines": "MANUAL DA MARCA",
            "gal.typography": "TIPOGRAFIA",
            "gal.palette": "PALETA DE CORES",
            "gal.stationery": "PAPELARIA",
            "gal.brandmark": "MARCA",
            "gal.menu": "SISTEMA DE CARDÁPIO",
            "gal.packaging": "EMBALAGENS",
            "gal.signage": "SINALIZAÇÃO",
            "gal.monogram": "MONOGRAMA",
            "gal.editorial": "GRADE EDITORIAL",
            "gal.digital": "KIT DIGITAL",
            "briefing.caption": "Resposta em até 2 dias úteis",

            "hero.label": "( ESTÚDIO DE DESIGN )",
            "hero.manifesto": "DESIGN GRÁFICO PARA IDEIAS QUE PEDEM FORMA, CLAREZA E PERSONALIDADE —<br>ENTRE IDENTIDADE, EDITORIAL, IMPRESSO E DIGITAL.",
            "hero.location": "BRASIL / WORLDWIDE",
            "work.title": "[01] TRABALHOS SELECIONADOS",
            "about.title": "[02] SOBRE",
            "about.text": "Olá, sou a Marina — diretora de arte & designer com foco em identidade visual & gastronomia.",
            "about.text2": "Meu processo mistura repertório, estratégia e intuição. Sem fórmulas prontas ou uma estética única para tudo. A ideia é encontrar uma linguagem que pareça própria, faça sentido e continue interessante depois do primeiro impacto.",
            "about.kicker": "[ PERFIL ]",
            "about.ficha": "[ FICHA ]",
            "about.data.local": "LOCAL",
            "about.data.local.v": "BRASIL",
            "about.data.foco": "FOCO",
            "about.data.foco.v": "DIREÇÃO DE ARTE",
            "about.data.desde": "DESDE",
            "about.data.status": "STATUS",
            "about.data.status.v": "DISPONÍVEL",
            "about.areas": "IDENTIDADE · EDITORIAL · IMPRESSO · DIGITAL",
            "about.areaslabel": "ÁREAS",
            "about.area1": "IDENTIDADE",
            "about.area2": "EDITORIAL",
            "about.area3": "IMPRESSO",
            "about.area4": "DIGITAL",
            "footer.headline.note": "(ADORARIA OUVIR SUA IDEIA)",
            "footer.headline": "VAMOS CRIAR<br>ALGO JUNTOS.",
            "footer.cta.services": "[ PROJETO SOB MEDIDA ⟶ ]",
            "footer.widget.city": "Brasil",
            "footer.status.open": "ESTÚDIO ABERTO: ON-LINE",
            "footer.status.closed": "ESTÚDIO FECHADO: VOLTAMOS ÀS {time}",
            "project.afora.desc": "A Afora é um escritório de arquitetura focado em integrar espaços internos e externos com fluidez. O desafio foi criar uma identidade visual que transmitisse solidez estrutural e, ao mesmo tempo, respiro e espaço negativo. O sistema visual baseia-se em grids rígidos contrastados por tipografia leve e arejada.",
            "project.lilt.desc": "A Lilt é uma cafeteria de bairro que trabalha com grãos de pequenos produtores. O sistema visual nasceu da rotina do balcão: etiquetas escritas à mão, carimbos de lote e cardápios que mudam toda semana. Traduzimos isso num kit tipográfico mono, um selo modular e embalagens em papel kraft impressas em uma cor só — barato de repor e reconhecível a três metros de distância.",
            "project.helena.desc": "Helena atende adultos em consultório e online, e chegou sem nenhum material além de um perfil no Instagram. A identidade precisava soar acolhedora sem cair no clichê de folha verde e caligrafia. Trabalhamos um monograma construído a partir de duas curvas que se aproximam sem se tocar, uma grade editorial calma para os textos longos e um kit de posts que ela mesma atualiza — tudo em uma paleta neutra de dois tons.",

            // Raw Services Texts
            "services.label": "( SERVIÇOS )",
            "briefing.title": "BRIEFING",
            "services.giant1": "SISTEMAS",
            "services.giant2": "VISUAIS",
            "services.intro.raw": "NÓS NÃO FAZEMOS APENAS LOGOTIPOS.<br>CONSTRUÍMOS SISTEMAS ESCALÁVEIS.<br>GRID. TIPOGRAFIA. CONTRASTE.<br>TUDO INTENCIONAL.<br>NADA SUPÉRFLUO.",
            "services.pkg.btn": "[ INICIAR PROJETO ⟶ ]",
            "services.pkg1.name": "IDENTIDADE VISUAL",
            "services.pkg1.item1": "+ DIREÇÃO ESTRATÉGICA E CONCEITO DA MARCA",
            "services.pkg1.item2": "+ SISTEMA DE LOGOTIPO E VARIAÇÕES",
            "services.pkg1.item3": "+ PALETA DE CORES",
            "services.pkg1.item4": "+ SISTEMA TIPOGRÁFICO",
            "services.pkg1.item5": "+ ELEMENTOS GRÁFICOS DE APOIO",
            "services.pkg2.name": "IDENTIDADE PARA GASTRONOMIA",
            "services.pkg2.item1": "+ MENU OU CARDÁPIO",
            "services.pkg2.item2": "+ EMBALAGEM PRINCIPAL",
            "services.pkg2.item3": "+ RÓTULO, SELO OU ADESIVO",
            "services.pkg2.item4": "+ PAPELARIA ESSENCIAL",
            "services.pkg2.item5": "+ MATERIAL DIGITAL DE LANÇAMENTO",
            "services.addon1.tag": "IMPRESSO",
            "services.addon2.tag": "DIGITAL",
            "services.addon3.tag": "EDITORIAL",
            "services.addon1.raw": "- CARTÃO DE VISITA<br>- PAPEL TIMBRADO<br>- PAPELARIA CORPORATIVA<br>- FOLDER E MATERIAIS PROMOCIONAIS<br>- POSTERS E CARTAZES<br>- EMBALAGENS<br>- RÓTULOS<br>- MENUS E CARDÁPIOS",
            "services.addon2.raw": "- ASSINATURA DE E-MAIL<br>- TEMPLATES PARA REDES SOCIAIS<br>- BANNERS DIGITAIS<br>- APRESENTAÇÕES<br>- LANDING PAGES",
            "services.addon3.raw": "- LIVROS<br>- REVISTAS<br>- CATÁLOGOS<br>- RELATÓRIOS<br>- MANUAIS",
            "services.proc.1a": "DESCOBERTA", "services.proc.1b": "PESQUISA",
            "services.proc.2a": "ESTRATÉGIA", "services.proc.2b": "DIREÇÃO",
            "services.proc.3a": "DESIGN",     "services.proc.3b": "SISTEMA",
            "services.proc.4a": "ENTREGA",    "services.proc.4b": "MANUAL",
            "services.proc.1c": "Conversa inicial, análise do mercado e do que já existe. É daqui que sai o escopo fechado.",
            "services.proc.2c": "Posicionamento, território visual e moodboard. Você aprova a direção antes de qualquer arte.",
            "services.proc.3c": "Logo, tipografia, cores e aplicações construídos como um sistema — não peças soltas.",
            "services.proc.4c": "Arquivos organizados, manual de uso e uma call de passagem para você aplicar sozinha.",
            "services.proc.disclaimer": "ACOMPANHAMOS VOCÊ DURANTE TODO O PROCESSO —<br>NÃO APENAS ENTREGAMOS ARQUIVOS NO FINAL.",
            "services.faq1.q": "QUAIS SERVIÇOS POSSO CONTRATAR?",
            "services.faq1.a": "Trabalho com identidade visual, projetos para marcas de gastronomia, design para redes sociais e peças avulsas para meios digitais e impressos. Os serviços disponíveis podem ser consultados na página de serviços.",
            "services.faq2.q": "É POSSÍVEL CONTRATAR APENAS UM LOGOTIPO?",
            "services.faq2.a": "Não. O logotipo é desenvolvido como parte de um sistema visual, para que a marca tenha consistência e possa funcionar em diferentes aplicações.",
            "services.faq3.q": "POSSO CONTRATAR UMA PEÇA AVULSA?",
            "services.faq3.a": "Sim. Alguns materiais digitais e impressos podem ser contratados separadamente, como cartões, menus, banners, materiais para redes sociais e outras peças disponíveis na página de serviços.",
            "services.faq4.q": "QUANTO TEMPO LEVA UM PROJETO?",
            "services.faq4.a": "O prazo varia conforme o serviço, a complexidade e a disponibilidade de agenda. Projetos de identidade visual costumam levar entre 4 e 6 semanas, enquanto projetos maiores ou voltados à gastronomia podem exigir um período maior.",
            "services.faq5.q": "QUANTAS ALTERAÇÕES ESTÃO INCLUÍDAS?",
            "services.faq5.a": "Cada projeto possui etapas de apresentação e ajustes definidas de acordo com o serviço contratado. Tudo é informado na proposta antes do início do projeto.",
            "services.faq6.q": "COMO FUNCIONA A CONTRATAÇÃO?",
            "services.faq6.a": "Após o envio do pré-briefing, analiso as necessidades do projeto e, estando tudo alinhado, envio a proposta com escopo, prazo e investimento. Com a aprovação e o pagamento do sinal, o projeto entra oficialmente na agenda.",
            "services.faq7.q": "COMO FUNCIONA O PAGAMENTO?",
            "services.faq7.a": "O pagamento é dividido em 50% na reserva da agenda e 50% na entrega final. É possível pagar via Pix ou parcelar em até 6x, com acréscimo das taxas da plataforma. Para clientes internacionais, as condições são combinadas previamente.",
            "services.faq8.q": "ATENDE CLIENTES DE OUTRAS CIDADES OU PAÍSES?",
            "services.faq8.a": "Sim. Todo o processo pode ser realizado online, permitindo atender projetos no Brasil e no exterior.",
            "services.footer.question": "Não encontrou o que precisava?",

            // Formulário de Briefing
            "briefing.header": "[ REQUISIÇÃO DE PROJETO ]",
            "briefing.intro": "UM PRIMEIRO CONTATO RÁPIDO PARA EU ENTENDER SEU PROJETO E RETORNAR COM UMA PROPOSTA.<br>SÃO SÓ ALGUNS CAMPOS — O BRIEFING APROFUNDADO VEM DEPOIS, SE A GENTE SEGUIR JUNTOS.",
            "briefing.submit": "[ ENVIAR_FICHA ]",

            // pré-briefing
            "bf.s1": "01 — DADOS INICIAIS",
            "bf.s2": "02 — SERVIÇO",
            "bf.s3": "03 — SOBRE O PROJETO",
            "bf.s4": "04 — CONTEXTO, PRAZO E INVESTIMENTO",
            "bf.s5": "05 — FINAL",
            "bf.nome": "NOME *",
            "bf.email": "E-MAIL *",
            "bf.marca": "NOME DA MARCA OU EMPRESA *",
            "bf.semnome": "AINDA NÃO TENHO NOME DEFINIDO",
            "bf.site": "SITE OU INSTAGRAM",
            "bf.local": "ONDE SUA MARCA ESTÁ LOCALIZADA?",
            "bf.local.ph": "Cidade e país",
            "bf.servico": "O QUE VOCÊ ESTÁ BUSCANDO? *",
            "bf.sel": "[ SELECIONE ]",
            "bf.sv.id": "IDENTIDADE VISUAL",
            "bf.sv.gastro": "IDENTIDADE PARA GASTRONOMIA",
            "bf.sv.imp": "MATERIAL IMPRESSO",
            "bf.sv.dig": "MATERIAL DIGITAL",
            "bf.sv.edit": "PROJETO EDITORIAL",
            "bf.sv.naosei": "AINDA NÃO SEI EXATAMENTE DO QUE PRECISO",
            "bf.id.momento": "EM QUAL MOMENTO SUA MARCA ESTÁ? *",
            "bf.id.m1": "É UMA MARCA NOVA, AINDA EM CONSTRUÇÃO",
            "bf.id.m2": "JÁ EXISTE, MAS NUNCA TEVE UMA IDENTIDADE PROFISSIONAL",
            "bf.id.m3": "JÁ POSSUI IDENTIDADE, MAS PRECISA SER REFORMULADA",
            "bf.id.m4": "A MARCA MUDOU E A IDENTIDADE ATUAL NÃO REPRESENTA MAIS O NEGÓCIO",
            "bf.id.motivacao": "O QUE MOTIVOU VOCÊ A BUSCAR UMA IDENTIDADE VISUAL AGORA? *",
            "bf.id.sobre": "CONTE BREVEMENTE SOBRE A MARCA E O QUE ELA OFERECE. *",
            "bf.id.atual": "EXISTE UMA IDENTIDADE VISUAL ATUALMENTE? *",
            "bf.sim": "SIM",
            "bf.nao": "NÃO",
            "bf.id.a3": "ESTÁ EM DESENVOLVIMENTO",
            "bf.id.problema": "O QUE VOCÊ SENTE QUE NÃO FUNCIONA NA IDENTIDADE ATUAL?",
            "bf.ga.tipo": "QUAL É O TIPO DE NEGÓCIO? *",
            "bf.ga.t1": "RESTAURANTE",
            "bf.ga.t2": "CAFÉ / CAFETERIA",
            "bf.ga.t3": "BAR",
            "bf.ga.t4": "PADARIA / CONFEITARIA",
            "bf.ga.t5": "DELIVERY",
            "bf.ga.t6": "PRODUTO ALIMENTÍCIO",
            "bf.outro": "OUTRO",
            "bf.especifique": "QUAL?",
            "bf.ga.momento": "EM QUAL MOMENTO O NEGÓCIO ESTÁ? *",
            "bf.ga.m1": "AINDA SERÁ LANÇADO",
            "bf.ga.m2": "ESTÁ EM FASE DE LANÇAMENTO",
            "bf.ga.m3": "JÁ ESTÁ FUNCIONANDO",
            "bf.ga.m4": "JÁ EXISTE E ESTÁ PASSANDO POR UMA REFORMULAÇÃO",
            "bf.ga.sobre": "CONTE BREVEMENTE SOBRE O NEGÓCIO. *",
            "bf.ga.materiais": "ALÉM DA IDENTIDADE VISUAL, QUAIS MATERIAIS VOCÊ IMAGINA PRECISAR?",
            "bf.ga.mat1": "MENU / CARDÁPIO",
            "bf.ga.mat2": "EMBALAGEM",
            "bf.ga.mat3": "RÓTULO / ADESIVO",
            "bf.ga.mat4": "PAPELARIA",
            "bf.ga.mat5": "MATERIAIS DIGITAIS",
            "bf.naosei": "AINDA NÃO SEI",
            "bf.ga.help": "Não precisa definir tudo agora.",
            "bf.imp.material": "QUE MATERIAL VOCÊ PRECISA?",
            "bf.imp.m1": "CARTÃO DE VISITA",
            "bf.imp.m2": "PAPEL TIMBRADO",
            "bf.imp.m3": "PAPELARIA CORPORATIVA",
            "bf.imp.m4": "FOLDER",
            "bf.imp.m5": "CARTAZ / POSTER",
            "bf.imp.m6": "EMBALAGEM",
            "bf.imp.m7": "RÓTULO",
            "bf.imp.m8": "MENU / CARDÁPIO",
            "bf.temid": "SUA MARCA JÁ POSSUI IDENTIDADE VISUAL DEFINIDA? *",
            "bf.parcial": "PARCIALMENTE",
            "bf.imp.conteudo": "VOCÊ JÁ POSSUI O CONTEÚDO QUE ENTRARÁ NA PEÇA? *",
            "bf.imp.c1": "SIM, ESTÁ TUDO PRONTO",
            "bf.imp.c2": "TENHO PARTE DO CONTEÚDO",
            "bf.imp.c3": "AINDA NÃO",
            "bf.imp.gráfica": "JÁ POSSUI GRÁFICA OU FORNECEDOR DEFINIDO? *",
            "bf.pesquisando": "AINDA ESTOU PESQUISANDO",
            "bf.dig.material": "QUE MATERIAL VOCÊ PRECISA?",
            "bf.dig.m1": "ASSINATURA DE E-MAIL",
            "bf.dig.m2": "TEMPLATES PARA REDES SOCIAIS",
            "bf.dig.m3": "BANNER DIGITAL",
            "bf.dig.m4": "APRESENTAÇÃO",
            "bf.dig.m5": "LANDING PAGE",
            "bf.dig.conteudo": "VOCÊ JÁ POSSUI OS CONTEÚDOS NECESSÁRIOS? *",
            "bf.ed.tipo": "QUE TIPO DE PROJETO VOCÊ PRECISA? *",
            "bf.ed.t1": "LIVRO",
            "bf.ed.t2": "REVISTA",
            "bf.ed.t3": "CATÁLOGO",
            "bf.ed.t4": "RELATÓRIO",
            "bf.ed.t5": "MANUAL",
            "bf.ed.t6": "ZINE / PUBLICAÇÃO",
            "bf.ed.conteudo": "O CONTEÚDO JÁ ESTÁ FINALIZADO? *",
            "bf.ed.c2": "ESTÁ EM FASE FINAL",
            "bf.ed.c3": "AINDA ESTÁ SENDO PRODUZIDO",
            "bf.ed.sabepag": "VOCÊ JÁ SABE APROXIMADAMENTE QUANTAS PÁGINAS TERÁ? *",
            "bf.ed.paginas": "QUANTAS PÁGINAS APROXIMADAMENTE?",
            "bf.ed.formato": "O PROJETO SERÁ: *",
            "bf.ed.f1": "DIGITAL",
            "bf.ed.f2": "IMPRESSO",
            "bf.ed.f3": "DIGITAL E IMPRESSO",
            "bf.ns.sobre": "CONTE BREVEMENTE SOBRE SUA MARCA OU PROJETO. *",
            "bf.ns.resolver": "O QUE VOCÊ GOSTARIA DE RESOLVER OU MELHORAR NESTE MOMENTO? *",
            "bf.ns.agora": "O QUE FEZ VOCÊ PROCURAR UMA DESIGNER AGORA?",
            "bf.objetivo": "QUAL É O PRINCIPAL OBJETIVO DESTE PROJETO? *",
            "bf.objetivo.help": "Pode ser lançar uma marca, reposicionar um negócio, profissionalizar a comunicação, desenvolver um material específico ou preparar um lançamento.",
            "bf.inicio": "QUANDO VOCÊ GOSTARIA DE INICIAR? *",
            "bf.inicio.help": "Se houver uma data importante (lançamento, evento), me conte no objetivo acima.",
            "bf.in1": "O QUANTO ANTES",
            "bf.in2": "NAS PRÓXIMAS 2–4 SEMANAS",
            "bf.in3": "NOS PRÓXIMOS 1–2 MESES",
            "bf.in4": "DAQUI A MAIS DE 2 MESES",
            "bf.temdata": "EXISTE ALGUMA DATA IMPORTANTE PARA O PROJETO ESTAR PRONTO? *",
            "bf.data": "QUAL É A DATA?",
            "bf.motivodata": "EXISTE ALGUM LANÇAMENTO, EVENTO OU MOTIVO RELACIONADO A ESSA DATA?",
            "bf.investimento": "VOCÊ JÁ DEFINIU UMA FAIXA DE INVESTIMENTO PARA ESTE PROJETO? *",
            "bf.iv1": "ATÉ R$ 1.500",
            "bf.iv2": "R$ 1.500 — R$ 2.500",
            "bf.iv3": "R$ 2.500 — R$ 4.000",
            "bf.iv4": "R$ 4.000 — R$ 6.000",
            "bf.iv5": "ACIMA DE R$ 6.000",
            "bf.iv6": "AINDA NÃO DEFINI / GOSTARIA DE RECEBER UMA ORIENTAÇÃO",
            "bf.origem": "COMO VOCÊ CONHECEU MEU TRABALHO?",
            "bf.or1": "INSTAGRAM",
            "bf.or2": "BEHANCE",
            "bf.or3": "GOOGLE",
            "bf.or4": "PINTEREST",
            "bf.or5": "INDICAÇÃO",
            "bf.obs": "TEM MAIS ALGUMA COISA QUE VOCÊ ACHA IMPORTANTE EU SABER NESTE PRIMEIRO MOMENTO?",
            "bf.disclaimer": "Essas informações são apenas um primeiro contato para eu entender seu projeto. Caso a gente siga juntos, você receberá um briefing mais aprofundado antes do início do processo criativo.",
            "bf.enviando": "ENVIANDO…",
            "bf.sucesso": "RECEBIDO. RESPONDO EM ATÉ 2 DIAS ÚTEIS.",
            "bf.erro": "NÃO FOI POSSÍVEL ENVIAR. TENTE DE NOVO OU ESCREVA PARA HELLO@NIVES.STUDIO",
            "services.avulsos.intro": "PEÇAS E MATERIAIS PARA MARCAS EM DIFERENTES MOMENTOS.<br>PODEM SER CONTRATADOS INDIVIDUALMENTE OU ADICIONADOS A UM PROJETO DE IDENTIDADE VISUAL.",
            "services.pkg1.item6": "+ APRESENTAÇÃO DA IDENTIDADE VISUAL",
            "services.pkg1.item7": "+ MANUAL DE MARCA",
            "services.pkg1.item8": "+ ARQUIVOS FINAIS PARA USO DIGITAL E IMPRESSO",
            "services.pkg1.formats": "Formatos entregues: AI · EPS · SVG · PDF · PNG · JPG",
            "services.pkg1.note": "Serviços impressos, digitais e editoriais podem ser adicionados ao projeto conforme a necessidade da marca.",
            "services.pkg2.item0": "[ INCLUI TUDO DA IDENTIDADE VISUAL + ]",
            "services.pkg2.item6": "+ ARQUIVOS FINAIS PREPARADOS PARA PRODUÇÃO",
            "services.pkg2.note": "Outros materiais podem ser incluídos conforme a necessidade do projeto."
        },
        en: {
            "nav.menu": "[ MENU ]",
            "nav.close": "[ CLOSE ]",
            "nav.work": "WORK",
            "nav.services": "SERVICES",
            "nav.about": "ABOUT",
            "nav.contact": "CONTACT",
            "nav.back": "[ ⟵ BACK ]",
            "nav.home": "[ ⟵ HOME ]",
            "work.ref": "REF.001—003",
            "work.cat.id": "VISUAL IDENTITY",
            "work.cap.afora": "Architecture / São Paulo",
            "work.cap.lilt": "Food & Drink / Curitiba",
            "work.cap.helena": "Psychology / Belo Horizonte",
            "about.doc": "DOCUMENTATION",
            "about.portrait.cap": "Art Direction",
            "about.portrait.hint": "3&times;4 PHOTO<br>assets/foto-marina.jpg",
            "footer.widget.tag": "GRAPHIC DESIGN STUDIO<br>SINCE 2026.",
            "services.caption": "Packages & standalone services / 2026",
            "services.sec1": "[01] VISUAL IDENTITY",
            "services.sec1.tag": "PACKAGES",
            "services.sec2": "[02] STANDALONE SERVICES",
            "services.sec2.tag": "INDIVIDUAL OR COMBINED",
            "services.sec3": "[03] PROCESS",
            "services.sec3.tag": "WORKFLOW",
            "services.sec4": "[04] QUESTIONS",
            "services.sec4.tag": "Q&amp;A",
            "services.pkg1.cap": "Complete brand system",
            "services.pkg2.cap": "Solution for restaurants",
            "services.note": "NOTE",
            "proj.meta.client": "CLIENT",
            "proj.meta.services": "SERVICES",
            "proj.meta.year": "YEAR",
            "proj.meta.location": "LOCATION",
            "proj.afora.kicker": "0.1 &nbsp; VISUAL IDENTITY",
            "proj.afora.cap": "Architecture Studio / 2026",
            "proj.afora.services": "VISUAL IDENTITY",
            "proj.lilt.kicker": "0.2 &nbsp; VISUAL IDENTITY / PACKAGING",
            "proj.lilt.cap": "Food & Drink / 2026",
            "proj.lilt.services": "ID / PACKAGING / SIGNAGE",
            "proj.helena.kicker": "0.3 &nbsp; VISUAL IDENTITY / EDITORIAL",
            "proj.helena.cap": "Clinical Psychology / 2026",
            "proj.helena.services": "ID / EDITORIAL / DIGITAL",
            "gal.guidelines": "BRAND GUIDELINES",
            "gal.typography": "TYPOGRAPHY",
            "gal.palette": "COLOR PALETTE",
            "gal.stationery": "STATIONERY",
            "gal.brandmark": "BRAND MARK",
            "gal.menu": "MENU SYSTEM",
            "gal.packaging": "PACKAGING",
            "gal.signage": "SIGNAGE",
            "gal.monogram": "MONOGRAM",
            "gal.editorial": "EDITORIAL GRID",
            "gal.digital": "DIGITAL KIT",
            "briefing.caption": "Response within 2 business days",

            "hero.label": "( DESIGN STUDIO )",
            "hero.manifesto": "GRAPHIC DESIGN FOR IDEAS THAT DEMAND FORM, CLARITY, AND PERSONALITY —<br>ACROSS IDENTITY, EDITORIAL, PRINT, AND DIGITAL.",
            "hero.location": "BRAZIL / WORLDWIDE",
            "work.title": "[01] SELECTED WORK",
            "about.title": "[02] ABOUT",
            "about.text": "Hello, I'm Marina \u2014 an art director & designer focused on visual identity & food branding.",
            "about.text2": "My process mixes references, strategy, and instinct. No ready-made formulas, no single look applied to everything. The goal is to find a language that feels like its own, makes sense, and still holds up after the first impression.",
            "about.kicker": "[ PROFILE ]",
            "about.ficha": "[ SPECS ]",
            "about.data.local": "LOCATION",
            "about.data.local.v": "BRAZIL",
            "about.data.foco": "FOCUS",
            "about.data.foco.v": "ART DIRECTION",
            "about.data.desde": "SINCE",
            "about.data.status": "STATUS",
            "about.data.status.v": "AVAILABLE",
            "about.areas": "IDENTITY · EDITORIAL · PRINT · DIGITAL",
            "about.areaslabel": "AREAS",
            "about.area1": "IDENTITY",
            "about.area2": "EDITORIAL",
            "about.area3": "PRINT",
            "about.area4": "DIGITAL",
            "footer.headline.note": "(I\u2019D LOVE TO HEAR YOUR IDEA)",
            "footer.headline": "LET\u2019S CREATE<br>SOMETHING TOGETHER.",
            "footer.cta.services": "[ CUSTOM PROJECT ⟶ ]",
            "footer.widget.city": "Brazil",
            "footer.status.open": "STUDIO OPEN: ONLINE",
            "footer.status.closed": "STUDIO CLOSED: BACK AT {time}",
            "project.afora.desc": "Afora is an architecture firm focused on seamlessly integrating indoor and outdoor spaces. The challenge was to create a visual identity that conveyed structural solidity while maintaining breathability and negative space. The visual system relies on rigid grids contrasted with light, airy typography.",
            "project.lilt.desc": "Lilt is a neighborhood coffee shop working with beans from small growers. The visual system came straight off the counter: handwritten labels, batch stamps and menus that change every week. We turned that into a mono type kit, a modular seal and one-color kraft packaging — cheap to reprint and readable from three meters away.",
            "project.helena.desc": "Helena sees adult clients in her practice and online, and arrived with nothing but an Instagram profile. The identity had to feel welcoming without falling into the green-leaf-and-script cliché. We built a monogram from two curves that approach without touching, a calm editorial grid for long-form text, and a post kit she updates herself — all in a neutral two-tone palette.",

            // Raw Services Texts
            "services.label": "( SERVICES )",
            "briefing.title": "BRIEFING",
            "services.giant1": "VISUAL",
            "services.giant2": "SYSTEMS",
            "services.intro.raw": "WE DON\u2019T JUST MAKE LOGOS.<br>WE BUILD SYSTEMS THAT SCALE.<br>GRID. TYPE. CONTRAST.<br>EVERYTHING INTENTIONAL.<br>NOTHING SUPERFLUOUS.",
            "services.pkg.btn": "[ START PROJECT ⟶ ]",
            "services.pkg1.name": "VISUAL IDENTITY",
            "services.pkg1.item1": "+ STRATEGIC DIRECTION AND BRAND CONCEPT",
            "services.pkg1.item2": "+ LOGO SYSTEM AND VARIATIONS",
            "services.pkg1.item3": "+ COLOR PALETTE",
            "services.pkg1.item4": "+ TYPOGRAPHIC SYSTEM",
            "services.pkg1.item5": "+ SUPPORTING GRAPHIC ELEMENTS",
            "services.pkg2.name": "IDENTITY FOR FOOD & DRINK",
            "services.pkg2.item1": "+ MENU",
            "services.pkg2.item2": "+ MAIN PACKAGING",
            "services.pkg2.item3": "+ LABEL, SEAL OR STICKER",
            "services.pkg2.item4": "+ ESSENTIAL STATIONERY",
            "services.pkg2.item5": "+ DIGITAL LAUNCH MATERIAL",
            "services.addon1.tag": "PRINT",
            "services.addon2.tag": "DIGITAL",
            "services.addon3.tag": "EDITORIAL",
            "services.addon1.raw": "- BUSINESS CARDS<br>- LETTERHEAD<br>- CORPORATE STATIONERY<br>- FOLDERS AND PROMOTIONAL MATERIAL<br>- POSTERS<br>- PACKAGING<br>- LABELS<br>- MENUS",
            "services.addon2.raw": "- EMAIL SIGNATURE<br>- SOCIAL MEDIA TEMPLATES<br>- DIGITAL BANNERS<br>- PRESENTATIONS<br>- LANDING PAGES",
            "services.addon3.raw": "- BOOKS<br>- MAGAZINES<br>- CATALOGS<br>- REPORTS<br>- MANUALS",
            "services.proc.1a": "DISCOVERY", "services.proc.1b": "RESEARCH",
            "services.proc.2a": "STRATEGY",  "services.proc.2b": "DIRECTION",
            "services.proc.3a": "DESIGN",    "services.proc.3b": "SYSTEM",
            "services.proc.4a": "HANDOFF",   "services.proc.4b": "GUIDELINES",
            "services.proc.1c": "Kickoff call, market read and an audit of what already exists. This is where the scope gets locked.",
            "services.proc.2c": "Positioning, visual territory and moodboard. You sign off on direction before any artwork.",
            "services.proc.3c": "Logo, type, color and applications built as one system — not loose pieces.",
            "services.proc.4c": "Organized files, a usage manual and a handoff call so you can run it on your own.",
            "services.proc.disclaimer": "WE\u2019RE IN IT WITH YOU THE WHOLE WAY —<br>NOT JUST DROPPING OFF FILES AT THE END.",
            "services.faq1.q": "WHICH SERVICES CAN I HIRE?",
            "services.faq1.a": "I work with visual identity, projects for food & drink brands, social media design, and standalone pieces for digital and print. You can see the available services on the services page.",
            "services.faq2.q": "CAN I HIRE JUST A LOGO?",
            "services.faq2.a": "No. The logo is developed as part of a visual system, so the brand stays consistent and works across different applications.",
            "services.faq3.q": "CAN I HIRE A SINGLE PIECE?",
            "services.faq3.a": "Yes. Some digital and print materials can be hired separately — cards, menus, banners, social media assets and other pieces available on the services page.",
            "services.faq4.q": "HOW LONG DOES A PROJECT TAKE?",
            "services.faq4.a": "Timing depends on the service, the complexity and schedule availability. Visual identity projects usually take 4 to 6 weeks, while larger or food & drink projects may need longer.",
            "services.faq5.q": "HOW MANY REVISIONS ARE INCLUDED?",
            "services.faq5.a": "Each project has presentation and revision stages defined according to the service contracted. Everything is stated in the proposal before the project begins.",
            "services.faq6.q": "HOW DOES HIRING WORK?",
            "services.faq6.a": "After you send the pre-brief, I review the project's needs and, once everything is aligned, send a proposal with scope, timeline and investment. With approval and the deposit paid, the project officially enters the schedule.",
            "services.faq7.q": "HOW DOES PAYMENT WORK?",
            "services.faq7.a": "Payment is split into 50% to reserve the schedule and 50% on final delivery. You can pay via Pix or in up to 6 installments, with the platform's fees added. For international clients, terms are arranged in advance.",
            "services.faq8.q": "DO YOU WORK WITH CLIENTS FROM OTHER CITIES OR COUNTRIES?",
            "services.faq8.a": "Yes. The whole process can be done online, so I can take on projects across Brazil and abroad.",
            "services.footer.question": "Didn\u2019t find what you needed?",

            // Briefing Form
            "briefing.header": "[ PROJECT INQUIRY ]",
            "briefing.intro": "A QUICK FIRST CONTACT SO I CAN UNDERSTAND YOUR PROJECT AND GET BACK WITH A PROPOSAL.<br>JUST A FEW FIELDS — THE IN-DEPTH BRIEF COMES LATER, IF WE MOVE FORWARD TOGETHER.",
            "briefing.submit": "[ SUBMIT_FORM ]",

            // pré-briefing
            "bf.s1": "01 — YOUR DETAILS",
            "bf.s2": "02 — SERVICE",
            "bf.s3": "03 — ABOUT THE PROJECT",
            "bf.s4": "04 — CONTEXT, TIMING AND BUDGET",
            "bf.s5": "05 — FINAL",
            "bf.nome": "NAME *",
            "bf.email": "E-MAIL *",
            "bf.marca": "BRAND OR COMPANY NAME *",
            "bf.semnome": "I DON’T HAVE A NAME YET",
            "bf.site": "WEBSITE OR INSTAGRAM",
            "bf.local": "WHERE IS YOUR BRAND BASED?",
            "bf.local.ph": "City and country",
            "bf.servico": "WHAT ARE YOU LOOKING FOR? *",
            "bf.sel": "[ SELECT ]",
            "bf.sv.id": "VISUAL IDENTITY",
            "bf.sv.gastro": "IDENTITY FOR FOOD & DRINK",
            "bf.sv.imp": "PRINT MATERIAL",
            "bf.sv.dig": "DIGITAL MATERIAL",
            "bf.sv.edit": "EDITORIAL PROJECT",
            "bf.sv.naosei": "I’M NOT SURE WHAT I NEED YET",
            "bf.id.momento": "WHAT STAGE IS YOUR BRAND AT? *",
            "bf.id.m1": "A NEW BRAND, STILL BEING BUILT",
            "bf.id.m2": "IT EXISTS, BUT HAS NEVER HAD A PROFESSIONAL IDENTITY",
            "bf.id.m3": "IT HAS AN IDENTITY, BUT IT NEEDS REWORKING",
            "bf.id.m4": "THE BRAND CHANGED AND THE CURRENT IDENTITY NO LONGER FITS",
            "bf.id.motivacao": "WHAT MADE YOU LOOK FOR A VISUAL IDENTITY NOW? *",
            "bf.id.sobre": "TELL ME BRIEFLY ABOUT THE BRAND AND WHAT IT OFFERS. *",
            "bf.id.atual": "IS THERE A VISUAL IDENTITY TODAY? *",
            "bf.sim": "YES",
            "bf.nao": "NO",
            "bf.id.a3": "IT’S BEING DEVELOPED",
            "bf.id.problema": "WHAT DOESN’T WORK IN THE CURRENT IDENTITY?",
            "bf.ga.tipo": "WHAT KIND OF BUSINESS IS IT? *",
            "bf.ga.t1": "RESTAURANT",
            "bf.ga.t2": "CAFÉ / COFFEE SHOP",
            "bf.ga.t3": "BAR",
            "bf.ga.t4": "BAKERY / PATISSERIE",
            "bf.ga.t5": "DELIVERY",
            "bf.ga.t6": "FOOD PRODUCT",
            "bf.outro": "OTHER",
            "bf.especifique": "WHICH ONE?",
            "bf.ga.momento": "WHAT STAGE IS THE BUSINESS AT? *",
            "bf.ga.m1": "NOT LAUNCHED YET",
            "bf.ga.m2": "IN THE LAUNCH PHASE",
            "bf.ga.m3": "ALREADY RUNNING",
            "bf.ga.m4": "ALREADY EXISTS AND IS BEING REWORKED",
            "bf.ga.sobre": "TELL ME BRIEFLY ABOUT THE BUSINESS. *",
            "bf.ga.materiais": "BESIDES THE VISUAL IDENTITY, WHICH MATERIALS DO YOU EXPECT TO NEED?",
            "bf.ga.mat1": "MENU",
            "bf.ga.mat2": "PACKAGING",
            "bf.ga.mat3": "LABEL / STICKER",
            "bf.ga.mat4": "STATIONERY",
            "bf.ga.mat5": "DIGITAL MATERIALS",
            "bf.naosei": "NOT SURE YET",
            "bf.ga.help": "You don’t need to decide everything now.",
            "bf.imp.material": "WHICH MATERIAL DO YOU NEED?",
            "bf.imp.m1": "BUSINESS CARDS",
            "bf.imp.m2": "LETTERHEAD",
            "bf.imp.m3": "CORPORATE STATIONERY",
            "bf.imp.m4": "FOLDER",
            "bf.imp.m5": "POSTER",
            "bf.imp.m6": "PACKAGING",
            "bf.imp.m7": "LABEL",
            "bf.imp.m8": "MENU",
            "bf.temid": "DOES YOUR BRAND ALREADY HAVE A DEFINED VISUAL IDENTITY? *",
            "bf.parcial": "PARTIALLY",
            "bf.imp.conteudo": "DO YOU ALREADY HAVE THE CONTENT FOR THE PIECE? *",
            "bf.imp.c1": "YES, EVERYTHING IS READY",
            "bf.imp.c2": "I HAVE PART OF IT",
            "bf.imp.c3": "NOT YET",
            "bf.imp.gráfica": "DO YOU ALREADY HAVE A PRINTER OR SUPPLIER? *",
            "bf.pesquisando": "STILL RESEARCHING",
            "bf.dig.material": "WHICH MATERIAL DO YOU NEED?",
            "bf.dig.m1": "EMAIL SIGNATURE",
            "bf.dig.m2": "SOCIAL MEDIA TEMPLATES",
            "bf.dig.m3": "DIGITAL BANNER",
            "bf.dig.m4": "PRESENTATION",
            "bf.dig.m5": "LANDING PAGE",
            "bf.dig.conteudo": "DO YOU ALREADY HAVE THE NEEDED CONTENT? *",
            "bf.ed.tipo": "WHAT KIND OF PROJECT DO YOU NEED? *",
            "bf.ed.t1": "BOOK",
            "bf.ed.t2": "MAGAZINE",
            "bf.ed.t3": "CATALOG",
            "bf.ed.t4": "REPORT",
            "bf.ed.t5": "MANUAL",
            "bf.ed.t6": "ZINE / PUBLICATION",
            "bf.ed.conteudo": "IS THE CONTENT FINISHED? *",
            "bf.ed.c2": "IT’S IN THE FINAL STAGE",
            "bf.ed.c3": "STILL BEING PRODUCED",
            "bf.ed.sabepag": "DO YOU ROUGHLY KNOW HOW MANY PAGES IT WILL HAVE? *",
            "bf.ed.paginas": "ROUGHLY HOW MANY PAGES?",
            "bf.ed.formato": "THE PROJECT WILL BE: *",
            "bf.ed.f1": "DIGITAL",
            "bf.ed.f2": "PRINTED",
            "bf.ed.f3": "DIGITAL AND PRINTED",
            "bf.ns.sobre": "TELL ME BRIEFLY ABOUT YOUR BRAND OR PROJECT. *",
            "bf.ns.resolver": "WHAT WOULD YOU LIKE TO SOLVE OR IMPROVE RIGHT NOW? *",
            "bf.ns.agora": "WHAT MADE YOU LOOK FOR A DESIGNER NOW?",
            "bf.objetivo": "WHAT IS THE MAIN GOAL OF THIS PROJECT? *",
            "bf.objetivo.help": "It could be launching a brand, repositioning a business, professionalizing communication, developing a specific piece or preparing a launch.",
            "bf.inicio": "WHEN WOULD YOU LIKE TO START? *",
            "bf.inicio.help": "If there's an important date (launch, event), mention it in the goal above.",
            "bf.in1": "AS SOON AS POSSIBLE",
            "bf.in2": "IN THE NEXT 2–4 WEEKS",
            "bf.in3": "IN THE NEXT 1–2 MONTHS",
            "bf.in4": "IN MORE THAN 2 MONTHS",
            "bf.temdata": "IS THERE AN IMPORTANT DATE FOR THE PROJECT TO BE READY? *",
            "bf.data": "WHAT IS THE DATE?",
            "bf.motivodata": "IS THERE A LAUNCH, EVENT OR REASON BEHIND THAT DATE?",
            "bf.investimento": "HAVE YOU SET A BUDGET RANGE FOR THIS PROJECT? *",
            "bf.iv1": "UP TO R$ 1,500",
            "bf.iv2": "R$ 1,500 — R$ 2,500",
            "bf.iv3": "R$ 2,500 — R$ 4,000",
            "bf.iv4": "R$ 4,000 — R$ 6,000",
            "bf.iv5": "ABOVE R$ 6,000",
            "bf.iv6": "NOT DEFINED YET / I’D LIKE SOME GUIDANCE",
            "bf.origem": "HOW DID YOU FIND MY WORK?",
            "bf.or1": "INSTAGRAM",
            "bf.or2": "BEHANCE",
            "bf.or3": "GOOGLE",
            "bf.or4": "PINTEREST",
            "bf.or5": "REFERRAL",
            "bf.obs": "ANYTHING ELSE YOU THINK I SHOULD KNOW AT THIS FIRST STAGE?",
            "bf.disclaimer": "This is just a first contact so I can understand your project. If we move forward, you’ll receive a deeper briefing before the creative process starts.",
            "bf.enviando": "SENDING…",
            "bf.sucesso": "RECEIVED. I’LL REPLY WITHIN 2 BUSINESS DAYS.",
            "bf.erro": "COULDN’T SEND. PLEASE TRY AGAIN OR WRITE TO HELLO@NIVES.STUDIO",
            "services.avulsos.intro": "PIECES AND MATERIALS FOR BRANDS AT DIFFERENT STAGES.<br>THEY CAN BE HIRED ON THEIR OWN OR ADDED TO A VISUAL IDENTITY PROJECT.",
            "services.pkg1.item6": "+ VISUAL IDENTITY PRESENTATION",
            "services.pkg1.item7": "+ BRAND GUIDELINES",
            "services.pkg1.item8": "+ FINAL FILES FOR DIGITAL AND PRINT",
            "services.pkg1.formats": "Delivered formats: AI · EPS · SVG · PDF · PNG · JPG",
            "services.pkg1.note": "Print, digital and editorial services can be added to the project as the brand requires.",
            "services.pkg2.item0": "[ INCLUDES EVERYTHING IN VISUAL IDENTITY + ]",
            "services.pkg2.item6": "+ FINAL FILES PREPARED FOR PRODUCTION",
            "services.pkg2.note": "Other materials can be included as the project requires."
        }
    };

    const langToggle = document.getElementById('lang-toggle');
    const htmlElement = document.documentElement;
    
    let currentLang = localStorage.getItem('lang') || 'pt';
    applyTranslations(currentLang);
    updateOfficeStatus(currentLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            localStorage.setItem('lang', currentLang);
            applyTranslations(currentLang);
            updateOfficeStatus(currentLang);
        });
    }

    function applyTranslations(lang) {
        htmlElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Handling placeholders separately
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // O clima vem de fetch, então é redesenhado depois das traduções
        renderWeather(lang);
    }

    /* =========================================
       1B. CLIMA REAL — Tangará da Serra / MT
       Open-Meteo, sem chave de API.
       O rótulo visível continua sendo só "Brasil".
       ========================================= */
    const WEATHER_URL =
        'https://api.open-meteo.com/v1/forecast' +
        '?latitude=-14.62&longitude=-57.49' +
        '&current=temperature_2m,weather_code' +
        '&timezone=America%2FCuiaba';

    // Códigos WMO agrupados nas condições que realmente acontecem por aqui
    const WEATHER_LABELS = {
        pt: {
            clear: 'Limpo', fewClouds: 'Poucas nuvens', cloudy: 'Nublado', fog: 'Neblina',
            drizzle: 'Garoa', rain: 'Chuva', heavyRain: 'Chuva forte', showers: 'Pancadas',
            storm: 'Tempestade', snow: 'Neve'
        },
        en: {
            clear: 'Clear', fewClouds: 'Few clouds', cloudy: 'Cloudy', fog: 'Fog',
            drizzle: 'Drizzle', rain: 'Rain', heavyRain: 'Heavy rain', showers: 'Showers',
            storm: 'Thunderstorm', snow: 'Snow'
        }
    };

    function weatherKey(code) {
        if (code === 0) return 'clear';
        if (code === 1 || code === 2) return 'fewClouds';
        if (code === 3) return 'cloudy';
        if (code === 45 || code === 48) return 'fog';
        if (code >= 51 && code <= 57) return 'drizzle';
        if (code === 61 || code === 63) return 'rain';
        if (code === 65 || code === 66 || code === 67) return 'heavyRain';
        if (code >= 71 && code <= 77) return 'snow';
        if (code >= 80 && code <= 86) return 'showers';
        if (code >= 95) return 'storm';
        return 'clear';
    }

    // var (não let): applyTranslations roda antes desta linha e chama renderWeather
    var weatherData = null;

    function renderWeather(lang) {
        const el = document.getElementById('weather-temp');
        if (!el) return;
        // Sem dado (offline, API fora do ar): o widget simplesmente omite o clima
        if (!weatherData) {
            el.textContent = '';
            return;
        }
        const labels = WEATHER_LABELS[lang] || WEATHER_LABELS.pt;
        el.textContent = `${Math.round(weatherData.temp)}°C ${labels[weatherKey(weatherData.code)]}`;
    }

    async function loadWeather() {
        if (!document.getElementById('weather-temp')) return;
        try {
            const res = await fetch(WEATHER_URL);
            if (!res.ok) throw new Error('HTTP ' + res.status);
            const data = await res.json();
            if (!data.current || typeof data.current.temperature_2m !== 'number') return;
            weatherData = { temp: data.current.temperature_2m, code: data.current.weather_code };
            renderWeather(currentLang);
        } catch (err) {
            // falha silenciosa — nada de mensagem de erro no rodapé
        }
    }

    loadWeather();
    setInterval(loadWeather, 15 * 60 * 1000);

    /* =========================================
       2. LIVE CLOCK, OFFICE STATUS & DYNAMIC STAMP
       ========================================= */
    const clockEl = document.getElementById('live-clock');
    const stampEl = document.getElementById('dynamic-stamp');
    
    function updateClock() {
        const now = new Date();
        
        const timeString = new Intl.DateTimeFormat('en-US', {
            timeZone: 'America/Cuiaba',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(now);
        
        if(clockEl) {
            clockEl.textContent = timeString;
        }

        if(stampEl && !stampEl.dataset.set) {
            const dateString = new Intl.DateTimeFormat('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            }).format(now).toUpperCase();
            stampEl.innerHTML = `${dateString}<br><span class="muted">FILE APPROVED</span>`;
            stampEl.dataset.set = "true";
        }
    }
    
    function updateOfficeStatus(lang) {
        const now = new Date();
        const cuiabaTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Cuiaba' }));
        
        const day = cuiabaTime.getDay(); 
        const hour = cuiabaTime.getHours();

        const dot = document.getElementById('status-dot');
        const text = document.getElementById('status-text');
        const weatherIcon = document.getElementById('weather-icon');

        if (weatherIcon) {
            if (hour >= 6 && hour < 18) {
                weatherIcon.textContent = '☼';
            } else {
                weatherIcon.textContent = '☾';
            }
        }

        if (dot && text) {
            let isOpen = false;
            let nextOpenText = "10H";

            if (day >= 1 && day <= 5) {
                if (hour >= 10 && hour < 12) {
                    isOpen = true; 
                } else if (hour >= 12 && hour < 14) {
                    isOpen = false; 
                    nextOpenText = "14H";
                } else if (hour >= 14 && hour < 20) {
                    isOpen = true; 
                } else {
                    isOpen = false; 
                    nextOpenText = "10H";
                }
            } else {
                isOpen = false;
                nextOpenText = "10H";
            }

            if (isOpen) {
                dot.style.backgroundColor = '#4caf50'; 
                dot.style.boxShadow = '0 0 8px 2px rgba(76, 175, 80, 0.4)';
                text.innerHTML = translations[lang]["footer.status.open"];
            } else {
                dot.style.backgroundColor = '#888888'; 
                dot.style.boxShadow = '0 0 6px 1px rgba(136, 136, 136, 0.4)';
                let closedText = translations[lang]["footer.status.closed"].replace('{time}', nextOpenText);
                text.innerHTML = closedText;
            }
        }
    }

    setInterval(updateClock, 1000);
    updateClock();
    setInterval(() => updateOfficeStatus(currentLang), 60000);

    /* =========================================
       3. INTERSECTION OBSERVER
       ========================================= */
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.observe').forEach(el => {
        observer.observe(el);
    });

    /* =========================================
       4. HEADER SCROLL STATE
       ========================================= */
    const header = document.getElementById('site-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });


    /* =========================================
       6. DECODIFICAÇÃO DOS LINKS (scramble no hover)
       O texto embaralha em glifos e vai "travando"
       da esquerda para a direita até se resolver.
       Como o site inteiro é monoespaçado, a largura
       nunca muda — nada empurra o layout.
       ========================================= */
    const SCRAMBLE_SELECTORS = [
        '.header-center a',
        '.social-links a',
        '.logo',
        '.project-title',
        '.nav-title',
        '.email-link',
        '.raw-action-btn',
        '.footer-note a'
    ].join(', ');

    const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\|<>[]{}=+*#%&$@';

    // pega o maior nó de texto do elemento: preserva <span> irmãos
    // (a seta do e-mail, o índice 0.1 dos cards) intactos
    function biggestTextNode(el) {
        let best = null;
        for (const node of el.childNodes) {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length) {
                if (!best || node.nodeValue.trim().length > best.nodeValue.trim().length) best = node;
            }
        }
        return best;
    }

    function decode(el) {
        const node = biggestTextNode(el);
        if (!node) return;

        // uma animação por elemento
        if (el._scrambleFrame) cancelAnimationFrame(el._scrambleFrame);

        const original = el._scrambleOriginal !== undefined ? el._scrambleOriginal : node.nodeValue;
        el._scrambleOriginal = original;

        const chars = Array.from(original);
        // cada caractere trava num quadro diferente, da esquerda para a direita
        const lockAt = chars.map((c, i) => (c.trim() === '' ? 0 : Math.round(i * 1.15) + 3 + Math.floor(Math.random() * 5)));
        const last = Math.max(0, ...lockAt);

        let frame = 0;
        const tick = () => {
            node.nodeValue = chars
                .map((c, i) => (frame >= lockAt[i] ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
                .join('');

            if (frame >= last) {
                node.nodeValue = original;
                el._scrambleFrame = null;
                el._scrambleOriginal = undefined;
                return;
            }
            frame++;
            el._scrambleFrame = requestAnimationFrame(tick);
        };
        tick();
    }

    // só onde existe hover de verdade, e nunca com "reduzir movimento" ligado
    const canHover = window.matchMedia('(hover: hover)').matches;
    const stillPreferred = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (canHover && !stillPreferred) {
        document.querySelectorAll(SCRAMBLE_SELECTORS).forEach(el => {
            el.addEventListener('mouseenter', () => decode(el));
        });
    }

    /* =========================================
       4B. MENU MOBILE
       ========================================= */
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');

    function setNav(open) {
        document.body.classList.toggle('nav-open', open);
        // o header carrega o botão de fechar: nunca pode estar recolhido aqui
        if (open) document.body.classList.remove('header-off');
        else window.dispatchEvent(new Event('scroll'));
        navToggle.setAttribute('aria-expanded', String(open));
        const key = open ? 'nav.close' : 'nav.menu';
        navToggle.setAttribute('data-i18n', key);
        navToggle.textContent = translations[currentLang][key];
    }

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            setNav(!document.body.classList.contains('nav-open'));
        });

        // fecha ao escolher um destino
        mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setNav(false)));

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && document.body.classList.contains('nav-open')) setNav(false);
        });

        // ao voltar para desktop o painel não pode ficar preso
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && document.body.classList.contains('nav-open')) setNav(false);
        });
    }



    /* =========================================
       7B. RETRATO DO SOBRE
       Enquanto o arquivo não existe, esconde a <img>
       e deixa a moldura com a instrução — sem ícone
       de imagem quebrada.
       ========================================= */
    document.querySelectorAll('.portrait-frame img').forEach(img => {
        const falhou = () => img.closest('.portrait-frame').classList.add('is-empty');
        img.addEventListener('error', falhou);
        if (img.complete && img.naturalWidth === 0) falhou();
    });

    /* =========================================
       8. PRÉ-BRIEFING — perguntas condicionais
       Campo oculto = disabled. FormData ignora
       campos desabilitados, então nada de serviço
       não escolhido chega ao Web3Forms.
       ========================================= */
    const bfForm = document.getElementById('briefing-form');

    if (bfForm) {
        const bfServico = bfForm.querySelector('#bf-servico');
        const bfSemNome = bfForm.querySelector('#bf-sem-nome');
        const bfGrupoMarca = bfForm.querySelector('#bf-grupo-marca');
        const bfMarca = bfForm.querySelector('#bf-marca');
        const bfStatus = bfForm.querySelector('#bf-status');
        const bfBotao = bfForm.querySelector('#bf-submit');

        // liga/desliga um bloco inteiro. data-keep marca campos que
        // nunca devem ser tocados (botcheck, o próprio "sem nome").
        function ligar(el, ativo) {
            el.hidden = !ativo;
            el.querySelectorAll('input, select, textarea').forEach(f => {
                if (f.hasAttribute('data-keep')) return;
                f.disabled = !ativo;
                if (f.dataset.req === '1') f.required = ativo;
            });
        }

        function aplicarCondicionais() {
            const servico = bfServico.value;

            // 1. grupos por serviço
            bfForm.querySelectorAll('[data-service]').forEach(g => {
                ligar(g, g.dataset.service === servico);
            });

            // 2. condicionais internos — só valem dentro do grupo ativo
            bfForm.querySelectorAll('[data-when]').forEach(el => {
                const grupo = el.closest('[data-service]');
                if (grupo && grupo.dataset.service !== servico) { ligar(el, false); return; }

                const [id, valor] = el.dataset.when.split(':');
                const fonte = bfForm.querySelector('#' + id);
                let ativo = false;
                if (fonte) {
                    ativo = fonte.type === 'checkbox' ? fonte.checked : fonte.value === valor;
                    if (fonte.disabled) ativo = false;
                }
                ligar(el, ativo);
            });

            // 3. nome da marca deixa de ser obrigatório se não existe ainda
            if (bfSemNome && bfMarca) {
                const semNome = bfSemNome.checked;
                bfMarca.disabled = semNome;
                bfMarca.required = !semNome;
                bfGrupoMarca.classList.toggle('is-muted', semNome);
            }
        }

        bfForm.addEventListener('change', aplicarCondicionais);
        aplicarCondicionais();

        /* -- ENVIO -- */
        let bfEnviando = false;

        function bfMensagem(chave, tipo) {
            bfStatus.textContent = chave ? translations[currentLang][chave] : '';
            bfStatus.dataset.i18n = chave || '';
            bfStatus.className = 'form-status mono' + (tipo ? ' is-' + tipo : '');
        }

        bfForm.addEventListener('submit', async e => {
            e.preventDefault();
            if (bfEnviando) return;

            // valida apenas o que está visível: campos desabilitados
            // são ignorados nativamente por checkValidity()
            if (!bfForm.checkValidity()) {
                bfForm.reportValidity();
                return;
            }

            bfEnviando = true;
            bfBotao.disabled = true;
            bfMensagem('bf.enviando');

            try {
                const resposta = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: new FormData(bfForm)
                });
                const dados = await resposta.json();
                if (dados.success) {
                    bfForm.reset();
                    aplicarCondicionais();
                    bfMensagem('bf.sucesso', 'ok');
                } else {
                    bfMensagem('bf.erro', 'erro');
                }
            } catch (err) {
                bfMensagem('bf.erro', 'erro');
            } finally {
                bfEnviando = false;
                bfBotao.disabled = false;
            }
        });
    }

    /* =========================================
       7. SCROLL EM SLIDES
       Um gesto = uma seção. O snap nativo do CSS não
       serve: a inércia do trackpad atravessa várias
       seções antes de assentar. Aqui o gesto é
       interceptado e a página é animada até a seção
       vizinha, com trava enquanto anda.
       Seções mais altas que a tela rolam normalmente
       por dentro; o salto só acontece na borda.
       ========================================= */
    const SLIDE_SELECTOR = '#hero, #work, #about, .page-hero, .raw-section, ' +
                           '.project-header, .project-gallery > .gallery-item, .gallery-grid, ' +
                           '.project-navigation, #footer';

    const slides = Array.from(document.querySelectorAll(SLIDE_SELECTOR));
    // com o painel de menu aberto o fundo não desliza
    const tallEnough = () => window.innerHeight >= 480 &&
        !document.body.classList.contains('nav-open');
    const stillPreferred2 = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // O scroll agora é 100% nativo (scroll-snap-type: y mandatory no CSS).
    // O navegador para certinho em cada seção, uma por rolada, e lida com a
    // inércia do trackpad sozinho — mais confiável que sequestrar o wheel.
    // Deixe SNAP_NATIVO = false para voltar ao controlador manual antigo.
    const SNAP_NATIVO = true;

    if (!SNAP_NATIVO && slides.length > 1) {
        slides.forEach(el => el.classList.add('slide-section'));
        document.body.classList.add('slides-on');
        document.documentElement.dataset.slides = slides.length;
        document.documentElement.style.scrollSnapType = 'none';
        document.documentElement.style.scrollBehavior = 'auto';

        const HEADER = parseInt(getComputedStyle(document.documentElement)
            .getPropertyValue('--header-height'), 10) || 76;

        let animating = false;
        let current = 0;

        // offsetTop ignora transform; getBoundingClientRect não.
        // A revelação (.observe) desloca a seção 18px, e medir com rect
        // fazia o pouso errar por esses 18px em todas as seções.
        const topOf = el => {
            let y = 0, n = el;
            while (n) { y += n.offsetTop; n = n.offsetParent; }
            return y;
        };
        const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

        function indexInView() {
            const y = window.scrollY + window.innerHeight * 0.35;
            let idx = 0;
            slides.forEach((el, i) => { if (topOf(el) <= y) idx = i; });
            return idx;
        }

        // easing suave nas duas pontas
        const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

        // passo dentro de uma seção mais alta que a tela: uma tela por gesto,
        // com 48px de sobreposição para não perder o fio da leitura
        function glideToY(destino) {
            const dest = Math.min(Math.max(0, Math.round(destino)), maxScroll());
            const from = window.scrollY;
            const dist = dest - from;
            if (Math.abs(dist) < 2) return;

            animating = true;
            const DURATION = stillPreferred2 ? 0 : 560;
            let start = null;
            const failsafe = setTimeout(() => { animating = false; }, DURATION + 900);

            const step = ts => {
                if (start === null) start = ts;
                const t = DURATION > 0 ? Math.min(1, (ts - start) / DURATION) : 1;
                const y = from + dist * ease(t);
                try { window.scrollTo({ top: y, behavior: 'instant' }); }
                catch (err) { window.scrollTo(0, y); }
                if (t < 1) requestAnimationFrame(step);
                else {
                    try { window.scrollTo({ top: dest, behavior: 'instant' }); }
                    catch (err) { window.scrollTo(0, dest); }
                    clearTimeout(failsafe);
                    setTimeout(() => { animating = false; }, 90);
                }
            };
            requestAnimationFrame(step);
        }

        function glideTo(index) {
            index = Math.max(0, Math.min(slides.length - 1, index));
            const target = slides[index];
            // sem descontar o header: ele é transparente e o conteúdo é
            // centralizado, então a seção pode preencher a tela inteira
            const dest = Math.min(Math.max(0, topOf(target)), maxScroll());
            const from = window.scrollY;
            const dist = dest - from;

            if (Math.abs(dist) < 2) { current = index; return; }

            animating = true;
            current = index;

            if (!stillPreferred2) {
                target.classList.add('is-entering');
                setTimeout(() => target.classList.remove('is-entering'), 700);
            }

            // sem animação para quem pediu menos movimento — mas ainda encaixa
            const DURATION = stillPreferred2 ? 0 : 700;
            let start = null;

            // rede de segurança: destrava mesmo se um quadro falhar
            const failsafe = setTimeout(() => { animating = false; }, DURATION + 900);

            const step = ts => {
                if (start === null) start = ts;
                // DURATION 0 daria NaN no primeiro quadro e a rolagem não sairia do lugar
                const t = DURATION > 0 ? Math.min(1, (ts - start) / DURATION) : 1;
                const y = from + dist * ease(t);
                // scrollTo com objeto pode lançar em navegadores antigos;
                // se der ruim, cai no scrollTo posicional e segue o baile
                try { window.scrollTo({ top: y, behavior: 'instant' }); }
                catch (err) { window.scrollTo(0, y); }
                if (t < 1) {
                    requestAnimationFrame(step);
                } else {
                    // pouso exato no último quadro
                    try { window.scrollTo({ top: dest, behavior: 'instant' }); }
                    catch (err) { window.scrollTo(0, dest); }
                    medir();
                    syncHeader();
                    // carência: segura a inércia residual do trackpad
                    clearTimeout(failsafe);
                    setTimeout(() => { animating = false; }, 90);
                }
            };
            requestAnimationFrame(step);
        }

        // a seção é mais alta que a tela e ainda há conteúdo para ler nela?
        function canScrollInside(dir) {
            const el = slides[current];
            if (!el) return false;
            const top = topOf(el);
            const bottom = top + el.offsetHeight;
            // Só rola por dentro quando a seção é BEM mais alta que a tela
            // (um texto longo de verdade). Seções que passam da tela por
            // pouco — #work/#about com o cabeçalho e o carrossel — devem
            // encaixar como uma parada só, senão o gesto rola um naco dentro
            // da seção e dá a sensação de não parar certinho.
            const FOLGA = window.innerHeight * 0.5;
            if (el.offsetHeight <= window.innerHeight + FOLGA) return false;
            return dir > 0
                ? window.scrollY + window.innerHeight < bottom - 4
                : window.scrollY > top + 4;
        }

        const destinoDe = i => Math.min(Math.max(0, topOf(slides[i])), maxScroll());

        function go(dir) {
            if (animating) return;
            current = indexInView();

            // Seção mais alta que a tela: percorre em passos de uma tela,
            // sempre alinhados. Antes o gesto virava rolagem nativa de 120px
            // e dava a impressão de que nada tinha acontecido.
            const el = slides[current];
            if (el) {
                const topo = topOf(el);
                const alt = el.offsetHeight;
                const vh = window.innerHeight;
                const y = window.scrollY;
                const SOBREPOR = 48;
                // mesma tolerância do canScrollInside: passo interno só em
                // seções bem mais altas que a tela (> 1,5x). As quase-de-uma-tela
                // saltam inteiras, uma seção por gesto.
                if (alt > vh * 1.5) {
                    // Passos iguais em vez de "uma tela cheia por gesto":
                    // assim o último passo não vira um resto de 20px que
                    // consome um gesto sem a página sair do lugar.
                    const limite = topo + alt - vh;
                    const curso = limite - topo;
                    const n = Math.max(1, Math.ceil(curso / Math.max(120, vh - SOBREPOR)));
                    const passo = curso / n;
                    const k = Math.round((y - topo) / passo);
                    if (dir > 0 && y < limite - 4) {
                        glideToY(Math.min(limite, topo + Math.min(n, k + 1) * passo));
                        return true;
                    }
                    if (dir < 0 && y > topo + 4) {
                        glideToY(Math.max(topo, topo + Math.max(0, k - 1) * passo));
                        return true;
                    }
                }
            }

            // Pula paradas que caem no mesmo ponto. Quando as últimas seções
            // somadas são menores que a tela, elas grudam todas no fim do
            // documento — o gesto era consumido sem a página sair do lugar.
            const y = Math.round(window.scrollY);
            let i = current + dir;
            while (i > 0 && i < slides.length - 1 && Math.abs(destinoDe(i) - y) < 3) i += dir;

            glideTo(i);
            return true;
        }

        // A inércia do trackpad dispara dezenas de eventos por segundo.
        // Em vez de bloquear tudo por um tempo fixo depois da animação
        // (o que engolia gestos legítimos), ignoramos só o rastro:
        // eventos colados uns nos outros são inércia, não um gesto novo.
        let ultimoWheel = -1e9;
        window.addEventListener('wheel', e => {
            if (!tallEnough()) return;
            const agora = e.timeStamp;
            const rastro = agora - ultimoWheel < 80;
            ultimoWheel = agora;
            if (animating || rastro) { e.preventDefault(); return; }
            if (Math.abs(e.deltaY) < 8) return;
            e.preventDefault();
            go(e.deltaY > 0 ? 1 : -1);
        }, { passive: false });

        // teclado
        window.addEventListener('keydown', e => {
            if (!tallEnough()) return;
            const tag = (e.target.tagName || '').toLowerCase();
            if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
            if (['ArrowDown', 'PageDown', ' '].includes(e.key)) { if (go(1) !== false) e.preventDefault(); }
            else if (['ArrowUp', 'PageUp'].includes(e.key)) { if (go(-1) !== false) e.preventDefault(); }
            else if (e.key === 'Home') { e.preventDefault(); glideTo(0); }
            else if (e.key === 'End') { e.preventDefault(); glideTo(slides.length - 1); }
        });

        // toque
        let touchY = null;
        window.addEventListener('touchstart', e => { touchY = e.touches[0].clientY; }, { passive: true });
        window.addEventListener('touchend', e => {
            if (!tallEnough() || touchY === null || animating) return;
            const delta = touchY - e.changedTouches[0].clientY;
            if (Math.abs(delta) > 45) go(delta > 0 ? 1 : -1);
            touchY = null;
        }, { passive: true });

        // links âncora usam a mesma animação
        document.querySelectorAll('a[href^="#"], a[href*="#"]').forEach(a => {
            const url = new URL(a.href, location.href);
            if (url.pathname !== location.pathname || !url.hash || url.hash === '#') return;
            a.addEventListener('click', ev => {
                const el = document.querySelector(url.hash);
                if (!el) return;
                ev.preventDefault();
                const i = slides.indexOf(el);
                if (i >= 0) glideTo(i);
                else window.scrollTo({ top: topOf(el) - HEADER, behavior: 'smooth' });
            });
        });

        /* -- HEADER SÓ NAS PONTAS --
           Aparece na primeira seção e no rodapé; some no miolo.
           No mobile ele fica sempre, senão o [ MENU ] some junto
           e não sobra nenhuma forma de navegar. */
        const footerEl = document.getElementById('footer');

        // Medidas em cache. Ler geometria dentro do listener de scroll
        // força recálculo de layout a cada quadro e engasga a rolagem.
        let alturaPrimeira = 0;
        let fimDoDocumento = 0;

        function medir() {
            alturaPrimeira = slides[0].offsetHeight;
            fimDoDocumento = document.documentElement.scrollHeight - window.innerHeight;
        }

        let aguardandoQuadro = false;

        function syncHeader() {
            if (aguardandoQuadro) return;
            aguardandoQuadro = true;
            requestAnimationFrame(() => {
                aguardandoQuadro = false;
                if (document.body.classList.contains('nav-open')) {
                    document.body.classList.remove('header-off');
                    return;
                }
                // só nas duas pontas: primeira seção à vista ou fim da página.
                // O fim é lido aqui (uma vez por quadro, dentro do rAF) porque
                // a página encolhe quando os blocos .observe aparecem.
                fimDoDocumento = document.documentElement.scrollHeight - window.innerHeight;
                const naPrimeira = window.scrollY < alturaPrimeira * 0.6;
                const noFim = window.scrollY >= fimDoDocumento - 8;
                document.body.classList.toggle('header-off', !(naPrimeira || noFim));
            });
        }

        window.addEventListener('scroll', syncHeader, { passive: true });
        window.addEventListener('resize', () => { medir(); syncHeader(); });
        // o acordeão do FAQ muda a altura da página
        document.querySelectorAll('.faq-item').forEach(d =>
            d.addEventListener('toggle', () => { medir(); syncHeader(); }));

        medir();
        syncHeader();

        current = indexInView();
    }

    /* =========================================
       5. CAROUSEL NAVIGATION (Index Only)
       ========================================= */
    const projectsGrid = document.getElementById('projects-grid');
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');

    if (projectsGrid && prevBtn && nextBtn) {
        const step = () => {
            const card = projectsGrid.querySelector('.project-card');
            if (!card) return 0;
            const gap = parseFloat(window.getComputedStyle(projectsGrid).gap) || 0;
            return card.offsetWidth + gap;
        };

        prevBtn.addEventListener('click', () => {
            projectsGrid.scrollBy({ left: -step(), behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            projectsGrid.scrollBy({ left: step(), behavior: 'smooth' });
        });
    }
});