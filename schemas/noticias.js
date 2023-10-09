export default {
    name: 'noticias',
    type: 'document',
    title: 'Cadastro de noticias',
    fields: [
        {
            name: 'img_noticia',
            title: 'Imagem da noticia',
            type: 'image'
        },
        {
            name: 'link_noticia',
            title: 'Link',
            type: 'url'
        }
    ]
}