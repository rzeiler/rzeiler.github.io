var childProcess = require('child_process');
var globalNodeModules = childProcess.execSync('npm root -g').toString().trim();

module.exports = {
    title: "Woodhead (Sh)ort Bl(og) Live",
    description: "woodhead recording",
    head: [
        ["link", {
            rel: "icon",
            href: "/logo.png"
        }]
    ],
    search: true,
    searchMaxSuggestions: 10,
    base: "/",
    dest: "build",
    themeConfig: {
        copy: 'Copyright &copy; woodhead-recording 2019',
        contact: 'rze.app.feedback@gmail.com',
        social: [{
                name: 'GITLAB',
                link: 'https://gitlab.com/rze_dev/',
                svg: '/gitlab-logo-white.svg'
            },
            {
                name: 'GITHUB',
                link: 'https://github.com/rzeiler',
                svg: '/github-logo-white.svg'
            }
        ],
        nav: [{
                text: "GIT",
                link: "/git"
            },{
                text: "Code",
                link: "/blog/vs2017_iis10"
            },{
                text: 'Apps',
                link: '/applikationen/'
            },
            {
                text: "Reisen",
                link: "/reisen/Col_de_Lauzet"
            },
            {
                text: "Kontakt",
                link: "/kontakt"
            }
        ],
        sidebar: {
            
            '/blog/': [{
                title: 'Code',
                collapsable: false,
                children: [
                    ['tsql_update_inner_join_where', 'T-Sql Update mit Inner Join'],
                    ['entity_framework_new_transaction_is_not_allowed', 'FIX New transaction is not allowed'],
                    ['nativefilesystemapi', 'Native File System API'],
                    ['supported_linq_error', 'LINQ - Only primitive types or enumeration types are supported in this context'],
                    ['vs2017_iis10', 'Visual Studio und IIS 10 Einrichtung'],
                    ['vuepress_global_node_module', 'vuepress und Globale Module'],
                    ['angaulrjsaspnetwcf', 'Angaulrjs ASP.NET WCF SERVICE - EXAMPLE'],
                    ['angularselectmaterialize', 'Angular 5 und Materialize Select Problem'],
                    ['composerubuntu', 'So installierst du Composer auf Ubuntu 16.04'],
                    ['directive', 'AngularJS Dynamische Directive'],
                    ['electronnpm', 'Atom & Electron'],
                    ['git', 'Ubuntu und Git und Gui'],
                    ['spipuhtml2pdf', 'Html2Pdf / Datei kann nicht gespeichert werden!'],
                    ['sqlfunction', 'Erstellen einer T-SQL Funktion und erteilen der Berechtigung'],
                    ['sqlwhileloop', 'T-SQL WHILE LOOP - Example'],
                    ['swiftmailergmail', 'Swiftmailer und Gmail'],
                    ['unobtrusive', 'ASP.NET MVC Eingabe Prüfung'],
                    ['xdebug', 'Atom PHP Xdebug']
                ]
            }],
            '/reisen/': [{
                title: 'Reisen',
                collapsable: true,
                children: [
                    ['Col_de_Someiller', 'Col de Someiller Italien'],
                    ['Col_de_Lauzet', 'Col de Lauzet'],
                    ['Col_de_Valbelle', 'Col de Valbelle'],
                    ['Col_du_Parpaillon', 'Col du Parpaillon'],
                    ['GPS_Track_BMW_Adventure_Tour_Andalusien', 'Adventure Tour Andalusien'],
                    ['Mont_Jafferau', 'Mont Jafferau'],
                    ['MRTV_Kurvenrausch_Almeria_1', 'Almeria']
                ]
            }]
        },
        /*lastUpdated: 'Last Updated'*/
    },

    markdown: {
        // options for markdown-it-anchor
        anchor: {
            permalink: false
        },
        lineNumbers: true,
        config: md => {
            md.use(require(globalNodeModules + "/markdown-it-katex"));
        }
    },

    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // mutate config for production...
            //config.output.publicPath = "/dhj37u";
        } else {
            // mutate for development...
        }
    }
};