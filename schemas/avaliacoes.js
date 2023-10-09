export default {
    name: 'avaliacao',
    type: 'document',
    title: 'Cadastro de avaliacoes',
    fields: [
        {
            name: 'nome',
            title: 'Nome avaliador',
            type: 'string'
        },
        {
            name: 'nota',
            title: 'Nota',
            type: 'string'
        },
        {
            name: 'perfil_insta',
            title: 'Perfil do Instagram',
            type: 'string'
        },
        {
            name: 'texto',
            title: 'Texto da avaliação',
            type: 'string'
        }
    ]
}