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
            name: 'imagem_professor',
            type: 'image',
            title: 'Imagem do professor',
            validation: Rule => Rule.custom(file =>{
                if(!file.asset){
                    return 'Nenhuma imagem selecionada'
                }
                if(file.asset){
                    const {width, height} = Image.asset.metadata.dimensions
                    if(width !== 360 || height !== 360 && Image.asset.size > 10000){
                        return 'Tamanho de imagem inválido, 360x360px é o tamanho ideal'
                    }
                }
                return true
            })
        },
        {
            name: 'disciplina',
            type: 'string',
            title: 'Disciplina'
        }
    ]
}
