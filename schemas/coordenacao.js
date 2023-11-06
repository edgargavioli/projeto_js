export default {
    name: 'coordenacao',
    type: 'document',
    title: 'Cadastro de Cordenador',
    fields: [
        {
            name: 'nome',
            title: 'Nome do coordenador',
            type: 'string'
        },
        {
            name: 'imagem',
            title: 'Imagem coordenador',
            type: 'image',
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
        }
    ]
}