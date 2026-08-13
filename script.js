/**
 * MARI DESIGN CO. — Vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. I18N (Bilingual System)
       ========================================= */
    const translations = {
        pt: {
            "nav.briefing": "BRIEFING",
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
            "about.row.name": "NOME",
            "about.row.field": "ÁREA",
            "about.row.based": "BASE",
            "about.row.status": "STATUS",
            "about.status.value": "DISPONÍVEL",
            "about.field.value": "DESIGN GRÁFICO",
            "about.caption": "Direção de arte e sistemas visuais",
            "footer.widget.tag": "ESTÚDIO DE DESIGN GRÁFICO<br>DESDE 2026.",
            "services.caption": "Pacotes e add-ons / 2026",
            "services.sec1": "[01] IDENTIDADE VISUAL",
            "services.sec1.tag": "PACOTES",
            "services.sec2": "[02] ADD-ONS",
            "services.sec2.tag": "AVULSOS",
            "services.sec3": "[03] PROCESSO",
            "services.sec3.tag": "FLUXO DE TRABALHO",
            "services.sec4": "[04] PERGUNTAS",
            "services.sec4.tag": "DÚVIDAS FREQUENTES",
            "services.pkg1.cap": "Sistema base",
            "services.pkg2.cap": "Sistema ampliado",
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
            "hero.country": "BRASIL",
            "hero.sub": "Estúdio independente / Desde 2026",
            "work.title": "[01] TRABALHOS SELECIONADOS",
            "work.view": "VER PROJETO →",
            "about.title": "[02] SOBRE",
            "about.text": "Trabalho entre identidade visual, editorial, impresso e digital, construindo sistemas visuais claros, consistentes e com personalidade.",
            "footer.headline": "VAMOS CRIAR<br>ALGO JUNTOS.",
            "footer.headline.services": "NÃO ENCONTROU<br>O QUE PROCURAVA?",
            "footer.cta.services": "[ PROJETO SOB MEDIDA ⟶ ]",
            "footer.widget.city": "Brasil",
            "footer.widget.weather": "28°C Limpo",
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
            "services.pkg1.name": "ID VISUAL ESSENCIAL",
            "services.pkg1.desc": "Sistema base para clareza e posicionamento.",
            "services.pkg1.item1": "+ ESTRATÉGIA E POSICIONAMENTO",
            "services.pkg1.item2": "+ LOGOTIPO PRIMÁRIO E SECUNDÁRIO",
            "services.pkg1.item3": "+ DIREÇÃO TIPOGRÁFICA E CORES",
            "services.pkg1.item4": "+ BRANDBOOK / MANUAL DA MARCA",
            "services.pkg1.item5": "+ APLICAÇÕES BÁSICAS (MOCKUPS)",
            "services.pkg2.name": "GASTRONOMIA",
            "services.pkg2.desc": "Focado em PDV, cafés e restaurantes.",
            "services.pkg2.item1": "[ TUDO DO 0.1 + ADIÇÕES ABAIXO ]",
            "services.pkg2.item2": "+ DESIGN DE CARDÁPIO (FÍSICO/DIGITAL)",
            "services.pkg2.item3": "+ EMBALAGENS E TAKEAWAY",
            "services.pkg2.item4": "+ UNIFORMES E AVENTAIS",
            "services.pkg2.item5": "+ SINALIZAÇÃO INTERNA E EXTERNA",
            "services.addon1.raw": "FOCO ABSOLUTO NO CONFORTO<br>DA LEITURA E GRID RIGOROSO.<br>- LIVROS E REVISTAS<br>- RELATÓRIOS E MANUAIS<br>- ZINES E IMPRESSOS",
            "services.addon2.raw": "A IDENTIDADE VISUAL<br>PARA MATERIAIS TATEÁVEIS.<br>- CARTAZES E POSTERS<br>- PAPELARIA CORPORATIVA<br>- EMBALAGENS CUSTOMIZADAS",
            "services.addon3.raw": "A PRESENÇA DA MARCA<br>NOS ECOSSISTEMAS DIGITAIS.<br>- INTERFACE UI/UX<br>- LANDING PAGES<br>- TEMPLATES SOCIAIS",
            "services.proc.1a": "DESCOBERTA", "services.proc.1b": "PESQUISA",
            "services.proc.2a": "ESTRATÉGIA", "services.proc.2b": "DIREÇÃO",
            "services.proc.3a": "DESIGN",     "services.proc.3b": "SISTEMA",
            "services.proc.4a": "ENTREGA",    "services.proc.4b": "MANUAL",
            "services.proc.1c": "Conversa inicial, análise do mercado e do que já existe. É daqui que sai o escopo fechado.",
            "services.proc.2c": "Posicionamento, território visual e moodboard. Você aprova a direção antes de qualquer arte.",
            "services.proc.3c": "Logo, tipografia, cores e aplicações construídos como um sistema — não peças soltas.",
            "services.proc.4c": "Arquivos organizados, manual de uso e uma call de passagem para você aplicar sozinha.",
            "services.proc.disclaimer": "ACOMPANHAMOS VOCÊ DURANTE TODO O PROCESSO —<br>NÃO APENAS ENTREGAMOS ARQUIVOS NO FINAL.",
            "services.faq1.q": "QUANTO TEMPO LEVA UM PROJETO?",
            "services.faq1.a": "GERALMENTE ENTRE 4 A 6 SEMANAS, DEPENDENDO DO PACOTE (GASTRONOMIA LEVA MAIS TEMPO).",
            "services.faq2.q": "CRIAM APENAS O LOGOTIPO AVULSO?",
            "services.faq2.a": "NÃO. UM LOGOTIPO SOZINHO NÃO SUSTENTA UMA MARCA. DESENVOLVEMOS SISTEMAS COMPLETOS.",
            "services.faq3.q": "CONDIÇÕES DE PAGAMENTO?",
            "services.faq3.a": "50% SINAL PARA RESERVA DE AGENDA, 50% NA ENTREGA FINAL DOS ARQUIVOS.",
            "services.footer.question": "Não encontrou o que precisava?",
            "services.footer.action": "PROJETO SOB MEDIDA",

            // Formulário de Briefing
            "briefing.header": "[ REQUISIÇÃO DE PROJETO ]",
            "briefing.intro": "POR FAVOR, PREENCHA OS CAMPOS ABAIXO COM O MÁXIMO DE DETALHES.<br>ISSO NOS AJUDARÁ A ENTENDER O ESCOPO E RETORNAR COM UMA PROPOSTA PRECISA.",
            "briefing.name": "NOME COMPLETO *",
            "briefing.email": "E-MAIL *",
            "briefing.company": "EMPRESA / MARCA",
            "briefing.service": "SERVIÇO DE INTERESSE *",
            "briefing.service_opt1": "[ SELECIONE ]",
            "briefing.service_opt2": "ID VISUAL ESSENCIAL",
            "briefing.service_opt3": "ID VISUAL GASTRONOMIA",
            "briefing.service_opt4": "PROJETO EDITORIAL / IMPRESSO",
            "briefing.service_opt5": "PROJETO DIGITAL / UI",
            "briefing.service_opt6": "OUTROS / PROJETO SOB MEDIDA",
            "briefing.budget": "ORÇAMENTO DISPONÍVEL",
            "briefing.message": "SOBRE O PROJETO *",
            "briefing.msg_ph": "Descreva brevemente o que você precisa, quais são os objetivos, referências e prazos...",
            "briefing.submit": "[ ENVIAR_FICHA ]"
        },
        en: {
            "nav.briefing": "BRIEFING",
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
            "work.cap.lilt": "Gastronomy / Curitiba",
            "work.cap.helena": "Psychology / Belo Horizonte",
            "about.doc": "DOCUMENTATION",
            "about.row.name": "NAME",
            "about.row.field": "FIELD",
            "about.row.based": "BASED",
            "about.row.status": "STATUS",
            "about.status.value": "AVAILABLE",
            "about.field.value": "GRAPHIC DESIGN",
            "about.caption": "Art Direction & Visual Systems",
            "footer.widget.tag": "GRAPHIC DESIGN STUDIO<br>SINCE 2026.",
            "services.caption": "Packages & Add-ons / 2026",
            "services.sec1": "[01] VISUAL IDENTITY",
            "services.sec1.tag": "PACKAGES",
            "services.sec2": "[02] ADD-ONS",
            "services.sec2.tag": "EXTRAS",
            "services.sec3": "[03] PROCESS",
            "services.sec3.tag": "WORKFLOW",
            "services.sec4": "[04] QUESTIONS",
            "services.sec4.tag": "Q&amp;A",
            "services.pkg1.cap": "Core System",
            "services.pkg2.cap": "Expanded System",
            "services.note": "NOTE",
            "proj.meta.client": "CLIENT",
            "proj.meta.services": "SERVICES",
            "proj.meta.year": "YEAR",
            "proj.meta.location": "LOCATION",
            "proj.afora.kicker": "0.1 &nbsp; VISUAL IDENTITY",
            "proj.afora.cap": "Architecture Studio / 2026",
            "proj.afora.services": "VISUAL IDENTITY",
            "proj.lilt.kicker": "0.2 &nbsp; VISUAL IDENTITY / PACKAGING",
            "proj.lilt.cap": "Gastronomy / 2026",
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
            "hero.country": "BRAZIL",
            "hero.sub": "Independent Studio / Est. 2026",
            "work.title": "[01] SELECTED WORK",
            "work.view": "VIEW PROJECT →",
            "about.title": "[02] ABOUT",
            "about.text": "I work across visual identity, editorial, print, and digital, building clear, consistent visual systems with personality.",
            "footer.headline": "LET'S WORK<br>TOGETHER.",
            "footer.headline.services": "DIDN'T FIND<br>WHAT YOU NEEDED?",
            "footer.cta.services": "[ CUSTOM PROJECT ⟶ ]",
            "footer.widget.city": "Brazil",
            "footer.widget.weather": "28°C Clear",
            "footer.status.open": "STUDIO OPEN: ONLINE",
            "footer.status.closed": "STUDIO CLOSED: BACK AT {time}",
            "project.afora.desc": "Afora is an architecture firm focused on seamlessly integrating indoor and outdoor spaces. The challenge was to create a visual identity that conveyed structural solidity while maintaining breathability and negative space. The visual system relies on rigid grids contrasted with light, airy typography.",
            "project.lilt.desc": "Lilt is a neighbourhood coffee shop working with beans from small growers. The visual system came straight off the counter: handwritten labels, batch stamps and menus that change every week. We turned that into a mono type kit, a modular seal and one-colour kraft packaging — cheap to reprint and readable from three metres away.",
            "project.helena.desc": "Helena sees adult clients in her practice and online, and arrived with nothing but an Instagram profile. The identity had to feel welcoming without falling into the green-leaf-and-script cliché. We built a monogram from two curves that approach without touching, a calm editorial grid for long-form text, and a post kit she updates herself — all in a neutral two-tone palette.",

            // Raw Services Texts
            "services.label": "( SERVICES )",
            "briefing.title": "BRIEFING",
            "services.giant1": "VISUAL",
            "services.giant2": "SYSTEMS",
            "services.intro.raw": "WE DON'T JUST MAKE LOGOS.<br>WE BUILD SYSTEMS THAT SCALE.<br>GRID. TYPE. CONTRAST.<br>EVERYTHING INTENTIONAL.<br>NOTHING SUPERFLUOUS.",
            "services.pkg.btn": "[ START PROJECT ⟶ ]",
            "services.pkg1.name": "ESSENTIAL VISUAL ID",
            "services.pkg1.desc": "Core system for clarity and positioning.",
            "services.pkg1.item1": "+ STRATEGY & POSITIONING",
            "services.pkg1.item2": "+ PRIMARY & SECONDARY LOGO",
            "services.pkg1.item3": "+ TYPOGRAPHIC & COLOR DIRECTION",
            "services.pkg1.item4": "+ BRANDBOOK / GUIDELINES",
            "services.pkg1.item5": "+ BASIC APPLICATIONS (MOCKUPS)",
            "services.pkg2.name": "GASTRONOMY ID",
            "services.pkg2.desc": "Focused on POS, cafes and restaurants.",
            "services.pkg2.item1": "[ EVERYTHING IN 0.1 + ADDITIONS BELOW ]",
            "services.pkg2.item2": "+ PHYSICAL / DIGITAL MENU DESIGN",
            "services.pkg2.item3": "+ PACKAGING & TAKEAWAY",
            "services.pkg2.item4": "+ UNIFORMS & APRONS",
            "services.pkg2.item5": "+ INDOOR & OUTDOOR SIGNAGE",
            "services.addon1.raw": "ABSOLUTE FOCUS ON READING<br>COMFORT AND STRICT GRIDS.<br>- BOOKS & MAGAZINES<br>- REPORTS & MANUALS<br>- ZINES & PRINTS",
            "services.addon2.raw": "EXTENDING YOUR IDENTITY<br>TO TACTILE MATERIALS.<br>- POSTERS & PRINTS<br>- CORPORATE STATIONERY<br>- CUSTOM PACKAGING",
            "services.addon3.raw": "YOUR BRAND'S PRESENCE<br>IN DIGITAL ECOSYSTEMS.<br>- INTERFACE UI/UX<br>- LANDING PAGES<br>- SOCIAL TEMPLATES",
            "services.proc.1a": "DISCOVERY", "services.proc.1b": "RESEARCH",
            "services.proc.2a": "STRATEGY",  "services.proc.2b": "DIRECTION",
            "services.proc.3a": "DESIGN",    "services.proc.3b": "SYSTEM",
            "services.proc.4a": "HANDOFF",   "services.proc.4b": "GUIDELINES",
            "services.proc.1c": "Kickoff call, market read and an audit of what already exists. This is where the scope gets locked.",
            "services.proc.2c": "Positioning, visual territory and moodboard. You sign off on direction before any artwork.",
            "services.proc.3c": "Logo, type, colour and applications built as one system — not loose pieces.",
            "services.proc.4c": "Organised files, a usage manual and a handoff call so you can run it on your own.",
            "services.proc.disclaimer": "WE'RE IN IT WITH YOU THE WHOLE WAY —<br>NOT JUST DROPPING OFF FILES AT THE END.",
            "services.faq1.q": "HOW LONG DOES A PROJECT TAKE?",
            "services.faq1.a": "USUALLY BETWEEN 4 TO 6 WEEKS, DEPENDING ON THE PACKAGE (GASTRONOMY TAKES LONGER).",
            "services.faq2.q": "DO YOU DESIGN JUST THE LOGO?",
            "services.faq2.a": "NO. WE BELIEVE A LOGO ALONE CANNOT SUSTAIN A BRAND. WE DEVELOP COMPLETE SYSTEMS.",
            "services.faq3.q": "WHAT ARE THE PAYMENT TERMS?",
            "services.faq3.a": "50% DEPOSIT TO RESERVE YOUR SPOT, 50% UPON FINAL DELIVERY OF FILES.",
            "services.footer.question": "Didn't find what you needed?",
            "services.footer.action": "CUSTOM PROJECT",

            // Briefing Form
            "briefing.header": "[ PROJECT INQUIRY ]",
            "briefing.intro": "PLEASE FILL OUT THE FIELDS BELOW WITH AS MUCH DETAIL AS POSSIBLE.<br>THIS WILL HELP US UNDERSTAND THE SCOPE AND RETURN AN ACCURATE PROPOSAL.",
            "briefing.name": "FULL NAME *",
            "briefing.email": "E-MAIL *",
            "briefing.company": "COMPANY / BRAND",
            "briefing.service": "SERVICE OF INTEREST *",
            "briefing.service_opt1": "[ SELECT ]",
            "briefing.service_opt2": "ESSENTIAL VISUAL ID",
            "briefing.service_opt3": "GASTRONOMY VISUAL ID",
            "briefing.service_opt4": "EDITORIAL / PRINT PROJECT",
            "briefing.service_opt5": "DIGITAL / UI PROJECT",
            "briefing.service_opt6": "OTHER / CUSTOM PROJECT",
            "briefing.budget": "AVAILABLE BUDGET",
            "briefing.message": "ABOUT THE PROJECT *",
            "briefing.msg_ph": "Briefly describe what you need, goals, references, and deadlines...",
            "briefing.submit": "[ SUBMIT_FILE ]"
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

    if (slides.length > 1) {
        slides.forEach(el => el.classList.add('slide-section'));
        document.body.classList.add('slides-on');
        document.documentElement.dataset.slides = slides.length;
        document.documentElement.style.scrollSnapType = 'none';
        document.documentElement.style.scrollBehavior = 'auto';

        const HEADER = parseInt(getComputedStyle(document.documentElement)
            .getPropertyValue('--header-height'), 10) || 76;

        let animating = false;
        let current = 0;

        const topOf = el => el.getBoundingClientRect().top + window.scrollY;
        const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

        function indexInView() {
            const y = window.scrollY + window.innerHeight * 0.35;
            let idx = 0;
            slides.forEach((el, i) => { if (topOf(el) <= y) idx = i; });
            return idx;
        }

        // easing suave nas duas pontas
        const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

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
                    setTimeout(() => { animating = false; }, 220);
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
            if (el.offsetHeight <= window.innerHeight + 4) return false;
            return dir > 0
                ? window.scrollY + window.innerHeight < bottom - 4
                : window.scrollY > top + 4;
        }

        const destinoDe = i => Math.min(Math.max(0, topOf(slides[i])), maxScroll());

        function go(dir) {
            if (animating) return;
            current = indexInView();
            if (canScrollInside(dir)) return false;   // deixa o scroll nativo agir

            // Pula paradas que caem no mesmo ponto. Quando as últimas seções
            // somadas são menores que a tela, elas grudam todas no fim do
            // documento — o gesto era consumido sem a página sair do lugar.
            const y = Math.round(window.scrollY);
            let i = current + dir;
            while (i > 0 && i < slides.length - 1 && Math.abs(destinoDe(i) - y) < 3) i += dir;

            glideTo(i);
            return true;
        }

        window.addEventListener('wheel', e => {
            if (!tallEnough()) return;
            if (animating) { e.preventDefault(); return; }
            if (Math.abs(e.deltaY) < 8) return;
            const dir = e.deltaY > 0 ? 1 : -1;
            if (canScrollInside(dir)) return;         // rola por dentro, sem travar
            e.preventDefault();
            go(dir);
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