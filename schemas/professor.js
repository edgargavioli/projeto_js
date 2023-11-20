export default {
    name: 'professor',
    type: 'document',
    title: 'Cadastro de professores',
    fields: [
        {
            name: 'nome',
            type: 'string',
            title: 'Nome Completo'
        },
        {
            name: 'imagemProfessor',
            type: 'image',
            title: 'Imagem do professor',
        },
        {
            name: 'disciplina',
            type: 'string',
            title: 'Disciplina'
        }
    ]
}
